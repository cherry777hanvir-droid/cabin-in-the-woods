(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Ou="186",od=0,_h=1,ad=2,na=1,ld=2,jo=3,Fr=0,zi=1,Bn=2,Ns=0,yo=1,Pi=2,xh=3,Mh=4,cd=5,po=100,ud=101,hd=102,fd=103,dd=104,pd=200,md=201,gd=202,vd=203,t0=204,n0=205,_d=206,xd=207,Md=208,yd=209,bd=210,Sd=211,wd=212,Td=213,Ed=214,Bc=0,kc=1,Gc=2,la=3,Hc=4,Vc=5,Wc=6,Xc=7,i0=0,Ad=1,Cd=2,Us=0,zu=1,Bu=2,ku=3,Bl=4,Gu=5,Hu=6,Vu=7,s0=300,Or=301,Co=302,ul=303,Kl=304,kl=306,Ro=1e3,on=1001,Yc=1002,xi=1003,Rd=1004,Ta=1005,Li=1006,Jl=1007,Rr=1008,ts=1009,r0=1010,o0=1011,ca=1012,Wu=1013,zs=1014,_s=1015,Ki=1016,Xu=1017,Yu=1018,ua=1020,a0=35902,l0=35899,c0=1021,u0=1022,xs=1023,js=1026,Pr=1027,qu=1028,Zu=1029,zr=1030,$u=1031,Ku=1033,hl=33776,fl=33777,dl=33778,pl=33779,qc=35840,Zc=35841,$c=35842,Kc=35843,Jc=36196,Qc=37492,jc=37496,eu=37488,tu=37489,bl=37490,nu=37491,iu=37808,su=37809,ru=37810,ou=37811,au=37812,lu=37813,cu=37814,uu=37815,hu=37816,fu=37817,du=37818,pu=37819,mu=37820,gu=37821,vu=36492,_u=36494,xu=36495,Mu=36283,yu=36284,Sl=36285,bu=36286,Pd=3200,Su=0,Ld=1,Js="",qi="srgb",wl="srgb-linear",Tl="linear",Fn="srgb",Ql=7680,Id=519,Dd=512,Nd=513,Ud=514,Ju=515,Fd=516,Od=517,Qu=518,zd=519,h0=35044,yh=35048,bh="300 es",Is=2e3,ha=2001;function Bd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function El(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kd(){const i=El("canvas");return i.style.display="block",i}const Sh={};function Al(...i){const e="THREE."+i.shift();console.log(e,...i)}function f0(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function rn(...i){i=f0(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Rn(...i){i=f0(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function bo(...i){const e=i.join(" ");e in Sh||(Sh[e]=!0,rn(...i))}function Gd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Hd={[Bc]:kc,[Gc]:Wc,[Hc]:Xc,[la]:Vc,[kc]:Bc,[Wc]:Gc,[Xc]:Hc,[Vc]:la};class Hr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wh=1234567;const ia=Math.PI/180,Po=180/Math.PI;function Fs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ei[i&255]+Ei[i>>8&255]+Ei[i>>16&255]+Ei[i>>24&255]+"-"+Ei[e&255]+Ei[e>>8&255]+"-"+Ei[e>>16&15|64]+Ei[e>>24&255]+"-"+Ei[t&63|128]+Ei[t>>8&255]+"-"+Ei[t>>16&255]+Ei[t>>24&255]+Ei[n&255]+Ei[n>>8&255]+Ei[n>>16&255]+Ei[n>>24&255]).toLowerCase()}function yn(i,e,t){return Math.max(e,Math.min(t,i))}function ju(i,e){return(i%e+e)%e}function Vd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Wd(i,e,t){return i!==e?(t-i)/(e-i):0}function sa(i,e,t){return(1-t)*i+t*e}function Xd(i,e,t,n){return sa(i,e,1-Math.exp(-t*n))}function Yd(i,e=1){return e-Math.abs(ju(i,e*2)-e)}function qd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Zd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function $d(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Kd(i,e){return i+Math.random()*(e-i)}function Jd(i){return i*(.5-Math.random())}function Qd(i){i!==void 0&&(wh=i);let e=wh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jd(i){return i*ia}function ep(i){return i*Po}function tp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function np(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ip(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sp(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),h=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*d,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*d,a*l);break;case"ZXZ":i.set(c*d,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*p,c*h,a*l);break;case"YXY":i.set(c*h,a*u,c*p,a*l);break;case"ZYZ":i.set(c*p,c*h,a*u,a*l);break;default:rn("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const rp={DEG2RAD:ia,RAD2DEG:Po,generateUUID:Fs,clamp:yn,euclideanModulo:ju,mapLinear:Vd,inverseLerp:Wd,lerp:sa,damp:Xd,pingpong:Yd,smoothstep:qd,smootherstep:Zd,randInt:$d,randFloat:Kd,randFloatSpread:Jd,seededRandom:Qd,degToRad:jd,radToDeg:ep,isPowerOfTwo:tp,ceilPowerOfTwo:np,floorPowerOfTwo:ip,setQuaternionFromProperEuler:sp,normalize:zn,denormalize:vs};class et{static{et.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yn(this.x,e.x,t.x),this.y=yn(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yn(this.x,e,t),this.y=yn(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(yn(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bs{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3],f=r[o+0],h=r[o+1],p=r[o+2],_=r[o+3];if(d!==_||c!==f||l!==h||u!==p){let m=c*f+l*h+u*p+d*_;m<0&&(f=-f,h=-h,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){const b=Math.acos(m),T=Math.sin(b);g=Math.sin(g*b)/T,a=Math.sin(a*b)/T,c=c*g+f*a,l=l*g+h*a,u=u*g+p*a,d=d*g+_*a}else{c=c*g+f*a,l=l*g+h*a,u=u*g+p*a,d=d*g+_*a;const b=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=b,l*=b,u*=b,d*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[o],f=r[o+1],h=r[o+2],p=r[o+3];return e[t]=a*p+u*d+c*h-l*f,e[t+1]=c*p+u*f+l*d-a*h,e[t+2]=l*p+u*h+a*f-c*d,e[t+3]=u*p-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),d=a(r/2),f=c(n/2),h=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=f*u*d+l*h*p,this._y=l*h*d-f*u*p,this._z=l*u*p+f*h*d,this._w=l*u*d-f*h*p;break;case"YXZ":this._x=f*u*d+l*h*p,this._y=l*h*d-f*u*p,this._z=l*u*p-f*h*d,this._w=l*u*d+f*h*p;break;case"ZXY":this._x=f*u*d-l*h*p,this._y=l*h*d+f*u*p,this._z=l*u*p+f*h*d,this._w=l*u*d-f*h*p;break;case"ZYX":this._x=f*u*d-l*h*p,this._y=l*h*d+f*u*p,this._z=l*u*p-f*h*d,this._w=l*u*d+f*h*p;break;case"YZX":this._x=f*u*d+l*h*p,this._y=l*h*d+f*u*p,this._z=l*u*p-f*h*d,this._w=l*u*d-f*h*p;break;case"XZY":this._x=f*u*d-l*h*p,this._y=l*h*d-f*u*p,this._z=l*u*p+f*h*d,this._w=l*u*d+f*h*p;break;default:rn("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(r-l)*h,this._z=(o-s)*h}else if(n>a&&n>d){const h=2*Math.sqrt(1+n-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+l)/h}else if(a>d){const h=2*Math.sqrt(1+a-n-d);this._w=(r-l)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+d-n-a);this._w=(o-s)/h,this._x=(r+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{static{L.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Th.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yn(this.x,e.x,t.x),this.y=yn(this.y,e.y,t.y),this.z=yn(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yn(this.x,e,t),this.y=yn(this.y,e,t),this.z=yn(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(yn(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jl.copy(this).projectOnVector(e),this.sub(jl)}reflect(e){return this.sub(jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jl=new L,Th=new bs;class pn{static{pn.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],h=n[5],p=n[8],_=s[0],m=s[3],g=s[6],b=s[1],T=s[4],y=s[7],A=s[2],R=s[5],F=s[8];return r[0]=o*_+a*b+c*A,r[3]=o*m+a*T+c*R,r[6]=o*g+a*y+c*F,r[1]=l*_+u*b+d*A,r[4]=l*m+u*T+d*R,r[7]=l*g+u*y+d*F,r[2]=f*_+h*b+p*A,r[5]=f*m+h*T+p*R,r[8]=f*g+h*y+p*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*r,h=l*r-o*c,p=t*d+n*f+s*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=d*_,e[1]=(s*l-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=h*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return bo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ec.makeScale(e,t)),this}rotate(e){return bo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ec.makeRotation(-e)),this}translate(e,t){return bo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ec.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ec=new pn,Eh=new pn().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ah=new pn().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function op(){const i={enabled:!0,workingColorSpace:wl,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Fn&&(s.r=Qs(s.r),s.g=Qs(s.g),s.b=Qs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Fn&&(s.r=So(s.r),s.g=So(s.g),s.b=So(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Js?Tl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return bo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return bo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wl]:{primaries:e,whitePoint:n,transfer:Tl,toXYZ:Eh,fromXYZ:Ah,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qi},outputColorSpaceConfig:{drawingBufferColorSpace:qi}},[qi]:{primaries:e,whitePoint:n,transfer:Fn,toXYZ:Eh,fromXYZ:Ah,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qi}}}),i}const En=op();function Qs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function So(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yr;class ap{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yr===void 0&&(Yr=El("canvas")),Yr.width=e.width,Yr.height=e.height;const s=Yr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Yr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=El("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qs(t[n]/255)*255):t[n]=Qs(t[n]);return{data:t,width:e.width,height:e.height}}else return rn("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lp=0;class eh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Fs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(tc(s[o].image)):r.push(tc(s[o]))}else r=tc(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function tc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ap.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(rn("Texture: Unable to serialize Texture."),{})}let cp=0;const nc=new L;class Ii extends Hr{constructor(e=Ii.DEFAULT_IMAGE,t=Ii.DEFAULT_MAPPING,n=on,s=on,r=Li,o=Rr,a=xs,c=ts,l=Ii.DEFAULT_ANISOTROPY,u=Js){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Fs(),this.name="",this.source=new eh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nc).x}get height(){return this.source.getSize(nc).y}get depth(){return this.source.getSize(nc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){rn(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){rn(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==s0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ro:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case Yc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ro:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case Yc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ii.DEFAULT_IMAGE=null;Ii.DEFAULT_MAPPING=s0;Ii.DEFAULT_ANISOTROPY=1;class ei{static{ei.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],p=c[9],_=c[2],m=c[6],g=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(l+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,y=(h+1)/2,A=(g+1)/2,R=(u+f)/4,F=(d+_)/4,x=(p+m)/4;return T>y&&T>A?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=R/n,r=F/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=R/s,r=x/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=F/r,s=x/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-p)/b,this.y=(d-_)/b,this.z=(f-u)/b,this.w=Math.acos((l+h+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yn(this.x,e.x,t.x),this.y=yn(this.y,e.y,t.y),this.z=yn(this.z,e.z,t.z),this.w=yn(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yn(this.x,e,t),this.y=yn(this.y,e,t),this.z=yn(this.z,e,t),this.w=yn(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(yn(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class up extends Hr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ei(0,0,e,t),this.scissorTest=!1,this.viewport=new ei(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Ii(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Li,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new eh(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends up{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class d0 extends Ii{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=xi,this.minFilter=xi,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hp extends Ii{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=xi,this.minFilter=xi,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Mn{static{Mn.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,c,l,u,d,f,h,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,d,f,h,p,_,m)}set(e,t,n,s,r,o,a,c,l,u,d,f,h,p,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=u,g[10]=d,g[14]=f,g[3]=h,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mn().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/qr.setFromMatrixColumn(e,0).length(),r=1/qr.setFromMatrixColumn(e,1).length(),o=1/qr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,h=o*d,p=a*u,_=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+p*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=p+h*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,h=c*d,p=l*u,_=l*d;t[0]=f+_*a,t[4]=p*a-h,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-p,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,h=c*d,p=l*u,_=l*d;t[0]=f-_*a,t[4]=-o*d,t[8]=p+h*a,t[1]=h+p*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,h=o*d,p=a*u,_=a*d;t[0]=c*u,t[4]=p*l-h,t[8]=f*l+_,t[1]=c*d,t[5]=_*l+f,t[9]=h*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,h=o*l,p=a*c,_=a*l;t[0]=c*u,t[4]=_-f*d,t[8]=p*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*d+p,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*c,h=o*l,p=a*c,_=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+_,t[5]=o*u,t[9]=h*d-p,t[2]=p*d-h,t[6]=a*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fp,e,dp)}lookAt(e,t,n){const s=this.elements;return Qi.subVectors(e,t),Qi.lengthSq()===0&&(Qi.z=1),Qi.normalize(),rr.crossVectors(n,Qi),rr.lengthSq()===0&&(Math.abs(n.z)===1?Qi.x+=1e-4:Qi.z+=1e-4,Qi.normalize(),rr.crossVectors(n,Qi)),rr.normalize(),Ea.crossVectors(Qi,rr),s[0]=rr.x,s[4]=Ea.x,s[8]=Qi.x,s[1]=rr.y,s[5]=Ea.y,s[9]=Qi.y,s[2]=rr.z,s[6]=Ea.z,s[10]=Qi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],h=n[13],p=n[2],_=n[6],m=n[10],g=n[14],b=n[3],T=n[7],y=n[11],A=n[15],R=s[0],F=s[4],x=s[8],P=s[12],N=s[1],k=s[5],V=s[9],te=s[13],X=s[2],j=s[6],Se=s[10],oe=s[14],Re=s[3],xe=s[7],Te=s[11],de=s[15];return r[0]=o*R+a*N+c*X+l*Re,r[4]=o*F+a*k+c*j+l*xe,r[8]=o*x+a*V+c*Se+l*Te,r[12]=o*P+a*te+c*oe+l*de,r[1]=u*R+d*N+f*X+h*Re,r[5]=u*F+d*k+f*j+h*xe,r[9]=u*x+d*V+f*Se+h*Te,r[13]=u*P+d*te+f*oe+h*de,r[2]=p*R+_*N+m*X+g*Re,r[6]=p*F+_*k+m*j+g*xe,r[10]=p*x+_*V+m*Se+g*Te,r[14]=p*P+_*te+m*oe+g*de,r[3]=b*R+T*N+y*X+A*Re,r[7]=b*F+T*k+y*j+A*xe,r[11]=b*x+T*V+y*Se+A*Te,r[15]=b*P+T*te+y*oe+A*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],p=e[3],_=e[7],m=e[11],g=e[15],b=c*h-l*f,T=a*h-l*d,y=a*f-c*d,A=o*h-l*u,R=o*f-c*u,F=o*d-a*u;return t*(_*b-m*T+g*y)-n*(p*b-m*A+g*R)+s*(p*T-_*A+g*F)-r*(p*y-_*R+m*F)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-n*(r*u-a*c)+s*(r*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],p=e[12],_=e[13],m=e[14],g=e[15],b=t*a-n*o,T=t*c-s*o,y=t*l-r*o,A=n*c-s*a,R=n*l-r*a,F=s*l-r*c,x=u*_-d*p,P=u*m-f*p,N=u*g-h*p,k=d*m-f*_,V=d*g-h*_,te=f*g-h*m,X=b*te-T*V+y*k+A*N-R*P+F*x;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/X;return e[0]=(a*te-c*V+l*k)*j,e[1]=(s*V-n*te-r*k)*j,e[2]=(_*F-m*R+g*A)*j,e[3]=(f*R-d*F-h*A)*j,e[4]=(c*N-o*te-l*P)*j,e[5]=(t*te-s*N+r*P)*j,e[6]=(m*y-p*F-g*T)*j,e[7]=(u*F-f*y+h*T)*j,e[8]=(o*V-a*N+l*x)*j,e[9]=(n*N-t*V-r*x)*j,e[10]=(p*R-_*y+g*b)*j,e[11]=(d*y-u*R-h*b)*j,e[12]=(a*P-o*k-c*x)*j,e[13]=(t*k-n*P+s*x)*j,e[14]=(_*T-p*A-m*b)*j,e[15]=(u*A-d*T+f*b)*j,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,d=a+a,f=r*l,h=r*u,p=r*d,_=o*u,m=o*d,g=a*d,b=c*l,T=c*u,y=c*d,A=n.x,R=n.y,F=n.z;return s[0]=(1-(_+g))*A,s[1]=(h+y)*A,s[2]=(p-T)*A,s[3]=0,s[4]=(h-y)*R,s[5]=(1-(f+g))*R,s[6]=(m+b)*R,s[7]=0,s[8]=(p+T)*F,s[9]=(m-b)*F,s[10]=(1-(f+_))*F,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=qr.set(s[0],s[1],s[2]).length();const a=qr.set(s[4],s[5],s[6]).length(),c=qr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ds.copy(this);const l=1/o,u=1/a,d=1/c;return ds.elements[0]*=l,ds.elements[1]*=l,ds.elements[2]*=l,ds.elements[4]*=u,ds.elements[5]*=u,ds.elements[6]*=u,ds.elements[8]*=d,ds.elements[9]*=d,ds.elements[10]*=d,t.setFromRotationMatrix(ds),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=Is,c=!1){const l=this.elements,u=2*r/(t-e),d=2*r/(n-s),f=(t+e)/(t-e),h=(n+s)/(n-s);let p,_;if(c)p=r/(o-r),_=o*r/(o-r);else if(a===Is)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ha)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Is,c=!1){const l=this.elements,u=2/(t-e),d=2/(n-s),f=-(t+e)/(t-e),h=-(n+s)/(n-s);let p,_;if(c)p=1/(o-r),_=o/(o-r);else if(a===Is)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===ha)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qr=new L,ds=new Mn,fp=new L(0,0,0),dp=new L(1,1,1),rr=new L,Ea=new L,Qi=new L,Ch=new Mn,Rh=new bs;class Ss{constructor(e=0,t=0,n=0,s=Ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(yn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-yn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(yn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-yn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(yn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-yn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:rn("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ch.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ch,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rh.setFromEuler(this),this.setFromQuaternion(Rh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ss.DEFAULT_ORDER="XYZ";class th{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pp=0;const Ph=new L,Zr=new bs,Hs=new Mn,Aa=new L,Bo=new L,mp=new L,gp=new bs,Lh=new L(1,0,0),Ih=new L(0,1,0),Dh=new L(0,0,1),Nh={type:"added"},vp={type:"removed"},$r={type:"childadded",child:null},ic={type:"childremoved",child:null};class Zn extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zn.DEFAULT_UP.clone();const e=new L,t=new Ss,n=new bs,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mn},normalMatrix:{value:new pn}}),this.matrix=new Mn,this.matrixWorld=new Mn,this.matrixAutoUpdate=Zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(Lh,e)}rotateY(e){return this.rotateOnAxis(Ih,e)}rotateZ(e){return this.rotateOnAxis(Dh,e)}translateOnAxis(e,t){return Ph.copy(e).applyQuaternion(this.quaternion),this.position.add(Ph.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lh,e)}translateY(e){return this.translateOnAxis(Ih,e)}translateZ(e){return this.translateOnAxis(Dh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Aa.copy(e):Aa.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hs.lookAt(Bo,Aa,this.up):Hs.lookAt(Aa,Bo,this.up),this.quaternion.setFromRotationMatrix(Hs),s&&(Hs.extractRotation(s.matrixWorld),Zr.setFromRotationMatrix(Hs),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Rn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nh),$r.child=e,this.dispatchEvent($r),$r.child=null):Rn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vp),ic.child=e,this.dispatchEvent(ic),ic.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hs.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nh),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,mp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,gp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Zn.DEFAULT_UP=new L(0,1,0);Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qt extends Zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _p={type:"move"};class sc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),g=this._getHandJoint(l,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,p=.005;l.inputState.pinching&&f>h+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_p)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const p0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},Ca={h:0,s:0,l:0};function rc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,En.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=En.workingColorSpace){return this.r=e,this.g=t,this.b=n,En.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=En.workingColorSpace){if(e=ju(e,1),t=yn(t,0,1),n=yn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=rc(o,r,e+1/3),this.g=rc(o,r,e),this.b=rc(o,r,e-1/3)}return En.colorSpaceToWorking(this,s),this}setStyle(e,t=qi){function n(r){r!==void 0&&parseFloat(r)<1&&rn("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:rn("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);rn("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qi){const n=p0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):rn("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}copyLinearToSRGB(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qi){return En.workingToColorSpace(Ai.copy(this),e),Math.round(yn(Ai.r*255,0,255))*65536+Math.round(yn(Ai.g*255,0,255))*256+Math.round(yn(Ai.b*255,0,255))}getHexString(e=qi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=En.workingColorSpace){En.workingToColorSpace(Ai.copy(this),t);const n=Ai.r,s=Ai.g,r=Ai.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=En.workingColorSpace){return En.workingToColorSpace(Ai.copy(this),t),e.r=Ai.r,e.g=Ai.g,e.b=Ai.b,e}getStyle(e=qi){En.workingToColorSpace(Ai.copy(this),e);const t=Ai.r,n=Ai.g,s=Ai.b;return e!==qi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(or),this.setHSL(or.h+e,or.s+t,or.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(or),e.getHSL(Ca);const n=sa(or.h,Ca.h,t),s=sa(or.s,Ca.s,t),r=sa(or.l,Ca.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ai=new ke;ke.NAMES=p0;class nh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ke(e),this.density=t}clone(){return new nh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class xp extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ss,this.environmentIntensity=1,this.environmentRotation=new Ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ps=new L,Vs=new L,oc=new L,Ws=new L,Kr=new L,Jr=new L,Uh=new L,ac=new L,lc=new L,cc=new L,uc=new ei,hc=new ei,fc=new ei;class ls{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ps.subVectors(e,t),s.cross(ps);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ps.subVectors(s,t),Vs.subVectors(n,t),oc.subVectors(e,t);const o=ps.dot(ps),a=ps.dot(Vs),c=ps.dot(oc),l=Vs.dot(Vs),u=Vs.dot(oc),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(l*c-a*u)*f,p=(o*u-a*c)*f;return r.set(1-h-p,p,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ws)===null?!1:Ws.x>=0&&Ws.y>=0&&Ws.x+Ws.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Ws)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ws.x),c.addScaledVector(o,Ws.y),c.addScaledVector(a,Ws.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return uc.setScalar(0),hc.setScalar(0),fc.setScalar(0),uc.fromBufferAttribute(e,t),hc.fromBufferAttribute(e,n),fc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(uc,r.x),o.addScaledVector(hc,r.y),o.addScaledVector(fc,r.z),o}static isFrontFacing(e,t,n,s){return ps.subVectors(n,t),Vs.subVectors(e,t),ps.cross(Vs).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ps.subVectors(this.c,this.b),Vs.subVectors(this.a,this.b),ps.cross(Vs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ls.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ls.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return ls.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return ls.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ls.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Kr.subVectors(s,n),Jr.subVectors(r,n),ac.subVectors(e,n);const c=Kr.dot(ac),l=Jr.dot(ac);if(c<=0&&l<=0)return t.copy(n);lc.subVectors(e,s);const u=Kr.dot(lc),d=Jr.dot(lc);if(u>=0&&d<=u)return t.copy(s);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Kr,o);cc.subVectors(e,r);const h=Kr.dot(cc),p=Jr.dot(cc);if(p>=0&&h<=p)return t.copy(r);const _=h*l-c*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(Jr,a);const m=u*p-h*d;if(m<=0&&d-u>=0&&h-p>=0)return Uh.subVectors(r,s),a=(d-u)/(d-u+(h-p)),t.copy(s).addScaledVector(Uh,a);const g=1/(m+_+f);return o=_*g,a=f*g,t.copy(n).addScaledVector(Kr,o).addScaledVector(Jr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Vr{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ms.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ms.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ms.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ms):ms.fromBufferAttribute(r,o),ms.applyMatrix4(e.matrixWorld),this.expandByPoint(ms);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ra.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ra.copy(n.boundingBox)),Ra.applyMatrix4(e.matrixWorld),this.union(Ra)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ms),ms.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),Pa.subVectors(this.max,ko),Qr.subVectors(e.a,ko),jr.subVectors(e.b,ko),eo.subVectors(e.c,ko),ar.subVectors(jr,Qr),lr.subVectors(eo,jr),xr.subVectors(Qr,eo);let t=[0,-ar.z,ar.y,0,-lr.z,lr.y,0,-xr.z,xr.y,ar.z,0,-ar.x,lr.z,0,-lr.x,xr.z,0,-xr.x,-ar.y,ar.x,0,-lr.y,lr.x,0,-xr.y,xr.x,0];return!dc(t,Qr,jr,eo,Pa)||(t=[1,0,0,0,1,0,0,0,1],!dc(t,Qr,jr,eo,Pa))?!1:(La.crossVectors(ar,lr),t=[La.x,La.y,La.z],dc(t,Qr,jr,eo,Pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ms).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ms).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xs=[new L,new L,new L,new L,new L,new L,new L,new L],ms=new L,Ra=new Vr,Qr=new L,jr=new L,eo=new L,ar=new L,lr=new L,xr=new L,ko=new L,Pa=new L,La=new L,Mr=new L;function dc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Mr.fromArray(i,r);const a=s.x*Math.abs(Mr.x)+s.y*Math.abs(Mr.y)+s.z*Math.abs(Mr.z),c=e.dot(Mr),l=t.dot(Mr),u=n.dot(Mr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const oi=new L,Ia=new et;let Mp=0;class Vn extends Hr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=h0,this.updateRanges=[],this.gpuType=_s,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ia.fromBufferAttribute(this,t),Ia.applyMatrix3(e),this.setXY(t,Ia.x,Ia.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)oi.fromBufferAttribute(this,t),oi.applyMatrix3(e),this.setXYZ(t,oi.x,oi.y,oi.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)oi.fromBufferAttribute(this,t),oi.applyMatrix4(e),this.setXYZ(t,oi.x,oi.y,oi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)oi.fromBufferAttribute(this,t),oi.applyNormalMatrix(e),this.setXYZ(t,oi.x,oi.y,oi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)oi.fromBufferAttribute(this,t),oi.transformDirection(e),this.setXYZ(t,oi.x,oi.y,oi.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vs(t,this.array)),t}setX(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vs(t,this.array)),t}setY(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vs(t,this.array)),t}setW(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),n=zn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),n=zn(n,this.array),s=zn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),n=zn(n,this.array),s=zn(s,this.array),r=zn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class m0 extends Vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class g0 extends Vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class an extends Vn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const yp=new Vr,Go=new L,pc=new L;class Wr{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const t=Go.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Go,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(pc)),this.expandByPoint(Go.copy(e.center).sub(pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let bp=0;const ss=new Mn,mc=new Zn,to=new L,ji=new Vr,Ho=new Vr,pi=new L;class Pn extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bd(e)?g0:m0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new pn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ss.makeRotationFromQuaternion(e),this.applyMatrix4(ss),this}rotateX(e){return ss.makeRotationX(e),this.applyMatrix4(ss),this}rotateY(e){return ss.makeRotationY(e),this.applyMatrix4(ss),this}rotateZ(e){return ss.makeRotationZ(e),this.applyMatrix4(ss),this}translate(e,t,n){return ss.makeTranslation(e,t,n),this.applyMatrix4(ss),this}scale(e,t,n){return ss.makeScale(e,t,n),this.applyMatrix4(ss),this}lookAt(e){return mc.lookAt(e),mc.updateMatrix(),this.applyMatrix4(mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new an(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&rn("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];ji.setFromBufferAttribute(r),this.morphTargetsRelative?(pi.addVectors(this.boundingBox.min,ji.min),this.boundingBox.expandByPoint(pi),pi.addVectors(this.boundingBox.max,ji.max),this.boundingBox.expandByPoint(pi)):(this.boundingBox.expandByPoint(ji.min),this.boundingBox.expandByPoint(ji.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(ji.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ho.setFromBufferAttribute(a),this.morphTargetsRelative?(pi.addVectors(ji.min,Ho.min),ji.expandByPoint(pi),pi.addVectors(ji.max,Ho.max),ji.expandByPoint(pi)):(ji.expandByPoint(Ho.min),ji.expandByPoint(Ho.max))}ji.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)pi.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(pi));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)pi.fromBufferAttribute(a,l),c&&(to.fromBufferAttribute(e,l),pi.add(to)),s=Math.max(s,n.distanceToSquared(pi))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Rn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Rn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Vn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let x=0;x<n.count;x++)a[x]=new L,c[x]=new L;const l=new L,u=new L,d=new L,f=new et,h=new et,p=new et,_=new L,m=new L;function g(x,P,N){l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,P),d.fromBufferAttribute(n,N),f.fromBufferAttribute(r,x),h.fromBufferAttribute(r,P),p.fromBufferAttribute(r,N),u.sub(l),d.sub(l),h.sub(f),p.sub(f);const k=1/(h.x*p.y-p.x*h.y);isFinite(k)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(d,-h.y).multiplyScalar(k),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-p.x).multiplyScalar(k),a[x].add(_),a[P].add(_),a[N].add(_),c[x].add(m),c[P].add(m),c[N].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let x=0,P=b.length;x<P;++x){const N=b[x],k=N.start,V=N.count;for(let te=k,X=k+V;te<X;te+=3)g(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const T=new L,y=new L,A=new L,R=new L;function F(x){A.fromBufferAttribute(s,x),R.copy(A);const P=a[x];T.copy(P),T.sub(A.multiplyScalar(A.dot(P))).normalize(),y.crossVectors(R,P);const k=y.dot(c[x])<0?-1:1;o.setXYZW(x,T.x,T.y,T.z,k)}for(let x=0,P=b.length;x<P;++x){const N=b[x],k=N.start,V=N.count;for(let te=k,X=k+V;te<X;te+=3)F(e.getX(te+0)),F(e.getX(te+1)),F(e.getX(te+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,u=new L,d=new L;if(e)for(let f=0,h=e.count;f<h;f+=3){const p=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pi.fromBufferAttribute(e,t),pi.normalize(),e.setXYZ(t,pi.x,pi.y,pi.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let h=0,p=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?h=c[_]*a.data.stride+a.offset:h=c[_]*u;for(let g=0;g<u;g++)f[p++]=l[h++]}return new Vn(f,u,d)}if(this.index===null)return rn("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pn,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],h=e(f,n);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=h0,this.updateRanges=[],this.version=0,this.uuid=Fs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Ui=new L;class Cl{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ui.fromBufferAttribute(this,t),Ui.applyMatrix4(e),this.setXYZ(t,Ui.x,Ui.y,Ui.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ui.fromBufferAttribute(this,t),Ui.applyNormalMatrix(e),this.setXYZ(t,Ui.x,Ui.y,Ui.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ui.fromBufferAttribute(this,t),Ui.transformDirection(e),this.setXYZ(t,Ui.x,Ui.y,Ui.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=vs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zn(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=zn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=zn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=zn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=zn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vs(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vs(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vs(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vs(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=zn(t,this.array),n=zn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=zn(t,this.array),n=zn(n,this.array),s=zn(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=zn(t,this.array),n=zn(n,this.array),s=zn(s,this.array),r=zn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Al("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Vn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Cl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Al("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const gc=new L,wp=new L,Tp=new pn;class mr{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=gc.subVectors(n,t).cross(wp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(gc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Tp.getNormalMatrix(e),s=this.coplanarPoint(gc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Ep=0;class vr extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Fs(),this.name="",this.type="Material",this.blending=yo,this.side=Fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=t0,this.blendDst=n0,this.blendEquation=po,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=la,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Id,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ql,this.stencilZFail=Ql,this.stencilZPass=Ql,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){rn(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){rn(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new mr().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new et().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new et().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Br extends vr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let no;const Vo=new L,io=new L,so=new L,ro=new et,Wo=new et,v0=new Mn,Da=new L,Xo=new L,Na=new L,Fh=new et,vc=new et,Oh=new et;class wo extends Zn{constructor(e=new Br){if(super(),this.isSprite=!0,this.type="Sprite",no===void 0){no=new Pn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Sp(t,5);no.setIndex([0,1,2,0,2,3]),no.setAttribute("position",new Cl(n,3,0,!1)),no.setAttribute("uv",new Cl(n,2,3,!1))}this.geometry=no,this.material=e,this.center=new et(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Rn('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),io.setFromMatrixScale(this.matrixWorld),v0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),so.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&io.multiplyScalar(-so.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Ua(Da.set(-.5,-.5,0),so,o,io,s,r),Ua(Xo.set(.5,-.5,0),so,o,io,s,r),Ua(Na.set(.5,.5,0),so,o,io,s,r),Fh.set(0,0),vc.set(1,0),Oh.set(1,1);let a=e.ray.intersectTriangle(Da,Xo,Na,!1,Vo);if(a===null&&(Ua(Xo.set(-.5,.5,0),so,o,io,s,r),vc.set(0,1),a=e.ray.intersectTriangle(Da,Na,Xo,!1,Vo),a===null))return;const c=e.ray.origin.distanceTo(Vo);c<e.near||c>e.far||t.push({distance:c,point:Vo.clone(),uv:ls.getInterpolation(Vo,Da,Xo,Na,Fh,vc,Oh,new et),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ua(i,e,t,n,s,r){ro.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Wo.x=r*ro.x-s*ro.y,Wo.y=s*ro.x+r*ro.y):Wo.copy(ro),i.copy(e),i.x+=Wo.x,i.y+=Wo.y,i.applyMatrix4(v0)}const Ys=new L,_c=new L,Fa=new L,Oa=new L;class Gl{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ys)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ys.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ys.copy(this.origin).addScaledVector(this.direction,t),Ys.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){_c.copy(e).add(t).multiplyScalar(.5),Fa.copy(t).sub(e).normalize(),Oa.copy(this.origin).sub(_c);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Fa),a=Oa.dot(this.direction),c=-Oa.dot(Fa),l=Oa.lengthSq(),u=Math.abs(1-o*o);let d,f,h,p;if(u>0)if(d=o*c-a,f=o*a-c,p=r*u,d>=0)if(f>=-p)if(f<=p){const _=1/u;d*=_,f*=_,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l):f<=p?(d=0,f=Math.min(Math.max(-r,-c),r),h=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(_c).addScaledVector(Fa,f),h}intersectSphere(e,t){if(e.radius<0)return null;Ys.subVectors(e.center,this.origin);const n=Ys.dot(this.direction),s=Ys.dot(Ys)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ys)!==null}intersectTriangle(e,t,n,s,r){const o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,d=e.x-o.x,f=e.y-o.y,h=e.z-o.z,p=t.x-o.x,_=t.y-o.y,m=t.z-o.z,g=n.x-o.x,b=n.y-o.y,T=n.z-o.z,y=Math.abs(c),A=Math.abs(l),R=Math.abs(u);let F,x,P,N,k,V,te,X,j,Se,oe,Re;if(y>=A&&y>=R?(P=c,V=d,j=p,Re=g,c>=0?(F=l,x=u,N=f,k=h,te=_,X=m,Se=b,oe=T):(F=u,x=l,N=h,k=f,te=m,X=_,Se=T,oe=b)):A>=R?(P=l,V=f,j=_,Re=b,l>=0?(F=u,x=c,N=h,k=d,te=m,X=p,Se=T,oe=g):(F=c,x=u,N=d,k=h,te=p,X=m,Se=g,oe=T)):(P=u,V=h,j=m,Re=T,u>=0?(F=c,x=l,N=d,k=f,te=p,X=_,Se=g,oe=b):(F=l,x=c,N=f,k=d,te=_,X=p,Se=b,oe=g)),P===0)return null;const xe=F/P,Te=x/P,de=1/P,tt=N-xe*V,Mt=k-Te*V,Wt=te-xe*j,Y=X-Te*j,st=Se-xe*Re,be=oe-Te*Re,Oe=st*Y-be*Wt,Ze=tt*be-Mt*st,J=Wt*Mt-Y*tt;if(s){if(Oe<0||Ze<0||J<0)return null}else if((Oe<0||Ze<0||J<0)&&(Oe>0||Ze>0||J>0))return null;const Ve=Oe+Ze+J;if(Ve===0)return null;const Ke=de*(Oe*V+Ze*j+J*Re);return(Ve>0?Ke<0:Ke>0)?null:this.at(Ke/Ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ns extends vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.combine=i0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zh=new Mn,yr=new Gl,za=new Wr,Bh=new L,Ba=new L,ka=new L,Ga=new L,xc=new L,Ha=new L,kh=new L,Va=new L;class Ot extends Zn{constructor(e=new Pn,t=new ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ha.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(xc.fromBufferAttribute(d,e),o?Ha.addScaledVector(xc,u):Ha.addScaledVector(xc.sub(t),u))}t.add(Ha)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(r),yr.copy(e.ray).recast(e.near),!(za.containsPoint(yr.origin)===!1&&(yr.intersectSphere(za,Bh)===null||yr.origin.distanceToSquared(Bh)>(e.far-e.near)**2))&&(zh.copy(r).invert(),yr.copy(e.ray).applyMatrix4(zh),!(n.boundingBox!==null&&yr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yr)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=o[m.materialIndex],b=Math.max(m.start,h.start),T=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let y=b,A=T;y<A;y+=3){const R=a.getX(y),F=a.getX(y+1),x=a.getX(y+2);s=Wa(this,g,e,n,l,u,d,R,F,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const p=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=p,g=_;m<g;m+=3){const b=a.getX(m),T=a.getX(m+1),y=a.getX(m+2);s=Wa(this,o,e,n,l,u,d,b,T,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=o[m.materialIndex],b=Math.max(m.start,h.start),T=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let y=b,A=T;y<A;y+=3){const R=y,F=y+1,x=y+2;s=Wa(this,g,e,n,l,u,d,R,F,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const p=Math.max(0,h.start),_=Math.min(c.count,h.start+h.count);for(let m=p,g=_;m<g;m+=3){const b=m,T=m+1,y=m+2;s=Wa(this,o,e,n,l,u,d,b,T,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Ap(i,e,t,n,s,r,o,a){let c;if(e.side===zi?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Fr,a),c===null)return null;Va.copy(a),Va.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Va);return l<t.near||l>t.far?null:{distance:l,point:Va.clone(),object:i}}function Wa(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Ba),i.getVertexPosition(c,ka),i.getVertexPosition(l,Ga);const u=Ap(i,e,t,n,Ba,ka,Ga,kh);if(u){const d=new L;ls.getBarycoord(kh,Ba,ka,Ga,d),s&&(u.uv=ls.getInterpolatedAttribute(s,a,c,l,d,new et)),r&&(u.uv1=ls.getInterpolatedAttribute(r,a,c,l,d,new et)),o&&(u.normal=ls.getInterpolatedAttribute(o,a,c,l,d,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new L,materialIndex:0};ls.getNormal(Ba,ka,Ga,f.normal),u.face=f,u.barycoord=d}return u}class _0 extends Ii{constructor(e=null,t=1,n=1,s,r,o,a,c,l=xi,u=xi,d,f){super(null,o,a,c,l,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gh extends Vn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const oo=new Mn,Hh=new Mn,Xa=[],Vh=new Vr,Cp=new Mn,Yo=new Ot,qo=new Wr;class ml extends Ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Cp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,oo),Vh.copy(e.boundingBox).applyMatrix4(oo),this.boundingBox.union(Vh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,oo),qo.copy(e.boundingSphere).applyMatrix4(oo),this.boundingSphere.union(qo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Yo.geometry=this.geometry,Yo.material=this.material,Yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qo.copy(this.boundingSphere),qo.applyMatrix4(n),e.ray.intersectsSphere(qo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,oo),Hh.multiplyMatrices(n,oo),Yo.matrixWorld=Hh,Yo.raycast(e,Xa);for(let o=0,a=Xa.length;o<a;o++){const c=Xa[o];c.instanceId=r,c.object=this,t.push(c)}Xa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Gh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new _0(new Float32Array(s*this.count),s,this.count,qu,_s));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const br=new Wr,Rp=new et(.5,.5),Ya=new L;class ih{constructor(e=new mr,t=new mr,n=new mr,s=new mr,r=new mr,o=new mr){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Is,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],f=r[6],h=r[7],p=r[8],_=r[9],m=r[10],g=r[11],b=r[12],T=r[13],y=r[14],A=r[15];if(s[0].setComponents(l-o,h-u,g-p,A-b).normalize(),s[1].setComponents(l+o,h+u,g+p,A+b).normalize(),s[2].setComponents(l+a,h+d,g+_,A+T).normalize(),s[3].setComponents(l-a,h-d,g-_,A-T).normalize(),n)s[4].setComponents(c,f,m,y).normalize(),s[5].setComponents(l-c,h-f,g-m,A-y).normalize();else if(s[4].setComponents(l-c,h-f,g-m,A-y).normalize(),t===Is)s[5].setComponents(l+c,h+f,g+m,A+y).normalize();else if(t===ha)s[5].setComponents(c,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){br.center.set(0,0,0);const t=Rp.distanceTo(e.center);return br.radius=.7071067811865476+t,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ya.x=s.normal.x>0?e.max.x:e.min.x,Ya.y=s.normal.y>0?e.max.y:e.min.y,Ya.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ya)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class x0 extends vr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rl=new L,Pl=new L,Wh=new Mn,Zo=new Gl,qa=new Wr,Mc=new L,Xh=new L;class Pp extends Zn{constructor(e=new Pn,t=new x0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Rl.fromBufferAttribute(t,s-1),Pl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Rl.distanceTo(Pl);e.setAttribute("lineDistance",new an(n,1))}else rn("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(s),qa.radius+=r,e.ray.intersectsSphere(qa)===!1)return;Wh.copy(s).invert(),Zo.copy(e.ray).applyMatrix4(Wh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=h,m=p-1;_<m;_+=l){const g=u.getX(_),b=u.getX(_+1),T=Za(this,e,Zo,c,g,b,_);T&&t.push(T)}if(this.isLineLoop){const _=u.getX(p-1),m=u.getX(h),g=Za(this,e,Zo,c,_,m,p-1);g&&t.push(g)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=h,m=p-1;_<m;_+=l){const g=Za(this,e,Zo,c,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){const _=Za(this,e,Zo,c,p-1,h,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Za(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(Rl.fromBufferAttribute(a,s),Pl.fromBufferAttribute(a,r),t.distanceSqToSegment(Rl,Pl,Mc,Xh)>n)return;Mc.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Mc);if(!(l<e.near||l>e.far))return{distance:l,point:Xh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Yh=new L,qh=new L;class Lp extends Pp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Yh.fromBufferAttribute(t,s),qh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Yh.distanceTo(qh);e.setAttribute("lineDistance",new an(n,1))}else rn("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Dr extends vr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zh=new Mn,wu=new Gl,$a=new Wr,Ka=new L;class To extends Zn{constructor(e=new Pn,t=new Dr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(s),$a.radius+=r,e.ray.intersectsSphere($a)===!1)return;Zh.copy(s).invert(),wu.copy(e.ray).applyMatrix4(Zh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let p=f,_=h;p<_;p++){const m=l.getX(p);Ka.fromBufferAttribute(d,m),$h(Ka,m,c,s,e,t,this)}}else{const f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let p=f,_=h;p<_;p++)Ka.fromBufferAttribute(d,p),$h(Ka,p,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function $h(i,e,t,n,s,r,o){const a=wu.distanceSqToPoint(i);if(a<t){const c=new L;wu.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class M0 extends Ii{constructor(e=[],t=Or,n,s,r,o,a,c,l,u){super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ip extends Ii{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fa extends Ii{constructor(e,t,n=zs,s,r,o,a=xi,c=xi,l,u=js,d=1){if(u!==js&&u!==Pr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new eh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Dp extends fa{constructor(e,t=zs,n=Or,s,r,o=xi,a=xi,c,l=js){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class y0 extends Ii{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qn extends Pn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let f=0,h=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new an(l,3)),this.setAttribute("normal",new an(u,3)),this.setAttribute("uv",new an(d,2));function p(_,m,g,b,T,y,A,R,F,x,P){const N=y/F,k=A/x,V=y/2,te=A/2,X=R/2,j=F+1,Se=x+1;let oe=0,Re=0;const xe=new L;for(let Te=0;Te<Se;Te++){const de=Te*k-te;for(let tt=0;tt<j;tt++){const Mt=tt*N-V;xe[_]=Mt*b,xe[m]=de*T,xe[g]=X,l.push(xe.x,xe.y,xe.z),xe[_]=0,xe[m]=0,xe[g]=R>0?1:-1,u.push(xe.x,xe.y,xe.z),d.push(tt/F),d.push(1-Te/x),oe+=1}}for(let Te=0;Te<x;Te++)for(let de=0;de<F;de++){const tt=f+de+j*Te,Mt=f+de+j*(Te+1),Wt=f+(de+1)+j*(Te+1),Y=f+(de+1)+j*Te;c.push(tt,Mt,Y),c.push(Mt,Wt,Y),Re+=6}a.addGroup(h,Re,P),h+=Re,f+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class vo extends Pn{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],u=t/2,d=Math.PI/2*e,f=t,h=2*d+f,p=n*2+r,_=s+1,m=new L,g=new L;for(let b=0;b<=p;b++){let T=0,y=0,A=0,R=0;if(b<=n){const P=b/n,N=P*Math.PI/2;y=-u-e*Math.cos(N),A=e*Math.sin(N),R=-e*Math.cos(N),T=P*d}else if(b<=n+r){const P=(b-n)/r;y=-u+P*t,A=e,R=0,T=d+P*f}else{const P=(b-n-r)/n,N=P*Math.PI/2;y=u+e*Math.sin(N),A=e*Math.cos(N),R=e*Math.sin(N),T=d+f+P*d}const F=Math.max(0,Math.min(1,T/h));let x=0;b===0?x=.5/s:b===p&&(x=-.5/s);for(let P=0;P<=s;P++){const N=P/s,k=N*Math.PI*2,V=Math.sin(k),te=Math.cos(k);g.x=-A*te,g.y=y,g.z=A*V,a.push(g.x,g.y,g.z),m.set(-A*te,R,A*V),m.normalize(),c.push(m.x,m.y,m.z),l.push(N+x,F)}if(b>0){const P=(b-1)*_;for(let N=0;N<s;N++){const k=P+N,V=P+N+1,te=b*_+N,X=b*_+N+1;o.push(k,V,te),o.push(V,X,te)}}}this.setIndex(o),this.setAttribute("position",new an(a,3)),this.setAttribute("normal",new an(c,3)),this.setAttribute("uv",new an(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Nr extends Pn{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new L,u=new et;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const h=n+d/t*s;l.x=e*Math.cos(h),l.y=e*Math.sin(h),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new an(o,3)),this.setAttribute("normal",new an(a,3)),this.setAttribute("uv",new an(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class jn extends Pn{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],h=[];let p=0;const _=[],m=n/2;let g=0;b(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new an(d,3)),this.setAttribute("normal",new an(f,3)),this.setAttribute("uv",new an(h,2));function b(){const y=new L,A=new L;let R=0;const F=(t-e)/n;for(let x=0;x<=r;x++){const P=[],N=x/r,k=N*(t-e)+e;for(let V=0;V<=s;V++){const te=V/s,X=te*c+a,j=Math.sin(X),Se=Math.cos(X);A.x=k*j,A.y=-N*n+m,A.z=k*Se,d.push(A.x,A.y,A.z),y.set(j,F,Se).normalize(),f.push(y.x,y.y,y.z),h.push(te,1-N),P.push(p++)}_.push(P)}for(let x=0;x<s;x++)for(let P=0;P<r;P++){const N=_[P][x],k=_[P+1][x],V=_[P+1][x+1],te=_[P][x+1];(e>0||P!==0)&&(u.push(N,k,te),R+=3),(t>0||P!==r-1)&&(u.push(k,V,te),R+=3)}l.addGroup(g,R,0),g+=R}function T(y){const A=p,R=new et,F=new L;let x=0;const P=y===!0?e:t,N=y===!0?1:-1;for(let V=1;V<=s;V++)d.push(0,m*N,0),f.push(0,N,0),h.push(.5,.5),p++;const k=p;for(let V=0;V<=s;V++){const X=V/s*c+a,j=Math.cos(X),Se=Math.sin(X);F.x=P*Se,F.y=m*N,F.z=P*j,d.push(F.x,F.y,F.z),f.push(0,N,0),R.x=j*.5+.5,R.y=Se*.5*N+.5,h.push(R.x,R.y),p++}for(let V=0;V<s;V++){const te=A+V,X=k+V;y===!0?u.push(X,X+1,te):u.push(X+1,X,te),x+=3}l.addGroup(g,x,y===!0?1:2),g+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Lo extends jn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Lo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sh extends Pn{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new an(r,3)),this.setAttribute("normal",new an(r.slice(),3)),this.setAttribute("uv",new an(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const T=new L,y=new L,A=new L;for(let R=0;R<t.length;R+=3)h(t[R+0],T),h(t[R+1],y),h(t[R+2],A),c(T,y,A,b)}function c(b,T,y,A){const R=A+1,F=[];for(let x=0;x<=R;x++){F[x]=[];const P=b.clone().lerp(y,x/R),N=T.clone().lerp(y,x/R),k=R-x;for(let V=0;V<=k;V++)V===0&&x===R?F[x][V]=P:F[x][V]=P.clone().lerp(N,V/k)}for(let x=0;x<R;x++)for(let P=0;P<2*(R-x)-1;P++){const N=Math.floor(P/2);P%2===0?(f(F[x][N+1]),f(F[x+1][N]),f(F[x][N])):(f(F[x][N+1]),f(F[x+1][N+1]),f(F[x+1][N]))}}function l(b){const T=new L;for(let y=0;y<r.length;y+=3)T.x=r[y+0],T.y=r[y+1],T.z=r[y+2],T.normalize().multiplyScalar(b),r[y+0]=T.x,r[y+1]=T.y,r[y+2]=T.z}function u(){const b=new L;for(let T=0;T<r.length;T+=3){b.x=r[T+0],b.y=r[T+1],b.z=r[T+2];const y=m(b)/2/Math.PI+.5,A=g(b)/Math.PI+.5;o.push(y,1-A)}p(),d()}function d(){for(let b=0;b<o.length;b+=6){const T=o[b+0],y=o[b+2],A=o[b+4],R=Math.max(T,y,A),F=Math.min(T,y,A);R>.9&&F<.1&&(T<.2&&(o[b+0]+=1),y<.2&&(o[b+2]+=1),A<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function h(b,T){const y=b*3;T.x=e[y+0],T.y=e[y+1],T.z=e[y+2]}function p(){const b=new L,T=new L,y=new L,A=new L,R=new et,F=new et,x=new et;for(let P=0,N=0;P<r.length;P+=9,N+=6){b.set(r[P+0],r[P+1],r[P+2]),T.set(r[P+3],r[P+4],r[P+5]),y.set(r[P+6],r[P+7],r[P+8]),R.set(o[N+0],o[N+1]),F.set(o[N+2],o[N+3]),x.set(o[N+4],o[N+5]),A.copy(b).add(T).add(y).divideScalar(3);const k=m(A);_(R,N+0,b,k),_(F,N+2,T,k),_(x,N+4,y,k)}}function _(b,T,y,A){A<0&&b.x===1&&(o[T]=b.x-1),y.x===0&&y.z===0&&(o[T]=A/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function g(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sh(e.vertices,e.indices,e.radius,e.detail)}}class ks{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){rn("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],f=n[s+1]-u,h=(o-u)/f;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new et:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new L,s=[],r=[],o=[],a=new L,c=new Mn;for(let h=0;h<=e;h++){const p=h/e;s[h]=this.getTangentAt(p,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(yn(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(c.makeRotationAxis(a,p))}o[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(yn(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(h=-h);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],h*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class rh extends ks{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new et){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,h=l-this.aY;c=f*u-h*d+this.aX,l=f*d+h*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Np extends rh{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function oh(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,h=(a-o)/u-(c-o)/(u+d)+(c-a)/d;f*=u,h*=u,s(o,a,f,h)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Kh=new L,Jh=new L,yc=new oh,bc=new oh,Sc=new oh;class Up extends ks{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Jh.subVectors(s[0],s[1]).add(s[0]),l=Jh);const d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Kh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Kh),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(d),h),_=Math.pow(d.distanceToSquared(f),h),m=Math.pow(f.distanceToSquared(u),h);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),yc.initNonuniformCatmullRom(l.x,d.x,f.x,u.x,p,_,m),bc.initNonuniformCatmullRom(l.y,d.y,f.y,u.y,p,_,m),Sc.initNonuniformCatmullRom(l.z,d.z,f.z,u.z,p,_,m)}else this.curveType==="catmullrom"&&(yc.initCatmullRom(l.x,d.x,f.x,u.x,this.tension),bc.initCatmullRom(l.y,d.y,f.y,u.y,this.tension),Sc.initCatmullRom(l.z,d.z,f.z,u.z,this.tension));return n.set(yc.calc(c),bc.calc(c),Sc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Qh(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Fp(i,e){const t=1-i;return t*t*e}function Op(i,e){return 2*(1-i)*i*e}function zp(i,e){return i*i*e}function ra(i,e,t,n){return Fp(i,e)+Op(i,t)+zp(i,n)}function Bp(i,e){const t=1-i;return t*t*t*e}function kp(i,e){const t=1-i;return 3*t*t*i*e}function Gp(i,e){return 3*(1-i)*i*i*e}function Hp(i,e){return i*i*i*e}function oa(i,e,t,n,s){return Bp(i,e)+kp(i,t)+Gp(i,n)+Hp(i,s)}class b0 extends ks{constructor(e=new et,t=new et,n=new et,s=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new et){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(oa(e,s.x,r.x,o.x,a.x),oa(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vp extends ks{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(oa(e,s.x,r.x,o.x,a.x),oa(e,s.y,r.y,o.y,a.y),oa(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class S0 extends ks{constructor(e=new et,t=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new et){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new et){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wp extends ks{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class w0 extends ks{constructor(e=new et,t=new et,n=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new et){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ra(e,s.x,r.x,o.x),ra(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xp extends ks{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ra(e,s.x,r.x,o.x),ra(e,s.y,r.y,o.y),ra(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class T0 extends ks{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new et){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Qh(a,c.x,l.x,u.x,d.x),Qh(a,c.y,l.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new et().fromArray(s))}return this}}var Tu=Object.freeze({__proto__:null,ArcCurve:Np,CatmullRomCurve3:Up,CubicBezierCurve:b0,CubicBezierCurve3:Vp,EllipseCurve:rh,LineCurve:S0,LineCurve3:Wp,QuadraticBezierCurve:w0,QuadraticBezierCurve3:Xp,SplineCurve:T0});class Yp extends ks{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Tu[s.type]().fromJSON(s))}return this}}class jh extends Yp{constructor(e){super(),this.type="Path",this.currentPoint=new et,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new S0(this.currentPoint.clone(),new et(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new w0(this.currentPoint.clone(),new et(e,t),new et(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new b0(this.currentPoint.clone(),new et(e,t),new et(n,s),new et(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new T0(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new rh(e,t,n,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class gl extends jh{constructor(e){super(e),this.uuid=Fs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new jh().fromJSON(s))}return this}}function qp(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=E0(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Qp(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let u=a,d=c;for(let f=t;f<s;f+=t){const h=i[f],p=i[f+1];h<a&&(a=h),p<c&&(c=p),h>u&&(u=h),p>d&&(d=p)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return da(r,o,t,a,c,l,0),o}function E0(i,e,t,n,s){let r;if(s===cm(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=ef(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=ef(o/n|0,i[o],i[o+1],r);return r&&Io(r,r.next)&&(ma(r),r=r.next),r}function kr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Io(t,t.next)||ti(t.prev,t,t.next)===0)){if(ma(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function da(i,e,t,n,s,r,o){if(!i)return;!o&&r&&im(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?$p(i,n,s,r):Zp(i)){e.push(c.i,i.i,l.i),ma(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Kp(kr(i),e),da(i,e,t,n,s,r,2)):o===2&&Jp(i,e,t,n,s,r):da(kr(i),e,t,n,s,r,1);break}}}function Zp(i){const e=i.prev,t=i,n=i.next;if(ti(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=Math.min(s,r,o),d=Math.min(a,c,l),f=Math.max(s,r,o),h=Math.max(a,c,l);let p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=d&&p.y<=h&&ea(s,a,r,c,o,l,p.x,p.y)&&ti(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function $p(i,e,t,n){const s=i.prev,r=i,o=i.next;if(ti(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,d=r.y,f=o.y,h=Math.min(a,c,l),p=Math.min(u,d,f),_=Math.max(a,c,l),m=Math.max(u,d,f),g=Eu(h,p,e,t,n),b=Eu(_,m,e,t,n);let T=i.prevZ,y=i.nextZ;for(;T&&T.z>=g&&y&&y.z<=b;){if(T.x>=h&&T.x<=_&&T.y>=p&&T.y<=m&&T!==s&&T!==o&&ea(a,u,c,d,l,f,T.x,T.y)&&ti(T.prev,T,T.next)>=0||(T=T.prevZ,y.x>=h&&y.x<=_&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&ea(a,u,c,d,l,f,y.x,y.y)&&ti(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;T&&T.z>=g;){if(T.x>=h&&T.x<=_&&T.y>=p&&T.y<=m&&T!==s&&T!==o&&ea(a,u,c,d,l,f,T.x,T.y)&&ti(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;y&&y.z<=b;){if(y.x>=h&&y.x<=_&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&ea(a,u,c,d,l,f,y.x,y.y)&&ti(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Kp(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Io(n,s)&&C0(n,t,t.next,s)&&pa(n,s)&&pa(s,n)&&(e.push(n.i,t.i,s.i),ma(t),ma(t.next),t=i=s),t=t.next}while(t!==i);return kr(t)}function Jp(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&om(o,a)){let c=R0(o,a);o=kr(o,o.next),c=kr(c,c.next),da(o,e,t,n,s,r,0),da(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Qp(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=E0(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(rm(l))}s.sort(jp);for(let r=0;r<s.length;r++)t=em(s[r],t);return t}function jp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function em(i,e){const t=tm(i,e);if(!t)return e;const n=R0(t,i);return kr(n,n.next),kr(t,t.next)}function tm(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(Io(i,t))return t;do{if(Io(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&A0(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){const d=Math.abs(s-t.y)/(n-t.x);pa(t,i)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&nm(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function nm(i,e){return ti(i.prev,i,e.prev)<0&&ti(e.next,i,i.next)<0}function im(i,e,t,n){let s=i;do s.z===0&&(s.z=Eu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,sm(s)}function sm(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Eu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function rm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function A0(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function ea(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&A0(i,e,t,n,s,r,o,a)}function om(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!am(i,e)&&(pa(i,e)&&pa(e,i)&&lm(i,e)&&(ti(i.prev,i,e.prev)||ti(i,e.prev,e))||Io(i,e)&&ti(i.prev,i,i.next)>0&&ti(e.prev,e,e.next)>0)}function ti(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Io(i,e){return i.x===e.x&&i.y===e.y}function C0(i,e,t,n){const s=Qa(ti(i,e,t)),r=Qa(ti(i,e,n)),o=Qa(ti(t,n,i)),a=Qa(ti(t,n,e));return!!(s!==r&&o!==a||s===0&&Ja(i,t,e)||r===0&&Ja(i,n,e)||o===0&&Ja(t,i,n)||a===0&&Ja(t,e,n))}function Ja(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Qa(i){return i>0?1:i<0?-1:0}function am(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&C0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function pa(i,e){return ti(i.prev,i,i.next)<0?ti(i,e,i.next)>=0&&ti(i,i.prev,e)>=0:ti(i,e,i.prev)<0||ti(i,i.next,e)<0}function lm(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function R0(i,e){const t=Au(i.i,i.x,i.y),n=Au(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ef(i,e,t,n){const s=Au(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ma(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Au(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function cm(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class um{static triangulate(e,t,n=2){return qp(e,t,n)}}class _o{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return _o.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];tf(e),nf(n,e);let o=e.length;t.forEach(tf);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,nf(n,t[c]);const a=um.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function tf(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function nf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class aa extends Pn{constructor(e=new gl([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new an(s,3)),this.setAttribute("uv",new an(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:h-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:hm;let T,y=!1,A,R,F,x;if(g){T=g.getSpacedPoints(u),y=!0,f=!1;const me=g.isCatmullRomCurve3?g.closed:!1;A=g.computeFrenetFrames(u,me),R=new L,F=new L,x=new L}f||(m=0,h=0,p=0,_=0);const P=a.extractPoints(l);let N=P.shape;const k=P.holes;if(!_o.isClockWise(N)){N=N.reverse();for(let me=0,Le=k.length;me<Le;me++){const Be=k[me];_o.isClockWise(Be)&&(k[me]=Be.reverse())}}function te(me){const Be=10000000000000001e-36;let Ye=me[0];for(let Je=1;Je<=me.length;Je++){const bt=Je%me.length,At=me[bt],z=At.x-Ye.x,H=At.y-Ye.y,E=z*z+H*H,ue=Math.max(Math.abs(At.x),Math.abs(At.y),Math.abs(Ye.x),Math.abs(Ye.y)),Pe=Be*ue*ue;if(E<=Pe){me.splice(bt,1),Je--;continue}Ye=At}}te(N),k.forEach(te);const X=k.length,j=N;for(let me=0;me<X;me++){const Le=k[me];N=N.concat(Le)}function Se(me,Le,Be){return Le||Rn("ExtrudeGeometry: vec does not exist"),me.clone().addScaledVector(Le,Be)}const oe=N.length;function Re(me,Le,Be){let Ye,Je,bt;const At=me.x-Le.x,z=me.y-Le.y,H=Be.x-me.x,E=Be.y-me.y,ue=At*At+z*z,Pe=At*E-z*H;if(Math.abs(Pe)>Number.EPSILON){const C=Math.sqrt(ue),v=Math.sqrt(H*H+E*E),G=Le.x-z/C,re=Le.y+At/C,ge=Be.x-E/v,Ge=Be.y+H/v,He=((ge-G)*E-(Ge-re)*H)/(At*E-z*H);Ye=G+At*He-me.x,Je=re+z*He-me.y;const we=Ye*Ye+Je*Je;if(we<=2)return new et(Ye,Je);bt=Math.sqrt(we/2)}else{let C=!1;At>Number.EPSILON?H>Number.EPSILON&&(C=!0):At<-Number.EPSILON?H<-Number.EPSILON&&(C=!0):Math.sign(z)===Math.sign(E)&&(C=!0),C?(Ye=-z,Je=At,bt=Math.sqrt(ue)):(Ye=At,Je=z,bt=Math.sqrt(ue/2))}return new et(Ye/bt,Je/bt)}const xe=[];for(let me=0,Le=j.length,Be=Le-1,Ye=me+1;me<Le;me++,Be++,Ye++)Be===Le&&(Be=0),Ye===Le&&(Ye=0),xe[me]=Re(j[me],j[Be],j[Ye]);const Te=[];let de,tt=xe.concat();for(let me=0,Le=X;me<Le;me++){const Be=k[me];de=[];for(let Ye=0,Je=Be.length,bt=Je-1,At=Ye+1;Ye<Je;Ye++,bt++,At++)bt===Je&&(bt=0),At===Je&&(At=0),de[Ye]=Re(Be[Ye],Be[bt],Be[At]);Te.push(de),tt=tt.concat(de)}let Mt;if(m===0)Mt=_o.triangulateShape(j,k);else{const me=[],Le=[];for(let Be=0;Be<m;Be++){const Ye=Be/m,Je=h*Math.cos(Ye*Math.PI/2),bt=p*Math.sin(Ye*Math.PI/2)+_;for(let At=0,z=j.length;At<z;At++){const H=Se(j[At],xe[At],bt);Ze(H.x,H.y,-Je),Ye===0&&me.push(H)}for(let At=0,z=X;At<z;At++){const H=k[At];de=Te[At];const E=[];for(let ue=0,Pe=H.length;ue<Pe;ue++){const C=Se(H[ue],de[ue],bt);Ze(C.x,C.y,-Je),Ye===0&&E.push(C)}Ye===0&&Le.push(E)}}Mt=_o.triangulateShape(me,Le)}const Wt=Mt.length,Y=p+_;for(let me=0;me<oe;me++){const Le=f?Se(N[me],tt[me],Y):N[me];y?(F.copy(A.normals[0]).multiplyScalar(Le.x),R.copy(A.binormals[0]).multiplyScalar(Le.y),x.copy(T[0]).add(F).add(R),Ze(x.x,x.y,x.z)):Ze(Le.x,Le.y,0)}for(let me=1;me<=u;me++)for(let Le=0;Le<oe;Le++){const Be=f?Se(N[Le],tt[Le],Y):N[Le];y?(F.copy(A.normals[me]).multiplyScalar(Be.x),R.copy(A.binormals[me]).multiplyScalar(Be.y),x.copy(T[me]).add(F).add(R),Ze(x.x,x.y,x.z)):Ze(Be.x,Be.y,d/u*me)}for(let me=m-1;me>=0;me--){const Le=me/m,Be=h*Math.cos(Le*Math.PI/2),Ye=p*Math.sin(Le*Math.PI/2)+_;for(let Je=0,bt=j.length;Je<bt;Je++){const At=Se(j[Je],xe[Je],Ye);Ze(At.x,At.y,d+Be)}for(let Je=0,bt=k.length;Je<bt;Je++){const At=k[Je];de=Te[Je];for(let z=0,H=At.length;z<H;z++){const E=Se(At[z],de[z],Ye);y?Ze(E.x,E.y+T[u-1].y,T[u-1].x+Be):Ze(E.x,E.y,d+Be)}}}st(),be();function st(){const me=s.length/3;if(f){let Le=0,Be=oe*Le;for(let Ye=0;Ye<Wt;Ye++){const Je=Mt[Ye];J(Je[2]+Be,Je[1]+Be,Je[0]+Be)}Le=u+m*2,Be=oe*Le;for(let Ye=0;Ye<Wt;Ye++){const Je=Mt[Ye];J(Je[0]+Be,Je[1]+Be,Je[2]+Be)}}else{for(let Le=0;Le<Wt;Le++){const Be=Mt[Le];J(Be[2],Be[1],Be[0])}for(let Le=0;Le<Wt;Le++){const Be=Mt[Le];J(Be[0]+oe*u,Be[1]+oe*u,Be[2]+oe*u)}}n.addGroup(me,s.length/3-me,0)}function be(){const me=s.length/3;let Le=0;Oe(j,Le),Le+=j.length;for(let Be=0,Ye=k.length;Be<Ye;Be++){const Je=k[Be];Oe(Je,Le),Le+=Je.length}n.addGroup(me,s.length/3-me,1)}function Oe(me,Le){let Be=me.length;for(;--Be>=0;){const Ye=Be;let Je=Be-1;Je<0&&(Je=me.length-1);for(let bt=0,At=u+m*2;bt<At;bt++){const z=oe*bt,H=oe*(bt+1),E=Le+Ye+z,ue=Le+Je+z,Pe=Le+Je+H,C=Le+Ye+H;Ve(E,ue,Pe,C)}}}function Ze(me,Le,Be){c.push(me),c.push(Le),c.push(Be)}function J(me,Le,Be){Ke(me),Ke(Le),Ke(Be);const Ye=s.length/3,Je=b.generateTopUV(n,s,Ye-3,Ye-2,Ye-1);yt(Je[0]),yt(Je[1]),yt(Je[2])}function Ve(me,Le,Be,Ye){Ke(me),Ke(Le),Ke(Ye),Ke(Le),Ke(Be),Ke(Ye);const Je=s.length/3,bt=b.generateSideWallUV(n,s,Je-6,Je-3,Je-2,Je-1);yt(bt[0]),yt(bt[1]),yt(bt[3]),yt(bt[1]),yt(bt[2]),yt(bt[3])}function Ke(me){s.push(c[me*3+0]),s.push(c[me*3+1]),s.push(c[me*3+2])}function yt(me){r.push(me.x),r.push(me.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return fm(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Tu[s.type]().fromJSON(s)),new aa(n,e.options)}}const hm={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new et(r,o),new et(a,c),new et(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],d=e[n*3+2],f=e[s*3],h=e[s*3+1],p=e[s*3+2],_=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new et(o,1-c),new et(l,1-d),new et(f,1-p),new et(_,1-g)]:[new et(a,1-c),new et(u,1-d),new et(h,1-p),new et(m,1-g)]}};function fm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Eo extends sh{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Eo(e.radius,e.detail)}}class ah extends Pn{constructor(e=[new et(0,-.5),new et(.5,0),new et(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=yn(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/t,d=new L,f=new et,h=new L,p=new L,_=new L;let m=0,g=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,g=e[b+1].y-e[b].y,h.x=g*1,h.y=-m,h.z=g*0,_.copy(h),h.normalize(),c.push(h.x,h.y,h.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[b+1].x-e[b].x,g=e[b+1].y-e[b].y,h.x=g*1,h.y=-m,h.z=g*0,p.copy(h),h.x+=_.x,h.y+=_.y,h.z+=_.z,h.normalize(),c.push(h.x,h.y,h.z),_.copy(p)}for(let b=0;b<=t;b++){const T=n+b*u*s,y=Math.sin(T),A=Math.cos(T);for(let R=0;R<=e.length-1;R++){d.x=e[R].x*y,d.y=e[R].y,d.z=e[R].x*A,o.push(d.x,d.y,d.z),f.x=b/t,f.y=R/(e.length-1),a.push(f.x,f.y);const F=c[3*R+0]*y,x=c[3*R+1],P=c[3*R+0]*A;l.push(F,x,P)}}for(let b=0;b<t;b++)for(let T=0;T<e.length-1;T++){const y=T+b*e.length,A=y,R=y+e.length,F=y+e.length+1,x=y+1;r.push(A,R,x),r.push(F,x,R)}this.setIndex(r),this.setAttribute("position",new an(o,3)),this.setAttribute("uv",new an(a,2)),this.setAttribute("normal",new an(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ah(e.points,e.segments,e.phiStart,e.phiLength)}}class ni extends Pn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,d=e/a,f=t/c,h=[],p=[],_=[],m=[];for(let g=0;g<u;g++){const b=g*f-o;for(let T=0;T<l;T++){const y=T*d-r;p.push(y,-b,0),_.push(0,0,1),m.push(T/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let b=0;b<a;b++){const T=b+l*g,y=b+l*(g+1),A=b+1+l*(g+1),R=b+1+l*g;h.push(T,y,R),h.push(y,A,R)}this.setIndex(h),this.setAttribute("position",new an(p,3)),this.setAttribute("normal",new an(_,3)),this.setAttribute("uv",new an(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ni(e.width,e.height,e.widthSegments,e.heightSegments)}}class lh extends Pn{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let d=e;const f=(t-e)/s,h=new L,p=new et;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const g=r+m/n*o;h.x=d*Math.cos(g),h.y=d*Math.sin(g),c.push(h.x,h.y,h.z),l.push(0,0,1),p.x=(h.x/t+1)/2,p.y=(h.y/t+1)/2,u.push(p.x,p.y)}d+=f}for(let _=0;_<s;_++){const m=_*(n+1);for(let g=0;g<n;g++){const b=g+m,T=b,y=b+n+1,A=b+n+2,R=b+1;a.push(T,y,R),a.push(y,A,R)}}this.setIndex(a),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(l,3)),this.setAttribute("uv",new an(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class gi extends Pn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new L,f=new L,h=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){const b=[],T=g/n,y=o+T*a,A=e*Math.cos(y),R=Math.sqrt(e*e-A*A);let F=0;g===0&&o===0?F=.5/t:g===n&&c===Math.PI&&(F=-.5/t);for(let x=0;x<=t;x++){const P=x/t,N=s+P*r;d.x=-R*Math.cos(N),d.y=A,d.z=R*Math.sin(N),p.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),m.push(P+F,1-T),b.push(l++)}u.push(b)}for(let g=0;g<n;g++)for(let b=0;b<t;b++){const T=u[g][b+1],y=u[g][b],A=u[g+1][b],R=u[g+1][b+1];(g!==0||o>0)&&h.push(T,y,R),(g!==n-1||c<Math.PI)&&h.push(y,A,R)}this.setIndex(h),this.setAttribute("position",new an(p,3)),this.setAttribute("normal",new an(_,3)),this.setAttribute("uv",new an(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ci extends Pn{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const c=[],l=[],u=[],d=[],f=new L,h=new L,p=new L;for(let _=0;_<=n;_++){const m=o+_/n*a;for(let g=0;g<=s;g++){const b=g/s*r;h.x=(e+t*Math.cos(m))*Math.cos(b),h.y=(e+t*Math.cos(m))*Math.sin(b),h.z=t*Math.sin(m),l.push(h.x,h.y,h.z),f.x=e*Math.cos(b),f.y=e*Math.sin(b),p.subVectors(h,f).normalize(),u.push(p.x,p.y,p.z),d.push(g/s),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){const g=(s+1)*_+m-1,b=(s+1)*(_-1)+m-1,T=(s+1)*(_-1)+m,y=(s+1)*_+m;c.push(g,b,y),c.push(b,T,y)}this.setIndex(c),this.setAttribute("position",new an(l,3)),this.setAttribute("normal",new an(u,3)),this.setAttribute("uv",new an(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Do(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(sf(s))s.isRenderTargetTexture?(rn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(sf(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Fi(i){const e={};for(let t=0;t<i.length;t++){const n=Do(i[t]);for(const s in n)e[s]=n[s]}return e}function sf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function dm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function P0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:En.workingColorSpace}const ga={clone:Do,merge:Fi};var pm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pm,this.fragmentShader=mm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Do(e.uniforms),this.uniformsGroups=dm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ke().setHex(s.value);break;case"v2":this.uniforms[n].value=new et().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ei().fromArray(s.value);break;case"m3":this.uniforms[n].value=new pn().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Mn().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class L0 extends Mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sn extends vr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Su,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gm extends vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vm extends vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class xa extends Zn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class _m extends xa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const wc=new Mn,rf=new L,of=new L;class ch{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=ts,this.map=null,this.mapPass=null,this.matrix=new Mn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ih,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new ei(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;rf.setFromMatrixPosition(e.matrixWorld),t.position.copy(rf),of.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(of),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){wc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(wc,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===ha||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(wc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ja=new L,el=new bs,Es=new L;class I0 extends Zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mn,this.projectionMatrix=new Mn,this.projectionMatrixInverse=new Mn,this.coordinateSystem=Is,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ja,el,Es),Es.x===1&&Es.y===1&&Es.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ja,el,Es.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ja,el,Es),Es.x===1&&Es.y===1&&Es.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ja,el,Es.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const cr=new L,af=new et,lf=new et;class Zi extends I0{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Po*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cr.x,cr.y).multiplyScalar(-e/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cr.x,cr.y).multiplyScalar(-e/cr.z)}getViewSize(e,t){return this.getViewBounds(e,af,lf),t.subVectors(lf,af)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ia*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class xm extends ch{constructor(){super(new Zi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Po*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Tc extends xa{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Zn.DEFAULT_UP),this.updateMatrix(),this.target=new Zn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new xm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Mm extends ch{constructor(){super(new Zi(90,1,.5,500)),this.isPointLightShadow=!0}}class D0 extends xa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Mm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Hl extends I0{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ym extends ch{constructor(){super(new Hl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ec extends xa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zn.DEFAULT_UP),this.updateMatrix(),this.target=new Zn,this.shadow=new ym}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class bm extends xa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ao=-90,lo=1;class Sm extends Zn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Zi(ao,lo,e,t);s.layers=this.layers,this.add(s);const r=new Zi(ao,lo,e,t);r.layers=this.layers,this.add(r);const o=new Zi(ao,lo,e,t);o.layers=this.layers,this.add(o);const a=new Zi(ao,lo,e,t);a.layers=this.layers,this.add(a);const c=new Zi(ao,lo,e,t);c.layers=this.layers,this.add(c);const l=new Zi(ao,lo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Is)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class wm extends Zi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Tm{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Em.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Em(){this._document.hidden===!1&&this.reset()}const cf=new Mn;class N0{constructor(e,t,n=0,s=1/0){this.ray=new Gl(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new th,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Rn("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return cf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cf),this}intersectObject(e,t=!0,n=[]){return Cu(e,this,n,t),n.sort(uf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Cu(e[s],this,n,t);return n.sort(uf),n}}function uf(i,e){return i.distance-e.distance}function Cu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Cu(r[o],e,t,!0)}}class U0{static{U0.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}}function hf(i,e,t,n){const s=Am(n);switch(t){case c0:return i*e;case qu:return i*e/s.components*s.byteLength;case Zu:return i*e/s.components*s.byteLength;case zr:return i*e*2/s.components*s.byteLength;case $u:return i*e*2/s.components*s.byteLength;case u0:return i*e*3/s.components*s.byteLength;case xs:return i*e*4/s.components*s.byteLength;case Ku:return i*e*4/s.components*s.byteLength;case hl:case fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case dl:case pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zc:case Kc:return Math.max(i,16)*Math.max(e,8)/4;case qc:case $c:return Math.max(i,8)*Math.max(e,8)/2;case Jc:case Qc:case eu:case tu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case jc:case bl:case nu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case iu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case su:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ru:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ou:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case au:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case lu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case cu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case uu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case hu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case fu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case du:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case pu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case mu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case gu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case vu:case _u:case xu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Mu:case yu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Sl:case bu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Am(i){switch(i){case ts:case r0:return{byteLength:1,components:1};case ca:case o0:case Ki:return{byteLength:2,components:1};case Xu:case Yu:return{byteLength:2,components:4};case zs:case Wu:case _s:return{byteLength:4,components:1};case a0:case l0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ou}}));typeof window<"u"&&(window.__THREE__?rn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ou);function F0(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Cm(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((h,p)=>h.start-p.start);let f=0;for(let h=1;h<d.length;h++){const p=d[f],_=d[h];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,d[f]=_)}d.length=f+1;for(let h=0,p=d.length;h<p;h++){const _=d[h];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Rm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Im=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Um=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Om=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,zm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,km=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Qm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,eg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,tg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rg="gl_FragColor = linearToOutputTexel( gl_FragColor );",og=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ag=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_g=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,yg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,bg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Eg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ag=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ig=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Og=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Yg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,r1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,f1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,d1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,p1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,m1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,v1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,x1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,M1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,S1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,w1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,T1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,A1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,C1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const R1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,F1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,O1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,z1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,B1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,k1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,H1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,W1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Z1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,K1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,J1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ev=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ov=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,av=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xn={alphahash_fragment:Rm,alphahash_pars_fragment:Pm,alphamap_fragment:Lm,alphamap_pars_fragment:Im,alphatest_fragment:Dm,alphatest_pars_fragment:Nm,aomap_fragment:Um,aomap_pars_fragment:Fm,batching_pars_vertex:Om,batching_vertex:zm,begin_vertex:Bm,beginnormal_vertex:km,bsdfs:Gm,iridescence_fragment:Hm,bumpmap_pars_fragment:Vm,clipping_planes_fragment:Wm,clipping_planes_pars_fragment:Xm,clipping_planes_pars_vertex:Ym,clipping_planes_vertex:qm,color_fragment:Zm,color_pars_fragment:$m,color_pars_vertex:Km,color_vertex:Jm,common:Qm,cube_uv_reflection_fragment:jm,defaultnormal_vertex:eg,displacementmap_pars_vertex:tg,displacementmap_vertex:ng,emissivemap_fragment:ig,emissivemap_pars_fragment:sg,colorspace_fragment:rg,colorspace_pars_fragment:og,envmap_fragment:ag,envmap_common_pars_fragment:lg,envmap_pars_fragment:cg,envmap_pars_vertex:ug,envmap_physical_pars_fragment:yg,envmap_vertex:hg,fog_vertex:fg,fog_pars_vertex:dg,fog_fragment:pg,fog_pars_fragment:mg,gradientmap_pars_fragment:gg,lightmap_pars_fragment:vg,lights_lambert_fragment:_g,lights_lambert_pars_fragment:xg,lights_pars_begin:Mg,lights_toon_fragment:bg,lights_toon_pars_fragment:Sg,lights_phong_fragment:wg,lights_phong_pars_fragment:Tg,lights_physical_fragment:Eg,lights_physical_pars_fragment:Ag,lights_fragment_begin:Cg,lights_fragment_maps:Rg,lights_fragment_end:Pg,lightprobes_pars_fragment:Lg,logdepthbuf_fragment:Ig,logdepthbuf_pars_fragment:Dg,logdepthbuf_pars_vertex:Ng,logdepthbuf_vertex:Ug,map_fragment:Fg,map_pars_fragment:Og,map_particle_fragment:zg,map_particle_pars_fragment:Bg,metalnessmap_fragment:kg,metalnessmap_pars_fragment:Gg,morphinstance_vertex:Hg,morphcolor_vertex:Vg,morphnormal_vertex:Wg,morphtarget_pars_vertex:Xg,morphtarget_vertex:Yg,normal_fragment_begin:qg,normal_fragment_maps:Zg,normal_pars_fragment:$g,normal_pars_vertex:Kg,normal_vertex:Jg,normalmap_pars_fragment:Qg,clearcoat_normal_fragment_begin:jg,clearcoat_normal_fragment_maps:e1,clearcoat_pars_fragment:t1,iridescence_pars_fragment:n1,opaque_fragment:i1,packing:s1,premultiplied_alpha_fragment:r1,project_vertex:o1,dithering_fragment:a1,dithering_pars_fragment:l1,roughnessmap_fragment:c1,roughnessmap_pars_fragment:u1,shadowmap_pars_fragment:h1,shadowmap_pars_vertex:f1,shadowmap_vertex:d1,shadowmask_pars_fragment:p1,skinbase_vertex:m1,skinning_pars_vertex:g1,skinning_vertex:v1,skinnormal_vertex:_1,specularmap_fragment:x1,specularmap_pars_fragment:M1,tonemapping_fragment:y1,tonemapping_pars_fragment:b1,transmission_fragment:S1,transmission_pars_fragment:w1,uv_pars_fragment:T1,uv_pars_vertex:E1,uv_vertex:A1,worldpos_vertex:C1,background_vert:R1,background_frag:P1,backgroundCube_vert:L1,backgroundCube_frag:I1,cube_vert:D1,cube_frag:N1,depth_vert:U1,depth_frag:F1,distance_vert:O1,distance_frag:z1,equirect_vert:B1,equirect_frag:k1,linedashed_vert:G1,linedashed_frag:H1,meshbasic_vert:V1,meshbasic_frag:W1,meshlambert_vert:X1,meshlambert_frag:Y1,meshmatcap_vert:q1,meshmatcap_frag:Z1,meshnormal_vert:$1,meshnormal_frag:K1,meshphong_vert:J1,meshphong_frag:Q1,meshphysical_vert:j1,meshphysical_frag:ev,meshtoon_vert:tv,meshtoon_frag:nv,points_vert:iv,points_frag:sv,shadow_vert:rv,shadow_frag:ov,sprite_vert:av,sprite_frag:lv},It={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pn},alphaMap:{value:null},alphaMapTransform:{value:new pn},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pn}},envmap:{envMap:{value:null},envMapRotation:{value:new pn},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pn}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pn}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pn},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pn},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pn},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pn}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pn}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pn}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pn},alphaTest:{value:0},uvTransform:{value:new pn}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pn},alphaMap:{value:null},alphaMapTransform:{value:new pn},alphaTest:{value:0}}},Ls={basic:{uniforms:Fi([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:xn.meshbasic_vert,fragmentShader:xn.meshbasic_frag},lambert:{uniforms:Fi([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:xn.meshlambert_vert,fragmentShader:xn.meshlambert_frag},phong:{uniforms:Fi([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xn.meshphong_vert,fragmentShader:xn.meshphong_frag},standard:{uniforms:Fi([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xn.meshphysical_vert,fragmentShader:xn.meshphysical_frag},toon:{uniforms:Fi([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new ke(0)}}]),vertexShader:xn.meshtoon_vert,fragmentShader:xn.meshtoon_frag},matcap:{uniforms:Fi([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:xn.meshmatcap_vert,fragmentShader:xn.meshmatcap_frag},points:{uniforms:Fi([It.points,It.fog]),vertexShader:xn.points_vert,fragmentShader:xn.points_frag},dashed:{uniforms:Fi([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xn.linedashed_vert,fragmentShader:xn.linedashed_frag},depth:{uniforms:Fi([It.common,It.displacementmap]),vertexShader:xn.depth_vert,fragmentShader:xn.depth_frag},normal:{uniforms:Fi([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:xn.meshnormal_vert,fragmentShader:xn.meshnormal_frag},sprite:{uniforms:Fi([It.sprite,It.fog]),vertexShader:xn.sprite_vert,fragmentShader:xn.sprite_frag},background:{uniforms:{uvTransform:{value:new pn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xn.background_vert,fragmentShader:xn.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pn}},vertexShader:xn.backgroundCube_vert,fragmentShader:xn.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xn.cube_vert,fragmentShader:xn.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xn.equirect_vert,fragmentShader:xn.equirect_frag},distance:{uniforms:Fi([It.common,It.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xn.distance_vert,fragmentShader:xn.distance_frag},shadow:{uniforms:Fi([It.lights,It.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:xn.shadow_vert,fragmentShader:xn.shadow_frag}};Ls.physical={uniforms:Fi([Ls.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pn},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pn},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pn},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pn},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pn},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pn},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pn},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pn},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pn},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pn},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pn},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pn}}]),vertexShader:xn.meshphysical_vert,fragmentShader:xn.meshphysical_frag};const tl={r:0,b:0,g:0},cv=new Mn,O0=new pn;O0.set(-1,0,0,0,1,0,0,0,1);function uv(i,e,t,n,s,r){const o=new ke(0);let a=s===!0?0:1,c,l,u=null,d=0,f=null;function h(b){let T=b.isScene===!0?b.background:null;if(T&&T.isTexture){const y=b.backgroundBlurriness>0;T=e.get(T,y)}return T}function p(b){let T=!1;const y=h(b);y===null?m(o,a):y&&y.isColor&&(m(y,1),T=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(b,T){const y=h(T);y&&(y.isCubeTexture||y.mapping===kl)?(l===void 0&&(l=new Ot(new qn(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Do(Ls.backgroundCube.uniforms),vertexShader:Ls.backgroundCube.vertexShader,fragmentShader:Ls.backgroundCube.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,R,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(cv.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(O0),l.material.toneMapped=En.getTransfer(y.colorSpace)!==Fn,(u!==y||d!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ot(new ni(2,2),new Mi({name:"BackgroundMaterial",uniforms:Do(Ls.background.uniforms),vertexShader:Ls.background.vertexShader,fragmentShader:Ls.background.fragmentShader,side:Fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=En.getTransfer(y.colorSpace)!==Fn,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,T){b.getRGB(tl,P0(i)),t.buffers.color.setClear(tl.r,tl.g,tl.b,T,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,T=1){o.set(b),a=T,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:p,addToRenderList:_,dispose:g}}function hv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(k,V,te,X,j){let Se=!1;const oe=d(k,X,te,V);r!==oe&&(r=oe,l(r.object)),Se=h(k,X,te,j),Se&&p(k,X,te,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(Se||o)&&(o=!1,y(k,V,te,X),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return i.createVertexArray()}function l(k){return i.bindVertexArray(k)}function u(k){return i.deleteVertexArray(k)}function d(k,V,te,X){const j=X.wireframe===!0;let Se=n[V.id];Se===void 0&&(Se={},n[V.id]=Se);const oe=k.isInstancedMesh===!0?k.id:0;let Re=Se[oe];Re===void 0&&(Re={},Se[oe]=Re);let xe=Re[te.id];xe===void 0&&(xe={},Re[te.id]=xe);let Te=xe[j];return Te===void 0&&(Te=f(c()),xe[j]=Te),Te}function f(k){const V=[],te=[],X=[];for(let j=0;j<t;j++)V[j]=0,te[j]=0,X[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:te,attributeDivisors:X,object:k,attributes:{},index:null}}function h(k,V,te,X){const j=r.attributes,Se=V.attributes;let oe=0;const Re=te.getAttributes();for(const xe in Re)if(Re[xe].location>=0){const de=j[xe];let tt=Se[xe];if(tt===void 0&&(xe==="instanceMatrix"&&k.instanceMatrix&&(tt=k.instanceMatrix),xe==="instanceColor"&&k.instanceColor&&(tt=k.instanceColor)),de===void 0||de.attribute!==tt||tt&&de.data!==tt.data)return!0;oe++}return r.attributesNum!==oe||r.index!==X}function p(k,V,te,X){const j={},Se=V.attributes;let oe=0;const Re=te.getAttributes();for(const xe in Re)if(Re[xe].location>=0){let de=Se[xe];de===void 0&&(xe==="instanceMatrix"&&k.instanceMatrix&&(de=k.instanceMatrix),xe==="instanceColor"&&k.instanceColor&&(de=k.instanceColor));const tt={};tt.attribute=de,de&&de.data&&(tt.data=de.data),j[xe]=tt,oe++}r.attributes=j,r.attributesNum=oe,r.index=X}function _(){const k=r.newAttributes;for(let V=0,te=k.length;V<te;V++)k[V]=0}function m(k){g(k,0)}function g(k,V){const te=r.newAttributes,X=r.enabledAttributes,j=r.attributeDivisors;te[k]=1,X[k]===0&&(i.enableVertexAttribArray(k),X[k]=1),j[k]!==V&&(i.vertexAttribDivisor(k,V),j[k]=V)}function b(){const k=r.newAttributes,V=r.enabledAttributes;for(let te=0,X=V.length;te<X;te++)V[te]!==k[te]&&(i.disableVertexAttribArray(te),V[te]=0)}function T(k,V,te,X,j,Se,oe){oe===!0?i.vertexAttribIPointer(k,V,te,j,Se):i.vertexAttribPointer(k,V,te,X,j,Se)}function y(k,V,te,X){_();const j=X.attributes,Se=te.getAttributes(),oe=V.defaultAttributeValues;for(const Re in Se){const xe=Se[Re];if(xe.location>=0){let Te=j[Re];if(Te===void 0&&(Re==="instanceMatrix"&&k.instanceMatrix&&(Te=k.instanceMatrix),Re==="instanceColor"&&k.instanceColor&&(Te=k.instanceColor)),Te!==void 0){const de=Te.normalized,tt=Te.itemSize,Mt=e.get(Te);if(Mt===void 0)continue;const Wt=Mt.buffer,Y=Mt.type,st=Mt.bytesPerElement,be=Y===i.INT||Y===i.UNSIGNED_INT||Te.gpuType===Wu;if(Te.isInterleavedBufferAttribute){const Oe=Te.data,Ze=Oe.stride,J=Te.offset;if(Oe.isInstancedInterleavedBuffer){for(let Ve=0;Ve<xe.locationSize;Ve++)g(xe.location+Ve,Oe.meshPerAttribute);k.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let Ve=0;Ve<xe.locationSize;Ve++)m(xe.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let Ve=0;Ve<xe.locationSize;Ve++)T(xe.location+Ve,tt/xe.locationSize,Y,de,Ze*st,(J+tt/xe.locationSize*Ve)*st,be)}else{if(Te.isInstancedBufferAttribute){for(let Oe=0;Oe<xe.locationSize;Oe++)g(xe.location+Oe,Te.meshPerAttribute);k.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Oe=0;Oe<xe.locationSize;Oe++)m(xe.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let Oe=0;Oe<xe.locationSize;Oe++)T(xe.location+Oe,tt/xe.locationSize,Y,de,tt*st,tt/xe.locationSize*Oe*st,be)}}else if(oe!==void 0){const de=oe[Re];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(xe.location,de);break;case 3:i.vertexAttrib3fv(xe.location,de);break;case 4:i.vertexAttrib4fv(xe.location,de);break;default:i.vertexAttrib1fv(xe.location,de)}}}}b()}function A(){P();for(const k in n){const V=n[k];for(const te in V){const X=V[te];for(const j in X){const Se=X[j];for(const oe in Se)u(Se[oe].object),delete Se[oe];delete X[j]}}delete n[k]}}function R(k){if(n[k.id]===void 0)return;const V=n[k.id];for(const te in V){const X=V[te];for(const j in X){const Se=X[j];for(const oe in Se)u(Se[oe].object),delete Se[oe];delete X[j]}}delete n[k.id]}function F(k){for(const V in n){const te=n[V];for(const X in te){const j=te[X];if(j[k.id]===void 0)continue;const Se=j[k.id];for(const oe in Se)u(Se[oe].object),delete Se[oe];delete j[k.id]}}}function x(k){for(const V in n){const te=n[V],X=k.isInstancedMesh===!0?k.id:0,j=te[X];if(j!==void 0){for(const Se in j){const oe=j[Se];for(const Re in oe)u(oe[Re].object),delete oe[Re];delete j[Se]}delete te[X],Object.keys(te).length===0&&delete n[V]}}}function P(){N(),o=!0,r!==s&&(r=s,l(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfObject:x,releaseStatesOfProgram:F,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function fv(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let f=0;for(let h=0;h<u;h++)f+=l[h];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function dv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(F){return!(F!==xs&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(F){const x=F===Ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ts&&F!==_s&&!x&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(rn("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&rn("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:y,maxSamples:A,samples:R}}function pv(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new mr,a=new pn,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||n!==0||s;return s=f,n=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?u(null):l();else{const b=r?0:n,T=b*4;let y=g.clippingState||null;c.value=y,y=u(p,f,T,h);for(let A=0;A!==T;++A)y[A]=t[A];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,h,p){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,p!==!0||m===null){const g=h+_*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<g)&&(m=new Float32Array(g));for(let T=0,y=h;T!==_;++T,y+=4)o.copy(d[T]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const xo=4,mv=6,gv=20,vv=256,$o=new Hl,ff=new ke;let Ac=null,Cc=0,Rc=0,Pc=!1;const _v=new L,Sr=new L;class Ru{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=_v}=r;Ac=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),Pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ac,Cc,Rc),this._renderer.xr.enabled=Pc,e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Or||e.mapping===Co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ac=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),Pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:Ki,format:xs,colorSpace:wl,depthBuffer:!1},s=df(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=df(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=xv(r)),this._blurMaterial=yv(r,e,t),this._ggxMaterial=Mv(r,e,t)}return s}_compileMaterial(e){const t=new Ot(new Pn,e);this._renderer.compile(t,$o)}_sceneToCubeUV(e,t,n,s,r){const c=new Zi(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(ff),d.toneMapping=Us,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ot(new qn,new ns({name:"PMREM.Background",side:zi,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let g=!1;const b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,g=!0):(m.color.copy(ff),g=!0);for(let T=0;T<6;T++){const y=T%3;y===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[T],r.y,r.z)):y===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[T]));const A=this._cubeSize;co(s,y*A,T>2?A:0,A,A),d.setRenderTarget(s),g&&d.render(_,c),d.render(e,c)}d.toneMapping=h,d.autoClear=f,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Or||e.mapping===Co;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;co(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,$o)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),f=l*1.25,h=d*f,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-xo?n-p+xo:0),g=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=p-t,co(r,m,g,3*_,2*_),s.setRenderTarget(r),s.render(a,$o),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,co(e,m,g,3*_,2*_),s.setRenderTarget(e),s.render(a,$o)}_blur(e,t,n,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){const o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;const l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const u=this._sizeLods[s],d=3*u*(s>this._lodMax-xo?s-this._lodMax+xo:0),f=4*(this._cubeSize-u);co(t,d,f,3*u,2*u),o.setRenderTarget(t),o.render(c,$o)}}function xv(i){const e=[],t=[];let n=i;const s=i-xo+1+mv;for(let r=0;r<s;r++){const o=Math.pow(2,n);e.push(o);const a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,f=6,h=3,p=new Float32Array(h*f*d),_=new Float32Array(h*f*d);for(let g=0;g<d;g++){const b=g%3*2/3-1,T=g>2?0:-1,y=[b,T,0,b+2/3,T,0,b+2/3,T+1,0,b,T,0,b+2/3,T+1,0,b,T+1,0];p.set(y,h*f*g);for(let A=0;A<f;A++){const R=u[A*2]*2-1,F=u[A*2+1]*2-1;g===0?Sr.set(1,F,R):g===1?Sr.set(-R,1,-F):g===2?Sr.set(-R,F,1):g===3?Sr.set(-1,F,-R):g===4?Sr.set(-R,-1,F):Sr.set(R,F,-1),Sr.toArray(_,(g*f+A)*h)}}const m=new Pn;m.setAttribute("position",new Vn(p,h)),m.setAttribute("outputDirection",new Vn(_,h)),t.push(new Ot(m,null)),n>xo&&n--}return{lodMeshes:t,sizeLods:e}}function df(i,e,t){const n=new Bi(i,e,t);return n.texture.mapping=kl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function co(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Mv(i,e,t){return new Mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function yv(i,e,t){return new Mi({name:"SphericalGaussianBlur",defines:{SAMPLES:gv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Vl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function pf(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function mf(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function Vl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class z0 extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new M0(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new qn(5,5,5),r=new Mi({name:"CubemapFromEquirect",uniforms:Do(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zi,blending:Ns});r.uniforms.tEquirect.value=t;const o=new Ot(s,r),a=t.minFilter;return t.minFilter===Rr&&(t.minFilter=Li),new Sm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}function bv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,h=!1){return f==null?null:h?o(f):r(f)}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===ul||h===Kl)if(e.has(f)){const p=e.get(f).texture;return a(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const _=new z0(p.height);return _.fromEquirectangularTexture(i,f),e.set(f,_),f.addEventListener("dispose",l),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const h=f.mapping,p=h===ul||h===Kl,_=h===Or||h===Co;if(p||_){let m=t.get(f);const g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Ru(i)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const b=f.image;return p&&b&&b.height>0||_&&b&&c(b)?(n===null&&(n=new Ru(i)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,h){return h===ul?f.mapping=Or:h===Kl&&(f.mapping=Co),f}function c(f){let h=0;const p=6;for(let _=0;_<p;_++)f[_]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Sv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&bo("WebGLRenderer: "+n+" extension not supported."),s}}}function wv(i,e,t,n){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const h in f)e.update(f[h],i.ARRAY_BUFFER)}function l(d){const f=[],h=d.index,p=d.attributes.position;let _=0;if(p===void 0)return;if(h!==null){const b=h.array;_=h.version;for(let T=0,y=b.length;T<y;T+=3){const A=b[T+0],R=b[T+1],F=b[T+2];f.push(A,R,R,F,F,A)}}else{const b=p.array;_=p.version;for(let T=0,y=b.length/3-1;T<y;T+=3){const A=T+0,R=T+1,F=T+2;f.push(A,R,R,F,F,A)}}const m=new(p.count>=65535?g0:m0)(f,1);m.version=_;const g=r.get(d);g&&e.remove(g),r.set(d,m)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Tv(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,h){h!==0&&(i.drawElementsInstanced(n,f,r,d*o,h),t.update(f,n,h))}function u(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,h);let _=0;for(let m=0;m<h;m++)_+=f[m];t.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ev(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Rn("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Av(i,e,t){const n=new WeakMap,s=new ei;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let N=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",N)};var h=N;f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let A=a.attributes.position.count*y,R=1;A>e.maxTextureSize&&(R=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const F=new Float32Array(A*R*4*d),x=new d0(F,A,R,d);x.type=_s,x.needsUpdate=!0;const P=y*4;for(let k=0;k<d;k++){const V=g[k],te=b[k],X=T[k],j=A*R*4*k;for(let Se=0;Se<V.count;Se++){const oe=Se*P;p===!0&&(s.fromBufferAttribute(V,Se),F[j+oe+0]=s.x,F[j+oe+1]=s.y,F[j+oe+2]=s.z,F[j+oe+3]=0),_===!0&&(s.fromBufferAttribute(te,Se),F[j+oe+4]=s.x,F[j+oe+5]=s.y,F[j+oe+6]=s.z,F[j+oe+7]=0),m===!0&&(s.fromBufferAttribute(X,Se),F[j+oe+8]=s.x,F[j+oe+9]=s.y,F[j+oe+10]=s.z,F[j+oe+11]=X.itemSize===4?s.w:1)}}f={count:d,texture:x,size:new et(A,R)},n.set(a,f),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let m=0;m<l.length;m++)p+=l[m];const _=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Cv(i,e,t,n,s){let r=new WeakMap;function o(l){const u=s.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const Rv={[zu]:"LINEAR_TONE_MAPPING",[Bu]:"REINHARD_TONE_MAPPING",[ku]:"CINEON_TONE_MAPPING",[Bl]:"ACES_FILMIC_TONE_MAPPING",[Hu]:"AGX_TONE_MAPPING",[Vu]:"NEUTRAL_TONE_MAPPING",[Gu]:"CUSTOM_TONE_MAPPING"};function Pv(i,e,t,n,s,r){const o=new Bi(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null;const l=new Pn;l.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new an([0,2,0,0,2,0],2));const u=new L0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ot(l,u),f=new Hl(-1,1,1,-1,0,1);let h=null,p=null,_=!1,m,g=null,b=[],T=!1;this.setSize=function(y,A){o.setSize(y,A),a!==null&&a.setSize(y,A),c!==null&&c.setSize(y,A);for(let R=0;R<b.length;R++){const F=b[R];F.setSize&&F.setSize(y,A)}},this.setEffects=function(y){b=y,T=b.length>0&&b[0].isRenderPass===!0;const A=o.width,R=o.height;b.length>0&&a===null&&(a=new Bi(A,R,{type:Ki,depthBuffer:!1,stencilBuffer:!1}),c=new Bi(A,R,{type:Ki,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<b.length;F++){const x=b[F];x.setSize&&x.setSize(A,R)}},this.begin=function(y,A){if(_||y.toneMapping===Us&&b.length===0)return!1;if(g=A,A!==null){const R=A.width,F=A.height;(o.width!==R||o.height!==F)&&this.setSize(R,F)}return T===!1&&y.setRenderTarget(o),m=y.toneMapping,y.toneMapping=Us,!0},this.hasRenderPass=function(){return T},this.end=function(y,A){y.toneMapping=m,_=!0;let R=o,F=a;for(let x=0;x<b.length;x++){const P=b[x];P.enabled!==!1&&(P.render(y,F,R,A),P.needsSwap!==!1&&(R=F,F=F===a?c:a))}if(h!==y.outputColorSpace||p!==y.toneMapping){h=y.outputColorSpace,p=y.toneMapping,u.defines={},En.getTransfer(h)===Fn&&(u.defines.SRGB_TRANSFER="");const x=Rv[p];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=R.texture,y.setRenderTarget(g),y.render(d,f),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const B0=new Ii,Pu=new fa(1,1),k0=new d0,G0=new hp,H0=new M0,gf=[],vf=[],_f=new Float32Array(16),xf=new Float32Array(9),Mf=new Float32Array(4);function Fo(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=gf[s];if(r===void 0&&(r=new Float32Array(s),gf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function hi(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function fi(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Wl(i,e){let t=vf[e];t===void 0&&(t=new Int32Array(e),vf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Lv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Iv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hi(t,e))return;i.uniform2fv(this.addr,e),fi(t,e)}}function Dv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hi(t,e))return;i.uniform3fv(this.addr,e),fi(t,e)}}function Nv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hi(t,e))return;i.uniform4fv(this.addr,e),fi(t,e)}}function Uv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(hi(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),fi(t,e)}else{if(hi(t,n))return;Mf.set(n),i.uniformMatrix2fv(this.addr,!1,Mf),fi(t,n)}}function Fv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(hi(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),fi(t,e)}else{if(hi(t,n))return;xf.set(n),i.uniformMatrix3fv(this.addr,!1,xf),fi(t,n)}}function Ov(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(hi(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),fi(t,e)}else{if(hi(t,n))return;_f.set(n),i.uniformMatrix4fv(this.addr,!1,_f),fi(t,n)}}function zv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Bv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hi(t,e))return;i.uniform2iv(this.addr,e),fi(t,e)}}function kv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hi(t,e))return;i.uniform3iv(this.addr,e),fi(t,e)}}function Gv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hi(t,e))return;i.uniform4iv(this.addr,e),fi(t,e)}}function Hv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Vv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hi(t,e))return;i.uniform2uiv(this.addr,e),fi(t,e)}}function Wv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hi(t,e))return;i.uniform3uiv(this.addr,e),fi(t,e)}}function Xv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hi(t,e))return;i.uniform4uiv(this.addr,e),fi(t,e)}}function Yv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Pu.compareFunction=t.isReversedDepthBuffer()?Qu:Ju,r=Pu):r=B0,t.setTexture2D(e||r,s)}function qv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||G0,s)}function Zv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||H0,s)}function $v(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||k0,s)}function Kv(i){switch(i){case 5126:return Lv;case 35664:return Iv;case 35665:return Dv;case 35666:return Nv;case 35674:return Uv;case 35675:return Fv;case 35676:return Ov;case 5124:case 35670:return zv;case 35667:case 35671:return Bv;case 35668:case 35672:return kv;case 35669:case 35673:return Gv;case 5125:return Hv;case 36294:return Vv;case 36295:return Wv;case 36296:return Xv;case 35678:case 36198:case 36298:case 36306:case 35682:return Yv;case 35679:case 36299:case 36307:return qv;case 35680:case 36300:case 36308:case 36293:return Zv;case 36289:case 36303:case 36311:case 36292:return $v}}function Jv(i,e){i.uniform1fv(this.addr,e)}function Qv(i,e){const t=Fo(e,this.size,2);i.uniform2fv(this.addr,t)}function jv(i,e){const t=Fo(e,this.size,3);i.uniform3fv(this.addr,t)}function e_(i,e){const t=Fo(e,this.size,4);i.uniform4fv(this.addr,t)}function t_(i,e){const t=Fo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function n_(i,e){const t=Fo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function i_(i,e){const t=Fo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function s_(i,e){i.uniform1iv(this.addr,e)}function r_(i,e){i.uniform2iv(this.addr,e)}function o_(i,e){i.uniform3iv(this.addr,e)}function a_(i,e){i.uniform4iv(this.addr,e)}function l_(i,e){i.uniform1uiv(this.addr,e)}function c_(i,e){i.uniform2uiv(this.addr,e)}function u_(i,e){i.uniform3uiv(this.addr,e)}function h_(i,e){i.uniform4uiv(this.addr,e)}function f_(i,e,t){const n=this.cache,s=e.length,r=Wl(t,s);hi(n,r)||(i.uniform1iv(this.addr,r),fi(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Pu:o=B0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function d_(i,e,t){const n=this.cache,s=e.length,r=Wl(t,s);hi(n,r)||(i.uniform1iv(this.addr,r),fi(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||G0,r[o])}function p_(i,e,t){const n=this.cache,s=e.length,r=Wl(t,s);hi(n,r)||(i.uniform1iv(this.addr,r),fi(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||H0,r[o])}function m_(i,e,t){const n=this.cache,s=e.length,r=Wl(t,s);hi(n,r)||(i.uniform1iv(this.addr,r),fi(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||k0,r[o])}function g_(i){switch(i){case 5126:return Jv;case 35664:return Qv;case 35665:return jv;case 35666:return e_;case 35674:return t_;case 35675:return n_;case 35676:return i_;case 5124:case 35670:return s_;case 35667:case 35671:return r_;case 35668:case 35672:return o_;case 35669:case 35673:return a_;case 5125:return l_;case 36294:return c_;case 36295:return u_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return p_;case 36289:case 36303:case 36311:case 36292:return m_}}class v_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kv(t.type)}}class __{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=g_(t.type)}}class x_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Lc=/(\w+)(\])?(\[|\.)?/g;function yf(i,e){i.seq.push(e),i.map[e.id]=e}function M_(i,e,t){const n=i.name,s=n.length;for(Lc.lastIndex=0;;){const r=Lc.exec(n),o=Lc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){yf(t,l===void 0?new v_(a,i,e):new __(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new x_(a),yf(t,d)),t=d}}}class vl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);M_(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function bf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const y_=37297;let b_=0;function S_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Sf=new pn;function w_(i){En._getMatrix(Sf,En.workingColorSpace,i);const e=`mat3( ${Sf.elements.map(t=>t.toFixed(4))} )`;switch(En.getTransfer(i)){case Tl:return[e,"LinearTransferOETF"];case Fn:return[e,"sRGBTransferOETF"];default:return rn("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function wf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+S_(i.getShaderSource(e),a)}else return r}function T_(i,e){const t=w_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const E_={[zu]:"Linear",[Bu]:"Reinhard",[ku]:"Cineon",[Bl]:"ACESFilmic",[Hu]:"AgX",[Vu]:"Neutral",[Gu]:"Custom"};function A_(i,e){const t=E_[e];return t===void 0?(rn("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nl=new L;function C_(){En.getLuminanceCoefficients(nl);const i=nl.x.toFixed(4),e=nl.y.toFixed(4),t=nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function P_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function L_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ta(i){return i!==""}function Tf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ef(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const I_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lu(i){return i.replace(I_,N_)}const D_=new Map;function N_(i,e){let t=xn[e];if(t===void 0){const n=D_.get(e);if(n!==void 0)t=xn[n],rn('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Lu(t)}const U_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Af(i){return i.replace(U_,F_)}function F_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const O_={[na]:"SHADOWMAP_TYPE_PCF",[jo]:"SHADOWMAP_TYPE_VSM"};function z_(i){return O_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const B_={[Or]:"ENVMAP_TYPE_CUBE",[Co]:"ENVMAP_TYPE_CUBE",[kl]:"ENVMAP_TYPE_CUBE_UV"};function k_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":B_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const G_={[Co]:"ENVMAP_MODE_REFRACTION"};function H_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":G_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const V_={[i0]:"ENVMAP_BLENDING_MULTIPLY",[Ad]:"ENVMAP_BLENDING_MIX",[Cd]:"ENVMAP_BLENDING_ADD"};function W_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":V_[i.combine]||"ENVMAP_BLENDING_NONE"}function X_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Y_(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=z_(t),l=k_(t),u=H_(t),d=W_(t),f=X_(t),h=R_(t),p=P_(r),_=s.createProgram();let m,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ta).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ta).join(`
`),g.length>0&&(g+=`
`)):(m=[Cf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),g=[Cf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Us?"#define TONE_MAPPING":"",t.toneMapping!==Us?xn.tonemapping_pars_fragment:"",t.toneMapping!==Us?A_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xn.colorspace_pars_fragment,T_("linearToOutputTexel",t.outputColorSpace),C_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ta).join(`
`)),o=Lu(o),o=Tf(o,t),o=Ef(o,t),a=Lu(a),a=Tf(a,t),a=Ef(a,t),o=Af(o),a=Af(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const T=b+m+o,y=b+g+a,A=bf(s,s.VERTEX_SHADER,T),R=bf(s,s.FRAGMENT_SHADER,y);s.attachShader(_,A),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function F(k){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(_)||"",te=s.getShaderInfoLog(A)||"",X=s.getShaderInfoLog(R)||"",j=V.trim(),Se=te.trim(),oe=X.trim();let Re=!0,xe=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,R);else{const Te=wf(s,A,"vertex"),de=wf(s,R,"fragment");Rn("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+j+`
`+Te+`
`+de)}else j!==""?rn("WebGLProgram: Program Info Log:",j):(Se===""||oe==="")&&(xe=!1);xe&&(k.diagnostics={runnable:Re,programLog:j,vertexShader:{log:Se,prefix:m},fragmentShader:{log:oe,prefix:g}})}s.deleteShader(A),s.deleteShader(R),x=new vl(s,_),P=L_(s,_)}let x;this.getUniforms=function(){return x===void 0&&F(this),x};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(_,y_)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=b_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=R,this}let q_=0;class Z_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $_(e),t.set(e,n)),n}}class $_{constructor(e){this.id=q_++,this.code=e,this.usedTimes=0}}function K_(i){return i===zr||i===bl||i===Sl}function J_(i,e,t,n,s,r){const o=new th,a=new Z_,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer;let f=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,P,N,k,V,te){const X=k.fog,j=V.geometry,Se=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?k.environment:null,oe=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Re=e.get(x.envMap||Se,oe),xe=Re&&Re.mapping===kl?Re.image.height:null,Te=h[x.type];x.precision!==null&&(f=n.getMaxPrecision(x.precision),f!==x.precision&&rn("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const de=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,tt=de!==void 0?de.length:0;let Mt=0;j.morphAttributes.position!==void 0&&(Mt=1),j.morphAttributes.normal!==void 0&&(Mt=2),j.morphAttributes.color!==void 0&&(Mt=3);let Wt,Y,st,be;if(Te){const _n=Ls[Te];Wt=_n.vertexShader,Y=_n.fragmentShader}else{Wt=x.vertexShader,Y=x.fragmentShader;const _n=a.getVertexShaderStage(x),ht=a.getFragmentShaderStage(x);a.update(x,_n,ht),st=_n.id,be=ht.id}const Oe=i.getRenderTarget(),Ze=i.state.buffers.depth.getReversed(),J=V.isInstancedMesh===!0,Ve=V.isBatchedMesh===!0,Ke=!!x.map,yt=!!x.matcap,me=!!Re,Le=!!x.aoMap,Be=!!x.lightMap,Ye=!!x.bumpMap&&x.wireframe===!1,Je=!!x.normalMap,bt=!!x.displacementMap,At=!!x.emissiveMap,z=!!x.metalnessMap,H=!!x.roughnessMap,E=x.anisotropy>0,ue=x.clearcoat>0,Pe=x.dispersion>0,C=x.retroreflectivity>0,v=x.iridescence>0,G=x.sheen>0,re=x.transmission>0,ge=E&&!!x.anisotropyMap,Ge=ue&&!!x.clearcoatMap,He=ue&&!!x.clearcoatNormalMap,we=ue&&!!x.clearcoatRoughnessMap,Ae=v&&!!x.iridescenceMap,rt=v&&!!x.iridescenceThicknessMap,Nt=G&&!!x.sheenColorMap,nt=G&&!!x.sheenRoughnessMap,Fe=!!x.specularMap,Ct=!!x.specularColorMap,ut=!!x.specularIntensityMap,Vt=re&&!!x.transmissionMap,ee=re&&!!x.thicknessMap,je=!!x.gradientMap,ze=!!x.alphaMap,St=x.alphaTest>0,Et=!!x.alphaHash,qe=!!x.extensions;let Bt=Us;x.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(Bt=i.toneMapping);const Ut={shaderID:Te,shaderType:x.type,shaderName:x.name,vertexShader:Wt,fragmentShader:Y,defines:x.defines,customVertexShaderID:st,customFragmentShaderID:be,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Ve,batchingColor:Ve&&V._colorsTexture!==null,instancing:J,instancingColor:J&&V.instanceColor!==null,instancingMorph:J&&V.morphTexture!==null,outputColorSpace:Oe===null?i.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:En.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ke,matcap:yt,envMap:me,envMapMode:me&&Re.mapping,envMapCubeUVHeight:xe,aoMap:Le,lightMap:Be,bumpMap:Ye,normalMap:Je,displacementMap:bt,emissiveMap:At,normalMapObjectSpace:Je&&x.normalMapType===Ld,normalMapTangentSpace:Je&&x.normalMapType===Su,packedNormalMap:Je&&x.normalMapType===Su&&K_(x.normalMap.format),metalnessMap:z,roughnessMap:H,anisotropy:E,anisotropyMap:ge,clearcoat:ue,clearcoatMap:Ge,clearcoatNormalMap:He,clearcoatRoughnessMap:we,dispersion:Pe,retroreflection:C,iridescence:v,iridescenceMap:Ae,iridescenceThicknessMap:rt,sheen:G,sheenColorMap:Nt,sheenRoughnessMap:nt,specularMap:Fe,specularColorMap:Ct,specularIntensityMap:ut,transmission:re,transmissionMap:Vt,thicknessMap:ee,gradientMap:je,opaque:x.transparent===!1&&x.blending===yo&&x.alphaToCoverage===!1,alphaMap:ze,alphaTest:St,alphaHash:Et,combine:x.combine,mapUv:Ke&&p(x.map.channel),aoMapUv:Le&&p(x.aoMap.channel),lightMapUv:Be&&p(x.lightMap.channel),bumpMapUv:Ye&&p(x.bumpMap.channel),normalMapUv:Je&&p(x.normalMap.channel),displacementMapUv:bt&&p(x.displacementMap.channel),emissiveMapUv:At&&p(x.emissiveMap.channel),metalnessMapUv:z&&p(x.metalnessMap.channel),roughnessMapUv:H&&p(x.roughnessMap.channel),anisotropyMapUv:ge&&p(x.anisotropyMap.channel),clearcoatMapUv:Ge&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:He&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:nt&&p(x.sheenRoughnessMap.channel),specularMapUv:Fe&&p(x.specularMap.channel),specularColorMapUv:Ct&&p(x.specularColorMap.channel),specularIntensityMapUv:ut&&p(x.specularIntensityMap.channel),transmissionMapUv:Vt&&p(x.transmissionMap.channel),thicknessMapUv:ee&&p(x.thicknessMap.channel),alphaMapUv:ze&&p(x.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Je||E),vertexNormals:!!j.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!j.attributes.uv&&(Ke||ze),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||j.attributes.normal===void 0&&Je===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ze,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:Mt,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:te.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Ke&&x.map.isVideoTexture===!0&&En.getTransfer(x.map.colorSpace)===Fn,decodeVideoTextureEmissive:At&&x.emissiveMap.isVideoTexture===!0&&En.getTransfer(x.emissiveMap.colorSpace)===Fn,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Bn,flipSided:x.side===zi,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:qe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&x.extensions.multiDraw===!0||Ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ut.vertexUv1s=c.has(1),Ut.vertexUv2s=c.has(2),Ut.vertexUv3s=c.has(3),c.clear(),Ut}function m(x){const P=[];if(x.shaderID?P.push(x.shaderID):(P.push(x.customVertexShaderID),P.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)P.push(N),P.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(g(P,x),b(P,x),P.push(i.outputColorSpace)),P.push(x.customProgramCacheKey),P.join()}function g(x,P){x.push(P.precision),x.push(P.outputColorSpace),x.push(P.envMapMode),x.push(P.envMapCubeUVHeight),x.push(P.mapUv),x.push(P.alphaMapUv),x.push(P.lightMapUv),x.push(P.aoMapUv),x.push(P.bumpMapUv),x.push(P.normalMapUv),x.push(P.displacementMapUv),x.push(P.emissiveMapUv),x.push(P.metalnessMapUv),x.push(P.roughnessMapUv),x.push(P.anisotropyMapUv),x.push(P.clearcoatMapUv),x.push(P.clearcoatNormalMapUv),x.push(P.clearcoatRoughnessMapUv),x.push(P.iridescenceMapUv),x.push(P.iridescenceThicknessMapUv),x.push(P.sheenColorMapUv),x.push(P.sheenRoughnessMapUv),x.push(P.specularMapUv),x.push(P.specularColorMapUv),x.push(P.specularIntensityMapUv),x.push(P.transmissionMapUv),x.push(P.thicknessMapUv),x.push(P.combine),x.push(P.fogExp2),x.push(P.sizeAttenuation),x.push(P.morphTargetsCount),x.push(P.morphAttributeCount),x.push(P.numSunLights),x.push(P.numDirLights),x.push(P.numPointLights),x.push(P.numSpotLights),x.push(P.numSpotLightMaps),x.push(P.numHemiLights),x.push(P.numRectAreaLights),x.push(P.numSunLightShadows),x.push(P.numDirLightShadows),x.push(P.numPointLightShadows),x.push(P.numSpotLightShadows),x.push(P.numSpotLightShadowsWithMaps),x.push(P.numLightProbes),x.push(P.shadowMapType),x.push(P.toneMapping),x.push(P.numClippingPlanes),x.push(P.numClipIntersection),x.push(P.depthPacking)}function b(x,P){o.disableAll(),P.instancing&&o.enable(0),P.instancingColor&&o.enable(1),P.instancingMorph&&o.enable(2),P.matcap&&o.enable(3),P.envMap&&o.enable(4),P.normalMapObjectSpace&&o.enable(5),P.normalMapTangentSpace&&o.enable(6),P.clearcoat&&o.enable(7),P.iridescence&&o.enable(8),P.alphaTest&&o.enable(9),P.vertexColors&&o.enable(10),P.vertexAlphas&&o.enable(11),P.vertexUv1s&&o.enable(12),P.vertexUv2s&&o.enable(13),P.vertexUv3s&&o.enable(14),P.vertexTangents&&o.enable(15),P.anisotropy&&o.enable(16),P.alphaHash&&o.enable(17),P.batching&&o.enable(18),P.dispersion&&o.enable(19),P.retroreflection&&o.enable(24),P.batchingColor&&o.enable(20),P.gradientMap&&o.enable(21),P.packedNormalMap&&o.enable(22),P.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),P.fog&&o.enable(0),P.useFog&&o.enable(1),P.flatShading&&o.enable(2),P.logarithmicDepthBuffer&&o.enable(3),P.reversedDepthBuffer&&o.enable(4),P.skinning&&o.enable(5),P.morphTargets&&o.enable(6),P.morphNormals&&o.enable(7),P.morphColors&&o.enable(8),P.premultipliedAlpha&&o.enable(9),P.shadowMapEnabled&&o.enable(10),P.doubleSided&&o.enable(11),P.flipSided&&o.enable(12),P.useDepthPacking&&o.enable(13),P.dithering&&o.enable(14),P.transmission&&o.enable(15),P.sheen&&o.enable(16),P.opaque&&o.enable(17),P.pointsUvs&&o.enable(18),P.decodeVideoTexture&&o.enable(19),P.decodeVideoTextureEmissive&&o.enable(20),P.alphaToCoverage&&o.enable(21),P.numLightProbeGrids>0&&o.enable(22),P.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function T(x){const P=h[x.type];let N;if(P){const k=Ls[P];N=ga.clone(k.uniforms)}else N=x.uniforms;return N}function y(x,P){let N=u.get(P);return N!==void 0?++N.usedTimes:(N=new Y_(i,P,x,s),l.push(N),u.set(P,N)),N}function A(x){if(--x.usedTimes===0){const P=l.indexOf(x);l[P]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function R(x){a.remove(x)}function F(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:T,acquireProgram:y,releaseProgram:A,releaseShaderCache:R,programs:l,dispose:F}}function Q_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function j_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Rf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Pf(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,p,_,m,g){let b=i[e];return b===void 0?(b={id:f.id,object:f,geometry:h,material:p,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},i[e]=b):(b.id=f.id,b.object=f,b.geometry=h,b.material=p,b.materialVariant=o(f),b.groupOrder=_,b.renderOrder=f.renderOrder,b.z=m,b.group=g),e++,b}function c(f,h,p,_,m,g,b){b.reversedDepth===!0&&(m=-m);const T=a(f,h,p,_,m,g);p.transmission>0?n.push(T):p.transparent===!0?s.push(T):t.push(T)}function l(f,h,p,_,m,g){const b=a(f,h,p,_,m,g);p.transmission>0?n.unshift(b):p.transparent===!0?s.unshift(b):t.unshift(b)}function u(f,h){t.length>1&&t.sort(f||j_),n.length>1&&n.sort(h||Rf),s.length>1&&s.sort(h||Rf)}function d(){for(let f=e,h=i.length;f<h;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function e2(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Pf,i.set(n,[o])):s>=r.length?(o=new Pf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function t2(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new ke};break;case"SpotLight":t={position:new L,direction:new L,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function n2(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let i2=0;function s2(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function r2(i){const e=new t2,t=n2(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new Mn,o=new Mn;function a(l){let u=0,d=0,f=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let h=0,p=0,_=0,m=0,g=0,b=0,T=0,y=0,A=0,R=0,F=0,x=0,P=0,N=0;l.sort(s2);for(let V=0,te=l.length;V<te;V++){const X=l[V],j=X.color,Se=X.intensity,oe=X.distance;let Re=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===zr?Re=X.shadow.map.texture:Re=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)u+=j.r*Se,d+=j.g*Se,f+=j.b*Se;else if(X.isLightProbe){for(let xe=0;xe<9;xe++)n.probe[xe].addScaledVector(X.sh.coefficients[xe],Se);N++}else if(X.isSunLight){const xe=e.get(X);if(xe.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const Te=X.shadow,de=t.get(X);de.shadowIntensity=Te.intensity,de.shadowBias=Te.bias,de.shadowNormalBias=Te.normalBias,de.shadowRadius=Te.radius,de.shadowMapSize.copy(Te.mapSize).multiply(Te.getFrameExtents()),n.sunShadow[p]=de,n.sunShadowMap[p]=Re;const tt=Te.getViewportCount();for(let Mt=0;Mt<tt;Mt++)n.sunShadowMatrix[_+Mt]=Te.getMatrix(Mt),n.sunShadowCascade[_+Mt]=Te._cascadeData[Mt];_+=tt,p++}n.sun[h]=xe,h++}else if(X.isDirectionalLight){const xe=e.get(X);if(xe.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const Te=X.shadow,de=t.get(X);de.shadowIntensity=Te.intensity,de.shadowBias=Te.bias,de.shadowNormalBias=Te.normalBias,de.shadowRadius=Te.radius,de.shadowMapSize=Te.mapSize,n.directionalShadow[m]=de,n.directionalShadowMap[m]=Re,n.directionalShadowMatrix[m]=X.shadow.matrix,A++}n.directional[m]=xe,m++}else if(X.isSpotLight){const xe=e.get(X);xe.position.setFromMatrixPosition(X.matrixWorld),xe.color.copy(j).multiplyScalar(Se),xe.distance=oe,xe.coneCos=Math.cos(X.angle),xe.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),xe.decay=X.decay,n.spot[b]=xe;const Te=X.shadow;if(X.map&&(n.spotLightMap[x]=X.map,x++,Te.updateMatrices(X),X.castShadow&&P++),n.spotLightMatrix[b]=Te.matrix,X.castShadow){const de=t.get(X);de.shadowIntensity=Te.intensity,de.shadowBias=Te.bias,de.shadowNormalBias=Te.normalBias,de.shadowRadius=Te.radius,de.shadowMapSize=Te.mapSize,n.spotShadow[b]=de,n.spotShadowMap[b]=Re,F++}b++}else if(X.isRectAreaLight){const xe=e.get(X);xe.color.copy(j).multiplyScalar(Se),xe.halfWidth.set(X.width*.5,0,0),xe.halfHeight.set(0,X.height*.5,0),n.rectArea[T]=xe,T++}else if(X.isPointLight){const xe=e.get(X);if(xe.color.copy(X.color).multiplyScalar(X.intensity),xe.distance=X.distance,xe.decay=X.decay,X.castShadow){const Te=X.shadow,de=t.get(X);de.shadowIntensity=Te.intensity,de.shadowBias=Te.bias,de.shadowNormalBias=Te.normalBias,de.shadowRadius=Te.radius,de.shadowMapSize=Te.mapSize,de.shadowCameraNear=Te.camera.near,de.shadowCameraFar=Te.camera.far,n.pointShadow[g]=de,n.pointShadowMap[g]=Re,n.pointShadowMatrix[g]=X.shadow.matrix,R++}n.point[g]=xe,g++}else if(X.isHemisphereLight){const xe=e.get(X);xe.skyColor.copy(X.color).multiplyScalar(Se),xe.groundColor.copy(X.groundColor).multiplyScalar(Se),n.hemi[y]=xe,y++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=It.LTC_FLOAT_1,n.rectAreaLTC2=It.LTC_FLOAT_2):(n.rectAreaLTC1=It.LTC_HALF_1,n.rectAreaLTC2=It.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const k=n.hash;(k.sunLength!==h||k.directionalLength!==m||k.pointLength!==g||k.spotLength!==b||k.rectAreaLength!==T||k.hemiLength!==y||k.numSunShadows!==p||k.numDirectionalShadows!==A||k.numPointShadows!==R||k.numSpotShadows!==F||k.numSpotMaps!==x||k.numLightProbes!==N)&&(n.sun.length=h,n.directional.length=m,n.spot.length=b,n.rectArea.length=T,n.point.length=g,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=F,n.spotShadowMap.length=F,n.spotLightMatrix.length=F+x-P,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=N,k.sunLength=h,k.directionalLength=m,k.pointLength=g,k.spotLength=b,k.rectAreaLength=T,k.hemiLength=y,k.numSunShadows=p,k.numDirectionalShadows=A,k.numPointShadows=R,k.numSpotShadows=F,k.numSpotMaps=x,k.numLightProbes=N,n.version=i2++)}function c(l,u){let d=0,f=0,h=0,p=0,_=0,m=0;const g=u.matrixWorldInverse;for(let b=0,T=l.length;b<T;b++){const y=l[b];if(y.isSunLight){const A=n.sun[d];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(g),d++}else if(y.isDirectionalLight){const A=n.directional[f];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),f++}else if(y.isSpotLight){const A=n.spot[p];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),p++}else if(y.isRectAreaLight){const A=n.rectArea[_];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const A=n.point[h];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(g),h++}else if(y.isHemisphereLight){const A=n.hemi[m];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(g),m++}}}return{setup:a,setupView:c,state:n}}function Lf(i){const e=new r2(i),t=[],n=[],s=[];function r(f){d.camera=f,t.length=0,n.length=0,s.length=0}function o(f){t.push(f)}function a(f){n.push(f)}function c(f){s.push(f)}function l(){e.setup(t)}function u(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function o2(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Lf(i),e.set(s,[a])):r>=o.length?(a=new Lf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const a2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,c2=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],u2=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],If=new Mn,Ko=new L,Ic=new L;function h2(i,e,t){let n=new ih;const s=new et,r=new et,o=new ei,a=new gm,c=new vm,l={},u=t.maxTextureSize,d={[Fr]:zi,[zi]:Fr,[Bn]:Bn},f=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:a2,fragmentShader:l2}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const p=new Pn;p.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ot(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=na;let g=this.type;this.render=function(R,F,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===ld&&(rn("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=na);const P=i.getRenderTarget(),N=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Ns),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const te=g!==this.type;te&&F.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(j=>j.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,j=R.length;X<j;X++){const Se=R[X],oe=Se.shadow;if(oe===void 0){rn("WebGLShadowMap:",Se,"has no shadow.");continue}if(oe.autoUpdate===!1&&oe.needsUpdate===!1)continue;s.copy(oe.mapSize);const Re=oe.getFrameExtents();s.multiply(Re),r.copy(oe.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Re.x),s.x=r.x*Re.x,oe.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Re.y),s.y=r.y*Re.y,oe.mapSize.y=r.y));const xe=i.state.buffers.depth.getReversed();if(oe.camera._reversedDepth=xe,oe.map===null||te===!0){if(oe.map!==null&&(oe.map.depthTexture!==null&&(oe.map.depthTexture.dispose(),oe.map.depthTexture=null),oe.map.dispose()),this.type===jo){if(Se.isPointLight){rn("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}oe.map=new Bi(s.x,s.y,{format:zr,type:Ki,minFilter:Li,magFilter:Li,generateMipmaps:!1}),oe.map.texture.name=Se.name+".shadowMap",oe.map.depthTexture=new fa(s.x,s.y,_s),oe.map.depthTexture.name=Se.name+".shadowMapDepth",oe.map.depthTexture.format=js,oe.map.depthTexture.compareFunction=null,oe.map.depthTexture.minFilter=xi,oe.map.depthTexture.magFilter=xi}else Se.isPointLight?(oe.map=new z0(s.x),oe.map.depthTexture=new Dp(s.x,zs)):(oe.map=new Bi(s.x,s.y),oe.map.depthTexture=new fa(s.x,s.y,zs)),oe.map.depthTexture.name=Se.name+".shadowMap",oe.map.depthTexture.format=js,this.type===na?(oe.map.depthTexture.compareFunction=xe?Qu:Ju,oe.map.depthTexture.minFilter=Li,oe.map.depthTexture.magFilter=Li):(oe.map.depthTexture.compareFunction=null,oe.map.depthTexture.minFilter=xi,oe.map.depthTexture.magFilter=xi);oe.camera.updateProjectionMatrix()}oe.map.isWebGLCubeRenderTarget!==!0&&(oe.map.width!==s.x||oe.map.height!==s.y)&&oe.map.setSize(s.x,s.y);const Te=oe.map.isWebGLCubeRenderTarget?6:oe.getViewportCount();Se.isPointLight!==!0&&oe.updateMatrices(Se,x);for(let de=0;de<Te;de++){const tt=oe.getCamera(de);if(Se.isPointLight){const Mt=oe.camera,Wt=oe.matrix,Y=Se.distance||Mt.far;Y!==Mt.far&&(Mt.far=Y,Mt.updateProjectionMatrix()),Ko.setFromMatrixPosition(Se.matrixWorld),Mt.position.copy(Ko),Ic.copy(Mt.position),Ic.add(c2[de]),Mt.up.copy(u2[de]),Mt.lookAt(Ic),Mt.updateMatrixWorld(),Wt.makeTranslation(-Ko.x,-Ko.y,-Ko.z),If.multiplyMatrices(Mt.projectionMatrix,Mt.matrixWorldInverse),oe._frustum.setFromProjectionMatrix(If,Mt.coordinateSystem,Mt.reversedDepth)}if(oe.map.isWebGLCubeRenderTarget)i.setRenderTarget(oe.map,de),i.clear();else{de===0&&(i.setRenderTarget(oe.map),i.clear());const Mt=oe.getViewport(de);o.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),V.viewport(o)}n=oe.getFrustum(de),y(F,x,tt,Se,this.type)}oe.isPointLightShadow!==!0&&this.type===jo&&b(oe,x),oe.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(P,N,k)};function b(R,F){const x=e.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null?R.mapPass=new Bi(s.x,s.y,{format:zr,type:Ki}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),f.uniforms.shadow_pass.value=R.map.depthTexture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(F,null,x,f,_,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value.set(R.map.width,R.map.height),h.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(F,null,x,h,_,null)}function T(R,F,x,P){let N=null;const k=x.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(k!==void 0)N=k;else if(N=x.isPointLight===!0?c:a,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const V=N.uuid,te=F.uuid;let X=l[V];X===void 0&&(X={},l[V]=X);let j=X[te];j===void 0&&(j=N.clone(),X[te]=j,F.addEventListener("dispose",A)),N=j}if(N.visible=F.visible,N.wireframe=F.wireframe,P===jo?N.side=F.shadowSide!==null?F.shadowSide:F.side:N.side=F.shadowSide!==null?F.shadowSide:d[F.side],N.alphaMap=F.alphaMap,N.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,N.map=F.map,N.clipShadows=F.clipShadows,N.clippingPlanes=F.clippingPlanes,N.clipIntersection=F.clipIntersection,N.displacementMap=F.displacementMap,N.displacementScale=F.displacementScale,N.displacementBias=F.displacementBias,N.wireframeLinewidth=F.wireframeLinewidth,N.linewidth=F.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const V=i.properties.get(N);V.light=x}return N}function y(R,F,x,P,N){if(R.visible===!1)return;if(R.layers.test(F.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&N===jo)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,R.matrixWorld);const te=e.update(R),X=R.material;if(Array.isArray(X)){const j=te.groups;for(let Se=0,oe=j.length;Se<oe;Se++){const Re=j[Se],xe=X[Re.materialIndex];if(xe&&xe.visible){const Te=T(R,xe,P,N);R.onBeforeShadow(i,R,F,x,te,Te,Re),i.renderBufferDirect(x,null,te,Te,R,Re),R.onAfterShadow(i,R,F,x,te,Te,Re)}}}else if(X.visible){const j=T(R,X,P,N);R.onBeforeShadow(i,R,F,x,te,j,null),i.renderBufferDirect(x,null,te,j,R,null),R.onAfterShadow(i,R,F,x,te,j,null)}}const V=R.children;for(let te=0,X=V.length;te<X;te++)y(V[te],F,x,P,N)}function A(R){R.target.removeEventListener("dispose",A);for(const x in l){const P=l[x],N=R.target.uuid;N in P&&(P[N].dispose(),delete P[N])}}}function f2(i,e){function t(){let ee=!1;const je=new ei;let ze=null;const St=new ei(0,0,0,0);return{setMask:function(Et){ze!==Et&&!ee&&(i.colorMask(Et,Et,Et,Et),ze=Et)},setLocked:function(Et){ee=Et},setClear:function(Et,qe,Bt,Ut,_n){_n===!0&&(Et*=Ut,qe*=Ut,Bt*=Ut),je.set(Et,qe,Bt,Ut),St.equals(je)===!1&&(i.clearColor(Et,qe,Bt,Ut),St.copy(je))},reset:function(){ee=!1,ze=null,St.set(-1,0,0,0)}}}function n(){let ee=!1,je=!1,ze=null,St=null,Et=null;return{setReversed:function(qe){if(je!==qe){const Bt=e.get("EXT_clip_control");qe?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),je=qe;const Ut=Et;Et=null,this.setClear(Ut)}},getReversed:function(){return je},setTest:function(qe){qe?Oe(i.DEPTH_TEST):Ze(i.DEPTH_TEST)},setMask:function(qe){ze!==qe&&!ee&&(i.depthMask(qe),ze=qe)},setFunc:function(qe){if(je&&(qe=Hd[qe]),St!==qe){switch(qe){case Bc:i.depthFunc(i.NEVER);break;case kc:i.depthFunc(i.ALWAYS);break;case Gc:i.depthFunc(i.LESS);break;case la:i.depthFunc(i.LEQUAL);break;case Hc:i.depthFunc(i.EQUAL);break;case Vc:i.depthFunc(i.GEQUAL);break;case Wc:i.depthFunc(i.GREATER);break;case Xc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=qe}},setLocked:function(qe){ee=qe},setClear:function(qe){Et!==qe&&(Et=qe,je&&(qe=1-qe),i.clearDepth(qe))},reset:function(){ee=!1,ze=null,St=null,Et=null,je=!1}}}function s(){let ee=!1,je=null,ze=null,St=null,Et=null,qe=null,Bt=null,Ut=null,_n=null;return{setTest:function(ht){ee||(ht?Oe(i.STENCIL_TEST):Ze(i.STENCIL_TEST))},setMask:function(ht){je!==ht&&!ee&&(i.stencilMask(ht),je=ht)},setFunc:function(ht,fn,vi){(ze!==ht||St!==fn||Et!==vi)&&(i.stencilFunc(ht,fn,vi),ze=ht,St=fn,Et=vi)},setOp:function(ht,fn,vi){(qe!==ht||Bt!==fn||Ut!==vi)&&(i.stencilOp(ht,fn,vi),qe=ht,Bt=fn,Ut=vi)},setLocked:function(ht){ee=ht},setClear:function(ht){_n!==ht&&(i.clearStencil(ht),_n=ht)},reset:function(){ee=!1,je=null,ze=null,St=null,Et=null,qe=null,Bt=null,Ut=null,_n=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},f={},h=new WeakMap,p=[],_=null,m=!1,g=null,b=null,T=null,y=null,A=null,R=null,F=null,x=new ke(0,0,0),P=0,N=!1,k=null,V=null,te=null,X=null,j=null;const Se=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,Re=0;const xe=i.getParameter(i.VERSION);xe.indexOf("WebGL")!==-1?(Re=parseFloat(/^WebGL (\d)/.exec(xe)[1]),oe=Re>=1):xe.indexOf("OpenGL ES")!==-1&&(Re=parseFloat(/^OpenGL ES (\d)/.exec(xe)[1]),oe=Re>=2);let Te=null,de={};const tt=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),Wt=new ei().fromArray(tt),Y=new ei().fromArray(Mt);function st(ee,je,ze,St){const Et=new Uint8Array(4),qe=i.createTexture();i.bindTexture(ee,qe),i.texParameteri(ee,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(ee,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<ze;Bt++)ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?i.texImage3D(je,0,i.RGBA,1,1,St,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(je+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return qe}const be={};be[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Oe(i.DEPTH_TEST),o.setFunc(la),Ye(!1),Je(_h),Oe(i.CULL_FACE),Le(Ns);function Oe(ee){u[ee]!==!0&&(i.enable(ee),u[ee]=!0)}function Ze(ee){u[ee]!==!1&&(i.disable(ee),u[ee]=!1)}function J(ee,je){return f[ee]!==je?(i.bindFramebuffer(ee,je),f[ee]=je,ee===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=je),ee===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=je),!0):!1}function Ve(ee,je){let ze=p,St=!1;if(ee){ze=h.get(je),ze===void 0&&(ze=[],h.set(je,ze));const Et=ee.textures;if(ze.length!==Et.length||ze[0]!==i.COLOR_ATTACHMENT0){for(let qe=0,Bt=Et.length;qe<Bt;qe++)ze[qe]=i.COLOR_ATTACHMENT0+qe;ze.length=Et.length,St=!0}}else ze[0]!==i.BACK&&(ze[0]=i.BACK,St=!0);St&&i.drawBuffers(ze)}function Ke(ee){return _!==ee?(i.useProgram(ee),_=ee,!0):!1}const yt={[po]:i.FUNC_ADD,[ud]:i.FUNC_SUBTRACT,[hd]:i.FUNC_REVERSE_SUBTRACT};yt[fd]=i.MIN,yt[dd]=i.MAX;const me={[pd]:i.ZERO,[md]:i.ONE,[gd]:i.SRC_COLOR,[t0]:i.SRC_ALPHA,[bd]:i.SRC_ALPHA_SATURATE,[Md]:i.DST_COLOR,[_d]:i.DST_ALPHA,[vd]:i.ONE_MINUS_SRC_COLOR,[n0]:i.ONE_MINUS_SRC_ALPHA,[yd]:i.ONE_MINUS_DST_COLOR,[xd]:i.ONE_MINUS_DST_ALPHA,[Sd]:i.CONSTANT_COLOR,[wd]:i.ONE_MINUS_CONSTANT_COLOR,[Td]:i.CONSTANT_ALPHA,[Ed]:i.ONE_MINUS_CONSTANT_ALPHA};function Le(ee,je,ze,St,Et,qe,Bt,Ut,_n,ht){if(ee===Ns){m===!0&&(Ze(i.BLEND),m=!1);return}if(m===!1&&(Oe(i.BLEND),m=!0),ee!==cd){if(ee!==g||ht!==N){if((b!==po||A!==po)&&(i.blendEquation(i.FUNC_ADD),b=po,A=po),ht)switch(ee){case yo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pi:i.blendFunc(i.ONE,i.ONE);break;case xh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Rn("WebGLState: Invalid blending: ",ee);break}else switch(ee){case yo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case xh:Rn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mh:Rn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rn("WebGLState: Invalid blending: ",ee);break}T=null,y=null,R=null,F=null,x.set(0,0,0),P=0,g=ee,N=ht}return}Et=Et||je,qe=qe||ze,Bt=Bt||St,(je!==b||Et!==A)&&(i.blendEquationSeparate(yt[je],yt[Et]),b=je,A=Et),(ze!==T||St!==y||qe!==R||Bt!==F)&&(i.blendFuncSeparate(me[ze],me[St],me[qe],me[Bt]),T=ze,y=St,R=qe,F=Bt),(Ut.equals(x)===!1||_n!==P)&&(i.blendColor(Ut.r,Ut.g,Ut.b,_n),x.copy(Ut),P=_n),g=ee,N=!1}function Be(ee,je){ee.side===Bn?Ze(i.CULL_FACE):Oe(i.CULL_FACE);let ze=ee.side===zi;je&&(ze=!ze),Ye(ze),ee.blending===yo&&ee.transparent===!1?Le(Ns):Le(ee.blending,ee.blendEquation,ee.blendSrc,ee.blendDst,ee.blendEquationAlpha,ee.blendSrcAlpha,ee.blendDstAlpha,ee.blendColor,ee.blendAlpha,ee.premultipliedAlpha),o.setFunc(ee.depthFunc),o.setTest(ee.depthTest),o.setMask(ee.depthWrite),r.setMask(ee.colorWrite);const St=ee.stencilWrite;a.setTest(St),St&&(a.setMask(ee.stencilWriteMask),a.setFunc(ee.stencilFunc,ee.stencilRef,ee.stencilFuncMask),a.setOp(ee.stencilFail,ee.stencilZFail,ee.stencilZPass)),At(ee.polygonOffset,ee.polygonOffsetFactor,ee.polygonOffsetUnits),ee.alphaToCoverage===!0?Oe(i.SAMPLE_ALPHA_TO_COVERAGE):Ze(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(ee){k!==ee&&(ee?i.frontFace(i.CW):i.frontFace(i.CCW),k=ee)}function Je(ee){ee!==od?(Oe(i.CULL_FACE),ee!==V&&(ee===_h?i.cullFace(i.BACK):ee===ad?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ze(i.CULL_FACE),V=ee}function bt(ee){ee!==te&&(oe&&i.lineWidth(ee),te=ee)}function At(ee,je,ze){ee?(Oe(i.POLYGON_OFFSET_FILL),(X!==je||j!==ze)&&(X=je,j=ze,o.getReversed()&&(je=-je),i.polygonOffset(je,ze))):Ze(i.POLYGON_OFFSET_FILL)}function z(ee){ee?Oe(i.SCISSOR_TEST):Ze(i.SCISSOR_TEST)}function H(ee){ee===void 0&&(ee=i.TEXTURE0+Se-1),Te!==ee&&(i.activeTexture(ee),Te=ee)}function E(ee,je,ze){ze===void 0&&(Te===null?ze=i.TEXTURE0+Se-1:ze=Te);let St=de[ze];St===void 0&&(St={type:void 0,texture:void 0},de[ze]=St),(St.type!==ee||St.texture!==je)&&(Te!==ze&&(i.activeTexture(ze),Te=ze),i.bindTexture(ee,je||be[ee]),St.type=ee,St.texture=je)}function ue(){const ee=de[Te];ee!==void 0&&ee.type!==void 0&&(i.bindTexture(ee.type,null),ee.type=void 0,ee.texture=void 0)}function Pe(){try{i.compressedTexImage2D(...arguments)}catch(ee){Rn("WebGLState:",ee)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(ee){Rn("WebGLState:",ee)}}function v(){try{i.texSubImage2D(...arguments)}catch(ee){Rn("WebGLState:",ee)}}function G(){try{i.texSubImage3D(...arguments)}catch(ee){Rn("WebGLState:",ee)}}function re(){try{i.compressedTexSubImage2D(...arguments)}catch(ee){Rn("WebGLState:",ee)}}function ge(){try{i.compressedTexSubImage3D(...arguments)}catch(ee){Rn("WebGLState:",ee)}}function Ge(){try{i.texStorage2D(...arguments)}catch(ee){Rn("WebGLState:",ee)}}function He(){try{i.texStorage3D(...arguments)}catch(ee){Rn("WebGLState:",ee)}}function we(){try{i.texImage2D(...arguments)}catch(ee){Rn("WebGLState:",ee)}}function Ae(){try{i.texImage3D(...arguments)}catch(ee){Rn("WebGLState:",ee)}}function rt(ee){return d[ee]!==void 0?d[ee]:i.getParameter(ee)}function Nt(ee,je){d[ee]!==je&&(i.pixelStorei(ee,je),d[ee]=je)}function nt(ee){Wt.equals(ee)===!1&&(i.scissor(ee.x,ee.y,ee.z,ee.w),Wt.copy(ee))}function Fe(ee){Y.equals(ee)===!1&&(i.viewport(ee.x,ee.y,ee.z,ee.w),Y.copy(ee))}function Ct(ee,je){let ze=l.get(je);ze===void 0&&(ze=new WeakMap,l.set(je,ze));let St=ze.get(ee);St===void 0&&(St=i.getUniformBlockIndex(je,ee.name),ze.set(ee,St))}function ut(ee,je){const St=l.get(je).get(ee);c.get(je)!==St&&(i.uniformBlockBinding(je,St,ee.__bindingPointIndex),c.set(je,St))}function Vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},Te=null,de={},f={},h=new WeakMap,p=[],_=null,m=!1,g=null,b=null,T=null,y=null,A=null,R=null,F=null,x=new ke(0,0,0),P=0,N=!1,k=null,V=null,te=null,X=null,j=null,Wt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Oe,disable:Ze,bindFramebuffer:J,drawBuffers:Ve,useProgram:Ke,setBlending:Le,setMaterial:Be,setFlipSided:Ye,setCullFace:Je,setLineWidth:bt,setPolygonOffset:At,setScissorTest:z,activeTexture:H,bindTexture:E,unbindTexture:ue,compressedTexImage2D:Pe,compressedTexImage3D:C,texImage2D:we,texImage3D:Ae,pixelStorei:Nt,getParameter:rt,updateUBOMapping:Ct,uniformBlockBinding:ut,texStorage2D:Ge,texStorage3D:He,texSubImage2D:v,texSubImage3D:G,compressedTexSubImage2D:re,compressedTexSubImage3D:ge,scissor:nt,viewport:Fe,reset:Vt}}function d2(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new et,u=new WeakMap,d=new Set;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,v){return p?new OffscreenCanvas(C,v):El("canvas")}function m(C,v,G){let re=1;const ge=Pe(C);if((ge.width>G||ge.height>G)&&(re=G/Math.max(ge.width,ge.height)),re<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Ge=Math.floor(re*ge.width),He=Math.floor(re*ge.height);f===void 0&&(f=_(Ge,He));const we=v?_(Ge,He):f;return we.width=Ge,we.height=He,we.getContext("2d").drawImage(C,0,0,Ge,He),rn("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Ge+"x"+He+")."),we}else return"data"in C&&rn("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),C;return C}function g(C){return C.generateMipmaps}function b(C){i.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(C,v,G,re,ge,Ge=!1){if(C!==null){if(i[C]!==void 0)return i[C];rn("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let He;re&&(He=e.get("EXT_texture_norm16"),He||rn("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let we=v;if(v===i.RED&&(G===i.FLOAT&&(we=i.R32F),G===i.HALF_FLOAT&&(we=i.R16F),G===i.UNSIGNED_BYTE&&(we=i.R8),G===i.UNSIGNED_SHORT&&He&&(we=He.R16_EXT),G===i.SHORT&&He&&(we=He.R16_SNORM_EXT)),v===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(we=i.R8UI),G===i.UNSIGNED_SHORT&&(we=i.R16UI),G===i.UNSIGNED_INT&&(we=i.R32UI),G===i.BYTE&&(we=i.R8I),G===i.SHORT&&(we=i.R16I),G===i.INT&&(we=i.R32I)),v===i.RG&&(G===i.FLOAT&&(we=i.RG32F),G===i.HALF_FLOAT&&(we=i.RG16F),G===i.UNSIGNED_BYTE&&(we=i.RG8),G===i.UNSIGNED_SHORT&&He&&(we=He.RG16_EXT),G===i.SHORT&&He&&(we=He.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(we=i.RG8UI),G===i.UNSIGNED_SHORT&&(we=i.RG16UI),G===i.UNSIGNED_INT&&(we=i.RG32UI),G===i.BYTE&&(we=i.RG8I),G===i.SHORT&&(we=i.RG16I),G===i.INT&&(we=i.RG32I)),v===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(we=i.RGB8UI),G===i.UNSIGNED_SHORT&&(we=i.RGB16UI),G===i.UNSIGNED_INT&&(we=i.RGB32UI),G===i.BYTE&&(we=i.RGB8I),G===i.SHORT&&(we=i.RGB16I),G===i.INT&&(we=i.RGB32I)),v===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(we=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(we=i.RGBA16UI),G===i.UNSIGNED_INT&&(we=i.RGBA32UI),G===i.BYTE&&(we=i.RGBA8I),G===i.SHORT&&(we=i.RGBA16I),G===i.INT&&(we=i.RGBA32I)),v===i.RGB&&(G===i.UNSIGNED_SHORT&&He&&(we=He.RGB16_EXT),G===i.SHORT&&He&&(we=He.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(we=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(we=i.R11F_G11F_B10F)),v===i.RGBA){const Ae=Ge?Tl:En.getTransfer(ge);G===i.FLOAT&&(we=i.RGBA32F),G===i.HALF_FLOAT&&(we=i.RGBA16F),G===i.UNSIGNED_BYTE&&(we=Ae===Fn?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&He&&(we=He.RGBA16_EXT),G===i.SHORT&&He&&(we=He.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(we=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(we=i.RGB5_A1)}return(we===i.R16F||we===i.R32F||we===i.RG16F||we===i.RG32F||we===i.RGBA16F||we===i.RGBA32F)&&e.get("EXT_color_buffer_float"),we}function A(C,v){let G;return C?v===null||v===zs||v===ua?G=i.DEPTH24_STENCIL8:v===_s?G=i.DEPTH32F_STENCIL8:v===ca&&(G=i.DEPTH24_STENCIL8,rn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===zs||v===ua?G=i.DEPTH_COMPONENT24:v===_s?G=i.DEPTH_COMPONENT32F:v===ca&&(G=i.DEPTH_COMPONENT16),G}function R(C,v){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==xi&&C.minFilter!==Li?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function F(C){const v=C.target;v.removeEventListener("dispose",F),P(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&d.delete(v)}function x(C){const v=C.target;v.removeEventListener("dispose",x),k(v)}function P(C){const v=n.get(C);if(v.__webglInit===void 0)return;const G=C.source,re=h.get(G);if(re){const ge=re[v.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&N(C),Object.keys(re).length===0&&h.delete(G)}n.remove(C)}function N(C){const v=n.get(C);i.deleteTexture(v.__webglTexture);const G=C.source,re=h.get(G);delete re[v.__cacheKey],o.memory.textures--}function k(C){const v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(v.__webglFramebuffer[re]))for(let ge=0;ge<v.__webglFramebuffer[re].length;ge++)i.deleteFramebuffer(v.__webglFramebuffer[re][ge]);else i.deleteFramebuffer(v.__webglFramebuffer[re]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[re])}else{if(Array.isArray(v.__webglFramebuffer))for(let re=0;re<v.__webglFramebuffer.length;re++)i.deleteFramebuffer(v.__webglFramebuffer[re]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let re=0;re<v.__webglColorRenderbuffer.length;re++)v.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[re]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const G=C.textures;for(let re=0,ge=G.length;re<ge;re++){const Ge=n.get(G[re]);Ge.__webglTexture&&(i.deleteTexture(Ge.__webglTexture),o.memory.textures--),n.remove(G[re])}n.remove(C)}let V=0;function te(){V=0}function X(){return V}function j(C){V=C}function Se(){const C=V;return C>=s.maxTextures&&rn("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,C}function oe(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function Re(C,v){const G=n.get(C);if(C.isVideoTexture&&E(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){const re=C.image;if(re===null)rn("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)rn("WebGLRenderer: Texture marked for update but image is incomplete");else{Ze(G,C,v);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+v)}function xe(C,v){const G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){Ze(G,C,v);return}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+v)}function Te(C,v){const G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){Ze(G,C,v);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+v)}function de(C,v){const G=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&G.__version!==C.version){J(G,C,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+v)}const tt={[Ro]:i.REPEAT,[on]:i.CLAMP_TO_EDGE,[Yc]:i.MIRRORED_REPEAT},Mt={[xi]:i.NEAREST,[Rd]:i.NEAREST_MIPMAP_NEAREST,[Ta]:i.NEAREST_MIPMAP_LINEAR,[Li]:i.LINEAR,[Jl]:i.LINEAR_MIPMAP_NEAREST,[Rr]:i.LINEAR_MIPMAP_LINEAR},Wt={[Dd]:i.NEVER,[zd]:i.ALWAYS,[Nd]:i.LESS,[Ju]:i.LEQUAL,[Ud]:i.EQUAL,[Qu]:i.GEQUAL,[Fd]:i.GREATER,[Od]:i.NOTEQUAL};function Y(C,v){if(v.type===_s&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Li||v.magFilter===Jl||v.magFilter===Ta||v.magFilter===Rr||v.minFilter===Li||v.minFilter===Jl||v.minFilter===Ta||v.minFilter===Rr)&&rn("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,tt[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,tt[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,tt[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Mt[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Mt[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Wt[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===xi||v.minFilter!==Ta&&v.minFilter!==Rr||v.type===_s&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function st(C,v){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",F));const re=v.source;let ge=h.get(re);ge===void 0&&(ge={},h.set(re,ge));const Ge=oe(v);if(Ge!==C.__cacheKey){ge[Ge]===void 0&&(ge[Ge]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ge[Ge].usedTimes++;const He=ge[C.__cacheKey];He!==void 0&&(ge[C.__cacheKey].usedTimes--,He.usedTimes===0&&N(v)),C.__cacheKey=Ge,C.__webglTexture=ge[Ge].texture}return G}function be(C,v,G){return Math.floor(Math.floor(C/G)/v)}function Oe(C,v,G,re){const Ge=C.updateRanges;if(Ge.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,G,re,v.data);else{Ge.sort((Nt,nt)=>Nt.start-nt.start);let He=0;for(let Nt=1;Nt<Ge.length;Nt++){const nt=Ge[He],Fe=Ge[Nt],Ct=nt.start+nt.count,ut=be(Fe.start,v.width,4),Vt=be(nt.start,v.width,4);Fe.start<=Ct+1&&ut===Vt&&be(Fe.start+Fe.count-1,v.width,4)===ut?nt.count=Math.max(nt.count,Fe.start+Fe.count-nt.start):(++He,Ge[He]=Fe)}Ge.length=He+1;const we=t.getParameter(i.UNPACK_ROW_LENGTH),Ae=t.getParameter(i.UNPACK_SKIP_PIXELS),rt=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Nt=0,nt=Ge.length;Nt<nt;Nt++){const Fe=Ge[Nt],Ct=Math.floor(Fe.start/4),ut=Math.ceil(Fe.count/4),Vt=Ct%v.width,ee=Math.floor(Ct/v.width),je=ut,ze=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Vt),t.pixelStorei(i.UNPACK_SKIP_ROWS,ee),t.texSubImage2D(i.TEXTURE_2D,0,Vt,ee,je,ze,G,re,v.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,we),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,rt)}}function Ze(C,v,G){let re=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(re=i.TEXTURE_3D);const ge=st(C,v),Ge=v.source;t.bindTexture(re,C.__webglTexture,i.TEXTURE0+G);const He=n.get(Ge);if(Ge.version!==He.__version||ge===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const ze=En.getPrimaries(En.workingColorSpace),St=v.colorSpace===Js?null:En.getPrimaries(v.colorSpace),Et=v.colorSpace===Js||ze===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let Ae=m(v.image,!1,s.maxTextureSize);Ae=ue(v,Ae);const rt=r.convert(v.format,v.colorSpace),Nt=r.convert(v.type);let nt=y(v.internalFormat,rt,Nt,v.normalized,v.colorSpace,v.isVideoTexture);Y(re,v);let Fe;const Ct=v.mipmaps,ut=v.isVideoTexture!==!0,Vt=He.__version===void 0||ge===!0,ee=Ge.dataReady,je=R(v,Ae);if(v.isDepthTexture)nt=A(v.format===Pr,v.type),Vt&&(ut?t.texStorage2D(i.TEXTURE_2D,1,nt,Ae.width,Ae.height):t.texImage2D(i.TEXTURE_2D,0,nt,Ae.width,Ae.height,0,rt,Nt,null));else if(v.isDataTexture)if(Ct.length>0){ut&&Vt&&t.texStorage2D(i.TEXTURE_2D,je,nt,Ct[0].width,Ct[0].height);for(let ze=0,St=Ct.length;ze<St;ze++)Fe=Ct[ze],ut?ee&&t.texSubImage2D(i.TEXTURE_2D,ze,0,0,Fe.width,Fe.height,rt,Nt,Fe.data):t.texImage2D(i.TEXTURE_2D,ze,nt,Fe.width,Fe.height,0,rt,Nt,Fe.data);v.generateMipmaps=!1}else ut?(Vt&&t.texStorage2D(i.TEXTURE_2D,je,nt,Ae.width,Ae.height),ee&&Oe(v,Ae,rt,Nt)):t.texImage2D(i.TEXTURE_2D,0,nt,Ae.width,Ae.height,0,rt,Nt,Ae.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ut&&Vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,je,nt,Ct[0].width,Ct[0].height,Ae.depth);for(let ze=0,St=Ct.length;ze<St;ze++)if(Fe=Ct[ze],v.format!==xs)if(rt!==null)if(ut){if(ee)if(v.layerUpdates.size>0){const Et=hf(Fe.width,Fe.height,v.format,v.type);for(const qe of v.layerUpdates){const Bt=Fe.data.subarray(qe*Et/Fe.data.BYTES_PER_ELEMENT,(qe+1)*Et/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ze,0,0,qe,Fe.width,Fe.height,1,rt,Bt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ze,0,0,0,Fe.width,Fe.height,Ae.depth,rt,Fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ze,nt,Fe.width,Fe.height,Ae.depth,0,Fe.data,0,0);else rn("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?ee&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ze,0,0,0,Fe.width,Fe.height,Ae.depth,rt,Nt,Fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ze,nt,Fe.width,Fe.height,Ae.depth,0,rt,Nt,Fe.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ut&&Vt&&t.texStorage2D(i.TEXTURE_2D,je,nt,Ct[0].width,Ct[0].height);for(let ze=0,St=Ct.length;ze<St;ze++)Fe=Ct[ze],v.format!==xs?rt!==null?ut?ee&&t.compressedTexSubImage2D(i.TEXTURE_2D,ze,0,0,Fe.width,Fe.height,rt,Fe.data):t.compressedTexImage2D(i.TEXTURE_2D,ze,nt,Fe.width,Fe.height,0,Fe.data):rn("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?ee&&t.texSubImage2D(i.TEXTURE_2D,ze,0,0,Fe.width,Fe.height,rt,Nt,Fe.data):t.texImage2D(i.TEXTURE_2D,ze,nt,Fe.width,Fe.height,0,rt,Nt,Fe.data)}else if(v.isDataArrayTexture)if(ut){if(Vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,je,nt,Ae.width,Ae.height,Ae.depth),ee)if(v.layerUpdates.size>0){const ze=hf(Ae.width,Ae.height,v.format,v.type);for(const St of v.layerUpdates){const Et=Ae.data.subarray(St*ze/Ae.data.BYTES_PER_ELEMENT,(St+1)*ze/Ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,St,Ae.width,Ae.height,1,rt,Nt,Et)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,rt,Nt,Ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,nt,Ae.width,Ae.height,Ae.depth,0,rt,Nt,Ae.data);else if(v.isData3DTexture)ut?(Vt&&t.texStorage3D(i.TEXTURE_3D,je,nt,Ae.width,Ae.height,Ae.depth),ee&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,rt,Nt,Ae.data)):t.texImage3D(i.TEXTURE_3D,0,nt,Ae.width,Ae.height,Ae.depth,0,rt,Nt,Ae.data);else if(v.isFramebufferTexture){if(Vt)if(ut)t.texStorage2D(i.TEXTURE_2D,je,nt,Ae.width,Ae.height);else{let ze=Ae.width,St=Ae.height;for(let Et=0;Et<je;Et++)t.texImage2D(i.TEXTURE_2D,Et,nt,ze,St,0,rt,Nt,null),ze>>=1,St>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const ze=i.canvas;if(ze.hasAttribute("layoutsubtree")||ze.setAttribute("layoutsubtree","true"),Ae.parentNode!==ze){ze.appendChild(Ae),d.add(v),ze.onpaint=St=>{const Et=St.changedElements;for(const qe of d)Et.includes(qe.image)&&(qe.needsUpdate=!0)},ze.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Ae);else{const Et=i.RGBA,qe=i.RGBA,Bt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Et,qe,Bt,Ae)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ct.length>0){if(ut&&Vt){const ze=Pe(Ct[0]);t.texStorage2D(i.TEXTURE_2D,je,nt,ze.width,ze.height)}for(let ze=0,St=Ct.length;ze<St;ze++)Fe=Ct[ze],ut?ee&&t.texSubImage2D(i.TEXTURE_2D,ze,0,0,rt,Nt,Fe):t.texImage2D(i.TEXTURE_2D,ze,nt,rt,Nt,Fe);v.generateMipmaps=!1}else if(ut){if(Vt){const ze=Pe(Ae);t.texStorage2D(i.TEXTURE_2D,je,nt,ze.width,ze.height)}ee&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,rt,Nt,Ae)}else t.texImage2D(i.TEXTURE_2D,0,nt,rt,Nt,Ae);g(v)&&b(re),He.__version=Ge.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function J(C,v,G){if(v.image.length!==6)return;const re=st(C,v),ge=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+G);const Ge=n.get(ge);if(ge.version!==Ge.__version||re===!0){t.activeTexture(i.TEXTURE0+G);const He=En.getPrimaries(En.workingColorSpace),we=v.colorSpace===Js?null:En.getPrimaries(v.colorSpace),Ae=v.colorSpace===Js||He===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const rt=v.isCompressedTexture||v.image[0].isCompressedTexture,Nt=v.image[0]&&v.image[0].isDataTexture,nt=[];for(let qe=0;qe<6;qe++)!rt&&!Nt?nt[qe]=m(v.image[qe],!0,s.maxCubemapSize):nt[qe]=Nt?v.image[qe].image:v.image[qe],nt[qe]=ue(v,nt[qe]);const Fe=nt[0],Ct=r.convert(v.format,v.colorSpace),ut=r.convert(v.type),Vt=y(v.internalFormat,Ct,ut,v.normalized,v.colorSpace),ee=v.isVideoTexture!==!0,je=Ge.__version===void 0||re===!0,ze=ge.dataReady;let St=R(v,Fe);Y(i.TEXTURE_CUBE_MAP,v);let Et;if(rt){ee&&je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,St,Vt,Fe.width,Fe.height);for(let qe=0;qe<6;qe++){Et=nt[qe].mipmaps;for(let Bt=0;Bt<Et.length;Bt++){const Ut=Et[Bt];v.format!==xs?Ct!==null?ee?ze&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Bt,0,0,Ut.width,Ut.height,Ct,Ut.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Bt,Vt,Ut.width,Ut.height,0,Ut.data):rn("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Bt,0,0,Ut.width,Ut.height,Ct,ut,Ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Bt,Vt,Ut.width,Ut.height,0,Ct,ut,Ut.data)}}}else{if(Et=v.mipmaps,ee&&je){Et.length>0&&St++;const qe=Pe(nt[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,St,Vt,qe.width,qe.height)}for(let qe=0;qe<6;qe++)if(Nt){ee?ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0,0,0,nt[qe].width,nt[qe].height,Ct,ut,nt[qe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0,Vt,nt[qe].width,nt[qe].height,0,Ct,ut,nt[qe].data);for(let Bt=0;Bt<Et.length;Bt++){const _n=Et[Bt].image[qe].image;ee?ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Bt+1,0,0,_n.width,_n.height,Ct,ut,_n.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Bt+1,Vt,_n.width,_n.height,0,Ct,ut,_n.data)}}else{ee?ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0,0,0,Ct,ut,nt[qe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0,Vt,Ct,ut,nt[qe]);for(let Bt=0;Bt<Et.length;Bt++){const Ut=Et[Bt];ee?ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Bt+1,0,0,Ct,ut,Ut.image[qe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Bt+1,Vt,Ct,ut,Ut.image[qe])}}}g(v)&&b(i.TEXTURE_CUBE_MAP),Ge.__version=ge.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Ve(C,v,G,re,ge,Ge){const He=r.convert(G.format,G.colorSpace),we=r.convert(G.type),Ae=y(G.internalFormat,He,we,G.normalized,G.colorSpace),rt=n.get(v),Nt=n.get(G);if(Nt.__renderTarget=v,!rt.__hasExternalTextures){const nt=Math.max(1,v.width>>Ge),Fe=Math.max(1,v.height>>Ge);ge===i.TEXTURE_3D||ge===i.TEXTURE_2D_ARRAY?t.texImage3D(ge,Ge,Ae,nt,Fe,v.depth,0,He,we,null):t.texImage2D(ge,Ge,Ae,nt,Fe,0,He,we,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),H(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ge,Nt.__webglTexture,0,z(v)):(ge===i.TEXTURE_2D||ge>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,ge,Nt.__webglTexture,Ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(C,v,G){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){const re=v.depthTexture,ge=re&&re.isDepthTexture?re.type:null,Ge=A(v.stencilBuffer,ge),He=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;H(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,z(v),Ge,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,z(v),Ge,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Ge,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,He,i.RENDERBUFFER,C)}else{const re=v.textures;for(let ge=0;ge<re.length;ge++){const Ge=re[ge],He=r.convert(Ge.format,Ge.colorSpace),we=r.convert(Ge.type),Ae=y(Ge.internalFormat,He,we,Ge.normalized,Ge.colorSpace);H(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,z(v),Ae,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,z(v),Ae,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(C,v,G){const re=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=n.get(v.depthTexture);if(ge.__renderTarget=v,(!ge.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),re){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,v.depthTexture.addEventListener("dispose",F)),ge.__webglTexture===void 0){ge.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ge.__webglTexture),Y(i.TEXTURE_CUBE_MAP,v.depthTexture);const rt=r.convert(v.depthTexture.format),Nt=r.convert(v.depthTexture.type);let nt;v.depthTexture.format===js?nt=i.DEPTH_COMPONENT24:v.depthTexture.format===Pr&&(nt=i.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,nt,v.width,v.height,0,rt,Nt,null)}}else Re(v.depthTexture,0);const Ge=ge.__webglTexture,He=z(v),we=re?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,Ae=v.depthTexture.format===Pr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===js)H(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ae,we,Ge,0,He):i.framebufferTexture2D(i.FRAMEBUFFER,Ae,we,Ge,0);else if(v.depthTexture.format===Pr)H(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ae,we,Ge,0,He):i.framebufferTexture2D(i.FRAMEBUFFER,Ae,we,Ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function me(C){const v=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const re=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),re){const ge=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,re.removeEventListener("dispose",ge)};re.addEventListener("dispose",ge),v.__depthDisposeCallback=ge}v.__boundDepthTexture=re}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(G)for(let re=0;re<6;re++)yt(v.__webglFramebuffer[re],C,re);else{const re=C.texture.mipmaps;re&&re.length>0?yt(v.__webglFramebuffer[0],C,0):yt(v.__webglFramebuffer,C,0)}else if(G){v.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[re]),v.__webglDepthbuffer[re]===void 0)v.__webglDepthbuffer[re]=i.createRenderbuffer(),Ke(v.__webglDepthbuffer[re],C,!1);else{const ge=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ge=v.__webglDepthbuffer[re];i.bindRenderbuffer(i.RENDERBUFFER,Ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,Ge)}}else{const re=C.texture.mipmaps;if(re&&re.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ke(v.__webglDepthbuffer,C,!1);else{const ge=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ge=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,Ge)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(C,v,G){const re=n.get(C);v!==void 0&&Ve(re.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&me(C)}function Be(C){const v=C.texture,G=n.get(C),re=n.get(v);C.addEventListener("dispose",x);const ge=C.textures,Ge=C.isWebGLCubeRenderTarget===!0,He=ge.length>1;if(He||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=v.version,o.memory.textures++),Ge){G.__webglFramebuffer=[];for(let we=0;we<6;we++)if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer[we]=[];for(let Ae=0;Ae<v.mipmaps.length;Ae++)G.__webglFramebuffer[we][Ae]=i.createFramebuffer()}else G.__webglFramebuffer[we]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer=[];for(let we=0;we<v.mipmaps.length;we++)G.__webglFramebuffer[we]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(He)for(let we=0,Ae=ge.length;we<Ae;we++){const rt=n.get(ge[we]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&H(C)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let we=0;we<ge.length;we++){const Ae=ge[we];G.__webglColorRenderbuffer[we]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[we]);const rt=r.convert(Ae.format,Ae.colorSpace),Nt=r.convert(Ae.type),nt=y(Ae.internalFormat,rt,Nt,Ae.normalized,Ae.colorSpace,C.isXRRenderTarget===!0),Fe=z(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,nt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,G.__webglColorRenderbuffer[we])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Ke(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ge){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),Y(i.TEXTURE_CUBE_MAP,v);for(let we=0;we<6;we++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ae=0;Ae<v.mipmaps.length;Ae++)Ve(G.__webglFramebuffer[we][Ae],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ae);else Ve(G.__webglFramebuffer[we],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);g(v)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let we=0,Ae=ge.length;we<Ae;we++){const rt=ge[we],Nt=n.get(rt);let nt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(nt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(nt,Nt.__webglTexture),Y(nt,rt),Ve(G.__webglFramebuffer,C,rt,i.COLOR_ATTACHMENT0+we,nt,0),g(rt)&&b(nt)}t.unbindTexture()}else{let we=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(we=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(we,re.__webglTexture),Y(we,v),v.mipmaps&&v.mipmaps.length>0)for(let Ae=0;Ae<v.mipmaps.length;Ae++)Ve(G.__webglFramebuffer[Ae],C,v,i.COLOR_ATTACHMENT0,we,Ae);else Ve(G.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,we,0);g(v)&&b(we),t.unbindTexture()}C.depthBuffer&&me(C)}function Ye(C){const v=C.textures;for(let G=0,re=v.length;G<re;G++){const ge=v[G];if(g(ge)){const Ge=T(C),He=n.get(ge).__webglTexture;t.bindTexture(Ge,He),b(Ge),t.unbindTexture()}}}const Je=[],bt=[];function At(C){if(C.samples>0){if(H(C)===!1){const v=C.textures,G=C.width,re=C.height;let ge=i.COLOR_BUFFER_BIT;const Ge=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,He=n.get(C),we=v.length>1;if(we)for(let rt=0;rt<v.length;rt++)t.bindFramebuffer(i.FRAMEBUFFER,He.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,He.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer);const Ae=C.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,He.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let rt=0;rt<v.length;rt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ge|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ge|=i.STENCIL_BUFFER_BIT)),we){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,He.__webglColorRenderbuffer[rt]);const Nt=n.get(v[rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Nt,0)}i.blitFramebuffer(0,0,G,re,0,0,G,re,ge,i.NEAREST),c===!0&&(Je.length=0,bt.length=0,Je.push(i.COLOR_ATTACHMENT0+rt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(Je.push(Ge),bt.push(Ge),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,bt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),we)for(let rt=0;rt<v.length;rt++){t.bindFramebuffer(i.FRAMEBUFFER,He.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,He.__webglColorRenderbuffer[rt]);const Nt=n.get(v[rt]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,He.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,Nt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){const v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function z(C){return Math.min(s.maxSamples,C.samples)}function H(C){const v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function E(C){const v=o.render.frame;u.get(C)!==v&&(u.set(C,v),C.update())}function ue(C,v){const G=C.colorSpace,re=C.format,ge=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==wl&&G!==Js&&(En.getTransfer(G)===Fn?(re!==xs||ge!==ts)&&rn("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rn("WebGLTextures: Unsupported texture color space:",G)),v}function Pe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=Se,this.resetTextureUnits=te,this.getTextureUnits=X,this.setTextureUnits=j,this.setTexture2D=Re,this.setTexture2DArray=xe,this.setTexture3D=Te,this.setTextureCube=de,this.rebindTextures=Le,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=H,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function p2(i,e){function t(n,s=Js){let r;const o=En.getTransfer(s);if(n===ts)return i.UNSIGNED_BYTE;if(n===Xu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===a0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===l0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===r0)return i.BYTE;if(n===o0)return i.SHORT;if(n===ca)return i.UNSIGNED_SHORT;if(n===Wu)return i.INT;if(n===zs)return i.UNSIGNED_INT;if(n===_s)return i.FLOAT;if(n===Ki)return i.HALF_FLOAT;if(n===c0)return i.ALPHA;if(n===u0)return i.RGB;if(n===xs)return i.RGBA;if(n===js)return i.DEPTH_COMPONENT;if(n===Pr)return i.DEPTH_STENCIL;if(n===qu)return i.RED;if(n===Zu)return i.RED_INTEGER;if(n===zr)return i.RG;if(n===$u)return i.RG_INTEGER;if(n===Ku)return i.RGBA_INTEGER;if(n===hl||n===fl||n===dl||n===pl)if(o===Fn)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===hl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===hl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qc||n===Zc||n===$c||n===Kc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jc||n===Qc||n===jc||n===eu||n===tu||n===bl||n===nu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jc||n===Qc)return o===Fn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===jc)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===eu)return r.COMPRESSED_R11_EAC;if(n===tu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===bl)return r.COMPRESSED_RG11_EAC;if(n===nu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===iu||n===su||n===ru||n===ou||n===au||n===lu||n===cu||n===uu||n===hu||n===fu||n===du||n===pu||n===mu||n===gu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===iu)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===su)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ru)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ou)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===au)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lu)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cu)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uu)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hu)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fu)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===du)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pu)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mu)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gu)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vu||n===_u||n===xu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===vu)return o===Fn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_u)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mu||n===yu||n===Sl||n===bu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Mu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ua?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const m2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class v2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new y0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Mi({vertexShader:m2,fragmentShader:g2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ot(new ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _2 extends Hr{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,p=null;const _=typeof XRWebGLBinding<"u",m=new v2,g={},b=t.getContextAttributes();let T=null,y=null;const A=[],R=[],F=new et;let x=null,P=null;const N=new Zi;N.viewport=new ei;const k=new Zi;k.viewport=new ei;const V=[N,k],te=new wm;let X=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(be){let Oe=A[be];return Oe===void 0&&(Oe=new sc,A[be]=Oe),Oe.getTargetRaySpace()},this.getControllerGrip=function(be){let Oe=A[be];return Oe===void 0&&(Oe=new sc,A[be]=Oe),Oe.getGripSpace()},this.getHand=function(be){let Oe=A[be];return Oe===void 0&&(Oe=new sc,A[be]=Oe),Oe.getHandSpace()};function Se(be){const Oe=R.indexOf(be.inputSource);if(Oe===-1)return;const Ze=A[Oe];Ze!==void 0&&(Ze.update(be.inputSource,be.frame,l||o),Ze.dispatchEvent({type:be.type,data:be.inputSource}))}function oe(){s.removeEventListener("select",Se),s.removeEventListener("selectstart",Se),s.removeEventListener("selectend",Se),s.removeEventListener("squeeze",Se),s.removeEventListener("squeezestart",Se),s.removeEventListener("squeezeend",Se),s.removeEventListener("end",oe),s.removeEventListener("inputsourceschange",Re);for(let be=0;be<A.length;be++){const Oe=R[be];Oe!==null&&(R[be]=null,A[be].disconnect(Oe))}X=null,j=null,m.reset();for(const be in g)delete g[be];if(e.setRenderTarget(T),h=null,f=null,d=null,s=null,y=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(F.width,F.height,!1),P!==null){const be=P.camera;be.fov=P.fov,be.zoom=P.zoom,be.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(be){r=be,n.isPresenting===!0&&rn("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(be){a=be,n.isPresenting===!0&&rn("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(be){l=be},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(be){if(s=be,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",Se),s.addEventListener("selectstart",Se),s.addEventListener("selectend",Se),s.addEventListener("squeeze",Se),s.addEventListener("squeezestart",Se),s.addEventListener("squeezeend",Se),s.addEventListener("end",oe),s.addEventListener("inputsourceschange",Re),b.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(F),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ze=null,J=null,Ve=null;b.depth&&(Ve=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ze=b.stencil?Pr:js,J=b.stencil?ua:zs);const Ke={colorFormat:t.RGBA8,depthFormat:Ve,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Ke),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Bi(f.textureWidth,f.textureHeight,{format:xs,type:ts,depthTexture:new fa(f.textureWidth,f.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,Ze),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Ze={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,Ze),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new Bi(h.framebufferWidth,h.framebufferHeight,{format:xs,type:ts,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),st.setContext(s),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Re(be){for(let Oe=0;Oe<be.removed.length;Oe++){const Ze=be.removed[Oe],J=R.indexOf(Ze);J>=0&&(R[J]=null,A[J].disconnect(Ze))}for(let Oe=0;Oe<be.added.length;Oe++){const Ze=be.added[Oe];let J=R.indexOf(Ze);if(J===-1){for(let Ke=0;Ke<A.length;Ke++)if(Ke>=R.length){R.push(Ze),J=Ke;break}else if(R[Ke]===null){R[Ke]=Ze,J=Ke;break}if(J===-1)break}const Ve=A[J];Ve&&Ve.connect(Ze)}}const xe=new L,Te=new L;function de(be,Oe,Ze){xe.setFromMatrixPosition(Oe.matrixWorld),Te.setFromMatrixPosition(Ze.matrixWorld);const J=xe.distanceTo(Te),Ve=Oe.projectionMatrix.elements,Ke=Ze.projectionMatrix.elements,yt=Ve[14]/(Ve[10]-1),me=Ve[14]/(Ve[10]+1),Le=(Ve[9]+1)/Ve[5],Be=(Ve[9]-1)/Ve[5],Ye=(Ve[8]-1)/Ve[0],Je=(Ke[8]+1)/Ke[0],bt=yt*Ye,At=yt*Je,z=J/(-Ye+Je),H=z*-Ye;if(Oe.matrixWorld.decompose(be.position,be.quaternion,be.scale),be.translateX(H),be.translateZ(z),be.matrixWorld.compose(be.position,be.quaternion,be.scale),be.matrixWorldInverse.copy(be.matrixWorld).invert(),Ve[10]===-1)be.projectionMatrix.copy(Oe.projectionMatrix),be.projectionMatrixInverse.copy(Oe.projectionMatrixInverse);else{const E=yt+z,ue=me+z,Pe=bt-H,C=At+(J-H),v=Le*me/ue*E,G=Be*me/ue*E;be.projectionMatrix.makePerspective(Pe,C,v,G,E,ue),be.projectionMatrixInverse.copy(be.projectionMatrix).invert()}}function tt(be,Oe){Oe===null?be.matrixWorld.copy(be.matrix):be.matrixWorld.multiplyMatrices(Oe.matrixWorld,be.matrix),be.matrixWorldInverse.copy(be.matrixWorld).invert()}this.updateCamera=function(be){if(s===null)return;let Oe=be.near,Ze=be.far;m.texture!==null&&(m.depthNear>0&&(Oe=m.depthNear),m.depthFar>0&&(Ze=m.depthFar)),te.near=k.near=N.near=Oe,te.far=k.far=N.far=Ze,(X!==te.near||j!==te.far)&&(s.updateRenderState({depthNear:te.near,depthFar:te.far}),X=te.near,j=te.far),te.layers.mask=be.layers.mask|6,N.layers.mask=te.layers.mask&-5,k.layers.mask=te.layers.mask&-3;const J=be.parent,Ve=te.cameras;tt(te,J);for(let Ke=0;Ke<Ve.length;Ke++)tt(Ve[Ke],J);Ve.length===2?de(te,N,k):te.projectionMatrix.copy(N.projectionMatrix),P===null&&be.isPerspectiveCamera&&(P={camera:be,fov:be.fov,zoom:be.zoom}),Mt(be,te,J)};function Mt(be,Oe,Ze){Ze===null?be.matrix.copy(Oe.matrixWorld):(be.matrix.copy(Ze.matrixWorld),be.matrix.invert(),be.matrix.multiply(Oe.matrixWorld)),be.matrix.decompose(be.position,be.quaternion,be.scale),be.updateMatrixWorld(!0),be.projectionMatrix.copy(Oe.projectionMatrix),be.projectionMatrixInverse.copy(Oe.projectionMatrixInverse),be.isPerspectiveCamera&&(be.fov=Po*2*Math.atan(1/be.projectionMatrix.elements[5]),be.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(be){c=be,f!==null&&(f.fixedFoveation=be),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=be)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(te)},this.getCameraTexture=function(be){return g[be]};let Wt=null;function Y(be,Oe){if(u=Oe.getViewerPose(l||o),p=Oe,u!==null){const Ze=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let J=!1;Ze.length!==te.cameras.length&&(te.cameras.length=0,J=!0);for(let me=0;me<Ze.length;me++){const Le=Ze[me];let Be=null;if(h!==null)Be=h.getViewport(Le);else{const Je=d.getViewSubImage(f,Le);Be=Je.viewport,me===0&&(e.setRenderTargetTextures(y,Je.colorTexture,Je.depthStencilTexture),e.setRenderTarget(y))}let Ye=V[me];Ye===void 0&&(Ye=new Zi,Ye.layers.enable(me),Ye.viewport=new ei,V[me]=Ye),Ye.matrix.fromArray(Le.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Le.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(Be.x,Be.y,Be.width,Be.height),me===0&&(te.matrix.copy(Ye.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),J===!0&&te.cameras.push(Ye)}const Ve=s.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const me=d.getDepthInformation(Ze[0]);me&&me.isValid&&me.texture&&m.init(me,s.renderState)}if(Ve&&Ve.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let me=0;me<Ze.length;me++){const Le=Ze[me].camera;if(Le){let Be=g[Le];Be||(Be=new y0,g[Le]=Be);const Ye=d.getCameraImage(Le);Be.sourceTexture=Ye}}}}for(let Ze=0;Ze<A.length;Ze++){const J=R[Ze],Ve=A[Ze];J!==null&&Ve!==void 0&&Ve.update(J,Oe,l||o)}Wt&&Wt(be,Oe),Oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Oe}),p=null}const st=new F0;st.setAnimationLoop(Y),this.setAnimationLoop=function(be){Wt=be},this.dispose=function(){}}}const x2=new Mn,V0=new pn;V0.set(-1,0,0,0,1,0,0,0,1);function M2(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,P0(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,b,T,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&h(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,b,T):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===zi&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===zi&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const b=e.get(g),T=b.envMap,y=b.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(x2.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(V0),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,b,T){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*b,m.scale.value=T*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function h(m,g,b){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===zi&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const b=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function y2(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,A){const R=A.program;n.uniformBlockBinding(y,R)}function l(y,A){let R=s[y.id];R===void 0&&(m(y),R=u(y),s[y.id]=R,y.addEventListener("dispose",b));const F=A.program;n.updateUBOMapping(y,F);const x=e.render.frame;r[y.id]!==x&&(f(y),r[y.id]=x)}function u(y){const A=d();y.__bindingPointIndex=A;const R=i.createBuffer(),F=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,F,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,R),R}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Rn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const A=s[y.id],R=y.uniforms,F=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let x=0,P=R.length;x<P;x++){const N=R[x];if(Array.isArray(N))for(let k=0,V=N.length;k<V;k++)h(N[k],x,k,F);else h(N,x,0,F)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,A,R,F){if(_(y,A,R,F)===!0){const x=y.__offset,P=y.value;if(Array.isArray(P)){let N=0;for(let k=0;k<P.length;k++){const V=P[k],te=g(V);p(V,y.__data,N),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(N+=te.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(P,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function p(y,A,R){typeof y=="number"||typeof y=="boolean"?A[0]=y:y.isMatrix3?(A[0]=y.elements[0],A[1]=y.elements[1],A[2]=y.elements[2],A[3]=0,A[4]=y.elements[3],A[5]=y.elements[4],A[6]=y.elements[5],A[7]=0,A[8]=y.elements[6],A[9]=y.elements[7],A[10]=y.elements[8],A[11]=0):ArrayBuffer.isView(y)?A.set(new y.constructor(y.buffer,y.byteOffset,A.length)):y.toArray(A,R)}function _(y,A,R,F){const x=y.value,P=A+"_"+R;if(F[P]===void 0)return typeof x=="number"||typeof x=="boolean"?F[P]=x:ArrayBuffer.isView(x)?F[P]=x.slice():F[P]=x.clone(),!0;{const N=F[P];if(typeof x=="number"||typeof x=="boolean"){if(N!==x)return F[P]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(N.equals(x)===!1)return N.copy(x),!0}}return!1}function m(y){const A=y.uniforms;let R=0;const F=16;for(let P=0,N=A.length;P<N;P++){const k=Array.isArray(A[P])?A[P]:[A[P]];for(let V=0,te=k.length;V<te;V++){const X=k[V],j=Array.isArray(X.value)?X.value:[X.value];for(let Se=0,oe=j.length;Se<oe;Se++){const Re=j[Se],xe=g(Re),Te=R%F,de=Te%xe.boundary,tt=Te+de;R+=de,tt!==0&&F-tt<xe.storage&&(R+=F-tt),X.__data=new Float32Array(xe.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=R,R+=xe.storage}}}const x=R%F;return x>0&&(R+=F-x),y.__size=R,y.__cache={},this}function g(y){const A={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(A.boundary=4,A.storage=4):y.isVector2?(A.boundary=8,A.storage=8):y.isVector3||y.isColor?(A.boundary=16,A.storage=12):y.isVector4?(A.boundary=16,A.storage=16):y.isMatrix3?(A.boundary=48,A.storage=48):y.isMatrix4?(A.boundary=64,A.storage=64):y.isTexture?rn("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(A.boundary=16,A.storage=y.byteLength):rn("WebGLRenderer: Unsupported uniform value type.",y),A}function b(y){const A=y.target;A.removeEventListener("dispose",b);const R=o.indexOf(A.__bindingPointIndex);o.splice(R,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function T(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:T}}const b2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let As=null;function S2(){return As===null&&(As=new _0(b2,16,16,zr,Ki),As.name="DFG_LUT",As.minFilter=Li,As.magFilter=Li,As.wrapS=on,As.wrapT=on,As.generateMipmaps=!1,As.needsUpdate=!0),As}class w2{constructor(e={}){const{canvas:t=kd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=ts}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=h,m=new Set([Ku,$u,Zu]),g=new Set([ts,zs,ca,ua,Xu,Yu]),b=new Uint32Array(4),T=new Int32Array(4),y=new L;let A=null,R=null;const F=[],x=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Us,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let k=!1,V=null,te=null,X=null,j=null;this._outputColorSpace=qi;let Se=0,oe=0,Re=null,xe=-1,Te=null;const de=new ei,tt=new ei;let Mt=null;const Wt=new ke(0);let Y=0,st=t.width,be=t.height,Oe=1,Ze=null,J=null;const Ve=new ei(0,0,st,be),Ke=new ei(0,0,st,be);let yt=!1;const me=new ih;let Le=!1,Be=!1;const Ye=new Mn,Je=new L,bt=new ei,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let z=!1;function H(){return Re===null?Oe:1}let E=n;function ue(w,Z){return t.getContext(w,Z)}let Pe,C,v,G,re,ge,Ge,He,we,Ae,rt,Nt,nt,Fe,Ct,ut,Vt,ee,je,ze,St,Et,qe;try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ou}`),t.addEventListener("webglcontextlost",_n,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",fn,!1),E===null){const Z="webgl2";if(E=ue(Z,w),E===null)throw ue(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(w){throw t.removeEventListener("webglcontextlost",_n,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",fn,!1),Rn("WebGLRenderer: "+w.message),w}function Bt(){Pe=new Sv(E),Pe.init(),St=new p2(E,Pe),C=new dv(E,Pe,e,St),v=new f2(E,Pe),C.reversedDepthBuffer&&f&&v.buffers.depth.setReversed(!0),te=E.createFramebuffer(),X=E.createFramebuffer(),j=E.createFramebuffer(),G=new Ev(E),re=new Q_,ge=new d2(E,Pe,v,re,C,St,G),Ge=new bv(N),He=new Cm(E),Et=new hv(E,He),we=new wv(E,He,G,Et),Ae=new Cv(E,we,He,Et,G),ee=new Av(E,C,ge),Ct=new pv(re),rt=new J_(N,Ge,Pe,C,Et,Ct),Nt=new M2(N,re),nt=new e2,Fe=new o2(Pe),Vt=new uv(N,Ge,v,Ae,p,c),ut=new h2(N,Ae,C),qe=new y2(E,G,C,v),je=new fv(E,Pe,G),ze=new Tv(E,Pe,G),G.programs=rt.programs,N.capabilities=C,N.extensions=Pe,N.properties=re,N.renderLists=nt,N.shadowMap=ut,N.state=v,N.info=G}_!==ts&&(P=new Pv(_,t.width,t.height,a,s,r));const Ut=new _2(N,E);this.xr=Ut,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const w=Pe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Pe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Oe},this.setPixelRatio=function(w){w!==void 0&&(Oe=w,this.setSize(st,be,!1))},this.getSize=function(w){return w.set(st,be)},this.setSize=function(w,Z,_e=!0){if(Ut.isPresenting){rn("WebGLRenderer: Can't change size while VR device is presenting.");return}st=w,be=Z,t.width=Math.floor(w*Oe),t.height=Math.floor(Z*Oe),_e===!0&&(t.style.width=w+"px",t.style.height=Z+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,w,Z)},this.getDrawingBufferSize=function(w){return w.set(st*Oe,be*Oe).floor()},this.setDrawingBufferSize=function(w,Z,_e){st=w,be=Z,Oe=_e,t.width=Math.floor(w*_e),t.height=Math.floor(Z*_e),this.setViewport(0,0,w,Z)},this.setEffects=function(w){if(_===ts){Rn("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Z=0;Z<w.length;Z++)if(w[Z].isOutputPass===!0){rn("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(de)},this.getViewport=function(w){return w.copy(Ve)},this.setViewport=function(w,Z,_e,fe){w.isVector4?Ve.set(w.x,w.y,w.z,w.w):Ve.set(w,Z,_e,fe),v.viewport(de.copy(Ve).multiplyScalar(Oe).round())},this.getScissor=function(w){return w.copy(Ke)},this.setScissor=function(w,Z,_e,fe){w.isVector4?Ke.set(w.x,w.y,w.z,w.w):Ke.set(w,Z,_e,fe),v.scissor(tt.copy(Ke).multiplyScalar(Oe).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(w){v.setScissorTest(yt=w)},this.setOpaqueSort=function(w){Ze=w},this.setTransparentSort=function(w){J=w},this.getClearColor=function(w){return w.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor(...arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha(...arguments)},this.clear=function(w=!0,Z=!0,_e=!0){let fe=0;if(w){let ne=!1;if(Re!==null){const gt=Re.texture.format;ne=m.has(gt)}if(ne){const gt=Re.texture.type,ft=g.has(gt),ot=Vt.getClearColor(),_t=Vt.getClearAlpha(),Pt=ot.r,Kt=ot.g,Dt=ot.b;ft?(b[0]=Pt,b[1]=Kt,b[2]=Dt,b[3]=_t,E.clearBufferuiv(E.COLOR,0,b)):(T[0]=Pt,T[1]=Kt,T[2]=Dt,T[3]=_t,E.clearBufferiv(E.COLOR,0,T))}else fe|=E.COLOR_BUFFER_BIT}Z&&(fe|=E.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),_e&&(fe|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),fe!==0&&E.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),V=w},this.dispose=function(){t.removeEventListener("webglcontextlost",_n,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",fn,!1),Vt.dispose(),nt.dispose(),Fe.dispose(),re.dispose(),Ge.dispose(),Ae.dispose(),Et.dispose(),qe.dispose(),rt.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",$),Ut.removeEventListener("sessionend",he),Ne.stop()};function _n(w){w.preventDefault(),Al("WebGLRenderer: Context Lost."),k=!0}function ht(){Al("WebGLRenderer: Context Restored."),k=!1;const w=G.autoReset,Z=ut.enabled,_e=ut.autoUpdate,fe=ut.needsUpdate,ne=ut.type;Bt(),G.autoReset=w,ut.enabled=Z,ut.autoUpdate=_e,ut.needsUpdate=fe,ut.type=ne}function fn(w){Rn("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function vi(w){const Z=w.target;Z.removeEventListener("dispose",vi),B(Z)}function B(w){q(w),re.remove(w)}function q(w){const Z=re.get(w).programs;Z!==void 0&&(Z.forEach(function(_e){rt.releaseProgram(_e)}),w.isShaderMaterial&&rt.releaseShaderCache(w))}this.renderBufferDirect=function(w,Z,_e,fe,ne,gt){Z===null&&(Z=At);const ft=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,ot=Wn(w,Z,_e,fe,ne);v.setMaterial(fe,ft);let _t=_e.index,Pt=1;if(fe.wireframe===!0){if(_t=we.getWireframeAttribute(_e),_t===void 0)return;Pt=2}const Kt=_e.drawRange,Dt=_e.attributes.position;let wt=Kt.start*Pt,Lt=(Kt.start+Kt.count)*Pt;gt!==null&&(wt=Math.max(wt,gt.start*Pt),Lt=Math.min(Lt,(gt.start+gt.count)*Pt)),_t!==null?(wt=Math.max(wt,0),Lt=Math.min(Lt,_t.count)):Dt!=null&&(wt=Math.max(wt,0),Lt=Math.min(Lt,Dt.count));const ln=Lt-wt;if(ln<0||ln===1/0)return;Et.setup(ne,fe,ot,_e,_t);let qt,Yt=je;if(_t!==null&&(qt=He.get(_t),Yt=ze,Yt.setIndex(qt)),ne.isMesh)fe.wireframe===!0?(v.setLineWidth(fe.wireframeLinewidth*H()),Yt.setMode(E.LINES)):Yt.setMode(E.TRIANGLES);else if(ne.isLine){let Dn=fe.linewidth;Dn===void 0&&(Dn=1),v.setLineWidth(Dn*H()),ne.isLineSegments?Yt.setMode(E.LINES):ne.isLineLoop?Yt.setMode(E.LINE_LOOP):Yt.setMode(E.LINE_STRIP)}else ne.isPoints?Yt.setMode(E.POINTS):ne.isSprite&&Yt.setMode(E.TRIANGLES);if(ne.isBatchedMesh)if(Pe.get("WEBGL_multi_draw"))Yt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const Dn=ne._multiDrawStarts,Tt=ne._multiDrawCounts,Ln=ne._multiDrawCount,gn=_t?He.get(_t).bytesPerElement:1,Yn=re.get(fe).currentProgram.getUniforms();for(let mt=0;mt<Ln;mt++)Yn.setValue(E,"_gl_DrawID",mt),Yt.render(Dn[mt]/gn,Tt[mt])}else if(ne.isInstancedMesh)Yt.renderInstances(wt,ln,ne.count);else if(_e.isInstancedBufferGeometry){const Dn=_e._maxInstanceCount!==void 0?_e._maxInstanceCount:1/0,Tt=Math.min(_e.instanceCount,Dn);Yt.renderInstances(wt,ln,Tt)}else Yt.render(wt,ln)};function D(w,Z,_e,fe){V!==null&&w.isNodeMaterial&&V.setObject(fe,w),Le===!0&&Ct.setState(w,_e,!1),w.transparent===!0&&w.side===Bn&&w.forceSinglePass===!1?(w.side=zi,w.needsUpdate=!0,dt(w,Z,fe),w.side=Fr,w.needsUpdate=!0,dt(w,Z,fe),w.side=Bn):dt(w,Z,fe)}this.compile=function(w,Z,_e=null){_e===null&&(_e=w),V!==null&&V.renderStart(w,Z,_e),R=Fe.get(_e),R.init(Z),x.push(R),_e.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Z.layers)&&(R.pushLight(ne),ne.castShadow&&R.pushShadow(ne))}),w!==_e&&w.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Z.layers)&&(R.pushLight(ne),ne.castShadow&&R.pushShadow(ne))}),R.setupLights(),V!==null&&V.updateLights(R.state.lightsArray),Be=this.localClippingEnabled,Le=Ct.init(this.clippingPlanes,Be),Le===!0&&Ct.setGlobalState(this.clippingPlanes,Z),V!==null&&ut.render(R.state.shadowsArray,_e,Z);const fe=new Set;return w.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const gt=ne.material;if(gt)if(Array.isArray(gt))for(let ft=0;ft<gt.length;ft++){const ot=gt[ft];D(ot,_e,Z,ne),fe.add(ot)}else D(gt,_e,Z,ne),fe.add(gt)}),R=x.pop(),V!==null&&V.renderEnd(),fe},this.compileAsync=function(w,Z,_e=null){const fe=this.compile(w,Z,_e);return new Promise(ne=>{function gt(){if(fe.forEach(function(ft){const _t=re.get(ft).currentProgram;(_t===void 0||_t.isReady())&&fe.delete(ft)}),fe.size===0){ne(w);return}setTimeout(gt,10)}Pe.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let O=null;function U(w){O&&O(w)}function $(){Ne.stop()}function he(){Ne.start()}const Ne=new F0;Ne.setAnimationLoop(U),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(w){O=w,Ut.setAnimationLoop(w),w===null?Ne.stop():Ne.start()},Ut.addEventListener("sessionstart",$),Ut.addEventListener("sessionend",he),this.render=function(w,Z){if(Z!==void 0&&Z.isCamera!==!0){Rn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;V!==null&&V.renderStart(w,Z);const _e=Ut.enabled===!0&&Ut.isPresenting===!0,fe=P!==null&&(Re===null||_e)&&P.begin(N,Re);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(Z),Z=Ut.getCamera()),w.isScene===!0&&w.onBeforeRender(N,w,Z,Re),R=Fe.get(w,x.length),R.init(Z),R.state.textureUnits=ge.getTextureUnits(),x.push(R),Ye.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),me.setFromProjectionMatrix(Ye,Is,Z.reversedDepth),Be=this.localClippingEnabled,Le=Ct.init(this.clippingPlanes,Be),A=nt.get(w,F.length),A.init(),F.push(A),Ut.enabled===!0&&Ut.isPresenting===!0){const ft=N.xr.getDepthSensingMesh();ft!==null&&lt(ft,Z,-1/0,N.sortObjects)}lt(w,Z,0,N.sortObjects),A.finish(),V!==null&&V.updateLights(R.state.lightsArray),N.sortObjects===!0&&A.sort(Ze,J),z=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,z&&Vt.addToRenderList(A,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Le===!0&&Ct.beginShadows();const ne=R.state.shadowsArray;if(ut.render(ne,w,Z),Le===!0&&Ct.endShadows(),(fe&&P.hasRenderPass())===!1){const ft=A.opaque,ot=A.transmissive;if(R.setupLights(),Z.isArrayCamera){const _t=Z.cameras;if(ot.length>0)for(let Pt=0,Kt=_t.length;Pt<Kt;Pt++){const Dt=_t[Pt];ct(ft,ot,w,Dt)}z&&Vt.render(w);for(let Pt=0,Kt=_t.length;Pt<Kt;Pt++){const Dt=_t[Pt];vt(A,w,Dt,Dt.viewport)}}else ot.length>0&&ct(ft,ot,w,Z),z&&Vt.render(w),vt(A,w,Z)}Re!==null&&oe===0&&(ge.updateMultisampleRenderTarget(Re),ge.updateRenderTargetMipmap(Re)),fe&&P.end(N),w.isScene===!0&&w.onAfterRender(N,w,Z),Et.resetDefaultState(),xe=-1,Te=null,x.pop(),x.length>0?(R=x[x.length-1],ge.setTextureUnits(R.state.textureUnits),Le===!0&&Ct.setGlobalState(N.clippingPlanes,R.state.camera)):R=null,F.pop(),F.length>0?A=F[F.length-1]:A=null,V!==null&&V.renderEnd()};function lt(w,Z,_e,fe){if(w.visible===!1)return;if(w.layers.test(Z.layers)){if(w.isGroup)_e=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Z);else if(w.isLightProbeGrid)R.pushLightProbeGrid(w);else if(w.isLight)R.pushLight(w),w.castShadow&&R.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(me)){fe&&bt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ye);const ft=Ae.update(w),ot=w.material;ot.visible&&A.push(w,ft,ot,_e,bt.z,null,Z)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(me))){const ft=Ae.update(w),ot=w.material;if(fe&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),bt.copy(w.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),bt.copy(ft.boundingSphere.center)),bt.applyMatrix4(w.matrixWorld).applyMatrix4(Ye)),Array.isArray(ot)){const _t=ft.groups;for(let Pt=0,Kt=_t.length;Pt<Kt;Pt++){const Dt=_t[Pt],wt=ot[Dt.materialIndex];wt&&wt.visible&&A.push(w,ft,wt,_e,bt.z,Dt,Z)}}else ot.visible&&A.push(w,ft,ot,_e,bt.z,null,Z)}}const gt=w.children;for(let ft=0,ot=gt.length;ft<ot;ft++)lt(gt[ft],Z,_e,fe)}function vt(w,Z,_e,fe){const{opaque:ne,transmissive:gt,transparent:ft}=w;R.setupLightsView(_e),Le===!0&&Ct.setGlobalState(N.clippingPlanes,_e),fe&&v.viewport(de.copy(fe)),ne.length>0&&$e(ne,Z,_e),gt.length>0&&$e(gt,Z,_e),ft.length>0&&$e(ft,Z,_e),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function ct(w,Z,_e,fe){if((_e.isScene===!0?_e.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[fe.id]===void 0){const wt=Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[fe.id]=new Bi(1,1,{generateMipmaps:!0,type:wt?Ki:ts,minFilter:Rr,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:En.workingColorSpace})}const gt=R.state.transmissionRenderTarget[fe.id],ft=fe.viewport||de;gt.setSize(ft.z*N.transmissionResolutionScale,ft.w*N.transmissionResolutionScale);const ot=N.getRenderTarget(),_t=N.getActiveCubeFace(),Pt=N.getActiveMipmapLevel();N.setRenderTarget(gt),N.getClearColor(Wt),Y=N.getClearAlpha(),Y<1&&N.setClearColor(16777215,.5),N.clear(),z&&Vt.render(_e);const Kt=N.toneMapping;N.toneMapping=Us;const Dt=fe.viewport;if(fe.viewport!==void 0&&(fe.viewport=void 0),R.setupLightsView(fe),Le===!0&&Ct.setGlobalState(N.clippingPlanes,fe),$e(w,_e,fe),ge.updateMultisampleRenderTarget(gt),ge.updateRenderTargetMipmap(gt),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let Lt=0,ln=Z.length;Lt<ln;Lt++){const qt=Z[Lt],{object:Yt,geometry:Dn,material:Tt,group:Ln}=qt;if(Tt.side===Bn&&Yt.layers.test(fe.layers)){const gn=Tt.side;Tt.side=zi,Tt.needsUpdate=!0,Ie(Yt,_e,fe,Dn,Tt,Ln),Tt.side=gn,Tt.needsUpdate=!0,wt=!0}}wt===!0&&(ge.updateMultisampleRenderTarget(gt),ge.updateRenderTargetMipmap(gt))}N.setRenderTarget(ot,_t,Pt),N.setClearColor(Wt,Y),Dt!==void 0&&(fe.viewport=Dt),N.toneMapping=Kt}function $e(w,Z,_e){const fe=Z.isScene===!0?Z.overrideMaterial:null;for(let ne=0,gt=w.length;ne<gt;ne++){const ft=w[ne],{object:ot,geometry:_t,group:Pt}=ft;let Kt=ft.material;Kt.allowOverride===!0&&fe!==null&&(Kt=fe),ot.layers.test(_e.layers)&&Ie(ot,Z,_e,_t,Kt,Pt)}}function Ie(w,Z,_e,fe,ne,gt){V!==null&&ne.isNodeMaterial&&V.setObject(w,ne),w.onBeforeRender(N,Z,_e,fe,ne,gt),w.modelViewMatrix.multiplyMatrices(_e.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ne.onBeforeRender(N,Z,_e,fe,w,gt),ne.transparent===!0&&ne.side===Bn&&ne.forceSinglePass===!1?(ne.side=zi,ne.needsUpdate=!0,N.renderBufferDirect(_e,Z,fe,ne,w,gt),ne.side=Fr,ne.needsUpdate=!0,N.renderBufferDirect(_e,Z,fe,ne,w,gt),ne.side=Bn):N.renderBufferDirect(_e,Z,fe,ne,w,gt),w.onAfterRender(N,Z,_e,fe,ne,gt)}function dt(w,Z,_e){Z.isScene!==!0&&(Z=At);const fe=re.get(w),ne=R.state.lights,gt=R.state.shadowsArray,ft=ne.state.version,ot=rt.getParameters(w,ne.state,gt,Z,_e,R.state.lightProbeGridArray),_t=rt.getProgramCacheKey(ot);let Pt=fe.programs;fe.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?Z.environment:null,fe.fog=Z.fog;const Kt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;fe.envMap=Ge.get(w.envMap||fe.environment,Kt),fe.envMapRotation=fe.environment!==null&&w.envMap===null?Z.environmentRotation:w.envMapRotation,Pt===void 0&&(w.addEventListener("dispose",vi),Pt=new Map,fe.programs=Pt);let Dt=Pt.get(_t);if(Dt!==void 0){if(fe.currentProgram===Dt&&fe.lightsStateVersion===ft)return en(w,ot),Dt}else ot.uniforms=rt.getUniforms(w),V!==null&&w.isNodeMaterial&&V.build(w,_e,ot),w.onBeforeCompile(ot,N),Dt=rt.acquireProgram(ot,_t),Pt.set(_t,Dt),fe.uniforms=ot.uniforms;const wt=fe.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(wt.clippingPlanes=Ct.uniform),en(w,ot),fe.needsLights=An(w),fe.lightsStateVersion=ft,fe.needsLights&&(wt.ambientLightColor.value=ne.state.ambient,wt.lightProbe.value=ne.state.probe,wt.sunLights.value=ne.state.sun,wt.sunLightShadows.value=ne.state.sunShadow,wt.directionalLights.value=ne.state.directional,wt.directionalLightShadows.value=ne.state.directionalShadow,wt.spotLights.value=ne.state.spot,wt.spotLightShadows.value=ne.state.spotShadow,wt.rectAreaLights.value=ne.state.rectArea,wt.ltc_1.value=ne.state.rectAreaLTC1,wt.ltc_2.value=ne.state.rectAreaLTC2,wt.pointLights.value=ne.state.point,wt.pointLightShadows.value=ne.state.pointShadow,wt.hemisphereLights.value=ne.state.hemi,wt.sunShadowMatrix.value=ne.state.sunShadowMatrix,wt.sunShadowCascade.value=ne.state.sunShadowCascade,wt.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,wt.spotLightMatrix.value=ne.state.spotLightMatrix,wt.spotLightMap.value=ne.state.spotLightMap,wt.pointShadowMatrix.value=ne.state.pointShadowMatrix),fe.lightProbeGrid=R.state.lightProbeGridArray.length>0,fe.currentProgram=Dt,fe.uniformsList=null,Dt}function Ft(w){if(w.uniformsList===null){const Z=w.currentProgram.getUniforms();w.uniformsList=vl.seqWithValue(Z.seq,w.uniforms)}return w.uniformsList}function en(w,Z){const _e=re.get(w);_e.outputColorSpace=Z.outputColorSpace,_e.batching=Z.batching,_e.batchingColor=Z.batchingColor,_e.instancing=Z.instancing,_e.instancingColor=Z.instancingColor,_e.instancingMorph=Z.instancingMorph,_e.skinning=Z.skinning,_e.morphTargets=Z.morphTargets,_e.morphNormals=Z.morphNormals,_e.morphColors=Z.morphColors,_e.morphTargetsCount=Z.morphTargetsCount,_e.numClippingPlanes=Z.numClippingPlanes,_e.numIntersection=Z.numClipIntersection,_e.vertexAlphas=Z.vertexAlphas,_e.vertexTangents=Z.vertexTangents,_e.toneMapping=Z.toneMapping}function kn(w,Z){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;y.setFromMatrixPosition(Z.matrixWorld);for(let _e=0,fe=w.length;_e<fe;_e++){const ne=w[_e];if(ne.texture!==null&&ne.boundingBox.containsPoint(y))return ne}return null}function Wn(w,Z,_e,fe,ne){Z.isScene!==!0&&(Z=At),ge.resetTextureUnits();const gt=Z.fog,ft=fe.isMeshStandardMaterial||fe.isMeshLambertMaterial||fe.isMeshPhongMaterial?Z.environment:null,ot=Re===null?N.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:En.workingColorSpace,_t=fe.isMeshStandardMaterial||fe.isMeshLambertMaterial&&!fe.envMap||fe.isMeshPhongMaterial&&!fe.envMap,Pt=Ge.get(fe.envMap||ft,_t),Kt=fe.vertexColors===!0&&!!_e.attributes.color&&_e.attributes.color.itemSize===4,Dt=!!_e.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),wt=!!_e.morphAttributes.position,Lt=!!_e.morphAttributes.normal,ln=!!_e.morphAttributes.color;let qt=Us;fe.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(qt=N.toneMapping);const Yt=_e.morphAttributes.position||_e.morphAttributes.normal||_e.morphAttributes.color,Dn=Yt!==void 0?Yt.length:0,Tt=re.get(fe),Ln=R.state.lights;if(Le===!0&&(Be===!0||w!==Te)){const Qe=w===Te&&fe.id===xe;Ct.setState(fe,w,Qe)}let gn=!1;fe.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Ln.state.version||Tt.outputColorSpace!==ot||ne.isBatchedMesh&&Tt.batching===!1||!ne.isBatchedMesh&&Tt.batching===!0||ne.isBatchedMesh&&Tt.batchingColor===!0&&ne._colorsTexture===null||ne.isBatchedMesh&&Tt.batchingColor===!1&&ne._colorsTexture!==null||ne.isInstancedMesh&&Tt.instancing===!1||!ne.isInstancedMesh&&Tt.instancing===!0||ne.isSkinnedMesh&&Tt.skinning===!1||!ne.isSkinnedMesh&&Tt.skinning===!0||ne.isInstancedMesh&&Tt.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Tt.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Tt.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Tt.instancingMorph===!1&&ne.morphTexture!==null||Tt.envMap!==Pt||fe.fog===!0&&Tt.fog!==gt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Ct.numPlanes||Tt.numIntersection!==Ct.numIntersection)||Tt.vertexAlphas!==Kt||Tt.vertexTangents!==Dt||Tt.morphTargets!==wt||Tt.morphNormals!==Lt||Tt.morphColors!==ln||Tt.toneMapping!==qt||Tt.morphTargetsCount!==Dn||!!Tt.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(gn=!0):(gn=!0,Tt.__version=fe.version);let Yn=Tt.currentProgram;gn===!0&&(Yn=dt(fe,Z,ne),V&&fe.isNodeMaterial&&V.onUpdateProgram(fe,Yn,Tt));let mt=!1,jt=!1,wn=!1;const $t=Yn.getUniforms(),dn=Tt.uniforms;if(v.useProgram(Yn.program)&&(mt=!0,jt=!0,wn=!0),fe.id!==xe&&(xe=fe.id,jt=!0),Tt.needsLights){const Qe=kn(R.state.lightProbeGridArray,ne);Tt.lightProbeGrid!==Qe&&(Tt.lightProbeGrid=Qe,jt=!0)}if(mt||Te!==w){v.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),$t.setValue(E,"projectionMatrix",w.projectionMatrix),$t.setValue(E,"viewMatrix",w.matrixWorldInverse);const bi=$t.map.cameraPosition;bi!==void 0&&bi.setValue(E,Je.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&$t.setValue(E,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&$t.setValue(E,"isOrthographic",w.isOrthographicCamera===!0),Te!==w&&(Te=w,jt=!0,wn=!0)}if(Tt.needsLights&&(Ln.state.sunShadowMap.length>0&&$t.setValue(E,"sunShadowMap",Ln.state.sunShadowMap,ge),Ln.state.directionalShadowMap.length>0&&$t.setValue(E,"directionalShadowMap",Ln.state.directionalShadowMap,ge),Ln.state.spotShadowMap.length>0&&$t.setValue(E,"spotShadowMap",Ln.state.spotShadowMap,ge),Ln.state.pointShadowMap.length>0&&$t.setValue(E,"pointShadowMap",Ln.state.pointShadowMap,ge)),ne.isSkinnedMesh){$t.setOptional(E,ne,"bindMatrix"),$t.setOptional(E,ne,"bindMatrixInverse");const Qe=ne.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),$t.setValue(E,"boneTexture",Qe.boneTexture,ge))}ne.isBatchedMesh&&($t.setOptional(E,ne,"batchingTexture"),$t.setValue(E,"batchingTexture",ne._matricesTexture,ge),$t.setOptional(E,ne,"batchingIdTexture"),$t.setValue(E,"batchingIdTexture",ne._indirectTexture,ge),$t.setOptional(E,ne,"batchingColorTexture"),ne._colorsTexture!==null&&$t.setValue(E,"batchingColorTexture",ne._colorsTexture,ge));const Un=_e.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&ee.update(ne,_e,Yn),(jt||Tt.receiveShadow!==ne.receiveShadow)&&(Tt.receiveShadow=ne.receiveShadow,$t.setValue(E,"receiveShadow",ne.receiveShadow)),(fe.isMeshStandardMaterial||fe.isMeshLambertMaterial||fe.isMeshPhongMaterial)&&fe.envMap===null&&Z.environment!==null&&(dn.envMapIntensity.value=Z.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=S2()),jt){if($t.setValue(E,"toneMappingExposure",N.toneMappingExposure),Tt.needsLights&&Nn(dn,wn),gt&&fe.fog===!0&&Nt.refreshFogUniforms(dn,gt),Nt.refreshMaterialUniforms(dn,fe,Oe,be,R.state.transmissionRenderTarget[w.id]),Tt.needsLights&&Tt.lightProbeGrid){const Qe=Tt.lightProbeGrid;dn.probesSH.value=Qe.texture,dn.probesMin.value.copy(Qe.boundingBox.min),dn.probesMax.value.copy(Qe.boundingBox.max),dn.probesResolution.value.copy(Qe.resolution)}vl.upload(E,Ft(Tt),dn,ge)}if(fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&(vl.upload(E,Ft(Tt),dn,ge),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&$t.setValue(E,"center",ne.center),$t.setValue(E,"modelViewMatrix",ne.modelViewMatrix),$t.setValue(E,"normalMatrix",ne.normalMatrix),$t.setValue(E,"modelMatrix",ne.matrixWorld),fe.uniformsGroups!==void 0){const Qe=fe.uniformsGroups;for(let bi=0,Di=Qe.length;bi<Di;bi++){const Gi=Qe[bi];qe.update(Gi,Yn),qe.bind(Gi,Yn)}}return Yn}function Nn(w,Z){w.ambientLightColor.needsUpdate=Z,w.lightProbe.needsUpdate=Z,w.sunLights.needsUpdate=Z,w.sunLightShadows.needsUpdate=Z,w.directionalLights.needsUpdate=Z,w.directionalLightShadows.needsUpdate=Z,w.pointLights.needsUpdate=Z,w.pointLightShadows.needsUpdate=Z,w.spotLights.needsUpdate=Z,w.spotLightShadows.needsUpdate=Z,w.rectAreaLights.needsUpdate=Z,w.hemisphereLights.needsUpdate=Z}function An(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return Se},this.getActiveMipmapLevel=function(){return oe},this.getRenderTarget=function(){return Re},this.setRenderTargetTextures=function(w,Z,_e){const fe=re.get(w);fe.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,fe.__autoAllocateDepthBuffer===!1&&(fe.__useRenderToTexture=!1),re.get(w.texture).__webglTexture=Z,re.get(w.depthTexture).__webglTexture=fe.__autoAllocateDepthBuffer?void 0:_e,fe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Z){const _e=re.get(w);_e.__webglFramebuffer=Z,_e.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(w,Z=0,_e=0){Re=w,Se=Z,oe=_e;let fe=null,ne=!1,gt=!1;if(w){const ot=re.get(w);if(ot.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(E.FRAMEBUFFER,ot.__webglFramebuffer),de.copy(w.viewport),tt.copy(w.scissor),Mt=w.scissorTest,v.viewport(de),v.scissor(tt),v.setScissorTest(Mt),xe=-1;return}else if(ot.__webglFramebuffer===void 0)ge.setupRenderTarget(w);else if(ot.__hasExternalTextures)ge.rebindTextures(w,re.get(w.texture).__webglTexture,re.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Kt=w.depthTexture;if(ot.__boundDepthTexture!==Kt){if(Kt!==null&&re.has(Kt)&&(w.width!==Kt.image.width||w.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(w)}}const _t=w.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(gt=!0);const Pt=re.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Pt[Z])?fe=Pt[Z][_e]:fe=Pt[Z],ne=!0):w.samples>0&&ge.useMultisampledRTT(w)===!1?fe=re.get(w).__webglMultisampledFramebuffer:Array.isArray(Pt)?fe=Pt[_e]:fe=Pt,de.copy(w.viewport),tt.copy(w.scissor),Mt=w.scissorTest}else de.copy(Ve).multiplyScalar(Oe).floor(),tt.copy(Ke).multiplyScalar(Oe).floor(),Mt=yt;if(_e!==0&&(fe=te),v.bindFramebuffer(E.FRAMEBUFFER,fe)&&v.drawBuffers(w,fe),v.viewport(de),v.scissor(tt),v.setScissorTest(Mt),ne){const ot=re.get(w.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot.__webglTexture,_e)}else if(gt){const ot=Z;for(let _t=0;_t<w.textures.length;_t++){const Pt=re.get(w.textures[_t]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+_t,Pt.__webglTexture,_e,ot)}}else if(w!==null&&_e!==0){const ot=re.get(w.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,ot.__webglTexture,_e)}xe=-1};function Xn(w){const Z=re.get(w);return(Z.__readFormat!==w.format||Z.__readType!==w.type)&&(Z.__readFormat=w.format,Z.__readType=w.type,Z.__formatReadable=C.textureFormatReadable(w.format),Z.__typeReadable=C.textureTypeReadable(w.type)),Z}this.readRenderTargetPixels=function(w,Z,_e,fe,ne,gt,ft,ot=0){if(!(w&&w.isWebGLRenderTarget)){Rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ft!==void 0&&(_t=_t[ft]),_t){v.bindFramebuffer(E.FRAMEBUFFER,_t);try{const Pt=w.textures[ot],Kt=Pt.format,Dt=Pt.type;w.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+ot);const wt=Xn(Pt);if(wt.__formatReadable===!1){Rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(wt.__typeReadable===!1){Rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=w.width-fe&&_e>=0&&_e<=w.height-ne&&E.readPixels(Z,_e,fe,ne,St.convert(Kt),St.convert(Dt),gt)}finally{const Pt=Re!==null?re.get(Re).__webglFramebuffer:null;v.bindFramebuffer(E.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(w,Z,_e,fe,ne,gt,ft,ot=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ft!==void 0&&(_t=_t[ft]),_t)if(Z>=0&&Z<=w.width-fe&&_e>=0&&_e<=w.height-ne){v.bindFramebuffer(E.FRAMEBUFFER,_t);const Pt=w.textures[ot],Kt=Pt.format,Dt=Pt.type;w.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+ot);const wt=Xn(Pt);if(wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Lt=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Lt),E.bufferData(E.PIXEL_PACK_BUFFER,gt.byteLength,E.STREAM_READ),E.readPixels(Z,_e,fe,ne,St.convert(Kt),St.convert(Dt),0),E.bindBuffer(E.PIXEL_PACK_BUFFER,null);const ln=Re!==null?re.get(Re).__webglFramebuffer:null;v.bindFramebuffer(E.FRAMEBUFFER,ln);const qt=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Gd(E,qt,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Lt),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,gt),E.bindBuffer(E.PIXEL_PACK_BUFFER,null),E.deleteBuffer(Lt),E.deleteSync(qt),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Z=null,_e=0){const fe=Math.pow(2,-_e),ne=Math.floor(w.image.width*fe),gt=Math.floor(w.image.height*fe),ft=Z!==null?Z.x:0,ot=Z!==null?Z.y:0;ge.setTexture2D(w,0),E.copyTexSubImage2D(E.TEXTURE_2D,_e,0,0,ft,ot,ne,gt),v.unbindTexture()},this.copyTextureToTexture=function(w,Z,_e=null,fe=null,ne=0,gt=0){let ft,ot,_t,Pt,Kt,Dt,wt,Lt,ln;const qt=w.isCompressedTexture?w.mipmaps[gt]:w.image;if(_e!==null)ft=_e.max.x-_e.min.x,ot=_e.max.y-_e.min.y,_t=_e.isBox3?_e.max.z-_e.min.z:1,Pt=_e.min.x,Kt=_e.min.y,Dt=_e.isBox3?_e.min.z:0;else{const dn=Math.pow(2,-ne);ft=Math.floor(qt.width*dn),ot=Math.floor(qt.height*dn),w.isDataArrayTexture?_t=qt.depth:w.isData3DTexture?_t=Math.floor(qt.depth*dn):_t=1,Pt=0,Kt=0,Dt=0}fe!==null?(wt=fe.x,Lt=fe.y,ln=fe.z):(wt=0,Lt=0,ln=0);const Yt=St.convert(Z.format),Dn=St.convert(Z.type);let Tt;Z.isData3DTexture?(ge.setTexture3D(Z,0),Tt=E.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(ge.setTexture2DArray(Z,0),Tt=E.TEXTURE_2D_ARRAY):(ge.setTexture2D(Z,0),Tt=E.TEXTURE_2D),v.activeTexture(E.TEXTURE0),v.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,Z.flipY),v.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),v.pixelStorei(E.UNPACK_ALIGNMENT,Z.unpackAlignment);const Ln=v.getParameter(E.UNPACK_ROW_LENGTH),gn=v.getParameter(E.UNPACK_IMAGE_HEIGHT),Yn=v.getParameter(E.UNPACK_SKIP_PIXELS),mt=v.getParameter(E.UNPACK_SKIP_ROWS),jt=v.getParameter(E.UNPACK_SKIP_IMAGES);v.pixelStorei(E.UNPACK_ROW_LENGTH,qt.width),v.pixelStorei(E.UNPACK_IMAGE_HEIGHT,qt.height),v.pixelStorei(E.UNPACK_SKIP_PIXELS,Pt),v.pixelStorei(E.UNPACK_SKIP_ROWS,Kt),v.pixelStorei(E.UNPACK_SKIP_IMAGES,Dt);const wn=w.isDataArrayTexture||w.isData3DTexture,$t=Z.isDataArrayTexture||Z.isData3DTexture;if(w.isDepthTexture){const dn=re.get(w),Un=re.get(Z),Qe=re.get(dn.__renderTarget),bi=re.get(Un.__renderTarget);v.bindFramebuffer(E.READ_FRAMEBUFFER,Qe.__webglFramebuffer),v.bindFramebuffer(E.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let Di=0;Di<_t;Di++)wn&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,re.get(w).__webglTexture,ne,Dt+Di),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,re.get(Z).__webglTexture,gt,ln+Di)),E.blitFramebuffer(Pt,Kt,ft,ot,wt,Lt,ft,ot,E.DEPTH_BUFFER_BIT,E.NEAREST);v.bindFramebuffer(E.READ_FRAMEBUFFER,null),v.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(ne!==0||w.isRenderTargetTexture||re.has(w)){const dn=re.get(w),Un=re.get(Z);v.bindFramebuffer(E.READ_FRAMEBUFFER,X),v.bindFramebuffer(E.DRAW_FRAMEBUFFER,j);for(let Qe=0;Qe<_t;Qe++)wn?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,dn.__webglTexture,ne,Dt+Qe):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,dn.__webglTexture,ne),$t?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Un.__webglTexture,gt,ln+Qe):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Un.__webglTexture,gt),ne!==0?E.blitFramebuffer(Pt,Kt,ft,ot,wt,Lt,ft,ot,E.COLOR_BUFFER_BIT,E.NEAREST):$t?E.copyTexSubImage3D(Tt,gt,wt,Lt,ln+Qe,Pt,Kt,ft,ot):E.copyTexSubImage2D(Tt,gt,wt,Lt,Pt,Kt,ft,ot);v.bindFramebuffer(E.READ_FRAMEBUFFER,null),v.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else $t?w.isDataTexture||w.isData3DTexture?E.texSubImage3D(Tt,gt,wt,Lt,ln,ft,ot,_t,Yt,Dn,qt.data):Z.isCompressedArrayTexture?E.compressedTexSubImage3D(Tt,gt,wt,Lt,ln,ft,ot,_t,Yt,qt.data):E.texSubImage3D(Tt,gt,wt,Lt,ln,ft,ot,_t,Yt,Dn,qt):w.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,gt,wt,Lt,ft,ot,Yt,Dn,qt.data):w.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,gt,wt,Lt,qt.width,qt.height,Yt,qt.data):E.texSubImage2D(E.TEXTURE_2D,gt,wt,Lt,ft,ot,Yt,Dn,qt);v.pixelStorei(E.UNPACK_ROW_LENGTH,Ln),v.pixelStorei(E.UNPACK_IMAGE_HEIGHT,gn),v.pixelStorei(E.UNPACK_SKIP_PIXELS,Yn),v.pixelStorei(E.UNPACK_SKIP_ROWS,mt),v.pixelStorei(E.UNPACK_SKIP_IMAGES,jt),gt===0&&Z.generateMipmaps&&E.generateMipmap(Tt),v.unbindTexture()},this.initRenderTarget=function(w){re.get(w).__webglFramebuffer===void 0&&ge.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ge.setTextureCube(w,0):w.isData3DTexture?ge.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ge.setTexture2DArray(w,0):ge.setTexture2D(w,0),v.unbindTexture()},this.resetState=function(){Se=0,oe=0,Re=null,v.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Is}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=En._getDrawingBufferColorSpace(e),t.unpackColorSpace=En._getUnpackColorSpace()}}const Ci=Math.PI*2,T2=["spring","summer","autumn","winter"],E2=["clear","rain","snow","fog","storm"],Lr={spring:{label:"春",title:"新绿",en:"Spring"},summer:{label:"夏",title:"浓荫",en:"Summer"},autumn:{label:"秋",title:"暖金",en:"Autumn"},winter:{label:"冬",title:"静雪",en:"Winter"}},Mo={clear:{label:"晴",en:"Clear"},rain:{label:"雨",en:"Rain"},snow:{label:"雪",en:"Snow"},fog:{label:"雾",en:"Fog"},storm:{label:"雷暴",en:"Storm"}},Gt={width:8.4,depth:6.4,logRadius:.195,foundationY:.28,floorY:.34,frontZ:3.2,backZ:-3.2,leftX:-4.2,rightX:4.2,ridgeY:5.45,eaveY:3.08,roof:{overhangX:.78,overhangFront:.7,overhangBack:.55,thickness:.2},porch:{width:6.5,floorY:.34,roofY:3.5,frontZ:5.25,postX:2.85,stepRise:.12},door:{z:3.2,width:1.14,height:2.16},windows:[{id:"front-left",face:"front",x:-2.62,z:3.205,y:1.66,width:1.36,height:1.16,southFacing:!0},{id:"front-right",face:"front",x:2.62,z:3.205,y:1.66,width:1.36,height:1.16,southFacing:!0},{id:"side-right",face:"right",x:4.205,z:-.55,y:1.72,width:1.18,height:1.02,southFacing:!1}],room:{halfX:3.86,halfZ:2.86,height:3,wallThickness:.3},chimney:{x:-4.72,z:-.85,width:1.32,depth:1.5,height:7.15,capY:7.3},smokeAnchor:{x:-4.72,y:7.45,z:-.85},doorAnchor:{x:0,y:1,z:3.9},interiorDoorAnchor:{x:0,y:1,z:2.35}},as={...Gt.room,walkY:.39,furniture:{fireplace:{x:-3.78,z:-.62},bookshelf:{x:-1.5,z:-2.76,w:1.66,d:.36,h:2.08},bed:{x:2.48,z:-1.82,w:1.62,d:2.08},table:{x:1.78,z:1.02,w:1.5,d:.92},armchair:{x:-2.58,z:-1.5},rug:{x:.16,z:.28,w:3.2,d:2.35},chandelier:{x:0,z:.05},entryRug:{x:0,z:2.25,w:1.35,d:.82}},interiorSpawn:{x:0,z:2.12}},Xt={terrainSize:150,path:{start:{x:0,z:5.35},end:{x:.4,z:17.5},width:1.55},well:{x:6.55,z:7.35,height:1.05},spawn:{x:0,z:12.8},player:{walkSpeed:3.2,runSpeed:5.9,eyeHeight:1.62,radius:.3,cameraDistance:5.2,cameraMinDistance:2.4,cameraMaxDistance:9.2},trees:[{x:-10.9,z:8.4,scale:1.24,type:"oak"},{x:10.7,z:9.6,scale:1.12,type:"birch"},{x:-11.6,z:-4.2,scale:1.05,type:"oak"},{x:11.2,z:-3,scale:1.2,type:"pine"},{x:-7.6,z:-13.2,scale:1,type:"oak"},{x:6.9,z:-14.5,scale:1.08,type:"pine"}],interactDistance:2.55},_l={day:{hour:13.2,label:"白天",en:"Day"},dusk:{hour:18.05,label:"黄昏",en:"Dusk"},night:{hour:22.35,label:"夜晚",en:"Night"},auto:{label:"自动",en:"Auto"}},$s={season:"autumn",weather:"clear",timeOfDay:16.9,timeMode:"manual",hour:16.9},Dc={spring:{leaf:["#8fbf5a","#a9ce6c","#76aa49","#c0d98a"],leafFall:["#d9c6a1","#b7c68d"],ground:"#4a4731",tint:"#c8d5b8"},summer:{leaf:["#4e7f32","#5e9139","#3c6927","#74a044"],leafFall:["#7c9b4f"],ground:"#3b4028",tint:"#d2d8b8"},autumn:{leaf:["#c66a2e","#d9933b","#9d4c27","#e0b257","#a75a2a"],leafFall:["#c97734","#d99b46","#a84d2a","#e3b25e"],ground:"#3d3321",tint:"#e8c294"},winter:{leaf:["#b8b09f","#c8c1b1"],leafFall:["#e8e4dc"],ground:"#c9d2d4",tint:"#cbd9e0"}},Df={sun:'<circle cx="12" cy="12" r="4.1"/><path d="M12 2.7v2.2M12 19.1v2.2M2.7 12h2.2M19.1 12h2.2M5.15 5.15l1.55 1.55M17.3 17.3l1.55 1.55M18.85 5.15l-1.55 1.55M6.7 17.3l-1.55 1.55"/>',dusk:'<path d="M2.9 18.4h18.2"/><path d="M7.5 18.4a4.5 4.5 0 0 1 9 0"/><path d="M12 9.6V7.3M6.2 12.4l-1.6-1M17.8 12.4l1.6-1M7.6 6.7l1.3 1.3M16.4 6.7l-1.3 1.3"/><path d="M5.2 21.2h4.2M14.6 21.2h4.2" opacity=".5"/>',moon:'<path d="M20.6 13.1A8.4 8.4 0 1 1 10.9 3.3a6.7 6.7 0 0 0 9.7 9.8Z"/>',rain:'<path d="M6.9 15.1a3.4 3.4 0 0 1 .2-6.8 4.8 4.8 0 0 1 9.2 1.3 3.1 3.1 0 0 1-.2 5.5H6.9Z"/><path d="M8.7 17.9l-.8 2.2M12 17.9l-.8 2.2M15.3 17.9l-.8 2.2"/>',snow:'<path d="M12 2.9v18.2M4.1 6.9l15.8 10.2M19.9 6.9 4.1 17.1"/><path d="M9.8 4.5 12 6.3l2.2-1.8M9.8 19.5 12 17.7l2.2 1.8M4.7 9.6l2.9.4.4-2.9M19.3 14.4l-2.9-.4-.4 2.9M19.3 9.6l-2.9.4-.4-2.9M4.7 14.4l2.9-.4.4 2.9"/>',fog:'<path d="M3.4 7.9h12.4M7.6 11.7h13M4.2 15.5h12.2M8.4 19.3h8.4"/>',storm:'<path d="M6.9 14.4a3.4 3.4 0 0 1 .2-6.8 4.8 4.8 0 0 1 9.2 1.3 3.1 3.1 0 0 1-.2 5.5H6.9Z"/><path d="M13.2 14.9 10.6 19h2.5l-.9 3.1 3.7-4.6h-2.5l1.6-2.6"/>',spring:'<path d="M12 21.2v-7.5"/><path d="M12 15.5c0-3.4-2.5-5.7-5.9-5.7 0 3.4 2.4 5.7 5.9 5.7Z"/><path d="M12 14c0-3 2.3-5.1 5.4-5.1 0 3-2.2 5.1-5.4 5.1Z"/><circle cx="12" cy="4.9" r="1.9"/><path d="M12 6.8v1.9"/>',summer:'<path d="M20.2 5.2C13 5.2 5.2 8.6 5.2 15c0 2.6 1.9 4.2 4.3 4.2 6.7 0 10.7-6.6 10.7-14Z"/><path d="M6.1 19.7C9.1 16.1 13.2 12.2 17.6 9"/>',autumn:'<path d="M18.7 4.5C11.5 5.7 5.4 9.9 6.2 15.8c.3 2.2 2.4 3.6 4.6 3.1 5.9-1.2 8.6-7.2 7.9-14.4Z"/><path d="M7.3 18.3C10 14.6 13.5 10.6 17.2 7.3"/><path d="M4.3 8.4c-1.2 1.6-1.5 3.4-.8 5.1" opacity=".55"/>',clear:'<circle cx="12" cy="12" r="4.2"/><path d="M12 2.6v2.3M12 19.1v2.3M2.6 12h2.3M19.1 12h2.3M5 5l1.6 1.6M17.4 17.4 19 19M19 5l-1.6 1.6M6.6 17.4 5 19"/>',person:'<circle cx="12" cy="7.1" r="2.7"/><path d="M5.1 20.4v-2.2c0-3.1 3.1-5.1 6.9-5.1s6.9 2 6.9 5.1v2.2"/>',eye:'<path d="M2.6 12S6.2 5.9 12 5.9 21.4 12 21.4 12 17.8 18.1 12 18.1 2.6 12 2.6 12Z"/><circle cx="12" cy="12" r="2.7"/>',clock:'<circle cx="12" cy="12" r="8.4"/><path d="M12 7.2v5l3.1 1.9"/>',auto:'<path d="M19.6 12a7.6 7.6 0 1 1-2.2-5.4"/><path d="M20 3.9v4.4h-4.4"/>',close:'<path d="M6.4 6.4l11.2 11.2M17.6 6.4 6.4 17.6"/>'},Nf={spring:"spring",summer:"summer",autumn:"autumn",winter:"snow"},Uf={clear:"clear",rain:"rain",snow:"snow",fog:"fog",storm:"storm"},il={day:{label:"白天",icon:"sun"},dusk:{label:"黄昏",icon:"dusk"},night:{label:"夜晚",icon:"moon"}},A2=["spring","summer","autumn","winter"],C2=["clear","rain","snow","fog","storm"],R2=["day","dusk","night"],Ff={day:"sun",dusk:"dusk",night:"moon"};function xl(i){return`<svg class="ui-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${Df[i]||Df.sun}</svg>`}function at(i,e,t){const n=document.createElement(i);return e&&(n.className=e),t&&t.appendChild(n),n}function ur(i,e,t){const n=at("span",e,t);return n.innerHTML=xl(i),n.setAttribute("aria-hidden","true"),n}function Vi(i,e){const t=e==null?"":String(e);i.textContent!==t&&(i.textContent=t)}function Cr(i,e,t){return Math.min(t,Math.max(e,i))}function sl(i){const e=Math.round(Cr(i,0,24)*60)%1440,t=Math.floor(e/60),n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Of(i){return i>=20.4||i<5.4?"night":i>=16.5?"dusk":"day"}function P2(i){return i>=20.4||i<5.4}function L2(i){if(typeof i!="string")return null;const e=i.match(/(\d{1,2})\s*[:：]\s*(\d{2})/);return e?Cr(Number(e[1])+Number(e[2])/60,0,24):null}function I2(i={}){const e=i||{},t=document.getElementById("ui-root")||(()=>{const D=document.createElement("div");return D.id="ui-root",document.body.appendChild(D),D})();t.innerHTML="",t.classList.add("ui-root"),t.dataset.mode="third";const n=document.getElementById("boot-fallback");n&&(n.style.display="none");const s={env:null,info:null,mode:"third",phase:null,panelOpen:!1,panelId:null,lastFocus:null,draggingTime:!1,ready:!1,locked:!1,sliderHour:Cr(Number($s.hour)||17.2,0,24),promptAction:null,toastTimers:new Set,loaderRemoved:!1};at("div","hud-scrim hud-scrim--top",t),at("div","hud-scrim hud-scrim--bottom",t);const r=at("header","hud-top",t),o=at("div","title-lockup",r);o.setAttribute("aria-label","林间小屋 · Cabin in the Woods");const a=at("h1","title-cn",o);a.textContent="林间小屋";const c=at("div","title-rule",o);c.setAttribute("aria-hidden","true"),at("span","title-rule-line",c),at("span","title-rule-gem",c),at("span","title-rule-line",c);const l=at("p","title-en",o);l.textContent="CABIN IN THE WOODS";const u=at("p","title-line",o);u.textContent="灶膛里有火，林子深处有风。";const d=at("aside","status-card",r);d.setAttribute("aria-label","环境状态");const f=at("div","status-clock-row",d);ur("clock","status-ic",f);const h=at("span","status-clock",f);h.textContent="17:12";const p=at("span","status-phase",f),_=ur("dusk","status-ic status-ic--phase",p),m=at("span","status-phase-label",p);m.textContent="黄昏",at("div","status-hairline",d);const g=at("div","status-env-row",d),b=at("span","status-env-item",g);b.title="季节";const T=ur("autumn","status-ic status-ic--season",b),y=at("span","status-env-label",b);y.textContent="秋",at("span","status-env-sep",g).textContent="·";const A=at("span","status-env-item",g);A.title="天气";const R=ur("clear","status-ic status-ic--weather",A),F=at("span","status-env-label",A);F.textContent="晴";const x=at("span","status-spark",g);x.title="窗前亮着灯",x.setAttribute("aria-label","窗前亮着灯"),x.setAttribute("role","img");const P=at("div","mode-chip",t);P.id="mode-chip",P.setAttribute("aria-label","当前视角");const N=ur("person","mode-chip-ic",P),k=at("span","mode-chip-label",P);k.textContent="第三人称";const V=at("span","mode-chip-key",P);V.textContent="V";const te=at("div","reticle",t);te.id="reticle",te.setAttribute("aria-hidden","true"),at("span","reticle-ring",te),at("span","reticle-dot",te);const X=at("div","hud-bottom",t),j=at("div","interaction-prompt",X);j.id="interaction-prompt",j.hidden=!0,j.setAttribute("role","status"),j.setAttribute("aria-live","polite");const Se=at("span","prompt-key",j);Se.textContent="E";const oe=at("span","prompt-action",j),Re=at("div","environment-dock",X);Re.id="environment-dock",Re.setAttribute("role","group"),Re.setAttribute("aria-label","环境设置");const xe=at("section","dock-group dock-group--season",Re);xe.setAttribute("role","group"),xe.setAttribute("aria-label","季节"),at("div","dock-group-label",xe).textContent="季节";const Te=at("div","dock-row",xe),de=[];for(const D of A2){const O=Lr[D],U=at("button","dock-btn season-btn",Te);U.type="button",U.dataset.season=D,U.setAttribute("aria-pressed","false"),U.setAttribute("aria-label",`季节：${O.label}（${O.title}）`),U.title=`${O.label} · ${O.title}`,ur(Nf[D],"dock-btn-ic",U);const $=at("span","dock-btn-label",U);$.textContent=O.label,U.addEventListener("click",()=>e.onSeasonChange&&e.onSeasonChange(D)),de.push(U)}at("div","dock-divider",Re).setAttribute("aria-hidden","true");const tt=at("section","dock-group dock-group--time",Re);tt.setAttribute("role","group"),tt.setAttribute("aria-label","时间");const Mt=at("div","dock-head",tt);at("div","dock-group-label",Mt).textContent="时辰";const Wt=at("span","time-readout",Mt);Wt.textContent="17:12";const Y=at("button","auto-toggle",Mt);Y.id="auto-toggle",Y.type="button",Y.setAttribute("role","switch"),Y.setAttribute("aria-checked","false"),Y.setAttribute("aria-label","自动推进时间");const st=at("span","auto-label",Y);st.textContent="自动";const be=at("span","switch",Y);be.setAttribute("aria-hidden","true"),at("span","switch-knob",be),Y.addEventListener("click",()=>{const D=Y.getAttribute("aria-checked")!=="true";nt(D),e.onAutoToggle&&e.onAutoToggle(D)});const Oe=at("div","time-rail",tt),Ze=document.createElement("input");Ze.type="range",Ze.id="time-slider",Ze.className="time-slider",Ze.min="0",Ze.max="24",Ze.step="0.05",Ze.value=String(s.sliderHour),Ze.setAttribute("aria-label","时间，0 到 24 时"),Ze.setAttribute("aria-valuetext","17:12 黄昏"),Oe.appendChild(Ze),Ze.style.setProperty("--pct",`${s.sliderHour/24*100}%`);const J=at("div","time-ticks",Oe);J.setAttribute("aria-hidden","true");for(let D=0;D<=24;D+=3){const O=at("span",`time-tick${D%6===0?" time-tick--major":""}`,J);O.style.left=`${D/24*100}%`}const Ve=at("div","time-presets",Oe);Ve.setAttribute("role","group"),Ve.setAttribute("aria-label","时间预设");const Ke=[];for(const D of R2){const O=il[D],U=_l[D].label||O.label,$=at("button","time-preset",Ve);$.type="button",$.dataset.timePreset=D,$.setAttribute("aria-pressed","false"),$.setAttribute("aria-label",`时间预设：${U}`),ur(Ff[D],"time-preset-ic",$);const he=at("span","time-preset-label",$);he.textContent=U,$.addEventListener("click",()=>e.onTimePreset&&e.onTimePreset(D)),Ke.push($)}Ze.addEventListener("pointerdown",()=>{s.draggingTime=!0,t.classList.add("is-time-dragging")});const yt=()=>{s.draggingTime&&(s.draggingTime=!1,t.classList.remove("is-time-dragging"))};window.addEventListener("pointerup",yt,!0),window.addEventListener("pointercancel",yt,!0),Ze.addEventListener("input",()=>{const D=Cr(Number(Ze.value)||0,0,24);Fe(D,!0),e.onTimeInput&&e.onTimeInput(D)}),at("div","dock-divider",Re).setAttribute("aria-hidden","true");const me=at("section","dock-group dock-group--weather",Re);me.setAttribute("role","group"),me.setAttribute("aria-label","天气"),at("div","dock-group-label",me).textContent="天气";const Le=at("div","dock-row",me),Be=[];for(const D of C2){const O=Mo[D],U=at("button","dock-btn weather-btn",Le);U.type="button",U.dataset.weather=D,U.setAttribute("aria-pressed","false"),U.setAttribute("aria-label",`天气：${O.label}（${O.en}）`),U.title=`${O.label} · ${O.en}`,ur(Uf[D],"dock-btn-ic",U);const $=at("span","dock-btn-label",U);$.textContent=O.label,U.addEventListener("click",()=>e.onWeatherChange&&e.onWeatherChange(D)),Be.push(U)}const Ye=at("footer","hint-bar",X);Ye.setAttribute("aria-label","操作提示");const Je=at("div","hint-set hint-set--third",Ye);Nt(Je,[["WASD","移动",!1],["Shift","加速",!0],["拖拽","旋转",!0],["滚轮","缩放",!0],["V","第一人称",!1],["E","互动",!1]]);const bt=at("div","hint-set hint-set--first",Ye);Nt(bt,[["WASD","移动",!1],["Shift","加速",!0],["拖拽","环视",!0],["V","返回屋外",!1],["E","互动",!1]]);const At=at("div","toast-layer",t);At.id="toast-layer",At.setAttribute("role","status"),At.setAttribute("aria-live","polite");const z=at("div","note-layer",t);z.id="note-layer",z.hidden=!0;const H=at("div","note-backdrop",z);H.setAttribute("aria-hidden","true");const E=at("article","note-panel",z);E.id="note-panel",E.setAttribute("role","dialog"),E.setAttribute("aria-modal","true"),E.setAttribute("aria-labelledby","note-title"),E.setAttribute("aria-describedby","note-body");const ue=at("button","note-close",E);ue.id="note-close",ue.type="button",ue.setAttribute("aria-label","关闭手记"),ue.innerHTML=xl("close"),at("span","note-frame",E).setAttribute("aria-hidden","true");const Pe=at("p","note-eyebrow",E);Pe.textContent="林间手记";const C=at("h2","note-title",E);C.id="note-title";const v=at("div","note-body",E);v.id="note-body";const G=at("p","note-footer",E),re=at("p","note-esc",E),ge=at("span","note-esc-key",re);ge.textContent="Esc";const Ge=document.createTextNode(" 关闭手记");re.appendChild(Ge);let He=null;function we(){He=at("div","ui-loading",t),He.id="ui-loading",He.setAttribute("role","status"),He.setAttribute("aria-live","polite");const D=at("div","loader-inner",He);at("div","loader-glow",D).setAttribute("aria-hidden","true");const O=at("div","loader-title",D),U=at("div","loader-cn",O);U.textContent="林间小屋";const $=at("div","loader-rule",O);$.setAttribute("aria-hidden","true"),at("span","loader-rule-line",$),at("span","loader-rule-gem",$),at("span","loader-rule-line",$);const he=at("div","loader-en",O);he.textContent="CABIN IN THE WOODS";const Ne=at("p","loader-poetic",D);Ne.id="loader-label",Ne.textContent="正在点亮窗前的灯…";const lt=at("div","loader-track",D);lt.setAttribute("aria-hidden","true");const vt=at("div","loader-fill",lt);vt.style.width="0%";const ct=at("div","loader-meta",D),$e=at("span","loader-pct",ct);$e.id="loader-pct",$e.textContent="0%";const Ie=at("span","loader-note",ct);return Ie.textContent="为安静的人点亮一盏灯",{loading:He,label:Ne,fill:vt,pct:$e}}const Ae=we();let rt=0;function Nt(D,O){O.forEach(([U,$,he])=>{const Ne=at("span",`hint-item${he?" hint-optional":""}`,D),lt=at("span","hint-key",Ne);lt.textContent=U;const vt=at("span","hint-text",Ne);vt.textContent=$})}function nt(D){Y.setAttribute("aria-checked",D?"true":"false"),Y.classList.toggle("is-on",!!D),t.classList.toggle("is-auto",!!D)}function Fe(D,O){const U=Cr(D,0,24);s.sliderHour=U,Ze.style.setProperty("--pct",`${U/24*100}%`),(Math.abs(Number(Ze.value)-U)>1e-4||O)&&(Ze.value=String(U)),Vi(Wt,sl(U));const $=Ct(Of(U));Ze.setAttribute("aria-valuetext",`${sl(U)} ${$.label}`)}function Ct(D){return il[D]||il.dusk}function ut(D,O){D.dataset.icon!==O&&(D.dataset.icon=O,D.innerHTML=xl(O))}function Vt(D,O,U){for(const $ of D){const he=$.getAttribute(U)===O;$.setAttribute("aria-pressed",he?"true":"false")}}function ee(D){for(const O of[r,P,X])D?O.setAttribute("inert",""):O.removeAttribute("inert");je()}function je(){s.panelOpen||s.locked?Re.setAttribute("inert",""):Re.removeAttribute("inert")}function ze(D){if(!s.panelOpen)return;s.panelOpen=!1,s.panelId=null,t.classList.remove("has-note"),z.classList.remove("is-open"),ee(!1),window.setTimeout(()=>{s.panelOpen||(z.hidden=!0,z.setAttribute("aria-hidden","true"))},320);const O=s.lastFocus;if(s.lastFocus=null,O&&typeof O.focus=="function"&&O.isConnected)try{O.focus({preventScroll:!0})}catch{}D&&e.onOverlayClose&&e.onOverlayClose()}function St(D){if(s.panelOpen){if(D.key==="Escape"||D.key==="Esc"){D.preventDefault(),D.stopPropagation(),ze(!0);return}if(D.key==="Tab"){D.preventDefault(),ue.focus({preventScroll:!0});return}D.stopPropagation()}}window.addEventListener("keydown",St,!0),ue.addEventListener("click",()=>ze(!0)),H.addEventListener("pointerdown",D=>{D.preventDefault(),D.stopPropagation(),ze(!0)}),z.addEventListener("wheel",D=>D.stopPropagation(),{passive:!0});function Et(D,O){const U={...s.env||{}};if(D)for(const en of Object.keys(D))D[en]!==void 0&&(U[en]=D[en]);const $={};if(O)for(const en of Object.keys(O))O[en]!==void 0&&($[en]=O[en]);!s.env&&!D&&!O&&(U.season=$s.season,U.weather=$s.weather,U.hour=$s.hour,U.timeMode=$s.timeMode);const he=Cr(Number(U.hour!=null?U.hour:L2($.clock)??$s.hour),0,24);U.hour=he;const Ne=U.timeMode==="auto"?"auto":"manual";U.timeMode=Ne;const lt=U.isNight!=null?!!U.isNight:P2(he);U.isNight=lt;const vt=Lr[U.season]?U.season:$s.season,ct=Mo[U.weather]?U.weather:$s.weather;U.season=vt,U.weather=ct;const $e=$.preset&&il[$.preset]?$.preset:Of(he),Ie=Ct($e),dt=$.clock!=null?String($.clock):sl(he),Ft=$.phaseLabel!=null?String($.phaseLabel):Ie.label;s.env=U,s.info=$,Vi(h,dt),Vi(m,Ft),Vi(y,Lr[vt].label),Vi(F,Mo[ct].label),b.title=`季节 · ${Lr[vt].title}`,A.title=`天气 · ${Mo[ct].en}`,ut(_,Ff[$e]),ut(T,Nf[vt]),ut(R,Uf[ct]),x.classList.toggle("is-lit",!!U.windowGlow),x.title=U.windowGlow?"窗前亮着灯":"窗内没有灯光",s.phase!==$e&&(s.phase=$e,_.dataset.phase=$e),Vt(de,vt,"data-season"),Vt(Be,ct,"data-weather"),Vt(Ke,$e,"data-time-preset"),nt(Ne==="auto"),!s.draggingTime&&document.activeElement!==Ze?Math.abs(Number(Ze.value)-he)>1e-4?Fe(he,!1):Vi(Wt,dt):Vi(Wt,sl(s.sliderHour))}function qe(D){if(!D||!D.action){j.hidden||(j.classList.remove("is-visible"),j.hidden=!0),s.promptAction=null;return}const O=String(D.action);Vi(Se,D.key!=null?String(D.key):"E"),s.promptAction!==O&&(Vi(oe,O),s.promptAction=O),j.hidden?(j.hidden=!1,requestAnimationFrame(()=>j.classList.add("is-visible"))):j.classList.add("is-visible")}function Bt(D){const O=D==="first"?"first":"third";s.mode=O,t.dataset.mode=O;const U=O==="first";Vi(k,U?"第一人称":"第三人称"),N.dataset.icon!==(U?"eye":"person")&&(N.dataset.icon=U?"eye":"person",N.innerHTML=xl(U?"eye":"person")),P.classList.toggle("is-first",U),P.setAttribute("aria-label",U?"当前视角：第一人称":"当前视角：第三人称")}function Ut(D){if(!D){_n();return}const O=s.panelOpen;if(!O){const he=document.activeElement;s.lastFocus=he&&he!==document.body?he:null}s.panelOpen=!0,s.panelId=D.id!=null?String(D.id):null,Vi(Pe,D.eyebrow?String(D.eyebrow):"林间手记"),Vi(C,D.title?String(D.title):""),C.hidden=!D.title;const U=Array.isArray(D.body)?D.body:D.body!=null?[D.body]:[];v.innerHTML="";for(const he of U){const Ne=document.createElement("p");Ne.textContent=String(he),v.appendChild(Ne)}const $=Array.isArray(D.footer)?D.footer:D.footer!=null?[D.footer]:[];if(G.hidden=$.length===0,Vi(G,$.map(he=>String(he)).join("　·　")),z.hidden=!1,z.setAttribute("aria-hidden","false"),t.classList.add("has-note"),ee(!0),!O)requestAnimationFrame(()=>{if(s.panelOpen){z.classList.add("is-open");try{ue.focus({preventScroll:!0})}catch{}}});else{z.classList.add("is-open");try{ue.focus({preventScroll:!0})}catch{}}}function _n(){ze(!1)}function ht(){return s.panelOpen}function fn(D){if(D==null||D==="")return;const O=at("div","toast",At);at("span","toast-gem",O).setAttribute("aria-hidden","true");const U=at("span","toast-text",O);for(U.textContent=String(D);At.children.length>3;)At.firstElementChild.remove();requestAnimationFrame(()=>O.classList.add("is-in"));const $=window.setTimeout(()=>{O.classList.remove("is-in"),O.classList.add("is-out");const he=window.setTimeout(()=>{O.remove(),s.toastTimers.delete(he)},460);s.toastTimers.delete($)},2800);s.toastTimers.add($)}function vi(D,O){if(window.clearTimeout(rt),!He||!He.isConnected){const $=we();Object.assign(Ae,$),s.loaderRemoved=!1}He=Ae.loading,He.hidden=!1,He.classList.remove("is-leaving"),He.setAttribute("aria-hidden","false"),Ae.loading=He;const U=Number(D);if(D==null||!Number.isFinite(U))He.classList.add("is-indeterminate"),Ae.pct.textContent="";else{He.classList.remove("is-indeterminate");const $=Cr(U,0,1);Ae.fill.style.width=`${$*100}%`,Ae.pct.textContent=`${Math.round($*100)}%`}O!=null&&Vi(Ae.label,O),t.classList.remove("is-ready"),s.ready=!1}function B(){if(s.ready)return;s.ready=!0,window.clearTimeout(rt);const D=document.getElementById("boot-fallback");D&&D.remove(),He&&(He.classList.add("is-leaving"),He.setAttribute("aria-hidden","true"),rt=window.setTimeout(()=>{He&&He.remove(),s.loaderRemoved=!0,Ae.loading=null},1250)),requestAnimationFrame(()=>t.classList.add("is-ready"))}function q(D){const O=!!D;s.locked=O,t.classList.toggle("is-locked",O),t.setAttribute("aria-busy",O?"true":"false"),je()}return Et(null,null),Bt("third"),{setEnvironment:Et,setPrompt:qe,setMode:Bt,showPanel:Ut,hidePanel:_n,isPanelOpen:ht,notify:fn,setLoading:vi,setReady:B,setLocked:q}}const zf={spring:{root:146.83,chords:[[0,4,7,11],[5,9,12,16],[7,11,14,18],[2,5,9,12]],color:"triangle"},summer:{root:110,chords:[[0,4,7,11],[0,5,9,12],[5,9,12,16],[7,11,14,17]],color:"sine"},autumn:{root:98,chords:[[0,3,7,10],[5,8,12,15],[3,7,10,14],[0,3,7,10]],color:"triangle"},winter:{root:130.81,chords:[[0,3,7,10],[0,3,7,14],[-2,2,5,9],[0,3,7,10]],color:"sine"}};function D2({onMuteChange:i}={}){let e=null,t=null,n=null,s=null,r=!1,o=!1,a=!1;const c={data:null};let l=0,u=0,d=0,f=0;const h={},p={bird:2.4,cricket:.6,thunder:8+Math.random()*8,crackle:.4,step:0},_={fire:null,curtains:null,panel:null},m={season:"autumn",weather:"clear",hour:16.9,interior:!1},g={wind:.55,rain:0,leaves:.3,fire:0,room:0,storm:0,music:.58};let b=6500;function T(z,H){return z+Math.random()*(H-z)}function y(z,H,E=.35){if(!e||!z)return;const ue=e.currentTime;z.cancelScheduledValues(ue),z.setTargetAtTime(H,ue,E)}function A(z,H=!1){const E=Math.floor(e.sampleRate*z),ue=e.createBuffer(2,E,e.sampleRate);for(let Pe=0;Pe<2;Pe++){const C=ue.getChannelData(Pe);let v=0;for(let G=0;G<E;G++){const re=Math.random()*2-1;H?(v=(v+.018*re)/1.018,C[G]=v*3.2):C[G]=re}}return ue}function R(z=2.1){const H=Math.floor(e.sampleRate*z),E=e.createBuffer(2,H,e.sampleRate);for(let ue=0;ue<2;ue++){const Pe=E.getChannelData(ue);let C=0;for(let v=0;v<H;v++){const G=Math.pow(1-v/H,2.7);C=C*.82+(Math.random()*2-1)*.18,Pe[v]=C*G}}return E}function F(z,H,E={}){const ue=e.createBufferSource();ue.buffer=z,ue.loop=!0,ue.loopStart=Math.random()*1.4,ue.loopEnd=ue.loopStart+Math.max(.8,z.duration-1.5);let Pe=ue;if(E.filter){const v=e.createBiquadFilter();if(v.type=E.filter.type||"lowpass",v.frequency.value=E.filter.frequency||1e3,v.Q.value=E.filter.q??.4,Pe.connect(v),Pe=v,E.alsoFilter){const G=e.createBiquadFilter();G.type=E.alsoFilter.type||"highpass",G.frequency.value=E.alsoFilter.frequency||100,Pe.connect(G),Pe=G}}const C=e.createGain();if(C.gain.value=E.gain??0,Pe.connect(C),E.panner!==void 0){const v=e.createStereoPanner();v.pan.value=E.panner,C.connect(v),v.connect(H)}else C.connect(H);return ue.start(),{source:ue,gainNode:C,gainParam:C.gain,filter:Pe}}function x(z,H=.12){const E=e.createGain();if(E.gain.value=1,E.connect(z),H>0){const ue=e.createGain();ue.gain.value=H,E.connect(ue),ue.connect(s)}return E}function P({type:z="sine",freq:H=440,endFreq:E=null,duration:ue=.2,gain:Pe=.02,attack:C=.01,wet:v=.12,pan:G=0,delay:re=0}){if(!e)return;const ge=e.currentTime+re,Ge=e.createOscillator(),He=e.createGain();Ge.type=z,Ge.frequency.setValueAtTime(H,ge),E!=null&&Ge.frequency.exponentialRampToValueAtTime(Math.max(20,E),ge+ue),He.gain.setValueAtTime(1e-4,ge),He.gain.exponentialRampToValueAtTime(Math.max(1e-4,Pe),ge+C),He.gain.exponentialRampToValueAtTime(1e-4,ge+ue);let we=He;if(G){const Ae=e.createStereoPanner();Ae.pan.value=G,He.connect(Ae),we=Ae}we.connect(x(h.sfx,v)),Ge.connect(He),Ge.start(ge),Ge.stop(ge+ue+.03)}function N({duration:z=.2,gain:H=.04,filterType:E="bandpass",frequency:ue=1200,q:Pe=.7,pan:C=0,wet:v=.1,attack:G=.008,delay:re=0}){if(!e)return;const ge=e.currentTime+re,Ge=e.createBufferSource();Ge.buffer=h.noiseWhite,Ge.playbackRate.value=T(.82,1.2);const He=e.createBiquadFilter();He.type=E,He.frequency.value=ue,He.Q.value=Pe;const we=e.createGain();we.gain.setValueAtTime(1e-4,ge),we.gain.exponentialRampToValueAtTime(Math.max(1e-4,H),ge+G),we.gain.exponentialRampToValueAtTime(1e-4,ge+z);let Ae=we;if(C){const rt=e.createStereoPanner();rt.pan.value=C,we.connect(rt),Ae=rt}Ge.connect(He),He.connect(we),Ae.connect(x(h.sfx,v)),Ge.start(ge,Math.random()*2),Ge.stop(ge+z+.03)}function k(){if(e){e.state==="suspended"&&e.resume().catch(()=>{});return}const z=window.AudioContext||window.webkitAudioContext;if(!z)return;try{e=new z({latencyHint:"interactive"})}catch{e=null;return}h.noiseWhite=A(3.2,!1),h.noiseBrown=A(4.5,!0),t=e.createGain(),t.gain.value=0;const H=e.createDynamicsCompressor();H.threshold.value=-20,H.knee.value=22,H.ratio.value=3.2,H.attack.value=.006,H.release.value=.25,n=e.createAnalyser(),n.fftSize=512,n.smoothingTimeConstant=.82,c.data=new Float32Array(n.fftSize);const E=e.createConvolver();E.buffer=R(2.3),s=e.createGain(),s.gain.value=.55,E.connect(E),E.connect(t),h.ambient=e.createGain(),h.ambient.gain.value=.6,h.sfx=e.createGain(),h.sfx.gain.value=.75,h.music=e.createGain(),h.music.gain.value=0,h.ambient.connect(t),h.sfx.connect(t),h.music.connect(t),h.ambient.connect(s),h.sfx.connect(s);const ue=e.createGain();ue.gain.value=.7,h.music.connect(ue),ue.connect(s),t.connect(H),H.connect(n),n.connect(e.destination),h.windL=F(h.noiseBrown,h.ambient,{filter:{type:"lowpass",frequency:390,q:.3},panner:-.42,gain:0}),h.windR=F(h.noiseBrown,h.ambient,{filter:{type:"lowpass",frequency:560,q:.35},panner:.45,gain:0}),h.leaves=F(h.noiseWhite,h.ambient,{filter:{type:"bandpass",frequency:2100,q:.5},alsoFilter:{type:"highpass",frequency:1300},panner:.1,gain:0}),h.rain=F(h.noiseWhite,h.ambient,{filter:{type:"highpass",frequency:480,q:.2},alsoFilter:{type:"lowpass",frequency:7200,q:.3},gain:0}),h.rainFilter=e.createBiquadFilter(),h.rainFilter.type="lowpass",h.rainFilter.frequency.value=7200,h.rain.source.disconnect(),h.rain.filter.disconnect(),h.rain.gainNode.disconnect(),h.rain.source.connect(h.rainFilter),h.rainFilter.connect(h.rain.gainNode),h.rain.gainNode.connect(h.ambient),h.rainRumble=F(h.noiseBrown,h.ambient,{filter:{type:"lowpass",frequency:150,q:.4},gain:0}),h.fire=F(h.noiseBrown,h.ambient,{filter:{type:"lowpass",frequency:720,q:.5},gain:0}),h.room=F(h.noiseBrown,h.ambient,{filter:{type:"lowpass",frequency:210,q:.4},gain:0}),u=e.currentTime+2.6,d=e.currentTime+4.8,oe(!0)}function V(){o||(k(),e&&(e.state==="suspended"&&e.resume().catch(()=>{}),r=!0,y(t.gain,.55,.8)))}function te(z){o||z?.target?.closest?.("#sound-toggle")||e&&e.state==="running"||V()}function X(){!e||!t||y(t.gain,o?1e-4:.55,o?.25:.9)}function j(){return o=!o,o||V(),X(),i?.(o),o}function Se(){if(!e)return;const z=document.hidden;z&&!a?e.suspend().catch(()=>{}):!z&&a&&!o&&r&&e.resume().catch(()=>{}),a=z}function oe(z=!1){if(!e)return;const H=z?.01:.55,E=g.wind,ue=.82+.12*Math.sin(l*.21)+.06*Math.sin(l*.47+1.7);y(h.windL?.gainParam,E*.052*ue,H),y(h.windR?.gainParam,E*.04*(1.05+.1*Math.sin(l*.17+2.1)),H),y(h.leaves?.gainParam,g.leaves*.018*(.6+.4*Math.sin(l*.8+.5)),H),y(h.rain?.gainParam,g.rain*.16,H),y(h.rainRumble?.gainParam,g.storm*.1,H),y(h.fire?.gainParam,g.fire*.05,H),y(h.room?.gainParam,g.room*.018,H),y(h.music?.gain,g.music,1.2);const Pe=m.interior?1350:7600;Math.abs(Pe-b)>15&&(b=Pe,y(h.rainFilter?.frequency,Pe,.7))}function Re(z={}){if(!z)return;m.season=z.season||m.season,m.weather=z.weather||m.weather,m.hour=Number.isFinite(z.hour)?z.hour:m.hour,m.interior=!!z.interior;const H=m.weather,E=H==="rain"||H==="storm";let Pe=H==="storm"?1.15:H==="rain"?.85:H==="snow"?.75:H==="fog"?.45:.55;m.interior&&(Pe*=.24),(m.hour<6||m.hour>19)&&(Pe*=.65),g.wind=Pe,g.rain=E?H==="storm"?1.15:.9:0,g.storm=H==="storm"?1:0,g.leaves=m.interior?.06:E?.18:.38,g.room=m.interior?1:0;let C=H==="storm"?.32:H==="rain"?.48:H==="fog"?.4:H==="snow"?.56:.64;(m.hour<6||m.hour>19)&&(C*=.72),m.interior&&(C*=.92),m.season==="winter"&&(C*=.9),g.music=C,oe()}function xe(z){g.fire=m.interior&&z?1:0,oe(),e&&(p.crackle=.1)}function Te(){e&&(P({type:"sine",freq:1180,endFreq:740,duration:.045,gain:.012,attack:.003,wet:.04}),N({duration:.035,gain:.008,filterType:"highpass",frequency:2800,wet:.02}))}function de(z="leaves",H=!1){if(!e)return;const E=T(-.3,.3),ue=H?1.25:1;z==="stone"?(N({duration:.09,gain:.032*ue,filterType:"bandpass",frequency:T(650,980),q:1.4,pan:E,wet:.08}),P({type:"sine",freq:T(95,125),endFreq:55,duration:.08,gain:.018*ue,attack:.004,wet:.06,pan:E})):z==="wood"?(N({duration:.11,gain:.035*ue,filterType:"lowpass",frequency:700,pan:E,wet:.08}),P({type:"sine",freq:T(85,110),endFreq:58,duration:.1,gain:.024*ue,attack:.004,wet:.08,pan:E})):(N({duration:.13,gain:.028*ue,filterType:"bandpass",frequency:T(1500,2500),q:.6,pan:E,wet:.05}),N({duration:.06,gain:.015*ue,filterType:"highpass",frequency:3200,pan:E,wet:.04,delay:.02}))}function tt(z=!0){if(!e)return;const H=e.currentTime,E=e.createOscillator(),ue=e.createBiquadFilter(),Pe=e.createGain();E.type="sawtooth",E.frequency.setValueAtTime(z?128:165,H),E.frequency.exponentialRampToValueAtTime(z?76:62,H+.62),ue.type="lowpass",ue.frequency.setValueAtTime(680,H),ue.frequency.exponentialRampToValueAtTime(240,H+.62),ue.Q.value=3.5,Pe.gain.setValueAtTime(1e-4,H),Pe.gain.exponentialRampToValueAtTime(.038,H+.07),Pe.gain.exponentialRampToValueAtTime(1e-4,H+.68),E.connect(ue),ue.connect(Pe),Pe.connect(x(h.sfx,.22)),E.start(H),E.stop(H+.72),N({duration:.06,gain:.025,filterType:"bandpass",frequency:420,q:2,wet:.12,delay:z?.52:.58})}function Mt(z){if(e)if(z){N({duration:.55,gain:.07,filterType:"lowpass",frequency:900,q:.8,wet:.25,attack:.04}),N({duration:.22,gain:.04,filterType:"highpass",frequency:1800,wet:.2,delay:.05}),P({type:"sine",freq:84,endFreq:52,duration:.4,gain:.035,wet:.2,pan:-.1});for(let H=0;H<4;H++)J(()=>Wt(T(.7,1.2)),80+H*120)}else N({duration:.38,gain:.035,filterType:"lowpass",frequency:480,q:.6,wet:.15,attack:.02}),P({type:"sine",freq:110,endFreq:48,duration:.3,gain:.025,wet:.12})}function Wt(z=1){if(!e)return;const H=T(-.65,.65);N({duration:T(.025,.055),gain:T(.012,.035)*z,filterType:"highpass",frequency:T(1400,4200),pan:H,wet:.18}),Math.random()<.3&&P({type:"sine",freq:T(150,300),endFreq:T(60,120),duration:T(.03,.06),gain:T(.006,.016)*z,wet:.15,pan:H})}function Y(){e&&(N({duration:.48,gain:.032,filterType:"bandpass",frequency:950,q:.6,wet:.15,attack:.06}),N({duration:.28,gain:.018,filterType:"highpass",frequency:2600,wet:.1,delay:.15}))}function st(z=!0){e&&(N({duration:.26,gain:.024,filterType:"bandpass",frequency:1700,q:.7,wet:.08,attack:.02}),N({duration:.12,gain:.012,filterType:"highpass",frequency:3200,wet:.05,delay:.08}))}function be(){if(!e||m.interior)return;const z=T(-.8,.8),H=T(2200,3200),E=2+Math.floor(Math.random()*3);for(let ue=0;ue<E;ue++){const Pe=H*T(.82,1.24);P({type:"sine",freq:Pe,endFreq:Pe*T(1.08,1.38),duration:T(.07,.16),gain:T(.011,.022),attack:.006,wet:.28,pan:z,delay:ue*T(.11,.19)})}}function Oe(){if(!e)return;const z=T(-.7,.7),H=T(3900,4800);for(let E=0;E<3;E++)P({type:"sine",freq:H,duration:.028,gain:.008,attack:.002,wet:.1,pan:z,delay:E*.065})}function Ze(){if(!e)return;const z=e.currentTime,H=e.createBufferSource();H.buffer=h.noiseBrown,H.loop=!0,H.playbackRate.value=T(.55,.8);const E=e.createBiquadFilter();E.type="lowpass",E.frequency.value=T(90,180),E.Q.value=.6;const ue=e.createGain();ue.gain.setValueAtTime(1e-4,z),ue.gain.exponentialRampToValueAtTime(T(.09,.16),z+.16),ue.gain.exponentialRampToValueAtTime(1e-4,z+T(2.2,4)),H.connect(E),E.connect(ue),ue.connect(x(h.sfx,.35)),H.start(z),H.stop(z+4.2)}function J(z,H){try{window.setTimeout(z,H)}catch{}}function Ve(){return zf[m.season]||zf.autumn}function Ke(z){const H=f>0?(f-1)%z.chords.length:0;return z.chords[H]}function yt(z,H,E,ue){if(!e)return;const Pe=e.currentTime+.04,C=m.hour<6||m.hour>19,v=m.weather,G=m.interior,re=z.root*(C?.84:1),ge=v==="storm"?520:v==="rain"?760:v==="fog"?680:v==="snow"?900:C?820:G?1200:1500,Ge=Math.min(3,E*.26),He=Math.min(4,E*.3),we=Math.max(Pe+Ge+.2,Pe+E-He);for(let Ae=0;Ae<H.length;Ae++){const rt=re*Math.pow(2,H[Ae]/12),Nt=Ae===H.length-1?[0,12]:[0];for(const nt of Nt){const Fe=e.createOscillator(),Ct=e.createBiquadFilter(),ut=e.createGain();Fe.type=Ae===0?"sine":z.color,Fe.frequency.value=rt*Math.pow(2,nt/12),Fe.detune.value=T(-4,4),Ct.type="lowpass",Ct.frequency.value=ge*(nt?1.5:1),Ct.Q.value=.35;const Vt=ue*(Ae===0?.9:Ae===H.length-1?.55:.68)*(nt?.3:1);ut.gain.setValueAtTime(1e-4,Pe),ut.gain.linearRampToValueAtTime(Vt,Pe+Ge),ut.gain.setValueAtTime(Vt,we),ut.gain.linearRampToValueAtTime(1e-4,Pe+E),Fe.connect(Ct),Ct.connect(ut),ut.connect(h.music),Fe.start(Pe),Fe.stop(Pe+E+.08)}}}function me(z,H){if(!e)return;const E=m.hour<6||m.hour>19,ue=H[Math.floor(Math.random()*H.length)],Pe=E?12:24,C=z.root*Math.pow(2,(ue+Pe)/12),v=e.currentTime+.03,G=T(2.6,4.4),re=e.createOscillator(),ge=e.createBiquadFilter(),Ge=e.createGain();re.type=m.season==="winter"?"sine":"triangle",re.frequency.value=C,ge.type="lowpass",ge.frequency.value=2600,ge.Q.value=.5;const He=E?T(.004,.008):T(.006,.011);Ge.gain.setValueAtTime(1e-4,v),Ge.gain.exponentialRampToValueAtTime(He,v+.02),Ge.gain.exponentialRampToValueAtTime(1e-4,v+G),re.connect(ge),ge.connect(Ge),Ge.connect(h.music),re.start(v),re.stop(v+G+.05)}function Le(){if(!e||o)return;const z=e.currentTime,H=Ve();if(z>=u){let E=H.chords[f%H.chords.length];m.weather==="storm"?E=E.slice(0,2):(m.weather==="fog"||m.weather==="rain")&&(E=E.slice(0,3));const ue=m.hour<6||m.hour>19,Pe=m.interior?13.5:m.weather==="storm"?18:m.weather==="rain"?14.5:ue?16.5:11.8;yt(H,E,Pe+3.6,.016),f++,u=z+Pe}if(z>=d){const E=m.hour<6||m.hour>19;m.weather!=="storm"&&m.weather!=="fog"&&me(H,Ke(H));const Pe=E?T(4.8,8):T(3.4,6.4),C=m.weather==="rain"?Pe*1.35:m.interior?Pe*1.15:Pe;d=z+C}}function Be(z,H){if(H)return"wood";if(!z)return"leaves";const{x:E,z:ue}=z;return ue>3&&ue<5.45&&Math.abs(E)<3.3?"wood":ue>=5.3&&ue<17.5&&Math.abs(E)<1.45?"stone":"leaves"}function Ye(z,H={}){if(l+=Math.min(z||0,.1),!e)return;if(H.season&&(m.season=H.season),H.weather&&(m.weather=H.weather),Number.isFinite(H.hour)&&(m.hour=H.hour),H.interior!==void 0&&(m.interior=!!H.interior),g.fire=m.interior&&H.fireplaceOn?1:0,_.fire===null?_.fire=!!H.fireplaceOn:!!H.fireplaceOn!==_.fire&&(_.fire=!!H.fireplaceOn,Mt(_.fire)),_.curtains===null?_.curtains=!!H.curtainsOpen:!!H.curtainsOpen!==_.curtains&&(_.curtains=!!H.curtainsOpen,m.interior&&Y()),_.panel===null?_.panel=!!H.panelOpen:!!H.panelOpen!==_.panel&&(_.panel=!!H.panelOpen,st(_.panel)),!!H.moving&&Number(H.speed)>.35){if(p.step-=z,p.step<=0){const ge=Number(H.speed)||0,Ge=ge>4.4?.3:ge>2.8?.4:.55;p.step=Ge*T(.92,1.12),de(Be(H.position,m.interior),ge>4.4)}}else p.step=Math.min(p.step,.18);g.fire>.15&&(p.crackle-=z,p.crackle<=0&&(p.crackle=T(.18,.7),Wt(T(.75,1.1))));const ue=H.overcast??0,Pe=m.weather==="clear"&&ue<.35,C=m.hour<6||m.hour>19,v=m.hour>=6.5&&m.hour<=18,G=!m.interior&&Pe&&v,re=!m.interior&&m.season==="summer"&&C&&Pe;p.bird-=z,p.bird<=0&&(G&&be(),p.bird=G?T(2.4,6.5):2),p.cricket-=z,p.cricket<=0&&(re&&Oe(),p.cricket=re?T(1,2.4):2),p.thunder-=z,p.thunder<=0&&(m.weather==="storm"&&Ze(),p.thunder=m.weather==="storm"?T(7,18):8),Le(),oe(),y(h.fire?.gainParam,g.fire*.05+(g.fire>0?.006:0),.4)}function Je(z){z&&z.addEventListener("click",H=>{const E=H.target?.closest?.("button");!E||E.id==="sound-toggle"||Te()},{passive:!0})}function bt(){if(!e||!n||!c.data)return 0;n.getFloatTimeDomainData(c.data);let z=0;for(let H=0;H<c.data.length;H++)z+=c.data[H]*c.data[H];return Math.sqrt(z/c.data.length)}function At(){window.removeEventListener("pointerdown",te,!0),window.removeEventListener("touchstart",te,!0),window.removeEventListener("keydown",te,!0),document.removeEventListener("visibilitychange",Se),e&&e.close().catch(()=>{}),e=null,r=!1}return window.addEventListener("pointerdown",te,!0),window.addEventListener("touchstart",te,{capture:!0,passive:!0}),window.addEventListener("keydown",te,!0),document.addEventListener("visibilitychange",Se),{attachUI:Je,setEnvironment:Re,setFireState:xe,update:Ye,toggleMute:j,playDoor:tt,playClick:Te,getLevel:bt,dispose:At,get muted(){return o},get started(){return!!(e&&r)},get contextState(){return e?e.state:"not-created"},get musicInfo(){return{chordIndex:f,nextChordIn:e?Math.max(0,u-e.currentTime):0,weight:g.music,season:m.season,weather:m.weather}}}}function N2({onMove:i,onAction:e,onToggleView:t}={}){const n=document.createElement("div");n.className="mobile-controls",n.id="mobile-controls",n.setAttribute("aria-hidden","true"),n.innerHTML=`
    <div class="mobile-stick-zone">
      <div class="mobile-stick-base" id="mobile-stick-base" role="application" aria-label="虚拟摇杆，拖动前进">
        <svg class="mobile-stick-mark" viewBox="0 0 100 100" aria-hidden="true">
          <path d="M50 8v10M50 82v10M8 50h10M82 50h10" />
          <path d="M38 38 50 26l12 12M38 62 50 74l12-12" opacity=".6" />
        </svg>
        <div class="mobile-stick-knob" id="mobile-stick-knob"></div>
      </div>
      <span class="mobile-control-label">移动</span>
    </div>
    <div class="mobile-actions">
      <button type="button" class="mobile-action mobile-action--view" id="mobile-view" aria-label="切换第一人称">
        <span class="mobile-action-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 10 12 3l9 7v10H3z"/><path d="M9 20v-6h6v6"/>
          </svg>
        </span>
        <span class="mobile-action-text">进屋</span>
      </button>
      <button type="button" class="mobile-action mobile-action--run" id="mobile-run" aria-label="切换跑步" aria-pressed="false">
        <span class="mobile-action-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
            <path d="M13 4a2 2 0 1 0 0-.1"/><path d="m9 21 2.3-5.2L8 13l1.2-4.8L14 6l2.3 3.4 3.7 1.2"/><path d="m11 11 4.4 1.8L18 21"/>
          </svg>
        </span>
        <span class="mobile-action-text">跑</span>
      </button>
      <button type="button" class="mobile-action mobile-action--interact" id="mobile-interact" aria-label="互动" disabled>
        <span class="mobile-action-key">E</span>
        <span class="mobile-action-text">互动</span>
      </button>
    </div>`,document.body.appendChild(n);const s=n.querySelector(".mobile-stick-zone"),r=n.querySelector("#mobile-stick-base"),o=n.querySelector("#mobile-stick-knob"),a=n.querySelector("#mobile-view"),c=a.querySelector(".mobile-action-text"),l=n.querySelector("#mobile-run"),u=n.querySelector("#mobile-interact"),d=u.querySelector(".mobile-action-text"),f=38;let h=null,p=0,_=0,m=!1,g=!0,b="third",T=!1,y="";const A={进入小屋:"进屋",离开小屋:"出屋",点燃壁炉:"点火",熄灭壁炉:"灭火",拉上窗帘:"拉帘",拉开窗帘:"开帘",望向古井:"看井",端详木鸟:"看鸟",点亮烛台:"点灯",吹灭烛台:"灭灯"};function R(){return window.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0||window.innerWidth<=820}function F(){T=R(),n.classList.toggle("is-visible",T),n.setAttribute("aria-hidden",T?"false":"true"),T&&x()}function x(){const de=document.getElementById("environment-dock");if(!de)return;const tt=de.getBoundingClientRect().top,Mt=Math.max(86,window.innerHeight-tt+14);n.style.setProperty("--mobile-controls-bottom",`${Mt}px`)}function P(){g&&i?.(p,_,m)}function N(){p=0,_=0,o.style.transform="translate(-50%, -50%)",r.classList.remove("is-active")}function k(de){const tt=r.getBoundingClientRect(),Mt=tt.left+tt.width/2,Wt=tt.top+tt.height/2;let Y=de.clientX-Mt,st=de.clientY-Wt;const be=Math.hypot(Y,st);be>f&&(Y=Y/be*f,st=st/be*f);const Oe=Y/f,Ze=-st/f;Math.hypot(Oe,Ze)<.12?(p=0,_=0):(p=Oe,_=Ze),o.style.transform=`translate(calc(-50% + ${Y}px), calc(-50% + ${st}px))`,P()}function V(de){if(g&&(de.preventDefault(),de.stopPropagation(),h===null)){h=de.pointerId,r.classList.add("is-active");try{r.setPointerCapture(h)}catch{}k(de)}}function te(de){h===null||de.pointerId!==h||(de.preventDefault(),de.stopPropagation(),k(de))}function X(de){h===null||de.pointerId!==h||(de.preventDefault(),de.stopPropagation(),h=null,N(),P())}function j(de){b=de==="first"?"first":"third",c.textContent=b==="first"?"出屋":"进屋",a.setAttribute("aria-label",b==="first"?"返回屋外":"进入小屋"),a.classList.toggle("is-inside",b==="first")}function Se(de){const tt=de&&de.action?String(de.action):"";y=tt,u.disabled=!tt||!g,u.classList.toggle("is-available",!!tt),tt?(d.textContent=A[tt]||(tt.length>4?`${tt.slice(0,3)}…`:tt),u.setAttribute("aria-label",`互动：${tt}`)):(d.textContent="互动",u.setAttribute("aria-label","附近没有可互动的东西"))}function oe(de){g=!!de,n.classList.toggle("is-disabled",!g),u.disabled=!g||!y,s.classList.toggle("is-disabled",!g),g||(h=null,N(),i?.(0,0,!1))}function Re(){m=!m,l.setAttribute("aria-pressed",String(m)),l.classList.toggle("is-on",m),P()}r.addEventListener("pointerdown",V),r.addEventListener("pointermove",te),r.addEventListener("pointerup",X),r.addEventListener("pointercancel",X),r.addEventListener("lostpointercapture",X),l.addEventListener("click",de=>{de.preventDefault(),de.stopPropagation(),g&&Re()}),a.addEventListener("click",de=>{de.preventDefault(),de.stopPropagation(),g&&t?.()}),u.addEventListener("click",de=>{de.preventDefault(),de.stopPropagation(),!(!g||!y)&&e?.()});const xe=document.getElementById("environment-dock");let Te=null;return xe&&"ResizeObserver"in window&&(Te=new ResizeObserver(()=>x()),Te.observe(xe)),window.addEventListener("resize",F),F(),j("third"),x(),{root:n,setPrompt:Se,setMode:j,setEnabled:oe,updateOffset:x,get visible(){return T},get run(){return m},dispose(){Te?.disconnect(),window.removeEventListener("resize",F),n.remove()}}}const Jo=new L;function rs(i,e,t,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Jo.copy(e),Jo[n]=0,Jo.normalize();const l=.5*o/(o+a),u=1-Jo.angleTo(i)/c;return Math.sign(Jo[t])===1?u*l:a/(o+a)+l+l*(1-u)}class os extends qn{constructor(e=1,t=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new L,l=new L,u=new L(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,h=this.attributes.uv.array,p=d.length/6,_=new L,m=.5/o;for(let g=0,b=0;g<d.length;g+=3,b+=2)switch(c.fromArray(d,g),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[g+0]=u.x*Math.sign(c.x)+l.x*r,d[g+1]=u.y*Math.sign(c.y)+l.y*r,d[g+2]=u.z*Math.sign(c.z)+l.z*r,f[g+0]=l.x,f[g+1]=l.y,f[g+2]=l.z,Math.floor(g/p)){case 0:_.set(1,0,0),h[b+0]=rs(_,l,"z","y",r,n),h[b+1]=1-rs(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),h[b+0]=1-rs(_,l,"z","y",r,n),h[b+1]=1-rs(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),h[b+0]=1-rs(_,l,"x","z",r,e),h[b+1]=rs(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),h[b+0]=1-rs(_,l,"x","z",r,e),h[b+1]=1-rs(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),h[b+0]=1-rs(_,l,"x","y",r,e),h[b+1]=1-rs(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),h[b+0]=rs(_,l,"x","y",r,e),h[b+1]=1-rs(_,l,"y","x",r,t);break}}static fromJSON(e){return new os(e.width,e.height,e.depth,e.segments,e.radius)}}const We=Math.PI*2;function Ht(i=1){let e=i>>>0;return function(){e+=1831565813;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function S(i,e,t){return e+(t-e)*i()}function Ri(i,e){return e[Math.floor(i()*e.length)%e.length]}function vn(i,e,t){return Math.max(e,Math.min(t,i))}function $i(i,e,t){return i+(e-i)*t}function cs(i,e,t){const n=vn((t-i)/(e-i),0,1);return n*n*(3-2*n)}function bn(i,e,t,n={}){const s=document.createElement("canvas");s.width=i,s.height=e;const r=s.getContext("2d");t(r,i,e);const o=new Ip(s);return o.colorSpace=n.srgb===!1?Js:qi,o.wrapS=n.wrapS??Ro,o.wrapT=n.wrapT??Ro,o.anisotropy=n.anisotropy??8,n.repeat&&o.repeat.set(n.repeat[0],n.repeat[1]),n.rotation&&(o.center.set(.5,.5),o.rotation=n.rotation),o.needsUpdate=!0,o}function li(i,e,t,n,s=.06,r=1){const o=i.getImageData(0,0,e,t),a=o.data,c=s*255;for(let l=0;l<a.length;l+=4){const u=(n()-.5)*c*r;a[l]=vn(a[l]+u,0,255),a[l+1]=vn(a[l+1]+u,0,255),a[l+2]=vn(a[l+2]+u,0,255)}i.putImageData(o,0,0)}function rl(i,e,t=1){const n=Math.sin(i*127.1+e*311.7+t*74.7)*43758.5453123;return n-Math.floor(n)}function Iu(i,e,t=1){const n=Math.floor(i),s=Math.floor(e),r=i-n,o=e-s,a=r*r*(3-2*r),c=o*o*(3-2*o),l=rl(n,s,t),u=rl(n+1,s,t),d=rl(n,s+1,t),f=rl(n+1,s+1,t);return $i($i(l,u,a),$i(d,f,a),c)}function Ll(i,e,t=4,n=1){let s=0,r=.5,o=1;for(let a=0;a<t;a++)s+=Iu(i*o,e*o,n+a)*r,o*=2.07,r*=.5;return s}function Rs(i={}){const{size:e=512,base:t="#6f4b2e",light:n="#a67b4c",dark:s="#3d2817",planks:r=0,plankGap:o=.025,vertical:a=!1,seed:c=7,repeat:l=[1,1]}=i,u=e,d=e,f=bn(u,d,h=>{const p=Ht(c);h.fillStyle=t,h.fillRect(0,0,u,d);for(let m=0;m<22;m++){const g=p()*u,b=S(p,12,90),T=h.createLinearGradient(g,0,g+b,0);T.addColorStop(0,"rgba(0,0,0,0)"),T.addColorStop(.5,p()>.45?n:s),T.addColorStop(1,"rgba(0,0,0,0)"),h.globalAlpha=S(p,.025,.1),h.fillStyle=T,h.fillRect(g,0,b,d)}h.globalAlpha=1;const _=380;for(let m=0;m<_;m++){const g=p()*d,b=S(p,.04,.22),T=S(p,1,8),y=S(p,.008,.035);h.beginPath(),h.strokeStyle=p()>.5?s:n,h.globalAlpha=b,h.lineWidth=S(p,.6,2.4);for(let A=0;A<=u;A+=8){const R=g+Math.sin(A*y+m)*T+Math.sin(A*y*2.7)*T*.23;A===0?h.moveTo(A,R):h.lineTo(A,R)}h.stroke()}for(let m=0;m<6;m++){const g=p()*u,b=p()*d,T=S(p,5,15),y=T*S(p,.35,.65);for(let A=4;A>=0;A--)h.beginPath(),h.ellipse(g,b,T*(1+A*.5),y*(1+A*.55),p()*.2,0,We),h.strokeStyle=A===0?"#24150a":s,h.globalAlpha=A===0?.55:.16,h.lineWidth=A===0?2:2.5,h.stroke();h.globalAlpha=1}if(r>0){const m=(a?u:d)/r;for(let g=0;g<=r;g++){const b=g*m;h.globalAlpha=.55,h.fillStyle="#1d1208",a?h.fillRect(b-o*u/2,0,o*u,d):h.fillRect(0,b-o*d/2,u,o*d),h.globalAlpha=.14,h.fillStyle=n,a?h.fillRect(b+2,0,2,d):h.fillRect(0,b+2,u,2)}h.globalAlpha=1}li(h,u,d,p,.05)},{repeat:l});return a&&(f.center.set(.5,.5),f.rotation=Math.PI/2),f}function Du(i={}){const{size:e=512,seed:t=21,base:n="#57412d",dark:s="#2b1e13",light:r="#8a6a48",repeat:o=[1,1]}=i;return bn(e,e,(a,c,l)=>{const u=Ht(t);a.fillStyle=n,a.fillRect(0,0,c,l);for(let d=0;d<280;d++){const f=u()*c,h=S(u,30,240),p=u()*l;a.beginPath();const _=S(u,1,10);let m=f;a.moveTo(m,p);for(let g=0;g<h;g+=10)m+=Math.sin(g*.03+d)*1.7,a.lineTo(m+Math.sin(g*.13)*_*.3,p+g);a.strokeStyle=u()>.52?s:r,a.globalAlpha=S(u,.08,.42),a.lineWidth=_,a.lineCap="round",a.stroke()}for(let d=0;d<60;d++){a.beginPath(),a.fillStyle=u()>.4?"rgba(90,105,54,.22)":"rgba(120,125,80,.16)";const f=u()*c,h=u()*l;a.ellipse(f,h,S(u,2,12),S(u,1,5),u()*We,0,We),a.fill()}li(a,c,l,u,.1)},{repeat:o})}function Il(i={}){const{size:e=512,seed:t=11,repeat:n=[1,1],base:s="#4b4a43",light:r="#8d887b",dark:o="#25251f"}=i,a=e,c=e;return bn(a,c,l=>{const u=Ht(t);l.fillStyle=o,l.fillRect(0,0,a,c);const d=5,f=c/d;for(let h=0;h<d;h++){let p=-S(u,.2,.7)*a;for(;p<a;){const _=S(u,.16,.34)*a,m=f*S(u,.82,1.06),g=h*f+S(u,1,4);l.beginPath();const b=()=>S(u,-4,4);l.moveTo(p+b(),g+b()),l.lineTo(p+_+b(),g+b()),l.lineTo(p+_+b(),g+m+b()),l.lineTo(p+b(),g+m+b()),l.closePath();const T=S(u,0,1);l.fillStyle=T>.7?"#6b675c":T>.35?s:"#5d5a51",l.fill();const y=l.createLinearGradient(p,g,p+_,g+m);y.addColorStop(0,"rgba(255,245,220,.18)"),y.addColorStop(.35,"rgba(255,255,255,0)"),y.addColorStop(1,"rgba(0,0,0,.3)"),l.fillStyle=y,l.fill();for(let A=0;A<14;A++)l.fillStyle=u()>.5?"rgba(255,255,255,.08)":"rgba(0,0,0,.14)",l.fillRect(p+u()*_,g+u()*m,S(u,1,3),S(u,1,3));l.beginPath(),l.strokeStyle=r,l.globalAlpha=.16,l.lineWidth=2,l.moveTo(p+2,g+2),l.lineTo(p+_-2,g+2),l.stroke(),l.globalAlpha=1,p+=_+S(u,4,10)}}for(let h=0;h<70;h++)l.beginPath(),l.fillStyle="rgba(68,76,48,.18)",l.ellipse(u()*a,u()*c,S(u,2,9),S(u,1,4),u()*We,0,We),l.fill();li(l,a,c,u,.08)},{repeat:n})}function W0(i={}){const{size:e=512,seed:t=15,repeat:n=[1,1]}=i,s=e,r=e;return bn(s,r,o=>{const a=Ht(t);o.fillStyle="#2e2419",o.fillRect(0,0,s,r);const c=9,l=r/c;for(let u=0;u<c;u++){const f=s/7,h=(u%2===0?0:f/2)-f;for(let p=0;p<9;p++){const _=h+p*f+S(a,-2,2),m=u*l-2,g=l*S(a,.86,1.12);o.beginPath();const b=4;o.moveTo(_+1,m),o.lineTo(_+f-1,m),o.lineTo(_+f-1,m+g-4);for(let A=b;A>=0;A--){const R=_+1+(f-2)*A/b,F=m+g-(A%2===0?1:5);o.lineTo(R,F)}o.closePath();const T=a();o.fillStyle=T>.72?"#6d4e30":T>.4?"#5a4029":"#4b3421",o.fill();const y=o.createLinearGradient(_,m,_,m+g);y.addColorStop(0,"rgba(214,180,132,.18)"),y.addColorStop(.5,"rgba(80,55,30,0)"),y.addColorStop(1,"rgba(0,0,0,.25)"),o.fillStyle=y,o.fill();for(let A=0;A<3;A++){o.strokeStyle=a()>.4?"rgba(38,31,21,.18)":"rgba(190,196,138,.08)",o.lineWidth=S(a,1,3),o.beginPath();const R=_+a()*f;o.moveTo(R,m+2),o.lineTo(R+S(a,-4,4),m+g-2),o.stroke()}o.fillStyle="rgba(10,8,5,.4)",o.fillRect(_,m+g-3,f,3)}}for(let u=0;u<30;u++)o.beginPath(),o.fillStyle="rgba(96,104,60,.13)",o.ellipse(a()*s,a()*r,S(a,3,15),S(a,1,5),a()*We,0,We),o.fill();li(o,s,r,a,.07)},{repeat:n})}function U2(i={}){const{size:e=1024,seed:t=31,repeat:n=[14,14]}=i,s=e,r=e;return bn(s,r,o=>{const a=Ht(t);o.fillStyle="#3b3324",o.fillRect(0,0,s,r);for(let l=0;l<230;l++){const u=a()*s,d=a()*r,f=S(a,16,120),h=o.createRadialGradient(u,d,0,u,d,f),p=a(),_=p>.72?"97,103,53":p>.42?"54,48,31":"88,64,39";h.addColorStop(0,`rgba(${_},${S(a,.1,.34)})`),h.addColorStop(1,`rgba(${_},0)`),o.fillStyle=h,o.fillRect(u-f,d-f,f*2,f*2)}const c=["#8a5227","#a8672c","#6f4525","#b98641","#5b4925","#7c6b35"];for(let l=0;l<2600;l++){const u=a()*s,d=a()*r,f=S(a,2,7);o.save(),o.translate(u,d),o.rotate(a()*We),o.globalAlpha=S(a,.25,.8),o.fillStyle=Ri(a,c),o.beginPath(),o.ellipse(0,0,f,f*.42,0,0,We),o.fill(),o.restore()}for(let l=0;l<220;l++){const u=a()*s,d=a()*r,f=S(a,1,4);o.fillStyle=a()>.5?"rgba(120,117,104,.4)":"rgba(70,68,60,.5)",o.beginPath(),o.ellipse(u,d,f,f*.75,a()*We,0,We),o.fill()}for(let l=0;l<1800;l++){const u=a()*s,d=a()*r;o.strokeStyle=a()>.5?"rgba(98,77,43,.4)":"rgba(47,39,24,.55)",o.lineWidth=S(a,.4,1.2),o.beginPath(),o.moveTo(u,d),o.lineTo(u+S(a,-8,8),d+S(a,-8,8)),o.stroke()}li(o,s,r,a,.08)},{repeat:n})}function F2(i={}){const{size:e=512,seed:t=44,repeat:n=[1,6]}=i,s=e,r=e;return bn(s,r,o=>{const a=Ht(t);o.fillStyle="#4a4235",o.fillRect(0,0,s,r);for(let c=0;c<130;c++){const l=a()*s,u=a()*r,d=S(a,12,46),f=d*S(a,.5,1.1);o.save(),o.translate(l,u),o.rotate(a()*We),o.beginPath(),o.ellipse(0,0,d,f,0,0,We);const h=a();o.fillStyle=h>.7?"#6c6253":h>.35?"#575044":"#7c7362",o.fill(),o.strokeStyle="rgba(28,24,18,.5)",o.lineWidth=S(a,1,3),o.stroke(),o.beginPath(),o.arc(-d*.25,-f*.3,Math.min(d,f)*.55,0,We),o.fillStyle="rgba(230,220,196,.07)",o.fill(),o.restore()}for(let c=0;c<60;c++)o.fillStyle="rgba(69,81,42,.2)",o.beginPath(),o.ellipse(a()*s,a()*r,S(a,3,14),S(a,1,4),a()*We,0,We),o.fill();li(o,s,r,a,.07)},{repeat:n})}function O2(i={}){const{size:e=128,seed:t=5,tint:n="#d8d0b4"}=i;return bn(e,e,(s,r,o)=>{const a=Ht(t);s.clearRect(0,0,r,o);const c=s.createLinearGradient(r*.2,o*.1,r*.8,o*.9);c.addColorStop(0,"#f0ead8"),c.addColorStop(1,n),s.fillStyle=c,s.beginPath();const l=r/2;s.moveTo(l,4),s.bezierCurveTo(r*.9,o*.2,r*.96,o*.72,l,o-6),s.bezierCurveTo(r*.04,o*.72,r*.1,o*.2,l,4),s.fill(),s.strokeStyle="rgba(70,52,26,.28)",s.lineWidth=2,s.beginPath(),s.moveTo(l,o*.08),s.lineTo(l,o*.94),s.stroke();for(let u=0;u<6;u++){const d=.2+u*.13;s.beginPath(),s.lineWidth=1.2,s.globalAlpha=.7,s.moveTo(l,o*d),s.lineTo(l-r*.28*(1-d*.4),o*(d+.1)),s.moveTo(l,o*d),s.lineTo(l+r*.28*(1-d*.4),o*(d+.1)),s.stroke()}s.globalAlpha=1;for(let u=0;u<20;u++)s.fillStyle="rgba(90,70,30,.12)",s.beginPath(),s.arc(a()*r,a()*o,S(a,.5,2),0,We),s.fill()},{srgb:!0,wrapS:on,wrapT:on})}function z2(i={}){const{size:e=64,color:t="#f3c9d1"}=i;return bn(e,e,(n,s,r)=>{n.clearRect(0,0,s,r),n.save(),n.translate(s/2,r/2);const o=n.createRadialGradient(0,0,2,0,0,s*.42);o.addColorStop(0,"#fff7f0"),o.addColorStop(.7,t),o.addColorStop(1,t),n.fillStyle=o;for(let a=0;a<5;a++)n.rotate(We/5),n.beginPath(),n.ellipse(0,-s*.2,s*.13,s*.22,0,0,We),n.fill();n.restore()},{wrapS:on,wrapT:on})}function ol(i={}){const{size:e=256,color:t="#d8cbb2",repeat:n=[2,2],seed:s=2}=i;return bn(e,e,(r,o,a)=>{const c=Ht(s);r.fillStyle=t,r.fillRect(0,0,o,a);for(let l=0;l<o;l+=3)r.globalAlpha=.06,r.fillStyle=l%6?"#ffffff":"#000000",r.fillRect(l,0,1,a);for(let l=0;l<a;l+=3)r.globalAlpha=.06,r.fillStyle=l%6?"#000000":"#ffffff",r.fillRect(0,l,o,1);r.globalAlpha=1;for(let l=0;l<900;l++)r.fillStyle=c()>.5?"rgba(255,255,255,.05)":"rgba(0,0,0,.045)",r.fillRect(c()*o,c()*a,S(c,1,9),1);li(r,o,a,c,.03)},{repeat:n})}function B2(i={}){const{w:e=256,h:t=512,seed:n=23}=i;return bn(e,t,s=>{const r=Ht(n);s.clearRect(0,0,e,t);for(let a=0;a<400;a++){const c=S(r,.02,.12);s.fillStyle=`rgba(235,245,255,${c})`,s.beginPath(),s.arc(r()*e,r()*t,S(r,.5,2.5),0,We),s.fill()}for(let a=0;a<130;a++){const c=r()*e,l=r()*t,u=S(r,8,78),d=s.createLinearGradient(c,l,c,l+u);d.addColorStop(0,"rgba(220,237,250,0.02)"),d.addColorStop(.4,"rgba(235,248,255,.22)"),d.addColorStop(1,"rgba(210,232,246,0.02)"),s.strokeStyle=d,s.lineWidth=S(r,.6,2),s.beginPath(),s.moveTo(c,l),s.quadraticCurveTo(c+S(r,-3,3),l+u*.6,c,l+u),s.stroke(),s.fillStyle="rgba(240,250,255,.35)",s.beginPath(),s.ellipse(c,l+u,S(r,1,2.4),S(r,1,3.2),0,0,We),s.fill()}const o=s.createLinearGradient(0,t*.6,0,t);o.addColorStop(0,"rgba(230,245,255,0)"),o.addColorStop(1,"rgba(230,245,255,.15)"),s.fillStyle=o,s.fillRect(0,0,e,t)},{wrapS:on,wrapT:on})}function k2(i={}){const{size:e=128,inner:t="rgba(255,244,214,1)",mid:n="rgba(255,178,86,.5)"}=i;return bn(e,e,(s,r,o)=>{const a=s.createRadialGradient(r/2,o/2,0,r/2,o/2,r/2);a.addColorStop(0,t),a.addColorStop(.25,n),a.addColorStop(1,"rgba(255,120,30,0)"),s.fillStyle=a,s.fillRect(0,0,r,o)},{srgb:!0,wrapS:on,wrapT:on})}function Ur(i={}){const{size:e=128,color:t="255,255,255"}=i;return bn(e,e,(n,s,r)=>{const o=n.createRadialGradient(s/2,r/2,0,s/2,r/2,s/2);o.addColorStop(0,`rgba(${t},1)`),o.addColorStop(.35,`rgba(${t},.65)`),o.addColorStop(.75,`rgba(${t},.16)`),o.addColorStop(1,`rgba(${t},0)`),n.fillStyle=o,n.fillRect(0,0,s,r)},{srgb:!0,wrapS:on,wrapT:on})}function uh(i={}){const{size:e=128,seed:t=12}=i;return bn(e,e,(n,s,r)=>{const o=Ht(t);n.clearRect(0,0,s,r);for(let a=0;a<22;a++){const c=s*(.25+o()*.5),l=r*(.25+o()*.5),u=S(o,s*.08,s*.3),d=n.createRadialGradient(c,l,0,c,l,u);d.addColorStop(0,"rgba(255,255,255,.22)"),d.addColorStop(.6,"rgba(255,255,255,.08)"),d.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=d,n.fillRect(0,0,s,r)}},{srgb:!0,wrapS:on,wrapT:on})}function G2(i={}){const{size:e=128}=i;return bn(e,e,(t,n,s)=>{t.clearRect(0,0,n,s);const r=t.createRadialGradient(n/2,s*.65,0,n/2,s*.6,n*.46);r.addColorStop(0,"rgba(255,255,238,.98)"),r.addColorStop(.28,"rgba(255,214,122,.92)"),r.addColorStop(.62,"rgba(255,138,44,.45)"),r.addColorStop(1,"rgba(255,95,20,0)"),t.fillStyle=r,t.beginPath(),t.moveTo(n/2,s*.04),t.bezierCurveTo(n*.75,s*.32,n*.88,s*.62,n*.72,s*.92),t.bezierCurveTo(n*.58,s*1.02,n*.42,s*1.02,n*.28,s*.92),t.bezierCurveTo(n*.12,s*.62,n*.25,s*.32,n/2,s*.04),t.fill()},{srgb:!0,wrapS:on,wrapT:on})}function H2(i={}){const{size:e=512,seed:t=41}=i;return bn(e,e,(n,s,r)=>{const o=Ht(t);n.fillStyle="#172022",n.fillRect(0,0,s,r);for(let a=0;a<16;a++){const c=s*o(),l=r*o(),u=n.createRadialGradient(c,l,0,c,l,S(o,20,120));u.addColorStop(0,"rgba(190,215,210,.22)"),u.addColorStop(1,"rgba(20,60,70,0)"),n.fillStyle=u,n.fillRect(0,0,s,r)}for(let a=0;a<30;a++){n.beginPath(),n.strokeStyle=`rgba(220,235,225,${S(o,.04,.15)})`,n.lineWidth=1;const c=o()*s,l=o()*r;n.ellipse(c,l,S(o,20,90),S(o,3,16),0,0,We),n.stroke()}li(n,s,r,o,.02)},{repeat:[1,1]})}function V2(i={}){return new sn({roughness:.85,metalness:0,...i})}function X0(i,e,t,n=new L(.3,.5,.2)){const o=n.clone().normalize();return bn(512,256,(a,c,l)=>{const u=a.createLinearGradient(0,0,0,l);u.addColorStop(0,i),u.addColorStop(.62,e),u.addColorStop(.78,e),u.addColorStop(1,"#181410"),a.fillStyle=u,a.fillRect(0,0,c,l);const d=(Math.atan2(o.z,o.x)/We+.5)*c,f=(.5-Math.asin(vn(o.y,-1,1))/Math.PI)*l,h=a.createRadialGradient(d,f,0,d,f,c*.18);h.addColorStop(0,"rgba(255,244,214,.95)"),h.addColorStop(.06,"rgba(255,226,168,.65)"),h.addColorStop(.4,"rgba(255,190,120,.18)"),h.addColorStop(1,"rgba(255,180,100,0)"),a.fillStyle=h,a.fillRect(0,0,c,l);const p=Ht(61);for(let _=0;_<40;_++){const m=p()*c,g=l*(.18+p()*.28),b=S(p,30,130),T=S(p,3,16),y=a.createRadialGradient(m,g,0,m,g,b);y.addColorStop(0,"rgba(160,150,140,.12)"),y.addColorStop(1,"rgba(160,150,140,0)"),a.fillStyle=y,a.save(),a.translate(m,g),a.scale(1,T/b),a.beginPath(),a.arc(0,0,b,0,We),a.fill(),a.restore()}},{srgb:!0,wrapS:Ro,wrapT:on})}const W2=Math.PI/180,X2={spring:48,summer:61,autumn:41,winter:31},Y2=[{h:0,top:"#081525",horizon:"#142536",sun:"#6a7fa8",hemiSky:"#132239",hemiGround:"#0a0b08",fog:"#0b1420",hemiInt:.33,sunInt:0,exposure:1.24},{h:4.6,top:"#0a1828",horizon:"#192a3a",sun:"#7789ad",hemiSky:"#152338",hemiGround:"#0c0d09",fog:"#0d1622",hemiInt:.32,sunInt:0,exposure:1.22},{h:5.8,top:"#1b3048",horizon:"#55545a",sun:"#c79d83",hemiSky:"#293647",hemiGround:"#211d16",fog:"#3d4046",hemiInt:.44,sunInt:.12,exposure:1.1},{h:6.55,top:"#314b68",horizon:"#cf8c61",sun:"#ffc086",hemiSky:"#5d6a77",hemiGround:"#3a3125",fog:"#8a7f72",hemiInt:.62,sunInt:.34,exposure:1.02},{h:8.2,top:"#3f6993",horizon:"#cbc6b2",sun:"#ffe4b8",hemiSky:"#9ab1c6",hemiGround:"#4b4634",fog:"#b1b3aa",hemiInt:.92,sunInt:.82,exposure:.94},{h:12.5,top:"#3a6b99",horizon:"#d3d5c9",sun:"#fff4e0",hemiSky:"#bdd3e4",hemiGround:"#5d5744",fog:"#c2c9c4",hemiInt:1.04,sunInt:1,exposure:.85},{h:15.8,top:"#4a7195",horizon:"#d8c4a8",sun:"#ffdfa8",hemiSky:"#a5b7c6",hemiGround:"#635540",fog:"#c0bdae",hemiInt:.96,sunInt:.9,exposure:.9},{h:17.3,top:"#385676",horizon:"#e6b27a",sun:"#ffc47c",hemiSky:"#8496a8",hemiGround:"#594832",fog:"#b39c81",hemiInt:.82,sunInt:.66,exposure:.97},{h:18.15,top:"#293f5c",horizon:"#f2a061",sun:"#ffa055",hemiSky:"#6b7d90",hemiGround:"#4f3d29",fog:"#a2856b",hemiInt:.68,sunInt:.33,exposure:1.03},{h:18.9,top:"#1b2d44",horizon:"#c47a5e",sun:"#f08a5c",hemiSky:"#3c5066",hemiGround:"#2a231b",fog:"#735f52",hemiInt:.53,sunInt:.06,exposure:1.09},{h:19.9,top:"#0f2032",horizon:"#283847",sun:"#837d86",hemiSky:"#1d2c3f",hemiGround:"#13130f",fog:"#1f2a34",hemiInt:.4,sunInt:0,exposure:1.17},{h:21.4,top:"#081626",horizon:"#142536",sun:"#6b7fa4",hemiSky:"#132239",hemiGround:"#0a0b08",fog:"#0c1520",hemiInt:.33,sunInt:0,exposure:1.24},{h:24,top:"#081525",horizon:"#142536",sun:"#6a7fa8",hemiSky:"#132239",hemiGround:"#0a0b08",fog:"#0b1420",hemiInt:.33,sunInt:0,exposure:1.24}],wr=Y2.map(i=>({...i,top:new ke(i.top),horizon:new ke(i.horizon),sun:new ke(i.sun),hemiSky:new ke(i.hemiSky),hemiGround:new ke(i.hemiGround),fog:new ke(i.fog)})),Bf={spring:{hue:-.008,sat:1,sunHue:.004,sunSat:.92,sunLight:1.04,exposure:1,fog:1.04},summer:{hue:.002,sat:1.07,sunHue:.004,sunSat:1.02,sunLight:1.02,exposure:.97,fog:.92},autumn:{hue:.012,sat:1.04,sunHue:.02,sunSat:1.15,sunLight:.99,exposure:1,fog:1.12},winter:{hue:-.02,sat:.7,sunHue:-.005,sunSat:.66,sunLight:1.1,exposure:1.04,fog:1.22}},kf={clear:{overcast:0,sunMul:1,hemiMul:1,cloud:.44,cloudOpacity:.55,fogMul:1,rain:0,snow:0,mist:0,dust:1},rain:{overcast:.72,sunMul:.18,hemiMul:.78,cloud:.8,cloudOpacity:.92,fogMul:2.1,rain:1,snow:0,mist:.5,dust:0},snow:{overcast:.56,sunMul:.3,hemiMul:.9,cloud:.72,cloudOpacity:.82,fogMul:1.8,rain:0,snow:1,mist:.25,dust:0},fog:{overcast:.74,sunMul:.22,hemiMul:.86,cloud:.62,cloudOpacity:.7,fogMul:5.2,rain:0,snow:0,mist:1,dust:0},storm:{overcast:.94,sunMul:.06,hemiMul:.62,cloud:.97,cloudOpacity:1,fogMul:3.3,rain:1,snow:0,mist:.6,dust:0}},q2=new ke("#98a1a4"),Z2=new ke("#10151d"),$2=new ke("#e4eef3"),K2=new ke("#b8c0be"),J2=new ke("#1a2026");function Cs(i,e,t,n){return $i(i,e,1-Math.exp(-t*n))}function hr(i,e,t,n){const s=1-Math.exp(-t*n);i.lerp(e,s)}function Q2(i){const e=(i%24+24)%24;let t=wr[0],n=wr[1];for(let r=0;r<wr.length-1;r++)if(e>=wr[r].h&&e<=wr[r+1].h){t=wr[r],n=wr[r+1];break}const s=n.h-t.h||1;return{a:t,b:n,t:vn((e-t.h)/s,0,1)}}const j2=`
  varying vec3 vWorldPosition;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorldPosition = world.xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,ex=`
  precision highp float;
  uniform vec3 uTopColor;
  uniform vec3 uHorizonColor;
  uniform vec3 uGroundColor;
  uniform vec3 uFogColor;
  uniform vec3 uSunColor;
  uniform vec3 uCloudLight;
  uniform vec3 uCloudShadow;
  uniform vec3 uSunDir;
  uniform vec3 uMoonDir;
  uniform float uTime;
  uniform float uCloudCover;
  uniform float uCloudOpacity;
  uniform float uStarStrength;
  uniform float uMoonStrength;
  uniform float uFlash;
  uniform float uSunVisibility;
  uniform float uStorminess;
  varying vec3 vWorldPosition;

  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }
  float vnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash21(i);
    float b = hash21(i + vec2(1.0, 0.0));
    float c = hash21(i + vec2(0.0, 1.0));
    float d = hash21(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }
  float fbm5(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * vnoise(p);
      p = p * 2.03 + vec2(17.3, 9.2);
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec3 dir = normalize(vWorldPosition - cameraPosition);
    float altitude = clamp(dir.y, -0.15, 1.0);
    float up = clamp(altitude, 0.0, 1.0);

    // Atmosphere gradient.
    vec3 col = mix(uHorizonColor, uTopColor, pow(up, 0.52));
    col = mix(uGroundColor, col, smoothstep(-0.02, 0.16, altitude));
    // Haze band hugging the treeline.
    col = mix(col, uFogColor, smoothstep(0.18, -0.01, altitude) * 0.52);

    // Sun disc & glow.
    float mu = max(dot(dir, uSunDir), 0.0);
    float disk = smoothstep(0.99955, 0.99982, mu);
    float glow = pow(mu, 18.0) * 0.4 + pow(mu, 220.0) * 1.4;
    float belowHaze = smoothstep(-0.06, 0.02, uSunDir.y);
    col += uSunColor * (disk * 5.2 + glow * 2.4) * uSunVisibility * belowHaze;

    // Moon disc & glow.
    float mmu = max(dot(dir, uMoonDir), 0.0);
    float moonDisk = smoothstep(0.99978, 0.99992, mmu);
    float moonGlow = pow(mmu, 30.0) * 0.22 + pow(mmu, 300.0) * 0.6;
    col += vec3(0.72, 0.78, 0.9) * (moonDisk * 3.4 + moonGlow) * uMoonStrength;

    // Stars (cell noise on the sky sphere).
    vec2 sph = vec2(atan(dir.z, dir.x), asin(clamp(dir.y, -1.0, 1.0)));
    vec2 grid = sph * vec2(245.0, 150.0);
    vec2 cell = floor(grid);
    vec2 local = fract(grid) - 0.5;
    float rnd = hash21(cell);
    float star = smoothstep(0.18, 0.015, length(local)) * step(0.955, rnd);
    float twinkle = 0.72 + 0.28 * sin(uTime * 1.7 + rnd * 53.0);
    float starMask = smoothstep(0.015, 0.16, altitude) * (1.0 - smoothstep(0.35, 0.85, uCloudCover));
    col += vec3(0.78, 0.85, 1.0) * star * twinkle * uStarStrength * 1.15 * starMask;

    // Clouds painted in perspective on a virtual plane.
    float skyMask = smoothstep(0.01, 0.13, altitude);
    vec2 cuv = dir.xz / (max(altitude, 0.015) + 0.11) * 0.65;
    cuv += vec2(uTime * 0.0045, uTime * 0.0016);
    float n1 = fbm5(cuv * 1.35);
    float n2 = fbm5(cuv * 2.7 + vec2(8.0, -3.0));
    float density = n1 * 0.7 + n2 * 0.3;
    float coverage = smoothstep(1.0 - uCloudCover, 1.0 - uCloudCover + 0.22, density);
    coverage *= skyMask;
    float silver = pow(max(dot(dir, uSunDir), 0.0), 4.0);
    vec3 cloudCol = mix(uCloudShadow, uCloudLight, smoothstep(0.28, 0.78, density));
    cloudCol = mix(cloudCol, uSunColor, silver * 0.22);
    col = mix(col, cloudCol, coverage * uCloudOpacity);

    // Storm flash lightens the entire lower sky.
    col += uFlash * vec3(0.34, 0.4, 0.52) * (0.25 + up * 0.75);

    // Gentle dithering to prevent banding in the dusk gradient.
    float dither = (hash21(gl_FragCoord.xy + uTime) - 0.5) / 255.0;
    col += dither;
    gl_FragColor = vec4(col, 1.0);
  }
`;function tx({scene:i,renderer:e,camera:t}){const n=new Qt;n.name="environment",i.add(n);const s=new gi(400,48,28),r={uTopColor:{value:new ke("#4a617e")},uHorizonColor:{value:new ke("#e5b47f")},uGroundColor:{value:new ke("#2b241b")},uFogColor:{value:new ke("#bea88c")},uSunColor:{value:new ke("#ffc47c")},uCloudLight:{value:new ke("#f0c99f")},uCloudShadow:{value:new ke("#5a5560")},uSunDir:{value:new L(.5,.1,.85).normalize()},uMoonDir:{value:new L(-.5,.6,-.4).normalize()},uTime:{value:0},uCloudCover:{value:.26},uCloudOpacity:{value:.5},uStarStrength:{value:0},uMoonStrength:{value:0},uFlash:{value:0},uSunVisibility:{value:1},uStorminess:{value:0}},o=new Mi({uniforms:r,vertexShader:j2,fragmentShader:ex,side:zi,depthWrite:!1,depthTest:!0,fog:!1}),a=new Ot(s,o);a.name="sky",a.frustumCulled=!1,a.renderOrder=-100,n.add(a);const c=new Ec("#ffc47c",3.2);c.name="sun-light",c.castShadow=!0,c.shadow.mapSize.set(2048,2048),c.shadow.camera.left=-17,c.shadow.camera.right=17,c.shadow.camera.top=17,c.shadow.camera.bottom=-17,c.shadow.camera.near=1,c.shadow.camera.far=80,c.shadow.bias=-25e-5,c.shadow.normalBias=.035,c.target.position.set(0,1,.8),i.add(c,c.target);const l=new Ec("#9db4d9",0);l.name="moon-light",l.castShadow=!0,l.shadow.mapSize.set(1024,1024),l.shadow.camera.left=-17,l.shadow.camera.right=17,l.shadow.camera.top=17,l.shadow.camera.bottom=-17,l.shadow.camera.near=1,l.shadow.camera.far=80,l.shadow.bias=-3e-4,l.shadow.normalBias=.04,l.target.position.set(0,1,.8),l.visible=!1,i.add(l,l.target);const u=new _m("#9dacba","#635540",.93);u.name="sky-fill",i.add(u);const d=new Ec("#d8b18a",.36);d.name="bounce",d.position.set(-8,3.4,-7),i.add(d);const f=new bm("#5a6673",.16);i.add(f);const h=new nh(new ke("#bea88c"),.0115);i.fog=h;const p=new Qt;p.name="weather-particles",n.add(p);const _=2100,m=new Float32Array(_*6),g=[],b=Ht(401);for(let z=0;z<_;z++)g.push({x:(b()-.5)*34,y:b()*16,z:(b()-.5)*34,speed:13+b()*9,len:.35+b()*.55});const T=new Pn;T.setAttribute("position",new Vn(m,3));const y=new x0({color:"#b9cbdc",transparent:!0,opacity:0,depthWrite:!1,blending:Pi,fog:!1}),A=new Lp(T,y);A.frustumCulled=!1,A.visible=!1,p.add(A);function R(z,H,E,ue){const Pe=Ht(ue),C=new Float32Array(z*3),v=[];for(let Ge=0;Ge<z;Ge++)C[Ge*3]=(Pe()-.5)*34,C[Ge*3+1]=Pe()*16,C[Ge*3+2]=(Pe()-.5)*34,v.push({fall:.45+Pe()*.8,drift:Pe()*We,sway:.25+Pe()*.55});const G=new Pn;G.setAttribute("position",new Vn(C,3));const re=new Dr({size:H,map:Ur({color:"255,255,255"}),transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,color:"#f4f4ef",fog:!1,alphaTest:.02}),ge=new To(G,re);return ge.frustumCulled=!1,ge.visible=!1,p.add(ge),{points:ge,positions:C,speeds:v,geo:G,mat:re,targetOpacity:0,baseOpacity:E,rng:Pe}}const F=[R(1250,.13,.9,89),R(260,.31,.55,111)],x=uh({size:256,seed:73}),P=[],N=Ht(701);for(let z=0;z<15;z++){const H=new Br({map:x,color:"#c7ccc5",transparent:!0,opacity:0,depthWrite:!1,depthTest:!0,fog:!1}),E=new wo(H),ue=N()*We,Pe=6+N()*22;E.position.set(Math.cos(ue)*Pe,.45+N()*1.4,Math.sin(ue)*Pe),E.scale.set(11+N()*12,3+N()*2.5,1),E.userData={phase:N()*We,speed:.02+N()*.04,baseY:E.position.y,orbit:Pe,angle:ue},E.visible=!1,p.add(E),P.push({sprite:E,mat:H})}const k=150,V=new Float32Array(k*3),te=[],X=Ht(912);for(let z=0;z<k;z++){const H=(X()-.5)*20,E=.5+X()*3.2,ue=(X()-.5)*20;V[z*3]=H,V[z*3+1]=E,V[z*3+2]=ue,te.push({x:H,y:E,z:ue,phase:X()*We,speed:.06+X()*.14})}const j=new Pn;j.setAttribute("position",new Vn(V,3));const Se=new Dr({size:.035,map:Ur({color:"255,238,200"}),color:"#ffe3b0",transparent:!0,opacity:0,depthWrite:!1,blending:Pi,sizeAttenuation:!0,fog:!1,alphaTest:.02}),oe=new To(j,Se);oe.frustumCulled=!1,oe.visible=!1,p.add(oe);let Re=4+Math.random()*4,xe=-1,Te=0;const de=new Ru(e);de.compileEquirectangularShader();let tt=null,Mt="",Wt=-10;i.environmentIntensity=.58;const Y={top:new ke("#4a617e"),horizon:new ke("#e5b47f"),sunColor:new ke("#ffc47c"),hemiSky:new ke("#7f8c99"),hemiGround:new ke("#594832"),fogColor:new ke("#bea88c"),cloudLight:new ke("#f0c99f"),cloudShadow:new ke("#5a5560"),hemiInt:.8,sunInt:.66,exposure:.97,fogDensity:.0115,rain:0,snow:0,mist:0,dust:0,cloudCover:.26,cloudOpacity:.5,starStrength:0,moonStrength:0,cloudCoverCurrent:.26,initialized:!1,sunDir:new L,moonDir:new L,daylight:1,overcast:0,weatherLabel:"clear",interior:!1},st={top:new ke,horizon:new ke,sunColor:new ke,hemiSky:new ke,hemiGround:new ke,fogColor:new ke,cloudLight:new ke,cloudShadow:new ke,grayA:new ke,grayB:new ke,tmpA:new ke,tmpB:new ke,sunDir:new L,moonDir:new L};let be=0;function Oe(z){const H=((Number(z?.hour)||0)%24+24)%24,E=z?.season||"autumn",ue=z?.weather||"clear",Pe=Bf[E]||Bf.autumn,C=kf[ue]||kf.clear,v=Q2(H);st.top.copy(v.a.top).lerp(v.b.top,v.t),st.horizon.copy(v.a.horizon).lerp(v.b.horizon,v.t),st.sunColor.copy(v.a.sun).lerp(v.b.sun,v.t),st.hemiSky.copy(v.a.hemiSky).lerp(v.b.hemiSky,v.t),st.hemiGround.copy(v.a.hemiGround).lerp(v.b.hemiGround,v.t),st.fogColor.copy(v.a.fog).lerp(v.b.fog,v.t);const G=$i(v.a.hemiInt,v.b.hemiInt,v.t),re=$i(v.a.sunInt,v.b.sunInt,v.t),ge=$i(v.a.exposure,v.b.exposure,v.t);for(const Bt of[st.top,st.horizon,st.hemiSky,st.hemiGround,st.fogColor])Bt.offsetHSL(Pe.hue,Pe.sat-1,0);st.sunColor.offsetHSL(Pe.sunHue,Pe.sunSat-1,0);const Ge=6.15,we=(H-Ge)/(18.35-Ge),Ae=(X2[E]||41)*W2,rt=Math.sin(we*Math.PI)*Ae,Nt=we*Math.PI;st.sunDir.set(-Math.cos(Nt)*Math.cos(rt),Math.sin(rt),Math.sin(Nt)*Math.cos(rt)).normalize(),st.moonDir.set(-st.sunDir.x,Math.max(.22,-st.sunDir.y),-st.sunDir.z).normalize();const nt=cs(-.035,.14,st.sunDir.y),Fe=C.overcast,Ct=st.grayA.copy(Z2).lerp(q2,nt),ut=st.grayB.copy(J2).lerp(K2,nt);st.top.lerp(Ct,Fe*.72),st.horizon.lerp(Ct,Fe*.62),st.hemiSky.lerp(Ct,Fe*.58),st.hemiGround.lerp(ut,Fe*.35),st.fogColor.lerp(ut,Fe*.62),st.sunColor.lerp($2,Fe*.8),ue==="storm"&&st.sunColor.lerp(new ke("#b9c7d3"),.4),st.cloudLight.copy(st.horizon).lerp(st.sunColor,.32+nt*.2),st.cloudShadow.copy(st.top).multiplyScalar(.74).lerp(st.fogColor,.22);const Vt=vn(1-Fe*.96,0,1)*cs(-.05,.02,st.sunDir.y),ee=4.35*re*C.sunMul*(.55+nt*.45),je=G*C.hemiMul*(.92+nt*.14)+Fe*.05,ze=ge*Pe.exposure*(1+Fe*.13),St=((.0072+(1-nt)*.0016)*C.fogMul+(ue==="storm"?.012:0))*Pe.fog,Et=vn((1-nt*2.1)*(1-Fe*.92),0,1),qe=vn((1-nt)*(1-Fe*.9),0,1)*.9;return{hour:H,season:E,weather:ue,sunDir:st.sunDir,moonDir:st.moonDir,daylight:nt,overcast:Fe,sunVisibility:Vt,sunInt:ee,hemiInt:je,exposure:ze,fogDensity:St,starStrength:Et,moonStrength:qe,cloudCover:C.cloud,cloudOpacity:C.cloudOpacity,rain:C.rain,snow:C.snow,mist:C.mist,dust:C.dust,colors:st}}function Ze(z){const H=Y.initialized?3.2:999;hr(Y.top,st.top,H,z),hr(Y.horizon,st.horizon,H,z),hr(Y.sunColor,st.sunColor,H,z),hr(Y.hemiSky,st.hemiSky,H,z),hr(Y.hemiGround,st.hemiGround,H,z),hr(Y.fogColor,st.fogColor,H*.8,z),hr(Y.cloudLight,st.cloudLight,H,z),hr(Y.cloudShadow,st.cloudShadow,H,z),Y.hemiInt=Y.initialized?Cs(Y.hemiInt,J.hemiInt,2.6,z):J.hemiInt,Y.sunInt=Y.initialized?Cs(Y.sunInt,J.sunInt,2.6,z):J.sunInt,Y.exposure=Y.initialized?Cs(Y.exposure,J.exposure,2.2,z):J.exposure,Y.fogDensity=Y.initialized?Cs(Y.fogDensity,J.fogDensity,1.7,z):J.fogDensity,Y.starStrength=J.starStrength,Y.moonStrength=J.moonStrength,Y.rain=Y.initialized?Cs(Y.rain,J.rain,1.6,z):J.rain,Y.snow=Y.initialized?Cs(Y.snow,J.snow,1.6,z):J.snow,Y.mist=Y.initialized?Cs(Y.mist,J.mist,1.2,z):J.mist,Y.dust=Y.initialized?Cs(Y.dust,J.dust,1.2,z):J.dust,Y.cloudCover=Y.initialized?Cs(Y.cloudCover,J.cloudCover,1.2,z):J.cloudCover,Y.cloudOpacity=Y.initialized?Cs(Y.cloudOpacity,J.cloudOpacity,1.2,z):J.cloudOpacity,Y.overcast=J.overcast,Y.daylight=J.daylight,Y.weatherLabel=J.weather,Y.sunDir.copy(J.sunDir),Y.moonDir.copy(J.moonDir),J.colors=st}let J=null;function Ve(){const z=r;z.uTopColor.value.copy(Y.top),z.uHorizonColor.value.copy(Y.horizon),z.uGroundColor.value.copy(Y.fogColor).multiplyScalar(.48),z.uFogColor.value.copy(Y.fogColor),z.uSunColor.value.copy(Y.sunColor),z.uCloudLight.value.copy(Y.cloudLight),z.uCloudShadow.value.copy(Y.cloudShadow),z.uSunDir.value.copy(Y.sunDir),z.uMoonDir.value.copy(Y.moonDir),z.uTime.value=be,z.uCloudCover.value=Y.cloudCover,z.uCloudOpacity.value=Y.cloudOpacity,z.uStarStrength.value=Y.starStrength,z.uMoonStrength.value=Y.moonStrength,z.uSunVisibility.value=J?.sunVisibility??1,z.uStorminess.value=Y.overcast,z.uFlash.value=Te}function Ke(){const z={x:0,y:1,z:1.2},H=Y.sunDir;c.position.set(z.x+H.x*44,z.y+Math.max(.02,H.y)*44,z.z+H.z*44),c.target.position.set(z.x,z.y,z.z),c.color.copy(Y.sunColor),c.intensity=Y.sunInt,c.castShadow=Y.daylight>.05&&Y.sunInt>.12,c.visible=Y.sunInt>.002,c.shadow.autoUpdate=!0;const E=Y.moonDir;l.position.set(z.x+E.x*40,z.y+E.y*40,z.z+E.z*40),l.target.position.set(z.x,z.y,z.z),l.intensity=Y.moonStrength*1.05,l.castShadow=Y.moonStrength>.25&&Y.daylight<.2,l.visible=Y.moonStrength>.02,u.color.copy(Y.hemiSky),u.groundColor.copy(Y.hemiGround),u.intensity=Y.hemiInt+Te*1.6,d.color.copy(Y.horizon),d.intensity=.28+Y.daylight*.34+Y.overcast*.03,d.position.set(-Y.sunDir.x*12,3.2,-Y.sunDir.z*12),f.color.copy(Y.fogColor),f.intensity=.14+Y.daylight*.06+Te*.9,h.color.copy(Y.fogColor),h.density=Y.fogDensity,e.toneMappingExposure=Y.exposure}function yt(z=!1){const H=be;if(!z&&H-Wt<.85)return;const E=[Y.top.getHexString(),Y.horizon.getHexString(),Y.fogColor.getHexString(),Y.sunColor.getHexString(),Y.sunDir.x.toFixed(2),Y.sunDir.y.toFixed(2),Y.sunDir.z.toFixed(2),Y.overcast.toFixed(2),Y.starStrength.toFixed(2)].join("|");if(E===Mt)return;Mt=E,Wt=H;const ue=X0(Y.top.getStyle(),Y.horizon.getStyle(),Y.sunColor.getStyle(),Y.sunDir),Pe=de.fromEquirectangular(ue);ue.dispose(),i.environment=Pe.texture,i.environmentIntensity=.45+(1-Y.overcast)*.2,tt&&tt.dispose(),tt=Pe}const me=new L;function Le(z,H){const E=Y.snow*(Y.interior?0:1);for(const ue of F){if(ue.targetOpacity=ue.baseOpacity*E,ue.mat.opacity=ue.targetOpacity*(E>.02?1:0),ue.points.visible=E>.01,!ue.points.visible)continue;const Pe=ue.positions;for(let C=0;C<ue.speeds.length;C++){const v=ue.speeds[C];Pe[C*3+1]-=v.fall*z*(.8+E*.5),Pe[C*3]+=Math.sin(be*v.sway+v.drift)*z*.32,Pe[C*3+2]+=Math.cos(be*v.sway*.7+v.drift)*z*.22,Pe[C*3+1]<0&&(Pe[C*3+1]=15+Math.random()*3,Pe[C*3]=(Math.random()-.5)*34,Pe[C*3+2]=(Math.random()-.5)*34),Pe[C*3]<-17&&(Pe[C*3]+=34),Pe[C*3]>17&&(Pe[C*3]-=34),Pe[C*3+2]<-17&&(Pe[C*3+2]+=34),Pe[C*3+2]>17&&(Pe[C*3+2]-=34)}ue.geo.attributes.position.needsUpdate=!0,ue.points.position.set(H.x,0,H.z)}}function Be(z,H){const E=Y.rain*(Y.interior?0:1);if(y.opacity=E*(Y.weatherLabel==="storm"?.55:.4),A.visible=E>.01,!A.visible)return;A.position.set(H.x,0,H.z);const ue=1.15+Y.overcast*.75,Pe=.28,C=m;for(let v=0;v<g.length;v++){const G=g[v];G.y-=G.speed*z,G.y<0&&(G.y=14+Math.random()*4,G.x=(Math.random()-.5)*34,G.z=(Math.random()-.5)*34);const re=v*6;C[re]=G.x,C[re+1]=G.y,C[re+2]=G.z,C[re+3]=G.x+ue*G.len*.16,C[re+4]=G.y-G.len,C[re+5]=G.z+Pe*G.len*.16}T.attributes.position.needsUpdate=!0,y.color.copy(Y.fogColor).lerp(new ke("#d7e5f0"),.55+Y.daylight*.2)}function Ye(z){const H=Y.mist*(Y.interior?0:1);for(const E of P){E.sprite.visible=H>.015,E.mat.opacity=.09*H;const ue=E.sprite.userData;ue.phase+=z*ue.speed,E.sprite.position.x=Math.cos(ue.angle+ue.phase*.25)*ue.orbit,E.sprite.position.z=Math.sin(ue.angle+ue.phase*.25)*ue.orbit,E.sprite.position.y=ue.baseY+Math.sin(be*.12+ue.phase)*.25}}function Je(z){const H=Y.dust*Y.daylight*(1-Y.overcast)*.4*(Y.interior?0:1);if(oe.visible=H>.02,Se.opacity=H*.42,!!oe.visible){for(let E=0;E<k;E++){const ue=te[E];ue.y+=z*ue.speed*.12,ue.y>3.9&&(ue.y=.45),V[E*3]=ue.x+Math.sin(be*.18+ue.phase)*.45,V[E*3+1]=ue.y,V[E*3+2]=ue.z+Math.cos(be*.14+ue.phase)*.45}j.attributes.position.needsUpdate=!0}}function bt(z){if(!(Y.weatherLabel==="storm"&&Y.overcast>.55)){Te=Math.max(0,Te-z*6);return}if(xe>=0){xe+=z;const E=xe;let ue=0;E<.07?ue=1:E<.15?ue=.25:E<.23?ue=.75:E<.46?ue=.12:E<.53&&(ue=.35),Te=ue*(.7+Math.random()*.3),E>.65&&(xe=-1,Te=0,Re=3.5+Math.random()*7)}else Re-=z,Re<=0&&(xe=0,Re=5+Math.random()*7),Te=Math.max(0,Te-z*5)}function At(z,H){return z=Math.min(z||.016,.1),be+=z,Y.interior=!!H?.interior,J=Oe(H||{}),Ze(z),bt(z),Ve(),Ke(),a.position.copy(t.position),me.copy(t.position),Be(z,me),Le(z,me),Ye(z),Je(z),yt(!Y.initialized),Y.initialized=!0,Y}return J=Oe({hour:17.2,season:"autumn",weather:"clear"}),Y.top.copy(J.colors.top),Y.horizon.copy(J.colors.horizon),Y.sunColor.copy(J.colors.sunColor),Y.hemiSky.copy(J.colors.hemiSky),Y.hemiGround.copy(J.colors.hemiGround),Y.fogColor.copy(J.colors.fogColor),Y.cloudLight.copy(J.colors.cloudLight),Y.cloudShadow.copy(J.colors.cloudShadow),Y.sunDir.copy(J.sunDir),Y.moonDir.copy(J.moonDir),Y.sunInt=J.sunInt,Y.hemiInt=J.hemiInt,Y.exposure=J.exposure,Y.fogDensity=J.fogDensity,Y.cloudCover=J.cloudCover,Y.cloudOpacity=J.cloudOpacity,Y.starStrength=J.starStrength,Y.moonStrength=J.moonStrength,Y.overcast=J.overcast,Y.daylight=J.daylight,Ve(),Ke(),yt(!0),{group:n,sky:a,sunLight:c,moonLight:l,hemi:u,bounce:d,ambient:f,fog:h,state:Y,update:At,getSunDirection:()=>Y.sunDir.clone(),getMetrics:()=>({daylight:Y.daylight,overcast:Y.overcast,sunElevation:Y.sunDir.y,sunDir:Y.sunDir.clone(),isNight:Y.sunDir.y<-.03,starStrength:Y.starStrength,rain:Y.rain,snow:Y.snow}),forceEnvMapUpdate:()=>yt(!0),dispose(){de.dispose(),tt?.dispose(),s.dispose(),o.dispose(),T.dispose(),y.dispose();for(const z of F)z.geo.dispose(),z.mat.map?.dispose(),z.mat.dispose();j.dispose(),Se.map?.dispose(),Se.dispose(),x.dispose()}}}const Ml={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Oo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const nx=new Hl(-1,1,1,-1,0,1);class ix extends Pn{constructor(){super(),this.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new an([0,2,0,0,2,0],2))}}const sx=new ix;class hh{constructor(e){this._mesh=new Ot(sx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,nx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class rx extends Oo{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Mi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ga.clone(e.uniforms),this.material=new Mi({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new hh(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Gf extends Oo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class ox extends Oo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ax{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new et);this._width=n.width,this._height=n.height,t=new Bi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ki}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new rx(Ml),this.copyPass.material.blending=Ns,this.timer=new Tm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Gf!==void 0&&(o instanceof Gf?n=!0:o instanceof ox&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class lx extends Oo{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ke}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const cx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ke(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class No extends Oo{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new et(e.x,e.y):new et(256,256),this.clearColor=new ke(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Bi(r,o,{type:Ki,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Bi(r,o,{type:Ki,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Bi(r,o,{type:Ki,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=cx;this.highPassUniforms=ga.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Mi({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new et(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ga.clone(Ml.uniforms),this.blendMaterial=new Mi({uniforms:this.copyUniforms,vertexShader:Ml.vertexShader,fragmentShader:Ml.fragmentShader,premultipliedAlpha:!0,blending:Pi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ke,this._oldClearAlpha=1,this._basic=new ns,this._fsQuad=new hh(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new et(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=No.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=No.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);const s=[],r=[];for(let o=1;o<e;o+=2){const a=t[o],c=o+1<e?t[o+1]:0,l=a+c;s.push((o*a+(o+1)*c)/l),r.push(l)}return new Mi({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new et(.5,.5)},direction:{value:new et(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Mi({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}No.BlurDirectionX=new et(1,0);No.BlurDirectionY=new et(0,1);const al={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class ux extends Oo{constructor(){super(),this.isOutputPass=!0,this.uniforms=ga.clone(al.uniforms),this.material=new L0({name:al.name,uniforms:this.uniforms,vertexShader:al.vertexShader,fragmentShader:al.fragmentShader}),this._fsQuad=new hh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},En.getTransfer(this._outputColorSpace)===Fn&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===zu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Bu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ku?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Bl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Hu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Vu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Gu&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function hx({renderer:i,scene:e,camera:t}){const n=new ax(i);n.setPixelRatio(i.getPixelRatio());const s=new lx(e,t);n.addPass(s);const r=new No(new et(window.innerWidth,window.innerHeight),.36,.62,.82);n.addPass(r);const o=new ux;n.addPass(o);function a(u,d,f){n.setPixelRatio(f),n.setSize(u,d),r.resolution.set(u,d)}function c(u){n.render(u)}function l(u){r.strength=u}return{composer:n,bloom:r,output:o,setSize:a,render:c,setBloom:l}}const fx=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);function Tr(i,e,t,n){return rp.lerp(i,e,1-Math.exp(-t*n))}function dx(i,e,t,n){let s=((e-i+Math.PI)%We+We)%We-Math.PI;return i+s*(1-Math.exp(-11*n))}function qs(i,e=.85,t=0){return new sn({color:i,roughness:e,metalness:t})}function px(){const i=new Qt;i.name="player-character";const e=new Qt;i.add(e);const t={coat:qs("#694232",.9),coatDark:qs("#503224",.93),scarf:qs("#b3a079",.96),beanie:qs("#4f574b",.96),skin:qs("#bd8f70",.76),pants:qs("#413d34",.94),boots:qs("#241d17",.76),pack:qs("#594a33",.92),strap:qs("#34291f",.92),brass:new sn({color:"#b08a54",roughness:.38,metalness:.7})};function n(u,d,f,h=0,p=0,_=0){const m=new Ot(d,f);return m.position.set(h,p,_),m.castShadow=!0,m.receiveShadow=!0,u.add(m),m}const s=.91;n(e,new os(.42,.55,.27,4,.09),t.coat,0,1.2,0),n(e,new os(.46,.24,.3,3,.07),t.coatDark,0,.96,0),n(e,new qn(.012,.32,.01),t.strap,0,1.22,.142);for(let u=0;u<3;u++)n(e,new jn(.013,.013,.012,8),t.brass,.05,1.32-u*.13,.15).rotation.x=Math.PI/2;n(e,new ci(.115,.045,7,14),t.scarf,0,1.5,.005).rotation.x=Math.PI/2;const r=n(e,new os(.11,.3,.045,3,.02),t.scarf,.075,1.36,.15);r.rotation.z=.1,n(e,new gi(.115,20,16),t.skin,0,1.65,0),n(e,new gi(.022,8,6),t.skin,0,1.62,.108);const o=n(e,new gi(.123,18,12,0,We,0,Math.PI*.55),t.beanie,0,1.67,-.006);o.rotation.x=.06,n(e,new ci(.117,.022,7,20),t.beanie,0,1.637,0).rotation.x=Math.PI/2,n(e,new gi(.045,10,8),t.beanie,0,1.79,0),n(e,new gi(.024,8,6),t.skin,-.112,1.64,0),n(e,new gi(.024,8,6),t.skin,.112,1.64,0);const a=n(e,new os(.29,.4,.18,4,.055),t.pack,0,1.22,-.2);a.rotation.x=-.06,n(e,new os(.22,.12,.045,2,.02),t.strap,0,1.08,-.27);for(const u of[-1,1])n(e,new os(.045,.36,.035,2,.012),t.strap,u*.135,1.24,.13).rotation.z=u*-.05;const c=[];for(const u of[-1,1]){const d=new Qt;d.position.set(u*.105,s,0),e.add(d);const f=n(d,new vo(.075,.28,4,10),t.pants,0,-.19,0);f.rotation.z=.035;const h=new Qt;h.position.y=-.4,d.add(h),n(h,new vo(.062,.27,4,10),t.pants,0,-.15,.01);const p=n(h,new os(.14,.13,.26,3,.045),t.boots,0,-.34,.045);p.rotation.x=-.02,n(h,new os(.145,.035,.265,2,.012),t.boots,0,-.405,.045),c.push({pivot:d,knee:h,side:u})}const l=[];for(const u of[-1,1]){const d=new Qt;d.position.set(u*.265,1.41,0),e.add(d),d.rotation.z=u*.12,n(d,new vo(.062,.25,4,10),t.coat,0,-.16,0);const f=new Qt;f.position.y=-.32,d.add(f),n(f,new vo(.052,.22,4,10),t.coatDark,0,-.13,.01),n(f,new gi(.057,12,10),t.skin,0,-.28,.012),l.push({shoulder:d,elbow:f,side:u})}return e.position.y=-.085,i.userData.parts={model:e,legs:c,arms:l,scarfTail:r},i.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),i}function mx({scene:i,camera:e,domElement:t,outsideColliders:n=[],interiorColliders:s=[],occluders:r=[],callbacks:o={}}){const a=px();i.add(a);const c=Xt.player,l=new L(Xt.spawn.x,0,Xt.spawn.z),u=new L,d=new Set,f={x:0,y:0,run:!1},h=new N0;h.far=20;const p={mode:"third",yaw:0,orbitPitch:.16,lookPitch:-.02,distance:c.cameraDistance,currentDistance:c.cameraDistance,charYaw:Math.PI,walkPhase:0,speed:0,moving:!1,inputEnabled:!0,bob:0,fov:46};let _=!1,m=0,g=0,b=0,T=0,y=0,A=-1;performance.now(),e.fov=46,e.near=.08,e.far=700,e.updateProjectionMatrix(),a.position.copy(l),a.rotation.y=p.charYaw;const R=new L,F=new L,x=new L;function P(J,Ve,Ke,yt=c.radius){for(const me of Ke)if(me)if(me.radius!==void 0||me.type==="circle"){const Le=me.x??me.cx??0,Be=me.z??me.cz??0,Ye=me.radius??me.r??0,Je=J-Le,bt=Ve-Be;if(Je*Je+bt*bt<(Ye+yt)*(Ye+yt))return!1}else{let Le=me.minX,Be=me.maxX,Ye=me.minZ,Je=me.maxZ;if(Le===void 0&&me.x!==void 0&&me.w!==void 0&&(Le=me.x-me.w/2,Be=me.x+me.w/2,Ye=me.z-me.d/2,Je=me.z+me.d/2),Le===void 0)continue;if(J>Le-yt&&J<Be+yt&&Ve>Ye-yt&&Ve<Je+yt)return!1}return!0}function N(J,Ve){const Ke=Gt.porch;if(J>-6.5/2&&J<Ke.width/2&&Ve>Gt.door.z-.1&&Ve<Ke.frontZ+.08)return Ke.floorY;if(Math.abs(J)<1.15){const yt=Ke.frontZ+.08;if(Ve>=yt&&Ve<yt+.3)return Ke.floorY-.17;if(Ve>=yt+.3&&Ve<yt+.6)return Ke.floorY-.34}return 0}function k(J){p.inputEnabled=J,J||(d.clear(),f.x=0,f.y=0,_=!1)}function V(J=0,Ve=0,Ke=!1){const yt=Math.hypot(Number(J)||0,Number(Ve)||0);yt>1?(f.x=J/yt,f.y=Ve/yt):(f.x=Number(J)||0,f.y=Number(Ve)||0),f.run=!!Ke}function te(J,Ve,Ke){const yt=new L(-Math.sin(p.yaw),0,-Math.cos(p.yaw)),me=new L(Math.cos(p.yaw),0,-Math.sin(p.yaw)),Le=new L;p.inputEnabled&&((d.has("KeyW")||d.has("ArrowUp"))&&Le.add(yt),(d.has("KeyS")||d.has("ArrowDown"))&&Le.sub(yt),(d.has("KeyD")||d.has("ArrowRight"))&&Le.add(me),(d.has("KeyA")||d.has("ArrowLeft"))&&Le.sub(me),Math.hypot(f.x,f.y)>.02&&(Le.addScaledVector(me,f.x),Le.addScaledVector(yt,f.y)));const Be=Le.lengthSq()>.001;Be&&Le.normalize().multiplyScalar(Ke);const Ye=Be?10.5:13.5;u.x=Tr(u.x,Le.x,Ye,J),u.z=Tr(u.z,Le.z,Ye,J),p.speed=Math.hypot(u.x,u.z),p.moving=p.speed>.15;let Je=l.x+u.x*J;P(Je,l.z,Ve)||(Je=l.x,u.x=0);let bt=l.z+u.z*J;P(Je,bt,Ve)||(bt=l.z,u.z=0),l.x=Je,l.z=bt;const At=Math.hypot(l.x,l.z);return At>52&&(l.x=l.x/At*52,l.z=l.z/At*52),Be}function X(J){const Ve=d.has("ShiftLeft")||d.has("ShiftRight")||f.run,Ke=Ve?c.runSpeed:c.walkSpeed;te(J,n,Ke);const yt=N(l.x,l.z);if(l.y=Tr(l.y,yt,12,J),a.position.set(l.x,l.y,l.z),a.visible=!0,p.moving){const bt=Math.atan2(u.x,u.z);p.charYaw=dx(p.charYaw,bt,11,J)}a.rotation.y=p.charYaw;const me=p.speed/c.runSpeed;p.walkPhase+=J*p.speed*3.1;const Le=a.userData.parts,Be=Math.sin(p.walkPhase)*(.15+me*.62);for(const bt of Le.legs)bt.pivot.rotation.x=bt.side<0?Be:-Be,bt.knee.rotation.x=Math.max(0,(bt.side<0?-Be:Be)*.8);for(const bt of Le.arms)p.moving?(bt.shoulder.rotation.x=bt.side<0?-Be*.7:Be*.7,bt.elbow.rotation.x=.08+Math.abs(Be)*.22):(bt.shoulder.rotation.x=Math.sin(performance.now()*.0011+bt.side)*.018,bt.elbow.rotation.x=.18+Math.sin(performance.now()*.0013+bt.side)*.01);const Ye=Math.sin(performance.now()*.0016)*.008;Le.model.position.y=-.085+(p.moving?Math.abs(Math.sin(p.walkPhase*2))*.035*(.35+me):Ye),Le.model.rotation.z=-u.x*.008,Le.scarfTail.rotation.x=.12+Math.sin(p.walkPhase*.8)*.12+me*.16,Le.model.rotation.z&&(Le.model.rotation.z*=.9);const Je=Ve&&p.moving?49.5:46;p.fov=Tr(p.fov,Je,4,J),e.fov=p.fov,e.updateProjectionMatrix()}function j(J){const Ke=d.has("ShiftLeft")||d.has("ShiftRight")||f.run?4.1:2.35;te(J,s,Ke);const yt=as.halfX-.3,me=as.halfZ-.3;l.x=vn(l.x,-yt,yt),l.z=vn(l.z,-me,me),l.y=as.walkY,a.visible=!1,p.bob+=J*(p.moving?7.2+p.speed*1.2:2.2),p.fov=Tr(p.fov,64,5,J),e.fov=p.fov,e.updateProjectionMatrix();const Le=Se();e.position.copy(Le),e.rotation.order="YXZ",e.rotation.set(p.lookPitch,p.yaw,0)}function Se(){const J=p.moving&&p.mode==="first",Ve=J?Math.sin(p.bob)*.022*vn(p.speed/2.4,.2,1.2):0,Ke=J?Math.cos(p.bob*.5)*.008:0;return new L(l.x+Ke,l.y+c.eyeHeight+Ve,l.z)}function oe(J){R.set(l.x,l.y+1.4,l.z);const Ve=Math.cos(p.yaw),Ke=-Math.sin(p.yaw);R.x+=Ve*.45,R.z+=Ke*.45;const yt=Math.cos(p.orbitPitch);x.set(Math.sin(p.yaw)*yt,Math.sin(p.orbitPitch),Math.cos(p.yaw)*yt);const me=p.distance;h.set(R,x),h.far=me+.4;const Le=r.length?h.intersectObjects(r,!1):[];let Be=me;if(Le.length){const At=Le.find(z=>z.object.visible&&z.distance>.25);At&&(Be=vn(At.distance-.28,1.05,me))}Be<p.currentDistance?p.currentDistance=Tr(p.currentDistance,Be,24,J):p.currentDistance=Tr(p.currentDistance,Be,3.2,J);const Ye=p.currentDistance;F.set(R.x+x.x*Ye,R.y+x.y*Ye,R.z+x.z*Ye);const Je=l.y+.42;F.y<Je&&(F.y=Je),e.position.lerp(F,1-Math.exp(-16*J)),e.lookAt(R);const bt=performance.now()*.001;e.position.x+=Math.sin(bt*.37)*.004,e.position.y+=Math.cos(bt*.29)*.003}function Re(J){J=vn(J||.016,.001,.05),p.mode==="third"?(X(J),oe(J)):j(J),performance.now()}function xe(){if(p.mode==="third"){const J=Math.cos(p.orbitPitch),Ve=Math.sin(p.yaw)*J,Ke=Math.sin(p.orbitPitch),yt=Math.cos(p.yaw)*J;R.set(l.x,l.y+1.4,l.z),R.x+=Math.cos(p.yaw)*.45,R.z+=-Math.sin(p.yaw)*.45,e.position.set(R.x+Ve*p.distance,Math.max(l.y+.42,R.y+Ke*p.distance),R.z+yt*p.distance),e.lookAt(R),p.currentDistance=p.distance}else e.position.copy(Se()),e.rotation.order="YXZ",e.rotation.set(p.lookPitch,p.yaw,0)}function Te(){p.mode="first",u.set(0,0,0),l.set(as.interiorSpawn.x,as.walkY,as.interiorSpawn.z),p.yaw=.27,p.lookPitch=-.055,p.bob=0,p.speed=0,p.moving=!1,a.visible=!1,e.fov=64,e.updateProjectionMatrix(),xe()}function de(){p.mode="third",u.set(0,0,0),l.set(0,N(0,6.4),6.4),l.y=N(l.x,l.z),p.yaw=0,p.orbitPitch=.16,p.distance=c.cameraDistance,p.currentDistance=p.distance,p.charYaw=Math.PI,a.position.copy(l),a.rotation.y=p.charYaw,a.visible=!0,e.fov=46,e.updateProjectionMatrix(),xe()}function tt(J){if(J.button===0&&p.inputEnabled){_=!0,A=J.pointerId,m=b=J.clientX,g=T=J.clientY,y=0;try{t.setPointerCapture(J.pointerId)}catch{}t.style.cursor="grabbing"}}function Mt(J){if(!_||J.pointerId!==A)return;const Ve=J.clientX-m,Ke=J.clientY-g;y+=Math.abs(Ve)+Math.abs(Ke),m=J.clientX,g=J.clientY;const yt=J.pointerType==="touch"?.006:.0042;p.yaw-=Ve*yt,p.mode==="third"?p.orbitPitch=vn(p.orbitPitch-Ke*yt,-.12,.82):p.lookPitch=vn(p.lookPitch-Ke*yt,-1.15,1.05)}function Wt(J){if(!_||A!==-1&&J.pointerId!==A)return;_=!1,A=-1,t.style.cursor="",Math.abs(J.clientX-b)+Math.abs(J.clientY-T)<6&&y<8&&o.onCanvasClick?.(J)}function Y(J){if(!p.inputEnabled||p.mode!=="third")return;J.preventDefault();const Ve=Math.sign(J.deltaY);p.distance=vn(p.distance+Ve*.55,c.cameraMinDistance,c.cameraMaxDistance)}function st(J){if(!J)return!1;const Ve=J.tagName;return Ve==="INPUT"||Ve==="TEXTAREA"||Ve==="SELECT"||J.isContentEditable}function be(J){st(J.target)||(fx.has(J.code)||J.code==="ShiftLeft"||J.code==="ShiftRight")&&p.inputEnabled&&(d.add(J.code),J.code.startsWith("Arrow")&&J.preventDefault())}function Oe(J){d.delete(J.code)}function Ze(){d.clear(),_=!1}return t.addEventListener("pointerdown",tt),window.addEventListener("pointermove",Mt),window.addEventListener("pointerup",Wt),window.addEventListener("pointercancel",Wt),t.addEventListener("wheel",Y,{passive:!1}),window.addEventListener("keydown",be),window.addEventListener("keyup",Oe),window.addEventListener("blur",Ze),t.addEventListener("contextmenu",J=>J.preventDefault()),xe(),{character:a,state:p,get mode(){return p.mode},getPosition:()=>l.clone(),getEyePosition:Se,setPosition(J,Ve){p.mode==="third"&&(l.x=J,l.z=Ve,l.y=N(J,Ve),u.set(0,0,0),a.position.copy(l),xe())},getInteractionPosition(){return p.mode==="first"?Se():new L(l.x,l.y+1,l.z)},getForward(){const J=(p.mode==="first",p.yaw);return new L(-Math.sin(J),0,-Math.cos(J))},setColliders({outside:J,interior:Ve,occluders:Ke}={}){J&&(n=J),Ve&&(s=Ve),Ke&&(r=Ke),h.far=20},setTouchInput:V,update:Re,enterInterior:Te,exitInterior:de,setInputEnabled:k,isInputEnabled:()=>p.inputEnabled,snapCamera:xe,dispose(){t.removeEventListener("pointerdown",tt),window.removeEventListener("pointermove",Mt),window.removeEventListener("pointerup",Wt),window.removeEventListener("pointercancel",Wt),t.removeEventListener("wheel",Y),window.removeEventListener("keydown",be),window.removeEventListener("keyup",Oe),window.removeEventListener("blur",Ze)}}}function Ps(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Pn;let l=0;for(let u=0;u<i.length;++u){const d=i[u];let f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in d.attributes){if(!n.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(d.attributes[h]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in d.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(d.morphAttributes[h])}if(e){let h;if(t)h=d.index.count;else if(d.attributes.position!==void 0)h=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,h,u),l+=h}}if(t){let u=0;const d=[];for(let f=0;f<i.length;++f){const h=i[f].index;for(let p=0;p<h.count;++p)d.push(h.getX(p)+u);u+=i[f].attributes.position.count}c.setIndex(d)}for(const u in r){const d=Hf(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(const u in o){const d=o[u][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<d;++f){const h=[];for(let _=0;_<o[u].length;++_)h.push(o[u][_][f]);const p=Hf(h);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(p)}}}return c}function Hf(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new Vn(o,t,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const d=c/t;for(let f=0,h=u.count;f<h;f++)for(let p=0;p<t;p++){const _=u.getComponent(f,p);a.setComponent(f+d,p,_)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}const Vf=new L(0,1,0),Nc=Xt.terrainSize/2,Ir=new et(Xt.path.start.x,Xt.path.start.z),gx=new et(Xt.path.end.x,Xt.path.end.z),Ds=new et().subVectors(gx,Ir),vx=Ds.x*Ds.x+Ds.y*Ds.y;function Ks(i,e){const t=i-Ir.x,n=e-Ir.y,s=vn((t*Ds.x+n*Ds.y)/vx,0,1),r=Ir.x+Ds.x*s,o=Ir.y+Ds.y*s;return{t:s,px:r,pz:o,dist:Math.hypot(i-r,e-o)}}function mo(i){return{x:Ir.x+Ds.x*i,z:Ir.y+Ds.y*i}}function ii(i,e){const t=Math.hypot(i,e),n=Ks(i,e),s=Math.hypot(i-Xt.well.x,e-Xt.well.z);let r=cs(15.4,30,t);r*=cs(2,4.4,n.dist),r*=cs(2.4,4.4,s);const o=(Ll(i*.034+13.1,e*.034+7.7,3,5)-.5)*2.7,a=(Ll(i*.12+3.7,e*.12+9.2,2,8)-.5)*.5,c=cs(17,68,t)*2.3;return r*(o*.85+c+a)}function Wf(i){return i<6.1||i>19.4}const _x=-5.9,xx=5.9,Mx=-4.9,yx=6.9;function fr(i,e){return i>_x&&i<xx&&e>Mx&&e<yx}function uo(i){return i.x>-5.3&&i.x<5.3&&i.z>-4.4&&i.z<6.3&&i.y<6.4}const dr=[{h:0,top:"#060a12",hor:"#131a26",sun:"#6d84ab"},{h:4.5,top:"#0e1626",hor:"#2b2c3c",sun:"#b98264"},{h:6.2,top:"#3d4c68",hor:"#d99f72",sun:"#ffc98c"},{h:8.5,top:"#6d95ba",hor:"#d6ccb2",sun:"#ffe8c4"},{h:12.5,top:"#78a4cb",hor:"#e7dec7",sun:"#fff5df"},{h:16.2,top:"#6586ad",hor:"#e9c99f",sun:"#ffd99f"},{h:17.9,top:"#42506f",hor:"#e59a66",sun:"#ff9e5a"},{h:19.2,top:"#1d2438",hor:"#5d4354",sun:"#c87b56"},{h:20.8,top:"#0b101c",hor:"#242e3f",sun:"#7e93b8"},{h:24,top:"#060a12",hor:"#131a26",sun:"#6d84ab"}];function bx(i,e=0,t=null){let n=dr[0],s=dr[dr.length-1];for(let h=0;h<dr.length-1;h++)if(i>=dr[h].h&&i<=dr[h+1].h){n=dr[h],s=dr[h+1];break}const r=vn((i-n.h)/Math.max(1e-4,s.h-n.h),0,1),o=new ke(n.top).lerp(new ke(s.top),r),a=new ke(n.hor).lerp(new ke(s.hor),r),c=new ke(n.sun).lerp(new ke(s.sun),r);if(t){const h=new ke(t);o.lerp(h,.07),a.lerp(h,.15)}if(e>.001){const h=new ke("#7d8488"),p=new ke("#a7a8a2");o.lerp(h,e*.78),a.lerp(p,e*.72)}const l=vn((i-6)/12,0,1),u=l*Math.PI,d=Math.max(.05,Math.sin(l*Math.PI)*.92),f=new L(Math.cos(u)*.95,d,Math.sin(u)*.5+.55).normalize();return{top:o,horizon:a,sun:c,sunDir:f}}function Xf(i=1,e=0){return bn(256,256,(n,s,r)=>{const o=Ht(i+e*37);n.clearRect(0,0,s,r);const a=s*.5,c=r*.5,l=["#f6f0dd","#eee7d0","#fbf5e4","#e2dbc2","#f2ead2","#dcd4ba"],u=["#c9c2a9","#beb79d","#d2cab0"];for(let f=0;f<18;f++){const h=o()*We,p=Math.pow(o(),.7)*s*.3,_=a+Math.cos(h)*p,m=c+Math.sin(h)*p*.85+s*.04,g=S(o,s*.07,s*.14);n.save(),n.translate(_,m),n.rotate(o()*We),n.globalAlpha=S(o,.6,.95),n.fillStyle=Ri(o,u),n.beginPath(),n.ellipse(0,0,g,g*.44,0,0,We),n.fill(),n.restore()}const d=62+Math.floor(o()*26);for(let f=0;f<d;f++){const h=o()*We,p=Math.pow(o(),.55)*s*.38,_=a+Math.cos(h)*p,m=c+Math.sin(h)*p*.88,g=S(o,s*.04,s*.1);n.save(),n.translate(_,m),n.rotate(o()*We),n.globalAlpha=S(o,.82,1);const b=n.createLinearGradient(-g,-g*.4,g,g*.4);b.addColorStop(0,Ri(o,l)),b.addColorStop(1,"#c6bfa5"),n.fillStyle=b,n.beginPath(),n.ellipse(0,0,g,g*S(o,.34,.48),0,0,We),n.fill(),n.strokeStyle="rgba(118,104,74,.28)",n.lineWidth=1,n.beginPath(),n.moveTo(-g*.85,0),n.lineTo(g*.85,0),n.stroke(),n.restore()}},{wrapS:on,wrapT:on})}function Sx(i=2,e=0){return bn(256,256,(n,s,r)=>{const o=Ht(i+e*53);n.clearRect(0,0,s,r);const a=["#eef1da","#dde4c4","#f4f5e2","#cfd9b0","#e6ebcf","#c4cf9f"],c=r*.5;n.strokeStyle="rgba(206,196,168,.8)",n.lineWidth=2.4,n.beginPath(),n.moveTo(s*.07,c+r*.03),n.quadraticCurveTo(s*.55,c-r*.03,s*.94,c+r*.02),n.stroke();const l=26;for(let u=0;u<l;u++){const d=.14+u/l*.82,f=s*d,h=c+Math.sin(d*Math.PI*1.2)*r*.02,p=o()>.5,_=4+Math.floor(o()*5);for(let m=0;m<_;m++){const b=(p?-1:1)*(.45+o()*1)-(p?.35:-.15),T=r*(.1+o()*.2)*(1.2-d*.35);n.beginPath(),n.moveTo(f,h),n.lineTo(f+Math.cos(b)*T*.9,h+Math.sin(b)*T),n.strokeStyle=Ri(o,a),n.lineWidth=S(o,1,2.2),n.lineCap="round",n.globalAlpha=S(o,.6,1),n.stroke()}}n.globalAlpha=1},{wrapS:on,wrapT:on})}function wx(i=8,e=0){return bn(256,256,(n,s,r)=>{const o=Ht(i+e*17);n.clearRect(0,0,s,r),n.translate(s/2,r*.99);const a=6+e%3;for(let c=0;c<a;c++){const l=-Math.PI/2+S(o,-.9,.9),u=S(o,r*.46,r*.88),d=Math.cos(l),f=Math.sin(l),h=14,p=[];for(let _=0;_<=h;_++){const m=_/h,g=Math.sin(m*Math.PI*.8)*.18;p.push({x:d*u*m+Math.cos(l+Math.PI/2)*u*g*m,y:f*u*m+Math.sin(l+Math.PI/2)*u*g*m})}n.beginPath(),n.moveTo(0,0);for(const _ of p)n.lineTo(_.x,_.y);n.strokeStyle="#d9d6bd",n.lineWidth=1.8,n.stroke();for(let _=2;_<h;_++){const m=_/h,g=p[_],b=(1-m*.66)*15,T=l+Math.PI/2;for(const y of[-1,1]){n.save(),n.translate(g.x,g.y),n.rotate(T+(y<0?.35:-.35)),n.beginPath(),n.ellipse(0,y*b*.55,b*.42,b*.85,0,0,We);const A=n.createLinearGradient(0,-b,0,b);A.addColorStop(0,"#f6f2dd"),A.addColorStop(1,"#cfcbaa"),n.fillStyle=A,n.globalAlpha=.95,n.fill(),n.restore()}}}},{wrapS:on,wrapT:on})}function Tx(i=3,e=0){return bn(160,160,(n,s,r)=>{const o=Ht(i+e*29);n.clearRect(0,0,s,r);const a=["#f2efd8","#e4e4c4","#cfd4ac","#faf7e4","#bcc59a"];for(let c=0;c<78;c++){const l=s*(.12+o()*.76),u=l+S(o,-s*.3,s*.3),d=r*S(o,.02,.42),f=S(o,-16,16);n.beginPath(),n.moveTo(l,r),n.quadraticCurveTo(l+f,r*.55,u,d);const h=n.createLinearGradient(l,r,u,d);h.addColorStop(0,"rgba(120,124,86,.95)"),h.addColorStop(1,Ri(o,a)),n.strokeStyle=h,n.lineWidth=S(o,1.1,2.8),n.lineCap="round",n.globalAlpha=S(o,.75,1),n.stroke()}n.globalAlpha=1},{wrapS:on,wrapT:on})}function Ex(i=9){return bn(256,256,(t,n,s)=>{const r=Ht(i);t.clearRect(0,0,n,s);const o=n*.5,a=s*.5,c=["#fff8f5","#fdeef0","#f8dde4","#fbe8ea","#f6d2da"];for(let l=0;l<26;l++){const u=r()*We,d=Math.pow(r(),.62)*n*.36,f=o+Math.cos(u)*d,h=a+Math.sin(u)*d*.85,p=S(r,n*.045,n*.085);t.save(),t.translate(f,h),t.rotate(r()*We),t.fillStyle=Ri(r,c),t.globalAlpha=S(r,.82,1);for(let _=0;_<5;_++)t.rotate(We/5),t.beginPath(),t.ellipse(0,-p*.62,p*.4,p*.62,0,0,We),t.fill();t.fillStyle="rgba(236,190,120,.9)",t.beginPath(),t.arc(0,0,p*.22,0,We),t.fill(),t.restore()}},{wrapS:on,wrapT:on})}function Ax(i=4){return bn(256,256,(t,n,s)=>{const r=Ht(i);t.clearRect(0,0,n,s),t.strokeStyle="#ded4c2",t.lineCap="round";function o(a,c,l,u,d,f){const h=a+Math.cos(l)*u,p=c+Math.sin(l)*u;if(t.globalAlpha=vn(.35+d*.35,.3,1),t.lineWidth=d,t.beginPath(),t.moveTo(a,c),t.quadraticCurveTo(a+Math.cos(l+.18)*u*.55,c+Math.sin(l+.18)*u*.55,h,p),t.stroke(),f<=0||d<.7)return;const _=2+(r()>.55?1:0);for(let m=0;m<_;m++){const g=l+S(r,-.7,.7);o(h,p,g,u*S(r,.45,.72),d*.62,f-1)}}for(let a=0;a<6;a++){const c=n*.5+S(r,-n*.16,n*.16);o(c,s*.96,-Math.PI*.5+S(r,-.75,.75),S(r,s*.2,s*.33),S(r,2,3.2),3)}t.globalAlpha=1},{wrapS:on,wrapT:on})}function Cx(i=17){return bn(512,512,(t,n,s)=>{const r=Ht(i);t.fillStyle="#eef3f6",t.fillRect(0,0,n,s);for(let o=0;o<90;o++){const a=r()*n,c=r()*s,l=S(r,20,120),u=t.createRadialGradient(a,c,0,a,c,l),d=r(),f=d>.6?"214,225,234":d>.3?"255,255,255":"198,213,224";u.addColorStop(0,`rgba(${f},${S(r,.15,.4)})`),u.addColorStop(1,`rgba(${f},0)`),t.fillStyle=u,t.fillRect(a-l,c-l,l*2,l*2)}for(let o=0;o<120;o++)t.fillStyle=r()>.5?"rgba(150,140,120,.10)":"rgba(110,100,80,.08)",t.beginPath(),t.ellipse(r()*n,r()*s,S(r,1,4),S(r,.5,2),r()*We,0,We),t.fill();for(let o=0;o<500;o++)t.fillStyle=`rgba(255,255,255,${S(r,.15,.6)})`,t.fillRect(r()*n,r()*s,1,1);li(t,n,s,r,.02)},{repeat:[18,18]})}function Rx(i=71){const t=bn(512,512,(n,s,r)=>{const o=Ht(i);n.clearRect(0,0,s,r),n.fillStyle="rgba(255,255,255,1)",n.fillRect(0,0,s,r);for(let _=0;_<150;_++){const m=o()*s,g=o()*r,b=S(o,s*.015,s*.1),T=n.createRadialGradient(m,g,0,m,g,b);T.addColorStop(0,`rgba(0,0,0,${S(o,.12,.5)})`),T.addColorStop(.6,`rgba(0,0,0,${S(o,.04,.2)})`),T.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=T,n.beginPath(),n.ellipse(m,g,b,b*S(o,.5,1),o()*We,0,We),n.fill()}const a=(_,m)=>[(_/Xt.terrainSize+.5)*s,(m/Xt.terrainSize+.5)*r],c=[{width:3.1,alpha:.5},{width:2.1,alpha:.35}];for(const _ of c){n.strokeStyle=`rgba(0,0,0,${_.alpha})`,n.lineWidth=_.width/Xt.terrainSize*s,n.lineCap="round",n.beginPath();for(let m=0;m<=24;m++){const g=m/24,b=mo(g),[T,y]=a(b.x,b.z);m===0?n.moveTo(T,y):n.lineTo(T,y)}n.stroke()}const[l,u]=a(Xt.well.x,Xt.well.z),d=n.createRadialGradient(l,u,0,l,u,2.4/Xt.terrainSize*s);d.addColorStop(0,"rgba(0,0,0,.4)"),d.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=d,n.beginPath(),n.arc(l,u,2.4/Xt.terrainSize*s,0,We),n.fill();const[f,h]=a(Xt.spawn.x,Xt.spawn.z),p=n.createRadialGradient(f,h,0,f,h,9/Xt.terrainSize*s);p.addColorStop(0,"rgba(0,0,0,.12)"),p.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=p,n.beginPath(),n.arc(f,h,9/Xt.terrainSize*s,0,We),n.fill()},{srgb:!1,wrapS:on,wrapT:on});return t.flipY=!1,t.needsUpdate=!0,t}function gs(i,e,t){const n=i.length,s=[],r=[],o=[],a=[],c=[];for(let h=0;h<n;h++){const p=new L;h===0?p.subVectors(i[1],i[0]):h===n-1?p.subVectors(i[h],i[h-1]):p.subVectors(i[h+1],i[h-1]),p.lengthSq()<1e-9&&p.set(0,1,0),c.push(p.normalize())}let l=null;for(let h=0;h<n;h++){const p=c[h];let _;if(l)_=l.clone(),_.addScaledVector(p,-_.dot(p)),_.lengthSq()<1e-9&&_.set(1,0,0),_.normalize();else{const g=Math.abs(p.y)>.92?new L(1,0,0):new L(0,1,0);_=new L().crossVectors(p,g).normalize()}l=_;const m=new L().crossVectors(p,_).normalize();for(let g=0;g<t;g++){const b=g/t*We,T=Math.cos(b),y=Math.sin(b),A=_.x*T+m.x*y,R=_.y*T+m.y*y,F=_.z*T+m.z*y,x=e[h];s.push(i[h].x+A*x,i[h].y+R*x,i[h].z+F*x),r.push(A,R,F),o.push(g/t,h/(n-1))}}for(let h=0;h<n-1;h++)for(let p=0;p<t;p++){const _=(p+1)%t,m=h*t+p,g=h*t+_,b=(h+1)*t+_,T=(h+1)*t+p;a.push(m,g,T,g,b,T)}const u=new Pn;u.setAttribute("position",new an(s,3)),u.setAttribute("normal",new an(r,3)),u.setAttribute("uv",new an(o,2)),u.setIndex(a);let d=0;const f=u.attributes.uv;for(let h=0;h<n;h++){h>0&&(d+=i[h].distanceTo(i[h-1]));for(let p=0;p<t;p++)f.setY(h*t+p,d*.55)}return u}function Nu(i){i.computeVertexNormals();const e=i.attributes.normal;let t=0;for(let n=0;n<e.count;n++)t+=e.getY(n);if(t<0){const n=i.index;if(n){for(let s=0;s<n.count;s+=3){const r=n.getX(s);n.setX(s,n.getX(s+1)),n.setX(s+1,r)}i.computeVertexNormals()}}return i}function Uc(i,e){const t=i.attributes.position.count,n=new Float32Array(t*3);for(let s=0;s<t;s++)n[s*3]=e.r,n[s*3+1]=e.g,n[s*3+2]=e.b;return i.setAttribute("color",new Vn(n,3)),i}function ll(i){const e=[];for(const t of i)!t||!t.attributes||!t.attributes.position||t.attributes.position.count===0||e.push(t.index?t.toNonIndexed():t);return e}function Ar(i,e=0){const t=new Eo(1,e),n=t.attributes.position,s=new Map,r=new L,o=i*13.37+5;for(let a=0;a<n.count;a++){r.fromBufferAttribute(n,a);const c=`${r.x.toFixed(3)}|${r.y.toFixed(3)}|${r.z.toFixed(3)}`;let l=s.get(c);if(!l){const u=Iu(r.x*2.3+o,r.y*2.7+r.z*1.9+o*3)-.5,d=Iu(r.x*5.1+4,r.z*5.3+r.y*3.1+o)-.5,f=1+u*.5+d*.18;let h=r.y*(1+d*.35)*f;h<-.5&&(h=-.5-(h+.5)*.3),l=new L(r.x*f,h,r.z*(f-u*.12)),s.set(c,l)}n.setXYZ(a,l.x,l.y,l.z)}return t.computeVertexNormals(),t}function Yf(i=901){const e=Ar(i,0),t=e.attributes.position;let n=1/0;for(let s=0;s<t.count;s++)n=Math.min(n,t.getY(s));for(let s=0;s<t.count;s++)t.setY(s,(t.getY(s)-n)*.92-.06);return e.computeVertexNormals(),e}function Px(i,e=7,t=1,n=.82,s=1){const r=[];for(let p=0;p<e;p++)r.push(p/e*We+S(i,-.14,.14)*(We/e));const o=[],a=[],c=[],l=s*.5,u=-s*.5;o.push(0,l,0),a.push(.5,.5);for(let p=0;p<e;p++){const _=t*S(i,.82,1.12),m=r[p],g=Math.cos(m)*_,b=Math.sin(m)*_;o.push(g,l,b),a.push(g*.35+.5,b*.35+.5)}for(let p=0;p<e;p++){const _=n*S(i,.82,1.15),m=r[p],g=Math.cos(m)*_,b=Math.sin(m)*_;o.push(g,u,b),a.push(g*.35+.5,b*.35+.5)}const d=1,f=1+e;for(let p=0;p<e;p++){const _=(p+1)%e;c.push(0,d+p,d+_),c.push(d+p,f+p,f+_),c.push(d+p,f+_,d+_)}const h=new Pn;return h.setAttribute("position",new an(o,3)),h.setAttribute("uv",new an(a,2)),h.setIndex(c),Nu(h)}function cl(i=3,e=1,t=1,n=!1){const s=[];for(let r=0;r<i;r++){const o=new ni(e,t);n&&o.translate(0,t*.5,0),o.rotateY(r/i*Math.PI),s.push(o)}return Ps(s,!1)}function Er(i,e,t={}){const n=t.amount??1,s=t.ground?1:0,r=`nature-wind-${t.key??"x"}`;return i.onBeforeCompile=o=>{o.uniforms.uTime=e.uTime,o.uniforms.uWind=e.uWind,o.vertexShader=`uniform float uTime;
uniform float uWind;
`+o.vertexShader,o.vertexShader=o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
        vec3 nWindPos = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
      #else
        vec3 nWindPos = vec3(0.0);
      #endif
      float nPhase = nWindPos.x * 0.31 + nWindPos.z * 0.23;
      float nHeight = clamp((nWindPos.y - 1.4) / 7.0, 0.0, 1.0);
      float nAmt = ${s?"clamp(transformed.y, 0.0, 2.0)":"(0.3 + nHeight)"} * ${n.toFixed(3)};
      float nSway = sin(uTime * 0.82 + nPhase) * 0.55 + sin(uTime * 1.61 + nPhase * 1.7) * 0.22;
      transformed.x += nSway * uWind * nAmt * 0.22;
      transformed.z += (cos(uTime * 0.61 + nPhase * 1.3) * 0.5 + sin(uTime * 1.13 + nPhase * 0.7) * 0.2) * uWind * nAmt * 0.18;
      transformed.x += sin(uTime * 2.35 + transformed.y * 2.7 + nPhase) * 0.035 * uWind * nAmt * ${s?"0.0":"1.0"};`)},i.customProgramCacheKey=()=>r,i}function Lx({scene:i,callbacks:e={}}={}){const t=new Qt;t.name="nature",i&&i.add(t);const n={uTime:{value:0},uWind:{value:1}},s=new Zn,r=new ke,o=U2({seed:31,repeat:[14,14]}),a=F2({seed:44,repeat:[1,1]}),c=Il({seed:11,repeat:[1,1]}),l=Il({seed:23,repeat:[1,1]}),u=Du({seed:21}),d=Du({seed:33,base:"#c7c1b2",dark:"#776f61",light:"#ece7da"}),f=Rs({seed:7,planks:4,base:"#6a4b2d",light:"#a38050",dark:"#33200f"}),h=W0({seed:15}),p=Xf(5,0),_=Xf(8,1),m=Sx(3,0),g=Ex(9),b=Ax(4),T=Cx(17),y=Rx(71),A=O2({size:128,seed:5,tint:"#d8d0b4"}),R=z2({size:64,color:"#f3c9d1"}),F=wx(8,0),x=Tx(3,0),P=Ur({size:128,color:"255,236,190"}),N=H2({size:256,seed:41}),k=new sn({map:o,color:16777215,roughness:.96,metalness:0,vertexColors:!0}),V=new sn({map:a,color:12168082,roughness:.94,metalness:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),te=new sn({map:c,color:11051668,roughness:.92,metalness:0,vertexColors:!1,side:Bn}),X=te.clone();X.vertexColors=!0;const j=new sn({map:l,color:10328204,roughness:.94,metalness:0}),Se=new sn({map:u,color:11837572,roughness:.93,metalness:0}),oe=new sn({map:d,color:9866621,roughness:.88,metalness:0}),Re=new sn({map:f,color:11044703,roughness:.86,metalness:0}),xe=new sn({map:f,color:8546635,roughness:.9,metalness:0}),Te=new sn({map:h,color:11904142,roughness:.92,metalness:0}),de=Er(new sn({map:p,alphaTest:.38,side:Bn,roughness:.82,metalness:0,emissive:new ke("#241505"),emissiveIntensity:.46}),n,{key:"leaf",amount:1}),tt=Er(new sn({map:_,alphaTest:.38,side:Bn,roughness:.84,metalness:0,emissive:new ke("#1f1408"),emissiveIntensity:.42}),n,{key:"leafb",amount:1.08}),Mt=Er(new sn({map:m,alphaTest:.34,side:Bn,roughness:.86,metalness:0,emissive:new ke("#0c1206"),emissiveIntensity:.25}),n,{key:"pine",amount:.7}),Wt=Er(new sn({map:g,alphaTest:.3,side:Bn,roughness:.78,metalness:0,emissive:new ke("#2a1519"),emissiveIntensity:.42}),n,{key:"blossom",amount:1}),Y=Er(new sn({map:b,alphaTest:.3,side:Bn,roughness:.9,metalness:0}),n,{key:"twig",amount:.55}),st=Er(new sn({map:F,alphaTest:.42,side:Bn,roughness:.88,metalness:0}),n,{key:"fern",amount:1.7,ground:!0}),be=Er(new sn({map:x,alphaTest:.32,side:Bn,roughness:.9,metalness:0}),n,{key:"grass",amount:2.1,ground:!0}),Oe=new sn({map:A,alphaTest:.4,side:Bn,roughness:.92,metalness:0}),Ze=new sn({color:6253628,roughness:1,metalness:0}),J=new sn({color:15331316,roughness:.82,metalness:0}),Ve=new sn({map:T,alphaMap:y,transparent:!0,depthWrite:!1,roughness:.86,metalness:0,color:16777215,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),Ke=new sn({color:1910054,roughness:.03,metalness:.72,envMapIntensity:1.5,transparent:!0,opacity:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),yt=new sn({color:1581087,roughness:.07,metalness:.4,map:N}),me=new sn({color:10125396,roughness:.95,metalness:0}),Le=new sn({color:3813156,roughness:.85,metalness:0});let Be=null;function Ye(M){const se=M.weather||"clear";let K=M.overcast??0;se==="rain"?K=Math.max(K,.78):se==="storm"?K=Math.max(K,.9):se==="fog"?K=Math.max(K,.6):se==="snow"&&(K=Math.max(K,.45));const W=Dc[M.season]?.tint,Me=bx(M.hour??17.2,K,W),Q=X0("#"+Me.top.getHexString(),"#"+Me.horizon.getHexString(),"#"+Me.sun.getHexString(),Me.sunDir);Q.mapping=ul;const ve=Be;Be=Q,Ke.envMap=Q,Ke.needsUpdate=!0,yt.envMap=Q,yt.needsUpdate=!0,k.envMap=Q,k.needsUpdate=!0,V.envMap=Q,V.needsUpdate=!0,te.envMap=Q,X.envMap=Q,j.envMap=Q;for(const ye of[te,X,j])ye.needsUpdate=!0,ye.envMapIntensity=0;return ve&&ve.dispose(),Me}function Je(){const K=[],W=[],Me=[];K.push(0,ii(0,0),0),W.push(.5,.5);for(let De=1;De<=40;De++){const le=Nc*Math.pow(De/40,1.35);for(let Ee=0;Ee<100;Ee++){const Xe=Ee/100*We,pt=Math.cos(Xe)*le,kt=Math.sin(Xe)*le;K.push(pt,ii(pt,kt),kt),W.push(pt/(Nc*2)+.5,kt/(Nc*2)+.5)}}for(let De=0;De<100;De++)Me.push(0,1+De,1+(De+1)%100);for(let De=1;De<40;De++){const le=1+(De-1)*100,Ee=1+De*100;for(let Xe=0;Xe<100;Xe++){const pt=(Xe+1)%100;Me.push(le+Xe,Ee+Xe,le+pt),Me.push(le+pt,Ee+Xe,Ee+pt)}}const Q=new Pn;Q.setAttribute("position",new an(K,3)),Q.setAttribute("uv",new an(W,2)),Q.setIndex(Me),Nu(Q);const ve=Q.attributes.position.count,ye=new Float32Array(ve*3);for(let De=0;De<ve;De++){const le=Q.attributes.position.getX(De),Ee=Q.attributes.position.getZ(De),Xe=Ll(le*.13+5.1,Ee*.13+2.4,2,9),pt=cs(.52,.78,Ll(le*.06+1.7,Ee*.06+8.9,2,4)),kt=.9+Xe*.2;ye[De*3]=kt*(1-pt*.12),ye[De*3+1]=kt*1.02*(1+pt*.02),ye[De*3+2]=kt*.92*(1-pt*.18)}return Q.setAttribute("color",new Vn(ye,3)),Q}const bt=Je(),At=new Ot(bt,k);At.name="forest-floor",At.receiveShadow=!0,t.add(At);const z=bt.clone();{const M=z.attributes.position;for(let se=0;se<M.count;se++)M.setY(se,M.getY(se)+.022);z.computeVertexNormals(),z.computeBoundingSphere()}const H=new Ot(z,Ve);H.name="snow-cover",H.receiveShadow=!0,H.visible=!1,H.renderOrder=2,t.add(H);const E=new Qt;E.name="path",t.add(E);function ue(){const se=[],K=[],W=[],Me=Ht(404),Q=Xt.path.start.z-.4,ve=Xt.path.end.z+.9,ye=Xt.path.width+.55;for(let le=0;le<=26;le++){const Ee=le/26,Xe=$i(Q,ve,Ee),pt=Ks(0,Xe),kt=S(Me,-.16,.18),cn=S(Me,-.16,.18),Sn=pt.px;se.push(Sn-ye/2+kt,.012,Xe),se.push(Sn+ye/2+cn,.012,Xe),K.push(0,Ee*(ve-Q)*.5),K.push(1,Ee*(ve-Q)*.5)}for(let le=0;le<26;le++){const Ee=le*2;W.push(Ee,Ee+2,Ee+1),W.push(Ee+1,Ee+2,Ee+3)}const De=new Pn;return De.setAttribute("position",new an(se,3)),De.setAttribute("uv",new an(K,2)),De.setIndex(W),Nu(De),De}const Pe=new Ot(ue(),V);Pe.receiveShadow=!0,Pe.name="path-base",E.add(Pe);const C=[],v=[];{const M=Ht(913),se=[];let K=Xt.path.start.z+.15,W=0;for(;K<Xt.path.end.z+.5&&W++<200;){const ye=Ks(0,K),De=M()<.55?2:1;for(let le=0;le<De;le++){const Ee=ye.px+S(M,-.52,.52)+(le===0?-.24:.26),Xe=K+S(M,-.14,.14),pt=S(M,.3,.5);let kt=!0;for(const wi of se)if(Math.hypot(wi.x-Ee,wi.z-Xe)<(wi.r+pt)*.72){kt=!1;break}if(!kt)continue;const cn=S(M,.07,.12),Sn=Px(M,6+Math.floor(M()*3),pt,pt*S(M,.7,.9),cn),nn=.012+cn*.5-S(M,.01,.035);Sn.rotateY(M()*We),Sn.scale(S(M,.78,1.25),1,S(M,.62,1.05));const Si=S(M,.78,1.12),Ji=new ke().setRGB(Si*.98,Si*.97,Si*.93);Uc(Sn,Ji),Sn.translate(Ee,nn,Xe),v.push(Sn),se.push({x:Ee,z:Xe,r:pt}),C.push({x:Ee,z:Xe,r:pt,topY:nn+cn*.5,tone:Si})}K+=S(M,.42,.66)}const Me=[];for(let ye=0;ye<46;ye++){const De=M(),le=mo(De),Ee=le.x+S(M,-1,1),Xe=le.z+S(M,-.4,.4),pt=S(M,.05,.13),kt=Ar(300+ye,0);kt.scale(pt,pt*.66,pt*S(M,.8,1.2)),kt.rotateY(M()*We),Uc(kt,new ke().setRGB(.62,.6,.55)),kt.translate(Ee,ii(Ee,Xe)+pt*.12,Xe),Me.push(kt)}v.push(...Me);const Q=Ps(ll(v),!1);if(!Q)throw new Error("nature: flagstone merge failed");const ve=new Ot(Q,X);ve.castShadow=!0,ve.receiveShadow=!0,ve.name="flagstones",E.add(ve)}const G=cl(3,1,1),re=cl(2,1.9,.75),ge=cl(3,1,1,!0),Ge=cl(2,1,1,!0),He=new ni(1,1),we=[],Ae=[],rt=[],Nt=[],nt=[],Fe=[],Ct=[],ut=[];function Vt(M,{birch:se=!1,near:K=!0,scale:W=1,compact:Me=!1,worldMatrix:Q=null}={}){const ve=[],ye=[],De=(se?S(M,14.6,18.4):S(M,13,16.8))*W,le=(se?S(M,.2,.28):S(M,.36,.54))*W,Ee=K?7:5,Xe=M()*We,pt=S(M,.06,.28)*De*.26,kt=S(M,-.07,.07)*De,cn=De*(se?.64:.55),Sn=K?4:3,nn=[],Si=[];for(let ri=0;ri<=Sn;ri++){const Tn=ri/Sn,$n=Math.cos(Xe)*pt*Tn*Tn+Math.sin(Xe)*kt*Math.sin(Tn*Math.PI)*.5,di=Math.sin(Xe)*pt*Tn*Tn-Math.cos(Xe)*kt*Math.sin(Tn*Math.PI)*.5;nn.push(new L($n,cn*Tn,di)),Si.push($i(le,le*.46,Math.pow(Tn,.82)))}if(ve.push(gs(nn,Si,Ee)),K){const ri=3+Math.floor(M()*2);for(let Tn=0;Tn<ri;Tn++){const $n=Tn/ri*We+S(M,-.4,.4),di=S(M,.8,1.7)*W,Kn=new L(0,le*.75,0),Ti=new L(Math.cos($n)*di*.5,le*.2,Math.sin($n)*di*.5),Zt=new L(Math.cos($n)*di,-.1,Math.sin($n)*di);ve.push(gs([Kn,Ti,Zt],[le*.4,le*.18,.03],4))}}const Ji=nn[nn.length-1].clone(),wi=se?3+Math.floor(M()*2):4+Math.floor(M()*2),Gs=(se?S(M,2,3.1):S(M,3.3,4.8))*W*(Me?.82:1),_i=(se?1.05:1.42)*(K?1:1.12),Ts=K?3:2;for(let ri=0;ri<wi;ri++){const Tn=ri/wi*We+S(M,-.4,.4)+Xe,$n=Gs*S(M,.55,1),di=De*S(M,se?.2:.16,.34)*(Me?1.18:1),Kn=Ji.clone(),Ti=Kn.clone().add(new L(Math.cos(Tn)*$n*.4,di*.52,Math.sin(Tn)*$n*.4)),Zt=Kn.clone().add(new L(Math.cos(Tn)*$n,di,Math.sin(Tn)*$n));ve.push(gs([Kn,Ti,Zt],[le*.36,le*.17,.014*W],Ee)),ye.push({p:Zt.clone(),s:_i*S(M,1,1.3)});for(let un=0;un<Ts;un++){const Jn=S(M,.3,.92),fs=Kn.clone().lerp(Zt,Jn),_r=Tn+(un%2===0?1:-1)*S(M,.45,1.2),sr=S(M,1,2.3)*W*(1-Jn*.25),Sa=S(M,.18,.75),rd=fs.clone().add(new L(Math.cos(_r)*sr*.45,Sa*sr*.4,Math.sin(_r)*sr*.45)),wa=fs.clone().add(new L(Math.cos(_r)*sr,Sa*sr,Math.sin(_r)*sr));if(ve.push(gs([fs,rd,wa],[le*.13,le*.06,.01],K?Ee-1:4)),ye.push({p:wa.clone(),s:_i*S(M,.85,1.15)}),K){const gh=_r+S(M,-.7,.7),$l=S(M,.5,1.1)*W,vh=wa.clone().add(new L(Math.cos(gh)*$l,S(M,.2,.6)*$l,Math.sin(gh)*$l));ve.push(gs([wa,vh],[le*.05,.006],3)),ye.push({p:vh.clone(),s:_i*S(M,.7,1)})}}}if(!se){const ri=K?3:2;for(let Tn=0;Tn<ri;Tn++){const $n=M()*We,di=cn*S(M,.42,.68),Kn=di/De,Ti=new L(Math.cos(Xe)*pt*Kn*Kn,di,Math.sin(Xe)*pt*Kn*Kn),Zt=Gs*S(M,.4,.7),un=Zt*S(M,.35,.7),Jn=Ti.clone().add(new L(Math.cos($n)*Zt,un,Math.sin($n)*Zt));Q&&uo(Jn.clone().applyMatrix4(Q))||(ve.push(gs([Ti,Jn],[le*.16,.008],K?5:3)),ye.push({p:Jn.clone(),s:_i*S(M,.8,1.1)}))}}const hs=Math.round((se?84:122)*(K?1:.85)*W*(Me?.86:1)),Hi=Ji.clone().add(new L(0,De*.2,0)),ir=Gs*1.2;let is=0;for(;ye.length<hs&&is++<hs*12;){const ri=M()*We,Tn=Math.pow(M(),.62)*ir,$n=Hi.y+S(M,-De*.18,De*.36)*(1-Tn/ir*.25);$n<Ji.y-De*.1||ye.push({p:new L(Hi.x+Math.cos(ri)*Tn,$n,Hi.z+Math.sin(ri)*Tn),s:_i*S(M,.7,1.15)})}return{geos:ve,foliage:ye,height:De,trunkR:le}}function ee(M,{near:se=!0,scale:K=1}={}){const W=[],Me=[],Q=[],ve=S(M,13,17.2)*K,ye=S(M,.28,.42)*K,De=M()*We,le=S(M,.02,.09)*ve*.32,Ee=se?4:3,Xe=[],pt=[];for(let Sn=0;Sn<=Ee;Sn++){const nn=Sn/Ee;Xe.push(new L(Math.cos(De)*le*nn*nn,ve*nn,Math.sin(De)*le*nn*nn)),pt.push($i(ye,.028,Math.pow(nn,.72)))}W.push(gs(Xe,pt,se?6:5));const kt=se?9:7;for(let Sn=0;Sn<kt;Sn++){const nn=.22+Sn/Math.max(1,kt-1)*.74+S(M,-.028,.028),Si=ve*nn,Ji=Math.cos(De)*le*nn*nn,wi=Math.sin(De)*le*nn*nn,Gs=((1-nn)*2.7+.8)*K;let _i=se?6:5;M()<.3&&(_i+=1),M()<.18&&(_i-=1);for(let Ts=0;Ts<_i;Ts++){const hs=Ts/_i*We+Sn*.58+S(M,-.2,.2),Hi=Gs*S(M,.62,1.05),ir=S(M,-.32,.06),is=new L(Ji,Si,wi),ri=is.clone().add(new L(Math.cos(hs)*Hi*.5,ir*.45+.1,Math.sin(hs)*Hi*.5)),Tn=is.clone().add(new L(Math.cos(hs)*Hi,ir+Hi*.1,Math.sin(hs)*Hi));W.push(gs([is,ri,Tn],[ye*.16,ye*.075,.008],se?4:3));const $n=se?2:1;for(let Kn=0;Kn<$n;Kn++){const Ti=S(M,.42,.82),Zt=is.clone().lerp(Tn,Ti),un=hs+(Kn%2===0?1:-1)*S(M,.45,1),Jn=Hi*S(M,.22,.42),fs=Zt.clone().add(new L(Math.cos(un)*Jn,S(M,-.12,.1),Math.sin(un)*Jn));W.push(gs([Zt,fs],[ye*.055,.006],3)),Me.push({p:fs.clone().add(new L(0,.04,0)),s:S(M,.75,1.15)*K,rx:S(M,.05,.4),ry:-un+S(M,-.1,.1),rz:S(M,-.18,.18),order:"YXZ"})}const di=se?3:2;for(let Kn=0;Kn<di;Kn++){const Ti=.38+Kn/di*.62,Zt=is.clone().lerp(Tn,Ti);Zt.y+=.06+Ti*.05,Me.push({p:Zt,s:S(M,.85,1.25)*K*(1.1-Ti*.2),rx:S(M,.04,.3),ry:-hs+S(M,-.12,.12),rz:S(M,-.16,.16),order:"YXZ"})}M()<.5&&Q.push({p:Tn.clone().add(new L(0,.02,0)),s:S(M,.12,.2)*K})}}const cn=Math.round((se?52:26)*K);for(let Sn=0;Sn<cn;Sn++){const nn=S(M,.28,.99),Si=M()*We,Ji=ve*nn,wi=((1-nn)*2.6+.4)*K*S(M,.2,.9);Me.push({p:new L(Math.cos(De)*le*nn*nn+Math.cos(Si)*wi,Ji+S(M,-.22,.22),Math.sin(De)*le*nn*nn+Math.sin(Si)*wi),s:S(M,.66,1.05)*K,rx:S(M,.1,.55),ry:-Si+S(M,-.35,.35),rz:S(M,-.22,.22),order:"YXZ"})}return{geos:W,foliage:Me,snowTips:Q,height:ve,trunkR:ye}}const je=Ht(501);for(const M of Xt.trees)ut.push({x:M.x,z:M.z,type:M.type,scale:M.scale,fixed:!0});const ze=[{x:-8.9,z:-8.7,type:"oak",scale:1.18},{x:8.1,z:-9.9,type:"birch",scale:1.06},{x:-4.9,z:-14.2,type:"oak",scale:1}];for(const M of ze)ut.push({...M,fixed:!0});function St(M,se){if(Math.abs(M)<6.7&&se>-7.6&&se<21.5||Math.hypot(M-Xt.well.x,se-Xt.well.z)<4.3)return!0;const K=Ks(M,se);return K.dist<3.4&&K.t>-.02&&K.t<1.02}function Et(M,se){for(const K of ut)if(Math.hypot(K.x-M,K.z-se)<3.5)return!1;return!0}const qe=[{count:14,rMin:14.5,rMax:22.5},{count:13,rMin:23,rMax:34},{count:9,rMin:35,rMax:52}];for(const M of qe){let se=0,K=0;for(;se<M.count&&K++<600;){const W=je()*We,Me=S(je,M.rMin,M.rMax),Q=Math.cos(W)*Me,ve=Math.sin(W)*Me;if(St(Q,ve)||!Et(Q,ve))continue;const ye=je(),De=ye<.48?"oak":ye<.82?"birch":"pine";ut.push({x:Q,z:ve,type:De,scale:S(je,.92,1.32)}),se++}}const Bt=[],Ut=[],_n=[],ht=[];for(const M of ut){const se=Math.hypot(M.x,M.z)<27,K=ii(M.x,M.z)-.12,W=je()*We,Me=new Mn().compose(new L(M.x,K,M.z),new bs().setFromAxisAngle(Vf,W),new L(1,1,1)),Q=Ht(Math.floor((M.x*97+M.z*131+1e3)*7+11)),ve=M.type==="pine"?ee(Q,{near:se,scale:M.scale}):Vt(Q,{birch:M.type==="birch",near:se,scale:M.scale,compact:!!M.fixed&&M.z>4,worldMatrix:Me});for(const le of ve.geos){le.applyMatrix4(Me);const Ee=M.type==="birch";se?(Ee?Ut:Bt).push(le):(Ee?ht:_n).push(le)}const ye=new L,De=M.type==="pine";for(const le of ve.foliage){if(ye.copy(le.p).applyMatrix4(Me),uo(ye))continue;let Ee;De?Ee={pos:ye.clone(),s:le.s,sx:le.s*S(Q,.88,1.08),sy:le.s,rx:(le.rx||0)+S(Q,-.06,.06),ry:le.ry??Q()*We,rz:(le.rz||0)+S(Q,-.05,.05),order:le.order,shade:S(Q,.75,1.1)}:Ee={pos:ye.clone(),s:le.s,sx:le.s*S(Q,.95,1.32),sy:le.s*S(Q,.78,1.02),ry:Q()*We,rx:S(Q,-.32,.32),rz:S(Q,-.26,.26),shade:S(Q,.78,1.16)},De?Ae.push(Ee):we.push(Ee)}if(De)for(const le of ve.snowTips||[])ye.copy(le.p).applyMatrix4(Me),!uo(ye)&&nt.push({pos:ye.clone(),s:le.s*S(Q,.9,1.2),ry:Q()*We,sy:S(Q,.03,.05),shade:S(Q,.92,1.04)});else{for(let Ee=0;Ee<ve.foliage.length;Ee++){if(Ee%4===3)continue;const Xe=ve.foliage[Ee];ye.copy(Xe.p).applyMatrix4(Me),!uo(ye)&&Nt.push({pos:ye.clone(),s:Xe.s*S(Q,1.05,1.4),ry:Q()*We,rx:S(Q,-.3,.3),rz:S(Q,-.25,.25),shade:S(Q,.8,1.15)})}if((se?!0:Q()<.5)&&Q()<.5)for(let Ee=0;Ee<ve.foliage.length;Ee++){const Xe=ve.foliage[Ee];Q()<.18||(ye.copy(Xe.p).applyMatrix4(Me),!uo(ye)&&rt.push({pos:ye.clone(),s:Xe.s*S(Q,.85,1.15),ry:Q()*We,rx:S(Q,-.3,.3),rz:S(Q,-.25,.25),shade:S(Q,.85,1.12)}))}for(let Ee=0;Ee<ve.foliage.length;Ee+=3){if(Q()<.25)continue;const Xe=ve.foliage[Ee];ye.copy(Xe.p).applyMatrix4(Me),!uo(ye)&&nt.push({pos:ye.clone().add(new L(0,.04,0)),s:Xe.s*S(Q,.1,.17),ry:Q()*We,sy:S(Q,.03,.05),shade:S(Q,.92,1.04)})}}if(se){const le=ve.trunkR+.28;Ct.push({minX:M.x-le,maxX:M.x+le,minZ:M.z-le,maxZ:M.z+le,name:"tree"})}}function fn(M,se,K={}){if(!M.length)return null;const W=Ps(ll(M),!1);if(!W)return console.warn("nature: merge failed for",K.name||"mesh"),null;const Me=new Ot(W,se);return Me.castShadow=K.castShadow??!0,Me.receiveShadow=K.receiveShadow??!0,Me.name=K.name||"merged",t.add(Me),Me}const vi=fn(Bt,Se,{name:"trunks-near"}),B=fn(Ut,oe,{name:"trunks-birch-near"});fn(_n,Se,{name:"trunks-far",castShadow:!1}),fn(ht,oe,{name:"trunks-birch-far",castShadow:!1});function q(M,se,K,W={}){const Me=new ml(M,se,K.length);Me.castShadow=W.castShadow??!1,Me.receiveShadow=W.receiveShadow??!1,Me.frustumCulled=!1,Me.name=W.name||"instanced";const Q=new Zn;for(let ve=0;ve<K.length;ve++){const ye=K[ve];Q.position.copy(ye.pos),Q.rotation.order=ye.order||"XYZ",Q.rotation.set(ye.rx||0,ye.ry||0,ye.rz||0);const De=ye.s??1;Q.scale.set(ye.sx??De,ye.sy??De,ye.sz??De),Q.updateMatrix(),Me.setMatrixAt(ve,Q.matrix)}return Me.instanceMatrix.needsUpdate=!0,t.add(Me),Me}const D=q(G,de,we.filter((M,se)=>se%2===0),{name:"canopy-a"}),O=q(G,tt,we.filter((M,se)=>se%2===1),{name:"canopy-b"}),U=q(re,Mt,Ae,{name:"pine-needles"}),$=q(G,Wt,rt,{name:"blossom"}),he=q(G,Y,Nt,{name:"winter-twigs"}),Ne=q(Yf(801),J,nt,{name:"branch-snow"}),lt=[],vt=[];let ct=null,$e=null;{const M=Ht(3301),se=[];for(let Q=0;Q<84;Q++){const ve=M()*We,ye=S(M,42,76),De=Math.cos(ve)*ye,le=Math.sin(ve)*ye,Ee=S(M,11,20),Xe=ii(De,le)-.4;se.push({pos:new L(De,Xe+Ee/2,le),sx:S(M,.9,1.7),sy:Ee,sz:S(M,.9,1.7),ry:M()*We});const pt=3+Math.floor(M()*2);for(let kt=0;kt<pt;kt++)lt.push({pos:new L(De+S(M,-2.4,2.4),Xe+Ee*S(M,.64,1.02),le+S(M,-2.4,2.4)),s:S(M,3.2,6.2),ry:M()*We,rx:S(M,-.2,.2),rz:S(M,-.2,.2),shade:S(M,.5,.8)})}for(let Q=0;Q<104;Q++){const ve=M()*We,ye=S(M,28,44),De=Math.cos(ve)*ye,le=Math.sin(ve)*ye,Ee=ii(De,le);vt.push({pos:new L(De,Ee+S(M,6.5,19),le),s:S(M,4.2,7.4),ry:M()*We,rx:S(M,-.18,.18),rz:S(M,-.18,.18),shade:S(M,.4,.66)})}const K=new jn(.34,.62,1,5),W=new sn({color:4602671,roughness:1});q(K,W,se,{name:"far-trunks"});const Me=[];for(let Q=0;Q<55;Q++){const ve=M()*We,ye=S(M,26,44),De=Math.cos(ve)*ye,le=Math.sin(ve)*ye,Ee=S(M,10,19),Xe=ii(De,le)-.3;Me.push({pos:new L(De,Xe+Ee/2,le),sx:S(M,.5,1.1),sy:Ee,sz:S(M,.5,1.1),ry:M()*We})}q(K,W,Me,{name:"mid-trunks"}),ct=q(G,tt,lt,{name:"far-canopy"}),$e=q(G,tt,vt,{name:"mid-canopy-wall"})}const Ie=[],dt=[],Ft=[{x:-4.7,z:11.7,rot:.42,len:3.7,r:.27},{x:7.9,z:13.1,rot:-.5,len:2.9,r:.22},{x:-9.5,z:3.3,rot:1.15,len:3.3,r:.3},{x:8.7,z:2.3,rot:2.35,len:2.7,r:.24},{x:-6.9,z:-7.5,rot:.82,len:3.1,r:.26},{x:3.4,z:-9.9,rot:1.9,len:3.5,r:.3},{x:13.6,z:8.2,rot:.2,len:2.5,r:.2}];{const M=Ht(616),se=[],K=[];for(const W of Ft){const Q=ii(W.x,W.z)+W.r*.62,ve=new L(-W.len/2,0,0),ye=new L(W.len/2,0,0),De=new L(0,.03,0),Ee=gs([ve,De,ye],[W.r*.92,W.r,W.r*.94],9),Xe=new Mn().compose(new L(W.x,Q,W.z),new bs().setFromAxisAngle(Vf,W.rot),new L(1,1,1));Ee.applyMatrix4(Xe),se.push(Ee);for(const cn of[-1,1]){const Sn=new jn(W.r*(cn<0?.9:.92),W.r*(cn<0?.9:.92),.03,10);Sn.rotateZ(Math.PI/2);const nn=new L(cn*(W.len/2-.005),0,0);nn.applyMatrix4(Xe),Sn.translate(nn.x,nn.y,nn.z),K.push(Sn)}for(let cn=0;cn<4;cn++){const Sn=S(M,.2,.85),nn=new L(-W.len/2+W.len*Sn,W.r*.8,S(M,-.1,.1));nn.applyMatrix4(Xe),dt.push({pos:nn,s:S(M,.12,.28)})}for(let cn=0;cn<3;cn++){const Sn=.2+cn/3*.62+S(M,-.04,.04),nn=new L(-W.len/2+W.len*Sn,W.r*.92,0);nn.applyMatrix4(Xe),Fe.push({pos:nn,s:W.r*S(M,.7,1),sy:S(M,.035,.06),ry:M()*We,shade:S(M,.94,1.03)})}const pt=Math.abs(Math.cos(W.rot))*W.len/2+W.r+.15,kt=Math.abs(Math.sin(W.rot))*W.len/2+W.r+.15;Ie.push({minX:W.x-pt,maxX:W.x+pt,minZ:W.z-kt,maxZ:W.z+kt,name:"fallen-log"})}fn(se,Se,{name:"fallen-logs"}),fn(K,Re,{name:"log-ends"})}const en=[],kn=[],Wn=[{x:-6.5,z:6.3,s:1},{x:9.4,z:13.8,s:.78},{x:-8.9,z:13.2,s:.66},{x:5.1,z:-6.9,s:.9},{x:-11.6,z:.4,s:.82},{x:13.1,z:4.1,s:.6},{x:7.5,z:16.2,s:.52},{x:-3.2,z:19.8,s:.72},{x:11.8,z:-7.4,s:.84},{x:-13.4,z:9.7,s:.58}],Nn=[];{const M=Ht(727);for(let K=0;K<Wn.length;K++){const W=Wn[K],Me=ii(W.x,W.z),Q=Ar(700+K,1),ve=W.s*S(M,.8,1.25),ye=W.s*S(M,.5,.78),De=W.s*S(M,.8,1.2);Q.scale(ve,ye,De),Q.rotateY(M()*We);const le=Me+ye*.16;Uc(Q,new ke().setRGB(S(M,.55,.75),S(M,.55,.72),S(M,.5,.66))),Q.translate(W.x,le,W.z),Nn.push(Q),en.push({minX:W.x-ve*.85,maxX:W.x+ve*.85,minZ:W.z-De*.85,maxZ:W.z+De*.85,name:"rock"}),Fe.push({pos:new L(W.x,le+ye*.78,W.z),s:Math.max(ve,De)*S(M,.5,.7),sy:S(M,.05,.085),ry:M()*We,shade:1}),kn.push({pos:new L(W.x+S(M,-.2,.2),le+ye*.7,W.z+S(M,-.2,.2)),s:S(M,.14,.3)})}const se=fn(Nn,X,{name:"boulders"});se&&(se.userData.cameraOccluder=!0)}{const M=Ht(811),se=[],K=[];for(let ye=0;ye<86;ye++){let De=0,le=0,Ee=0;do{if(ye<30){const kt=M(),cn=mo(kt);De=cn.x+(M()<.5?-1:1)*S(M,1,2.4),le=cn.z+S(M,-1.3,1.3)}else{const kt=M()*We,cn=S(M,7,22);De=Math.cos(kt)*cn,le=Math.sin(kt)*cn}Ee++}while(Ee<20&&fr(De,le));if(fr(De,le))continue;const Xe=S(M,.07,.26),pt={pos:new L(De,ii(De,le)+Xe*.22,le),sx:Xe*S(M,.8,1.4),sy:Xe*S(M,.5,.8),sz:Xe*S(M,.8,1.4),ry:M()*We,color:new ke().setRGB(S(M,.5,.72),S(M,.5,.7),S(M,.45,.64))};M()<.5?se.push(pt):K.push(pt)}const W=Ar(801,0),Me=Ar(907,1),Q=q(W,te,se,{name:"rocks-a",castShadow:!0}),ve=q(Me,j,K,{name:"rocks-b",castShadow:!0});for(let ye=0;ye<se.length;ye++)Q.setColorAt(ye,se[ye].color);for(let ye=0;ye<K.length;ye++)ve.setColorAt(ye,K[ye].color);Q.instanceColor&&(Q.instanceColor.needsUpdate=!0),ve.instanceColor&&(ve.instanceColor.needsUpdate=!0),kn.push(...se.slice(0,6).map(ye=>({pos:ye.pos,s:ye.sx*1.3})))}{const M=Ht(844),se=[];for(let W=0;W<64;W++){const Me=M()*We,Q=S(M,4.5,20),ve=Math.cos(Me)*Q,ye=Math.sin(Me)*Q;if(Math.abs(ve)<4.6&&ye>-3.6&&ye<5.4)continue;const De=S(M,.5,1.6);se.push({x:ve,z:ye,len:De,rot:M()*We,tilt:S(M,-.25,.25),s:S(M,.1,.22)})}const K=[];for(const W of se){const Me=new jn(W.s*.32,W.s*.55,W.len,4);Me.rotateZ(Math.PI/2),Me.rotateX(W.tilt),Me.rotateY(W.rot),Me.translate(W.x,ii(W.x,W.z)+W.s*.4,W.z),K.push(Me)}fn(K,xe,{name:"floor-twigs"})}let An=null,Xn=null;{const M=Ht(933),se=[],K=[],W=[{x:-5.4,z:12.4},{x:7.1,z:3.1},{x:-9,z:-6},{x:4.9,z:-8.6},{x:10.9,z:10.9}];for(const De of W){const le=5+Math.floor(M()*4);for(let Ee=0;Ee<le;Ee++){const Xe=M()*We,pt=S(M,.15,1),kt=De.x+Math.cos(Xe)*pt,cn=De.z+Math.sin(Xe)*pt,Sn=ii(kt,cn),nn=S(M,.5,1.1);K.push({pos:new L(kt,Sn+.075*nn,cn),s:nn,ry:M()*We}),se.push({pos:new L(kt,Sn+.16*nn,cn),s:nn,ry:M()*We,color:new ke(M()>.5?"#a9563a":"#c9a878")})}}const Me=new jn(.022,.035,.15,6);Me.translate(0,.075,0);const Q=new gi(.075,8,5,0,We,0,Math.PI*.5);Q.scale(1,.62,1),Q.translate(0,.15,0);const ve=q(Me,new sn({color:14207403,roughness:.9}),K,{name:"mushroom-stems"}),ye=q(Q,new sn({color:11694154,roughness:.85}),se,{name:"mushroom-caps"});An=ve,Xn=ye;for(let De=0;De<se.length;De++)ye.setColorAt(De,se[De].color);ye.instanceColor&&(ye.instanceColor.needsUpdate=!0),ve.castShadow=!1,ye.castShadow=!1}const w=new Qt;w.name="old-well",w.position.set(Xt.well.x,0,Xt.well.z),t.add(w);const Z=[],_e=[];let fe=null;{const M=Ht(1201),K=Xt.well.height,W=new jn(.9,.99,K,22,1,!0);W.translate(0,K/2-.02,0);const Me=new jn(.7,.75,K,22,1,!0);Me.translate(0,K/2-.02,0);const Q=Ps(ll([W,Me]),!1),ve=new Ot(Q,te);ve.castShadow=!0,ve.receiveShadow=!0,w.add(ve),Z.push(ve);const ye=new lh(.69,.995,24);ye.rotateX(-Math.PI/2),ye.translate(0,K-.025,0);const De=new Ot(ye,te);De.receiveShadow=!0,w.add(De),Z.push(De);const le=[],Ee=[{y:.18,count:16,rad:.975,size:.3},{y:.52,count:15,rad:.965,size:.31},{y:.84,count:15,rad:.95,size:.3}];for(const Zt of Ee)for(let un=0;un<Zt.count;un++){const Jn=un/Zt.count*We+S(M,-.06,.06),fs=Ar(1300+un*7+Math.floor(Zt.y*100),0),_r=Zt.size*S(M,.8,1.15),sr=.2*S(M,.85,1.2),Sa=.16*S(M,.8,1.2);fs.scale(_r,sr,Sa),fs.rotateY(-Jn+S(M,-.14,.14)),fs.translate(Math.cos(Jn)*Zt.rad,Zt.y,Math.sin(Jn)*Zt.rad),le.push(fs)}const Xe=new Ot(Ps(ll(le),!1),te);Xe.castShadow=!0,Xe.receiveShadow=!0,w.add(Xe),Z.push(Xe);const pt=[],kt=12;for(let Zt=0;Zt<kt;Zt++){const un=Zt/kt*We,Jn=new qn(S(M,.34,.48),S(M,.08,.12),S(M,.24,.34));Jn.rotateY(un+S(M,-.1,.1)),Jn.translate(Math.cos(un)*.86,K+.03,Math.sin(un)*.86),pt.push(Jn),Zt%3!==2&&Fe.push({pos:new L(Xt.well.x+Math.cos(un)*.86,K+.09,Xt.well.z+Math.sin(un)*.86),s:.13,sy:.04,ry:M()*We,shade:1})}const cn=new Ot(Ps(pt,!1),te);cn.castShadow=!0,cn.receiveShadow=!0,w.add(cn),Z.push(cn);const Sn=new Ot(new Nr(.68,26),yt);Sn.rotation.x=-Math.PI/2,Sn.position.y=K-.42,w.add(Sn);const nn=[];for(const Zt of[-1,1]){const un=new qn(.13,2.42,.13);un.translate(Zt*.83,1.16,0),nn.push(un);const Jn=new qn(.09,.5,.09);Jn.rotateZ(Zt*.6),Jn.translate(Zt*.66,2.02,0),nn.push(Jn)}const Si=new qn(1.98,.14,.15);Si.translate(0,2.32,0),nn.push(Si);const Ji=new jn(.055,.055,1.7,8);Ji.rotateZ(Math.PI/2),Ji.translate(0,2.14,0),nn.push(Ji);for(const Zt of[-1,1]){const un=new qn(2.42,.07,.12);un.rotateX(Zt*.52),un.translate(0,2.78+0,Zt*.32),nn.push(un)}const wi=new Ot(Ps(nn,!1),xe);wi.castShadow=!0,wi.receiveShadow=!0,w.add(wi),Z.push(wi);const Gs=2.6,_i=.56,Ts=.92,hs=Math.atan2(_i,Ts),Hi=[];for(const Zt of[-1,1]){const un=new qn(2.5,.07,Math.hypot(Ts,_i)+.14);un.rotateX(Zt*hs),un.translate(0,Gs+_i-_i*.5+.02,Zt*Ts*.5),Hi.push(un)}const ir=new qn(2.6,.09,.18);ir.translate(0,Gs+_i+.05,0),Hi.push(ir);const is=new Ot(Ps(Hi,!1),Te);is.castShadow=!0,is.receiveShadow=!0,w.add(is),Z.push(is);for(let Zt=0;Zt<2;Zt++){const un=-.55+Zt*.95;for(const Jn of[-1,1])Fe.push({pos:new L(Xt.well.x+un,Gs+_i*.5+.09,Xt.well.z+Jn*Ts*.5+.02),s:.16,sy:.04,ry:M()*We,shade:1})}fe=new Qt,fe.position.set(0,2.3,0),w.add(fe);const ri=new Ot(new jn(.012,.014,.83,5),me);ri.position.y=-.415,fe.add(ri);const Tn=new Qt;Tn.position.y=-.86;const $n=new Ot(new jn(.17,.13,.26,12,1,!0),Re);$n.castShadow=!0,Tn.add($n);const di=new Ot(new jn(.13,.13,.03,12),xe);di.position.y=-.13,Tn.add(di);for(const Zt of[-.08,.08]){const un=new Ot(new ci(Zt>0?.163:.14,.01,4,14),new sn({color:4866104,roughness:.6,metalness:.5}));un.rotation.x=Math.PI/2,un.position.y=Zt,Tn.add(un)}const Kn=new Ot(new ci(.15,.009,4,12,Math.PI),me);Kn.rotation.z=0,Kn.position.y=.13,Tn.add(Kn),fe.add(Tn),Z.push($n);const Ti=[];for(let Zt=0;Zt<12;Zt++){const un=Zt/12*We+M()*.4;Ti.push({pos:new L(Xt.well.x+Math.cos(un)*.9,K+.04,Xt.well.z+Math.sin(un)*.9),s:S(M,.08,.17)})}for(let Zt=0;Zt<10;Zt++){const un=M()*We;Ti.push({pos:new L(Xt.well.x+Math.cos(un)*S(M,.95,1.15),.03,Xt.well.z+Math.sin(un)*S(M,.95,1.15)),s:S(M,.1,.22)})}kn.push(...Ti);for(let Zt=0;Zt<5;Zt++){const un=M()*We;_e.push({x:Math.cos(un)*S(M,1.2,1.7),z:Math.sin(un)*S(M,1.2,1.7),s:S(M,.6,1),ry:M()*We})}for(const Zt of Z)Zt.userData.interactId="well-note"}const ne=[],gt=[];{const M=Ht(1501);for(const K of _e){const W=Xt.well.x+K.x,Me=Xt.well.z+K.z;ne.push({pos:new L(W,ii(W,Me)+.02,Me),s:K.s,ry:K.ry,shade:S(M,.85,1.1)})}let se=0;for(;ne.length<290&&se++<3200;){const K=M()*We,W=Math.sqrt(M())*26,Me=Math.cos(K)*W,Q=Math.sin(K)*W;fr(Me,Q)||Math.hypot(Me-Xt.well.x,Q-Xt.well.z)<1.25||Ks(Me,Q).dist<1.85||W>16&&M()>.55||W<12&&M()<.45||ne.push({pos:new L(Me,ii(Me,Q)+.02,Q),s:S(M,.55,1.2)*(W<12?.72:1),ry:M()*We,shade:S(M,.7,1.2)})}for(se=0;gt.length<300&&se++<6e3;){let K,W,Me=!1;if(M()<.4){const ve=M(),ye=mo(ve),De=M()<.5?-1:1;K=ye.x+De*S(M,2.25,3.6),W=ye.z+S(M,-.9,.9),Me=!0}else{const ve=M()*We,ye=Math.sqrt(M())*24;K=Math.cos(ve)*ye,W=Math.sin(ve)*ye}if(fr(K,W)||Math.hypot(K-Xt.well.x,W-Xt.well.z)<1.2||Ks(K,W).dist<2.2)continue;const Q=Math.hypot(K,W);Q<12&&M()<.55||gt.push({pos:new L(K,ii(K,W)+.01,W),s:Me?S(M,.1,.19):S(M,.13,.3)*(Q<12?.72:1),ry:M()*We,shade:S(M,.7,1.25)})}}const ft=q(ge,st,ne,{name:"ferns",receiveShadow:!0}),ot=q(Ge,be,gt,{name:"grass",receiveShadow:!0});for(let M=0;M<ne.length;M++)ft.setColorAt(M,r.setRGB(.9,.95,.85).multiplyScalar(ne[M].shade));for(let M=0;M<gt.length;M++)ot.setColorAt(M,r.setRGB(.9,.95,.8).multiplyScalar(gt[M].shade));ft.instanceColor&&(ft.instanceColor.needsUpdate=!0),ot.instanceColor&&(ot.instanceColor.needsUpdate=!0);const _t=[];{const M=Ht(1611);for(let se=0;se<760;se++){let K,W;if(M()<.42){const Q=M(),ve=mo(Q);K=ve.x+S(M,-1.25,1.25),W=ve.z+S(M,-.7,.7)}else{const Q=M()*We,ve=Math.sqrt(M())*20;K=Math.cos(Q)*ve,W=Math.sin(Q)*ve}if(Math.abs(K)<4.2&&W>-3.4&&W<5.2||Math.abs(K-Xt.well.x)<1.2&&Math.abs(W-Xt.well.z)<1.2)continue;const Me=S(M,.05,.13);_t.push({pos:new L(K,ii(K,W)+.018+M()*.012,W),sx:Me*S(M,.8,1.3),sz:Me*S(M,.8,1.3),sy:1,ry:M()*We,rx:-Math.PI/2+S(M,-.22,.22),rz:S(M,-.2,.2),shade:S(M,.7,1.15)})}}const Pt=q(He,Oe,_t,{name:"leaf-litter"}),Kt=[];{const M=Ht(1663);for(let se=0;se<300;se++){let K,W;if(M()<.5){const Me=M(),Q=mo(Me);K=Q.x+S(M,-2.6,2.6),W=Q.z+S(M,-1.5,1.5)}else{const Me=M()*We,Q=Math.sqrt(M())*19;K=Math.cos(Me)*Q,W=Math.sin(Me)*Q}Math.abs(K)<4.2&&W>-3.4&&W<5.2||Ks(K,W).dist<1.2||Kt.push({pos:new L(K,ii(K,W)+.026,W),s:S(M,.3,.65),ry:M()*We,rx:-Math.PI/2,rz:0,shade:S(M,.65,1.12)})}}const Dt=new sn({map:_,alphaTest:.38,side:Bn,roughness:.95,metalness:0}),wt=q(He,Dt,Kt,{name:"leaf-litter-drifts"}),Lt=[];let ln=null;{const M=Ht(1801);for(let K=0;K<100;K++){const W=M()*We,Me=S(M,7.5,20),Q=Math.cos(W)*Me,ve=Math.sin(W)*Me;if(fr(Q,ve)||Ks(Q,ve).dist<1.9||Math.hypot(Q-Xt.well.x,ve-Xt.well.z)<2.8||Math.hypot(Q,ve-17.2)<5.5)continue;const ye=ii(Q,ve),De=4+Math.floor(M()*3);for(let le=0;le<De;le++)Lt.push({pos:new L(Q+S(M,-.7,.7),ye+S(M,.3,1.05),ve+S(M,-.7,.7)),s:S(M,.14,.28),ry:M()*We,rx:S(M,-.3,.3),rz:S(M,-.25,.25),shade:S(M,.72,1.08)})}const se=[];for(let K=0;K<18;K++){const W=M()*We,Me=S(M,8,18),Q=Math.cos(W)*Me,ve=Math.sin(W)*Me;if(fr(Q,ve)||Ks(Q,ve).dist<2||Math.hypot(Q-Xt.well.x,ve-Xt.well.z)<1.8)continue;const ye=ii(Q,ve)-.05,De=S(M,2.2,4.4),le=S(M,-.2,.2),Ee=[new L(0,0,0),new L(le*.4,De*.55,le*.2),new L(le,De,le*.5)],Xe=gs(Ee,[.06,.035,.012],4);Xe.translate(Q,ye,ve),se.push(Xe);for(let pt=0;pt<3;pt++)Lt.push({pos:new L(Q+le+S(M,-.5,.5),ye+De*S(M,.62,1),ve+le*.5+S(M,-.5,.5)),s:S(M,.14,.27),ry:M()*We,rx:S(M,-.3,.3),rz:S(M,-.25,.25),shade:S(M,.72,1.08)})}se.length&&fn(se,Se,{name:"saplings",castShadow:!1}),ln=q(G,de,Lt,{name:"understory-bushes"})}const qt=Ar(1777,0);qt.scale(1,.42,1);const Yt=[];{const M=Ht(1717);for(const se of kn)Yt.push(se);for(const se of dt)Yt.push(se);for(let se=0;se<40;se++){const K=M()*We,W=S(M,6,18),Me=Math.cos(K)*W,Q=Math.sin(K)*W;Yt.push({pos:new L(Me,ii(Me,Q)+.02,Q),s:S(M,.08,.2)})}}const Dn=Yt.filter(M=>!fr(M.pos.x,M.pos.z)).map(M=>({pos:M.pos,s:M.s??.15,ry:M.ry??0,rx:0,rz:0,sy:.5})),Tt=q(qt,Ze,Dn,{name:"moss"});for(let M=0;M<Dn.length;M++){const se=.7+M*37%10*.035;Tt.setColorAt(M,r.setRGB(se*.95,se,se*.7))}Tt.instanceColor&&(Tt.instanceColor.needsUpdate=!0);{const M=Ht(1999);for(let se=0;se<C.length;se++){if(se%2===1)continue;const K=C[se];Fe.push({pos:new L(K.x,K.topY-.004,K.z),s:K.r*S(M,.38,.6),sy:S(M,.032,.055),ry:M()*We,shade:S(M,.96,1.02)})}}for(let M=Fe.length-1;M>=0;M--)fr(Fe[M].pos.x,Fe[M].pos.z)&&Fe.splice(M,1);const Ln=q(Yf(1888),J,Fe,{name:"ground-snow-caps",receiveShadow:!0});for(let M=0;M<Fe.length;M++){const se=Fe[M].shade??1;Ln.setColorAt(M,r.setRGB(.95*se,.98*se,1*se))}Ln.instanceColor&&(Ln.instanceColor.needsUpdate=!0),Ln.visible=!1;const gn=[];{const M=Ht(2001),se=[[.9,9.4,1.1,.6],[-1.25,12.7,.9,.5],[2.5,15.1,.7,.4],[-2.3,7.2,1,.55],[5.3,11.6,1.3,.7],[-4.4,8.6,.85,.5],[-5.6,13.6,1.1,.6],[8,12.9,.9,.5],[5.5,8.9,.75,.45],[-1.6,17.2,.8,.45]];for(const[K,W,Me,Q]of se){const ve=new Nr(1,18),ye=ve.attributes.position;for(let le=0;le<ye.count;le++){const Ee=ye.getX(le),Xe=ye.getY(le),pt=Math.atan2(Xe,Ee),kt=1+Math.sin(pt*3+M()*2)*.12+Math.sin(pt*5.3)*.07;ye.setX(le,Ee*kt),ye.setY(le,Xe*kt)}const De=new Ot(ve,Ke);De.rotation.x=-Math.PI/2,De.scale.set(Me,Q,1),De.position.set(K,.014,W),De.renderOrder=1,De.visible=!1,t.add(De),gn.push(De)}Ke.opacity=0}const Yn=new Qt;Yn.name="ambient-life",t.add(Yn);const mt=new Qt;mt.visible=!1,Yn.add(mt);const jt=(()=>{const M=[];M.push(.42,0,0,.02,.02,0,.06,0,-.34,.06,0,.34,.02,.02,0,-.3,0,0,-.28,0,-.1,-.3,0,0,-.28,0,.1);const se=new Pn;return se.setAttribute("position",new an(M,3)),se.computeVertexNormals(),se})(),wn=new ns({color:2827292,side:Bn,transparent:!0,opacity:.9,fog:!0}),$t={uTime:{value:0}};wn.onBeforeCompile=M=>{M.uniforms.uTime=$t.uTime,M.vertexShader=`uniform float uTime;
`+M.vertexShader,M.vertexShader=M.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      float flap = sin(uTime * 7.5 + float(gl_InstanceID) * 1.7) * 0.55;
      transformed.y += abs(transformed.z) * flap;`)},wn.customProgramCacheKey=()=>"nature-bird";const dn=[];{const M=Ht(2301);for(let K=0;K<13;K++)dn.push({pos:new L(S(M,-7,7),S(M,-1.5,1.5),S(M,-5,5)),s:S(M,.9,1.5),ry:Math.PI/2+S(M,-.4,.4),rx:S(M,-.2,.2),rz:S(M,-.2,.2)});const se=new ml(jt,wn,dn.length);se.name="bird-flock";for(let K=0;K<dn.length;K++){const W=dn[K];s.position.copy(W.pos),s.rotation.set(W.rx,W.ry,W.rz),s.scale.setScalar(W.s),s.updateMatrix(),se.setMatrixAt(K,s.matrix)}se.instanceMatrix.needsUpdate=!0,se.frustumCulled=!1,mt.add(se)}const Un=new Qt;let Qe=0;{const M=new Ot(new gi(.09,10,8),Le);M.scale.set(1.5,.9,.95),Un.add(M);const se=new Ot(new gi(.062,10,8),Le);se.position.set(.1,.085,0),Un.add(se);const K=new Ot(new Lo(.022,.08,6),new sn({color:11569738,roughness:.8}));K.rotation.z=-Math.PI/2,K.position.set(.17,.08,0),Un.add(K);const W=new Ot(new Lo(.045,.16,5),Le);W.rotation.z=Math.PI/2-.25,W.position.set(-.15,0,0),Un.add(W);for(const De of[-1,1]){const le=new Ot(new jn(.007,.007,.09,4),new sn({color:7034424,roughness:.8}));le.position.set(.01,-.03,De*.03),Un.add(le)}const Me=Ft[0],Q=ii(Me.x,Me.z)+Me.r*1.62,ve=Me.rot,ye=.9;Un.position.set(Me.x+Math.cos(ve)*ye,Q+.06,Me.z-Math.sin(ve)*ye),Un.rotation.y=-ve+Math.PI/2+.5,Qe=Un.position.y,Un.traverse(De=>{De.isMesh&&(De.castShadow=!0)}),Yn.add(Un)}const bi=[];{const M=Ht(2401);for(let se=0;se<2;se++){const K=se===0?45:32,W=new Float32Array(K*3),Me=[];for(let De=0;De<K;De++){let le=0,Ee=0,Xe=0;do{const kt=M()*We,cn=S(M,3.5,17);le=Math.cos(kt)*cn,Ee=Math.sin(kt)*cn,Xe++}while(Xe<10&&Math.hypot(le,Ee)<3.2);const pt=S(M,.4,2.6);W[De*3]=le,W[De*3+1]=pt,W[De*3+2]=Ee,Me.push({baseX:le,baseY:pt,baseZ:Ee,phase:M()*We,speed:S(M,.3,.8),amp:S(M,.3,1.1)})}const Q=new Pn;Q.setAttribute("position",new Vn(W,3)),Q.attributes.position.setUsage(yh);const ve=new Dr({color:16770216,size:.3,map:P,transparent:!0,opacity:0,depthWrite:!1,blending:Pi,sizeAttenuation:!0,fog:!0}),ye=new To(Q,ve);ye.frustumCulled=!1,ye.visible=!1,Yn.add(ye),bi.push({points:ye,mat:ve,geo:Q,seeds:Me,positions:W,count:K,phase:se*2.1})}}function Di(M,se,K){const W=new ni(.09,.07),Me=new sn({map:M,alphaTest:.3,side:Bn,roughness:.85,metalness:0,transparent:!1}),Q=new ml(W,Me,se);Q.instanceMatrix.setUsage(yh),Q.frustumCulled=!1,Q.visible=!1,Q.name="falling";const ve=Ht(2601+se),ye=[];for(let De=0;De<se;De++){const le=ve()*We,Ee=S(ve,4,15.5);ye.push({x:Math.cos(le)*Ee,y:S(ve,3,11),z:Math.sin(le)*Ee,vy:S(ve,.28,.65),sway:S(ve,.4,1.6),phase:ve()*We,spin:S(ve,-1.8,1.8),rx:ve()*We,ry:ve()*We,rz:ve()*We}),Q.setColorAt(De,K(ve))}return Q.instanceColor&&(Q.instanceColor.needsUpdate=!0),Yn.add(Q),{mesh:Q,mat:Me,parts:ye,count:se,rng:ve}}const Gi=Di(R,70,M=>new ke().setRGB(S(M,.92,1),S(M,.75,.9),S(M,.8,.92))),tr=Di(A,70,M=>{const se=["#b2703a","#c08a4c","#96522e","#caa464","#8a5a34"];return new ke(Ri(M,se))});{const M=Ht(2666),se=["#b2703a","#c08a4c","#96522e","#caa464","#8a5a34"];for(let K=0;K<tr.count;K++)tr.mesh.setColorAt(K,r.set(Ri(M,se)));tr.mesh.instanceColor&&(tr.mesh.instanceColor.needsUpdate=!0)}const Zl={id:"well-note",eyebrow:"古井 · THE OLD WELL",title:"井底的一小片天",body:["石壁沁着凉意，青苔沿着砖缝一点点爬。井绳被岁月磨得发亮，木桶里晃着半桶旧年的雨水。","老人们说，把想说的话轻轻说给井听，回声会替你把它藏进冬天。此刻井水很静，静得能照见树梢最后一片红叶。"],footer:"风停了，井绳轻轻碰着石沿。"},ya={id:"well-note",label:"古井",anchor:new L(Xt.well.x,1.15,Xt.well.z),radius:3.1,objects:Z,getPrompt:()=>({key:"E",action:"望向古井"}),available:()=>!0,action:()=>{typeof e?.showPanel=="function"&&e.showPanel(Zl)}},ba=[{minX:Xt.well.x-1.18,maxX:Xt.well.x+1.18,minZ:Xt.well.z-1.18,maxZ:Xt.well.z+1.18,name:"well"},...Ct,...Ie,...en],nr=[vi,B].filter(Boolean),Cn={season:"autumn",weather:"clear",hour:17.2,isNight:!1,overcast:0,wet:0,snow:!1,snowOpacity:0,puddleOpacity:0,fireflyOpacity:0,wind:1};let Ni=0;const Xr={spring:{groundColor:[1.48,1.56,1.26],stoneColor:[1.4,1.38,1.26],pathColor:[1.36,1.3,1.14],fernTint:"#b6d27f",grassTint:"#b9cd91",moss:"#5c6d3d"},summer:{groundColor:[1.44,1.52,1.2],stoneColor:[1.36,1.34,1.22],pathColor:[1.32,1.26,1.1],fernTint:"#8fb45e",grassTint:"#9db57a",moss:"#4e6034"},autumn:{groundColor:[1.82,1.62,1.26],stoneColor:[1.58,1.52,1.38],pathColor:[1.62,1.5,1.26],fernTint:"#c99153",grassTint:"#a89060",moss:"#5f6a38"},winter:{groundColor:[1.3,1.36,1.44],stoneColor:[1.36,1.4,1.44],pathColor:[1.24,1.28,1.3],fernTint:"#8b7f66",grassTint:"#a89878",moss:"#5a5f46"}},I=[];for(const M of["spring","summer","autumn","winter"])I[M]=Dc[M].leaf.map(se=>new ke(se));const ie={spring:["#55713e","#5f7c46","#496333"],summer:["#2f4a28","#37512f","#273f21"],autumn:["#37482e","#3e4f33","#2f4026"],winter:["#3a453c","#414d43","#313c33"]},pe=["#fdeeee","#f9e0e5","#fdf5ec","#f6d7dd","#ffffff"];function ce(M){const se=M==="winter",K=I[M];let W=0,Me=0;for(let Ee=0;Ee<we.length;Ee++){const Xe=we[Ee],pt=K[Ee%K.length].clone();pt.multiplyScalar(Xe.shade),M==="spring"&&pt.multiplyScalar(.88),Ee%2===0?(D.setColorAt(W,pt),W++):(O.setColorAt(Me,pt),Me++)}D.visible=!se,O.visible=!se,D.instanceColor&&(D.instanceColor.needsUpdate=!0),O.instanceColor&&(O.instanceColor.needsUpdate=!0);const Q=ie[M]||ie.autumn;for(let Ee=0;Ee<Ae.length;Ee++){const Xe=new ke(Q[Ee%Q.length]);Xe.multiplyScalar(Ae[Ee].shade*(se?.9:1)),U.setColorAt(Ee,Xe)}U.instanceColor&&(U.instanceColor.needsUpdate=!0);const ve=M==="spring";$.visible=ve;for(let Ee=0;Ee<rt.length;Ee++){const Xe=new ke(pe[Ee%pe.length]).multiplyScalar(rt[Ee].shade);$.setColorAt(Ee,Xe)}$.instanceColor&&($.instanceColor.needsUpdate=!0),he.visible=se;for(let Ee=0;Ee<Nt.length;Ee++){const Xe=.72+Ee%5*.05;he.setColorAt(Ee,r.setRGB(.5*Xe,.42*Xe,.34*Xe))}he.instanceColor&&(he.instanceColor.needsUpdate=!0),Ne.visible=se;for(let Ee=0;Ee<nt.length;Ee++){const Xe=nt[Ee].shade??1;Ne.setColorAt(Ee,r.setRGB(.93*Xe,.96*Xe,1*Xe))}Ne.instanceColor&&(Ne.instanceColor.needsUpdate=!0);const ye=new ke(Xr[M].fernTint);if(Tt.visible=!se,An&&(An.visible=!se),Xn&&(Xn.visible=!se),se)ft.visible=!1,ot.visible=!1;else{ft.visible=!0,ot.visible=!0;const Ee=new ke(M==="autumn"?"#8d8a4e":M==="spring"?"#a8c471":"#7d9a5c");for(let kt=0;kt<ne.length;kt++){const cn=kt%3===0?Ee:ye;ft.setColorAt(kt,cn.clone().multiplyScalar(ne[kt].shade))}const Xe=new ke(Xr[M].grassTint),pt=new ke(M==="autumn"?"#7f8550":M==="spring"?"#9fbf6f":"#7f9a5c");for(let kt=0;kt<gt.length;kt++){const cn=kt%4===0?pt:Xe;ot.setColorAt(kt,cn.clone().multiplyScalar(gt[kt].shade))}ft.instanceColor&&(ft.instanceColor.needsUpdate=!0),ot.instanceColor&&(ot.instanceColor.needsUpdate=!0)}if(ln){ln.visible=!se;for(let Ee=0;Ee<Lt.length;Ee++){const Xe=K[(Ee+1)%K.length].clone().multiplyScalar(Lt[Ee].shade*.8);ln.setColorAt(Ee,Xe)}ln.instanceColor&&(ln.instanceColor.needsUpdate=!0)}const De=Dc[M].leafFall;Pt.visible=!se,wt.visible=!se;for(let Ee=0;Ee<_t.length;Ee++){const Xe=new ke(De[Ee%De.length]).multiplyScalar(_t[Ee].shade);Pt.setColorAt(Ee,Xe)}for(let Ee=0;Ee<Kt.length;Ee++){const Xe=new ke(De[(Ee+2)%De.length]).multiplyScalar(Kt[Ee].shade*.92);wt.setColorAt(Ee,Xe)}if(Pt.instanceColor&&(Pt.instanceColor.needsUpdate=!0),wt.instanceColor&&(wt.instanceColor.needsUpdate=!0),Gi.mesh.visible=ve,tr.mesh.visible=M==="autumn",ct){const Ee=se?["#5b4c3e","#655647","#4f4336"]:M==="autumn"?["#8a5a30","#9a6a34","#71492a","#a3763c"]:M==="spring"?["#6d8a52","#7d9a5e","#5f7c49"]:["#435c3c","#4d6644","#3a5234"];for(let Xe=0;Xe<lt.length;Xe++)ct.setColorAt(Xe,new ke(Ee[Xe%Ee.length]).multiplyScalar(lt[Xe].shade));ct.instanceColor&&(ct.instanceColor.needsUpdate=!0)}if($e){const Ee=se?["#4e4136","#57493c","#443a2f"]:M==="autumn"?["#6f4526","#7d512b","#5d3a21","#8a5e30"]:M==="spring"?["#5a7444","#68854e","#4c6439"]:["#36492f","#3e5237","#2f4128"];for(let Xe=0;Xe<vt.length;Xe++)$e.setColorAt(Xe,new ke(Ee[Xe%Ee.length]).multiplyScalar(vt[Xe].shade));$e.instanceColor&&($e.instanceColor.needsUpdate=!0)}const le=Xr[M];k.color.setRGB(le.groundColor[0],le.groundColor[1],le.groundColor[2]),te.color.setRGB(le.stoneColor[0],le.stoneColor[1],le.stoneColor[2]),X.color.setRGB(le.stoneColor[0],le.stoneColor[1],le.stoneColor[2]),j.color.setRGB(le.stoneColor[0],le.stoneColor[1],le.stoneColor[2]),V.color.setRGB(le.pathColor[0],le.pathColor[1],le.pathColor[2]),Ze.color.set(le.moss)}function ae(M){const se=M.season,K=M.weather,W=se==="spring"||K==="rain"||K==="storm",Me=se==="winter"||K==="snow";if(Cn.wet=W?1:0,Cn.snow=Me,Cn.wind=K==="storm"?1.9:K==="rain"?1.35:K==="fog"?.55:1,W){k.color.multiplyScalar(.7),k.roughness=.5,k.envMapIntensity=.65,k.metalness=.06,te.color.multiplyScalar(.7),X.color.multiplyScalar(.7),j.color.multiplyScalar(.7);for(const le of[te,X,j])le.roughness=.3,le.envMapIntensity=.85,le.metalness=.06;V.color.multiplyScalar(.7),V.roughness=.42,V.envMapIntensity=.7;for(const le of[te,X,j,V])le.needsUpdate=!0}else{k.roughness=.96,k.envMapIntensity=0,k.metalness=0;for(const le of[te,X,j])le.roughness=se==="winter"?.9:.92,le.envMapIntensity=.08,le.metalness=0;V.roughness=.94,V.envMapIntensity=0}Ln.visible=Me,H.visible=Me,Cn.snowOpacity=Me?1:0,Cn.puddleOpacity=W?K==="rain"||K==="storm"?1:.68:0;for(const le of gn)le.visible=W;const Q=M.isNight,ve=M.overcast??0,ye=K==="clear"&&!Q&&ve<.45;mt.visible=ye,Un.visible=ye;const De=se==="summer"&&Q&&(K==="clear"||K==="snow")&&ve<.4;for(const le of bi)le.points.visible=De;Cn.fireflies=De?1:0}function Ce(M){Cn.season=M.season||"autumn",Cn.weather=M.weather||"clear",Cn.hour=M.hour??17.2,Cn.isNight=M.isNight??Wf(Cn.hour),Cn.overcast=M.overcast??0,Cn.sky=Ye({season:Cn.season,weather:Cn.weather,hour:Cn.hour,overcast:Cn.overcast}),ce(Cn.season),ae(Cn),Ke.envMap=Be,Ke.needsUpdate=!0,yt.envMap=Be,yt.needsUpdate=!0,yt.color.set(Cn.isNight?"#101619":"#1d2726")}const Ue=new L;let it=0;const xt=new L;function Jt(M,se){const K=se.rng,W=Ue;for(let Me=0;Me<6;Me++){const Q=K()*We,ve=S(K,3.2,19);if(M.x=Math.cos(Q)*ve,M.z=Math.sin(Q)*ve,Math.hypot(M.x-W.x,M.z-W.z)>4.2)break}M.y=S(K,5,11),M.vy=S(K,.28,.65),M.sway=S(K,.4,1.6),M.phase=K()*We,M.spin=S(K,-1.8,1.8)}function tn(M,se,K={}){const W=Math.min(Number(M)||.016,.1);Ni+=W,n.uTime.value=Ni;const Me=Cn.wind??1;if(n.uWind.value+=(Me-n.uWind.value)*Math.min(1,W*1.8),K.camera&&Ue.copy(K.camera.position),se){const le=Math.abs((se.hour??Cn.hour)-Cn.hour)>.34;(se.season!==Cn.season||se.weather!==Cn.weather||le||se.isNight!==void 0&&se.isNight!==Cn.isNight)&&Ce({...Cn,...se})}const Q=Cn.snow?1:0;Cn.snowOpacity+=(Q-Cn.snowOpacity)*Math.min(1,W*3.5),H.visible?H.material.opacity=Cn.snowOpacity:Cn.snowOpacity=0;const ve=Cn.puddleOpacity,ye=Ke.opacity,De=ye+(ve-ye)*Math.min(1,W*3.2);Ke.opacity=De;for(const le of bi){if(!le.points.visible){le.mat.opacity=Math.max(0,le.mat.opacity-W*2),le.mat.opacity<=.01&&(le.points.visible=!1);continue}le.mat.opacity=Math.min(1,le.mat.opacity+W*1.5);const Ee=le.positions;for(let Xe=0;Xe<le.count;Xe++){const pt=le.seeds[Xe],kt=Ni*pt.speed+pt.phase;Ee[Xe*3]=pt.baseX+Math.sin(kt*.8)*pt.amp+Math.sin(kt*2.1+Xe)*.18,Ee[Xe*3+1]=pt.baseY+Math.sin(kt*1.2+Xe*.7)*.22,Ee[Xe*3+2]=pt.baseZ+Math.cos(kt*.63)*pt.amp+Math.cos(kt*1.7+Xe)*.18}le.geo.attributes.position.needsUpdate=!0,le.mat.opacity*=.985+.015*(.55+.45*Math.sin(Ni*1.7+le.phase))}if(mt.visible){it+=W;const le=150,Ee=it%le/le;xt.set($i(-64,64,Ee),24+Math.sin(Ee*Math.PI*2)*3,-26-10*Math.sin(Ee*Math.PI)),mt.position.copy(xt),mt.rotation.y=Math.sin(Ee*Math.PI*2)*.12,$t.uTime.value=Ni}for(const le of[Gi,tr]){if(!le.mesh.visible)continue;const Ee=le.parts;for(let Xe=0;Xe<le.count;Xe++){const pt=Ee[Xe];pt.y-=pt.vy*W,pt.x+=Math.sin(Ni*pt.sway+pt.phase)*.22*W,pt.z+=Math.cos(Ni*pt.sway*.8+pt.phase)*.18*W,pt.rx+=pt.spin*W*.6,pt.ry+=pt.spin*W*.4,pt.y<.06&&Jt(pt,le);const kt=pt.x-Ue.x,cn=pt.z-Ue.z;kt*kt+cn*cn<2.4*2.4&&Jt(pt,le),s.position.set(pt.x,pt.y,pt.z),s.rotation.set(pt.rx,pt.ry,pt.rz),s.scale.setScalar(1),s.updateMatrix(),le.mesh.setMatrixAt(Xe,s.matrix)}le.mesh.instanceMatrix.needsUpdate=!0}fe&&(fe.rotation.x=Math.sin(Ni*.9)*.022+Math.sin(Ni*2.1)*.006,fe.rotation.z=Math.cos(Ni*.73)*.018),Un.visible&&(Un.rotation.z=Math.sin(Ni*1.3)*.03,Un.position.y=Qe+Math.sin(Ni*2.3)*.006)}return Ce({season:"autumn",weather:"clear",hour:17.2,isNight:!1,overcast:0}),t.userData.nature={setEnvironment:Ce,isNightHour:Wf},{group:t,colliders:ba,cameraOccluders:nr,interactables:[ya],setEnvironment:Ce,update:tn}}function Ix(i=7){return bn(512,512,(e,t,n)=>{const s=Ht(i);e.fillStyle="#6d4b2f",e.fillRect(0,0,t,n);for(let r=0;r<26;r++){const o=s()*t,a=S(s,16,120),c=e.createLinearGradient(o,0,o+a,0),l=s()>.5?"#a67b4c":"#3a2414";c.addColorStop(0,"rgba(0,0,0,0)"),c.addColorStop(.5,l),c.addColorStop(1,"rgba(0,0,0,0)"),e.globalAlpha=S(s,.04,.14),e.fillStyle=c,e.fillRect(o,0,a,n)}e.globalAlpha=1;for(let r=0;r<420;r++){const o=s()*t,a=S(s,1,7),c=S(s,.008,.03);e.beginPath(),e.strokeStyle=s()>.5?"#3a2414":"#a47a4d",e.globalAlpha=S(s,.05,.24),e.lineWidth=S(s,.6,2.2);for(let l=0;l<=n;l+=8){const u=o+Math.sin(l*c+r)*a+Math.sin(l*c*2.6)*a*.25;l===0?e.moveTo(u,l):e.lineTo(u,l)}e.stroke()}e.globalAlpha=1;for(let r=0;r<5;r++){const o=s()*t,a=s()*n,c=S(s,6,16);for(let l=3;l>=0;l--)e.beginPath(),e.ellipse(o,a,c*(1+l*.6),c*(.5+l*.5),0,0,We),e.strokeStyle=l===0?"#24150a":"#3a2414",e.globalAlpha=l===0?.6:.18,e.lineWidth=l===0?2:3,e.stroke();e.globalAlpha=1}for(let r=0;r<70;r++)e.fillStyle=s()>.55?"rgba(122,126,88,.10)":"rgba(30,22,14,.12)",e.beginPath(),e.ellipse(s()*t,s()*n,S(s,4,30),S(s,2,12),s()*We,0,We),e.fill();li(e,t,n,s,.055)},{repeat:[1,1]})}function Dx(i=13){return bn(128,128,(e,t,n)=>{const s=Ht(i),r=t/2,o=n/2;e.fillStyle="#7c5838",e.fillRect(0,0,t,n);for(let a=1;a<26;a++)e.beginPath(),e.ellipse(r+S(s,-3,3),o+S(s,-3,3),a/26*t*.48,a/26*n*.46,S(s,-.2,.2),0,We),e.strokeStyle=a%3===0?"#3a2414":"#5d4028",e.globalAlpha=S(s,.25,.6),e.lineWidth=S(s,.8,2),e.stroke();e.globalAlpha=1;for(let a=0;a<7;a++){const c=s()*We;e.strokeStyle="#2a180c",e.globalAlpha=.5,e.lineWidth=1.2,e.beginPath(),e.moveTo(r,o),e.lineTo(r+Math.cos(c)*t*S(s,.2,.45),o+Math.sin(c)*n*S(s,.2,.45)),e.stroke()}e.globalAlpha=1,li(e,t,n,s,.06)},{wrapS:on,wrapT:on})}function Nx({size:i=512,planks:e=6,seed:t=21}={}){return bn(i,i,(n,s,r)=>{const o=Ht(t);n.fillStyle="#5d4029",n.fillRect(0,0,s,r);const a=s/e;for(let c=0;c<e;c++){const l=c*a;n.globalAlpha=S(o,.05,.2),n.fillStyle=o()>.5?"#8a6540":"#3a2616",n.fillRect(l,0,a,r),n.globalAlpha=1;for(let u=0;u<46;u++){const d=l+S(o,2,a-2);n.beginPath(),n.strokeStyle=o()>.5?"#33210f":"#9a7450",n.globalAlpha=S(o,.06,.26),n.lineWidth=S(o,.6,1.8);const f=S(o,.5,3);for(let h=0;h<=r;h+=10){const p=d+Math.sin(h*.02+u)*f;h===0?n.moveTo(p,h):n.lineTo(p,h)}n.stroke()}n.globalAlpha=1,n.fillStyle="rgba(22,13,7,.62)",n.fillRect(l-1,0,2.4,r),n.fillStyle="rgba(200,168,120,.10)",n.fillRect(l+2.2,0,1.6,r)}for(let c=0;c<6;c++){const l=o()*s,u=o()*r,d=S(o,5,12);for(let f=2;f>=0;f--)n.beginPath(),n.ellipse(l,u,d*(1+f*.6),d*(.5+f*.45),0,0,We),n.strokeStyle=f===0?"#24150a":"#33210f",n.globalAlpha=f===0?.5:.2,n.lineWidth=1.6,n.stroke();n.globalAlpha=1}li(n,s,r,o,.05)},{repeat:[1,1]})}function Ux(i=31){return bn(256,256,(e,t,n)=>{const s=Ht(i);e.fillStyle="#eef2f3",e.fillRect(0,0,t,n);for(let r=0;r<90;r++){const o=s()*t,a=s()*n,c=S(s,6,46),l=e.createRadialGradient(o,a,0,o,a,c),u=s()>.5?"212,224,232":"255,255,255";l.addColorStop(0,`rgba(${u},${S(s,.12,.3)})`),l.addColorStop(1,`rgba(${u},0)`),e.fillStyle=l,e.fillRect(o-c,a-c,c*2,c*2)}for(let r=0;r<140;r++)e.fillStyle="rgba(255,255,255,.75)",e.fillRect(s()*t,s()*n,S(s,.6,1.6),S(s,.6,1.6));li(e,t,n,s,.022)},{repeat:[1,1]})}function Fx(){return bn(256,320,(i,e,t)=>{const n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#3a2410"),n.addColorStop(.42,"#9c5a1e"),n.addColorStop(1,"#eaa055"),i.fillStyle=n,i.fillRect(0,0,e,t);const s=i.createRadialGradient(e*.52,t*.7,4,e*.52,t*.7,e*.66);s.addColorStop(0,"rgba(255,226,178,.82)"),s.addColorStop(.35,"rgba(255,170,94,.45)"),s.addColorStop(1,"rgba(120,60,20,0)"),i.fillStyle=s,i.fillRect(0,0,e,t),i.fillStyle="rgba(30,18,9,.55)",i.fillRect(0,0,e,t*.1),i.fillRect(0,0,e*.07,t),i.fillRect(e*.93,0,e*.07,t),i.fillStyle="rgba(40,22,10,.35)",i.fillRect(e*.12,t*.62,e*.24,t*.38)},{repeat:[1,1],wrapS:on,wrapT:on})}function Ox(i=41){return bn(128,256,(e,t,n)=>{const s=Ht(i);e.clearRect(0,0,t,n);for(let o=0;o<64;o++){const a=s()*t,c=S(s,n*.3,n*.95),l=e.createLinearGradient(0,0,0,c);l.addColorStop(0,"rgba(12,9,7,.55)"),l.addColorStop(.35,"rgba(16,12,9,.28)"),l.addColorStop(1,"rgba(20,15,10,0)"),e.fillStyle=l,e.fillRect(a,0,S(s,2,9),c)}const r=e.createLinearGradient(0,0,0,n*.42);r.addColorStop(0,"rgba(10,8,6,.6)"),r.addColorStop(1,"rgba(10,8,6,0)"),e.fillStyle=r,e.fillRect(0,0,t,n*.42)},{wrapS:on,wrapT:on})}function zx({scene:i}={}){const e=Ht(9137),t=new Qt;t.name="cabin",i&&i.add(t);const n=[],s=Gt.width/2,r=Gt.depth/2,o=Gt.frontZ,a=Gt.backZ,c=Gt.floorY,l=Gt.foundationY,u=Gt.logRadius,d=.17,f=d*2,h=u*2,p=8,_=.02,m=l+_,g=m+p*h,b=as.halfX,T=as.halfZ,y=.34,A=Gt.roof.thickness,R=s+Gt.roof.overhangX;let F=(Gt.ridgeY-Gt.eaveY)/R;for(let I=0;I<8;I++){const ie=Math.sqrt(1+F*F);F=(Gt.ridgeY-Gt.eaveY-A*ie)/R}const x=1/Math.sqrt(1+F*F),P=F*x,N=Gt.ridgeY-R*F,k=r+Gt.roof.overhangFront,V=-r-Gt.roof.overhangBack,te=k-V,X=R/x,j=I=>Gt.ridgeY-Math.abs(I)*F-A/x,Se=(I,ie)=>-.055*Math.sin(Math.PI*vn(I,0,1))*Math.sin(Math.PI*vn(ie,0,1)),oe=Gt.porch,Re=oe.floorY,xe=o-.02,Te=oe.frontZ,de=o-.08,tt=oe.frontZ+.25,Mt=.144,Wt=.16,Y=oe.width/2+.2,st=I=>oe.roofY-(I-de)*Mt,be=I=>st(I)+Wt/Math.cos(Math.atan(Mt)),Oe=oe.frontZ-.1,Ze=st(Oe)-.02-.16,J=(I,ie)=>-.055*Math.sin(Math.PI*vn(Math.abs(I)/R,0,1))*Math.sin(Math.PI*vn((ie-V)/te,0,1)),Ve=(I,ie)=>-.032*Math.sin(Math.PI*vn((I+Y)/(2*Y),0,1))*Math.sin(Math.PI*vn((ie-de)/(tt-de),0,1)),Ke=Gt.door.width,yt=Gt.door.height,me=c+yt,Le=Gt.windows;function Be(I,ie){let pe=null,ce=null;for(let ae=0;ae<p;ae++){const Ce=m+ae*h,Ue=Ce+h;Ue<=I+1e-6||Ce>=ie-1e-6||(pe=pe===null?Ce:Math.min(pe,Ce),ce=ce===null?Ue:Math.max(ce,Ue))}return pe===null?[I,ie]:[pe,ce]}const Ye=(I,ie,pe)=>({axis:I,sign:ie,outer:pe,point:(ce,ae,Ce)=>I==="x"?new L(ce,ae,pe+ie*Ce):new L(pe+ie*Ce,ae,ce)}),Je={id:"front",...Ye("x",1,o),uMin:-s,uMax:s,throughParity:0},bt={id:"back",...Ye("x",-1,a),uMin:-s,uMax:s,throughParity:0},At={id:"left",...Ye("z",-1,Gt.leftX),uMin:-r,uMax:r,throughParity:1},z={id:"right",...Ye("z",1,Gt.rightX),uMin:-r,uMax:r,throughParity:1},H=[Je,bt,At,z],E=Le.filter(I=>I.face==="front");Le.find(I=>I.face==="right");const ue=Le.map(I=>{const ie=c+I.y,pe=ie-I.height/2,ce=ie+I.height/2,ae=Be(pe,ce),Ce=I.face==="front"?I.x-I.width/2:I.z-I.width/2,Ue=I.face==="front"?I.x+I.width/2:I.z+I.width/2,it=Math.max(pe,ae[0]),xt=Math.min(ce,ae[1]);return{...I,y0:pe,y1:ce,holeY0:ae[0],holeY1:ae[1],u0:Ce,u1:Ue,visY0:it,visY1:xt,wall:I.face==="front"?Je:z}}),Pe=Be(c,me);Je.openings=[{u0:-Ke/2,u1:Ke/2,y0:Pe[0],y1:Pe[1],id:"door"},...E.map(I=>{const ie=ue.find(pe=>pe.id===I.id);return{u0:ie.u0,u1:ie.u1,y0:ie.holeY0,y1:ie.holeY1,id:I.id}})].sort((I,ie)=>I.u0-ie.u0),bt.openings=[],At.openings=[],z.openings=[{u0:ue.find(I=>I.id==="side-right").u0,u1:ue.find(I=>I.id==="side-right").u1,y0:ue.find(I=>I.id==="side-right").holeY0,y1:ue.find(I=>I.id==="side-right").holeY1,id:"side-right"}];const C=Ix(7),v=Dx(13),G=(()=>{const I=Il({size:512,seed:11,base:"#57544b",light:"#948d7d",dark:"#242319"});return I.repeat.set(.62,.62),I})(),re=(()=>{const I=W0({size:512,seed:15});return I.repeat.set(.92,.44),I})(),ge=Nx({planks:6,seed:21});ge.repeat.set(.7,.7);const Ge=(()=>{const I=Rs({base:"#5d4029",light:"#98714a",dark:"#2c1a0e",seed:31});return I.repeat.set(.62,.62),I})(),He=(()=>{const I=Rs({base:"#45311f",light:"#735537",dark:"#1e120a",seed:44});return I.repeat.set(.7,.7),I})(),we=Fx(),Ae=B2({seed:23}),rt=Ux(31);rt.repeat.set(.8,.8);const Nt=Ox(41),nt=uh({seed:12}),Fe=I=>V2(I),Ct=new sn({color:"#af9c85",roughness:.1,metalness:0,transparent:!0,opacity:.36,depthWrite:!1,side:Bn,envMapIntensity:.65,emissive:new ke("#ff9c46"),emissiveMap:we,emissiveIntensity:0}),ut={logs:Fe({map:C,roughness:.8,color:"#e3d5bf",bumpMap:C,bumpScale:.22}),logEnds:Fe({map:v,roughness:.84,color:"#dfd0b8"}),core:Fe({color:"#2a1e14",roughness:.96}),trim:Fe({map:Ge,roughness:.76,color:"#dcc9ad"}),trimDark:Fe({map:He,roughness:.8,color:"#c9b596"}),plank:Fe({map:ge,roughness:.78,color:"#d5c0a3"}),door:Fe({map:ge,roughness:.8,color:"#b3916c"}),stone:Fe({map:G,roughness:.9,color:"#c0b8a7"}),stonePier:Fe({map:G,roughness:.92,color:"#948d7e"}),stoneSoot:Fe({map:G,roughness:.94,color:"#a49c8c"}),shingle:Fe({map:re,roughness:.84,color:"#d6c1a4",bumpMap:re,bumpScale:.5}),soffit:Fe({map:He,roughness:.84,color:"#c2ad90"}),metal:Fe({color:"#2b2620",roughness:.48,metalness:.72}),lanternGlass:new sn({color:"#ffce8c",emissive:new ke("#ff9640"),emissiveIntensity:.6,transparent:!0,opacity:.72,roughness:.3,depthWrite:!1}),snow:new sn({map:rt,color:"#f2f6f8",roughness:.88,metalness:0,transparent:!0,opacity:0,depthWrite:!0}),rain:new ns({map:Ae,color:"#cfe0ea",transparent:!0,opacity:0,depthWrite:!1,side:Bn}),soot:new ns({map:Nt,color:"#15100c",transparent:!0,opacity:.68,depthWrite:!1,side:Bn}),glass:Ct},Vt=new Map,ee=[];function je(I,ie){let pe=ie;pe.index&&(pe=pe.toNonIndexed());for(const ae of Object.keys(pe.attributes))ae!=="position"&&ae!=="normal"&&ae!=="uv"&&pe.deleteAttribute(ae);if(pe.attributes.normal||pe.computeVertexNormals(),!pe.attributes.uv){const ae=pe.attributes.position.count;pe.setAttribute("uv",new Vn(new Float32Array(ae*2),2))}let ce=Vt.get(I);ce||(ce=[],Vt.set(I,ce),ee.push(I)),ce.push(pe)}const ze=new L,St=new bs,Et=new Ss,qe=new Mn,Bt=new L(1,1,1);function Ut(I,ie="geometry"){const pe=[];for(const ae of I){if(!ae||!ae.attributes||!ae.attributes.position)continue;const Ce=ae.index?ae.toNonIndexed():ae;for(const Ue of Object.keys(Ce.attributes))Ue!=="position"&&Ue!=="normal"&&Ue!=="uv"&&Ce.deleteAttribute(Ue);Ce.attributes.normal||Ce.computeVertexNormals(),Ce.attributes.uv||Ce.setAttribute("uv",new Vn(new Float32Array(Ce.attributes.position.count*2),2)),pe.push(Ce)}if(!pe.length)return null;if(pe.length===1)return pe[0];const ce=Ps(pe,!1);return ce||console.warn(`[cabin] mergeGeometries failed for "${ie}" (${pe.length} pieces)`),ce}function _n(I,ie,pe){const ce=I.attributes.uv;if(!ce)return I;for(let ae=0;ae<ce.count;ae++)ce.setXY(ae,ce.getX(ae)*ie,ce.getY(ae)*pe);return ce.needsUpdate=!0,I}function ht(I,ie,pe,ce,ae,Ce,Ue,it={}){let xt;if(it.rounded?xt=new os(ie,pe,ce,2,Math.min(it.rounded,ie/2,pe/2,ce/2)):xt=new qn(ie,pe,ce),it.uv!==!1){const Jt=it.uv?it.uv[0]:Math.max(ie,ce),tn=it.uv?it.uv[1]:pe;_n(xt,Jt,tn)}return Et.set(it.rot?.[0]??0,it.rot?.[1]??0,it.rot?.[2]??0),St.setFromEuler(Et),qe.compose(ze.set(ae,Ce,Ue),St,Bt),xt.applyMatrix4(qe),je(I,xt),xt}function fn(I,ie,pe,ce,ae,Ce,Ue,it,xt={}){const Jt=ie.point(Ce,Ue,it);return ie.axis==="x"?ht(I,pe,ce,ae,Jt.x,Jt.y,Jt.z,xt):ht(I,ae,ce,pe,Jt.x,Jt.y,Jt.z,xt),Jt}function vi(I,ie,pe,ce,ae,Ce,Ue,it,xt={}){const Jt=new jn(ie,pe,ce,ae,1,!!xt.open);return xt.uv!==!1&&_n(Jt,xt.uvScale?.[0]??1,xt.uvScale?.[1]??1),Et.set(xt.rot?.[0]??0,xt.rot?.[1]??0,xt.rot?.[2]??0),St.setFromEuler(Et),qe.compose(ze.set(Ce,Ue,it),St,Bt),Jt.applyMatrix4(qe),je(I,Jt),Jt}function B(I,ie,pe,ce,ae){const Ce=new jn(1,1,1,14,1,!1);I==="x"?(Ce.scale(u,ie,d),Ce.rotateZ(Math.PI/2),Ce.translate(pe,ce,ae)):(Ce.scale(d,ie,u),Ce.rotateX(Math.PI/2),Ce.translate(ae,ce,pe)),_n(Ce,1,ie/1.35),je("logs",Ce)}function q(I,ie,pe,ce,ae){const Ce=new Nr(1,14);Ce.scale(d,u,1),I==="x"?(Ce.rotateY(ae>0?Math.PI/2:-Math.PI/2),Ce.translate(ie+ae*.002,pe,ce)):(ae<0&&Ce.rotateY(Math.PI),Ce.translate(ce,pe,ie+ae*.002)),je("logEnds",Ce)}function D(I,ie,pe,ce,ae,Ce={}){const Ue=new gl(ie.map(xt=>new et(xt[0],xt[1]))),it=new aa(Ue,{depth:pe,bevelEnabled:!1,steps:1,curveSegments:1});return Ce.uvScale&&_n(it,Ce.uvScale[0],Ce.uvScale[1]),ae&&it.applyMatrix4(ae),je(I,it),it}const O=Gt.width+.36,U=Gt.depth+.36;ht("stone",O+.16,.1,U+.16,0,.05,0,{uv:[O,.1]}),ht("stone",O,l-.1,U,0,.1+(l-.1)/2,0,{uv:[O,l]});for(let I=0;I<30;I++){const ie=I%4,pe=e()*2-1,ce=S(e,.28,.72),ae=S(e,.09,.16),Ce=S(e,.06,l-.1),Ue=S(e,.015,.045);ie===0?ht("stone",ce,ae,.1,pe*(O/2-.6),Ce,U/2+Ue*.5,{uv:[ce,ae]}):ie===1?ht("stone",ce,ae,.1,pe*(O/2-.6),Ce,-U/2-Ue*.5,{uv:[ce,ae]}):ie===2?ht("stone",.1,ae,ce,-O/2-Ue*.5,Ce,pe*(U/2-.5),{uv:[ce,ae]}):ht("stone",.1,ae,ce,O/2+Ue*.5,Ce,pe*(U/2-.5),{uv:[ce,ae]})}for(const I of H)fn("trimDark",I,I.uMax-I.uMin+.12,_,f+.06,0,l+_/2,-.17+.03);function $(I,ie,pe,ce){let ae=[I.slice()];for(const Ce of ie){if(ce<=Ce.y0+1e-6||pe>=Ce.y1-1e-6)continue;const Ue=[];for(const[it,xt]of ae){if(Ce.u1<=it+1e-6||Ce.u0>=xt-1e-6){Ue.push([it,xt]);continue}Ce.u0>it&&Ue.push([it,Math.min(Ce.u0,xt)]),Ce.u1<xt&&Ue.push([Math.max(Ce.u1,it),xt])}ae=Ue}return ae}for(let I=0;I<p;I++){const ie=m+u+I*h,pe=ie-u,ce=ie+u;for(const ae of H){const Ce=I%2===ae.throughParity,Ue=Ce?ae.uMin-y:ae.axis==="x"?-b:-T,it=Ce?ae.uMax+y:ae.axis==="x"?b:T,xt=ae.outer-ae.sign*d,Jt=$([Ue,it],ae.openings,pe,ce);for(const[tn,M]of Jt)M-tn<.04||B(ae.axis,M-tn,(tn+M)/2,ie,xt);if(Ce)for(const[tn,M]of Jt)Math.abs(tn-Ue)<1e-4&&q(ae.axis,tn,ie,xt,-1),Math.abs(M-it)<1e-4&&q(ae.axis,M,ie,xt,1)}}function he(I){const ie=-f/2-.09,pe=.13,ce=[];let ae=I.uMin;const Ce=[...I.openings].sort((Ue,it)=>Ue.u0-it.u0);for(const Ue of Ce)Ue.u0>ae+1e-4&&ce.push([ae,Ue.u0,l,g]),Ue.y0>l+.01&&ce.push([Ue.u0,Ue.u1,l,Ue.y0]),Ue.y1<g-.01&&ce.push([Ue.u0,Ue.u1,Ue.y1,g]),ae=Math.max(ae,Ue.u1);ae<I.uMax-1e-4&&ce.push([ae,I.uMax,l,g]);for(const[Ue,it,xt,Jt]of ce)it-Ue<.02||Jt-xt<.02||fn("core",I,it-Ue,Jt-xt,pe,(Ue+it)/2,(xt+Jt)/2,ie,{uv:!1})}H.forEach(he),ht("core",b*2+.2,.08,T*2+.2,0,g+.05,0,{uv:!1});for(const I of[At,z])fn("trim",I,te+.04,.07,.42,(k+V)/2,g+.015,-f/2-.01);const Ne=g-.02,lt=j(0)-.03,vt=s+.02,ct=[[-vt,Ne],[vt,Ne],[0,lt]];for(const I of[-1,1]){const ie=I>0?o-.23:a+.05,pe=new Mn().makeTranslation(0,0,ie);D("plank",ct,.18,0,pe,{uvScale:[1,1]}),ht("trim",vt*2+.1,.12,.26,0,Ne+.045,I>0?o-.17:a+.17,{uv:[vt*2,.12]})}{const I=o-.228,ie=Ne+(lt-Ne)*.42,pe=new Nr(.3,22);pe.translate(0,ie,I+.002),je("core",pe);const ce=new ci(.31,.035,8,26);ce.translate(0,ie,I+.012),je("trim",ce);for(let Ce=0;Ce<3;Ce++){const Ue=new qn(.045,.56,.035);Ue.rotateZ(Ce*Math.PI/3),Ue.translate(0,ie,I+.02),je("trimDark",Ue)}const ae=new jn(.06,.06,.05,10);ae.rotateX(Math.PI/2),ae.translate(0,ie,I+.03),je("trimDark",ae)}const $e=Math.atan2(P,x),Ie=Gt.chimney,dt=Ie.z-Ie.depth/2,Ft=Ie.z+Ie.depth/2,en=(Math.abs(Ie.x)-Ie.width/2+.1)/x;function kn(I,ie,pe,ce,ae){const Ce=pe-ie,Ue=ae-ce,it=new qn(Math.max(Ce,.05),A,Math.max(Ue,.05),Math.max(2,Math.ceil(Ce/1)),1,Math.max(2,Math.ceil(Ue/1)));it.rotateZ(-I*$e);const xt=(ie+pe)/2,Jt=(ce+ae)/2,tn=new L(I*xt*x,Gt.ridgeY-xt*P,Jt),M=new L(I*P,x,0);return tn.addScaledVector(M,-A/2),it.translate(tn.x,tn.y,tn.z),it}const Wn=[kn(1,0,X,V,k),kn(-1,0,X,V,dt),kn(-1,0,en,dt,Ft),kn(-1,0,X,Ft,k)];let Nn=Ut(Wn,"roof-panels");if(!Nn)throw new Error("cabin: failed to merge roof panels");Nn.index&&(Nn=Nn.toNonIndexed());{const I=Nn.attributes.position,ie=Nn.attributes.uv;for(let pe=0;pe<I.count;pe++){const ce=I.getX(pe),ae=I.getY(pe),Ce=I.getZ(pe),Ue=Math.abs(ce)/x,it=vn(Ue/X,0,1),xt=vn((Ce-V)/te,0,1);I.setY(pe,ae+Se(it,xt)),ie.setXY(pe,Ce,Ue)}I.needsUpdate=!0,ie.needsUpdate=!0,Nn.computeVertexNormals()}const An=Nn.clone();{const I=An.attributes.position,ie=An.attributes.uv;for(let pe=0;pe<I.count;pe++){const ce=I.getX(pe),ae=I.getZ(pe);I.setY(pe,I.getY(pe)-.016),ie.setXY(pe,Math.abs(ce)/x,ae)}I.needsUpdate=!0,ie.needsUpdate=!0,An.computeVertexNormals()}je("shingle",Nn),je("soffit",An),D("trimDark",[[-.22,Gt.ridgeY-.38],[.22,Gt.ridgeY-.38],[0,Gt.ridgeY]],te+.1,0,new Mn().makeTranslation(0,0,V-.05));const Xn=N-Gt.eaveY+.03,w=(N+Gt.eaveY)/2-.005;ht("trimDark",.055,Xn,te+.04,R-.02,w,(k+V)/2,{uv:[te,Xn]});for(const[I,ie]of[[V-.02,dt-.01],[Ft+.01,k+.02]])ht("trimDark",.055,Xn,ie-I,-R+.02,w,(I+ie)/2,{uv:[ie-I,Xn]});{const I=X+.02;for(const ie of[-1,1]){const pe=new L(ie*P,x,0);for(const[ce]of[[k-.02],[V+.02]]){const ae=X/2,Ce=new L(ie*ae*x,Gt.ridgeY-ae*P,ce);Ce.addScaledVector(pe,-.1),ht("trim",I,.22,.075,Ce.x,Ce.y,Ce.z,{rot:[0,0,-ie*$e],uv:[I,.22]})}}}{const I=(s-.35)/x,ie=X-.07,pe=ie-I,ce=(I+ie)/2;for(const ae of[-1,1]){const Ce=new L(ae*P,x,0);for(let Ue=V+.45;Ue<=k-.45;Ue+=1.1){if(ae<0&&Ue>dt-.24&&Ue<Ft+.24)continue;const it=new L(ae*ce*x,Gt.ridgeY-ce*P,Ue);it.addScaledVector(Ce,-.27),ht("trimDark",pe,.13,.07,it.x,it.y,it.z,{rot:[0,0,-ae*$e],uv:[pe,.13]})}}}const Z=Math.atan(Mt),_e=tt-de,fe=(de+tt)/2;{const I=new qn(Y*2,Wt,_e,12,1,8);I.rotateX(Z);const ie=new L(0,Math.cos(Z),Math.sin(Z)),pe=new L(0,be(fe),fe).addScaledVector(ie,-Wt/2);I.translate(pe.x,pe.y,pe.z);const ce=I.attributes.position,ae=I.attributes.uv;for(let Ue=0;Ue<ce.count;Ue++){const it=ce.getX(Ue),xt=ce.getZ(Ue),Jt=vn((it+Y)/(2*Y),0,1),tn=vn((xt-de)/_e,0,1);ce.setY(Ue,ce.getY(Ue)-.032*Math.sin(Math.PI*Jt)*Math.sin(Math.PI*tn)),ae.setXY(Ue,it,xt)}ce.needsUpdate=!0,ae.needsUpdate=!0,I.computeVertexNormals();const Ce=I.clone();{const Ue=Ce.attributes.position,it=Ce.attributes.uv;for(let xt=0;xt<Ue.count;xt++)Ue.setY(xt,Ue.getY(xt)-.014),it.setXY(xt,Ue.getX(xt),Ue.getZ(xt));Ue.needsUpdate=!0,it.needsUpdate=!0,Ce.computeVertexNormals()}je("shingle",I),je("soffit",Ce)}ht("trimDark",Y*2+.02,.2,.06,0,be(tt)-.09,tt-.01,{uv:[Y*2,.2]});for(const I of[-1,1])ht("trim",.06,.2,_e/Math.cos(Z),I*(Y-.04),be(fe)-.1,fe,{rot:[Z,0,0],uv:[_e,.2]});ht("trim",Y*2,.16,.09,0,be(de+.03)+.04,de+.02,{uv:[Y*2,.16]});for(const I of[-2.85,-1.9,-.95,0,.95,1.9,2.85])ht("trimDark",.07,.1,_e/Math.cos(Z)-.08,I,st(fe)-.06,fe,{rot:[Z,0,0],uv:[_e,.1]});{const I=Ie.width,ie=Ie.depth,pe=Ie.height-.25,ce=3.46;ht("stone",I+.3,.22,ie+.3,Ie.x,.11,Ie.z,{uv:[I,.22]}),ht("stone",I+.06,ce-.22,ie+.06,Ie.x,.22+(ce-.22)/2,Ie.z,{uv:[I,ce]}),ht("stoneSoot",I-.02,pe-ce,ie-.02,Ie.x,(pe+ce)/2,Ie.z,{uv:[I,pe]}),ht("stoneSoot",I+.16,.14,ie+.16,Ie.x,pe+.07,Ie.z,{uv:[I,.14]}),ht("stoneSoot",I+.34,.18,ie+.34,Ie.x,pe+.23,Ie.z,{uv:[I,.18]}),ht("stone",I+.4,.08,ie+.4,Ie.x,Ie.capY-.04,Ie.z,{uv:[I,.08]}),ht("stone",I+.24,.42,ie+.24,Ie.x,3.41,Ie.z,{uv:[I,.42]});const ae=2.55,Ce=pe-.12-ae/2,Ue=new ni(I*.88,ae);Ue.translate(Ie.x+.02,Ce,Ie.z+ie/2+.006),je("soot",Ue);const it=new ni(ie*.84,ae);it.rotateY(-Math.PI/2),it.translate(Ie.x-I/2-.006,Ce,Ie.z+.02),je("soot",it)}const ne=oe.width/2,gt=Te-xe,ft=oe.frontZ-.1,ot=[];for(const I of[-2.7,-.9,.9,2.7])ht("stonePier",.3,.19,.3,I,.095,Te-.32,{uv:[.3,.19]});for(const I of[xe+.3,(xe+Te)/2,Te-.18])ht("trimDark",ne*2-.04,.09,.12,0,.235,I,{uv:[ne*2,.12]});{const pe=(gt+.04-.12)/7;for(let ce=0;ce<7;ce++){const ae=xe-.01+pe/2+ce*(pe+.02);ht("trim",ne*2-.02,.06,pe,0,.31+(e()-.5)*.004,ae,{uv:[ne*2,pe]})}}ht("trimDark",ne*2,.1,.05,0,.28,Te+.005,{uv:[ne*2,.1]});for(const I of[-1,1])ht("trimDark",.05,.1,gt,I*(ne-.015),.28,(xe+Te)/2,{uv:[gt,.1]});{const I=oe.stepRise,ie=Re-I,pe=ie-I,ce=.36;ht("trim",2.3,ie-.01,ce,0,(ie+.01)/2,Te+ce/2,{uv:[2.3,ce]}),ht("trim",2.62,pe-.01,ce,0,(pe+.01)/2,Te+ce*1.5,{uv:[2.62,ce]}),ot.push({w:2.3,h:.035,d:ce*.8,x:0,y:ie+.018,z:Te+ce/2}),ot.push({w:2.62,h:.035,d:ce*.8,x:0,y:pe+.018,z:Te+ce*1.5})}for(const I of[-2.85,oe.postX]){ht("stone",.28,.1,.28,I,Re+.05,ft,{uv:[.28,.1]});const ie=Re+.1;ht("trim",.2,Ze-ie,.2,I,(ie+Ze)/2,ft,{uv:[.2,Ze-ie]});for(const pe of[-1,1]){const ce=I+pe*.1,ae=2.5,Ce=I+pe*.62,Ue=Ze+.08,it=Ce-ce,xt=Ue-ae;ht("trim",Math.hypot(it,xt),.09,.11,(ce+Ce)/2,(ae+Ue)/2,ft,{rot:[0,0,Math.atan2(xt,it)],uv:[Math.hypot(it,xt),.09]})}}ht("trimDark",Y*2-.1,.16,.16,0,Ze+.08,ft,{uv:[Y*2,.16]});for(const I of[-1,1])ht("trimDark",.13,.15,_e/Math.cos(Z),I*(ne-.06),st(fe)-.1,fe,{rot:[Z,0,0],uv:[_e,.15]});const _t=oe.frontZ-.07,Pt=Re+.9;function Kt(I,ie,pe,ce,ae){const Ce=I==="x"?pe-ie:ae-ce,Ue=I==="x"?(ie+pe)/2:ie,it=I==="x"?ce:(ce+ae)/2;ht("trim",I==="x"?Ce:.09,.07,I==="x"?.09:Ce,Ue,Pt,it,{uv:[Ce,.09]}),ht("trim",I==="x"?Ce:.07,.055,I==="x"?.07:Ce,Ue,Re+.15,it,{uv:[Ce,.07]});const xt=Math.max(2,Math.round(Ce/.19));for(let Jt=0;Jt<=xt;Jt++){const tn=Jt/xt,M=I==="x"?ie+Ce*tn:ie,se=I==="x"?ce:ce+Ce*tn;ht("trimDark",.035,Pt-.1-(Re+.15),.035,M,(Re+.15+Pt-.1)/2,se,{uv:[.035,.65]})}ot.push({w:I==="x"?Ce:.13,h:.045,d:I==="x"?.13:Ce,x:Ue,y:Pt+.055,z:it})}Kt("x",-ne+.06,-1.15,_t,_t),Kt("x",1.15,ne-.06,_t,_t),Kt("z",-ne+.06,-ne+.06,3.34,_t-.05),Kt("z",ne-.06,ne-.06,3.34,_t-.05);for(const I of[-1.15,1.15,-ne+.06,ne-.06])ht("trim",.115,1.1,.115,I,Re+.55,I===1.15||I===-1.15?_t:_t-.02,{uv:[.115,1.1]});for(const[I,ie]of[[-ne+.06,3.34],[ne-.06,3.34]])ht("trim",.115,1.06,.115,I,Re+.53,ie,{uv:[.115,1.06]});{const pe=Re+.46;for(const ce of[-.48,.48])for(const ae of[-.16,.16])ht("trimDark",.07,pe-.03-Re,.07,-1.28+ce,Re+(pe-.03-Re)/2,3.62+ae,{uv:[.07,.4]});ht("trim",1.16,.055,.44,-1.28,pe-.028,3.62,{uv:[1.16,.44]});for(const ce of[-.48,.48])ht("trimDark",.07,.78,.06,-1.28+ce,pe+.36,3.62-.19,{uv:[.07,.78]});for(let ce=0;ce<3;ce++)ht("trim",1.08,.1,.045,-1.28,pe+.18+ce*.21,3.62-.19,{uv:[1.08,.1]});ot.push({w:1.06,h:.04,d:.4,x:-1.28,y:pe+.014,z:3.62})}function Dt(I,ie,pe,ce){ot.push({w:ce*2,h:.035,d:ce*2,x:I,y:ie+ce+.015,z:pe,rounded:!0})}function wt(I,ie,pe,ce,ae){vi("logs",ae,ae,ce,10,pe,ie,I,{rot:[Math.PI/2,0,0],uvScale:[1,ce/1.2]});const Ce=new Nr(1,10);Ce.scale(ae,ae,1),Ce.translate(pe,ie,I+ce/2+.002),je("logEnds",Ce)}{const ae=[.13,.13+Math.sqrt(3)*.13,.13+Math.sqrt(3)*.13*2];for(let Ce=0;Ce<3;Ce++){const Ue=3-Ce;for(let it=0;it<Ue;it++){const xt=4.42+Ce*.13+it*2*.13;wt(2+S(e,-.05,.05),ae[Ce],xt,1.15+S(e,-.1,.1),.13),Ce===2&&Dt(xt,ae[Ce],2,.13)}}Dt(4.42+.13,ae[0],2,.13*.7),Dt(4.42+.13+2*.13,ae[0],2,.13*.7)}{const ce=[.11,.11+Math.sqrt(3)*.11];for(let ae=0;ae<2;ae++){const Ce=2-ae;for(let Ue=0;Ue<Ce;Ue++){const it=-4.72+ae*.11+Ue*2*.11;wt(1+S(e,-.04,.04),ce[ae],it,1+S(e,-.08,.08),.11),ae===1&&Dt(it,ce[ae],1,.11)}}}const Lt={x:oe.postX,y:2.5,z:ft+.25};{const I=oe.postX,ie=ft+.1;ht("metal",.045,.055,.34,I,2.98,ie+.17,{uv:[.05,.34]}),ht("metal",.04,.26,.04,I,2.86,ie+.02,{uv:[.04,.26]}),ht("metal",.035,.035,.2,I,2.83,ie+.16,{rot:[.7,0,0],uv:[.035,.2]});for(let ae=0;ae<3;ae++)ht("metal",.012,.045,.012,Lt.x,2.795-ae*.045,Lt.z,{uv:!1});const pe=2.75;ht("metal",.2,.02,.2,Lt.x,pe,Lt.z,{uv:[.2,.2]}),ht("metal",.22,.02,.22,Lt.x,pe-.28,Lt.z,{uv:[.22,.22]});{const ae=new Lo(.155,.1,4,1);ae.rotateY(Math.PI/4),ae.translate(Lt.x,pe+.06,Lt.z),je("metal",ae)}for(const ae of[-.085,.085])for(const Ce of[-.085,.085])ht("metal",.016,.26,.016,Lt.x+ae,pe-.13,Lt.z+Ce,{uv:!1});const ce=new ci(.028,.008,6,12);ce.translate(Lt.x,pe+.135,Lt.z),je("metal",ce),ht("lanternGlass",.15,.22,.15,Lt.x,pe-.15,Lt.z,{uv:!1})}function ln(I){const ie=I.wall,pe=I.u0,ce=I.u1,ae=(pe+ce)/2,Ce=I.visY0,Ue=I.visY1,it=I.holeY0,xt=I.holeY1,Jt=(Ce+Ue)/2,tn=ce-pe,M=Ue-Ce,se=-.16,K=.4,W=(ve,ye)=>{ye-ve<.004||fn("trim",ie,tn+.06,ye-ve,.34,ae,(ve+ye)/2,-.172,{uv:[tn,ye-ve]})};W(it,Ce),W(Ue,xt),fn("trim",ie,.085,xt-it+.02,K,pe,(it+xt)/2,se,{uv:[.085,xt-it]}),fn("trim",ie,.085,xt-it+.02,K,ce,(it+xt)/2,se,{uv:[.085,xt-it]}),fn("trim",ie,tn+.17,.09,K,ae,Ue+.025,se,{uv:[tn,.09]}),fn("trim",ie,tn+.24,.1,.46,ae,Ce-.04,-.14,{uv:[tn,.1]}),fn("trim",ie,.13,M+.34,.06,pe-.01,Jt+.05,.05,{uv:[.13,M]}),fn("trim",ie,.13,M+.34,.06,ce+.01,Jt+.05,.05,{uv:[.13,M]}),fn("trim",ie,tn+.32,.13,.06,ae,Ue+.1,.05,{uv:[tn,.13]}),fn("trimDark",ie,tn+.16,.09,.05,ae,Ce-.14,.02,{uv:[tn,.09]});const Me=tn-.2,Q=M-.02;for(const ve of[-.07,-.15]){const ye=new ni(Me,Q);ie.axis==="x"?ye.translate(ae,Jt,ie.outer+ie.sign*ve):(ye.rotateY(Math.PI/2),ye.translate(ie.outer+ie.sign*ve,Jt,ae)),je("glass",ye)}fn("trim",ie,.05,Q+.03,.075,ae,Jt,-.11,{uv:[.05,Q]}),fn("trim",ie,Me+.03,.05,.075,ae,Jt,-.11,{uv:[Me,.05]});{const ve=new ni(Me+.02,Q-.01);ie.axis==="x"?ve.translate(ae,Jt,ie.outer+ie.sign*-.045):(ve.rotateY(Math.PI/2),ve.translate(ie.outer+ie.sign*-.045,Jt,ae)),je("rain",ve)}ie.axis==="x"?ot.push({w:tn+.12,h:.05,d:.34,x:ae,y:Ce+.035,z:ie.outer+ie.sign*-.1}):ot.push({w:.34,h:.05,d:tn+.12,x:ie.outer+ie.sign*-.1,y:Ce+.035,z:ae})}ue.forEach(ln);const qt=new Qt;qt.position.set(-.5199999999999999,c+.02,o-.035),t.add(qt);let Yt=null;const Dn=[];{const I=Je,ie=Pe[0],pe=Pe[1];fn("trimDark",I,Ke,c-ie,.34,0,(c+ie)/2,-.172,{uv:[Ke,.05]}),fn("trim",I,Ke+.06,pe-me,.4,0,(me+pe)/2,-.16,{uv:[Ke,pe-me]}),fn("trim",I,.08,yt+.1,.42,-Ke/2,c+yt/2+.02,-.16,{uv:[.08,yt]}),fn("trim",I,.08,yt+.1,.42,Ke/2,c+yt/2+.02,-.16,{uv:[.08,yt]}),fn("trim",I,Ke+.3,.12,.42,0,me+.03,-.16,{uv:[Ke,.12]}),ht("trimDark",Ke+.06,.02,.4,0,c+.01,o-.15,{uv:[Ke,.4]}),ht("metal",.03,.14,.05,Ke/2-.02,c+1.05,o+.01,{uv:!1});const ce=Ke-.1,ae=yt-.06,Ce=.07,Ue=0,it=[],xt=(K,W,Me,Q,ve,ye,De)=>{const le=new qn(K,W,Me);_n(le,Math.max(K,Me),W),De&&le.rotateZ(De),le.translate(Q,ve,ye),it.push(le)};xt(ce,ae,Ce,ce/2,ae/2,Ue-Ce/2),xt(ce-.14,.13,.028,ce/2,.28,Ue+0),xt(ce-.14,.13,.028,ce/2,ae-.3,Ue+0),xt(1.72,.12,.026,ce/2,ae/2,Ue+0,Math.atan2(ae-.62,ce-.3));const Jt=Ut(it,"door-wood");if(!Jt)throw new Error("cabin: failed to merge door leaf");Yt=new Ot(Jt,ut.door),Yt.castShadow=!0,Yt.receiveShadow=!0,Yt.userData.interactId="cabin-door",qt.add(Yt);const tn=(K,W,Me,Q,ve,ye,De)=>{const le=new qn(K,W,Me);le.translate(Q,ve,ye),Dn.push(le.index?le.toNonIndexed():le)};for(const K of[.52,ae-.42]){tn(.56,.06,.016,.3,K,Ue+.018),tn(.035,.09,.016,.05,K,Ue+.02);for(const W of[.1,.3,.52]){const Me=new jn(.014,.014,.02,6);Me.rotateX(Math.PI/2),Me.translate(W,K,Ue+.026),Dn.push(Me)}}const M=new ci(.055,.012,6,14);M.translate(ce-.16,1.02,Ue+.02),Dn.push(M),tn(.06,.2,.016,ce-.16,1.02,Ue+.016);const se=new Ot(Ut(Dn,"door-metal"),ut.metal);se.castShadow=!0,qt.add(se),n.push(Yt)}function Tt(I,ie,pe,ce,ae,Ce,Ue={}){ht("snow",I,ie,pe,ce,ae,Ce,{uv:[Math.max(I,pe),Math.max(I,pe)],rounded:Ue.rounded})}{const I=ie=>{const pe=new L(ie*x,-P,0),ce=new L(0,0,1),ae=new L(-ie*P,-x,0),Ce=ie>0?-.035:-.015,Ue=[],it=22,xt=-.05,Jt=X-.07,tn=V+.08,M=k-.1;for(let Q=0;Q<=it;Q++){const ve=Q/it,ye=.07+.05*Math.sin(ve*11+1.7)+.025*Math.sin(ve*27+.4);Ue.push([xt+(Jt-xt)*ve,tn+ye])}for(let Q=1;Q<=it;Q++){const ve=Q/it,ye=.06+.05*Math.sin(ve*9+3.1)+.03*Math.sin(ve*23+2.2);Ue.push([Jt-ye,tn+(M-tn)*ve])}for(let Q=1;Q<=it;Q++){const ve=Q/it,ye=.09+.045*Math.sin(ve*13+.8)+.02*Math.sin(ve*29+2.6);Ue.push([Jt-(Jt-xt)*ve,M-ye])}for(let Q=1;Q<it;Q++){const ve=Q/it;Ue.push([xt+.02*Math.sin(ve*7+2),M-(M-tn)*ve])}const se=new gl(Ue.map(Q=>new et(Q[0],Q[1]))),K=new aa(se,{depth:.05,bevelEnabled:!1,steps:1,curveSegments:1});K.translate(0,0,Ce);const W=new Mn().makeBasis(pe,ce,ae).setPosition(0,Gt.ridgeY,0);K.applyMatrix4(W);const Me=K.attributes.position;for(let Q=0;Q<Me.count;Q++){const ve=Me.getX(Q),ye=Me.getZ(Q);Me.setY(Q,Me.getY(Q)+J(ve,ye))}Me.needsUpdate=!0,K.computeVertexNormals(),je("snow",K)};I(1),I(-1)}{const I=Z,ie=new L(1,0,0),pe=new L(0,-Math.sin(I),Math.cos(I)),ce=new L(0,-Math.cos(I),-Math.sin(I)),ae=new L(0,be(de),de),Ce=-Y+.14,Ue=Y-.14,it=.06,xt=_e-.12,Jt=[],tn=20;for(let W=0;W<=tn;W++){const Me=W/tn;Jt.push([Ce+(Ue-Ce)*Me,it+.04+.02*Math.sin(Me*12)])}for(let W=1;W<=tn;W++){const Me=W/tn,Q=.1+.05*Math.sin(Me*10+2.1)+.025*Math.sin(Me*25+.7);Jt.push([Ue-Q,it+(xt-it)*Me])}for(let W=1;W<=tn;W++){const Me=W/tn;Jt.push([Ue-(Ue-Ce)*Me,xt-.05-.03*Math.sin(Me*14+1.2)])}for(let W=1;W<tn;W++){const Me=W/tn;Jt.push([Ce+.08+.06*Math.sin(Me*9+2.6),xt-(xt-it)*Me])}const M=new gl(Jt.map(W=>new et(W[0],W[1]))),se=new aa(M,{depth:.05,bevelEnabled:!1,steps:1,curveSegments:1});se.translate(0,0,-.03),se.applyMatrix4(new Mn().makeBasis(ie,pe,ce).setPosition(ae));const K=se.attributes.position;for(let W=0;W<K.count;W++){const Me=K.getX(W),Q=K.getZ(W);K.setY(W,K.getY(W)+Ve(Me,Q))}K.needsUpdate=!0,se.computeVertexNormals(),je("snow",se)}for(let I=V+.3;I<=k-.3;I+=.52)Tt(.26,.07,.42,R-.14,N+.015,I,{rounded:!0}),I>dt-.35&&I<Ft+.35||Tt(.26,.07,.42,-R+.14,N+.015,I,{rounded:!0});for(let I=-Y+.3;I<=Y-.3;I+=.55)Tt(.36,.06,.32,I,be(tt)+.01,tt-.07,{rounded:!0});for(const I of ot)Tt(I.w,I.h,I.d,I.x,I.y,I.z,{rounded:I.rounded});Tt(Ie.width+.36,.07,Ie.depth+.36,Ie.x,Ie.capY+.035,Ie.z),Tt(Ke+.24,.05,.12,0,me+.11,o-.01);const Ln=[];{const I=Gt.smokeAnchor;for(let ie=0;ie<12;ie++){const pe=new Br({map:nt,color:"#cfc6b8",transparent:!0,opacity:0,depthWrite:!1}),ce=new wo(pe);ce.position.set(I.x,I.y,I.z),ce.userData.phase=ie/12,Ln.push(ce),t.add(ce)}}const gn=new D0("#ffb168",0,10.5,2);gn.position.set(Lt.x,Lt.y,Lt.z+.02),gn.castShadow=!1,t.add(gn);const Yn=Ur({size:128,color:"255,196,128"}),mt=new wo(new Br({map:Yn,color:"#ffbe7a",transparent:!0,opacity:0,depthWrite:!1,blending:Pi}));mt.scale.set(1.5,1.5,1),mt.position.set(Lt.x,Lt.y,Lt.z+.04),t.add(mt);const jt={};for(const I of ee){const ie=Vt.get(I),pe=Ut(ie,`bucket:${I}`);if(!pe){console.warn(`[cabin] skipping bucket "${I}" (merge failed)`);continue}const ce=ut[I]||ut.trim,ae=new Ot(pe,ce);ae.name=`cabin-${I}`,ce.transparent,ae.castShadow=!(I==="snow"||I==="rain"||I==="glass"||I==="soot"||I==="lanternGlass"),ae.receiveShadow=!(I==="rain"||I==="glass"||I==="soot"||I==="lanternGlass"),ae.matrixAutoUpdate=!1,ae.updateMatrix(),t.add(ae),jt[I]=ae}const wn=jt.snow,$t=jt.rain;wn&&(wn.visible=!1),$t&&($t.visible=!1);const dn=[{minX:-s-.12,maxX:-Ke/2-.04,minZ:o-f,maxZ:o+.06,name:"cabin-front-left"},{minX:Ke/2+.04,maxX:s+.12,minZ:o-f,maxZ:o+.06,name:"cabin-front-right"},{minX:-s-.12,maxX:s+.12,minZ:a-.06,maxZ:a+f,name:"cabin-back"},{minX:Gt.leftX-.06,maxX:Gt.leftX+f+.06,minZ:-r-.1,maxZ:r+.1,name:"cabin-left"},{minX:Gt.rightX-f-.06,maxX:Gt.rightX+.06,minZ:-r-.1,maxZ:r+.1,name:"cabin-right"},{minX:Ie.x-Ie.width/2-.18,maxX:Ie.x+Ie.width/2,minZ:Ie.z-Ie.depth/2-.18,maxZ:Ie.z+Ie.depth/2+.18,name:"chimney"},{minX:oe.postX-.16,maxX:oe.postX+.16,minZ:ft-.16,maxZ:ft+.16,name:"porch-post-right"},{minX:-2.85-.16,maxX:-2.85+.16,minZ:ft-.16,maxZ:ft+.16,name:"porch-post-left"},{minX:-ne-.02,maxX:-1.14,minZ:_t-.1,maxZ:_t+.1,name:"porch-rail-front-left"},{minX:1.14,maxX:ne+.02,minZ:_t-.1,maxZ:_t+.1,name:"porch-rail-front-right"},{minX:ne-.16,maxX:ne+.02,minZ:3.3,maxZ:_t+.1,name:"porch-rail-right"},{minX:-ne-.02,maxX:-ne+.16,minZ:3.3,maxZ:_t+.1,name:"porch-rail-left"},{minX:-1.86,maxX:-.7,minZ:3.38,maxZ:3.86,name:"porch-bench"},{minX:4.22,maxX:5.1,minZ:1.35,maxZ:2.65,name:"woodpile-right"},{minX:-4.92,maxX:-4.3,minZ:.44,maxZ:1.56,name:"woodpile-left"}],Un=[jt.logs,jt.plank,jt.shingle,jt.stone,jt.trimDark,jt.trim,jt.core].filter(Boolean),Qe={env:{season:"autumn",weather:"clear",hour:17.2,timeMode:"manual",isNight:!1,windowGlow:!0,overcast:0},elapsed:0,doorOpen:!1,doorAngle:0,smokeLevel:0,smoke:0,glow:0,rain:0,snow:0,lantern:0,wet:0,smokeTarget:0,glowTarget:0,rainTarget:0,snowTarget:0,lanternTarget:0,wetTarget:0};function bi(I){if(I.isNight)return 1;const ie=I.hour??12;return ie>=20||ie<5.5?1:ie>=17?cs(17,20,ie):ie<8?1-cs(5.5,8,ie):0}function Di(){const I=Qe.env,ie=bi(I),pe=I.overcast??0,ce=I.season==="winter";Qe.glowTarget=I.windowGlow?vn(.42+.58*ie+.15*pe,0,1):0,Qe.lanternTarget=I.windowGlow?vn(.45+.55*ie+.2*pe,0,1.1):vn(.18*pe,0,.3),Qe.rainTarget=I.weather==="rain"||I.weather==="storm"?1:0,Qe.snowTarget=ce||I.weather==="snow"?1:0,Qe.wetTarget=I.weather==="rain"||I.weather==="storm"?1:0,Qe.smokeTarget=Math.max(Qe.smokeLevel,ce?.4:0)}function Gi(I={}){Qe.env={...Qe.env,...I},Di()}function tr(I){Qe.doorOpen=!!I,Xr.doorOpen=Qe.doorOpen}function Zl(I){Qe.smokeLevel=vn(Number(I)||0,0,1),Di()}const ya=[[ut.logs,.8,.56],[ut.trim,.76,.5],[ut.trimDark,.8,.54],[ut.plank,.78,.53],[ut.door,.8,.54],[ut.stone,.9,.62],[ut.stoneSoot,.94,.7],[ut.shingle,.84,.54],[ut.soffit,.84,.58]],ba=new Map;for(const[I]of ya)ba.set(I,{dry:I.color.clone(),wet:I.color.clone().multiplyScalar(.72)});function nr(I){for(const[ie,pe,ce]of ya){ie.roughness=$i(pe,ce,I);const ae=ba.get(ie);ie.color.copy(ae.dry).lerp(ae.wet,I)}}function Cn(I){Qe.smoke+=(Qe.smokeTarget-Qe.smoke)*(1-Math.exp(-I*1.6));const ie=Gt.smokeAnchor,pe=Qe.smoke;for(let ce=0;ce<Ln.length;ce++){const ae=Ln[ce],Ue=(ae.userData.phase+Qe.elapsed*.055)%1,it=Math.sin(Qe.elapsed*.42+ce*1.9)*.5;ae.position.set(ie.x+it*Ue*1.3+Math.sin(Qe.elapsed*.3+ce)*.16*Ue,ie.y+Ue*5.2,ie.z+Math.cos(Qe.elapsed*.36+ce*2.1)*.28*Ue);const xt=.55+Ue*2.6;ae.scale.set(xt,xt*1.2,1),ae.material.opacity=pe*.2*Math.sin(Math.PI*Math.min(1,Ue*1.25))*(1-Ue*.6),ae.visible=pe>.01}}function Ni(I=.016,ie){ie&&(Qe.env=ie),Di();const pe=vn(I,0,.1);Qe.elapsed+=pe;const ce=Ue=>1-Math.exp(-pe*Ue),ae=Qe.doorOpen?1.62:0;Qe.doorAngle+=(ae-Qe.doorAngle)*ce(6.5),qt.rotation.y=Qe.doorAngle,Qe.glow+=(Qe.glowTarget-Qe.glow)*ce(2.2),Qe.rain+=(Qe.rainTarget-Qe.rain)*ce(2),Qe.snow+=(Qe.snowTarget-Qe.snow)*ce(1.8),Qe.lantern+=(Qe.lanternTarget-Qe.lantern)*ce(3),Qe.wet+=(Qe.wetTarget-Qe.wet)*ce(1.2),Ct.emissiveIntensity=Qe.glow*2.3,Ct.opacity=.3+Qe.glow*.58;const Ce=.86+.1*Math.sin(Qe.elapsed*9.7)+.05*Math.sin(Qe.elapsed*17.3+1.3)+.035*Math.sin(Qe.elapsed*29.1+.6);gn.intensity=Qe.lantern*11*Ce,ut.lanternGlass.emissiveIntensity=.45+Qe.lantern*.85*Ce,mt.material.opacity=(.035+Qe.lantern*.14)*Ce,mt.visible=mt.material.opacity>.005,Qe.rain>.01&&(Ae.offset.y=(Ae.offset.y-pe*.45)%1),$t&&($t.visible=Qe.rain>.01,ut.rain.opacity=Qe.rain*.85),wn&&(wn.visible=Qe.snow>.01,ut.snow.opacity=vn(Qe.snow,0,1),ut.snow.depthWrite=Qe.snow>.5),Math.abs(Qe.wet-nr.last)>.002&&(nr(Qe.wet),nr.last=Qe.wet),Cn(pe)}nr.last=0,Gi(Qe.env),Ni(0,Qe.env),Qe.glow=Qe.glowTarget,Qe.rain=Qe.rainTarget,Qe.snow=Qe.snowTarget,Qe.lantern=Qe.lanternTarget,Qe.wet=Qe.wetTarget,nr(Qe.wet),nr.last=Qe.wet,Ct.emissiveIntensity=Qe.glow*2.3,Ct.opacity=.3+Qe.glow*.58,wn&&(wn.visible=Qe.snow>.01,ut.snow.opacity=vn(Qe.snow,0,1)),$t&&($t.visible=Qe.rain>.01,ut.rain.opacity=Qe.rain*.85),qt.rotation.y=Qe.doorAngle;const Xr={group:t,colliders:dn,cameraOccluders:Un,setEnvironment:Gi,setDoorOpen:tr,setSmokeLevel:Zl,update:Ni,doorOpen:!1,doorAnchor:new L(Gt.doorAnchor.x,Gt.doorAnchor.y,Gt.doorAnchor.z),interiorDoorAnchor:new L(Gt.interiorDoorAnchor.x,Gt.interiorDoorAnchor.y,Gt.interiorDoorAnchor.z),clickables:n,smokeAnchor:new L(Gt.smokeAnchor.x,Gt.smokeAnchor.y,Gt.smokeAnchor.z),lanternAnchor:new L(Lt.x,Lt.y,Lt.z),meshes:jt,materials:ut};return Xr}const Gn=Gt.floorY,es=.05,On=Gn+es,Xi=as.halfX,Yi=as.halfZ,mi=Gn+as.height,In=as.furniture,pr=-Yi,Hn=Yi,ho=-Xi,fo=Xi,qf=new L,Zf=new bs,$f=new Ss,Bx=new L(1,1,1),Kf=new Mn;function kx(i,e=0,t=0,n=0,s=0,r=0,o=0){return $f.set(s,r,o),Zf.setFromEuler($f),qf.set(e,t,n),Kf.compose(qf,Zf,Bx),i.applyMatrix4(Kf),i}function Qn(i=!1){const e=[],t=new Set(["position","normal","uv"]),n={add(s,r=0,o=0,a=0,c=0,l=0,u=0,d="#8a8a8a"){kx(s,r,o,a,c,l,u);let f=s;if(f.index){const h=f.toNonIndexed();f.dispose(),f=h}for(const h of Object.keys(f.attributes))(h==="color"&&!i||h!=="color"&&!t.has(h))&&f.deleteAttribute(h);if(i){const h=f.attributes.position.count,p=new Float32Array(h*3),_=new ke(d);for(let m=0;m<h;m++)p[m*3]=_.r,p[m*3+1]=_.g,p[m*3+2]=_.b;f.setAttribute("color",new Vn(p,3))}if(f.attributes.normal||f.computeVertexNormals(),!f.attributes.uv){const h=f.attributes.position.count;f.setAttribute("uv",new Vn(new Float32Array(h*2),2))}return e.push(f),n},box(s,r,o,a,c,l,u=0,d=0,f=0,h){return n.add(new qn(s,r,o),a,c,l,u,d,f,h)},cyl(s,r,o,a,c,l,u,d=0,f=0,h=0,p){return n.add(new jn(s,r,o,a),c,l,u,d,f,h,p)},build(s,r=null,o=!1,a=!0){if(!e.length)return null;let c=null;try{c=Ps(e,!1)}catch{c=null}if(!c){const u=new Qt;for(const d of e){const f=new Ot(d,s);f.castShadow=o,f.receiveShadow=a,u.add(f)}return e.length=0,r&&r.add(u),u}e.forEach(u=>u.dispose());const l=new Ot(c,s);return l.castShadow=o,l.receiveShadow=a,r&&r.add(l),l}};return n}function zt(i,e,t,n,s,r,o,a,c=0,l=0,u=0,d=!0,f=!0){const h=new Ot(new qn(e,t,n),s);return h.position.set(r,o,a),h.rotation.set(c,l,u),h.castShadow=d,h.receiveShadow=f,i.add(h),h}function ai(i,e,t,n,s,r,o,a,c,l=0,u=0,d=0,f=!0,h=!0,p=2){const _=Math.min(s,e/2-1e-4,t/2-1e-4,n/2-1e-4),m=new Ot(new os(e,t,n,p,_),r);return m.position.set(o,a,c),m.rotation.set(l,u,d),m.castShadow=f,m.receiveShadow=h,i.add(m),m}function hn(i,e,t,n,s,r,o,a,c,l=0,u=0,d=0,f=!0,h=!0,p=!1){const _=new Ot(new jn(e,t,n,s,1,p),r);return _.position.set(o,a,c),_.rotation.set(l,u,d),_.castShadow=f,_.receiveShadow=h,i.add(_),_}function Wi(i,e,t,n,s,r,o,a=!0,c=!0){const l=e.map(([d,f])=>new et(d,f)),u=new Ot(new ah(l,t),n);return u.position.set(s,r,o),u.castShadow=a,u.receiveShadow=c,i.add(u),u}function Zs(i,e,t,n=.42){const s=new ns({map:i.contact,transparent:!0,opacity:n,depthWrite:!1,color:"#000000"}),r=new Ot(new ni(e,t),s);return r.rotation.x=-Math.PI/2,r.renderOrder=1,r}function Gx(){return bn(1024,768,(i,e,t)=>{const n=Ht(501);i.fillStyle="#362720",i.fillRect(0,0,e,t),i.fillStyle="#7d4330",i.fillRect(30,30,e-60,t-60),i.fillStyle="#6d3b2b",i.fillRect(88,88,e-176,t-176),i.strokeStyle="#c8a878",i.lineWidth=7,i.strokeRect(62,62,e-124,t-124),i.lineWidth=3,i.strokeStyle="rgba(200,168,120,.55)",i.strokeRect(108,108,e-216,t-216);const s=(r,o,a,c,l)=>{i.beginPath(),i.moveTo(r,o-c),i.lineTo(r+a,o),i.lineTo(r,o+c),i.lineTo(r-a,o),i.closePath(),i.fillStyle=l,i.fill()};for(let r=120;r<e-100;r+=86)s(r,74,17,12,"#c8a878"),s(r,t-74,17,12,"#c8a878");for(let r=140;r<t-100;r+=86)s(74,r,12,17,"#c8a878"),s(e-74,r,12,17,"#c8a878");for(let r=0;r<3;r++){const o=e*(.24+r*.26),a=t*.5;s(o,a,64,96,"#3f2a22"),s(o,a,52,80,"#b98a4e"),s(o,a,38,60,"#5a3527"),s(o,a,20,32,"#d6c3a0"),s(o,a,8,14,"#8a4a34"),i.strokeStyle="rgba(214,195,160,.7)",i.lineWidth=4;for(let c=0;c<8;c++){const l=c/8*Ci;i.beginPath(),i.arc(o+Math.cos(l)*82,a+Math.sin(l)*122,7,l,l+2.1),i.stroke()}}for(let r=190;r<t-150;r+=92)for(let o=180;o<e-150;o+=92){if(Math.abs(o-e*.5)<120&&Math.abs(r-t*.5)<130)continue;const a=(Math.round(o/92)+Math.round(r/92))%2===0;s(o,r,14,21,a?"#c8a878":"#4c2f25"),i.fillStyle="rgba(214,195,160,.55)";for(let c=0;c<4;c++){const l=c/4*Ci+.4;i.beginPath(),i.arc(o+Math.cos(l)*26,r+Math.sin(l)*34,2.6,0,Ci),i.fill()}}for(let r=0;r<46;r++){const o=140+n()*(e-280),a=150+n()*(t-300);Math.abs(a-t/2)<130||(i.strokeStyle=n()>.5?"rgba(200,168,120,.5)":"rgba(90,53,39,.7)",i.lineWidth=3,i.beginPath(),i.moveTo(o-8,a),i.lineTo(o+8,a),i.moveTo(o,a-8),i.lineTo(o,a+8),i.stroke())}for(let r=0;r<t;r+=3)i.fillStyle=r%6===0?"rgba(0,0,0,.075)":"rgba(255,238,208,.045)",i.fillRect(0,r,e,1);for(let r=0;r<e;r+=4)i.fillStyle=r%8===0?"rgba(0,0,0,.05)":"rgba(255,240,214,.035)",i.fillRect(r,0,1,t);for(let r=0;r<22;r++){const o=n()*e,a=n()*t,c=S(n,40,190),l=i.createRadialGradient(o,a,0,o,a,c);l.addColorStop(0,`rgba(255,222,178,${S(n,.02,.07)})`),l.addColorStop(1,"rgba(255,222,178,0)"),i.fillStyle=l,i.fillRect(o-c,a-c,c*2,c*2)}li(i,e,t,n,.055)})}function Hx(){return bn(512,256,(i,e,t)=>{const n=Ht(511);i.fillStyle="#4a3527",i.fillRect(0,0,e,t);for(let s=0;s<t;s+=20){const r=s/20%2===0?0:13;for(let o=-20;o<e+20;o+=26){const a=o+r;i.beginPath(),i.ellipse(a,s+10,16,11,0,0,Ci);const c=n();i.fillStyle=c>.66?"#8a6a44":c>.33?"#63492f":"#a3835a",i.fill(),i.strokeStyle="rgba(40,26,14,.45)",i.lineWidth=2,i.stroke(),i.beginPath(),i.ellipse(a-3,s+7,11,5,0,0,Ci),i.fillStyle="rgba(255,236,200,.12)",i.fill()}}li(i,e,t,n,.05)})}function Vx(){return bn(512,512,(i,e,t)=>{const n=Ht(502),s=["#b39471","#c3ad8a","#97845f","#a88a63","#8d8a6a","#bda684","#9c7a5a","#b0a17c"];i.fillStyle="#c3ad8a",i.fillRect(0,0,e,t);const r=4,o=e/r;for(let a=0;a<r;a++)for(let c=0;c<r;c++){i.fillStyle=s[Math.floor(n()*s.length)%s.length],i.fillRect(c*o,a*o,o,o),i.globalAlpha=.08;for(let l=0;l<o;l+=4)i.fillStyle="#000",i.fillRect(c*o,a*o+l,o,1);for(let l=0;l<o;l+=4)i.fillStyle="#fff",i.fillRect(c*o+l,a*o,1,o);i.globalAlpha=1,i.strokeStyle="rgba(226,210,182,.55)",i.lineWidth=2,i.setLineDash([7,6]),i.strokeRect(c*o+7,a*o+7,o-14,o-14),i.setLineDash([])}i.strokeStyle="rgba(74,52,32,.18)",i.lineWidth=2;for(let a=-t;a<e+t;a+=64)i.beginPath(),i.moveTo(a,0),i.lineTo(a+t,t),i.stroke(),i.beginPath(),i.moveTo(a+t,0),i.lineTo(a,t),i.stroke();for(let a=0;a<30;a++){const c=n()*e,l=n()*t,u=S(n,30,130),d=i.createRadialGradient(c,l,0,c,l,u);d.addColorStop(0,`rgba(255,240,214,${S(n,.02,.07)})`),d.addColorStop(1,"rgba(255,240,214,0)"),i.fillStyle=d,i.fillRect(c-u,l-u,u*2,u*2)}li(i,e,t,n,.05)})}function Wx(){return bn(256,512,(i,e,t)=>{const n=Ht(503);i.fillStyle="#b08f5e",i.fillRect(0,0,e,t);for(let s=0;s<e;s+=4)i.fillStyle=s%8===0?"rgba(0,0,0,.055)":"rgba(255,246,222,.05)",i.fillRect(s,0,1,t);for(let s=14;s<e;s+=46)i.fillStyle="rgba(96,66,38,.18)",i.fillRect(s,0,9,t),i.fillStyle="rgba(236,214,168,.16)",i.fillRect(s+9,0,2,t);i.fillStyle="rgba(122,92,58,.5)",i.fillRect(0,t-46,e,46),i.fillStyle="rgba(232,210,164,.55)",i.fillRect(0,t-50,e,3),i.fillStyle="rgba(90,64,38,.45)",i.fillRect(0,18,e,16);for(let s=4;s<e;s+=14)i.fillStyle="rgba(60,42,24,.4)",i.fillRect(s,22,4,5);for(let s=0;s<900;s++)i.fillStyle=n()>.5?"rgba(255,246,224,.05)":"rgba(0,0,0,.045)",i.fillRect(n()*e,n()*t,S(n,1,7),1);li(i,e,t,n,.03)})}function Xx(){return bn(256,256,(i,e,t)=>{const n=Ht(504);i.fillStyle="#8f4f38",i.fillRect(0,0,e,t);for(let s=0;s<t;s+=32)i.fillStyle="#d6c3a0",i.fillRect(0,s+8,e,9),i.fillStyle="#4c5a44",i.fillRect(0,s+21,e,5),i.fillStyle="rgba(40,24,16,.35)",i.fillRect(0,s+29,e,3);for(let s=0;s<1600;s++)i.fillStyle=n()>.5?"rgba(255,240,215,.07)":"rgba(0,0,0,.05)",i.fillRect(n()*e,n()*t,S(n,1,6),1);li(i,e,t,n,.04)})}function Yx(){return bn(256,256,(i,e,t)=>{const n=Ht(505);i.fillStyle="#9a7746",i.fillRect(0,0,e,t),i.lineWidth=5;for(let s=-t;s<e+t;s+=13)i.strokeStyle=s%2===0?"rgba(64,42,20,.5)":"rgba(236,208,158,.35)",i.beginPath(),i.moveTo(s,0),i.lineTo(s+t,t),i.stroke();for(let s=-t;s<e+t;s+=17)i.strokeStyle="rgba(210,178,124,.22)",i.lineWidth=3,i.beginPath(),i.moveTo(s+t,0),i.lineTo(s,t),i.stroke();for(let s=0;s<t;s+=64)i.fillStyle="rgba(72,48,24,.3)",i.fillRect(0,s,e,6);li(i,e,t,n,.06)})}function qx(){return bn(64,128,(i,e,t)=>{const n=Ht(506);i.fillStyle="#e7e2d6",i.fillRect(0,0,e,t);for(let r=0;r<500;r++)i.fillStyle=n()>.5?"rgba(255,255,255,.16)":"rgba(0,0,0,.09)",i.fillRect(n()*e,n()*t,1,S(n,1,3));i.fillStyle="rgba(255,252,240,.95)",i.fillRect(0,10,e,6),i.fillRect(0,t-18,e,6),i.fillRect(0,t-27,e,3),i.fillStyle="rgba(255,250,235,.5)",i.fillRect(e*.18,t*.34,e*.64,t*.3),i.fillStyle="rgba(40,30,20,.55)";for(let r=0;r<3;r++)i.fillRect(e*.26,t*(.4+r*.075),e*.48,2);const s=i.createLinearGradient(0,0,e,0);s.addColorStop(0,"rgba(0,0,0,.28)"),s.addColorStop(.15,"rgba(0,0,0,0)"),s.addColorStop(.85,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,.28)"),i.fillStyle=s,i.fillRect(0,0,e,t)},{wrapS:on,wrapT:on})}function Fc(i){return bn(512,384,(e,t,n)=>{const s=Ht(600+i);if(i===0){let o=e.createLinearGradient(0,0,0,n);o.addColorStop(0,"#2f2f38"),o.addColorStop(.42,"#6e5a52"),o.addColorStop(.62,"#c08a58"),o.addColorStop(.78,"#e0b070"),o.addColorStop(1,"#3e3128"),e.fillStyle=o,e.fillRect(0,0,t,n),o=e.createRadialGradient(t*.62,n*.63,0,t*.62,n*.63,t*.23),o.addColorStop(0,"rgba(255,240,205,.9)"),o.addColorStop(.35,"rgba(255,205,140,.35)"),o.addColorStop(1,"rgba(255,190,120,0)"),e.fillStyle=o,e.fillRect(0,0,t,n),e.fillStyle="rgba(56,48,48,.75)",e.beginPath(),e.moveTo(0,n*.72);for(let a=0;a<=t;a+=24)e.lineTo(a,n*.72+Math.sin(a*.02)*12+s()*8);e.lineTo(t,n),e.lineTo(0,n),e.fill();for(let a=0;a<22;a++){const c=s()*t,l=n*S(s,.3,.62),u=`rgba(${30+s()*20},${26+s()*16},${22+s()*12},${S(s,.55,.9)})`;e.fillStyle=u,e.fillRect(c-2,n-l,S(s,2,5),l);for(let d=0;d<4;d++){const f=n-l*(.45+d*.16),h=l*S(s,.12,.3);e.beginPath(),e.moveTo(c,f-l*.14),e.lineTo(c+h,f),e.lineTo(c-h,f+S(s,2,8)),e.closePath(),e.fill()}}e.fillStyle="rgba(238,196,138,.16)",e.fillRect(0,n*.62,t,n*.2)}else if(i===1){e.fillStyle="#d8c6a2",e.fillRect(0,0,t,n);for(let o=0;o<60;o++){const a=s()*t,c=s()*n,l=S(s,16,120),u=e.createRadialGradient(a,c,0,a,c,l);u.addColorStop(0,`rgba(120,88,48,${S(s,.02,.08)})`),u.addColorStop(1,"rgba(120,88,48,0)"),e.fillStyle=u,e.fillRect(a-l,c-l,l*2,l*2)}e.strokeStyle="rgba(74,58,36,.85)",e.lineWidth=2.5,e.beginPath(),e.moveTo(t*.5,n*.85),e.bezierCurveTo(t*.46,n*.55,t*.56,n*.36,t*.5,n*.15),e.stroke();for(let o=0;o<9;o++){const a=.2+o*.075,c=o%2===0?1:-1,l=n*(.85-a*.7);e.save(),e.translate(t*.5,l),e.rotate(c*.7),e.beginPath(),e.ellipse(c*t*.09,0,t*.085,t*.03,0,0,Ci),e.strokeStyle="rgba(74,58,36,.7)",e.lineWidth=2,e.stroke(),e.fillStyle=`rgba(${110+o*6},${116+o*2},${70+o*3},.25)`,e.fill(),e.restore()}e.fillStyle="rgba(80,62,40,.5)";for(let o=0;o<3;o++)e.fillRect(t*.12,n*.88+o*6,t*.24,1.6)}else{let o=e.createLinearGradient(0,0,0,n);o.addColorStop(0,"#b9c2c4"),o.addColorStop(.45,"#d9cdb8"),o.addColorStop(.7,"#c8a878"),o.addColorStop(1,"#5c5a4a"),e.fillStyle=o,e.fillRect(0,0,t,n);for(let a=0;a<4;a++){e.fillStyle=`rgba(${70+a*26},${72+a*24},${66+a*20},${.65-a*.14})`,e.beginPath(),e.moveTo(0,n);for(let c=0;c<=t;c+=16){const l=n*(.42+a*.09)-Math.sin(c*.011+a*2.1)*n*.1-s()*6;e.lineTo(c,l)}e.lineTo(t,n),e.fill()}e.fillStyle="rgba(240,238,225,.22)",e.fillRect(0,n*.56,t,n*.18)}const r=e.createRadialGradient(t/2,n/2,t*.24,t/2,n/2,t*.72);r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(26,18,10,.45)"),e.fillStyle=r,e.fillRect(0,0,t,n),li(e,t,n,s,.05)},{wrapS:on,wrapT:on})}function Zx(){const i={};i.floor=Rs({size:1024,seed:71,base:"#6a472a",light:"#b4885a",dark:"#2c1a0d",planks:9,plankGap:.016,repeat:[3.4,2.5]}),i.ceiling=Rs({size:512,seed:73,base:"#3f2c1b",light:"#7d5b38",dark:"#1d1108",planks:8,repeat:[3,3.4]}),i.beam=Rs({size:512,seed:75,base:"#45301d",light:"#8a6540",dark:"#1f120a",repeat:[1,3]}),i.trim=Rs({size:512,seed:77,base:"#432c1b",light:"#8a6742",dark:"#1e1108"}),i.furniture=Rs({size:512,seed:79,base:"#5b3d25",light:"#a87c4d",dark:"#2a180c"}),i.lightWood=Rs({size:256,seed:83,base:"#8a6740",light:"#c9a571",dark:"#4a3018"}),i.darkWood=Rs({size:512,seed:85,base:"#332215",light:"#654a2e",dark:"#160d06"}),i.stone=Il({size:512,seed:91,base:"#57534b",light:"#94897a",dark:"#24231e",repeat:[2,2]}),i.bark=Du({size:256,seed:94,base:"#4e3a26",dark:"#241a10",light:"#7e6040",repeat:[2,1]}),i.rug=Gx(),i.entryRug=Hx(),i.quilt=Vx(),i.curtain=Wx(),i.wool=Xx(),i.wicker=Yx(),i.bookSpine=qx(),i.art=[Fc(0),Fc(1),Fc(2)],i.linen=ol({size:256,color:"#c9b391",repeat:[2,2]}),i.linenOchre=ol({size:256,color:"#b08b56",repeat:[2,2]}),i.moss=ol({size:256,color:"#566244",repeat:[2,2]}),i.bone=ol({size:256,color:"#d6c7ac",repeat:[3,3]}),i.contact=Ur({size:128,color:"0,0,0"}),i.glow=k2({size:128}),i.flame=G2({size:128}),i.smoke=uh({size:128}),i.ember=Ur({size:64,color:"255,158,68"}),i.dust=Ur({size:64,color:"255,232,190"});const e=n=>new sn({roughness:.85,metalness:0,...n}),t={floor:e({map:i.floor,roughness:.58,metalness:.02}),ceiling:e({map:i.ceiling,roughness:.88}),beam:e({map:i.beam,roughness:.78}),trim:e({map:i.trim,roughness:.72}),furniture:e({map:i.furniture,roughness:.66}),furnitureDark:e({map:i.darkWood,roughness:.7}),lightWood:e({map:i.lightWood,roughness:.62}),carved:e({map:i.lightWood,roughness:.48}),stone:e({map:i.stone,roughness:.94}),bark:e({map:i.bark,roughness:.95}),stoneHearth:e({map:i.stone,color:"#cfc8bb",roughness:.9}),stoneDark:e({map:i.stone,color:"#6c6459",roughness:.95}),soot:e({color:"#100d0a",roughness:.99}),iron:e({color:"#26231f",roughness:.6,metalness:.62}),brass:e({color:"#a8813f",roughness:.32,metalness:.82}),copper:e({color:"#9a5a34",roughness:.38,metalness:.78}),pewter:e({color:"#6f6d64",roughness:.4,metalness:.72}),ceramicBone:e({color:"#d6c6a8",roughness:.46}),ceramicMoss:e({color:"#7f8a68",roughness:.5}),ceramicRust:e({color:"#9a5b3c",roughness:.55}),linen:e({map:i.linen,roughness:.95}),linenOchre:e({map:i.linenOchre,roughness:.95}),moss:e({map:i.moss,roughness:.95}),boneFab:e({map:i.bone,roughness:.96}),wool:e({map:i.wool,roughness:.98}),quilt:e({map:i.quilt,roughness:.95}),rug:e({map:i.rug,roughness:.98}),entryRug:e({map:i.entryRug,roughness:.98}),curtain:e({map:i.curtain,roughness:.96,side:Bn}),wicker:e({map:i.wicker,roughness:.92}),paper:e({color:"#e2d4b4",roughness:.9}),wax:e({color:"#e8dcc2",roughness:.55,emissive:new ke("#3a2714"),emissiveIntensity:.12}),charred:e({color:"#1a110b",roughness:.97,emissive:new ke("#ff4208"),emissiveIntensity:0}),ember:e({color:"#2a120a",roughness:.9,emissive:new ke("#ff6a1f"),emissiveIntensity:0}),leather:e({color:"#5b3a24",roughness:.58}),clay:e({color:"#9c6244",roughness:.85}),plant:e({color:"#5f7346",roughness:.85,side:Bn}),book:e({map:i.bookSpine,roughness:.82}),art0:new sn({map:i.art[0],roughness:.62}),art1:new sn({map:i.art[1],roughness:.7}),art2:new sn({map:i.art[2],roughness:.62})};return t.flame=new ns({map:i.flame,transparent:!0,blending:Pi,depthWrite:!1,color:"#ffc27a",opacity:.9,side:Bn,toneMapped:!1}),t.flameOuter=new ns({map:i.flame,transparent:!0,blending:Pi,depthWrite:!1,color:"#ff7a24",opacity:.55,side:Bn,toneMapped:!1}),t.candleFlame=new ns({map:i.flame,transparent:!0,blending:Pi,depthWrite:!1,color:"#ffe0a6",opacity:.95,side:Bn,toneMapped:!1}),t.candleGlow=new Br({map:i.glow,color:"#ffb066",transparent:!0,opacity:.3,depthWrite:!1,blending:Pi}),t.fireGlow=new ns({map:i.glow,transparent:!0,blending:Pi,depthWrite:!1,color:"#ff8a3c",opacity:0,toneMapped:!1}),t.contactShadow=new ns({map:i.contact,transparent:!0,opacity:.4,depthWrite:!1,color:"#000000"}),{T:i,M:t}}function $x({scene:i,callbacks:e={}}={}){const t={showPanel:()=>{},hidePanel:()=>{},notify:()=>{},...e},{T:n,M:s}=Zx(),r=new Qt;r.name="interior",i.add(r);const o=[],a=[],c=[],l=[],u=Ht(4242);let d=0,f="third",h={season:"autumn",weather:"clear",hour:17.2,timeMode:"manual",isNight:!1,windowGlow:!1,overcast:0},p=!1,_=0,m=!0,g=1,b=!0,T=1,y=!1,A=null,R=0,F=null,x=null,P=null,N=null,k=null,V=null,te=[],X=null,j=[],Se=null,oe=null,Re=null,xe=[],Te=null,de=null;const tt=[],Mt=[];let Wt=null;const Y=new ke("#ffb977"),st=new ke("#f2ead9"),be=new ke("#7f93b8"),Oe=new ke("#ffc178"),Ze={id:"bird-note",eyebrow:"木鸟 · 书架第三层",title:"给愿意停下来的人",body:["这只鸟是我父亲用一截梨木削成的。他说，木头里住着风；只要有人愿意静下来听，它就会把风放出来。","我离开林子的那年冬天，把它留在了这里。后来每次回来，它都还朝着门的方向——像是在等某个推门进来的人。","如果你读到这里，请替我照看窗边那盏灯。山里的夜很长，赶路的人需要看见一点暖。"],footer:"—— 小屋旧主人 · 于初雪之前"},J={fire:0,chandelier:0,window:0,windowColor:new ke("#ffd9ae"),chandelierColor:new ke("#ffc178")};new ke;function Ve(){const B=new Ot(new qn(Xi*2+.3,es,Yi*2+.3),s.floor);B.position.set(0,Gn+es/2-.001,0),B.receiveShadow=!0,B.castShadow=!1,r.add(B);const q=Qn(),D=.022;q.box(Xi*2,D,.006,0,On+D/2,pr+.004),q.box(Xi*2,D,.006,0,On+D/2,Hn-.004),q.box(.006,D,Yi*2,ho+.004,On+D/2,0),q.box(.006,D,Yi*2,fo-.004,On+D/2,0),q.build(s.soot,r,!1,!1);const O=new Ot(new ni(Xi*2+.34,Yi*2+.34),s.ceiling);O.rotation.x=Math.PI/2,O.position.set(0,mi-.01,0),O.receiveShadow=!0,r.add(O);const U=Qn(),$=.15,he=.035,Ne=On+$/2;U.box(Xi*2,$,he,0,Ne,pr+he/2),U.box(Xi*2,$,he,0,Ne,Hn-he/2),U.box(he,$,Yi*2,ho+he/2,Ne,0),U.box(he,$,Yi*2,fo-he/2,Ne,0);const lt=.3,vt=.07,ct=mi-lt/2-.004;U.box(Xi*2,lt,vt,0,ct,pr+vt/2),U.box(Xi*2,lt,vt,0,ct,Hn-vt/2),U.box(vt,lt,Yi*2,ho+vt/2,ct,0),U.box(vt,lt,Yi*2,fo-vt/2,ct,0);const $e=mi-lt-.03;U.box(Xi*2,.055,.105,0,$e,pr+.0525),U.box(Xi*2,.055,.105,0,$e,Hn-.0525),U.box(.105,.055,Yi*2,ho+.0525,$e,0),U.box(.105,.055,Yi*2,fo-.0525,$e,0);const Ie=.16,dt=mi-On,Ft=On+dt/2;for(const An of[-1,1])for(const Xn of[-1,1])U.box(Ie,dt,Ie,An*(Xi-Ie/2),Ft,Xn*(Yi-Ie/2));const en=.11,kn=.05;for(const An of[-3.02,1.58])U.box(en,dt,kn,An,Ft,pr+kn/2);for(const An of[-2.5,1.92])U.box(en,dt,kn,ho+kn/2,Ft,An);for(const An of[-2.42,2.18])U.box(en,dt,kn,fo-kn/2,Ft,An);for(const An of[-1.42,1.42])U.box(en,dt,kn,An,Ft,Hn-kn/2);U.build(s.trim,r,!1,!0);const Wn=Qn();for(const An of[-2.45,0,2.45])Wn.box(.17,.18,Yi*2-.08,An,mi-.1,0);for(const An of[-1.92,1.92])Wn.box(Xi*2-.08,.13,.13,0,mi-.075,An);Wn.build(s.beam,r,!0,!0);const Nn=Qn();Nn.add(new ci(.035,.008,5,8),0,mi-.21,1.22,Math.PI/2),Nn.add(new ci(.035,.008,5,8),0,mi-.21,-1.32,Math.PI/2),Nn.add(new ci(.035,.008,5,8),-2.45,mi-.19,1.64,Math.PI/2),Nn.build(s.iron,r,!1,!1);for(const An of Gt.windows)An.face==="front"&&(Ke(An),me(An));Le()}function Ke(B){const q=Gn+B.y,D=q+B.height/2,O=q-B.height/2,U=Hn-.026,$=Qn(),he=.1;for(const Ie of[-1,1])$.box(he,B.height+.22,.052,B.x+Ie*(B.width/2+he/2),(D+O)/2+.02,U);$.box(B.width+he*2+.06,.11,.052,B.x,D+.055,U),$.box(B.width+he*2+.02,.075,.045,B.x,O-.085,U+.004),$.build(s.trim,r,!1,!0),zt(r,B.width+.34,.055,.16,s.trim,B.x,O-.028,Hn-.08,0,0,0,!0,!0);const Ne=D+.17,lt=Hn-.205,vt=hn(r,.017,.017,B.width+.62,8,s.brass,B.x,Ne,lt,0,0,Math.PI/2,!1,!0);vt.castShadow=!1;for(const Ie of[-1,1])hn(r,.03,.03,.05,8,s.brass,B.x+Ie*(B.width/2+.33),Ne,lt,0,0,Math.PI/2,!1,!0),zt(r,.03,.06,.2,s.brass,B.x+Ie*(B.width*.34),Ne,Hn-.115,0,0,0,!1,!0);const ct=Qn(),$e=7;for(let Ie=0;Ie<$e;Ie++){const dt=Ie/($e-1)-.5;ct.add(new ci(.026,.006,4,7),B.x+dt*(B.width+.58),Ne,lt,0,0,0)}ct.build(s.brass,r,!1,!1)}function yt(B,q,D){const $=new ni(B,q,26,4),he=$.attributes.position;for(let Ne=0;Ne<he.count;Ne++){const lt=he.getX(Ne),vt=he.getY(Ne),ct=lt/B+.5,$e=vt/q+.5,Ie=.86+.14*$e,dt=.038*(.3+.7*(1-$e)),Ft=Math.sin(ct*Math.PI*2*D+.5)*dt*Math.sin(Math.PI*vn(ct,.02,.98));he.setX(Ne,lt*Ie),he.setZ(Ne,Ft)}return $.computeVertexNormals(),$}function me(B){const q=Gn+B.y,O=q+B.height/2+.17,U=Hn-.205,$=.78,he=q-B.height/2,lt=B.x>0?On+.055:he-.12,vt=O-lt,ct=yt($,vt,3),$e={left:null,right:null,win:B,rodY:O,bottom:lt,height:vt,z:U,closedOffset:.315,openOffset:B.width/2+.16,openScale:.36,seed:u()*10};for(const dt of[-1,1]){const Ft=new Qt;Ft.position.set(B.x+dt*$e.closedOffset,O,U);const en=new Ot(ct,s.curtain);en.position.y=-vt/2,en.castShadow=!1,en.receiveShadow=!0,en.userData.interactId=B.x<0?"curtains-left":"curtains-right",Ft.add(en),r.add(Ft),dt<0?$e.left=Ft:$e.right=Ft,$e[dt<0?"leftMesh":"rightMesh"]=en}const Ie={id:B.x<0?"curtains-left":"curtains-right",label:"窗帘",anchor:new L(B.x,1.78,Hn-.68),radius:2,objects:[$e.leftMesh,$e.rightMesh],getPrompt:()=>({key:"E",action:m?"拉上窗帘":"拉开窗帘"}),available:()=>f==="first",action:()=>ut()};a.push(Ie),tt.push($e)}function Le(){const B=Hn-.026,q=Qn(),D=Gt.door.height,O=Gt.door.width,U=Gn+D,$=U+.11;for(const he of[-1,1])q.box(.1,$-On,.052,he*(O/2+.05),(On+$)/2,B);q.box(O+.3,.11,.052,0,U+.055,B),q.build(s.trim,r,!1,!0),zt(r,O+.14,es+.012,.3,s.furnitureDark,0,Gn+(es+.012)/2,Hn-.13,0,0,0,!1,!0)}function Be(){const B=In.fireplace.z,q=-3.42,D=-3.9,O=(q+D)/2,U=q-D,$=-1.72,he=.48,Ne=-1.11,lt=-.13,vt=Gn+.06,ct=Gn+.78,$e=Gn+.96,Ie=Gn+1.08,dt=new Qt;dt.name="fireplace",dt.position.y=es,r.add(dt);const Ft=[],en=zt(dt,1,.03,2.5,s.stoneHearth,-3.5,Gn+.015,B,0,0,0,!1,!0);Ft.push(en);const kn=Qn();for(let mt=0;mt<9;mt++){const jt=-1.84+mt*.3;kn.box(.075,.028,.26,-3.02,Gn+.038,jt,0,0,0,Ri(u,["#8a8376","#6f695e","#9a9182"]))}kn.build(s.stone,dt,!1,!0);const Wn=Qn();Wn.box(U,$e-Gn,Ne-$,O,(Gn+$e)/2,($+Ne)/2),Wn.box(U,$e-Gn,he-lt,O,(Gn+$e)/2,(lt+he)/2),Wn.box(U,$e-ct,lt-Ne,O,(ct+$e)/2,B),Wn.build(s.stone,dt,!0,!0);const Nn=Qn();Nn.box(.05,ct-.38,lt-Ne,-3.865,(.38+ct)/2,B),Nn.box(.44,ct-.38,.025,O,(.38+ct)/2,Ne+.012),Nn.box(.44,ct-.38,.025,O,(.38+ct)/2,lt-.012),Nn.box(.44,.025,lt-Ne,O,ct-.012,B),Nn.build(s.soot,dt,!1,!0);const An=zt(dt,.44,.03,lt-Ne,s.soot,O,.395,B,0,0,0,!1,!0);Ft.push(An);const Xn=Qn(!0),w=["#5c574e","#4b463f","#6a6459","#413d36","#736b5e","#565046","#625b50"];for(const[mt,jt]of[[($+Ne)/2,Ne-$],[(lt+he)/2,he-lt]])for(let wn=Gn+.14;wn<$e-.08;wn+=.19)for(let $t=mt-jt/2+.1;$t<mt+jt/2-.06;$t+=S(u,.19,.27)){if(u()<.3)continue;const dn=S(u,.1,.17),Un=S(u,.075,.115),Qe=S(u,.008,.02);Xn.box(Qe,Un,dn,q+Qe/2+.001,wn+S(u,-.02,.02),$t+S(u,-.02,.02),0,0,S(u,-.08,.08),Ri(u,w))}for(let mt=Ne+.07;mt<lt-.02;mt+=S(u,.16,.21)){if(u()<.2)continue;const jt=S(u,.11,.16),wn=S(u,.11,.16),$t=S(u,.008,.02);Xn.box($t,wn,jt,q+$t/2+.001,ct+wn*.5+.005,mt,0,0,0,Ri(u,w))}for(let mt=Gn+.08;mt<$e-.05;mt+=.24){const jt=S(u,.012,.026);Xn.box(jt,.16,.2,q+jt/2+.001,mt+.075,$+.11,0,0,0,Ri(u,w)),Xn.box(jt,.16,.2,q+jt/2+.001,mt+.075,he-.11,0,0,0,Ri(u,w))}Xn.build(new sn({vertexColors:!0,roughness:.96,metalness:0}),dt,!1,!0);const Z=zt(dt,.32,mi-Ie,1.74,s.stone,-3.74,(Ie+mi)/2,B,0,0,0,!0,!0);Ft.push(Z);const _e=Qn(!0);for(let mt=Ie+.16;mt<mi-.18;mt+=.34)for(let jt=B-.72;jt<B+.72;jt+=S(u,.34,.46)){if(u()<.25)continue;const wn=S(u,.16,.26),$t=S(u,.14,.21),dn=S(u,.007,.016);_e.box(dn,$t,wn,-3.58+dn/2,mt+S(u,-.03,.03),jt+S(u,-.03,.03),0,0,S(u,-.05,.05),Ri(u,w))}_e.build(new sn({vertexColors:!0,roughness:.96}),dt,!1,!0);const fe=zt(dt,.6,.13,2.26,s.furniture,-3.6,Ie-.065,B,0,0,0,!0,!0);Ft.push(fe);const ne=Qn();for(const mt of[-1.28,.04,B])ne.box(.16,.14,.1,-3.52,Ie-.2,mt+0,0,0,0);ne.build(s.furnitureDark,dt,!0,!0);const gt=new Ot(new ni(.86,.22),new ns({map:bn(128,64,(mt,jt,wn)=>{const $t=mt.createLinearGradient(0,0,0,wn);$t.addColorStop(0,"rgba(10,8,6,.0)"),$t.addColorStop(.65,"rgba(12,9,6,.30)"),$t.addColorStop(1,"rgba(10,7,5,.55)"),mt.fillStyle=$t,mt.fillRect(0,0,jt,wn)},{wrapS:on,wrapT:on}),transparent:!0,depthWrite:!1,opacity:.8}));gt.rotation.y=Math.PI/2,gt.position.set(-3.413,ct+.09,B),dt.add(gt);const ft=Qn();ft.box(.055,.055,1.1,q+.004,ct+.022,B),ft.box(.055,.045,1.1,q+.004,vt-.02,B),ft.box(.055,ct-vt+.06,.055,q+.004,(vt+ct)/2,Ne-.018),ft.box(.055,ct-vt+.06,.055,q+.004,(vt+ct)/2,lt+.018),ft.build(s.iron,dt,!1,!0);const ot=(mt,jt,wn,$t)=>{const dn=new Qt;return dn.position.set(mt,jt,wn),dn.scale.setScalar($t),Wi(dn,[[.055,0],[.055,.012],[.022,.02],[.016,.06],[.03,.07],[.018,.08],[.02,.11],[.036,.12],[.036,.135]],10,s.brass,0,0,0),hn(dn,.0145,.017,.2,8,s.wax,0,.235,0,0,0,0,!1,!0),Je(dn,0,.35,0,.11),dt.add(dn),dn};ot(-3.58,Ie,B-.72,1),ot(-3.58,Ie,B+.3,.85),Wi(dt,[[.052,0],[.062,.02],[.058,.09],[.04,.13],[.036,.16],[.05,.17]],12,s.ceramicRust,-3.58,Ie,B-.24,!0,!0),Wi(dt,[[.03,0],[.055,.01],[.075,.035],[.07,.05]],12,s.ceramicMoss,-3.58,Ie,B+.06,!0,!0),z(.74,.52,s.art0,s.furnitureDark,-3.505,2.18,B,Math.PI/2);const _t=Qn();for(const mt of[-1,1])_t.box(.14,.02,.03,O+.02,.455,B+mt*.31),_t.box(.03,.14,.03,O+.1,.5,B+mt*.31),_t.box(.14,.02,.03,-3.55,.455,B+mt*.31);for(let mt=0;mt<3;mt++)_t.box(.02,.02,.68,-3.55+mt*.06,.465,B);_t.build(s.iron,dt,!1,!0);const Pt=[],Kt=[{x:-3.6,y:.5,z:B-.1,ry:.12,rz:.02,r:.06,l:.62},{x:-3.62,y:.585,z:B+.07,ry:-.18,rz:-.04,r:.055,l:.56},{x:-3.54,y:.46,z:B-.05,ry:.55,rz:.1,r:.05,l:.48}];for(const mt of Kt){const jt=s.charred.clone();Pt.push(jt);const wn=hn(dt,mt.r,mt.r*.92,mt.l,8,jt,mt.x,mt.y,mt.z,Math.PI/2,0,mt.ry,!1,!0);wn.rotation.z=mt.rz,Ft.push(wn)}j=Pt;for(let mt=0;mt<9;mt++){const jt=new Ot(new Eo(S(u,.03,.06),0),s.ember.clone());jt.position.set(-3.62+S(u,-.06,.1),.41+S(u,0,.03),B+S(u,-.38,.38)),jt.rotation.set(u()*3,u()*3,u()*3),jt.castShadow=!1,jt.receiveShadow=!1,dt.add(jt),j.push(jt.material)}const Dt=new Pn,wt=new Float32Array(120);for(let mt=0;mt<40;mt++)wt[mt*3]=-3.66+u()*.2,wt[mt*3+1]=.42+u()*.1,wt[mt*3+2]=B+S(u,-.4,.4);Dt.setAttribute("position",new Vn(wt,3));const Lt=new Dr({map:n.ember,size:.055,transparent:!0,blending:Pi,depthWrite:!1,color:"#ff8a35",opacity:0,sizeAttenuation:!0,toneMapped:!1});X=new To(Dt,Lt),dt.add(X);const ln=new Qt;ln.position.set(-3.55,0,B),dt.add(ln);const qt=[[-.12,.64,-.2,.46,.88,.9],[0,.72,.02,.5,1,1],[-.05,.6,.2,.4,.78,.85],[.06,.78,-.08,.34,.68,.8],[0,.55,-.3,.3,.56,.7]];for(let mt=0;mt<qt.length;mt++){const[jt,wn,$t,dn,Un,Qe]=qt[mt];for(const bi of[-.22,.22]){const Di=mt%2===0?s.flame:s.flameOuter,Gi=new Ot(new ni(dn,Un),Di);Gi.position.set(-.02,wn,jt+$t),Gi.rotation.set(0,Math.PI/2+bi,0),Gi.renderOrder=5,ln.add(Gi),l.push({mesh:Gi,baseY:wn,baseScaleX:dn,baseScaleY:Un,phase:u()*Ci,speed:S(u,2.2,3.6),sc:Qe})}}const Yt=new Ot(new ni(.28,.3),s.flame);Yt.position.set(-.01,.5,-.02),Yt.rotation.y=Math.PI/2,Yt.renderOrder=6,ln.add(Yt),l.push({mesh:Yt,baseY:.5,baseScaleX:.28,baseScaleY:.3,phase:1.13,speed:2.9,sc:.6}),oe=new Ot(new ni(.8,.66),s.fireGlow),oe.rotation.y=Math.PI/2,oe.position.set(-3.4,.78,B),oe.renderOrder=4,dt.add(oe),Re=new Ot(new ni(.6,.74),s.fireGlow.clone()),Re.rotation.x=-Math.PI/2,Re.position.set(-3.63,.452,B),Re.renderOrder=4,dt.add(Re),Se=new Ot(new ni(1.55,1.15),s.fireGlow.clone()),Se.rotation.x=-Math.PI/2,Se.position.set(-2.98,On+.034,B),Se.renderOrder=3,r.add(Se);const Dn=new Pn,Tt=new Float32Array(108);te=[];for(let mt=0;mt<36;mt++)Tt[mt*3]=-3.6,Tt[mt*3+1]=.45,Tt[mt*3+2]=B,te.push({x:-3.58,y:.45+u()*.2,z:B+S(u,-.3,.3),vx:S(u,-.05,.12),vy:S(u,.25,.7),vz:S(u,-.1,.1),life:u(),max:S(u,.6,1.5),wob:u()*Ci});Dn.setAttribute("position",new Vn(Tt,3));const Ln=new Dr({map:n.ember,size:.034,transparent:!0,blending:Pi,depthWrite:!1,color:"#ffb066",opacity:0,sizeAttenuation:!0,toneMapped:!1});V=new To(Dn,Ln),V.frustumCulled=!1,dt.add(V),Ye(-3.34,On+.03,B+.86),x=new Tc("#ff9a4d",0,7,.94,.9,1.45),x.position.set(-3.02,1.02,B),x.target.position.set(-1.15,.52,B),x.castShadow=!1,x.name="interior-fire-light",dt.add(x,x.target);const gn={id:"fireplace",label:"壁炉",anchor:new L(-3.18,1.1,B),radius:2.35,objects:Ft,getPrompt:()=>({key:"E",action:p?"熄灭壁炉":"点燃壁炉"}),available:()=>!0,action:()=>Ct()};for(const mt of Ft)mt.userData.interactId="fireplace";a.push(gn);const Yn=Zs(n,2.4,1.6,.5);Yn.position.set(-3,On+.0025,B),r.add(Yn),o.push({minX:-3.98,maxX:-2.96,minZ:-1.92,maxZ:.68,name:"fireplace"})}function Ye(B,q,D){const O=new Qt;O.position.set(B,q,D),Wi(O,[[.085,0],[.1,.02],[.105,.07],[.095,.13],[.062,.17],[.052,.185],[.058,.195]],14,s.copper,0,0,0,!0,!0),hn(O,.022,.028,.028,8,s.brass,0,.205,0,0,0,0,!1,!0),hn(O,.018,.03,.16,8,s.copper,.1,.14,0,0,0,-1,!1,!0);const U=new Ot(new ci(.075,.008,6,14,Math.PI),s.iron);U.position.set(-.005,.19,0),U.rotation.set(0,0,0),O.add(U),hn(O,.11,.12,.02,12,s.iron,0,-.01,0,0,0,0,!1,!0);for(let $=0;$<4;$++){const he=new Br({map:n.smoke,color:"#cfc4b4",transparent:!0,opacity:0,depthWrite:!1,blending:yo}),Ne=new wo(he);Ne.position.set(.01,.24+$*.12,0),Ne.scale.setScalar(.1+$*.05),Ne.renderOrder=7,O.add(Ne),xe.push({sprite:Ne,phase:$/4,base:.1+$*.05})}return r.add(O),O}function Je(B,q,D,O,U=1){const $=new Qt;$.position.set(q,D,O),$.scale.setScalar(U);const he=s.candleFlame,Ne=new Ot(new ni(.075,.13),he);Ne.position.y=.05;const lt=new Ot(new ni(.075,.13),he);lt.position.y=.05,lt.rotation.y=Math.PI/2,Ne.renderOrder=8,lt.renderOrder=8,$.add(Ne,lt);const vt=new wo(s.candleGlow);return vt.position.y=.06,vt.scale.setScalar(.3),vt.renderOrder=7,$.add(vt),B.add($),c.push({mesh:$,baseScale:U,phase:u()*Ci,speed:S(u,5,9),baseY:0,kind:"candle"}),$}function bt(){const B=In.bookshelf.x,q=In.bookshelf.z,D=In.bookshelf.w,O=In.bookshelf.d,U=In.bookshelf.h,$=Gn,he=new Qt;he.name="bookshelf",he.position.y=es,r.add(he);const Ne=.055,lt=.038,vt=D-Ne*2-.02,ct=q-O/2+.045;zt(he,D,.11,O+.02,s.furnitureDark,B,$+.055,q);for(const Dt of[-1,1])zt(he,Ne,U-.1,O,B+Dt*(D/2-Ne/2),$+.1+(U-.1)/2,q);zt(he,D-.06,U-.13,.025,s.darkWood,B,$+.1+(U-.13)/2,q-O/2+.028),zt(he,D+.04,.045,O+.035,s.furniture,B,$+U-.0225,q),zt(he,D+.02,.035,.04,s.furnitureDark,B,$+U-.06,q+O/2-.02);const $e=Qn();for(let Dt=0;Dt<5;Dt++)$e.box(D/5-.012,U-.14,.012,B-D/2+D/10+Dt*(D/5),$+.1+(U-.13)/2,q-O/2+.042);$e.build(s.furniture,he,!1,!0);const Ie=[.15,.56,.97,1.38,1.79],dt=Qn();dt.box(.035,U-.16,O-.05,B,$+.1+(U-.14)/2,q);for(const Dt of Ie)dt.box(vt,lt,O-.04,B,$+Dt-lt/2,q);dt.build(s.furnitureDark,he,!0,!0);const Ft=["#7c3f2e","#8a6a3e","#5c6b4a","#3f4a52","#a8814f","#6d4432","#8f8352","#57352c","#7d8464","#b39a6a","#4d5c50","#9a5a3c","#c4b48c","#6a4a5a","#87926e"],en=[],kn=O/2,Wn=(Dt,wt,Lt,ln={})=>{let qt=Dt;for(;qt<wt-.035;){const Yt=S(u,.024,.062);if(qt+Yt>wt)break;if(ln.skip&&qt+Yt>ln.skip[0]&&qt<ln.skip[1]){qt=ln.skip[1];continue}const Dn=S(u,ln.hMin??.19,ln.hMax??.29),Tt=S(u,.16,kn+.1),Ln=u()<.13?S(u,-.09,.09):0;en.push({x:qt+Yt/2,y:$+Lt+Dn/2*Math.cos(Ln)+Yt/2*Math.abs(Math.sin(Ln)),z:ct+Tt/2+S(u,0,.02),w:Yt,h:Dn,d:Tt,rz:Ln,ry:S(u,-.02,.02),color:Ri(u,Ft)}),qt+=Yt+S(u,.0015,.006),u()<.055&&(qt+=S(u,.02,.055))}},Nn=B-vt/2+.02,An=B-.03,Xn=B+.03,w=B+vt/2-.02;Wn(Nn,An,.56),Wn(Xn,w,.56),Wn(Nn,An,.97),Wn(Xn,w,.97,{skip:[-1.06,-.92]}),Wn(Nn,An,1.38),Wn(Xn,w,1.38,{skip:[-1.19,-.86]}),Wn(Nn,An,1.79,{hMin:.16,hMax:.22}),Wn(Xn,w,1.79,{hMin:.15,hMax:.21,skip:[-1.2,-1.02]});const Z=new qn(1,1,1),_e=new ml(Z,s.book,en.length),fe=new Mn,ne=new bs,gt=new Ss,ft=new ke;en.forEach((Dt,wt)=>{gt.set(0,Dt.ry,Dt.rz),ne.setFromEuler(gt),fe.compose(new L(Dt.x,Dt.y,Dt.z),ne,new L(Dt.w,Dt.h,Dt.d)),_e.setMatrixAt(wt,fe),ft.set(Dt.color).offsetHSL(S(u,-.02,.02),S(u,-.07,.07),S(u,-.05,.05)),_e.setColorAt(wt,ft)}),_e.instanceMatrix.needsUpdate=!0,_e.instanceColor&&(_e.instanceColor.needsUpdate=!0),_e.castShadow=!1,_e.receiveShadow=!0,he.add(_e);const ot=(Dt,wt,Lt,ln,qt,Yt,Dn,Tt=0)=>{const Ln=zt(he,ln,qt,Yt,s.book,Dt,wt+qt/2,Lt,0,Tt,0,!1,!0);return Ln.material=s.book,Ln};ot(B-.42,$+.15,ct+.13,.2,.035,.15,"#7c3f2e",.06),ot(B-.41,$+.185,ct+.14,.18,.028,.13,"#c4b48c",-.04),ot(B-.43,$+.213,ct+.12,.16,.03,.12,"#4d5c50",.1);const _t=(Dt,wt,Lt,ln)=>{const qt=new Qt;qt.position.set(Dt,$+.15,wt),hn(qt,Lt,Lt*.86,ln,14,s.wicker,0,ln/2,0,0,0,0,!1,!0,!0);const Yt=new Ot(new ci(Lt,.012,6,16),s.wicker);return Yt.rotation.x=Math.PI/2,Yt.position.y=ln,qt.add(Yt),hn(qt,Lt*.98,Lt*.98,.012,14,s.fabricDark??s.furnitureDark,0,ln-.01,0,0,0,0,!1,!0),he.add(qt),qt};_t(B+.34,q-.02,.16,.24),_t(B+.66,q-.03,.13,.2),Wi(he,[[.032,0],[.04,.01],[.052,.05],[.045,.09],[.05,.1]],10,s.ceramicMoss,B+.58,$+.97,ct+.1,!1,!0),hn(he,.025,.028,.07,10,s.ceramicRust,B-1.02,$+.97+.035,ct+.12,0,0,0,!1,!0),Wi(he,[[.05,0],[.065,.02],[.06,.1],[.045,.13],[.05,.145]],12,s.clay,B+.42,$+U,ct+.12,!0,!0);const Pt=Qn();for(let Dt=0;Dt<7;Dt++){const wt=u()*Ci,Lt=S(u,.1,.5);Pt.cyl(.0022,.0035,S(u,.2,.34),4,B+.42+Math.cos(wt)*.02,$+U+.14+.12,ct+.12+Math.sin(wt)*.02,Math.cos(wt)*Lt,0,Math.sin(wt)*Lt)}Pt.build(s.furnitureDark,he,!1,!0),z(.34,.26,s.art1,s.furnitureDark,B-1.62,$+U+.14,q-.02,0,-.1,he),At(B+.5,On+1.38,q+.02),o.push({minX:B-D/2-.02,maxX:B+D/2+.02,minZ:q-O/2-.02,maxZ:q+O/2+.03,name:"bookshelf"});const Kt=Zs(n,1.9,.7,.38);Kt.position.set(B,On+.004,q+.25),r.add(Kt)}function At(B,q,D){const O=new Qt;O.position.set(B,q,D),R=.55,O.rotation.y=R;const U=[];U.push(hn(O,.052,.06,.022,12,s.furnitureDark,0,.011,0,0,0,0,!0,!0));const $=ai(O,.078,.098,.15,.038,s.carved,0,.085,-.012,.06,0,0,!0,!0,3);U.push($);const he=ai(O,.062,.07,.07,.03,s.carved,0,.078,.045,-.15,0,0,!0,!0,3);U.push(he);const Ne=new Ot(new gi(.042,14,10),s.carved);Ne.position.set(0,.152,.062),Ne.castShadow=!0,O.add(Ne),U.push(Ne);const lt=new Ot(new Lo(.013,.05,7),s.furnitureDark);lt.rotation.x=Math.PI/2,lt.position.set(0,.146,.108),lt.castShadow=!0,O.add(lt),U.push(lt);const vt=zt(O,.045,.012,.11,s.carved,0,.098,-.105,-.42,0,0,!0,!0);U.push(vt);for(const Ie of[-1,1]){const dt=ai(O,.016,.052,.088,.008,s.carved,Ie*.042,.092,-.008,0,0,Ie*.16,!0,!0,2);U.push(dt)}for(const Ie of[-1,1]){const dt=new Ot(new gi(.0075,6,5),s.soot);dt.position.set(Ie*.028,.16,.082),O.add(dt)}const ct=Qn();for(let Ie=0;Ie<3;Ie++)ct.box(.03,.002,.002,0,.128-Ie*.016,.048+Ie*.004,0,0,0);ct.build(s.furnitureDark,O,!1,!1);for(const Ie of[-1,1])hn(O,.005,.006,.03,5,s.furnitureDark,Ie*.019,.032,.012,0,0,0,!1,!0);A=O,r.add(O);const $e={id:"bird-note",label:"木鸟",anchor:new L(B,q+.13,D+.14),radius:1.95,objects:U,getPrompt:()=>({key:"E",action:"端详木鸟"}),available:()=>!0,action:()=>ee()};for(const Ie of U)Ie.userData.interactId="bird-note";a.push($e)}function z(B,q,D,O,U,$,he,Ne=0,lt=0,vt=r){const ct=new Qt;ct.position.set(U,$,he),ct.rotation.y=Ne,lt&&(ct.rotation.x=lt);const $e=Math.min(.055,B*.09),Ie=.035;return zt(ct,B+$e*2,$e,Ie,O,0,q/2+$e/2,0,0,0,0,!1,!0),zt(ct,B+$e*2,$e,Ie,O,0,-q/2-$e/2,0,0,0,0,!1,!0),zt(ct,$e,q,Ie,O,-B/2-$e/2,0,0,0,0,0,!1,!0),zt(ct,$e,q,Ie,O,B/2+$e/2,0,0,0,0,0,!1,!0),zt(ct,B+.012,q+.012,.012,s.paper,0,0,-.016,0,0,0,!1,!0),zt(ct,B-.03,q-.03,.006,D,0,0,.002,0,0,0,!1,!0),vt.add(ct),ct}function H(){const B=In.bed.x,q=In.bed.z,D=In.bed.w,O=In.bed.d,U=Gn,$=new Qt;$.name="bed",$.position.y=es,r.add($);const he=q-O/2+.055,Ne=q+O/2-.055,lt=D/2-.05,vt=U+.64,ct=[[he,1.44],[he,1.44],[Ne,.98],[Ne,.98]],$e=[B-lt,B+lt,B-lt,B+lt];for(let Ft=0;Ft<4;Ft++){const en=U+ct[Ft][1];zt($,.095,en-U,.095,s.furniture,$e[Ft],(U+en)/2,ct[Ft][0],0,0,0,!0,!0),Wi($,[[.055,0],[.07,.02],[.045,.06],[.05,.09],[.03,.12],[.005,.13]],10,s.furnitureDark,$e[Ft],en,ct[Ft][0],!1,!0)}zt($,D-.16,.11,.055,s.furniture,B,U+1.34,he,0,0,0,!0,!0),zt($,D-.16,.09,.05,s.furniture,B,U+.6,he,0,0,0,!0,!0);for(let Ft=0;Ft<5;Ft++){const en=B-(D-.4)/2+Ft*((D-.4)/4);hn($,.021,.021,.66,7,s.furnitureDark,en,U+.97,he,0,0,0,!1,!0)}zt($,D-.16,.1,.05,s.furniture,B,U+.92,Ne,0,0,0,!0,!0),zt($,D-.16,.08,.05,s.furniture,B,U+.52,Ne,0,0,0,!0,!0);for(let Ft=0;Ft<3;Ft++){const en=B-(D-.52)/2+Ft*((D-.52)/2);hn($,.023,.023,.32,7,s.furnitureDark,en,U+.72,Ne,0,0,0,!1,!0)}for(const Ft of[-1,1])zt($,.06,.16,O-.15,s.furniture,B+Ft*lt,U+.33,q,0,0,0,!0,!0);ai($,D-.12,.24,O-.18,.05,s.linen,B,U+.52,q,0,0,0,!0,!0,3),zt($,D-.16,.02,.34,s.boneFab,B,vt-.02,q-.72,0,0,0,!1,!0),ai($,D-.06,.075,1.34,.03,s.quilt,B,vt+.02,q+.33,0,0,0,!0,!0,2);for(const Ft of[-1,1])zt($,.055,.48,1.34,s.quilt,B+Ft*(D/2-.03),vt-.22,q+.33,.02,0,Ft*.045,!1,!0);zt($,D-.06,.42,.055,s.quilt,B,vt-.19,q+.33+.67,-.07,0,0,!1,!0),ai($,.62,.18,.42,.075,s.boneFab,B-.38,vt+.15,q-.72,-.42,0,.02,!0,!0,3),ai($,.62,.18,.42,.075,s.linen,B+.38,vt+.15,q-.7,-.38,0,-.03,!0,!0,3),ai($,.4,.13,.3,.06,s.wool,B,vt+.14,q-.42,-.25,.1,0,!0,!0,3),zt($,.74,.065,.44,s.wool,B,vt+.075,q+.7,0,0,0,!0,!0),zt($,.68,.055,.4,s.boneFab,B,vt+.135,q+.7,0,0,0,!0,!0),zt($,.7,.3,.05,s.wool,B,vt-.08,Ne-.02,.1,0,0,!1,!0);const Ie=new Qt;Ie.position.set(B-.48,U,q+.34),hn(Ie,.19,.165,.24,14,s.wicker,0,.12,0,0,0,0,!1,!0,!0),hn(Ie,.185,.185,.012,14,s.furnitureDark,0,.235,0,0,0,0,!1,!0),$.add(Ie),ai($,.1,.055,.23,.03,s.leather,B-1.02,U+.028,Ne+.38,0,.22,0,!1,!0,2),ai($,.1,.055,.23,.03,s.leather,B-.86,U+.028,Ne+.46,0,.05,0,!1,!0,2),o.push({minX:B-D/2-.02,maxX:B+D/2+.02,minZ:q-O/2-.02,maxZ:q+O/2+.02,name:"bed"});const dt=Zs(n,D+.5,O+.4,.42);dt.position.set(B,On+.004,q),r.add(dt)}function E(){const B=In.rug;zt(r,B.w,.014,B.d,s.rug,B.x,On+.0115,B.z,0,0,0,!1,!0);const q=Qn();for(const O of[-1,1]){const U=B.x+O*B.w/2;for(let $=0;$<22;$++){const he=B.z-B.d/2+.06+$*((B.d-.12)/21);q.box(S(u,.05,.08),.006,.012,U+O*.035,On+.0045,he+S(u,-.006,.006),0,S(u,-.15,.15),0)}}q.build(s.boneFab,r,!1,!0);const D=In.entryRug;zt(r,D.w,.008,D.d,s.entryRug,D.x,On+.0065,D.z,0,0,0,!1,!0)}function ue(B,q,D,O,U,$=0){const he=new Qt;he.position.set(q,D,O),he.rotation.y=$,hn(he,.038,.034,.09,12,U,0,.045,0,0,0,0,!1,!0),hn(he,.031,.031,.004,12,new sn({color:"#2b1a10",roughness:.35}),0,.078,0,0,0,0,!1,!0);const Ne=new Ot(new ci(.026,.006,5,10,Math.PI*1.25),U);return Ne.position.set(.038,.05,0),Ne.rotation.z=-.5,Ne.castShadow=!1,he.add(Ne),B.add(he),he}function Pe(B,q,D,O,U=0){const $=new Qt;return $.position.set(q,D,O),$.rotation.y=U,zt($,.22,.035,.16,s.book,0,.0175,0,0,0,0,!1,!0),zt($,.2,.03,.15,s.book,.01,.05,.005,0,.06,0,!1,!0),zt($,.17,.028,.13,s.leather,-.012,.079,0,0,-.05,0,!1,!0),B.add($),$}function C(){const B=In.table.x,q=In.table.z,D=1.48,O=.9,U=Gn,$=U+.76,he=new Qt;he.name="table",he.position.y=es,r.add(he),ai(he,D,.055,O,.012,s.furniture,B,$-.0275,q,0,0,0,!0,!0,2);for(const $e of[-1,1])zt(he,.035,.05,O+.01,s.furnitureDark,B+$e*(D/2-.0175),$-.027,q,0,0,0,!0,!0);const Ne=[[.055,0],[.055,.035],[.038,.06],[.052,.1],[.055,.15],[.042,.22],[.048,.3],[.043,.52],[.052,.55],[.048,.6],[.052,.64],[.046,.7]];for(const $e of[-1,1])for(const Ie of[-1,1])Wi(he,Ne,9,s.furnitureDark,B+$e*(D/2-.13),U,q+Ie*(O/2-.115),!0,!0);for(const $e of[-1,1])zt(he,D-.32,.085,.035,s.furnitureDark,B,U+.66,q+$e*(O/2-.075),0,0,0,!0,!0),zt(he,.035,.085,O-.3,s.furnitureDark,B+$e*(D/2-.075),U+.66,q,0,0,0,!0,!0);zt(he,D-.34,.05,.06,s.furnitureDark,B,U+.32,q,0,0,0,!0,!0),zt(he,.06,.05,O-.32,s.furnitureDark,B,U+.32,q,0,0,0,!0,!0);const lt=new Qt;lt.position.set(B-.26,$,q-.18),Wi(lt,[[.055,0],[.05,.01],[.022,.03],[.018,.05],[.032,.055]],10,s.brass,0,0,0,!1,!0),hn(lt,.018,.019,.2,8,s.wax,0,.155,0,0,0,0,!1,!0),Je(lt,0,.265,0,.9),he.add(lt),ue(he,B+.2,$,q-.22,s.ceramicBone,-.5),ue(he,B+.34,$,q+.06,s.ceramicMoss,1.4);const vt=new Qt;vt.position.set(B-.2,$,q+.2),Wi(vt,[[.055,0],[.1,.015],[.135,.055],[.13,.075]],14,s.furniture,0,0,0,!0,!0);for(let $e=0;$e<3;$e++){const Ie=$e/3*Ci+.4,dt=new Ot(new gi(.036,12,9),new sn({color:$e===1?"#8a3a2a":"#6f2c22",roughness:.55}));dt.position.set(Math.cos(Ie)*.045,.105,Math.sin(Ie)*.045),dt.castShadow=!1,dt.receiveShadow=!0,vt.add(dt)}he.add(vt),Pe(he,B+.42,$,q+.28,.5),zt(he,.34,.006,.24,s.boneFab,B-.28,$+.003,q+.02,0,.03,0,!1,!0),o.push({minX:B-In.table.w/2-.02,maxX:B+In.table.w/2+.02,minZ:q-In.table.d/2-.02,maxZ:q+In.table.d/2+.02,name:"table"});const ct=Zs(n,D+.5,O+.5,.42);ct.position.set(B,On+.0195,q),r.add(ct),v(B-.48,q-.7,0),v(B+.52,q+.67,Math.PI)}function v(B,q,D){const O=Gn,U=new Qt;U.position.set(B,O+es,q),U.rotation.y=D,r.add(U),zt(U,.46,.045,.43,s.furniture,0,.455,0,0,0,0,!0,!0),zt(U,.42,.075,.38,s.furnitureDark,0,.395,0,0,0,0,!0,!0);for(const Ne of[-1,1])hn(U,.026,.021,.45,7,s.furnitureDark,Ne*.19,.225,.17,0,0,0,!0,!0),zt(U,.042,.95,.042,s.furniture,Ne*.19,.475,-.175,.02,0,0,!0,!0);zt(U,.42,.075,.045,s.furniture,0,.9,-.175,.02,0,0,!0,!0),zt(U,.4,.045,.03,s.furniture,0,.7,-.175,.02,0,0,!1,!0),zt(U,.4,.045,.03,s.furniture,0,.57,-.175,.02,0,0,!1,!0);for(const Ne of[-1,1])zt(U,.032,.03,.39,s.furnitureDark,Ne*.19,.17,0,0,0,0,!1,!0);zt(U,.4,.03,.032,s.furnitureDark,0,.22,.17,0,0,0,!1,!0),ai(U,.4,.035,.37,.015,s.boneFab,0,.493,.005,0,0,0,!1,!0,2);const $=Zs(n,.72,.68,.38),he=Math.abs(B-In.rug.x)<In.rug.w/2&&Math.abs(q-In.rug.z)<In.rug.d/2;$.position.set(B,he?On+.0195:On+.0025,q),r.add($),o.push({minX:B-.27,maxX:B+.27,minZ:q-.27,maxZ:q+.27,name:"chair"})}function G(){const D=Gn,O=new Qt;O.name="side-table",O.position.y=es,r.add(O),zt(O,.44,.045,.4,s.furniture,-3.28,D+.6,-2.42,0,0,0,!0,!0),zt(O,.4,.06,.36,s.furnitureDark,-3.28,D+.555,-2.42,0,0,0,!0,!0);for(const he of[-1,1])for(const Ne of[-1,1])hn(O,.022,.018,.56,6,s.furnitureDark,-3.28+he*.17,D+.28,-2.42+Ne*.15,0,0,he*.01,!0,!0);zt(O,.34,.03,.3,s.furnitureDark,-3.28,D+.2,-2.42,0,0,0,!1,!0);const U=new Qt;U.position.set(-3.28-.08,D+.6225,-2.42-.05),Wi(U,[[.045,0],[.04,.012],[.018,.025],[.03,.035]],9,s.iron,0,0,0,!1,!0),hn(U,.015,.016,.17,8,s.wax,0,.12,0,0,0,0,!1,!0),Je(U,0,.215,0,.85),O.add(U),Pe(O,-3.28+.06,D+.6225,-2.42+.02,-.4),ue(O,-3.28+.13,D+.6225,-2.42-.13,s.ceramicRust,.8),o.push({minX:-3.28-.28,maxX:-3.28+.28,minZ:-2.42-.26,maxZ:-2.42+.26,name:"side-table"});const $=Zs(n,.7,.65,.35);$.position.set(-3.28,On+.0025,-2.42),r.add($)}function re(){const B=In.armchair.x,q=In.armchair.z,D=Gn,O=Math.atan2(In.fireplace.x-B,In.fireplace.z-q),U=new Qt;U.name="armchair",U.position.set(B,D+es,q),U.rotation.y=O,r.add(U);for(const Ft of[-1,1])for(const en of[-1,1])Wi(U,[[.038,0],[.045,.02],[.03,.05],[.038,.07],[.026,.12],[.032,.15]],8,s.furnitureDark,Ft*.32,0,en*.3,!0,!0);zt(U,.8,.18,.78,s.furnitureDark,0,.22,0,0,0,0,!0,!0),ai(U,.74,.18,.7,.06,s.moss,0,.39,.02,0,0,0,!0,!0,3),zt(U,.8,.58,.13,s.furnitureDark,0,.62,-.33,-.07,0,0,!0,!0),ai(U,.7,.6,.18,.07,s.moss,0,.63,-.24,-.09,0,0,!0,!0,3);const $=new Ot(new jn(.048,.048,.64,10),s.moss);$.rotation.z=Math.PI/2,$.position.set(0,.925,-.25),$.castShadow=!0,U.add($);for(const Ft of[-1,1]){ai(U,.15,.19,.72,.06,s.moss,Ft*.335,.46,.02,0,0,0,!0,!0,3);const en=new Ot(new jn(.052,.052,.68,10),s.moss);en.rotation.x=Math.PI/2,en.position.set(Ft*.335,.555,.02),en.castShadow=!0,U.add(en),zt(U,.05,.3,.05,s.furnitureDark,Ft*.335,.25,.33,0,0,0,!0,!0)}ai(U,.32,.05,.42,.02,s.wool,.335,.605,0,0,.04,.03,!0,!0,2),zt(U,.1,.34,.05,s.wool,.335,.43,.22,.06,.03,0,!1,!0),ai(U,.42,.3,.14,.06,s.boneFab,0,.67,-.1,-.22,.04,0,!0,!0,3),zt(U,.2,.035,.15,s.leather,-.12,.49,.12,0,.3,0,!1,!0);const he=Math.abs(Math.cos(O)),Ne=Math.abs(Math.sin(O)),lt=.42*he+.43*Ne,vt=.42*Ne+.43*he;o.push({minX:B-lt,maxX:B+lt,minZ:q-vt,maxZ:q+vt,name:"armchair"});const ct=Zs(n,1.4,1.4,.4);ct.position.set(B,On+.0025,q),r.add(ct);const $e=new Qt;$e.position.set(-3.55,On,-2.02),hn($e,.17,.145,.22,12,s.wicker,0,.11,0,0,0,0,!1,!0,!0),hn($e,.165,.165,.01,12,s.furnitureDark,0,.215,0,0,0,0,!1,!0);const Ie=new Ot(new gi(.075,10,8),new sn({color:"#a86a4a",roughness:.95}));Ie.position.set(.01,.24,.02),$e.add(Ie);const dt=new Ot(new gi(.06,10,8),new sn({color:"#7d8464",roughness:.95}));dt.position.set(-.02,.3,-.06),$e.add(dt),r.add($e)}function ge(){const B=In.chandelier.x,q=In.chandelier.z,D=2.9;hn(r,.1,.12,.035,12,s.iron,B,mi-.205,q,0,0,0,!1,!0),hn(r,.1,.1,.01,12,s.iron,B,mi-.19,q,0,0,0,!1,!0);const O=Qn();for(let $e=0;$e<3;$e++)O.add(new ci(.032,.007,5,8),B,mi-.255-$e*.075,q,0,$e%2?Math.PI/2:0,0);O.build(s.iron,r,!1,!1);const U=new Qt;U.position.set(B,D,q),r.add(U),F=U;const $=new Ot(new ci(.32,.024,8,32),s.furniture);$.rotation.x=Math.PI/2,$.castShadow=!0,U.add($);for(let $e=0;$e<4;$e++){const Ie=$e/4*Math.PI*2+Math.PI/4;zt(U,.32,.02,.026,s.furnitureDark,Math.cos(Ie)*.16,.006,Math.sin(Ie)*.16,0,-Ie,0,!1,!0)}hn(U,.052,.048,.06,12,s.furniture,0,.01,0,0,0,0,!0,!0),hn(U,.018,.018,.09,6,s.iron,0,.075,0,0,0,0,!1,!0),Mt.length=0;for(let $e=0;$e<5;$e++){const Ie=-Math.PI/2+$e/5*Math.PI*2,dt=Math.cos(Ie)*.275,Ft=Math.sin(Ie)*.275;hn(U,.044,.035,.02,10,s.iron,dt,.016,Ft,0,0,0,!1,!0);const en=S(u,.07,.11);hn(U,.014,.016,en,8,s.wax,dt,.026+en/2,Ft,0,0,0,!1,!0);const kn=Je(U,dt,.03+en,Ft,.78);kn.userData.chandelier=!0,Mt.push(kn)}const he=Qn(!0);for(const $e of[-2.2,.6,1.9]){he.cyl(.004,.004,.12,4,Math.cos($e)*.32,-.05,Math.sin($e)*.32,Math.cos($e)*.4,0,Math.sin($e)*.4,"#6b5a35");for(let Ie=0;Ie<3;Ie++)he.add(new Eo(.015,0),Math.cos($e)*.32+S(u,-.01,.01),-.11-Ie*.03,Math.sin($e)*.32+S(u,-.01,.01),0,0,0,Ie===1?"#8a7a4a":"#6f7a4a")}he.build(new sn({vertexColors:!0,roughness:.9}),U,!1,!1);const Ne=new Br({map:n.glow,color:"#ffbf7a",transparent:!0,opacity:.22,depthWrite:!1,blending:Pi}),lt=new wo(Ne);lt.scale.setScalar(.48),lt.position.y=.05,U.add(lt),Wt=lt;const vt=[$],ct={id:"chandelier",label:"烛台",anchor:new L(B,D,q),radius:2.5,objects:vt,getPrompt:()=>({key:"E",action:b?"吹灭烛台":"点亮烛台"}),available:()=>!0,action:()=>Vt()};$.userData.interactId="chandelier",a.push(ct)}function Ge(){const q=(Gt.windows.find(Ie=>Ie.id==="front-left")||Gt.windows[0]).x,D=Hn-.32,O=Gn,U=1.5,$=.42,he=O+.46,Ne=new Qt;Ne.name="window-bench",Ne.position.y=es,r.add(Ne),zt(Ne,U,.07,$,s.furniture,q,he-.035,D,0,0,0,!0,!0);for(const Ie of[-1,1])zt(Ne,U-.28,.08,.04,s.furnitureDark,q,he-.11,D+Ie*($/2-.05),0,0,0,!0,!0);for(const Ie of[-1,1])for(const dt of[-1,1])Wi(Ne,[[.036,0],[.044,.02],[.028,.05],[.036,.16],[.026,.3],[.038,.34],[.032,.4]],8,s.furnitureDark,q+Ie*(U/2-.08),O,D+dt*($/2-.08),!0,!0);zt(Ne,U-.18,.03,$-.12,s.furnitureDark,q,O+.15,D,0,0,0,!1,!0);const lt=new Qt;lt.position.set(q-.44,O+.165,D),hn(lt,.15,.13,.18,12,s.wicker,0,.09,0,0,0,0,!1,!0,!0),hn(lt,.145,.145,.01,12,s.furnitureDark,0,.18,0,0,0,0,!1,!0),Ne.add(lt);for(let Ie=0;Ie<3;Ie++)hn(Ne,.045,.045,.42,7,s.bark,q+.34+Ie%2*.09,O+.225+Math.floor(Ie/2)*.08,D+S(u,-.06,.06),0,0,Math.PI/2,!1,!0);ai(Ne,U-.1,.085,$-.06,.03,s.boneFab,q,he+.045,D,0,0,0,!1,!0,2),zt(Ne,.4,.075,.38,s.wool,q+.44,he+.125,D-.01,0,.04,0,!1,!0),zt(Ne,.36,.065,.34,s.boneFab,q+.44,he+.195,D-.01,0,-.03,0,!1,!0),ai(Ne,.34,.3,.12,.05,s.moss,q-.4,he+.2,D+.12,-.32,.1,0,!1,!0,3),ai(Ne,.3,.26,.11,.05,s.wool,q+.02,he+.18,D+.12,-.28,-.12,0,!1,!0,3),Pe(Ne,q-.42,he+.09,D-.02,.3),ue(Ne,q+.12,he+.09,D+.05,s.ceramicBone,.4);const vt=Gt.windows.find(Ie=>Ie.id==="front-right"),ct=new Qt;ct.position.set(vt.x+.38,Gn+vt.y-vt.height/2+.001,Hn-.14),Wi(ct,[[.045,0],[.052,.02],[.055,.09],[.06,.1]],10,s.clay,0,0,0,!1,!0);for(let Ie=0;Ie<5;Ie++){const dt=Ie/5*Ci;hn(ct,.004,.006,.18,4,s.plant,Math.cos(dt)*.02,.19,Math.sin(dt)*.02,Math.cos(dt)*.4,0,Math.sin(dt)*.4,!1,!0)}r.add(ct),o.push({minX:q-U/2,maxX:q+U/2,minZ:Hn-.55,maxZ:Hn,name:"window-bench"});const $e=Zs(n,U+.3,$+.3,.36);$e.position.set(q,On+.0025,D),r.add($e)}function He(){z(.86,.6,s.art0,s.furnitureDark,.48,2.02,pr+.028,0),z(.96,.56,s.art1,s.furnitureDark,In.bed.x,2.3,pr+.028,0),z(.46,.6,s.art2,s.furnitureDark,fo-.028,1.95,.85,-Math.PI/2);for(const B of[-.28,1.24]){const q=new Qt;q.position.set(B,2.05,pr+.03),zt(q,.1,.17,.025,s.iron,0,0,0,0,0,0,!1,!0),zt(q,.025,.025,.13,s.iron,0,.055,.065,0,0,0,!1,!0),hn(q,.028,.034,.05,8,s.iron,0,.085,.125,0,0,0,!1,!0),hn(q,.014,.015,.11,8,s.wax,0,.16,.125,0,0,0,!1,!0),Je(q,0,.225,.125,.8),r.add(q)}for(const[B,q]of[[1.45,2.02],[2.25,1.66]]){const D=new Qt;D.position.set(ho+.045,q,B),hn(D,.17,.17,.035,14,s.wicker,0,0,0,0,0,Math.PI/2,!1,!0);const O=new Ot(new ci(.17,.014,6,18),s.wicker);O.rotation.y=Math.PI/2,D.add(O),r.add(D)}}function we(){const B=[[0,mi-.24,1.22],[0,mi-.24,-1.32],[-2.45,mi-.22,1.64]],q=Qn(!0);for(const[O,U,$]of B){q.cyl(.004,.004,.11,4,O,U-.055,$,0,0,0,"#6b5a3a");const he=9;for(let Ne=0;Ne<he;Ne++){const lt=Ne/he*Ci+u()*.4,vt=S(u,.12,.42),ct=S(u,.2,.34),$e=O+Math.cos(lt)*.012,Ie=$+Math.sin(lt)*.012;q.cyl(.0035,.0025,ct,4,$e+Math.cos(lt)*ct*.35*Math.sin(vt),U-.1-ct/2,Ie+Math.sin(lt)*ct*.35*Math.sin(vt),Math.sin(lt)*vt,0,-Math.cos(lt)*vt,"#6f6242");for(let dt=0;dt<3;dt++){const Ft=.45+dt*.25;q.add(new Eo(S(u,.008,.016),0),O+Math.cos(lt)*ct*Ft*Math.sin(vt)+S(u,-.01,.01),U-.1-ct*Ft,$+Math.sin(lt)*ct*Ft*Math.sin(vt)+S(u,-.01,.01),0,0,0,Ri(u,["#8a7a4a","#6f7a4a","#9a8a5a","#5f6b45"]))}}}const D=q.build(new sn({vertexColors:!0,roughness:.92}),r,!1,!1);D&&(D.castShadow=!1)}function Ae(){const D=new Qt;D.position.set(-3.52,On,.95),hn(D,.28,.245,.36,14,s.wicker,0,.18,0,0,0,0,!0,!0,!0),hn(D,.285,.285,.012,14,s.furnitureDark,0,.355,0,0,0,0,!1,!0);for(let U=0;U<5;U++){const $=U/5*Ci;hn(D,.052,.052,.52,7,s.bark,Math.cos($)*.1,.42,Math.sin($)*.1,S(u,-.15,.15),0,S(u,-.15,.15),!1,!0),U%2===0&&hn(D,.047,.047,.012,7,s.lightWood,Math.cos($)*.1,.69,Math.sin($)*.1,S(u,-.15,.15),0,S(u,-.15,.15),!1,!0)}r.add(D),o.push({minX:-3.52-.3,maxX:-3.52+.3,minZ:.95-.3,maxZ:.95+.3,name:"log-basket"});const O=Zs(n,.85,.85,.34);O.position.set(-3.52,On+.0025,.95),r.add(O)}function rt(){zt(r,.6,.13,.035,s.furnitureDark,1,1.88,Hn-.02,0,0,0,!1,!0);for(const O of[.81,.93,1.05,1.17])hn(r,.011,.013,.075,6,s.furnitureDark,O,1.88-.01,Hn-.055,Math.PI/2,0,0,!1,!0);const q=new Qt;q.position.set(.84,1.88-.2,Hn-.1),q.rotation.x=Math.PI/2,hn(q,.15,.15,.012,16,s.wicker,0,0,0,0,0,0,!1,!0),hn(q,.075,.085,.085,12,s.wicker,0,.045,0,0,0,0,!1,!0),q.rotation.z=.06,r.add(q),zt(r,.22,.44,.018,s.linen,1.07,1.88-.31,Hn-.055,0,0,.03,!1,!0),zt(r,.22,.03,.02,s.furnitureDark,1.07,1.88-.1,Hn-.055,0,0,.03,!1,!0);const D=new Qt;D.position.set(-.96,On,Hn-.16),D.rotation.x=-.1,hn(D,.017,.014,1.52,7,s.furniture,0,.86,0,0,0,.03,!1,!0),zt(D,.11,.06,.06,s.wicker,0,.14,0,0,0,0,!1,!0);for(let O=0;O<7;O++){const U=-.5+O/6*1;hn(D,.005,.012,.3,4,s.wicker,Math.sin(U)*.035,.06,Math.cos(U)*.01,Math.sin(U)*.4,0,0,!1,!0)}r.add(D)}function Nt(){const q=new Pn,D=new Float32Array(240);de=[];for(let U=0;U<80;U++){const $=S(u,-2.8,2.8),he=S(u,.55,2.9),Ne=S(u,-2.4,2.4);D[U*3]=$,D[U*3+1]=he,D[U*3+2]=Ne,de.push({x:$,y:he,z:Ne,p:u()*Ci,s:S(u,.15,.5)})}q.setAttribute("position",new Vn(D,3));const O=new Dr({map:n.dust,size:.022,transparent:!0,opacity:.32,depthWrite:!1,color:"#ffe2b8",sizeAttenuation:!0,blending:Pi,toneMapped:!1});Te=new To(q,O),Te.frustumCulled=!1,r.add(Te)}function nt(){P=new D0("#ffc178",0,5,1.4),P.position.set(In.chandelier.x,3.12,In.chandelier.z),P.castShadow=!1,P.name="interior-chandelier-light",r.add(P),N=new Tc("#ffd9ae",0,8,1.02,.95,1.6),N.position.set(-2.55,2.1,Hn-.62),N.target.position.set(-.5,.65,-.6),N.castShadow=!1,N.name="interior-window-light-l",r.add(N,N.target),k=new Tc("#ffd9ae",0,8,1.02,.95,1.6),k.position.set(2.55,2.1,Hn-.62),k.target.position.set(.5,.65,-.6),k.castShadow=!1,k.name="interior-window-light-r",r.add(k,k.target)}function Fe(){const B=h,q=typeof B.hour=="number"?B.hour:17.2,D=vn(B.overcast??(B.weather==="rain"||B.weather==="storm"?.55:B.weather==="snow"?.45:B.weather==="fog"?.4:0),0,1),O=!!B.isNight;let U=0;O||(U=cs(5.4,8.2,q)*(1-cs(17.8,20.4,q)),U=vn(U,0,1));const $=vn(1-Math.abs(q-17.5)/3.2,0,1),he=B.weather==="rain"||B.weather==="storm",Ne=m?1:.42;J.window=(O?2:8+30*U)*(1-.5*D)*Ne*(he?.8:1),O?J.windowColor.copy(be):J.windowColor.copy(st).lerp(Y,$),J.chandelier=b?O?17:8.5+3.5*D+3*(1-U):0,J.fire=p?O?55:46:0,J.chandelierColor.copy(Oe)}function Ct(){p=!p,Fe(),t.notify(p?"炉火燃起来了":"炉火熄灭了")}function ut(){m=!m,Fe(),t.notify(m?"窗帘拉开了":"窗帘合上了")}function Vt(){b=!b,Fe(),t.notify(b?"烛台亮了起来":"烛台熄了")}function ee(){if(y){y=!1,t.hidePanel();return}y=!0,t.showPanel(Ze)}function je(B){_+=((p?1:0)-_)*(1-Math.exp(-B*(p?2.4:6.5))),_<.002&&(_=0),_>1&&(_=1);const D=d,O=.82+.085*Math.sin(D*7.9)+.055*Math.sin(D*14.3+1.7)+.035*Math.sin(D*27.1+.6)+.025*Math.sin(D*43.7+2.2);x&&(x.intensity=J.fire*_*O);for(const U of l){const $=.75+.25*Math.sin(D*U.speed+U.phase)+.12*Math.sin(D*U.speed*1.9+U.phase*2.1);U.mesh.scale.set(1+.1*Math.sin(D*U.speed*.7+U.phase),Math.max(.35,$),1),U.mesh.position.y=U.baseY+.018*Math.sin(D*2.2+U.phase),U.mesh.visible=_>.02}s.flame.opacity=.82*_,s.flameOuter.opacity=.45*_,oe&&(oe.material.opacity=_*(.16+.06*O)),Re&&(Re.material.opacity=_*(.42+.14*O)),Se&&(Se.material.opacity=_*(.2+.07*O)),X&&(X.material.opacity=_*(.55+.25*Math.sin(D*3.1)));for(let U=0;U<j.length;U++){const $=j[U];if(!$)continue;const he=.5+.5*Math.sin(D*(1.5+U%5*.7)+U);$.emissiveIntensity=_*(.85+.75*he)+.1}if(V&&(V.visible=_>.05,V.visible)){const U=V.geometry.attributes.position;for(let $=0;$<te.length;$++){const he=te[$];he.life-=B*.9,he.life<=0&&(he.life=1,he.x=-3.58,he.y=.52+u()*.18,he.z=In.fireplace.z+S(u,-.3,.3),he.vx=S(u,-.1,.22),he.vy=S(u,.35,.85),he.vz=S(u,-.12,.12),he.wob=u()*Ci);const Ne=B*(.6+he.life);he.x+=(he.vx+Math.sin(D*3+he.wob)*.06)*Ne,he.y+=he.vy*Ne,he.z+=he.vz*Ne,he.y>1.75&&(he.life=0),U.setXYZ($,he.x,he.y,he.z)}U.needsUpdate=!0,V.material.opacity=.85*_}}function ze(B){const q=1-Math.exp(-B*3.6);T+=((b?1:0)-T)*(1-Math.exp(-B*4.2)),P&&(P.intensity+=(J.chandelier*T-P.intensity)*q,P.color.lerp(J.chandelierColor,.15));for(const D of[N,k])D&&(D.intensity+=(J.window-D.intensity)*q,D.color.lerp(J.windowColor,.15))}function St(){for(const B of c){const q=B.baseScale*(.92+.08*Math.sin(d*B.speed+B.phase)+.03*Math.sin(d*B.speed*2.3+B.phase*2));B.mesh.scale.setScalar(q),B.mesh.rotation.y=Math.sin(d*B.speed*.32+B.phase)*.14}}function Et(B){const q=m?1:0;g+=(q-g)*(1-Math.exp(-B*3.4)),Math.abs(q-g)<.0015&&(g=q);const D=cs(0,1,g);for(const O of tt){const U=$i(O.closedOffset,O.openOffset,D),$=$i(1,O.openScale,D);O.left&&(O.left.position.x=O.win.x-U,O.left.scale.x=$,O.left.rotation.z=Math.sin(d*.9+O.seed)*.006*D,O.left.rotation.x=Math.sin(d*.62+O.seed*2)*.004*D),O.right&&(O.right.position.x=O.win.x+U,O.right.scale.x=$,O.right.rotation.z=-Math.sin(d*.9+O.seed)*.006*D,O.right.rotation.x=Math.sin(d*.62+O.seed*2)*.004*D)}}function qe(B){F&&(F.rotation.z=Math.sin(d*.55)*.006,F.rotation.x=Math.sin(d*.43+1.2)*.004);const q=T>.05;for(const D of Mt)D.visible=q;Wt&&(Wt.material.opacity=.2*T)}function Bt(B){if(!A)return;const q=y?.16:.05;A.rotation.y=R+Math.sin(d*.75+1.2)*q,A.rotation.z=y?Math.sin(d*2.1)*.05:0}function Ut(B){for(let q=0;q<xe.length;q++){const D=xe[q];D.phase=(D.phase+B*.22)%1;const O=D.phase;D.sprite.position.y=.25+O*.55,D.sprite.position.x=.012+Math.sin(O*6.2+q*1.7)*.04*O,D.sprite.scale.setScalar(D.base*(.7+O*1.6));const U=O<.1?O/.1:1-(O-.1)/.9;D.sprite.material.opacity=Math.max(0,.2*U*_)}}function _n(){if(!Te)return;const B=d,q=Te.geometry.attributes.position;for(let D=0;D<de.length;D++){const O=de[D];q.setXYZ(D,O.x+Math.sin(B*.11*O.s+O.p)*.35,O.y+Math.sin(B*.16*O.s+O.p*2.1)*.22,O.z+Math.cos(B*.09*O.s+O.p)*.35)}q.needsUpdate=!0,Te.material.opacity=.2+.07*Math.sin(B*.4)}function ht(B){!B||typeof B!="object"||(Object.assign(h,B),Fe())}function fn(B=.016,q,D={}){const O=Math.min(Math.max(B||0,0),.06);d+=O,q&&(Object.assign(h,q),Fe()),D&&D.mode&&(f=D.mode),je(O),ze(O),St(),Et(O),qe(),Bt(),Ut(O),_n()}return Ve(),Be(),bt(),H(),E(),C(),G(),re(),ge(),Ge(),He(),we(),Ae(),rt(),nt(),Nt(),Fe(),{group:r,colliders:o,interactables:a,setEnvironment:ht,update:fn,note:Ze,get fireplaceOn(){return p},get curtainsOpen(){return m},get chandelierOn(){return b},get fireLevel(){return _},setFireplace(B){p=!!B,p&&(_=Math.max(_,.3)),Fe()},toggleFireplace:Ct,setCurtains(B){m=!!B,Fe()},toggleCurtains:ut,setChandelier(B){b=!!B,Fe()},toggleChandelier:Vt,showBirdNote:ee,hideBirdNote(){y=!1,t.hidePanel()},notifyNoteClosed(){y=!1},_debug:{group:r,lights:()=>({fire:x,chandelier:P,windowL:N,windowR:k}),state:()=>({fireplaceOn:p,fireLevel:_,curtainsOpen:m,curtainT:g,chandelierLit:b,birdNoteOpen:y,mode:f})}}}const Y0={clear:.04,rain:.72,snow:.56,fog:.74,storm:.94},yl=i=>new Promise(e=>setTimeout(e,i)),Qo=()=>new Promise(i=>requestAnimationFrame(()=>i())),Rt={...$s,activePreset:null,hourTarget:null,windowGlow:!0},Kx=document.getElementById("app"),Jx=document.getElementById("scene-root"),q0=document.createElement("div");q0.id="atmosphere";Kx.appendChild(q0);const Dl=document.createElement("div");Dl.id="scene-transition";document.body.appendChild(Dl);const Qx=document.getElementById("boot-fallback"),yi=new w2({antialias:!0,powerPreference:"high-performance",alpha:!1,stencil:!1});yi.setPixelRatio(Math.min(window.devicePixelRatio||1,1.65));yi.setSize(window.innerWidth,window.innerHeight);yi.shadowMap.enabled=!0;yi.shadowMap.type=na;yi.toneMapping=Bl;yi.toneMappingExposure=1;yi.outputColorSpace=qi;yi.domElement.setAttribute("aria-label","林间小屋 三维场景");Jx.appendChild(yi.domElement);const zo=new xp,us=new Zi(46,window.innerWidth/window.innerHeight,.08,700);us.position.set(0,2.1,17.4);let ki=!1,Ms=!1,er=!1,gr=null,Nl="",Jf=0,Oc=0,ws=null;const si=I2({onTimePreset:i=>Q0(i),onAutoToggle:i=>j0(i),onTimeInput:i=>ed(i),onWeatherChange:i=>td(i),onSeasonChange:i=>nd(i),onOverlayClose:()=>{ki=!1,Oi?.notifyNoteClosed?.(),Ms||mn?.setInputEnabled(!0),ws?.setEnabled(!Ms),Ma(null)}});si.setLoading(.08,"正在拨开林间的雾…");const ui=D2();ui.attachUI(document.getElementById("ui-root"));function jx(){const i=document.getElementById("environment-dock");if(!i||document.getElementById("sound-toggle"))return;const e=document.createElement("div");e.className="dock-divider",e.setAttribute("aria-hidden","true");const t=document.createElement("section");t.className="dock-group dock-group--sound",t.setAttribute("role","group"),t.setAttribute("aria-label","声音");const n=document.createElement("div");n.className="dock-group-label",n.textContent="声音";const s=document.createElement("div");s.className="dock-row";const r=document.createElement("button");r.type="button",r.id="sound-toggle",r.className="dock-btn sound-btn",r.setAttribute("aria-pressed","true"),r.innerHTML=`
    <span class="dock-btn-ic" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 9.5h3.4L12 5.5v13l-4.6-4H4z"/>
        <path class="sound-wave" d="M15.5 8.4a5 5 0 0 1 0 7.2"/>
        <path class="sound-wave" d="M18.3 5.8a9 9 0 0 1 0 12.4"/>
        <path class="sound-slash" d="m15.6 9.6 4.1 4.1"/>
        <path class="sound-slash" d="m19.7 9.6-4.1 4.1"/>
      </svg>
    </span>
    <span class="dock-btn-label">开</span>`;const o=()=>{const a=ui.muted;r.setAttribute("aria-pressed",a?"false":"true"),r.setAttribute("aria-label",a?"开启环境声与配乐":"关闭环境声与配乐"),r.title=a?"环境声与配乐：关（点击开启）":"环境声与配乐：开（点击静音）",r.querySelector(".dock-btn-label").textContent=a?"关":"开"};r.addEventListener("click",a=>{a.preventDefault(),ui.toggleMute()||ui.playClick(),o(),r.blur()}),s.appendChild(r),t.appendChild(n),t.appendChild(s),i.appendChild(e),i.appendChild(t),o()}jx();const fh=tx({scene:zo,renderer:yi,camera:us}),Xl=hx({renderer:yi,scene:zo,camera:us}),Z0={showPanel:i=>sM(i),hidePanel:()=>_a(),notify:i=>si.notify?.(i)},Gr=Lx({scene:zo,callbacks:Z0}),ys=zx({scene:zo}),Oi=$x({scene:zo,callbacks:Z0}),mn=mx({scene:zo,camera:us,domElement:yi.domElement,outsideColliders:[...ys.colliders||[],...Gr.colliders||[]],interiorColliders:[...Oi.colliders||[]],occluders:[...e0(ys.cameraOccluders),...e0(Gr.cameraOccluders)],callbacks:{onCanvasClick:i=>iM(i)}});mn.setInputEnabled(!1);ws=N2({onMove:(i,e,t)=>mn.setTouchInput(i,e,t),onAction:()=>{ui.playClick(),K0()},onToggleView:()=>{ui.playClick(),ql()}});ws.setEnabled(!1);function Ma(i){si.setPrompt(i),ws?.setPrompt(i)}function Ul(i){si.setMode(i),ws?.setMode(i)}const Qf=new N0,zc=new et,dh=[],Fl=new Map,Uu=[];function ph(i,e=new L){return i?i.isVector3?i.clone():new L(i.x||0,i.y||0,i.z||0):e.clone()}function Yl(i){if(!i||!i.id)return;const e={...i,anchor:ph(i.anchor),radius:i.radius??Xt.interactDistance,objects:i.objects||[],available:i.available||(()=>!0)};dh.push(e),Fl.set(e.id,e);for(const t of e.objects)t&&(t.userData.interactId=e.id,t.traverse?t.traverse(n=>{n.isMesh&&Uu.push(n)}):t.isMesh&&Uu.push(t))}const eM=ph(Gt.doorAnchor),tM=ph(Gt.interiorDoorAnchor);Yl({id:"cabin-door",label:"木门",anchor:eM,radius:2.7,objects:ys.clickables||[],available:()=>mn.mode==="third",getPrompt:()=>({key:"E",action:"进入小屋"}),action:()=>ql()});Yl({id:"cabin-exit",label:"木门",anchor:tM,radius:2.15,objects:[],available:()=>mn.mode==="first",getPrompt:()=>({key:"E",action:"离开小屋"}),action:()=>ql()});for(const i of Oi.interactables||[]){const e=i.available||(()=>!0);Yl({...i,available:()=>mn.mode==="first"&&e()})}for(const i of Gr.interactables||[]){const e=i.available||(()=>!0);Yl({...i,available:()=>mn.mode==="third"&&e()})}function nM(){if(!er||Ms||ki)return null;const i=mn.getInteractionPosition();let e=null,t=1/0;for(const n of dh){let s=!1;try{s=!!n.available()}catch{s=!1}if(!s)continue;const r=i.x-n.anchor.x,o=i.z-n.anchor.z,a=Math.hypot(r,o);a<=n.radius&&a<t&&(e=n,t=a)}return e}function $0(i){if(!i)return null;let e;try{e=i.getPrompt?i.getPrompt():{key:"E",action:i.label||"互动"}}catch{e={key:"E",action:i.label||"互动"}}return typeof e=="string"&&(e={key:"E",action:e}),{...e,id:i.id}}function va(i=!1){const e=nM(),t=e?$0(e):null,n=e?`${e.id}|${t?.action||""}`:"";if(!i&&n===Nl){gr=e;return}Nl=n,gr=e,Ma(t)}function iM(i){if(!er||Ms||ki)return;const e=yi.domElement.getBoundingClientRect();zc.x=(i.clientX-e.left)/e.width*2-1,zc.y=-((i.clientY-e.top)/e.height)*2+1,Qf.setFromCamera(zc,us);const t=Qf.intersectObjects(Uu,!1);if(!t.length)return;let n=t[0].object,s=null;for(;n;){if(n.userData?.interactId){s=n.userData.interactId;break}n=n.parent}if(!s)return;const r=Fl.get(s);if(!r)return;let o=!1;try{o=!!r.available()}catch{o=!1}if(!o)return;const a=mn.getInteractionPosition();if(Math.hypot(a.x-r.anchor.x,a.z-r.anchor.z)>r.radius+1.1){si.notify?.("再靠近一些");return}r.action?.()}function K0(){if(!(!er||Ms)){if(ki){_a();return}va(!0),gr&&gr.action?.()}}async function ql(){!er||Ms||(Ms=!0,mn.setInputEnabled(!1),ws?.setEnabled(!1),si.setLocked?.(!0),Ma(null),gr=null,Nl="",Dl.classList.add("active"),await yl(430),mn.mode==="third"?(ys.setDoorOpen?.(!0),ui.playDoor(!0),mn.enterInterior(),Ul("first")):(ys.setDoorOpen?.(!0),ui.playDoor(!0),mn.exitInterior(),Ul("third")),await yl(150),Dl.classList.remove("active"),await yl(520),mn.mode==="third"&&setTimeout(()=>{ys.setDoorOpen?.(!1),ui.playDoor(!1)},450),Ms=!1,mn.setInputEnabled(!ki),ws?.setEnabled(!ki),si.setLocked?.(!1),Bs(!0),va(!0))}function sM(i){i&&(ki=!0,mn.setInputEnabled(!1),ws?.setEnabled(!1),Ma(null),gr=null,Nl="",si.showPanel(i))}function _a(){if(!ki){si.hidePanel();return}ki=!1,si.hidePanel(),Oi.notifyNoteClosed?.(),Ms||mn.setInputEnabled(!0),ws?.setEnabled(!Ms),Bs(!0)}function rM(i=Rt.hour){return i<6.3||i>=19.3}function Os(){return Rt.hour<7.4||Rt.hour>16.55||Rt.weather!=="clear"}function jf(i=Rt.hour){return i>=5.5&&i<7.3?"清晨":i>=7.3&&i<16.7?"白天":i>=16.7&&i<19.4?"黄昏":"夜晚"}function oM(i){const e=Math.floor(i)%24,t=Math.floor((i-Math.floor(i))*60);return`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}`}function Ao(){const i=Y0[Rt.weather]??0;return{season:Rt.season,weather:Rt.weather,hour:Rt.hour,timeMode:Rt.timeMode,isNight:rM(),windowGlow:Rt.windowGlow,overcast:i}}function Uo(i=!0){const e=Ao();ys.setEnvironment?.(e),Oi.setEnvironment?.(e),Gr.setEnvironment?.(e)}function Bs(i=!1){const e=performance.now();if(!i&&e-Jf<120)return;Jf=e;const t=Ao();si.setEnvironment(t,{phaseLabel:jf(),timeLabel:jf(),clock:oM(Rt.hour),timeMode:Rt.timeMode,preset:Rt.activePreset,auto:Rt.timeMode==="auto",seasonLabel:Lr[Rt.season]?.label||Rt.season,weatherLabel:Mo[Rt.weather]?.label||Rt.weather})}function J0(i=!0){const e=Os();e!==Rt.windowGlow&&(Rt.windowGlow=e,i=!0),i&&Uo(!0),Bs(!0)}function Q0(i){!_l[i]||!_l[i].hour||(Rt.timeMode="manual",Rt.activePreset=i,Rt.hourTarget=_l[i].hour,Bs(!0))}function j0(i){i?(Rt.timeMode="auto",Rt.activePreset="auto",Rt.hourTarget=null):(Rt.timeMode="manual",Rt.activePreset=null,Rt.hourTarget=null),Bs(!0)}function ed(i){const e=Math.max(0,Math.min(24,Number(i)||0));Rt.hour=e%24,Rt.timeMode="manual",Rt.activePreset=null,Rt.hourTarget=null,Rt.windowGlow=Os(),Uo(!1),Bs(!0)}function mh(){const i=document.querySelector('[data-weather="snow"]');if(!i)return;const e=Rt.season==="winter";i.disabled=!e,i.setAttribute("aria-disabled",String(!e)),i.title=e?"天气：雪":"下雪只在冬季开放",i.classList.toggle("is-season-locked",!e)}function td(i){if(E2.includes(i)){if(i==="snow"&&Rt.season!=="winter"){si.notify?.("下雪只在冬季开放"),mh();return}Rt.weather=i,Rt.windowGlow=Os(),J0(!0),si.notify?.(`天气 · ${Mo[i]?.label||i}`)}}function nd(i){if(!T2.includes(i))return;const e=Rt.weather==="snow";Rt.season=i,e&&i!=="winter"&&(Rt.weather="clear",Rt.windowGlow=Os()),mh(),J0(!0),e&&i!=="winter"?si.notify?.(`季节 · ${Lr[i]?.label||i} · 雪停了`):si.notify?.(`季节 · ${Lr[i]?.label||i}`)}const go={hour:Rt.hour,season:Rt.season,weather:Rt.weather,interior:!1};let Ol=performance.now(),Fu=!1;function aM(i){if(Rt.timeMode==="auto")Rt.hour=(Rt.hour+i*(24/260))%24,Rt.windowGlow!==Os()&&(Rt.windowGlow=Os(),Uo(!1));else if(Rt.hourTarget!==null){const e=Rt.hourTarget;let t=((e-Rt.hour+24)%24+24)%24;t>12&&(t-=24),Math.abs(t)<.006?(Rt.hour=e,Rt.hourTarget=null):Rt.hour=(Rt.hour+t*(1-Math.exp(-i*2.4))+24)%24;const n=Os();n!==Rt.windowGlow&&(Rt.windowGlow=n,Uo(!1))}}function lM(i){er&&(Oc+=i,!(Oc<.1)&&(Oc=0,va(!1)))}const zl={ready:!1,state:Rt,player:mn,camera:us,get modules(){return{environment:fh,cabin:ys,interior:Oi,nature:Gr,ui:si,post:Xl,player:mn,audio:ui}},getState:()=>({...Rt,windowGlow:Rt.windowGlow,mode:mn.mode,position:mn.getPosition().toArray()}),setHour(i,e=null){ed(Number(i)),Rt.activePreset=e,Bs(!0)},setPreset:i=>Q0(i),setWeather:i=>td(i),setSeason:i=>nd(i),setAuto:i=>j0(i),enterCabin:()=>{mn.mode==="third"&&(mn.enterInterior(),Ul("first"))},exitCabin:()=>{mn.mode==="first"&&(mn.exitInterior(),Ul("third"))},toggleFire:()=>Oi.setFireplace?.(!Oi.fireplaceOn),setFire:i=>Oi.setFireplace?.(!!i),openBird:()=>{(Fl.get("bird-note")||dh.find(e=>e.id.includes("bird")))?.action?.()},closePanel:()=>_a(),interact:i=>Fl.get(i)?.action?.(),setInput:i=>mn.setInputEnabled(!!i),teleport:(i,e)=>{mn.setPosition(Number(i),Number(e)),va(!0)},closeNote:()=>{const i=document.querySelector("#note-close");i?i.click():_a()},screenshotMode:i=>{i==="first"&&mn.mode!=="first"&&zl.enterCabin(),i==="third"&&mn.mode!=="third"&&zl.exitCabin()},getPrompt:()=>gr?$0(gr):null,refreshPrompt:()=>va(!0),toggleSound:()=>{const i=ui.toggleMute(),e=document.getElementById("sound-toggle");if(e){e.setAttribute("aria-pressed",i?"false":"true");const t=e.querySelector(".dock-btn-label");t&&(t.textContent=i?"关":"开")}return i||ui.playClick(),!i},getAudioState:()=>({muted:ui.muted,started:ui.started,contextState:ui.contextState,level:ui.getLevel(),music:ui.musicInfo})};window.__scene=zl;function id(){const i=performance.now(),e=Math.min((i-Ol)/1e3,.06);if(Ol=i,!Fu){aM(e),go.hour=Rt.hour,go.season=Rt.season,go.weather=Rt.weather,go.interior=mn.mode==="first",mn.update(e),fh.update(e,go);const t=Ao();ys.update?.(e,t),Oi.update?.(e,t,{camera:us,mode:mn.mode}),Gr.update?.(e,t,{camera:us,playerPosition:mn.getPosition(),mode:mn.mode}),ys.setSmokeLevel?.(Rt.season==="winter"?1:Oi.fireplaceOn?.7:0);const n={season:Rt.season,weather:Rt.weather,hour:Rt.hour,overcast:Y0[Rt.weather]??0,interior:mn.mode==="first"};if(ui.setEnvironment(n),ui.update(e,{...n,moving:!!mn.state?.moving,speed:mn.state?.speed||0,position:mn.getPosition(),fireplaceOn:!!Oi.fireplaceOn,curtainsOpen:!!Oi.curtainsOpen,panelOpen:ki}),ki&&!si.isPanelOpen()&&(ki=!1,Oi.notifyNoteClosed?.(),Ms||mn.setInputEnabled(!0)),lM(e),Bs(!1),!er||Rt.windowGlow!==Os()){const s=Os();s!==Rt.windowGlow&&(Rt.windowGlow=s,Uo(!1))}Xl.render(e),er&&(window.__sceneStats={fps:1/Math.max(e,1e-4),triangles:yi.info.render.triangles,calls:yi.info.render.calls})}requestAnimationFrame(id)}function sd(){const i=window.innerWidth,e=window.innerHeight,t=Math.min(window.devicePixelRatio||1,1.65);us.aspect=i/e,us.updateProjectionMatrix(),yi.setPixelRatio(t),yi.setSize(i,e),Xl.setSize(i,e,t)}window.addEventListener("resize",sd);document.addEventListener("visibilitychange",()=>{Fu=document.hidden,Fu||(Ol=performance.now())});window.addEventListener("keydown",i=>{if(!er||i.repeat)return;const e=i.target?.tagName;if(!(e==="INPUT"||e==="TEXTAREA"||e==="SELECT"||i.target?.isContentEditable))if(i.code==="KeyV"){if(ki)return;i.preventDefault(),ql()}else i.code==="KeyE"?(i.preventDefault(),K0()):i.code==="Escape"&&ki&&_a()});function e0(i=[]){const e=[];for(const t of i||[])t&&(t.isMesh?e.push(t):t.traverse&&t.traverse(n=>{n.isMesh&&e.push(n)}));return e}async function cM(){Rt.windowGlow=Os(),mh(),Uo(!0),Bs(!0),sd(),await Qo(),si.setLoading(.36,"正在铺好门前的青石…"),await Qo(),si.setLoading(.62,"正在让树叶落回原处…"),await Qo(),si.setLoading(.84,"正在点亮窗前的灯…"),await Qo(),fh.update(.016,go),ys.update?.(.016,Ao()),Oi.update?.(.016,Ao(),{camera:us,mode:mn.mode}),Gr.update?.(.016,Ao(),{camera:us,playerPosition:mn.getPosition(),mode:mn.mode}),mn.update(.016),Xl.render(.016),await Qo(),Ol=performance.now(),id(),await yl(260),si.setReady?.(),Qx?.remove(),er=!0,zl.ready=!0,mn.setInputEnabled(!0),ws?.setEnabled(!0),ws?.updateOffset(),Bs(!0),setTimeout(()=>{ki||Ma(null)},300)}cM();
