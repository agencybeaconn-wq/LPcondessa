const {execSync}=require('child_process');
const files=['produto-foto.jpg','studio-design.jpg','studio-identidade.jpg','tamires-1.jpg'];
const bucket={};
for(const f of files){
  const buf=execSync(`ffmpeg -v error -i "${f}" -vf scale=48:48 -f rawvideo -pix_fmt rgb24 -`,{maxBuffer:1e8});
  for(let i=0;i<buf.length;i+=3){
    const r=buf[i],g=buf[i+1],b=buf[i+2];
    const k=[r,g,b].map(v=>Math.round(v/24)*24).join(',');
    bucket[k]=(bucket[k]||0)+1;
  }
}
const hex=(s)=>'#'+s.split(',').map(v=>Math.min(255,+v).toString(16).padStart(2,'0')).join('');
const top=Object.entries(bucket).sort((a,b)=>b[1]-a[1]).slice(0,12);
const lum=s=>{const[r,g,b]=s.split(',').map(Number);return 0.2126*r+0.7152*g+0.0722*b};
const sat=s=>{const[r,g,b]=s.split(',').map(Number);const mx=Math.max(r,g,b),mn=Math.min(r,g,b);return mx?(mx-mn)/mx:0};
console.log('DOMINANTES:');
top.forEach(([k,n])=>console.log('  '+hex(k)+'  lum='+lum(k).toFixed(0).padStart(3)+'  sat='+sat(k).toFixed(2)+'  n='+n));
const marrons=top.filter(([k])=>{const[r,g,b]=k.split(',').map(Number);return r>g&&g>=b&&sat(k)>0.12&&lum(k)>40&&lum(k)<190});
console.log('CANDIDATOS A ACENTO (marrom/quente):', marrons.map(([k])=>hex(k)).join(' ') || 'nenhum');
