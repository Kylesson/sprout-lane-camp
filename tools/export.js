// Fiverr portfolio exports: cover 1200x630 (EN), full-page PNGs (EN 1440, zh-Hant 390 @2x), scroll video frames (EN).
// Needs the server on :5500. Then: ffmpeg -framerate 30 -i portfolio/frames/%04d.jpg ... (see NOTES.md)
const {chromium}=require('C:/Sites/_tools/pw/node_modules/playwright');
const fs=require('fs');
const URL='http://localhost:5500/', OUT='portfolio';
fs.mkdirSync(OUT+'/frames',{recursive:true});
fs.readdirSync(OUT+'/frames').forEach(f=>fs.unlinkSync(OUT+'/frames/'+f));

(async()=>{
  const b=await chromium.launch({channel:'chrome'});
  // stills use the calm (reduced-motion) version so every reveal is already shown
  async function open(w,h,{scale=1,en=true,calm=true}={}){
    const p=await b.newPage({viewport:{width:w,height:h},deviceScaleFactor:scale,locale:en?'en-US':'zh-TW',reducedMotion:calm?'reduce':'no-preference'});
    await p.goto(URL);await p.evaluate(()=>document.fonts.ready);
    await p.waitForTimeout(800);
    return p;
  }
  for(const [w,h,en,name] of [[1440,900,true,'1440-en'],[390,844,false,'390-zh']]){
    const p=await open(w,h,{scale:w<500?1.5:1,en});
    await p.addStyleTag({content:'.dock{display:none!important}'}); // 1.5x on phones: Chrome repeats tiles past ~16k px. Fixed dock would land mid-page in a full-page shot
    await p.screenshot({path:`${OUT}/sprout-lane-${name}.png`,fullPage:true});
    // page is clipped at the viewport, but the screenshot takes body's scroll width (hero strip, teacher carousel): crop it back
    require('child_process').execSync(`magick ${OUT}/sprout-lane-${name}.png -crop ${w*(w<500?1.5:1)}x+0+0 +repage ${OUT}/sprout-lane-${name}.png`);
    await p.close();
  }
  const c=await open(1200,630);
  await c.screenshot({path:`${OUT}/sprout-lane-cover.jpg`,type:'jpeg',quality:88});
  await c.close();

  // ~22 s at 30 fps: 1.5 s hold on the hero, eased scroll to the footer, 1 s hold
  const v=await open(1440,900,{calm:false});
  const max=await v.evaluate(()=>document.documentElement.scrollHeight-innerHeight);
  const hold=45, run=570, ease=t=>t<.5?2*t*t:1-(-2*t+2)**2/2;
  let n=0;const shot=()=>v.screenshot({path:`${OUT}/frames/${String(n++).padStart(4,'0')}.jpg`,type:'jpeg',quality:90});
  for(let i=0;i<hold;i++)await shot();
  for(let i=1;i<=run;i++){await v.evaluate(y=>scrollTo({top:y,behavior:'instant'}),Math.round(max*ease(i/run)));await shot();}
  for(let i=0;i<30;i++)await shot();
  console.log('frames',n,'scroll',max);
  await b.close();
})();
