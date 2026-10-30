// Functional checks at 390x650. Usage: node tools/func-test.js [url]
const {chromium}=require('C:/Sites/_tools/pw/node_modules/playwright');
const ok=(c,m)=>{console.log((c?'PASS ':'FAIL ')+m);if(!c)process.exitCode=1;};
(async()=>{const b=await chromium.launch({channel:'chrome'});
const URL=process.argv[2]||'http://localhost:5500/';
const p=await b.newPage({viewport:{width:390,height:650},locale:'zh-TW'});
const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>['error','assert'].includes(m.type())&&errs.push(m.text()));
await p.goto(URL);await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(900);
ok(await p.evaluate(()=>document.documentElement.lang)==='zh-Hant','zh-TW browser opens in zh-Hant');
ok(await p.evaluate(()=>[...document.querySelectorAll('.hero h1,.facts')].every(e=>{const r=e.getBoundingClientRect();return r.left>=0&&r.right<=innerWidth;})),'hero headline and facts inside 390px');
ok(await p.evaluate(()=>{const h=document.querySelector('.hero h1');return Math.round(h.getBoundingClientRect().height/parseFloat(getComputedStyle(h).lineHeight))<=2;}),'zh headline is 2 lines max');
ok(await p.evaluate(()=>[...document.querySelectorAll('.bar .btn,.mark')].every(e=>e.getBoundingClientRect().height<=48)),'header items stay on one line');
const cta=await p.locator('.hero .btn').boundingBox();ok(cta.y+cta.height<=650,'hero CTA visible at 390x650 (bottom '+Math.round(cta.y+cta.height)+')');
ok(await p.isHidden('#done'),'success panel hidden at start');
// tabs
ok(await p.locator('#slots .o').first().isHidden(),'6-8 tab hides 9-11 slots');
await p.click('#tab-y');await p.keyboard.press('ArrowRight');
ok(await p.getAttribute('#tab-o','aria-selected')==='true'&&await p.locator('#slots .o').first().isVisible(),'arrow key moves to 9-11 and shows its slots');
// plan -> form
await p.click('[data-pick=care]');await p.waitForTimeout(1200);
ok(await p.isChecked('[name=plan][value=care]'),'Choose on after-care pre-selects it');
ok((await p.textContent('#sum-price'))==='NT$19,800','summary shows NT$19,800');
ok(await p.evaluate(()=>document.querySelector('.row[data-plan=care]').classList.contains('picked')),'picked row gets the stamp');
// validation
await p.click('#form button[type=submit]');
ok(await p.evaluate(()=>document.activeElement.id)==='f-child','focus moves to first error');
ok((await p.textContent('#e-phone')).includes('手機'),'phone error in zh');
await p.fill('#f-phone','02 2345 6789');await p.locator('#f-phone').blur();ok(await p.getAttribute('#f-phone','aria-invalid')==='true','landline rejected on blur');
// switch to EN mid-form
await p.click('#lang');await p.waitForTimeout(300);
ok(await p.evaluate(()=>document.documentElement.lang)==='en','switch to EN');
ok((await p.textContent('#e-phone')).startsWith('Enter a mobile'),'error re-translated to EN');
ok((await p.textContent('#sum-plan'))==='Full day + after-care','summary keeps plan after switch');
ok(await p.evaluate(()=>{const h=document.querySelector('.hero h1');const r=h.getBoundingClientRect();return r.right<=innerWidth&&Math.round(r.height/parseFloat(getComputedStyle(h).lineHeight))<=2;}),'EN headline fits in 2 lines');
ok((await p.getAttribute('#lang','aria-label'))==='切換成中文','switch button now offers 中文');
// submit
await p.fill('#f-child','Mia');await p.selectOption('#f-age','7');await p.fill('#f-parent','Ann Lee');
await p.fill('#f-phone','0912-345-678');await p.fill('#f-email','ann@example.com');await p.check('#f-consent');
// FormSubmit is stubbed so tests never email the inbox: first a failure, then a success
let sent=null;await p.route('**/formsubmit.co/**',r=>r.fulfill({status:500,body:'{}'}));
await p.click('#form button[type=submit]');await p.waitForTimeout(500);
ok(await p.isVisible('#form')&&(await p.textContent('#e-send')).startsWith('It didn'),'send failure keeps the form and says so');
await p.unroute('**/formsubmit.co/**');await p.route('**/formsubmit.co/**',r=>{sent=r.request().postDataJSON();r.fulfill({status:200,contentType:'application/json',body:'{"success":"true"}'});});
await p.click('#form button[type=submit]');await p.waitForTimeout(500);
ok(sent&&sent.child==='Mia'&&sent.plan==='Full day + after-care'&&sent.phone==='0912-345-678'&&/^SL-/.test(sent.ref),'payload has child, plan, phone, ref');
ok(await p.isVisible('#done')&&await p.isHidden('#form'),'success panel replaces the form');
ok(/Full day \+ after-care spot for Mia/.test(await p.textContent('#done-text')),'done text: '+await p.textContent('#done-text'));
ok(/^SL-[A-Z0-9]{4}$/.test(await p.textContent('#done-ref')),'ref code '+await p.textContent('#done-ref'));
await p.click('#lang');ok((await p.textContent('#done-text')).includes('Mia'),'done text re-translated: '+await p.textContent('#done-text'));
// LINE demo
await p.click('.where-t [data-demo]');ok((await p.textContent('.where-t [data-demo-note]')).length>0,'LINE button shows demo note');
// dock
await p.evaluate(()=>scrollTo({top:1600,behavior:'instant'}));await p.waitForTimeout(700);ok(await p.evaluate(()=>document.getElementById('dock').classList.contains('on')),'dock shows mid-page');
await p.evaluate(()=>document.getElementById('signup').scrollIntoView({behavior:'instant'}));await p.waitForTimeout(700);ok(await p.evaluate(()=>!document.getElementById('dock').classList.contains('on')),'dock hides at the form');
// persistence + no horizontal scroll
await p.click('#lang');await p.reload();await p.waitForTimeout(300);ok(await p.evaluate(()=>document.documentElement.lang)==='en','EN remembered after reload');
ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'no horizontal scroll');
const real=errs.filter(e=>!e.includes('status of 500'));ok(real.length===0,'no console errors (besides the stubbed 500) '+real.join('|'));
await b.close();})();
