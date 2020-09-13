import T from"./particle-702bade50054c3a7bea5cc875044f651.js";import{randomNumBetween as l}from"./helpers-38882a545c1cac7384ff6d123701d97e.js";import{addInterval as w,removeInterval as d}from"./interval-handler-c2a464ee22e041ce506d89f42f719423.js";const y=t=>new Promise(e=>setTimeout(()=>{clearTimeout(),e()},t));function v(t){for(var e=t.length,i,o;e!==0;)o=Math.floor(Math.random()*e),e-=1,i=t[e],t[e]=t[o],t[o]=i;return t}export default class M{constructor(t){this.particles=[],this.preparticles=[],this.text=t.text,this.type="text",this.hasStarted=!1,this.tilt=0,this.delete=!1,this.emojis=t.emojis}getFont(t){const e=1e3,i=200;var o=i/e,n=t*o;return(n|0)+"px helvetica"}async drawText(t,e){const i=t.context;let{width:o,height:n}=t.screen;return new Promise(r=>{i.save(),i.clearRect(0,0,o,n),i.font=this.getFont(o),i.textAlign="center",i.fillText(e,o/2,n/2+250/2),i.restore(),r()})}async createNew(t,e){const i=t.context;await this.drawText(t,e||this.text);let{width:o,height:n}=t.screen;const r=await i.getImageData(0,0,o,n),c=r.data;i.clearRect(0,0,o,n),i.globalCompositeOperation="screen";const h=[],g=(m,p,f)=>{const u=p*(f*4)+m*4;return[u,u+1,u+2,u+3]},x=t.screen.size==="L"?t.screen.ratio*3:.1;for(var s=0;s<o;s+=Math.round(o/150))for(var a=0;a<n;a+=Math.round(o/150)){const m=g(s,a,o),[p,f,u,P]=m;c[(s+a*o)*4+3]>150&&h.push(new T({x:s,y:a,ww:o,wh:n,color:{r:c[p],g:c[f],b:c[u],a:c[P]},radius:Math.random()*x+2}))}return i.restore(),h}async init(t,e=this.emojis[Math.floor(l(0,this.emojis.length-1))]){this.preparticles=await this.createNew(t,e),this.startAddParticlesToRender(t)}async startAddParticlesToRender(t){let{particles:e,preparticles:i}=this;i=v(i);let o=i.length,n=8e3;for(;o>0;)o--,n=n>0?n-1:0,this.delay(l(0,n),()=>{e.push(i[o])});y(1e4).then(()=>{this.newAction(t)})}async deleteParticlesViaRender(t){let{particles:e}=this;e=v(e);let i=e.length,o=2e3;const n=(r,c)=>new Promise(h=>{e[r].setNewTarget({x:e[r].originPosition.x+l(0-(e[r].x+200),e[r].x+200),y:e[r].originPosition.y+l(0-(e[r].y+200),e[r].y+200)}),setTimeout(()=>h(),l(0,c))});d("time-to-remove"),w("time-to-remove",500,async()=>{d("time-to-remove");const r=[];for(;i>0;)i=i-1,o=o>0?o-1:0,n(i,2),r.push(e[i].delayedDestroy(l(0,1e3)));await Promise.all(r),await y(500),this.init(t)})}deleteAll(t){const{particles:e}=this;for(var i=e.length;i>0;)i--,e[i].delete=!0}delay(t,e){setTimeout(e(),t)}newAction(t){let e=this.particles,i=e.length,o=0;const n=async()=>{o=o+1,e=v(e);const r=Math.round(250/2),c=l(Math.round(0-(t.screen.width/2-r)),Math.round(t.screen.width/2-r)),h=l(Math.round(0-(t.screen.height/2-r)),Math.round(t.screen.height/2-r)),g=(a,m)=>new Promise(p=>{e[a].setNewTarget({x:e[a].originPosition.x+c,y:e[a].originPosition.y+h}),setTimeout(()=>p(),l(0,m))}),x=(a,m)=>new Promise(p=>{e[a].setNewTarget({x:e[a].originPosition.x+l(-c,c),y:e[a].originPosition.y+l(-h,h)}),setTimeout(()=>p(),l(0,m))});let s=8e3;d("time-to-move"),w("time-to-move",500,()=>{for(d("time-to-move"),i=e.length;i>0;)i=i-1,s=s>0?s-1:0,x(i,s)}),d("time-to-shape"),w("time-to-shape",1e3,()=>{for(d("time-to-shape"),i=e.length;i>0;)i=i-1,s=s>0?s-1:0,g(i,s)}),d("time-for-next-round"),w("time-for-next-round",15e3,()=>{d("time-for-next-round"),o>2?this.deleteParticlesViaRender(t):n()})};n()}setTilt(t){this.tilt=t}render(t){const{width:e,height:i}=t.screen,o=t.context;t.tilt!==this.tilt&&this.setTilt(t.tilt),o.clearRect(0,0,e,i);const{particles:n}=this;for(var r=n.length;r>0;)r--,n[r].delete===!0?n.splice(r,1):n[r].render(t)}}
