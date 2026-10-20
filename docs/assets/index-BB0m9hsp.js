(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Du="186",ed=0,ph=1,td=2,ta=1,nd=2,Qo=3,Nr=0,zi=1,Bn=2,Is=0,Mo=1,Pi=2,mh=3,gh=4,id=5,ho=100,sd=101,rd=102,od=103,ad=104,ld=200,cd=201,ud=202,hd=203,Kf=204,Jf=205,fd=206,dd=207,pd=208,md=209,gd=210,vd=211,_d=212,xd=213,Md=214,Uc=0,Fc=1,Oc=2,aa=3,zc=4,Bc=5,kc=6,Gc=7,Qf=0,yd=1,Sd=2,Ds=0,Nu=1,Uu=2,Fu=3,Fl=4,Ou=5,zu=6,Bu=7,jf=300,Ur=301,Ao=302,al=303,Yl=304,Ol=306,Co=1e3,on=1001,Hc=1002,_i=1003,bd=1004,Sa=1005,Li=1006,ql=1007,Cr=1008,ts=1009,e0=1010,t0=1011,la=1012,ku=1013,Us=1014,_s=1015,$i=1016,Gu=1017,Hu=1018,ca=1020,n0=35902,i0=35899,s0=1021,r0=1022,xs=1023,Qs=1026,Rr=1027,Vu=1028,Wu=1029,Fr=1030,Xu=1031,Yu=1033,ll=33776,cl=33777,ul=33778,hl=33779,Vc=35840,Wc=35841,Xc=35842,Yc=35843,qc=36196,Zc=37492,$c=37496,Kc=37488,Jc=37489,xl=37490,Qc=37491,jc=37808,eu=37809,tu=37810,nu=37811,iu=37812,su=37813,ru=37814,ou=37815,au=37816,lu=37817,cu=37818,uu=37819,hu=37820,fu=37821,du=36492,pu=36494,mu=36495,gu=36283,vu=36284,Ml=36285,_u=36286,wd=3200,xu=0,Td=1,Zs="",Yi="srgb",yl="srgb-linear",Sl="linear",Fn="srgb",Zl=7680,Ed=519,Ad=512,Cd=513,Rd=514,qu=515,Pd=516,Ld=517,Zu=518,Id=519,o0=35044,vh=35048,_h="300 es",Ps=2e3,ua=2001;function Dd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function bl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nd(){const i=bl("canvas");return i.style.display="block",i}const xh={};function wl(...i){const e="THREE."+i.shift();console.log(e,...i)}function a0(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function rn(...i){i=a0(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Rn(...i){i=a0(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function yo(...i){const e=i.join(" ");e in xh||(xh[e]=!0,rn(...i))}function Ud(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Fd={[Uc]:Fc,[Oc]:kc,[zc]:Gc,[aa]:Bc,[Fc]:Uc,[kc]:Oc,[Gc]:zc,[Bc]:aa};class kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mh=1234567;const na=Math.PI/180,Ro=180/Math.PI;function Ns(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ti[i&255]+Ti[i>>8&255]+Ti[i>>16&255]+Ti[i>>24&255]+"-"+Ti[e&255]+Ti[e>>8&255]+"-"+Ti[e>>16&15|64]+Ti[e>>24&255]+"-"+Ti[t&63|128]+Ti[t>>8&255]+"-"+Ti[t>>16&255]+Ti[t>>24&255]+Ti[n&255]+Ti[n>>8&255]+Ti[n>>16&255]+Ti[n>>24&255]).toLowerCase()}function yn(i,e,t){return Math.max(e,Math.min(t,i))}function $u(i,e){return(i%e+e)%e}function Od(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function zd(i,e,t){return i!==e?(t-i)/(e-i):0}function ia(i,e,t){return(1-t)*i+t*e}function Bd(i,e,t,n){return ia(i,e,1-Math.exp(-t*n))}function kd(i,e=1){return e-Math.abs($u(i,e*2)-e)}function Gd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Hd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Vd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Wd(i,e){return i+Math.random()*(e-i)}function Xd(i){return i*(.5-Math.random())}function Yd(i){i!==void 0&&(Mh=i);let e=Mh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qd(i){return i*na}function Zd(i){return i*Ro}function $d(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Kd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Jd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qd(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),h=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*d,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*d,a*l);break;case"ZXZ":i.set(c*d,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*h,a*l);break;case"YXY":i.set(c*h,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*h,a*u,a*l);break;default:rn("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const jd={DEG2RAD:na,RAD2DEG:Ro,generateUUID:Ns,clamp:yn,euclideanModulo:$u,mapLinear:Od,inverseLerp:zd,lerp:ia,damp:Bd,pingpong:kd,smoothstep:Gd,smootherstep:Hd,randInt:Vd,randFloat:Wd,randFloatSpread:Xd,seededRandom:Yd,degToRad:qd,radToDeg:Zd,isPowerOfTwo:$d,ceilPowerOfTwo:Kd,floorPowerOfTwo:Jd,setQuaternionFromProperEuler:Qd,normalize:zn,denormalize:vs};class je{static{je.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yn(this.x,e.x,t.x),this.y=yn(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yn(this.x,e,t),this.y=yn(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(yn(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ys{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3],f=r[o+0],h=r[o+1],g=r[o+2],v=r[o+3];if(d!==v||c!==f||l!==h||u!==g){let m=c*f+l*h+u*g+d*v;m<0&&(f=-f,h=-h,g=-g,v=-v,m=-m);let p=1-a;if(m<.9995){const b=Math.acos(m),P=Math.sin(b);p=Math.sin(p*b)/P,a=Math.sin(a*b)/P,c=c*p+f*a,l=l*p+h*a,u=u*p+g*a,d=d*p+v*a}else{c=c*p+f*a,l=l*p+h*a,u=u*p+g*a,d=d*p+v*a;const b=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=b,l*=b,u*=b,d*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[o],f=r[o+1],h=r[o+2],g=r[o+3];return e[t]=a*g+u*d+c*h-l*f,e[t+1]=c*g+u*f+l*d-a*h,e[t+2]=l*g+u*h+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),d=a(r/2),f=c(n/2),h=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:rn("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(r-l)*h,this._z=(o-s)*h}else if(n>a&&n>d){const h=2*Math.sqrt(1+n-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+l)/h}else if(a>d){const h=2*Math.sqrt(1+a-n-d);this._w=(r-l)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+d-n-a);this._w=(o-s)/h,this._x=(r+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{static{A.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yn(this.x,e.x,t.x),this.y=yn(this.y,e.y,t.y),this.z=yn(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yn(this.x,e,t),this.y=yn(this.y,e,t),this.z=yn(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(yn(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $l.copy(this).projectOnVector(e),this.sub($l)}reflect(e){return this.sub($l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $l=new A,yh=new ys;class pn{static{pn.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],h=n[5],g=n[8],v=s[0],m=s[3],p=s[6],b=s[1],P=s[4],S=s[7],T=s[2],E=s[5],U=s[8];return r[0]=o*v+a*b+c*T,r[3]=o*m+a*P+c*E,r[6]=o*p+a*S+c*U,r[1]=l*v+u*b+d*T,r[4]=l*m+u*P+d*E,r[7]=l*p+u*S+d*U,r[2]=f*v+h*b+g*T,r[5]=f*m+h*P+g*E,r[8]=f*p+h*S+g*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*r,h=l*r-o*c,g=t*d+n*f+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(s*l-u*n)*v,e[2]=(a*n-s*o)*v,e[3]=f*v,e[4]=(u*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=h*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return yo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kl.makeScale(e,t)),this}rotate(e){return yo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kl.makeRotation(-e)),this}translate(e,t){return yo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kl=new pn,Sh=new pn().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bh=new pn().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ep(){const i={enabled:!0,workingColorSpace:yl,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Fn&&(s.r=$s(s.r),s.g=$s(s.g),s.b=$s(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Fn&&(s.r=So(s.r),s.g=So(s.g),s.b=So(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zs?Sl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return yo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return yo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[yl]:{primaries:e,whitePoint:n,transfer:Sl,toXYZ:Sh,fromXYZ:bh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yi},outputColorSpaceConfig:{drawingBufferColorSpace:Yi}},[Yi]:{primaries:e,whitePoint:n,transfer:Fn,toXYZ:Sh,fromXYZ:bh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yi}}}),i}const En=ep();function $s(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function So(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Wr;class tp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wr===void 0&&(Wr=bl("canvas")),Wr.width=e.width,Wr.height=e.height;const s=Wr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Wr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$s(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($s(t[n]/255)*255):t[n]=$s(t[n]);return{data:t,width:e.width,height:e.height}}else return rn("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let np=0;class Ku{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Ns(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Jl(s[o].image)):r.push(Jl(s[o]))}else r=Jl(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Jl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?tp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(rn("Texture: Unable to serialize Texture."),{})}let ip=0;const Ql=new A;class Ii extends kr{constructor(e=Ii.DEFAULT_IMAGE,t=Ii.DEFAULT_MAPPING,n=on,s=on,r=Li,o=Cr,a=xs,c=ts,l=Ii.DEFAULT_ANISOTROPY,u=Zs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=Ns(),this.name="",this.source=new Ku(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ql).x}get height(){return this.source.getSize(Ql).y}get depth(){return this.source.getSize(Ql).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){rn(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){rn(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Co:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case Hc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Co:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case Hc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ii.DEFAULT_IMAGE=null;Ii.DEFAULT_MAPPING=jf;Ii.DEFAULT_ANISOTROPY=1;class ti{static{ti.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(l+1)/2,S=(h+1)/2,T=(p+1)/2,E=(u+f)/4,U=(d+v)/4,M=(g+m)/4;return P>S&&P>T?P<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(P),s=E/n,r=U/n):S>T?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=E/s,r=M/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=U/r,s=M/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-v)/b,this.z=(f-u)/b,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yn(this.x,e.x,t.x),this.y=yn(this.y,e.y,t.y),this.z=yn(this.z,e.z,t.z),this.w=yn(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yn(this.x,e,t),this.y=yn(this.y,e,t),this.z=yn(this.z,e,t),this.w=yn(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(yn(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sp extends kr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ti(0,0,e,t),this.scissorTest=!1,this.viewport=new ti(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Ii(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Li,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ku(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends sp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class l0 extends Ii{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=_i,this.minFilter=_i,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rp extends Ii{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=_i,this.minFilter=_i,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Mn{static{Mn.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,c,l,u,d,f,h,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,d,f,h,g,v,m)}set(e,t,n,s,r,o,a,c,l,u,d,f,h,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mn().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Xr.setFromMatrixColumn(e,0).length(),r=1/Xr.setFromMatrixColumn(e,1).length(),o=1/Xr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,h=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+g*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=g+h*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,h=c*d,g=l*u,v=l*d;t[0]=f+v*a,t[4]=g*a-h,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,h=c*d,g=l*u,v=l*d;t[0]=f-v*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,h=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=g*l-h,t[8]=f*l+v,t[1]=c*d,t[5]=v*l+f,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,h=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-f*d,t[8]=g*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*d+g,t[10]=f-v*d}else if(e.order==="XZY"){const f=o*c,h=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+v,t[5]=o*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(op,e,ap)}lookAt(e,t,n){const s=this.elements;return Qi.subVectors(e,t),Qi.lengthSq()===0&&(Qi.z=1),Qi.normalize(),sr.crossVectors(n,Qi),sr.lengthSq()===0&&(Math.abs(n.z)===1?Qi.x+=1e-4:Qi.z+=1e-4,Qi.normalize(),sr.crossVectors(n,Qi)),sr.normalize(),ba.crossVectors(Qi,sr),s[0]=sr.x,s[4]=ba.x,s[8]=Qi.x,s[1]=sr.y,s[5]=ba.y,s[9]=Qi.y,s[2]=sr.z,s[6]=ba.z,s[10]=Qi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],h=n[13],g=n[2],v=n[6],m=n[10],p=n[14],b=n[3],P=n[7],S=n[11],T=n[15],E=s[0],U=s[4],M=s[8],C=s[12],F=s[1],k=s[5],V=s[9],ie=s[13],G=s[2],Q=s[6],we=s[10],re=s[14],Pe=s[3],ye=s[7],Te=s[11],Ie=s[15];return r[0]=o*E+a*F+c*G+l*Pe,r[4]=o*U+a*k+c*Q+l*ye,r[8]=o*M+a*V+c*we+l*Te,r[12]=o*C+a*ie+c*re+l*Ie,r[1]=u*E+d*F+f*G+h*Pe,r[5]=u*U+d*k+f*Q+h*ye,r[9]=u*M+d*V+f*we+h*Te,r[13]=u*C+d*ie+f*re+h*Ie,r[2]=g*E+v*F+m*G+p*Pe,r[6]=g*U+v*k+m*Q+p*ye,r[10]=g*M+v*V+m*we+p*Te,r[14]=g*C+v*ie+m*re+p*Ie,r[3]=b*E+P*F+S*G+T*Pe,r[7]=b*U+P*k+S*Q+T*ye,r[11]=b*M+P*V+S*we+T*Te,r[15]=b*C+P*ie+S*re+T*Ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],v=e[7],m=e[11],p=e[15],b=c*h-l*f,P=a*h-l*d,S=a*f-c*d,T=o*h-l*u,E=o*f-c*u,U=o*d-a*u;return t*(v*b-m*P+p*S)-n*(g*b-m*T+p*E)+s*(g*P-v*T+p*U)-r*(g*S-v*E+m*U)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-n*(r*u-a*c)+s*(r*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],v=e[13],m=e[14],p=e[15],b=t*a-n*o,P=t*c-s*o,S=t*l-r*o,T=n*c-s*a,E=n*l-r*a,U=s*l-r*c,M=u*v-d*g,C=u*m-f*g,F=u*p-h*g,k=d*m-f*v,V=d*p-h*v,ie=f*p-h*m,G=b*ie-P*V+S*k+T*F-E*C+U*M;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/G;return e[0]=(a*ie-c*V+l*k)*Q,e[1]=(s*V-n*ie-r*k)*Q,e[2]=(v*U-m*E+p*T)*Q,e[3]=(f*E-d*U-h*T)*Q,e[4]=(c*F-o*ie-l*C)*Q,e[5]=(t*ie-s*F+r*C)*Q,e[6]=(m*S-g*U-p*P)*Q,e[7]=(u*U-f*S+h*P)*Q,e[8]=(o*V-a*F+l*M)*Q,e[9]=(n*F-t*V-r*M)*Q,e[10]=(g*E-v*S+p*b)*Q,e[11]=(d*S-u*E-h*b)*Q,e[12]=(a*C-o*k-c*M)*Q,e[13]=(t*k-n*C+s*M)*Q,e[14]=(v*P-g*T-m*b)*Q,e[15]=(u*T-d*P+f*b)*Q,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,d=a+a,f=r*l,h=r*u,g=r*d,v=o*u,m=o*d,p=a*d,b=c*l,P=c*u,S=c*d,T=n.x,E=n.y,U=n.z;return s[0]=(1-(v+p))*T,s[1]=(h+S)*T,s[2]=(g-P)*T,s[3]=0,s[4]=(h-S)*E,s[5]=(1-(f+p))*E,s[6]=(m+b)*E,s[7]=0,s[8]=(g+P)*U,s[9]=(m-b)*U,s[10]=(1-(f+v))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Xr.set(s[0],s[1],s[2]).length();const a=Xr.set(s[4],s[5],s[6]).length(),c=Xr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ds.copy(this);const l=1/o,u=1/a,d=1/c;return ds.elements[0]*=l,ds.elements[1]*=l,ds.elements[2]*=l,ds.elements[4]*=u,ds.elements[5]*=u,ds.elements[6]*=u,ds.elements[8]*=d,ds.elements[9]*=d,ds.elements[10]*=d,t.setFromRotationMatrix(ds),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=Ps,c=!1){const l=this.elements,u=2*r/(t-e),d=2*r/(n-s),f=(t+e)/(t-e),h=(n+s)/(n-s);let g,v;if(c)g=r/(o-r),v=o*r/(o-r);else if(a===Ps)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===ua)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ps,c=!1){const l=this.elements,u=2/(t-e),d=2/(n-s),f=-(t+e)/(t-e),h=-(n+s)/(n-s);let g,v;if(c)g=1/(o-r),v=o/(o-r);else if(a===Ps)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===ua)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Xr=new A,ds=new Mn,op=new A(0,0,0),ap=new A(1,1,1),sr=new A,ba=new A,Qi=new A,wh=new Mn,Th=new ys;class Ss{constructor(e=0,t=0,n=0,s=Ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(yn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-yn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(yn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-yn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(yn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-yn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:rn("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Th.setFromEuler(this),this.setFromQuaternion(Th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ss.DEFAULT_ORDER="XYZ";class Ju{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lp=0;const Eh=new A,Yr=new ys,Bs=new Mn,wa=new A,zo=new A,cp=new A,up=new ys,Ah=new A(1,0,0),Ch=new A(0,1,0),Rh=new A(0,0,1),Ph={type:"added"},hp={type:"removed"},qr={type:"childadded",child:null},jl={type:"childremoved",child:null};class $n extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const e=new A,t=new Ss,n=new ys,s=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mn},normalMatrix:{value:new pn}}),this.matrix=new Mn,this.matrixWorld=new Mn,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ju,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yr.setFromAxisAngle(e,t),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(e,t){return Yr.setFromAxisAngle(e,t),this.quaternion.premultiply(Yr),this}rotateX(e){return this.rotateOnAxis(Ah,e)}rotateY(e){return this.rotateOnAxis(Ch,e)}rotateZ(e){return this.rotateOnAxis(Rh,e)}translateOnAxis(e,t){return Eh.copy(e).applyQuaternion(this.quaternion),this.position.add(Eh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ah,e)}translateY(e){return this.translateOnAxis(Ch,e)}translateZ(e){return this.translateOnAxis(Rh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wa.copy(e):wa.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bs.lookAt(zo,wa,this.up):Bs.lookAt(wa,zo,this.up),this.quaternion.setFromRotationMatrix(Bs),s&&(Bs.extractRotation(s.matrixWorld),Yr.setFromRotationMatrix(Bs),this.quaternion.premultiply(Yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Rn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ph),qr.child=e,this.dispatchEvent(qr),qr.child=null):Rn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hp),jl.child=e,this.dispatchEvent(jl),jl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bs.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ph),qr.child=e,this.dispatchEvent(qr),qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,cp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,up,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}$n.DEFAULT_UP=new A(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Jt extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fp={type:"move"};class ec{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const c0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function tc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,En.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=En.workingColorSpace){return this.r=e,this.g=t,this.b=n,En.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=En.workingColorSpace){if(e=$u(e,1),t=yn(t,0,1),n=yn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=tc(o,r,e+1/3),this.g=tc(o,r,e),this.b=tc(o,r,e-1/3)}return En.colorSpaceToWorking(this,s),this}setStyle(e,t=Yi){function n(r){r!==void 0&&parseFloat(r)<1&&rn("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:rn("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);rn("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yi){const n=c0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):rn("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}copyLinearToSRGB(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yi){return En.workingToColorSpace(Ei.copy(this),e),Math.round(yn(Ei.r*255,0,255))*65536+Math.round(yn(Ei.g*255,0,255))*256+Math.round(yn(Ei.b*255,0,255))}getHexString(e=Yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=En.workingColorSpace){En.workingToColorSpace(Ei.copy(this),t);const n=Ei.r,s=Ei.g,r=Ei.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=En.workingColorSpace){return En.workingToColorSpace(Ei.copy(this),t),e.r=Ei.r,e.g=Ei.g,e.b=Ei.b,e}getStyle(e=Yi){En.workingToColorSpace(Ei.copy(this),e);const t=Ei.r,n=Ei.g,s=Ei.b;return e!==Yi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+t,rr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rr),e.getHSL(Ta);const n=ia(rr.h,Ta.h,t),s=ia(rr.s,Ta.s,t),r=ia(rr.l,Ta.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ei=new ke;ke.NAMES=c0;class Qu{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ke(e),this.density=t}clone(){return new Qu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class dp extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ss,this.environmentIntensity=1,this.environmentRotation=new Ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ps=new A,ks=new A,nc=new A,Gs=new A,Zr=new A,$r=new A,Lh=new A,ic=new A,sc=new A,rc=new A,oc=new ti,ac=new ti,lc=new ti;class ls{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ps.subVectors(e,t),s.cross(ps);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ps.subVectors(s,t),ks.subVectors(n,t),nc.subVectors(e,t);const o=ps.dot(ps),a=ps.dot(ks),c=ps.dot(nc),l=ks.dot(ks),u=ks.dot(nc),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-h-g,g,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Gs)===null?!1:Gs.x>=0&&Gs.y>=0&&Gs.x+Gs.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Gs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Gs.x),c.addScaledVector(o,Gs.y),c.addScaledVector(a,Gs.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return oc.setScalar(0),ac.setScalar(0),lc.setScalar(0),oc.fromBufferAttribute(e,t),ac.fromBufferAttribute(e,n),lc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(oc,r.x),o.addScaledVector(ac,r.y),o.addScaledVector(lc,r.z),o}static isFrontFacing(e,t,n,s){return ps.subVectors(n,t),ks.subVectors(e,t),ps.cross(ks).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ps.subVectors(this.c,this.b),ks.subVectors(this.a,this.b),ps.cross(ks).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ls.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ls.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return ls.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return ls.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ls.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Zr.subVectors(s,n),$r.subVectors(r,n),ic.subVectors(e,n);const c=Zr.dot(ic),l=$r.dot(ic);if(c<=0&&l<=0)return t.copy(n);sc.subVectors(e,s);const u=Zr.dot(sc),d=$r.dot(sc);if(u>=0&&d<=u)return t.copy(s);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Zr,o);rc.subVectors(e,r);const h=Zr.dot(rc),g=$r.dot(rc);if(g>=0&&h<=g)return t.copy(r);const v=h*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector($r,a);const m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return Lh.subVectors(r,s),a=(d-u)/(d-u+(h-g)),t.copy(s).addScaledVector(Lh,a);const p=1/(m+v+f);return o=v*p,a=f*p,t.copy(n).addScaledVector(Zr,o).addScaledVector($r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Gr{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ms.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ms.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ms.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ms):ms.fromBufferAttribute(r,o),ms.applyMatrix4(e.matrixWorld),this.expandByPoint(ms);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ea.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ea.copy(n.boundingBox)),Ea.applyMatrix4(e.matrixWorld),this.union(Ea)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ms),ms.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),Aa.subVectors(this.max,Bo),Kr.subVectors(e.a,Bo),Jr.subVectors(e.b,Bo),Qr.subVectors(e.c,Bo),or.subVectors(Jr,Kr),ar.subVectors(Qr,Jr),_r.subVectors(Kr,Qr);let t=[0,-or.z,or.y,0,-ar.z,ar.y,0,-_r.z,_r.y,or.z,0,-or.x,ar.z,0,-ar.x,_r.z,0,-_r.x,-or.y,or.x,0,-ar.y,ar.x,0,-_r.y,_r.x,0];return!cc(t,Kr,Jr,Qr,Aa)||(t=[1,0,0,0,1,0,0,0,1],!cc(t,Kr,Jr,Qr,Aa))?!1:(Ca.crossVectors(or,ar),t=[Ca.x,Ca.y,Ca.z],cc(t,Kr,Jr,Qr,Aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ms).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ms).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Hs=[new A,new A,new A,new A,new A,new A,new A,new A],ms=new A,Ea=new Gr,Kr=new A,Jr=new A,Qr=new A,or=new A,ar=new A,_r=new A,Bo=new A,Aa=new A,Ca=new A,xr=new A;function cc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){xr.fromArray(i,r);const a=s.x*Math.abs(xr.x)+s.y*Math.abs(xr.y)+s.z*Math.abs(xr.z),c=e.dot(xr),l=t.dot(xr),u=n.dot(xr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const oi=new A,Ra=new je;let pp=0;class Wn extends kr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=o0,this.updateRanges=[],this.gpuType=_s,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ra.fromBufferAttribute(this,t),Ra.applyMatrix3(e),this.setXY(t,Ra.x,Ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)oi.fromBufferAttribute(this,t),oi.applyMatrix3(e),this.setXYZ(t,oi.x,oi.y,oi.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)oi.fromBufferAttribute(this,t),oi.applyMatrix4(e),this.setXYZ(t,oi.x,oi.y,oi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)oi.fromBufferAttribute(this,t),oi.applyNormalMatrix(e),this.setXYZ(t,oi.x,oi.y,oi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)oi.fromBufferAttribute(this,t),oi.transformDirection(e),this.setXYZ(t,oi.x,oi.y,oi.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vs(t,this.array)),t}setX(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vs(t,this.array)),t}setY(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vs(t,this.array)),t}setW(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),n=zn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),n=zn(n,this.array),s=zn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),n=zn(n,this.array),s=zn(s,this.array),r=zn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class u0 extends Wn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class h0 extends Wn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class an extends Wn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const mp=new Gr,ko=new A,uc=new A;class Hr{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);const t=ko.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ko,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(uc)),this.expandByPoint(ko.copy(e.center).sub(uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let gp=0;const ss=new Mn,hc=new $n,jr=new A,ji=new Gr,Go=new Gr,di=new A;class Pn extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dd(e)?h0:u0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new pn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ss.makeRotationFromQuaternion(e),this.applyMatrix4(ss),this}rotateX(e){return ss.makeRotationX(e),this.applyMatrix4(ss),this}rotateY(e){return ss.makeRotationY(e),this.applyMatrix4(ss),this}rotateZ(e){return ss.makeRotationZ(e),this.applyMatrix4(ss),this}translate(e,t,n){return ss.makeTranslation(e,t,n),this.applyMatrix4(ss),this}scale(e,t,n){return ss.makeScale(e,t,n),this.applyMatrix4(ss),this}lookAt(e){return hc.lookAt(e),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new an(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&rn("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];ji.setFromBufferAttribute(r),this.morphTargetsRelative?(di.addVectors(this.boundingBox.min,ji.min),this.boundingBox.expandByPoint(di),di.addVectors(this.boundingBox.max,ji.max),this.boundingBox.expandByPoint(di)):(this.boundingBox.expandByPoint(ji.min),this.boundingBox.expandByPoint(ji.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(ji.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Go.setFromBufferAttribute(a),this.morphTargetsRelative?(di.addVectors(ji.min,Go.min),ji.expandByPoint(di),di.addVectors(ji.max,Go.max),ji.expandByPoint(di)):(ji.expandByPoint(Go.min),ji.expandByPoint(Go.max))}ji.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)di.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(di));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)di.fromBufferAttribute(a,l),c&&(jr.fromBufferAttribute(e,l),di.add(jr)),s=Math.max(s,n.distanceToSquared(di))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Rn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Rn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Wn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let M=0;M<n.count;M++)a[M]=new A,c[M]=new A;const l=new A,u=new A,d=new A,f=new je,h=new je,g=new je,v=new A,m=new A;function p(M,C,F){l.fromBufferAttribute(n,M),u.fromBufferAttribute(n,C),d.fromBufferAttribute(n,F),f.fromBufferAttribute(r,M),h.fromBufferAttribute(r,C),g.fromBufferAttribute(r,F),u.sub(l),d.sub(l),h.sub(f),g.sub(f);const k=1/(h.x*g.y-g.x*h.y);isFinite(k)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(k),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(k),a[M].add(v),a[C].add(v),a[F].add(v),c[M].add(m),c[C].add(m),c[F].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let M=0,C=b.length;M<C;++M){const F=b[M],k=F.start,V=F.count;for(let ie=k,G=k+V;ie<G;ie+=3)p(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const P=new A,S=new A,T=new A,E=new A;function U(M){T.fromBufferAttribute(s,M),E.copy(T);const C=a[M];P.copy(C),P.sub(T.multiplyScalar(T.dot(C))).normalize(),S.crossVectors(E,C);const k=S.dot(c[M])<0?-1:1;o.setXYZW(M,P.x,P.y,P.z,k)}for(let M=0,C=b.length;M<C;++M){const F=b[M],k=F.start,V=F.count;for(let ie=k,G=k+V;ie<G;ie+=3)U(e.getX(ie+0)),U(e.getX(ie+1)),U(e.getX(ie+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Wn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const s=new A,r=new A,o=new A,a=new A,c=new A,l=new A,u=new A,d=new A;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)di.fromBufferAttribute(e,t),di.normalize(),e.setXYZ(t,di.x,di.y,di.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let h=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?h=c[v]*a.data.stride+a.offset:h=c[v]*u;for(let p=0;p<u;p++)f[g++]=l[h++]}return new Wn(f,u,d)}if(this.index===null)return rn("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pn,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],h=e(f,n);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=o0,this.updateRanges=[],this.version=0,this.uuid=Ns()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ns()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ns()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Ui=new A;class Tl{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ui.fromBufferAttribute(this,t),Ui.applyMatrix4(e),this.setXYZ(t,Ui.x,Ui.y,Ui.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ui.fromBufferAttribute(this,t),Ui.applyNormalMatrix(e),this.setXYZ(t,Ui.x,Ui.y,Ui.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ui.fromBufferAttribute(this,t),Ui.transformDirection(e),this.setXYZ(t,Ui.x,Ui.y,Ui.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=vs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zn(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=zn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=zn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=zn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=zn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vs(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vs(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vs(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vs(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=zn(t,this.array),n=zn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=zn(t,this.array),n=zn(n,this.array),s=zn(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=zn(t,this.array),n=zn(n,this.array),s=zn(s,this.array),r=zn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){wl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Wn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Tl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){wl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const fc=new A,_p=new A,xp=new pn;class pr{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=fc.subVectors(n,t).cross(_p.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(fc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||xp.getNormalMatrix(e),s=this.coplanarPoint(fc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Mp=0;class gr extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=Mo,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kf,this.blendDst=Jf,this.blendEquation=ho,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ed,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zl,this.stencilZFail=Zl,this.stencilZPass=Zl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){rn(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){rn(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new pr().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new je().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Or extends gr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let eo;const Ho=new A,to=new A,no=new A,io=new je,Vo=new je,f0=new Mn,Pa=new A,Wo=new A,La=new A,Ih=new je,dc=new je,Dh=new je;class bo extends $n{constructor(e=new Or){if(super(),this.isSprite=!0,this.type="Sprite",eo===void 0){eo=new Pn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vp(t,5);eo.setIndex([0,1,2,0,2,3]),eo.setAttribute("position",new Tl(n,3,0,!1)),eo.setAttribute("uv",new Tl(n,2,3,!1))}this.geometry=eo,this.material=e,this.center=new je(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Rn('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),to.setFromMatrixScale(this.matrixWorld),f0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),no.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&to.multiplyScalar(-no.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Ia(Pa.set(-.5,-.5,0),no,o,to,s,r),Ia(Wo.set(.5,-.5,0),no,o,to,s,r),Ia(La.set(.5,.5,0),no,o,to,s,r),Ih.set(0,0),dc.set(1,0),Dh.set(1,1);let a=e.ray.intersectTriangle(Pa,Wo,La,!1,Ho);if(a===null&&(Ia(Wo.set(-.5,.5,0),no,o,to,s,r),dc.set(0,1),a=e.ray.intersectTriangle(Pa,La,Wo,!1,Ho),a===null))return;const c=e.ray.origin.distanceTo(Ho);c<e.near||c>e.far||t.push({distance:c,point:Ho.clone(),uv:ls.getInterpolation(Ho,Pa,Wo,La,Ih,dc,Dh,new je),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ia(i,e,t,n,s,r){io.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Vo.x=r*io.x-s*io.y,Vo.y=s*io.x+r*io.y):Vo.copy(io),i.copy(e),i.x+=Vo.x,i.y+=Vo.y,i.applyMatrix4(f0)}const Vs=new A,pc=new A,Da=new A,Na=new A;class zl{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vs.copy(this.origin).addScaledVector(this.direction,t),Vs.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){pc.copy(e).add(t).multiplyScalar(.5),Da.copy(t).sub(e).normalize(),Na.copy(this.origin).sub(pc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Da),a=Na.dot(this.direction),c=-Na.dot(Da),l=Na.lengthSq(),u=Math.abs(1-o*o);let d,f,h,g;if(u>0)if(d=o*c-a,f=o*a-c,g=r*u,d>=0)if(f>=-g)if(f<=g){const v=1/u;d*=v,f*=v,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),h=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(pc).addScaledVector(Da,f),h}intersectSphere(e,t){if(e.radius<0)return null;Vs.subVectors(e.center,this.origin);const n=Vs.dot(this.direction),s=Vs.dot(Vs)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Vs)!==null}intersectTriangle(e,t,n,s,r){const o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,d=e.x-o.x,f=e.y-o.y,h=e.z-o.z,g=t.x-o.x,v=t.y-o.y,m=t.z-o.z,p=n.x-o.x,b=n.y-o.y,P=n.z-o.z,S=Math.abs(c),T=Math.abs(l),E=Math.abs(u);let U,M,C,F,k,V,ie,G,Q,we,re,Pe;if(S>=T&&S>=E?(C=c,V=d,Q=g,Pe=p,c>=0?(U=l,M=u,F=f,k=h,ie=v,G=m,we=b,re=P):(U=u,M=l,F=h,k=f,ie=m,G=v,we=P,re=b)):T>=E?(C=l,V=f,Q=v,Pe=b,l>=0?(U=u,M=c,F=h,k=d,ie=m,G=g,we=P,re=p):(U=c,M=u,F=d,k=h,ie=g,G=m,we=p,re=P)):(C=u,V=h,Q=m,Pe=P,u>=0?(U=c,M=l,F=d,k=f,ie=g,G=v,we=p,re=b):(U=l,M=c,F=f,k=d,ie=v,G=g,we=b,re=p)),C===0)return null;const ye=U/C,Te=M/C,Ie=1/C,yt=F-ye*V,Et=k-Te*V,jt=ie-ye*Q,W=G-Te*Q,lt=we-ye*Pe,Se=re-Te*Pe,$=lt*W-Se*jt,Ee=yt*Se-Et*lt,Ae=jt*Et-W*yt;if(s){if($<0||Ee<0||Ae<0)return null}else if(($<0||Ee<0||Ae<0)&&($>0||Ee>0||Ae>0))return null;const Je=$+Ee+Ae;if(Je===0)return null;const Ye=Ie*($*V+Ee*Q+Ae*Pe);return(Je>0?Ye<0:Ye>0)?null:this.at(Ye/Je,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ns extends gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.combine=Qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nh=new Mn,Mr=new zl,Ua=new Hr,Uh=new A,Fa=new A,Oa=new A,za=new A,mc=new A,Ba=new A,Fh=new A,ka=new A;class Ut extends $n{constructor(e=new Pn,t=new ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ba.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(mc.fromBufferAttribute(d,e),o?Ba.addScaledVector(mc,u):Ba.addScaledVector(mc.sub(t),u))}t.add(Ba)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(r),Mr.copy(e.ray).recast(e.near),!(Ua.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Ua,Uh)===null||Mr.origin.distanceToSquared(Uh)>(e.far-e.near)**2))&&(Nh.copy(r).invert(),Mr.copy(e.ray).applyMatrix4(Nh),!(n.boundingBox!==null&&Mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mr)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],b=Math.max(m.start,h.start),P=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let S=b,T=P;S<T;S+=3){const E=a.getX(S),U=a.getX(S+1),M=a.getX(S+2);s=Ga(this,p,e,n,l,u,d,E,U,M),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const b=a.getX(m),P=a.getX(m+1),S=a.getX(m+2);s=Ga(this,o,e,n,l,u,d,b,P,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],b=Math.max(m.start,h.start),P=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let S=b,T=P;S<T;S+=3){const E=S,U=S+1,M=S+2;s=Ga(this,p,e,n,l,u,d,E,U,M),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,h.start),v=Math.min(c.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const b=m,P=m+1,S=m+2;s=Ga(this,o,e,n,l,u,d,b,P,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function yp(i,e,t,n,s,r,o,a){let c;if(e.side===zi?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Nr,a),c===null)return null;ka.copy(a),ka.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ka);return l<t.near||l>t.far?null:{distance:l,point:ka.clone(),object:i}}function Ga(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Fa),i.getVertexPosition(c,Oa),i.getVertexPosition(l,za);const u=yp(i,e,t,n,Fa,Oa,za,Fh);if(u){const d=new A;ls.getBarycoord(Fh,Fa,Oa,za,d),s&&(u.uv=ls.getInterpolatedAttribute(s,a,c,l,d,new je)),r&&(u.uv1=ls.getInterpolatedAttribute(r,a,c,l,d,new je)),o&&(u.normal=ls.getInterpolatedAttribute(o,a,c,l,d,new A),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new A,materialIndex:0};ls.getNormal(Fa,Oa,za,f.normal),u.face=f,u.barycoord=d}return u}class d0 extends Ii{constructor(e=null,t=1,n=1,s,r,o,a,c,l=_i,u=_i,d,f){super(null,o,a,c,l,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oh extends Wn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const so=new Mn,zh=new Mn,Ha=[],Bh=new Gr,Sp=new Mn,Xo=new Ut,Yo=new Hr;class fl extends Ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Oh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Sp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,so),Bh.copy(e.boundingBox).applyMatrix4(so),this.boundingBox.union(Bh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,so),Yo.copy(e.boundingSphere).applyMatrix4(so),this.boundingSphere.union(Yo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Xo.geometry=this.geometry,Xo.material=this.material,Xo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yo.copy(this.boundingSphere),Yo.applyMatrix4(n),e.ray.intersectsSphere(Yo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,so),zh.multiplyMatrices(n,so),Xo.matrixWorld=zh,Xo.raycast(e,Ha);for(let o=0,a=Ha.length;o<a;o++){const c=Ha[o];c.instanceId=r,c.object=this,t.push(c)}Ha.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Oh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new d0(new Float32Array(s*this.count),s,this.count,Vu,_s));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const yr=new Hr,bp=new je(.5,.5),Va=new A;class ju{constructor(e=new pr,t=new pr,n=new pr,s=new pr,r=new pr,o=new pr){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ps,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],f=r[6],h=r[7],g=r[8],v=r[9],m=r[10],p=r[11],b=r[12],P=r[13],S=r[14],T=r[15];if(s[0].setComponents(l-o,h-u,p-g,T-b).normalize(),s[1].setComponents(l+o,h+u,p+g,T+b).normalize(),s[2].setComponents(l+a,h+d,p+v,T+P).normalize(),s[3].setComponents(l-a,h-d,p-v,T-P).normalize(),n)s[4].setComponents(c,f,m,S).normalize(),s[5].setComponents(l-c,h-f,p-m,T-S).normalize();else if(s[4].setComponents(l-c,h-f,p-m,T-S).normalize(),t===Ps)s[5].setComponents(l+c,h+f,p+m,T+S).normalize();else if(t===ua)s[5].setComponents(c,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){yr.center.set(0,0,0);const t=bp.distanceTo(e.center);return yr.radius=.7071067811865476+t,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Va.x=s.normal.x>0?e.max.x:e.min.x,Va.y=s.normal.y>0?e.max.y:e.min.y,Va.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Va)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class p0 extends gr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const El=new A,Al=new A,kh=new Mn,qo=new zl,Wa=new Hr,gc=new A,Gh=new A;class wp extends $n{constructor(e=new Pn,t=new p0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)El.fromBufferAttribute(t,s-1),Al.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=El.distanceTo(Al);e.setAttribute("lineDistance",new an(n,1))}else rn("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(s),Wa.radius+=r,e.ray.intersectsSphere(Wa)===!1)return;kh.copy(s).invert(),qo.copy(e.ray).applyMatrix4(kh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=h,m=g-1;v<m;v+=l){const p=u.getX(v),b=u.getX(v+1),P=Xa(this,e,qo,c,p,b,v);P&&t.push(P)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(h),p=Xa(this,e,qo,c,v,m,g-1);p&&t.push(p)}}else{const h=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=h,m=g-1;v<m;v+=l){const p=Xa(this,e,qo,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=Xa(this,e,qo,c,g-1,h,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Xa(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(El.fromBufferAttribute(a,s),Al.fromBufferAttribute(a,r),t.distanceSqToSegment(El,Al,gc,Gh)>n)return;gc.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(gc);if(!(l<e.near||l>e.far))return{distance:l,point:Gh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Hh=new A,Vh=new A;class Tp extends wp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Hh.fromBufferAttribute(t,s),Vh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Hh.distanceTo(Vh);e.setAttribute("lineDistance",new an(n,1))}else rn("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lr extends gr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wh=new Mn,Mu=new zl,Ya=new Hr,qa=new A;class wo extends $n{constructor(e=new Pn,t=new Lr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere),Ya.applyMatrix4(s),Ya.radius+=r,e.ray.intersectsSphere(Ya)===!1)return;Wh.copy(s).invert(),Mu.copy(e.ray).applyMatrix4(Wh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let g=f,v=h;g<v;g++){const m=l.getX(g);qa.fromBufferAttribute(d,m),Xh(qa,m,c,s,e,t,this)}}else{const f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let g=f,v=h;g<v;g++)qa.fromBufferAttribute(d,g),Xh(qa,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Xh(i,e,t,n,s,r,o){const a=Mu.distanceSqToPoint(i);if(a<t){const c=new A;Mu.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class m0 extends Ii{constructor(e=[],t=Ur,n,s,r,o,a,c,l,u){super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ep extends Ii{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ha extends Ii{constructor(e,t,n=Us,s,r,o,a=_i,c=_i,l,u=Qs,d=1){if(u!==Qs&&u!==Rr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ku(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ap extends ha{constructor(e,t=Us,n=Ur,s,r,o=_i,a=_i,c,l=Qs){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class g0 extends Ii{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Zn extends Pn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new an(l,3)),this.setAttribute("normal",new an(u,3)),this.setAttribute("uv",new an(d,2));function g(v,m,p,b,P,S,T,E,U,M,C){const F=S/U,k=T/M,V=S/2,ie=T/2,G=E/2,Q=U+1,we=M+1;let re=0,Pe=0;const ye=new A;for(let Te=0;Te<we;Te++){const Ie=Te*k-ie;for(let yt=0;yt<Q;yt++){const Et=yt*F-V;ye[v]=Et*b,ye[m]=Ie*P,ye[p]=G,l.push(ye.x,ye.y,ye.z),ye[v]=0,ye[m]=0,ye[p]=E>0?1:-1,u.push(ye.x,ye.y,ye.z),d.push(yt/U),d.push(1-Te/M),re+=1}}for(let Te=0;Te<M;Te++)for(let Ie=0;Ie<U;Ie++){const yt=f+Ie+Q*Te,Et=f+Ie+Q*(Te+1),jt=f+(Ie+1)+Q*(Te+1),W=f+(Ie+1)+Q*Te;c.push(yt,Et,W),c.push(Et,jt,W),Pe+=6}a.addGroup(h,Pe,C),h+=Pe,f+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class mo extends Pn{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],u=t/2,d=Math.PI/2*e,f=t,h=2*d+f,g=n*2+r,v=s+1,m=new A,p=new A;for(let b=0;b<=g;b++){let P=0,S=0,T=0,E=0;if(b<=n){const C=b/n,F=C*Math.PI/2;S=-u-e*Math.cos(F),T=e*Math.sin(F),E=-e*Math.cos(F),P=C*d}else if(b<=n+r){const C=(b-n)/r;S=-u+C*t,T=e,E=0,P=d+C*f}else{const C=(b-n-r)/n,F=C*Math.PI/2;S=u+e*Math.sin(F),T=e*Math.cos(F),E=e*Math.sin(F),P=d+f+C*d}const U=Math.max(0,Math.min(1,P/h));let M=0;b===0?M=.5/s:b===g&&(M=-.5/s);for(let C=0;C<=s;C++){const F=C/s,k=F*Math.PI*2,V=Math.sin(k),ie=Math.cos(k);p.x=-T*ie,p.y=S,p.z=T*V,a.push(p.x,p.y,p.z),m.set(-T*ie,E,T*V),m.normalize(),c.push(m.x,m.y,m.z),l.push(F+M,U)}if(b>0){const C=(b-1)*v;for(let F=0;F<s;F++){const k=C+F,V=C+F+1,ie=b*v+F,G=b*v+F+1;o.push(k,V,ie),o.push(V,G,ie)}}}this.setIndex(o),this.setAttribute("position",new an(a,3)),this.setAttribute("normal",new an(c,3)),this.setAttribute("uv",new an(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Ir extends Pn{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new A,u=new je;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const h=n+d/t*s;l.x=e*Math.cos(h),l.y=e*Math.sin(h),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new an(o,3)),this.setAttribute("normal",new an(a,3)),this.setAttribute("uv",new an(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ei extends Pn{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],h=[];let g=0;const v=[],m=n/2;let p=0;b(),o===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(u),this.setAttribute("position",new an(d,3)),this.setAttribute("normal",new an(f,3)),this.setAttribute("uv",new an(h,2));function b(){const S=new A,T=new A;let E=0;const U=(t-e)/n;for(let M=0;M<=r;M++){const C=[],F=M/r,k=F*(t-e)+e;for(let V=0;V<=s;V++){const ie=V/s,G=ie*c+a,Q=Math.sin(G),we=Math.cos(G);T.x=k*Q,T.y=-F*n+m,T.z=k*we,d.push(T.x,T.y,T.z),S.set(Q,U,we).normalize(),f.push(S.x,S.y,S.z),h.push(ie,1-F),C.push(g++)}v.push(C)}for(let M=0;M<s;M++)for(let C=0;C<r;C++){const F=v[C][M],k=v[C+1][M],V=v[C+1][M+1],ie=v[C][M+1];(e>0||C!==0)&&(u.push(F,k,ie),E+=3),(t>0||C!==r-1)&&(u.push(k,V,ie),E+=3)}l.addGroup(p,E,0),p+=E}function P(S){const T=g,E=new je,U=new A;let M=0;const C=S===!0?e:t,F=S===!0?1:-1;for(let V=1;V<=s;V++)d.push(0,m*F,0),f.push(0,F,0),h.push(.5,.5),g++;const k=g;for(let V=0;V<=s;V++){const G=V/s*c+a,Q=Math.cos(G),we=Math.sin(G);U.x=C*we,U.y=m*F,U.z=C*Q,d.push(U.x,U.y,U.z),f.push(0,F,0),E.x=Q*.5+.5,E.y=we*.5*F+.5,h.push(E.x,E.y),g++}for(let V=0;V<s;V++){const ie=T+V,G=k+V;S===!0?u.push(G,G+1,ie):u.push(G+1,G,ie),M+=3}l.addGroup(p,M,S===!0?1:2),p+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Po extends ei{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Po(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class eh extends Pn{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new an(r,3)),this.setAttribute("normal",new an(r.slice(),3)),this.setAttribute("uv",new an(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const P=new A,S=new A,T=new A;for(let E=0;E<t.length;E+=3)h(t[E+0],P),h(t[E+1],S),h(t[E+2],T),c(P,S,T,b)}function c(b,P,S,T){const E=T+1,U=[];for(let M=0;M<=E;M++){U[M]=[];const C=b.clone().lerp(S,M/E),F=P.clone().lerp(S,M/E),k=E-M;for(let V=0;V<=k;V++)V===0&&M===E?U[M][V]=C:U[M][V]=C.clone().lerp(F,V/k)}for(let M=0;M<E;M++)for(let C=0;C<2*(E-M)-1;C++){const F=Math.floor(C/2);C%2===0?(f(U[M][F+1]),f(U[M+1][F]),f(U[M][F])):(f(U[M][F+1]),f(U[M+1][F+1]),f(U[M+1][F]))}}function l(b){const P=new A;for(let S=0;S<r.length;S+=3)P.x=r[S+0],P.y=r[S+1],P.z=r[S+2],P.normalize().multiplyScalar(b),r[S+0]=P.x,r[S+1]=P.y,r[S+2]=P.z}function u(){const b=new A;for(let P=0;P<r.length;P+=3){b.x=r[P+0],b.y=r[P+1],b.z=r[P+2];const S=m(b)/2/Math.PI+.5,T=p(b)/Math.PI+.5;o.push(S,1-T)}g(),d()}function d(){for(let b=0;b<o.length;b+=6){const P=o[b+0],S=o[b+2],T=o[b+4],E=Math.max(P,S,T),U=Math.min(P,S,T);E>.9&&U<.1&&(P<.2&&(o[b+0]+=1),S<.2&&(o[b+2]+=1),T<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function h(b,P){const S=b*3;P.x=e[S+0],P.y=e[S+1],P.z=e[S+2]}function g(){const b=new A,P=new A,S=new A,T=new A,E=new je,U=new je,M=new je;for(let C=0,F=0;C<r.length;C+=9,F+=6){b.set(r[C+0],r[C+1],r[C+2]),P.set(r[C+3],r[C+4],r[C+5]),S.set(r[C+6],r[C+7],r[C+8]),E.set(o[F+0],o[F+1]),U.set(o[F+2],o[F+3]),M.set(o[F+4],o[F+5]),T.copy(b).add(P).add(S).divideScalar(3);const k=m(T);v(E,F+0,b,k),v(U,F+2,P,k),v(M,F+4,S,k)}}function v(b,P,S,T){T<0&&b.x===1&&(o[P]=b.x-1),S.x===0&&S.z===0&&(o[P]=T/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eh(e.vertices,e.indices,e.radius,e.detail)}}class Os{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){rn("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],f=n[s+1]-u,h=(o-u)/f;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new je:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new A,s=[],r=[],o=[],a=new A,c=new Mn;for(let h=0;h<=e;h++){const g=h/e;s[h]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(yn(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(c.makeRotationAxis(a,g))}o[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(yn(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(h=-h);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],h*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class th extends Os{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new je){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,h=l-this.aY;c=f*u-h*d+this.aX,l=f*d+h*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Cp extends th{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function nh(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,h=(a-o)/u-(c-o)/(u+d)+(c-a)/d;f*=u,h*=u,s(o,a,f,h)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Yh=new A,qh=new A,vc=new nh,_c=new nh,xc=new nh;class Rp extends Os{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new A){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(qh.subVectors(s[0],s[1]).add(s[0]),l=qh);const d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Yh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Yh),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),h),v=Math.pow(d.distanceToSquared(f),h),m=Math.pow(f.distanceToSquared(u),h);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),vc.initNonuniformCatmullRom(l.x,d.x,f.x,u.x,g,v,m),_c.initNonuniformCatmullRom(l.y,d.y,f.y,u.y,g,v,m),xc.initNonuniformCatmullRom(l.z,d.z,f.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(vc.initCatmullRom(l.x,d.x,f.x,u.x,this.tension),_c.initCatmullRom(l.y,d.y,f.y,u.y,this.tension),xc.initCatmullRom(l.z,d.z,f.z,u.z,this.tension));return n.set(vc.calc(c),_c.calc(c),xc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new A().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Zh(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Pp(i,e){const t=1-i;return t*t*e}function Lp(i,e){return 2*(1-i)*i*e}function Ip(i,e){return i*i*e}function sa(i,e,t,n){return Pp(i,e)+Lp(i,t)+Ip(i,n)}function Dp(i,e){const t=1-i;return t*t*t*e}function Np(i,e){const t=1-i;return 3*t*t*i*e}function Up(i,e){return 3*(1-i)*i*i*e}function Fp(i,e){return i*i*i*e}function ra(i,e,t,n,s){return Dp(i,e)+Np(i,t)+Up(i,n)+Fp(i,s)}class v0 extends Os{constructor(e=new je,t=new je,n=new je,s=new je){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new je){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ra(e,s.x,r.x,o.x,a.x),ra(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Op extends Os{constructor(e=new A,t=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new A){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ra(e,s.x,r.x,o.x,a.x),ra(e,s.y,r.y,o.y,a.y),ra(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _0 extends Os{constructor(e=new je,t=new je){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new je){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new je){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zp extends Os{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class x0 extends Os{constructor(e=new je,t=new je,n=new je){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new je){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(sa(e,s.x,r.x,o.x),sa(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bp extends Os{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(sa(e,s.x,r.x,o.x),sa(e,s.y,r.y,o.y),sa(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class M0 extends Os{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new je){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Zh(a,c.x,l.x,u.x,d.x),Zh(a,c.y,l.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new je().fromArray(s))}return this}}var yu=Object.freeze({__proto__:null,ArcCurve:Cp,CatmullRomCurve3:Rp,CubicBezierCurve:v0,CubicBezierCurve3:Op,EllipseCurve:th,LineCurve:_0,LineCurve3:zp,QuadraticBezierCurve:x0,QuadraticBezierCurve3:Bp,SplineCurve:M0});class kp extends Os{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new yu[s.type]().fromJSON(s))}return this}}class $h extends kp{constructor(e){super(),this.type="Path",this.currentPoint=new je,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new _0(this.currentPoint.clone(),new je(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new x0(this.currentPoint.clone(),new je(e,t),new je(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new v0(this.currentPoint.clone(),new je(e,t),new je(n,s),new je(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new M0(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new th(e,t,n,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class dl extends $h{constructor(e){super(e),this.uuid=Ns(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new $h().fromJSON(s))}return this}}function Gp(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=y0(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Yp(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let u=a,d=c;for(let f=t;f<s;f+=t){const h=i[f],g=i[f+1];h<a&&(a=h),g<c&&(c=g),h>u&&(u=h),g>d&&(d=g)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return fa(r,o,t,a,c,l,0),o}function y0(i,e,t,n,s){let r;if(s===im(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Kh(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Kh(o/n|0,i[o],i[o+1],r);return r&&Lo(r,r.next)&&(pa(r),r=r.next),r}function zr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Lo(t,t.next)||ni(t.prev,t,t.next)===0)){if(pa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function fa(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Jp(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?Vp(i,n,s,r):Hp(i)){e.push(c.i,i.i,l.i),pa(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Wp(zr(i),e),fa(i,e,t,n,s,r,2)):o===2&&Xp(i,e,t,n,s,r):fa(zr(i),e,t,n,s,r,1);break}}}function Hp(i){const e=i.prev,t=i,n=i.next;if(ni(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=Math.min(s,r,o),d=Math.min(a,c,l),f=Math.max(s,r,o),h=Math.max(a,c,l);let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=d&&g.y<=h&&jo(s,a,r,c,o,l,g.x,g.y)&&ni(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Vp(i,e,t,n){const s=i.prev,r=i,o=i.next;if(ni(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,d=r.y,f=o.y,h=Math.min(a,c,l),g=Math.min(u,d,f),v=Math.max(a,c,l),m=Math.max(u,d,f),p=Su(h,g,e,t,n),b=Su(v,m,e,t,n);let P=i.prevZ,S=i.nextZ;for(;P&&P.z>=p&&S&&S.z<=b;){if(P.x>=h&&P.x<=v&&P.y>=g&&P.y<=m&&P!==s&&P!==o&&jo(a,u,c,d,l,f,P.x,P.y)&&ni(P.prev,P,P.next)>=0||(P=P.prevZ,S.x>=h&&S.x<=v&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&jo(a,u,c,d,l,f,S.x,S.y)&&ni(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;P&&P.z>=p;){if(P.x>=h&&P.x<=v&&P.y>=g&&P.y<=m&&P!==s&&P!==o&&jo(a,u,c,d,l,f,P.x,P.y)&&ni(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;S&&S.z<=b;){if(S.x>=h&&S.x<=v&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&jo(a,u,c,d,l,f,S.x,S.y)&&ni(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Wp(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Lo(n,s)&&b0(n,t,t.next,s)&&da(n,s)&&da(s,n)&&(e.push(n.i,t.i,s.i),pa(t),pa(t.next),t=i=s),t=t.next}while(t!==i);return zr(t)}function Xp(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&em(o,a)){let c=w0(o,a);o=zr(o,o.next),c=zr(c,c.next),fa(o,e,t,n,s,r,0),fa(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Yp(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=y0(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(jp(l))}s.sort(qp);for(let r=0;r<s.length;r++)t=Zp(s[r],t);return t}function qp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Zp(i,e){const t=$p(i,e);if(!t)return e;const n=w0(t,i);return zr(n,n.next),zr(t,t.next)}function $p(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(Lo(i,t))return t;do{if(Lo(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&S0(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){const d=Math.abs(s-t.y)/(n-t.x);da(t,i)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&Kp(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function Kp(i,e){return ni(i.prev,i,e.prev)<0&&ni(e.next,i,i.next)<0}function Jp(i,e,t,n){let s=i;do s.z===0&&(s.z=Su(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Qp(s)}function Qp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Su(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function jp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function S0(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function jo(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&S0(i,e,t,n,s,r,o,a)}function em(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!tm(i,e)&&(da(i,e)&&da(e,i)&&nm(i,e)&&(ni(i.prev,i,e.prev)||ni(i,e.prev,e))||Lo(i,e)&&ni(i.prev,i,i.next)>0&&ni(e.prev,e,e.next)>0)}function ni(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Lo(i,e){return i.x===e.x&&i.y===e.y}function b0(i,e,t,n){const s=$a(ni(i,e,t)),r=$a(ni(i,e,n)),o=$a(ni(t,n,i)),a=$a(ni(t,n,e));return!!(s!==r&&o!==a||s===0&&Za(i,t,e)||r===0&&Za(i,n,e)||o===0&&Za(t,i,n)||a===0&&Za(t,e,n))}function Za(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function $a(i){return i>0?1:i<0?-1:0}function tm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&b0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function da(i,e){return ni(i.prev,i,i.next)<0?ni(i,e,i.next)>=0&&ni(i,i.prev,e)>=0:ni(i,e,i.prev)<0||ni(i,i.next,e)<0}function nm(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function w0(i,e){const t=bu(i.i,i.x,i.y),n=bu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Kh(i,e,t,n){const s=bu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function pa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function bu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function im(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class sm{static triangulate(e,t,n=2){return Gp(e,t,n)}}class go{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return go.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Jh(e),Qh(n,e);let o=e.length;t.forEach(Jh);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Qh(n,t[c]);const a=sm.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Jh(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Qh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class oa extends Pn{constructor(e=new dl([new je(.5,.5),new je(-.5,.5),new je(-.5,-.5),new je(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new an(s,3)),this.setAttribute("uv",new an(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:h-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:rm;let P,S=!1,T,E,U,M;if(p){P=p.getSpacedPoints(u),S=!0,f=!1;const B=p.isCatmullRomCurve3?p.closed:!1;T=p.computeFrenetFrames(u,B),E=new A,U=new A,M=new A}f||(m=0,h=0,g=0,v=0);const C=a.extractPoints(l);let F=C.shape;const k=C.holes;if(!go.isClockWise(F)){F=F.reverse();for(let B=0,ee=k.length;B<ee;B++){const ue=k[B];go.isClockWise(ue)&&(k[B]=ue.reverse())}}function ie(B){const ue=10000000000000001e-36;let ve=B[0];for(let He=1;He<=B.length;He++){const vt=He%B.length,pt=B[vt],ce=pt.x-ve.x,Xe=pt.y-ve.y,D=ce*ce+Xe*Xe,Ve=Math.max(Math.abs(pt.x),Math.abs(pt.y),Math.abs(ve.x),Math.abs(ve.y)),tt=ue*Ve*Ve;if(D<=tt){B.splice(vt,1),He--;continue}ve=pt}}ie(F),k.forEach(ie);const G=k.length,Q=F;for(let B=0;B<G;B++){const ee=k[B];F=F.concat(ee)}function we(B,ee,ue){return ee||Rn("ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(ee,ue)}const re=F.length;function Pe(B,ee,ue){let ve,He,vt;const pt=B.x-ee.x,ce=B.y-ee.y,Xe=ue.x-B.x,D=ue.y-B.y,Ve=pt*pt+ce*ce,tt=pt*D-ce*Xe;if(Math.abs(tt)>Number.EPSILON){const R=Math.sqrt(Ve),_=Math.sqrt(Xe*Xe+D*D),J=ee.x-ce/R,pe=ee.y+pt/R,Re=ue.x-D/_,et=ue.y+Xe/_,Qe=((Re-J)*D-(et-pe)*Xe)/(pt*D-ce*Xe);ve=J+pt*Qe-B.x,He=pe+ce*Qe-B.y;const Le=ve*ve+He*He;if(Le<=2)return new je(ve,He);vt=Math.sqrt(Le/2)}else{let R=!1;pt>Number.EPSILON?Xe>Number.EPSILON&&(R=!0):pt<-Number.EPSILON?Xe<-Number.EPSILON&&(R=!0):Math.sign(ce)===Math.sign(D)&&(R=!0),R?(ve=-ce,He=pt,vt=Math.sqrt(Ve)):(ve=pt,He=ce,vt=Math.sqrt(Ve/2))}return new je(ve/vt,He/vt)}const ye=[];for(let B=0,ee=Q.length,ue=ee-1,ve=B+1;B<ee;B++,ue++,ve++)ue===ee&&(ue=0),ve===ee&&(ve=0),ye[B]=Pe(Q[B],Q[ue],Q[ve]);const Te=[];let Ie,yt=ye.concat();for(let B=0,ee=G;B<ee;B++){const ue=k[B];Ie=[];for(let ve=0,He=ue.length,vt=He-1,pt=ve+1;ve<He;ve++,vt++,pt++)vt===He&&(vt=0),pt===He&&(pt=0),Ie[ve]=Pe(ue[ve],ue[vt],ue[pt]);Te.push(Ie),yt=yt.concat(Ie)}let Et;if(m===0)Et=go.triangulateShape(Q,k);else{const B=[],ee=[];for(let ue=0;ue<m;ue++){const ve=ue/m,He=h*Math.cos(ve*Math.PI/2),vt=g*Math.sin(ve*Math.PI/2)+v;for(let pt=0,ce=Q.length;pt<ce;pt++){const Xe=we(Q[pt],ye[pt],vt);Ee(Xe.x,Xe.y,-He),ve===0&&B.push(Xe)}for(let pt=0,ce=G;pt<ce;pt++){const Xe=k[pt];Ie=Te[pt];const D=[];for(let Ve=0,tt=Xe.length;Ve<tt;Ve++){const R=we(Xe[Ve],Ie[Ve],vt);Ee(R.x,R.y,-He),ve===0&&D.push(R)}ve===0&&ee.push(D)}}Et=go.triangulateShape(B,ee)}const jt=Et.length,W=g+v;for(let B=0;B<re;B++){const ee=f?we(F[B],yt[B],W):F[B];S?(U.copy(T.normals[0]).multiplyScalar(ee.x),E.copy(T.binormals[0]).multiplyScalar(ee.y),M.copy(P[0]).add(U).add(E),Ee(M.x,M.y,M.z)):Ee(ee.x,ee.y,0)}for(let B=1;B<=u;B++)for(let ee=0;ee<re;ee++){const ue=f?we(F[ee],yt[ee],W):F[ee];S?(U.copy(T.normals[B]).multiplyScalar(ue.x),E.copy(T.binormals[B]).multiplyScalar(ue.y),M.copy(P[B]).add(U).add(E),Ee(M.x,M.y,M.z)):Ee(ue.x,ue.y,d/u*B)}for(let B=m-1;B>=0;B--){const ee=B/m,ue=h*Math.cos(ee*Math.PI/2),ve=g*Math.sin(ee*Math.PI/2)+v;for(let He=0,vt=Q.length;He<vt;He++){const pt=we(Q[He],ye[He],ve);Ee(pt.x,pt.y,d+ue)}for(let He=0,vt=k.length;He<vt;He++){const pt=k[He];Ie=Te[He];for(let ce=0,Xe=pt.length;ce<Xe;ce++){const D=we(pt[ce],Ie[ce],ve);S?Ee(D.x,D.y+P[u-1].y,P[u-1].x+ue):Ee(D.x,D.y,d+ue)}}}lt(),Se();function lt(){const B=s.length/3;if(f){let ee=0,ue=re*ee;for(let ve=0;ve<jt;ve++){const He=Et[ve];Ae(He[2]+ue,He[1]+ue,He[0]+ue)}ee=u+m*2,ue=re*ee;for(let ve=0;ve<jt;ve++){const He=Et[ve];Ae(He[0]+ue,He[1]+ue,He[2]+ue)}}else{for(let ee=0;ee<jt;ee++){const ue=Et[ee];Ae(ue[2],ue[1],ue[0])}for(let ee=0;ee<jt;ee++){const ue=Et[ee];Ae(ue[0]+re*u,ue[1]+re*u,ue[2]+re*u)}}n.addGroup(B,s.length/3-B,0)}function Se(){const B=s.length/3;let ee=0;$(Q,ee),ee+=Q.length;for(let ue=0,ve=k.length;ue<ve;ue++){const He=k[ue];$(He,ee),ee+=He.length}n.addGroup(B,s.length/3-B,1)}function $(B,ee){let ue=B.length;for(;--ue>=0;){const ve=ue;let He=ue-1;He<0&&(He=B.length-1);for(let vt=0,pt=u+m*2;vt<pt;vt++){const ce=re*vt,Xe=re*(vt+1),D=ee+ve+ce,Ve=ee+He+ce,tt=ee+He+Xe,R=ee+ve+Xe;Je(D,Ve,tt,R)}}}function Ee(B,ee,ue){c.push(B),c.push(ee),c.push(ue)}function Ae(B,ee,ue){Ye(B),Ye(ee),Ye(ue);const ve=s.length/3,He=b.generateTopUV(n,s,ve-3,ve-2,ve-1);xe(He[0]),xe(He[1]),xe(He[2])}function Je(B,ee,ue,ve){Ye(B),Ye(ee),Ye(ve),Ye(ee),Ye(ue),Ye(ve);const He=s.length/3,vt=b.generateSideWallUV(n,s,He-6,He-3,He-2,He-1);xe(vt[0]),xe(vt[1]),xe(vt[3]),xe(vt[1]),xe(vt[2]),xe(vt[3])}function Ye(B){s.push(c[B*3+0]),s.push(c[B*3+1]),s.push(c[B*3+2])}function xe(B){r.push(B.x),r.push(B.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return om(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new yu[s.type]().fromJSON(s)),new oa(n,e.options)}}const rm={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new je(r,o),new je(a,c),new je(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],d=e[n*3+2],f=e[s*3],h=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new je(o,1-c),new je(l,1-d),new je(f,1-g),new je(v,1-p)]:[new je(a,1-c),new je(u,1-d),new je(h,1-g),new je(m,1-p)]}};function om(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class To extends eh{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new To(e.radius,e.detail)}}class ih extends Pn{constructor(e=[new je(0,-.5),new je(.5,0),new je(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=yn(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/t,d=new A,f=new je,h=new A,g=new A,v=new A;let m=0,p=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,h.x=p*1,h.y=-m,h.z=p*0,v.copy(h),h.normalize(),c.push(h.x,h.y,h.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,h.x=p*1,h.y=-m,h.z=p*0,g.copy(h),h.x+=v.x,h.y+=v.y,h.z+=v.z,h.normalize(),c.push(h.x,h.y,h.z),v.copy(g)}for(let b=0;b<=t;b++){const P=n+b*u*s,S=Math.sin(P),T=Math.cos(P);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*S,d.y=e[E].y,d.z=e[E].x*T,o.push(d.x,d.y,d.z),f.x=b/t,f.y=E/(e.length-1),a.push(f.x,f.y);const U=c[3*E+0]*S,M=c[3*E+1],C=c[3*E+0]*T;l.push(U,M,C)}}for(let b=0;b<t;b++)for(let P=0;P<e.length-1;P++){const S=P+b*e.length,T=S,E=S+e.length,U=S+e.length+1,M=S+1;r.push(T,E,M),r.push(U,M,E)}this.setIndex(r),this.setAttribute("position",new an(o,3)),this.setAttribute("uv",new an(a,2)),this.setAttribute("normal",new an(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ih(e.points,e.segments,e.phiStart,e.phiLength)}}class ii extends Pn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,d=e/a,f=t/c,h=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const b=p*f-o;for(let P=0;P<l;P++){const S=P*d-r;g.push(S,-b,0),v.push(0,0,1),m.push(P/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){const P=b+l*p,S=b+l*(p+1),T=b+1+l*(p+1),E=b+1+l*p;h.push(P,S,E),h.push(S,T,E)}this.setIndex(h),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(v,3)),this.setAttribute("uv",new an(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.width,e.height,e.widthSegments,e.heightSegments)}}class sh extends Pn{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let d=e;const f=(t-e)/s,h=new A,g=new je;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const p=r+m/n*o;h.x=d*Math.cos(p),h.y=d*Math.sin(p),c.push(h.x,h.y,h.z),l.push(0,0,1),g.x=(h.x/t+1)/2,g.y=(h.y/t+1)/2,u.push(g.x,g.y)}d+=f}for(let v=0;v<s;v++){const m=v*(n+1);for(let p=0;p<n;p++){const b=p+m,P=b,S=b+n+1,T=b+n+2,E=b+1;a.push(P,S,E),a.push(S,T,E)}}this.setIndex(a),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(l,3)),this.setAttribute("uv",new an(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class mi extends Pn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new A,f=new A,h=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const b=[],P=p/n,S=o+P*a,T=e*Math.cos(S),E=Math.sqrt(e*e-T*T);let U=0;p===0&&o===0?U=.5/t:p===n&&c===Math.PI&&(U=-.5/t);for(let M=0;M<=t;M++){const C=M/t,F=s+C*r;d.x=-E*Math.cos(F),d.y=T,d.z=E*Math.sin(F),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(C+U,1-P),b.push(l++)}u.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){const P=u[p][b+1],S=u[p][b],T=u[p+1][b],E=u[p+1][b+1];(p!==0||o>0)&&h.push(P,S,E),(p!==n-1||c<Math.PI)&&h.push(S,T,E)}this.setIndex(h),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(v,3)),this.setAttribute("uv",new an(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ci extends Pn{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const c=[],l=[],u=[],d=[],f=new A,h=new A,g=new A;for(let v=0;v<=n;v++){const m=o+v/n*a;for(let p=0;p<=s;p++){const b=p/s*r;h.x=(e+t*Math.cos(m))*Math.cos(b),h.y=(e+t*Math.cos(m))*Math.sin(b),h.z=t*Math.sin(m),l.push(h.x,h.y,h.z),f.x=e*Math.cos(b),f.y=e*Math.sin(b),g.subVectors(h,f).normalize(),u.push(g.x,g.y,g.z),d.push(p/s),d.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){const p=(s+1)*v+m-1,b=(s+1)*(v-1)+m-1,P=(s+1)*(v-1)+m,S=(s+1)*v+m;c.push(p,b,S),c.push(b,P,S)}this.setIndex(c),this.setAttribute("position",new an(l,3)),this.setAttribute("normal",new an(u,3)),this.setAttribute("uv",new an(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Io(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(jh(s))s.isRenderTargetTexture?(rn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(jh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Fi(i){const e={};for(let t=0;t<i.length;t++){const n=Io(i[t]);for(const s in n)e[s]=n[s]}return e}function jh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function am(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function T0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:En.workingColorSpace}const ma={clone:Io,merge:Fi};var lm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lm,this.fragmentShader=cm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Io(e.uniforms),this.uniformsGroups=am(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ke().setHex(s.value);break;case"v2":this.uniforms[n].value=new je().fromArray(s.value);break;case"v3":this.uniforms[n].value=new A().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ti().fromArray(s.value);break;case"m3":this.uniforms[n].value=new pn().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Mn().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class E0 extends xi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sn extends gr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xu,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class um extends gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hm extends gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class va extends $n{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class fm extends va{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Mc=new Mn,ef=new A,tf=new A;class rh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=ts,this.map=null,this.mapPass=null,this.matrix=new Mn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ju,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new ti(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;ef.setFromMatrixPosition(e.matrixWorld),t.position.copy(ef),tf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Mc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Mc,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===ua||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Mc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ka=new A,Ja=new ys,ws=new A;class A0 extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mn,this.projectionMatrix=new Mn,this.projectionMatrixInverse=new Mn,this.coordinateSystem=Ps,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ka,Ja,ws),ws.x===1&&ws.y===1&&ws.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,Ja,ws.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ka,Ja,ws),ws.x===1&&ws.y===1&&ws.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,Ja,ws.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const lr=new A,nf=new je,sf=new je;class qi extends A0{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ro*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ro*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,t){return this.getViewBounds(e,nf,sf),t.subVectors(sf,nf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(na*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class dm extends rh{constructor(){super(new qi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ro*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class yc extends va{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($n.DEFAULT_UP),this.updateMatrix(),this.target=new $n,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new dm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class pm extends rh{constructor(){super(new qi(90,1,.5,500)),this.isPointLightShadow=!0}}class C0 extends va{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new pm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Bl extends A0{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class mm extends rh{constructor(){super(new Bl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sc extends va{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($n.DEFAULT_UP),this.updateMatrix(),this.target=new $n,this.shadow=new mm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class gm extends va{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ro=-90,oo=1;class vm extends $n{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qi(ro,oo,e,t);s.layers=this.layers,this.add(s);const r=new qi(ro,oo,e,t);r.layers=this.layers,this.add(r);const o=new qi(ro,oo,e,t);o.layers=this.layers,this.add(o);const a=new qi(ro,oo,e,t);a.layers=this.layers,this.add(a);const c=new qi(ro,oo,e,t);c.layers=this.layers,this.add(c);const l=new qi(ro,oo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Ps)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ua)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class _m extends qi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class xm{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Mm.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Mm(){this._document.hidden===!1&&this.reset()}const rf=new Mn;class R0{constructor(e,t,n=0,s=1/0){this.ray=new zl(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ju,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Rn("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return rf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rf),this}intersectObject(e,t=!0,n=[]){return wu(e,this,n,t),n.sort(of),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)wu(e[s],this,n,t);return n.sort(of),n}}function of(i,e){return i.distance-e.distance}function wu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)wu(r[o],e,t,!0)}}class P0{static{P0.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}}function af(i,e,t,n){const s=ym(n);switch(t){case s0:return i*e;case Vu:return i*e/s.components*s.byteLength;case Wu:return i*e/s.components*s.byteLength;case Fr:return i*e*2/s.components*s.byteLength;case Xu:return i*e*2/s.components*s.byteLength;case r0:return i*e*3/s.components*s.byteLength;case xs:return i*e*4/s.components*s.byteLength;case Yu:return i*e*4/s.components*s.byteLength;case ll:case cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ul:case hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wc:case Yc:return Math.max(i,16)*Math.max(e,8)/4;case Vc:case Xc:return Math.max(i,8)*Math.max(e,8)/2;case qc:case Zc:case Kc:case Jc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $c:case xl:case Qc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case eu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case tu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case nu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case iu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case su:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ru:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ou:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case au:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case lu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case cu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case uu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case hu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case fu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case du:case pu:case mu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case gu:case vu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ml:case _u:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ym(i){switch(i){case ts:case e0:return{byteLength:1,components:1};case la:case t0:case $i:return{byteLength:2,components:1};case Gu:case Hu:return{byteLength:2,components:4};case Us:case ku:case _s:return{byteLength:4,components:1};case n0:case i0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Du}}));typeof window<"u"&&(window.__THREE__?rn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Du);function L0(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Sm(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],v=d[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const v=d[h];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var bm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wm=`#ifdef USE_ALPHAHASH
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
#endif`,Tm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Em=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rm=`#ifdef USE_AOMAP
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
#endif`,Pm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lm=`#ifdef USE_BATCHING
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
#endif`,Im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Um=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fm=`#ifdef USE_IRIDESCENCE
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
#endif`,Om=`#ifdef USE_BUMPMAP
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
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ym=`#define PI 3.141592653589793
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
} // validated`,qm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zm=`vec3 transformedNormal = objectNormal;
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
#endif`,$m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Km=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jm="gl_FragColor = linearToOutputTexel( gl_FragColor );",eg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tg=`#ifdef USE_ENVMAP
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
#endif`,ng=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
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
#endif`,og=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ag=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ug=`#ifdef USE_GRADIENTMAP
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
}`,hg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_g=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mg=`PhysicalMaterial material;
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
#endif`,yg=`uniform sampler2D dfgLUT;
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
}`,Sg=`
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
#endif`,bg=`#if defined( RE_IndirectDiffuse )
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
#endif`,wg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Eg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ag=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ig=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dg=`#if defined( USE_POINTS_UV )
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
#endif`,Ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ug=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Og=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bg=`#ifdef USE_MORPHTARGETS
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
#endif`,kg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Yg=`#ifdef USE_NORMALMAP
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
#endif`,qg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,l1=`float getShadowMask() {
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
}`,c1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u1=`#ifdef USE_SKINNING
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
#endif`,h1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f1=`#ifdef USE_SKINNING
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
#endif`,d1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v1=`#ifdef USE_TRANSMISSION
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
#endif`,_1=`#ifdef USE_TRANSMISSION
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
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const b1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w1=`uniform sampler2D t2D;
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
}`,T1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R1=`#include <common>
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
}`,P1=`#if DEPTH_PACKING == 3200
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
}`,L1=`#define DISTANCE
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
}`,I1=`#define DISTANCE
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
}`,D1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U1=`uniform float scale;
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
}`,F1=`uniform vec3 diffuse;
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
}`,O1=`#include <common>
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
}`,z1=`uniform vec3 diffuse;
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
}`,B1=`#define LAMBERT
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
}`,k1=`#define LAMBERT
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
}`,G1=`#define MATCAP
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
}`,H1=`#define MATCAP
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
}`,V1=`#define NORMAL
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
}`,W1=`#define NORMAL
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
}`,X1=`#define PHONG
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
}`,Y1=`#define PHONG
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
}`,q1=`#define STANDARD
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
}`,Z1=`#define STANDARD
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
}`,$1=`#define TOON
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
}`,K1=`#define TOON
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
}`,J1=`uniform float size;
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
}`,Q1=`uniform vec3 diffuse;
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
}`,j1=`#include <common>
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
}`,ev=`uniform vec3 color;
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
}`,tv=`uniform float rotation;
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
}`,nv=`uniform vec3 diffuse;
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
}`,xn={alphahash_fragment:bm,alphahash_pars_fragment:wm,alphamap_fragment:Tm,alphamap_pars_fragment:Em,alphatest_fragment:Am,alphatest_pars_fragment:Cm,aomap_fragment:Rm,aomap_pars_fragment:Pm,batching_pars_vertex:Lm,batching_vertex:Im,begin_vertex:Dm,beginnormal_vertex:Nm,bsdfs:Um,iridescence_fragment:Fm,bumpmap_pars_fragment:Om,clipping_planes_fragment:zm,clipping_planes_pars_fragment:Bm,clipping_planes_pars_vertex:km,clipping_planes_vertex:Gm,color_fragment:Hm,color_pars_fragment:Vm,color_pars_vertex:Wm,color_vertex:Xm,common:Ym,cube_uv_reflection_fragment:qm,defaultnormal_vertex:Zm,displacementmap_pars_vertex:$m,displacementmap_vertex:Km,emissivemap_fragment:Jm,emissivemap_pars_fragment:Qm,colorspace_fragment:jm,colorspace_pars_fragment:eg,envmap_fragment:tg,envmap_common_pars_fragment:ng,envmap_pars_fragment:ig,envmap_pars_vertex:sg,envmap_physical_pars_fragment:mg,envmap_vertex:rg,fog_vertex:og,fog_pars_vertex:ag,fog_fragment:lg,fog_pars_fragment:cg,gradientmap_pars_fragment:ug,lightmap_pars_fragment:hg,lights_lambert_fragment:fg,lights_lambert_pars_fragment:dg,lights_pars_begin:pg,lights_toon_fragment:gg,lights_toon_pars_fragment:vg,lights_phong_fragment:_g,lights_phong_pars_fragment:xg,lights_physical_fragment:Mg,lights_physical_pars_fragment:yg,lights_fragment_begin:Sg,lights_fragment_maps:bg,lights_fragment_end:wg,lightprobes_pars_fragment:Tg,logdepthbuf_fragment:Eg,logdepthbuf_pars_fragment:Ag,logdepthbuf_pars_vertex:Cg,logdepthbuf_vertex:Rg,map_fragment:Pg,map_pars_fragment:Lg,map_particle_fragment:Ig,map_particle_pars_fragment:Dg,metalnessmap_fragment:Ng,metalnessmap_pars_fragment:Ug,morphinstance_vertex:Fg,morphcolor_vertex:Og,morphnormal_vertex:zg,morphtarget_pars_vertex:Bg,morphtarget_vertex:kg,normal_fragment_begin:Gg,normal_fragment_maps:Hg,normal_pars_fragment:Vg,normal_pars_vertex:Wg,normal_vertex:Xg,normalmap_pars_fragment:Yg,clearcoat_normal_fragment_begin:qg,clearcoat_normal_fragment_maps:Zg,clearcoat_pars_fragment:$g,iridescence_pars_fragment:Kg,opaque_fragment:Jg,packing:Qg,premultiplied_alpha_fragment:jg,project_vertex:e1,dithering_fragment:t1,dithering_pars_fragment:n1,roughnessmap_fragment:i1,roughnessmap_pars_fragment:s1,shadowmap_pars_fragment:r1,shadowmap_pars_vertex:o1,shadowmap_vertex:a1,shadowmask_pars_fragment:l1,skinbase_vertex:c1,skinning_pars_vertex:u1,skinning_vertex:h1,skinnormal_vertex:f1,specularmap_fragment:d1,specularmap_pars_fragment:p1,tonemapping_fragment:m1,tonemapping_pars_fragment:g1,transmission_fragment:v1,transmission_pars_fragment:_1,uv_pars_fragment:x1,uv_pars_vertex:M1,uv_vertex:y1,worldpos_vertex:S1,background_vert:b1,background_frag:w1,backgroundCube_vert:T1,backgroundCube_frag:E1,cube_vert:A1,cube_frag:C1,depth_vert:R1,depth_frag:P1,distance_vert:L1,distance_frag:I1,equirect_vert:D1,equirect_frag:N1,linedashed_vert:U1,linedashed_frag:F1,meshbasic_vert:O1,meshbasic_frag:z1,meshlambert_vert:B1,meshlambert_frag:k1,meshmatcap_vert:G1,meshmatcap_frag:H1,meshnormal_vert:V1,meshnormal_frag:W1,meshphong_vert:X1,meshphong_frag:Y1,meshphysical_vert:q1,meshphysical_frag:Z1,meshtoon_vert:$1,meshtoon_frag:K1,points_vert:J1,points_frag:Q1,shadow_vert:j1,shadow_frag:ev,sprite_vert:tv,sprite_frag:nv},Lt={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pn},alphaMap:{value:null},alphaMapTransform:{value:new pn},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pn}},envmap:{envMap:{value:null},envMapRotation:{value:new pn},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pn}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pn}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pn},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pn},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pn},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pn}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pn}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pn}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new A},probesMax:{value:new A},probesResolution:{value:new A}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pn},alphaTest:{value:0},uvTransform:{value:new pn}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pn},alphaMap:{value:null},alphaMapTransform:{value:new pn},alphaTest:{value:0}}},Rs={basic:{uniforms:Fi([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:xn.meshbasic_vert,fragmentShader:xn.meshbasic_frag},lambert:{uniforms:Fi([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:xn.meshlambert_vert,fragmentShader:xn.meshlambert_frag},phong:{uniforms:Fi([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xn.meshphong_vert,fragmentShader:xn.meshphong_frag},standard:{uniforms:Fi([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xn.meshphysical_vert,fragmentShader:xn.meshphysical_frag},toon:{uniforms:Fi([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new ke(0)}}]),vertexShader:xn.meshtoon_vert,fragmentShader:xn.meshtoon_frag},matcap:{uniforms:Fi([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:xn.meshmatcap_vert,fragmentShader:xn.meshmatcap_frag},points:{uniforms:Fi([Lt.points,Lt.fog]),vertexShader:xn.points_vert,fragmentShader:xn.points_frag},dashed:{uniforms:Fi([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xn.linedashed_vert,fragmentShader:xn.linedashed_frag},depth:{uniforms:Fi([Lt.common,Lt.displacementmap]),vertexShader:xn.depth_vert,fragmentShader:xn.depth_frag},normal:{uniforms:Fi([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:xn.meshnormal_vert,fragmentShader:xn.meshnormal_frag},sprite:{uniforms:Fi([Lt.sprite,Lt.fog]),vertexShader:xn.sprite_vert,fragmentShader:xn.sprite_frag},background:{uniforms:{uvTransform:{value:new pn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xn.background_vert,fragmentShader:xn.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pn}},vertexShader:xn.backgroundCube_vert,fragmentShader:xn.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xn.cube_vert,fragmentShader:xn.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xn.equirect_vert,fragmentShader:xn.equirect_frag},distance:{uniforms:Fi([Lt.common,Lt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xn.distance_vert,fragmentShader:xn.distance_frag},shadow:{uniforms:Fi([Lt.lights,Lt.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:xn.shadow_vert,fragmentShader:xn.shadow_frag}};Rs.physical={uniforms:Fi([Rs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pn},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pn},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pn},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pn},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pn},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pn},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pn},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pn},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pn},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pn},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pn},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pn}}]),vertexShader:xn.meshphysical_vert,fragmentShader:xn.meshphysical_frag};const Qa={r:0,b:0,g:0},iv=new Mn,I0=new pn;I0.set(-1,0,0,0,1,0,0,0,1);function sv(i,e,t,n,s,r){const o=new ke(0);let a=s===!0?0:1,c,l,u=null,d=0,f=null;function h(b){let P=b.isScene===!0?b.background:null;if(P&&P.isTexture){const S=b.backgroundBlurriness>0;P=e.get(P,S)}return P}function g(b){let P=!1;const S=h(b);S===null?m(o,a):S&&S.isColor&&(m(S,1),P=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(b,P){const S=h(P);S&&(S.isCubeTexture||S.mapping===Ol)?(l===void 0&&(l=new Ut(new Zn(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Io(Rs.backgroundCube.uniforms),vertexShader:Rs.backgroundCube.vertexShader,fragmentShader:Rs.backgroundCube.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,E,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(iv.makeRotationFromEuler(P.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(I0),l.material.toneMapped=En.getTransfer(S.colorSpace)!==Fn,(u!==S||d!==S.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ut(new ii(2,2),new xi({name:"BackgroundMaterial",uniforms:Io(Rs.background.uniforms),vertexShader:Rs.background.vertexShader,fragmentShader:Rs.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.toneMapped=En.getTransfer(S.colorSpace)!==Fn,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,P){b.getRGB(Qa,T0(i)),t.buffers.color.setClear(Qa.r,Qa.g,Qa.b,P,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,P=1){o.set(b),a=P,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:g,addToRenderList:v,dispose:p}}function rv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(k,V,ie,G,Q){let we=!1;const re=d(k,G,ie,V);r!==re&&(r=re,l(r.object)),we=h(k,G,ie,Q),we&&g(k,G,ie,Q),Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(we||o)&&(o=!1,S(k,V,ie,G),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function c(){return i.createVertexArray()}function l(k){return i.bindVertexArray(k)}function u(k){return i.deleteVertexArray(k)}function d(k,V,ie,G){const Q=G.wireframe===!0;let we=n[V.id];we===void 0&&(we={},n[V.id]=we);const re=k.isInstancedMesh===!0?k.id:0;let Pe=we[re];Pe===void 0&&(Pe={},we[re]=Pe);let ye=Pe[ie.id];ye===void 0&&(ye={},Pe[ie.id]=ye);let Te=ye[Q];return Te===void 0&&(Te=f(c()),ye[Q]=Te),Te}function f(k){const V=[],ie=[],G=[];for(let Q=0;Q<t;Q++)V[Q]=0,ie[Q]=0,G[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ie,attributeDivisors:G,object:k,attributes:{},index:null}}function h(k,V,ie,G){const Q=r.attributes,we=V.attributes;let re=0;const Pe=ie.getAttributes();for(const ye in Pe)if(Pe[ye].location>=0){const Ie=Q[ye];let yt=we[ye];if(yt===void 0&&(ye==="instanceMatrix"&&k.instanceMatrix&&(yt=k.instanceMatrix),ye==="instanceColor"&&k.instanceColor&&(yt=k.instanceColor)),Ie===void 0||Ie.attribute!==yt||yt&&Ie.data!==yt.data)return!0;re++}return r.attributesNum!==re||r.index!==G}function g(k,V,ie,G){const Q={},we=V.attributes;let re=0;const Pe=ie.getAttributes();for(const ye in Pe)if(Pe[ye].location>=0){let Ie=we[ye];Ie===void 0&&(ye==="instanceMatrix"&&k.instanceMatrix&&(Ie=k.instanceMatrix),ye==="instanceColor"&&k.instanceColor&&(Ie=k.instanceColor));const yt={};yt.attribute=Ie,Ie&&Ie.data&&(yt.data=Ie.data),Q[ye]=yt,re++}r.attributes=Q,r.attributesNum=re,r.index=G}function v(){const k=r.newAttributes;for(let V=0,ie=k.length;V<ie;V++)k[V]=0}function m(k){p(k,0)}function p(k,V){const ie=r.newAttributes,G=r.enabledAttributes,Q=r.attributeDivisors;ie[k]=1,G[k]===0&&(i.enableVertexAttribArray(k),G[k]=1),Q[k]!==V&&(i.vertexAttribDivisor(k,V),Q[k]=V)}function b(){const k=r.newAttributes,V=r.enabledAttributes;for(let ie=0,G=V.length;ie<G;ie++)V[ie]!==k[ie]&&(i.disableVertexAttribArray(ie),V[ie]=0)}function P(k,V,ie,G,Q,we,re){re===!0?i.vertexAttribIPointer(k,V,ie,Q,we):i.vertexAttribPointer(k,V,ie,G,Q,we)}function S(k,V,ie,G){v();const Q=G.attributes,we=ie.getAttributes(),re=V.defaultAttributeValues;for(const Pe in we){const ye=we[Pe];if(ye.location>=0){let Te=Q[Pe];if(Te===void 0&&(Pe==="instanceMatrix"&&k.instanceMatrix&&(Te=k.instanceMatrix),Pe==="instanceColor"&&k.instanceColor&&(Te=k.instanceColor)),Te!==void 0){const Ie=Te.normalized,yt=Te.itemSize,Et=e.get(Te);if(Et===void 0)continue;const jt=Et.buffer,W=Et.type,lt=Et.bytesPerElement,Se=W===i.INT||W===i.UNSIGNED_INT||Te.gpuType===ku;if(Te.isInterleavedBufferAttribute){const $=Te.data,Ee=$.stride,Ae=Te.offset;if($.isInstancedInterleavedBuffer){for(let Je=0;Je<ye.locationSize;Je++)p(ye.location+Je,$.meshPerAttribute);k.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Je=0;Je<ye.locationSize;Je++)m(ye.location+Je);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let Je=0;Je<ye.locationSize;Je++)P(ye.location+Je,yt/ye.locationSize,W,Ie,Ee*lt,(Ae+yt/ye.locationSize*Je)*lt,Se)}else{if(Te.isInstancedBufferAttribute){for(let $=0;$<ye.locationSize;$++)p(ye.location+$,Te.meshPerAttribute);k.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let $=0;$<ye.locationSize;$++)m(ye.location+$);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let $=0;$<ye.locationSize;$++)P(ye.location+$,yt/ye.locationSize,W,Ie,yt*lt,yt/ye.locationSize*$*lt,Se)}}else if(re!==void 0){const Ie=re[Pe];if(Ie!==void 0)switch(Ie.length){case 2:i.vertexAttrib2fv(ye.location,Ie);break;case 3:i.vertexAttrib3fv(ye.location,Ie);break;case 4:i.vertexAttrib4fv(ye.location,Ie);break;default:i.vertexAttrib1fv(ye.location,Ie)}}}}b()}function T(){C();for(const k in n){const V=n[k];for(const ie in V){const G=V[ie];for(const Q in G){const we=G[Q];for(const re in we)u(we[re].object),delete we[re];delete G[Q]}}delete n[k]}}function E(k){if(n[k.id]===void 0)return;const V=n[k.id];for(const ie in V){const G=V[ie];for(const Q in G){const we=G[Q];for(const re in we)u(we[re].object),delete we[re];delete G[Q]}}delete n[k.id]}function U(k){for(const V in n){const ie=n[V];for(const G in ie){const Q=ie[G];if(Q[k.id]===void 0)continue;const we=Q[k.id];for(const re in we)u(we[re].object),delete we[re];delete Q[k.id]}}}function M(k){for(const V in n){const ie=n[V],G=k.isInstancedMesh===!0?k.id:0,Q=ie[G];if(Q!==void 0){for(const we in Q){const re=Q[we];for(const Pe in re)u(re[Pe].object),delete re[Pe];delete Q[we]}delete ie[G],Object.keys(ie).length===0&&delete n[V]}}}function C(){F(),o=!0,r!==s&&(r=s,l(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:F,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function ov(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let f=0;for(let h=0;h<u;h++)f+=l[h];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function av(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(U){return!(U!==xs&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){const M=U===$i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==ts&&U!==_s&&!M&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(rn("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&rn("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:P,maxFragmentUniforms:S,maxSamples:T,samples:E}}function lv(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new pr,a=new pn,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||n!==0||s;return s=f,n=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const b=r?0:n,P=b*4;let S=p.clippingState||null;c.value=S,S=u(g,f,P,h);for(let T=0;T!==P;++T)S[T]=t[T];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,h,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=h+v*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let P=0,S=h;P!==v;++P,S+=4)o.copy(d[P]).applyMatrix4(b,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const vo=4,cv=6,uv=20,hv=256,Zo=new Bl,lf=new ke;let bc=null,wc=0,Tc=0,Ec=!1;const fv=new A,Sr=new A;class Tu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=fv}=r;bc=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Tc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bc,wc,Tc),this._renderer.xr.enabled=Ec,e.scissorTest=!1,ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ur||e.mapping===Ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bc=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Tc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:$i,format:xs,colorSpace:yl,depthBuffer:!1},s=cf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cf(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=dv(r)),this._blurMaterial=mv(r,e,t),this._ggxMaterial=pv(r,e,t)}return s}_compileMaterial(e){const t=new Ut(new Pn,e);this._renderer.compile(t,Zo)}_sceneToCubeUV(e,t,n,s,r){const c=new qi(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(lf),d.toneMapping=Ds,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ut(new Zn,new ns({name:"PMREM.Background",side:zi,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,p=!0):(m.color.copy(lf),p=!0);for(let P=0;P<6;P++){const S=P%3;S===0?(c.up.set(0,l[P],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[P],r.y,r.z)):S===1?(c.up.set(0,0,l[P]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[P],r.z)):(c.up.set(0,l[P],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[P]));const T=this._cubeSize;ao(s,S*T,P>2?T:0,T,T),d.setRenderTarget(s),p&&d.render(v,c),d.render(e,c)}d.toneMapping=h,d.autoClear=f,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ur||e.mapping===Ao;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;ao(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Zo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),f=l*1.25,h=d*f,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-vo?n-g+vo:0),p=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=g-t,ao(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(a,Zo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,ao(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(a,Zo)}_blur(e,t,n,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){const o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;const l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const u=this._sizeLods[s],d=3*u*(s>this._lodMax-vo?s-this._lodMax+vo:0),f=4*(this._cubeSize-u);ao(t,d,f,3*u,2*u),o.setRenderTarget(t),o.render(c,Zo)}}function dv(i){const e=[],t=[];let n=i;const s=i-vo+1+cv;for(let r=0;r<s;r++){const o=Math.pow(2,n);e.push(o);const a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,f=6,h=3,g=new Float32Array(h*f*d),v=new Float32Array(h*f*d);for(let p=0;p<d;p++){const b=p%3*2/3-1,P=p>2?0:-1,S=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];g.set(S,h*f*p);for(let T=0;T<f;T++){const E=u[T*2]*2-1,U=u[T*2+1]*2-1;p===0?Sr.set(1,U,E):p===1?Sr.set(-E,1,-U):p===2?Sr.set(-E,U,1):p===3?Sr.set(-1,U,-E):p===4?Sr.set(-E,-1,U):Sr.set(E,U,-1),Sr.toArray(v,(p*f+T)*h)}}const m=new Pn;m.setAttribute("position",new Wn(g,h)),m.setAttribute("outputDirection",new Wn(v,h)),t.push(new Ut(m,null)),n>vo&&n--}return{lodMeshes:t,sizeLods:e}}function cf(i,e,t){const n=new Bi(i,e,t);return n.texture.mapping=Ol,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ao(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function pv(i,e,t){return new xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kl(),fragmentShader:`

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
		`,blending:Is,depthTest:!1,depthWrite:!1})}function mv(i,e,t){return new xi({name:"SphericalGaussianBlur",defines:{SAMPLES:uv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:kl(),fragmentShader:`

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
		`,blending:Is,depthTest:!1,depthWrite:!1})}function uf(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kl(),fragmentShader:`

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
		`,blending:Is,depthTest:!1,depthWrite:!1})}function hf(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Is,depthTest:!1,depthWrite:!1})}function kl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class D0 extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new m0(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zn(5,5,5),r=new xi({name:"CubemapFromEquirect",uniforms:Io(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zi,blending:Is});r.uniforms.tEquirect.value=t;const o=new Ut(s,r),a=t.minFilter;return t.minFilter===Cr&&(t.minFilter=Li),new vm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}function gv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,h=!1){return f==null?null:h?o(f):r(f)}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===al||h===Yl)if(e.has(f)){const g=e.get(f).texture;return a(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const v=new D0(g.height);return v.fromEquirectangularTexture(i,f),e.set(f,v),f.addEventListener("dispose",l),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const h=f.mapping,g=h===al||h===Yl,v=h===Ur||h===Ao;if(g||v){let m=t.get(f);const p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Tu(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const b=f.image;return g&&b&&b.height>0||v&&b&&c(b)?(n===null&&(n=new Tu(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,h){return h===al?f.mapping=Ur:h===Yl&&(f.mapping=Ao),f}function c(f){let h=0;const g=6;for(let v=0;v<g;v++)f[v]!==void 0&&h++;return h===g}function l(f){const h=f.target;h.removeEventListener("dispose",l);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function vv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&yo("WebGLRenderer: "+n+" extension not supported."),s}}}function _v(i,e,t,n){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const h in f)e.update(f[h],i.ARRAY_BUFFER)}function l(d){const f=[],h=d.index,g=d.attributes.position;let v=0;if(g===void 0)return;if(h!==null){const b=h.array;v=h.version;for(let P=0,S=b.length;P<S;P+=3){const T=b[P+0],E=b[P+1],U=b[P+2];f.push(T,E,E,U,U,T)}}else{const b=g.array;v=g.version;for(let P=0,S=b.length/3-1;P<S;P+=3){const T=P+0,E=P+1,U=P+2;f.push(T,E,E,U,U,T)}}const m=new(g.count>=65535?h0:u0)(f,1);m.version=v;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function xv(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,h){h!==0&&(i.drawElementsInstanced(n,f,r,d*o,h),t.update(f,n,h))}function u(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,h);let v=0;for(let m=0;m<h;m++)v+=f[m];t.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Mv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Rn("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function yv(i,e,t){const n=new WeakMap,s=new ti;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let F=function(){M.dispose(),n.delete(a),a.removeEventListener("dispose",F)};var h=F;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],P=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let T=a.attributes.position.count*S,E=1;T>e.maxTextureSize&&(E=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const U=new Float32Array(T*E*4*d),M=new l0(U,T,E,d);M.type=_s,M.needsUpdate=!0;const C=S*4;for(let k=0;k<d;k++){const V=p[k],ie=b[k],G=P[k],Q=T*E*4*k;for(let we=0;we<V.count;we++){const re=we*C;g===!0&&(s.fromBufferAttribute(V,we),U[Q+re+0]=s.x,U[Q+re+1]=s.y,U[Q+re+2]=s.z,U[Q+re+3]=0),v===!0&&(s.fromBufferAttribute(ie,we),U[Q+re+4]=s.x,U[Q+re+5]=s.y,U[Q+re+6]=s.z,U[Q+re+7]=0),m===!0&&(s.fromBufferAttribute(G,we),U[Q+re+8]=s.x,U[Q+re+9]=s.y,U[Q+re+10]=s.z,U[Q+re+11]=G.itemSize===4?s.w:1)}}f={count:d,texture:M,size:new je(T,E)},n.set(a,f),a.addEventListener("dispose",F)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Sv(i,e,t,n,s){let r=new WeakMap;function o(l){const u=s.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const bv={[Nu]:"LINEAR_TONE_MAPPING",[Uu]:"REINHARD_TONE_MAPPING",[Fu]:"CINEON_TONE_MAPPING",[Fl]:"ACES_FILMIC_TONE_MAPPING",[zu]:"AGX_TONE_MAPPING",[Bu]:"NEUTRAL_TONE_MAPPING",[Ou]:"CUSTOM_TONE_MAPPING"};function wv(i,e,t,n,s,r){const o=new Bi(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null;const l=new Pn;l.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new an([0,2,0,0,2,0],2));const u=new E0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ut(l,u),f=new Bl(-1,1,1,-1,0,1);let h=null,g=null,v=!1,m,p=null,b=[],P=!1;this.setSize=function(S,T){o.setSize(S,T),a!==null&&a.setSize(S,T),c!==null&&c.setSize(S,T);for(let E=0;E<b.length;E++){const U=b[E];U.setSize&&U.setSize(S,T)}},this.setEffects=function(S){b=S,P=b.length>0&&b[0].isRenderPass===!0;const T=o.width,E=o.height;b.length>0&&a===null&&(a=new Bi(T,E,{type:$i,depthBuffer:!1,stencilBuffer:!1}),c=new Bi(T,E,{type:$i,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<b.length;U++){const M=b[U];M.setSize&&M.setSize(T,E)}},this.begin=function(S,T){if(v||S.toneMapping===Ds&&b.length===0)return!1;if(p=T,T!==null){const E=T.width,U=T.height;(o.width!==E||o.height!==U)&&this.setSize(E,U)}return P===!1&&S.setRenderTarget(o),m=S.toneMapping,S.toneMapping=Ds,!0},this.hasRenderPass=function(){return P},this.end=function(S,T){S.toneMapping=m,v=!0;let E=o,U=a;for(let M=0;M<b.length;M++){const C=b[M];C.enabled!==!1&&(C.render(S,U,E,T),C.needsSwap!==!1&&(E=U,U=U===a?c:a))}if(h!==S.outputColorSpace||g!==S.toneMapping){h=S.outputColorSpace,g=S.toneMapping,u.defines={},En.getTransfer(h)===Fn&&(u.defines.SRGB_TRANSFER="");const M=bv[g];M&&(u.defines[M]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(p),S.render(d,f),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const N0=new Ii,Eu=new ha(1,1),U0=new l0,F0=new rp,O0=new m0,ff=[],df=[],pf=new Float32Array(16),mf=new Float32Array(9),gf=new Float32Array(4);function Uo(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=ff[s];if(r===void 0&&(r=new Float32Array(s),ff[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function ui(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function hi(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Gl(i,e){let t=df[e];t===void 0&&(t=new Int32Array(e),df[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Tv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ev(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ui(t,e))return;i.uniform2fv(this.addr,e),hi(t,e)}}function Av(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ui(t,e))return;i.uniform3fv(this.addr,e),hi(t,e)}}function Cv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ui(t,e))return;i.uniform4fv(this.addr,e),hi(t,e)}}function Rv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ui(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),hi(t,e)}else{if(ui(t,n))return;gf.set(n),i.uniformMatrix2fv(this.addr,!1,gf),hi(t,n)}}function Pv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ui(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),hi(t,e)}else{if(ui(t,n))return;mf.set(n),i.uniformMatrix3fv(this.addr,!1,mf),hi(t,n)}}function Lv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ui(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),hi(t,e)}else{if(ui(t,n))return;pf.set(n),i.uniformMatrix4fv(this.addr,!1,pf),hi(t,n)}}function Iv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Dv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ui(t,e))return;i.uniform2iv(this.addr,e),hi(t,e)}}function Nv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ui(t,e))return;i.uniform3iv(this.addr,e),hi(t,e)}}function Uv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ui(t,e))return;i.uniform4iv(this.addr,e),hi(t,e)}}function Fv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ov(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ui(t,e))return;i.uniform2uiv(this.addr,e),hi(t,e)}}function zv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ui(t,e))return;i.uniform3uiv(this.addr,e),hi(t,e)}}function Bv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ui(t,e))return;i.uniform4uiv(this.addr,e),hi(t,e)}}function kv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Eu.compareFunction=t.isReversedDepthBuffer()?Zu:qu,r=Eu):r=N0,t.setTexture2D(e||r,s)}function Gv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||F0,s)}function Hv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||O0,s)}function Vv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||U0,s)}function Wv(i){switch(i){case 5126:return Tv;case 35664:return Ev;case 35665:return Av;case 35666:return Cv;case 35674:return Rv;case 35675:return Pv;case 35676:return Lv;case 5124:case 35670:return Iv;case 35667:case 35671:return Dv;case 35668:case 35672:return Nv;case 35669:case 35673:return Uv;case 5125:return Fv;case 36294:return Ov;case 36295:return zv;case 36296:return Bv;case 35678:case 36198:case 36298:case 36306:case 35682:return kv;case 35679:case 36299:case 36307:return Gv;case 35680:case 36300:case 36308:case 36293:return Hv;case 36289:case 36303:case 36311:case 36292:return Vv}}function Xv(i,e){i.uniform1fv(this.addr,e)}function Yv(i,e){const t=Uo(e,this.size,2);i.uniform2fv(this.addr,t)}function qv(i,e){const t=Uo(e,this.size,3);i.uniform3fv(this.addr,t)}function Zv(i,e){const t=Uo(e,this.size,4);i.uniform4fv(this.addr,t)}function $v(i,e){const t=Uo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Kv(i,e){const t=Uo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Jv(i,e){const t=Uo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Qv(i,e){i.uniform1iv(this.addr,e)}function jv(i,e){i.uniform2iv(this.addr,e)}function e_(i,e){i.uniform3iv(this.addr,e)}function t_(i,e){i.uniform4iv(this.addr,e)}function n_(i,e){i.uniform1uiv(this.addr,e)}function i_(i,e){i.uniform2uiv(this.addr,e)}function s_(i,e){i.uniform3uiv(this.addr,e)}function r_(i,e){i.uniform4uiv(this.addr,e)}function o_(i,e,t){const n=this.cache,s=e.length,r=Gl(t,s);ui(n,r)||(i.uniform1iv(this.addr,r),hi(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Eu:o=N0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function a_(i,e,t){const n=this.cache,s=e.length,r=Gl(t,s);ui(n,r)||(i.uniform1iv(this.addr,r),hi(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||F0,r[o])}function l_(i,e,t){const n=this.cache,s=e.length,r=Gl(t,s);ui(n,r)||(i.uniform1iv(this.addr,r),hi(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||O0,r[o])}function c_(i,e,t){const n=this.cache,s=e.length,r=Gl(t,s);ui(n,r)||(i.uniform1iv(this.addr,r),hi(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||U0,r[o])}function u_(i){switch(i){case 5126:return Xv;case 35664:return Yv;case 35665:return qv;case 35666:return Zv;case 35674:return $v;case 35675:return Kv;case 35676:return Jv;case 5124:case 35670:return Qv;case 35667:case 35671:return jv;case 35668:case 35672:return e_;case 35669:case 35673:return t_;case 5125:return n_;case 36294:return i_;case 36295:return s_;case 36296:return r_;case 35678:case 36198:case 36298:case 36306:case 35682:return o_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return c_}}class h_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wv(t.type)}}class f_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=u_(t.type)}}class d_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Ac=/(\w+)(\])?(\[|\.)?/g;function vf(i,e){i.seq.push(e),i.map[e.id]=e}function p_(i,e,t){const n=i.name,s=n.length;for(Ac.lastIndex=0;;){const r=Ac.exec(n),o=Ac.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){vf(t,l===void 0?new h_(a,i,e):new f_(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new d_(a),vf(t,d)),t=d}}}class pl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);p_(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function _f(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const m_=37297;let g_=0;function v_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const xf=new pn;function __(i){En._getMatrix(xf,En.workingColorSpace,i);const e=`mat3( ${xf.elements.map(t=>t.toFixed(4))} )`;switch(En.getTransfer(i)){case Sl:return[e,"LinearTransferOETF"];case Fn:return[e,"sRGBTransferOETF"];default:return rn("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Mf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+v_(i.getShaderSource(e),a)}else return r}function x_(i,e){const t=__(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const M_={[Nu]:"Linear",[Uu]:"Reinhard",[Fu]:"Cineon",[Fl]:"ACESFilmic",[zu]:"AgX",[Bu]:"Neutral",[Ou]:"Custom"};function y_(i,e){const t=M_[e];return t===void 0?(rn("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ja=new A;function S_(){En.getLuminanceCoefficients(ja);const i=ja.x.toFixed(4),e=ja.y.toFixed(4),t=ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function w_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function T_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ea(i){return i!==""}function yf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const E_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Au(i){return i.replace(E_,C_)}const A_=new Map;function C_(i,e){let t=xn[e];if(t===void 0){const n=A_.get(e);if(n!==void 0)t=xn[n],rn('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Au(t)}const R_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bf(i){return i.replace(R_,P_)}function P_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const L_={[ta]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function I_(i){return L_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const D_={[Ur]:"ENVMAP_TYPE_CUBE",[Ao]:"ENVMAP_TYPE_CUBE",[Ol]:"ENVMAP_TYPE_CUBE_UV"};function N_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":D_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const U_={[Ao]:"ENVMAP_MODE_REFRACTION"};function F_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":U_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const O_={[Qf]:"ENVMAP_BLENDING_MULTIPLY",[yd]:"ENVMAP_BLENDING_MIX",[Sd]:"ENVMAP_BLENDING_ADD"};function z_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":O_[i.combine]||"ENVMAP_BLENDING_NONE"}function B_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function k_(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=I_(t),l=N_(t),u=F_(t),d=z_(t),f=B_(t),h=b_(t),g=w_(r),v=s.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ea).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ea).join(`
`),p.length>0&&(p+=`
`)):(m=[wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),p=[wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ds?"#define TONE_MAPPING":"",t.toneMapping!==Ds?xn.tonemapping_pars_fragment:"",t.toneMapping!==Ds?y_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xn.colorspace_pars_fragment,x_("linearToOutputTexel",t.outputColorSpace),S_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),o=Au(o),o=yf(o,t),o=Sf(o,t),a=Au(a),a=yf(a,t),a=Sf(a,t),o=bf(o),a=bf(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===_h?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const P=b+m+o,S=b+p+a,T=_f(s,s.VERTEX_SHADER,P),E=_f(s,s.FRAGMENT_SHADER,S);s.attachShader(v,T),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function U(k){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(v)||"",ie=s.getShaderInfoLog(T)||"",G=s.getShaderInfoLog(E)||"",Q=V.trim(),we=ie.trim(),re=G.trim();let Pe=!0,ye=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Pe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,T,E);else{const Te=Mf(s,T,"vertex"),Ie=Mf(s,E,"fragment");Rn("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+Q+`
`+Te+`
`+Ie)}else Q!==""?rn("WebGLProgram: Program Info Log:",Q):(we===""||re==="")&&(ye=!1);ye&&(k.diagnostics={runnable:Pe,programLog:Q,vertexShader:{log:we,prefix:m},fragmentShader:{log:re,prefix:p}})}s.deleteShader(T),s.deleteShader(E),M=new pl(s,v),C=T_(s,v)}let M;this.getUniforms=function(){return M===void 0&&U(this),M};let C;this.getAttributes=function(){return C===void 0&&U(this),C};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(v,m_)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=g_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=E,this}let G_=0;class H_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new V_(e),t.set(e,n)),n}}class V_{constructor(e){this.id=G_++,this.code=e,this.usedTimes=0}}function W_(i){return i===Fr||i===xl||i===Ml}function X_(i,e,t,n,s,r){const o=new Ju,a=new H_,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer;let f=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function v(M,C,F,k,V,ie){const G=k.fog,Q=V.geometry,we=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?k.environment:null,re=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,Pe=e.get(M.envMap||we,re),ye=Pe&&Pe.mapping===Ol?Pe.image.height:null,Te=h[M.type];M.precision!==null&&(f=n.getMaxPrecision(M.precision),f!==M.precision&&rn("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const Ie=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,yt=Ie!==void 0?Ie.length:0;let Et=0;Q.morphAttributes.position!==void 0&&(Et=1),Q.morphAttributes.normal!==void 0&&(Et=2),Q.morphAttributes.color!==void 0&&(Et=3);let jt,W,lt,Se;if(Te){const _n=Rs[Te];jt=_n.vertexShader,W=_n.fragmentShader}else{jt=M.vertexShader,W=M.fragmentShader;const _n=a.getVertexShaderStage(M),ut=a.getFragmentShaderStage(M);a.update(M,_n,ut),lt=_n.id,Se=ut.id}const $=i.getRenderTarget(),Ee=i.state.buffers.depth.getReversed(),Ae=V.isInstancedMesh===!0,Je=V.isBatchedMesh===!0,Ye=!!M.map,xe=!!M.matcap,B=!!Pe,ee=!!M.aoMap,ue=!!M.lightMap,ve=!!M.bumpMap&&M.wireframe===!1,He=!!M.normalMap,vt=!!M.displacementMap,pt=!!M.emissiveMap,ce=!!M.metalnessMap,Xe=!!M.roughnessMap,D=M.anisotropy>0,Ve=M.clearcoat>0,tt=M.dispersion>0,R=M.retroreflectivity>0,_=M.iridescence>0,J=M.sheen>0,pe=M.transmission>0,Re=D&&!!M.anisotropyMap,et=Ve&&!!M.clearcoatMap,Qe=Ve&&!!M.clearcoatNormalMap,Le=Ve&&!!M.clearcoatRoughnessMap,Oe=_&&!!M.iridescenceMap,ct=_&&!!M.iridescenceThicknessMap,Ft=J&&!!M.sheenColorMap,rt=J&&!!M.sheenRoughnessMap,Be=!!M.specularMap,Ct=!!M.specularColorMap,Tt=!!M.specularIntensityMap,Xt=pe&&!!M.transmissionMap,j=pe&&!!M.thicknessMap,Ke=!!M.gradientMap,ze=!!M.alphaMap,St=M.alphaTest>0,At=!!M.alphaHash,qe=!!M.extensions;let Bt=Ds;M.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Bt=i.toneMapping);const Dt={shaderID:Te,shaderType:M.type,shaderName:M.name,vertexShader:jt,fragmentShader:W,defines:M.defines,customVertexShaderID:lt,customFragmentShaderID:Se,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Je,batchingColor:Je&&V._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&V.instanceColor!==null,instancingMorph:Ae&&V.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:En.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Ye,matcap:xe,envMap:B,envMapMode:B&&Pe.mapping,envMapCubeUVHeight:ye,aoMap:ee,lightMap:ue,bumpMap:ve,normalMap:He,displacementMap:vt,emissiveMap:pt,normalMapObjectSpace:He&&M.normalMapType===Td,normalMapTangentSpace:He&&M.normalMapType===xu,packedNormalMap:He&&M.normalMapType===xu&&W_(M.normalMap.format),metalnessMap:ce,roughnessMap:Xe,anisotropy:D,anisotropyMap:Re,clearcoat:Ve,clearcoatMap:et,clearcoatNormalMap:Qe,clearcoatRoughnessMap:Le,dispersion:tt,retroreflection:R,iridescence:_,iridescenceMap:Oe,iridescenceThicknessMap:ct,sheen:J,sheenColorMap:Ft,sheenRoughnessMap:rt,specularMap:Be,specularColorMap:Ct,specularIntensityMap:Tt,transmission:pe,transmissionMap:Xt,thicknessMap:j,gradientMap:Ke,opaque:M.transparent===!1&&M.blending===Mo&&M.alphaToCoverage===!1,alphaMap:ze,alphaTest:St,alphaHash:At,combine:M.combine,mapUv:Ye&&g(M.map.channel),aoMapUv:ee&&g(M.aoMap.channel),lightMapUv:ue&&g(M.lightMap.channel),bumpMapUv:ve&&g(M.bumpMap.channel),normalMapUv:He&&g(M.normalMap.channel),displacementMapUv:vt&&g(M.displacementMap.channel),emissiveMapUv:pt&&g(M.emissiveMap.channel),metalnessMapUv:ce&&g(M.metalnessMap.channel),roughnessMapUv:Xe&&g(M.roughnessMap.channel),anisotropyMapUv:Re&&g(M.anisotropyMap.channel),clearcoatMapUv:et&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:rt&&g(M.sheenRoughnessMap.channel),specularMapUv:Be&&g(M.specularMap.channel),specularColorMapUv:Ct&&g(M.specularColorMap.channel),specularIntensityMapUv:Tt&&g(M.specularIntensityMap.channel),transmissionMapUv:Xt&&g(M.transmissionMap.channel),thicknessMapUv:j&&g(M.thicknessMap.channel),alphaMapUv:ze&&g(M.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(He||D),vertexNormals:!!Q.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Q.attributes.uv&&(Ye||ze),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||Q.attributes.normal===void 0&&He===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ee,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Et,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:ie.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Ye&&M.map.isVideoTexture===!0&&En.getTransfer(M.map.colorSpace)===Fn,decodeVideoTextureEmissive:pt&&M.emissiveMap.isVideoTexture===!0&&En.getTransfer(M.emissiveMap.colorSpace)===Fn,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Bn,flipSided:M.side===zi,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:qe&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&M.extensions.multiDraw===!0||Je)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function m(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const F in M.defines)C.push(F),C.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(p(C,M),b(C,M),C.push(i.outputColorSpace)),C.push(M.customProgramCacheKey),C.join()}function p(M,C){M.push(C.precision),M.push(C.outputColorSpace),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.mapUv),M.push(C.alphaMapUv),M.push(C.lightMapUv),M.push(C.aoMapUv),M.push(C.bumpMapUv),M.push(C.normalMapUv),M.push(C.displacementMapUv),M.push(C.emissiveMapUv),M.push(C.metalnessMapUv),M.push(C.roughnessMapUv),M.push(C.anisotropyMapUv),M.push(C.clearcoatMapUv),M.push(C.clearcoatNormalMapUv),M.push(C.clearcoatRoughnessMapUv),M.push(C.iridescenceMapUv),M.push(C.iridescenceThicknessMapUv),M.push(C.sheenColorMapUv),M.push(C.sheenRoughnessMapUv),M.push(C.specularMapUv),M.push(C.specularColorMapUv),M.push(C.specularIntensityMapUv),M.push(C.transmissionMapUv),M.push(C.thicknessMapUv),M.push(C.combine),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numSunLights),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numSunLightShadows),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.numLightProbes),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function b(M,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.retroreflection&&o.enable(24),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function P(M){const C=h[M.type];let F;if(C){const k=Rs[C];F=ma.clone(k.uniforms)}else F=M.uniforms;return F}function S(M,C){let F=u.get(C);return F!==void 0?++F.usedTimes:(F=new k_(i,C,M,s),l.push(F),u.set(C,F)),F}function T(M){if(--M.usedTimes===0){const C=l.indexOf(M);l[C]=l[l.length-1],l.pop(),u.delete(M.cacheKey),M.destroy()}}function E(M){a.remove(M)}function U(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:P,acquireProgram:S,releaseProgram:T,releaseShaderCache:E,programs:l,dispose:U}}function Y_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function q_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Tf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ef(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,g,v,m,p){let b=i[e];return b===void 0?(b={id:f.id,object:f,geometry:h,material:g,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:m,group:p},i[e]=b):(b.id=f.id,b.object=f,b.geometry=h,b.material=g,b.materialVariant=o(f),b.groupOrder=v,b.renderOrder=f.renderOrder,b.z=m,b.group=p),e++,b}function c(f,h,g,v,m,p,b){b.reversedDepth===!0&&(m=-m);const P=a(f,h,g,v,m,p);g.transmission>0?n.push(P):g.transparent===!0?s.push(P):t.push(P)}function l(f,h,g,v,m,p){const b=a(f,h,g,v,m,p);g.transmission>0?n.unshift(b):g.transparent===!0?s.unshift(b):t.unshift(b)}function u(f,h){t.length>1&&t.sort(f||q_),n.length>1&&n.sort(h||Tf),s.length>1&&s.sort(h||Tf)}function d(){for(let f=e,h=i.length;f<h;f++){const g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function Z_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ef,i.set(n,[o])):s>=r.length?(o=new Ef,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function $_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new A,color:new ke};break;case"SpotLight":t={position:new A,direction:new A,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function K_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let J_=0;function Q_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function j_(i){const e=new $_,t=K_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const s=new A,r=new Mn,o=new Mn;function a(l){let u=0,d=0,f=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let h=0,g=0,v=0,m=0,p=0,b=0,P=0,S=0,T=0,E=0,U=0,M=0,C=0,F=0;l.sort(Q_);for(let V=0,ie=l.length;V<ie;V++){const G=l[V],Q=G.color,we=G.intensity,re=G.distance;let Pe=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Fr?Pe=G.shadow.map.texture:Pe=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)u+=Q.r*we,d+=Q.g*we,f+=Q.b*we;else if(G.isLightProbe){for(let ye=0;ye<9;ye++)n.probe[ye].addScaledVector(G.sh.coefficients[ye],we);F++}else if(G.isSunLight){const ye=e.get(G);if(ye.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Te=G.shadow,Ie=t.get(G);Ie.shadowIntensity=Te.intensity,Ie.shadowBias=Te.bias,Ie.shadowNormalBias=Te.normalBias,Ie.shadowRadius=Te.radius,Ie.shadowMapSize.copy(Te.mapSize).multiply(Te.getFrameExtents()),n.sunShadow[g]=Ie,n.sunShadowMap[g]=Pe;const yt=Te.getViewportCount();for(let Et=0;Et<yt;Et++)n.sunShadowMatrix[v+Et]=Te.getMatrix(Et),n.sunShadowCascade[v+Et]=Te._cascadeData[Et];v+=yt,g++}n.sun[h]=ye,h++}else if(G.isDirectionalLight){const ye=e.get(G);if(ye.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Te=G.shadow,Ie=t.get(G);Ie.shadowIntensity=Te.intensity,Ie.shadowBias=Te.bias,Ie.shadowNormalBias=Te.normalBias,Ie.shadowRadius=Te.radius,Ie.shadowMapSize=Te.mapSize,n.directionalShadow[m]=Ie,n.directionalShadowMap[m]=Pe,n.directionalShadowMatrix[m]=G.shadow.matrix,T++}n.directional[m]=ye,m++}else if(G.isSpotLight){const ye=e.get(G);ye.position.setFromMatrixPosition(G.matrixWorld),ye.color.copy(Q).multiplyScalar(we),ye.distance=re,ye.coneCos=Math.cos(G.angle),ye.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),ye.decay=G.decay,n.spot[b]=ye;const Te=G.shadow;if(G.map&&(n.spotLightMap[M]=G.map,M++,Te.updateMatrices(G),G.castShadow&&C++),n.spotLightMatrix[b]=Te.matrix,G.castShadow){const Ie=t.get(G);Ie.shadowIntensity=Te.intensity,Ie.shadowBias=Te.bias,Ie.shadowNormalBias=Te.normalBias,Ie.shadowRadius=Te.radius,Ie.shadowMapSize=Te.mapSize,n.spotShadow[b]=Ie,n.spotShadowMap[b]=Pe,U++}b++}else if(G.isRectAreaLight){const ye=e.get(G);ye.color.copy(Q).multiplyScalar(we),ye.halfWidth.set(G.width*.5,0,0),ye.halfHeight.set(0,G.height*.5,0),n.rectArea[P]=ye,P++}else if(G.isPointLight){const ye=e.get(G);if(ye.color.copy(G.color).multiplyScalar(G.intensity),ye.distance=G.distance,ye.decay=G.decay,G.castShadow){const Te=G.shadow,Ie=t.get(G);Ie.shadowIntensity=Te.intensity,Ie.shadowBias=Te.bias,Ie.shadowNormalBias=Te.normalBias,Ie.shadowRadius=Te.radius,Ie.shadowMapSize=Te.mapSize,Ie.shadowCameraNear=Te.camera.near,Ie.shadowCameraFar=Te.camera.far,n.pointShadow[p]=Ie,n.pointShadowMap[p]=Pe,n.pointShadowMatrix[p]=G.shadow.matrix,E++}n.point[p]=ye,p++}else if(G.isHemisphereLight){const ye=e.get(G);ye.skyColor.copy(G.color).multiplyScalar(we),ye.groundColor.copy(G.groundColor).multiplyScalar(we),n.hemi[S]=ye,S++}}P>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const k=n.hash;(k.sunLength!==h||k.directionalLength!==m||k.pointLength!==p||k.spotLength!==b||k.rectAreaLength!==P||k.hemiLength!==S||k.numSunShadows!==g||k.numDirectionalShadows!==T||k.numPointShadows!==E||k.numSpotShadows!==U||k.numSpotMaps!==M||k.numLightProbes!==F)&&(n.sun.length=h,n.directional.length=m,n.spot.length=b,n.rectArea.length=P,n.point.length=p,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=U,n.spotShadowMap.length=U,n.spotLightMatrix.length=U+M-C,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=F,k.sunLength=h,k.directionalLength=m,k.pointLength=p,k.spotLength=b,k.rectAreaLength=P,k.hemiLength=S,k.numSunShadows=g,k.numDirectionalShadows=T,k.numPointShadows=E,k.numSpotShadows=U,k.numSpotMaps=M,k.numLightProbes=F,n.version=J_++)}function c(l,u){let d=0,f=0,h=0,g=0,v=0,m=0;const p=u.matrixWorldInverse;for(let b=0,P=l.length;b<P;b++){const S=l[b];if(S.isSunLight){const T=n.sun[d];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(p),d++}else if(S.isDirectionalLight){const T=n.directional[f];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),f++}else if(S.isSpotLight){const T=n.spot[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const T=n.rectArea[v];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),o.identity(),r.copy(S.matrixWorld),r.premultiply(p),o.extractRotation(r),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const T=n.point[h];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),h++}else if(S.isHemisphereLight){const T=n.hemi[m];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:n}}function Af(i){const e=new j_(i),t=[],n=[],s=[];function r(f){d.camera=f,t.length=0,n.length=0,s.length=0}function o(f){t.push(f)}function a(f){n.push(f)}function c(f){s.push(f)}function l(){e.setup(t)}function u(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function e2(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Af(i),e.set(s,[a])):r>=o.length?(a=new Af(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const t2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n2=`uniform sampler2D shadow_pass;
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
}`,i2=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],s2=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],Cf=new Mn,$o=new A,Cc=new A;function r2(i,e,t){let n=new ju;const s=new je,r=new je,o=new ti,a=new um,c=new hm,l={},u=t.maxTextureSize,d={[Nr]:zi,[zi]:Nr,[Bn]:Bn},f=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:t2,fragmentShader:n2}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new Pn;g.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ut(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ta;let p=this.type;this.render=function(E,U,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===nd&&(rn("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ta);const C=i.getRenderTarget(),F=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Is),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const ie=p!==this.type;ie&&U.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(Q=>Q.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,Q=E.length;G<Q;G++){const we=E[G],re=we.shadow;if(re===void 0){rn("WebGLShadowMap:",we,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;s.copy(re.mapSize);const Pe=re.getFrameExtents();s.multiply(Pe),r.copy(re.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Pe.x),s.x=r.x*Pe.x,re.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Pe.y),s.y=r.y*Pe.y,re.mapSize.y=r.y));const ye=i.state.buffers.depth.getReversed();if(re.camera._reversedDepth=ye,re.map===null||ie===!0){if(re.map!==null&&(re.map.depthTexture!==null&&(re.map.depthTexture.dispose(),re.map.depthTexture=null),re.map.dispose()),this.type===Qo){if(we.isPointLight){rn("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}re.map=new Bi(s.x,s.y,{format:Fr,type:$i,minFilter:Li,magFilter:Li,generateMipmaps:!1}),re.map.texture.name=we.name+".shadowMap",re.map.depthTexture=new ha(s.x,s.y,_s),re.map.depthTexture.name=we.name+".shadowMapDepth",re.map.depthTexture.format=Qs,re.map.depthTexture.compareFunction=null,re.map.depthTexture.minFilter=_i,re.map.depthTexture.magFilter=_i}else we.isPointLight?(re.map=new D0(s.x),re.map.depthTexture=new Ap(s.x,Us)):(re.map=new Bi(s.x,s.y),re.map.depthTexture=new ha(s.x,s.y,Us)),re.map.depthTexture.name=we.name+".shadowMap",re.map.depthTexture.format=Qs,this.type===ta?(re.map.depthTexture.compareFunction=ye?Zu:qu,re.map.depthTexture.minFilter=Li,re.map.depthTexture.magFilter=Li):(re.map.depthTexture.compareFunction=null,re.map.depthTexture.minFilter=_i,re.map.depthTexture.magFilter=_i);re.camera.updateProjectionMatrix()}re.map.isWebGLCubeRenderTarget!==!0&&(re.map.width!==s.x||re.map.height!==s.y)&&re.map.setSize(s.x,s.y);const Te=re.map.isWebGLCubeRenderTarget?6:re.getViewportCount();we.isPointLight!==!0&&re.updateMatrices(we,M);for(let Ie=0;Ie<Te;Ie++){const yt=re.getCamera(Ie);if(we.isPointLight){const Et=re.camera,jt=re.matrix,W=we.distance||Et.far;W!==Et.far&&(Et.far=W,Et.updateProjectionMatrix()),$o.setFromMatrixPosition(we.matrixWorld),Et.position.copy($o),Cc.copy(Et.position),Cc.add(i2[Ie]),Et.up.copy(s2[Ie]),Et.lookAt(Cc),Et.updateMatrixWorld(),jt.makeTranslation(-$o.x,-$o.y,-$o.z),Cf.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),re._frustum.setFromProjectionMatrix(Cf,Et.coordinateSystem,Et.reversedDepth)}if(re.map.isWebGLCubeRenderTarget)i.setRenderTarget(re.map,Ie),i.clear();else{Ie===0&&(i.setRenderTarget(re.map),i.clear());const Et=re.getViewport(Ie);o.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),V.viewport(o)}n=re.getFrustum(Ie),S(U,M,yt,we,this.type)}re.isPointLightShadow!==!0&&this.type===Qo&&b(re,M),re.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(C,F,k)};function b(E,U){const M=e.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null?E.mapPass=new Bi(s.x,s.y,{format:Fr,type:$i}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(U,null,M,f,v,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(U,null,M,h,v,null)}function P(E,U,M,C){let F=null;const k=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(k!==void 0)F=k;else if(F=M.isPointLight===!0?c:a,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const V=F.uuid,ie=U.uuid;let G=l[V];G===void 0&&(G={},l[V]=G);let Q=G[ie];Q===void 0&&(Q=F.clone(),G[ie]=Q,U.addEventListener("dispose",T)),F=Q}if(F.visible=U.visible,F.wireframe=U.wireframe,C===Qo?F.side=U.shadowSide!==null?U.shadowSide:U.side:F.side=U.shadowSide!==null?U.shadowSide:d[U.side],F.alphaMap=U.alphaMap,F.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,F.map=U.map,F.clipShadows=U.clipShadows,F.clippingPlanes=U.clippingPlanes,F.clipIntersection=U.clipIntersection,F.displacementMap=U.displacementMap,F.displacementScale=U.displacementScale,F.displacementBias=U.displacementBias,F.wireframeLinewidth=U.wireframeLinewidth,F.linewidth=U.linewidth,M.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const V=i.properties.get(F);V.light=M}return F}function S(E,U,M,C,F){if(E.visible===!1)return;if(E.layers.test(U.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&F===Qo)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);const ie=e.update(E),G=E.material;if(Array.isArray(G)){const Q=ie.groups;for(let we=0,re=Q.length;we<re;we++){const Pe=Q[we],ye=G[Pe.materialIndex];if(ye&&ye.visible){const Te=P(E,ye,C,F);E.onBeforeShadow(i,E,U,M,ie,Te,Pe),i.renderBufferDirect(M,null,ie,Te,E,Pe),E.onAfterShadow(i,E,U,M,ie,Te,Pe)}}}else if(G.visible){const Q=P(E,G,C,F);E.onBeforeShadow(i,E,U,M,ie,Q,null),i.renderBufferDirect(M,null,ie,Q,E,null),E.onAfterShadow(i,E,U,M,ie,Q,null)}}const V=E.children;for(let ie=0,G=V.length;ie<G;ie++)S(V[ie],U,M,C,F)}function T(E){E.target.removeEventListener("dispose",T);for(const M in l){const C=l[M],F=E.target.uuid;F in C&&(C[F].dispose(),delete C[F])}}}function o2(i,e){function t(){let j=!1;const Ke=new ti;let ze=null;const St=new ti(0,0,0,0);return{setMask:function(At){ze!==At&&!j&&(i.colorMask(At,At,At,At),ze=At)},setLocked:function(At){j=At},setClear:function(At,qe,Bt,Dt,_n){_n===!0&&(At*=Dt,qe*=Dt,Bt*=Dt),Ke.set(At,qe,Bt,Dt),St.equals(Ke)===!1&&(i.clearColor(At,qe,Bt,Dt),St.copy(Ke))},reset:function(){j=!1,ze=null,St.set(-1,0,0,0)}}}function n(){let j=!1,Ke=!1,ze=null,St=null,At=null;return{setReversed:function(qe){if(Ke!==qe){const Bt=e.get("EXT_clip_control");qe?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),Ke=qe;const Dt=At;At=null,this.setClear(Dt)}},getReversed:function(){return Ke},setTest:function(qe){qe?$(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(qe){ze!==qe&&!j&&(i.depthMask(qe),ze=qe)},setFunc:function(qe){if(Ke&&(qe=Fd[qe]),St!==qe){switch(qe){case Uc:i.depthFunc(i.NEVER);break;case Fc:i.depthFunc(i.ALWAYS);break;case Oc:i.depthFunc(i.LESS);break;case aa:i.depthFunc(i.LEQUAL);break;case zc:i.depthFunc(i.EQUAL);break;case Bc:i.depthFunc(i.GEQUAL);break;case kc:i.depthFunc(i.GREATER);break;case Gc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=qe}},setLocked:function(qe){j=qe},setClear:function(qe){At!==qe&&(At=qe,Ke&&(qe=1-qe),i.clearDepth(qe))},reset:function(){j=!1,ze=null,St=null,At=null,Ke=!1}}}function s(){let j=!1,Ke=null,ze=null,St=null,At=null,qe=null,Bt=null,Dt=null,_n=null;return{setTest:function(ut){j||(ut?$(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(ut){Ke!==ut&&!j&&(i.stencilMask(ut),Ke=ut)},setFunc:function(ut,fn,gi){(ze!==ut||St!==fn||At!==gi)&&(i.stencilFunc(ut,fn,gi),ze=ut,St=fn,At=gi)},setOp:function(ut,fn,gi){(qe!==ut||Bt!==fn||Dt!==gi)&&(i.stencilOp(ut,fn,gi),qe=ut,Bt=fn,Dt=gi)},setLocked:function(ut){j=ut},setClear:function(ut){_n!==ut&&(i.clearStencil(ut),_n=ut)},reset:function(){j=!1,Ke=null,ze=null,St=null,At=null,qe=null,Bt=null,Dt=null,_n=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},f={},h=new WeakMap,g=[],v=null,m=!1,p=null,b=null,P=null,S=null,T=null,E=null,U=null,M=new ke(0,0,0),C=0,F=!1,k=null,V=null,ie=null,G=null,Q=null;const we=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,Pe=0;const ye=i.getParameter(i.VERSION);ye.indexOf("WebGL")!==-1?(Pe=parseFloat(/^WebGL (\d)/.exec(ye)[1]),re=Pe>=1):ye.indexOf("OpenGL ES")!==-1&&(Pe=parseFloat(/^OpenGL ES (\d)/.exec(ye)[1]),re=Pe>=2);let Te=null,Ie={};const yt=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),jt=new ti().fromArray(yt),W=new ti().fromArray(Et);function lt(j,Ke,ze,St){const At=new Uint8Array(4),qe=i.createTexture();i.bindTexture(j,qe),i.texParameteri(j,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(j,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<ze;Bt++)j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?i.texImage3D(Ke,0,i.RGBA,1,1,St,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(Ke+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return qe}const Se={};Se[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),Se[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Se[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(i.DEPTH_TEST),o.setFunc(aa),ve(!1),He(ph),$(i.CULL_FACE),ee(Is);function $(j){u[j]!==!0&&(i.enable(j),u[j]=!0)}function Ee(j){u[j]!==!1&&(i.disable(j),u[j]=!1)}function Ae(j,Ke){return f[j]!==Ke?(i.bindFramebuffer(j,Ke),f[j]=Ke,j===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Ke),j===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Ke),!0):!1}function Je(j,Ke){let ze=g,St=!1;if(j){ze=h.get(Ke),ze===void 0&&(ze=[],h.set(Ke,ze));const At=j.textures;if(ze.length!==At.length||ze[0]!==i.COLOR_ATTACHMENT0){for(let qe=0,Bt=At.length;qe<Bt;qe++)ze[qe]=i.COLOR_ATTACHMENT0+qe;ze.length=At.length,St=!0}}else ze[0]!==i.BACK&&(ze[0]=i.BACK,St=!0);St&&i.drawBuffers(ze)}function Ye(j){return v!==j?(i.useProgram(j),v=j,!0):!1}const xe={[ho]:i.FUNC_ADD,[sd]:i.FUNC_SUBTRACT,[rd]:i.FUNC_REVERSE_SUBTRACT};xe[od]=i.MIN,xe[ad]=i.MAX;const B={[ld]:i.ZERO,[cd]:i.ONE,[ud]:i.SRC_COLOR,[Kf]:i.SRC_ALPHA,[gd]:i.SRC_ALPHA_SATURATE,[pd]:i.DST_COLOR,[fd]:i.DST_ALPHA,[hd]:i.ONE_MINUS_SRC_COLOR,[Jf]:i.ONE_MINUS_SRC_ALPHA,[md]:i.ONE_MINUS_DST_COLOR,[dd]:i.ONE_MINUS_DST_ALPHA,[vd]:i.CONSTANT_COLOR,[_d]:i.ONE_MINUS_CONSTANT_COLOR,[xd]:i.CONSTANT_ALPHA,[Md]:i.ONE_MINUS_CONSTANT_ALPHA};function ee(j,Ke,ze,St,At,qe,Bt,Dt,_n,ut){if(j===Is){m===!0&&(Ee(i.BLEND),m=!1);return}if(m===!1&&($(i.BLEND),m=!0),j!==id){if(j!==p||ut!==F){if((b!==ho||T!==ho)&&(i.blendEquation(i.FUNC_ADD),b=ho,T=ho),ut)switch(j){case Mo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pi:i.blendFunc(i.ONE,i.ONE);break;case mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Rn("WebGLState: Invalid blending: ",j);break}else switch(j){case Mo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case mh:Rn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gh:Rn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rn("WebGLState: Invalid blending: ",j);break}P=null,S=null,E=null,U=null,M.set(0,0,0),C=0,p=j,F=ut}return}At=At||Ke,qe=qe||ze,Bt=Bt||St,(Ke!==b||At!==T)&&(i.blendEquationSeparate(xe[Ke],xe[At]),b=Ke,T=At),(ze!==P||St!==S||qe!==E||Bt!==U)&&(i.blendFuncSeparate(B[ze],B[St],B[qe],B[Bt]),P=ze,S=St,E=qe,U=Bt),(Dt.equals(M)===!1||_n!==C)&&(i.blendColor(Dt.r,Dt.g,Dt.b,_n),M.copy(Dt),C=_n),p=j,F=!1}function ue(j,Ke){j.side===Bn?Ee(i.CULL_FACE):$(i.CULL_FACE);let ze=j.side===zi;Ke&&(ze=!ze),ve(ze),j.blending===Mo&&j.transparent===!1?ee(Is):ee(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),o.setFunc(j.depthFunc),o.setTest(j.depthTest),o.setMask(j.depthWrite),r.setMask(j.colorWrite);const St=j.stencilWrite;a.setTest(St),St&&(a.setMask(j.stencilWriteMask),a.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),a.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),pt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function ve(j){k!==j&&(j?i.frontFace(i.CW):i.frontFace(i.CCW),k=j)}function He(j){j!==ed?($(i.CULL_FACE),j!==V&&(j===ph?i.cullFace(i.BACK):j===td?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),V=j}function vt(j){j!==ie&&(re&&i.lineWidth(j),ie=j)}function pt(j,Ke,ze){j?($(i.POLYGON_OFFSET_FILL),(G!==Ke||Q!==ze)&&(G=Ke,Q=ze,o.getReversed()&&(Ke=-Ke),i.polygonOffset(Ke,ze))):Ee(i.POLYGON_OFFSET_FILL)}function ce(j){j?$(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function Xe(j){j===void 0&&(j=i.TEXTURE0+we-1),Te!==j&&(i.activeTexture(j),Te=j)}function D(j,Ke,ze){ze===void 0&&(Te===null?ze=i.TEXTURE0+we-1:ze=Te);let St=Ie[ze];St===void 0&&(St={type:void 0,texture:void 0},Ie[ze]=St),(St.type!==j||St.texture!==Ke)&&(Te!==ze&&(i.activeTexture(ze),Te=ze),i.bindTexture(j,Ke||Se[j]),St.type=j,St.texture=Ke)}function Ve(){const j=Ie[Te];j!==void 0&&j.type!==void 0&&(i.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function tt(){try{i.compressedTexImage2D(...arguments)}catch(j){Rn("WebGLState:",j)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(j){Rn("WebGLState:",j)}}function _(){try{i.texSubImage2D(...arguments)}catch(j){Rn("WebGLState:",j)}}function J(){try{i.texSubImage3D(...arguments)}catch(j){Rn("WebGLState:",j)}}function pe(){try{i.compressedTexSubImage2D(...arguments)}catch(j){Rn("WebGLState:",j)}}function Re(){try{i.compressedTexSubImage3D(...arguments)}catch(j){Rn("WebGLState:",j)}}function et(){try{i.texStorage2D(...arguments)}catch(j){Rn("WebGLState:",j)}}function Qe(){try{i.texStorage3D(...arguments)}catch(j){Rn("WebGLState:",j)}}function Le(){try{i.texImage2D(...arguments)}catch(j){Rn("WebGLState:",j)}}function Oe(){try{i.texImage3D(...arguments)}catch(j){Rn("WebGLState:",j)}}function ct(j){return d[j]!==void 0?d[j]:i.getParameter(j)}function Ft(j,Ke){d[j]!==Ke&&(i.pixelStorei(j,Ke),d[j]=Ke)}function rt(j){jt.equals(j)===!1&&(i.scissor(j.x,j.y,j.z,j.w),jt.copy(j))}function Be(j){W.equals(j)===!1&&(i.viewport(j.x,j.y,j.z,j.w),W.copy(j))}function Ct(j,Ke){let ze=l.get(Ke);ze===void 0&&(ze=new WeakMap,l.set(Ke,ze));let St=ze.get(j);St===void 0&&(St=i.getUniformBlockIndex(Ke,j.name),ze.set(j,St))}function Tt(j,Ke){const St=l.get(Ke).get(j);c.get(Ke)!==St&&(i.uniformBlockBinding(Ke,St,j.__bindingPointIndex),c.set(Ke,St))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},Te=null,Ie={},f={},h=new WeakMap,g=[],v=null,m=!1,p=null,b=null,P=null,S=null,T=null,E=null,U=null,M=new ke(0,0,0),C=0,F=!1,k=null,V=null,ie=null,G=null,Q=null,jt.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:Ee,bindFramebuffer:Ae,drawBuffers:Je,useProgram:Ye,setBlending:ee,setMaterial:ue,setFlipSided:ve,setCullFace:He,setLineWidth:vt,setPolygonOffset:pt,setScissorTest:ce,activeTexture:Xe,bindTexture:D,unbindTexture:Ve,compressedTexImage2D:tt,compressedTexImage3D:R,texImage2D:Le,texImage3D:Oe,pixelStorei:Ft,getParameter:ct,updateUBOMapping:Ct,uniformBlockBinding:Tt,texStorage2D:et,texStorage3D:Qe,texSubImage2D:_,texSubImage3D:J,compressedTexSubImage2D:pe,compressedTexSubImage3D:Re,scissor:rt,viewport:Be,reset:Xt}}function a2(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new je,u=new WeakMap,d=new Set;let f;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,_){return g?new OffscreenCanvas(R,_):bl("canvas")}function m(R,_,J){let pe=1;const Re=tt(R);if((Re.width>J||Re.height>J)&&(pe=J/Math.max(Re.width,Re.height)),pe<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const et=Math.floor(pe*Re.width),Qe=Math.floor(pe*Re.height);f===void 0&&(f=v(et,Qe));const Le=_?v(et,Qe):f;return Le.width=et,Le.height=Qe,Le.getContext("2d").drawImage(R,0,0,et,Qe),rn("WebGLRenderer: Texture has been resized from ("+Re.width+"x"+Re.height+") to ("+et+"x"+Qe+")."),Le}else return"data"in R&&rn("WebGLRenderer: Image in DataTexture is too big ("+Re.width+"x"+Re.height+")."),R;return R}function p(R){return R.generateMipmaps}function b(R){i.generateMipmap(R)}function P(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,_,J,pe,Re,et=!1){if(R!==null){if(i[R]!==void 0)return i[R];rn("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Qe;pe&&(Qe=e.get("EXT_texture_norm16"),Qe||rn("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Le=_;if(_===i.RED&&(J===i.FLOAT&&(Le=i.R32F),J===i.HALF_FLOAT&&(Le=i.R16F),J===i.UNSIGNED_BYTE&&(Le=i.R8),J===i.UNSIGNED_SHORT&&Qe&&(Le=Qe.R16_EXT),J===i.SHORT&&Qe&&(Le=Qe.R16_SNORM_EXT)),_===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(Le=i.R8UI),J===i.UNSIGNED_SHORT&&(Le=i.R16UI),J===i.UNSIGNED_INT&&(Le=i.R32UI),J===i.BYTE&&(Le=i.R8I),J===i.SHORT&&(Le=i.R16I),J===i.INT&&(Le=i.R32I)),_===i.RG&&(J===i.FLOAT&&(Le=i.RG32F),J===i.HALF_FLOAT&&(Le=i.RG16F),J===i.UNSIGNED_BYTE&&(Le=i.RG8),J===i.UNSIGNED_SHORT&&Qe&&(Le=Qe.RG16_EXT),J===i.SHORT&&Qe&&(Le=Qe.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(Le=i.RG8UI),J===i.UNSIGNED_SHORT&&(Le=i.RG16UI),J===i.UNSIGNED_INT&&(Le=i.RG32UI),J===i.BYTE&&(Le=i.RG8I),J===i.SHORT&&(Le=i.RG16I),J===i.INT&&(Le=i.RG32I)),_===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(Le=i.RGB8UI),J===i.UNSIGNED_SHORT&&(Le=i.RGB16UI),J===i.UNSIGNED_INT&&(Le=i.RGB32UI),J===i.BYTE&&(Le=i.RGB8I),J===i.SHORT&&(Le=i.RGB16I),J===i.INT&&(Le=i.RGB32I)),_===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(Le=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(Le=i.RGBA16UI),J===i.UNSIGNED_INT&&(Le=i.RGBA32UI),J===i.BYTE&&(Le=i.RGBA8I),J===i.SHORT&&(Le=i.RGBA16I),J===i.INT&&(Le=i.RGBA32I)),_===i.RGB&&(J===i.UNSIGNED_SHORT&&Qe&&(Le=Qe.RGB16_EXT),J===i.SHORT&&Qe&&(Le=Qe.RGB16_SNORM_EXT),J===i.UNSIGNED_INT_5_9_9_9_REV&&(Le=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(Le=i.R11F_G11F_B10F)),_===i.RGBA){const Oe=et?Sl:En.getTransfer(Re);J===i.FLOAT&&(Le=i.RGBA32F),J===i.HALF_FLOAT&&(Le=i.RGBA16F),J===i.UNSIGNED_BYTE&&(Le=Oe===Fn?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT&&Qe&&(Le=Qe.RGBA16_EXT),J===i.SHORT&&Qe&&(Le=Qe.RGBA16_SNORM_EXT),J===i.UNSIGNED_SHORT_4_4_4_4&&(Le=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(Le=i.RGB5_A1)}return(Le===i.R16F||Le===i.R32F||Le===i.RG16F||Le===i.RG32F||Le===i.RGBA16F||Le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Le}function T(R,_){let J;return R?_===null||_===Us||_===ca?J=i.DEPTH24_STENCIL8:_===_s?J=i.DEPTH32F_STENCIL8:_===la&&(J=i.DEPTH24_STENCIL8,rn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Us||_===ca?J=i.DEPTH_COMPONENT24:_===_s?J=i.DEPTH_COMPONENT32F:_===la&&(J=i.DEPTH_COMPONENT16),J}function E(R,_){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==_i&&R.minFilter!==Li?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function U(R){const _=R.target;_.removeEventListener("dispose",U),C(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function M(R){const _=R.target;_.removeEventListener("dispose",M),k(_)}function C(R){const _=n.get(R);if(_.__webglInit===void 0)return;const J=R.source,pe=h.get(J);if(pe){const Re=pe[_.__cacheKey];Re.usedTimes--,Re.usedTimes===0&&F(R),Object.keys(pe).length===0&&h.delete(J)}n.remove(R)}function F(R){const _=n.get(R);i.deleteTexture(_.__webglTexture);const J=R.source,pe=h.get(J);delete pe[_.__cacheKey],o.memory.textures--}function k(R){const _=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(_.__webglFramebuffer[pe]))for(let Re=0;Re<_.__webglFramebuffer[pe].length;Re++)i.deleteFramebuffer(_.__webglFramebuffer[pe][Re]);else i.deleteFramebuffer(_.__webglFramebuffer[pe]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[pe])}else{if(Array.isArray(_.__webglFramebuffer))for(let pe=0;pe<_.__webglFramebuffer.length;pe++)i.deleteFramebuffer(_.__webglFramebuffer[pe]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let pe=0;pe<_.__webglColorRenderbuffer.length;pe++)_.__webglColorRenderbuffer[pe]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[pe]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const J=R.textures;for(let pe=0,Re=J.length;pe<Re;pe++){const et=n.get(J[pe]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(J[pe])}n.remove(R)}let V=0;function ie(){V=0}function G(){return V}function Q(R){V=R}function we(){const R=V;return R>=s.maxTextures&&rn("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,R}function re(R){const _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function Pe(R,_){const J=n.get(R);if(R.isVideoTexture&&D(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&J.__version!==R.version){const pe=R.image;if(pe===null)rn("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)rn("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(J,R,_);return}}else R.isExternalTexture&&(J.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+_)}function ye(R,_){const J=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&J.__version!==R.version){Ee(J,R,_);return}else R.isExternalTexture&&(J.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+_)}function Te(R,_){const J=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&J.__version!==R.version){Ee(J,R,_);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+_)}function Ie(R,_){const J=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&J.__version!==R.version){Ae(J,R,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+_)}const yt={[Co]:i.REPEAT,[on]:i.CLAMP_TO_EDGE,[Hc]:i.MIRRORED_REPEAT},Et={[_i]:i.NEAREST,[bd]:i.NEAREST_MIPMAP_NEAREST,[Sa]:i.NEAREST_MIPMAP_LINEAR,[Li]:i.LINEAR,[ql]:i.LINEAR_MIPMAP_NEAREST,[Cr]:i.LINEAR_MIPMAP_LINEAR},jt={[Ad]:i.NEVER,[Id]:i.ALWAYS,[Cd]:i.LESS,[qu]:i.LEQUAL,[Rd]:i.EQUAL,[Zu]:i.GEQUAL,[Pd]:i.GREATER,[Ld]:i.NOTEQUAL};function W(R,_){if(_.type===_s&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Li||_.magFilter===ql||_.magFilter===Sa||_.magFilter===Cr||_.minFilter===Li||_.minFilter===ql||_.minFilter===Sa||_.minFilter===Cr)&&rn("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,yt[_.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,yt[_.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,yt[_.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Et[_.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Et[_.minFilter]),_.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,jt[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===_i||_.minFilter!==Sa&&_.minFilter!==Cr||_.type===_s&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function lt(R,_){let J=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",U));const pe=_.source;let Re=h.get(pe);Re===void 0&&(Re={},h.set(pe,Re));const et=re(_);if(et!==R.__cacheKey){Re[et]===void 0&&(Re[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,J=!0),Re[et].usedTimes++;const Qe=Re[R.__cacheKey];Qe!==void 0&&(Re[R.__cacheKey].usedTimes--,Qe.usedTimes===0&&F(_)),R.__cacheKey=et,R.__webglTexture=Re[et].texture}return J}function Se(R,_,J){return Math.floor(Math.floor(R/J)/_)}function $(R,_,J,pe){const et=R.updateRanges;if(et.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,J,pe,_.data);else{et.sort((Ft,rt)=>Ft.start-rt.start);let Qe=0;for(let Ft=1;Ft<et.length;Ft++){const rt=et[Qe],Be=et[Ft],Ct=rt.start+rt.count,Tt=Se(Be.start,_.width,4),Xt=Se(rt.start,_.width,4);Be.start<=Ct+1&&Tt===Xt&&Se(Be.start+Be.count-1,_.width,4)===Tt?rt.count=Math.max(rt.count,Be.start+Be.count-rt.start):(++Qe,et[Qe]=Be)}et.length=Qe+1;const Le=t.getParameter(i.UNPACK_ROW_LENGTH),Oe=t.getParameter(i.UNPACK_SKIP_PIXELS),ct=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Ft=0,rt=et.length;Ft<rt;Ft++){const Be=et[Ft],Ct=Math.floor(Be.start/4),Tt=Math.ceil(Be.count/4),Xt=Ct%_.width,j=Math.floor(Ct/_.width),Ke=Tt,ze=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Xt),t.pixelStorei(i.UNPACK_SKIP_ROWS,j),t.texSubImage2D(i.TEXTURE_2D,0,Xt,j,Ke,ze,J,pe,_.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Le),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,ct)}}function Ee(R,_,J){let pe=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(pe=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(pe=i.TEXTURE_3D);const Re=lt(R,_),et=_.source;t.bindTexture(pe,R.__webglTexture,i.TEXTURE0+J);const Qe=n.get(et);if(et.version!==Qe.__version||Re===!0){if(t.activeTexture(i.TEXTURE0+J),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const ze=En.getPrimaries(En.workingColorSpace),St=_.colorSpace===Zs?null:En.getPrimaries(_.colorSpace),At=_.colorSpace===Zs||ze===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let Oe=m(_.image,!1,s.maxTextureSize);Oe=Ve(_,Oe);const ct=r.convert(_.format,_.colorSpace),Ft=r.convert(_.type);let rt=S(_.internalFormat,ct,Ft,_.normalized,_.colorSpace,_.isVideoTexture);W(pe,_);let Be;const Ct=_.mipmaps,Tt=_.isVideoTexture!==!0,Xt=Qe.__version===void 0||Re===!0,j=et.dataReady,Ke=E(_,Oe);if(_.isDepthTexture)rt=T(_.format===Rr,_.type),Xt&&(Tt?t.texStorage2D(i.TEXTURE_2D,1,rt,Oe.width,Oe.height):t.texImage2D(i.TEXTURE_2D,0,rt,Oe.width,Oe.height,0,ct,Ft,null));else if(_.isDataTexture)if(Ct.length>0){Tt&&Xt&&t.texStorage2D(i.TEXTURE_2D,Ke,rt,Ct[0].width,Ct[0].height);for(let ze=0,St=Ct.length;ze<St;ze++)Be=Ct[ze],Tt?j&&t.texSubImage2D(i.TEXTURE_2D,ze,0,0,Be.width,Be.height,ct,Ft,Be.data):t.texImage2D(i.TEXTURE_2D,ze,rt,Be.width,Be.height,0,ct,Ft,Be.data);_.generateMipmaps=!1}else Tt?(Xt&&t.texStorage2D(i.TEXTURE_2D,Ke,rt,Oe.width,Oe.height),j&&$(_,Oe,ct,Ft)):t.texImage2D(i.TEXTURE_2D,0,rt,Oe.width,Oe.height,0,ct,Ft,Oe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Tt&&Xt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ke,rt,Ct[0].width,Ct[0].height,Oe.depth);for(let ze=0,St=Ct.length;ze<St;ze++)if(Be=Ct[ze],_.format!==xs)if(ct!==null)if(Tt){if(j)if(_.layerUpdates.size>0){const At=af(Be.width,Be.height,_.format,_.type);for(const qe of _.layerUpdates){const Bt=Be.data.subarray(qe*At/Be.data.BYTES_PER_ELEMENT,(qe+1)*At/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ze,0,0,qe,Be.width,Be.height,1,ct,Bt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ze,0,0,0,Be.width,Be.height,Oe.depth,ct,Be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ze,rt,Be.width,Be.height,Oe.depth,0,Be.data,0,0);else rn("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Tt?j&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ze,0,0,0,Be.width,Be.height,Oe.depth,ct,Ft,Be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ze,rt,Be.width,Be.height,Oe.depth,0,ct,Ft,Be.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Tt&&Xt&&t.texStorage2D(i.TEXTURE_2D,Ke,rt,Ct[0].width,Ct[0].height);for(let ze=0,St=Ct.length;ze<St;ze++)Be=Ct[ze],_.format!==xs?ct!==null?Tt?j&&t.compressedTexSubImage2D(i.TEXTURE_2D,ze,0,0,Be.width,Be.height,ct,Be.data):t.compressedTexImage2D(i.TEXTURE_2D,ze,rt,Be.width,Be.height,0,Be.data):rn("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Tt?j&&t.texSubImage2D(i.TEXTURE_2D,ze,0,0,Be.width,Be.height,ct,Ft,Be.data):t.texImage2D(i.TEXTURE_2D,ze,rt,Be.width,Be.height,0,ct,Ft,Be.data)}else if(_.isDataArrayTexture)if(Tt){if(Xt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ke,rt,Oe.width,Oe.height,Oe.depth),j)if(_.layerUpdates.size>0){const ze=af(Oe.width,Oe.height,_.format,_.type);for(const St of _.layerUpdates){const At=Oe.data.subarray(St*ze/Oe.data.BYTES_PER_ELEMENT,(St+1)*ze/Oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,St,Oe.width,Oe.height,1,ct,Ft,At)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Oe.width,Oe.height,Oe.depth,ct,Ft,Oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,rt,Oe.width,Oe.height,Oe.depth,0,ct,Ft,Oe.data);else if(_.isData3DTexture)Tt?(Xt&&t.texStorage3D(i.TEXTURE_3D,Ke,rt,Oe.width,Oe.height,Oe.depth),j&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Oe.width,Oe.height,Oe.depth,ct,Ft,Oe.data)):t.texImage3D(i.TEXTURE_3D,0,rt,Oe.width,Oe.height,Oe.depth,0,ct,Ft,Oe.data);else if(_.isFramebufferTexture){if(Xt)if(Tt)t.texStorage2D(i.TEXTURE_2D,Ke,rt,Oe.width,Oe.height);else{let ze=Oe.width,St=Oe.height;for(let At=0;At<Ke;At++)t.texImage2D(i.TEXTURE_2D,At,rt,ze,St,0,ct,Ft,null),ze>>=1,St>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const ze=i.canvas;if(ze.hasAttribute("layoutsubtree")||ze.setAttribute("layoutsubtree","true"),Oe.parentNode!==ze){ze.appendChild(Oe),d.add(_),ze.onpaint=St=>{const At=St.changedElements;for(const qe of d)At.includes(qe.image)&&(qe.needsUpdate=!0)},ze.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Oe);else{const At=i.RGBA,qe=i.RGBA,Bt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,At,qe,Bt,Oe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ct.length>0){if(Tt&&Xt){const ze=tt(Ct[0]);t.texStorage2D(i.TEXTURE_2D,Ke,rt,ze.width,ze.height)}for(let ze=0,St=Ct.length;ze<St;ze++)Be=Ct[ze],Tt?j&&t.texSubImage2D(i.TEXTURE_2D,ze,0,0,ct,Ft,Be):t.texImage2D(i.TEXTURE_2D,ze,rt,ct,Ft,Be);_.generateMipmaps=!1}else if(Tt){if(Xt){const ze=tt(Oe);t.texStorage2D(i.TEXTURE_2D,Ke,rt,ze.width,ze.height)}j&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,Ft,Oe)}else t.texImage2D(i.TEXTURE_2D,0,rt,ct,Ft,Oe);p(_)&&b(pe),Qe.__version=et.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Ae(R,_,J){if(_.image.length!==6)return;const pe=lt(R,_),Re=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+J);const et=n.get(Re);if(Re.version!==et.__version||pe===!0){t.activeTexture(i.TEXTURE0+J);const Qe=En.getPrimaries(En.workingColorSpace),Le=_.colorSpace===Zs?null:En.getPrimaries(_.colorSpace),Oe=_.colorSpace===Zs||Qe===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const ct=_.isCompressedTexture||_.image[0].isCompressedTexture,Ft=_.image[0]&&_.image[0].isDataTexture,rt=[];for(let qe=0;qe<6;qe++)!ct&&!Ft?rt[qe]=m(_.image[qe],!0,s.maxCubemapSize):rt[qe]=Ft?_.image[qe].image:_.image[qe],rt[qe]=Ve(_,rt[qe]);const Be=rt[0],Ct=r.convert(_.format,_.colorSpace),Tt=r.convert(_.type),Xt=S(_.internalFormat,Ct,Tt,_.normalized,_.colorSpace),j=_.isVideoTexture!==!0,Ke=et.__version===void 0||pe===!0,ze=Re.dataReady;let St=E(_,Be);W(i.TEXTURE_CUBE_MAP,_);let At;if(ct){j&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,St,Xt,Be.width,Be.height);for(let qe=0;qe<6;qe++){At=rt[qe].mipmaps;for(let Bt=0;Bt<At.length;Bt++){const Dt=At[Bt];_.format!==xs?Ct!==null?j?ze&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Bt,0,0,Dt.width,Dt.height,Ct,Dt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Bt,Xt,Dt.width,Dt.height,0,Dt.data):rn("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Bt,0,0,Dt.width,Dt.height,Ct,Tt,Dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Bt,Xt,Dt.width,Dt.height,0,Ct,Tt,Dt.data)}}}else{if(At=_.mipmaps,j&&Ke){At.length>0&&St++;const qe=tt(rt[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,St,Xt,qe.width,qe.height)}for(let qe=0;qe<6;qe++)if(Ft){j?ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0,0,0,rt[qe].width,rt[qe].height,Ct,Tt,rt[qe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0,Xt,rt[qe].width,rt[qe].height,0,Ct,Tt,rt[qe].data);for(let Bt=0;Bt<At.length;Bt++){const _n=At[Bt].image[qe].image;j?ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Bt+1,0,0,_n.width,_n.height,Ct,Tt,_n.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Bt+1,Xt,_n.width,_n.height,0,Ct,Tt,_n.data)}}else{j?ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0,0,0,Ct,Tt,rt[qe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0,Xt,Ct,Tt,rt[qe]);for(let Bt=0;Bt<At.length;Bt++){const Dt=At[Bt];j?ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Bt+1,0,0,Ct,Tt,Dt.image[qe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Bt+1,Xt,Ct,Tt,Dt.image[qe])}}}p(_)&&b(i.TEXTURE_CUBE_MAP),et.__version=Re.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Je(R,_,J,pe,Re,et){const Qe=r.convert(J.format,J.colorSpace),Le=r.convert(J.type),Oe=S(J.internalFormat,Qe,Le,J.normalized,J.colorSpace),ct=n.get(_),Ft=n.get(J);if(Ft.__renderTarget=_,!ct.__hasExternalTextures){const rt=Math.max(1,_.width>>et),Be=Math.max(1,_.height>>et);Re===i.TEXTURE_3D||Re===i.TEXTURE_2D_ARRAY?t.texImage3D(Re,et,Oe,rt,Be,_.depth,0,Qe,Le,null):t.texImage2D(Re,et,Oe,rt,Be,0,Qe,Le,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Xe(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,Re,Ft.__webglTexture,0,ce(_)):(Re===i.TEXTURE_2D||Re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pe,Re,Ft.__webglTexture,et),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(R,_,J){if(i.bindRenderbuffer(i.RENDERBUFFER,R),_.depthBuffer){const pe=_.depthTexture,Re=pe&&pe.isDepthTexture?pe.type:null,et=T(_.stencilBuffer,Re),Qe=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Xe(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(_),et,_.width,_.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(_),et,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,et,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Qe,i.RENDERBUFFER,R)}else{const pe=_.textures;for(let Re=0;Re<pe.length;Re++){const et=pe[Re],Qe=r.convert(et.format,et.colorSpace),Le=r.convert(et.type),Oe=S(et.internalFormat,Qe,Le,et.normalized,et.colorSpace);Xe(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(_),Oe,_.width,_.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(_),Oe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Oe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xe(R,_,J){const pe=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Re=n.get(_.depthTexture);if(Re.__renderTarget=_,(!Re.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),pe){if(Re.__webglInit===void 0&&(Re.__webglInit=!0,_.depthTexture.addEventListener("dispose",U)),Re.__webglTexture===void 0){Re.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Re.__webglTexture),W(i.TEXTURE_CUBE_MAP,_.depthTexture);const ct=r.convert(_.depthTexture.format),Ft=r.convert(_.depthTexture.type);let rt;_.depthTexture.format===Qs?rt=i.DEPTH_COMPONENT24:_.depthTexture.format===Rr&&(rt=i.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,rt,_.width,_.height,0,ct,Ft,null)}}else Pe(_.depthTexture,0);const et=Re.__webglTexture,Qe=ce(_),Le=pe?i.TEXTURE_CUBE_MAP_POSITIVE_X+J:i.TEXTURE_2D,Oe=_.depthTexture.format===Rr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Qs)Xe(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Oe,Le,et,0,Qe):i.framebufferTexture2D(i.FRAMEBUFFER,Oe,Le,et,0);else if(_.depthTexture.format===Rr)Xe(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Oe,Le,et,0,Qe):i.framebufferTexture2D(i.FRAMEBUFFER,Oe,Le,et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function B(R){const _=n.get(R),J=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){const pe=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),pe){const Re=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,pe.removeEventListener("dispose",Re)};pe.addEventListener("dispose",Re),_.__depthDisposeCallback=Re}_.__boundDepthTexture=pe}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(J)for(let pe=0;pe<6;pe++)xe(_.__webglFramebuffer[pe],R,pe);else{const pe=R.texture.mipmaps;pe&&pe.length>0?xe(_.__webglFramebuffer[0],R,0):xe(_.__webglFramebuffer,R,0)}else if(J){_.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[pe]),_.__webglDepthbuffer[pe]===void 0)_.__webglDepthbuffer[pe]=i.createRenderbuffer(),Ye(_.__webglDepthbuffer[pe],R,!1);else{const Re=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=_.__webglDepthbuffer[pe];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,et)}}else{const pe=R.texture.mipmaps;if(pe&&pe.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ye(_.__webglDepthbuffer,R,!1);else{const Re=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,et)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(R,_,J){const pe=n.get(R);_!==void 0&&Je(pe.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&B(R)}function ue(R){const _=R.texture,J=n.get(R),pe=n.get(_);R.addEventListener("dispose",M);const Re=R.textures,et=R.isWebGLCubeRenderTarget===!0,Qe=Re.length>1;if(Qe||(pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture()),pe.__version=_.version,o.memory.textures++),et){J.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(_.mipmaps&&_.mipmaps.length>0){J.__webglFramebuffer[Le]=[];for(let Oe=0;Oe<_.mipmaps.length;Oe++)J.__webglFramebuffer[Le][Oe]=i.createFramebuffer()}else J.__webglFramebuffer[Le]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){J.__webglFramebuffer=[];for(let Le=0;Le<_.mipmaps.length;Le++)J.__webglFramebuffer[Le]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Qe)for(let Le=0,Oe=Re.length;Le<Oe;Le++){const ct=n.get(Re[Le]);ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Xe(R)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Le=0;Le<Re.length;Le++){const Oe=Re[Le];J.__webglColorRenderbuffer[Le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Le]);const ct=r.convert(Oe.format,Oe.colorSpace),Ft=r.convert(Oe.type),rt=S(Oe.internalFormat,ct,Ft,Oe.normalized,Oe.colorSpace,R.isXRRenderTarget===!0),Be=ce(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,rt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,J.__webglColorRenderbuffer[Le])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),Ye(J.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){t.bindTexture(i.TEXTURE_CUBE_MAP,pe.__webglTexture),W(i.TEXTURE_CUBE_MAP,_);for(let Le=0;Le<6;Le++)if(_.mipmaps&&_.mipmaps.length>0)for(let Oe=0;Oe<_.mipmaps.length;Oe++)Je(J.__webglFramebuffer[Le][Oe],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Oe);else Je(J.__webglFramebuffer[Le],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);p(_)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Qe){for(let Le=0,Oe=Re.length;Le<Oe;Le++){const ct=Re[Le],Ft=n.get(ct);let rt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(rt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(rt,Ft.__webglTexture),W(rt,ct),Je(J.__webglFramebuffer,R,ct,i.COLOR_ATTACHMENT0+Le,rt,0),p(ct)&&b(rt)}t.unbindTexture()}else{let Le=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Le=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Le,pe.__webglTexture),W(Le,_),_.mipmaps&&_.mipmaps.length>0)for(let Oe=0;Oe<_.mipmaps.length;Oe++)Je(J.__webglFramebuffer[Oe],R,_,i.COLOR_ATTACHMENT0,Le,Oe);else Je(J.__webglFramebuffer,R,_,i.COLOR_ATTACHMENT0,Le,0);p(_)&&b(Le),t.unbindTexture()}R.depthBuffer&&B(R)}function ve(R){const _=R.textures;for(let J=0,pe=_.length;J<pe;J++){const Re=_[J];if(p(Re)){const et=P(R),Qe=n.get(Re).__webglTexture;t.bindTexture(et,Qe),b(et),t.unbindTexture()}}}const He=[],vt=[];function pt(R){if(R.samples>0){if(Xe(R)===!1){const _=R.textures,J=R.width,pe=R.height;let Re=i.COLOR_BUFFER_BIT;const et=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Qe=n.get(R),Le=_.length>1;if(Le)for(let ct=0;ct<_.length;ct++)t.bindFramebuffer(i.FRAMEBUFFER,Qe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Qe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Qe.__webglMultisampledFramebuffer);const Oe=R.texture.mipmaps;Oe&&Oe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Qe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Qe.__webglFramebuffer);for(let ct=0;ct<_.length;ct++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Re|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Re|=i.STENCIL_BUFFER_BIT)),Le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Qe.__webglColorRenderbuffer[ct]);const Ft=n.get(_[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ft,0)}i.blitFramebuffer(0,0,J,pe,0,0,J,pe,Re,i.NEAREST),c===!0&&(He.length=0,vt.length=0,He.push(i.COLOR_ATTACHMENT0+ct),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(He.push(et),vt.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Le)for(let ct=0;ct<_.length;ct++){t.bindFramebuffer(i.FRAMEBUFFER,Qe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,Qe.__webglColorRenderbuffer[ct]);const Ft=n.get(_[ct]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Qe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,Ft,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Qe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){const _=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ce(R){return Math.min(s.maxSamples,R.samples)}function Xe(R){const _=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function D(R){const _=o.render.frame;u.get(R)!==_&&(u.set(R,_),R.update())}function Ve(R,_){const J=R.colorSpace,pe=R.format,Re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||J!==yl&&J!==Zs&&(En.getTransfer(J)===Fn?(pe!==xs||Re!==ts)&&rn("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rn("WebGLTextures: Unsupported texture color space:",J)),_}function tt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=we,this.resetTextureUnits=ie,this.getTextureUnits=G,this.setTextureUnits=Q,this.setTexture2D=Pe,this.setTexture2DArray=ye,this.setTexture3D=Te,this.setTextureCube=Ie,this.rebindTextures=ee,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=Xe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function l2(i,e){function t(n,s=Zs){let r;const o=En.getTransfer(s);if(n===ts)return i.UNSIGNED_BYTE;if(n===Gu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Hu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===n0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===i0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===e0)return i.BYTE;if(n===t0)return i.SHORT;if(n===la)return i.UNSIGNED_SHORT;if(n===ku)return i.INT;if(n===Us)return i.UNSIGNED_INT;if(n===_s)return i.FLOAT;if(n===$i)return i.HALF_FLOAT;if(n===s0)return i.ALPHA;if(n===r0)return i.RGB;if(n===xs)return i.RGBA;if(n===Qs)return i.DEPTH_COMPONENT;if(n===Rr)return i.DEPTH_STENCIL;if(n===Vu)return i.RED;if(n===Wu)return i.RED_INTEGER;if(n===Fr)return i.RG;if(n===Xu)return i.RG_INTEGER;if(n===Yu)return i.RGBA_INTEGER;if(n===ll||n===cl||n===ul||n===hl)if(o===Fn)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ll)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ul)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ll)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ul)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vc||n===Wc||n===Xc||n===Yc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qc||n===Zc||n===$c||n===Kc||n===Jc||n===xl||n===Qc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qc||n===Zc)return o===Fn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$c)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Kc)return r.COMPRESSED_R11_EAC;if(n===Jc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===xl)return r.COMPRESSED_RG11_EAC;if(n===Qc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===jc||n===eu||n===tu||n===nu||n===iu||n===su||n===ru||n===ou||n===au||n===lu||n===cu||n===uu||n===hu||n===fu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jc)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===eu)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tu)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nu)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===iu)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===su)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ru)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ou)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===au)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lu)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cu)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uu)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hu)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fu)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===du||n===pu||n===mu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===du)return o===Fn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gu||n===vu||n===Ml||n===_u)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===gu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ml)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_u)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ca?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const c2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u2=`
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

}`;class h2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new g0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new xi({vertexShader:c2,fragmentShader:u2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class f2 extends kr{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null;const v=typeof XRWebGLBinding<"u",m=new h2,p={},b=t.getContextAttributes();let P=null,S=null;const T=[],E=[],U=new je;let M=null,C=null;const F=new qi;F.viewport=new ti;const k=new qi;k.viewport=new ti;const V=[F,k],ie=new _m;let G=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Se){let $=T[Se];return $===void 0&&($=new ec,T[Se]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Se){let $=T[Se];return $===void 0&&($=new ec,T[Se]=$),$.getGripSpace()},this.getHand=function(Se){let $=T[Se];return $===void 0&&($=new ec,T[Se]=$),$.getHandSpace()};function we(Se){const $=E.indexOf(Se.inputSource);if($===-1)return;const Ee=T[$];Ee!==void 0&&(Ee.update(Se.inputSource,Se.frame,l||o),Ee.dispatchEvent({type:Se.type,data:Se.inputSource}))}function re(){s.removeEventListener("select",we),s.removeEventListener("selectstart",we),s.removeEventListener("selectend",we),s.removeEventListener("squeeze",we),s.removeEventListener("squeezestart",we),s.removeEventListener("squeezeend",we),s.removeEventListener("end",re),s.removeEventListener("inputsourceschange",Pe);for(let Se=0;Se<T.length;Se++){const $=E[Se];$!==null&&(E[Se]=null,T[Se].disconnect($))}G=null,Q=null,m.reset();for(const Se in p)delete p[Se];if(e.setRenderTarget(P),h=null,f=null,d=null,s=null,S=null,lt.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(U.width,U.height,!1),C!==null){const Se=C.camera;Se.fov=C.fov,Se.zoom=C.zoom,Se.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Se){r=Se,n.isPresenting===!0&&rn("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Se){a=Se,n.isPresenting===!0&&rn("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Se){l=Se},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Se){if(s=Se,s!==null){if(P=e.getRenderTarget(),s.addEventListener("select",we),s.addEventListener("selectstart",we),s.addEventListener("selectend",we),s.addEventListener("squeeze",we),s.addEventListener("squeezestart",we),s.addEventListener("squeezeend",we),s.addEventListener("end",re),s.addEventListener("inputsourceschange",Pe),b.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(U),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ae=null,Je=null;b.depth&&(Je=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=b.stencil?Rr:Qs,Ae=b.stencil?ca:Us);const Ye={colorFormat:t.RGBA8,depthFormat:Je,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Ye),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Bi(f.textureWidth,f.textureHeight,{format:xs,type:ts,depthTexture:new ha(f.textureWidth,f.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Ee={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Bi(h.framebufferWidth,h.framebufferHeight,{format:xs,type:ts,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),lt.setContext(s),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Pe(Se){for(let $=0;$<Se.removed.length;$++){const Ee=Se.removed[$],Ae=E.indexOf(Ee);Ae>=0&&(E[Ae]=null,T[Ae].disconnect(Ee))}for(let $=0;$<Se.added.length;$++){const Ee=Se.added[$];let Ae=E.indexOf(Ee);if(Ae===-1){for(let Ye=0;Ye<T.length;Ye++)if(Ye>=E.length){E.push(Ee),Ae=Ye;break}else if(E[Ye]===null){E[Ye]=Ee,Ae=Ye;break}if(Ae===-1)break}const Je=T[Ae];Je&&Je.connect(Ee)}}const ye=new A,Te=new A;function Ie(Se,$,Ee){ye.setFromMatrixPosition($.matrixWorld),Te.setFromMatrixPosition(Ee.matrixWorld);const Ae=ye.distanceTo(Te),Je=$.projectionMatrix.elements,Ye=Ee.projectionMatrix.elements,xe=Je[14]/(Je[10]-1),B=Je[14]/(Je[10]+1),ee=(Je[9]+1)/Je[5],ue=(Je[9]-1)/Je[5],ve=(Je[8]-1)/Je[0],He=(Ye[8]+1)/Ye[0],vt=xe*ve,pt=xe*He,ce=Ae/(-ve+He),Xe=ce*-ve;if($.matrixWorld.decompose(Se.position,Se.quaternion,Se.scale),Se.translateX(Xe),Se.translateZ(ce),Se.matrixWorld.compose(Se.position,Se.quaternion,Se.scale),Se.matrixWorldInverse.copy(Se.matrixWorld).invert(),Je[10]===-1)Se.projectionMatrix.copy($.projectionMatrix),Se.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const D=xe+ce,Ve=B+ce,tt=vt-Xe,R=pt+(Ae-Xe),_=ee*B/Ve*D,J=ue*B/Ve*D;Se.projectionMatrix.makePerspective(tt,R,_,J,D,Ve),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert()}}function yt(Se,$){$===null?Se.matrixWorld.copy(Se.matrix):Se.matrixWorld.multiplyMatrices($.matrixWorld,Se.matrix),Se.matrixWorldInverse.copy(Se.matrixWorld).invert()}this.updateCamera=function(Se){if(s===null)return;let $=Se.near,Ee=Se.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(Ee=m.depthFar)),ie.near=k.near=F.near=$,ie.far=k.far=F.far=Ee,(G!==ie.near||Q!==ie.far)&&(s.updateRenderState({depthNear:ie.near,depthFar:ie.far}),G=ie.near,Q=ie.far),ie.layers.mask=Se.layers.mask|6,F.layers.mask=ie.layers.mask&-5,k.layers.mask=ie.layers.mask&-3;const Ae=Se.parent,Je=ie.cameras;yt(ie,Ae);for(let Ye=0;Ye<Je.length;Ye++)yt(Je[Ye],Ae);Je.length===2?Ie(ie,F,k):ie.projectionMatrix.copy(F.projectionMatrix),C===null&&Se.isPerspectiveCamera&&(C={camera:Se,fov:Se.fov,zoom:Se.zoom}),Et(Se,ie,Ae)};function Et(Se,$,Ee){Ee===null?Se.matrix.copy($.matrixWorld):(Se.matrix.copy(Ee.matrixWorld),Se.matrix.invert(),Se.matrix.multiply($.matrixWorld)),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.updateMatrixWorld(!0),Se.projectionMatrix.copy($.projectionMatrix),Se.projectionMatrixInverse.copy($.projectionMatrixInverse),Se.isPerspectiveCamera&&(Se.fov=Ro*2*Math.atan(1/Se.projectionMatrix.elements[5]),Se.zoom=1)}this.getCamera=function(){return ie},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(Se){c=Se,f!==null&&(f.fixedFoveation=Se),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Se)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(ie)},this.getCameraTexture=function(Se){return p[Se]};let jt=null;function W(Se,$){if(u=$.getViewerPose(l||o),g=$,u!==null){const Ee=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let Ae=!1;Ee.length!==ie.cameras.length&&(ie.cameras.length=0,Ae=!0);for(let B=0;B<Ee.length;B++){const ee=Ee[B];let ue=null;if(h!==null)ue=h.getViewport(ee);else{const He=d.getViewSubImage(f,ee);ue=He.viewport,B===0&&(e.setRenderTargetTextures(S,He.colorTexture,He.depthStencilTexture),e.setRenderTarget(S))}let ve=V[B];ve===void 0&&(ve=new qi,ve.layers.enable(B),ve.viewport=new ti,V[B]=ve),ve.matrix.fromArray(ee.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(ee.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(ue.x,ue.y,ue.width,ue.height),B===0&&(ie.matrix.copy(ve.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale)),Ae===!0&&ie.cameras.push(ve)}const Je=s.enabledFeatures;if(Je&&Je.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const B=d.getDepthInformation(Ee[0]);B&&B.isValid&&B.texture&&m.init(B,s.renderState)}if(Je&&Je.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let B=0;B<Ee.length;B++){const ee=Ee[B].camera;if(ee){let ue=p[ee];ue||(ue=new g0,p[ee]=ue);const ve=d.getCameraImage(ee);ue.sourceTexture=ve}}}}for(let Ee=0;Ee<T.length;Ee++){const Ae=E[Ee],Je=T[Ee];Ae!==null&&Je!==void 0&&Je.update(Ae,$,l||o)}jt&&jt(Se,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const lt=new L0;lt.setAnimationLoop(W),this.setAnimationLoop=function(Se){jt=Se},this.dispose=function(){}}}const d2=new Mn,z0=new pn;z0.set(-1,0,0,0,1,0,0,0,1);function p2(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,T0(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,P,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,b,P):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zi&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zi&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),P=b.envMap,S=b.envMapRotation;P&&(m.envMap.value=P,m.envMapRotation.value.setFromMatrix4(d2.makeRotationFromEuler(S)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(z0),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,P){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=P*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zi&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function m2(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,T){const E=T.program;n.uniformBlockBinding(S,E)}function l(S,T){let E=s[S.id];E===void 0&&(m(S),E=u(S),s[S.id]=E,S.addEventListener("dispose",b));const U=T.program;n.updateUBOMapping(S,U);const M=e.render.frame;r[S.id]!==M&&(f(S),r[S.id]=M)}function u(S){const T=d();S.__bindingPointIndex=T;const E=i.createBuffer(),U=S.__size,M=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,U,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return Rn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const T=s[S.id],E=S.uniforms,U=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let M=0,C=E.length;M<C;M++){const F=E[M];if(Array.isArray(F))for(let k=0,V=F.length;k<V;k++)h(F[k],M,k,U);else h(F,M,0,U)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,T,E,U){if(v(S,T,E,U)===!0){const M=S.__offset,C=S.value;if(Array.isArray(C)){let F=0;for(let k=0;k<C.length;k++){const V=C[k],ie=p(V);g(V,S.__data,F),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(F+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(C,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,S.__data)}}function g(S,T,E){typeof S=="number"||typeof S=="boolean"?T[0]=S:S.isMatrix3?(T[0]=S.elements[0],T[1]=S.elements[1],T[2]=S.elements[2],T[3]=0,T[4]=S.elements[3],T[5]=S.elements[4],T[6]=S.elements[5],T[7]=0,T[8]=S.elements[6],T[9]=S.elements[7],T[10]=S.elements[8],T[11]=0):ArrayBuffer.isView(S)?T.set(new S.constructor(S.buffer,S.byteOffset,T.length)):S.toArray(T,E)}function v(S,T,E,U){const M=S.value,C=T+"_"+E;if(U[C]===void 0)return typeof M=="number"||typeof M=="boolean"?U[C]=M:ArrayBuffer.isView(M)?U[C]=M.slice():U[C]=M.clone(),!0;{const F=U[C];if(typeof M=="number"||typeof M=="boolean"){if(F!==M)return U[C]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(F.equals(M)===!1)return F.copy(M),!0}}return!1}function m(S){const T=S.uniforms;let E=0;const U=16;for(let C=0,F=T.length;C<F;C++){const k=Array.isArray(T[C])?T[C]:[T[C]];for(let V=0,ie=k.length;V<ie;V++){const G=k[V],Q=Array.isArray(G.value)?G.value:[G.value];for(let we=0,re=Q.length;we<re;we++){const Pe=Q[we],ye=p(Pe),Te=E%U,Ie=Te%ye.boundary,yt=Te+Ie;E+=Ie,yt!==0&&U-yt<ye.storage&&(E+=U-yt),G.__data=new Float32Array(ye.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=ye.storage}}}const M=E%U;return M>0&&(E+=U-M),S.__size=E,S.__cache={},this}function p(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?rn("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):rn("WebGLRenderer: Unsupported uniform value type.",S),T}function b(S){const T=S.target;T.removeEventListener("dispose",b);const E=o.indexOf(T.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function P(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:P}}const g2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ts=null;function v2(){return Ts===null&&(Ts=new d0(g2,16,16,Fr,$i),Ts.name="DFG_LUT",Ts.minFilter=Li,Ts.magFilter=Li,Ts.wrapS=on,Ts.wrapT=on,Ts.generateMipmaps=!1,Ts.needsUpdate=!0),Ts}class _2{constructor(e={}){const{canvas:t=Nd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=ts}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const v=h,m=new Set([Yu,Xu,Wu]),p=new Set([ts,Us,la,ca,Gu,Hu]),b=new Uint32Array(4),P=new Int32Array(4),S=new A;let T=null,E=null;const U=[],M=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ds,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let k=!1,V=null,ie=null,G=null,Q=null;this._outputColorSpace=Yi;let we=0,re=0,Pe=null,ye=-1,Te=null;const Ie=new ti,yt=new ti;let Et=null;const jt=new ke(0);let W=0,lt=t.width,Se=t.height,$=1,Ee=null,Ae=null;const Je=new ti(0,0,lt,Se),Ye=new ti(0,0,lt,Se);let xe=!1;const B=new ju;let ee=!1,ue=!1;const ve=new Mn,He=new A,vt=new ti,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function Xe(){return Pe===null?$:1}let D=n;function Ve(w,Y){return t.getContext(w,Y)}let tt,R,_,J,pe,Re,et,Qe,Le,Oe,ct,Ft,rt,Be,Ct,Tt,Xt,j,Ke,ze,St,At,qe;try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Du}`),t.addEventListener("webglcontextlost",_n,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",fn,!1),D===null){const Y="webgl2";if(D=Ve(Y,w),D===null)throw Ve(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(w){throw t.removeEventListener("webglcontextlost",_n,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",fn,!1),Rn("WebGLRenderer: "+w.message),w}function Bt(){tt=new vv(D),tt.init(),St=new l2(D,tt),R=new av(D,tt,e,St),_=new o2(D,tt),R.reversedDepthBuffer&&f&&_.buffers.depth.setReversed(!0),ie=D.createFramebuffer(),G=D.createFramebuffer(),Q=D.createFramebuffer(),J=new Mv(D),pe=new Y_,Re=new a2(D,tt,_,pe,R,St,J),et=new gv(F),Qe=new Sm(D),At=new rv(D,Qe),Le=new _v(D,Qe,J,At),Oe=new Sv(D,Le,Qe,At,J),j=new yv(D,R,Re),Ct=new lv(pe),ct=new X_(F,et,tt,R,At,Ct),Ft=new p2(F,pe),rt=new Z_,Be=new e2(tt),Xt=new sv(F,et,_,Oe,g,c),Tt=new r2(F,Oe,R),qe=new m2(D,J,R,_),Ke=new ov(D,tt,J),ze=new xv(D,tt,J),J.programs=ct.programs,F.capabilities=R,F.extensions=tt,F.properties=pe,F.renderLists=rt,F.shadowMap=Tt,F.state=_,F.info=J}v!==ts&&(C=new wv(v,t.width,t.height,a,s,r));const Dt=new f2(F,D);this.xr=Dt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=tt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=tt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(lt,Se,!1))},this.getSize=function(w){return w.set(lt,Se)},this.setSize=function(w,Y,ge=!0){if(Dt.isPresenting){rn("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=w,Se=Y,t.width=Math.floor(w*$),t.height=Math.floor(Y*$),ge===!0&&(t.style.width=w+"px",t.style.height=Y+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(lt*$,Se*$).floor()},this.setDrawingBufferSize=function(w,Y,ge){lt=w,Se=Y,$=ge,t.width=Math.floor(w*ge),t.height=Math.floor(Y*ge),this.setViewport(0,0,w,Y)},this.setEffects=function(w){if(v===ts){Rn("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Y=0;Y<w.length;Y++)if(w[Y].isOutputPass===!0){rn("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Ie)},this.getViewport=function(w){return w.copy(Je)},this.setViewport=function(w,Y,ge,fe){w.isVector4?Je.set(w.x,w.y,w.z,w.w):Je.set(w,Y,ge,fe),_.viewport(Ie.copy(Je).multiplyScalar($).round())},this.getScissor=function(w){return w.copy(Ye)},this.setScissor=function(w,Y,ge,fe){w.isVector4?Ye.set(w.x,w.y,w.z,w.w):Ye.set(w,Y,ge,fe),_.scissor(yt.copy(Ye).multiplyScalar($).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(w){_.setScissorTest(xe=w)},this.setOpaqueSort=function(w){Ee=w},this.setTransparentSort=function(w){Ae=w},this.getClearColor=function(w){return w.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor(...arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha(...arguments)},this.clear=function(w=!0,Y=!0,ge=!0){let fe=0;if(w){let te=!1;if(Pe!==null){const gt=Pe.texture.format;te=m.has(gt)}if(te){const gt=Pe.texture.type,ht=p.has(gt),it=Xt.getClearColor(),xt=Xt.getClearAlpha(),Rt=it.r,$t=it.g,It=it.b;ht?(b[0]=Rt,b[1]=$t,b[2]=It,b[3]=xt,D.clearBufferuiv(D.COLOR,0,b)):(P[0]=Rt,P[1]=$t,P[2]=It,P[3]=xt,D.clearBufferiv(D.COLOR,0,P))}else fe|=D.COLOR_BUFFER_BIT}Y&&(fe|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ge&&(fe|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),fe!==0&&D.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),V=w},this.dispose=function(){t.removeEventListener("webglcontextlost",_n,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",fn,!1),Xt.dispose(),rt.dispose(),Be.dispose(),pe.dispose(),et.dispose(),Oe.dispose(),At.dispose(),qe.dispose(),ct.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",q),Dt.removeEventListener("sessionend",he),Ue.stop()};function _n(w){w.preventDefault(),wl("WebGLRenderer: Context Lost."),k=!0}function ut(){wl("WebGLRenderer: Context Restored."),k=!1;const w=J.autoReset,Y=Tt.enabled,ge=Tt.autoUpdate,fe=Tt.needsUpdate,te=Tt.type;Bt(),J.autoReset=w,Tt.enabled=Y,Tt.autoUpdate=ge,Tt.needsUpdate=fe,Tt.type=te}function fn(w){Rn("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function gi(w){const Y=w.target;Y.removeEventListener("dispose",gi),z(Y)}function z(w){X(w),pe.remove(w)}function X(w){const Y=pe.get(w).programs;Y!==void 0&&(Y.forEach(function(ge){ct.releaseProgram(ge)}),w.isShaderMaterial&&ct.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,ge,fe,te,gt){Y===null&&(Y=pt);const ht=te.isMesh&&te.matrixWorld.determinantAffine()<0,it=Xn(w,Y,ge,fe,te);_.setMaterial(fe,ht);let xt=ge.index,Rt=1;if(fe.wireframe===!0){if(xt=Le.getWireframeAttribute(ge),xt===void 0)return;Rt=2}const $t=ge.drawRange,It=ge.attributes.position;let bt=$t.start*Rt,Pt=($t.start+$t.count)*Rt;gt!==null&&(bt=Math.max(bt,gt.start*Rt),Pt=Math.min(Pt,(gt.start+gt.count)*Rt)),xt!==null?(bt=Math.max(bt,0),Pt=Math.min(Pt,xt.count)):It!=null&&(bt=Math.max(bt,0),Pt=Math.min(Pt,It.count));const ln=Pt-bt;if(ln<0||ln===1/0)return;At.setup(te,fe,it,ge,xt);let Yt,Wt=Ke;if(xt!==null&&(Yt=Qe.get(xt),Wt=ze,Wt.setIndex(Yt)),te.isMesh)fe.wireframe===!0?(_.setLineWidth(fe.wireframeLinewidth*Xe()),Wt.setMode(D.LINES)):Wt.setMode(D.TRIANGLES);else if(te.isLine){let Dn=fe.linewidth;Dn===void 0&&(Dn=1),_.setLineWidth(Dn*Xe()),te.isLineSegments?Wt.setMode(D.LINES):te.isLineLoop?Wt.setMode(D.LINE_LOOP):Wt.setMode(D.LINE_STRIP)}else te.isPoints?Wt.setMode(D.POINTS):te.isSprite&&Wt.setMode(D.TRIANGLES);if(te.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))Wt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const Dn=te._multiDrawStarts,wt=te._multiDrawCounts,Ln=te._multiDrawCount,mn=xt?Qe.get(xt).bytesPerElement:1,qn=pe.get(fe).currentProgram.getUniforms();for(let mt=0;mt<Ln;mt++)qn.setValue(D,"_gl_DrawID",mt),Wt.render(Dn[mt]/mn,wt[mt])}else if(te.isInstancedMesh)Wt.renderInstances(bt,ln,te.count);else if(ge.isInstancedBufferGeometry){const Dn=ge._maxInstanceCount!==void 0?ge._maxInstanceCount:1/0,wt=Math.min(ge.instanceCount,Dn);Wt.renderInstances(bt,ln,wt)}else Wt.render(bt,ln)};function I(w,Y,ge,fe){V!==null&&w.isNodeMaterial&&V.setObject(fe,w),ee===!0&&Ct.setState(w,ge,!1),w.transparent===!0&&w.side===Bn&&w.forceSinglePass===!1?(w.side=zi,w.needsUpdate=!0,ft(w,Y,fe),w.side=Nr,w.needsUpdate=!0,ft(w,Y,fe),w.side=Bn):ft(w,Y,fe)}this.compile=function(w,Y,ge=null){ge===null&&(ge=w),V!==null&&V.renderStart(w,Y,ge),E=Be.get(ge),E.init(Y),M.push(E),ge.traverseVisible(function(te){te.isLight&&te.layers.test(Y.layers)&&(E.pushLight(te),te.castShadow&&E.pushShadow(te))}),w!==ge&&w.traverseVisible(function(te){te.isLight&&te.layers.test(Y.layers)&&(E.pushLight(te),te.castShadow&&E.pushShadow(te))}),E.setupLights(),V!==null&&V.updateLights(E.state.lightsArray),ue=this.localClippingEnabled,ee=Ct.init(this.clippingPlanes,ue),ee===!0&&Ct.setGlobalState(this.clippingPlanes,Y),V!==null&&Tt.render(E.state.shadowsArray,ge,Y);const fe=new Set;return w.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const gt=te.material;if(gt)if(Array.isArray(gt))for(let ht=0;ht<gt.length;ht++){const it=gt[ht];I(it,ge,Y,te),fe.add(it)}else I(gt,ge,Y,te),fe.add(gt)}),E=M.pop(),V!==null&&V.renderEnd(),fe},this.compileAsync=function(w,Y,ge=null){const fe=this.compile(w,Y,ge);return new Promise(te=>{function gt(){if(fe.forEach(function(ht){const xt=pe.get(ht).currentProgram;(xt===void 0||xt.isReady())&&fe.delete(ht)}),fe.size===0){te(w);return}setTimeout(gt,10)}tt.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let O=null;function N(w){O&&O(w)}function q(){Ue.stop()}function he(){Ue.start()}const Ue=new L0;Ue.setAnimationLoop(N),typeof self<"u"&&Ue.setContext(self),this.setAnimationLoop=function(w){O=w,Dt.setAnimationLoop(w),w===null?Ue.stop():Ue.start()},Dt.addEventListener("sessionstart",q),Dt.addEventListener("sessionend",he),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){Rn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;V!==null&&V.renderStart(w,Y);const ge=Dt.enabled===!0&&Dt.isPresenting===!0,fe=C!==null&&(Pe===null||ge)&&C.begin(F,Pe);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(Y),Y=Dt.getCamera()),w.isScene===!0&&w.onBeforeRender(F,w,Y,Pe),E=Be.get(w,M.length),E.init(Y),E.state.textureUnits=Re.getTextureUnits(),M.push(E),ve.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),B.setFromProjectionMatrix(ve,Ps,Y.reversedDepth),ue=this.localClippingEnabled,ee=Ct.init(this.clippingPlanes,ue),T=rt.get(w,U.length),T.init(),U.push(T),Dt.enabled===!0&&Dt.isPresenting===!0){const ht=F.xr.getDepthSensingMesh();ht!==null&&ot(ht,Y,-1/0,F.sortObjects)}ot(w,Y,0,F.sortObjects),T.finish(),V!==null&&V.updateLights(E.state.lightsArray),F.sortObjects===!0&&T.sort(Ee,Ae),ce=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,ce&&Xt.addToRenderList(T,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ee===!0&&Ct.beginShadows();const te=E.state.shadowsArray;if(Tt.render(te,w,Y),ee===!0&&Ct.endShadows(),(fe&&C.hasRenderPass())===!1){const ht=T.opaque,it=T.transmissive;if(E.setupLights(),Y.isArrayCamera){const xt=Y.cameras;if(it.length>0)for(let Rt=0,$t=xt.length;Rt<$t;Rt++){const It=xt[Rt];at(ht,it,w,It)}ce&&Xt.render(w);for(let Rt=0,$t=xt.length;Rt<$t;Rt++){const It=xt[Rt];_t(T,w,It,It.viewport)}}else it.length>0&&at(ht,it,w,Y),ce&&Xt.render(w),_t(T,w,Y)}Pe!==null&&re===0&&(Re.updateMultisampleRenderTarget(Pe),Re.updateRenderTargetMipmap(Pe)),fe&&C.end(F),w.isScene===!0&&w.onAfterRender(F,w,Y),At.resetDefaultState(),ye=-1,Te=null,M.pop(),M.length>0?(E=M[M.length-1],Re.setTextureUnits(E.state.textureUnits),ee===!0&&Ct.setGlobalState(F.clippingPlanes,E.state.camera)):E=null,U.pop(),U.length>0?T=U[U.length-1]:T=null,V!==null&&V.renderEnd()};function ot(w,Y,ge,fe){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)ge=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLightProbeGrid)E.pushLightProbeGrid(w);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(B)){fe&&vt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ve);const ht=Oe.update(w),it=w.material;it.visible&&T.push(w,ht,it,ge,vt.z,null,Y)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(B))){const ht=Oe.update(w),it=w.material;if(fe&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),vt.copy(w.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),vt.copy(ht.boundingSphere.center)),vt.applyMatrix4(w.matrixWorld).applyMatrix4(ve)),Array.isArray(it)){const xt=ht.groups;for(let Rt=0,$t=xt.length;Rt<$t;Rt++){const It=xt[Rt],bt=it[It.materialIndex];bt&&bt.visible&&T.push(w,ht,bt,ge,vt.z,It,Y)}}else it.visible&&T.push(w,ht,it,ge,vt.z,null,Y)}}const gt=w.children;for(let ht=0,it=gt.length;ht<it;ht++)ot(gt[ht],Y,ge,fe)}function _t(w,Y,ge,fe){const{opaque:te,transmissive:gt,transparent:ht}=w;E.setupLightsView(ge),ee===!0&&Ct.setGlobalState(F.clippingPlanes,ge),fe&&_.viewport(Ie.copy(fe)),te.length>0&&Ze(te,Y,ge),gt.length>0&&Ze(gt,Y,ge),ht.length>0&&Ze(ht,Y,ge),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function at(w,Y,ge,fe){if((ge.isScene===!0?ge.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[fe.id]===void 0){const bt=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[fe.id]=new Bi(1,1,{generateMipmaps:!0,type:bt?$i:ts,minFilter:Cr,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:En.workingColorSpace})}const gt=E.state.transmissionRenderTarget[fe.id],ht=fe.viewport||Ie;gt.setSize(ht.z*F.transmissionResolutionScale,ht.w*F.transmissionResolutionScale);const it=F.getRenderTarget(),xt=F.getActiveCubeFace(),Rt=F.getActiveMipmapLevel();F.setRenderTarget(gt),F.getClearColor(jt),W=F.getClearAlpha(),W<1&&F.setClearColor(16777215,.5),F.clear(),ce&&Xt.render(ge);const $t=F.toneMapping;F.toneMapping=Ds;const It=fe.viewport;if(fe.viewport!==void 0&&(fe.viewport=void 0),E.setupLightsView(fe),ee===!0&&Ct.setGlobalState(F.clippingPlanes,fe),Ze(w,ge,fe),Re.updateMultisampleRenderTarget(gt),Re.updateRenderTargetMipmap(gt),tt.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let Pt=0,ln=Y.length;Pt<ln;Pt++){const Yt=Y[Pt],{object:Wt,geometry:Dn,material:wt,group:Ln}=Yt;if(wt.side===Bn&&Wt.layers.test(fe.layers)){const mn=wt.side;wt.side=zi,wt.needsUpdate=!0,De(Wt,ge,fe,Dn,wt,Ln),wt.side=mn,wt.needsUpdate=!0,bt=!0}}bt===!0&&(Re.updateMultisampleRenderTarget(gt),Re.updateRenderTargetMipmap(gt))}F.setRenderTarget(it,xt,Rt),F.setClearColor(jt,W),It!==void 0&&(fe.viewport=It),F.toneMapping=$t}function Ze(w,Y,ge){const fe=Y.isScene===!0?Y.overrideMaterial:null;for(let te=0,gt=w.length;te<gt;te++){const ht=w[te],{object:it,geometry:xt,group:Rt}=ht;let $t=ht.material;$t.allowOverride===!0&&fe!==null&&($t=fe),it.layers.test(ge.layers)&&De(it,Y,ge,xt,$t,Rt)}}function De(w,Y,ge,fe,te,gt){V!==null&&te.isNodeMaterial&&V.setObject(w,te),w.onBeforeRender(F,Y,ge,fe,te,gt),w.modelViewMatrix.multiplyMatrices(ge.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),te.onBeforeRender(F,Y,ge,fe,w,gt),te.transparent===!0&&te.side===Bn&&te.forceSinglePass===!1?(te.side=zi,te.needsUpdate=!0,F.renderBufferDirect(ge,Y,fe,te,w,gt),te.side=Nr,te.needsUpdate=!0,F.renderBufferDirect(ge,Y,fe,te,w,gt),te.side=Bn):F.renderBufferDirect(ge,Y,fe,te,w,gt),w.onAfterRender(F,Y,ge,fe,te,gt)}function ft(w,Y,ge){Y.isScene!==!0&&(Y=pt);const fe=pe.get(w),te=E.state.lights,gt=E.state.shadowsArray,ht=te.state.version,it=ct.getParameters(w,te.state,gt,Y,ge,E.state.lightProbeGridArray),xt=ct.getProgramCacheKey(it);let Rt=fe.programs;fe.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?Y.environment:null,fe.fog=Y.fog;const $t=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;fe.envMap=et.get(w.envMap||fe.environment,$t),fe.envMapRotation=fe.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,Rt===void 0&&(w.addEventListener("dispose",gi),Rt=new Map,fe.programs=Rt);let It=Rt.get(xt);if(It!==void 0){if(fe.currentProgram===It&&fe.lightsStateVersion===ht)return en(w,it),It}else it.uniforms=ct.getUniforms(w),V!==null&&w.isNodeMaterial&&V.build(w,ge,it),w.onBeforeCompile(it,F),It=ct.acquireProgram(it,xt),Rt.set(xt,It),fe.uniforms=it.uniforms;const bt=fe.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(bt.clippingPlanes=Ct.uniform),en(w,it),fe.needsLights=An(w),fe.lightsStateVersion=ht,fe.needsLights&&(bt.ambientLightColor.value=te.state.ambient,bt.lightProbe.value=te.state.probe,bt.sunLights.value=te.state.sun,bt.sunLightShadows.value=te.state.sunShadow,bt.directionalLights.value=te.state.directional,bt.directionalLightShadows.value=te.state.directionalShadow,bt.spotLights.value=te.state.spot,bt.spotLightShadows.value=te.state.spotShadow,bt.rectAreaLights.value=te.state.rectArea,bt.ltc_1.value=te.state.rectAreaLTC1,bt.ltc_2.value=te.state.rectAreaLTC2,bt.pointLights.value=te.state.point,bt.pointLightShadows.value=te.state.pointShadow,bt.hemisphereLights.value=te.state.hemi,bt.sunShadowMatrix.value=te.state.sunShadowMatrix,bt.sunShadowCascade.value=te.state.sunShadowCascade,bt.directionalShadowMatrix.value=te.state.directionalShadowMatrix,bt.spotLightMatrix.value=te.state.spotLightMatrix,bt.spotLightMap.value=te.state.spotLightMap,bt.pointShadowMatrix.value=te.state.pointShadowMatrix),fe.lightProbeGrid=E.state.lightProbeGridArray.length>0,fe.currentProgram=It,fe.uniformsList=null,It}function Nt(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=pl.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function en(w,Y){const ge=pe.get(w);ge.outputColorSpace=Y.outputColorSpace,ge.batching=Y.batching,ge.batchingColor=Y.batchingColor,ge.instancing=Y.instancing,ge.instancingColor=Y.instancingColor,ge.instancingMorph=Y.instancingMorph,ge.skinning=Y.skinning,ge.morphTargets=Y.morphTargets,ge.morphNormals=Y.morphNormals,ge.morphColors=Y.morphColors,ge.morphTargetsCount=Y.morphTargetsCount,ge.numClippingPlanes=Y.numClippingPlanes,ge.numIntersection=Y.numClipIntersection,ge.vertexAlphas=Y.vertexAlphas,ge.vertexTangents=Y.vertexTangents,ge.toneMapping=Y.toneMapping}function kn(w,Y){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;S.setFromMatrixPosition(Y.matrixWorld);for(let ge=0,fe=w.length;ge<fe;ge++){const te=w[ge];if(te.texture!==null&&te.boundingBox.containsPoint(S))return te}return null}function Xn(w,Y,ge,fe,te){Y.isScene!==!0&&(Y=pt),Re.resetTextureUnits();const gt=Y.fog,ht=fe.isMeshStandardMaterial||fe.isMeshLambertMaterial||fe.isMeshPhongMaterial?Y.environment:null,it=Pe===null?F.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:En.workingColorSpace,xt=fe.isMeshStandardMaterial||fe.isMeshLambertMaterial&&!fe.envMap||fe.isMeshPhongMaterial&&!fe.envMap,Rt=et.get(fe.envMap||ht,xt),$t=fe.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,It=!!ge.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),bt=!!ge.morphAttributes.position,Pt=!!ge.morphAttributes.normal,ln=!!ge.morphAttributes.color;let Yt=Ds;fe.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(Yt=F.toneMapping);const Wt=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,Dn=Wt!==void 0?Wt.length:0,wt=pe.get(fe),Ln=E.state.lights;if(ee===!0&&(ue===!0||w!==Te)){const $e=w===Te&&fe.id===ye;Ct.setState(fe,w,$e)}let mn=!1;fe.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Ln.state.version||wt.outputColorSpace!==it||te.isBatchedMesh&&wt.batching===!1||!te.isBatchedMesh&&wt.batching===!0||te.isBatchedMesh&&wt.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&wt.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&wt.instancing===!1||!te.isInstancedMesh&&wt.instancing===!0||te.isSkinnedMesh&&wt.skinning===!1||!te.isSkinnedMesh&&wt.skinning===!0||te.isInstancedMesh&&wt.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&wt.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&wt.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&wt.instancingMorph===!1&&te.morphTexture!==null||wt.envMap!==Rt||fe.fog===!0&&wt.fog!==gt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==Ct.numPlanes||wt.numIntersection!==Ct.numIntersection)||wt.vertexAlphas!==$t||wt.vertexTangents!==It||wt.morphTargets!==bt||wt.morphNormals!==Pt||wt.morphColors!==ln||wt.toneMapping!==Yt||wt.morphTargetsCount!==Dn||!!wt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(mn=!0):(mn=!0,wt.__version=fe.version);let qn=wt.currentProgram;mn===!0&&(qn=ft(fe,Y,te),V&&fe.isNodeMaterial&&V.onUpdateProgram(fe,qn,wt));let mt=!1,Qt=!1,wn=!1;const Zt=qn.getUniforms(),dn=wt.uniforms;if(_.useProgram(qn.program)&&(mt=!0,Qt=!0,wn=!0),fe.id!==ye&&(ye=fe.id,Qt=!0),wt.needsLights){const $e=kn(E.state.lightProbeGridArray,te);wt.lightProbeGrid!==$e&&(wt.lightProbeGrid=$e,Qt=!0)}if(mt||Te!==w){_.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Zt.setValue(D,"projectionMatrix",w.projectionMatrix),Zt.setValue(D,"viewMatrix",w.matrixWorldInverse);const yi=Zt.map.cameraPosition;yi!==void 0&&yi.setValue(D,He.setFromMatrixPosition(w.matrixWorld)),R.logarithmicDepthBuffer&&Zt.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&Zt.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),Te!==w&&(Te=w,Qt=!0,wn=!0)}if(wt.needsLights&&(Ln.state.sunShadowMap.length>0&&Zt.setValue(D,"sunShadowMap",Ln.state.sunShadowMap,Re),Ln.state.directionalShadowMap.length>0&&Zt.setValue(D,"directionalShadowMap",Ln.state.directionalShadowMap,Re),Ln.state.spotShadowMap.length>0&&Zt.setValue(D,"spotShadowMap",Ln.state.spotShadowMap,Re),Ln.state.pointShadowMap.length>0&&Zt.setValue(D,"pointShadowMap",Ln.state.pointShadowMap,Re)),te.isSkinnedMesh){Zt.setOptional(D,te,"bindMatrix"),Zt.setOptional(D,te,"bindMatrixInverse");const $e=te.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),Zt.setValue(D,"boneTexture",$e.boneTexture,Re))}te.isBatchedMesh&&(Zt.setOptional(D,te,"batchingTexture"),Zt.setValue(D,"batchingTexture",te._matricesTexture,Re),Zt.setOptional(D,te,"batchingIdTexture"),Zt.setValue(D,"batchingIdTexture",te._indirectTexture,Re),Zt.setOptional(D,te,"batchingColorTexture"),te._colorsTexture!==null&&Zt.setValue(D,"batchingColorTexture",te._colorsTexture,Re));const Un=ge.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&j.update(te,ge,qn),(Qt||wt.receiveShadow!==te.receiveShadow)&&(wt.receiveShadow=te.receiveShadow,Zt.setValue(D,"receiveShadow",te.receiveShadow)),(fe.isMeshStandardMaterial||fe.isMeshLambertMaterial||fe.isMeshPhongMaterial)&&fe.envMap===null&&Y.environment!==null&&(dn.envMapIntensity.value=Y.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=v2()),Qt){if(Zt.setValue(D,"toneMappingExposure",F.toneMappingExposure),wt.needsLights&&Nn(dn,wn),gt&&fe.fog===!0&&Ft.refreshFogUniforms(dn,gt),Ft.refreshMaterialUniforms(dn,fe,$,Se,E.state.transmissionRenderTarget[w.id]),wt.needsLights&&wt.lightProbeGrid){const $e=wt.lightProbeGrid;dn.probesSH.value=$e.texture,dn.probesMin.value.copy($e.boundingBox.min),dn.probesMax.value.copy($e.boundingBox.max),dn.probesResolution.value.copy($e.resolution)}pl.upload(D,Nt(wt),dn,Re)}if(fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&(pl.upload(D,Nt(wt),dn,Re),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&Zt.setValue(D,"center",te.center),Zt.setValue(D,"modelViewMatrix",te.modelViewMatrix),Zt.setValue(D,"normalMatrix",te.normalMatrix),Zt.setValue(D,"modelMatrix",te.matrixWorld),fe.uniformsGroups!==void 0){const $e=fe.uniformsGroups;for(let yi=0,Di=$e.length;yi<Di;yi++){const ki=$e[yi];qe.update(ki,qn),qe.bind(ki,qn)}}return qn}function Nn(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.sunLights.needsUpdate=Y,w.sunLightShadows.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function An(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return we},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return Pe},this.setRenderTargetTextures=function(w,Y,ge){const fe=pe.get(w);fe.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,fe.__autoAllocateDepthBuffer===!1&&(fe.__useRenderToTexture=!1),pe.get(w.texture).__webglTexture=Y,pe.get(w.depthTexture).__webglTexture=fe.__autoAllocateDepthBuffer?void 0:ge,fe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Y){const ge=pe.get(w);ge.__webglFramebuffer=Y,ge.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(w,Y=0,ge=0){Pe=w,we=Y,re=ge;let fe=null,te=!1,gt=!1;if(w){const it=pe.get(w);if(it.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(D.FRAMEBUFFER,it.__webglFramebuffer),Ie.copy(w.viewport),yt.copy(w.scissor),Et=w.scissorTest,_.viewport(Ie),_.scissor(yt),_.setScissorTest(Et),ye=-1;return}else if(it.__webglFramebuffer===void 0)Re.setupRenderTarget(w);else if(it.__hasExternalTextures)Re.rebindTextures(w,pe.get(w.texture).__webglTexture,pe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const $t=w.depthTexture;if(it.__boundDepthTexture!==$t){if($t!==null&&pe.has($t)&&(w.width!==$t.image.width||w.height!==$t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Re.setupDepthRenderbuffer(w)}}const xt=w.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(gt=!0);const Rt=pe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Rt[Y])?fe=Rt[Y][ge]:fe=Rt[Y],te=!0):w.samples>0&&Re.useMultisampledRTT(w)===!1?fe=pe.get(w).__webglMultisampledFramebuffer:Array.isArray(Rt)?fe=Rt[ge]:fe=Rt,Ie.copy(w.viewport),yt.copy(w.scissor),Et=w.scissorTest}else Ie.copy(Je).multiplyScalar($).floor(),yt.copy(Ye).multiplyScalar($).floor(),Et=xe;if(ge!==0&&(fe=ie),_.bindFramebuffer(D.FRAMEBUFFER,fe)&&_.drawBuffers(w,fe),_.viewport(Ie),_.scissor(yt),_.setScissorTest(Et),te){const it=pe.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it.__webglTexture,ge)}else if(gt){const it=Y;for(let xt=0;xt<w.textures.length;xt++){const Rt=pe.get(w.textures[xt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+xt,Rt.__webglTexture,ge,it)}}else if(w!==null&&ge!==0){const it=pe.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,it.__webglTexture,ge)}ye=-1};function Yn(w){const Y=pe.get(w);return(Y.__readFormat!==w.format||Y.__readType!==w.type)&&(Y.__readFormat=w.format,Y.__readType=w.type,Y.__formatReadable=R.textureFormatReadable(w.format),Y.__typeReadable=R.textureTypeReadable(w.type)),Y}this.readRenderTargetPixels=function(w,Y,ge,fe,te,gt,ht,it=0){if(!(w&&w.isWebGLRenderTarget)){Rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=pe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ht!==void 0&&(xt=xt[ht]),xt){_.bindFramebuffer(D.FRAMEBUFFER,xt);try{const Rt=w.textures[it],$t=Rt.format,It=Rt.type;w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+it);const bt=Yn(Rt);if(bt.__formatReadable===!1){Rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(bt.__typeReadable===!1){Rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-fe&&ge>=0&&ge<=w.height-te&&D.readPixels(Y,ge,fe,te,St.convert($t),St.convert(It),gt)}finally{const Rt=Pe!==null?pe.get(Pe).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(w,Y,ge,fe,te,gt,ht,it=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=pe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ht!==void 0&&(xt=xt[ht]),xt)if(Y>=0&&Y<=w.width-fe&&ge>=0&&ge<=w.height-te){_.bindFramebuffer(D.FRAMEBUFFER,xt);const Rt=w.textures[it],$t=Rt.format,It=Rt.type;w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+it);const bt=Yn(Rt);if(bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Pt),D.bufferData(D.PIXEL_PACK_BUFFER,gt.byteLength,D.STREAM_READ),D.readPixels(Y,ge,fe,te,St.convert($t),St.convert(It),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const ln=Pe!==null?pe.get(Pe).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,ln);const Yt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Ud(D,Yt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Pt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,gt),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(Pt),D.deleteSync(Yt),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Y=null,ge=0){const fe=Math.pow(2,-ge),te=Math.floor(w.image.width*fe),gt=Math.floor(w.image.height*fe),ht=Y!==null?Y.x:0,it=Y!==null?Y.y:0;Re.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,ge,0,0,ht,it,te,gt),_.unbindTexture()},this.copyTextureToTexture=function(w,Y,ge=null,fe=null,te=0,gt=0){let ht,it,xt,Rt,$t,It,bt,Pt,ln;const Yt=w.isCompressedTexture?w.mipmaps[gt]:w.image;if(ge!==null)ht=ge.max.x-ge.min.x,it=ge.max.y-ge.min.y,xt=ge.isBox3?ge.max.z-ge.min.z:1,Rt=ge.min.x,$t=ge.min.y,It=ge.isBox3?ge.min.z:0;else{const dn=Math.pow(2,-te);ht=Math.floor(Yt.width*dn),it=Math.floor(Yt.height*dn),w.isDataArrayTexture?xt=Yt.depth:w.isData3DTexture?xt=Math.floor(Yt.depth*dn):xt=1,Rt=0,$t=0,It=0}fe!==null?(bt=fe.x,Pt=fe.y,ln=fe.z):(bt=0,Pt=0,ln=0);const Wt=St.convert(Y.format),Dn=St.convert(Y.type);let wt;Y.isData3DTexture?(Re.setTexture3D(Y,0),wt=D.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(Re.setTexture2DArray(Y,0),wt=D.TEXTURE_2D_ARRAY):(Re.setTexture2D(Y,0),wt=D.TEXTURE_2D),_.activeTexture(D.TEXTURE0),_.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,Y.flipY),_.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),_.pixelStorei(D.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ln=_.getParameter(D.UNPACK_ROW_LENGTH),mn=_.getParameter(D.UNPACK_IMAGE_HEIGHT),qn=_.getParameter(D.UNPACK_SKIP_PIXELS),mt=_.getParameter(D.UNPACK_SKIP_ROWS),Qt=_.getParameter(D.UNPACK_SKIP_IMAGES);_.pixelStorei(D.UNPACK_ROW_LENGTH,Yt.width),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Yt.height),_.pixelStorei(D.UNPACK_SKIP_PIXELS,Rt),_.pixelStorei(D.UNPACK_SKIP_ROWS,$t),_.pixelStorei(D.UNPACK_SKIP_IMAGES,It);const wn=w.isDataArrayTexture||w.isData3DTexture,Zt=Y.isDataArrayTexture||Y.isData3DTexture;if(w.isDepthTexture){const dn=pe.get(w),Un=pe.get(Y),$e=pe.get(dn.__renderTarget),yi=pe.get(Un.__renderTarget);_.bindFramebuffer(D.READ_FRAMEBUFFER,$e.__webglFramebuffer),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let Di=0;Di<xt;Di++)wn&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,pe.get(w).__webglTexture,te,It+Di),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,pe.get(Y).__webglTexture,gt,ln+Di)),D.blitFramebuffer(Rt,$t,ht,it,bt,Pt,ht,it,D.DEPTH_BUFFER_BIT,D.NEAREST);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(te!==0||w.isRenderTargetTexture||pe.has(w)){const dn=pe.get(w),Un=pe.get(Y);_.bindFramebuffer(D.READ_FRAMEBUFFER,G),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,Q);for(let $e=0;$e<xt;$e++)wn?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,dn.__webglTexture,te,It+$e):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,dn.__webglTexture,te),Zt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Un.__webglTexture,gt,ln+$e):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Un.__webglTexture,gt),te!==0?D.blitFramebuffer(Rt,$t,ht,it,bt,Pt,ht,it,D.COLOR_BUFFER_BIT,D.NEAREST):Zt?D.copyTexSubImage3D(wt,gt,bt,Pt,ln+$e,Rt,$t,ht,it):D.copyTexSubImage2D(wt,gt,bt,Pt,Rt,$t,ht,it);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Zt?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(wt,gt,bt,Pt,ln,ht,it,xt,Wt,Dn,Yt.data):Y.isCompressedArrayTexture?D.compressedTexSubImage3D(wt,gt,bt,Pt,ln,ht,it,xt,Wt,Yt.data):D.texSubImage3D(wt,gt,bt,Pt,ln,ht,it,xt,Wt,Dn,Yt):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,gt,bt,Pt,ht,it,Wt,Dn,Yt.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,gt,bt,Pt,Yt.width,Yt.height,Wt,Yt.data):D.texSubImage2D(D.TEXTURE_2D,gt,bt,Pt,ht,it,Wt,Dn,Yt);_.pixelStorei(D.UNPACK_ROW_LENGTH,Ln),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mn),_.pixelStorei(D.UNPACK_SKIP_PIXELS,qn),_.pixelStorei(D.UNPACK_SKIP_ROWS,mt),_.pixelStorei(D.UNPACK_SKIP_IMAGES,Qt),gt===0&&Y.generateMipmaps&&D.generateMipmap(wt),_.unbindTexture()},this.initRenderTarget=function(w){pe.get(w).__webglFramebuffer===void 0&&Re.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Re.setTextureCube(w,0):w.isData3DTexture?Re.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Re.setTexture2DArray(w,0):Re.setTexture2D(w,0),_.unbindTexture()},this.resetState=function(){we=0,re=0,Pe=null,_.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ps}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=En._getDrawingBufferColorSpace(e),t.unpackColorSpace=En._getUnpackColorSpace()}}const Ai=Math.PI*2,x2=["spring","summer","autumn","winter"],M2=["clear","rain","snow","fog","storm"],_o={spring:{label:"春",title:"新绿",en:"Spring"},summer:{label:"夏",title:"浓荫",en:"Summer"},autumn:{label:"秋",title:"暖金",en:"Autumn"},winter:{label:"冬",title:"静雪",en:"Winter"}},xo={clear:{label:"晴",en:"Clear"},rain:{label:"雨",en:"Rain"},snow:{label:"雪",en:"Snow"},fog:{label:"雾",en:"Fog"},storm:{label:"雷暴",en:"Storm"}},Gt={width:8.4,depth:6.4,logRadius:.195,foundationY:.28,floorY:.34,frontZ:3.2,backZ:-3.2,leftX:-4.2,rightX:4.2,ridgeY:5.45,eaveY:3.08,roof:{overhangX:.78,overhangFront:.7,overhangBack:.55,thickness:.2},porch:{width:6.5,floorY:.34,roofY:3.5,frontZ:5.25,postX:2.85,stepRise:.12},door:{z:3.2,width:1.14,height:2.16},windows:[{id:"front-left",face:"front",x:-2.62,z:3.205,y:1.66,width:1.36,height:1.16,southFacing:!0},{id:"front-right",face:"front",x:2.62,z:3.205,y:1.66,width:1.36,height:1.16,southFacing:!0},{id:"side-right",face:"right",x:4.205,z:-.55,y:1.72,width:1.18,height:1.02,southFacing:!1}],room:{halfX:3.86,halfZ:2.86,height:3,wallThickness:.3},chimney:{x:-4.72,z:-.85,width:1.32,depth:1.5,height:7.15,capY:7.3},smokeAnchor:{x:-4.72,y:7.45,z:-.85},doorAnchor:{x:0,y:1,z:3.9},interiorDoorAnchor:{x:0,y:1,z:2.35}},as={...Gt.room,walkY:.39,furniture:{fireplace:{x:-3.78,z:-.62},bookshelf:{x:-1.5,z:-2.76,w:1.66,d:.36,h:2.08},bed:{x:2.48,z:-1.82,w:1.62,d:2.08},table:{x:1.78,z:1.02,w:1.5,d:.92},armchair:{x:-2.58,z:-1.5},rug:{x:.16,z:.28,w:3.2,d:2.35},chandelier:{x:0,z:.05},entryRug:{x:0,z:2.25,w:1.35,d:.82}},interiorSpawn:{x:0,z:2.12}},Vt={terrainSize:150,path:{start:{x:0,z:5.35},end:{x:.4,z:17.5},width:1.55},well:{x:6.55,z:7.35,height:1.05},spawn:{x:0,z:12.8},player:{walkSpeed:3.2,runSpeed:5.9,eyeHeight:1.62,radius:.3,cameraDistance:5.2,cameraMinDistance:2.4,cameraMaxDistance:9.2},trees:[{x:-10.9,z:8.4,scale:1.24,type:"oak"},{x:10.7,z:9.6,scale:1.12,type:"birch"},{x:-11.6,z:-4.2,scale:1.05,type:"oak"},{x:11.2,z:-3,scale:1.2,type:"pine"},{x:-7.6,z:-13.2,scale:1,type:"oak"},{x:6.9,z:-14.5,scale:1.08,type:"pine"}],interactDistance:2.55},ml={day:{hour:13.2,label:"白天",en:"Day"},dusk:{hour:18.05,label:"黄昏",en:"Dusk"},night:{hour:22.35,label:"夜晚",en:"Night"},auto:{label:"自动",en:"Auto"}},Ys={season:"autumn",weather:"clear",timeOfDay:16.9,timeMode:"manual",hour:16.9},Rc={spring:{leaf:["#8fbf5a","#a9ce6c","#76aa49","#c0d98a"],leafFall:["#d9c6a1","#b7c68d"],ground:"#4a4731",tint:"#c8d5b8"},summer:{leaf:["#4e7f32","#5e9139","#3c6927","#74a044"],leafFall:["#7c9b4f"],ground:"#3b4028",tint:"#d2d8b8"},autumn:{leaf:["#c66a2e","#d9933b","#9d4c27","#e0b257","#a75a2a"],leafFall:["#c97734","#d99b46","#a84d2a","#e3b25e"],ground:"#3d3321",tint:"#e8c294"},winter:{leaf:["#b8b09f","#c8c1b1"],leafFall:["#e8e4dc"],ground:"#c9d2d4",tint:"#cbd9e0"}},Rf={sun:'<circle cx="12" cy="12" r="4.1"/><path d="M12 2.7v2.2M12 19.1v2.2M2.7 12h2.2M19.1 12h2.2M5.15 5.15l1.55 1.55M17.3 17.3l1.55 1.55M18.85 5.15l-1.55 1.55M6.7 17.3l-1.55 1.55"/>',dusk:'<path d="M2.9 18.4h18.2"/><path d="M7.5 18.4a4.5 4.5 0 0 1 9 0"/><path d="M12 9.6V7.3M6.2 12.4l-1.6-1M17.8 12.4l1.6-1M7.6 6.7l1.3 1.3M16.4 6.7l-1.3 1.3"/><path d="M5.2 21.2h4.2M14.6 21.2h4.2" opacity=".5"/>',moon:'<path d="M20.6 13.1A8.4 8.4 0 1 1 10.9 3.3a6.7 6.7 0 0 0 9.7 9.8Z"/>',rain:'<path d="M6.9 15.1a3.4 3.4 0 0 1 .2-6.8 4.8 4.8 0 0 1 9.2 1.3 3.1 3.1 0 0 1-.2 5.5H6.9Z"/><path d="M8.7 17.9l-.8 2.2M12 17.9l-.8 2.2M15.3 17.9l-.8 2.2"/>',snow:'<path d="M12 2.9v18.2M4.1 6.9l15.8 10.2M19.9 6.9 4.1 17.1"/><path d="M9.8 4.5 12 6.3l2.2-1.8M9.8 19.5 12 17.7l2.2 1.8M4.7 9.6l2.9.4.4-2.9M19.3 14.4l-2.9-.4-.4 2.9M19.3 9.6l-2.9.4-.4-2.9M4.7 14.4l2.9-.4.4 2.9"/>',fog:'<path d="M3.4 7.9h12.4M7.6 11.7h13M4.2 15.5h12.2M8.4 19.3h8.4"/>',storm:'<path d="M6.9 14.4a3.4 3.4 0 0 1 .2-6.8 4.8 4.8 0 0 1 9.2 1.3 3.1 3.1 0 0 1-.2 5.5H6.9Z"/><path d="M13.2 14.9 10.6 19h2.5l-.9 3.1 3.7-4.6h-2.5l1.6-2.6"/>',spring:'<path d="M12 21.2v-7.5"/><path d="M12 15.5c0-3.4-2.5-5.7-5.9-5.7 0 3.4 2.4 5.7 5.9 5.7Z"/><path d="M12 14c0-3 2.3-5.1 5.4-5.1 0 3-2.2 5.1-5.4 5.1Z"/><circle cx="12" cy="4.9" r="1.9"/><path d="M12 6.8v1.9"/>',summer:'<path d="M20.2 5.2C13 5.2 5.2 8.6 5.2 15c0 2.6 1.9 4.2 4.3 4.2 6.7 0 10.7-6.6 10.7-14Z"/><path d="M6.1 19.7C9.1 16.1 13.2 12.2 17.6 9"/>',autumn:'<path d="M18.7 4.5C11.5 5.7 5.4 9.9 6.2 15.8c.3 2.2 2.4 3.6 4.6 3.1 5.9-1.2 8.6-7.2 7.9-14.4Z"/><path d="M7.3 18.3C10 14.6 13.5 10.6 17.2 7.3"/><path d="M4.3 8.4c-1.2 1.6-1.5 3.4-.8 5.1" opacity=".55"/>',clear:'<circle cx="12" cy="12" r="4.2"/><path d="M12 2.6v2.3M12 19.1v2.3M2.6 12h2.3M19.1 12h2.3M5 5l1.6 1.6M17.4 17.4 19 19M19 5l-1.6 1.6M6.6 17.4 5 19"/>',person:'<circle cx="12" cy="7.1" r="2.7"/><path d="M5.1 20.4v-2.2c0-3.1 3.1-5.1 6.9-5.1s6.9 2 6.9 5.1v2.2"/>',eye:'<path d="M2.6 12S6.2 5.9 12 5.9 21.4 12 21.4 12 17.8 18.1 12 18.1 2.6 12 2.6 12Z"/><circle cx="12" cy="12" r="2.7"/>',clock:'<circle cx="12" cy="12" r="8.4"/><path d="M12 7.2v5l3.1 1.9"/>',auto:'<path d="M19.6 12a7.6 7.6 0 1 1-2.2-5.4"/><path d="M20 3.9v4.4h-4.4"/>',close:'<path d="M6.4 6.4l11.2 11.2M17.6 6.4 6.4 17.6"/>'},Pf={spring:"spring",summer:"summer",autumn:"autumn",winter:"snow"},Lf={clear:"clear",rain:"rain",snow:"snow",fog:"fog",storm:"storm"},el={day:{label:"白天",icon:"sun"},dusk:{label:"黄昏",icon:"dusk"},night:{label:"夜晚",icon:"moon"}},y2=["spring","summer","autumn","winter"],S2=["clear","rain","snow","fog","storm"],b2=["day","dusk","night"],If={day:"sun",dusk:"dusk",night:"moon"};function gl(i){return`<svg class="ui-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${Rf[i]||Rf.sun}</svg>`}function st(i,e,t){const n=document.createElement(i);return e&&(n.className=e),t&&t.appendChild(n),n}function cr(i,e,t){const n=st("span",e,t);return n.innerHTML=gl(i),n.setAttribute("aria-hidden","true"),n}function Hi(i,e){const t=e==null?"":String(e);i.textContent!==t&&(i.textContent=t)}function Ar(i,e,t){return Math.min(t,Math.max(e,i))}function tl(i){const e=Math.round(Ar(i,0,24)*60)%1440,t=Math.floor(e/60),n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Df(i){return i>=20.4||i<5.4?"night":i>=16.5?"dusk":"day"}function w2(i){return i>=20.4||i<5.4}function T2(i){if(typeof i!="string")return null;const e=i.match(/(\d{1,2})\s*[:：]\s*(\d{2})/);return e?Ar(Number(e[1])+Number(e[2])/60,0,24):null}function E2(i={}){const e=i||{},t=document.getElementById("ui-root")||(()=>{const I=document.createElement("div");return I.id="ui-root",document.body.appendChild(I),I})();t.innerHTML="",t.classList.add("ui-root"),t.dataset.mode="third";const n=document.getElementById("boot-fallback");n&&(n.style.display="none");const s={env:null,info:null,mode:"third",phase:null,panelOpen:!1,panelId:null,lastFocus:null,draggingTime:!1,ready:!1,locked:!1,sliderHour:Ar(Number(Ys.hour)||17.2,0,24),promptAction:null,toastTimers:new Set,loaderRemoved:!1};st("div","hud-scrim hud-scrim--top",t),st("div","hud-scrim hud-scrim--bottom",t);const r=st("header","hud-top",t),o=st("div","title-lockup",r);o.setAttribute("aria-label","林间小屋 · Cabin in the Woods");const a=st("h1","title-cn",o);a.textContent="林间小屋";const c=st("div","title-rule",o);c.setAttribute("aria-hidden","true"),st("span","title-rule-line",c),st("span","title-rule-gem",c),st("span","title-rule-line",c);const l=st("p","title-en",o);l.textContent="CABIN IN THE WOODS";const u=st("p","title-line",o);u.textContent="灶膛里有火，林子深处有风。";const d=st("aside","status-card",r);d.setAttribute("aria-label","环境状态");const f=st("div","status-clock-row",d);cr("clock","status-ic",f);const h=st("span","status-clock",f);h.textContent="17:12";const g=st("span","status-phase",f),v=cr("dusk","status-ic status-ic--phase",g),m=st("span","status-phase-label",g);m.textContent="黄昏",st("div","status-hairline",d);const p=st("div","status-env-row",d),b=st("span","status-env-item",p);b.title="季节";const P=cr("autumn","status-ic status-ic--season",b),S=st("span","status-env-label",b);S.textContent="秋",st("span","status-env-sep",p).textContent="·";const T=st("span","status-env-item",p);T.title="天气";const E=cr("clear","status-ic status-ic--weather",T),U=st("span","status-env-label",T);U.textContent="晴";const M=st("span","status-spark",p);M.title="窗前亮着灯",M.setAttribute("aria-label","窗前亮着灯"),M.setAttribute("role","img");const C=st("div","mode-chip",t);C.id="mode-chip",C.setAttribute("aria-label","当前视角");const F=cr("person","mode-chip-ic",C),k=st("span","mode-chip-label",C);k.textContent="第三人称";const V=st("span","mode-chip-key",C);V.textContent="V";const ie=st("div","reticle",t);ie.id="reticle",ie.setAttribute("aria-hidden","true"),st("span","reticle-ring",ie),st("span","reticle-dot",ie);const G=st("div","hud-bottom",t),Q=st("div","interaction-prompt",G);Q.id="interaction-prompt",Q.hidden=!0,Q.setAttribute("role","status"),Q.setAttribute("aria-live","polite");const we=st("span","prompt-key",Q);we.textContent="E";const re=st("span","prompt-action",Q),Pe=st("div","environment-dock",G);Pe.id="environment-dock",Pe.setAttribute("role","group"),Pe.setAttribute("aria-label","环境设置");const ye=st("section","dock-group dock-group--season",Pe);ye.setAttribute("role","group"),ye.setAttribute("aria-label","季节"),st("div","dock-group-label",ye).textContent="季节";const Te=st("div","dock-row",ye),Ie=[];for(const I of y2){const O=_o[I],N=st("button","dock-btn season-btn",Te);N.type="button",N.dataset.season=I,N.setAttribute("aria-pressed","false"),N.setAttribute("aria-label",`季节：${O.label}（${O.title}）`),N.title=`${O.label} · ${O.title}`,cr(Pf[I],"dock-btn-ic",N);const q=st("span","dock-btn-label",N);q.textContent=O.label,N.addEventListener("click",()=>e.onSeasonChange&&e.onSeasonChange(I)),Ie.push(N)}st("div","dock-divider",Pe).setAttribute("aria-hidden","true");const yt=st("section","dock-group dock-group--time",Pe);yt.setAttribute("role","group"),yt.setAttribute("aria-label","时间");const Et=st("div","dock-head",yt);st("div","dock-group-label",Et).textContent="时辰";const jt=st("span","time-readout",Et);jt.textContent="17:12";const W=st("button","auto-toggle",Et);W.id="auto-toggle",W.type="button",W.setAttribute("role","switch"),W.setAttribute("aria-checked","false"),W.setAttribute("aria-label","自动推进时间");const lt=st("span","auto-label",W);lt.textContent="自动";const Se=st("span","switch",W);Se.setAttribute("aria-hidden","true"),st("span","switch-knob",Se),W.addEventListener("click",()=>{const I=W.getAttribute("aria-checked")!=="true";rt(I),e.onAutoToggle&&e.onAutoToggle(I)});const $=st("div","time-rail",yt),Ee=document.createElement("input");Ee.type="range",Ee.id="time-slider",Ee.className="time-slider",Ee.min="0",Ee.max="24",Ee.step="0.05",Ee.value=String(s.sliderHour),Ee.setAttribute("aria-label","时间，0 到 24 时"),Ee.setAttribute("aria-valuetext","17:12 黄昏"),$.appendChild(Ee),Ee.style.setProperty("--pct",`${s.sliderHour/24*100}%`);const Ae=st("div","time-ticks",$);Ae.setAttribute("aria-hidden","true");for(let I=0;I<=24;I+=3){const O=st("span",`time-tick${I%6===0?" time-tick--major":""}`,Ae);O.style.left=`${I/24*100}%`}const Je=st("div","time-presets",$);Je.setAttribute("role","group"),Je.setAttribute("aria-label","时间预设");const Ye=[];for(const I of b2){const O=el[I],N=ml[I].label||O.label,q=st("button","time-preset",Je);q.type="button",q.dataset.timePreset=I,q.setAttribute("aria-pressed","false"),q.setAttribute("aria-label",`时间预设：${N}`),cr(If[I],"time-preset-ic",q);const he=st("span","time-preset-label",q);he.textContent=N,q.addEventListener("click",()=>e.onTimePreset&&e.onTimePreset(I)),Ye.push(q)}Ee.addEventListener("pointerdown",()=>{s.draggingTime=!0,t.classList.add("is-time-dragging")});const xe=()=>{s.draggingTime&&(s.draggingTime=!1,t.classList.remove("is-time-dragging"))};window.addEventListener("pointerup",xe,!0),window.addEventListener("pointercancel",xe,!0),Ee.addEventListener("input",()=>{const I=Ar(Number(Ee.value)||0,0,24);Be(I,!0),e.onTimeInput&&e.onTimeInput(I)}),st("div","dock-divider",Pe).setAttribute("aria-hidden","true");const B=st("section","dock-group dock-group--weather",Pe);B.setAttribute("role","group"),B.setAttribute("aria-label","天气"),st("div","dock-group-label",B).textContent="天气";const ee=st("div","dock-row",B),ue=[];for(const I of S2){const O=xo[I],N=st("button","dock-btn weather-btn",ee);N.type="button",N.dataset.weather=I,N.setAttribute("aria-pressed","false"),N.setAttribute("aria-label",`天气：${O.label}（${O.en}）`),N.title=`${O.label} · ${O.en}`,cr(Lf[I],"dock-btn-ic",N);const q=st("span","dock-btn-label",N);q.textContent=O.label,N.addEventListener("click",()=>e.onWeatherChange&&e.onWeatherChange(I)),ue.push(N)}const ve=st("footer","hint-bar",G);ve.setAttribute("aria-label","操作提示");const He=st("div","hint-set hint-set--third",ve);Ft(He,[["WASD","移动",!1],["Shift","加速",!0],["拖拽","旋转",!0],["滚轮","缩放",!0],["V","第一人称",!1],["E","互动",!1]]);const vt=st("div","hint-set hint-set--first",ve);Ft(vt,[["WASD","移动",!1],["Shift","加速",!0],["拖拽","环视",!0],["V","返回屋外",!1],["E","互动",!1]]);const pt=st("div","toast-layer",t);pt.id="toast-layer",pt.setAttribute("role","status"),pt.setAttribute("aria-live","polite");const ce=st("div","note-layer",t);ce.id="note-layer",ce.hidden=!0;const Xe=st("div","note-backdrop",ce);Xe.setAttribute("aria-hidden","true");const D=st("article","note-panel",ce);D.id="note-panel",D.setAttribute("role","dialog"),D.setAttribute("aria-modal","true"),D.setAttribute("aria-labelledby","note-title"),D.setAttribute("aria-describedby","note-body");const Ve=st("button","note-close",D);Ve.id="note-close",Ve.type="button",Ve.setAttribute("aria-label","关闭手记"),Ve.innerHTML=gl("close"),st("span","note-frame",D).setAttribute("aria-hidden","true");const tt=st("p","note-eyebrow",D);tt.textContent="林间手记";const R=st("h2","note-title",D);R.id="note-title";const _=st("div","note-body",D);_.id="note-body";const J=st("p","note-footer",D),pe=st("p","note-esc",D),Re=st("span","note-esc-key",pe);Re.textContent="Esc";const et=document.createTextNode(" 关闭手记");pe.appendChild(et);let Qe=null;function Le(){Qe=st("div","ui-loading",t),Qe.id="ui-loading",Qe.setAttribute("role","status"),Qe.setAttribute("aria-live","polite");const I=st("div","loader-inner",Qe);st("div","loader-glow",I).setAttribute("aria-hidden","true");const O=st("div","loader-title",I),N=st("div","loader-cn",O);N.textContent="林间小屋";const q=st("div","loader-rule",O);q.setAttribute("aria-hidden","true"),st("span","loader-rule-line",q),st("span","loader-rule-gem",q),st("span","loader-rule-line",q);const he=st("div","loader-en",O);he.textContent="CABIN IN THE WOODS";const Ue=st("p","loader-poetic",I);Ue.id="loader-label",Ue.textContent="正在点亮窗前的灯…";const ot=st("div","loader-track",I);ot.setAttribute("aria-hidden","true");const _t=st("div","loader-fill",ot);_t.style.width="0%";const at=st("div","loader-meta",I),Ze=st("span","loader-pct",at);Ze.id="loader-pct",Ze.textContent="0%";const De=st("span","loader-note",at);return De.textContent="为安静的人点亮一盏灯",{loading:Qe,label:Ue,fill:_t,pct:Ze}}const Oe=Le();let ct=0;function Ft(I,O){O.forEach(([N,q,he])=>{const Ue=st("span",`hint-item${he?" hint-optional":""}`,I),ot=st("span","hint-key",Ue);ot.textContent=N;const _t=st("span","hint-text",Ue);_t.textContent=q})}function rt(I){W.setAttribute("aria-checked",I?"true":"false"),W.classList.toggle("is-on",!!I),t.classList.toggle("is-auto",!!I)}function Be(I,O){const N=Ar(I,0,24);s.sliderHour=N,Ee.style.setProperty("--pct",`${N/24*100}%`),(Math.abs(Number(Ee.value)-N)>1e-4||O)&&(Ee.value=String(N)),Hi(jt,tl(N));const q=Ct(Df(N));Ee.setAttribute("aria-valuetext",`${tl(N)} ${q.label}`)}function Ct(I){return el[I]||el.dusk}function Tt(I,O){I.dataset.icon!==O&&(I.dataset.icon=O,I.innerHTML=gl(O))}function Xt(I,O,N){for(const q of I){const he=q.getAttribute(N)===O;q.setAttribute("aria-pressed",he?"true":"false")}}function j(I){for(const O of[r,C,G])I?O.setAttribute("inert",""):O.removeAttribute("inert");Ke()}function Ke(){s.panelOpen||s.locked?Pe.setAttribute("inert",""):Pe.removeAttribute("inert")}function ze(I){if(!s.panelOpen)return;s.panelOpen=!1,s.panelId=null,t.classList.remove("has-note"),ce.classList.remove("is-open"),j(!1),window.setTimeout(()=>{s.panelOpen||(ce.hidden=!0,ce.setAttribute("aria-hidden","true"))},320);const O=s.lastFocus;if(s.lastFocus=null,O&&typeof O.focus=="function"&&O.isConnected)try{O.focus({preventScroll:!0})}catch{}I&&e.onOverlayClose&&e.onOverlayClose()}function St(I){if(s.panelOpen){if(I.key==="Escape"||I.key==="Esc"){I.preventDefault(),I.stopPropagation(),ze(!0);return}if(I.key==="Tab"){I.preventDefault(),Ve.focus({preventScroll:!0});return}I.stopPropagation()}}window.addEventListener("keydown",St,!0),Ve.addEventListener("click",()=>ze(!0)),Xe.addEventListener("pointerdown",I=>{I.preventDefault(),I.stopPropagation(),ze(!0)}),ce.addEventListener("wheel",I=>I.stopPropagation(),{passive:!0});function At(I,O){const N={...s.env||{}};if(I)for(const en of Object.keys(I))I[en]!==void 0&&(N[en]=I[en]);const q={};if(O)for(const en of Object.keys(O))O[en]!==void 0&&(q[en]=O[en]);!s.env&&!I&&!O&&(N.season=Ys.season,N.weather=Ys.weather,N.hour=Ys.hour,N.timeMode=Ys.timeMode);const he=Ar(Number(N.hour!=null?N.hour:T2(q.clock)??Ys.hour),0,24);N.hour=he;const Ue=N.timeMode==="auto"?"auto":"manual";N.timeMode=Ue;const ot=N.isNight!=null?!!N.isNight:w2(he);N.isNight=ot;const _t=_o[N.season]?N.season:Ys.season,at=xo[N.weather]?N.weather:Ys.weather;N.season=_t,N.weather=at;const Ze=q.preset&&el[q.preset]?q.preset:Df(he),De=Ct(Ze),ft=q.clock!=null?String(q.clock):tl(he),Nt=q.phaseLabel!=null?String(q.phaseLabel):De.label;s.env=N,s.info=q,Hi(h,ft),Hi(m,Nt),Hi(S,_o[_t].label),Hi(U,xo[at].label),b.title=`季节 · ${_o[_t].title}`,T.title=`天气 · ${xo[at].en}`,Tt(v,If[Ze]),Tt(P,Pf[_t]),Tt(E,Lf[at]),M.classList.toggle("is-lit",!!N.windowGlow),M.title=N.windowGlow?"窗前亮着灯":"窗内没有灯光",s.phase!==Ze&&(s.phase=Ze,v.dataset.phase=Ze),Xt(Ie,_t,"data-season"),Xt(ue,at,"data-weather"),Xt(Ye,Ze,"data-time-preset"),rt(Ue==="auto"),!s.draggingTime&&document.activeElement!==Ee?Math.abs(Number(Ee.value)-he)>1e-4?Be(he,!1):Hi(jt,ft):Hi(jt,tl(s.sliderHour))}function qe(I){if(!I||!I.action){Q.hidden||(Q.classList.remove("is-visible"),Q.hidden=!0),s.promptAction=null;return}const O=String(I.action);Hi(we,I.key!=null?String(I.key):"E"),s.promptAction!==O&&(Hi(re,O),s.promptAction=O),Q.hidden?(Q.hidden=!1,requestAnimationFrame(()=>Q.classList.add("is-visible"))):Q.classList.add("is-visible")}function Bt(I){const O=I==="first"?"first":"third";s.mode=O,t.dataset.mode=O;const N=O==="first";Hi(k,N?"第一人称":"第三人称"),F.dataset.icon!==(N?"eye":"person")&&(F.dataset.icon=N?"eye":"person",F.innerHTML=gl(N?"eye":"person")),C.classList.toggle("is-first",N),C.setAttribute("aria-label",N?"当前视角：第一人称":"当前视角：第三人称")}function Dt(I){if(!I){_n();return}const O=s.panelOpen;if(!O){const he=document.activeElement;s.lastFocus=he&&he!==document.body?he:null}s.panelOpen=!0,s.panelId=I.id!=null?String(I.id):null,Hi(tt,I.eyebrow?String(I.eyebrow):"林间手记"),Hi(R,I.title?String(I.title):""),R.hidden=!I.title;const N=Array.isArray(I.body)?I.body:I.body!=null?[I.body]:[];_.innerHTML="";for(const he of N){const Ue=document.createElement("p");Ue.textContent=String(he),_.appendChild(Ue)}const q=Array.isArray(I.footer)?I.footer:I.footer!=null?[I.footer]:[];if(J.hidden=q.length===0,Hi(J,q.map(he=>String(he)).join("　·　")),ce.hidden=!1,ce.setAttribute("aria-hidden","false"),t.classList.add("has-note"),j(!0),!O)requestAnimationFrame(()=>{if(s.panelOpen){ce.classList.add("is-open");try{Ve.focus({preventScroll:!0})}catch{}}});else{ce.classList.add("is-open");try{Ve.focus({preventScroll:!0})}catch{}}}function _n(){ze(!1)}function ut(){return s.panelOpen}function fn(I){if(I==null||I==="")return;const O=st("div","toast",pt);st("span","toast-gem",O).setAttribute("aria-hidden","true");const N=st("span","toast-text",O);for(N.textContent=String(I);pt.children.length>3;)pt.firstElementChild.remove();requestAnimationFrame(()=>O.classList.add("is-in"));const q=window.setTimeout(()=>{O.classList.remove("is-in"),O.classList.add("is-out");const he=window.setTimeout(()=>{O.remove(),s.toastTimers.delete(he)},460);s.toastTimers.delete(q)},2800);s.toastTimers.add(q)}function gi(I,O){if(window.clearTimeout(ct),!Qe||!Qe.isConnected){const q=Le();Object.assign(Oe,q),s.loaderRemoved=!1}Qe=Oe.loading,Qe.hidden=!1,Qe.classList.remove("is-leaving"),Qe.setAttribute("aria-hidden","false"),Oe.loading=Qe;const N=Number(I);if(I==null||!Number.isFinite(N))Qe.classList.add("is-indeterminate"),Oe.pct.textContent="";else{Qe.classList.remove("is-indeterminate");const q=Ar(N,0,1);Oe.fill.style.width=`${q*100}%`,Oe.pct.textContent=`${Math.round(q*100)}%`}O!=null&&Hi(Oe.label,O),t.classList.remove("is-ready"),s.ready=!1}function z(){if(s.ready)return;s.ready=!0,window.clearTimeout(ct);const I=document.getElementById("boot-fallback");I&&I.remove(),Qe&&(Qe.classList.add("is-leaving"),Qe.setAttribute("aria-hidden","true"),ct=window.setTimeout(()=>{Qe&&Qe.remove(),s.loaderRemoved=!0,Oe.loading=null},1250)),requestAnimationFrame(()=>t.classList.add("is-ready"))}function X(I){const O=!!I;s.locked=O,t.classList.toggle("is-locked",O),t.setAttribute("aria-busy",O?"true":"false"),Ke()}return At(null,null),Bt("third"),{setEnvironment:At,setPrompt:qe,setMode:Bt,showPanel:Dt,hidePanel:_n,isPanelOpen:ut,notify:fn,setLoading:gi,setReady:z,setLocked:X}}function A2({onMuteChange:i}={}){let e=null,t=null,n=null,s=null,r=!1,o=!1,a=!1;const c={data:null};let l=0;const u={},d={bird:2.4,cricket:.6,thunder:8+Math.random()*8,crackle:.4,step:0},f={fire:null,curtains:null,panel:null},h={season:"autumn",weather:"clear",hour:16.9,interior:!1},g={wind:.55,rain:0,leaves:.3,fire:0,room:0,storm:0};let v=6500;function m(xe,B){return xe+Math.random()*(B-xe)}function p(xe,B,ee=.35){if(!e||!xe)return;const ue=e.currentTime;xe.cancelScheduledValues(ue),xe.setTargetAtTime(B,ue,ee)}function b(xe,B=!1){const ee=Math.floor(e.sampleRate*xe),ue=e.createBuffer(2,ee,e.sampleRate);for(let ve=0;ve<2;ve++){const He=ue.getChannelData(ve);let vt=0;for(let pt=0;pt<ee;pt++){const ce=Math.random()*2-1;B?(vt=(vt+.018*ce)/1.018,He[pt]=vt*3.2):He[pt]=ce}}return ue}function P(xe=2.1){const B=Math.floor(e.sampleRate*xe),ee=e.createBuffer(2,B,e.sampleRate);for(let ue=0;ue<2;ue++){const ve=ee.getChannelData(ue);let He=0;for(let vt=0;vt<B;vt++){const pt=Math.pow(1-vt/B,2.7);He=He*.82+(Math.random()*2-1)*.18,ve[vt]=He*pt}}return ee}function S(xe,B,ee={}){const ue=e.createBufferSource();ue.buffer=xe,ue.loop=!0,ue.loopStart=Math.random()*1.4,ue.loopEnd=ue.loopStart+Math.max(.8,xe.duration-1.5);let ve=ue;if(ee.filter){const vt=e.createBiquadFilter();if(vt.type=ee.filter.type||"lowpass",vt.frequency.value=ee.filter.frequency||1e3,vt.Q.value=ee.filter.q??.4,ve.connect(vt),ve=vt,ee.alsoFilter){const pt=e.createBiquadFilter();pt.type=ee.alsoFilter.type||"highpass",pt.frequency.value=ee.alsoFilter.frequency||100,ve.connect(pt),ve=pt}}const He=e.createGain();if(He.gain.value=ee.gain??0,ve.connect(He),ee.panner!==void 0){const vt=e.createStereoPanner();vt.pan.value=ee.panner,He.connect(vt),vt.connect(B)}else He.connect(B);return ue.start(),{source:ue,gainNode:He,gainParam:He.gain,filter:ve}}function T(xe,B=.12){const ee=e.createGain();if(ee.gain.value=1,ee.connect(xe),B>0){const ue=e.createGain();ue.gain.value=B,ee.connect(ue),ue.connect(s)}return ee}function E({type:xe="sine",freq:B=440,endFreq:ee=null,duration:ue=.2,gain:ve=.02,attack:He=.01,wet:vt=.12,pan:pt=0,delay:ce=0}){if(!e)return;const Xe=e.currentTime+ce,D=e.createOscillator(),Ve=e.createGain();D.type=xe,D.frequency.setValueAtTime(B,Xe),ee!=null&&D.frequency.exponentialRampToValueAtTime(Math.max(20,ee),Xe+ue),Ve.gain.setValueAtTime(1e-4,Xe),Ve.gain.exponentialRampToValueAtTime(Math.max(1e-4,ve),Xe+He),Ve.gain.exponentialRampToValueAtTime(1e-4,Xe+ue);let tt=Ve;if(pt){const R=e.createStereoPanner();R.pan.value=pt,Ve.connect(R),tt=R}tt.connect(T(u.sfx,vt)),D.connect(Ve),D.start(Xe),D.stop(Xe+ue+.03)}function U({duration:xe=.2,gain:B=.04,filterType:ee="bandpass",frequency:ue=1200,q:ve=.7,pan:He=0,wet:vt=.1,attack:pt=.008,delay:ce=0}){if(!e)return;const Xe=e.currentTime+ce,D=e.createBufferSource();D.buffer=u.noiseWhite,D.playbackRate.value=m(.82,1.2);const Ve=e.createBiquadFilter();Ve.type=ee,Ve.frequency.value=ue,Ve.Q.value=ve;const tt=e.createGain();tt.gain.setValueAtTime(1e-4,Xe),tt.gain.exponentialRampToValueAtTime(Math.max(1e-4,B),Xe+pt),tt.gain.exponentialRampToValueAtTime(1e-4,Xe+xe);let R=tt;if(He){const _=e.createStereoPanner();_.pan.value=He,tt.connect(_),R=_}D.connect(Ve),Ve.connect(tt),R.connect(T(u.sfx,vt)),D.start(Xe,Math.random()*2),D.stop(Xe+xe+.03)}function M(){if(e){e.state==="suspended"&&e.resume().catch(()=>{});return}const xe=window.AudioContext||window.webkitAudioContext;if(!xe)return;try{e=new xe({latencyHint:"interactive"})}catch{e=null;return}u.noiseWhite=b(3.2,!1),u.noiseBrown=b(4.5,!0),t=e.createGain(),t.gain.value=0;const B=e.createDynamicsCompressor();B.threshold.value=-20,B.knee.value=22,B.ratio.value=3.2,B.attack.value=.006,B.release.value=.25,n=e.createAnalyser(),n.fftSize=512,n.smoothingTimeConstant=.82,c.data=new Float32Array(n.fftSize);const ee=e.createConvolver();ee.buffer=P(2.3),s=e.createGain(),s.gain.value=.55,ee.connect(ee),ee.connect(t),u.ambient=e.createGain(),u.ambient.gain.value=.6,u.sfx=e.createGain(),u.sfx.gain.value=.75,u.ambient.connect(t),u.sfx.connect(t),u.ambient.connect(s),u.sfx.connect(s),t.connect(B),B.connect(n),n.connect(e.destination),u.windL=S(u.noiseBrown,u.ambient,{filter:{type:"lowpass",frequency:390,q:.3},panner:-.42,gain:0}),u.windR=S(u.noiseBrown,u.ambient,{filter:{type:"lowpass",frequency:560,q:.35},panner:.45,gain:0}),u.leaves=S(u.noiseWhite,u.ambient,{filter:{type:"bandpass",frequency:2100,q:.5},alsoFilter:{type:"highpass",frequency:1300},panner:.1,gain:0}),u.rain=S(u.noiseWhite,u.ambient,{filter:{type:"highpass",frequency:480,q:.2},alsoFilter:{type:"lowpass",frequency:7200,q:.3},gain:0}),u.rainFilter=e.createBiquadFilter(),u.rainFilter.type="lowpass",u.rainFilter.frequency.value=7200,u.rain.source.disconnect(),u.rain.filter.disconnect(),u.rain.gainNode.disconnect(),u.rain.source.connect(u.rainFilter),u.rainFilter.connect(u.rain.gainNode),u.rain.gainNode.connect(u.ambient),u.rainRumble=S(u.noiseBrown,u.ambient,{filter:{type:"lowpass",frequency:150,q:.4},gain:0}),u.fire=S(u.noiseBrown,u.ambient,{filter:{type:"lowpass",frequency:720,q:.5},gain:0}),u.room=S(u.noiseBrown,u.ambient,{filter:{type:"lowpass",frequency:210,q:.4},gain:0}),G(!0)}function C(){o||(M(),e&&(e.state==="suspended"&&e.resume().catch(()=>{}),r=!0,p(t.gain,.55,.8)))}function F(xe){o||xe?.target?.closest?.("#sound-toggle")||e&&e.state==="running"||C()}function k(){!e||!t||p(t.gain,o?1e-4:.55,o?.25:.9)}function V(){return o=!o,o||C(),k(),i?.(o),o}function ie(){if(!e)return;const xe=document.hidden;xe&&!a?e.suspend().catch(()=>{}):!xe&&a&&!o&&r&&e.resume().catch(()=>{}),a=xe}function G(xe=!1){if(!e)return;const B=xe?.01:.55,ee=g.wind,ue=.82+.12*Math.sin(l*.21)+.06*Math.sin(l*.47+1.7);p(u.windL?.gainParam,ee*.052*ue,B),p(u.windR?.gainParam,ee*.04*(1.05+.1*Math.sin(l*.17+2.1)),B),p(u.leaves?.gainParam,g.leaves*.018*(.6+.4*Math.sin(l*.8+.5)),B),p(u.rain?.gainParam,g.rain*.16,B),p(u.rainRumble?.gainParam,g.storm*.1,B),p(u.fire?.gainParam,g.fire*.05,B),p(u.room?.gainParam,g.room*.018,B);const ve=h.interior?1350:7600;Math.abs(ve-v)>15&&(v=ve,p(u.rainFilter?.frequency,ve,.7))}function Q(xe={}){if(!xe)return;h.season=xe.season||h.season,h.weather=xe.weather||h.weather,h.hour=Number.isFinite(xe.hour)?xe.hour:h.hour,h.interior=!!xe.interior;const B=h.weather,ee=B==="rain"||B==="storm";let ve=B==="storm"?1.15:B==="rain"?.85:B==="snow"?.75:B==="fog"?.45:.55;h.interior&&(ve*=.24),(h.hour<6||h.hour>19)&&(ve*=.65),g.wind=ve,g.rain=ee?B==="storm"?1.15:.9:0,g.storm=B==="storm"?1:0,g.leaves=h.interior?.06:ee?.18:.38,g.room=h.interior?1:0,G()}function we(xe){g.fire=h.interior&&xe?1:0,G(),e&&(d.crackle=.1)}function re(){e&&(E({type:"sine",freq:1180,endFreq:740,duration:.045,gain:.012,attack:.003,wet:.04}),U({duration:.035,gain:.008,filterType:"highpass",frequency:2800,wet:.02}))}function Pe(xe="leaves",B=!1){if(!e)return;const ee=m(-.3,.3),ue=B?1.25:1;xe==="stone"?(U({duration:.09,gain:.032*ue,filterType:"bandpass",frequency:m(650,980),q:1.4,pan:ee,wet:.08}),E({type:"sine",freq:m(95,125),endFreq:55,duration:.08,gain:.018*ue,attack:.004,wet:.06,pan:ee})):xe==="wood"?(U({duration:.11,gain:.035*ue,filterType:"lowpass",frequency:700,pan:ee,wet:.08}),E({type:"sine",freq:m(85,110),endFreq:58,duration:.1,gain:.024*ue,attack:.004,wet:.08,pan:ee})):(U({duration:.13,gain:.028*ue,filterType:"bandpass",frequency:m(1500,2500),q:.6,pan:ee,wet:.05}),U({duration:.06,gain:.015*ue,filterType:"highpass",frequency:3200,pan:ee,wet:.04,delay:.02}))}function ye(xe=!0){if(!e)return;const B=e.currentTime,ee=e.createOscillator(),ue=e.createBiquadFilter(),ve=e.createGain();ee.type="sawtooth",ee.frequency.setValueAtTime(xe?128:165,B),ee.frequency.exponentialRampToValueAtTime(xe?76:62,B+.62),ue.type="lowpass",ue.frequency.setValueAtTime(680,B),ue.frequency.exponentialRampToValueAtTime(240,B+.62),ue.Q.value=3.5,ve.gain.setValueAtTime(1e-4,B),ve.gain.exponentialRampToValueAtTime(.038,B+.07),ve.gain.exponentialRampToValueAtTime(1e-4,B+.68),ee.connect(ue),ue.connect(ve),ve.connect(T(u.sfx,.22)),ee.start(B),ee.stop(B+.72),U({duration:.06,gain:.025,filterType:"bandpass",frequency:420,q:2,wet:.12,delay:xe?.52:.58})}function Te(xe){if(e)if(xe){U({duration:.55,gain:.07,filterType:"lowpass",frequency:900,q:.8,wet:.25,attack:.04}),U({duration:.22,gain:.04,filterType:"highpass",frequency:1800,wet:.2,delay:.05}),E({type:"sine",freq:84,endFreq:52,duration:.4,gain:.035,wet:.2,pan:-.1});for(let B=0;B<4;B++)Se(()=>Ie(m(.7,1.2)),80+B*120)}else U({duration:.38,gain:.035,filterType:"lowpass",frequency:480,q:.6,wet:.15,attack:.02}),E({type:"sine",freq:110,endFreq:48,duration:.3,gain:.025,wet:.12})}function Ie(xe=1){if(!e)return;const B=m(-.65,.65);U({duration:m(.025,.055),gain:m(.012,.035)*xe,filterType:"highpass",frequency:m(1400,4200),pan:B,wet:.18}),Math.random()<.3&&E({type:"sine",freq:m(150,300),endFreq:m(60,120),duration:m(.03,.06),gain:m(.006,.016)*xe,wet:.15,pan:B})}function yt(){e&&(U({duration:.48,gain:.032,filterType:"bandpass",frequency:950,q:.6,wet:.15,attack:.06}),U({duration:.28,gain:.018,filterType:"highpass",frequency:2600,wet:.1,delay:.15}))}function Et(xe=!0){e&&(U({duration:.26,gain:.024,filterType:"bandpass",frequency:1700,q:.7,wet:.08,attack:.02}),U({duration:.12,gain:.012,filterType:"highpass",frequency:3200,wet:.05,delay:.08}))}function jt(){if(!e||h.interior)return;const xe=m(-.8,.8),B=m(2200,3200),ee=2+Math.floor(Math.random()*3);for(let ue=0;ue<ee;ue++){const ve=B*m(.82,1.24);E({type:"sine",freq:ve,endFreq:ve*m(1.08,1.38),duration:m(.07,.16),gain:m(.011,.022),attack:.006,wet:.28,pan:xe,delay:ue*m(.11,.19)})}}function W(){if(!e)return;const xe=m(-.7,.7),B=m(3900,4800);for(let ee=0;ee<3;ee++)E({type:"sine",freq:B,duration:.028,gain:.008,attack:.002,wet:.1,pan:xe,delay:ee*.065})}function lt(){if(!e)return;const xe=e.currentTime,B=e.createBufferSource();B.buffer=u.noiseBrown,B.loop=!0,B.playbackRate.value=m(.55,.8);const ee=e.createBiquadFilter();ee.type="lowpass",ee.frequency.value=m(90,180),ee.Q.value=.6;const ue=e.createGain();ue.gain.setValueAtTime(1e-4,xe),ue.gain.exponentialRampToValueAtTime(m(.09,.16),xe+.16),ue.gain.exponentialRampToValueAtTime(1e-4,xe+m(2.2,4)),B.connect(ee),ee.connect(ue),ue.connect(T(u.sfx,.35)),B.start(xe),B.stop(xe+4.2)}function Se(xe,B){try{window.setTimeout(xe,B)}catch{}}function $(xe,B){if(B)return"wood";if(!xe)return"leaves";const{x:ee,z:ue}=xe;return ue>3&&ue<5.45&&Math.abs(ee)<3.3?"wood":ue>=5.3&&ue<17.5&&Math.abs(ee)<1.45?"stone":"leaves"}function Ee(xe,B={}){if(l+=Math.min(xe||0,.1),!e)return;if(B.season&&(h.season=B.season),B.weather&&(h.weather=B.weather),Number.isFinite(B.hour)&&(h.hour=B.hour),B.interior!==void 0&&(h.interior=!!B.interior),g.fire=h.interior&&B.fireplaceOn?1:0,f.fire===null?f.fire=!!B.fireplaceOn:!!B.fireplaceOn!==f.fire&&(f.fire=!!B.fireplaceOn,Te(f.fire)),f.curtains===null?f.curtains=!!B.curtainsOpen:!!B.curtainsOpen!==f.curtains&&(f.curtains=!!B.curtainsOpen,h.interior&&yt()),f.panel===null?f.panel=!!B.panelOpen:!!B.panelOpen!==f.panel&&(f.panel=!!B.panelOpen,Et(f.panel)),!!B.moving&&Number(B.speed)>.35){if(d.step-=xe,d.step<=0){const Xe=Number(B.speed)||0,D=Xe>4.4?.3:Xe>2.8?.4:.55;d.step=D*m(.92,1.12),Pe($(B.position,h.interior),Xe>4.4)}}else d.step=Math.min(d.step,.18);g.fire>.15&&(d.crackle-=xe,d.crackle<=0&&(d.crackle=m(.18,.7),Ie(m(.75,1.1))));const ue=B.overcast??0,ve=h.weather==="clear"&&ue<.35,He=h.hour<6||h.hour>19,vt=h.hour>=6.5&&h.hour<=18,pt=!h.interior&&ve&&vt,ce=!h.interior&&h.season==="summer"&&He&&ve;d.bird-=xe,d.bird<=0&&(pt&&jt(),d.bird=pt?m(2.4,6.5):2),d.cricket-=xe,d.cricket<=0&&(ce&&W(),d.cricket=ce?m(1,2.4):2),d.thunder-=xe,d.thunder<=0&&(h.weather==="storm"&&lt(),d.thunder=h.weather==="storm"?m(7,18):8),G(),p(u.fire?.gainParam,g.fire*.05+(g.fire>0?.006:0),.4)}function Ae(xe){xe&&xe.addEventListener("click",B=>{const ee=B.target?.closest?.("button");!ee||ee.id==="sound-toggle"||re()},{passive:!0})}function Je(){if(!e||!n||!c.data)return 0;n.getFloatTimeDomainData(c.data);let xe=0;for(let B=0;B<c.data.length;B++)xe+=c.data[B]*c.data[B];return Math.sqrt(xe/c.data.length)}function Ye(){window.removeEventListener("pointerdown",F,!0),window.removeEventListener("keydown",F,!0),document.removeEventListener("visibilitychange",ie),e&&e.close().catch(()=>{}),e=null,r=!1}return window.addEventListener("pointerdown",F,!0),window.addEventListener("keydown",F,!0),document.addEventListener("visibilitychange",ie),{attachUI:Ae,setEnvironment:Q,setFireState:we,update:Ee,toggleMute:V,playDoor:ye,playClick:re,getLevel:Je,dispose:Ye,get muted(){return o},get started(){return!!(e&&r)},get contextState(){return e?e.state:"not-created"}}}const Ko=new A;function rs(i,e,t,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Ko.copy(e),Ko[n]=0,Ko.normalize();const l=.5*o/(o+a),u=1-Ko.angleTo(i)/c;return Math.sign(Ko[t])===1?u*l:a/(o+a)+l+l*(1-u)}class os extends Zn{constructor(e=1,t=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new A,l=new A,u=new A(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,h=this.attributes.uv.array,g=d.length/6,v=new A,m=.5/o;for(let p=0,b=0;p<d.length;p+=3,b+=2)switch(c.fromArray(d,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[p+0]=u.x*Math.sign(c.x)+l.x*r,d[p+1]=u.y*Math.sign(c.y)+l.y*r,d[p+2]=u.z*Math.sign(c.z)+l.z*r,f[p+0]=l.x,f[p+1]=l.y,f[p+2]=l.z,Math.floor(p/g)){case 0:v.set(1,0,0),h[b+0]=rs(v,l,"z","y",r,n),h[b+1]=1-rs(v,l,"y","z",r,t);break;case 1:v.set(-1,0,0),h[b+0]=1-rs(v,l,"z","y",r,n),h[b+1]=1-rs(v,l,"y","z",r,t);break;case 2:v.set(0,1,0),h[b+0]=1-rs(v,l,"x","z",r,e),h[b+1]=rs(v,l,"z","x",r,n);break;case 3:v.set(0,-1,0),h[b+0]=1-rs(v,l,"x","z",r,e),h[b+1]=1-rs(v,l,"z","x",r,n);break;case 4:v.set(0,0,1),h[b+0]=1-rs(v,l,"x","y",r,e),h[b+1]=1-rs(v,l,"y","x",r,t);break;case 5:v.set(0,0,-1),h[b+0]=rs(v,l,"x","y",r,e),h[b+1]=1-rs(v,l,"y","x",r,t);break}}static fromJSON(e){return new os(e.width,e.height,e.depth,e.segments,e.radius)}}const Ge=Math.PI*2;function Ht(i=1){let e=i>>>0;return function(){e+=1831565813;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function y(i,e,t){return e+(t-e)*i()}function Ci(i,e){return e[Math.floor(i()*e.length)%e.length]}function vn(i,e,t){return Math.max(e,Math.min(t,i))}function Zi(i,e,t){return i+(e-i)*t}function cs(i,e,t){const n=vn((t-i)/(e-i),0,1);return n*n*(3-2*n)}function Sn(i,e,t,n={}){const s=document.createElement("canvas");s.width=i,s.height=e;const r=s.getContext("2d");t(r,i,e);const o=new Ep(s);return o.colorSpace=n.srgb===!1?Zs:Yi,o.wrapS=n.wrapS??Co,o.wrapT=n.wrapT??Co,o.anisotropy=n.anisotropy??8,n.repeat&&o.repeat.set(n.repeat[0],n.repeat[1]),n.rotation&&(o.center.set(.5,.5),o.rotation=n.rotation),o.needsUpdate=!0,o}function li(i,e,t,n,s=.06,r=1){const o=i.getImageData(0,0,e,t),a=o.data,c=s*255;for(let l=0;l<a.length;l+=4){const u=(n()-.5)*c*r;a[l]=vn(a[l]+u,0,255),a[l+1]=vn(a[l+1]+u,0,255),a[l+2]=vn(a[l+2]+u,0,255)}i.putImageData(o,0,0)}function nl(i,e,t=1){const n=Math.sin(i*127.1+e*311.7+t*74.7)*43758.5453123;return n-Math.floor(n)}function Cu(i,e,t=1){const n=Math.floor(i),s=Math.floor(e),r=i-n,o=e-s,a=r*r*(3-2*r),c=o*o*(3-2*o),l=nl(n,s,t),u=nl(n+1,s,t),d=nl(n,s+1,t),f=nl(n+1,s+1,t);return Zi(Zi(l,u,a),Zi(d,f,a),c)}function Cl(i,e,t=4,n=1){let s=0,r=.5,o=1;for(let a=0;a<t;a++)s+=Cu(i*o,e*o,n+a)*r,o*=2.07,r*=.5;return s}function As(i={}){const{size:e=512,base:t="#6f4b2e",light:n="#a67b4c",dark:s="#3d2817",planks:r=0,plankGap:o=.025,vertical:a=!1,seed:c=7,repeat:l=[1,1]}=i,u=e,d=e,f=Sn(u,d,h=>{const g=Ht(c);h.fillStyle=t,h.fillRect(0,0,u,d);for(let m=0;m<22;m++){const p=g()*u,b=y(g,12,90),P=h.createLinearGradient(p,0,p+b,0);P.addColorStop(0,"rgba(0,0,0,0)"),P.addColorStop(.5,g()>.45?n:s),P.addColorStop(1,"rgba(0,0,0,0)"),h.globalAlpha=y(g,.025,.1),h.fillStyle=P,h.fillRect(p,0,b,d)}h.globalAlpha=1;const v=380;for(let m=0;m<v;m++){const p=g()*d,b=y(g,.04,.22),P=y(g,1,8),S=y(g,.008,.035);h.beginPath(),h.strokeStyle=g()>.5?s:n,h.globalAlpha=b,h.lineWidth=y(g,.6,2.4);for(let T=0;T<=u;T+=8){const E=p+Math.sin(T*S+m)*P+Math.sin(T*S*2.7)*P*.23;T===0?h.moveTo(T,E):h.lineTo(T,E)}h.stroke()}for(let m=0;m<6;m++){const p=g()*u,b=g()*d,P=y(g,5,15),S=P*y(g,.35,.65);for(let T=4;T>=0;T--)h.beginPath(),h.ellipse(p,b,P*(1+T*.5),S*(1+T*.55),g()*.2,0,Ge),h.strokeStyle=T===0?"#24150a":s,h.globalAlpha=T===0?.55:.16,h.lineWidth=T===0?2:2.5,h.stroke();h.globalAlpha=1}if(r>0){const m=(a?u:d)/r;for(let p=0;p<=r;p++){const b=p*m;h.globalAlpha=.55,h.fillStyle="#1d1208",a?h.fillRect(b-o*u/2,0,o*u,d):h.fillRect(0,b-o*d/2,u,o*d),h.globalAlpha=.14,h.fillStyle=n,a?h.fillRect(b+2,0,2,d):h.fillRect(0,b+2,u,2)}h.globalAlpha=1}li(h,u,d,g,.05)},{repeat:l});return a&&(f.center.set(.5,.5),f.rotation=Math.PI/2),f}function Ru(i={}){const{size:e=512,seed:t=21,base:n="#57412d",dark:s="#2b1e13",light:r="#8a6a48",repeat:o=[1,1]}=i;return Sn(e,e,(a,c,l)=>{const u=Ht(t);a.fillStyle=n,a.fillRect(0,0,c,l);for(let d=0;d<280;d++){const f=u()*c,h=y(u,30,240),g=u()*l;a.beginPath();const v=y(u,1,10);let m=f;a.moveTo(m,g);for(let p=0;p<h;p+=10)m+=Math.sin(p*.03+d)*1.7,a.lineTo(m+Math.sin(p*.13)*v*.3,g+p);a.strokeStyle=u()>.52?s:r,a.globalAlpha=y(u,.08,.42),a.lineWidth=v,a.lineCap="round",a.stroke()}for(let d=0;d<60;d++){a.beginPath(),a.fillStyle=u()>.4?"rgba(90,105,54,.22)":"rgba(120,125,80,.16)";const f=u()*c,h=u()*l;a.ellipse(f,h,y(u,2,12),y(u,1,5),u()*Ge,0,Ge),a.fill()}li(a,c,l,u,.1)},{repeat:o})}function Rl(i={}){const{size:e=512,seed:t=11,repeat:n=[1,1],base:s="#4b4a43",light:r="#8d887b",dark:o="#25251f"}=i,a=e,c=e;return Sn(a,c,l=>{const u=Ht(t);l.fillStyle=o,l.fillRect(0,0,a,c);const d=5,f=c/d;for(let h=0;h<d;h++){let g=-y(u,.2,.7)*a;for(;g<a;){const v=y(u,.16,.34)*a,m=f*y(u,.82,1.06),p=h*f+y(u,1,4);l.beginPath();const b=()=>y(u,-4,4);l.moveTo(g+b(),p+b()),l.lineTo(g+v+b(),p+b()),l.lineTo(g+v+b(),p+m+b()),l.lineTo(g+b(),p+m+b()),l.closePath();const P=y(u,0,1);l.fillStyle=P>.7?"#6b675c":P>.35?s:"#5d5a51",l.fill();const S=l.createLinearGradient(g,p,g+v,p+m);S.addColorStop(0,"rgba(255,245,220,.18)"),S.addColorStop(.35,"rgba(255,255,255,0)"),S.addColorStop(1,"rgba(0,0,0,.3)"),l.fillStyle=S,l.fill();for(let T=0;T<14;T++)l.fillStyle=u()>.5?"rgba(255,255,255,.08)":"rgba(0,0,0,.14)",l.fillRect(g+u()*v,p+u()*m,y(u,1,3),y(u,1,3));l.beginPath(),l.strokeStyle=r,l.globalAlpha=.16,l.lineWidth=2,l.moveTo(g+2,p+2),l.lineTo(g+v-2,p+2),l.stroke(),l.globalAlpha=1,g+=v+y(u,4,10)}}for(let h=0;h<70;h++)l.beginPath(),l.fillStyle="rgba(68,76,48,.18)",l.ellipse(u()*a,u()*c,y(u,2,9),y(u,1,4),u()*Ge,0,Ge),l.fill();li(l,a,c,u,.08)},{repeat:n})}function B0(i={}){const{size:e=512,seed:t=15,repeat:n=[1,1]}=i,s=e,r=e;return Sn(s,r,o=>{const a=Ht(t);o.fillStyle="#2e2419",o.fillRect(0,0,s,r);const c=9,l=r/c;for(let u=0;u<c;u++){const f=s/7,h=(u%2===0?0:f/2)-f;for(let g=0;g<9;g++){const v=h+g*f+y(a,-2,2),m=u*l-2,p=l*y(a,.86,1.12);o.beginPath();const b=4;o.moveTo(v+1,m),o.lineTo(v+f-1,m),o.lineTo(v+f-1,m+p-4);for(let T=b;T>=0;T--){const E=v+1+(f-2)*T/b,U=m+p-(T%2===0?1:5);o.lineTo(E,U)}o.closePath();const P=a();o.fillStyle=P>.72?"#6d4e30":P>.4?"#5a4029":"#4b3421",o.fill();const S=o.createLinearGradient(v,m,v,m+p);S.addColorStop(0,"rgba(214,180,132,.18)"),S.addColorStop(.5,"rgba(80,55,30,0)"),S.addColorStop(1,"rgba(0,0,0,.25)"),o.fillStyle=S,o.fill();for(let T=0;T<3;T++){o.strokeStyle=a()>.4?"rgba(38,31,21,.18)":"rgba(190,196,138,.08)",o.lineWidth=y(a,1,3),o.beginPath();const E=v+a()*f;o.moveTo(E,m+2),o.lineTo(E+y(a,-4,4),m+p-2),o.stroke()}o.fillStyle="rgba(10,8,5,.4)",o.fillRect(v,m+p-3,f,3)}}for(let u=0;u<30;u++)o.beginPath(),o.fillStyle="rgba(96,104,60,.13)",o.ellipse(a()*s,a()*r,y(a,3,15),y(a,1,5),a()*Ge,0,Ge),o.fill();li(o,s,r,a,.07)},{repeat:n})}function C2(i={}){const{size:e=1024,seed:t=31,repeat:n=[14,14]}=i,s=e,r=e;return Sn(s,r,o=>{const a=Ht(t);o.fillStyle="#3b3324",o.fillRect(0,0,s,r);for(let l=0;l<230;l++){const u=a()*s,d=a()*r,f=y(a,16,120),h=o.createRadialGradient(u,d,0,u,d,f),g=a(),v=g>.72?"97,103,53":g>.42?"54,48,31":"88,64,39";h.addColorStop(0,`rgba(${v},${y(a,.1,.34)})`),h.addColorStop(1,`rgba(${v},0)`),o.fillStyle=h,o.fillRect(u-f,d-f,f*2,f*2)}const c=["#8a5227","#a8672c","#6f4525","#b98641","#5b4925","#7c6b35"];for(let l=0;l<2600;l++){const u=a()*s,d=a()*r,f=y(a,2,7);o.save(),o.translate(u,d),o.rotate(a()*Ge),o.globalAlpha=y(a,.25,.8),o.fillStyle=Ci(a,c),o.beginPath(),o.ellipse(0,0,f,f*.42,0,0,Ge),o.fill(),o.restore()}for(let l=0;l<220;l++){const u=a()*s,d=a()*r,f=y(a,1,4);o.fillStyle=a()>.5?"rgba(120,117,104,.4)":"rgba(70,68,60,.5)",o.beginPath(),o.ellipse(u,d,f,f*.75,a()*Ge,0,Ge),o.fill()}for(let l=0;l<1800;l++){const u=a()*s,d=a()*r;o.strokeStyle=a()>.5?"rgba(98,77,43,.4)":"rgba(47,39,24,.55)",o.lineWidth=y(a,.4,1.2),o.beginPath(),o.moveTo(u,d),o.lineTo(u+y(a,-8,8),d+y(a,-8,8)),o.stroke()}li(o,s,r,a,.08)},{repeat:n})}function R2(i={}){const{size:e=512,seed:t=44,repeat:n=[1,6]}=i,s=e,r=e;return Sn(s,r,o=>{const a=Ht(t);o.fillStyle="#4a4235",o.fillRect(0,0,s,r);for(let c=0;c<130;c++){const l=a()*s,u=a()*r,d=y(a,12,46),f=d*y(a,.5,1.1);o.save(),o.translate(l,u),o.rotate(a()*Ge),o.beginPath(),o.ellipse(0,0,d,f,0,0,Ge);const h=a();o.fillStyle=h>.7?"#6c6253":h>.35?"#575044":"#7c7362",o.fill(),o.strokeStyle="rgba(28,24,18,.5)",o.lineWidth=y(a,1,3),o.stroke(),o.beginPath(),o.arc(-d*.25,-f*.3,Math.min(d,f)*.55,0,Ge),o.fillStyle="rgba(230,220,196,.07)",o.fill(),o.restore()}for(let c=0;c<60;c++)o.fillStyle="rgba(69,81,42,.2)",o.beginPath(),o.ellipse(a()*s,a()*r,y(a,3,14),y(a,1,4),a()*Ge,0,Ge),o.fill();li(o,s,r,a,.07)},{repeat:n})}function P2(i={}){const{size:e=128,seed:t=5,tint:n="#d8d0b4"}=i;return Sn(e,e,(s,r,o)=>{const a=Ht(t);s.clearRect(0,0,r,o);const c=s.createLinearGradient(r*.2,o*.1,r*.8,o*.9);c.addColorStop(0,"#f0ead8"),c.addColorStop(1,n),s.fillStyle=c,s.beginPath();const l=r/2;s.moveTo(l,4),s.bezierCurveTo(r*.9,o*.2,r*.96,o*.72,l,o-6),s.bezierCurveTo(r*.04,o*.72,r*.1,o*.2,l,4),s.fill(),s.strokeStyle="rgba(70,52,26,.28)",s.lineWidth=2,s.beginPath(),s.moveTo(l,o*.08),s.lineTo(l,o*.94),s.stroke();for(let u=0;u<6;u++){const d=.2+u*.13;s.beginPath(),s.lineWidth=1.2,s.globalAlpha=.7,s.moveTo(l,o*d),s.lineTo(l-r*.28*(1-d*.4),o*(d+.1)),s.moveTo(l,o*d),s.lineTo(l+r*.28*(1-d*.4),o*(d+.1)),s.stroke()}s.globalAlpha=1;for(let u=0;u<20;u++)s.fillStyle="rgba(90,70,30,.12)",s.beginPath(),s.arc(a()*r,a()*o,y(a,.5,2),0,Ge),s.fill()},{srgb:!0,wrapS:on,wrapT:on})}function L2(i={}){const{size:e=64,color:t="#f3c9d1"}=i;return Sn(e,e,(n,s,r)=>{n.clearRect(0,0,s,r),n.save(),n.translate(s/2,r/2);const o=n.createRadialGradient(0,0,2,0,0,s*.42);o.addColorStop(0,"#fff7f0"),o.addColorStop(.7,t),o.addColorStop(1,t),n.fillStyle=o;for(let a=0;a<5;a++)n.rotate(Ge/5),n.beginPath(),n.ellipse(0,-s*.2,s*.13,s*.22,0,0,Ge),n.fill();n.restore()},{wrapS:on,wrapT:on})}function il(i={}){const{size:e=256,color:t="#d8cbb2",repeat:n=[2,2],seed:s=2}=i;return Sn(e,e,(r,o,a)=>{const c=Ht(s);r.fillStyle=t,r.fillRect(0,0,o,a);for(let l=0;l<o;l+=3)r.globalAlpha=.06,r.fillStyle=l%6?"#ffffff":"#000000",r.fillRect(l,0,1,a);for(let l=0;l<a;l+=3)r.globalAlpha=.06,r.fillStyle=l%6?"#000000":"#ffffff",r.fillRect(0,l,o,1);r.globalAlpha=1;for(let l=0;l<900;l++)r.fillStyle=c()>.5?"rgba(255,255,255,.05)":"rgba(0,0,0,.045)",r.fillRect(c()*o,c()*a,y(c,1,9),1);li(r,o,a,c,.03)},{repeat:n})}function I2(i={}){const{w:e=256,h:t=512,seed:n=23}=i;return Sn(e,t,s=>{const r=Ht(n);s.clearRect(0,0,e,t);for(let a=0;a<400;a++){const c=y(r,.02,.12);s.fillStyle=`rgba(235,245,255,${c})`,s.beginPath(),s.arc(r()*e,r()*t,y(r,.5,2.5),0,Ge),s.fill()}for(let a=0;a<130;a++){const c=r()*e,l=r()*t,u=y(r,8,78),d=s.createLinearGradient(c,l,c,l+u);d.addColorStop(0,"rgba(220,237,250,0.02)"),d.addColorStop(.4,"rgba(235,248,255,.22)"),d.addColorStop(1,"rgba(210,232,246,0.02)"),s.strokeStyle=d,s.lineWidth=y(r,.6,2),s.beginPath(),s.moveTo(c,l),s.quadraticCurveTo(c+y(r,-3,3),l+u*.6,c,l+u),s.stroke(),s.fillStyle="rgba(240,250,255,.35)",s.beginPath(),s.ellipse(c,l+u,y(r,1,2.4),y(r,1,3.2),0,0,Ge),s.fill()}const o=s.createLinearGradient(0,t*.6,0,t);o.addColorStop(0,"rgba(230,245,255,0)"),o.addColorStop(1,"rgba(230,245,255,.15)"),s.fillStyle=o,s.fillRect(0,0,e,t)},{wrapS:on,wrapT:on})}function D2(i={}){const{size:e=128,inner:t="rgba(255,244,214,1)",mid:n="rgba(255,178,86,.5)"}=i;return Sn(e,e,(s,r,o)=>{const a=s.createRadialGradient(r/2,o/2,0,r/2,o/2,r/2);a.addColorStop(0,t),a.addColorStop(.25,n),a.addColorStop(1,"rgba(255,120,30,0)"),s.fillStyle=a,s.fillRect(0,0,r,o)},{srgb:!0,wrapS:on,wrapT:on})}function Dr(i={}){const{size:e=128,color:t="255,255,255"}=i;return Sn(e,e,(n,s,r)=>{const o=n.createRadialGradient(s/2,r/2,0,s/2,r/2,s/2);o.addColorStop(0,`rgba(${t},1)`),o.addColorStop(.35,`rgba(${t},.65)`),o.addColorStop(.75,`rgba(${t},.16)`),o.addColorStop(1,`rgba(${t},0)`),n.fillStyle=o,n.fillRect(0,0,s,r)},{srgb:!0,wrapS:on,wrapT:on})}function oh(i={}){const{size:e=128,seed:t=12}=i;return Sn(e,e,(n,s,r)=>{const o=Ht(t);n.clearRect(0,0,s,r);for(let a=0;a<22;a++){const c=s*(.25+o()*.5),l=r*(.25+o()*.5),u=y(o,s*.08,s*.3),d=n.createRadialGradient(c,l,0,c,l,u);d.addColorStop(0,"rgba(255,255,255,.22)"),d.addColorStop(.6,"rgba(255,255,255,.08)"),d.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=d,n.fillRect(0,0,s,r)}},{srgb:!0,wrapS:on,wrapT:on})}function N2(i={}){const{size:e=128}=i;return Sn(e,e,(t,n,s)=>{t.clearRect(0,0,n,s);const r=t.createRadialGradient(n/2,s*.65,0,n/2,s*.6,n*.46);r.addColorStop(0,"rgba(255,255,238,.98)"),r.addColorStop(.28,"rgba(255,214,122,.92)"),r.addColorStop(.62,"rgba(255,138,44,.45)"),r.addColorStop(1,"rgba(255,95,20,0)"),t.fillStyle=r,t.beginPath(),t.moveTo(n/2,s*.04),t.bezierCurveTo(n*.75,s*.32,n*.88,s*.62,n*.72,s*.92),t.bezierCurveTo(n*.58,s*1.02,n*.42,s*1.02,n*.28,s*.92),t.bezierCurveTo(n*.12,s*.62,n*.25,s*.32,n/2,s*.04),t.fill()},{srgb:!0,wrapS:on,wrapT:on})}function U2(i={}){const{size:e=512,seed:t=41}=i;return Sn(e,e,(n,s,r)=>{const o=Ht(t);n.fillStyle="#172022",n.fillRect(0,0,s,r);for(let a=0;a<16;a++){const c=s*o(),l=r*o(),u=n.createRadialGradient(c,l,0,c,l,y(o,20,120));u.addColorStop(0,"rgba(190,215,210,.22)"),u.addColorStop(1,"rgba(20,60,70,0)"),n.fillStyle=u,n.fillRect(0,0,s,r)}for(let a=0;a<30;a++){n.beginPath(),n.strokeStyle=`rgba(220,235,225,${y(o,.04,.15)})`,n.lineWidth=1;const c=o()*s,l=o()*r;n.ellipse(c,l,y(o,20,90),y(o,3,16),0,0,Ge),n.stroke()}li(n,s,r,o,.02)},{repeat:[1,1]})}function F2(i={}){return new sn({roughness:.85,metalness:0,...i})}function k0(i,e,t,n=new A(.3,.5,.2)){const o=n.clone().normalize();return Sn(512,256,(a,c,l)=>{const u=a.createLinearGradient(0,0,0,l);u.addColorStop(0,i),u.addColorStop(.62,e),u.addColorStop(.78,e),u.addColorStop(1,"#181410"),a.fillStyle=u,a.fillRect(0,0,c,l);const d=(Math.atan2(o.z,o.x)/Ge+.5)*c,f=(.5-Math.asin(vn(o.y,-1,1))/Math.PI)*l,h=a.createRadialGradient(d,f,0,d,f,c*.18);h.addColorStop(0,"rgba(255,244,214,.95)"),h.addColorStop(.06,"rgba(255,226,168,.65)"),h.addColorStop(.4,"rgba(255,190,120,.18)"),h.addColorStop(1,"rgba(255,180,100,0)"),a.fillStyle=h,a.fillRect(0,0,c,l);const g=Ht(61);for(let v=0;v<40;v++){const m=g()*c,p=l*(.18+g()*.28),b=y(g,30,130),P=y(g,3,16),S=a.createRadialGradient(m,p,0,m,p,b);S.addColorStop(0,"rgba(160,150,140,.12)"),S.addColorStop(1,"rgba(160,150,140,0)"),a.fillStyle=S,a.save(),a.translate(m,p),a.scale(1,P/b),a.beginPath(),a.arc(0,0,b,0,Ge),a.fill(),a.restore()}},{srgb:!0,wrapS:Co,wrapT:on})}const O2=Math.PI/180,z2={spring:48,summer:61,autumn:41,winter:31},B2=[{h:0,top:"#081525",horizon:"#142536",sun:"#6a7fa8",hemiSky:"#132239",hemiGround:"#0a0b08",fog:"#0b1420",hemiInt:.33,sunInt:0,exposure:1.24},{h:4.6,top:"#0a1828",horizon:"#192a3a",sun:"#7789ad",hemiSky:"#152338",hemiGround:"#0c0d09",fog:"#0d1622",hemiInt:.32,sunInt:0,exposure:1.22},{h:5.8,top:"#1b3048",horizon:"#55545a",sun:"#c79d83",hemiSky:"#293647",hemiGround:"#211d16",fog:"#3d4046",hemiInt:.44,sunInt:.12,exposure:1.1},{h:6.55,top:"#314b68",horizon:"#cf8c61",sun:"#ffc086",hemiSky:"#5d6a77",hemiGround:"#3a3125",fog:"#8a7f72",hemiInt:.62,sunInt:.34,exposure:1.02},{h:8.2,top:"#3f6993",horizon:"#cbc6b2",sun:"#ffe4b8",hemiSky:"#9ab1c6",hemiGround:"#4b4634",fog:"#b1b3aa",hemiInt:.92,sunInt:.82,exposure:.94},{h:12.5,top:"#3a6b99",horizon:"#d3d5c9",sun:"#fff4e0",hemiSky:"#bdd3e4",hemiGround:"#5d5744",fog:"#c2c9c4",hemiInt:1.04,sunInt:1,exposure:.85},{h:15.8,top:"#4a7195",horizon:"#d8c4a8",sun:"#ffdfa8",hemiSky:"#a5b7c6",hemiGround:"#635540",fog:"#c0bdae",hemiInt:.96,sunInt:.9,exposure:.9},{h:17.3,top:"#385676",horizon:"#e6b27a",sun:"#ffc47c",hemiSky:"#8496a8",hemiGround:"#594832",fog:"#b39c81",hemiInt:.82,sunInt:.66,exposure:.97},{h:18.15,top:"#293f5c",horizon:"#f2a061",sun:"#ffa055",hemiSky:"#6b7d90",hemiGround:"#4f3d29",fog:"#a2856b",hemiInt:.68,sunInt:.33,exposure:1.03},{h:18.9,top:"#1b2d44",horizon:"#c47a5e",sun:"#f08a5c",hemiSky:"#3c5066",hemiGround:"#2a231b",fog:"#735f52",hemiInt:.53,sunInt:.06,exposure:1.09},{h:19.9,top:"#0f2032",horizon:"#283847",sun:"#837d86",hemiSky:"#1d2c3f",hemiGround:"#13130f",fog:"#1f2a34",hemiInt:.4,sunInt:0,exposure:1.17},{h:21.4,top:"#081626",horizon:"#142536",sun:"#6b7fa4",hemiSky:"#132239",hemiGround:"#0a0b08",fog:"#0c1520",hemiInt:.33,sunInt:0,exposure:1.24},{h:24,top:"#081525",horizon:"#142536",sun:"#6a7fa8",hemiSky:"#132239",hemiGround:"#0a0b08",fog:"#0b1420",hemiInt:.33,sunInt:0,exposure:1.24}],br=B2.map(i=>({...i,top:new ke(i.top),horizon:new ke(i.horizon),sun:new ke(i.sun),hemiSky:new ke(i.hemiSky),hemiGround:new ke(i.hemiGround),fog:new ke(i.fog)})),Nf={spring:{hue:-.008,sat:1,sunHue:.004,sunSat:.92,sunLight:1.04,exposure:1,fog:1.04},summer:{hue:.002,sat:1.07,sunHue:.004,sunSat:1.02,sunLight:1.02,exposure:.97,fog:.92},autumn:{hue:.012,sat:1.04,sunHue:.02,sunSat:1.15,sunLight:.99,exposure:1,fog:1.12},winter:{hue:-.02,sat:.7,sunHue:-.005,sunSat:.66,sunLight:1.1,exposure:1.04,fog:1.22}},Uf={clear:{overcast:0,sunMul:1,hemiMul:1,cloud:.44,cloudOpacity:.55,fogMul:1,rain:0,snow:0,mist:0,dust:1},rain:{overcast:.72,sunMul:.18,hemiMul:.78,cloud:.8,cloudOpacity:.92,fogMul:2.1,rain:1,snow:0,mist:.5,dust:0},snow:{overcast:.56,sunMul:.3,hemiMul:.9,cloud:.72,cloudOpacity:.82,fogMul:1.8,rain:0,snow:1,mist:.25,dust:0},fog:{overcast:.74,sunMul:.22,hemiMul:.86,cloud:.62,cloudOpacity:.7,fogMul:5.2,rain:0,snow:0,mist:1,dust:0},storm:{overcast:.94,sunMul:.06,hemiMul:.62,cloud:.97,cloudOpacity:1,fogMul:3.3,rain:1,snow:0,mist:.6,dust:0}},k2=new ke("#98a1a4"),G2=new ke("#10151d"),H2=new ke("#e4eef3"),V2=new ke("#b8c0be"),W2=new ke("#1a2026");function Es(i,e,t,n){return Zi(i,e,1-Math.exp(-t*n))}function ur(i,e,t,n){const s=1-Math.exp(-t*n);i.lerp(e,s)}function X2(i){const e=(i%24+24)%24;let t=br[0],n=br[1];for(let r=0;r<br.length-1;r++)if(e>=br[r].h&&e<=br[r+1].h){t=br[r],n=br[r+1];break}const s=n.h-t.h||1;return{a:t,b:n,t:vn((e-t.h)/s,0,1)}}const Y2=`
  varying vec3 vWorldPosition;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorldPosition = world.xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,q2=`
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
`;function Z2({scene:i,renderer:e,camera:t}){const n=new Jt;n.name="environment",i.add(n);const s=new mi(400,48,28),r={uTopColor:{value:new ke("#4a617e")},uHorizonColor:{value:new ke("#e5b47f")},uGroundColor:{value:new ke("#2b241b")},uFogColor:{value:new ke("#bea88c")},uSunColor:{value:new ke("#ffc47c")},uCloudLight:{value:new ke("#f0c99f")},uCloudShadow:{value:new ke("#5a5560")},uSunDir:{value:new A(.5,.1,.85).normalize()},uMoonDir:{value:new A(-.5,.6,-.4).normalize()},uTime:{value:0},uCloudCover:{value:.26},uCloudOpacity:{value:.5},uStarStrength:{value:0},uMoonStrength:{value:0},uFlash:{value:0},uSunVisibility:{value:1},uStorminess:{value:0}},o=new xi({uniforms:r,vertexShader:Y2,fragmentShader:q2,side:zi,depthWrite:!1,depthTest:!0,fog:!1}),a=new Ut(s,o);a.name="sky",a.frustumCulled=!1,a.renderOrder=-100,n.add(a);const c=new Sc("#ffc47c",3.2);c.name="sun-light",c.castShadow=!0,c.shadow.mapSize.set(2048,2048),c.shadow.camera.left=-17,c.shadow.camera.right=17,c.shadow.camera.top=17,c.shadow.camera.bottom=-17,c.shadow.camera.near=1,c.shadow.camera.far=80,c.shadow.bias=-25e-5,c.shadow.normalBias=.035,c.target.position.set(0,1,.8),i.add(c,c.target);const l=new Sc("#9db4d9",0);l.name="moon-light",l.castShadow=!0,l.shadow.mapSize.set(1024,1024),l.shadow.camera.left=-17,l.shadow.camera.right=17,l.shadow.camera.top=17,l.shadow.camera.bottom=-17,l.shadow.camera.near=1,l.shadow.camera.far=80,l.shadow.bias=-3e-4,l.shadow.normalBias=.04,l.target.position.set(0,1,.8),l.visible=!1,i.add(l,l.target);const u=new fm("#9dacba","#635540",.93);u.name="sky-fill",i.add(u);const d=new Sc("#d8b18a",.36);d.name="bounce",d.position.set(-8,3.4,-7),i.add(d);const f=new gm("#5a6673",.16);i.add(f);const h=new Qu(new ke("#bea88c"),.0115);i.fog=h;const g=new Jt;g.name="weather-particles",n.add(g);const v=2100,m=new Float32Array(v*6),p=[],b=Ht(401);for(let ce=0;ce<v;ce++)p.push({x:(b()-.5)*34,y:b()*16,z:(b()-.5)*34,speed:13+b()*9,len:.35+b()*.55});const P=new Pn;P.setAttribute("position",new Wn(m,3));const S=new p0({color:"#b9cbdc",transparent:!0,opacity:0,depthWrite:!1,blending:Pi,fog:!1}),T=new Tp(P,S);T.frustumCulled=!1,T.visible=!1,g.add(T);function E(ce,Xe,D,Ve){const tt=Ht(Ve),R=new Float32Array(ce*3),_=[];for(let et=0;et<ce;et++)R[et*3]=(tt()-.5)*34,R[et*3+1]=tt()*16,R[et*3+2]=(tt()-.5)*34,_.push({fall:.45+tt()*.8,drift:tt()*Ge,sway:.25+tt()*.55});const J=new Pn;J.setAttribute("position",new Wn(R,3));const pe=new Lr({size:Xe,map:Dr({color:"255,255,255"}),transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,color:"#f4f4ef",fog:!1,alphaTest:.02}),Re=new wo(J,pe);return Re.frustumCulled=!1,Re.visible=!1,g.add(Re),{points:Re,positions:R,speeds:_,geo:J,mat:pe,targetOpacity:0,baseOpacity:D,rng:tt}}const U=[E(1250,.13,.9,89),E(260,.31,.55,111)],M=oh({size:256,seed:73}),C=[],F=Ht(701);for(let ce=0;ce<15;ce++){const Xe=new Or({map:M,color:"#c7ccc5",transparent:!0,opacity:0,depthWrite:!1,depthTest:!0,fog:!1}),D=new bo(Xe),Ve=F()*Ge,tt=6+F()*22;D.position.set(Math.cos(Ve)*tt,.45+F()*1.4,Math.sin(Ve)*tt),D.scale.set(11+F()*12,3+F()*2.5,1),D.userData={phase:F()*Ge,speed:.02+F()*.04,baseY:D.position.y,orbit:tt,angle:Ve},D.visible=!1,g.add(D),C.push({sprite:D,mat:Xe})}const k=150,V=new Float32Array(k*3),ie=[],G=Ht(912);for(let ce=0;ce<k;ce++){const Xe=(G()-.5)*20,D=.5+G()*3.2,Ve=(G()-.5)*20;V[ce*3]=Xe,V[ce*3+1]=D,V[ce*3+2]=Ve,ie.push({x:Xe,y:D,z:Ve,phase:G()*Ge,speed:.06+G()*.14})}const Q=new Pn;Q.setAttribute("position",new Wn(V,3));const we=new Lr({size:.035,map:Dr({color:"255,238,200"}),color:"#ffe3b0",transparent:!0,opacity:0,depthWrite:!1,blending:Pi,sizeAttenuation:!0,fog:!1,alphaTest:.02}),re=new wo(Q,we);re.frustumCulled=!1,re.visible=!1,g.add(re);let Pe=4+Math.random()*4,ye=-1,Te=0;const Ie=new Tu(e);Ie.compileEquirectangularShader();let yt=null,Et="",jt=-10;i.environmentIntensity=.58;const W={top:new ke("#4a617e"),horizon:new ke("#e5b47f"),sunColor:new ke("#ffc47c"),hemiSky:new ke("#7f8c99"),hemiGround:new ke("#594832"),fogColor:new ke("#bea88c"),cloudLight:new ke("#f0c99f"),cloudShadow:new ke("#5a5560"),hemiInt:.8,sunInt:.66,exposure:.97,fogDensity:.0115,rain:0,snow:0,mist:0,dust:0,cloudCover:.26,cloudOpacity:.5,starStrength:0,moonStrength:0,cloudCoverCurrent:.26,initialized:!1,sunDir:new A,moonDir:new A,daylight:1,overcast:0,weatherLabel:"clear",interior:!1},lt={top:new ke,horizon:new ke,sunColor:new ke,hemiSky:new ke,hemiGround:new ke,fogColor:new ke,cloudLight:new ke,cloudShadow:new ke,grayA:new ke,grayB:new ke,tmpA:new ke,tmpB:new ke,sunDir:new A,moonDir:new A};let Se=0;function $(ce){const Xe=((Number(ce?.hour)||0)%24+24)%24,D=ce?.season||"autumn",Ve=ce?.weather||"clear",tt=Nf[D]||Nf.autumn,R=Uf[Ve]||Uf.clear,_=X2(Xe);lt.top.copy(_.a.top).lerp(_.b.top,_.t),lt.horizon.copy(_.a.horizon).lerp(_.b.horizon,_.t),lt.sunColor.copy(_.a.sun).lerp(_.b.sun,_.t),lt.hemiSky.copy(_.a.hemiSky).lerp(_.b.hemiSky,_.t),lt.hemiGround.copy(_.a.hemiGround).lerp(_.b.hemiGround,_.t),lt.fogColor.copy(_.a.fog).lerp(_.b.fog,_.t);const J=Zi(_.a.hemiInt,_.b.hemiInt,_.t),pe=Zi(_.a.sunInt,_.b.sunInt,_.t),Re=Zi(_.a.exposure,_.b.exposure,_.t);for(const Bt of[lt.top,lt.horizon,lt.hemiSky,lt.hemiGround,lt.fogColor])Bt.offsetHSL(tt.hue,tt.sat-1,0);lt.sunColor.offsetHSL(tt.sunHue,tt.sunSat-1,0);const et=6.15,Le=(Xe-et)/(18.35-et),Oe=(z2[D]||41)*O2,ct=Math.sin(Le*Math.PI)*Oe,Ft=Le*Math.PI;lt.sunDir.set(-Math.cos(Ft)*Math.cos(ct),Math.sin(ct),Math.sin(Ft)*Math.cos(ct)).normalize(),lt.moonDir.set(-lt.sunDir.x,Math.max(.22,-lt.sunDir.y),-lt.sunDir.z).normalize();const rt=cs(-.035,.14,lt.sunDir.y),Be=R.overcast,Ct=lt.grayA.copy(G2).lerp(k2,rt),Tt=lt.grayB.copy(W2).lerp(V2,rt);lt.top.lerp(Ct,Be*.72),lt.horizon.lerp(Ct,Be*.62),lt.hemiSky.lerp(Ct,Be*.58),lt.hemiGround.lerp(Tt,Be*.35),lt.fogColor.lerp(Tt,Be*.62),lt.sunColor.lerp(H2,Be*.8),Ve==="storm"&&lt.sunColor.lerp(new ke("#b9c7d3"),.4),lt.cloudLight.copy(lt.horizon).lerp(lt.sunColor,.32+rt*.2),lt.cloudShadow.copy(lt.top).multiplyScalar(.74).lerp(lt.fogColor,.22);const Xt=vn(1-Be*.96,0,1)*cs(-.05,.02,lt.sunDir.y),j=4.35*pe*R.sunMul*(.55+rt*.45),Ke=J*R.hemiMul*(.92+rt*.14)+Be*.05,ze=Re*tt.exposure*(1+Be*.13),St=((.0072+(1-rt)*.0016)*R.fogMul+(Ve==="storm"?.012:0))*tt.fog,At=vn((1-rt*2.1)*(1-Be*.92),0,1),qe=vn((1-rt)*(1-Be*.9),0,1)*.9;return{hour:Xe,season:D,weather:Ve,sunDir:lt.sunDir,moonDir:lt.moonDir,daylight:rt,overcast:Be,sunVisibility:Xt,sunInt:j,hemiInt:Ke,exposure:ze,fogDensity:St,starStrength:At,moonStrength:qe,cloudCover:R.cloud,cloudOpacity:R.cloudOpacity,rain:R.rain,snow:R.snow,mist:R.mist,dust:R.dust,colors:lt}}function Ee(ce){const Xe=W.initialized?3.2:999;ur(W.top,lt.top,Xe,ce),ur(W.horizon,lt.horizon,Xe,ce),ur(W.sunColor,lt.sunColor,Xe,ce),ur(W.hemiSky,lt.hemiSky,Xe,ce),ur(W.hemiGround,lt.hemiGround,Xe,ce),ur(W.fogColor,lt.fogColor,Xe*.8,ce),ur(W.cloudLight,lt.cloudLight,Xe,ce),ur(W.cloudShadow,lt.cloudShadow,Xe,ce),W.hemiInt=W.initialized?Es(W.hemiInt,Ae.hemiInt,2.6,ce):Ae.hemiInt,W.sunInt=W.initialized?Es(W.sunInt,Ae.sunInt,2.6,ce):Ae.sunInt,W.exposure=W.initialized?Es(W.exposure,Ae.exposure,2.2,ce):Ae.exposure,W.fogDensity=W.initialized?Es(W.fogDensity,Ae.fogDensity,1.7,ce):Ae.fogDensity,W.starStrength=Ae.starStrength,W.moonStrength=Ae.moonStrength,W.rain=W.initialized?Es(W.rain,Ae.rain,1.6,ce):Ae.rain,W.snow=W.initialized?Es(W.snow,Ae.snow,1.6,ce):Ae.snow,W.mist=W.initialized?Es(W.mist,Ae.mist,1.2,ce):Ae.mist,W.dust=W.initialized?Es(W.dust,Ae.dust,1.2,ce):Ae.dust,W.cloudCover=W.initialized?Es(W.cloudCover,Ae.cloudCover,1.2,ce):Ae.cloudCover,W.cloudOpacity=W.initialized?Es(W.cloudOpacity,Ae.cloudOpacity,1.2,ce):Ae.cloudOpacity,W.overcast=Ae.overcast,W.daylight=Ae.daylight,W.weatherLabel=Ae.weather,W.sunDir.copy(Ae.sunDir),W.moonDir.copy(Ae.moonDir),Ae.colors=lt}let Ae=null;function Je(){const ce=r;ce.uTopColor.value.copy(W.top),ce.uHorizonColor.value.copy(W.horizon),ce.uGroundColor.value.copy(W.fogColor).multiplyScalar(.48),ce.uFogColor.value.copy(W.fogColor),ce.uSunColor.value.copy(W.sunColor),ce.uCloudLight.value.copy(W.cloudLight),ce.uCloudShadow.value.copy(W.cloudShadow),ce.uSunDir.value.copy(W.sunDir),ce.uMoonDir.value.copy(W.moonDir),ce.uTime.value=Se,ce.uCloudCover.value=W.cloudCover,ce.uCloudOpacity.value=W.cloudOpacity,ce.uStarStrength.value=W.starStrength,ce.uMoonStrength.value=W.moonStrength,ce.uSunVisibility.value=Ae?.sunVisibility??1,ce.uStorminess.value=W.overcast,ce.uFlash.value=Te}function Ye(){const ce={x:0,y:1,z:1.2},Xe=W.sunDir;c.position.set(ce.x+Xe.x*44,ce.y+Math.max(.02,Xe.y)*44,ce.z+Xe.z*44),c.target.position.set(ce.x,ce.y,ce.z),c.color.copy(W.sunColor),c.intensity=W.sunInt,c.castShadow=W.daylight>.05&&W.sunInt>.12,c.visible=W.sunInt>.002,c.shadow.autoUpdate=!0;const D=W.moonDir;l.position.set(ce.x+D.x*40,ce.y+D.y*40,ce.z+D.z*40),l.target.position.set(ce.x,ce.y,ce.z),l.intensity=W.moonStrength*1.05,l.castShadow=W.moonStrength>.25&&W.daylight<.2,l.visible=W.moonStrength>.02,u.color.copy(W.hemiSky),u.groundColor.copy(W.hemiGround),u.intensity=W.hemiInt+Te*1.6,d.color.copy(W.horizon),d.intensity=.28+W.daylight*.34+W.overcast*.03,d.position.set(-W.sunDir.x*12,3.2,-W.sunDir.z*12),f.color.copy(W.fogColor),f.intensity=.14+W.daylight*.06+Te*.9,h.color.copy(W.fogColor),h.density=W.fogDensity,e.toneMappingExposure=W.exposure}function xe(ce=!1){const Xe=Se;if(!ce&&Xe-jt<.85)return;const D=[W.top.getHexString(),W.horizon.getHexString(),W.fogColor.getHexString(),W.sunColor.getHexString(),W.sunDir.x.toFixed(2),W.sunDir.y.toFixed(2),W.sunDir.z.toFixed(2),W.overcast.toFixed(2),W.starStrength.toFixed(2)].join("|");if(D===Et)return;Et=D,jt=Xe;const Ve=k0(W.top.getStyle(),W.horizon.getStyle(),W.sunColor.getStyle(),W.sunDir),tt=Ie.fromEquirectangular(Ve);Ve.dispose(),i.environment=tt.texture,i.environmentIntensity=.45+(1-W.overcast)*.2,yt&&yt.dispose(),yt=tt}const B=new A;function ee(ce,Xe){const D=W.snow*(W.interior?0:1);for(const Ve of U){if(Ve.targetOpacity=Ve.baseOpacity*D,Ve.mat.opacity=Ve.targetOpacity*(D>.02?1:0),Ve.points.visible=D>.01,!Ve.points.visible)continue;const tt=Ve.positions;for(let R=0;R<Ve.speeds.length;R++){const _=Ve.speeds[R];tt[R*3+1]-=_.fall*ce*(.8+D*.5),tt[R*3]+=Math.sin(Se*_.sway+_.drift)*ce*.32,tt[R*3+2]+=Math.cos(Se*_.sway*.7+_.drift)*ce*.22,tt[R*3+1]<0&&(tt[R*3+1]=15+Math.random()*3,tt[R*3]=(Math.random()-.5)*34,tt[R*3+2]=(Math.random()-.5)*34),tt[R*3]<-17&&(tt[R*3]+=34),tt[R*3]>17&&(tt[R*3]-=34),tt[R*3+2]<-17&&(tt[R*3+2]+=34),tt[R*3+2]>17&&(tt[R*3+2]-=34)}Ve.geo.attributes.position.needsUpdate=!0,Ve.points.position.set(Xe.x,0,Xe.z)}}function ue(ce,Xe){const D=W.rain*(W.interior?0:1);if(S.opacity=D*(W.weatherLabel==="storm"?.55:.4),T.visible=D>.01,!T.visible)return;T.position.set(Xe.x,0,Xe.z);const Ve=1.15+W.overcast*.75,tt=.28,R=m;for(let _=0;_<p.length;_++){const J=p[_];J.y-=J.speed*ce,J.y<0&&(J.y=14+Math.random()*4,J.x=(Math.random()-.5)*34,J.z=(Math.random()-.5)*34);const pe=_*6;R[pe]=J.x,R[pe+1]=J.y,R[pe+2]=J.z,R[pe+3]=J.x+Ve*J.len*.16,R[pe+4]=J.y-J.len,R[pe+5]=J.z+tt*J.len*.16}P.attributes.position.needsUpdate=!0,S.color.copy(W.fogColor).lerp(new ke("#d7e5f0"),.55+W.daylight*.2)}function ve(ce){const Xe=W.mist*(W.interior?0:1);for(const D of C){D.sprite.visible=Xe>.015,D.mat.opacity=.09*Xe;const Ve=D.sprite.userData;Ve.phase+=ce*Ve.speed,D.sprite.position.x=Math.cos(Ve.angle+Ve.phase*.25)*Ve.orbit,D.sprite.position.z=Math.sin(Ve.angle+Ve.phase*.25)*Ve.orbit,D.sprite.position.y=Ve.baseY+Math.sin(Se*.12+Ve.phase)*.25}}function He(ce){const Xe=W.dust*W.daylight*(1-W.overcast)*.4*(W.interior?0:1);if(re.visible=Xe>.02,we.opacity=Xe*.42,!!re.visible){for(let D=0;D<k;D++){const Ve=ie[D];Ve.y+=ce*Ve.speed*.12,Ve.y>3.9&&(Ve.y=.45),V[D*3]=Ve.x+Math.sin(Se*.18+Ve.phase)*.45,V[D*3+1]=Ve.y,V[D*3+2]=Ve.z+Math.cos(Se*.14+Ve.phase)*.45}Q.attributes.position.needsUpdate=!0}}function vt(ce){if(!(W.weatherLabel==="storm"&&W.overcast>.55)){Te=Math.max(0,Te-ce*6);return}if(ye>=0){ye+=ce;const D=ye;let Ve=0;D<.07?Ve=1:D<.15?Ve=.25:D<.23?Ve=.75:D<.46?Ve=.12:D<.53&&(Ve=.35),Te=Ve*(.7+Math.random()*.3),D>.65&&(ye=-1,Te=0,Pe=3.5+Math.random()*7)}else Pe-=ce,Pe<=0&&(ye=0,Pe=5+Math.random()*7),Te=Math.max(0,Te-ce*5)}function pt(ce,Xe){return ce=Math.min(ce||.016,.1),Se+=ce,W.interior=!!Xe?.interior,Ae=$(Xe||{}),Ee(ce),vt(ce),Je(),Ye(),a.position.copy(t.position),B.copy(t.position),ue(ce,B),ee(ce,B),ve(ce),He(ce),xe(!W.initialized),W.initialized=!0,W}return Ae=$({hour:17.2,season:"autumn",weather:"clear"}),W.top.copy(Ae.colors.top),W.horizon.copy(Ae.colors.horizon),W.sunColor.copy(Ae.colors.sunColor),W.hemiSky.copy(Ae.colors.hemiSky),W.hemiGround.copy(Ae.colors.hemiGround),W.fogColor.copy(Ae.colors.fogColor),W.cloudLight.copy(Ae.colors.cloudLight),W.cloudShadow.copy(Ae.colors.cloudShadow),W.sunDir.copy(Ae.sunDir),W.moonDir.copy(Ae.moonDir),W.sunInt=Ae.sunInt,W.hemiInt=Ae.hemiInt,W.exposure=Ae.exposure,W.fogDensity=Ae.fogDensity,W.cloudCover=Ae.cloudCover,W.cloudOpacity=Ae.cloudOpacity,W.starStrength=Ae.starStrength,W.moonStrength=Ae.moonStrength,W.overcast=Ae.overcast,W.daylight=Ae.daylight,Je(),Ye(),xe(!0),{group:n,sky:a,sunLight:c,moonLight:l,hemi:u,bounce:d,ambient:f,fog:h,state:W,update:pt,getSunDirection:()=>W.sunDir.clone(),getMetrics:()=>({daylight:W.daylight,overcast:W.overcast,sunElevation:W.sunDir.y,sunDir:W.sunDir.clone(),isNight:W.sunDir.y<-.03,starStrength:W.starStrength,rain:W.rain,snow:W.snow}),forceEnvMapUpdate:()=>xe(!0),dispose(){Ie.dispose(),yt?.dispose(),s.dispose(),o.dispose(),P.dispose(),S.dispose();for(const ce of U)ce.geo.dispose(),ce.mat.map?.dispose(),ce.mat.dispose();Q.dispose(),we.map?.dispose(),we.dispose(),M.dispose()}}}const vl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Fo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const $2=new Bl(-1,1,1,-1,0,1);class K2 extends Pn{constructor(){super(),this.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new an([0,2,0,0,2,0],2))}}const J2=new K2;class ah{constructor(e){this._mesh=new Ut(J2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,$2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Q2 extends Fo{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof xi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ma.clone(e.uniforms),this.material=new xi({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ah(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ff extends Fo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class j2 extends Fo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ex{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new je);this._width=n.width,this._height=n.height,t=new Bi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$i}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Q2(vl),this.copyPass.material.blending=Is,this.timer=new xm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ff!==void 0&&(o instanceof Ff?n=!0:o instanceof j2&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new je);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class tx extends Fo{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ke}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const nx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ke(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Do extends Fo{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new je(e.x,e.y):new je(256,256),this.clearColor=new ke(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Bi(r,o,{type:$i,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Bi(r,o,{type:$i,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Bi(r,o,{type:$i,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=nx;this.highPassUniforms=ma.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xi({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new je(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ma.clone(vl.uniforms),this.blendMaterial=new xi({uniforms:this.copyUniforms,vertexShader:vl.vertexShader,fragmentShader:vl.fragmentShader,premultipliedAlpha:!0,blending:Pi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ke,this._oldClearAlpha=1,this._basic=new ns,this._fsQuad=new ah(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new je(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Do.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Do.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);const s=[],r=[];for(let o=1;o<e;o+=2){const a=t[o],c=o+1<e?t[o+1]:0,l=a+c;s.push((o*a+(o+1)*c)/l),r.push(l)}return new xi({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new je(.5,.5)},direction:{value:new je(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new xi({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Do.BlurDirectionX=new je(1,0);Do.BlurDirectionY=new je(0,1);const sl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class ix extends Fo{constructor(){super(),this.isOutputPass=!0,this.uniforms=ma.clone(sl.uniforms),this.material=new E0({name:sl.name,uniforms:this.uniforms,vertexShader:sl.vertexShader,fragmentShader:sl.fragmentShader}),this._fsQuad=new ah(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},En.getTransfer(this._outputColorSpace)===Fn&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Nu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Uu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Fu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Fl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===zu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Bu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ou&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function sx({renderer:i,scene:e,camera:t}){const n=new ex(i);n.setPixelRatio(i.getPixelRatio());const s=new tx(e,t);n.addPass(s);const r=new Do(new je(window.innerWidth,window.innerHeight),.36,.62,.82);n.addPass(r);const o=new ix;n.addPass(o);function a(u,d,f){n.setPixelRatio(f),n.setSize(u,d),r.resolution.set(u,d)}function c(u){n.render(u)}function l(u){r.strength=u}return{composer:n,bloom:r,output:o,setSize:a,render:c,setBloom:l}}const rx=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);function wr(i,e,t,n){return jd.lerp(i,e,1-Math.exp(-t*n))}function ox(i,e,t,n){let s=((e-i+Math.PI)%Ge+Ge)%Ge-Math.PI;return i+s*(1-Math.exp(-11*n))}function Ws(i,e=.85,t=0){return new sn({color:i,roughness:e,metalness:t})}function ax(){const i=new Jt;i.name="player-character";const e=new Jt;i.add(e);const t={coat:Ws("#694232",.9),coatDark:Ws("#503224",.93),scarf:Ws("#b3a079",.96),beanie:Ws("#4f574b",.96),skin:Ws("#bd8f70",.76),pants:Ws("#413d34",.94),boots:Ws("#241d17",.76),pack:Ws("#594a33",.92),strap:Ws("#34291f",.92),brass:new sn({color:"#b08a54",roughness:.38,metalness:.7})};function n(u,d,f,h=0,g=0,v=0){const m=new Ut(d,f);return m.position.set(h,g,v),m.castShadow=!0,m.receiveShadow=!0,u.add(m),m}const s=.91;n(e,new os(.42,.55,.27,4,.09),t.coat,0,1.2,0),n(e,new os(.46,.24,.3,3,.07),t.coatDark,0,.96,0),n(e,new Zn(.012,.32,.01),t.strap,0,1.22,.142);for(let u=0;u<3;u++)n(e,new ei(.013,.013,.012,8),t.brass,.05,1.32-u*.13,.15).rotation.x=Math.PI/2;n(e,new ci(.115,.045,7,14),t.scarf,0,1.5,.005).rotation.x=Math.PI/2;const r=n(e,new os(.11,.3,.045,3,.02),t.scarf,.075,1.36,.15);r.rotation.z=.1,n(e,new mi(.115,20,16),t.skin,0,1.65,0),n(e,new mi(.022,8,6),t.skin,0,1.62,.108);const o=n(e,new mi(.123,18,12,0,Ge,0,Math.PI*.55),t.beanie,0,1.67,-.006);o.rotation.x=.06,n(e,new ci(.117,.022,7,20),t.beanie,0,1.637,0).rotation.x=Math.PI/2,n(e,new mi(.045,10,8),t.beanie,0,1.79,0),n(e,new mi(.024,8,6),t.skin,-.112,1.64,0),n(e,new mi(.024,8,6),t.skin,.112,1.64,0);const a=n(e,new os(.29,.4,.18,4,.055),t.pack,0,1.22,-.2);a.rotation.x=-.06,n(e,new os(.22,.12,.045,2,.02),t.strap,0,1.08,-.27);for(const u of[-1,1])n(e,new os(.045,.36,.035,2,.012),t.strap,u*.135,1.24,.13).rotation.z=u*-.05;const c=[];for(const u of[-1,1]){const d=new Jt;d.position.set(u*.105,s,0),e.add(d);const f=n(d,new mo(.075,.28,4,10),t.pants,0,-.19,0);f.rotation.z=.035;const h=new Jt;h.position.y=-.4,d.add(h),n(h,new mo(.062,.27,4,10),t.pants,0,-.15,.01);const g=n(h,new os(.14,.13,.26,3,.045),t.boots,0,-.34,.045);g.rotation.x=-.02,n(h,new os(.145,.035,.265,2,.012),t.boots,0,-.405,.045),c.push({pivot:d,knee:h,side:u})}const l=[];for(const u of[-1,1]){const d=new Jt;d.position.set(u*.265,1.41,0),e.add(d),d.rotation.z=u*.12,n(d,new mo(.062,.25,4,10),t.coat,0,-.16,0);const f=new Jt;f.position.y=-.32,d.add(f),n(f,new mo(.052,.22,4,10),t.coatDark,0,-.13,.01),n(f,new mi(.057,12,10),t.skin,0,-.28,.012),l.push({shoulder:d,elbow:f,side:u})}return e.position.y=-.085,i.userData.parts={model:e,legs:c,arms:l,scarfTail:r},i.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),i}function lx({scene:i,camera:e,domElement:t,outsideColliders:n=[],interiorColliders:s=[],occluders:r=[],callbacks:o={}}){const a=ax();i.add(a);const c=Vt.player,l=new A(Vt.spawn.x,0,Vt.spawn.z),u=new A,d=new Set,f=new R0;f.far=20;const h={mode:"third",yaw:0,orbitPitch:.16,lookPitch:-.02,distance:c.cameraDistance,currentDistance:c.cameraDistance,charYaw:Math.PI,walkPhase:0,speed:0,moving:!1,inputEnabled:!0,bob:0,fov:46};let g=!1,v=0,m=0,p=0,b=0,P=0,S=-1;performance.now(),e.fov=46,e.near=.08,e.far=700,e.updateProjectionMatrix(),a.position.copy(l),a.rotation.y=h.charYaw;const T=new A,E=new A,U=new A;function M($,Ee,Ae,Je=c.radius){for(const Ye of Ae)if(Ye)if(Ye.radius!==void 0||Ye.type==="circle"){const xe=Ye.x??Ye.cx??0,B=Ye.z??Ye.cz??0,ee=Ye.radius??Ye.r??0,ue=$-xe,ve=Ee-B;if(ue*ue+ve*ve<(ee+Je)*(ee+Je))return!1}else{let xe=Ye.minX,B=Ye.maxX,ee=Ye.minZ,ue=Ye.maxZ;if(xe===void 0&&Ye.x!==void 0&&Ye.w!==void 0&&(xe=Ye.x-Ye.w/2,B=Ye.x+Ye.w/2,ee=Ye.z-Ye.d/2,ue=Ye.z+Ye.d/2),xe===void 0)continue;if($>xe-Je&&$<B+Je&&Ee>ee-Je&&Ee<ue+Je)return!1}return!0}function C($,Ee){const Ae=Gt.porch;if($>-6.5/2&&$<Ae.width/2&&Ee>Gt.door.z-.1&&Ee<Ae.frontZ+.08)return Ae.floorY;if(Math.abs($)<1.15){const Je=Ae.frontZ+.08;if(Ee>=Je&&Ee<Je+.3)return Ae.floorY-.17;if(Ee>=Je+.3&&Ee<Je+.6)return Ae.floorY-.34}return 0}function F($){h.inputEnabled=$,$||(d.clear(),g=!1)}function k($,Ee,Ae){const Je=new A(-Math.sin(h.yaw),0,-Math.cos(h.yaw)),Ye=new A(Math.cos(h.yaw),0,-Math.sin(h.yaw)),xe=new A;h.inputEnabled&&((d.has("KeyW")||d.has("ArrowUp"))&&xe.add(Je),(d.has("KeyS")||d.has("ArrowDown"))&&xe.sub(Je),(d.has("KeyD")||d.has("ArrowRight"))&&xe.add(Ye),(d.has("KeyA")||d.has("ArrowLeft"))&&xe.sub(Ye));const B=xe.lengthSq()>.001;B&&xe.normalize().multiplyScalar(Ae);const ee=B?10.5:13.5;u.x=wr(u.x,xe.x,ee,$),u.z=wr(u.z,xe.z,ee,$),h.speed=Math.hypot(u.x,u.z),h.moving=h.speed>.15;let ue=l.x+u.x*$;M(ue,l.z,Ee)||(ue=l.x,u.x=0);let ve=l.z+u.z*$;M(ue,ve,Ee)||(ve=l.z,u.z=0),l.x=ue,l.z=ve;const He=Math.hypot(l.x,l.z);return He>52&&(l.x=l.x/He*52,l.z=l.z/He*52),B}function V($){const Ee=d.has("ShiftLeft")||d.has("ShiftRight"),Ae=Ee?c.runSpeed:c.walkSpeed;k($,n,Ae);const Je=C(l.x,l.z);if(l.y=wr(l.y,Je,12,$),a.position.set(l.x,l.y,l.z),a.visible=!0,h.moving){const ve=Math.atan2(u.x,u.z);h.charYaw=ox(h.charYaw,ve,11,$)}a.rotation.y=h.charYaw;const Ye=h.speed/c.runSpeed;h.walkPhase+=$*h.speed*3.1;const xe=a.userData.parts,B=Math.sin(h.walkPhase)*(.15+Ye*.62);for(const ve of xe.legs)ve.pivot.rotation.x=ve.side<0?B:-B,ve.knee.rotation.x=Math.max(0,(ve.side<0?-B:B)*.8);for(const ve of xe.arms)h.moving?(ve.shoulder.rotation.x=ve.side<0?-B*.7:B*.7,ve.elbow.rotation.x=.08+Math.abs(B)*.22):(ve.shoulder.rotation.x=Math.sin(performance.now()*.0011+ve.side)*.018,ve.elbow.rotation.x=.18+Math.sin(performance.now()*.0013+ve.side)*.01);const ee=Math.sin(performance.now()*.0016)*.008;xe.model.position.y=-.085+(h.moving?Math.abs(Math.sin(h.walkPhase*2))*.035*(.35+Ye):ee),xe.model.rotation.z=-u.x*.008,xe.scarfTail.rotation.x=.12+Math.sin(h.walkPhase*.8)*.12+Ye*.16,xe.model.rotation.z&&(xe.model.rotation.z*=.9);const ue=Ee&&h.moving?49.5:46;h.fov=wr(h.fov,ue,4,$),e.fov=h.fov,e.updateProjectionMatrix()}function ie($){const Ae=d.has("ShiftLeft")||d.has("ShiftRight")?4.1:2.35;k($,s,Ae);const Je=as.halfX-.3,Ye=as.halfZ-.3;l.x=vn(l.x,-Je,Je),l.z=vn(l.z,-Ye,Ye),l.y=as.walkY,a.visible=!1,h.bob+=$*(h.moving?7.2+h.speed*1.2:2.2),h.fov=wr(h.fov,64,5,$),e.fov=h.fov,e.updateProjectionMatrix();const xe=G();e.position.copy(xe),e.rotation.order="YXZ",e.rotation.set(h.lookPitch,h.yaw,0)}function G(){const $=h.moving&&h.mode==="first",Ee=$?Math.sin(h.bob)*.022*vn(h.speed/2.4,.2,1.2):0,Ae=$?Math.cos(h.bob*.5)*.008:0;return new A(l.x+Ae,l.y+c.eyeHeight+Ee,l.z)}function Q($){T.set(l.x,l.y+1.4,l.z);const Ee=Math.cos(h.yaw),Ae=-Math.sin(h.yaw);T.x+=Ee*.45,T.z+=Ae*.45;const Je=Math.cos(h.orbitPitch);U.set(Math.sin(h.yaw)*Je,Math.sin(h.orbitPitch),Math.cos(h.yaw)*Je);const Ye=h.distance;f.set(T,U),f.far=Ye+.4;const xe=r.length?f.intersectObjects(r,!1):[];let B=Ye;if(xe.length){const He=xe.find(vt=>vt.object.visible&&vt.distance>.25);He&&(B=vn(He.distance-.28,1.05,Ye))}B<h.currentDistance?h.currentDistance=wr(h.currentDistance,B,24,$):h.currentDistance=wr(h.currentDistance,B,3.2,$);const ee=h.currentDistance;E.set(T.x+U.x*ee,T.y+U.y*ee,T.z+U.z*ee);const ue=l.y+.42;E.y<ue&&(E.y=ue),e.position.lerp(E,1-Math.exp(-16*$)),e.lookAt(T);const ve=performance.now()*.001;e.position.x+=Math.sin(ve*.37)*.004,e.position.y+=Math.cos(ve*.29)*.003}function we($){$=vn($||.016,.001,.05),h.mode==="third"?(V($),Q($)):ie($),performance.now()}function re(){if(h.mode==="third"){const $=Math.cos(h.orbitPitch),Ee=Math.sin(h.yaw)*$,Ae=Math.sin(h.orbitPitch),Je=Math.cos(h.yaw)*$;T.set(l.x,l.y+1.4,l.z),T.x+=Math.cos(h.yaw)*.45,T.z+=-Math.sin(h.yaw)*.45,e.position.set(T.x+Ee*h.distance,Math.max(l.y+.42,T.y+Ae*h.distance),T.z+Je*h.distance),e.lookAt(T),h.currentDistance=h.distance}else e.position.copy(G()),e.rotation.order="YXZ",e.rotation.set(h.lookPitch,h.yaw,0)}function Pe(){h.mode="first",u.set(0,0,0),l.set(as.interiorSpawn.x,as.walkY,as.interiorSpawn.z),h.yaw=.27,h.lookPitch=-.055,h.bob=0,h.speed=0,h.moving=!1,a.visible=!1,e.fov=64,e.updateProjectionMatrix(),re()}function ye(){h.mode="third",u.set(0,0,0),l.set(0,C(0,6.4),6.4),l.y=C(l.x,l.z),h.yaw=0,h.orbitPitch=.16,h.distance=c.cameraDistance,h.currentDistance=h.distance,h.charYaw=Math.PI,a.position.copy(l),a.rotation.y=h.charYaw,a.visible=!0,e.fov=46,e.updateProjectionMatrix(),re()}function Te($){if($.button===0&&h.inputEnabled){g=!0,S=$.pointerId,v=p=$.clientX,m=b=$.clientY,P=0;try{t.setPointerCapture($.pointerId)}catch{}t.style.cursor="grabbing"}}function Ie($){if(!g||$.pointerId!==S)return;const Ee=$.clientX-v,Ae=$.clientY-m;P+=Math.abs(Ee)+Math.abs(Ae),v=$.clientX,m=$.clientY;const Je=$.pointerType==="touch"?.006:.0042;h.yaw-=Ee*Je,h.mode==="third"?h.orbitPitch=vn(h.orbitPitch-Ae*Je,-.12,.82):h.lookPitch=vn(h.lookPitch-Ae*Je,-1.15,1.05)}function yt($){if(!g||S!==-1&&$.pointerId!==S)return;g=!1,S=-1,t.style.cursor="",Math.abs($.clientX-p)+Math.abs($.clientY-b)<6&&P<8&&o.onCanvasClick?.($)}function Et($){if(!h.inputEnabled||h.mode!=="third")return;$.preventDefault();const Ee=Math.sign($.deltaY);h.distance=vn(h.distance+Ee*.55,c.cameraMinDistance,c.cameraMaxDistance)}function jt($){if(!$)return!1;const Ee=$.tagName;return Ee==="INPUT"||Ee==="TEXTAREA"||Ee==="SELECT"||$.isContentEditable}function W($){jt($.target)||(rx.has($.code)||$.code==="ShiftLeft"||$.code==="ShiftRight")&&h.inputEnabled&&(d.add($.code),$.code.startsWith("Arrow")&&$.preventDefault())}function lt($){d.delete($.code)}function Se(){d.clear(),g=!1}return t.addEventListener("pointerdown",Te),window.addEventListener("pointermove",Ie),window.addEventListener("pointerup",yt),window.addEventListener("pointercancel",yt),t.addEventListener("wheel",Et,{passive:!1}),window.addEventListener("keydown",W),window.addEventListener("keyup",lt),window.addEventListener("blur",Se),t.addEventListener("contextmenu",$=>$.preventDefault()),re(),{character:a,state:h,get mode(){return h.mode},getPosition:()=>l.clone(),getEyePosition:G,setPosition($,Ee){h.mode==="third"&&(l.x=$,l.z=Ee,l.y=C($,Ee),u.set(0,0,0),a.position.copy(l),re())},getInteractionPosition(){return h.mode==="first"?G():new A(l.x,l.y+1,l.z)},getForward(){const $=(h.mode==="first",h.yaw);return new A(-Math.sin($),0,-Math.cos($))},setColliders({outside:$,interior:Ee,occluders:Ae}={}){$&&(n=$),Ee&&(s=Ee),Ae&&(r=Ae),f.far=20},update:we,enterInterior:Pe,exitInterior:ye,setInputEnabled:F,isInputEnabled:()=>h.inputEnabled,snapCamera:re,dispose(){t.removeEventListener("pointerdown",Te),window.removeEventListener("pointermove",Ie),window.removeEventListener("pointerup",yt),window.removeEventListener("pointercancel",yt),t.removeEventListener("wheel",Et),window.removeEventListener("keydown",W),window.removeEventListener("keyup",lt),window.removeEventListener("blur",Se)}}}function Cs(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Pn;let l=0;for(let u=0;u<i.length;++u){const d=i[u];let f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in d.attributes){if(!n.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(d.attributes[h]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in d.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(d.morphAttributes[h])}if(e){let h;if(t)h=d.index.count;else if(d.attributes.position!==void 0)h=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,h,u),l+=h}}if(t){let u=0;const d=[];for(let f=0;f<i.length;++f){const h=i[f].index;for(let g=0;g<h.count;++g)d.push(h.getX(g)+u);u+=i[f].attributes.position.count}c.setIndex(d)}for(const u in r){const d=Of(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(const u in o){const d=o[u][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<d;++f){const h=[];for(let v=0;v<o[u].length;++v)h.push(o[u][v][f]);const g=Of(h);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function Of(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new Wn(o,t,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const d=c/t;for(let f=0,h=u.count;f<h;f++)for(let g=0;g<t;g++){const v=u.getComponent(f,g);a.setComponent(f+d,g,v)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}const zf=new A(0,1,0),Pc=Vt.terrainSize/2,Pr=new je(Vt.path.start.x,Vt.path.start.z),cx=new je(Vt.path.end.x,Vt.path.end.z),Ls=new je().subVectors(cx,Pr),ux=Ls.x*Ls.x+Ls.y*Ls.y;function qs(i,e){const t=i-Pr.x,n=e-Pr.y,s=vn((t*Ls.x+n*Ls.y)/ux,0,1),r=Pr.x+Ls.x*s,o=Pr.y+Ls.y*s;return{t:s,px:r,pz:o,dist:Math.hypot(i-r,e-o)}}function fo(i){return{x:Pr.x+Ls.x*i,z:Pr.y+Ls.y*i}}function si(i,e){const t=Math.hypot(i,e),n=qs(i,e),s=Math.hypot(i-Vt.well.x,e-Vt.well.z);let r=cs(15.4,30,t);r*=cs(2,4.4,n.dist),r*=cs(2.4,4.4,s);const o=(Cl(i*.034+13.1,e*.034+7.7,3,5)-.5)*2.7,a=(Cl(i*.12+3.7,e*.12+9.2,2,8)-.5)*.5,c=cs(17,68,t)*2.3;return r*(o*.85+c+a)}function Bf(i){return i<6.1||i>19.4}const hx=-5.9,fx=5.9,dx=-4.9,px=6.9;function hr(i,e){return i>hx&&i<fx&&e>dx&&e<px}function lo(i){return i.x>-5.3&&i.x<5.3&&i.z>-4.4&&i.z<6.3&&i.y<6.4}const fr=[{h:0,top:"#060a12",hor:"#131a26",sun:"#6d84ab"},{h:4.5,top:"#0e1626",hor:"#2b2c3c",sun:"#b98264"},{h:6.2,top:"#3d4c68",hor:"#d99f72",sun:"#ffc98c"},{h:8.5,top:"#6d95ba",hor:"#d6ccb2",sun:"#ffe8c4"},{h:12.5,top:"#78a4cb",hor:"#e7dec7",sun:"#fff5df"},{h:16.2,top:"#6586ad",hor:"#e9c99f",sun:"#ffd99f"},{h:17.9,top:"#42506f",hor:"#e59a66",sun:"#ff9e5a"},{h:19.2,top:"#1d2438",hor:"#5d4354",sun:"#c87b56"},{h:20.8,top:"#0b101c",hor:"#242e3f",sun:"#7e93b8"},{h:24,top:"#060a12",hor:"#131a26",sun:"#6d84ab"}];function mx(i,e=0,t=null){let n=fr[0],s=fr[fr.length-1];for(let h=0;h<fr.length-1;h++)if(i>=fr[h].h&&i<=fr[h+1].h){n=fr[h],s=fr[h+1];break}const r=vn((i-n.h)/Math.max(1e-4,s.h-n.h),0,1),o=new ke(n.top).lerp(new ke(s.top),r),a=new ke(n.hor).lerp(new ke(s.hor),r),c=new ke(n.sun).lerp(new ke(s.sun),r);if(t){const h=new ke(t);o.lerp(h,.07),a.lerp(h,.15)}if(e>.001){const h=new ke("#7d8488"),g=new ke("#a7a8a2");o.lerp(h,e*.78),a.lerp(g,e*.72)}const l=vn((i-6)/12,0,1),u=l*Math.PI,d=Math.max(.05,Math.sin(l*Math.PI)*.92),f=new A(Math.cos(u)*.95,d,Math.sin(u)*.5+.55).normalize();return{top:o,horizon:a,sun:c,sunDir:f}}function kf(i=1,e=0){return Sn(256,256,(n,s,r)=>{const o=Ht(i+e*37);n.clearRect(0,0,s,r);const a=s*.5,c=r*.5,l=["#f6f0dd","#eee7d0","#fbf5e4","#e2dbc2","#f2ead2","#dcd4ba"],u=["#c9c2a9","#beb79d","#d2cab0"];for(let f=0;f<18;f++){const h=o()*Ge,g=Math.pow(o(),.7)*s*.3,v=a+Math.cos(h)*g,m=c+Math.sin(h)*g*.85+s*.04,p=y(o,s*.07,s*.14);n.save(),n.translate(v,m),n.rotate(o()*Ge),n.globalAlpha=y(o,.6,.95),n.fillStyle=Ci(o,u),n.beginPath(),n.ellipse(0,0,p,p*.44,0,0,Ge),n.fill(),n.restore()}const d=62+Math.floor(o()*26);for(let f=0;f<d;f++){const h=o()*Ge,g=Math.pow(o(),.55)*s*.38,v=a+Math.cos(h)*g,m=c+Math.sin(h)*g*.88,p=y(o,s*.04,s*.1);n.save(),n.translate(v,m),n.rotate(o()*Ge),n.globalAlpha=y(o,.82,1);const b=n.createLinearGradient(-p,-p*.4,p,p*.4);b.addColorStop(0,Ci(o,l)),b.addColorStop(1,"#c6bfa5"),n.fillStyle=b,n.beginPath(),n.ellipse(0,0,p,p*y(o,.34,.48),0,0,Ge),n.fill(),n.strokeStyle="rgba(118,104,74,.28)",n.lineWidth=1,n.beginPath(),n.moveTo(-p*.85,0),n.lineTo(p*.85,0),n.stroke(),n.restore()}},{wrapS:on,wrapT:on})}function gx(i=2,e=0){return Sn(256,256,(n,s,r)=>{const o=Ht(i+e*53);n.clearRect(0,0,s,r);const a=["#eef1da","#dde4c4","#f4f5e2","#cfd9b0","#e6ebcf","#c4cf9f"],c=r*.5;n.strokeStyle="rgba(206,196,168,.8)",n.lineWidth=2.4,n.beginPath(),n.moveTo(s*.07,c+r*.03),n.quadraticCurveTo(s*.55,c-r*.03,s*.94,c+r*.02),n.stroke();const l=26;for(let u=0;u<l;u++){const d=.14+u/l*.82,f=s*d,h=c+Math.sin(d*Math.PI*1.2)*r*.02,g=o()>.5,v=4+Math.floor(o()*5);for(let m=0;m<v;m++){const b=(g?-1:1)*(.45+o()*1)-(g?.35:-.15),P=r*(.1+o()*.2)*(1.2-d*.35);n.beginPath(),n.moveTo(f,h),n.lineTo(f+Math.cos(b)*P*.9,h+Math.sin(b)*P),n.strokeStyle=Ci(o,a),n.lineWidth=y(o,1,2.2),n.lineCap="round",n.globalAlpha=y(o,.6,1),n.stroke()}}n.globalAlpha=1},{wrapS:on,wrapT:on})}function vx(i=8,e=0){return Sn(256,256,(n,s,r)=>{const o=Ht(i+e*17);n.clearRect(0,0,s,r),n.translate(s/2,r*.99);const a=6+e%3;for(let c=0;c<a;c++){const l=-Math.PI/2+y(o,-.9,.9),u=y(o,r*.46,r*.88),d=Math.cos(l),f=Math.sin(l),h=14,g=[];for(let v=0;v<=h;v++){const m=v/h,p=Math.sin(m*Math.PI*.8)*.18;g.push({x:d*u*m+Math.cos(l+Math.PI/2)*u*p*m,y:f*u*m+Math.sin(l+Math.PI/2)*u*p*m})}n.beginPath(),n.moveTo(0,0);for(const v of g)n.lineTo(v.x,v.y);n.strokeStyle="#d9d6bd",n.lineWidth=1.8,n.stroke();for(let v=2;v<h;v++){const m=v/h,p=g[v],b=(1-m*.66)*15,P=l+Math.PI/2;for(const S of[-1,1]){n.save(),n.translate(p.x,p.y),n.rotate(P+(S<0?.35:-.35)),n.beginPath(),n.ellipse(0,S*b*.55,b*.42,b*.85,0,0,Ge);const T=n.createLinearGradient(0,-b,0,b);T.addColorStop(0,"#f6f2dd"),T.addColorStop(1,"#cfcbaa"),n.fillStyle=T,n.globalAlpha=.95,n.fill(),n.restore()}}}},{wrapS:on,wrapT:on})}function _x(i=3,e=0){return Sn(160,160,(n,s,r)=>{const o=Ht(i+e*29);n.clearRect(0,0,s,r);const a=["#f2efd8","#e4e4c4","#cfd4ac","#faf7e4","#bcc59a"];for(let c=0;c<78;c++){const l=s*(.12+o()*.76),u=l+y(o,-s*.3,s*.3),d=r*y(o,.02,.42),f=y(o,-16,16);n.beginPath(),n.moveTo(l,r),n.quadraticCurveTo(l+f,r*.55,u,d);const h=n.createLinearGradient(l,r,u,d);h.addColorStop(0,"rgba(120,124,86,.95)"),h.addColorStop(1,Ci(o,a)),n.strokeStyle=h,n.lineWidth=y(o,1.1,2.8),n.lineCap="round",n.globalAlpha=y(o,.75,1),n.stroke()}n.globalAlpha=1},{wrapS:on,wrapT:on})}function xx(i=9){return Sn(256,256,(t,n,s)=>{const r=Ht(i);t.clearRect(0,0,n,s);const o=n*.5,a=s*.5,c=["#fff8f5","#fdeef0","#f8dde4","#fbe8ea","#f6d2da"];for(let l=0;l<26;l++){const u=r()*Ge,d=Math.pow(r(),.62)*n*.36,f=o+Math.cos(u)*d,h=a+Math.sin(u)*d*.85,g=y(r,n*.045,n*.085);t.save(),t.translate(f,h),t.rotate(r()*Ge),t.fillStyle=Ci(r,c),t.globalAlpha=y(r,.82,1);for(let v=0;v<5;v++)t.rotate(Ge/5),t.beginPath(),t.ellipse(0,-g*.62,g*.4,g*.62,0,0,Ge),t.fill();t.fillStyle="rgba(236,190,120,.9)",t.beginPath(),t.arc(0,0,g*.22,0,Ge),t.fill(),t.restore()}},{wrapS:on,wrapT:on})}function Mx(i=4){return Sn(256,256,(t,n,s)=>{const r=Ht(i);t.clearRect(0,0,n,s),t.strokeStyle="#ded4c2",t.lineCap="round";function o(a,c,l,u,d,f){const h=a+Math.cos(l)*u,g=c+Math.sin(l)*u;if(t.globalAlpha=vn(.35+d*.35,.3,1),t.lineWidth=d,t.beginPath(),t.moveTo(a,c),t.quadraticCurveTo(a+Math.cos(l+.18)*u*.55,c+Math.sin(l+.18)*u*.55,h,g),t.stroke(),f<=0||d<.7)return;const v=2+(r()>.55?1:0);for(let m=0;m<v;m++){const p=l+y(r,-.7,.7);o(h,g,p,u*y(r,.45,.72),d*.62,f-1)}}for(let a=0;a<6;a++){const c=n*.5+y(r,-n*.16,n*.16);o(c,s*.96,-Math.PI*.5+y(r,-.75,.75),y(r,s*.2,s*.33),y(r,2,3.2),3)}t.globalAlpha=1},{wrapS:on,wrapT:on})}function yx(i=17){return Sn(512,512,(t,n,s)=>{const r=Ht(i);t.fillStyle="#eef3f6",t.fillRect(0,0,n,s);for(let o=0;o<90;o++){const a=r()*n,c=r()*s,l=y(r,20,120),u=t.createRadialGradient(a,c,0,a,c,l),d=r(),f=d>.6?"214,225,234":d>.3?"255,255,255":"198,213,224";u.addColorStop(0,`rgba(${f},${y(r,.15,.4)})`),u.addColorStop(1,`rgba(${f},0)`),t.fillStyle=u,t.fillRect(a-l,c-l,l*2,l*2)}for(let o=0;o<120;o++)t.fillStyle=r()>.5?"rgba(150,140,120,.10)":"rgba(110,100,80,.08)",t.beginPath(),t.ellipse(r()*n,r()*s,y(r,1,4),y(r,.5,2),r()*Ge,0,Ge),t.fill();for(let o=0;o<500;o++)t.fillStyle=`rgba(255,255,255,${y(r,.15,.6)})`,t.fillRect(r()*n,r()*s,1,1);li(t,n,s,r,.02)},{repeat:[18,18]})}function Sx(i=71){const t=Sn(512,512,(n,s,r)=>{const o=Ht(i);n.clearRect(0,0,s,r),n.fillStyle="rgba(255,255,255,1)",n.fillRect(0,0,s,r);for(let v=0;v<150;v++){const m=o()*s,p=o()*r,b=y(o,s*.015,s*.1),P=n.createRadialGradient(m,p,0,m,p,b);P.addColorStop(0,`rgba(0,0,0,${y(o,.12,.5)})`),P.addColorStop(.6,`rgba(0,0,0,${y(o,.04,.2)})`),P.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=P,n.beginPath(),n.ellipse(m,p,b,b*y(o,.5,1),o()*Ge,0,Ge),n.fill()}const a=(v,m)=>[(v/Vt.terrainSize+.5)*s,(m/Vt.terrainSize+.5)*r],c=[{width:3.1,alpha:.5},{width:2.1,alpha:.35}];for(const v of c){n.strokeStyle=`rgba(0,0,0,${v.alpha})`,n.lineWidth=v.width/Vt.terrainSize*s,n.lineCap="round",n.beginPath();for(let m=0;m<=24;m++){const p=m/24,b=fo(p),[P,S]=a(b.x,b.z);m===0?n.moveTo(P,S):n.lineTo(P,S)}n.stroke()}const[l,u]=a(Vt.well.x,Vt.well.z),d=n.createRadialGradient(l,u,0,l,u,2.4/Vt.terrainSize*s);d.addColorStop(0,"rgba(0,0,0,.4)"),d.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=d,n.beginPath(),n.arc(l,u,2.4/Vt.terrainSize*s,0,Ge),n.fill();const[f,h]=a(Vt.spawn.x,Vt.spawn.z),g=n.createRadialGradient(f,h,0,f,h,9/Vt.terrainSize*s);g.addColorStop(0,"rgba(0,0,0,.12)"),g.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=g,n.beginPath(),n.arc(f,h,9/Vt.terrainSize*s,0,Ge),n.fill()},{srgb:!1,wrapS:on,wrapT:on});return t.flipY=!1,t.needsUpdate=!0,t}function gs(i,e,t){const n=i.length,s=[],r=[],o=[],a=[],c=[];for(let h=0;h<n;h++){const g=new A;h===0?g.subVectors(i[1],i[0]):h===n-1?g.subVectors(i[h],i[h-1]):g.subVectors(i[h+1],i[h-1]),g.lengthSq()<1e-9&&g.set(0,1,0),c.push(g.normalize())}let l=null;for(let h=0;h<n;h++){const g=c[h];let v;if(l)v=l.clone(),v.addScaledVector(g,-v.dot(g)),v.lengthSq()<1e-9&&v.set(1,0,0),v.normalize();else{const p=Math.abs(g.y)>.92?new A(1,0,0):new A(0,1,0);v=new A().crossVectors(g,p).normalize()}l=v;const m=new A().crossVectors(g,v).normalize();for(let p=0;p<t;p++){const b=p/t*Ge,P=Math.cos(b),S=Math.sin(b),T=v.x*P+m.x*S,E=v.y*P+m.y*S,U=v.z*P+m.z*S,M=e[h];s.push(i[h].x+T*M,i[h].y+E*M,i[h].z+U*M),r.push(T,E,U),o.push(p/t,h/(n-1))}}for(let h=0;h<n-1;h++)for(let g=0;g<t;g++){const v=(g+1)%t,m=h*t+g,p=h*t+v,b=(h+1)*t+v,P=(h+1)*t+g;a.push(m,p,P,p,b,P)}const u=new Pn;u.setAttribute("position",new an(s,3)),u.setAttribute("normal",new an(r,3)),u.setAttribute("uv",new an(o,2)),u.setIndex(a);let d=0;const f=u.attributes.uv;for(let h=0;h<n;h++){h>0&&(d+=i[h].distanceTo(i[h-1]));for(let g=0;g<t;g++)f.setY(h*t+g,d*.55)}return u}function Pu(i){i.computeVertexNormals();const e=i.attributes.normal;let t=0;for(let n=0;n<e.count;n++)t+=e.getY(n);if(t<0){const n=i.index;if(n){for(let s=0;s<n.count;s+=3){const r=n.getX(s);n.setX(s,n.getX(s+1)),n.setX(s+1,r)}i.computeVertexNormals()}}return i}function Lc(i,e){const t=i.attributes.position.count,n=new Float32Array(t*3);for(let s=0;s<t;s++)n[s*3]=e.r,n[s*3+1]=e.g,n[s*3+2]=e.b;return i.setAttribute("color",new Wn(n,3)),i}function rl(i){const e=[];for(const t of i)!t||!t.attributes||!t.attributes.position||t.attributes.position.count===0||e.push(t.index?t.toNonIndexed():t);return e}function Er(i,e=0){const t=new To(1,e),n=t.attributes.position,s=new Map,r=new A,o=i*13.37+5;for(let a=0;a<n.count;a++){r.fromBufferAttribute(n,a);const c=`${r.x.toFixed(3)}|${r.y.toFixed(3)}|${r.z.toFixed(3)}`;let l=s.get(c);if(!l){const u=Cu(r.x*2.3+o,r.y*2.7+r.z*1.9+o*3)-.5,d=Cu(r.x*5.1+4,r.z*5.3+r.y*3.1+o)-.5,f=1+u*.5+d*.18;let h=r.y*(1+d*.35)*f;h<-.5&&(h=-.5-(h+.5)*.3),l=new A(r.x*f,h,r.z*(f-u*.12)),s.set(c,l)}n.setXYZ(a,l.x,l.y,l.z)}return t.computeVertexNormals(),t}function Gf(i=901){const e=Er(i,0),t=e.attributes.position;let n=1/0;for(let s=0;s<t.count;s++)n=Math.min(n,t.getY(s));for(let s=0;s<t.count;s++)t.setY(s,(t.getY(s)-n)*.92-.06);return e.computeVertexNormals(),e}function bx(i,e=7,t=1,n=.82,s=1){const r=[];for(let g=0;g<e;g++)r.push(g/e*Ge+y(i,-.14,.14)*(Ge/e));const o=[],a=[],c=[],l=s*.5,u=-s*.5;o.push(0,l,0),a.push(.5,.5);for(let g=0;g<e;g++){const v=t*y(i,.82,1.12),m=r[g],p=Math.cos(m)*v,b=Math.sin(m)*v;o.push(p,l,b),a.push(p*.35+.5,b*.35+.5)}for(let g=0;g<e;g++){const v=n*y(i,.82,1.15),m=r[g],p=Math.cos(m)*v,b=Math.sin(m)*v;o.push(p,u,b),a.push(p*.35+.5,b*.35+.5)}const d=1,f=1+e;for(let g=0;g<e;g++){const v=(g+1)%e;c.push(0,d+g,d+v),c.push(d+g,f+g,f+v),c.push(d+g,f+v,d+v)}const h=new Pn;return h.setAttribute("position",new an(o,3)),h.setAttribute("uv",new an(a,2)),h.setIndex(c),Pu(h)}function ol(i=3,e=1,t=1,n=!1){const s=[];for(let r=0;r<i;r++){const o=new ii(e,t);n&&o.translate(0,t*.5,0),o.rotateY(r/i*Math.PI),s.push(o)}return Cs(s,!1)}function Tr(i,e,t={}){const n=t.amount??1,s=t.ground?1:0,r=`nature-wind-${t.key??"x"}`;return i.onBeforeCompile=o=>{o.uniforms.uTime=e.uTime,o.uniforms.uWind=e.uWind,o.vertexShader=`uniform float uTime;
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
      transformed.x += sin(uTime * 2.35 + transformed.y * 2.7 + nPhase) * 0.035 * uWind * nAmt * ${s?"0.0":"1.0"};`)},i.customProgramCacheKey=()=>r,i}function wx({scene:i,callbacks:e={}}={}){const t=new Jt;t.name="nature",i&&i.add(t);const n={uTime:{value:0},uWind:{value:1}},s=new $n,r=new ke,o=C2({seed:31,repeat:[14,14]}),a=R2({seed:44,repeat:[1,1]}),c=Rl({seed:11,repeat:[1,1]}),l=Rl({seed:23,repeat:[1,1]}),u=Ru({seed:21}),d=Ru({seed:33,base:"#c7c1b2",dark:"#776f61",light:"#ece7da"}),f=As({seed:7,planks:4,base:"#6a4b2d",light:"#a38050",dark:"#33200f"}),h=B0({seed:15}),g=kf(5,0),v=kf(8,1),m=gx(3,0),p=xx(9),b=Mx(4),P=yx(17),S=Sx(71),T=P2({size:128,seed:5,tint:"#d8d0b4"}),E=L2({size:64,color:"#f3c9d1"}),U=vx(8,0),M=_x(3,0),C=Dr({size:128,color:"255,236,190"}),F=U2({size:256,seed:41}),k=new sn({map:o,color:16777215,roughness:.96,metalness:0,vertexColors:!0}),V=new sn({map:a,color:12168082,roughness:.94,metalness:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),ie=new sn({map:c,color:11051668,roughness:.92,metalness:0,vertexColors:!1,side:Bn}),G=ie.clone();G.vertexColors=!0;const Q=new sn({map:l,color:10328204,roughness:.94,metalness:0}),we=new sn({map:u,color:11837572,roughness:.93,metalness:0}),re=new sn({map:d,color:9866621,roughness:.88,metalness:0}),Pe=new sn({map:f,color:11044703,roughness:.86,metalness:0}),ye=new sn({map:f,color:8546635,roughness:.9,metalness:0}),Te=new sn({map:h,color:11904142,roughness:.92,metalness:0}),Ie=Tr(new sn({map:g,alphaTest:.38,side:Bn,roughness:.82,metalness:0,emissive:new ke("#241505"),emissiveIntensity:.46}),n,{key:"leaf",amount:1}),yt=Tr(new sn({map:v,alphaTest:.38,side:Bn,roughness:.84,metalness:0,emissive:new ke("#1f1408"),emissiveIntensity:.42}),n,{key:"leafb",amount:1.08}),Et=Tr(new sn({map:m,alphaTest:.34,side:Bn,roughness:.86,metalness:0,emissive:new ke("#0c1206"),emissiveIntensity:.25}),n,{key:"pine",amount:.7}),jt=Tr(new sn({map:p,alphaTest:.3,side:Bn,roughness:.78,metalness:0,emissive:new ke("#2a1519"),emissiveIntensity:.42}),n,{key:"blossom",amount:1}),W=Tr(new sn({map:b,alphaTest:.3,side:Bn,roughness:.9,metalness:0}),n,{key:"twig",amount:.55}),lt=Tr(new sn({map:U,alphaTest:.42,side:Bn,roughness:.88,metalness:0}),n,{key:"fern",amount:1.7,ground:!0}),Se=Tr(new sn({map:M,alphaTest:.32,side:Bn,roughness:.9,metalness:0}),n,{key:"grass",amount:2.1,ground:!0}),$=new sn({map:T,alphaTest:.4,side:Bn,roughness:.92,metalness:0}),Ee=new sn({color:6253628,roughness:1,metalness:0}),Ae=new sn({color:15331316,roughness:.82,metalness:0}),Je=new sn({map:P,alphaMap:S,transparent:!0,depthWrite:!1,roughness:.86,metalness:0,color:16777215,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),Ye=new sn({color:1910054,roughness:.03,metalness:.72,envMapIntensity:1.5,transparent:!0,opacity:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),xe=new sn({color:1581087,roughness:.07,metalness:.4,map:F}),B=new sn({color:10125396,roughness:.95,metalness:0}),ee=new sn({color:3813156,roughness:.85,metalness:0});let ue=null;function ve(x){const se=x.weather||"clear";let Z=x.overcast??0;se==="rain"?Z=Math.max(Z,.78):se==="storm"?Z=Math.max(Z,.9):se==="fog"?Z=Math.max(Z,.6):se==="snow"&&(Z=Math.max(Z,.45));const H=Rc[x.season]?.tint,_e=mx(x.hour??17.2,Z,H),K=k0("#"+_e.top.getHexString(),"#"+_e.horizon.getHexString(),"#"+_e.sun.getHexString(),_e.sunDir);K.mapping=al;const me=ue;ue=K,Ye.envMap=K,Ye.needsUpdate=!0,xe.envMap=K,xe.needsUpdate=!0,k.envMap=K,k.needsUpdate=!0,V.envMap=K,V.needsUpdate=!0,ie.envMap=K,G.envMap=K,Q.envMap=K;for(const Me of[ie,G,Q])Me.needsUpdate=!0,Me.envMapIntensity=0;return me&&me.dispose(),_e}function He(){const Z=[],H=[],_e=[];Z.push(0,si(0,0),0),H.push(.5,.5);for(let Ne=1;Ne<=40;Ne++){const ae=Pc*Math.pow(Ne/40,1.35);for(let be=0;be<100;be++){const We=be/100*Ge,dt=Math.cos(We)*ae,kt=Math.sin(We)*ae;Z.push(dt,si(dt,kt),kt),H.push(dt/(Pc*2)+.5,kt/(Pc*2)+.5)}}for(let Ne=0;Ne<100;Ne++)_e.push(0,1+Ne,1+(Ne+1)%100);for(let Ne=1;Ne<40;Ne++){const ae=1+(Ne-1)*100,be=1+Ne*100;for(let We=0;We<100;We++){const dt=(We+1)%100;_e.push(ae+We,be+We,ae+dt),_e.push(ae+dt,be+We,be+dt)}}const K=new Pn;K.setAttribute("position",new an(Z,3)),K.setAttribute("uv",new an(H,2)),K.setIndex(_e),Pu(K);const me=K.attributes.position.count,Me=new Float32Array(me*3);for(let Ne=0;Ne<me;Ne++){const ae=K.attributes.position.getX(Ne),be=K.attributes.position.getZ(Ne),We=Cl(ae*.13+5.1,be*.13+2.4,2,9),dt=cs(.52,.78,Cl(ae*.06+1.7,be*.06+8.9,2,4)),kt=.9+We*.2;Me[Ne*3]=kt*(1-dt*.12),Me[Ne*3+1]=kt*1.02*(1+dt*.02),Me[Ne*3+2]=kt*.92*(1-dt*.18)}return K.setAttribute("color",new Wn(Me,3)),K}const vt=He(),pt=new Ut(vt,k);pt.name="forest-floor",pt.receiveShadow=!0,t.add(pt);const ce=vt.clone();{const x=ce.attributes.position;for(let se=0;se<x.count;se++)x.setY(se,x.getY(se)+.022);ce.computeVertexNormals(),ce.computeBoundingSphere()}const Xe=new Ut(ce,Je);Xe.name="snow-cover",Xe.receiveShadow=!0,Xe.visible=!1,Xe.renderOrder=2,t.add(Xe);const D=new Jt;D.name="path",t.add(D);function Ve(){const se=[],Z=[],H=[],_e=Ht(404),K=Vt.path.start.z-.4,me=Vt.path.end.z+.9,Me=Vt.path.width+.55;for(let ae=0;ae<=26;ae++){const be=ae/26,We=Zi(K,me,be),dt=qs(0,We),kt=y(_e,-.16,.18),cn=y(_e,-.16,.18),bn=dt.px;se.push(bn-Me/2+kt,.012,We),se.push(bn+Me/2+cn,.012,We),Z.push(0,be*(me-K)*.5),Z.push(1,be*(me-K)*.5)}for(let ae=0;ae<26;ae++){const be=ae*2;H.push(be,be+2,be+1),H.push(be+1,be+2,be+3)}const Ne=new Pn;return Ne.setAttribute("position",new an(se,3)),Ne.setAttribute("uv",new an(Z,2)),Ne.setIndex(H),Pu(Ne),Ne}const tt=new Ut(Ve(),V);tt.receiveShadow=!0,tt.name="path-base",D.add(tt);const R=[],_=[];{const x=Ht(913),se=[];let Z=Vt.path.start.z+.15,H=0;for(;Z<Vt.path.end.z+.5&&H++<200;){const Me=qs(0,Z),Ne=x()<.55?2:1;for(let ae=0;ae<Ne;ae++){const be=Me.px+y(x,-.52,.52)+(ae===0?-.24:.26),We=Z+y(x,-.14,.14),dt=y(x,.3,.5);let kt=!0;for(const bi of se)if(Math.hypot(bi.x-be,bi.z-We)<(bi.r+dt)*.72){kt=!1;break}if(!kt)continue;const cn=y(x,.07,.12),bn=bx(x,6+Math.floor(x()*3),dt,dt*y(x,.7,.9),cn),nn=.012+cn*.5-y(x,.01,.035);bn.rotateY(x()*Ge),bn.scale(y(x,.78,1.25),1,y(x,.62,1.05));const Si=y(x,.78,1.12),Ji=new ke().setRGB(Si*.98,Si*.97,Si*.93);Lc(bn,Ji),bn.translate(be,nn,We),_.push(bn),se.push({x:be,z:We,r:dt}),R.push({x:be,z:We,r:dt,topY:nn+cn*.5,tone:Si})}Z+=y(x,.42,.66)}const _e=[];for(let Me=0;Me<46;Me++){const Ne=x(),ae=fo(Ne),be=ae.x+y(x,-1,1),We=ae.z+y(x,-.4,.4),dt=y(x,.05,.13),kt=Er(300+Me,0);kt.scale(dt,dt*.66,dt*y(x,.8,1.2)),kt.rotateY(x()*Ge),Lc(kt,new ke().setRGB(.62,.6,.55)),kt.translate(be,si(be,We)+dt*.12,We),_e.push(kt)}_.push(..._e);const K=Cs(rl(_),!1);if(!K)throw new Error("nature: flagstone merge failed");const me=new Ut(K,G);me.castShadow=!0,me.receiveShadow=!0,me.name="flagstones",D.add(me)}const J=ol(3,1,1),pe=ol(2,1.9,.75),Re=ol(3,1,1,!0),et=ol(2,1,1,!0),Qe=new ii(1,1),Le=[],Oe=[],ct=[],Ft=[],rt=[],Be=[],Ct=[],Tt=[];function Xt(x,{birch:se=!1,near:Z=!0,scale:H=1,compact:_e=!1,worldMatrix:K=null}={}){const me=[],Me=[],Ne=(se?y(x,14.6,18.4):y(x,13,16.8))*H,ae=(se?y(x,.2,.28):y(x,.36,.54))*H,be=Z?7:5,We=x()*Ge,dt=y(x,.06,.28)*Ne*.26,kt=y(x,-.07,.07)*Ne,cn=Ne*(se?.64:.55),bn=Z?4:3,nn=[],Si=[];for(let ri=0;ri<=bn;ri++){const Tn=ri/bn,Kn=Math.cos(We)*dt*Tn*Tn+Math.sin(We)*kt*Math.sin(Tn*Math.PI)*.5,fi=Math.sin(We)*dt*Tn*Tn-Math.cos(We)*kt*Math.sin(Tn*Math.PI)*.5;nn.push(new A(Kn,cn*Tn,fi)),Si.push(Zi(ae,ae*.46,Math.pow(Tn,.82)))}if(me.push(gs(nn,Si,be)),Z){const ri=3+Math.floor(x()*2);for(let Tn=0;Tn<ri;Tn++){const Kn=Tn/ri*Ge+y(x,-.4,.4),fi=y(x,.8,1.7)*H,Jn=new A(0,ae*.75,0),wi=new A(Math.cos(Kn)*fi*.5,ae*.2,Math.sin(Kn)*fi*.5),qt=new A(Math.cos(Kn)*fi,-.1,Math.sin(Kn)*fi);me.push(gs([Jn,wi,qt],[ae*.4,ae*.18,.03],4))}}const Ji=nn[nn.length-1].clone(),bi=se?3+Math.floor(x()*2):4+Math.floor(x()*2),zs=(se?y(x,2,3.1):y(x,3.3,4.8))*H*(_e?.82:1),vi=(se?1.05:1.42)*(Z?1:1.12),bs=Z?3:2;for(let ri=0;ri<bi;ri++){const Tn=ri/bi*Ge+y(x,-.4,.4)+We,Kn=zs*y(x,.55,1),fi=Ne*y(x,se?.2:.16,.34)*(_e?1.18:1),Jn=Ji.clone(),wi=Jn.clone().add(new A(Math.cos(Tn)*Kn*.4,fi*.52,Math.sin(Tn)*Kn*.4)),qt=Jn.clone().add(new A(Math.cos(Tn)*Kn,fi,Math.sin(Tn)*Kn));me.push(gs([Jn,wi,qt],[ae*.36,ae*.17,.014*H],be)),Me.push({p:qt.clone(),s:vi*y(x,1,1.3)});for(let un=0;un<bs;un++){const Qn=y(x,.3,.92),fs=Jn.clone().lerp(qt,Qn),vr=Tn+(un%2===0?1:-1)*y(x,.45,1.2),ir=y(x,1,2.3)*H*(1-Qn*.25),Ma=y(x,.18,.75),j0=fs.clone().add(new A(Math.cos(vr)*ir*.45,Ma*ir*.4,Math.sin(vr)*ir*.45)),ya=fs.clone().add(new A(Math.cos(vr)*ir,Ma*ir,Math.sin(vr)*ir));if(me.push(gs([fs,j0,ya],[ae*.13,ae*.06,.01],Z?be-1:4)),Me.push({p:ya.clone(),s:vi*y(x,.85,1.15)}),Z){const fh=vr+y(x,-.7,.7),Xl=y(x,.5,1.1)*H,dh=ya.clone().add(new A(Math.cos(fh)*Xl,y(x,.2,.6)*Xl,Math.sin(fh)*Xl));me.push(gs([ya,dh],[ae*.05,.006],3)),Me.push({p:dh.clone(),s:vi*y(x,.7,1)})}}}if(!se){const ri=Z?3:2;for(let Tn=0;Tn<ri;Tn++){const Kn=x()*Ge,fi=cn*y(x,.42,.68),Jn=fi/Ne,wi=new A(Math.cos(We)*dt*Jn*Jn,fi,Math.sin(We)*dt*Jn*Jn),qt=zs*y(x,.4,.7),un=qt*y(x,.35,.7),Qn=wi.clone().add(new A(Math.cos(Kn)*qt,un,Math.sin(Kn)*qt));K&&lo(Qn.clone().applyMatrix4(K))||(me.push(gs([wi,Qn],[ae*.16,.008],Z?5:3)),Me.push({p:Qn.clone(),s:vi*y(x,.8,1.1)}))}}const hs=Math.round((se?84:122)*(Z?1:.85)*H*(_e?.86:1)),Gi=Ji.clone().add(new A(0,Ne*.2,0)),nr=zs*1.2;let is=0;for(;Me.length<hs&&is++<hs*12;){const ri=x()*Ge,Tn=Math.pow(x(),.62)*nr,Kn=Gi.y+y(x,-Ne*.18,Ne*.36)*(1-Tn/nr*.25);Kn<Ji.y-Ne*.1||Me.push({p:new A(Gi.x+Math.cos(ri)*Tn,Kn,Gi.z+Math.sin(ri)*Tn),s:vi*y(x,.7,1.15)})}return{geos:me,foliage:Me,height:Ne,trunkR:ae}}function j(x,{near:se=!0,scale:Z=1}={}){const H=[],_e=[],K=[],me=y(x,13,17.2)*Z,Me=y(x,.28,.42)*Z,Ne=x()*Ge,ae=y(x,.02,.09)*me*.32,be=se?4:3,We=[],dt=[];for(let bn=0;bn<=be;bn++){const nn=bn/be;We.push(new A(Math.cos(Ne)*ae*nn*nn,me*nn,Math.sin(Ne)*ae*nn*nn)),dt.push(Zi(Me,.028,Math.pow(nn,.72)))}H.push(gs(We,dt,se?6:5));const kt=se?9:7;for(let bn=0;bn<kt;bn++){const nn=.22+bn/Math.max(1,kt-1)*.74+y(x,-.028,.028),Si=me*nn,Ji=Math.cos(Ne)*ae*nn*nn,bi=Math.sin(Ne)*ae*nn*nn,zs=((1-nn)*2.7+.8)*Z;let vi=se?6:5;x()<.3&&(vi+=1),x()<.18&&(vi-=1);for(let bs=0;bs<vi;bs++){const hs=bs/vi*Ge+bn*.58+y(x,-.2,.2),Gi=zs*y(x,.62,1.05),nr=y(x,-.32,.06),is=new A(Ji,Si,bi),ri=is.clone().add(new A(Math.cos(hs)*Gi*.5,nr*.45+.1,Math.sin(hs)*Gi*.5)),Tn=is.clone().add(new A(Math.cos(hs)*Gi,nr+Gi*.1,Math.sin(hs)*Gi));H.push(gs([is,ri,Tn],[Me*.16,Me*.075,.008],se?4:3));const Kn=se?2:1;for(let Jn=0;Jn<Kn;Jn++){const wi=y(x,.42,.82),qt=is.clone().lerp(Tn,wi),un=hs+(Jn%2===0?1:-1)*y(x,.45,1),Qn=Gi*y(x,.22,.42),fs=qt.clone().add(new A(Math.cos(un)*Qn,y(x,-.12,.1),Math.sin(un)*Qn));H.push(gs([qt,fs],[Me*.055,.006],3)),_e.push({p:fs.clone().add(new A(0,.04,0)),s:y(x,.75,1.15)*Z,rx:y(x,.05,.4),ry:-un+y(x,-.1,.1),rz:y(x,-.18,.18),order:"YXZ"})}const fi=se?3:2;for(let Jn=0;Jn<fi;Jn++){const wi=.38+Jn/fi*.62,qt=is.clone().lerp(Tn,wi);qt.y+=.06+wi*.05,_e.push({p:qt,s:y(x,.85,1.25)*Z*(1.1-wi*.2),rx:y(x,.04,.3),ry:-hs+y(x,-.12,.12),rz:y(x,-.16,.16),order:"YXZ"})}x()<.5&&K.push({p:Tn.clone().add(new A(0,.02,0)),s:y(x,.12,.2)*Z})}}const cn=Math.round((se?52:26)*Z);for(let bn=0;bn<cn;bn++){const nn=y(x,.28,.99),Si=x()*Ge,Ji=me*nn,bi=((1-nn)*2.6+.4)*Z*y(x,.2,.9);_e.push({p:new A(Math.cos(Ne)*ae*nn*nn+Math.cos(Si)*bi,Ji+y(x,-.22,.22),Math.sin(Ne)*ae*nn*nn+Math.sin(Si)*bi),s:y(x,.66,1.05)*Z,rx:y(x,.1,.55),ry:-Si+y(x,-.35,.35),rz:y(x,-.22,.22),order:"YXZ"})}return{geos:H,foliage:_e,snowTips:K,height:me,trunkR:Me}}const Ke=Ht(501);for(const x of Vt.trees)Tt.push({x:x.x,z:x.z,type:x.type,scale:x.scale,fixed:!0});const ze=[{x:-8.9,z:-8.7,type:"oak",scale:1.18},{x:8.1,z:-9.9,type:"birch",scale:1.06},{x:-4.9,z:-14.2,type:"oak",scale:1}];for(const x of ze)Tt.push({...x,fixed:!0});function St(x,se){if(Math.abs(x)<6.7&&se>-7.6&&se<21.5||Math.hypot(x-Vt.well.x,se-Vt.well.z)<4.3)return!0;const Z=qs(x,se);return Z.dist<3.4&&Z.t>-.02&&Z.t<1.02}function At(x,se){for(const Z of Tt)if(Math.hypot(Z.x-x,Z.z-se)<3.5)return!1;return!0}const qe=[{count:14,rMin:14.5,rMax:22.5},{count:13,rMin:23,rMax:34},{count:9,rMin:35,rMax:52}];for(const x of qe){let se=0,Z=0;for(;se<x.count&&Z++<600;){const H=Ke()*Ge,_e=y(Ke,x.rMin,x.rMax),K=Math.cos(H)*_e,me=Math.sin(H)*_e;if(St(K,me)||!At(K,me))continue;const Me=Ke(),Ne=Me<.48?"oak":Me<.82?"birch":"pine";Tt.push({x:K,z:me,type:Ne,scale:y(Ke,.92,1.32)}),se++}}const Bt=[],Dt=[],_n=[],ut=[];for(const x of Tt){const se=Math.hypot(x.x,x.z)<27,Z=si(x.x,x.z)-.12,H=Ke()*Ge,_e=new Mn().compose(new A(x.x,Z,x.z),new ys().setFromAxisAngle(zf,H),new A(1,1,1)),K=Ht(Math.floor((x.x*97+x.z*131+1e3)*7+11)),me=x.type==="pine"?j(K,{near:se,scale:x.scale}):Xt(K,{birch:x.type==="birch",near:se,scale:x.scale,compact:!!x.fixed&&x.z>4,worldMatrix:_e});for(const ae of me.geos){ae.applyMatrix4(_e);const be=x.type==="birch";se?(be?Dt:Bt).push(ae):(be?ut:_n).push(ae)}const Me=new A,Ne=x.type==="pine";for(const ae of me.foliage){if(Me.copy(ae.p).applyMatrix4(_e),lo(Me))continue;let be;Ne?be={pos:Me.clone(),s:ae.s,sx:ae.s*y(K,.88,1.08),sy:ae.s,rx:(ae.rx||0)+y(K,-.06,.06),ry:ae.ry??K()*Ge,rz:(ae.rz||0)+y(K,-.05,.05),order:ae.order,shade:y(K,.75,1.1)}:be={pos:Me.clone(),s:ae.s,sx:ae.s*y(K,.95,1.32),sy:ae.s*y(K,.78,1.02),ry:K()*Ge,rx:y(K,-.32,.32),rz:y(K,-.26,.26),shade:y(K,.78,1.16)},Ne?Oe.push(be):Le.push(be)}if(Ne)for(const ae of me.snowTips||[])Me.copy(ae.p).applyMatrix4(_e),!lo(Me)&&rt.push({pos:Me.clone(),s:ae.s*y(K,.9,1.2),ry:K()*Ge,sy:y(K,.03,.05),shade:y(K,.92,1.04)});else{for(let be=0;be<me.foliage.length;be++){if(be%4===3)continue;const We=me.foliage[be];Me.copy(We.p).applyMatrix4(_e),!lo(Me)&&Ft.push({pos:Me.clone(),s:We.s*y(K,1.05,1.4),ry:K()*Ge,rx:y(K,-.3,.3),rz:y(K,-.25,.25),shade:y(K,.8,1.15)})}if((se?!0:K()<.5)&&K()<.5)for(let be=0;be<me.foliage.length;be++){const We=me.foliage[be];K()<.18||(Me.copy(We.p).applyMatrix4(_e),!lo(Me)&&ct.push({pos:Me.clone(),s:We.s*y(K,.85,1.15),ry:K()*Ge,rx:y(K,-.3,.3),rz:y(K,-.25,.25),shade:y(K,.85,1.12)}))}for(let be=0;be<me.foliage.length;be+=3){if(K()<.25)continue;const We=me.foliage[be];Me.copy(We.p).applyMatrix4(_e),!lo(Me)&&rt.push({pos:Me.clone().add(new A(0,.04,0)),s:We.s*y(K,.1,.17),ry:K()*Ge,sy:y(K,.03,.05),shade:y(K,.92,1.04)})}}if(se){const ae=me.trunkR+.28;Ct.push({minX:x.x-ae,maxX:x.x+ae,minZ:x.z-ae,maxZ:x.z+ae,name:"tree"})}}function fn(x,se,Z={}){if(!x.length)return null;const H=Cs(rl(x),!1);if(!H)return console.warn("nature: merge failed for",Z.name||"mesh"),null;const _e=new Ut(H,se);return _e.castShadow=Z.castShadow??!0,_e.receiveShadow=Z.receiveShadow??!0,_e.name=Z.name||"merged",t.add(_e),_e}const gi=fn(Bt,we,{name:"trunks-near"}),z=fn(Dt,re,{name:"trunks-birch-near"});fn(_n,we,{name:"trunks-far",castShadow:!1}),fn(ut,re,{name:"trunks-birch-far",castShadow:!1});function X(x,se,Z,H={}){const _e=new fl(x,se,Z.length);_e.castShadow=H.castShadow??!1,_e.receiveShadow=H.receiveShadow??!1,_e.frustumCulled=!1,_e.name=H.name||"instanced";const K=new $n;for(let me=0;me<Z.length;me++){const Me=Z[me];K.position.copy(Me.pos),K.rotation.order=Me.order||"XYZ",K.rotation.set(Me.rx||0,Me.ry||0,Me.rz||0);const Ne=Me.s??1;K.scale.set(Me.sx??Ne,Me.sy??Ne,Me.sz??Ne),K.updateMatrix(),_e.setMatrixAt(me,K.matrix)}return _e.instanceMatrix.needsUpdate=!0,t.add(_e),_e}const I=X(J,Ie,Le.filter((x,se)=>se%2===0),{name:"canopy-a"}),O=X(J,yt,Le.filter((x,se)=>se%2===1),{name:"canopy-b"}),N=X(pe,Et,Oe,{name:"pine-needles"}),q=X(J,jt,ct,{name:"blossom"}),he=X(J,W,Ft,{name:"winter-twigs"}),Ue=X(Gf(801),Ae,rt,{name:"branch-snow"}),ot=[],_t=[];let at=null,Ze=null;{const x=Ht(3301),se=[];for(let K=0;K<84;K++){const me=x()*Ge,Me=y(x,42,76),Ne=Math.cos(me)*Me,ae=Math.sin(me)*Me,be=y(x,11,20),We=si(Ne,ae)-.4;se.push({pos:new A(Ne,We+be/2,ae),sx:y(x,.9,1.7),sy:be,sz:y(x,.9,1.7),ry:x()*Ge});const dt=3+Math.floor(x()*2);for(let kt=0;kt<dt;kt++)ot.push({pos:new A(Ne+y(x,-2.4,2.4),We+be*y(x,.64,1.02),ae+y(x,-2.4,2.4)),s:y(x,3.2,6.2),ry:x()*Ge,rx:y(x,-.2,.2),rz:y(x,-.2,.2),shade:y(x,.5,.8)})}for(let K=0;K<104;K++){const me=x()*Ge,Me=y(x,28,44),Ne=Math.cos(me)*Me,ae=Math.sin(me)*Me,be=si(Ne,ae);_t.push({pos:new A(Ne,be+y(x,6.5,19),ae),s:y(x,4.2,7.4),ry:x()*Ge,rx:y(x,-.18,.18),rz:y(x,-.18,.18),shade:y(x,.4,.66)})}const Z=new ei(.34,.62,1,5),H=new sn({color:4602671,roughness:1});X(Z,H,se,{name:"far-trunks"});const _e=[];for(let K=0;K<55;K++){const me=x()*Ge,Me=y(x,26,44),Ne=Math.cos(me)*Me,ae=Math.sin(me)*Me,be=y(x,10,19),We=si(Ne,ae)-.3;_e.push({pos:new A(Ne,We+be/2,ae),sx:y(x,.5,1.1),sy:be,sz:y(x,.5,1.1),ry:x()*Ge})}X(Z,H,_e,{name:"mid-trunks"}),at=X(J,yt,ot,{name:"far-canopy"}),Ze=X(J,yt,_t,{name:"mid-canopy-wall"})}const De=[],ft=[],Nt=[{x:-4.7,z:11.7,rot:.42,len:3.7,r:.27},{x:7.9,z:13.1,rot:-.5,len:2.9,r:.22},{x:-9.5,z:3.3,rot:1.15,len:3.3,r:.3},{x:8.7,z:2.3,rot:2.35,len:2.7,r:.24},{x:-6.9,z:-7.5,rot:.82,len:3.1,r:.26},{x:3.4,z:-9.9,rot:1.9,len:3.5,r:.3},{x:13.6,z:8.2,rot:.2,len:2.5,r:.2}];{const x=Ht(616),se=[],Z=[];for(const H of Nt){const K=si(H.x,H.z)+H.r*.62,me=new A(-H.len/2,0,0),Me=new A(H.len/2,0,0),Ne=new A(0,.03,0),be=gs([me,Ne,Me],[H.r*.92,H.r,H.r*.94],9),We=new Mn().compose(new A(H.x,K,H.z),new ys().setFromAxisAngle(zf,H.rot),new A(1,1,1));be.applyMatrix4(We),se.push(be);for(const cn of[-1,1]){const bn=new ei(H.r*(cn<0?.9:.92),H.r*(cn<0?.9:.92),.03,10);bn.rotateZ(Math.PI/2);const nn=new A(cn*(H.len/2-.005),0,0);nn.applyMatrix4(We),bn.translate(nn.x,nn.y,nn.z),Z.push(bn)}for(let cn=0;cn<4;cn++){const bn=y(x,.2,.85),nn=new A(-H.len/2+H.len*bn,H.r*.8,y(x,-.1,.1));nn.applyMatrix4(We),ft.push({pos:nn,s:y(x,.12,.28)})}for(let cn=0;cn<3;cn++){const bn=.2+cn/3*.62+y(x,-.04,.04),nn=new A(-H.len/2+H.len*bn,H.r*.92,0);nn.applyMatrix4(We),Be.push({pos:nn,s:H.r*y(x,.7,1),sy:y(x,.035,.06),ry:x()*Ge,shade:y(x,.94,1.03)})}const dt=Math.abs(Math.cos(H.rot))*H.len/2+H.r+.15,kt=Math.abs(Math.sin(H.rot))*H.len/2+H.r+.15;De.push({minX:H.x-dt,maxX:H.x+dt,minZ:H.z-kt,maxZ:H.z+kt,name:"fallen-log"})}fn(se,we,{name:"fallen-logs"}),fn(Z,Pe,{name:"log-ends"})}const en=[],kn=[],Xn=[{x:-6.5,z:6.3,s:1},{x:9.4,z:13.8,s:.78},{x:-8.9,z:13.2,s:.66},{x:5.1,z:-6.9,s:.9},{x:-11.6,z:.4,s:.82},{x:13.1,z:4.1,s:.6},{x:7.5,z:16.2,s:.52},{x:-3.2,z:19.8,s:.72},{x:11.8,z:-7.4,s:.84},{x:-13.4,z:9.7,s:.58}],Nn=[];{const x=Ht(727);for(let Z=0;Z<Xn.length;Z++){const H=Xn[Z],_e=si(H.x,H.z),K=Er(700+Z,1),me=H.s*y(x,.8,1.25),Me=H.s*y(x,.5,.78),Ne=H.s*y(x,.8,1.2);K.scale(me,Me,Ne),K.rotateY(x()*Ge);const ae=_e+Me*.16;Lc(K,new ke().setRGB(y(x,.55,.75),y(x,.55,.72),y(x,.5,.66))),K.translate(H.x,ae,H.z),Nn.push(K),en.push({minX:H.x-me*.85,maxX:H.x+me*.85,minZ:H.z-Ne*.85,maxZ:H.z+Ne*.85,name:"rock"}),Be.push({pos:new A(H.x,ae+Me*.78,H.z),s:Math.max(me,Ne)*y(x,.5,.7),sy:y(x,.05,.085),ry:x()*Ge,shade:1}),kn.push({pos:new A(H.x+y(x,-.2,.2),ae+Me*.7,H.z+y(x,-.2,.2)),s:y(x,.14,.3)})}const se=fn(Nn,G,{name:"boulders"});se&&(se.userData.cameraOccluder=!0)}{const x=Ht(811),se=[],Z=[];for(let Me=0;Me<86;Me++){let Ne=0,ae=0,be=0;do{if(Me<30){const kt=x(),cn=fo(kt);Ne=cn.x+(x()<.5?-1:1)*y(x,1,2.4),ae=cn.z+y(x,-1.3,1.3)}else{const kt=x()*Ge,cn=y(x,7,22);Ne=Math.cos(kt)*cn,ae=Math.sin(kt)*cn}be++}while(be<20&&hr(Ne,ae));if(hr(Ne,ae))continue;const We=y(x,.07,.26),dt={pos:new A(Ne,si(Ne,ae)+We*.22,ae),sx:We*y(x,.8,1.4),sy:We*y(x,.5,.8),sz:We*y(x,.8,1.4),ry:x()*Ge,color:new ke().setRGB(y(x,.5,.72),y(x,.5,.7),y(x,.45,.64))};x()<.5?se.push(dt):Z.push(dt)}const H=Er(801,0),_e=Er(907,1),K=X(H,ie,se,{name:"rocks-a",castShadow:!0}),me=X(_e,Q,Z,{name:"rocks-b",castShadow:!0});for(let Me=0;Me<se.length;Me++)K.setColorAt(Me,se[Me].color);for(let Me=0;Me<Z.length;Me++)me.setColorAt(Me,Z[Me].color);K.instanceColor&&(K.instanceColor.needsUpdate=!0),me.instanceColor&&(me.instanceColor.needsUpdate=!0),kn.push(...se.slice(0,6).map(Me=>({pos:Me.pos,s:Me.sx*1.3})))}{const x=Ht(844),se=[];for(let H=0;H<64;H++){const _e=x()*Ge,K=y(x,4.5,20),me=Math.cos(_e)*K,Me=Math.sin(_e)*K;if(Math.abs(me)<4.6&&Me>-3.6&&Me<5.4)continue;const Ne=y(x,.5,1.6);se.push({x:me,z:Me,len:Ne,rot:x()*Ge,tilt:y(x,-.25,.25),s:y(x,.1,.22)})}const Z=[];for(const H of se){const _e=new ei(H.s*.32,H.s*.55,H.len,4);_e.rotateZ(Math.PI/2),_e.rotateX(H.tilt),_e.rotateY(H.rot),_e.translate(H.x,si(H.x,H.z)+H.s*.4,H.z),Z.push(_e)}fn(Z,ye,{name:"floor-twigs"})}let An=null,Yn=null;{const x=Ht(933),se=[],Z=[],H=[{x:-5.4,z:12.4},{x:7.1,z:3.1},{x:-9,z:-6},{x:4.9,z:-8.6},{x:10.9,z:10.9}];for(const Ne of H){const ae=5+Math.floor(x()*4);for(let be=0;be<ae;be++){const We=x()*Ge,dt=y(x,.15,1),kt=Ne.x+Math.cos(We)*dt,cn=Ne.z+Math.sin(We)*dt,bn=si(kt,cn),nn=y(x,.5,1.1);Z.push({pos:new A(kt,bn+.075*nn,cn),s:nn,ry:x()*Ge}),se.push({pos:new A(kt,bn+.16*nn,cn),s:nn,ry:x()*Ge,color:new ke(x()>.5?"#a9563a":"#c9a878")})}}const _e=new ei(.022,.035,.15,6);_e.translate(0,.075,0);const K=new mi(.075,8,5,0,Ge,0,Math.PI*.5);K.scale(1,.62,1),K.translate(0,.15,0);const me=X(_e,new sn({color:14207403,roughness:.9}),Z,{name:"mushroom-stems"}),Me=X(K,new sn({color:11694154,roughness:.85}),se,{name:"mushroom-caps"});An=me,Yn=Me;for(let Ne=0;Ne<se.length;Ne++)Me.setColorAt(Ne,se[Ne].color);Me.instanceColor&&(Me.instanceColor.needsUpdate=!0),me.castShadow=!1,Me.castShadow=!1}const w=new Jt;w.name="old-well",w.position.set(Vt.well.x,0,Vt.well.z),t.add(w);const Y=[],ge=[];let fe=null;{const x=Ht(1201),Z=Vt.well.height,H=new ei(.9,.99,Z,22,1,!0);H.translate(0,Z/2-.02,0);const _e=new ei(.7,.75,Z,22,1,!0);_e.translate(0,Z/2-.02,0);const K=Cs(rl([H,_e]),!1),me=new Ut(K,ie);me.castShadow=!0,me.receiveShadow=!0,w.add(me),Y.push(me);const Me=new sh(.69,.995,24);Me.rotateX(-Math.PI/2),Me.translate(0,Z-.025,0);const Ne=new Ut(Me,ie);Ne.receiveShadow=!0,w.add(Ne),Y.push(Ne);const ae=[],be=[{y:.18,count:16,rad:.975,size:.3},{y:.52,count:15,rad:.965,size:.31},{y:.84,count:15,rad:.95,size:.3}];for(const qt of be)for(let un=0;un<qt.count;un++){const Qn=un/qt.count*Ge+y(x,-.06,.06),fs=Er(1300+un*7+Math.floor(qt.y*100),0),vr=qt.size*y(x,.8,1.15),ir=.2*y(x,.85,1.2),Ma=.16*y(x,.8,1.2);fs.scale(vr,ir,Ma),fs.rotateY(-Qn+y(x,-.14,.14)),fs.translate(Math.cos(Qn)*qt.rad,qt.y,Math.sin(Qn)*qt.rad),ae.push(fs)}const We=new Ut(Cs(rl(ae),!1),ie);We.castShadow=!0,We.receiveShadow=!0,w.add(We),Y.push(We);const dt=[],kt=12;for(let qt=0;qt<kt;qt++){const un=qt/kt*Ge,Qn=new Zn(y(x,.34,.48),y(x,.08,.12),y(x,.24,.34));Qn.rotateY(un+y(x,-.1,.1)),Qn.translate(Math.cos(un)*.86,Z+.03,Math.sin(un)*.86),dt.push(Qn),qt%3!==2&&Be.push({pos:new A(Vt.well.x+Math.cos(un)*.86,Z+.09,Vt.well.z+Math.sin(un)*.86),s:.13,sy:.04,ry:x()*Ge,shade:1})}const cn=new Ut(Cs(dt,!1),ie);cn.castShadow=!0,cn.receiveShadow=!0,w.add(cn),Y.push(cn);const bn=new Ut(new Ir(.68,26),xe);bn.rotation.x=-Math.PI/2,bn.position.y=Z-.42,w.add(bn);const nn=[];for(const qt of[-1,1]){const un=new Zn(.13,2.42,.13);un.translate(qt*.83,1.16,0),nn.push(un);const Qn=new Zn(.09,.5,.09);Qn.rotateZ(qt*.6),Qn.translate(qt*.66,2.02,0),nn.push(Qn)}const Si=new Zn(1.98,.14,.15);Si.translate(0,2.32,0),nn.push(Si);const Ji=new ei(.055,.055,1.7,8);Ji.rotateZ(Math.PI/2),Ji.translate(0,2.14,0),nn.push(Ji);for(const qt of[-1,1]){const un=new Zn(2.42,.07,.12);un.rotateX(qt*.52),un.translate(0,2.78+0,qt*.32),nn.push(un)}const bi=new Ut(Cs(nn,!1),ye);bi.castShadow=!0,bi.receiveShadow=!0,w.add(bi),Y.push(bi);const zs=2.6,vi=.56,bs=.92,hs=Math.atan2(vi,bs),Gi=[];for(const qt of[-1,1]){const un=new Zn(2.5,.07,Math.hypot(bs,vi)+.14);un.rotateX(qt*hs),un.translate(0,zs+vi-vi*.5+.02,qt*bs*.5),Gi.push(un)}const nr=new Zn(2.6,.09,.18);nr.translate(0,zs+vi+.05,0),Gi.push(nr);const is=new Ut(Cs(Gi,!1),Te);is.castShadow=!0,is.receiveShadow=!0,w.add(is),Y.push(is);for(let qt=0;qt<2;qt++){const un=-.55+qt*.95;for(const Qn of[-1,1])Be.push({pos:new A(Vt.well.x+un,zs+vi*.5+.09,Vt.well.z+Qn*bs*.5+.02),s:.16,sy:.04,ry:x()*Ge,shade:1})}fe=new Jt,fe.position.set(0,2.3,0),w.add(fe);const ri=new Ut(new ei(.012,.014,.83,5),B);ri.position.y=-.415,fe.add(ri);const Tn=new Jt;Tn.position.y=-.86;const Kn=new Ut(new ei(.17,.13,.26,12,1,!0),Pe);Kn.castShadow=!0,Tn.add(Kn);const fi=new Ut(new ei(.13,.13,.03,12),ye);fi.position.y=-.13,Tn.add(fi);for(const qt of[-.08,.08]){const un=new Ut(new ci(qt>0?.163:.14,.01,4,14),new sn({color:4866104,roughness:.6,metalness:.5}));un.rotation.x=Math.PI/2,un.position.y=qt,Tn.add(un)}const Jn=new Ut(new ci(.15,.009,4,12,Math.PI),B);Jn.rotation.z=0,Jn.position.y=.13,Tn.add(Jn),fe.add(Tn),Y.push(Kn);const wi=[];for(let qt=0;qt<12;qt++){const un=qt/12*Ge+x()*.4;wi.push({pos:new A(Vt.well.x+Math.cos(un)*.9,Z+.04,Vt.well.z+Math.sin(un)*.9),s:y(x,.08,.17)})}for(let qt=0;qt<10;qt++){const un=x()*Ge;wi.push({pos:new A(Vt.well.x+Math.cos(un)*y(x,.95,1.15),.03,Vt.well.z+Math.sin(un)*y(x,.95,1.15)),s:y(x,.1,.22)})}kn.push(...wi);for(let qt=0;qt<5;qt++){const un=x()*Ge;ge.push({x:Math.cos(un)*y(x,1.2,1.7),z:Math.sin(un)*y(x,1.2,1.7),s:y(x,.6,1),ry:x()*Ge})}for(const qt of Y)qt.userData.interactId="well-note"}const te=[],gt=[];{const x=Ht(1501);for(const Z of ge){const H=Vt.well.x+Z.x,_e=Vt.well.z+Z.z;te.push({pos:new A(H,si(H,_e)+.02,_e),s:Z.s,ry:Z.ry,shade:y(x,.85,1.1)})}let se=0;for(;te.length<290&&se++<3200;){const Z=x()*Ge,H=Math.sqrt(x())*26,_e=Math.cos(Z)*H,K=Math.sin(Z)*H;hr(_e,K)||Math.hypot(_e-Vt.well.x,K-Vt.well.z)<1.25||qs(_e,K).dist<1.85||H>16&&x()>.55||H<12&&x()<.45||te.push({pos:new A(_e,si(_e,K)+.02,K),s:y(x,.55,1.2)*(H<12?.72:1),ry:x()*Ge,shade:y(x,.7,1.2)})}for(se=0;gt.length<300&&se++<6e3;){let Z,H,_e=!1;if(x()<.4){const me=x(),Me=fo(me),Ne=x()<.5?-1:1;Z=Me.x+Ne*y(x,2.25,3.6),H=Me.z+y(x,-.9,.9),_e=!0}else{const me=x()*Ge,Me=Math.sqrt(x())*24;Z=Math.cos(me)*Me,H=Math.sin(me)*Me}if(hr(Z,H)||Math.hypot(Z-Vt.well.x,H-Vt.well.z)<1.2||qs(Z,H).dist<2.2)continue;const K=Math.hypot(Z,H);K<12&&x()<.55||gt.push({pos:new A(Z,si(Z,H)+.01,H),s:_e?y(x,.1,.19):y(x,.13,.3)*(K<12?.72:1),ry:x()*Ge,shade:y(x,.7,1.25)})}}const ht=X(Re,lt,te,{name:"ferns",receiveShadow:!0}),it=X(et,Se,gt,{name:"grass",receiveShadow:!0});for(let x=0;x<te.length;x++)ht.setColorAt(x,r.setRGB(.9,.95,.85).multiplyScalar(te[x].shade));for(let x=0;x<gt.length;x++)it.setColorAt(x,r.setRGB(.9,.95,.8).multiplyScalar(gt[x].shade));ht.instanceColor&&(ht.instanceColor.needsUpdate=!0),it.instanceColor&&(it.instanceColor.needsUpdate=!0);const xt=[];{const x=Ht(1611);for(let se=0;se<760;se++){let Z,H;if(x()<.42){const K=x(),me=fo(K);Z=me.x+y(x,-1.25,1.25),H=me.z+y(x,-.7,.7)}else{const K=x()*Ge,me=Math.sqrt(x())*20;Z=Math.cos(K)*me,H=Math.sin(K)*me}if(Math.abs(Z)<4.2&&H>-3.4&&H<5.2||Math.abs(Z-Vt.well.x)<1.2&&Math.abs(H-Vt.well.z)<1.2)continue;const _e=y(x,.05,.13);xt.push({pos:new A(Z,si(Z,H)+.018+x()*.012,H),sx:_e*y(x,.8,1.3),sz:_e*y(x,.8,1.3),sy:1,ry:x()*Ge,rx:-Math.PI/2+y(x,-.22,.22),rz:y(x,-.2,.2),shade:y(x,.7,1.15)})}}const Rt=X(Qe,$,xt,{name:"leaf-litter"}),$t=[];{const x=Ht(1663);for(let se=0;se<300;se++){let Z,H;if(x()<.5){const _e=x(),K=fo(_e);Z=K.x+y(x,-2.6,2.6),H=K.z+y(x,-1.5,1.5)}else{const _e=x()*Ge,K=Math.sqrt(x())*19;Z=Math.cos(_e)*K,H=Math.sin(_e)*K}Math.abs(Z)<4.2&&H>-3.4&&H<5.2||qs(Z,H).dist<1.2||$t.push({pos:new A(Z,si(Z,H)+.026,H),s:y(x,.3,.65),ry:x()*Ge,rx:-Math.PI/2,rz:0,shade:y(x,.65,1.12)})}}const It=new sn({map:v,alphaTest:.38,side:Bn,roughness:.95,metalness:0}),bt=X(Qe,It,$t,{name:"leaf-litter-drifts"}),Pt=[];let ln=null;{const x=Ht(1801);for(let Z=0;Z<100;Z++){const H=x()*Ge,_e=y(x,7.5,20),K=Math.cos(H)*_e,me=Math.sin(H)*_e;if(hr(K,me)||qs(K,me).dist<1.9||Math.hypot(K-Vt.well.x,me-Vt.well.z)<2.8||Math.hypot(K,me-17.2)<5.5)continue;const Me=si(K,me),Ne=4+Math.floor(x()*3);for(let ae=0;ae<Ne;ae++)Pt.push({pos:new A(K+y(x,-.7,.7),Me+y(x,.3,1.05),me+y(x,-.7,.7)),s:y(x,.14,.28),ry:x()*Ge,rx:y(x,-.3,.3),rz:y(x,-.25,.25),shade:y(x,.72,1.08)})}const se=[];for(let Z=0;Z<18;Z++){const H=x()*Ge,_e=y(x,8,18),K=Math.cos(H)*_e,me=Math.sin(H)*_e;if(hr(K,me)||qs(K,me).dist<2||Math.hypot(K-Vt.well.x,me-Vt.well.z)<1.8)continue;const Me=si(K,me)-.05,Ne=y(x,2.2,4.4),ae=y(x,-.2,.2),be=[new A(0,0,0),new A(ae*.4,Ne*.55,ae*.2),new A(ae,Ne,ae*.5)],We=gs(be,[.06,.035,.012],4);We.translate(K,Me,me),se.push(We);for(let dt=0;dt<3;dt++)Pt.push({pos:new A(K+ae+y(x,-.5,.5),Me+Ne*y(x,.62,1),me+ae*.5+y(x,-.5,.5)),s:y(x,.14,.27),ry:x()*Ge,rx:y(x,-.3,.3),rz:y(x,-.25,.25),shade:y(x,.72,1.08)})}se.length&&fn(se,we,{name:"saplings",castShadow:!1}),ln=X(J,Ie,Pt,{name:"understory-bushes"})}const Yt=Er(1777,0);Yt.scale(1,.42,1);const Wt=[];{const x=Ht(1717);for(const se of kn)Wt.push(se);for(const se of ft)Wt.push(se);for(let se=0;se<40;se++){const Z=x()*Ge,H=y(x,6,18),_e=Math.cos(Z)*H,K=Math.sin(Z)*H;Wt.push({pos:new A(_e,si(_e,K)+.02,K),s:y(x,.08,.2)})}}const Dn=Wt.filter(x=>!hr(x.pos.x,x.pos.z)).map(x=>({pos:x.pos,s:x.s??.15,ry:x.ry??0,rx:0,rz:0,sy:.5})),wt=X(Yt,Ee,Dn,{name:"moss"});for(let x=0;x<Dn.length;x++){const se=.7+x*37%10*.035;wt.setColorAt(x,r.setRGB(se*.95,se,se*.7))}wt.instanceColor&&(wt.instanceColor.needsUpdate=!0);{const x=Ht(1999);for(let se=0;se<R.length;se++){if(se%2===1)continue;const Z=R[se];Be.push({pos:new A(Z.x,Z.topY-.004,Z.z),s:Z.r*y(x,.38,.6),sy:y(x,.032,.055),ry:x()*Ge,shade:y(x,.96,1.02)})}}for(let x=Be.length-1;x>=0;x--)hr(Be[x].pos.x,Be[x].pos.z)&&Be.splice(x,1);const Ln=X(Gf(1888),Ae,Be,{name:"ground-snow-caps",receiveShadow:!0});for(let x=0;x<Be.length;x++){const se=Be[x].shade??1;Ln.setColorAt(x,r.setRGB(.95*se,.98*se,1*se))}Ln.instanceColor&&(Ln.instanceColor.needsUpdate=!0),Ln.visible=!1;const mn=[];{const x=Ht(2001),se=[[.9,9.4,1.1,.6],[-1.25,12.7,.9,.5],[2.5,15.1,.7,.4],[-2.3,7.2,1,.55],[5.3,11.6,1.3,.7],[-4.4,8.6,.85,.5],[-5.6,13.6,1.1,.6],[8,12.9,.9,.5],[5.5,8.9,.75,.45],[-1.6,17.2,.8,.45]];for(const[Z,H,_e,K]of se){const me=new Ir(1,18),Me=me.attributes.position;for(let ae=0;ae<Me.count;ae++){const be=Me.getX(ae),We=Me.getY(ae),dt=Math.atan2(We,be),kt=1+Math.sin(dt*3+x()*2)*.12+Math.sin(dt*5.3)*.07;Me.setX(ae,be*kt),Me.setY(ae,We*kt)}const Ne=new Ut(me,Ye);Ne.rotation.x=-Math.PI/2,Ne.scale.set(_e,K,1),Ne.position.set(Z,.014,H),Ne.renderOrder=1,Ne.visible=!1,t.add(Ne),mn.push(Ne)}Ye.opacity=0}const qn=new Jt;qn.name="ambient-life",t.add(qn);const mt=new Jt;mt.visible=!1,qn.add(mt);const Qt=(()=>{const x=[];x.push(.42,0,0,.02,.02,0,.06,0,-.34,.06,0,.34,.02,.02,0,-.3,0,0,-.28,0,-.1,-.3,0,0,-.28,0,.1);const se=new Pn;return se.setAttribute("position",new an(x,3)),se.computeVertexNormals(),se})(),wn=new ns({color:2827292,side:Bn,transparent:!0,opacity:.9,fog:!0}),Zt={uTime:{value:0}};wn.onBeforeCompile=x=>{x.uniforms.uTime=Zt.uTime,x.vertexShader=`uniform float uTime;
`+x.vertexShader,x.vertexShader=x.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      float flap = sin(uTime * 7.5 + float(gl_InstanceID) * 1.7) * 0.55;
      transformed.y += abs(transformed.z) * flap;`)},wn.customProgramCacheKey=()=>"nature-bird";const dn=[];{const x=Ht(2301);for(let Z=0;Z<13;Z++)dn.push({pos:new A(y(x,-7,7),y(x,-1.5,1.5),y(x,-5,5)),s:y(x,.9,1.5),ry:Math.PI/2+y(x,-.4,.4),rx:y(x,-.2,.2),rz:y(x,-.2,.2)});const se=new fl(Qt,wn,dn.length);se.name="bird-flock";for(let Z=0;Z<dn.length;Z++){const H=dn[Z];s.position.copy(H.pos),s.rotation.set(H.rx,H.ry,H.rz),s.scale.setScalar(H.s),s.updateMatrix(),se.setMatrixAt(Z,s.matrix)}se.instanceMatrix.needsUpdate=!0,se.frustumCulled=!1,mt.add(se)}const Un=new Jt;let $e=0;{const x=new Ut(new mi(.09,10,8),ee);x.scale.set(1.5,.9,.95),Un.add(x);const se=new Ut(new mi(.062,10,8),ee);se.position.set(.1,.085,0),Un.add(se);const Z=new Ut(new Po(.022,.08,6),new sn({color:11569738,roughness:.8}));Z.rotation.z=-Math.PI/2,Z.position.set(.17,.08,0),Un.add(Z);const H=new Ut(new Po(.045,.16,5),ee);H.rotation.z=Math.PI/2-.25,H.position.set(-.15,0,0),Un.add(H);for(const Ne of[-1,1]){const ae=new Ut(new ei(.007,.007,.09,4),new sn({color:7034424,roughness:.8}));ae.position.set(.01,-.03,Ne*.03),Un.add(ae)}const _e=Nt[0],K=si(_e.x,_e.z)+_e.r*1.62,me=_e.rot,Me=.9;Un.position.set(_e.x+Math.cos(me)*Me,K+.06,_e.z-Math.sin(me)*Me),Un.rotation.y=-me+Math.PI/2+.5,$e=Un.position.y,Un.traverse(Ne=>{Ne.isMesh&&(Ne.castShadow=!0)}),qn.add(Un)}const yi=[];{const x=Ht(2401);for(let se=0;se<2;se++){const Z=se===0?45:32,H=new Float32Array(Z*3),_e=[];for(let Ne=0;Ne<Z;Ne++){let ae=0,be=0,We=0;do{const kt=x()*Ge,cn=y(x,3.5,17);ae=Math.cos(kt)*cn,be=Math.sin(kt)*cn,We++}while(We<10&&Math.hypot(ae,be)<3.2);const dt=y(x,.4,2.6);H[Ne*3]=ae,H[Ne*3+1]=dt,H[Ne*3+2]=be,_e.push({baseX:ae,baseY:dt,baseZ:be,phase:x()*Ge,speed:y(x,.3,.8),amp:y(x,.3,1.1)})}const K=new Pn;K.setAttribute("position",new Wn(H,3)),K.attributes.position.setUsage(vh);const me=new Lr({color:16770216,size:.3,map:C,transparent:!0,opacity:0,depthWrite:!1,blending:Pi,sizeAttenuation:!0,fog:!0}),Me=new wo(K,me);Me.frustumCulled=!1,Me.visible=!1,qn.add(Me),yi.push({points:Me,mat:me,geo:K,seeds:_e,positions:H,count:Z,phase:se*2.1})}}function Di(x,se,Z){const H=new ii(.09,.07),_e=new sn({map:x,alphaTest:.3,side:Bn,roughness:.85,metalness:0,transparent:!1}),K=new fl(H,_e,se);K.instanceMatrix.setUsage(vh),K.frustumCulled=!1,K.visible=!1,K.name="falling";const me=Ht(2601+se),Me=[];for(let Ne=0;Ne<se;Ne++){const ae=me()*Ge,be=y(me,4,15.5);Me.push({x:Math.cos(ae)*be,y:y(me,3,11),z:Math.sin(ae)*be,vy:y(me,.28,.65),sway:y(me,.4,1.6),phase:me()*Ge,spin:y(me,-1.8,1.8),rx:me()*Ge,ry:me()*Ge,rz:me()*Ge}),K.setColorAt(Ne,Z(me))}return K.instanceColor&&(K.instanceColor.needsUpdate=!0),qn.add(K),{mesh:K,mat:_e,parts:Me,count:se,rng:me}}const ki=Di(E,70,x=>new ke().setRGB(y(x,.92,1),y(x,.75,.9),y(x,.8,.92))),er=Di(T,70,x=>{const se=["#b2703a","#c08a4c","#96522e","#caa464","#8a5a34"];return new ke(Ci(x,se))});{const x=Ht(2666),se=["#b2703a","#c08a4c","#96522e","#caa464","#8a5a34"];for(let Z=0;Z<er.count;Z++)er.mesh.setColorAt(Z,r.set(Ci(x,se)));er.mesh.instanceColor&&(er.mesh.instanceColor.needsUpdate=!0)}const Wl={id:"well-note",eyebrow:"古井 · THE OLD WELL",title:"井底的一小片天",body:["石壁沁着凉意，青苔沿着砖缝一点点爬。井绳被岁月磨得发亮，木桶里晃着半桶旧年的雨水。","老人们说，把想说的话轻轻说给井听，回声会替你把它藏进冬天。此刻井水很静，静得能照见树梢最后一片红叶。"],footer:"风停了，井绳轻轻碰着石沿。"},_a={id:"well-note",label:"古井",anchor:new A(Vt.well.x,1.15,Vt.well.z),radius:3.1,objects:Y,getPrompt:()=>({key:"E",action:"望向古井"}),available:()=>!0,action:()=>{typeof e?.showPanel=="function"&&e.showPanel(Wl)}},xa=[{minX:Vt.well.x-1.18,maxX:Vt.well.x+1.18,minZ:Vt.well.z-1.18,maxZ:Vt.well.z+1.18,name:"well"},...Ct,...De,...en],tr=[gi,z].filter(Boolean),Cn={season:"autumn",weather:"clear",hour:17.2,isNight:!1,overcast:0,wet:0,snow:!1,snowOpacity:0,puddleOpacity:0,fireflyOpacity:0,wind:1};let Ni=0;const Vr={spring:{groundColor:[1.48,1.56,1.26],stoneColor:[1.4,1.38,1.26],pathColor:[1.36,1.3,1.14],fernTint:"#b6d27f",grassTint:"#b9cd91",moss:"#5c6d3d"},summer:{groundColor:[1.44,1.52,1.2],stoneColor:[1.36,1.34,1.22],pathColor:[1.32,1.26,1.1],fernTint:"#8fb45e",grassTint:"#9db57a",moss:"#4e6034"},autumn:{groundColor:[1.82,1.62,1.26],stoneColor:[1.58,1.52,1.38],pathColor:[1.62,1.5,1.26],fernTint:"#c99153",grassTint:"#a89060",moss:"#5f6a38"},winter:{groundColor:[1.3,1.36,1.44],stoneColor:[1.36,1.4,1.44],pathColor:[1.24,1.28,1.3],fernTint:"#8b7f66",grassTint:"#a89878",moss:"#5a5f46"}},L=[];for(const x of["spring","summer","autumn","winter"])L[x]=Rc[x].leaf.map(se=>new ke(se));const ne={spring:["#55713e","#5f7c46","#496333"],summer:["#2f4a28","#37512f","#273f21"],autumn:["#37482e","#3e4f33","#2f4026"],winter:["#3a453c","#414d43","#313c33"]},de=["#fdeeee","#f9e0e5","#fdf5ec","#f6d7dd","#ffffff"];function le(x){const se=x==="winter",Z=L[x];let H=0,_e=0;for(let be=0;be<Le.length;be++){const We=Le[be],dt=Z[be%Z.length].clone();dt.multiplyScalar(We.shade),x==="spring"&&dt.multiplyScalar(.88),be%2===0?(I.setColorAt(H,dt),H++):(O.setColorAt(_e,dt),_e++)}I.visible=!se,O.visible=!se,I.instanceColor&&(I.instanceColor.needsUpdate=!0),O.instanceColor&&(O.instanceColor.needsUpdate=!0);const K=ne[x]||ne.autumn;for(let be=0;be<Oe.length;be++){const We=new ke(K[be%K.length]);We.multiplyScalar(Oe[be].shade*(se?.9:1)),N.setColorAt(be,We)}N.instanceColor&&(N.instanceColor.needsUpdate=!0);const me=x==="spring";q.visible=me;for(let be=0;be<ct.length;be++){const We=new ke(de[be%de.length]).multiplyScalar(ct[be].shade);q.setColorAt(be,We)}q.instanceColor&&(q.instanceColor.needsUpdate=!0),he.visible=se;for(let be=0;be<Ft.length;be++){const We=.72+be%5*.05;he.setColorAt(be,r.setRGB(.5*We,.42*We,.34*We))}he.instanceColor&&(he.instanceColor.needsUpdate=!0),Ue.visible=se;for(let be=0;be<rt.length;be++){const We=rt[be].shade??1;Ue.setColorAt(be,r.setRGB(.93*We,.96*We,1*We))}Ue.instanceColor&&(Ue.instanceColor.needsUpdate=!0);const Me=new ke(Vr[x].fernTint);if(wt.visible=!se,An&&(An.visible=!se),Yn&&(Yn.visible=!se),se)ht.visible=!1,it.visible=!1;else{ht.visible=!0,it.visible=!0;const be=new ke(x==="autumn"?"#8d8a4e":x==="spring"?"#a8c471":"#7d9a5c");for(let kt=0;kt<te.length;kt++){const cn=kt%3===0?be:Me;ht.setColorAt(kt,cn.clone().multiplyScalar(te[kt].shade))}const We=new ke(Vr[x].grassTint),dt=new ke(x==="autumn"?"#7f8550":x==="spring"?"#9fbf6f":"#7f9a5c");for(let kt=0;kt<gt.length;kt++){const cn=kt%4===0?dt:We;it.setColorAt(kt,cn.clone().multiplyScalar(gt[kt].shade))}ht.instanceColor&&(ht.instanceColor.needsUpdate=!0),it.instanceColor&&(it.instanceColor.needsUpdate=!0)}if(ln){ln.visible=!se;for(let be=0;be<Pt.length;be++){const We=Z[(be+1)%Z.length].clone().multiplyScalar(Pt[be].shade*.8);ln.setColorAt(be,We)}ln.instanceColor&&(ln.instanceColor.needsUpdate=!0)}const Ne=Rc[x].leafFall;Rt.visible=!se,bt.visible=!se;for(let be=0;be<xt.length;be++){const We=new ke(Ne[be%Ne.length]).multiplyScalar(xt[be].shade);Rt.setColorAt(be,We)}for(let be=0;be<$t.length;be++){const We=new ke(Ne[(be+2)%Ne.length]).multiplyScalar($t[be].shade*.92);bt.setColorAt(be,We)}if(Rt.instanceColor&&(Rt.instanceColor.needsUpdate=!0),bt.instanceColor&&(bt.instanceColor.needsUpdate=!0),ki.mesh.visible=me,er.mesh.visible=x==="autumn",at){const be=se?["#5b4c3e","#655647","#4f4336"]:x==="autumn"?["#8a5a30","#9a6a34","#71492a","#a3763c"]:x==="spring"?["#6d8a52","#7d9a5e","#5f7c49"]:["#435c3c","#4d6644","#3a5234"];for(let We=0;We<ot.length;We++)at.setColorAt(We,new ke(be[We%be.length]).multiplyScalar(ot[We].shade));at.instanceColor&&(at.instanceColor.needsUpdate=!0)}if(Ze){const be=se?["#4e4136","#57493c","#443a2f"]:x==="autumn"?["#6f4526","#7d512b","#5d3a21","#8a5e30"]:x==="spring"?["#5a7444","#68854e","#4c6439"]:["#36492f","#3e5237","#2f4128"];for(let We=0;We<_t.length;We++)Ze.setColorAt(We,new ke(be[We%be.length]).multiplyScalar(_t[We].shade));Ze.instanceColor&&(Ze.instanceColor.needsUpdate=!0)}const ae=Vr[x];k.color.setRGB(ae.groundColor[0],ae.groundColor[1],ae.groundColor[2]),ie.color.setRGB(ae.stoneColor[0],ae.stoneColor[1],ae.stoneColor[2]),G.color.setRGB(ae.stoneColor[0],ae.stoneColor[1],ae.stoneColor[2]),Q.color.setRGB(ae.stoneColor[0],ae.stoneColor[1],ae.stoneColor[2]),V.color.setRGB(ae.pathColor[0],ae.pathColor[1],ae.pathColor[2]),Ee.color.set(ae.moss)}function oe(x){const se=x.season,Z=x.weather,H=se==="spring"||Z==="rain"||Z==="storm",_e=se==="winter"||Z==="snow";if(Cn.wet=H?1:0,Cn.snow=_e,Cn.wind=Z==="storm"?1.9:Z==="rain"?1.35:Z==="fog"?.55:1,H){k.color.multiplyScalar(.7),k.roughness=.5,k.envMapIntensity=.65,k.metalness=.06,ie.color.multiplyScalar(.7),G.color.multiplyScalar(.7),Q.color.multiplyScalar(.7);for(const ae of[ie,G,Q])ae.roughness=.3,ae.envMapIntensity=.85,ae.metalness=.06;V.color.multiplyScalar(.7),V.roughness=.42,V.envMapIntensity=.7;for(const ae of[ie,G,Q,V])ae.needsUpdate=!0}else{k.roughness=.96,k.envMapIntensity=0,k.metalness=0;for(const ae of[ie,G,Q])ae.roughness=se==="winter"?.9:.92,ae.envMapIntensity=.08,ae.metalness=0;V.roughness=.94,V.envMapIntensity=0}Ln.visible=_e,Xe.visible=_e,Cn.snowOpacity=_e?1:0,Cn.puddleOpacity=H?Z==="rain"||Z==="storm"?1:.68:0;for(const ae of mn)ae.visible=H;const K=x.isNight,me=x.overcast??0,Me=Z==="clear"&&!K&&me<.45;mt.visible=Me,Un.visible=Me;const Ne=se==="summer"&&K&&(Z==="clear"||Z==="snow")&&me<.4;for(const ae of yi)ae.points.visible=Ne;Cn.fireflies=Ne?1:0}function Ce(x){Cn.season=x.season||"autumn",Cn.weather=x.weather||"clear",Cn.hour=x.hour??17.2,Cn.isNight=x.isNight??Bf(Cn.hour),Cn.overcast=x.overcast??0,Cn.sky=ve({season:Cn.season,weather:Cn.weather,hour:Cn.hour,overcast:Cn.overcast}),le(Cn.season),oe(Cn),Ye.envMap=ue,Ye.needsUpdate=!0,xe.envMap=ue,xe.needsUpdate=!0,xe.color.set(Cn.isNight?"#101619":"#1d2726")}const Fe=new A;let nt=0;const Mt=new A;function Kt(x,se){const Z=se.rng,H=Fe;for(let _e=0;_e<6;_e++){const K=Z()*Ge,me=y(Z,3.2,19);if(x.x=Math.cos(K)*me,x.z=Math.sin(K)*me,Math.hypot(x.x-H.x,x.z-H.z)>4.2)break}x.y=y(Z,5,11),x.vy=y(Z,.28,.65),x.sway=y(Z,.4,1.6),x.phase=Z()*Ge,x.spin=y(Z,-1.8,1.8)}function tn(x,se,Z={}){const H=Math.min(Number(x)||.016,.1);Ni+=H,n.uTime.value=Ni;const _e=Cn.wind??1;if(n.uWind.value+=(_e-n.uWind.value)*Math.min(1,H*1.8),Z.camera&&Fe.copy(Z.camera.position),se){const ae=Math.abs((se.hour??Cn.hour)-Cn.hour)>.34;(se.season!==Cn.season||se.weather!==Cn.weather||ae||se.isNight!==void 0&&se.isNight!==Cn.isNight)&&Ce({...Cn,...se})}const K=Cn.snow?1:0;Cn.snowOpacity+=(K-Cn.snowOpacity)*Math.min(1,H*3.5),Xe.visible?Xe.material.opacity=Cn.snowOpacity:Cn.snowOpacity=0;const me=Cn.puddleOpacity,Me=Ye.opacity,Ne=Me+(me-Me)*Math.min(1,H*3.2);Ye.opacity=Ne;for(const ae of yi){if(!ae.points.visible){ae.mat.opacity=Math.max(0,ae.mat.opacity-H*2),ae.mat.opacity<=.01&&(ae.points.visible=!1);continue}ae.mat.opacity=Math.min(1,ae.mat.opacity+H*1.5);const be=ae.positions;for(let We=0;We<ae.count;We++){const dt=ae.seeds[We],kt=Ni*dt.speed+dt.phase;be[We*3]=dt.baseX+Math.sin(kt*.8)*dt.amp+Math.sin(kt*2.1+We)*.18,be[We*3+1]=dt.baseY+Math.sin(kt*1.2+We*.7)*.22,be[We*3+2]=dt.baseZ+Math.cos(kt*.63)*dt.amp+Math.cos(kt*1.7+We)*.18}ae.geo.attributes.position.needsUpdate=!0,ae.mat.opacity*=.985+.015*(.55+.45*Math.sin(Ni*1.7+ae.phase))}if(mt.visible){nt+=H;const ae=150,be=nt%ae/ae;Mt.set(Zi(-64,64,be),24+Math.sin(be*Math.PI*2)*3,-26-10*Math.sin(be*Math.PI)),mt.position.copy(Mt),mt.rotation.y=Math.sin(be*Math.PI*2)*.12,Zt.uTime.value=Ni}for(const ae of[ki,er]){if(!ae.mesh.visible)continue;const be=ae.parts;for(let We=0;We<ae.count;We++){const dt=be[We];dt.y-=dt.vy*H,dt.x+=Math.sin(Ni*dt.sway+dt.phase)*.22*H,dt.z+=Math.cos(Ni*dt.sway*.8+dt.phase)*.18*H,dt.rx+=dt.spin*H*.6,dt.ry+=dt.spin*H*.4,dt.y<.06&&Kt(dt,ae);const kt=dt.x-Fe.x,cn=dt.z-Fe.z;kt*kt+cn*cn<2.4*2.4&&Kt(dt,ae),s.position.set(dt.x,dt.y,dt.z),s.rotation.set(dt.rx,dt.ry,dt.rz),s.scale.setScalar(1),s.updateMatrix(),ae.mesh.setMatrixAt(We,s.matrix)}ae.mesh.instanceMatrix.needsUpdate=!0}fe&&(fe.rotation.x=Math.sin(Ni*.9)*.022+Math.sin(Ni*2.1)*.006,fe.rotation.z=Math.cos(Ni*.73)*.018),Un.visible&&(Un.rotation.z=Math.sin(Ni*1.3)*.03,Un.position.y=$e+Math.sin(Ni*2.3)*.006)}return Ce({season:"autumn",weather:"clear",hour:17.2,isNight:!1,overcast:0}),t.userData.nature={setEnvironment:Ce,isNightHour:Bf},{group:t,colliders:xa,cameraOccluders:tr,interactables:[_a],setEnvironment:Ce,update:tn}}function Tx(i=7){return Sn(512,512,(e,t,n)=>{const s=Ht(i);e.fillStyle="#6d4b2f",e.fillRect(0,0,t,n);for(let r=0;r<26;r++){const o=s()*t,a=y(s,16,120),c=e.createLinearGradient(o,0,o+a,0),l=s()>.5?"#a67b4c":"#3a2414";c.addColorStop(0,"rgba(0,0,0,0)"),c.addColorStop(.5,l),c.addColorStop(1,"rgba(0,0,0,0)"),e.globalAlpha=y(s,.04,.14),e.fillStyle=c,e.fillRect(o,0,a,n)}e.globalAlpha=1;for(let r=0;r<420;r++){const o=s()*t,a=y(s,1,7),c=y(s,.008,.03);e.beginPath(),e.strokeStyle=s()>.5?"#3a2414":"#a47a4d",e.globalAlpha=y(s,.05,.24),e.lineWidth=y(s,.6,2.2);for(let l=0;l<=n;l+=8){const u=o+Math.sin(l*c+r)*a+Math.sin(l*c*2.6)*a*.25;l===0?e.moveTo(u,l):e.lineTo(u,l)}e.stroke()}e.globalAlpha=1;for(let r=0;r<5;r++){const o=s()*t,a=s()*n,c=y(s,6,16);for(let l=3;l>=0;l--)e.beginPath(),e.ellipse(o,a,c*(1+l*.6),c*(.5+l*.5),0,0,Ge),e.strokeStyle=l===0?"#24150a":"#3a2414",e.globalAlpha=l===0?.6:.18,e.lineWidth=l===0?2:3,e.stroke();e.globalAlpha=1}for(let r=0;r<70;r++)e.fillStyle=s()>.55?"rgba(122,126,88,.10)":"rgba(30,22,14,.12)",e.beginPath(),e.ellipse(s()*t,s()*n,y(s,4,30),y(s,2,12),s()*Ge,0,Ge),e.fill();li(e,t,n,s,.055)},{repeat:[1,1]})}function Ex(i=13){return Sn(128,128,(e,t,n)=>{const s=Ht(i),r=t/2,o=n/2;e.fillStyle="#7c5838",e.fillRect(0,0,t,n);for(let a=1;a<26;a++)e.beginPath(),e.ellipse(r+y(s,-3,3),o+y(s,-3,3),a/26*t*.48,a/26*n*.46,y(s,-.2,.2),0,Ge),e.strokeStyle=a%3===0?"#3a2414":"#5d4028",e.globalAlpha=y(s,.25,.6),e.lineWidth=y(s,.8,2),e.stroke();e.globalAlpha=1;for(let a=0;a<7;a++){const c=s()*Ge;e.strokeStyle="#2a180c",e.globalAlpha=.5,e.lineWidth=1.2,e.beginPath(),e.moveTo(r,o),e.lineTo(r+Math.cos(c)*t*y(s,.2,.45),o+Math.sin(c)*n*y(s,.2,.45)),e.stroke()}e.globalAlpha=1,li(e,t,n,s,.06)},{wrapS:on,wrapT:on})}function Ax({size:i=512,planks:e=6,seed:t=21}={}){return Sn(i,i,(n,s,r)=>{const o=Ht(t);n.fillStyle="#5d4029",n.fillRect(0,0,s,r);const a=s/e;for(let c=0;c<e;c++){const l=c*a;n.globalAlpha=y(o,.05,.2),n.fillStyle=o()>.5?"#8a6540":"#3a2616",n.fillRect(l,0,a,r),n.globalAlpha=1;for(let u=0;u<46;u++){const d=l+y(o,2,a-2);n.beginPath(),n.strokeStyle=o()>.5?"#33210f":"#9a7450",n.globalAlpha=y(o,.06,.26),n.lineWidth=y(o,.6,1.8);const f=y(o,.5,3);for(let h=0;h<=r;h+=10){const g=d+Math.sin(h*.02+u)*f;h===0?n.moveTo(g,h):n.lineTo(g,h)}n.stroke()}n.globalAlpha=1,n.fillStyle="rgba(22,13,7,.62)",n.fillRect(l-1,0,2.4,r),n.fillStyle="rgba(200,168,120,.10)",n.fillRect(l+2.2,0,1.6,r)}for(let c=0;c<6;c++){const l=o()*s,u=o()*r,d=y(o,5,12);for(let f=2;f>=0;f--)n.beginPath(),n.ellipse(l,u,d*(1+f*.6),d*(.5+f*.45),0,0,Ge),n.strokeStyle=f===0?"#24150a":"#33210f",n.globalAlpha=f===0?.5:.2,n.lineWidth=1.6,n.stroke();n.globalAlpha=1}li(n,s,r,o,.05)},{repeat:[1,1]})}function Cx(i=31){return Sn(256,256,(e,t,n)=>{const s=Ht(i);e.fillStyle="#eef2f3",e.fillRect(0,0,t,n);for(let r=0;r<90;r++){const o=s()*t,a=s()*n,c=y(s,6,46),l=e.createRadialGradient(o,a,0,o,a,c),u=s()>.5?"212,224,232":"255,255,255";l.addColorStop(0,`rgba(${u},${y(s,.12,.3)})`),l.addColorStop(1,`rgba(${u},0)`),e.fillStyle=l,e.fillRect(o-c,a-c,c*2,c*2)}for(let r=0;r<140;r++)e.fillStyle="rgba(255,255,255,.75)",e.fillRect(s()*t,s()*n,y(s,.6,1.6),y(s,.6,1.6));li(e,t,n,s,.022)},{repeat:[1,1]})}function Rx(){return Sn(256,320,(i,e,t)=>{const n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#3a2410"),n.addColorStop(.42,"#9c5a1e"),n.addColorStop(1,"#eaa055"),i.fillStyle=n,i.fillRect(0,0,e,t);const s=i.createRadialGradient(e*.52,t*.7,4,e*.52,t*.7,e*.66);s.addColorStop(0,"rgba(255,226,178,.82)"),s.addColorStop(.35,"rgba(255,170,94,.45)"),s.addColorStop(1,"rgba(120,60,20,0)"),i.fillStyle=s,i.fillRect(0,0,e,t),i.fillStyle="rgba(30,18,9,.55)",i.fillRect(0,0,e,t*.1),i.fillRect(0,0,e*.07,t),i.fillRect(e*.93,0,e*.07,t),i.fillStyle="rgba(40,22,10,.35)",i.fillRect(e*.12,t*.62,e*.24,t*.38)},{repeat:[1,1],wrapS:on,wrapT:on})}function Px(i=41){return Sn(128,256,(e,t,n)=>{const s=Ht(i);e.clearRect(0,0,t,n);for(let o=0;o<64;o++){const a=s()*t,c=y(s,n*.3,n*.95),l=e.createLinearGradient(0,0,0,c);l.addColorStop(0,"rgba(12,9,7,.55)"),l.addColorStop(.35,"rgba(16,12,9,.28)"),l.addColorStop(1,"rgba(20,15,10,0)"),e.fillStyle=l,e.fillRect(a,0,y(s,2,9),c)}const r=e.createLinearGradient(0,0,0,n*.42);r.addColorStop(0,"rgba(10,8,6,.6)"),r.addColorStop(1,"rgba(10,8,6,0)"),e.fillStyle=r,e.fillRect(0,0,t,n*.42)},{wrapS:on,wrapT:on})}function Lx({scene:i}={}){const e=Ht(9137),t=new Jt;t.name="cabin",i&&i.add(t);const n=[],s=Gt.width/2,r=Gt.depth/2,o=Gt.frontZ,a=Gt.backZ,c=Gt.floorY,l=Gt.foundationY,u=Gt.logRadius,d=.17,f=d*2,h=u*2,g=8,v=.02,m=l+v,p=m+g*h,b=as.halfX,P=as.halfZ,S=.34,T=Gt.roof.thickness,E=s+Gt.roof.overhangX;let U=(Gt.ridgeY-Gt.eaveY)/E;for(let L=0;L<8;L++){const ne=Math.sqrt(1+U*U);U=(Gt.ridgeY-Gt.eaveY-T*ne)/E}const M=1/Math.sqrt(1+U*U),C=U*M,F=Gt.ridgeY-E*U,k=r+Gt.roof.overhangFront,V=-r-Gt.roof.overhangBack,ie=k-V,G=E/M,Q=L=>Gt.ridgeY-Math.abs(L)*U-T/M,we=(L,ne)=>-.055*Math.sin(Math.PI*vn(L,0,1))*Math.sin(Math.PI*vn(ne,0,1)),re=Gt.porch,Pe=re.floorY,ye=o-.02,Te=re.frontZ,Ie=o-.08,yt=re.frontZ+.25,Et=.144,jt=.16,W=re.width/2+.2,lt=L=>re.roofY-(L-Ie)*Et,Se=L=>lt(L)+jt/Math.cos(Math.atan(Et)),$=re.frontZ-.1,Ee=lt($)-.02-.16,Ae=(L,ne)=>-.055*Math.sin(Math.PI*vn(Math.abs(L)/E,0,1))*Math.sin(Math.PI*vn((ne-V)/ie,0,1)),Je=(L,ne)=>-.032*Math.sin(Math.PI*vn((L+W)/(2*W),0,1))*Math.sin(Math.PI*vn((ne-Ie)/(yt-Ie),0,1)),Ye=Gt.door.width,xe=Gt.door.height,B=c+xe,ee=Gt.windows;function ue(L,ne){let de=null,le=null;for(let oe=0;oe<g;oe++){const Ce=m+oe*h,Fe=Ce+h;Fe<=L+1e-6||Ce>=ne-1e-6||(de=de===null?Ce:Math.min(de,Ce),le=le===null?Fe:Math.max(le,Fe))}return de===null?[L,ne]:[de,le]}const ve=(L,ne,de)=>({axis:L,sign:ne,outer:de,point:(le,oe,Ce)=>L==="x"?new A(le,oe,de+ne*Ce):new A(de+ne*Ce,oe,le)}),He={id:"front",...ve("x",1,o),uMin:-s,uMax:s,throughParity:0},vt={id:"back",...ve("x",-1,a),uMin:-s,uMax:s,throughParity:0},pt={id:"left",...ve("z",-1,Gt.leftX),uMin:-r,uMax:r,throughParity:1},ce={id:"right",...ve("z",1,Gt.rightX),uMin:-r,uMax:r,throughParity:1},Xe=[He,vt,pt,ce],D=ee.filter(L=>L.face==="front");ee.find(L=>L.face==="right");const Ve=ee.map(L=>{const ne=c+L.y,de=ne-L.height/2,le=ne+L.height/2,oe=ue(de,le),Ce=L.face==="front"?L.x-L.width/2:L.z-L.width/2,Fe=L.face==="front"?L.x+L.width/2:L.z+L.width/2,nt=Math.max(de,oe[0]),Mt=Math.min(le,oe[1]);return{...L,y0:de,y1:le,holeY0:oe[0],holeY1:oe[1],u0:Ce,u1:Fe,visY0:nt,visY1:Mt,wall:L.face==="front"?He:ce}}),tt=ue(c,B);He.openings=[{u0:-Ye/2,u1:Ye/2,y0:tt[0],y1:tt[1],id:"door"},...D.map(L=>{const ne=Ve.find(de=>de.id===L.id);return{u0:ne.u0,u1:ne.u1,y0:ne.holeY0,y1:ne.holeY1,id:L.id}})].sort((L,ne)=>L.u0-ne.u0),vt.openings=[],pt.openings=[],ce.openings=[{u0:Ve.find(L=>L.id==="side-right").u0,u1:Ve.find(L=>L.id==="side-right").u1,y0:Ve.find(L=>L.id==="side-right").holeY0,y1:Ve.find(L=>L.id==="side-right").holeY1,id:"side-right"}];const R=Tx(7),_=Ex(13),J=(()=>{const L=Rl({size:512,seed:11,base:"#57544b",light:"#948d7d",dark:"#242319"});return L.repeat.set(.62,.62),L})(),pe=(()=>{const L=B0({size:512,seed:15});return L.repeat.set(.92,.44),L})(),Re=Ax({planks:6,seed:21});Re.repeat.set(.7,.7);const et=(()=>{const L=As({base:"#5d4029",light:"#98714a",dark:"#2c1a0e",seed:31});return L.repeat.set(.62,.62),L})(),Qe=(()=>{const L=As({base:"#45311f",light:"#735537",dark:"#1e120a",seed:44});return L.repeat.set(.7,.7),L})(),Le=Rx(),Oe=I2({seed:23}),ct=Cx(31);ct.repeat.set(.8,.8);const Ft=Px(41),rt=oh({seed:12}),Be=L=>F2(L),Ct=new sn({color:"#af9c85",roughness:.1,metalness:0,transparent:!0,opacity:.36,depthWrite:!1,side:Bn,envMapIntensity:.65,emissive:new ke("#ff9c46"),emissiveMap:Le,emissiveIntensity:0}),Tt={logs:Be({map:R,roughness:.8,color:"#e3d5bf",bumpMap:R,bumpScale:.22}),logEnds:Be({map:_,roughness:.84,color:"#dfd0b8"}),core:Be({color:"#2a1e14",roughness:.96}),trim:Be({map:et,roughness:.76,color:"#dcc9ad"}),trimDark:Be({map:Qe,roughness:.8,color:"#c9b596"}),plank:Be({map:Re,roughness:.78,color:"#d5c0a3"}),door:Be({map:Re,roughness:.8,color:"#b3916c"}),stone:Be({map:J,roughness:.9,color:"#c0b8a7"}),stonePier:Be({map:J,roughness:.92,color:"#948d7e"}),stoneSoot:Be({map:J,roughness:.94,color:"#a49c8c"}),shingle:Be({map:pe,roughness:.84,color:"#d6c1a4",bumpMap:pe,bumpScale:.5}),soffit:Be({map:Qe,roughness:.84,color:"#c2ad90"}),metal:Be({color:"#2b2620",roughness:.48,metalness:.72}),lanternGlass:new sn({color:"#ffce8c",emissive:new ke("#ff9640"),emissiveIntensity:.6,transparent:!0,opacity:.72,roughness:.3,depthWrite:!1}),snow:new sn({map:ct,color:"#f2f6f8",roughness:.88,metalness:0,transparent:!0,opacity:0,depthWrite:!0}),rain:new ns({map:Oe,color:"#cfe0ea",transparent:!0,opacity:0,depthWrite:!1,side:Bn}),soot:new ns({map:Ft,color:"#15100c",transparent:!0,opacity:.68,depthWrite:!1,side:Bn}),glass:Ct},Xt=new Map,j=[];function Ke(L,ne){let de=ne;de.index&&(de=de.toNonIndexed());for(const oe of Object.keys(de.attributes))oe!=="position"&&oe!=="normal"&&oe!=="uv"&&de.deleteAttribute(oe);if(de.attributes.normal||de.computeVertexNormals(),!de.attributes.uv){const oe=de.attributes.position.count;de.setAttribute("uv",new Wn(new Float32Array(oe*2),2))}let le=Xt.get(L);le||(le=[],Xt.set(L,le),j.push(L)),le.push(de)}const ze=new A,St=new ys,At=new Ss,qe=new Mn,Bt=new A(1,1,1);function Dt(L,ne="geometry"){const de=[];for(const oe of L){if(!oe||!oe.attributes||!oe.attributes.position)continue;const Ce=oe.index?oe.toNonIndexed():oe;for(const Fe of Object.keys(Ce.attributes))Fe!=="position"&&Fe!=="normal"&&Fe!=="uv"&&Ce.deleteAttribute(Fe);Ce.attributes.normal||Ce.computeVertexNormals(),Ce.attributes.uv||Ce.setAttribute("uv",new Wn(new Float32Array(Ce.attributes.position.count*2),2)),de.push(Ce)}if(!de.length)return null;if(de.length===1)return de[0];const le=Cs(de,!1);return le||console.warn(`[cabin] mergeGeometries failed for "${ne}" (${de.length} pieces)`),le}function _n(L,ne,de){const le=L.attributes.uv;if(!le)return L;for(let oe=0;oe<le.count;oe++)le.setXY(oe,le.getX(oe)*ne,le.getY(oe)*de);return le.needsUpdate=!0,L}function ut(L,ne,de,le,oe,Ce,Fe,nt={}){let Mt;if(nt.rounded?Mt=new os(ne,de,le,2,Math.min(nt.rounded,ne/2,de/2,le/2)):Mt=new Zn(ne,de,le),nt.uv!==!1){const Kt=nt.uv?nt.uv[0]:Math.max(ne,le),tn=nt.uv?nt.uv[1]:de;_n(Mt,Kt,tn)}return At.set(nt.rot?.[0]??0,nt.rot?.[1]??0,nt.rot?.[2]??0),St.setFromEuler(At),qe.compose(ze.set(oe,Ce,Fe),St,Bt),Mt.applyMatrix4(qe),Ke(L,Mt),Mt}function fn(L,ne,de,le,oe,Ce,Fe,nt,Mt={}){const Kt=ne.point(Ce,Fe,nt);return ne.axis==="x"?ut(L,de,le,oe,Kt.x,Kt.y,Kt.z,Mt):ut(L,oe,le,de,Kt.x,Kt.y,Kt.z,Mt),Kt}function gi(L,ne,de,le,oe,Ce,Fe,nt,Mt={}){const Kt=new ei(ne,de,le,oe,1,!!Mt.open);return Mt.uv!==!1&&_n(Kt,Mt.uvScale?.[0]??1,Mt.uvScale?.[1]??1),At.set(Mt.rot?.[0]??0,Mt.rot?.[1]??0,Mt.rot?.[2]??0),St.setFromEuler(At),qe.compose(ze.set(Ce,Fe,nt),St,Bt),Kt.applyMatrix4(qe),Ke(L,Kt),Kt}function z(L,ne,de,le,oe){const Ce=new ei(1,1,1,14,1,!1);L==="x"?(Ce.scale(u,ne,d),Ce.rotateZ(Math.PI/2),Ce.translate(de,le,oe)):(Ce.scale(d,ne,u),Ce.rotateX(Math.PI/2),Ce.translate(oe,le,de)),_n(Ce,1,ne/1.35),Ke("logs",Ce)}function X(L,ne,de,le,oe){const Ce=new Ir(1,14);Ce.scale(d,u,1),L==="x"?(Ce.rotateY(oe>0?Math.PI/2:-Math.PI/2),Ce.translate(ne+oe*.002,de,le)):(oe<0&&Ce.rotateY(Math.PI),Ce.translate(le,de,ne+oe*.002)),Ke("logEnds",Ce)}function I(L,ne,de,le,oe,Ce={}){const Fe=new dl(ne.map(Mt=>new je(Mt[0],Mt[1]))),nt=new oa(Fe,{depth:de,bevelEnabled:!1,steps:1,curveSegments:1});return Ce.uvScale&&_n(nt,Ce.uvScale[0],Ce.uvScale[1]),oe&&nt.applyMatrix4(oe),Ke(L,nt),nt}const O=Gt.width+.36,N=Gt.depth+.36;ut("stone",O+.16,.1,N+.16,0,.05,0,{uv:[O,.1]}),ut("stone",O,l-.1,N,0,.1+(l-.1)/2,0,{uv:[O,l]});for(let L=0;L<30;L++){const ne=L%4,de=e()*2-1,le=y(e,.28,.72),oe=y(e,.09,.16),Ce=y(e,.06,l-.1),Fe=y(e,.015,.045);ne===0?ut("stone",le,oe,.1,de*(O/2-.6),Ce,N/2+Fe*.5,{uv:[le,oe]}):ne===1?ut("stone",le,oe,.1,de*(O/2-.6),Ce,-N/2-Fe*.5,{uv:[le,oe]}):ne===2?ut("stone",.1,oe,le,-O/2-Fe*.5,Ce,de*(N/2-.5),{uv:[le,oe]}):ut("stone",.1,oe,le,O/2+Fe*.5,Ce,de*(N/2-.5),{uv:[le,oe]})}for(const L of Xe)fn("trimDark",L,L.uMax-L.uMin+.12,v,f+.06,0,l+v/2,-.17+.03);function q(L,ne,de,le){let oe=[L.slice()];for(const Ce of ne){if(le<=Ce.y0+1e-6||de>=Ce.y1-1e-6)continue;const Fe=[];for(const[nt,Mt]of oe){if(Ce.u1<=nt+1e-6||Ce.u0>=Mt-1e-6){Fe.push([nt,Mt]);continue}Ce.u0>nt&&Fe.push([nt,Math.min(Ce.u0,Mt)]),Ce.u1<Mt&&Fe.push([Math.max(Ce.u1,nt),Mt])}oe=Fe}return oe}for(let L=0;L<g;L++){const ne=m+u+L*h,de=ne-u,le=ne+u;for(const oe of Xe){const Ce=L%2===oe.throughParity,Fe=Ce?oe.uMin-S:oe.axis==="x"?-b:-P,nt=Ce?oe.uMax+S:oe.axis==="x"?b:P,Mt=oe.outer-oe.sign*d,Kt=q([Fe,nt],oe.openings,de,le);for(const[tn,x]of Kt)x-tn<.04||z(oe.axis,x-tn,(tn+x)/2,ne,Mt);if(Ce)for(const[tn,x]of Kt)Math.abs(tn-Fe)<1e-4&&X(oe.axis,tn,ne,Mt,-1),Math.abs(x-nt)<1e-4&&X(oe.axis,x,ne,Mt,1)}}function he(L){const ne=-f/2-.09,de=.13,le=[];let oe=L.uMin;const Ce=[...L.openings].sort((Fe,nt)=>Fe.u0-nt.u0);for(const Fe of Ce)Fe.u0>oe+1e-4&&le.push([oe,Fe.u0,l,p]),Fe.y0>l+.01&&le.push([Fe.u0,Fe.u1,l,Fe.y0]),Fe.y1<p-.01&&le.push([Fe.u0,Fe.u1,Fe.y1,p]),oe=Math.max(oe,Fe.u1);oe<L.uMax-1e-4&&le.push([oe,L.uMax,l,p]);for(const[Fe,nt,Mt,Kt]of le)nt-Fe<.02||Kt-Mt<.02||fn("core",L,nt-Fe,Kt-Mt,de,(Fe+nt)/2,(Mt+Kt)/2,ne,{uv:!1})}Xe.forEach(he),ut("core",b*2+.2,.08,P*2+.2,0,p+.05,0,{uv:!1});for(const L of[pt,ce])fn("trim",L,ie+.04,.07,.42,(k+V)/2,p+.015,-f/2-.01);const Ue=p-.02,ot=Q(0)-.03,_t=s+.02,at=[[-_t,Ue],[_t,Ue],[0,ot]];for(const L of[-1,1]){const ne=L>0?o-.23:a+.05,de=new Mn().makeTranslation(0,0,ne);I("plank",at,.18,0,de,{uvScale:[1,1]}),ut("trim",_t*2+.1,.12,.26,0,Ue+.045,L>0?o-.17:a+.17,{uv:[_t*2,.12]})}{const L=o-.228,ne=Ue+(ot-Ue)*.42,de=new Ir(.3,22);de.translate(0,ne,L+.002),Ke("core",de);const le=new ci(.31,.035,8,26);le.translate(0,ne,L+.012),Ke("trim",le);for(let Ce=0;Ce<3;Ce++){const Fe=new Zn(.045,.56,.035);Fe.rotateZ(Ce*Math.PI/3),Fe.translate(0,ne,L+.02),Ke("trimDark",Fe)}const oe=new ei(.06,.06,.05,10);oe.rotateX(Math.PI/2),oe.translate(0,ne,L+.03),Ke("trimDark",oe)}const Ze=Math.atan2(C,M),De=Gt.chimney,ft=De.z-De.depth/2,Nt=De.z+De.depth/2,en=(Math.abs(De.x)-De.width/2+.1)/M;function kn(L,ne,de,le,oe){const Ce=de-ne,Fe=oe-le,nt=new Zn(Math.max(Ce,.05),T,Math.max(Fe,.05),Math.max(2,Math.ceil(Ce/1)),1,Math.max(2,Math.ceil(Fe/1)));nt.rotateZ(-L*Ze);const Mt=(ne+de)/2,Kt=(le+oe)/2,tn=new A(L*Mt*M,Gt.ridgeY-Mt*C,Kt),x=new A(L*C,M,0);return tn.addScaledVector(x,-T/2),nt.translate(tn.x,tn.y,tn.z),nt}const Xn=[kn(1,0,G,V,k),kn(-1,0,G,V,ft),kn(-1,0,en,ft,Nt),kn(-1,0,G,Nt,k)];let Nn=Dt(Xn,"roof-panels");if(!Nn)throw new Error("cabin: failed to merge roof panels");Nn.index&&(Nn=Nn.toNonIndexed());{const L=Nn.attributes.position,ne=Nn.attributes.uv;for(let de=0;de<L.count;de++){const le=L.getX(de),oe=L.getY(de),Ce=L.getZ(de),Fe=Math.abs(le)/M,nt=vn(Fe/G,0,1),Mt=vn((Ce-V)/ie,0,1);L.setY(de,oe+we(nt,Mt)),ne.setXY(de,Ce,Fe)}L.needsUpdate=!0,ne.needsUpdate=!0,Nn.computeVertexNormals()}const An=Nn.clone();{const L=An.attributes.position,ne=An.attributes.uv;for(let de=0;de<L.count;de++){const le=L.getX(de),oe=L.getZ(de);L.setY(de,L.getY(de)-.016),ne.setXY(de,Math.abs(le)/M,oe)}L.needsUpdate=!0,ne.needsUpdate=!0,An.computeVertexNormals()}Ke("shingle",Nn),Ke("soffit",An),I("trimDark",[[-.22,Gt.ridgeY-.38],[.22,Gt.ridgeY-.38],[0,Gt.ridgeY]],ie+.1,0,new Mn().makeTranslation(0,0,V-.05));const Yn=F-Gt.eaveY+.03,w=(F+Gt.eaveY)/2-.005;ut("trimDark",.055,Yn,ie+.04,E-.02,w,(k+V)/2,{uv:[ie,Yn]});for(const[L,ne]of[[V-.02,ft-.01],[Nt+.01,k+.02]])ut("trimDark",.055,Yn,ne-L,-E+.02,w,(L+ne)/2,{uv:[ne-L,Yn]});{const L=G+.02;for(const ne of[-1,1]){const de=new A(ne*C,M,0);for(const[le]of[[k-.02],[V+.02]]){const oe=G/2,Ce=new A(ne*oe*M,Gt.ridgeY-oe*C,le);Ce.addScaledVector(de,-.1),ut("trim",L,.22,.075,Ce.x,Ce.y,Ce.z,{rot:[0,0,-ne*Ze],uv:[L,.22]})}}}{const L=(s-.35)/M,ne=G-.07,de=ne-L,le=(L+ne)/2;for(const oe of[-1,1]){const Ce=new A(oe*C,M,0);for(let Fe=V+.45;Fe<=k-.45;Fe+=1.1){if(oe<0&&Fe>ft-.24&&Fe<Nt+.24)continue;const nt=new A(oe*le*M,Gt.ridgeY-le*C,Fe);nt.addScaledVector(Ce,-.27),ut("trimDark",de,.13,.07,nt.x,nt.y,nt.z,{rot:[0,0,-oe*Ze],uv:[de,.13]})}}}const Y=Math.atan(Et),ge=yt-Ie,fe=(Ie+yt)/2;{const L=new Zn(W*2,jt,ge,12,1,8);L.rotateX(Y);const ne=new A(0,Math.cos(Y),Math.sin(Y)),de=new A(0,Se(fe),fe).addScaledVector(ne,-jt/2);L.translate(de.x,de.y,de.z);const le=L.attributes.position,oe=L.attributes.uv;for(let Fe=0;Fe<le.count;Fe++){const nt=le.getX(Fe),Mt=le.getZ(Fe),Kt=vn((nt+W)/(2*W),0,1),tn=vn((Mt-Ie)/ge,0,1);le.setY(Fe,le.getY(Fe)-.032*Math.sin(Math.PI*Kt)*Math.sin(Math.PI*tn)),oe.setXY(Fe,nt,Mt)}le.needsUpdate=!0,oe.needsUpdate=!0,L.computeVertexNormals();const Ce=L.clone();{const Fe=Ce.attributes.position,nt=Ce.attributes.uv;for(let Mt=0;Mt<Fe.count;Mt++)Fe.setY(Mt,Fe.getY(Mt)-.014),nt.setXY(Mt,Fe.getX(Mt),Fe.getZ(Mt));Fe.needsUpdate=!0,nt.needsUpdate=!0,Ce.computeVertexNormals()}Ke("shingle",L),Ke("soffit",Ce)}ut("trimDark",W*2+.02,.2,.06,0,Se(yt)-.09,yt-.01,{uv:[W*2,.2]});for(const L of[-1,1])ut("trim",.06,.2,ge/Math.cos(Y),L*(W-.04),Se(fe)-.1,fe,{rot:[Y,0,0],uv:[ge,.2]});ut("trim",W*2,.16,.09,0,Se(Ie+.03)+.04,Ie+.02,{uv:[W*2,.16]});for(const L of[-2.85,-1.9,-.95,0,.95,1.9,2.85])ut("trimDark",.07,.1,ge/Math.cos(Y)-.08,L,lt(fe)-.06,fe,{rot:[Y,0,0],uv:[ge,.1]});{const L=De.width,ne=De.depth,de=De.height-.25,le=3.46;ut("stone",L+.3,.22,ne+.3,De.x,.11,De.z,{uv:[L,.22]}),ut("stone",L+.06,le-.22,ne+.06,De.x,.22+(le-.22)/2,De.z,{uv:[L,le]}),ut("stoneSoot",L-.02,de-le,ne-.02,De.x,(de+le)/2,De.z,{uv:[L,de]}),ut("stoneSoot",L+.16,.14,ne+.16,De.x,de+.07,De.z,{uv:[L,.14]}),ut("stoneSoot",L+.34,.18,ne+.34,De.x,de+.23,De.z,{uv:[L,.18]}),ut("stone",L+.4,.08,ne+.4,De.x,De.capY-.04,De.z,{uv:[L,.08]}),ut("stone",L+.24,.42,ne+.24,De.x,3.41,De.z,{uv:[L,.42]});const oe=2.55,Ce=de-.12-oe/2,Fe=new ii(L*.88,oe);Fe.translate(De.x+.02,Ce,De.z+ne/2+.006),Ke("soot",Fe);const nt=new ii(ne*.84,oe);nt.rotateY(-Math.PI/2),nt.translate(De.x-L/2-.006,Ce,De.z+.02),Ke("soot",nt)}const te=re.width/2,gt=Te-ye,ht=re.frontZ-.1,it=[];for(const L of[-2.7,-.9,.9,2.7])ut("stonePier",.3,.19,.3,L,.095,Te-.32,{uv:[.3,.19]});for(const L of[ye+.3,(ye+Te)/2,Te-.18])ut("trimDark",te*2-.04,.09,.12,0,.235,L,{uv:[te*2,.12]});{const de=(gt+.04-.12)/7;for(let le=0;le<7;le++){const oe=ye-.01+de/2+le*(de+.02);ut("trim",te*2-.02,.06,de,0,.31+(e()-.5)*.004,oe,{uv:[te*2,de]})}}ut("trimDark",te*2,.1,.05,0,.28,Te+.005,{uv:[te*2,.1]});for(const L of[-1,1])ut("trimDark",.05,.1,gt,L*(te-.015),.28,(ye+Te)/2,{uv:[gt,.1]});{const L=re.stepRise,ne=Pe-L,de=ne-L,le=.36;ut("trim",2.3,ne-.01,le,0,(ne+.01)/2,Te+le/2,{uv:[2.3,le]}),ut("trim",2.62,de-.01,le,0,(de+.01)/2,Te+le*1.5,{uv:[2.62,le]}),it.push({w:2.3,h:.035,d:le*.8,x:0,y:ne+.018,z:Te+le/2}),it.push({w:2.62,h:.035,d:le*.8,x:0,y:de+.018,z:Te+le*1.5})}for(const L of[-2.85,re.postX]){ut("stone",.28,.1,.28,L,Pe+.05,ht,{uv:[.28,.1]});const ne=Pe+.1;ut("trim",.2,Ee-ne,.2,L,(ne+Ee)/2,ht,{uv:[.2,Ee-ne]});for(const de of[-1,1]){const le=L+de*.1,oe=2.5,Ce=L+de*.62,Fe=Ee+.08,nt=Ce-le,Mt=Fe-oe;ut("trim",Math.hypot(nt,Mt),.09,.11,(le+Ce)/2,(oe+Fe)/2,ht,{rot:[0,0,Math.atan2(Mt,nt)],uv:[Math.hypot(nt,Mt),.09]})}}ut("trimDark",W*2-.1,.16,.16,0,Ee+.08,ht,{uv:[W*2,.16]});for(const L of[-1,1])ut("trimDark",.13,.15,ge/Math.cos(Y),L*(te-.06),lt(fe)-.1,fe,{rot:[Y,0,0],uv:[ge,.15]});const xt=re.frontZ-.07,Rt=Pe+.9;function $t(L,ne,de,le,oe){const Ce=L==="x"?de-ne:oe-le,Fe=L==="x"?(ne+de)/2:ne,nt=L==="x"?le:(le+oe)/2;ut("trim",L==="x"?Ce:.09,.07,L==="x"?.09:Ce,Fe,Rt,nt,{uv:[Ce,.09]}),ut("trim",L==="x"?Ce:.07,.055,L==="x"?.07:Ce,Fe,Pe+.15,nt,{uv:[Ce,.07]});const Mt=Math.max(2,Math.round(Ce/.19));for(let Kt=0;Kt<=Mt;Kt++){const tn=Kt/Mt,x=L==="x"?ne+Ce*tn:ne,se=L==="x"?le:le+Ce*tn;ut("trimDark",.035,Rt-.1-(Pe+.15),.035,x,(Pe+.15+Rt-.1)/2,se,{uv:[.035,.65]})}it.push({w:L==="x"?Ce:.13,h:.045,d:L==="x"?.13:Ce,x:Fe,y:Rt+.055,z:nt})}$t("x",-te+.06,-1.15,xt,xt),$t("x",1.15,te-.06,xt,xt),$t("z",-te+.06,-te+.06,3.34,xt-.05),$t("z",te-.06,te-.06,3.34,xt-.05);for(const L of[-1.15,1.15,-te+.06,te-.06])ut("trim",.115,1.1,.115,L,Pe+.55,L===1.15||L===-1.15?xt:xt-.02,{uv:[.115,1.1]});for(const[L,ne]of[[-te+.06,3.34],[te-.06,3.34]])ut("trim",.115,1.06,.115,L,Pe+.53,ne,{uv:[.115,1.06]});{const de=Pe+.46;for(const le of[-.48,.48])for(const oe of[-.16,.16])ut("trimDark",.07,de-.03-Pe,.07,-1.28+le,Pe+(de-.03-Pe)/2,3.62+oe,{uv:[.07,.4]});ut("trim",1.16,.055,.44,-1.28,de-.028,3.62,{uv:[1.16,.44]});for(const le of[-.48,.48])ut("trimDark",.07,.78,.06,-1.28+le,de+.36,3.62-.19,{uv:[.07,.78]});for(let le=0;le<3;le++)ut("trim",1.08,.1,.045,-1.28,de+.18+le*.21,3.62-.19,{uv:[1.08,.1]});it.push({w:1.06,h:.04,d:.4,x:-1.28,y:de+.014,z:3.62})}function It(L,ne,de,le){it.push({w:le*2,h:.035,d:le*2,x:L,y:ne+le+.015,z:de,rounded:!0})}function bt(L,ne,de,le,oe){gi("logs",oe,oe,le,10,de,ne,L,{rot:[Math.PI/2,0,0],uvScale:[1,le/1.2]});const Ce=new Ir(1,10);Ce.scale(oe,oe,1),Ce.translate(de,ne,L+le/2+.002),Ke("logEnds",Ce)}{const oe=[.13,.13+Math.sqrt(3)*.13,.13+Math.sqrt(3)*.13*2];for(let Ce=0;Ce<3;Ce++){const Fe=3-Ce;for(let nt=0;nt<Fe;nt++){const Mt=4.42+Ce*.13+nt*2*.13;bt(2+y(e,-.05,.05),oe[Ce],Mt,1.15+y(e,-.1,.1),.13),Ce===2&&It(Mt,oe[Ce],2,.13)}}It(4.42+.13,oe[0],2,.13*.7),It(4.42+.13+2*.13,oe[0],2,.13*.7)}{const le=[.11,.11+Math.sqrt(3)*.11];for(let oe=0;oe<2;oe++){const Ce=2-oe;for(let Fe=0;Fe<Ce;Fe++){const nt=-4.72+oe*.11+Fe*2*.11;bt(1+y(e,-.04,.04),le[oe],nt,1+y(e,-.08,.08),.11),oe===1&&It(nt,le[oe],1,.11)}}}const Pt={x:re.postX,y:2.5,z:ht+.25};{const L=re.postX,ne=ht+.1;ut("metal",.045,.055,.34,L,2.98,ne+.17,{uv:[.05,.34]}),ut("metal",.04,.26,.04,L,2.86,ne+.02,{uv:[.04,.26]}),ut("metal",.035,.035,.2,L,2.83,ne+.16,{rot:[.7,0,0],uv:[.035,.2]});for(let oe=0;oe<3;oe++)ut("metal",.012,.045,.012,Pt.x,2.795-oe*.045,Pt.z,{uv:!1});const de=2.75;ut("metal",.2,.02,.2,Pt.x,de,Pt.z,{uv:[.2,.2]}),ut("metal",.22,.02,.22,Pt.x,de-.28,Pt.z,{uv:[.22,.22]});{const oe=new Po(.155,.1,4,1);oe.rotateY(Math.PI/4),oe.translate(Pt.x,de+.06,Pt.z),Ke("metal",oe)}for(const oe of[-.085,.085])for(const Ce of[-.085,.085])ut("metal",.016,.26,.016,Pt.x+oe,de-.13,Pt.z+Ce,{uv:!1});const le=new ci(.028,.008,6,12);le.translate(Pt.x,de+.135,Pt.z),Ke("metal",le),ut("lanternGlass",.15,.22,.15,Pt.x,de-.15,Pt.z,{uv:!1})}function ln(L){const ne=L.wall,de=L.u0,le=L.u1,oe=(de+le)/2,Ce=L.visY0,Fe=L.visY1,nt=L.holeY0,Mt=L.holeY1,Kt=(Ce+Fe)/2,tn=le-de,x=Fe-Ce,se=-.16,Z=.4,H=(me,Me)=>{Me-me<.004||fn("trim",ne,tn+.06,Me-me,.34,oe,(me+Me)/2,-.172,{uv:[tn,Me-me]})};H(nt,Ce),H(Fe,Mt),fn("trim",ne,.085,Mt-nt+.02,Z,de,(nt+Mt)/2,se,{uv:[.085,Mt-nt]}),fn("trim",ne,.085,Mt-nt+.02,Z,le,(nt+Mt)/2,se,{uv:[.085,Mt-nt]}),fn("trim",ne,tn+.17,.09,Z,oe,Fe+.025,se,{uv:[tn,.09]}),fn("trim",ne,tn+.24,.1,.46,oe,Ce-.04,-.14,{uv:[tn,.1]}),fn("trim",ne,.13,x+.34,.06,de-.01,Kt+.05,.05,{uv:[.13,x]}),fn("trim",ne,.13,x+.34,.06,le+.01,Kt+.05,.05,{uv:[.13,x]}),fn("trim",ne,tn+.32,.13,.06,oe,Fe+.1,.05,{uv:[tn,.13]}),fn("trimDark",ne,tn+.16,.09,.05,oe,Ce-.14,.02,{uv:[tn,.09]});const _e=tn-.2,K=x-.02;for(const me of[-.07,-.15]){const Me=new ii(_e,K);ne.axis==="x"?Me.translate(oe,Kt,ne.outer+ne.sign*me):(Me.rotateY(Math.PI/2),Me.translate(ne.outer+ne.sign*me,Kt,oe)),Ke("glass",Me)}fn("trim",ne,.05,K+.03,.075,oe,Kt,-.11,{uv:[.05,K]}),fn("trim",ne,_e+.03,.05,.075,oe,Kt,-.11,{uv:[_e,.05]});{const me=new ii(_e+.02,K-.01);ne.axis==="x"?me.translate(oe,Kt,ne.outer+ne.sign*-.045):(me.rotateY(Math.PI/2),me.translate(ne.outer+ne.sign*-.045,Kt,oe)),Ke("rain",me)}ne.axis==="x"?it.push({w:tn+.12,h:.05,d:.34,x:oe,y:Ce+.035,z:ne.outer+ne.sign*-.1}):it.push({w:.34,h:.05,d:tn+.12,x:ne.outer+ne.sign*-.1,y:Ce+.035,z:oe})}Ve.forEach(ln);const Yt=new Jt;Yt.position.set(-.5199999999999999,c+.02,o-.035),t.add(Yt);let Wt=null;const Dn=[];{const L=He,ne=tt[0],de=tt[1];fn("trimDark",L,Ye,c-ne,.34,0,(c+ne)/2,-.172,{uv:[Ye,.05]}),fn("trim",L,Ye+.06,de-B,.4,0,(B+de)/2,-.16,{uv:[Ye,de-B]}),fn("trim",L,.08,xe+.1,.42,-Ye/2,c+xe/2+.02,-.16,{uv:[.08,xe]}),fn("trim",L,.08,xe+.1,.42,Ye/2,c+xe/2+.02,-.16,{uv:[.08,xe]}),fn("trim",L,Ye+.3,.12,.42,0,B+.03,-.16,{uv:[Ye,.12]}),ut("trimDark",Ye+.06,.02,.4,0,c+.01,o-.15,{uv:[Ye,.4]}),ut("metal",.03,.14,.05,Ye/2-.02,c+1.05,o+.01,{uv:!1});const le=Ye-.1,oe=xe-.06,Ce=.07,Fe=0,nt=[],Mt=(Z,H,_e,K,me,Me,Ne)=>{const ae=new Zn(Z,H,_e);_n(ae,Math.max(Z,_e),H),Ne&&ae.rotateZ(Ne),ae.translate(K,me,Me),nt.push(ae)};Mt(le,oe,Ce,le/2,oe/2,Fe-Ce/2),Mt(le-.14,.13,.028,le/2,.28,Fe+0),Mt(le-.14,.13,.028,le/2,oe-.3,Fe+0),Mt(1.72,.12,.026,le/2,oe/2,Fe+0,Math.atan2(oe-.62,le-.3));const Kt=Dt(nt,"door-wood");if(!Kt)throw new Error("cabin: failed to merge door leaf");Wt=new Ut(Kt,Tt.door),Wt.castShadow=!0,Wt.receiveShadow=!0,Wt.userData.interactId="cabin-door",Yt.add(Wt);const tn=(Z,H,_e,K,me,Me,Ne)=>{const ae=new Zn(Z,H,_e);ae.translate(K,me,Me),Dn.push(ae.index?ae.toNonIndexed():ae)};for(const Z of[.52,oe-.42]){tn(.56,.06,.016,.3,Z,Fe+.018),tn(.035,.09,.016,.05,Z,Fe+.02);for(const H of[.1,.3,.52]){const _e=new ei(.014,.014,.02,6);_e.rotateX(Math.PI/2),_e.translate(H,Z,Fe+.026),Dn.push(_e)}}const x=new ci(.055,.012,6,14);x.translate(le-.16,1.02,Fe+.02),Dn.push(x),tn(.06,.2,.016,le-.16,1.02,Fe+.016);const se=new Ut(Dt(Dn,"door-metal"),Tt.metal);se.castShadow=!0,Yt.add(se),n.push(Wt)}function wt(L,ne,de,le,oe,Ce,Fe={}){ut("snow",L,ne,de,le,oe,Ce,{uv:[Math.max(L,de),Math.max(L,de)],rounded:Fe.rounded})}{const L=ne=>{const de=new A(ne*M,-C,0),le=new A(0,0,1),oe=new A(-ne*C,-M,0),Ce=ne>0?-.035:-.015,Fe=[],nt=22,Mt=-.05,Kt=G-.07,tn=V+.08,x=k-.1;for(let K=0;K<=nt;K++){const me=K/nt,Me=.07+.05*Math.sin(me*11+1.7)+.025*Math.sin(me*27+.4);Fe.push([Mt+(Kt-Mt)*me,tn+Me])}for(let K=1;K<=nt;K++){const me=K/nt,Me=.06+.05*Math.sin(me*9+3.1)+.03*Math.sin(me*23+2.2);Fe.push([Kt-Me,tn+(x-tn)*me])}for(let K=1;K<=nt;K++){const me=K/nt,Me=.09+.045*Math.sin(me*13+.8)+.02*Math.sin(me*29+2.6);Fe.push([Kt-(Kt-Mt)*me,x-Me])}for(let K=1;K<nt;K++){const me=K/nt;Fe.push([Mt+.02*Math.sin(me*7+2),x-(x-tn)*me])}const se=new dl(Fe.map(K=>new je(K[0],K[1]))),Z=new oa(se,{depth:.05,bevelEnabled:!1,steps:1,curveSegments:1});Z.translate(0,0,Ce);const H=new Mn().makeBasis(de,le,oe).setPosition(0,Gt.ridgeY,0);Z.applyMatrix4(H);const _e=Z.attributes.position;for(let K=0;K<_e.count;K++){const me=_e.getX(K),Me=_e.getZ(K);_e.setY(K,_e.getY(K)+Ae(me,Me))}_e.needsUpdate=!0,Z.computeVertexNormals(),Ke("snow",Z)};L(1),L(-1)}{const L=Y,ne=new A(1,0,0),de=new A(0,-Math.sin(L),Math.cos(L)),le=new A(0,-Math.cos(L),-Math.sin(L)),oe=new A(0,Se(Ie),Ie),Ce=-W+.14,Fe=W-.14,nt=.06,Mt=ge-.12,Kt=[],tn=20;for(let H=0;H<=tn;H++){const _e=H/tn;Kt.push([Ce+(Fe-Ce)*_e,nt+.04+.02*Math.sin(_e*12)])}for(let H=1;H<=tn;H++){const _e=H/tn,K=.1+.05*Math.sin(_e*10+2.1)+.025*Math.sin(_e*25+.7);Kt.push([Fe-K,nt+(Mt-nt)*_e])}for(let H=1;H<=tn;H++){const _e=H/tn;Kt.push([Fe-(Fe-Ce)*_e,Mt-.05-.03*Math.sin(_e*14+1.2)])}for(let H=1;H<tn;H++){const _e=H/tn;Kt.push([Ce+.08+.06*Math.sin(_e*9+2.6),Mt-(Mt-nt)*_e])}const x=new dl(Kt.map(H=>new je(H[0],H[1]))),se=new oa(x,{depth:.05,bevelEnabled:!1,steps:1,curveSegments:1});se.translate(0,0,-.03),se.applyMatrix4(new Mn().makeBasis(ne,de,le).setPosition(oe));const Z=se.attributes.position;for(let H=0;H<Z.count;H++){const _e=Z.getX(H),K=Z.getZ(H);Z.setY(H,Z.getY(H)+Je(_e,K))}Z.needsUpdate=!0,se.computeVertexNormals(),Ke("snow",se)}for(let L=V+.3;L<=k-.3;L+=.52)wt(.26,.07,.42,E-.14,F+.015,L,{rounded:!0}),L>ft-.35&&L<Nt+.35||wt(.26,.07,.42,-E+.14,F+.015,L,{rounded:!0});for(let L=-W+.3;L<=W-.3;L+=.55)wt(.36,.06,.32,L,Se(yt)+.01,yt-.07,{rounded:!0});for(const L of it)wt(L.w,L.h,L.d,L.x,L.y,L.z,{rounded:L.rounded});wt(De.width+.36,.07,De.depth+.36,De.x,De.capY+.035,De.z),wt(Ye+.24,.05,.12,0,B+.11,o-.01);const Ln=[];{const L=Gt.smokeAnchor;for(let ne=0;ne<12;ne++){const de=new Or({map:rt,color:"#cfc6b8",transparent:!0,opacity:0,depthWrite:!1}),le=new bo(de);le.position.set(L.x,L.y,L.z),le.userData.phase=ne/12,Ln.push(le),t.add(le)}}const mn=new C0("#ffb168",0,10.5,2);mn.position.set(Pt.x,Pt.y,Pt.z+.02),mn.castShadow=!1,t.add(mn);const qn=Dr({size:128,color:"255,196,128"}),mt=new bo(new Or({map:qn,color:"#ffbe7a",transparent:!0,opacity:0,depthWrite:!1,blending:Pi}));mt.scale.set(1.5,1.5,1),mt.position.set(Pt.x,Pt.y,Pt.z+.04),t.add(mt);const Qt={};for(const L of j){const ne=Xt.get(L),de=Dt(ne,`bucket:${L}`);if(!de){console.warn(`[cabin] skipping bucket "${L}" (merge failed)`);continue}const le=Tt[L]||Tt.trim,oe=new Ut(de,le);oe.name=`cabin-${L}`,le.transparent,oe.castShadow=!(L==="snow"||L==="rain"||L==="glass"||L==="soot"||L==="lanternGlass"),oe.receiveShadow=!(L==="rain"||L==="glass"||L==="soot"||L==="lanternGlass"),oe.matrixAutoUpdate=!1,oe.updateMatrix(),t.add(oe),Qt[L]=oe}const wn=Qt.snow,Zt=Qt.rain;wn&&(wn.visible=!1),Zt&&(Zt.visible=!1);const dn=[{minX:-s-.12,maxX:-Ye/2-.04,minZ:o-f,maxZ:o+.06,name:"cabin-front-left"},{minX:Ye/2+.04,maxX:s+.12,minZ:o-f,maxZ:o+.06,name:"cabin-front-right"},{minX:-s-.12,maxX:s+.12,minZ:a-.06,maxZ:a+f,name:"cabin-back"},{minX:Gt.leftX-.06,maxX:Gt.leftX+f+.06,minZ:-r-.1,maxZ:r+.1,name:"cabin-left"},{minX:Gt.rightX-f-.06,maxX:Gt.rightX+.06,minZ:-r-.1,maxZ:r+.1,name:"cabin-right"},{minX:De.x-De.width/2-.18,maxX:De.x+De.width/2,minZ:De.z-De.depth/2-.18,maxZ:De.z+De.depth/2+.18,name:"chimney"},{minX:re.postX-.16,maxX:re.postX+.16,minZ:ht-.16,maxZ:ht+.16,name:"porch-post-right"},{minX:-2.85-.16,maxX:-2.85+.16,minZ:ht-.16,maxZ:ht+.16,name:"porch-post-left"},{minX:-te-.02,maxX:-1.14,minZ:xt-.1,maxZ:xt+.1,name:"porch-rail-front-left"},{minX:1.14,maxX:te+.02,minZ:xt-.1,maxZ:xt+.1,name:"porch-rail-front-right"},{minX:te-.16,maxX:te+.02,minZ:3.3,maxZ:xt+.1,name:"porch-rail-right"},{minX:-te-.02,maxX:-te+.16,minZ:3.3,maxZ:xt+.1,name:"porch-rail-left"},{minX:-1.86,maxX:-.7,minZ:3.38,maxZ:3.86,name:"porch-bench"},{minX:4.22,maxX:5.1,minZ:1.35,maxZ:2.65,name:"woodpile-right"},{minX:-4.92,maxX:-4.3,minZ:.44,maxZ:1.56,name:"woodpile-left"}],Un=[Qt.logs,Qt.plank,Qt.shingle,Qt.stone,Qt.trimDark,Qt.trim,Qt.core].filter(Boolean),$e={env:{season:"autumn",weather:"clear",hour:17.2,timeMode:"manual",isNight:!1,windowGlow:!0,overcast:0},elapsed:0,doorOpen:!1,doorAngle:0,smokeLevel:0,smoke:0,glow:0,rain:0,snow:0,lantern:0,wet:0,smokeTarget:0,glowTarget:0,rainTarget:0,snowTarget:0,lanternTarget:0,wetTarget:0};function yi(L){if(L.isNight)return 1;const ne=L.hour??12;return ne>=20||ne<5.5?1:ne>=17?cs(17,20,ne):ne<8?1-cs(5.5,8,ne):0}function Di(){const L=$e.env,ne=yi(L),de=L.overcast??0,le=L.season==="winter";$e.glowTarget=L.windowGlow?vn(.42+.58*ne+.15*de,0,1):0,$e.lanternTarget=L.windowGlow?vn(.45+.55*ne+.2*de,0,1.1):vn(.18*de,0,.3),$e.rainTarget=L.weather==="rain"||L.weather==="storm"?1:0,$e.snowTarget=le||L.weather==="snow"?1:0,$e.wetTarget=L.weather==="rain"||L.weather==="storm"?1:0,$e.smokeTarget=Math.max($e.smokeLevel,le?.4:0)}function ki(L={}){$e.env={...$e.env,...L},Di()}function er(L){$e.doorOpen=!!L,Vr.doorOpen=$e.doorOpen}function Wl(L){$e.smokeLevel=vn(Number(L)||0,0,1),Di()}const _a=[[Tt.logs,.8,.56],[Tt.trim,.76,.5],[Tt.trimDark,.8,.54],[Tt.plank,.78,.53],[Tt.door,.8,.54],[Tt.stone,.9,.62],[Tt.stoneSoot,.94,.7],[Tt.shingle,.84,.54],[Tt.soffit,.84,.58]],xa=new Map;for(const[L]of _a)xa.set(L,{dry:L.color.clone(),wet:L.color.clone().multiplyScalar(.72)});function tr(L){for(const[ne,de,le]of _a){ne.roughness=Zi(de,le,L);const oe=xa.get(ne);ne.color.copy(oe.dry).lerp(oe.wet,L)}}function Cn(L){$e.smoke+=($e.smokeTarget-$e.smoke)*(1-Math.exp(-L*1.6));const ne=Gt.smokeAnchor,de=$e.smoke;for(let le=0;le<Ln.length;le++){const oe=Ln[le],Fe=(oe.userData.phase+$e.elapsed*.055)%1,nt=Math.sin($e.elapsed*.42+le*1.9)*.5;oe.position.set(ne.x+nt*Fe*1.3+Math.sin($e.elapsed*.3+le)*.16*Fe,ne.y+Fe*5.2,ne.z+Math.cos($e.elapsed*.36+le*2.1)*.28*Fe);const Mt=.55+Fe*2.6;oe.scale.set(Mt,Mt*1.2,1),oe.material.opacity=de*.2*Math.sin(Math.PI*Math.min(1,Fe*1.25))*(1-Fe*.6),oe.visible=de>.01}}function Ni(L=.016,ne){ne&&($e.env=ne),Di();const de=vn(L,0,.1);$e.elapsed+=de;const le=Fe=>1-Math.exp(-de*Fe),oe=$e.doorOpen?1.62:0;$e.doorAngle+=(oe-$e.doorAngle)*le(6.5),Yt.rotation.y=$e.doorAngle,$e.glow+=($e.glowTarget-$e.glow)*le(2.2),$e.rain+=($e.rainTarget-$e.rain)*le(2),$e.snow+=($e.snowTarget-$e.snow)*le(1.8),$e.lantern+=($e.lanternTarget-$e.lantern)*le(3),$e.wet+=($e.wetTarget-$e.wet)*le(1.2),Ct.emissiveIntensity=$e.glow*2.3,Ct.opacity=.3+$e.glow*.58;const Ce=.86+.1*Math.sin($e.elapsed*9.7)+.05*Math.sin($e.elapsed*17.3+1.3)+.035*Math.sin($e.elapsed*29.1+.6);mn.intensity=$e.lantern*11*Ce,Tt.lanternGlass.emissiveIntensity=.45+$e.lantern*.85*Ce,mt.material.opacity=(.035+$e.lantern*.14)*Ce,mt.visible=mt.material.opacity>.005,$e.rain>.01&&(Oe.offset.y=(Oe.offset.y-de*.45)%1),Zt&&(Zt.visible=$e.rain>.01,Tt.rain.opacity=$e.rain*.85),wn&&(wn.visible=$e.snow>.01,Tt.snow.opacity=vn($e.snow,0,1),Tt.snow.depthWrite=$e.snow>.5),Math.abs($e.wet-tr.last)>.002&&(tr($e.wet),tr.last=$e.wet),Cn(de)}tr.last=0,ki($e.env),Ni(0,$e.env),$e.glow=$e.glowTarget,$e.rain=$e.rainTarget,$e.snow=$e.snowTarget,$e.lantern=$e.lanternTarget,$e.wet=$e.wetTarget,tr($e.wet),tr.last=$e.wet,Ct.emissiveIntensity=$e.glow*2.3,Ct.opacity=.3+$e.glow*.58,wn&&(wn.visible=$e.snow>.01,Tt.snow.opacity=vn($e.snow,0,1)),Zt&&(Zt.visible=$e.rain>.01,Tt.rain.opacity=$e.rain*.85),Yt.rotation.y=$e.doorAngle;const Vr={group:t,colliders:dn,cameraOccluders:Un,setEnvironment:ki,setDoorOpen:er,setSmokeLevel:Wl,update:Ni,doorOpen:!1,doorAnchor:new A(Gt.doorAnchor.x,Gt.doorAnchor.y,Gt.doorAnchor.z),interiorDoorAnchor:new A(Gt.interiorDoorAnchor.x,Gt.interiorDoorAnchor.y,Gt.interiorDoorAnchor.z),clickables:n,smokeAnchor:new A(Gt.smokeAnchor.x,Gt.smokeAnchor.y,Gt.smokeAnchor.z),lanternAnchor:new A(Pt.x,Pt.y,Pt.z),meshes:Qt,materials:Tt};return Vr}const Gn=Gt.floorY,es=.05,On=Gn+es,Wi=as.halfX,Xi=as.halfZ,pi=Gn+as.height,In=as.furniture,dr=-Xi,Vn=Xi,co=-Wi,uo=Wi,Hf=new A,Vf=new ys,Wf=new Ss,Ix=new A(1,1,1),Xf=new Mn;function Dx(i,e=0,t=0,n=0,s=0,r=0,o=0){return Wf.set(s,r,o),Vf.setFromEuler(Wf),Hf.set(e,t,n),Xf.compose(Hf,Vf,Ix),i.applyMatrix4(Xf),i}function jn(i=!1){const e=[],t=new Set(["position","normal","uv"]),n={add(s,r=0,o=0,a=0,c=0,l=0,u=0,d="#8a8a8a"){Dx(s,r,o,a,c,l,u);let f=s;if(f.index){const h=f.toNonIndexed();f.dispose(),f=h}for(const h of Object.keys(f.attributes))(h==="color"&&!i||h!=="color"&&!t.has(h))&&f.deleteAttribute(h);if(i){const h=f.attributes.position.count,g=new Float32Array(h*3),v=new ke(d);for(let m=0;m<h;m++)g[m*3]=v.r,g[m*3+1]=v.g,g[m*3+2]=v.b;f.setAttribute("color",new Wn(g,3))}if(f.attributes.normal||f.computeVertexNormals(),!f.attributes.uv){const h=f.attributes.position.count;f.setAttribute("uv",new Wn(new Float32Array(h*2),2))}return e.push(f),n},box(s,r,o,a,c,l,u=0,d=0,f=0,h){return n.add(new Zn(s,r,o),a,c,l,u,d,f,h)},cyl(s,r,o,a,c,l,u,d=0,f=0,h=0,g){return n.add(new ei(s,r,o,a),c,l,u,d,f,h,g)},build(s,r=null,o=!1,a=!0){if(!e.length)return null;let c=null;try{c=Cs(e,!1)}catch{c=null}if(!c){const u=new Jt;for(const d of e){const f=new Ut(d,s);f.castShadow=o,f.receiveShadow=a,u.add(f)}return e.length=0,r&&r.add(u),u}e.forEach(u=>u.dispose());const l=new Ut(c,s);return l.castShadow=o,l.receiveShadow=a,r&&r.add(l),l}};return n}function Ot(i,e,t,n,s,r,o,a,c=0,l=0,u=0,d=!0,f=!0){const h=new Ut(new Zn(e,t,n),s);return h.position.set(r,o,a),h.rotation.set(c,l,u),h.castShadow=d,h.receiveShadow=f,i.add(h),h}function ai(i,e,t,n,s,r,o,a,c,l=0,u=0,d=0,f=!0,h=!0,g=2){const v=Math.min(s,e/2-1e-4,t/2-1e-4,n/2-1e-4),m=new Ut(new os(e,t,n,g,v),r);return m.position.set(o,a,c),m.rotation.set(l,u,d),m.castShadow=f,m.receiveShadow=h,i.add(m),m}function hn(i,e,t,n,s,r,o,a,c,l=0,u=0,d=0,f=!0,h=!0,g=!1){const v=new Ut(new ei(e,t,n,s,1,g),r);return v.position.set(o,a,c),v.rotation.set(l,u,d),v.castShadow=f,v.receiveShadow=h,i.add(v),v}function Vi(i,e,t,n,s,r,o,a=!0,c=!0){const l=e.map(([d,f])=>new je(d,f)),u=new Ut(new ih(l,t),n);return u.position.set(s,r,o),u.castShadow=a,u.receiveShadow=c,i.add(u),u}function Xs(i,e,t,n=.42){const s=new ns({map:i.contact,transparent:!0,opacity:n,depthWrite:!1,color:"#000000"}),r=new Ut(new ii(e,t),s);return r.rotation.x=-Math.PI/2,r.renderOrder=1,r}function Nx(){return Sn(1024,768,(i,e,t)=>{const n=Ht(501);i.fillStyle="#362720",i.fillRect(0,0,e,t),i.fillStyle="#7d4330",i.fillRect(30,30,e-60,t-60),i.fillStyle="#6d3b2b",i.fillRect(88,88,e-176,t-176),i.strokeStyle="#c8a878",i.lineWidth=7,i.strokeRect(62,62,e-124,t-124),i.lineWidth=3,i.strokeStyle="rgba(200,168,120,.55)",i.strokeRect(108,108,e-216,t-216);const s=(r,o,a,c,l)=>{i.beginPath(),i.moveTo(r,o-c),i.lineTo(r+a,o),i.lineTo(r,o+c),i.lineTo(r-a,o),i.closePath(),i.fillStyle=l,i.fill()};for(let r=120;r<e-100;r+=86)s(r,74,17,12,"#c8a878"),s(r,t-74,17,12,"#c8a878");for(let r=140;r<t-100;r+=86)s(74,r,12,17,"#c8a878"),s(e-74,r,12,17,"#c8a878");for(let r=0;r<3;r++){const o=e*(.24+r*.26),a=t*.5;s(o,a,64,96,"#3f2a22"),s(o,a,52,80,"#b98a4e"),s(o,a,38,60,"#5a3527"),s(o,a,20,32,"#d6c3a0"),s(o,a,8,14,"#8a4a34"),i.strokeStyle="rgba(214,195,160,.7)",i.lineWidth=4;for(let c=0;c<8;c++){const l=c/8*Ai;i.beginPath(),i.arc(o+Math.cos(l)*82,a+Math.sin(l)*122,7,l,l+2.1),i.stroke()}}for(let r=190;r<t-150;r+=92)for(let o=180;o<e-150;o+=92){if(Math.abs(o-e*.5)<120&&Math.abs(r-t*.5)<130)continue;const a=(Math.round(o/92)+Math.round(r/92))%2===0;s(o,r,14,21,a?"#c8a878":"#4c2f25"),i.fillStyle="rgba(214,195,160,.55)";for(let c=0;c<4;c++){const l=c/4*Ai+.4;i.beginPath(),i.arc(o+Math.cos(l)*26,r+Math.sin(l)*34,2.6,0,Ai),i.fill()}}for(let r=0;r<46;r++){const o=140+n()*(e-280),a=150+n()*(t-300);Math.abs(a-t/2)<130||(i.strokeStyle=n()>.5?"rgba(200,168,120,.5)":"rgba(90,53,39,.7)",i.lineWidth=3,i.beginPath(),i.moveTo(o-8,a),i.lineTo(o+8,a),i.moveTo(o,a-8),i.lineTo(o,a+8),i.stroke())}for(let r=0;r<t;r+=3)i.fillStyle=r%6===0?"rgba(0,0,0,.075)":"rgba(255,238,208,.045)",i.fillRect(0,r,e,1);for(let r=0;r<e;r+=4)i.fillStyle=r%8===0?"rgba(0,0,0,.05)":"rgba(255,240,214,.035)",i.fillRect(r,0,1,t);for(let r=0;r<22;r++){const o=n()*e,a=n()*t,c=y(n,40,190),l=i.createRadialGradient(o,a,0,o,a,c);l.addColorStop(0,`rgba(255,222,178,${y(n,.02,.07)})`),l.addColorStop(1,"rgba(255,222,178,0)"),i.fillStyle=l,i.fillRect(o-c,a-c,c*2,c*2)}li(i,e,t,n,.055)})}function Ux(){return Sn(512,256,(i,e,t)=>{const n=Ht(511);i.fillStyle="#4a3527",i.fillRect(0,0,e,t);for(let s=0;s<t;s+=20){const r=s/20%2===0?0:13;for(let o=-20;o<e+20;o+=26){const a=o+r;i.beginPath(),i.ellipse(a,s+10,16,11,0,0,Ai);const c=n();i.fillStyle=c>.66?"#8a6a44":c>.33?"#63492f":"#a3835a",i.fill(),i.strokeStyle="rgba(40,26,14,.45)",i.lineWidth=2,i.stroke(),i.beginPath(),i.ellipse(a-3,s+7,11,5,0,0,Ai),i.fillStyle="rgba(255,236,200,.12)",i.fill()}}li(i,e,t,n,.05)})}function Fx(){return Sn(512,512,(i,e,t)=>{const n=Ht(502),s=["#b39471","#c3ad8a","#97845f","#a88a63","#8d8a6a","#bda684","#9c7a5a","#b0a17c"];i.fillStyle="#c3ad8a",i.fillRect(0,0,e,t);const r=4,o=e/r;for(let a=0;a<r;a++)for(let c=0;c<r;c++){i.fillStyle=s[Math.floor(n()*s.length)%s.length],i.fillRect(c*o,a*o,o,o),i.globalAlpha=.08;for(let l=0;l<o;l+=4)i.fillStyle="#000",i.fillRect(c*o,a*o+l,o,1);for(let l=0;l<o;l+=4)i.fillStyle="#fff",i.fillRect(c*o+l,a*o,1,o);i.globalAlpha=1,i.strokeStyle="rgba(226,210,182,.55)",i.lineWidth=2,i.setLineDash([7,6]),i.strokeRect(c*o+7,a*o+7,o-14,o-14),i.setLineDash([])}i.strokeStyle="rgba(74,52,32,.18)",i.lineWidth=2;for(let a=-t;a<e+t;a+=64)i.beginPath(),i.moveTo(a,0),i.lineTo(a+t,t),i.stroke(),i.beginPath(),i.moveTo(a+t,0),i.lineTo(a,t),i.stroke();for(let a=0;a<30;a++){const c=n()*e,l=n()*t,u=y(n,30,130),d=i.createRadialGradient(c,l,0,c,l,u);d.addColorStop(0,`rgba(255,240,214,${y(n,.02,.07)})`),d.addColorStop(1,"rgba(255,240,214,0)"),i.fillStyle=d,i.fillRect(c-u,l-u,u*2,u*2)}li(i,e,t,n,.05)})}function Ox(){return Sn(256,512,(i,e,t)=>{const n=Ht(503);i.fillStyle="#b08f5e",i.fillRect(0,0,e,t);for(let s=0;s<e;s+=4)i.fillStyle=s%8===0?"rgba(0,0,0,.055)":"rgba(255,246,222,.05)",i.fillRect(s,0,1,t);for(let s=14;s<e;s+=46)i.fillStyle="rgba(96,66,38,.18)",i.fillRect(s,0,9,t),i.fillStyle="rgba(236,214,168,.16)",i.fillRect(s+9,0,2,t);i.fillStyle="rgba(122,92,58,.5)",i.fillRect(0,t-46,e,46),i.fillStyle="rgba(232,210,164,.55)",i.fillRect(0,t-50,e,3),i.fillStyle="rgba(90,64,38,.45)",i.fillRect(0,18,e,16);for(let s=4;s<e;s+=14)i.fillStyle="rgba(60,42,24,.4)",i.fillRect(s,22,4,5);for(let s=0;s<900;s++)i.fillStyle=n()>.5?"rgba(255,246,224,.05)":"rgba(0,0,0,.045)",i.fillRect(n()*e,n()*t,y(n,1,7),1);li(i,e,t,n,.03)})}function zx(){return Sn(256,256,(i,e,t)=>{const n=Ht(504);i.fillStyle="#8f4f38",i.fillRect(0,0,e,t);for(let s=0;s<t;s+=32)i.fillStyle="#d6c3a0",i.fillRect(0,s+8,e,9),i.fillStyle="#4c5a44",i.fillRect(0,s+21,e,5),i.fillStyle="rgba(40,24,16,.35)",i.fillRect(0,s+29,e,3);for(let s=0;s<1600;s++)i.fillStyle=n()>.5?"rgba(255,240,215,.07)":"rgba(0,0,0,.05)",i.fillRect(n()*e,n()*t,y(n,1,6),1);li(i,e,t,n,.04)})}function Bx(){return Sn(256,256,(i,e,t)=>{const n=Ht(505);i.fillStyle="#9a7746",i.fillRect(0,0,e,t),i.lineWidth=5;for(let s=-t;s<e+t;s+=13)i.strokeStyle=s%2===0?"rgba(64,42,20,.5)":"rgba(236,208,158,.35)",i.beginPath(),i.moveTo(s,0),i.lineTo(s+t,t),i.stroke();for(let s=-t;s<e+t;s+=17)i.strokeStyle="rgba(210,178,124,.22)",i.lineWidth=3,i.beginPath(),i.moveTo(s+t,0),i.lineTo(s,t),i.stroke();for(let s=0;s<t;s+=64)i.fillStyle="rgba(72,48,24,.3)",i.fillRect(0,s,e,6);li(i,e,t,n,.06)})}function kx(){return Sn(64,128,(i,e,t)=>{const n=Ht(506);i.fillStyle="#e7e2d6",i.fillRect(0,0,e,t);for(let r=0;r<500;r++)i.fillStyle=n()>.5?"rgba(255,255,255,.16)":"rgba(0,0,0,.09)",i.fillRect(n()*e,n()*t,1,y(n,1,3));i.fillStyle="rgba(255,252,240,.95)",i.fillRect(0,10,e,6),i.fillRect(0,t-18,e,6),i.fillRect(0,t-27,e,3),i.fillStyle="rgba(255,250,235,.5)",i.fillRect(e*.18,t*.34,e*.64,t*.3),i.fillStyle="rgba(40,30,20,.55)";for(let r=0;r<3;r++)i.fillRect(e*.26,t*(.4+r*.075),e*.48,2);const s=i.createLinearGradient(0,0,e,0);s.addColorStop(0,"rgba(0,0,0,.28)"),s.addColorStop(.15,"rgba(0,0,0,0)"),s.addColorStop(.85,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,.28)"),i.fillStyle=s,i.fillRect(0,0,e,t)},{wrapS:on,wrapT:on})}function Ic(i){return Sn(512,384,(e,t,n)=>{const s=Ht(600+i);if(i===0){let o=e.createLinearGradient(0,0,0,n);o.addColorStop(0,"#2f2f38"),o.addColorStop(.42,"#6e5a52"),o.addColorStop(.62,"#c08a58"),o.addColorStop(.78,"#e0b070"),o.addColorStop(1,"#3e3128"),e.fillStyle=o,e.fillRect(0,0,t,n),o=e.createRadialGradient(t*.62,n*.63,0,t*.62,n*.63,t*.23),o.addColorStop(0,"rgba(255,240,205,.9)"),o.addColorStop(.35,"rgba(255,205,140,.35)"),o.addColorStop(1,"rgba(255,190,120,0)"),e.fillStyle=o,e.fillRect(0,0,t,n),e.fillStyle="rgba(56,48,48,.75)",e.beginPath(),e.moveTo(0,n*.72);for(let a=0;a<=t;a+=24)e.lineTo(a,n*.72+Math.sin(a*.02)*12+s()*8);e.lineTo(t,n),e.lineTo(0,n),e.fill();for(let a=0;a<22;a++){const c=s()*t,l=n*y(s,.3,.62),u=`rgba(${30+s()*20},${26+s()*16},${22+s()*12},${y(s,.55,.9)})`;e.fillStyle=u,e.fillRect(c-2,n-l,y(s,2,5),l);for(let d=0;d<4;d++){const f=n-l*(.45+d*.16),h=l*y(s,.12,.3);e.beginPath(),e.moveTo(c,f-l*.14),e.lineTo(c+h,f),e.lineTo(c-h,f+y(s,2,8)),e.closePath(),e.fill()}}e.fillStyle="rgba(238,196,138,.16)",e.fillRect(0,n*.62,t,n*.2)}else if(i===1){e.fillStyle="#d8c6a2",e.fillRect(0,0,t,n);for(let o=0;o<60;o++){const a=s()*t,c=s()*n,l=y(s,16,120),u=e.createRadialGradient(a,c,0,a,c,l);u.addColorStop(0,`rgba(120,88,48,${y(s,.02,.08)})`),u.addColorStop(1,"rgba(120,88,48,0)"),e.fillStyle=u,e.fillRect(a-l,c-l,l*2,l*2)}e.strokeStyle="rgba(74,58,36,.85)",e.lineWidth=2.5,e.beginPath(),e.moveTo(t*.5,n*.85),e.bezierCurveTo(t*.46,n*.55,t*.56,n*.36,t*.5,n*.15),e.stroke();for(let o=0;o<9;o++){const a=.2+o*.075,c=o%2===0?1:-1,l=n*(.85-a*.7);e.save(),e.translate(t*.5,l),e.rotate(c*.7),e.beginPath(),e.ellipse(c*t*.09,0,t*.085,t*.03,0,0,Ai),e.strokeStyle="rgba(74,58,36,.7)",e.lineWidth=2,e.stroke(),e.fillStyle=`rgba(${110+o*6},${116+o*2},${70+o*3},.25)`,e.fill(),e.restore()}e.fillStyle="rgba(80,62,40,.5)";for(let o=0;o<3;o++)e.fillRect(t*.12,n*.88+o*6,t*.24,1.6)}else{let o=e.createLinearGradient(0,0,0,n);o.addColorStop(0,"#b9c2c4"),o.addColorStop(.45,"#d9cdb8"),o.addColorStop(.7,"#c8a878"),o.addColorStop(1,"#5c5a4a"),e.fillStyle=o,e.fillRect(0,0,t,n);for(let a=0;a<4;a++){e.fillStyle=`rgba(${70+a*26},${72+a*24},${66+a*20},${.65-a*.14})`,e.beginPath(),e.moveTo(0,n);for(let c=0;c<=t;c+=16){const l=n*(.42+a*.09)-Math.sin(c*.011+a*2.1)*n*.1-s()*6;e.lineTo(c,l)}e.lineTo(t,n),e.fill()}e.fillStyle="rgba(240,238,225,.22)",e.fillRect(0,n*.56,t,n*.18)}const r=e.createRadialGradient(t/2,n/2,t*.24,t/2,n/2,t*.72);r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(26,18,10,.45)"),e.fillStyle=r,e.fillRect(0,0,t,n),li(e,t,n,s,.05)},{wrapS:on,wrapT:on})}function Gx(){const i={};i.floor=As({size:1024,seed:71,base:"#6a472a",light:"#b4885a",dark:"#2c1a0d",planks:9,plankGap:.016,repeat:[3.4,2.5]}),i.ceiling=As({size:512,seed:73,base:"#3f2c1b",light:"#7d5b38",dark:"#1d1108",planks:8,repeat:[3,3.4]}),i.beam=As({size:512,seed:75,base:"#45301d",light:"#8a6540",dark:"#1f120a",repeat:[1,3]}),i.trim=As({size:512,seed:77,base:"#432c1b",light:"#8a6742",dark:"#1e1108"}),i.furniture=As({size:512,seed:79,base:"#5b3d25",light:"#a87c4d",dark:"#2a180c"}),i.lightWood=As({size:256,seed:83,base:"#8a6740",light:"#c9a571",dark:"#4a3018"}),i.darkWood=As({size:512,seed:85,base:"#332215",light:"#654a2e",dark:"#160d06"}),i.stone=Rl({size:512,seed:91,base:"#57534b",light:"#94897a",dark:"#24231e",repeat:[2,2]}),i.bark=Ru({size:256,seed:94,base:"#4e3a26",dark:"#241a10",light:"#7e6040",repeat:[2,1]}),i.rug=Nx(),i.entryRug=Ux(),i.quilt=Fx(),i.curtain=Ox(),i.wool=zx(),i.wicker=Bx(),i.bookSpine=kx(),i.art=[Ic(0),Ic(1),Ic(2)],i.linen=il({size:256,color:"#c9b391",repeat:[2,2]}),i.linenOchre=il({size:256,color:"#b08b56",repeat:[2,2]}),i.moss=il({size:256,color:"#566244",repeat:[2,2]}),i.bone=il({size:256,color:"#d6c7ac",repeat:[3,3]}),i.contact=Dr({size:128,color:"0,0,0"}),i.glow=D2({size:128}),i.flame=N2({size:128}),i.smoke=oh({size:128}),i.ember=Dr({size:64,color:"255,158,68"}),i.dust=Dr({size:64,color:"255,232,190"});const e=n=>new sn({roughness:.85,metalness:0,...n}),t={floor:e({map:i.floor,roughness:.58,metalness:.02}),ceiling:e({map:i.ceiling,roughness:.88}),beam:e({map:i.beam,roughness:.78}),trim:e({map:i.trim,roughness:.72}),furniture:e({map:i.furniture,roughness:.66}),furnitureDark:e({map:i.darkWood,roughness:.7}),lightWood:e({map:i.lightWood,roughness:.62}),carved:e({map:i.lightWood,roughness:.48}),stone:e({map:i.stone,roughness:.94}),bark:e({map:i.bark,roughness:.95}),stoneHearth:e({map:i.stone,color:"#cfc8bb",roughness:.9}),stoneDark:e({map:i.stone,color:"#6c6459",roughness:.95}),soot:e({color:"#100d0a",roughness:.99}),iron:e({color:"#26231f",roughness:.6,metalness:.62}),brass:e({color:"#a8813f",roughness:.32,metalness:.82}),copper:e({color:"#9a5a34",roughness:.38,metalness:.78}),pewter:e({color:"#6f6d64",roughness:.4,metalness:.72}),ceramicBone:e({color:"#d6c6a8",roughness:.46}),ceramicMoss:e({color:"#7f8a68",roughness:.5}),ceramicRust:e({color:"#9a5b3c",roughness:.55}),linen:e({map:i.linen,roughness:.95}),linenOchre:e({map:i.linenOchre,roughness:.95}),moss:e({map:i.moss,roughness:.95}),boneFab:e({map:i.bone,roughness:.96}),wool:e({map:i.wool,roughness:.98}),quilt:e({map:i.quilt,roughness:.95}),rug:e({map:i.rug,roughness:.98}),entryRug:e({map:i.entryRug,roughness:.98}),curtain:e({map:i.curtain,roughness:.96,side:Bn}),wicker:e({map:i.wicker,roughness:.92}),paper:e({color:"#e2d4b4",roughness:.9}),wax:e({color:"#e8dcc2",roughness:.55,emissive:new ke("#3a2714"),emissiveIntensity:.12}),charred:e({color:"#1a110b",roughness:.97,emissive:new ke("#ff4208"),emissiveIntensity:0}),ember:e({color:"#2a120a",roughness:.9,emissive:new ke("#ff6a1f"),emissiveIntensity:0}),leather:e({color:"#5b3a24",roughness:.58}),clay:e({color:"#9c6244",roughness:.85}),plant:e({color:"#5f7346",roughness:.85,side:Bn}),book:e({map:i.bookSpine,roughness:.82}),art0:new sn({map:i.art[0],roughness:.62}),art1:new sn({map:i.art[1],roughness:.7}),art2:new sn({map:i.art[2],roughness:.62})};return t.flame=new ns({map:i.flame,transparent:!0,blending:Pi,depthWrite:!1,color:"#ffc27a",opacity:.9,side:Bn,toneMapped:!1}),t.flameOuter=new ns({map:i.flame,transparent:!0,blending:Pi,depthWrite:!1,color:"#ff7a24",opacity:.55,side:Bn,toneMapped:!1}),t.candleFlame=new ns({map:i.flame,transparent:!0,blending:Pi,depthWrite:!1,color:"#ffe0a6",opacity:.95,side:Bn,toneMapped:!1}),t.candleGlow=new Or({map:i.glow,color:"#ffb066",transparent:!0,opacity:.3,depthWrite:!1,blending:Pi}),t.fireGlow=new ns({map:i.glow,transparent:!0,blending:Pi,depthWrite:!1,color:"#ff8a3c",opacity:0,toneMapped:!1}),t.contactShadow=new ns({map:i.contact,transparent:!0,opacity:.4,depthWrite:!1,color:"#000000"}),{T:i,M:t}}function Hx({scene:i,callbacks:e={}}={}){const t={showPanel:()=>{},hidePanel:()=>{},notify:()=>{},...e},{T:n,M:s}=Gx(),r=new Jt;r.name="interior",i.add(r);const o=[],a=[],c=[],l=[],u=Ht(4242);let d=0,f="third",h={season:"autumn",weather:"clear",hour:17.2,timeMode:"manual",isNight:!1,windowGlow:!1,overcast:0},g=!1,v=0,m=!0,p=1,b=!0,P=1,S=!1,T=null,E=0,U=null,M=null,C=null,F=null,k=null,V=null,ie=[],G=null,Q=[],we=null,re=null,Pe=null,ye=[],Te=null,Ie=null;const yt=[],Et=[];let jt=null;const W=new ke("#ffb977"),lt=new ke("#f2ead9"),Se=new ke("#7f93b8"),$=new ke("#ffc178"),Ee={id:"bird-note",eyebrow:"木鸟 · 书架第三层",title:"给愿意停下来的人",body:["这只鸟是我父亲用一截梨木削成的。他说，木头里住着风；只要有人愿意静下来听，它就会把风放出来。","我离开林子的那年冬天，把它留在了这里。后来每次回来，它都还朝着门的方向——像是在等某个推门进来的人。","如果你读到这里，请替我照看窗边那盏灯。山里的夜很长，赶路的人需要看见一点暖。"],footer:"—— 小屋旧主人 · 于初雪之前"},Ae={fire:0,chandelier:0,window:0,windowColor:new ke("#ffd9ae"),chandelierColor:new ke("#ffc178")};new ke;function Je(){const z=new Ut(new Zn(Wi*2+.3,es,Xi*2+.3),s.floor);z.position.set(0,Gn+es/2-.001,0),z.receiveShadow=!0,z.castShadow=!1,r.add(z);const X=jn(),I=.022;X.box(Wi*2,I,.006,0,On+I/2,dr+.004),X.box(Wi*2,I,.006,0,On+I/2,Vn-.004),X.box(.006,I,Xi*2,co+.004,On+I/2,0),X.box(.006,I,Xi*2,uo-.004,On+I/2,0),X.build(s.soot,r,!1,!1);const O=new Ut(new ii(Wi*2+.34,Xi*2+.34),s.ceiling);O.rotation.x=Math.PI/2,O.position.set(0,pi-.01,0),O.receiveShadow=!0,r.add(O);const N=jn(),q=.15,he=.035,Ue=On+q/2;N.box(Wi*2,q,he,0,Ue,dr+he/2),N.box(Wi*2,q,he,0,Ue,Vn-he/2),N.box(he,q,Xi*2,co+he/2,Ue,0),N.box(he,q,Xi*2,uo-he/2,Ue,0);const ot=.3,_t=.07,at=pi-ot/2-.004;N.box(Wi*2,ot,_t,0,at,dr+_t/2),N.box(Wi*2,ot,_t,0,at,Vn-_t/2),N.box(_t,ot,Xi*2,co+_t/2,at,0),N.box(_t,ot,Xi*2,uo-_t/2,at,0);const Ze=pi-ot-.03;N.box(Wi*2,.055,.105,0,Ze,dr+.0525),N.box(Wi*2,.055,.105,0,Ze,Vn-.0525),N.box(.105,.055,Xi*2,co+.0525,Ze,0),N.box(.105,.055,Xi*2,uo-.0525,Ze,0);const De=.16,ft=pi-On,Nt=On+ft/2;for(const An of[-1,1])for(const Yn of[-1,1])N.box(De,ft,De,An*(Wi-De/2),Nt,Yn*(Xi-De/2));const en=.11,kn=.05;for(const An of[-3.02,1.58])N.box(en,ft,kn,An,Nt,dr+kn/2);for(const An of[-2.5,1.92])N.box(en,ft,kn,co+kn/2,Nt,An);for(const An of[-2.42,2.18])N.box(en,ft,kn,uo-kn/2,Nt,An);for(const An of[-1.42,1.42])N.box(en,ft,kn,An,Nt,Vn-kn/2);N.build(s.trim,r,!1,!0);const Xn=jn();for(const An of[-2.45,0,2.45])Xn.box(.17,.18,Xi*2-.08,An,pi-.1,0);for(const An of[-1.92,1.92])Xn.box(Wi*2-.08,.13,.13,0,pi-.075,An);Xn.build(s.beam,r,!0,!0);const Nn=jn();Nn.add(new ci(.035,.008,5,8),0,pi-.21,1.22,Math.PI/2),Nn.add(new ci(.035,.008,5,8),0,pi-.21,-1.32,Math.PI/2),Nn.add(new ci(.035,.008,5,8),-2.45,pi-.19,1.64,Math.PI/2),Nn.build(s.iron,r,!1,!1);for(const An of Gt.windows)An.face==="front"&&(Ye(An),B(An));ee()}function Ye(z){const X=Gn+z.y,I=X+z.height/2,O=X-z.height/2,N=Vn-.026,q=jn(),he=.1;for(const De of[-1,1])q.box(he,z.height+.22,.052,z.x+De*(z.width/2+he/2),(I+O)/2+.02,N);q.box(z.width+he*2+.06,.11,.052,z.x,I+.055,N),q.box(z.width+he*2+.02,.075,.045,z.x,O-.085,N+.004),q.build(s.trim,r,!1,!0),Ot(r,z.width+.34,.055,.16,s.trim,z.x,O-.028,Vn-.08,0,0,0,!0,!0);const Ue=I+.17,ot=Vn-.205,_t=hn(r,.017,.017,z.width+.62,8,s.brass,z.x,Ue,ot,0,0,Math.PI/2,!1,!0);_t.castShadow=!1;for(const De of[-1,1])hn(r,.03,.03,.05,8,s.brass,z.x+De*(z.width/2+.33),Ue,ot,0,0,Math.PI/2,!1,!0),Ot(r,.03,.06,.2,s.brass,z.x+De*(z.width*.34),Ue,Vn-.115,0,0,0,!1,!0);const at=jn(),Ze=7;for(let De=0;De<Ze;De++){const ft=De/(Ze-1)-.5;at.add(new ci(.026,.006,4,7),z.x+ft*(z.width+.58),Ue,ot,0,0,0)}at.build(s.brass,r,!1,!1)}function xe(z,X,I){const q=new ii(z,X,26,4),he=q.attributes.position;for(let Ue=0;Ue<he.count;Ue++){const ot=he.getX(Ue),_t=he.getY(Ue),at=ot/z+.5,Ze=_t/X+.5,De=.86+.14*Ze,ft=.038*(.3+.7*(1-Ze)),Nt=Math.sin(at*Math.PI*2*I+.5)*ft*Math.sin(Math.PI*vn(at,.02,.98));he.setX(Ue,ot*De),he.setZ(Ue,Nt)}return q.computeVertexNormals(),q}function B(z){const X=Gn+z.y,O=X+z.height/2+.17,N=Vn-.205,q=.78,he=X-z.height/2,ot=z.x>0?On+.055:he-.12,_t=O-ot,at=xe(q,_t,3),Ze={left:null,right:null,win:z,rodY:O,bottom:ot,height:_t,z:N,closedOffset:.315,openOffset:z.width/2+.16,openScale:.36,seed:u()*10};for(const ft of[-1,1]){const Nt=new Jt;Nt.position.set(z.x+ft*Ze.closedOffset,O,N);const en=new Ut(at,s.curtain);en.position.y=-_t/2,en.castShadow=!1,en.receiveShadow=!0,en.userData.interactId=z.x<0?"curtains-left":"curtains-right",Nt.add(en),r.add(Nt),ft<0?Ze.left=Nt:Ze.right=Nt,Ze[ft<0?"leftMesh":"rightMesh"]=en}const De={id:z.x<0?"curtains-left":"curtains-right",label:"窗帘",anchor:new A(z.x,1.78,Vn-.68),radius:2,objects:[Ze.leftMesh,Ze.rightMesh],getPrompt:()=>({key:"E",action:m?"拉上窗帘":"拉开窗帘"}),available:()=>f==="first",action:()=>Tt()};a.push(De),yt.push(Ze)}function ee(){const z=Vn-.026,X=jn(),I=Gt.door.height,O=Gt.door.width,N=Gn+I,q=N+.11;for(const he of[-1,1])X.box(.1,q-On,.052,he*(O/2+.05),(On+q)/2,z);X.box(O+.3,.11,.052,0,N+.055,z),X.build(s.trim,r,!1,!0),Ot(r,O+.14,es+.012,.3,s.furnitureDark,0,Gn+(es+.012)/2,Vn-.13,0,0,0,!1,!0)}function ue(){const z=In.fireplace.z,X=-3.42,I=-3.9,O=(X+I)/2,N=X-I,q=-1.72,he=.48,Ue=-1.11,ot=-.13,_t=Gn+.06,at=Gn+.78,Ze=Gn+.96,De=Gn+1.08,ft=new Jt;ft.name="fireplace",ft.position.y=es,r.add(ft);const Nt=[],en=Ot(ft,1,.03,2.5,s.stoneHearth,-3.5,Gn+.015,z,0,0,0,!1,!0);Nt.push(en);const kn=jn();for(let mt=0;mt<9;mt++){const Qt=-1.84+mt*.3;kn.box(.075,.028,.26,-3.02,Gn+.038,Qt,0,0,0,Ci(u,["#8a8376","#6f695e","#9a9182"]))}kn.build(s.stone,ft,!1,!0);const Xn=jn();Xn.box(N,Ze-Gn,Ue-q,O,(Gn+Ze)/2,(q+Ue)/2),Xn.box(N,Ze-Gn,he-ot,O,(Gn+Ze)/2,(ot+he)/2),Xn.box(N,Ze-at,ot-Ue,O,(at+Ze)/2,z),Xn.build(s.stone,ft,!0,!0);const Nn=jn();Nn.box(.05,at-.38,ot-Ue,-3.865,(.38+at)/2,z),Nn.box(.44,at-.38,.025,O,(.38+at)/2,Ue+.012),Nn.box(.44,at-.38,.025,O,(.38+at)/2,ot-.012),Nn.box(.44,.025,ot-Ue,O,at-.012,z),Nn.build(s.soot,ft,!1,!0);const An=Ot(ft,.44,.03,ot-Ue,s.soot,O,.395,z,0,0,0,!1,!0);Nt.push(An);const Yn=jn(!0),w=["#5c574e","#4b463f","#6a6459","#413d36","#736b5e","#565046","#625b50"];for(const[mt,Qt]of[[(q+Ue)/2,Ue-q],[(ot+he)/2,he-ot]])for(let wn=Gn+.14;wn<Ze-.08;wn+=.19)for(let Zt=mt-Qt/2+.1;Zt<mt+Qt/2-.06;Zt+=y(u,.19,.27)){if(u()<.3)continue;const dn=y(u,.1,.17),Un=y(u,.075,.115),$e=y(u,.008,.02);Yn.box($e,Un,dn,X+$e/2+.001,wn+y(u,-.02,.02),Zt+y(u,-.02,.02),0,0,y(u,-.08,.08),Ci(u,w))}for(let mt=Ue+.07;mt<ot-.02;mt+=y(u,.16,.21)){if(u()<.2)continue;const Qt=y(u,.11,.16),wn=y(u,.11,.16),Zt=y(u,.008,.02);Yn.box(Zt,wn,Qt,X+Zt/2+.001,at+wn*.5+.005,mt,0,0,0,Ci(u,w))}for(let mt=Gn+.08;mt<Ze-.05;mt+=.24){const Qt=y(u,.012,.026);Yn.box(Qt,.16,.2,X+Qt/2+.001,mt+.075,q+.11,0,0,0,Ci(u,w)),Yn.box(Qt,.16,.2,X+Qt/2+.001,mt+.075,he-.11,0,0,0,Ci(u,w))}Yn.build(new sn({vertexColors:!0,roughness:.96,metalness:0}),ft,!1,!0);const Y=Ot(ft,.32,pi-De,1.74,s.stone,-3.74,(De+pi)/2,z,0,0,0,!0,!0);Nt.push(Y);const ge=jn(!0);for(let mt=De+.16;mt<pi-.18;mt+=.34)for(let Qt=z-.72;Qt<z+.72;Qt+=y(u,.34,.46)){if(u()<.25)continue;const wn=y(u,.16,.26),Zt=y(u,.14,.21),dn=y(u,.007,.016);ge.box(dn,Zt,wn,-3.58+dn/2,mt+y(u,-.03,.03),Qt+y(u,-.03,.03),0,0,y(u,-.05,.05),Ci(u,w))}ge.build(new sn({vertexColors:!0,roughness:.96}),ft,!1,!0);const fe=Ot(ft,.6,.13,2.26,s.furniture,-3.6,De-.065,z,0,0,0,!0,!0);Nt.push(fe);const te=jn();for(const mt of[-1.28,.04,z])te.box(.16,.14,.1,-3.52,De-.2,mt+0,0,0,0);te.build(s.furnitureDark,ft,!0,!0);const gt=new Ut(new ii(.86,.22),new ns({map:Sn(128,64,(mt,Qt,wn)=>{const Zt=mt.createLinearGradient(0,0,0,wn);Zt.addColorStop(0,"rgba(10,8,6,.0)"),Zt.addColorStop(.65,"rgba(12,9,6,.30)"),Zt.addColorStop(1,"rgba(10,7,5,.55)"),mt.fillStyle=Zt,mt.fillRect(0,0,Qt,wn)},{wrapS:on,wrapT:on}),transparent:!0,depthWrite:!1,opacity:.8}));gt.rotation.y=Math.PI/2,gt.position.set(-3.413,at+.09,z),ft.add(gt);const ht=jn();ht.box(.055,.055,1.1,X+.004,at+.022,z),ht.box(.055,.045,1.1,X+.004,_t-.02,z),ht.box(.055,at-_t+.06,.055,X+.004,(_t+at)/2,Ue-.018),ht.box(.055,at-_t+.06,.055,X+.004,(_t+at)/2,ot+.018),ht.build(s.iron,ft,!1,!0);const it=(mt,Qt,wn,Zt)=>{const dn=new Jt;return dn.position.set(mt,Qt,wn),dn.scale.setScalar(Zt),Vi(dn,[[.055,0],[.055,.012],[.022,.02],[.016,.06],[.03,.07],[.018,.08],[.02,.11],[.036,.12],[.036,.135]],10,s.brass,0,0,0),hn(dn,.0145,.017,.2,8,s.wax,0,.235,0,0,0,0,!1,!0),He(dn,0,.35,0,.11),ft.add(dn),dn};it(-3.58,De,z-.72,1),it(-3.58,De,z+.3,.85),Vi(ft,[[.052,0],[.062,.02],[.058,.09],[.04,.13],[.036,.16],[.05,.17]],12,s.ceramicRust,-3.58,De,z-.24,!0,!0),Vi(ft,[[.03,0],[.055,.01],[.075,.035],[.07,.05]],12,s.ceramicMoss,-3.58,De,z+.06,!0,!0),ce(.74,.52,s.art0,s.furnitureDark,-3.505,2.18,z,Math.PI/2);const xt=jn();for(const mt of[-1,1])xt.box(.14,.02,.03,O+.02,.455,z+mt*.31),xt.box(.03,.14,.03,O+.1,.5,z+mt*.31),xt.box(.14,.02,.03,-3.55,.455,z+mt*.31);for(let mt=0;mt<3;mt++)xt.box(.02,.02,.68,-3.55+mt*.06,.465,z);xt.build(s.iron,ft,!1,!0);const Rt=[],$t=[{x:-3.6,y:.5,z:z-.1,ry:.12,rz:.02,r:.06,l:.62},{x:-3.62,y:.585,z:z+.07,ry:-.18,rz:-.04,r:.055,l:.56},{x:-3.54,y:.46,z:z-.05,ry:.55,rz:.1,r:.05,l:.48}];for(const mt of $t){const Qt=s.charred.clone();Rt.push(Qt);const wn=hn(ft,mt.r,mt.r*.92,mt.l,8,Qt,mt.x,mt.y,mt.z,Math.PI/2,0,mt.ry,!1,!0);wn.rotation.z=mt.rz,Nt.push(wn)}Q=Rt;for(let mt=0;mt<9;mt++){const Qt=new Ut(new To(y(u,.03,.06),0),s.ember.clone());Qt.position.set(-3.62+y(u,-.06,.1),.41+y(u,0,.03),z+y(u,-.38,.38)),Qt.rotation.set(u()*3,u()*3,u()*3),Qt.castShadow=!1,Qt.receiveShadow=!1,ft.add(Qt),Q.push(Qt.material)}const It=new Pn,bt=new Float32Array(120);for(let mt=0;mt<40;mt++)bt[mt*3]=-3.66+u()*.2,bt[mt*3+1]=.42+u()*.1,bt[mt*3+2]=z+y(u,-.4,.4);It.setAttribute("position",new Wn(bt,3));const Pt=new Lr({map:n.ember,size:.055,transparent:!0,blending:Pi,depthWrite:!1,color:"#ff8a35",opacity:0,sizeAttenuation:!0,toneMapped:!1});G=new wo(It,Pt),ft.add(G);const ln=new Jt;ln.position.set(-3.55,0,z),ft.add(ln);const Yt=[[-.12,.64,-.2,.46,.88,.9],[0,.72,.02,.5,1,1],[-.05,.6,.2,.4,.78,.85],[.06,.78,-.08,.34,.68,.8],[0,.55,-.3,.3,.56,.7]];for(let mt=0;mt<Yt.length;mt++){const[Qt,wn,Zt,dn,Un,$e]=Yt[mt];for(const yi of[-.22,.22]){const Di=mt%2===0?s.flame:s.flameOuter,ki=new Ut(new ii(dn,Un),Di);ki.position.set(-.02,wn,Qt+Zt),ki.rotation.set(0,Math.PI/2+yi,0),ki.renderOrder=5,ln.add(ki),l.push({mesh:ki,baseY:wn,baseScaleX:dn,baseScaleY:Un,phase:u()*Ai,speed:y(u,2.2,3.6),sc:$e})}}const Wt=new Ut(new ii(.28,.3),s.flame);Wt.position.set(-.01,.5,-.02),Wt.rotation.y=Math.PI/2,Wt.renderOrder=6,ln.add(Wt),l.push({mesh:Wt,baseY:.5,baseScaleX:.28,baseScaleY:.3,phase:1.13,speed:2.9,sc:.6}),re=new Ut(new ii(.8,.66),s.fireGlow),re.rotation.y=Math.PI/2,re.position.set(-3.4,.78,z),re.renderOrder=4,ft.add(re),Pe=new Ut(new ii(.6,.74),s.fireGlow.clone()),Pe.rotation.x=-Math.PI/2,Pe.position.set(-3.63,.452,z),Pe.renderOrder=4,ft.add(Pe),we=new Ut(new ii(1.55,1.15),s.fireGlow.clone()),we.rotation.x=-Math.PI/2,we.position.set(-2.98,On+.034,z),we.renderOrder=3,r.add(we);const Dn=new Pn,wt=new Float32Array(108);ie=[];for(let mt=0;mt<36;mt++)wt[mt*3]=-3.6,wt[mt*3+1]=.45,wt[mt*3+2]=z,ie.push({x:-3.58,y:.45+u()*.2,z:z+y(u,-.3,.3),vx:y(u,-.05,.12),vy:y(u,.25,.7),vz:y(u,-.1,.1),life:u(),max:y(u,.6,1.5),wob:u()*Ai});Dn.setAttribute("position",new Wn(wt,3));const Ln=new Lr({map:n.ember,size:.034,transparent:!0,blending:Pi,depthWrite:!1,color:"#ffb066",opacity:0,sizeAttenuation:!0,toneMapped:!1});V=new wo(Dn,Ln),V.frustumCulled=!1,ft.add(V),ve(-3.34,On+.03,z+.86),M=new yc("#ff9a4d",0,7,.94,.9,1.45),M.position.set(-3.02,1.02,z),M.target.position.set(-1.15,.52,z),M.castShadow=!1,M.name="interior-fire-light",ft.add(M,M.target);const mn={id:"fireplace",label:"壁炉",anchor:new A(-3.18,1.1,z),radius:2.35,objects:Nt,getPrompt:()=>({key:"E",action:g?"熄灭壁炉":"点燃壁炉"}),available:()=>!0,action:()=>Ct()};for(const mt of Nt)mt.userData.interactId="fireplace";a.push(mn);const qn=Xs(n,2.4,1.6,.5);qn.position.set(-3,On+.0025,z),r.add(qn),o.push({minX:-3.98,maxX:-2.96,minZ:-1.92,maxZ:.68,name:"fireplace"})}function ve(z,X,I){const O=new Jt;O.position.set(z,X,I),Vi(O,[[.085,0],[.1,.02],[.105,.07],[.095,.13],[.062,.17],[.052,.185],[.058,.195]],14,s.copper,0,0,0,!0,!0),hn(O,.022,.028,.028,8,s.brass,0,.205,0,0,0,0,!1,!0),hn(O,.018,.03,.16,8,s.copper,.1,.14,0,0,0,-1,!1,!0);const N=new Ut(new ci(.075,.008,6,14,Math.PI),s.iron);N.position.set(-.005,.19,0),N.rotation.set(0,0,0),O.add(N),hn(O,.11,.12,.02,12,s.iron,0,-.01,0,0,0,0,!1,!0);for(let q=0;q<4;q++){const he=new Or({map:n.smoke,color:"#cfc4b4",transparent:!0,opacity:0,depthWrite:!1,blending:Mo}),Ue=new bo(he);Ue.position.set(.01,.24+q*.12,0),Ue.scale.setScalar(.1+q*.05),Ue.renderOrder=7,O.add(Ue),ye.push({sprite:Ue,phase:q/4,base:.1+q*.05})}return r.add(O),O}function He(z,X,I,O,N=1){const q=new Jt;q.position.set(X,I,O),q.scale.setScalar(N);const he=s.candleFlame,Ue=new Ut(new ii(.075,.13),he);Ue.position.y=.05;const ot=new Ut(new ii(.075,.13),he);ot.position.y=.05,ot.rotation.y=Math.PI/2,Ue.renderOrder=8,ot.renderOrder=8,q.add(Ue,ot);const _t=new bo(s.candleGlow);return _t.position.y=.06,_t.scale.setScalar(.3),_t.renderOrder=7,q.add(_t),z.add(q),c.push({mesh:q,baseScale:N,phase:u()*Ai,speed:y(u,5,9),baseY:0,kind:"candle"}),q}function vt(){const z=In.bookshelf.x,X=In.bookshelf.z,I=In.bookshelf.w,O=In.bookshelf.d,N=In.bookshelf.h,q=Gn,he=new Jt;he.name="bookshelf",he.position.y=es,r.add(he);const Ue=.055,ot=.038,_t=I-Ue*2-.02,at=X-O/2+.045;Ot(he,I,.11,O+.02,s.furnitureDark,z,q+.055,X);for(const It of[-1,1])Ot(he,Ue,N-.1,O,z+It*(I/2-Ue/2),q+.1+(N-.1)/2,X);Ot(he,I-.06,N-.13,.025,s.darkWood,z,q+.1+(N-.13)/2,X-O/2+.028),Ot(he,I+.04,.045,O+.035,s.furniture,z,q+N-.0225,X),Ot(he,I+.02,.035,.04,s.furnitureDark,z,q+N-.06,X+O/2-.02);const Ze=jn();for(let It=0;It<5;It++)Ze.box(I/5-.012,N-.14,.012,z-I/2+I/10+It*(I/5),q+.1+(N-.13)/2,X-O/2+.042);Ze.build(s.furniture,he,!1,!0);const De=[.15,.56,.97,1.38,1.79],ft=jn();ft.box(.035,N-.16,O-.05,z,q+.1+(N-.14)/2,X);for(const It of De)ft.box(_t,ot,O-.04,z,q+It-ot/2,X);ft.build(s.furnitureDark,he,!0,!0);const Nt=["#7c3f2e","#8a6a3e","#5c6b4a","#3f4a52","#a8814f","#6d4432","#8f8352","#57352c","#7d8464","#b39a6a","#4d5c50","#9a5a3c","#c4b48c","#6a4a5a","#87926e"],en=[],kn=O/2,Xn=(It,bt,Pt,ln={})=>{let Yt=It;for(;Yt<bt-.035;){const Wt=y(u,.024,.062);if(Yt+Wt>bt)break;if(ln.skip&&Yt+Wt>ln.skip[0]&&Yt<ln.skip[1]){Yt=ln.skip[1];continue}const Dn=y(u,ln.hMin??.19,ln.hMax??.29),wt=y(u,.16,kn+.1),Ln=u()<.13?y(u,-.09,.09):0;en.push({x:Yt+Wt/2,y:q+Pt+Dn/2*Math.cos(Ln)+Wt/2*Math.abs(Math.sin(Ln)),z:at+wt/2+y(u,0,.02),w:Wt,h:Dn,d:wt,rz:Ln,ry:y(u,-.02,.02),color:Ci(u,Nt)}),Yt+=Wt+y(u,.0015,.006),u()<.055&&(Yt+=y(u,.02,.055))}},Nn=z-_t/2+.02,An=z-.03,Yn=z+.03,w=z+_t/2-.02;Xn(Nn,An,.56),Xn(Yn,w,.56),Xn(Nn,An,.97),Xn(Yn,w,.97,{skip:[-1.06,-.92]}),Xn(Nn,An,1.38),Xn(Yn,w,1.38,{skip:[-1.19,-.86]}),Xn(Nn,An,1.79,{hMin:.16,hMax:.22}),Xn(Yn,w,1.79,{hMin:.15,hMax:.21,skip:[-1.2,-1.02]});const Y=new Zn(1,1,1),ge=new fl(Y,s.book,en.length),fe=new Mn,te=new ys,gt=new Ss,ht=new ke;en.forEach((It,bt)=>{gt.set(0,It.ry,It.rz),te.setFromEuler(gt),fe.compose(new A(It.x,It.y,It.z),te,new A(It.w,It.h,It.d)),ge.setMatrixAt(bt,fe),ht.set(It.color).offsetHSL(y(u,-.02,.02),y(u,-.07,.07),y(u,-.05,.05)),ge.setColorAt(bt,ht)}),ge.instanceMatrix.needsUpdate=!0,ge.instanceColor&&(ge.instanceColor.needsUpdate=!0),ge.castShadow=!1,ge.receiveShadow=!0,he.add(ge);const it=(It,bt,Pt,ln,Yt,Wt,Dn,wt=0)=>{const Ln=Ot(he,ln,Yt,Wt,s.book,It,bt+Yt/2,Pt,0,wt,0,!1,!0);return Ln.material=s.book,Ln};it(z-.42,q+.15,at+.13,.2,.035,.15,"#7c3f2e",.06),it(z-.41,q+.185,at+.14,.18,.028,.13,"#c4b48c",-.04),it(z-.43,q+.213,at+.12,.16,.03,.12,"#4d5c50",.1);const xt=(It,bt,Pt,ln)=>{const Yt=new Jt;Yt.position.set(It,q+.15,bt),hn(Yt,Pt,Pt*.86,ln,14,s.wicker,0,ln/2,0,0,0,0,!1,!0,!0);const Wt=new Ut(new ci(Pt,.012,6,16),s.wicker);return Wt.rotation.x=Math.PI/2,Wt.position.y=ln,Yt.add(Wt),hn(Yt,Pt*.98,Pt*.98,.012,14,s.fabricDark??s.furnitureDark,0,ln-.01,0,0,0,0,!1,!0),he.add(Yt),Yt};xt(z+.34,X-.02,.16,.24),xt(z+.66,X-.03,.13,.2),Vi(he,[[.032,0],[.04,.01],[.052,.05],[.045,.09],[.05,.1]],10,s.ceramicMoss,z+.58,q+.97,at+.1,!1,!0),hn(he,.025,.028,.07,10,s.ceramicRust,z-1.02,q+.97+.035,at+.12,0,0,0,!1,!0),Vi(he,[[.05,0],[.065,.02],[.06,.1],[.045,.13],[.05,.145]],12,s.clay,z+.42,q+N,at+.12,!0,!0);const Rt=jn();for(let It=0;It<7;It++){const bt=u()*Ai,Pt=y(u,.1,.5);Rt.cyl(.0022,.0035,y(u,.2,.34),4,z+.42+Math.cos(bt)*.02,q+N+.14+.12,at+.12+Math.sin(bt)*.02,Math.cos(bt)*Pt,0,Math.sin(bt)*Pt)}Rt.build(s.furnitureDark,he,!1,!0),ce(.34,.26,s.art1,s.furnitureDark,z-1.62,q+N+.14,X-.02,0,-.1,he),pt(z+.5,On+1.38,X+.02),o.push({minX:z-I/2-.02,maxX:z+I/2+.02,minZ:X-O/2-.02,maxZ:X+O/2+.03,name:"bookshelf"});const $t=Xs(n,1.9,.7,.38);$t.position.set(z,On+.004,X+.25),r.add($t)}function pt(z,X,I){const O=new Jt;O.position.set(z,X,I),E=.55,O.rotation.y=E;const N=[];N.push(hn(O,.052,.06,.022,12,s.furnitureDark,0,.011,0,0,0,0,!0,!0));const q=ai(O,.078,.098,.15,.038,s.carved,0,.085,-.012,.06,0,0,!0,!0,3);N.push(q);const he=ai(O,.062,.07,.07,.03,s.carved,0,.078,.045,-.15,0,0,!0,!0,3);N.push(he);const Ue=new Ut(new mi(.042,14,10),s.carved);Ue.position.set(0,.152,.062),Ue.castShadow=!0,O.add(Ue),N.push(Ue);const ot=new Ut(new Po(.013,.05,7),s.furnitureDark);ot.rotation.x=Math.PI/2,ot.position.set(0,.146,.108),ot.castShadow=!0,O.add(ot),N.push(ot);const _t=Ot(O,.045,.012,.11,s.carved,0,.098,-.105,-.42,0,0,!0,!0);N.push(_t);for(const De of[-1,1]){const ft=ai(O,.016,.052,.088,.008,s.carved,De*.042,.092,-.008,0,0,De*.16,!0,!0,2);N.push(ft)}for(const De of[-1,1]){const ft=new Ut(new mi(.0075,6,5),s.soot);ft.position.set(De*.028,.16,.082),O.add(ft)}const at=jn();for(let De=0;De<3;De++)at.box(.03,.002,.002,0,.128-De*.016,.048+De*.004,0,0,0);at.build(s.furnitureDark,O,!1,!1);for(const De of[-1,1])hn(O,.005,.006,.03,5,s.furnitureDark,De*.019,.032,.012,0,0,0,!1,!0);T=O,r.add(O);const Ze={id:"bird-note",label:"木鸟",anchor:new A(z,X+.13,I+.14),radius:1.95,objects:N,getPrompt:()=>({key:"E",action:"端详木鸟"}),available:()=>!0,action:()=>j()};for(const De of N)De.userData.interactId="bird-note";a.push(Ze)}function ce(z,X,I,O,N,q,he,Ue=0,ot=0,_t=r){const at=new Jt;at.position.set(N,q,he),at.rotation.y=Ue,ot&&(at.rotation.x=ot);const Ze=Math.min(.055,z*.09),De=.035;return Ot(at,z+Ze*2,Ze,De,O,0,X/2+Ze/2,0,0,0,0,!1,!0),Ot(at,z+Ze*2,Ze,De,O,0,-X/2-Ze/2,0,0,0,0,!1,!0),Ot(at,Ze,X,De,O,-z/2-Ze/2,0,0,0,0,0,!1,!0),Ot(at,Ze,X,De,O,z/2+Ze/2,0,0,0,0,0,!1,!0),Ot(at,z+.012,X+.012,.012,s.paper,0,0,-.016,0,0,0,!1,!0),Ot(at,z-.03,X-.03,.006,I,0,0,.002,0,0,0,!1,!0),_t.add(at),at}function Xe(){const z=In.bed.x,X=In.bed.z,I=In.bed.w,O=In.bed.d,N=Gn,q=new Jt;q.name="bed",q.position.y=es,r.add(q);const he=X-O/2+.055,Ue=X+O/2-.055,ot=I/2-.05,_t=N+.64,at=[[he,1.44],[he,1.44],[Ue,.98],[Ue,.98]],Ze=[z-ot,z+ot,z-ot,z+ot];for(let Nt=0;Nt<4;Nt++){const en=N+at[Nt][1];Ot(q,.095,en-N,.095,s.furniture,Ze[Nt],(N+en)/2,at[Nt][0],0,0,0,!0,!0),Vi(q,[[.055,0],[.07,.02],[.045,.06],[.05,.09],[.03,.12],[.005,.13]],10,s.furnitureDark,Ze[Nt],en,at[Nt][0],!1,!0)}Ot(q,I-.16,.11,.055,s.furniture,z,N+1.34,he,0,0,0,!0,!0),Ot(q,I-.16,.09,.05,s.furniture,z,N+.6,he,0,0,0,!0,!0);for(let Nt=0;Nt<5;Nt++){const en=z-(I-.4)/2+Nt*((I-.4)/4);hn(q,.021,.021,.66,7,s.furnitureDark,en,N+.97,he,0,0,0,!1,!0)}Ot(q,I-.16,.1,.05,s.furniture,z,N+.92,Ue,0,0,0,!0,!0),Ot(q,I-.16,.08,.05,s.furniture,z,N+.52,Ue,0,0,0,!0,!0);for(let Nt=0;Nt<3;Nt++){const en=z-(I-.52)/2+Nt*((I-.52)/2);hn(q,.023,.023,.32,7,s.furnitureDark,en,N+.72,Ue,0,0,0,!1,!0)}for(const Nt of[-1,1])Ot(q,.06,.16,O-.15,s.furniture,z+Nt*ot,N+.33,X,0,0,0,!0,!0);ai(q,I-.12,.24,O-.18,.05,s.linen,z,N+.52,X,0,0,0,!0,!0,3),Ot(q,I-.16,.02,.34,s.boneFab,z,_t-.02,X-.72,0,0,0,!1,!0),ai(q,I-.06,.075,1.34,.03,s.quilt,z,_t+.02,X+.33,0,0,0,!0,!0,2);for(const Nt of[-1,1])Ot(q,.055,.48,1.34,s.quilt,z+Nt*(I/2-.03),_t-.22,X+.33,.02,0,Nt*.045,!1,!0);Ot(q,I-.06,.42,.055,s.quilt,z,_t-.19,X+.33+.67,-.07,0,0,!1,!0),ai(q,.62,.18,.42,.075,s.boneFab,z-.38,_t+.15,X-.72,-.42,0,.02,!0,!0,3),ai(q,.62,.18,.42,.075,s.linen,z+.38,_t+.15,X-.7,-.38,0,-.03,!0,!0,3),ai(q,.4,.13,.3,.06,s.wool,z,_t+.14,X-.42,-.25,.1,0,!0,!0,3),Ot(q,.74,.065,.44,s.wool,z,_t+.075,X+.7,0,0,0,!0,!0),Ot(q,.68,.055,.4,s.boneFab,z,_t+.135,X+.7,0,0,0,!0,!0),Ot(q,.7,.3,.05,s.wool,z,_t-.08,Ue-.02,.1,0,0,!1,!0);const De=new Jt;De.position.set(z-.48,N,X+.34),hn(De,.19,.165,.24,14,s.wicker,0,.12,0,0,0,0,!1,!0,!0),hn(De,.185,.185,.012,14,s.furnitureDark,0,.235,0,0,0,0,!1,!0),q.add(De),ai(q,.1,.055,.23,.03,s.leather,z-1.02,N+.028,Ue+.38,0,.22,0,!1,!0,2),ai(q,.1,.055,.23,.03,s.leather,z-.86,N+.028,Ue+.46,0,.05,0,!1,!0,2),o.push({minX:z-I/2-.02,maxX:z+I/2+.02,minZ:X-O/2-.02,maxZ:X+O/2+.02,name:"bed"});const ft=Xs(n,I+.5,O+.4,.42);ft.position.set(z,On+.004,X),r.add(ft)}function D(){const z=In.rug;Ot(r,z.w,.014,z.d,s.rug,z.x,On+.0115,z.z,0,0,0,!1,!0);const X=jn();for(const O of[-1,1]){const N=z.x+O*z.w/2;for(let q=0;q<22;q++){const he=z.z-z.d/2+.06+q*((z.d-.12)/21);X.box(y(u,.05,.08),.006,.012,N+O*.035,On+.0045,he+y(u,-.006,.006),0,y(u,-.15,.15),0)}}X.build(s.boneFab,r,!1,!0);const I=In.entryRug;Ot(r,I.w,.008,I.d,s.entryRug,I.x,On+.0065,I.z,0,0,0,!1,!0)}function Ve(z,X,I,O,N,q=0){const he=new Jt;he.position.set(X,I,O),he.rotation.y=q,hn(he,.038,.034,.09,12,N,0,.045,0,0,0,0,!1,!0),hn(he,.031,.031,.004,12,new sn({color:"#2b1a10",roughness:.35}),0,.078,0,0,0,0,!1,!0);const Ue=new Ut(new ci(.026,.006,5,10,Math.PI*1.25),N);return Ue.position.set(.038,.05,0),Ue.rotation.z=-.5,Ue.castShadow=!1,he.add(Ue),z.add(he),he}function tt(z,X,I,O,N=0){const q=new Jt;return q.position.set(X,I,O),q.rotation.y=N,Ot(q,.22,.035,.16,s.book,0,.0175,0,0,0,0,!1,!0),Ot(q,.2,.03,.15,s.book,.01,.05,.005,0,.06,0,!1,!0),Ot(q,.17,.028,.13,s.leather,-.012,.079,0,0,-.05,0,!1,!0),z.add(q),q}function R(){const z=In.table.x,X=In.table.z,I=1.48,O=.9,N=Gn,q=N+.76,he=new Jt;he.name="table",he.position.y=es,r.add(he),ai(he,I,.055,O,.012,s.furniture,z,q-.0275,X,0,0,0,!0,!0,2);for(const Ze of[-1,1])Ot(he,.035,.05,O+.01,s.furnitureDark,z+Ze*(I/2-.0175),q-.027,X,0,0,0,!0,!0);const Ue=[[.055,0],[.055,.035],[.038,.06],[.052,.1],[.055,.15],[.042,.22],[.048,.3],[.043,.52],[.052,.55],[.048,.6],[.052,.64],[.046,.7]];for(const Ze of[-1,1])for(const De of[-1,1])Vi(he,Ue,9,s.furnitureDark,z+Ze*(I/2-.13),N,X+De*(O/2-.115),!0,!0);for(const Ze of[-1,1])Ot(he,I-.32,.085,.035,s.furnitureDark,z,N+.66,X+Ze*(O/2-.075),0,0,0,!0,!0),Ot(he,.035,.085,O-.3,s.furnitureDark,z+Ze*(I/2-.075),N+.66,X,0,0,0,!0,!0);Ot(he,I-.34,.05,.06,s.furnitureDark,z,N+.32,X,0,0,0,!0,!0),Ot(he,.06,.05,O-.32,s.furnitureDark,z,N+.32,X,0,0,0,!0,!0);const ot=new Jt;ot.position.set(z-.26,q,X-.18),Vi(ot,[[.055,0],[.05,.01],[.022,.03],[.018,.05],[.032,.055]],10,s.brass,0,0,0,!1,!0),hn(ot,.018,.019,.2,8,s.wax,0,.155,0,0,0,0,!1,!0),He(ot,0,.265,0,.9),he.add(ot),Ve(he,z+.2,q,X-.22,s.ceramicBone,-.5),Ve(he,z+.34,q,X+.06,s.ceramicMoss,1.4);const _t=new Jt;_t.position.set(z-.2,q,X+.2),Vi(_t,[[.055,0],[.1,.015],[.135,.055],[.13,.075]],14,s.furniture,0,0,0,!0,!0);for(let Ze=0;Ze<3;Ze++){const De=Ze/3*Ai+.4,ft=new Ut(new mi(.036,12,9),new sn({color:Ze===1?"#8a3a2a":"#6f2c22",roughness:.55}));ft.position.set(Math.cos(De)*.045,.105,Math.sin(De)*.045),ft.castShadow=!1,ft.receiveShadow=!0,_t.add(ft)}he.add(_t),tt(he,z+.42,q,X+.28,.5),Ot(he,.34,.006,.24,s.boneFab,z-.28,q+.003,X+.02,0,.03,0,!1,!0),o.push({minX:z-In.table.w/2-.02,maxX:z+In.table.w/2+.02,minZ:X-In.table.d/2-.02,maxZ:X+In.table.d/2+.02,name:"table"});const at=Xs(n,I+.5,O+.5,.42);at.position.set(z,On+.0195,X),r.add(at),_(z-.48,X-.7,0),_(z+.52,X+.67,Math.PI)}function _(z,X,I){const O=Gn,N=new Jt;N.position.set(z,O+es,X),N.rotation.y=I,r.add(N),Ot(N,.46,.045,.43,s.furniture,0,.455,0,0,0,0,!0,!0),Ot(N,.42,.075,.38,s.furnitureDark,0,.395,0,0,0,0,!0,!0);for(const Ue of[-1,1])hn(N,.026,.021,.45,7,s.furnitureDark,Ue*.19,.225,.17,0,0,0,!0,!0),Ot(N,.042,.95,.042,s.furniture,Ue*.19,.475,-.175,.02,0,0,!0,!0);Ot(N,.42,.075,.045,s.furniture,0,.9,-.175,.02,0,0,!0,!0),Ot(N,.4,.045,.03,s.furniture,0,.7,-.175,.02,0,0,!1,!0),Ot(N,.4,.045,.03,s.furniture,0,.57,-.175,.02,0,0,!1,!0);for(const Ue of[-1,1])Ot(N,.032,.03,.39,s.furnitureDark,Ue*.19,.17,0,0,0,0,!1,!0);Ot(N,.4,.03,.032,s.furnitureDark,0,.22,.17,0,0,0,!1,!0),ai(N,.4,.035,.37,.015,s.boneFab,0,.493,.005,0,0,0,!1,!0,2);const q=Xs(n,.72,.68,.38),he=Math.abs(z-In.rug.x)<In.rug.w/2&&Math.abs(X-In.rug.z)<In.rug.d/2;q.position.set(z,he?On+.0195:On+.0025,X),r.add(q),o.push({minX:z-.27,maxX:z+.27,minZ:X-.27,maxZ:X+.27,name:"chair"})}function J(){const I=Gn,O=new Jt;O.name="side-table",O.position.y=es,r.add(O),Ot(O,.44,.045,.4,s.furniture,-3.28,I+.6,-2.42,0,0,0,!0,!0),Ot(O,.4,.06,.36,s.furnitureDark,-3.28,I+.555,-2.42,0,0,0,!0,!0);for(const he of[-1,1])for(const Ue of[-1,1])hn(O,.022,.018,.56,6,s.furnitureDark,-3.28+he*.17,I+.28,-2.42+Ue*.15,0,0,he*.01,!0,!0);Ot(O,.34,.03,.3,s.furnitureDark,-3.28,I+.2,-2.42,0,0,0,!1,!0);const N=new Jt;N.position.set(-3.28-.08,I+.6225,-2.42-.05),Vi(N,[[.045,0],[.04,.012],[.018,.025],[.03,.035]],9,s.iron,0,0,0,!1,!0),hn(N,.015,.016,.17,8,s.wax,0,.12,0,0,0,0,!1,!0),He(N,0,.215,0,.85),O.add(N),tt(O,-3.28+.06,I+.6225,-2.42+.02,-.4),Ve(O,-3.28+.13,I+.6225,-2.42-.13,s.ceramicRust,.8),o.push({minX:-3.28-.28,maxX:-3.28+.28,minZ:-2.42-.26,maxZ:-2.42+.26,name:"side-table"});const q=Xs(n,.7,.65,.35);q.position.set(-3.28,On+.0025,-2.42),r.add(q)}function pe(){const z=In.armchair.x,X=In.armchair.z,I=Gn,O=Math.atan2(In.fireplace.x-z,In.fireplace.z-X),N=new Jt;N.name="armchair",N.position.set(z,I+es,X),N.rotation.y=O,r.add(N);for(const Nt of[-1,1])for(const en of[-1,1])Vi(N,[[.038,0],[.045,.02],[.03,.05],[.038,.07],[.026,.12],[.032,.15]],8,s.furnitureDark,Nt*.32,0,en*.3,!0,!0);Ot(N,.8,.18,.78,s.furnitureDark,0,.22,0,0,0,0,!0,!0),ai(N,.74,.18,.7,.06,s.moss,0,.39,.02,0,0,0,!0,!0,3),Ot(N,.8,.58,.13,s.furnitureDark,0,.62,-.33,-.07,0,0,!0,!0),ai(N,.7,.6,.18,.07,s.moss,0,.63,-.24,-.09,0,0,!0,!0,3);const q=new Ut(new ei(.048,.048,.64,10),s.moss);q.rotation.z=Math.PI/2,q.position.set(0,.925,-.25),q.castShadow=!0,N.add(q);for(const Nt of[-1,1]){ai(N,.15,.19,.72,.06,s.moss,Nt*.335,.46,.02,0,0,0,!0,!0,3);const en=new Ut(new ei(.052,.052,.68,10),s.moss);en.rotation.x=Math.PI/2,en.position.set(Nt*.335,.555,.02),en.castShadow=!0,N.add(en),Ot(N,.05,.3,.05,s.furnitureDark,Nt*.335,.25,.33,0,0,0,!0,!0)}ai(N,.32,.05,.42,.02,s.wool,.335,.605,0,0,.04,.03,!0,!0,2),Ot(N,.1,.34,.05,s.wool,.335,.43,.22,.06,.03,0,!1,!0),ai(N,.42,.3,.14,.06,s.boneFab,0,.67,-.1,-.22,.04,0,!0,!0,3),Ot(N,.2,.035,.15,s.leather,-.12,.49,.12,0,.3,0,!1,!0);const he=Math.abs(Math.cos(O)),Ue=Math.abs(Math.sin(O)),ot=.42*he+.43*Ue,_t=.42*Ue+.43*he;o.push({minX:z-ot,maxX:z+ot,minZ:X-_t,maxZ:X+_t,name:"armchair"});const at=Xs(n,1.4,1.4,.4);at.position.set(z,On+.0025,X),r.add(at);const Ze=new Jt;Ze.position.set(-3.55,On,-2.02),hn(Ze,.17,.145,.22,12,s.wicker,0,.11,0,0,0,0,!1,!0,!0),hn(Ze,.165,.165,.01,12,s.furnitureDark,0,.215,0,0,0,0,!1,!0);const De=new Ut(new mi(.075,10,8),new sn({color:"#a86a4a",roughness:.95}));De.position.set(.01,.24,.02),Ze.add(De);const ft=new Ut(new mi(.06,10,8),new sn({color:"#7d8464",roughness:.95}));ft.position.set(-.02,.3,-.06),Ze.add(ft),r.add(Ze)}function Re(){const z=In.chandelier.x,X=In.chandelier.z,I=2.9;hn(r,.1,.12,.035,12,s.iron,z,pi-.205,X,0,0,0,!1,!0),hn(r,.1,.1,.01,12,s.iron,z,pi-.19,X,0,0,0,!1,!0);const O=jn();for(let Ze=0;Ze<3;Ze++)O.add(new ci(.032,.007,5,8),z,pi-.255-Ze*.075,X,0,Ze%2?Math.PI/2:0,0);O.build(s.iron,r,!1,!1);const N=new Jt;N.position.set(z,I,X),r.add(N),U=N;const q=new Ut(new ci(.32,.024,8,32),s.furniture);q.rotation.x=Math.PI/2,q.castShadow=!0,N.add(q);for(let Ze=0;Ze<4;Ze++){const De=Ze/4*Math.PI*2+Math.PI/4;Ot(N,.32,.02,.026,s.furnitureDark,Math.cos(De)*.16,.006,Math.sin(De)*.16,0,-De,0,!1,!0)}hn(N,.052,.048,.06,12,s.furniture,0,.01,0,0,0,0,!0,!0),hn(N,.018,.018,.09,6,s.iron,0,.075,0,0,0,0,!1,!0),Et.length=0;for(let Ze=0;Ze<5;Ze++){const De=-Math.PI/2+Ze/5*Math.PI*2,ft=Math.cos(De)*.275,Nt=Math.sin(De)*.275;hn(N,.044,.035,.02,10,s.iron,ft,.016,Nt,0,0,0,!1,!0);const en=y(u,.07,.11);hn(N,.014,.016,en,8,s.wax,ft,.026+en/2,Nt,0,0,0,!1,!0);const kn=He(N,ft,.03+en,Nt,.78);kn.userData.chandelier=!0,Et.push(kn)}const he=jn(!0);for(const Ze of[-2.2,.6,1.9]){he.cyl(.004,.004,.12,4,Math.cos(Ze)*.32,-.05,Math.sin(Ze)*.32,Math.cos(Ze)*.4,0,Math.sin(Ze)*.4,"#6b5a35");for(let De=0;De<3;De++)he.add(new To(.015,0),Math.cos(Ze)*.32+y(u,-.01,.01),-.11-De*.03,Math.sin(Ze)*.32+y(u,-.01,.01),0,0,0,De===1?"#8a7a4a":"#6f7a4a")}he.build(new sn({vertexColors:!0,roughness:.9}),N,!1,!1);const Ue=new Or({map:n.glow,color:"#ffbf7a",transparent:!0,opacity:.22,depthWrite:!1,blending:Pi}),ot=new bo(Ue);ot.scale.setScalar(.48),ot.position.y=.05,N.add(ot),jt=ot;const _t=[q],at={id:"chandelier",label:"烛台",anchor:new A(z,I,X),radius:2.5,objects:_t,getPrompt:()=>({key:"E",action:b?"吹灭烛台":"点亮烛台"}),available:()=>!0,action:()=>Xt()};q.userData.interactId="chandelier",a.push(at)}function et(){const X=(Gt.windows.find(De=>De.id==="front-left")||Gt.windows[0]).x,I=Vn-.32,O=Gn,N=1.5,q=.42,he=O+.46,Ue=new Jt;Ue.name="window-bench",Ue.position.y=es,r.add(Ue),Ot(Ue,N,.07,q,s.furniture,X,he-.035,I,0,0,0,!0,!0);for(const De of[-1,1])Ot(Ue,N-.28,.08,.04,s.furnitureDark,X,he-.11,I+De*(q/2-.05),0,0,0,!0,!0);for(const De of[-1,1])for(const ft of[-1,1])Vi(Ue,[[.036,0],[.044,.02],[.028,.05],[.036,.16],[.026,.3],[.038,.34],[.032,.4]],8,s.furnitureDark,X+De*(N/2-.08),O,I+ft*(q/2-.08),!0,!0);Ot(Ue,N-.18,.03,q-.12,s.furnitureDark,X,O+.15,I,0,0,0,!1,!0);const ot=new Jt;ot.position.set(X-.44,O+.165,I),hn(ot,.15,.13,.18,12,s.wicker,0,.09,0,0,0,0,!1,!0,!0),hn(ot,.145,.145,.01,12,s.furnitureDark,0,.18,0,0,0,0,!1,!0),Ue.add(ot);for(let De=0;De<3;De++)hn(Ue,.045,.045,.42,7,s.bark,X+.34+De%2*.09,O+.225+Math.floor(De/2)*.08,I+y(u,-.06,.06),0,0,Math.PI/2,!1,!0);ai(Ue,N-.1,.085,q-.06,.03,s.boneFab,X,he+.045,I,0,0,0,!1,!0,2),Ot(Ue,.4,.075,.38,s.wool,X+.44,he+.125,I-.01,0,.04,0,!1,!0),Ot(Ue,.36,.065,.34,s.boneFab,X+.44,he+.195,I-.01,0,-.03,0,!1,!0),ai(Ue,.34,.3,.12,.05,s.moss,X-.4,he+.2,I+.12,-.32,.1,0,!1,!0,3),ai(Ue,.3,.26,.11,.05,s.wool,X+.02,he+.18,I+.12,-.28,-.12,0,!1,!0,3),tt(Ue,X-.42,he+.09,I-.02,.3),Ve(Ue,X+.12,he+.09,I+.05,s.ceramicBone,.4);const _t=Gt.windows.find(De=>De.id==="front-right"),at=new Jt;at.position.set(_t.x+.38,Gn+_t.y-_t.height/2+.001,Vn-.14),Vi(at,[[.045,0],[.052,.02],[.055,.09],[.06,.1]],10,s.clay,0,0,0,!1,!0);for(let De=0;De<5;De++){const ft=De/5*Ai;hn(at,.004,.006,.18,4,s.plant,Math.cos(ft)*.02,.19,Math.sin(ft)*.02,Math.cos(ft)*.4,0,Math.sin(ft)*.4,!1,!0)}r.add(at),o.push({minX:X-N/2,maxX:X+N/2,minZ:Vn-.55,maxZ:Vn,name:"window-bench"});const Ze=Xs(n,N+.3,q+.3,.36);Ze.position.set(X,On+.0025,I),r.add(Ze)}function Qe(){ce(.86,.6,s.art0,s.furnitureDark,.48,2.02,dr+.028,0),ce(.96,.56,s.art1,s.furnitureDark,In.bed.x,2.3,dr+.028,0),ce(.46,.6,s.art2,s.furnitureDark,uo-.028,1.95,.85,-Math.PI/2);for(const z of[-.28,1.24]){const X=new Jt;X.position.set(z,2.05,dr+.03),Ot(X,.1,.17,.025,s.iron,0,0,0,0,0,0,!1,!0),Ot(X,.025,.025,.13,s.iron,0,.055,.065,0,0,0,!1,!0),hn(X,.028,.034,.05,8,s.iron,0,.085,.125,0,0,0,!1,!0),hn(X,.014,.015,.11,8,s.wax,0,.16,.125,0,0,0,!1,!0),He(X,0,.225,.125,.8),r.add(X)}for(const[z,X]of[[1.45,2.02],[2.25,1.66]]){const I=new Jt;I.position.set(co+.045,X,z),hn(I,.17,.17,.035,14,s.wicker,0,0,0,0,0,Math.PI/2,!1,!0);const O=new Ut(new ci(.17,.014,6,18),s.wicker);O.rotation.y=Math.PI/2,I.add(O),r.add(I)}}function Le(){const z=[[0,pi-.24,1.22],[0,pi-.24,-1.32],[-2.45,pi-.22,1.64]],X=jn(!0);for(const[O,N,q]of z){X.cyl(.004,.004,.11,4,O,N-.055,q,0,0,0,"#6b5a3a");const he=9;for(let Ue=0;Ue<he;Ue++){const ot=Ue/he*Ai+u()*.4,_t=y(u,.12,.42),at=y(u,.2,.34),Ze=O+Math.cos(ot)*.012,De=q+Math.sin(ot)*.012;X.cyl(.0035,.0025,at,4,Ze+Math.cos(ot)*at*.35*Math.sin(_t),N-.1-at/2,De+Math.sin(ot)*at*.35*Math.sin(_t),Math.sin(ot)*_t,0,-Math.cos(ot)*_t,"#6f6242");for(let ft=0;ft<3;ft++){const Nt=.45+ft*.25;X.add(new To(y(u,.008,.016),0),O+Math.cos(ot)*at*Nt*Math.sin(_t)+y(u,-.01,.01),N-.1-at*Nt,q+Math.sin(ot)*at*Nt*Math.sin(_t)+y(u,-.01,.01),0,0,0,Ci(u,["#8a7a4a","#6f7a4a","#9a8a5a","#5f6b45"]))}}}const I=X.build(new sn({vertexColors:!0,roughness:.92}),r,!1,!1);I&&(I.castShadow=!1)}function Oe(){const I=new Jt;I.position.set(-3.52,On,.95),hn(I,.28,.245,.36,14,s.wicker,0,.18,0,0,0,0,!0,!0,!0),hn(I,.285,.285,.012,14,s.furnitureDark,0,.355,0,0,0,0,!1,!0);for(let N=0;N<5;N++){const q=N/5*Ai;hn(I,.052,.052,.52,7,s.bark,Math.cos(q)*.1,.42,Math.sin(q)*.1,y(u,-.15,.15),0,y(u,-.15,.15),!1,!0),N%2===0&&hn(I,.047,.047,.012,7,s.lightWood,Math.cos(q)*.1,.69,Math.sin(q)*.1,y(u,-.15,.15),0,y(u,-.15,.15),!1,!0)}r.add(I),o.push({minX:-3.52-.3,maxX:-3.52+.3,minZ:.95-.3,maxZ:.95+.3,name:"log-basket"});const O=Xs(n,.85,.85,.34);O.position.set(-3.52,On+.0025,.95),r.add(O)}function ct(){Ot(r,.6,.13,.035,s.furnitureDark,1,1.88,Vn-.02,0,0,0,!1,!0);for(const O of[.81,.93,1.05,1.17])hn(r,.011,.013,.075,6,s.furnitureDark,O,1.88-.01,Vn-.055,Math.PI/2,0,0,!1,!0);const X=new Jt;X.position.set(.84,1.88-.2,Vn-.1),X.rotation.x=Math.PI/2,hn(X,.15,.15,.012,16,s.wicker,0,0,0,0,0,0,!1,!0),hn(X,.075,.085,.085,12,s.wicker,0,.045,0,0,0,0,!1,!0),X.rotation.z=.06,r.add(X),Ot(r,.22,.44,.018,s.linen,1.07,1.88-.31,Vn-.055,0,0,.03,!1,!0),Ot(r,.22,.03,.02,s.furnitureDark,1.07,1.88-.1,Vn-.055,0,0,.03,!1,!0);const I=new Jt;I.position.set(-.96,On,Vn-.16),I.rotation.x=-.1,hn(I,.017,.014,1.52,7,s.furniture,0,.86,0,0,0,.03,!1,!0),Ot(I,.11,.06,.06,s.wicker,0,.14,0,0,0,0,!1,!0);for(let O=0;O<7;O++){const N=-.5+O/6*1;hn(I,.005,.012,.3,4,s.wicker,Math.sin(N)*.035,.06,Math.cos(N)*.01,Math.sin(N)*.4,0,0,!1,!0)}r.add(I)}function Ft(){const X=new Pn,I=new Float32Array(240);Ie=[];for(let N=0;N<80;N++){const q=y(u,-2.8,2.8),he=y(u,.55,2.9),Ue=y(u,-2.4,2.4);I[N*3]=q,I[N*3+1]=he,I[N*3+2]=Ue,Ie.push({x:q,y:he,z:Ue,p:u()*Ai,s:y(u,.15,.5)})}X.setAttribute("position",new Wn(I,3));const O=new Lr({map:n.dust,size:.022,transparent:!0,opacity:.32,depthWrite:!1,color:"#ffe2b8",sizeAttenuation:!0,blending:Pi,toneMapped:!1});Te=new wo(X,O),Te.frustumCulled=!1,r.add(Te)}function rt(){C=new C0("#ffc178",0,5,1.4),C.position.set(In.chandelier.x,3.12,In.chandelier.z),C.castShadow=!1,C.name="interior-chandelier-light",r.add(C),F=new yc("#ffd9ae",0,8,1.02,.95,1.6),F.position.set(-2.55,2.1,Vn-.62),F.target.position.set(-.5,.65,-.6),F.castShadow=!1,F.name="interior-window-light-l",r.add(F,F.target),k=new yc("#ffd9ae",0,8,1.02,.95,1.6),k.position.set(2.55,2.1,Vn-.62),k.target.position.set(.5,.65,-.6),k.castShadow=!1,k.name="interior-window-light-r",r.add(k,k.target)}function Be(){const z=h,X=typeof z.hour=="number"?z.hour:17.2,I=vn(z.overcast??(z.weather==="rain"||z.weather==="storm"?.55:z.weather==="snow"?.45:z.weather==="fog"?.4:0),0,1),O=!!z.isNight;let N=0;O||(N=cs(5.4,8.2,X)*(1-cs(17.8,20.4,X)),N=vn(N,0,1));const q=vn(1-Math.abs(X-17.5)/3.2,0,1),he=z.weather==="rain"||z.weather==="storm",Ue=m?1:.42;Ae.window=(O?2:8+30*N)*(1-.5*I)*Ue*(he?.8:1),O?Ae.windowColor.copy(Se):Ae.windowColor.copy(lt).lerp(W,q),Ae.chandelier=b?O?17:8.5+3.5*I+3*(1-N):0,Ae.fire=g?O?55:46:0,Ae.chandelierColor.copy($)}function Ct(){g=!g,Be(),t.notify(g?"炉火燃起来了":"炉火熄灭了")}function Tt(){m=!m,Be(),t.notify(m?"窗帘拉开了":"窗帘合上了")}function Xt(){b=!b,Be(),t.notify(b?"烛台亮了起来":"烛台熄了")}function j(){if(S){S=!1,t.hidePanel();return}S=!0,t.showPanel(Ee)}function Ke(z){v+=((g?1:0)-v)*(1-Math.exp(-z*(g?2.4:6.5))),v<.002&&(v=0),v>1&&(v=1);const I=d,O=.82+.085*Math.sin(I*7.9)+.055*Math.sin(I*14.3+1.7)+.035*Math.sin(I*27.1+.6)+.025*Math.sin(I*43.7+2.2);M&&(M.intensity=Ae.fire*v*O);for(const N of l){const q=.75+.25*Math.sin(I*N.speed+N.phase)+.12*Math.sin(I*N.speed*1.9+N.phase*2.1);N.mesh.scale.set(1+.1*Math.sin(I*N.speed*.7+N.phase),Math.max(.35,q),1),N.mesh.position.y=N.baseY+.018*Math.sin(I*2.2+N.phase),N.mesh.visible=v>.02}s.flame.opacity=.82*v,s.flameOuter.opacity=.45*v,re&&(re.material.opacity=v*(.16+.06*O)),Pe&&(Pe.material.opacity=v*(.42+.14*O)),we&&(we.material.opacity=v*(.2+.07*O)),G&&(G.material.opacity=v*(.55+.25*Math.sin(I*3.1)));for(let N=0;N<Q.length;N++){const q=Q[N];if(!q)continue;const he=.5+.5*Math.sin(I*(1.5+N%5*.7)+N);q.emissiveIntensity=v*(.85+.75*he)+.1}if(V&&(V.visible=v>.05,V.visible)){const N=V.geometry.attributes.position;for(let q=0;q<ie.length;q++){const he=ie[q];he.life-=z*.9,he.life<=0&&(he.life=1,he.x=-3.58,he.y=.52+u()*.18,he.z=In.fireplace.z+y(u,-.3,.3),he.vx=y(u,-.1,.22),he.vy=y(u,.35,.85),he.vz=y(u,-.12,.12),he.wob=u()*Ai);const Ue=z*(.6+he.life);he.x+=(he.vx+Math.sin(I*3+he.wob)*.06)*Ue,he.y+=he.vy*Ue,he.z+=he.vz*Ue,he.y>1.75&&(he.life=0),N.setXYZ(q,he.x,he.y,he.z)}N.needsUpdate=!0,V.material.opacity=.85*v}}function ze(z){const X=1-Math.exp(-z*3.6);P+=((b?1:0)-P)*(1-Math.exp(-z*4.2)),C&&(C.intensity+=(Ae.chandelier*P-C.intensity)*X,C.color.lerp(Ae.chandelierColor,.15));for(const I of[F,k])I&&(I.intensity+=(Ae.window-I.intensity)*X,I.color.lerp(Ae.windowColor,.15))}function St(){for(const z of c){const X=z.baseScale*(.92+.08*Math.sin(d*z.speed+z.phase)+.03*Math.sin(d*z.speed*2.3+z.phase*2));z.mesh.scale.setScalar(X),z.mesh.rotation.y=Math.sin(d*z.speed*.32+z.phase)*.14}}function At(z){const X=m?1:0;p+=(X-p)*(1-Math.exp(-z*3.4)),Math.abs(X-p)<.0015&&(p=X);const I=cs(0,1,p);for(const O of yt){const N=Zi(O.closedOffset,O.openOffset,I),q=Zi(1,O.openScale,I);O.left&&(O.left.position.x=O.win.x-N,O.left.scale.x=q,O.left.rotation.z=Math.sin(d*.9+O.seed)*.006*I,O.left.rotation.x=Math.sin(d*.62+O.seed*2)*.004*I),O.right&&(O.right.position.x=O.win.x+N,O.right.scale.x=q,O.right.rotation.z=-Math.sin(d*.9+O.seed)*.006*I,O.right.rotation.x=Math.sin(d*.62+O.seed*2)*.004*I)}}function qe(z){U&&(U.rotation.z=Math.sin(d*.55)*.006,U.rotation.x=Math.sin(d*.43+1.2)*.004);const X=P>.05;for(const I of Et)I.visible=X;jt&&(jt.material.opacity=.2*P)}function Bt(z){if(!T)return;const X=S?.16:.05;T.rotation.y=E+Math.sin(d*.75+1.2)*X,T.rotation.z=S?Math.sin(d*2.1)*.05:0}function Dt(z){for(let X=0;X<ye.length;X++){const I=ye[X];I.phase=(I.phase+z*.22)%1;const O=I.phase;I.sprite.position.y=.25+O*.55,I.sprite.position.x=.012+Math.sin(O*6.2+X*1.7)*.04*O,I.sprite.scale.setScalar(I.base*(.7+O*1.6));const N=O<.1?O/.1:1-(O-.1)/.9;I.sprite.material.opacity=Math.max(0,.2*N*v)}}function _n(){if(!Te)return;const z=d,X=Te.geometry.attributes.position;for(let I=0;I<Ie.length;I++){const O=Ie[I];X.setXYZ(I,O.x+Math.sin(z*.11*O.s+O.p)*.35,O.y+Math.sin(z*.16*O.s+O.p*2.1)*.22,O.z+Math.cos(z*.09*O.s+O.p)*.35)}X.needsUpdate=!0,Te.material.opacity=.2+.07*Math.sin(z*.4)}function ut(z){!z||typeof z!="object"||(Object.assign(h,z),Be())}function fn(z=.016,X,I={}){const O=Math.min(Math.max(z||0,0),.06);d+=O,X&&(Object.assign(h,X),Be()),I&&I.mode&&(f=I.mode),Ke(O),ze(O),St(),At(O),qe(),Bt(),Dt(O),_n()}return Je(),ue(),vt(),Xe(),D(),R(),J(),pe(),Re(),et(),Qe(),Le(),Oe(),ct(),rt(),Ft(),Be(),{group:r,colliders:o,interactables:a,setEnvironment:ut,update:fn,note:Ee,get fireplaceOn(){return g},get curtainsOpen(){return m},get chandelierOn(){return b},get fireLevel(){return v},setFireplace(z){g=!!z,g&&(v=Math.max(v,.3)),Be()},toggleFireplace:Ct,setCurtains(z){m=!!z,Be()},toggleCurtains:Tt,setChandelier(z){b=!!z,Be()},toggleChandelier:Xt,showBirdNote:j,hideBirdNote(){S=!1,t.hidePanel()},notifyNoteClosed(){S=!1},_debug:{group:r,lights:()=>({fire:M,chandelier:C,windowL:F,windowR:k}),state:()=>({fireplaceOn:g,fireLevel:v,curtainsOpen:m,curtainT:p,chandelierLit:b,birdNoteOpen:S,mode:f})}}}const G0={clear:.04,rain:.72,snow:.56,fog:.74,storm:.94},_l=i=>new Promise(e=>setTimeout(e,i)),Jo=()=>new Promise(i=>requestAnimationFrame(()=>i())),zt={...Ys,activePreset:null,hourTarget:null,windowGlow:!0},Vx=document.getElementById("app"),Wx=document.getElementById("scene-root"),H0=document.createElement("div");H0.id="atmosphere";Vx.appendChild(H0);const Pl=document.createElement("div");Pl.id="scene-transition";document.body.appendChild(Pl);const Xx=document.getElementById("boot-fallback"),Mi=new _2({antialias:!0,powerPreference:"high-performance",alpha:!1,stencil:!1});Mi.setPixelRatio(Math.min(window.devicePixelRatio||1,1.65));Mi.setSize(window.innerWidth,window.innerHeight);Mi.shadowMap.enabled=!0;Mi.shadowMap.type=ta;Mi.toneMapping=Fl;Mi.toneMappingExposure=1;Mi.outputColorSpace=Yi;Mi.domElement.setAttribute("aria-label","林间小屋 三维场景");Wx.appendChild(Mi.domElement);const Oo=new dp,us=new qi(46,window.innerWidth/window.innerHeight,.08,700);us.position.set(0,2.1,17.4);let Ki=!1,Ks=!1,js=!1,mr=null,Ll="",Yf=0,Dc=0;const Hn=E2({onTimePreset:i=>Y0(i),onAutoToggle:i=>q0(i),onTimeInput:i=>Z0(i),onWeatherChange:i=>$0(i),onSeasonChange:i=>K0(i),onOverlayClose:()=>{Ki=!1,Oi?.notifyNoteClosed?.(),Ks||gn?.setInputEnabled(!0),Hn.setPrompt(null)}});Hn.setLoading(.08,"正在拨开林间的雾…");const Ri=A2();Ri.attachUI(document.getElementById("ui-root"));function Yx(){const i=document.getElementById("environment-dock");if(!i||document.getElementById("sound-toggle"))return;const e=document.createElement("div");e.className="dock-divider",e.setAttribute("aria-hidden","true");const t=document.createElement("section");t.className="dock-group dock-group--sound",t.setAttribute("role","group"),t.setAttribute("aria-label","声音");const n=document.createElement("div");n.className="dock-group-label",n.textContent="声音";const s=document.createElement("div");s.className="dock-row";const r=document.createElement("button");r.type="button",r.id="sound-toggle",r.className="dock-btn sound-btn",r.setAttribute("aria-pressed","true"),r.innerHTML=`
    <span class="dock-btn-ic" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 9.5h3.4L12 5.5v13l-4.6-4H4z"/>
        <path class="sound-wave" d="M15.5 8.4a5 5 0 0 1 0 7.2"/>
        <path class="sound-wave" d="M18.3 5.8a9 9 0 0 1 0 12.4"/>
        <path class="sound-slash" d="m15.6 9.6 4.1 4.1"/>
        <path class="sound-slash" d="m19.7 9.6-4.1 4.1"/>
      </svg>
    </span>
    <span class="dock-btn-label">开</span>`;const o=()=>{const a=Ri.muted;r.setAttribute("aria-pressed",a?"false":"true"),r.setAttribute("aria-label",a?"开启环境声音":"关闭环境声音"),r.title=a?"环境声：关（点击开启）":"环境声：开（点击静音）",r.querySelector(".dock-btn-label").textContent=a?"关":"开"};r.addEventListener("click",a=>{a.preventDefault(),Ri.toggleMute()||Ri.playClick(),o(),r.blur()}),s.appendChild(r),t.appendChild(n),t.appendChild(s),i.appendChild(e),i.appendChild(t),o()}Yx();const lh=Z2({scene:Oo,renderer:Mi,camera:us}),Hl=sx({renderer:Mi,scene:Oo,camera:us}),V0={showPanel:i=>Qx(i),hidePanel:()=>ga(),notify:i=>Hn.notify?.(i)},Br=wx({scene:Oo,callbacks:V0}),Ms=Lx({scene:Oo}),Oi=Hx({scene:Oo,callbacks:V0}),gn=lx({scene:Oo,camera:us,domElement:Mi.domElement,outsideColliders:[...Ms.colliders||[],...Br.colliders||[]],interiorColliders:[...Oi.colliders||[]],occluders:[...$f(Ms.cameraOccluders),...$f(Br.cameraOccluders)],callbacks:{onCanvasClick:i=>Kx(i)}});gn.setInputEnabled(!1);const qf=new R0,Nc=new je,ch=[],Il=new Map,Lu=[];function uh(i,e=new A){return i?i.isVector3?i.clone():new A(i.x||0,i.y||0,i.z||0):e.clone()}function Vl(i){if(!i||!i.id)return;const e={...i,anchor:uh(i.anchor),radius:i.radius??Vt.interactDistance,objects:i.objects||[],available:i.available||(()=>!0)};ch.push(e),Il.set(e.id,e);for(const t of e.objects)t&&(t.userData.interactId=e.id,t.traverse?t.traverse(n=>{n.isMesh&&Lu.push(n)}):t.isMesh&&Lu.push(t))}const qx=uh(Gt.doorAnchor),Zx=uh(Gt.interiorDoorAnchor);Vl({id:"cabin-door",label:"木门",anchor:qx,radius:2.7,objects:Ms.clickables||[],available:()=>gn.mode==="third",getPrompt:()=>({key:"E",action:"进入小屋"}),action:()=>hh()});Vl({id:"cabin-exit",label:"木门",anchor:Zx,radius:2.15,objects:[],available:()=>gn.mode==="first",getPrompt:()=>({key:"E",action:"离开小屋"}),action:()=>hh()});for(const i of Oi.interactables||[]){const e=i.available||(()=>!0);Vl({...i,available:()=>gn.mode==="first"&&e()})}for(const i of Br.interactables||[]){const e=i.available||(()=>!0);Vl({...i,available:()=>gn.mode==="third"&&e()})}function $x(){if(!js||Ks||Ki)return null;const i=gn.getInteractionPosition();let e=null,t=1/0;for(const n of ch){let s=!1;try{s=!!n.available()}catch{s=!1}if(!s)continue;const r=i.x-n.anchor.x,o=i.z-n.anchor.z,a=Math.hypot(r,o);a<=n.radius&&a<t&&(e=n,t=a)}return e}function W0(i){if(!i)return null;let e;try{e=i.getPrompt?i.getPrompt():{key:"E",action:i.label||"互动"}}catch{e={key:"E",action:i.label||"互动"}}return typeof e=="string"&&(e={key:"E",action:e}),{...e,id:i.id}}function Dl(i=!1){const e=$x(),t=e?e.id:"";if(!i&&t===Ll){mr=e;return}Ll=t,mr=e,Hn.setPrompt(e?W0(e):null)}function Kx(i){if(!js||Ks||Ki)return;const e=Mi.domElement.getBoundingClientRect();Nc.x=(i.clientX-e.left)/e.width*2-1,Nc.y=-((i.clientY-e.top)/e.height)*2+1,qf.setFromCamera(Nc,us);const t=qf.intersectObjects(Lu,!1);if(!t.length)return;let n=t[0].object,s=null;for(;n;){if(n.userData?.interactId){s=n.userData.interactId;break}n=n.parent}if(!s)return;const r=Il.get(s);if(!r)return;let o=!1;try{o=!!r.available()}catch{o=!1}if(!o)return;const a=gn.getInteractionPosition();if(Math.hypot(a.x-r.anchor.x,a.z-r.anchor.z)>r.radius+1.1){Hn.notify?.("再靠近一些");return}r.action?.()}function Jx(){if(!(!js||Ks)){if(Ki){ga();return}Dl(!0),mr&&mr.action?.()}}async function hh(){!js||Ks||(Ks=!0,gn.setInputEnabled(!1),Hn.setLocked?.(!0),Hn.setPrompt(null),mr=null,Ll="",Pl.classList.add("active"),await _l(430),gn.mode==="third"?(Ms.setDoorOpen?.(!0),Ri.playDoor(!0),gn.enterInterior(),Hn.setMode("first")):(Ms.setDoorOpen?.(!0),Ri.playDoor(!0),gn.exitInterior(),Hn.setMode("third")),await _l(150),Pl.classList.remove("active"),await _l(520),gn.mode==="third"&&setTimeout(()=>{Ms.setDoorOpen?.(!1),Ri.playDoor(!1)},450),Ks=!1,gn.setInputEnabled(!Ki),Hn.setLocked?.(!1),Fs(!0))}function Qx(i){i&&(Ki=!0,gn.setInputEnabled(!1),Hn.setPrompt(null),mr=null,Ll="",Hn.showPanel(i))}function ga(){if(!Ki){Hn.hidePanel();return}Ki=!1,Hn.hidePanel(),Oi.notifyNoteClosed?.(),Ks||gn.setInputEnabled(!0),Fs(!0)}function jx(i=zt.hour){return i<6.3||i>=19.3}function Js(){return zt.hour<7.4||zt.hour>16.55||zt.weather!=="clear"}function Zf(i=zt.hour){return i>=5.5&&i<7.3?"清晨":i>=7.3&&i<16.7?"白天":i>=16.7&&i<19.4?"黄昏":"夜晚"}function eM(i){const e=Math.floor(i)%24,t=Math.floor((i-Math.floor(i))*60);return`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}`}function Eo(){const i=G0[zt.weather]??0;return{season:zt.season,weather:zt.weather,hour:zt.hour,timeMode:zt.timeMode,isNight:jx(),windowGlow:zt.windowGlow,overcast:i}}function No(i=!0){const e=Eo();Ms.setEnvironment?.(e),Oi.setEnvironment?.(e),Br.setEnvironment?.(e)}function Fs(i=!1){const e=performance.now();if(!i&&e-Yf<120)return;Yf=e;const t=Eo();Hn.setEnvironment(t,{phaseLabel:Zf(),timeLabel:Zf(),clock:eM(zt.hour),timeMode:zt.timeMode,preset:zt.activePreset,auto:zt.timeMode==="auto",seasonLabel:_o[zt.season]?.label||zt.season,weatherLabel:xo[zt.weather]?.label||zt.weather})}function X0(i=!0){const e=Js();e!==zt.windowGlow&&(zt.windowGlow=e,i=!0),i&&No(!0),Fs(!0)}function Y0(i){!ml[i]||!ml[i].hour||(zt.timeMode="manual",zt.activePreset=i,zt.hourTarget=ml[i].hour,Fs(!0))}function q0(i){i?(zt.timeMode="auto",zt.activePreset="auto",zt.hourTarget=null):(zt.timeMode="manual",zt.activePreset=null,zt.hourTarget=null),Fs(!0)}function Z0(i){const e=Math.max(0,Math.min(24,Number(i)||0));zt.hour=e%24,zt.timeMode="manual",zt.activePreset=null,zt.hourTarget=null,zt.windowGlow=Js(),No(!1),Fs(!0)}function $0(i){M2.includes(i)&&(zt.weather=i,zt.windowGlow=Js(),X0(!0),Hn.notify?.(`天气 · ${xo[i]?.label||i}`))}function K0(i){x2.includes(i)&&(zt.season=i,X0(!0),Hn.notify?.(`季节 · ${_o[i]?.label||i}`))}const po={hour:zt.hour,season:zt.season,weather:zt.weather,interior:!1};let Nl=performance.now(),Iu=!1;function tM(i){if(zt.timeMode==="auto")zt.hour=(zt.hour+i*(24/260))%24,zt.windowGlow!==Js()&&(zt.windowGlow=Js(),No(!1));else if(zt.hourTarget!==null){const e=zt.hourTarget;let t=((e-zt.hour+24)%24+24)%24;t>12&&(t-=24),Math.abs(t)<.006?(zt.hour=e,zt.hourTarget=null):zt.hour=(zt.hour+t*(1-Math.exp(-i*2.4))+24)%24;const n=Js();n!==zt.windowGlow&&(zt.windowGlow=n,No(!1))}}function nM(i){js&&(Dc+=i,!(Dc<.1)&&(Dc=0,Dl(!1)))}const Ul={ready:!1,state:zt,player:gn,camera:us,get modules(){return{environment:lh,cabin:Ms,interior:Oi,nature:Br,ui:Hn,post:Hl,player:gn,audio:Ri}},getState:()=>({...zt,windowGlow:zt.windowGlow,mode:gn.mode,position:gn.getPosition().toArray()}),setHour(i,e=null){Z0(Number(i)),zt.activePreset=e,Fs(!0)},setPreset:i=>Y0(i),setWeather:i=>$0(i),setSeason:i=>K0(i),setAuto:i=>q0(i),enterCabin:()=>{gn.mode==="third"&&(gn.enterInterior(),Hn.setMode("first"))},exitCabin:()=>{gn.mode==="first"&&(gn.exitInterior(),Hn.setMode("third"))},toggleFire:()=>Oi.setFireplace?.(!Oi.fireplaceOn),setFire:i=>Oi.setFireplace?.(!!i),openBird:()=>{(Il.get("bird-note")||ch.find(e=>e.id.includes("bird")))?.action?.()},closePanel:()=>ga(),interact:i=>Il.get(i)?.action?.(),setInput:i=>gn.setInputEnabled(!!i),teleport:(i,e)=>{gn.setPosition(Number(i),Number(e)),Dl(!0)},closeNote:()=>{const i=document.querySelector("#note-close");i?i.click():ga()},screenshotMode:i=>{i==="first"&&gn.mode!=="first"&&Ul.enterCabin(),i==="third"&&gn.mode!=="third"&&Ul.exitCabin()},getPrompt:()=>mr?W0(mr):null,refreshPrompt:()=>Dl(!0),toggleSound:()=>{const i=Ri.toggleMute(),e=document.getElementById("sound-toggle");if(e){e.setAttribute("aria-pressed",i?"false":"true");const t=e.querySelector(".dock-btn-label");t&&(t.textContent=i?"关":"开")}return i||Ri.playClick(),!i},getAudioState:()=>({muted:Ri.muted,started:Ri.started,contextState:Ri.contextState,level:Ri.getLevel()})};window.__scene=Ul;function J0(){const i=performance.now(),e=Math.min((i-Nl)/1e3,.06);if(Nl=i,!Iu){tM(e),po.hour=zt.hour,po.season=zt.season,po.weather=zt.weather,po.interior=gn.mode==="first",gn.update(e),lh.update(e,po);const t=Eo();Ms.update?.(e,t),Oi.update?.(e,t,{camera:us,mode:gn.mode}),Br.update?.(e,t,{camera:us,playerPosition:gn.getPosition(),mode:gn.mode}),Ms.setSmokeLevel?.(zt.season==="winter"?1:Oi.fireplaceOn?.7:0);const n={season:zt.season,weather:zt.weather,hour:zt.hour,overcast:G0[zt.weather]??0,interior:gn.mode==="first"};if(Ri.setEnvironment(n),Ri.update(e,{...n,moving:!!gn.state?.moving,speed:gn.state?.speed||0,position:gn.getPosition(),fireplaceOn:!!Oi.fireplaceOn,curtainsOpen:!!Oi.curtainsOpen,panelOpen:Ki}),Ki&&!Hn.isPanelOpen()&&(Ki=!1,Oi.notifyNoteClosed?.(),Ks||gn.setInputEnabled(!0)),nM(e),Fs(!1),!js||zt.windowGlow!==Js()){const s=Js();s!==zt.windowGlow&&(zt.windowGlow=s,No(!1))}Hl.render(e),js&&(window.__sceneStats={fps:1/Math.max(e,1e-4),triangles:Mi.info.render.triangles,calls:Mi.info.render.calls})}requestAnimationFrame(J0)}function Q0(){const i=window.innerWidth,e=window.innerHeight,t=Math.min(window.devicePixelRatio||1,1.65);us.aspect=i/e,us.updateProjectionMatrix(),Mi.setPixelRatio(t),Mi.setSize(i,e),Hl.setSize(i,e,t)}window.addEventListener("resize",Q0);document.addEventListener("visibilitychange",()=>{Iu=document.hidden,Iu||(Nl=performance.now())});window.addEventListener("keydown",i=>{if(!js||i.repeat)return;const e=i.target?.tagName;if(!(e==="INPUT"||e==="TEXTAREA"||e==="SELECT"||i.target?.isContentEditable))if(i.code==="KeyV"){if(Ki)return;i.preventDefault(),hh()}else i.code==="KeyE"?(i.preventDefault(),Jx()):i.code==="Escape"&&Ki&&ga()});function $f(i=[]){const e=[];for(const t of i||[])t&&(t.isMesh?e.push(t):t.traverse&&t.traverse(n=>{n.isMesh&&e.push(n)}));return e}async function iM(){zt.windowGlow=Js(),No(!0),Fs(!0),Q0(),await Jo(),Hn.setLoading(.36,"正在铺好门前的青石…"),await Jo(),Hn.setLoading(.62,"正在让树叶落回原处…"),await Jo(),Hn.setLoading(.84,"正在点亮窗前的灯…"),await Jo(),lh.update(.016,po),Ms.update?.(.016,Eo()),Oi.update?.(.016,Eo(),{camera:us,mode:gn.mode}),Br.update?.(.016,Eo(),{camera:us,playerPosition:gn.getPosition(),mode:gn.mode}),gn.update(.016),Hl.render(.016),await Jo(),Nl=performance.now(),J0(),await _l(260),Hn.setReady?.(),Xx?.remove(),js=!0,Ul.ready=!0,gn.setInputEnabled(!0),Fs(!0),setTimeout(()=>{Ki||Hn.setPrompt(null)},300)}iM();
