(() => {
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const calm = matchMedia('(prefers-reduced-motion: reduce)');

// zh-Hant lives in the HTML; EN here. zh is read back from the DOM on first switch.
const EN = {
  skip:'Skip to the sign-up form', brand:'Sprout Lane English', home:'Sprout Lane English, back to top', signup:'Sign up',
  h1:'Two weeks to speak up in English',
  facts:'<span>20-31 Jan 2027</span> · <span>Ages 6-11</span> · <span>Da\'an, Taipei</span> · <span>from NT$9,800</span>',
  altCrafts:'Children sitting together on the floor with books and crafts', altReading:'A child\'s hand on an English picture book',
  altBlocks:'A girl stacking coloured blocks', altLunch:'Lunch boxes with sandwiches, fruit and vegetables',
  altCrafts2:'Children reading and talking together', altBlocks2:'A child building a project with blocks',
  glanceH:'Camp at a glance',
  tDates:'Dates', tDatesV:'20-31 Jan', tDatesL:'Monday to Friday, 10 days',
  tHours:'Hours', tHoursV:'Half or full day', tHoursL:'Half day 9:00-12:00, full day 9:00-16:00, after-care until 18:00',
  tGroup:'Small groups', tGroupV:'Max 8 kids', tGroupL:'Ages 6-8 and 9-11 learn apart',
  tLevel:'Level', tLevelV:'Beginners welcome', tLevelL:'A 5-minute chat on day one sets the group',
  outH:'What your child takes home',
  o1h:'Week 1: speaks up', o1p:'Every morning in circle time, each child says one small thing in English. By Friday, most kids put their hand up on their own.',
  o2h:'Reads a whole little book', o2p:'Each child picks an English reader at the right level, finishes it with a teacher over two weeks, and takes it home.',
  o3h:'Last day: presents on stage', o3p:'On the afternoon of 31 Jan, kids present their own project in English. Each child can bring 2 family members.',
  dayH:'A day at camp', dayP:'Most of the day is speaking, reading and making things, all in English. This is the Monday to Thursday plan; Friday afternoon is show and tell.',
  ageTabs:'Age group', ageY:'Ages 6-8', ageO:'Ages 9-11',
  s1:'Morning circle', s1p:'Hello, today\'s weather and how we feel',
  s2y:'Phonics games', s2yp:'Letter sounds with cards and hopscotch',
  s2o:'Word detectives', s2op:'Find clues in a short text to guess new words',
  s3:'Snack and outdoor break', s3p:'Snack, water and a run in the rooftop garden',
  s4y:'Story time', s4yp:'The teacher tells a story, the kids act it out',
  s4o:'Book club', s4op:'Read your own book in pairs, then ask each other questions',
  s5y:'Songs and movement', s5yp:'Sing and move with this week\'s sentences',
  s5o:'Speaking games', s5op:'Describe, guess and run mini interviews in English',
  half:'Half day ends here, pickup at 12:00',
  s6:'Lunch and quiet time', s6p:'Lunch with the teachers, then books or a rest',
  s7y:'Crafts in English', s7yp:'Follow English steps to make something, and talk while you work',
  s7o:'Project time', s7op:'Build the project for the last-day show',
  s8:'Outdoor play', s8p:'Group games, in the classroom if it rains',
  s9:'Show and tell', s9p:'Everyone shares one thing they learned today',
  s10:'Full day pickup, after-care starts', s10p:'After-care: homework, board games and free reading until 18:00',
  teaH:'Who is with your child', teaP:'Max 8 kids per group, with 2 teachers.',
  t1n:'Ms Lin Yi-chen', t1r:'Lead teacher, ages 6-8', t1p:'8 years teaching ages 6-10. Good at getting shy kids talking.', t1l:'Mandarin, English',
  t2n:'Mr Daniel Price', t2r:'Lead teacher, ages 9-11', t2p:'From Vancouver, Canada. 6 years in Taipei classrooms.', t2l:'English, everyday Mandarin',
  t3n:'Ms Chang Hsin-yu', t3r:'Camp lead and after-care', t3p:'Your contact for pickup, sick days and LINE questions.', t3l:'Mandarin, English',
  teaSafe:'All teachers have passed a police record check and hold first-aid training [client to confirm]',
  planH:'<em>Full day</em> is the best value', planP:'Full day adds lunch, the afternoon crafts and project time. It costs less per hour than half day, and kids get to finish their project.',
  pHalf:'Half day', pFull:'Full day', pCare:'Full day + after-care', best:'Best value', choose:'Choose', picked:'Picked',
  incl:'Prices are for all 10 days. Every plan includes snacks and materials; full day includes lunch.',
  sib:'Signing up siblings? NT$1,000 off the second child.',
  regH:'Sign up for Winter Camp', regP:'About 1 minute. We call you within 1 working day to confirm, and you pay after that.',
  fChild:'Child\'s name', fAge:'Child\'s age', fAgePick:'Choose', fParent:'Parent\'s name', fPhone:'Mobile number', fEmail:'Email',
  fPlan:'Plan', fNotes:'Allergies or anything the teachers should know', opt:'(optional)',
  fConsent:'I agree that these details are used only for this sign-up and to contact me.',
  send:'Send sign-up', demo:'Demo form: nothing is sent or stored.',
  doneH:'Got it!', doneRef:'Sign-up number', doneDemo:'Demo: nothing was sent.',
  sumH:'Your plan', sumNone:'No plan picked yet', sumMeta:'20-31 Jan · Mon to Fri · Da\'an, Taipei',
  mapLabel:'Sketch map: 3 minutes on foot from exit 6 of MRT Da\'an Station',
  whereH:'Where we are', addr:'Da\'an District, Taipei (sample address), 3 minutes on foot from exit 6 of MRT Da\'an Station.',
  pk1h:'Pickup', pk1:'Half day 12:00, full day 16:00, after-care by 18:00.',
  pk2h:'Safety', pk2:'We only hand children to the family members named on the form. Tell us on LINE first if someone else is coming.',
  line:'Ask on LINE',
  faqH:'Parents ask',
  q1:'Can I get a refund?', a1:'Cancel 7 days before camp starts for a full refund. After that, we refund half of the days not yet attended.',
  q2:'What if my child is sick?', a2:'Tell us on LINE by 8:30 that morning. Sick days are not refunded, but the teacher packs that day\'s book and craft so your child can do it at home.',
  q3:'What\'s for lunch? What about allergies?', a3:'A local lunch-box shop delivers every day, with a vegetarian choice. Write any allergies on the form and the teachers check at every meal.',
  q4:'My child has never learned English. Is that OK?', a4:'Yes. On day one the teacher chats with each child for 5 minutes and sets the groups. There is no test.',
  q5:'What should we bring?', a5:'A water bottle, indoor shoes and a change of clothes. We provide all books and materials.',
  q6:'Can parents come to the last-day show?', a6:'Yes. It starts at 15:00 on 31 Jan and takes about 40 minutes. Each child can bring 2 family members.',
  finalH:'8 kids per group, no more', finalP:'After you sign up we call to confirm, and you only pay after that.',
  footAddr:'Da\'an District, Taipei (sample address) · Winter Camp 2027',
  disc:'Concept project. The school, teachers and prices are invented, and the form sends nothing. Photos from Pexels.',
  dockT:'Winter Camp · from NT$9,800', dockL:'Quick sign-up',
};
const MSG = {
  zh:{child:'請填孩子的名字。', age:'請選孩子的年齡。', parent:'請填家長姓名。', phone:'請填手機號碼，例如 0912 345 678。',
      email:'請填 email，例如 name@example.com。', plan:'請選一個方案。', consent:'請勾選同意後再送出。',
      done:(c, p) => `我們已為${c}保留${p}的名額，會在 1 個工作天內打電話給你。`,
      plans:{half:'半天班', full:'全天班', care:'全天＋課後照顧'}, from:'NT$9,800 起', demo:'示範按鈕：還沒有連結 LINE 帳號。',
      lang:'EN', langCode:'en', langLabel:'Switch to English', title:'豆芽巷美語 寒假英語營 2027 · Sprout Lane English Winter Camp'},
  en:{child:'Please enter your child\'s name.', age:'Please choose your child\'s age.', parent:'Please enter your name.',
      phone:'Enter a mobile number like 0912 345 678.', email:'Enter an email like name@example.com.', plan:'Please choose a plan.',
      consent:'Please tick the box to continue.',
      done:(c, p) => `We're holding a ${p} spot for ${c} and will call you within 1 working day.`,
      plans:{half:'Half day', full:'Full day', care:'Full day + after-care'}, from:'from NT$9,800', demo:'Demo button: no LINE account is linked yet.',
      lang:'中文', langCode:'zh-Hant', langLabel:'切換成中文', title:'Sprout Lane English Winter Camp 2027 · Da\'an, Taipei'},
};
const PRICE = {half:9800, full:16800, care:19800};
const ZH = {}, ZH_ALT = {}, ZH_LABEL = {};
$$('[data-i18n]').forEach(e => { ZH[e.dataset.i18n] ??= e.innerHTML; });
$$('[data-i18n-alt]').forEach(e => { ZH_ALT[e.dataset.i18nAlt] ??= e.alt; });
$$('[data-i18n-label]').forEach(e => { ZH_LABEL[e.dataset.i18nLabel] ??= e.getAttribute('aria-label'); });
let lang = 'zh';
const T = () => MSG[lang];

/* language */
function setLang(l){
  lang = l;
  const en = l === 'en';
  document.documentElement.lang = en ? 'en' : 'zh-Hant';
  document.title = T().title;
  $$('[data-i18n]').forEach(e => { const k = e.dataset.i18n; e.innerHTML = en ? (EN[k] ?? ZH[k]) : ZH[k]; });
  $$('[data-i18n-alt]').forEach(e => { const k = e.dataset.i18nAlt; e.alt = en ? EN[k] : ZH_ALT[k]; });
  $$('[data-i18n-label]').forEach(e => { const k = e.dataset.i18nLabel; e.setAttribute('aria-label', en ? EN[k] : ZH_LABEL[k]); });
  const b = $('#lang'); b.textContent = T().lang; b.lang = T().langCode; b.setAttribute('aria-label', T().langLabel);
  $$('.err').forEach(e => { if (e.textContent) e.textContent = T()[e.dataset.k]; });
  $$('[data-demo-note]').forEach(e => { if (e.textContent) e.textContent = T().demo; });
  if (!$('#done').hidden) doneText();
  summary();
  try { localStorage.setItem('sl-lang', l); } catch {}
}
$('#lang').addEventListener('click', () => setLang(lang === 'en' ? 'zh' : 'en'));

/* schedule tabs */
const tabs = $$('[role=tab]'), slots = $('#slots');
function pick(t){
  tabs.forEach(x => { const on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; });
  slots.dataset.show = t.dataset.show; slots.setAttribute('aria-labelledby', t.id);
  slots.classList.remove('swap'); void slots.offsetWidth; slots.classList.add('swap');
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => pick(t));
  t.addEventListener('keydown', e => {
    const j = {ArrowRight:i+1, ArrowLeft:i-1, Home:0, End:tabs.length-1}[e.key];
    if (j === undefined) return;
    e.preventDefault(); const n = tabs[(j + tabs.length) % tabs.length]; pick(n); n.focus();
  });
});

/* outcome path draws once when it scrolls in */
const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add('drawn'); io.unobserve(x.target); } }), {rootMargin:'0px 0px -20% 0px'});
$$('.path').forEach(p => io.observe(p));

/* plans -> form, with the stamp as the "your choice was recorded" moment */
const form = $('#form'), F = form.elements;
$$('[data-pick]').forEach(b => b.addEventListener('click', () => {
  const v = b.dataset.pick, r = form.querySelector(`[name=plan][value=${v}]`);
  r.checked = true; summary(); clearErr('plan');
  const s = $(`.row[data-plan=${v}] .stamp`);
  if (!calm.matches) s.animate([{transform:'rotate(-10deg) scale(1.15)', filter:'blur(4px)', opacity:0}, {transform:'rotate(-10deg) scale(1)', filter:'blur(0)', opacity:1}], {duration:500, easing:'cubic-bezier(.16,1,.3,1)'});
  setTimeout(() => { $('#signup').scrollIntoView({behavior: calm.matches ? 'auto' : 'smooth'}); r.focus({preventScroll:true}); }, calm.matches ? 0 : 450);
}));
const money = n => 'NT$' + n.toLocaleString('en-US');
function summary(){
  const p = F.plan.value;
  $$('.row').forEach(r => r.classList.toggle('picked', r.dataset.plan === p));
  $('#sum-plan').textContent = p ? T().plans[p] : (lang === 'en' ? EN.sumNone : ZH.sumNone);
  $('#sum-price').textContent = p ? money(PRICE[p]) : T().from;
}
form.addEventListener('change', e => {
  if (e.target.name === 'plan') { summary(); clearErr('plan'); }
  if (e.target.name === 'age' && e.target.value) clearErr('age');
  if (e.target.name === 'consent' && e.target.checked) clearErr('consent');
});

/* validation */
const phoneOk = v => /^(09\d{8}|\+?8869\d{8})$/.test(v.replace(/[\s-]/g, ''));
console.assert(phoneOk('0912 345 678') && phoneOk('0912-345-678') && phoneOk('+886912345678') && !phoneOk('02 2345 6789') && !phoneOk('0912'), 'phone check');
const CHECK = {
  child: () => F.child.value.trim().length > 0,
  age: () => !!F.age.value,
  parent: () => F.parent.value.trim().length > 1,
  phone: () => phoneOk(F.phone.value),
  email: () => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(F.email.value.trim()),
  plan: () => !!F.plan.value,
  consent: () => F.consent.checked,
};
const FIELD = {child:'#f-child', age:'#f-age', parent:'#f-parent', phone:'#f-phone', email:'#f-email', plan:'[name=plan]', consent:'#f-consent'};
function setErr(k){
  const e = $('#e-' + k); e.dataset.k = k; e.textContent = T()[k];
  $$(FIELD[k], form).forEach(i => i.setAttribute('aria-invalid', 'true'));
}
function clearErr(k){ $('#e-' + k).textContent = ''; $$(FIELD[k], form).forEach(i => i.removeAttribute('aria-invalid')); }
['child', 'parent', 'phone', 'email'].forEach(k => {
  const i = $(FIELD[k]);
  i.addEventListener('blur', () => { if (i.value) CHECK[k]() ? clearErr(k) : setErr(k); });
  i.addEventListener('input', () => { if (i.hasAttribute('aria-invalid') && CHECK[k]()) clearErr(k); });
});
const doneText = () => { $('#done-text').textContent = T().done(F.child.value.trim(), T().plans[F.plan.value]); };
form.addEventListener('submit', e => {
  e.preventDefault();
  const bad = Object.keys(CHECK).filter(k => !CHECK[k]());
  Object.keys(CHECK).forEach(k => bad.includes(k) ? setErr(k) : clearErr(k));
  if (bad.length) return $(FIELD[bad[0]], form).focus();
  doneText();
  $('#done-ref').textContent = 'SL-' + Array.from(crypto.getRandomValues(new Uint8Array(4)), b => '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'[b % 32]).join('');
  form.hidden = true; const d = $('#done'); d.hidden = false; d.focus();
});

/* LINE buttons have no real account yet */
$$('[data-demo]').forEach(a => a.addEventListener('click', e => {
  e.preventDefault(); a.closest('.where-t, .final-t').querySelector('[data-demo-note]').textContent = T().demo;
}));

/* phone dock: visible after the hero, hidden while the form is on screen */
const dock = $('#dock'), seen = {hero:true, form:false};
const dockIO = new IntersectionObserver(es => {
  es.forEach(x => { seen[x.target.id === 'signup' ? 'form' : 'hero'] = x.isIntersecting; });
  dock.classList.toggle('on', !seen.hero && !seen.form);
});
dockIO.observe($('.hero')); dockIO.observe($('#signup'));

/* init */
let saved = null;
try { saved = localStorage.getItem('sl-lang'); } catch {}
const start = saved || (/^zh/i.test(navigator.language) ? 'zh' : 'en');
start === 'en' ? setLang('en') : summary();
})();
