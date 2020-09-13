import P from"./particle-30fd7cef02ebf456c3e6c045bd3d079d.js";import{randomNumBetween as d}from"./helpers-38882a545c1cac7384ff6d123701d97e.js";import{addInterval as x,removeInterval as p}from"./interval-handler-c2a464ee22e041ce506d89f42f719423.js";const I=e=>new Promise(t=>setTimeout(()=>{clearTimeout(),t()},e));function v(e){for(var t=e.length,r,i;t!==0;)i=Math.floor(Math.random()*t),t-=1,r=e[t],e[t]=e[i],e[i]=r;return e}export default class y{constructor(e){this.particles=[],this.preparticles=[],this.text=e.text,this.type="text",this.hasStarted=!1,this.tilt=0,this.delete=!1}getFont(e){const t=1e3,r=200;var i=r/t,n=e*i;return(n|0)+"px helvetica"}async drawText(e,t){const r=e.context;let{width:i,height:n}=e.screen;return new Promise(o=>{r.save(),r.clearRect(0,0,i,n),r.font=this.getFont(i),r.textAlign="center",r.fillText(t,i/2,n/2+250/2),r.restore(),o()})}async createNew(e,t){const r=e.context;await this.drawText(e,t||this.text);let{width:i,height:n}=e.screen;const o=await r.getImageData(0,0,i,n),c=o.data;r.clearRect(0,0,i,n),r.globalCompositeOperation="screen";const u=[],w=(h,f,g)=>{const m=f*(g*4)+h*4;return[m,m+1,m+2,m+3]},a=e.screen.size==="L"?e.screen.ratio*3:.1;for(var s=0;s<i;s+=Math.round(i/150))for(var l=0;l<n;l+=Math.round(i/150)){const h=w(s,l,i),[f,g,m,T]=h;c[(s+l*i)*4+3]>150&&u.push(new P({x:s,y:l,ww:i,wh:n,color:{r:c[f],g:c[g],b:c[m],a:c[T]},radius:Math.random()*a+2}))}return r.restore(),u}async init(e,t){this.preparticles=await this.createNew(e,t),this.startAddParticlesToRender(e)}async startAddParticlesToRender(e){let{particles:t,preparticles:r}=this;r=v(r);let i=r.length,n=8e3;for(;i>0;)i--,n=n>0?n-1:0,this.delay(d(0,n),()=>{t.push(r[i])});I(1e4).then(()=>{this.newAction(e)})}delay(e,t){setTimeout(t(),e)}newAction(e){let t=this.particles,r=t.length;const i=async()=>{t=v(t);const n=Math.round(250/2),o=d(Math.round(0-(e.screen.width/2-n)),Math.round(e.screen.width/2-n)),c=d(Math.round(0-(e.screen.height/2-n)),Math.round(e.screen.height/2-n)),u=(s,l)=>new Promise(h=>{t[s].setNewTarget({x:t[s].originPosition.x+o,y:t[s].originPosition.y+c}),setTimeout(()=>h(),d(0,l))}),w=(s,l)=>new Promise(h=>{t[s].setNewTarget({x:t[s].originPosition.x+d(-o,o),y:t[s].originPosition.y+d(-c,c)}),setTimeout(()=>h(),d(0,l))});let a=8e3;p("time-to-move"),x("time-to-move",500,()=>{for(p("time-to-move"),r=t.length;r>0;)r=r-1,a=a>0?a-1:0,w(r,a)}),p("time-to-shape"),x("time-to-shape",1e3,()=>{for(p("time-to-shape"),r=t.length;r>0;)r=r-1,a=a>0?a-1:0,u(r,a)}),p("time-for-next-round"),x("time-for-next-round",15e3,()=>{p("time-for-next-round"),i()})};i()}setTilt(e){console.log("tilt: ",e),this.tilt=e}render(e){const{width:t,height:r}=e.screen,i=e.context;e.tilt!==this.tilt&&this.setTilt(e.tilt),i.clearRect(0,0,t,r);const{particles:n}=this;for(var o=n.length;o>0;)o--,n[o].delete===!0?n.splice(o,1):n[o].render(e)}}