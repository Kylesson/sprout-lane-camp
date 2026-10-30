// Writes the CJK characters drawn in bold/display (-> Huninn) and regular (-> Noto 400) text, zh mode. Usage: node tools/cjk-chars.js [url]
const {chromium}=require('C:/Sites/_tools/pw/node_modules/playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch({channel:'chrome'});const p=await b.newPage({locale:'zh-TW'});
await p.goto(process.argv[2]||'http://localhost:5500/');
const r=await p.evaluate(()=>{const bold=new Set(),reg=new Set();
  // reveal everything that can show text later: hidden panels, other tab, demo notes, errors
  document.querySelectorAll('[hidden]').forEach(e=>e.hidden=false);document.querySelectorAll('details').forEach(d=>d.open=true);
  const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;
  while(n=w.nextNode()){const cs=getComputedStyle(n.parentElement);const heavy=+cs.fontWeight>=600||cs.fontFamily.startsWith('Fredoka');
    for(const c of n.textContent)if(c.codePointAt(0)>0x2000)(heavy?bold:reg).add(c);}
  return {bold:[...bold].join(''),reg:[...reg].join('')};});
// strings only set from JS (errors, done text, plan names, demo note, title) can land in either
const js=fs.readFileSync('main.js','utf8').match(/zh:\{[\s\S]*?\n  en:/)[0];const extra=[...new Set([...js].filter(c=>c.codePointAt(0)>0x2000))].join('');
fs.writeFileSync('_raw/fonts/bold.txt',r.bold+extra);fs.writeFileSync('_raw/fonts/reg.txt',r.reg+extra);
console.log('bold',new Set(r.bold+extra).size,'regular',new Set(r.reg+extra).size);await b.close();})();
