(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Iu="186",Qd=0,dh=1,jd=2,ta=1,t0=2,Ko=3,Dr=0,Fi=1,Bn=2,Ls=0,_o=1,Ri=2,ph=3,mh=4,e0=5,uo=100,n0=101,i0=102,s0=103,r0=104,o0=200,a0=201,l0=202,c0=203,$f=204,Kf=205,u0=206,h0=207,f0=208,d0=209,p0=210,m0=211,g0=212,v0=213,_0=214,Nc=0,Uc=1,Fc=2,oa=3,Oc=4,zc=5,Bc=6,kc=7,Jf=0,x0=1,M0=2,Is=0,Du=1,Nu=2,Uu=3,Ul=4,Fu=5,Ou=6,zu=7,Qf=300,Nr=301,To=302,ol=303,Xl=304,Fl=306,Eo=1e3,on=1001,Gc=1002,_i=1003,y0=1004,ya=1005,Pi=1006,Yl=1007,Ar=1008,Qi=1009,jf=1010,td=1011,aa=1012,Bu=1013,Ns=1014,vs=1015,Zi=1016,ku=1017,Gu=1018,la=1020,ed=35902,nd=35899,id=1021,sd=1022,_s=1023,Js=1026,Cr=1027,Hu=1028,Vu=1029,Ur=1030,Wu=1031,Xu=1033,al=33776,ll=33777,cl=33778,ul=33779,Hc=35840,Vc=35841,Wc=35842,Xc=35843,Yc=36196,Zc=37492,qc=37496,$c=37488,Kc=37489,_l=37490,Jc=37491,Qc=37808,jc=37809,tu=37810,eu=37811,nu=37812,iu=37813,su=37814,ru=37815,ou=37816,au=37817,lu=37818,cu=37819,uu=37820,hu=37821,fu=36492,du=36494,pu=36495,mu=36283,gu=36284,xl=36285,vu=36286,S0=3200,_u=0,b0=1,Zs="",Wi="srgb",Ml="srgb-linear",yl="linear",Fn="srgb",Zl=7680,w0=519,T0=512,E0=513,A0=514,Yu=515,C0=516,R0=517,Zu=518,P0=519,rd=35044,gh=35048,vh="300 es",Rs=2e3,ca=2001;function L0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Sl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function I0(){const i=Sl("canvas");return i.style.display="block",i}const _h={};function bl(...i){const t="THREE."+i.shift();console.log(t,...i)}function od(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function rn(...i){i=od(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Rn(...i){i=od(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function xo(...i){const t=i.join(" ");t in _h||(_h[t]=!0,rn(...i))}function D0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const N0={[Nc]:Uc,[Fc]:Bc,[Oc]:kc,[oa]:zc,[Uc]:Nc,[Bc]:Fc,[kc]:Oc,[zc]:oa};class Br{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xh=1234567;const ea=Math.PI/180,Ao=180/Math.PI;function Ds(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ti[i&255]+Ti[i>>8&255]+Ti[i>>16&255]+Ti[i>>24&255]+"-"+Ti[t&255]+Ti[t>>8&255]+"-"+Ti[t>>16&15|64]+Ti[t>>24&255]+"-"+Ti[e&63|128]+Ti[e>>8&255]+"-"+Ti[e>>16&255]+Ti[e>>24&255]+Ti[n&255]+Ti[n>>8&255]+Ti[n>>16&255]+Ti[n>>24&255]).toLowerCase()}function Mn(i,t,e){return Math.max(t,Math.min(e,i))}function qu(i,t){return(i%t+t)%t}function U0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function F0(i,t,e){return i!==t?(e-i)/(t-i):0}function na(i,t,e){return(1-e)*i+e*t}function O0(i,t,e,n){return na(i,t,1-Math.exp(-e*n))}function z0(i,t=1){return t-Math.abs(qu(i,t*2)-t)}function B0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function k0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function G0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function H0(i,t){return i+Math.random()*(t-i)}function V0(i){return i*(.5-Math.random())}function W0(i){i!==void 0&&(xh=i);let t=xh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function X0(i){return i*ea}function Y0(i){return i*Ao}function Z0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function q0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function K0(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),d=r((t-n)/2),f=o((t-n)/2),h=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*d,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*d,a*l);break;case"ZXZ":i.set(c*d,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*m,c*h,a*l);break;case"YXY":i.set(c*h,a*u,c*m,a*l);break;case"ZYZ":i.set(c*m,c*h,a*u,a*l);break;default:rn("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function zn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const J0={DEG2RAD:ea,RAD2DEG:Ao,generateUUID:Ds,clamp:Mn,euclideanModulo:qu,mapLinear:U0,inverseLerp:F0,lerp:na,damp:O0,pingpong:z0,smoothstep:B0,smootherstep:k0,randInt:G0,randFloat:H0,randFloatSpread:V0,seededRandom:W0,degToRad:X0,radToDeg:Y0,isPowerOfTwo:Z0,ceilPowerOfTwo:q0,floorPowerOfTwo:$0,setQuaternionFromProperEuler:K0,normalize:zn,denormalize:gs};class $t{static{$t.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Mn(this.x,t.x,e.x),this.y=Mn(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Mn(this.x,t,e),this.y=Mn(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Mn(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Mn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ms{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3],f=r[o+0],h=r[o+1],m=r[o+2],v=r[o+3];if(d!==v||c!==f||l!==h||u!==m){let g=c*f+l*h+u*m+d*v;g<0&&(f=-f,h=-h,m=-m,v=-v,g=-g);let p=1-a;if(g<.9995){const S=Math.acos(g),R=Math.sin(S);p=Math.sin(p*S)/R,a=Math.sin(a*S)/R,c=c*p+f*a,l=l*p+h*a,u=u*p+m*a,d=d*p+v*a}else{c=c*p+f*a,l=l*p+h*a,u=u*p+m*a,d=d*p+v*a;const S=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=S,l*=S,u*=S,d*=S}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[o],f=r[o+1],h=r[o+2],m=r[o+3];return t[e]=a*m+u*d+c*h-l*f,t[e+1]=c*m+u*f+l*d-a*h,t[e+2]=l*m+u*h+a*f-c*d,t[e+3]=u*m-a*d-c*f-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),d=a(r/2),f=c(n/2),h=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=f*u*d+l*h*m,this._y=l*h*d-f*u*m,this._z=l*u*m+f*h*d,this._w=l*u*d-f*h*m;break;case"YXZ":this._x=f*u*d+l*h*m,this._y=l*h*d-f*u*m,this._z=l*u*m-f*h*d,this._w=l*u*d+f*h*m;break;case"ZXY":this._x=f*u*d-l*h*m,this._y=l*h*d+f*u*m,this._z=l*u*m+f*h*d,this._w=l*u*d-f*h*m;break;case"ZYX":this._x=f*u*d-l*h*m,this._y=l*h*d+f*u*m,this._z=l*u*m-f*h*d,this._w=l*u*d+f*h*m;break;case"YZX":this._x=f*u*d+l*h*m,this._y=l*h*d+f*u*m,this._z=l*u*m-f*h*d,this._w=l*u*d-f*h*m;break;case"XZY":this._x=f*u*d-l*h*m,this._y=l*h*d-f*u*m,this._z=l*u*m+f*h*d,this._w=l*u*d+f*h*m;break;default:rn("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],f=n+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(r-l)*h,this._z=(o-s)*h}else if(n>a&&n>d){const h=2*Math.sqrt(1+n-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+l)/h}else if(a>d){const h=2*Math.sqrt(1+a-n-d);this._w=(r-l)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+d-n-a);this._w=(o-s)/h,this._x=(r+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Mn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{static{E.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Mn(this.x,t.x,e.x),this.y=Mn(this.y,t.y,e.y),this.z=Mn(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Mn(this.x,t,e),this.y=Mn(this.y,t,e),this.z=Mn(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Mn(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ql.copy(this).projectOnVector(t),this.sub(ql)}reflect(t){return this.sub(ql.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Mn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ql=new E,Mh=new Ms;class pn{static{pn.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],h=n[5],m=n[8],v=s[0],g=s[3],p=s[6],S=s[1],R=s[4],b=s[7],T=s[2],A=s[5],F=s[8];return r[0]=o*v+a*S+c*T,r[3]=o*g+a*R+c*A,r[6]=o*p+a*b+c*F,r[1]=l*v+u*S+d*T,r[4]=l*g+u*R+d*A,r[7]=l*p+u*b+d*F,r[2]=f*v+h*S+m*T,r[5]=f*g+h*R+m*A,r[8]=f*p+h*b+m*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,f=a*c-u*r,h=l*r-o*c,m=e*d+n*f+s*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=d*v,t[1]=(s*l-u*n)*v,t[2]=(a*n-s*o)*v,t[3]=f*v,t[4]=(u*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=h*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return xo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($l.makeScale(t,e)),this}rotate(t){return xo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($l.makeRotation(-t)),this}translate(t,e){return xo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($l.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $l=new pn,yh=new pn().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sh=new pn().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Q0(){const i={enabled:!0,workingColorSpace:Ml,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Fn&&(s.r=qs(s.r),s.g=qs(s.g),s.b=qs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Fn&&(s.r=Mo(s.r),s.g=Mo(s.g),s.b=Mo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zs?yl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return xo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return xo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ml]:{primaries:t,whitePoint:n,transfer:yl,toXYZ:yh,fromXYZ:Sh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Wi},outputColorSpaceConfig:{drawingBufferColorSpace:Wi}},[Wi]:{primaries:t,whitePoint:n,transfer:Fn,toXYZ:yh,fromXYZ:Sh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Wi}}}),i}const En=Q0();function qs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Vr;class j0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Vr===void 0&&(Vr=Sl("canvas")),Vr.width=t.width,Vr.height=t.height;const s=Vr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Vr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Sl("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=qs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qs(e[n]/255)*255):e[n]=qs(e[n]);return{data:e,width:t.width,height:t.height}}else return rn("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tp=0;class $u{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Ds(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Kl(s[o].image)):r.push(Kl(s[o]))}else r=Kl(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Kl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?j0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(rn("Texture: Unable to serialize Texture."),{})}let ep=0;const Jl=new E;class Li extends Br{constructor(t=Li.DEFAULT_IMAGE,e=Li.DEFAULT_MAPPING,n=on,s=on,r=Pi,o=Ar,a=_s,c=Qi,l=Li.DEFAULT_ANISOTROPY,u=Zs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Ds(),this.name="",this.source=new $u(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jl).x}get height(){return this.source.getSize(Jl).y}get depth(){return this.source.getSize(Jl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){rn(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){rn(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Eo:t.x=t.x-Math.floor(t.x);break;case on:t.x=t.x<0?0:1;break;case Gc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Eo:t.y=t.y-Math.floor(t.y);break;case on:t.y=t.y<0?0:1;break;case Gc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Li.DEFAULT_IMAGE=null;Li.DEFAULT_MAPPING=Qf;Li.DEFAULT_ANISOTROPY=1;class ei{static{ei.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const R=(l+1)/2,b=(h+1)/2,T=(p+1)/2,A=(u+f)/4,F=(d+v)/4,M=(m+g)/4;return R>b&&R>T?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=A/n,r=F/n):b>T?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=A/s,r=M/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=F/r,s=M/r),this.set(n,s,r,e),this}let S=Math.sqrt((g-m)*(g-m)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(d-v)/S,this.z=(f-u)/S,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Mn(this.x,t.x,e.x),this.y=Mn(this.y,t.y,e.y),this.z=Mn(this.z,t.z,e.z),this.w=Mn(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Mn(this.x,t,e),this.y=Mn(this.y,t,e),this.z=Mn(this.z,t,e),this.w=Mn(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Mn(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class np extends Br{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ei(0,0,t,e),this.scissorTest=!1,this.viewport=new ei(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new Li(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Pi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new $u(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends np{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ad extends Li{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_i,this.minFilter=_i,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ip extends Li{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_i,this.minFilter=_i,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class xn{static{xn.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,c,l,u,d,f,h,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,d,f,h,m,v,g)}set(t,e,n,s,r,o,a,c,l,u,d,f,h,m,v,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xn().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Wr.setFromMatrixColumn(t,0).length(),r=1/Wr.setFromMatrixColumn(t,1).length(),o=1/Wr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*u,h=o*d,m=a*u,v=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=h+m*l,e[5]=f-v*l,e[9]=-a*c,e[2]=v-f*l,e[6]=m+h*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,h=c*d,m=l*u,v=l*d;e[0]=f+v*a,e[4]=m*a-h,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=h*a-m,e[6]=v+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,h=c*d,m=l*u,v=l*d;e[0]=f-v*a,e[4]=-o*d,e[8]=m+h*a,e[1]=h+m*a,e[5]=o*u,e[9]=v-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,h=o*d,m=a*u,v=a*d;e[0]=c*u,e[4]=m*l-h,e[8]=f*l+v,e[1]=c*d,e[5]=v*l+f,e[9]=h*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,h=o*l,m=a*c,v=a*l;e[0]=c*u,e[4]=v-f*d,e[8]=m*d+h,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=h*d+m,e[10]=f-v*d}else if(t.order==="XZY"){const f=o*c,h=o*l,m=a*c,v=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=f*d+v,e[5]=o*u,e[9]=h*d-m,e[2]=m*d-h,e[6]=a*u,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sp,t,rp)}lookAt(t,e,n){const s=this.elements;return $i.subVectors(t,e),$i.lengthSq()===0&&($i.z=1),$i.normalize(),ir.crossVectors(n,$i),ir.lengthSq()===0&&(Math.abs(n.z)===1?$i.x+=1e-4:$i.z+=1e-4,$i.normalize(),ir.crossVectors(n,$i)),ir.normalize(),Sa.crossVectors($i,ir),s[0]=ir.x,s[4]=Sa.x,s[8]=$i.x,s[1]=ir.y,s[5]=Sa.y,s[9]=$i.y,s[2]=ir.z,s[6]=Sa.z,s[10]=$i.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],h=n[13],m=n[2],v=n[6],g=n[10],p=n[14],S=n[3],R=n[7],b=n[11],T=n[15],A=s[0],F=s[4],M=s[8],C=s[12],O=s[1],B=s[5],G=s[9],nt=s[13],H=s[2],J=s[6],Mt=s[10],rt=s[14],At=s[3],gt=s[7],yt=s[11],Rt=s[15];return r[0]=o*A+a*O+c*H+l*At,r[4]=o*F+a*B+c*J+l*gt,r[8]=o*M+a*G+c*Mt+l*yt,r[12]=o*C+a*nt+c*rt+l*Rt,r[1]=u*A+d*O+f*H+h*At,r[5]=u*F+d*B+f*J+h*gt,r[9]=u*M+d*G+f*Mt+h*yt,r[13]=u*C+d*nt+f*rt+h*Rt,r[2]=m*A+v*O+g*H+p*At,r[6]=m*F+v*B+g*J+p*gt,r[10]=m*M+v*G+g*Mt+p*yt,r[14]=m*C+v*nt+g*rt+p*Rt,r[3]=S*A+R*O+b*H+T*At,r[7]=S*F+R*B+b*J+T*gt,r[11]=S*M+R*G+b*Mt+T*yt,r[15]=S*C+R*nt+b*rt+T*Rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],f=t[10],h=t[14],m=t[3],v=t[7],g=t[11],p=t[15],S=c*h-l*f,R=a*h-l*d,b=a*f-c*d,T=o*h-l*u,A=o*f-c*u,F=o*d-a*u;return e*(v*S-g*R+p*b)-n*(m*S-g*T+p*A)+s*(m*R-v*T+p*F)-r*(m*b-v*A+g*F)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-n*(r*u-a*c)+s*(r*l-o*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],h=t[11],m=t[12],v=t[13],g=t[14],p=t[15],S=e*a-n*o,R=e*c-s*o,b=e*l-r*o,T=n*c-s*a,A=n*l-r*a,F=s*l-r*c,M=u*v-d*m,C=u*g-f*m,O=u*p-h*m,B=d*g-f*v,G=d*p-h*v,nt=f*p-h*g,H=S*nt-R*G+b*B+T*O-A*C+F*M;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/H;return t[0]=(a*nt-c*G+l*B)*J,t[1]=(s*G-n*nt-r*B)*J,t[2]=(v*F-g*A+p*T)*J,t[3]=(f*A-d*F-h*T)*J,t[4]=(c*O-o*nt-l*C)*J,t[5]=(e*nt-s*O+r*C)*J,t[6]=(g*b-m*F-p*R)*J,t[7]=(u*F-f*b+h*R)*J,t[8]=(o*G-a*O+l*M)*J,t[9]=(n*O-e*G-r*M)*J,t[10]=(m*A-v*b+p*S)*J,t[11]=(d*b-u*A-h*S)*J,t[12]=(a*C-o*B-c*M)*J,t[13]=(e*B-n*C+s*M)*J,t[14]=(v*R-m*T-g*S)*J,t[15]=(u*T-d*R+f*S)*J,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,d=a+a,f=r*l,h=r*u,m=r*d,v=o*u,g=o*d,p=a*d,S=c*l,R=c*u,b=c*d,T=n.x,A=n.y,F=n.z;return s[0]=(1-(v+p))*T,s[1]=(h+b)*T,s[2]=(m-R)*T,s[3]=0,s[4]=(h-b)*A,s[5]=(1-(f+p))*A,s[6]=(g+S)*A,s[7]=0,s[8]=(m+R)*F,s[9]=(g-S)*F,s[10]=(1-(f+v))*F,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Wr.set(s[0],s[1],s[2]).length();const a=Wr.set(s[4],s[5],s[6]).length(),c=Wr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),fs.copy(this);const l=1/o,u=1/a,d=1/c;return fs.elements[0]*=l,fs.elements[1]*=l,fs.elements[2]*=l,fs.elements[4]*=u,fs.elements[5]*=u,fs.elements[6]*=u,fs.elements[8]*=d,fs.elements[9]*=d,fs.elements[10]*=d,e.setFromRotationMatrix(fs),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=Rs,c=!1){const l=this.elements,u=2*r/(e-t),d=2*r/(n-s),f=(e+t)/(e-t),h=(n+s)/(n-s);let m,v;if(c)m=r/(o-r),v=o*r/(o-r);else if(a===Rs)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===ca)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Rs,c=!1){const l=this.elements,u=2/(e-t),d=2/(n-s),f=-(e+t)/(e-t),h=-(n+s)/(n-s);let m,v;if(c)m=1/(o-r),v=o/(o-r);else if(a===Rs)m=-2/(o-r),v=-(o+r)/(o-r);else if(a===ca)m=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Wr=new E,fs=new xn,sp=new E(0,0,0),rp=new E(1,1,1),ir=new E,Sa=new E,$i=new E,bh=new xn,wh=new Ms;class ys{constructor(t=0,e=0,n=0,s=ys.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(Mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Mn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Mn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:rn("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wh.setFromEuler(this),this.setFromQuaternion(wh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ys.DEFAULT_ORDER="XYZ";class Ku{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let op=0;const Th=new E,Xr=new Ms,zs=new xn,ba=new E,Fo=new E,ap=new E,lp=new Ms,Eh=new E(1,0,0),Ah=new E(0,1,0),Ch=new E(0,0,1),Rh={type:"added"},cp={type:"removed"},Yr={type:"childadded",child:null},Ql={type:"childremoved",child:null};class $n extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const t=new E,e=new ys,n=new Ms,s=new E(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xn},normalMatrix:{value:new pn}}),this.matrix=new xn,this.matrixWorld=new xn,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ku,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xr.setFromAxisAngle(t,e),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(t,e){return Xr.setFromAxisAngle(t,e),this.quaternion.premultiply(Xr),this}rotateX(t){return this.rotateOnAxis(Eh,t)}rotateY(t){return this.rotateOnAxis(Ah,t)}rotateZ(t){return this.rotateOnAxis(Ch,t)}translateOnAxis(t,e){return Th.copy(t).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Eh,t)}translateY(t){return this.translateOnAxis(Ah,t)}translateZ(t){return this.translateOnAxis(Ch,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zs.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ba.copy(t):ba.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zs.lookAt(Fo,ba,this.up):zs.lookAt(ba,Fo,this.up),this.quaternion.setFromRotationMatrix(zs),s&&(zs.extractRotation(s.matrixWorld),Xr.setFromRotationMatrix(zs),this.quaternion.premultiply(Xr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Rn("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rh),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null):Rn("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cp),Ql.child=t,this.dispatchEvent(Ql),Ql.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zs.multiply(t.parent.matrixWorld)),t.applyMatrix4(zs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rh),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,t,ap),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,lp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),h=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}$n.DEFAULT_UP=new E(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Je extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const up={type:"move"};class jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,n),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,m=.005;l.inputState.pinching&&f>h+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=h-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(up)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Je;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},wa={h:0,s:0,l:0};function tc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Wi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,En.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=En.workingColorSpace){return this.r=t,this.g=e,this.b=n,En.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=En.workingColorSpace){if(t=qu(t,1),e=Mn(e,0,1),n=Mn(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=tc(o,r,t+1/3),this.g=tc(o,r,t),this.b=tc(o,r,t-1/3)}return En.colorSpaceToWorking(this,s),this}setStyle(t,e=Wi){function n(r){r!==void 0&&parseFloat(r)<1&&rn("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:rn("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);rn("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Wi){const n=ld[t.toLowerCase()];return n!==void 0?this.setHex(n,e):rn("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qs(t.r),this.g=qs(t.g),this.b=qs(t.b),this}copyLinearToSRGB(t){return this.r=Mo(t.r),this.g=Mo(t.g),this.b=Mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Wi){return En.workingToColorSpace(Ei.copy(this),t),Math.round(Mn(Ei.r*255,0,255))*65536+Math.round(Mn(Ei.g*255,0,255))*256+Math.round(Mn(Ei.b*255,0,255))}getHexString(t=Wi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=En.workingColorSpace){En.workingToColorSpace(Ei.copy(this),e);const n=Ei.r,s=Ei.g,r=Ei.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=En.workingColorSpace){return En.workingToColorSpace(Ei.copy(this),e),t.r=Ei.r,t.g=Ei.g,t.b=Ei.b,t}getStyle(t=Wi){En.workingToColorSpace(Ei.copy(this),t);const e=Ei.r,n=Ei.g,s=Ei.b;return t!==Wi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(sr),this.setHSL(sr.h+t,sr.s+e,sr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(sr),t.getHSL(wa);const n=na(sr.h,wa.h,e),s=na(sr.s,wa.s,e),r=na(sr.l,wa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ei=new Ot;Ot.NAMES=ld;class Ju{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ot(t),this.density=e}clone(){return new Ju(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class hp extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ys,this.environmentIntensity=1,this.environmentRotation=new ys,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ds=new E,Bs=new E,ec=new E,ks=new E,Zr=new E,qr=new E,Ph=new E,nc=new E,ic=new E,sc=new E,rc=new ei,oc=new ei,ac=new ei;class as{constructor(t=new E,e=new E,n=new E){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ds.subVectors(t,e),s.cross(ds);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ds.subVectors(s,e),Bs.subVectors(n,e),ec.subVectors(t,e);const o=ds.dot(ds),a=ds.dot(Bs),c=ds.dot(ec),l=Bs.dot(Bs),u=Bs.dot(ec),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(l*c-a*u)*f,m=(o*u-a*c)*f;return r.set(1-h-m,m,h)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ks)===null?!1:ks.x>=0&&ks.y>=0&&ks.x+ks.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ks)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ks.x),c.addScaledVector(o,ks.y),c.addScaledVector(a,ks.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return rc.setScalar(0),oc.setScalar(0),ac.setScalar(0),rc.fromBufferAttribute(t,e),oc.fromBufferAttribute(t,n),ac.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(rc,r.x),o.addScaledVector(oc,r.y),o.addScaledVector(ac,r.z),o}static isFrontFacing(t,e,n,s){return ds.subVectors(n,e),Bs.subVectors(t,e),ds.cross(Bs).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ds.subVectors(this.c,this.b),Bs.subVectors(this.a,this.b),ds.cross(Bs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return as.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return as.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return as.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return as.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return as.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Zr.subVectors(s,n),qr.subVectors(r,n),nc.subVectors(t,n);const c=Zr.dot(nc),l=qr.dot(nc);if(c<=0&&l<=0)return e.copy(n);ic.subVectors(t,s);const u=Zr.dot(ic),d=qr.dot(ic);if(u>=0&&d<=u)return e.copy(s);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Zr,o);sc.subVectors(t,r);const h=Zr.dot(sc),m=qr.dot(sc);if(m>=0&&h<=m)return e.copy(r);const v=h*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(qr,a);const g=u*m-h*d;if(g<=0&&d-u>=0&&h-m>=0)return Ph.subVectors(r,s),a=(d-u)/(d-u+(h-m)),e.copy(s).addScaledVector(Ph,a);const p=1/(g+v+f);return o=v*p,a=f*p,e.copy(n).addScaledVector(Zr,o).addScaledVector(qr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class kr{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ps.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ps.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ps.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ps):ps.fromBufferAttribute(r,o),ps.applyMatrix4(t.matrixWorld),this.expandByPoint(ps);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ta.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ta.copy(n.boundingBox)),Ta.applyMatrix4(t.matrixWorld),this.union(Ta)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ps),ps.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oo),Ea.subVectors(this.max,Oo),$r.subVectors(t.a,Oo),Kr.subVectors(t.b,Oo),Jr.subVectors(t.c,Oo),rr.subVectors(Kr,$r),or.subVectors(Jr,Kr),vr.subVectors($r,Jr);let e=[0,-rr.z,rr.y,0,-or.z,or.y,0,-vr.z,vr.y,rr.z,0,-rr.x,or.z,0,-or.x,vr.z,0,-vr.x,-rr.y,rr.x,0,-or.y,or.x,0,-vr.y,vr.x,0];return!lc(e,$r,Kr,Jr,Ea)||(e=[1,0,0,0,1,0,0,0,1],!lc(e,$r,Kr,Jr,Ea))?!1:(Aa.crossVectors(rr,or),e=[Aa.x,Aa.y,Aa.z],lc(e,$r,Kr,Jr,Ea))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ps).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ps).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Gs=[new E,new E,new E,new E,new E,new E,new E,new E],ps=new E,Ta=new kr,$r=new E,Kr=new E,Jr=new E,rr=new E,or=new E,vr=new E,Oo=new E,Ea=new E,Aa=new E,_r=new E;function lc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){_r.fromArray(i,r);const a=s.x*Math.abs(_r.x)+s.y*Math.abs(_r.y)+s.z*Math.abs(_r.z),c=t.dot(_r),l=e.dot(_r),u=n.dot(_r);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const oi=new E,Ca=new $t;let fp=0;class Wn extends Br{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=rd,this.updateRanges=[],this.gpuType=vs,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ca.fromBufferAttribute(this,e),Ca.applyMatrix3(t),this.setXY(e,Ca.x,Ca.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)oi.fromBufferAttribute(this,e),oi.applyMatrix3(t),this.setXYZ(e,oi.x,oi.y,oi.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)oi.fromBufferAttribute(this,e),oi.applyMatrix4(t),this.setXYZ(e,oi.x,oi.y,oi.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)oi.fromBufferAttribute(this,e),oi.applyNormalMatrix(t),this.setXYZ(e,oi.x,oi.y,oi.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)oi.fromBufferAttribute(this,e),oi.transformDirection(t),this.setXYZ(e,oi.x,oi.y,oi.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=zn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=zn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=zn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=zn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=zn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=zn(e,this.array),n=zn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=zn(e,this.array),n=zn(n,this.array),s=zn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=zn(e,this.array),n=zn(n,this.array),s=zn(s,this.array),r=zn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class cd extends Wn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ud extends Wn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class an extends Wn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const dp=new kr,zo=new E,cc=new E;class Gr{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):dp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zo.subVectors(t,this.center);const e=zo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(zo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zo.copy(t.center).add(cc)),this.expandByPoint(zo.copy(t.center).sub(cc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let pp=0;const is=new xn,uc=new $n,Qr=new E,Ki=new kr,Bo=new kr,di=new E;class Pn extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(L0(t)?ud:cd)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new pn().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return is.makeRotationFromQuaternion(t),this.applyMatrix4(is),this}rotateX(t){return is.makeRotationX(t),this.applyMatrix4(is),this}rotateY(t){return is.makeRotationY(t),this.applyMatrix4(is),this}rotateZ(t){return is.makeRotationZ(t),this.applyMatrix4(is),this}translate(t,e,n){return is.makeTranslation(t,e,n),this.applyMatrix4(is),this}scale(t,e,n){return is.makeScale(t,e,n),this.applyMatrix4(is),this}lookAt(t){return uc.lookAt(t),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new an(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&rn("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Rn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ki.setFromBufferAttribute(r),this.morphTargetsRelative?(di.addVectors(this.boundingBox.min,Ki.min),this.boundingBox.expandByPoint(di),di.addVectors(this.boundingBox.max,Ki.max),this.boundingBox.expandByPoint(di)):(this.boundingBox.expandByPoint(Ki.min),this.boundingBox.expandByPoint(Ki.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Rn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){const n=this.boundingSphere.center;if(Ki.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Bo.setFromBufferAttribute(a),this.morphTargetsRelative?(di.addVectors(Ki.min,Bo.min),Ki.expandByPoint(di),di.addVectors(Ki.max,Bo.max),Ki.expandByPoint(di)):(Ki.expandByPoint(Bo.min),Ki.expandByPoint(Bo.max))}Ki.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)di.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(di));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)di.fromBufferAttribute(a,l),c&&(Qr.fromBufferAttribute(t,l),di.add(Qr)),s=Math.max(s,n.distanceToSquared(di))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Rn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Rn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Wn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let M=0;M<n.count;M++)a[M]=new E,c[M]=new E;const l=new E,u=new E,d=new E,f=new $t,h=new $t,m=new $t,v=new E,g=new E;function p(M,C,O){l.fromBufferAttribute(n,M),u.fromBufferAttribute(n,C),d.fromBufferAttribute(n,O),f.fromBufferAttribute(r,M),h.fromBufferAttribute(r,C),m.fromBufferAttribute(r,O),u.sub(l),d.sub(l),h.sub(f),m.sub(f);const B=1/(h.x*m.y-m.x*h.y);isFinite(B)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(d,-h.y).multiplyScalar(B),g.copy(d).multiplyScalar(h.x).addScaledVector(u,-m.x).multiplyScalar(B),a[M].add(v),a[C].add(v),a[O].add(v),c[M].add(g),c[C].add(g),c[O].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let M=0,C=S.length;M<C;++M){const O=S[M],B=O.start,G=O.count;for(let nt=B,H=B+G;nt<H;nt+=3)p(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}const R=new E,b=new E,T=new E,A=new E;function F(M){T.fromBufferAttribute(s,M),A.copy(T);const C=a[M];R.copy(C),R.sub(T.multiplyScalar(T.dot(C))).normalize(),b.crossVectors(A,C);const B=b.dot(c[M])<0?-1:1;o.setXYZW(M,R.x,R.y,R.z,B)}for(let M=0,C=S.length;M<C;++M){const O=S[M],B=O.start,G=O.count;for(let nt=B,H=B+G;nt<H;nt+=3)F(t.getX(nt+0)),F(t.getX(nt+1)),F(t.getX(nt+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Wn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const s=new E,r=new E,o=new E,a=new E,c=new E,l=new E,u=new E,d=new E;if(t)for(let f=0,h=t.count;f<h;f+=3){const m=t.getX(f+0),v=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,h=e.count;f<h;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)di.fromBufferAttribute(t,e),di.normalize(),t.setXYZ(e,di.x,di.y,di.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let h=0,m=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?h=c[v]*a.data.stride+a.offset:h=c[v]*u;for(let p=0;p<u;p++)f[m++]=l[h++]}return new Wn(f,u,d)}if(this.index===null)return rn("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pn,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],h=t(f,n);c.push(h)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const h=l[d];u.push(h.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],d=r[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=rd,this.updateRanges=[],this.version=0,this.uuid=Ds()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ds()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ds()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const Ni=new E;class wl{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ni.fromBufferAttribute(this,e),Ni.applyMatrix4(t),this.setXYZ(e,Ni.x,Ni.y,Ni.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ni.fromBufferAttribute(this,e),Ni.applyNormalMatrix(t),this.setXYZ(e,Ni.x,Ni.y,Ni.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ni.fromBufferAttribute(this,e),Ni.transformDirection(t),this.setXYZ(e,Ni.x,Ni.y,Ni.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=gs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=zn(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=zn(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=zn(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=zn(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=zn(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=gs(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=gs(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=gs(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=gs(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=zn(e,this.array),n=zn(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=zn(e,this.array),n=zn(n,this.array),s=zn(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=zn(e,this.array),n=zn(n,this.array),s=zn(s,this.array),r=zn(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){bl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Wn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new wl(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){bl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const hc=new E,gp=new E,vp=new pn;class dr{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=hc.subVectors(n,e).cross(gp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(hc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||vp.getNormalMatrix(t),s=this.coplanarPoint(hc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let _p=0;class mr extends Br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=_o,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$f,this.blendDst=Kf,this.blendEquation=uo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=w0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zl,this.stencilZFail=Zl,this.stencilZPass=Zl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){rn(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){rn(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ot().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new dr().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new $t().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $t().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Fr extends mr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let jr;const ko=new E,to=new E,eo=new E,no=new $t,Go=new $t,hd=new xn,Ra=new E,Ho=new E,Pa=new E,Lh=new $t,fc=new $t,Ih=new $t;class yo extends $n{constructor(t=new Fr){if(super(),this.isSprite=!0,this.type="Sprite",jr===void 0){jr=new Pn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mp(e,5);jr.setIndex([0,1,2,0,2,3]),jr.setAttribute("position",new wl(n,3,0,!1)),jr.setAttribute("uv",new wl(n,2,3,!1))}this.geometry=jr,this.material=t,this.center=new $t(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Rn('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),to.setFromMatrixScale(this.matrixWorld),hd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),eo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&to.multiplyScalar(-eo.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;La(Ra.set(-.5,-.5,0),eo,o,to,s,r),La(Ho.set(.5,-.5,0),eo,o,to,s,r),La(Pa.set(.5,.5,0),eo,o,to,s,r),Lh.set(0,0),fc.set(1,0),Ih.set(1,1);let a=t.ray.intersectTriangle(Ra,Ho,Pa,!1,ko);if(a===null&&(La(Ho.set(-.5,.5,0),eo,o,to,s,r),fc.set(0,1),a=t.ray.intersectTriangle(Ra,Pa,Ho,!1,ko),a===null))return;const c=t.ray.origin.distanceTo(ko);c<t.near||c>t.far||e.push({distance:c,point:ko.clone(),uv:as.getInterpolation(ko,Ra,Ho,Pa,Lh,fc,Ih,new $t),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function La(i,t,e,n,s,r){no.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Go.x=r*no.x-s*no.y,Go.y=s*no.x+r*no.y):Go.copy(no),i.copy(t),i.x+=Go.x,i.y+=Go.y,i.applyMatrix4(hd)}const Hs=new E,dc=new E,Ia=new E,Da=new E;class Ol{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Hs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hs.copy(this.origin).addScaledVector(this.direction,e),Hs.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){dc.copy(t).add(e).multiplyScalar(.5),Ia.copy(e).sub(t).normalize(),Da.copy(this.origin).sub(dc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ia),a=Da.dot(this.direction),c=-Da.dot(Ia),l=Da.lengthSq(),u=Math.abs(1-o*o);let d,f,h,m;if(u>0)if(d=o*c-a,f=o*a-c,m=r*u,d>=0)if(f>=-m)if(f<=m){const v=1/u;d*=v,f*=v,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-m?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l):f<=m?(d=0,f=Math.min(Math.max(-r,-c),r),h=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(dc).addScaledVector(Ia,f),h}intersectSphere(t,e){if(t.radius<0)return null;Hs.subVectors(t.center,this.origin);const n=Hs.dot(this.direction),s=Hs.dot(Hs)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Hs)!==null}intersectTriangle(t,e,n,s,r){const o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,d=t.x-o.x,f=t.y-o.y,h=t.z-o.z,m=e.x-o.x,v=e.y-o.y,g=e.z-o.z,p=n.x-o.x,S=n.y-o.y,R=n.z-o.z,b=Math.abs(c),T=Math.abs(l),A=Math.abs(u);let F,M,C,O,B,G,nt,H,J,Mt,rt,At;if(b>=T&&b>=A?(C=c,G=d,J=m,At=p,c>=0?(F=l,M=u,O=f,B=h,nt=v,H=g,Mt=S,rt=R):(F=u,M=l,O=h,B=f,nt=g,H=v,Mt=R,rt=S)):T>=A?(C=l,G=f,J=v,At=S,l>=0?(F=u,M=c,O=h,B=d,nt=g,H=m,Mt=R,rt=p):(F=c,M=u,O=d,B=h,nt=m,H=g,Mt=p,rt=R)):(C=u,G=h,J=g,At=R,u>=0?(F=c,M=l,O=d,B=f,nt=m,H=v,Mt=p,rt=S):(F=l,M=c,O=f,B=d,nt=v,H=m,Mt=S,rt=p)),C===0)return null;const gt=F/C,yt=M/C,Rt=1/C,ye=O-gt*G,we=B-yt*G,en=nt-gt*J,Z=H-yt*J,ce=Mt-gt*At,_t=rt-yt*At,q=ce*Z-_t*en,bt=ye*_t-we*ce,wt=en*we-Z*ye;if(s){if(q<0||bt<0||wt<0)return null}else if((q<0||bt<0||wt<0)&&(q>0||bt>0||wt>0))return null;const Kt=q+bt+wt;if(Kt===0)return null;const Ht=Rt*(q*G+bt*J+wt*At);return(Kt>0?Ht<0:Ht>0)?null:this.at(Ht/Kt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ji extends mr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ys,this.combine=Jf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Dh=new xn,xr=new Ol,Na=new Gr,Nh=new E,Ua=new E,Fa=new E,Oa=new E,pc=new E,za=new E,Uh=new E,Ba=new E;class Ne extends $n{constructor(t=new Pn,e=new ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){za.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(pc.fromBufferAttribute(d,t),o?za.addScaledVector(pc,u):za.addScaledVector(pc.sub(e),u))}e.add(za)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(r),xr.copy(t.ray).recast(t.near),!(Na.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Na,Nh)===null||xr.origin.distanceToSquared(Nh)>(t.far-t.near)**2))&&(Dh.copy(r).invert(),xr.copy(t.ray).applyMatrix4(Dh),!(n.boundingBox!==null&&xr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xr)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=o[g.materialIndex],S=Math.max(g.start,h.start),R=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let b=S,T=R;b<T;b+=3){const A=a.getX(b),F=a.getX(b+1),M=a.getX(b+2);s=ka(this,p,t,n,l,u,d,A,F,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let g=m,p=v;g<p;g+=3){const S=a.getX(g),R=a.getX(g+1),b=a.getX(g+2);s=ka(this,o,t,n,l,u,d,S,R,b),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=o[g.materialIndex],S=Math.max(g.start,h.start),R=Math.min(c.count,Math.min(g.start+g.count,h.start+h.count));for(let b=S,T=R;b<T;b+=3){const A=b,F=b+1,M=b+2;s=ka(this,p,t,n,l,u,d,A,F,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,h.start),v=Math.min(c.count,h.start+h.count);for(let g=m,p=v;g<p;g+=3){const S=g,R=g+1,b=g+2;s=ka(this,o,t,n,l,u,d,S,R,b),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function xp(i,t,e,n,s,r,o,a){let c;if(t.side===Fi?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Dr,a),c===null)return null;Ba.copy(a),Ba.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ba);return l<e.near||l>e.far?null:{distance:l,point:Ba.clone(),object:i}}function ka(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ua),i.getVertexPosition(c,Fa),i.getVertexPosition(l,Oa);const u=xp(i,t,e,n,Ua,Fa,Oa,Uh);if(u){const d=new E;as.getBarycoord(Uh,Ua,Fa,Oa,d),s&&(u.uv=as.getInterpolatedAttribute(s,a,c,l,d,new $t)),r&&(u.uv1=as.getInterpolatedAttribute(r,a,c,l,d,new $t)),o&&(u.normal=as.getInterpolatedAttribute(o,a,c,l,d,new E),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new E,materialIndex:0};as.getNormal(Ua,Fa,Oa,f.normal),u.face=f,u.barycoord=d}return u}class fd extends Li{constructor(t=null,e=1,n=1,s,r,o,a,c,l=_i,u=_i,d,f){super(null,o,a,c,l,u,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fh extends Wn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const io=new xn,Oh=new xn,Ga=[],zh=new kr,Mp=new xn,Vo=new Ne,Wo=new Gr;class hl extends Ne{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Mp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new kr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,io),zh.copy(t.boundingBox).applyMatrix4(io),this.boundingBox.union(zh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,io),Wo.copy(t.boundingSphere).applyMatrix4(io),this.boundingSphere.union(Wo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Vo.geometry=this.geometry,Vo.material=this.material,Vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wo.copy(this.boundingSphere),Wo.applyMatrix4(n),t.ray.intersectsSphere(Wo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,io),Oh.multiplyMatrices(n,io),Vo.matrixWorld=Oh,Vo.raycast(t,Ga);for(let o=0,a=Ga.length;o<a;o++){const c=Ga[o];c.instanceId=r,c.object=this,e.push(c)}Ga.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Fh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new fd(new Float32Array(s*this.count),s,this.count,Hu,vs));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Mr=new Gr,yp=new $t(.5,.5),Ha=new E;class Qu{constructor(t=new dr,e=new dr,n=new dr,s=new dr,r=new dr,o=new dr){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rs,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],f=r[6],h=r[7],m=r[8],v=r[9],g=r[10],p=r[11],S=r[12],R=r[13],b=r[14],T=r[15];if(s[0].setComponents(l-o,h-u,p-m,T-S).normalize(),s[1].setComponents(l+o,h+u,p+m,T+S).normalize(),s[2].setComponents(l+a,h+d,p+v,T+R).normalize(),s[3].setComponents(l-a,h-d,p-v,T-R).normalize(),n)s[4].setComponents(c,f,g,b).normalize(),s[5].setComponents(l-c,h-f,p-g,T-b).normalize();else if(s[4].setComponents(l-c,h-f,p-g,T-b).normalize(),e===Rs)s[5].setComponents(l+c,h+f,p+g,T+b).normalize();else if(e===ca)s[5].setComponents(c,f,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(t){Mr.center.set(0,0,0);const e=yp.distanceTo(t.center);return Mr.radius=.7071067811865476+e,Mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ha.x=s.normal.x>0?t.max.x:t.min.x,Ha.y=s.normal.y>0?t.max.y:t.min.y,Ha.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dd extends mr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Tl=new E,El=new E,Bh=new xn,Xo=new Ol,Va=new Gr,mc=new E,kh=new E;class Sp extends $n{constructor(t=new Pn,e=new dd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Tl.fromBufferAttribute(e,s-1),El.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Tl.distanceTo(El);t.setAttribute("lineDistance",new an(n,1))}else rn("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(s),Va.radius+=r,t.ray.intersectsSphere(Va)===!1)return;Bh.copy(s).invert(),Xo.copy(t.ray).applyMatrix4(Bh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const h=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=h,g=m-1;v<g;v+=l){const p=u.getX(v),S=u.getX(v+1),R=Wa(this,t,Xo,c,p,S,v);R&&e.push(R)}if(this.isLineLoop){const v=u.getX(m-1),g=u.getX(h),p=Wa(this,t,Xo,c,v,g,m-1);p&&e.push(p)}}else{const h=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let v=h,g=m-1;v<g;v+=l){const p=Wa(this,t,Xo,c,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){const v=Wa(this,t,Xo,c,m-1,h,m-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Wa(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(Tl.fromBufferAttribute(a,s),El.fromBufferAttribute(a,r),e.distanceSqToSegment(Tl,El,mc,kh)>n)return;mc.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(mc);if(!(l<t.near||l>t.far))return{distance:l,point:kh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Gh=new E,Hh=new E;class bp extends Sp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Gh.fromBufferAttribute(e,s),Hh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Gh.distanceTo(Hh);t.setAttribute("lineDistance",new an(n,1))}else rn("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pr extends mr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Vh=new xn,xu=new Ol,Xa=new Gr,Ya=new E;class So extends $n{constructor(t=new Pn,e=new Pr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere),Xa.applyMatrix4(s),Xa.radius+=r,t.ray.intersectsSphere(Xa)===!1)return;Vh.copy(s).invert(),xu.copy(t.ray).applyMatrix4(Vh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let m=f,v=h;m<v;m++){const g=l.getX(m);Ya.fromBufferAttribute(d,g),Wh(Ya,g,c,s,t,e,this)}}else{const f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let m=f,v=h;m<v;m++)Ya.fromBufferAttribute(d,m),Wh(Ya,m,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Wh(i,t,e,n,s,r,o){const a=xu.distanceSqToPoint(i);if(a<e){const c=new E;xu.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class pd extends Li{constructor(t=[],e=Nr,n,s,r,o,a,c,l,u){super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wp extends Li{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ua extends Li{constructor(t,e,n=Ns,s,r,o,a=_i,c=_i,l,u=Js,d=1){if(u!==Js&&u!==Cr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:d};super(f,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $u(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Tp extends ua{constructor(t,e=Ns,n=Nr,s,r,o=_i,a=_i,c,l=Js){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class md extends Li{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class qn extends Pn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let f=0,h=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new an(l,3)),this.setAttribute("normal",new an(u,3)),this.setAttribute("uv",new an(d,2));function m(v,g,p,S,R,b,T,A,F,M,C){const O=b/F,B=T/M,G=b/2,nt=T/2,H=A/2,J=F+1,Mt=M+1;let rt=0,At=0;const gt=new E;for(let yt=0;yt<Mt;yt++){const Rt=yt*B-nt;for(let ye=0;ye<J;ye++){const we=ye*O-G;gt[v]=we*S,gt[g]=Rt*R,gt[p]=H,l.push(gt.x,gt.y,gt.z),gt[v]=0,gt[g]=0,gt[p]=A>0?1:-1,u.push(gt.x,gt.y,gt.z),d.push(ye/F),d.push(1-yt/M),rt+=1}}for(let yt=0;yt<M;yt++)for(let Rt=0;Rt<F;Rt++){const ye=f+Rt+J*yt,we=f+Rt+J*(yt+1),en=f+(Rt+1)+J*(yt+1),Z=f+(Rt+1)+J*yt;c.push(ye,we,Z),c.push(we,en,Z),At+=6}a.addGroup(h,At,C),h+=At,f+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class fo extends Pn{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],u=e/2,d=Math.PI/2*t,f=e,h=2*d+f,m=n*2+r,v=s+1,g=new E,p=new E;for(let S=0;S<=m;S++){let R=0,b=0,T=0,A=0;if(S<=n){const C=S/n,O=C*Math.PI/2;b=-u-t*Math.cos(O),T=t*Math.sin(O),A=-t*Math.cos(O),R=C*d}else if(S<=n+r){const C=(S-n)/r;b=-u+C*e,T=t,A=0,R=d+C*f}else{const C=(S-n-r)/n,O=C*Math.PI/2;b=u+t*Math.sin(O),T=t*Math.cos(O),A=t*Math.sin(O),R=d+f+C*d}const F=Math.max(0,Math.min(1,R/h));let M=0;S===0?M=.5/s:S===m&&(M=-.5/s);for(let C=0;C<=s;C++){const O=C/s,B=O*Math.PI*2,G=Math.sin(B),nt=Math.cos(B);p.x=-T*nt,p.y=b,p.z=T*G,a.push(p.x,p.y,p.z),g.set(-T*nt,A,T*G),g.normalize(),c.push(g.x,g.y,g.z),l.push(O+M,F)}if(S>0){const C=(S-1)*v;for(let O=0;O<s;O++){const B=C+O,G=C+O+1,nt=S*v+O,H=S*v+O+1;o.push(B,G,nt),o.push(G,H,nt)}}}this.setIndex(o),this.setAttribute("position",new an(a,3)),this.setAttribute("normal",new an(c,3)),this.setAttribute("uv",new an(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fo(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Lr extends Pn{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new E,u=new $t;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const h=n+d/e*s;l.x=t*Math.cos(h),l.y=t*Math.sin(h),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new an(o,3)),this.setAttribute("normal",new an(a,3)),this.setAttribute("uv",new an(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ti extends Pn{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],h=[];let m=0;const v=[],g=n/2;let p=0;S(),o===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new an(d,3)),this.setAttribute("normal",new an(f,3)),this.setAttribute("uv",new an(h,2));function S(){const b=new E,T=new E;let A=0;const F=(e-t)/n;for(let M=0;M<=r;M++){const C=[],O=M/r,B=O*(e-t)+t;for(let G=0;G<=s;G++){const nt=G/s,H=nt*c+a,J=Math.sin(H),Mt=Math.cos(H);T.x=B*J,T.y=-O*n+g,T.z=B*Mt,d.push(T.x,T.y,T.z),b.set(J,F,Mt).normalize(),f.push(b.x,b.y,b.z),h.push(nt,1-O),C.push(m++)}v.push(C)}for(let M=0;M<s;M++)for(let C=0;C<r;C++){const O=v[C][M],B=v[C+1][M],G=v[C+1][M+1],nt=v[C][M+1];(t>0||C!==0)&&(u.push(O,B,nt),A+=3),(e>0||C!==r-1)&&(u.push(B,G,nt),A+=3)}l.addGroup(p,A,0),p+=A}function R(b){const T=m,A=new $t,F=new E;let M=0;const C=b===!0?t:e,O=b===!0?1:-1;for(let G=1;G<=s;G++)d.push(0,g*O,0),f.push(0,O,0),h.push(.5,.5),m++;const B=m;for(let G=0;G<=s;G++){const H=G/s*c+a,J=Math.cos(H),Mt=Math.sin(H);F.x=C*Mt,F.y=g*O,F.z=C*J,d.push(F.x,F.y,F.z),f.push(0,O,0),A.x=J*.5+.5,A.y=Mt*.5*O+.5,h.push(A.x,A.y),m++}for(let G=0;G<s;G++){const nt=T+G,H=B+G;b===!0?u.push(H,H+1,nt):u.push(H+1,H,nt),M+=3}l.addGroup(p,M,b===!0?1:2),p+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ti(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Co extends ti{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Co(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ju extends Pn{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new an(r,3)),this.setAttribute("normal",new an(r.slice(),3)),this.setAttribute("uv",new an(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const R=new E,b=new E,T=new E;for(let A=0;A<e.length;A+=3)h(e[A+0],R),h(e[A+1],b),h(e[A+2],T),c(R,b,T,S)}function c(S,R,b,T){const A=T+1,F=[];for(let M=0;M<=A;M++){F[M]=[];const C=S.clone().lerp(b,M/A),O=R.clone().lerp(b,M/A),B=A-M;for(let G=0;G<=B;G++)G===0&&M===A?F[M][G]=C:F[M][G]=C.clone().lerp(O,G/B)}for(let M=0;M<A;M++)for(let C=0;C<2*(A-M)-1;C++){const O=Math.floor(C/2);C%2===0?(f(F[M][O+1]),f(F[M+1][O]),f(F[M][O])):(f(F[M][O+1]),f(F[M+1][O+1]),f(F[M+1][O]))}}function l(S){const R=new E;for(let b=0;b<r.length;b+=3)R.x=r[b+0],R.y=r[b+1],R.z=r[b+2],R.normalize().multiplyScalar(S),r[b+0]=R.x,r[b+1]=R.y,r[b+2]=R.z}function u(){const S=new E;for(let R=0;R<r.length;R+=3){S.x=r[R+0],S.y=r[R+1],S.z=r[R+2];const b=g(S)/2/Math.PI+.5,T=p(S)/Math.PI+.5;o.push(b,1-T)}m(),d()}function d(){for(let S=0;S<o.length;S+=6){const R=o[S+0],b=o[S+2],T=o[S+4],A=Math.max(R,b,T),F=Math.min(R,b,T);A>.9&&F<.1&&(R<.2&&(o[S+0]+=1),b<.2&&(o[S+2]+=1),T<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function h(S,R){const b=S*3;R.x=t[b+0],R.y=t[b+1],R.z=t[b+2]}function m(){const S=new E,R=new E,b=new E,T=new E,A=new $t,F=new $t,M=new $t;for(let C=0,O=0;C<r.length;C+=9,O+=6){S.set(r[C+0],r[C+1],r[C+2]),R.set(r[C+3],r[C+4],r[C+5]),b.set(r[C+6],r[C+7],r[C+8]),A.set(o[O+0],o[O+1]),F.set(o[O+2],o[O+3]),M.set(o[O+4],o[O+5]),T.copy(S).add(R).add(b).divideScalar(3);const B=g(T);v(A,O+0,S,B),v(F,O+2,R,B),v(M,O+4,b,B)}}function v(S,R,b,T){T<0&&S.x===1&&(o[R]=S.x-1),b.x===0&&b.z===0&&(o[R]=T/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ju(t.vertices,t.indices,t.radius,t.detail)}}class Fs{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){rn("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],f=n[s+1]-u,h=(o-u)/f;return(s+h)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new $t:new E);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new E,s=[],r=[],o=[],a=new E,c=new xn;for(let h=0;h<=t;h++){const m=h/t;s[h]=this.getTangentAt(m,new E)}r[0]=new E,o[0]=new E;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=t;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Mn(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(c.makeRotationAxis(a,m))}o[h].crossVectors(s[h],r[h])}if(e===!0){let h=Math.acos(Mn(r[0].dot(r[t]),-1,1));h/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(h=-h);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],h*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class th extends Fs{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new $t){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,h=l-this.aY;c=f*u-h*d+this.aX,l=f*d+h*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ep extends th{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function eh(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,h=(a-o)/u-(c-o)/(u+d)+(c-a)/d;f*=u,h*=u,s(o,a,f,h)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Xh=new E,Yh=new E,gc=new eh,vc=new eh,_c=new eh;class Ap extends Fs{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new E){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Yh.subVectors(s[0],s[1]).add(s[0]),l=Yh);const d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Xh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Xh),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(d),h),v=Math.pow(d.distanceToSquared(f),h),g=Math.pow(f.distanceToSquared(u),h);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),gc.initNonuniformCatmullRom(l.x,d.x,f.x,u.x,m,v,g),vc.initNonuniformCatmullRom(l.y,d.y,f.y,u.y,m,v,g),_c.initNonuniformCatmullRom(l.z,d.z,f.z,u.z,m,v,g)}else this.curveType==="catmullrom"&&(gc.initCatmullRom(l.x,d.x,f.x,u.x,this.tension),vc.initCatmullRom(l.y,d.y,f.y,u.y,this.tension),_c.initCatmullRom(l.z,d.z,f.z,u.z,this.tension));return n.set(gc.calc(c),vc.calc(c),_c.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new E().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Zh(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Cp(i,t){const e=1-i;return e*e*t}function Rp(i,t){return 2*(1-i)*i*t}function Pp(i,t){return i*i*t}function ia(i,t,e,n){return Cp(i,t)+Rp(i,e)+Pp(i,n)}function Lp(i,t){const e=1-i;return e*e*e*t}function Ip(i,t){const e=1-i;return 3*e*e*i*t}function Dp(i,t){return 3*(1-i)*i*i*t}function Np(i,t){return i*i*i*t}function sa(i,t,e,n,s){return Lp(i,t)+Ip(i,e)+Dp(i,n)+Np(i,s)}class gd extends Fs{constructor(t=new $t,e=new $t,n=new $t,s=new $t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new $t){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(sa(t,s.x,r.x,o.x,a.x),sa(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Up extends Fs{constructor(t=new E,e=new E,n=new E,s=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new E){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(sa(t,s.x,r.x,o.x,a.x),sa(t,s.y,r.y,o.y,a.y),sa(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vd extends Fs{constructor(t=new $t,e=new $t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new $t){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fp extends Fs{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _d extends Fs{constructor(t=new $t,e=new $t,n=new $t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new $t){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ia(t,s.x,r.x,o.x),ia(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Op extends Fs{constructor(t=new E,e=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new E){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ia(t,s.x,r.x,o.x),ia(t,s.y,r.y,o.y),ia(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xd extends Fs{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new $t){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Zh(a,c.x,l.x,u.x,d.x),Zh(a,c.y,l.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new $t().fromArray(s))}return this}}var Mu=Object.freeze({__proto__:null,ArcCurve:Ep,CatmullRomCurve3:Ap,CubicBezierCurve:gd,CubicBezierCurve3:Up,EllipseCurve:th,LineCurve:vd,LineCurve3:Fp,QuadraticBezierCurve:_d,QuadraticBezierCurve3:Op,SplineCurve:xd});class zp extends Fs{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mu[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Mu[s.type]().fromJSON(s))}return this}}class qh extends zp{constructor(t){super(),this.type="Path",this.currentPoint=new $t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new vd(this.currentPoint.clone(),new $t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new _d(this.currentPoint.clone(),new $t(t,e),new $t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new gd(this.currentPoint.clone(),new $t(t,e),new $t(n,s),new $t(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new xd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new th(t,e,n,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class fl extends qh{constructor(t){super(t),this.uuid=Ds(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new qh().fromJSON(s))}return this}}function Bp(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Md(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Wp(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let u=a,d=c;for(let f=e;f<s;f+=e){const h=i[f],m=i[f+1];h<a&&(a=h),m<c&&(c=m),h>u&&(u=h),m>d&&(d=m)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return ha(r,o,e,a,c,l,0),o}function Md(i,t,e,n,s){let r;if(s===em(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=$h(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=$h(o/n|0,i[o],i[o+1],r);return r&&Ro(r,r.next)&&(da(r),r=r.next),r}function Or(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ro(e,e.next)||ni(e.prev,e,e.next)===0)){if(da(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ha(i,t,e,n,s,r,o){if(!i)return;!o&&r&&$p(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?Gp(i,n,s,r):kp(i)){t.push(c.i,i.i,l.i),da(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Hp(Or(i),t),ha(i,t,e,n,s,r,2)):o===2&&Vp(i,t,e,n,s,r):ha(Or(i),t,e,n,s,r,1);break}}}function kp(i){const t=i.prev,e=i,n=i.next;if(ni(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(s,r,o),d=Math.min(a,c,l),f=Math.max(s,r,o),h=Math.max(a,c,l);let m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=h&&Jo(s,a,r,c,o,l,m.x,m.y)&&ni(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Gp(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ni(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,d=r.y,f=o.y,h=Math.min(a,c,l),m=Math.min(u,d,f),v=Math.max(a,c,l),g=Math.max(u,d,f),p=yu(h,m,t,e,n),S=yu(v,g,t,e,n);let R=i.prevZ,b=i.nextZ;for(;R&&R.z>=p&&b&&b.z<=S;){if(R.x>=h&&R.x<=v&&R.y>=m&&R.y<=g&&R!==s&&R!==o&&Jo(a,u,c,d,l,f,R.x,R.y)&&ni(R.prev,R,R.next)>=0||(R=R.prevZ,b.x>=h&&b.x<=v&&b.y>=m&&b.y<=g&&b!==s&&b!==o&&Jo(a,u,c,d,l,f,b.x,b.y)&&ni(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;R&&R.z>=p;){if(R.x>=h&&R.x<=v&&R.y>=m&&R.y<=g&&R!==s&&R!==o&&Jo(a,u,c,d,l,f,R.x,R.y)&&ni(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;b&&b.z<=S;){if(b.x>=h&&b.x<=v&&b.y>=m&&b.y<=g&&b!==s&&b!==o&&Jo(a,u,c,d,l,f,b.x,b.y)&&ni(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Hp(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Ro(n,s)&&Sd(n,e,e.next,s)&&fa(n,s)&&fa(s,n)&&(t.push(n.i,e.i,s.i),da(e),da(e.next),e=i=s),e=e.next}while(e!==i);return Or(e)}function Vp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Qp(o,a)){let c=bd(o,a);o=Or(o,o.next),c=Or(c,c.next),ha(o,t,e,n,s,r,0),ha(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Wp(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Md(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Jp(l))}s.sort(Xp);for(let r=0;r<s.length;r++)e=Yp(s[r],e);return e}function Xp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Yp(i,t){const e=Zp(i,t);if(!e)return t;const n=bd(e,i);return Or(n,n.next),Or(e,e.next)}function Zp(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Ro(i,e))return e;do{if(Ro(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&yd(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){const d=Math.abs(s-e.y)/(n-e.x);fa(e,i)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&qp(o,e)))&&(o=e,u=d)}e=e.next}while(e!==a);return o}function qp(i,t){return ni(i.prev,i,t.prev)<0&&ni(t.next,i,i.next)<0}function $p(i,t,e,n){let s=i;do s.z===0&&(s.z=yu(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Kp(s)}function Kp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function yu(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Jp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function yd(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Jo(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&yd(i,t,e,n,s,r,o,a)}function Qp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!jp(i,t)&&(fa(i,t)&&fa(t,i)&&tm(i,t)&&(ni(i.prev,i,t.prev)||ni(i,t.prev,t))||Ro(i,t)&&ni(i.prev,i,i.next)>0&&ni(t.prev,t,t.next)>0)}function ni(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ro(i,t){return i.x===t.x&&i.y===t.y}function Sd(i,t,e,n){const s=qa(ni(i,t,e)),r=qa(ni(i,t,n)),o=qa(ni(e,n,i)),a=qa(ni(e,n,t));return!!(s!==r&&o!==a||s===0&&Za(i,e,t)||r===0&&Za(i,n,t)||o===0&&Za(e,i,n)||a===0&&Za(e,t,n))}function Za(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function qa(i){return i>0?1:i<0?-1:0}function jp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Sd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function fa(i,t){return ni(i.prev,i,i.next)<0?ni(i,t,i.next)>=0&&ni(i,i.prev,t)>=0:ni(i,t,i.prev)<0||ni(i,i.next,t)<0}function tm(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function bd(i,t){const e=Su(i.i,i.x,i.y),n=Su(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function $h(i,t,e,n){const s=Su(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function da(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Su(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function em(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class nm{static triangulate(t,e,n=2){return Bp(t,e,n)}}class po{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return po.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Kh(t),Jh(n,t);let o=t.length;e.forEach(Kh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Jh(n,e[c]);const a=nm.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Kh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Jh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ra extends Pn{constructor(t=new fl([new $t(.5,.5),new $t(-.5,.5),new $t(-.5,-.5),new $t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new an(s,3)),this.setAttribute("uv",new an(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,h=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:h-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:im;let R,b=!1,T,A,F,M;if(p){R=p.getSpacedPoints(u),b=!0,f=!1;const vt=p.isCatmullRomCurve3?p.closed:!1;T=p.computeFrenetFrames(u,vt),A=new E,F=new E,M=new E}f||(g=0,h=0,m=0,v=0);const C=a.extractPoints(l);let O=C.shape;const B=C.holes;if(!po.isClockWise(O)){O=O.reverse();for(let vt=0,zt=B.length;vt<zt;vt++){const Gt=B[vt];po.isClockWise(Gt)&&(B[vt]=Gt.reverse())}}function nt(vt){const Gt=10000000000000001e-36;let Ut=vt[0];for(let Qt=1;Qt<=vt.length;Qt++){const ke=Qt%vt.length,Le=vt[ke],ut=Le.x-Ut.x,Jt=Le.y-Ut.y,N=ut*ut+Jt*Jt,Zt=Math.max(Math.abs(Le.x),Math.abs(Le.y),Math.abs(Ut.x),Math.abs(Ut.y)),fe=Gt*Zt*Zt;if(N<=fe){vt.splice(ke,1),Qt--;continue}Ut=Le}}nt(O),B.forEach(nt);const H=B.length,J=O;for(let vt=0;vt<H;vt++){const zt=B[vt];O=O.concat(zt)}function Mt(vt,zt,Gt){return zt||Rn("ExtrudeGeometry: vec does not exist"),vt.clone().addScaledVector(zt,Gt)}const rt=O.length;function At(vt,zt,Gt){let Ut,Qt,ke;const Le=vt.x-zt.x,ut=vt.y-zt.y,Jt=Gt.x-vt.x,N=Gt.y-vt.y,Zt=Le*Le+ut*ut,fe=Le*N-ut*Jt;if(Math.abs(fe)>Number.EPSILON){const P=Math.sqrt(Zt),_=Math.sqrt(Jt*Jt+N*N),K=zt.x-ut/P,ht=zt.y+Le/P,Tt=Gt.x-N/_,jt=Gt.y+Jt/_,qt=((Tt-K)*N-(jt-ht)*Jt)/(Le*N-ut*Jt);Ut=K+Le*qt-vt.x,Qt=ht+ut*qt-vt.y;const Et=Ut*Ut+Qt*Qt;if(Et<=2)return new $t(Ut,Qt);ke=Math.sqrt(Et/2)}else{let P=!1;Le>Number.EPSILON?Jt>Number.EPSILON&&(P=!0):Le<-Number.EPSILON?Jt<-Number.EPSILON&&(P=!0):Math.sign(ut)===Math.sign(N)&&(P=!0),P?(Ut=-ut,Qt=Le,ke=Math.sqrt(Zt)):(Ut=Le,Qt=ut,ke=Math.sqrt(Zt/2))}return new $t(Ut/ke,Qt/ke)}const gt=[];for(let vt=0,zt=J.length,Gt=zt-1,Ut=vt+1;vt<zt;vt++,Gt++,Ut++)Gt===zt&&(Gt=0),Ut===zt&&(Ut=0),gt[vt]=At(J[vt],J[Gt],J[Ut]);const yt=[];let Rt,ye=gt.concat();for(let vt=0,zt=H;vt<zt;vt++){const Gt=B[vt];Rt=[];for(let Ut=0,Qt=Gt.length,ke=Qt-1,Le=Ut+1;Ut<Qt;Ut++,ke++,Le++)ke===Qt&&(ke=0),Le===Qt&&(Le=0),Rt[Ut]=At(Gt[Ut],Gt[ke],Gt[Le]);yt.push(Rt),ye=ye.concat(Rt)}let we;if(g===0)we=po.triangulateShape(J,B);else{const vt=[],zt=[];for(let Gt=0;Gt<g;Gt++){const Ut=Gt/g,Qt=h*Math.cos(Ut*Math.PI/2),ke=m*Math.sin(Ut*Math.PI/2)+v;for(let Le=0,ut=J.length;Le<ut;Le++){const Jt=Mt(J[Le],gt[Le],ke);bt(Jt.x,Jt.y,-Qt),Ut===0&&vt.push(Jt)}for(let Le=0,ut=H;Le<ut;Le++){const Jt=B[Le];Rt=yt[Le];const N=[];for(let Zt=0,fe=Jt.length;Zt<fe;Zt++){const P=Mt(Jt[Zt],Rt[Zt],ke);bt(P.x,P.y,-Qt),Ut===0&&N.push(P)}Ut===0&&zt.push(N)}}we=po.triangulateShape(vt,zt)}const en=we.length,Z=m+v;for(let vt=0;vt<rt;vt++){const zt=f?Mt(O[vt],ye[vt],Z):O[vt];b?(F.copy(T.normals[0]).multiplyScalar(zt.x),A.copy(T.binormals[0]).multiplyScalar(zt.y),M.copy(R[0]).add(F).add(A),bt(M.x,M.y,M.z)):bt(zt.x,zt.y,0)}for(let vt=1;vt<=u;vt++)for(let zt=0;zt<rt;zt++){const Gt=f?Mt(O[zt],ye[zt],Z):O[zt];b?(F.copy(T.normals[vt]).multiplyScalar(Gt.x),A.copy(T.binormals[vt]).multiplyScalar(Gt.y),M.copy(R[vt]).add(F).add(A),bt(M.x,M.y,M.z)):bt(Gt.x,Gt.y,d/u*vt)}for(let vt=g-1;vt>=0;vt--){const zt=vt/g,Gt=h*Math.cos(zt*Math.PI/2),Ut=m*Math.sin(zt*Math.PI/2)+v;for(let Qt=0,ke=J.length;Qt<ke;Qt++){const Le=Mt(J[Qt],gt[Qt],Ut);bt(Le.x,Le.y,d+Gt)}for(let Qt=0,ke=B.length;Qt<ke;Qt++){const Le=B[Qt];Rt=yt[Qt];for(let ut=0,Jt=Le.length;ut<Jt;ut++){const N=Mt(Le[ut],Rt[ut],Ut);b?bt(N.x,N.y+R[u-1].y,R[u-1].x+Gt):bt(N.x,N.y,d+Gt)}}}ce(),_t();function ce(){const vt=s.length/3;if(f){let zt=0,Gt=rt*zt;for(let Ut=0;Ut<en;Ut++){const Qt=we[Ut];wt(Qt[2]+Gt,Qt[1]+Gt,Qt[0]+Gt)}zt=u+g*2,Gt=rt*zt;for(let Ut=0;Ut<en;Ut++){const Qt=we[Ut];wt(Qt[0]+Gt,Qt[1]+Gt,Qt[2]+Gt)}}else{for(let zt=0;zt<en;zt++){const Gt=we[zt];wt(Gt[2],Gt[1],Gt[0])}for(let zt=0;zt<en;zt++){const Gt=we[zt];wt(Gt[0]+rt*u,Gt[1]+rt*u,Gt[2]+rt*u)}}n.addGroup(vt,s.length/3-vt,0)}function _t(){const vt=s.length/3;let zt=0;q(J,zt),zt+=J.length;for(let Gt=0,Ut=B.length;Gt<Ut;Gt++){const Qt=B[Gt];q(Qt,zt),zt+=Qt.length}n.addGroup(vt,s.length/3-vt,1)}function q(vt,zt){let Gt=vt.length;for(;--Gt>=0;){const Ut=Gt;let Qt=Gt-1;Qt<0&&(Qt=vt.length-1);for(let ke=0,Le=u+g*2;ke<Le;ke++){const ut=rt*ke,Jt=rt*(ke+1),N=zt+Ut+ut,Zt=zt+Qt+ut,fe=zt+Qt+Jt,P=zt+Ut+Jt;Kt(N,Zt,fe,P)}}}function bt(vt,zt,Gt){c.push(vt),c.push(zt),c.push(Gt)}function wt(vt,zt,Gt){Ht(vt),Ht(zt),Ht(Gt);const Ut=s.length/3,Qt=S.generateTopUV(n,s,Ut-3,Ut-2,Ut-1);Te(Qt[0]),Te(Qt[1]),Te(Qt[2])}function Kt(vt,zt,Gt,Ut){Ht(vt),Ht(zt),Ht(Ut),Ht(zt),Ht(Gt),Ht(Ut);const Qt=s.length/3,ke=S.generateSideWallUV(n,s,Qt-6,Qt-3,Qt-2,Qt-1);Te(ke[0]),Te(ke[1]),Te(ke[3]),Te(ke[1]),Te(ke[2]),Te(ke[3])}function Ht(vt){s.push(c[vt*3+0]),s.push(c[vt*3+1]),s.push(c[vt*3+2])}function Te(vt){r.push(vt.x),r.push(vt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return sm(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Mu[s.type]().fromJSON(s)),new ra(n,t.options)}}const im={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new $t(r,o),new $t(a,c),new $t(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],d=t[n*3+2],f=t[s*3],h=t[s*3+1],m=t[s*3+2],v=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new $t(o,1-c),new $t(l,1-d),new $t(f,1-m),new $t(v,1-p)]:[new $t(a,1-c),new $t(u,1-d),new $t(h,1-m),new $t(g,1-p)]}};function sm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class bo extends ju{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new bo(t.radius,t.detail)}}class nh extends Pn{constructor(t=[new $t(0,-.5),new $t(.5,0),new $t(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Mn(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,d=new E,f=new $t,h=new E,m=new E,v=new E;let g=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:g=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,h.x=p*1,h.y=-g,h.z=p*0,v.copy(h),h.normalize(),c.push(h.x,h.y,h.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:g=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,h.x=p*1,h.y=-g,h.z=p*0,m.copy(h),h.x+=v.x,h.y+=v.y,h.z+=v.z,h.normalize(),c.push(h.x,h.y,h.z),v.copy(m)}for(let S=0;S<=e;S++){const R=n+S*u*s,b=Math.sin(R),T=Math.cos(R);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*b,d.y=t[A].y,d.z=t[A].x*T,o.push(d.x,d.y,d.z),f.x=S/e,f.y=A/(t.length-1),a.push(f.x,f.y);const F=c[3*A+0]*b,M=c[3*A+1],C=c[3*A+0]*T;l.push(F,M,C)}}for(let S=0;S<e;S++)for(let R=0;R<t.length-1;R++){const b=R+S*t.length,T=b,A=b+t.length,F=b+t.length+1,M=b+1;r.push(T,A,M),r.push(F,M,A)}this.setIndex(r),this.setAttribute("position",new an(o,3)),this.setAttribute("uv",new an(a,2)),this.setAttribute("normal",new an(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nh(t.points,t.segments,t.phiStart,t.phiLength)}}class ii extends Pn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,d=t/a,f=e/c,h=[],m=[],v=[],g=[];for(let p=0;p<u;p++){const S=p*f-o;for(let R=0;R<l;R++){const b=R*d-r;m.push(b,-S,0),v.push(0,0,1),g.push(R/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const R=S+l*p,b=S+l*(p+1),T=S+1+l*(p+1),A=S+1+l*p;h.push(R,b,A),h.push(b,T,A)}this.setIndex(h),this.setAttribute("position",new an(m,3)),this.setAttribute("normal",new an(v,3)),this.setAttribute("uv",new an(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.width,t.height,t.widthSegments,t.heightSegments)}}class ih extends Pn{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let d=t;const f=(e-t)/s,h=new E,m=new $t;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){const p=r+g/n*o;h.x=d*Math.cos(p),h.y=d*Math.sin(p),c.push(h.x,h.y,h.z),l.push(0,0,1),m.x=(h.x/e+1)/2,m.y=(h.y/e+1)/2,u.push(m.x,m.y)}d+=f}for(let v=0;v<s;v++){const g=v*(n+1);for(let p=0;p<n;p++){const S=p+g,R=S,b=S+n+1,T=S+n+2,A=S+1;a.push(R,b,A),a.push(b,T,A)}}this.setIndex(a),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(l,3)),this.setAttribute("uv",new an(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ih(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class mi extends Pn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new E,f=new E,h=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){const S=[],R=p/n,b=o+R*a,T=t*Math.cos(b),A=Math.sqrt(t*t-T*T);let F=0;p===0&&o===0?F=.5/e:p===n&&c===Math.PI&&(F=-.5/e);for(let M=0;M<=e;M++){const C=M/e,O=s+C*r;d.x=-A*Math.cos(O),d.y=T,d.z=A*Math.sin(O),m.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),g.push(C+F,1-R),S.push(l++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const R=u[p][S+1],b=u[p][S],T=u[p+1][S],A=u[p+1][S+1];(p!==0||o>0)&&h.push(R,b,A),(p!==n-1||c<Math.PI)&&h.push(b,T,A)}this.setIndex(h),this.setAttribute("position",new an(m,3)),this.setAttribute("normal",new an(v,3)),this.setAttribute("uv",new an(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ci extends Pn{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const c=[],l=[],u=[],d=[],f=new E,h=new E,m=new E;for(let v=0;v<=n;v++){const g=o+v/n*a;for(let p=0;p<=s;p++){const S=p/s*r;h.x=(t+e*Math.cos(g))*Math.cos(S),h.y=(t+e*Math.cos(g))*Math.sin(S),h.z=e*Math.sin(g),l.push(h.x,h.y,h.z),f.x=t*Math.cos(S),f.y=t*Math.sin(S),m.subVectors(h,f).normalize(),u.push(m.x,m.y,m.z),d.push(p/s),d.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=s;g++){const p=(s+1)*v+g-1,S=(s+1)*(v-1)+g-1,R=(s+1)*(v-1)+g,b=(s+1)*v+g;c.push(p,S,b),c.push(S,R,b)}this.setIndex(c),this.setAttribute("position",new an(l,3)),this.setAttribute("normal",new an(u,3)),this.setAttribute("uv",new an(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ci(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function Po(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Qh(s))s.isRenderTargetTexture?(rn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Qh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ui(i){const t={};for(let e=0;e<i.length;e++){const n=Po(i[e]);for(const s in n)t[s]=n[s]}return t}function Qh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function rm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:En.workingColorSpace}const pa={clone:Po,merge:Ui};var om=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,am=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends mr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=om,this.fragmentShader=am,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Po(t.uniforms),this.uniformsGroups=rm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ot().setHex(s.value);break;case"v2":this.uniforms[n].value=new $t().fromArray(s.value);break;case"v3":this.uniforms[n].value=new E().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ei().fromArray(s.value);break;case"m3":this.uniforms[n].value=new pn().fromArray(s.value);break;case"m4":this.uniforms[n].value=new xn().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Td extends xi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sn extends mr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_u,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ys,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class lm extends mr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=S0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cm extends mr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ga extends $n{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class um extends ga{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const xc=new xn,jh=new E,tf=new E;class sh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.mapType=Qi,this.map=null,this.mapPass=null,this.matrix=new xn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qu,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new ei(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;jh.setFromMatrixPosition(t.matrixWorld),e.position.copy(jh),tf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){xc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(xc,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===ca||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(xc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const $a=new E,Ka=new Ms,bs=new E;class Ed extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xn,this.projectionMatrix=new xn,this.projectionMatrixInverse=new xn,this.coordinateSystem=Rs,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose($a,Ka,bs),bs.x===1&&bs.y===1&&bs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,Ka,bs.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose($a,Ka,bs),bs.x===1&&bs.y===1&&bs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,Ka,bs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ar=new E,ef=new $t,nf=new $t;class Xi extends Ed{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ao*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ar.x,ar.y).multiplyScalar(-t/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ar.x,ar.y).multiplyScalar(-t/ar.z)}getViewSize(t,e){return this.getViewBounds(t,ef,nf),e.subVectors(nf,ef)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ea*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class hm extends sh{constructor(){super(new Xi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=Ao*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class Mc extends ga{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($n.DEFAULT_UP),this.updateMatrix(),this.target=new $n,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new hm}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class fm extends sh{constructor(){super(new Xi(90,1,.5,500)),this.isPointLightShadow=!0}}class Ad extends ga{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new fm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class zl extends Ed{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class dm extends sh{constructor(){super(new zl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yc extends ga{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($n.DEFAULT_UP),this.updateMatrix(),this.target=new $n,this.shadow=new dm}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class pm extends ga{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const so=-90,ro=1;class mm extends $n{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xi(so,ro,t,e);s.layers=this.layers,this.add(s);const r=new Xi(so,ro,t,e);r.layers=this.layers,this.add(r);const o=new Xi(so,ro,t,e);o.layers=this.layers,this.add(o);const a=new Xi(so,ro,t,e);a.layers=this.layers,this.add(a);const c=new Xi(so,ro,t,e);c.layers=this.layers,this.add(c);const l=new Xi(so,ro,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Rs)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,f,h),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class gm extends Xi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class vm{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=_m.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function _m(){this._document.hidden===!1&&this.reset()}const sf=new xn;class Cd{constructor(t,e,n=0,s=1/0){this.ray=new Ol(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ku,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Rn("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return sf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sf),this}intersectObject(t,e=!0,n=[]){return bu(t,this,n,e),n.sort(rf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)bu(t[s],this,n,e);return n.sort(rf),n}}function rf(i,t){return i.distance-t.distance}function bu(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)bu(r[o],t,e,!0)}}class Rd{static{Rd.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}}function of(i,t,e,n){const s=xm(n);switch(e){case id:return i*t;case Hu:return i*t/s.components*s.byteLength;case Vu:return i*t/s.components*s.byteLength;case Ur:return i*t*2/s.components*s.byteLength;case Wu:return i*t*2/s.components*s.byteLength;case sd:return i*t*3/s.components*s.byteLength;case _s:return i*t*4/s.components*s.byteLength;case Xu:return i*t*4/s.components*s.byteLength;case al:case ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case cl:case ul:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vc:case Xc:return Math.max(i,16)*Math.max(t,8)/4;case Hc:case Wc:return Math.max(i,8)*Math.max(t,8)/2;case Yc:case Zc:case $c:case Kc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qc:case _l:case Jc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case tu:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case eu:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case nu:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case iu:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case su:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ru:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ou:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case au:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case lu:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case cu:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case uu:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case hu:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fu:case du:case pu:return Math.ceil(i/4)*Math.ceil(t/4)*16;case mu:case gu:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xl:case vu:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xm(i){switch(i){case Qi:case jf:return{byteLength:1,components:1};case aa:case td:case Zi:return{byteLength:2,components:1};case ku:case Gu:return{byteLength:2,components:4};case Ns:case Bu:case vs:return{byteLength:4,components:1};case ed:case nd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Iu}}));typeof window<"u"&&(window.__THREE__?rn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Iu);function Pd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Mm(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((h,m)=>h.start-m.start);let f=0;for(let h=1;h<d.length;h++){const m=d[f],v=d[h];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,m=d.length;h<m;h++){const v=d[h];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var ym=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sm=`#ifdef USE_ALPHAHASH
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
#endif`,bm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Em=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Am=`#ifdef USE_AOMAP
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
#endif`,Cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rm=`#ifdef USE_BATCHING
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
#endif`,Pm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nm=`#ifdef USE_IRIDESCENCE
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
#endif`,Um=`#ifdef USE_BUMPMAP
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
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Wm=`#define PI 3.141592653589793
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
} // validated`,Xm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ym=`vec3 transformedNormal = objectNormal;
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
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Km=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jm=`#ifdef USE_ENVMAP
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
#endif`,tg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,eg=`#ifdef USE_ENVMAP
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
#endif`,ng=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,og=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ag=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lg=`#ifdef USE_GRADIENTMAP
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
}`,cg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ug=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,dg=`#ifdef USE_ENVMAP
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
#endif`,pg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_g=`PhysicalMaterial material;
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
#endif`,xg=`uniform sampler2D dfgLUT;
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
}`,Mg=`
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
#endif`,yg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,wg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ag=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lg=`#if defined( USE_POINTS_UV )
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
#endif`,Ig=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ng=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ug=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Og=`#ifdef USE_MORPHTARGETS
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
#endif`,zg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wg=`#ifdef USE_NORMALMAP
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
#endif`,Xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,o1=`float getShadowMask() {
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
}`,a1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l1=`#ifdef USE_SKINNING
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
#endif`,c1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u1=`#ifdef USE_SKINNING
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
#endif`,h1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,m1=`#ifdef USE_TRANSMISSION
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
#endif`,g1=`#ifdef USE_TRANSMISSION
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
#endif`,v1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const y1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S1=`uniform sampler2D t2D;
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
}`,b1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,T1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`#include <common>
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
}`,C1=`#if DEPTH_PACKING == 3200
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
}`,R1=`#define DISTANCE
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
}`,P1=`#define DISTANCE
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
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,I1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`uniform float scale;
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
}`,N1=`uniform vec3 diffuse;
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
}`,U1=`#include <common>
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
}`,F1=`uniform vec3 diffuse;
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
}`,O1=`#define LAMBERT
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
}`,z1=`#define LAMBERT
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
}`,B1=`#define MATCAP
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
}`,k1=`#define MATCAP
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
}`,G1=`#define NORMAL
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
}`,H1=`#define NORMAL
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
}`,V1=`#define PHONG
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
}`,W1=`#define PHONG
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
}`,X1=`#define STANDARD
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
}`,Y1=`#define STANDARD
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
}`,Z1=`#define TOON
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
}`,q1=`#define TOON
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
}`,$1=`uniform float size;
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
}`,K1=`uniform vec3 diffuse;
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
}`,J1=`#include <common>
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
}`,Q1=`uniform vec3 color;
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
}`,j1=`uniform float rotation;
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
}`,tv=`uniform vec3 diffuse;
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
}`,_n={alphahash_fragment:ym,alphahash_pars_fragment:Sm,alphamap_fragment:bm,alphamap_pars_fragment:wm,alphatest_fragment:Tm,alphatest_pars_fragment:Em,aomap_fragment:Am,aomap_pars_fragment:Cm,batching_pars_vertex:Rm,batching_vertex:Pm,begin_vertex:Lm,beginnormal_vertex:Im,bsdfs:Dm,iridescence_fragment:Nm,bumpmap_pars_fragment:Um,clipping_planes_fragment:Fm,clipping_planes_pars_fragment:Om,clipping_planes_pars_vertex:zm,clipping_planes_vertex:Bm,color_fragment:km,color_pars_fragment:Gm,color_pars_vertex:Hm,color_vertex:Vm,common:Wm,cube_uv_reflection_fragment:Xm,defaultnormal_vertex:Ym,displacementmap_pars_vertex:Zm,displacementmap_vertex:qm,emissivemap_fragment:$m,emissivemap_pars_fragment:Km,colorspace_fragment:Jm,colorspace_pars_fragment:Qm,envmap_fragment:jm,envmap_common_pars_fragment:tg,envmap_pars_fragment:eg,envmap_pars_vertex:ng,envmap_physical_pars_fragment:dg,envmap_vertex:ig,fog_vertex:sg,fog_pars_vertex:rg,fog_fragment:og,fog_pars_fragment:ag,gradientmap_pars_fragment:lg,lightmap_pars_fragment:cg,lights_lambert_fragment:ug,lights_lambert_pars_fragment:hg,lights_pars_begin:fg,lights_toon_fragment:pg,lights_toon_pars_fragment:mg,lights_phong_fragment:gg,lights_phong_pars_fragment:vg,lights_physical_fragment:_g,lights_physical_pars_fragment:xg,lights_fragment_begin:Mg,lights_fragment_maps:yg,lights_fragment_end:Sg,lightprobes_pars_fragment:bg,logdepthbuf_fragment:wg,logdepthbuf_pars_fragment:Tg,logdepthbuf_pars_vertex:Eg,logdepthbuf_vertex:Ag,map_fragment:Cg,map_pars_fragment:Rg,map_particle_fragment:Pg,map_particle_pars_fragment:Lg,metalnessmap_fragment:Ig,metalnessmap_pars_fragment:Dg,morphinstance_vertex:Ng,morphcolor_vertex:Ug,morphnormal_vertex:Fg,morphtarget_pars_vertex:Og,morphtarget_vertex:zg,normal_fragment_begin:Bg,normal_fragment_maps:kg,normal_pars_fragment:Gg,normal_pars_vertex:Hg,normal_vertex:Vg,normalmap_pars_fragment:Wg,clearcoat_normal_fragment_begin:Xg,clearcoat_normal_fragment_maps:Yg,clearcoat_pars_fragment:Zg,iridescence_pars_fragment:qg,opaque_fragment:$g,packing:Kg,premultiplied_alpha_fragment:Jg,project_vertex:Qg,dithering_fragment:jg,dithering_pars_fragment:t1,roughnessmap_fragment:e1,roughnessmap_pars_fragment:n1,shadowmap_pars_fragment:i1,shadowmap_pars_vertex:s1,shadowmap_vertex:r1,shadowmask_pars_fragment:o1,skinbase_vertex:a1,skinning_pars_vertex:l1,skinning_vertex:c1,skinnormal_vertex:u1,specularmap_fragment:h1,specularmap_pars_fragment:f1,tonemapping_fragment:d1,tonemapping_pars_fragment:p1,transmission_fragment:m1,transmission_pars_fragment:g1,uv_pars_fragment:v1,uv_pars_vertex:_1,uv_vertex:x1,worldpos_vertex:M1,background_vert:y1,background_frag:S1,backgroundCube_vert:b1,backgroundCube_frag:w1,cube_vert:T1,cube_frag:E1,depth_vert:A1,depth_frag:C1,distance_vert:R1,distance_frag:P1,equirect_vert:L1,equirect_frag:I1,linedashed_vert:D1,linedashed_frag:N1,meshbasic_vert:U1,meshbasic_frag:F1,meshlambert_vert:O1,meshlambert_frag:z1,meshmatcap_vert:B1,meshmatcap_frag:k1,meshnormal_vert:G1,meshnormal_frag:H1,meshphong_vert:V1,meshphong_frag:W1,meshphysical_vert:X1,meshphysical_frag:Y1,meshtoon_vert:Z1,meshtoon_frag:q1,points_vert:$1,points_frag:K1,shadow_vert:J1,shadow_frag:Q1,sprite_vert:j1,sprite_frag:tv},Re={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pn},alphaMap:{value:null},alphaMapTransform:{value:new pn},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pn}},envmap:{envMap:{value:null},envMapRotation:{value:new pn},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pn}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pn}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pn},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pn},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pn},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pn}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pn}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pn}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new E},probesMax:{value:new E},probesResolution:{value:new E}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pn},alphaTest:{value:0},uvTransform:{value:new pn}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pn},alphaMap:{value:null},alphaMapTransform:{value:new pn},alphaTest:{value:0}}},Cs={basic:{uniforms:Ui([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:_n.meshbasic_vert,fragmentShader:_n.meshbasic_frag},lambert:{uniforms:Ui([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:_n.meshlambert_vert,fragmentShader:_n.meshlambert_frag},phong:{uniforms:Ui([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_n.meshphong_vert,fragmentShader:_n.meshphong_frag},standard:{uniforms:Ui([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_n.meshphysical_vert,fragmentShader:_n.meshphysical_frag},toon:{uniforms:Ui([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ot(0)}}]),vertexShader:_n.meshtoon_vert,fragmentShader:_n.meshtoon_frag},matcap:{uniforms:Ui([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:_n.meshmatcap_vert,fragmentShader:_n.meshmatcap_frag},points:{uniforms:Ui([Re.points,Re.fog]),vertexShader:_n.points_vert,fragmentShader:_n.points_frag},dashed:{uniforms:Ui([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_n.linedashed_vert,fragmentShader:_n.linedashed_frag},depth:{uniforms:Ui([Re.common,Re.displacementmap]),vertexShader:_n.depth_vert,fragmentShader:_n.depth_frag},normal:{uniforms:Ui([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:_n.meshnormal_vert,fragmentShader:_n.meshnormal_frag},sprite:{uniforms:Ui([Re.sprite,Re.fog]),vertexShader:_n.sprite_vert,fragmentShader:_n.sprite_frag},background:{uniforms:{uvTransform:{value:new pn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_n.background_vert,fragmentShader:_n.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pn}},vertexShader:_n.backgroundCube_vert,fragmentShader:_n.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_n.cube_vert,fragmentShader:_n.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_n.equirect_vert,fragmentShader:_n.equirect_frag},distance:{uniforms:Ui([Re.common,Re.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_n.distance_vert,fragmentShader:_n.distance_frag},shadow:{uniforms:Ui([Re.lights,Re.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:_n.shadow_vert,fragmentShader:_n.shadow_frag}};Cs.physical={uniforms:Ui([Cs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pn},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pn},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pn},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pn},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pn},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pn},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pn},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pn},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pn},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pn},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pn},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pn}}]),vertexShader:_n.meshphysical_vert,fragmentShader:_n.meshphysical_frag};const Ja={r:0,b:0,g:0},ev=new xn,Ld=new pn;Ld.set(-1,0,0,0,1,0,0,0,1);function nv(i,t,e,n,s,r){const o=new Ot(0);let a=s===!0?0:1,c,l,u=null,d=0,f=null;function h(S){let R=S.isScene===!0?S.background:null;if(R&&R.isTexture){const b=S.backgroundBlurriness>0;R=t.get(R,b)}return R}function m(S){let R=!1;const b=h(S);b===null?g(o,a):b&&b.isColor&&(g(b,1),R=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(S,R){const b=h(R);b&&(b.isCubeTexture||b.mapping===Fl)?(l===void 0&&(l=new Ne(new qn(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Po(Cs.backgroundCube.uniforms),vertexShader:Cs.backgroundCube.vertexShader,fragmentShader:Cs.backgroundCube.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,A,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ev.makeRotationFromEuler(R.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ld),l.material.toneMapped=En.getTransfer(b.colorSpace)!==Fn,(u!==b||d!==b.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Ne(new ii(2,2),new xi({name:"BackgroundMaterial",uniforms:Po(Cs.background.uniforms),vertexShader:Cs.background.vertexShader,fragmentShader:Cs.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=En.getTransfer(b.colorSpace)!==Fn,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function g(S,R){S.getRGB(Ja,wd(i)),e.buffers.color.setClear(Ja.r,Ja.g,Ja.b,R,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,R=1){o.set(S),a=R,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,g(o,a)},render:m,addToRenderList:v,dispose:p}}function iv(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(B,G,nt,H,J){let Mt=!1;const rt=d(B,H,nt,G);r!==rt&&(r=rt,l(r.object)),Mt=h(B,H,nt,J),Mt&&m(B,H,nt,J),J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(Mt||o)&&(o=!1,b(B,G,nt,H),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function c(){return i.createVertexArray()}function l(B){return i.bindVertexArray(B)}function u(B){return i.deleteVertexArray(B)}function d(B,G,nt,H){const J=H.wireframe===!0;let Mt=n[G.id];Mt===void 0&&(Mt={},n[G.id]=Mt);const rt=B.isInstancedMesh===!0?B.id:0;let At=Mt[rt];At===void 0&&(At={},Mt[rt]=At);let gt=At[nt.id];gt===void 0&&(gt={},At[nt.id]=gt);let yt=gt[J];return yt===void 0&&(yt=f(c()),gt[J]=yt),yt}function f(B){const G=[],nt=[],H=[];for(let J=0;J<e;J++)G[J]=0,nt[J]=0,H[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:nt,attributeDivisors:H,object:B,attributes:{},index:null}}function h(B,G,nt,H){const J=r.attributes,Mt=G.attributes;let rt=0;const At=nt.getAttributes();for(const gt in At)if(At[gt].location>=0){const Rt=J[gt];let ye=Mt[gt];if(ye===void 0&&(gt==="instanceMatrix"&&B.instanceMatrix&&(ye=B.instanceMatrix),gt==="instanceColor"&&B.instanceColor&&(ye=B.instanceColor)),Rt===void 0||Rt.attribute!==ye||ye&&Rt.data!==ye.data)return!0;rt++}return r.attributesNum!==rt||r.index!==H}function m(B,G,nt,H){const J={},Mt=G.attributes;let rt=0;const At=nt.getAttributes();for(const gt in At)if(At[gt].location>=0){let Rt=Mt[gt];Rt===void 0&&(gt==="instanceMatrix"&&B.instanceMatrix&&(Rt=B.instanceMatrix),gt==="instanceColor"&&B.instanceColor&&(Rt=B.instanceColor));const ye={};ye.attribute=Rt,Rt&&Rt.data&&(ye.data=Rt.data),J[gt]=ye,rt++}r.attributes=J,r.attributesNum=rt,r.index=H}function v(){const B=r.newAttributes;for(let G=0,nt=B.length;G<nt;G++)B[G]=0}function g(B){p(B,0)}function p(B,G){const nt=r.newAttributes,H=r.enabledAttributes,J=r.attributeDivisors;nt[B]=1,H[B]===0&&(i.enableVertexAttribArray(B),H[B]=1),J[B]!==G&&(i.vertexAttribDivisor(B,G),J[B]=G)}function S(){const B=r.newAttributes,G=r.enabledAttributes;for(let nt=0,H=G.length;nt<H;nt++)G[nt]!==B[nt]&&(i.disableVertexAttribArray(nt),G[nt]=0)}function R(B,G,nt,H,J,Mt,rt){rt===!0?i.vertexAttribIPointer(B,G,nt,J,Mt):i.vertexAttribPointer(B,G,nt,H,J,Mt)}function b(B,G,nt,H){v();const J=H.attributes,Mt=nt.getAttributes(),rt=G.defaultAttributeValues;for(const At in Mt){const gt=Mt[At];if(gt.location>=0){let yt=J[At];if(yt===void 0&&(At==="instanceMatrix"&&B.instanceMatrix&&(yt=B.instanceMatrix),At==="instanceColor"&&B.instanceColor&&(yt=B.instanceColor)),yt!==void 0){const Rt=yt.normalized,ye=yt.itemSize,we=t.get(yt);if(we===void 0)continue;const en=we.buffer,Z=we.type,ce=we.bytesPerElement,_t=Z===i.INT||Z===i.UNSIGNED_INT||yt.gpuType===Bu;if(yt.isInterleavedBufferAttribute){const q=yt.data,bt=q.stride,wt=yt.offset;if(q.isInstancedInterleavedBuffer){for(let Kt=0;Kt<gt.locationSize;Kt++)p(gt.location+Kt,q.meshPerAttribute);B.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Kt=0;Kt<gt.locationSize;Kt++)g(gt.location+Kt);i.bindBuffer(i.ARRAY_BUFFER,en);for(let Kt=0;Kt<gt.locationSize;Kt++)R(gt.location+Kt,ye/gt.locationSize,Z,Rt,bt*ce,(wt+ye/gt.locationSize*Kt)*ce,_t)}else{if(yt.isInstancedBufferAttribute){for(let q=0;q<gt.locationSize;q++)p(gt.location+q,yt.meshPerAttribute);B.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let q=0;q<gt.locationSize;q++)g(gt.location+q);i.bindBuffer(i.ARRAY_BUFFER,en);for(let q=0;q<gt.locationSize;q++)R(gt.location+q,ye/gt.locationSize,Z,Rt,ye*ce,ye/gt.locationSize*q*ce,_t)}}else if(rt!==void 0){const Rt=rt[At];if(Rt!==void 0)switch(Rt.length){case 2:i.vertexAttrib2fv(gt.location,Rt);break;case 3:i.vertexAttrib3fv(gt.location,Rt);break;case 4:i.vertexAttrib4fv(gt.location,Rt);break;default:i.vertexAttrib1fv(gt.location,Rt)}}}}S()}function T(){C();for(const B in n){const G=n[B];for(const nt in G){const H=G[nt];for(const J in H){const Mt=H[J];for(const rt in Mt)u(Mt[rt].object),delete Mt[rt];delete H[J]}}delete n[B]}}function A(B){if(n[B.id]===void 0)return;const G=n[B.id];for(const nt in G){const H=G[nt];for(const J in H){const Mt=H[J];for(const rt in Mt)u(Mt[rt].object),delete Mt[rt];delete H[J]}}delete n[B.id]}function F(B){for(const G in n){const nt=n[G];for(const H in nt){const J=nt[H];if(J[B.id]===void 0)continue;const Mt=J[B.id];for(const rt in Mt)u(Mt[rt].object),delete Mt[rt];delete J[B.id]}}}function M(B){for(const G in n){const nt=n[G],H=B.isInstancedMesh===!0?B.id:0,J=nt[H];if(J!==void 0){for(const Mt in J){const rt=J[Mt];for(const At in rt)u(rt[At].object),delete rt[At];delete J[Mt]}delete nt[H],Object.keys(nt).length===0&&delete n[G]}}}function C(){O(),o=!0,r!==s&&(r=s,l(r.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:O,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:M,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:g,disableUnusedAttributes:S}}function sv(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let f=0;for(let h=0;h<u;h++)f+=l[h];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function rv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(F){return!(F!==_s&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(F){const M=F===Zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Qi&&F!==vs&&!M&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(rn("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&rn("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:R,maxFragmentUniforms:b,maxSamples:T,samples:A}}function ov(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new dr,a=new pn,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||n!==0||s;return s=f,n=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,h){const m=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?u(null):l();else{const S=r?0:n,R=S*4;let b=p.clippingState||null;c.value=b,b=u(m,f,R,h);for(let T=0;T!==R;++T)b[T]=e[T];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,f,h,m){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=c.value,m!==!0||g===null){const p=h+v*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let R=0,b=h;R!==v;++R,b+=4)o.copy(d[R]).applyMatrix4(S,a),o.normal.toArray(g,b),g[b+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}const mo=4,av=6,lv=20,cv=256,Yo=new zl,af=new Ot;let Sc=null,bc=0,wc=0,Tc=!1;const uv=new E,yr=new E;class wu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=uv}=r;Sc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Sc,bc,wc),this._renderer.xr.enabled=Tc,t.scissorTest=!1,oo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Nr||t.mapping===To?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pi,minFilter:Pi,generateMipmaps:!1,type:Zi,format:_s,colorSpace:Ml,depthBuffer:!1},s=lf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lf(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=hv(r)),this._blurMaterial=dv(r,t,e),this._ggxMaterial=fv(r,t,e)}return s}_compileMaterial(t){const e=new Ne(new Pn,t);this._renderer.compile(e,Yo)}_sceneToCubeUV(t,e,n,s,r){const c=new Xi(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(af),d.toneMapping=Is,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ne(new qn,new ji({name:"PMREM.Background",side:Fi,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let p=!1;const S=t.background;S?S.isColor&&(g.color.copy(S),t.background=null,p=!0):(g.color.copy(af),p=!0);for(let R=0;R<6;R++){const b=R%3;b===0?(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[R],r.y,r.z)):b===1?(c.up.set(0,0,l[R]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[R],r.z)):(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[R]));const T=this._cubeSize;oo(s,b*T,R>2?T:0,T,T),d.setRenderTarget(s),p&&d.render(v,c),d.render(t,c)}d.toneMapping=h,d.autoClear=f,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Nr||t.mapping===To;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;oo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Yo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),f=l*1.25,h=d*f,{_lodMax:m}=this,v=this._sizeLods[n],g=3*v*(n>m-mo?n-m+mo:0),p=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=h,c.mipInt.value=m-e,oo(r,g,p,3*v,2*v),s.setRenderTarget(r),s.render(a,Yo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,oo(t,g,p,3*v,2*v),s.setRenderTarget(t),s.render(a,Yo)}_blur(t,e,n,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){const o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;const l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const u=this._sizeLods[s],d=3*u*(s>this._lodMax-mo?s-this._lodMax+mo:0),f=4*(this._cubeSize-u);oo(e,d,f,3*u,2*u),o.setRenderTarget(e),o.render(c,Yo)}}function hv(i){const t=[],e=[];let n=i;const s=i-mo+1+av;for(let r=0;r<s;r++){const o=Math.pow(2,n);t.push(o);const a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,f=6,h=3,m=new Float32Array(h*f*d),v=new Float32Array(h*f*d);for(let p=0;p<d;p++){const S=p%3*2/3-1,R=p>2?0:-1,b=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];m.set(b,h*f*p);for(let T=0;T<f;T++){const A=u[T*2]*2-1,F=u[T*2+1]*2-1;p===0?yr.set(1,F,A):p===1?yr.set(-A,1,-F):p===2?yr.set(-A,F,1):p===3?yr.set(-1,F,-A):p===4?yr.set(-A,-1,F):yr.set(A,F,-1),yr.toArray(v,(p*f+T)*h)}}const g=new Pn;g.setAttribute("position",new Wn(m,h)),g.setAttribute("outputDirection",new Wn(v,h)),e.push(new Ne(g,null)),n>mo&&n--}return{lodMeshes:e,sizeLods:t}}function lf(i,t,e){const n=new Oi(i,t,e);return n.texture.mapping=Fl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function fv(i,t,e){return new xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:Ls,depthTest:!1,depthWrite:!1})}function dv(i,t,e){return new xi({name:"SphericalGaussianBlur",defines:{SAMPLES:lv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:Ls,depthTest:!1,depthWrite:!1})}function cf(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:Ls,depthTest:!1,depthWrite:!1})}function uf(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ls,depthTest:!1,depthWrite:!1})}function Bl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Id extends Oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new pd(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qn(5,5,5),r=new xi({name:"CubemapFromEquirect",uniforms:Po(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fi,blending:Ls});r.uniforms.tEquirect.value=e;const o=new Ne(s,r),a=e.minFilter;return e.minFilter===Ar&&(e.minFilter=Pi),new mm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}function pv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,h=!1){return f==null?null:h?o(f):r(f)}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===ol||h===Xl)if(t.has(f)){const m=t.get(f).texture;return a(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const v=new Id(m.height);return v.fromEquirectangularTexture(i,f),t.set(f,v),f.addEventListener("dispose",l),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const h=f.mapping,m=h===ol||h===Xl,v=h===Nr||h===To;if(m||v){let g=e.get(f);const p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new wu(i)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const S=f.image;return m&&S&&S.height>0||v&&S&&c(S)?(n===null&&(n=new wu(i)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function a(f,h){return h===ol?f.mapping=Nr:h===Xl&&(f.mapping=To),f}function c(f){let h=0;const m=6;for(let v=0;v<m;v++)f[v]!==void 0&&h++;return h===m}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function mv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&xo("WebGLRenderer: "+n+" extension not supported."),s}}}function gv(i,t,e,n){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(t.remove(h),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(d){const f=d.attributes;for(const h in f)t.update(f[h],i.ARRAY_BUFFER)}function l(d){const f=[],h=d.index,m=d.attributes.position;let v=0;if(m===void 0)return;if(h!==null){const S=h.array;v=h.version;for(let R=0,b=S.length;R<b;R+=3){const T=S[R+0],A=S[R+1],F=S[R+2];f.push(T,A,A,F,F,T)}}else{const S=m.array;v=m.version;for(let R=0,b=S.length/3-1;R<b;R+=3){const T=R+0,A=R+1,F=R+2;f.push(T,A,A,F,F,T)}}const g=new(m.count>=65535?ud:cd)(f,1);g.version=v;const p=r.get(d);p&&t.remove(p),r.set(d,g)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function vv(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,h){h!==0&&(i.drawElementsInstanced(n,f,r,d*o,h),e.update(f,n,h))}function u(d,f,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,h);let v=0;for(let g=0;g<h;g++)v+=f[g];e.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function _v(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Rn("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function xv(i,t,e){const n=new WeakMap,s=new ei;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let O=function(){M.dispose(),n.delete(a),a.removeEventListener("dispose",O)};var h=O;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],R=a.morphAttributes.color||[];let b=0;m===!0&&(b=1),v===!0&&(b=2),g===!0&&(b=3);let T=a.attributes.position.count*b,A=1;T>t.maxTextureSize&&(A=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const F=new Float32Array(T*A*4*d),M=new ad(F,T,A,d);M.type=vs,M.needsUpdate=!0;const C=b*4;for(let B=0;B<d;B++){const G=p[B],nt=S[B],H=R[B],J=T*A*4*B;for(let Mt=0;Mt<G.count;Mt++){const rt=Mt*C;m===!0&&(s.fromBufferAttribute(G,Mt),F[J+rt+0]=s.x,F[J+rt+1]=s.y,F[J+rt+2]=s.z,F[J+rt+3]=0),v===!0&&(s.fromBufferAttribute(nt,Mt),F[J+rt+4]=s.x,F[J+rt+5]=s.y,F[J+rt+6]=s.z,F[J+rt+7]=0),g===!0&&(s.fromBufferAttribute(H,Mt),F[J+rt+8]=s.x,F[J+rt+9]=s.y,F[J+rt+10]=s.z,F[J+rt+11]=H.itemSize===4?s.w:1)}}f={count:d,texture:M,size:new $t(T,A)},n.set(a,f),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const v=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Mv(i,t,e,n,s){let r=new WeakMap;function o(l){const u=s.render.frame,d=l.geometry,f=t.get(l,d);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const yv={[Du]:"LINEAR_TONE_MAPPING",[Nu]:"REINHARD_TONE_MAPPING",[Uu]:"CINEON_TONE_MAPPING",[Ul]:"ACES_FILMIC_TONE_MAPPING",[Ou]:"AGX_TONE_MAPPING",[zu]:"NEUTRAL_TONE_MAPPING",[Fu]:"CUSTOM_TONE_MAPPING"};function Sv(i,t,e,n,s,r){const o=new Oi(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null;const l=new Pn;l.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new an([0,2,0,0,2,0],2));const u=new Td({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ne(l,u),f=new zl(-1,1,1,-1,0,1);let h=null,m=null,v=!1,g,p=null,S=[],R=!1;this.setSize=function(b,T){o.setSize(b,T),a!==null&&a.setSize(b,T),c!==null&&c.setSize(b,T);for(let A=0;A<S.length;A++){const F=S[A];F.setSize&&F.setSize(b,T)}},this.setEffects=function(b){S=b,R=S.length>0&&S[0].isRenderPass===!0;const T=o.width,A=o.height;S.length>0&&a===null&&(a=new Oi(T,A,{type:Zi,depthBuffer:!1,stencilBuffer:!1}),c=new Oi(T,A,{type:Zi,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<S.length;F++){const M=S[F];M.setSize&&M.setSize(T,A)}},this.begin=function(b,T){if(v||b.toneMapping===Is&&S.length===0)return!1;if(p=T,T!==null){const A=T.width,F=T.height;(o.width!==A||o.height!==F)&&this.setSize(A,F)}return R===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=Is,!0},this.hasRenderPass=function(){return R},this.end=function(b,T){b.toneMapping=g,v=!0;let A=o,F=a;for(let M=0;M<S.length;M++){const C=S[M];C.enabled!==!1&&(C.render(b,F,A,T),C.needsSwap!==!1&&(A=F,F=F===a?c:a))}if(h!==b.outputColorSpace||m!==b.toneMapping){h=b.outputColorSpace,m=b.toneMapping,u.defines={},En.getTransfer(h)===Fn&&(u.defines.SRGB_TRANSFER="");const M=yv[m];M&&(u.defines[M]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,b.setRenderTarget(p),b.render(d,f),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const Dd=new Li,Tu=new ua(1,1),Nd=new ad,Ud=new ip,Fd=new pd,hf=[],ff=[],df=new Float32Array(16),pf=new Float32Array(9),mf=new Float32Array(4);function Do(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=hf[s];if(r===void 0&&(r=new Float32Array(s),hf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ui(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function hi(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function kl(i,t){let e=ff[t];e===void 0&&(e=new Int32Array(t),ff[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function bv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function wv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ui(e,t))return;i.uniform2fv(this.addr,t),hi(e,t)}}function Tv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ui(e,t))return;i.uniform3fv(this.addr,t),hi(e,t)}}function Ev(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ui(e,t))return;i.uniform4fv(this.addr,t),hi(e,t)}}function Av(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ui(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),hi(e,t)}else{if(ui(e,n))return;mf.set(n),i.uniformMatrix2fv(this.addr,!1,mf),hi(e,n)}}function Cv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ui(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),hi(e,t)}else{if(ui(e,n))return;pf.set(n),i.uniformMatrix3fv(this.addr,!1,pf),hi(e,n)}}function Rv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ui(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),hi(e,t)}else{if(ui(e,n))return;df.set(n),i.uniformMatrix4fv(this.addr,!1,df),hi(e,n)}}function Pv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Lv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ui(e,t))return;i.uniform2iv(this.addr,t),hi(e,t)}}function Iv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ui(e,t))return;i.uniform3iv(this.addr,t),hi(e,t)}}function Dv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ui(e,t))return;i.uniform4iv(this.addr,t),hi(e,t)}}function Nv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Uv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ui(e,t))return;i.uniform2uiv(this.addr,t),hi(e,t)}}function Fv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ui(e,t))return;i.uniform3uiv(this.addr,t),hi(e,t)}}function Ov(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ui(e,t))return;i.uniform4uiv(this.addr,t),hi(e,t)}}function zv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Tu.compareFunction=e.isReversedDepthBuffer()?Zu:Yu,r=Tu):r=Dd,e.setTexture2D(t||r,s)}function Bv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ud,s)}function kv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Fd,s)}function Gv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Nd,s)}function Hv(i){switch(i){case 5126:return bv;case 35664:return wv;case 35665:return Tv;case 35666:return Ev;case 35674:return Av;case 35675:return Cv;case 35676:return Rv;case 5124:case 35670:return Pv;case 35667:case 35671:return Lv;case 35668:case 35672:return Iv;case 35669:case 35673:return Dv;case 5125:return Nv;case 36294:return Uv;case 36295:return Fv;case 36296:return Ov;case 35678:case 36198:case 36298:case 36306:case 35682:return zv;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return Gv}}function Vv(i,t){i.uniform1fv(this.addr,t)}function Wv(i,t){const e=Do(t,this.size,2);i.uniform2fv(this.addr,e)}function Xv(i,t){const e=Do(t,this.size,3);i.uniform3fv(this.addr,e)}function Yv(i,t){const e=Do(t,this.size,4);i.uniform4fv(this.addr,e)}function Zv(i,t){const e=Do(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function qv(i,t){const e=Do(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $v(i,t){const e=Do(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Kv(i,t){i.uniform1iv(this.addr,t)}function Jv(i,t){i.uniform2iv(this.addr,t)}function Qv(i,t){i.uniform3iv(this.addr,t)}function jv(i,t){i.uniform4iv(this.addr,t)}function t_(i,t){i.uniform1uiv(this.addr,t)}function e_(i,t){i.uniform2uiv(this.addr,t)}function n_(i,t){i.uniform3uiv(this.addr,t)}function i_(i,t){i.uniform4uiv(this.addr,t)}function s_(i,t,e){const n=this.cache,s=t.length,r=kl(e,s);ui(n,r)||(i.uniform1iv(this.addr,r),hi(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Tu:o=Dd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function r_(i,t,e){const n=this.cache,s=t.length,r=kl(e,s);ui(n,r)||(i.uniform1iv(this.addr,r),hi(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ud,r[o])}function o_(i,t,e){const n=this.cache,s=t.length,r=kl(e,s);ui(n,r)||(i.uniform1iv(this.addr,r),hi(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Fd,r[o])}function a_(i,t,e){const n=this.cache,s=t.length,r=kl(e,s);ui(n,r)||(i.uniform1iv(this.addr,r),hi(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Nd,r[o])}function l_(i){switch(i){case 5126:return Vv;case 35664:return Wv;case 35665:return Xv;case 35666:return Yv;case 35674:return Zv;case 35675:return qv;case 35676:return $v;case 5124:case 35670:return Kv;case 35667:case 35671:return Jv;case 35668:case 35672:return Qv;case 35669:case 35673:return jv;case 5125:return t_;case 36294:return e_;case 36295:return n_;case 36296:return i_;case 35678:case 36198:case 36298:case 36306:case 35682:return s_;case 35679:case 36299:case 36307:return r_;case 35680:case 36300:case 36308:case 36293:return o_;case 36289:case 36303:case 36311:case 36292:return a_}}class c_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Hv(e.type)}}class u_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=l_(e.type)}}class h_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ec=/(\w+)(\])?(\[|\.)?/g;function gf(i,t){i.seq.push(t),i.map[t.id]=t}function f_(i,t,e){const n=i.name,s=n.length;for(Ec.lastIndex=0;;){const r=Ec.exec(n),o=Ec.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){gf(e,l===void 0?new c_(a,i,t):new u_(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new h_(a),gf(e,d)),e=d}}}class dl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);f_(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function vf(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const d_=37297;let p_=0;function m_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const _f=new pn;function g_(i){En._getMatrix(_f,En.workingColorSpace,i);const t=`mat3( ${_f.elements.map(e=>e.toFixed(4))} )`;switch(En.getTransfer(i)){case yl:return[t,"LinearTransferOETF"];case Fn:return[t,"sRGBTransferOETF"];default:return rn("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function xf(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+m_(i.getShaderSource(t),a)}else return r}function v_(i,t){const e=g_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const __={[Du]:"Linear",[Nu]:"Reinhard",[Uu]:"Cineon",[Ul]:"ACESFilmic",[Ou]:"AgX",[zu]:"Neutral",[Fu]:"Custom"};function x_(i,t){const e=__[t];return e===void 0?(rn("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Qa=new E;function M_(){En.getLuminanceCoefficients(Qa);const i=Qa.x.toFixed(4),t=Qa.y.toFixed(4),e=Qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function S_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function b_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Qo(i){return i!==""}function Mf(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const w_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eu(i){return i.replace(w_,E_)}const T_=new Map;function E_(i,t){let e=_n[t];if(e===void 0){const n=T_.get(t);if(n!==void 0)e=_n[n],rn('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Eu(e)}const A_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sf(i){return i.replace(A_,C_)}function C_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bf(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const R_={[ta]:"SHADOWMAP_TYPE_PCF",[Ko]:"SHADOWMAP_TYPE_VSM"};function P_(i){return R_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const L_={[Nr]:"ENVMAP_TYPE_CUBE",[To]:"ENVMAP_TYPE_CUBE",[Fl]:"ENVMAP_TYPE_CUBE_UV"};function I_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":L_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const D_={[To]:"ENVMAP_MODE_REFRACTION"};function N_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":D_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const U_={[Jf]:"ENVMAP_BLENDING_MULTIPLY",[x0]:"ENVMAP_BLENDING_MIX",[M0]:"ENVMAP_BLENDING_ADD"};function F_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":U_[i.combine]||"ENVMAP_BLENDING_NONE"}function O_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function z_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=P_(e),l=I_(e),u=N_(e),d=F_(e),f=O_(e),h=y_(e),m=S_(r),v=s.createProgram();let g,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Qo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Qo).join(`
`),p.length>0&&(p+=`
`)):(g=[bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),p=[bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Is?"#define TONE_MAPPING":"",e.toneMapping!==Is?_n.tonemapping_pars_fragment:"",e.toneMapping!==Is?x_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",_n.colorspace_pars_fragment,v_("linearToOutputTexel",e.outputColorSpace),M_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qo).join(`
`)),o=Eu(o),o=Mf(o,e),o=yf(o,e),a=Eu(a),a=Mf(a,e),a=yf(a,e),o=Sf(o),a=Sf(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const R=S+g+o,b=S+p+a,T=vf(s,s.VERTEX_SHADER,R),A=vf(s,s.FRAGMENT_SHADER,b);s.attachShader(v,T),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function F(B){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(v)||"",nt=s.getShaderInfoLog(T)||"",H=s.getShaderInfoLog(A)||"",J=G.trim(),Mt=nt.trim(),rt=H.trim();let At=!0,gt=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(At=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,T,A);else{const yt=xf(s,T,"vertex"),Rt=xf(s,A,"fragment");Rn("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+J+`
`+yt+`
`+Rt)}else J!==""?rn("WebGLProgram: Program Info Log:",J):(Mt===""||rt==="")&&(gt=!1);gt&&(B.diagnostics={runnable:At,programLog:J,vertexShader:{log:Mt,prefix:g},fragmentShader:{log:rt,prefix:p}})}s.deleteShader(T),s.deleteShader(A),M=new dl(s,v),C=b_(s,v)}let M;this.getUniforms=function(){return M===void 0&&F(this),M};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(v,d_)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=p_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=A,this}let B_=0;class k_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new G_(t),e.set(t,n)),n}}class G_{constructor(t){this.id=B_++,this.code=t,this.usedTimes=0}}function H_(i){return i===Ur||i===_l||i===xl}function V_(i,t,e,n,s,r){const o=new Ku,a=new k_,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer;let f=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return c.add(M),M===0?"uv":`uv${M}`}function v(M,C,O,B,G,nt){const H=B.fog,J=G.geometry,Mt=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?B.environment:null,rt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,At=t.get(M.envMap||Mt,rt),gt=At&&At.mapping===Fl?At.image.height:null,yt=h[M.type];M.precision!==null&&(f=n.getMaxPrecision(M.precision),f!==M.precision&&rn("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const Rt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ye=Rt!==void 0?Rt.length:0;let we=0;J.morphAttributes.position!==void 0&&(we=1),J.morphAttributes.normal!==void 0&&(we=2),J.morphAttributes.color!==void 0&&(we=3);let en,Z,ce,_t;if(yt){const vn=Cs[yt];en=vn.vertexShader,Z=vn.fragmentShader}else{en=M.vertexShader,Z=M.fragmentShader;const vn=a.getVertexShaderStage(M),ae=a.getFragmentShaderStage(M);a.update(M,vn,ae),ce=vn.id,_t=ae.id}const q=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),wt=G.isInstancedMesh===!0,Kt=G.isBatchedMesh===!0,Ht=!!M.map,Te=!!M.matcap,vt=!!At,zt=!!M.aoMap,Gt=!!M.lightMap,Ut=!!M.bumpMap&&M.wireframe===!1,Qt=!!M.normalMap,ke=!!M.displacementMap,Le=!!M.emissiveMap,ut=!!M.metalnessMap,Jt=!!M.roughnessMap,N=M.anisotropy>0,Zt=M.clearcoat>0,fe=M.dispersion>0,P=M.retroreflectivity>0,_=M.iridescence>0,K=M.sheen>0,ht=M.transmission>0,Tt=N&&!!M.anisotropyMap,jt=Zt&&!!M.clearcoatMap,qt=Zt&&!!M.clearcoatNormalMap,Et=Zt&&!!M.clearcoatRoughnessMap,Dt=_&&!!M.iridescenceMap,oe=_&&!!M.iridescenceThicknessMap,Ue=K&&!!M.sheenColorMap,ie=K&&!!M.sheenRoughnessMap,Ft=!!M.specularMap,Ee=!!M.specularColorMap,Se=!!M.specularIntensityMap,Xe=ht&&!!M.transmissionMap,Q=ht&&!!M.thicknessMap,Yt=!!M.gradientMap,Nt=!!M.alphaMap,_e=M.alphaTest>0,be=!!M.alphaHash,Vt=!!M.extensions;let Oe=Is;M.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Oe=i.toneMapping);const Ie={shaderID:yt,shaderType:M.type,shaderName:M.name,vertexShader:en,fragmentShader:Z,defines:M.defines,customVertexShaderID:ce,customFragmentShaderID:_t,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Kt,batchingColor:Kt&&G._colorsTexture!==null,instancing:wt,instancingColor:wt&&G.instanceColor!==null,instancingMorph:wt&&G.morphTexture!==null,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:En.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Ht,matcap:Te,envMap:vt,envMapMode:vt&&At.mapping,envMapCubeUVHeight:gt,aoMap:zt,lightMap:Gt,bumpMap:Ut,normalMap:Qt,displacementMap:ke,emissiveMap:Le,normalMapObjectSpace:Qt&&M.normalMapType===b0,normalMapTangentSpace:Qt&&M.normalMapType===_u,packedNormalMap:Qt&&M.normalMapType===_u&&H_(M.normalMap.format),metalnessMap:ut,roughnessMap:Jt,anisotropy:N,anisotropyMap:Tt,clearcoat:Zt,clearcoatMap:jt,clearcoatNormalMap:qt,clearcoatRoughnessMap:Et,dispersion:fe,retroreflection:P,iridescence:_,iridescenceMap:Dt,iridescenceThicknessMap:oe,sheen:K,sheenColorMap:Ue,sheenRoughnessMap:ie,specularMap:Ft,specularColorMap:Ee,specularIntensityMap:Se,transmission:ht,transmissionMap:Xe,thicknessMap:Q,gradientMap:Yt,opaque:M.transparent===!1&&M.blending===_o&&M.alphaToCoverage===!1,alphaMap:Nt,alphaTest:_e,alphaHash:be,combine:M.combine,mapUv:Ht&&m(M.map.channel),aoMapUv:zt&&m(M.aoMap.channel),lightMapUv:Gt&&m(M.lightMap.channel),bumpMapUv:Ut&&m(M.bumpMap.channel),normalMapUv:Qt&&m(M.normalMap.channel),displacementMapUv:ke&&m(M.displacementMap.channel),emissiveMapUv:Le&&m(M.emissiveMap.channel),metalnessMapUv:ut&&m(M.metalnessMap.channel),roughnessMapUv:Jt&&m(M.roughnessMap.channel),anisotropyMapUv:Tt&&m(M.anisotropyMap.channel),clearcoatMapUv:jt&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:qt&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:ie&&m(M.sheenRoughnessMap.channel),specularMapUv:Ft&&m(M.specularMap.channel),specularColorMapUv:Ee&&m(M.specularColorMap.channel),specularIntensityMapUv:Se&&m(M.specularIntensityMap.channel),transmissionMapUv:Xe&&m(M.transmissionMap.channel),thicknessMapUv:Q&&m(M.thicknessMap.channel),alphaMapUv:Nt&&m(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Qt||N),vertexNormals:!!J.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!J.attributes.uv&&(Ht||Nt),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||J.attributes.normal===void 0&&Qt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:bt,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:we,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:nt.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ht&&M.map.isVideoTexture===!0&&En.getTransfer(M.map.colorSpace)===Fn,decodeVideoTextureEmissive:Le&&M.emissiveMap.isVideoTexture===!0&&En.getTransfer(M.emissiveMap.colorSpace)===Fn,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Bn,flipSided:M.side===Fi,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Vt&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&M.extensions.multiDraw===!0||Kt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function g(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const O in M.defines)C.push(O),C.push(M.defines[O]);return M.isRawShaderMaterial===!1&&(p(C,M),S(C,M),C.push(i.outputColorSpace)),C.push(M.customProgramCacheKey),C.join()}function p(M,C){M.push(C.precision),M.push(C.outputColorSpace),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.mapUv),M.push(C.alphaMapUv),M.push(C.lightMapUv),M.push(C.aoMapUv),M.push(C.bumpMapUv),M.push(C.normalMapUv),M.push(C.displacementMapUv),M.push(C.emissiveMapUv),M.push(C.metalnessMapUv),M.push(C.roughnessMapUv),M.push(C.anisotropyMapUv),M.push(C.clearcoatMapUv),M.push(C.clearcoatNormalMapUv),M.push(C.clearcoatRoughnessMapUv),M.push(C.iridescenceMapUv),M.push(C.iridescenceThicknessMapUv),M.push(C.sheenColorMapUv),M.push(C.sheenRoughnessMapUv),M.push(C.specularMapUv),M.push(C.specularColorMapUv),M.push(C.specularIntensityMapUv),M.push(C.transmissionMapUv),M.push(C.thicknessMapUv),M.push(C.combine),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numSunLights),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numSunLightShadows),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.numLightProbes),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function S(M,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.retroreflection&&o.enable(24),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function R(M){const C=h[M.type];let O;if(C){const B=Cs[C];O=pa.clone(B.uniforms)}else O=M.uniforms;return O}function b(M,C){let O=u.get(C);return O!==void 0?++O.usedTimes:(O=new z_(i,C,M,s),l.push(O),u.set(C,O)),O}function T(M){if(--M.usedTimes===0){const C=l.indexOf(M);l[C]=l[l.length-1],l.pop(),u.delete(M.cacheKey),M.destroy()}}function A(M){a.remove(M)}function F(){a.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:R,acquireProgram:b,releaseProgram:T,releaseShaderCache:A,programs:l,dispose:F}}function W_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function X_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function wf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Tf(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,m,v,g,p){let S=i[t];return S===void 0?(S={id:f.id,object:f,geometry:h,material:m,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:g,group:p},i[t]=S):(S.id=f.id,S.object=f,S.geometry=h,S.material=m,S.materialVariant=o(f),S.groupOrder=v,S.renderOrder=f.renderOrder,S.z=g,S.group=p),t++,S}function c(f,h,m,v,g,p,S){S.reversedDepth===!0&&(g=-g);const R=a(f,h,m,v,g,p);m.transmission>0?n.push(R):m.transparent===!0?s.push(R):e.push(R)}function l(f,h,m,v,g,p){const S=a(f,h,m,v,g,p);m.transmission>0?n.unshift(S):m.transparent===!0?s.unshift(S):e.unshift(S)}function u(f,h){e.length>1&&e.sort(f||X_),n.length>1&&n.sort(h||wf),s.length>1&&s.sort(h||wf)}function d(){for(let f=t,h=i.length;f<h;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function Y_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Tf,i.set(n,[o])):s>=r.length?(o=new Tf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Z_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new E,color:new Ot};break;case"SpotLight":e={position:new E,direction:new E,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new E,halfWidth:new E,halfHeight:new E};break}return i[t.id]=e,e}}}function q_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let $_=0;function K_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function J_(i){const t=new Z_,e=q_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new E);const s=new E,r=new xn,o=new xn;function a(l){let u=0,d=0,f=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let h=0,m=0,v=0,g=0,p=0,S=0,R=0,b=0,T=0,A=0,F=0,M=0,C=0,O=0;l.sort(K_);for(let G=0,nt=l.length;G<nt;G++){const H=l[G],J=H.color,Mt=H.intensity,rt=H.distance;let At=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Ur?At=H.shadow.map.texture:At=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)u+=J.r*Mt,d+=J.g*Mt,f+=J.b*Mt;else if(H.isLightProbe){for(let gt=0;gt<9;gt++)n.probe[gt].addScaledVector(H.sh.coefficients[gt],Mt);O++}else if(H.isSunLight){const gt=t.get(H);if(gt.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const yt=H.shadow,Rt=e.get(H);Rt.shadowIntensity=yt.intensity,Rt.shadowBias=yt.bias,Rt.shadowNormalBias=yt.normalBias,Rt.shadowRadius=yt.radius,Rt.shadowMapSize.copy(yt.mapSize).multiply(yt.getFrameExtents()),n.sunShadow[m]=Rt,n.sunShadowMap[m]=At;const ye=yt.getViewportCount();for(let we=0;we<ye;we++)n.sunShadowMatrix[v+we]=yt.getMatrix(we),n.sunShadowCascade[v+we]=yt._cascadeData[we];v+=ye,m++}n.sun[h]=gt,h++}else if(H.isDirectionalLight){const gt=t.get(H);if(gt.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const yt=H.shadow,Rt=e.get(H);Rt.shadowIntensity=yt.intensity,Rt.shadowBias=yt.bias,Rt.shadowNormalBias=yt.normalBias,Rt.shadowRadius=yt.radius,Rt.shadowMapSize=yt.mapSize,n.directionalShadow[g]=Rt,n.directionalShadowMap[g]=At,n.directionalShadowMatrix[g]=H.shadow.matrix,T++}n.directional[g]=gt,g++}else if(H.isSpotLight){const gt=t.get(H);gt.position.setFromMatrixPosition(H.matrixWorld),gt.color.copy(J).multiplyScalar(Mt),gt.distance=rt,gt.coneCos=Math.cos(H.angle),gt.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),gt.decay=H.decay,n.spot[S]=gt;const yt=H.shadow;if(H.map&&(n.spotLightMap[M]=H.map,M++,yt.updateMatrices(H),H.castShadow&&C++),n.spotLightMatrix[S]=yt.matrix,H.castShadow){const Rt=e.get(H);Rt.shadowIntensity=yt.intensity,Rt.shadowBias=yt.bias,Rt.shadowNormalBias=yt.normalBias,Rt.shadowRadius=yt.radius,Rt.shadowMapSize=yt.mapSize,n.spotShadow[S]=Rt,n.spotShadowMap[S]=At,F++}S++}else if(H.isRectAreaLight){const gt=t.get(H);gt.color.copy(J).multiplyScalar(Mt),gt.halfWidth.set(H.width*.5,0,0),gt.halfHeight.set(0,H.height*.5,0),n.rectArea[R]=gt,R++}else if(H.isPointLight){const gt=t.get(H);if(gt.color.copy(H.color).multiplyScalar(H.intensity),gt.distance=H.distance,gt.decay=H.decay,H.castShadow){const yt=H.shadow,Rt=e.get(H);Rt.shadowIntensity=yt.intensity,Rt.shadowBias=yt.bias,Rt.shadowNormalBias=yt.normalBias,Rt.shadowRadius=yt.radius,Rt.shadowMapSize=yt.mapSize,Rt.shadowCameraNear=yt.camera.near,Rt.shadowCameraFar=yt.camera.far,n.pointShadow[p]=Rt,n.pointShadowMap[p]=At,n.pointShadowMatrix[p]=H.shadow.matrix,A++}n.point[p]=gt,p++}else if(H.isHemisphereLight){const gt=t.get(H);gt.skyColor.copy(H.color).multiplyScalar(Mt),gt.groundColor.copy(H.groundColor).multiplyScalar(Mt),n.hemi[b]=gt,b++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const B=n.hash;(B.sunLength!==h||B.directionalLength!==g||B.pointLength!==p||B.spotLength!==S||B.rectAreaLength!==R||B.hemiLength!==b||B.numSunShadows!==m||B.numDirectionalShadows!==T||B.numPointShadows!==A||B.numSpotShadows!==F||B.numSpotMaps!==M||B.numLightProbes!==O)&&(n.sun.length=h,n.directional.length=g,n.spot.length=S,n.rectArea.length=R,n.point.length=p,n.hemi.length=b,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=F,n.spotShadowMap.length=F,n.spotLightMatrix.length=F+M-C,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=O,B.sunLength=h,B.directionalLength=g,B.pointLength=p,B.spotLength=S,B.rectAreaLength=R,B.hemiLength=b,B.numSunShadows=m,B.numDirectionalShadows=T,B.numPointShadows=A,B.numSpotShadows=F,B.numSpotMaps=M,B.numLightProbes=O,n.version=$_++)}function c(l,u){let d=0,f=0,h=0,m=0,v=0,g=0;const p=u.matrixWorldInverse;for(let S=0,R=l.length;S<R;S++){const b=l[S];if(b.isSunLight){const T=n.sun[d];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(p),d++}else if(b.isDirectionalLight){const T=n.directional[f];T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),f++}else if(b.isSpotLight){const T=n.spot[m];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const T=n.rectArea[v];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),o.identity(),r.copy(b.matrixWorld),r.premultiply(p),o.extractRotation(r),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){const T=n.point[h];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),h++}else if(b.isHemisphereLight){const T=n.hemi[g];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(p),g++}}}return{setup:a,setupView:c,state:n}}function Ef(i){const t=new J_(i),e=[],n=[],s=[];function r(f){d.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function c(f){s.push(f)}function l(){t.setup(e)}function u(f){t.setupView(e,f)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Q_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ef(i),t.set(s,[a])):r>=o.length?(a=new Ef(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const j_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tx=`uniform sampler2D shadow_pass;
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
}`,ex=[new E(1,0,0),new E(-1,0,0),new E(0,1,0),new E(0,-1,0),new E(0,0,1),new E(0,0,-1)],nx=[new E(0,-1,0),new E(0,-1,0),new E(0,0,1),new E(0,0,-1),new E(0,-1,0),new E(0,-1,0)],Af=new xn,Zo=new E,Ac=new E;function ix(i,t,e){let n=new Qu;const s=new $t,r=new $t,o=new ei,a=new lm,c=new cm,l={},u=e.maxTextureSize,d={[Dr]:Fi,[Fi]:Dr,[Bn]:Bn},f=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:j_,fragmentShader:tx}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const m=new Pn;m.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ne(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ta;let p=this.type;this.render=function(A,F,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===t0&&(rn("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ta);const C=i.getRenderTarget(),O=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Ls),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const nt=p!==this.type;nt&&F.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(J=>J.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,J=A.length;H<J;H++){const Mt=A[H],rt=Mt.shadow;if(rt===void 0){rn("WebGLShadowMap:",Mt,"has no shadow.");continue}if(rt.autoUpdate===!1&&rt.needsUpdate===!1)continue;s.copy(rt.mapSize);const At=rt.getFrameExtents();s.multiply(At),r.copy(rt.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/At.x),s.x=r.x*At.x,rt.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/At.y),s.y=r.y*At.y,rt.mapSize.y=r.y));const gt=i.state.buffers.depth.getReversed();if(rt.camera._reversedDepth=gt,rt.map===null||nt===!0){if(rt.map!==null&&(rt.map.depthTexture!==null&&(rt.map.depthTexture.dispose(),rt.map.depthTexture=null),rt.map.dispose()),this.type===Ko){if(Mt.isPointLight){rn("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}rt.map=new Oi(s.x,s.y,{format:Ur,type:Zi,minFilter:Pi,magFilter:Pi,generateMipmaps:!1}),rt.map.texture.name=Mt.name+".shadowMap",rt.map.depthTexture=new ua(s.x,s.y,vs),rt.map.depthTexture.name=Mt.name+".shadowMapDepth",rt.map.depthTexture.format=Js,rt.map.depthTexture.compareFunction=null,rt.map.depthTexture.minFilter=_i,rt.map.depthTexture.magFilter=_i}else Mt.isPointLight?(rt.map=new Id(s.x),rt.map.depthTexture=new Tp(s.x,Ns)):(rt.map=new Oi(s.x,s.y),rt.map.depthTexture=new ua(s.x,s.y,Ns)),rt.map.depthTexture.name=Mt.name+".shadowMap",rt.map.depthTexture.format=Js,this.type===ta?(rt.map.depthTexture.compareFunction=gt?Zu:Yu,rt.map.depthTexture.minFilter=Pi,rt.map.depthTexture.magFilter=Pi):(rt.map.depthTexture.compareFunction=null,rt.map.depthTexture.minFilter=_i,rt.map.depthTexture.magFilter=_i);rt.camera.updateProjectionMatrix()}rt.map.isWebGLCubeRenderTarget!==!0&&(rt.map.width!==s.x||rt.map.height!==s.y)&&rt.map.setSize(s.x,s.y);const yt=rt.map.isWebGLCubeRenderTarget?6:rt.getViewportCount();Mt.isPointLight!==!0&&rt.updateMatrices(Mt,M);for(let Rt=0;Rt<yt;Rt++){const ye=rt.getCamera(Rt);if(Mt.isPointLight){const we=rt.camera,en=rt.matrix,Z=Mt.distance||we.far;Z!==we.far&&(we.far=Z,we.updateProjectionMatrix()),Zo.setFromMatrixPosition(Mt.matrixWorld),we.position.copy(Zo),Ac.copy(we.position),Ac.add(ex[Rt]),we.up.copy(nx[Rt]),we.lookAt(Ac),we.updateMatrixWorld(),en.makeTranslation(-Zo.x,-Zo.y,-Zo.z),Af.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),rt._frustum.setFromProjectionMatrix(Af,we.coordinateSystem,we.reversedDepth)}if(rt.map.isWebGLCubeRenderTarget)i.setRenderTarget(rt.map,Rt),i.clear();else{Rt===0&&(i.setRenderTarget(rt.map),i.clear());const we=rt.getViewport(Rt);o.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),G.viewport(o)}n=rt.getFrustum(Rt),b(F,M,ye,Mt,this.type)}rt.isPointLightShadow!==!0&&this.type===Ko&&S(rt,M),rt.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(C,O,B)};function S(A,F){const M=t.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null?A.mapPass=new Oi(s.x,s.y,{format:Ur,type:Zi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(F,null,M,f,v,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(F,null,M,h,v,null)}function R(A,F,M,C){let O=null;const B=M.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(B!==void 0)O=B;else if(O=M.isPointLight===!0?c:a,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const G=O.uuid,nt=F.uuid;let H=l[G];H===void 0&&(H={},l[G]=H);let J=H[nt];J===void 0&&(J=O.clone(),H[nt]=J,F.addEventListener("dispose",T)),O=J}if(O.visible=F.visible,O.wireframe=F.wireframe,C===Ko?O.side=F.shadowSide!==null?F.shadowSide:F.side:O.side=F.shadowSide!==null?F.shadowSide:d[F.side],O.alphaMap=F.alphaMap,O.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,O.map=F.map,O.clipShadows=F.clipShadows,O.clippingPlanes=F.clippingPlanes,O.clipIntersection=F.clipIntersection,O.displacementMap=F.displacementMap,O.displacementScale=F.displacementScale,O.displacementBias=F.displacementBias,O.wireframeLinewidth=F.wireframeLinewidth,O.linewidth=F.linewidth,M.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const G=i.properties.get(O);G.light=M}return O}function b(A,F,M,C,O){if(A.visible===!1)return;if(A.layers.test(F.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&O===Ko)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,A.matrixWorld);const nt=t.update(A),H=A.material;if(Array.isArray(H)){const J=nt.groups;for(let Mt=0,rt=J.length;Mt<rt;Mt++){const At=J[Mt],gt=H[At.materialIndex];if(gt&&gt.visible){const yt=R(A,gt,C,O);A.onBeforeShadow(i,A,F,M,nt,yt,At),i.renderBufferDirect(M,null,nt,yt,A,At),A.onAfterShadow(i,A,F,M,nt,yt,At)}}}else if(H.visible){const J=R(A,H,C,O);A.onBeforeShadow(i,A,F,M,nt,J,null),i.renderBufferDirect(M,null,nt,J,A,null),A.onAfterShadow(i,A,F,M,nt,J,null)}}const G=A.children;for(let nt=0,H=G.length;nt<H;nt++)b(G[nt],F,M,C,O)}function T(A){A.target.removeEventListener("dispose",T);for(const M in l){const C=l[M],O=A.target.uuid;O in C&&(C[O].dispose(),delete C[O])}}}function sx(i,t){function e(){let Q=!1;const Yt=new ei;let Nt=null;const _e=new ei(0,0,0,0);return{setMask:function(be){Nt!==be&&!Q&&(i.colorMask(be,be,be,be),Nt=be)},setLocked:function(be){Q=be},setClear:function(be,Vt,Oe,Ie,vn){vn===!0&&(be*=Ie,Vt*=Ie,Oe*=Ie),Yt.set(be,Vt,Oe,Ie),_e.equals(Yt)===!1&&(i.clearColor(be,Vt,Oe,Ie),_e.copy(Yt))},reset:function(){Q=!1,Nt=null,_e.set(-1,0,0,0)}}}function n(){let Q=!1,Yt=!1,Nt=null,_e=null,be=null;return{setReversed:function(Vt){if(Yt!==Vt){const Oe=t.get("EXT_clip_control");Vt?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),Yt=Vt;const Ie=be;be=null,this.setClear(Ie)}},getReversed:function(){return Yt},setTest:function(Vt){Vt?q(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(Vt){Nt!==Vt&&!Q&&(i.depthMask(Vt),Nt=Vt)},setFunc:function(Vt){if(Yt&&(Vt=N0[Vt]),_e!==Vt){switch(Vt){case Nc:i.depthFunc(i.NEVER);break;case Uc:i.depthFunc(i.ALWAYS);break;case Fc:i.depthFunc(i.LESS);break;case oa:i.depthFunc(i.LEQUAL);break;case Oc:i.depthFunc(i.EQUAL);break;case zc:i.depthFunc(i.GEQUAL);break;case Bc:i.depthFunc(i.GREATER);break;case kc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=Vt}},setLocked:function(Vt){Q=Vt},setClear:function(Vt){be!==Vt&&(be=Vt,Yt&&(Vt=1-Vt),i.clearDepth(Vt))},reset:function(){Q=!1,Nt=null,_e=null,be=null,Yt=!1}}}function s(){let Q=!1,Yt=null,Nt=null,_e=null,be=null,Vt=null,Oe=null,Ie=null,vn=null;return{setTest:function(ae){Q||(ae?q(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(ae){Yt!==ae&&!Q&&(i.stencilMask(ae),Yt=ae)},setFunc:function(ae,fn,gi){(Nt!==ae||_e!==fn||be!==gi)&&(i.stencilFunc(ae,fn,gi),Nt=ae,_e=fn,be=gi)},setOp:function(ae,fn,gi){(Vt!==ae||Oe!==fn||Ie!==gi)&&(i.stencilOp(ae,fn,gi),Vt=ae,Oe=fn,Ie=gi)},setLocked:function(ae){Q=ae},setClear:function(ae){vn!==ae&&(i.clearStencil(ae),vn=ae)},reset:function(){Q=!1,Yt=null,Nt=null,_e=null,be=null,Vt=null,Oe=null,Ie=null,vn=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},f={},h=new WeakMap,m=[],v=null,g=!1,p=null,S=null,R=null,b=null,T=null,A=null,F=null,M=new Ot(0,0,0),C=0,O=!1,B=null,G=null,nt=null,H=null,J=null;const Mt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let rt=!1,At=0;const gt=i.getParameter(i.VERSION);gt.indexOf("WebGL")!==-1?(At=parseFloat(/^WebGL (\d)/.exec(gt)[1]),rt=At>=1):gt.indexOf("OpenGL ES")!==-1&&(At=parseFloat(/^OpenGL ES (\d)/.exec(gt)[1]),rt=At>=2);let yt=null,Rt={};const ye=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),en=new ei().fromArray(ye),Z=new ei().fromArray(we);function ce(Q,Yt,Nt,_e){const be=new Uint8Array(4),Vt=i.createTexture();i.bindTexture(Q,Vt),i.texParameteri(Q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<Nt;Oe++)Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?i.texImage3D(Yt,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(Yt+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return Vt}const _t={};_t[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),q(i.DEPTH_TEST),o.setFunc(oa),Ut(!1),Qt(dh),q(i.CULL_FACE),zt(Ls);function q(Q){u[Q]!==!0&&(i.enable(Q),u[Q]=!0)}function bt(Q){u[Q]!==!1&&(i.disable(Q),u[Q]=!1)}function wt(Q,Yt){return f[Q]!==Yt?(i.bindFramebuffer(Q,Yt),f[Q]=Yt,Q===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Yt),Q===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Yt),!0):!1}function Kt(Q,Yt){let Nt=m,_e=!1;if(Q){Nt=h.get(Yt),Nt===void 0&&(Nt=[],h.set(Yt,Nt));const be=Q.textures;if(Nt.length!==be.length||Nt[0]!==i.COLOR_ATTACHMENT0){for(let Vt=0,Oe=be.length;Vt<Oe;Vt++)Nt[Vt]=i.COLOR_ATTACHMENT0+Vt;Nt.length=be.length,_e=!0}}else Nt[0]!==i.BACK&&(Nt[0]=i.BACK,_e=!0);_e&&i.drawBuffers(Nt)}function Ht(Q){return v!==Q?(i.useProgram(Q),v=Q,!0):!1}const Te={[uo]:i.FUNC_ADD,[n0]:i.FUNC_SUBTRACT,[i0]:i.FUNC_REVERSE_SUBTRACT};Te[s0]=i.MIN,Te[r0]=i.MAX;const vt={[o0]:i.ZERO,[a0]:i.ONE,[l0]:i.SRC_COLOR,[$f]:i.SRC_ALPHA,[p0]:i.SRC_ALPHA_SATURATE,[f0]:i.DST_COLOR,[u0]:i.DST_ALPHA,[c0]:i.ONE_MINUS_SRC_COLOR,[Kf]:i.ONE_MINUS_SRC_ALPHA,[d0]:i.ONE_MINUS_DST_COLOR,[h0]:i.ONE_MINUS_DST_ALPHA,[m0]:i.CONSTANT_COLOR,[g0]:i.ONE_MINUS_CONSTANT_COLOR,[v0]:i.CONSTANT_ALPHA,[_0]:i.ONE_MINUS_CONSTANT_ALPHA};function zt(Q,Yt,Nt,_e,be,Vt,Oe,Ie,vn,ae){if(Q===Ls){g===!0&&(bt(i.BLEND),g=!1);return}if(g===!1&&(q(i.BLEND),g=!0),Q!==e0){if(Q!==p||ae!==O){if((S!==uo||T!==uo)&&(i.blendEquation(i.FUNC_ADD),S=uo,T=uo),ae)switch(Q){case _o:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ri:i.blendFunc(i.ONE,i.ONE);break;case ph:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Rn("WebGLState: Invalid blending: ",Q);break}else switch(Q){case _o:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ph:Rn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mh:Rn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rn("WebGLState: Invalid blending: ",Q);break}R=null,b=null,A=null,F=null,M.set(0,0,0),C=0,p=Q,O=ae}return}be=be||Yt,Vt=Vt||Nt,Oe=Oe||_e,(Yt!==S||be!==T)&&(i.blendEquationSeparate(Te[Yt],Te[be]),S=Yt,T=be),(Nt!==R||_e!==b||Vt!==A||Oe!==F)&&(i.blendFuncSeparate(vt[Nt],vt[_e],vt[Vt],vt[Oe]),R=Nt,b=_e,A=Vt,F=Oe),(Ie.equals(M)===!1||vn!==C)&&(i.blendColor(Ie.r,Ie.g,Ie.b,vn),M.copy(Ie),C=vn),p=Q,O=!1}function Gt(Q,Yt){Q.side===Bn?bt(i.CULL_FACE):q(i.CULL_FACE);let Nt=Q.side===Fi;Yt&&(Nt=!Nt),Ut(Nt),Q.blending===_o&&Q.transparent===!1?zt(Ls):zt(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),o.setFunc(Q.depthFunc),o.setTest(Q.depthTest),o.setMask(Q.depthWrite),r.setMask(Q.colorWrite);const _e=Q.stencilWrite;a.setTest(_e),_e&&(a.setMask(Q.stencilWriteMask),a.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),a.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),Le(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(Q){B!==Q&&(Q?i.frontFace(i.CW):i.frontFace(i.CCW),B=Q)}function Qt(Q){Q!==Qd?(q(i.CULL_FACE),Q!==G&&(Q===dh?i.cullFace(i.BACK):Q===jd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),G=Q}function ke(Q){Q!==nt&&(rt&&i.lineWidth(Q),nt=Q)}function Le(Q,Yt,Nt){Q?(q(i.POLYGON_OFFSET_FILL),(H!==Yt||J!==Nt)&&(H=Yt,J=Nt,o.getReversed()&&(Yt=-Yt),i.polygonOffset(Yt,Nt))):bt(i.POLYGON_OFFSET_FILL)}function ut(Q){Q?q(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function Jt(Q){Q===void 0&&(Q=i.TEXTURE0+Mt-1),yt!==Q&&(i.activeTexture(Q),yt=Q)}function N(Q,Yt,Nt){Nt===void 0&&(yt===null?Nt=i.TEXTURE0+Mt-1:Nt=yt);let _e=Rt[Nt];_e===void 0&&(_e={type:void 0,texture:void 0},Rt[Nt]=_e),(_e.type!==Q||_e.texture!==Yt)&&(yt!==Nt&&(i.activeTexture(Nt),yt=Nt),i.bindTexture(Q,Yt||_t[Q]),_e.type=Q,_e.texture=Yt)}function Zt(){const Q=Rt[yt];Q!==void 0&&Q.type!==void 0&&(i.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function fe(){try{i.compressedTexImage2D(...arguments)}catch(Q){Rn("WebGLState:",Q)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(Q){Rn("WebGLState:",Q)}}function _(){try{i.texSubImage2D(...arguments)}catch(Q){Rn("WebGLState:",Q)}}function K(){try{i.texSubImage3D(...arguments)}catch(Q){Rn("WebGLState:",Q)}}function ht(){try{i.compressedTexSubImage2D(...arguments)}catch(Q){Rn("WebGLState:",Q)}}function Tt(){try{i.compressedTexSubImage3D(...arguments)}catch(Q){Rn("WebGLState:",Q)}}function jt(){try{i.texStorage2D(...arguments)}catch(Q){Rn("WebGLState:",Q)}}function qt(){try{i.texStorage3D(...arguments)}catch(Q){Rn("WebGLState:",Q)}}function Et(){try{i.texImage2D(...arguments)}catch(Q){Rn("WebGLState:",Q)}}function Dt(){try{i.texImage3D(...arguments)}catch(Q){Rn("WebGLState:",Q)}}function oe(Q){return d[Q]!==void 0?d[Q]:i.getParameter(Q)}function Ue(Q,Yt){d[Q]!==Yt&&(i.pixelStorei(Q,Yt),d[Q]=Yt)}function ie(Q){en.equals(Q)===!1&&(i.scissor(Q.x,Q.y,Q.z,Q.w),en.copy(Q))}function Ft(Q){Z.equals(Q)===!1&&(i.viewport(Q.x,Q.y,Q.z,Q.w),Z.copy(Q))}function Ee(Q,Yt){let Nt=l.get(Yt);Nt===void 0&&(Nt=new WeakMap,l.set(Yt,Nt));let _e=Nt.get(Q);_e===void 0&&(_e=i.getUniformBlockIndex(Yt,Q.name),Nt.set(Q,_e))}function Se(Q,Yt){const _e=l.get(Yt).get(Q);c.get(Yt)!==_e&&(i.uniformBlockBinding(Yt,_e,Q.__bindingPointIndex),c.set(Yt,_e))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},yt=null,Rt={},f={},h=new WeakMap,m=[],v=null,g=!1,p=null,S=null,R=null,b=null,T=null,A=null,F=null,M=new Ot(0,0,0),C=0,O=!1,B=null,G=null,nt=null,H=null,J=null,en.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:q,disable:bt,bindFramebuffer:wt,drawBuffers:Kt,useProgram:Ht,setBlending:zt,setMaterial:Gt,setFlipSided:Ut,setCullFace:Qt,setLineWidth:ke,setPolygonOffset:Le,setScissorTest:ut,activeTexture:Jt,bindTexture:N,unbindTexture:Zt,compressedTexImage2D:fe,compressedTexImage3D:P,texImage2D:Et,texImage3D:Dt,pixelStorei:Ue,getParameter:oe,updateUBOMapping:Ee,uniformBlockBinding:Se,texStorage2D:jt,texStorage3D:qt,texSubImage2D:_,texSubImage3D:K,compressedTexSubImage2D:ht,compressedTexSubImage3D:Tt,scissor:ie,viewport:Ft,reset:Xe}}function rx(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $t,u=new WeakMap,d=new Set;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,_){return m?new OffscreenCanvas(P,_):Sl("canvas")}function g(P,_,K){let ht=1;const Tt=fe(P);if((Tt.width>K||Tt.height>K)&&(ht=K/Math.max(Tt.width,Tt.height)),ht<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const jt=Math.floor(ht*Tt.width),qt=Math.floor(ht*Tt.height);f===void 0&&(f=v(jt,qt));const Et=_?v(jt,qt):f;return Et.width=jt,Et.height=qt,Et.getContext("2d").drawImage(P,0,0,jt,qt),rn("WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+jt+"x"+qt+")."),Et}else return"data"in P&&rn("WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),P;return P}function p(P){return P.generateMipmaps}function S(P){i.generateMipmap(P)}function R(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(P,_,K,ht,Tt,jt=!1){if(P!==null){if(i[P]!==void 0)return i[P];rn("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let qt;ht&&(qt=t.get("EXT_texture_norm16"),qt||rn("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Et=_;if(_===i.RED&&(K===i.FLOAT&&(Et=i.R32F),K===i.HALF_FLOAT&&(Et=i.R16F),K===i.UNSIGNED_BYTE&&(Et=i.R8),K===i.UNSIGNED_SHORT&&qt&&(Et=qt.R16_EXT),K===i.SHORT&&qt&&(Et=qt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(Et=i.R8UI),K===i.UNSIGNED_SHORT&&(Et=i.R16UI),K===i.UNSIGNED_INT&&(Et=i.R32UI),K===i.BYTE&&(Et=i.R8I),K===i.SHORT&&(Et=i.R16I),K===i.INT&&(Et=i.R32I)),_===i.RG&&(K===i.FLOAT&&(Et=i.RG32F),K===i.HALF_FLOAT&&(Et=i.RG16F),K===i.UNSIGNED_BYTE&&(Et=i.RG8),K===i.UNSIGNED_SHORT&&qt&&(Et=qt.RG16_EXT),K===i.SHORT&&qt&&(Et=qt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(Et=i.RG8UI),K===i.UNSIGNED_SHORT&&(Et=i.RG16UI),K===i.UNSIGNED_INT&&(Et=i.RG32UI),K===i.BYTE&&(Et=i.RG8I),K===i.SHORT&&(Et=i.RG16I),K===i.INT&&(Et=i.RG32I)),_===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(Et=i.RGB8UI),K===i.UNSIGNED_SHORT&&(Et=i.RGB16UI),K===i.UNSIGNED_INT&&(Et=i.RGB32UI),K===i.BYTE&&(Et=i.RGB8I),K===i.SHORT&&(Et=i.RGB16I),K===i.INT&&(Et=i.RGB32I)),_===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(Et=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(Et=i.RGBA16UI),K===i.UNSIGNED_INT&&(Et=i.RGBA32UI),K===i.BYTE&&(Et=i.RGBA8I),K===i.SHORT&&(Et=i.RGBA16I),K===i.INT&&(Et=i.RGBA32I)),_===i.RGB&&(K===i.UNSIGNED_SHORT&&qt&&(Et=qt.RGB16_EXT),K===i.SHORT&&qt&&(Et=qt.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(Et=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(Et=i.R11F_G11F_B10F)),_===i.RGBA){const Dt=jt?yl:En.getTransfer(Tt);K===i.FLOAT&&(Et=i.RGBA32F),K===i.HALF_FLOAT&&(Et=i.RGBA16F),K===i.UNSIGNED_BYTE&&(Et=Dt===Fn?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&qt&&(Et=qt.RGBA16_EXT),K===i.SHORT&&qt&&(Et=qt.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(Et=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(Et=i.RGB5_A1)}return(Et===i.R16F||Et===i.R32F||Et===i.RG16F||Et===i.RG32F||Et===i.RGBA16F||Et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Et}function T(P,_){let K;return P?_===null||_===Ns||_===la?K=i.DEPTH24_STENCIL8:_===vs?K=i.DEPTH32F_STENCIL8:_===aa&&(K=i.DEPTH24_STENCIL8,rn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ns||_===la?K=i.DEPTH_COMPONENT24:_===vs?K=i.DEPTH_COMPONENT32F:_===aa&&(K=i.DEPTH_COMPONENT16),K}function A(P,_){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==_i&&P.minFilter!==Pi?Math.log2(Math.max(_.width,_.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?_.mipmaps.length:1}function F(P){const _=P.target;_.removeEventListener("dispose",F),C(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function M(P){const _=P.target;_.removeEventListener("dispose",M),B(_)}function C(P){const _=n.get(P);if(_.__webglInit===void 0)return;const K=P.source,ht=h.get(K);if(ht){const Tt=ht[_.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&O(P),Object.keys(ht).length===0&&h.delete(K)}n.remove(P)}function O(P){const _=n.get(P);i.deleteTexture(_.__webglTexture);const K=P.source,ht=h.get(K);delete ht[_.__cacheKey],o.memory.textures--}function B(P){const _=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(_.__webglFramebuffer[ht]))for(let Tt=0;Tt<_.__webglFramebuffer[ht].length;Tt++)i.deleteFramebuffer(_.__webglFramebuffer[ht][Tt]);else i.deleteFramebuffer(_.__webglFramebuffer[ht]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[ht])}else{if(Array.isArray(_.__webglFramebuffer))for(let ht=0;ht<_.__webglFramebuffer.length;ht++)i.deleteFramebuffer(_.__webglFramebuffer[ht]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let ht=0;ht<_.__webglColorRenderbuffer.length;ht++)_.__webglColorRenderbuffer[ht]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[ht]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const K=P.textures;for(let ht=0,Tt=K.length;ht<Tt;ht++){const jt=n.get(K[ht]);jt.__webglTexture&&(i.deleteTexture(jt.__webglTexture),o.memory.textures--),n.remove(K[ht])}n.remove(P)}let G=0;function nt(){G=0}function H(){return G}function J(P){G=P}function Mt(){const P=G;return P>=s.maxTextures&&rn("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,P}function rt(P){const _=[];return _.push(P.wrapS),_.push(P.wrapT),_.push(P.wrapR||0),_.push(P.magFilter),_.push(P.minFilter),_.push(P.anisotropy),_.push(P.internalFormat),_.push(P.format),_.push(P.type),_.push(P.generateMipmaps),_.push(P.premultiplyAlpha),_.push(P.flipY),_.push(P.unpackAlignment),_.push(P.colorSpace),_.join()}function At(P,_){const K=n.get(P);if(P.isVideoTexture&&N(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&K.__version!==P.version){const ht=P.image;if(ht===null)rn("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)rn("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(K,P,_);return}}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+_)}function gt(P,_){const K=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){bt(K,P,_);return}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+_)}function yt(P,_){const K=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){bt(K,P,_);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+_)}function Rt(P,_){const K=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&K.__version!==P.version){wt(K,P,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+_)}const ye={[Eo]:i.REPEAT,[on]:i.CLAMP_TO_EDGE,[Gc]:i.MIRRORED_REPEAT},we={[_i]:i.NEAREST,[y0]:i.NEAREST_MIPMAP_NEAREST,[ya]:i.NEAREST_MIPMAP_LINEAR,[Pi]:i.LINEAR,[Yl]:i.LINEAR_MIPMAP_NEAREST,[Ar]:i.LINEAR_MIPMAP_LINEAR},en={[T0]:i.NEVER,[P0]:i.ALWAYS,[E0]:i.LESS,[Yu]:i.LEQUAL,[A0]:i.EQUAL,[Zu]:i.GEQUAL,[C0]:i.GREATER,[R0]:i.NOTEQUAL};function Z(P,_){if(_.type===vs&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Pi||_.magFilter===Yl||_.magFilter===ya||_.magFilter===Ar||_.minFilter===Pi||_.minFilter===Yl||_.minFilter===ya||_.minFilter===Ar)&&rn("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ye[_.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ye[_.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ye[_.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,we[_.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,we[_.minFilter]),_.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,en[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===_i||_.minFilter!==ya&&_.minFilter!==Ar||_.type===vs&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ce(P,_){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,_.addEventListener("dispose",F));const ht=_.source;let Tt=h.get(ht);Tt===void 0&&(Tt={},h.set(ht,Tt));const jt=rt(_);if(jt!==P.__cacheKey){Tt[jt]===void 0&&(Tt[jt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),Tt[jt].usedTimes++;const qt=Tt[P.__cacheKey];qt!==void 0&&(Tt[P.__cacheKey].usedTimes--,qt.usedTimes===0&&O(_)),P.__cacheKey=jt,P.__webglTexture=Tt[jt].texture}return K}function _t(P,_,K){return Math.floor(Math.floor(P/K)/_)}function q(P,_,K,ht){const jt=P.updateRanges;if(jt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,K,ht,_.data);else{jt.sort((Ue,ie)=>Ue.start-ie.start);let qt=0;for(let Ue=1;Ue<jt.length;Ue++){const ie=jt[qt],Ft=jt[Ue],Ee=ie.start+ie.count,Se=_t(Ft.start,_.width,4),Xe=_t(ie.start,_.width,4);Ft.start<=Ee+1&&Se===Xe&&_t(Ft.start+Ft.count-1,_.width,4)===Se?ie.count=Math.max(ie.count,Ft.start+Ft.count-ie.start):(++qt,jt[qt]=Ft)}jt.length=qt+1;const Et=e.getParameter(i.UNPACK_ROW_LENGTH),Dt=e.getParameter(i.UNPACK_SKIP_PIXELS),oe=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Ue=0,ie=jt.length;Ue<ie;Ue++){const Ft=jt[Ue],Ee=Math.floor(Ft.start/4),Se=Math.ceil(Ft.count/4),Xe=Ee%_.width,Q=Math.floor(Ee/_.width),Yt=Se,Nt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),e.pixelStorei(i.UNPACK_SKIP_ROWS,Q),e.texSubImage2D(i.TEXTURE_2D,0,Xe,Q,Yt,Nt,K,ht,_.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Et),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function bt(P,_,K){let ht=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ht=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ht=i.TEXTURE_3D);const Tt=ce(P,_),jt=_.source;e.bindTexture(ht,P.__webglTexture,i.TEXTURE0+K);const qt=n.get(jt);if(jt.version!==qt.__version||Tt===!0){if(e.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const Nt=En.getPrimaries(En.workingColorSpace),_e=_.colorSpace===Zs?null:En.getPrimaries(_.colorSpace),be=_.colorSpace===Zs||Nt===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let Dt=g(_.image,!1,s.maxTextureSize);Dt=Zt(_,Dt);const oe=r.convert(_.format,_.colorSpace),Ue=r.convert(_.type);let ie=b(_.internalFormat,oe,Ue,_.normalized,_.colorSpace,_.isVideoTexture);Z(ht,_);let Ft;const Ee=_.mipmaps,Se=_.isVideoTexture!==!0,Xe=qt.__version===void 0||Tt===!0,Q=jt.dataReady,Yt=A(_,Dt);if(_.isDepthTexture)ie=T(_.format===Cr,_.type),Xe&&(Se?e.texStorage2D(i.TEXTURE_2D,1,ie,Dt.width,Dt.height):e.texImage2D(i.TEXTURE_2D,0,ie,Dt.width,Dt.height,0,oe,Ue,null));else if(_.isDataTexture)if(Ee.length>0){Se&&Xe&&e.texStorage2D(i.TEXTURE_2D,Yt,ie,Ee[0].width,Ee[0].height);for(let Nt=0,_e=Ee.length;Nt<_e;Nt++)Ft=Ee[Nt],Se?Q&&e.texSubImage2D(i.TEXTURE_2D,Nt,0,0,Ft.width,Ft.height,oe,Ue,Ft.data):e.texImage2D(i.TEXTURE_2D,Nt,ie,Ft.width,Ft.height,0,oe,Ue,Ft.data);_.generateMipmaps=!1}else Se?(Xe&&e.texStorage2D(i.TEXTURE_2D,Yt,ie,Dt.width,Dt.height),Q&&q(_,Dt,oe,Ue)):e.texImage2D(i.TEXTURE_2D,0,ie,Dt.width,Dt.height,0,oe,Ue,Dt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Se&&Xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Yt,ie,Ee[0].width,Ee[0].height,Dt.depth);for(let Nt=0,_e=Ee.length;Nt<_e;Nt++)if(Ft=Ee[Nt],_.format!==_s)if(oe!==null)if(Se){if(Q)if(_.layerUpdates.size>0){const be=of(Ft.width,Ft.height,_.format,_.type);for(const Vt of _.layerUpdates){const Oe=Ft.data.subarray(Vt*be/Ft.data.BYTES_PER_ELEMENT,(Vt+1)*be/Ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Nt,0,0,Vt,Ft.width,Ft.height,1,oe,Oe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Nt,0,0,0,Ft.width,Ft.height,Dt.depth,oe,Ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Nt,ie,Ft.width,Ft.height,Dt.depth,0,Ft.data,0,0);else rn("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Se?Q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Nt,0,0,0,Ft.width,Ft.height,Dt.depth,oe,Ue,Ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Nt,ie,Ft.width,Ft.height,Dt.depth,0,oe,Ue,Ft.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Se&&Xe&&e.texStorage2D(i.TEXTURE_2D,Yt,ie,Ee[0].width,Ee[0].height);for(let Nt=0,_e=Ee.length;Nt<_e;Nt++)Ft=Ee[Nt],_.format!==_s?oe!==null?Se?Q&&e.compressedTexSubImage2D(i.TEXTURE_2D,Nt,0,0,Ft.width,Ft.height,oe,Ft.data):e.compressedTexImage2D(i.TEXTURE_2D,Nt,ie,Ft.width,Ft.height,0,Ft.data):rn("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?Q&&e.texSubImage2D(i.TEXTURE_2D,Nt,0,0,Ft.width,Ft.height,oe,Ue,Ft.data):e.texImage2D(i.TEXTURE_2D,Nt,ie,Ft.width,Ft.height,0,oe,Ue,Ft.data)}else if(_.isDataArrayTexture)if(Se){if(Xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Yt,ie,Dt.width,Dt.height,Dt.depth),Q)if(_.layerUpdates.size>0){const Nt=of(Dt.width,Dt.height,_.format,_.type);for(const _e of _.layerUpdates){const be=Dt.data.subarray(_e*Nt/Dt.data.BYTES_PER_ELEMENT,(_e+1)*Nt/Dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,Dt.width,Dt.height,1,oe,Ue,be)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Dt.width,Dt.height,Dt.depth,oe,Ue,Dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ie,Dt.width,Dt.height,Dt.depth,0,oe,Ue,Dt.data);else if(_.isData3DTexture)Se?(Xe&&e.texStorage3D(i.TEXTURE_3D,Yt,ie,Dt.width,Dt.height,Dt.depth),Q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Dt.width,Dt.height,Dt.depth,oe,Ue,Dt.data)):e.texImage3D(i.TEXTURE_3D,0,ie,Dt.width,Dt.height,Dt.depth,0,oe,Ue,Dt.data);else if(_.isFramebufferTexture){if(Xe)if(Se)e.texStorage2D(i.TEXTURE_2D,Yt,ie,Dt.width,Dt.height);else{let Nt=Dt.width,_e=Dt.height;for(let be=0;be<Yt;be++)e.texImage2D(i.TEXTURE_2D,be,ie,Nt,_e,0,oe,Ue,null),Nt>>=1,_e>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const Nt=i.canvas;if(Nt.hasAttribute("layoutsubtree")||Nt.setAttribute("layoutsubtree","true"),Dt.parentNode!==Nt){Nt.appendChild(Dt),d.add(_),Nt.onpaint=_e=>{const be=_e.changedElements;for(const Vt of d)be.includes(Vt.image)&&(Vt.needsUpdate=!0)},Nt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Dt);else{const be=i.RGBA,Vt=i.RGBA,Oe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,be,Vt,Oe,Dt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(Se&&Xe){const Nt=fe(Ee[0]);e.texStorage2D(i.TEXTURE_2D,Yt,ie,Nt.width,Nt.height)}for(let Nt=0,_e=Ee.length;Nt<_e;Nt++)Ft=Ee[Nt],Se?Q&&e.texSubImage2D(i.TEXTURE_2D,Nt,0,0,oe,Ue,Ft):e.texImage2D(i.TEXTURE_2D,Nt,ie,oe,Ue,Ft);_.generateMipmaps=!1}else if(Se){if(Xe){const Nt=fe(Dt);e.texStorage2D(i.TEXTURE_2D,Yt,ie,Nt.width,Nt.height)}Q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,Ue,Dt)}else e.texImage2D(i.TEXTURE_2D,0,ie,oe,Ue,Dt);p(_)&&S(ht),qt.__version=jt.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function wt(P,_,K){if(_.image.length!==6)return;const ht=ce(P,_),Tt=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+K);const jt=n.get(Tt);if(Tt.version!==jt.__version||ht===!0){e.activeTexture(i.TEXTURE0+K);const qt=En.getPrimaries(En.workingColorSpace),Et=_.colorSpace===Zs?null:En.getPrimaries(_.colorSpace),Dt=_.colorSpace===Zs||qt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const oe=_.isCompressedTexture||_.image[0].isCompressedTexture,Ue=_.image[0]&&_.image[0].isDataTexture,ie=[];for(let Vt=0;Vt<6;Vt++)!oe&&!Ue?ie[Vt]=g(_.image[Vt],!0,s.maxCubemapSize):ie[Vt]=Ue?_.image[Vt].image:_.image[Vt],ie[Vt]=Zt(_,ie[Vt]);const Ft=ie[0],Ee=r.convert(_.format,_.colorSpace),Se=r.convert(_.type),Xe=b(_.internalFormat,Ee,Se,_.normalized,_.colorSpace),Q=_.isVideoTexture!==!0,Yt=jt.__version===void 0||ht===!0,Nt=Tt.dataReady;let _e=A(_,Ft);Z(i.TEXTURE_CUBE_MAP,_);let be;if(oe){Q&&Yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Xe,Ft.width,Ft.height);for(let Vt=0;Vt<6;Vt++){be=ie[Vt].mipmaps;for(let Oe=0;Oe<be.length;Oe++){const Ie=be[Oe];_.format!==_s?Ee!==null?Q?Nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,Oe,0,0,Ie.width,Ie.height,Ee,Ie.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,Oe,Xe,Ie.width,Ie.height,0,Ie.data):rn("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?Nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,Oe,0,0,Ie.width,Ie.height,Ee,Se,Ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,Oe,Xe,Ie.width,Ie.height,0,Ee,Se,Ie.data)}}}else{if(be=_.mipmaps,Q&&Yt){be.length>0&&_e++;const Vt=fe(ie[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Xe,Vt.width,Vt.height)}for(let Vt=0;Vt<6;Vt++)if(Ue){Q?Nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,0,0,0,ie[Vt].width,ie[Vt].height,Ee,Se,ie[Vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,0,Xe,ie[Vt].width,ie[Vt].height,0,Ee,Se,ie[Vt].data);for(let Oe=0;Oe<be.length;Oe++){const vn=be[Oe].image[Vt].image;Q?Nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,Oe+1,0,0,vn.width,vn.height,Ee,Se,vn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,Oe+1,Xe,vn.width,vn.height,0,Ee,Se,vn.data)}}else{Q?Nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,0,0,0,Ee,Se,ie[Vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,0,Xe,Ee,Se,ie[Vt]);for(let Oe=0;Oe<be.length;Oe++){const Ie=be[Oe];Q?Nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,Oe+1,0,0,Ee,Se,Ie.image[Vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,Oe+1,Xe,Ee,Se,Ie.image[Vt])}}}p(_)&&S(i.TEXTURE_CUBE_MAP),jt.__version=Tt.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function Kt(P,_,K,ht,Tt,jt){const qt=r.convert(K.format,K.colorSpace),Et=r.convert(K.type),Dt=b(K.internalFormat,qt,Et,K.normalized,K.colorSpace),oe=n.get(_),Ue=n.get(K);if(Ue.__renderTarget=_,!oe.__hasExternalTextures){const ie=Math.max(1,_.width>>jt),Ft=Math.max(1,_.height>>jt);Tt===i.TEXTURE_3D||Tt===i.TEXTURE_2D_ARRAY?e.texImage3D(Tt,jt,Dt,ie,Ft,_.depth,0,qt,Et,null):e.texImage2D(Tt,jt,Dt,ie,Ft,0,qt,Et,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Jt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,Tt,Ue.__webglTexture,0,ut(_)):(Tt===i.TEXTURE_2D||Tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ht,Tt,Ue.__webglTexture,jt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(P,_,K){if(i.bindRenderbuffer(i.RENDERBUFFER,P),_.depthBuffer){const ht=_.depthTexture,Tt=ht&&ht.isDepthTexture?ht.type:null,jt=T(_.stencilBuffer,Tt),qt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Jt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut(_),jt,_.width,_.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut(_),jt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,jt,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,qt,i.RENDERBUFFER,P)}else{const ht=_.textures;for(let Tt=0;Tt<ht.length;Tt++){const jt=ht[Tt],qt=r.convert(jt.format,jt.colorSpace),Et=r.convert(jt.type),Dt=b(jt.internalFormat,qt,Et,jt.normalized,jt.colorSpace);Jt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut(_),Dt,_.width,_.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut(_),Dt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Dt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(P,_,K){const ht=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Tt=n.get(_.depthTexture);if(Tt.__renderTarget=_,(!Tt.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ht){if(Tt.__webglInit===void 0&&(Tt.__webglInit=!0,_.depthTexture.addEventListener("dispose",F)),Tt.__webglTexture===void 0){Tt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Tt.__webglTexture),Z(i.TEXTURE_CUBE_MAP,_.depthTexture);const oe=r.convert(_.depthTexture.format),Ue=r.convert(_.depthTexture.type);let ie;_.depthTexture.format===Js?ie=i.DEPTH_COMPONENT24:_.depthTexture.format===Cr&&(ie=i.DEPTH24_STENCIL8);for(let Ft=0;Ft<6;Ft++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,ie,_.width,_.height,0,oe,Ue,null)}}else At(_.depthTexture,0);const jt=Tt.__webglTexture,qt=ut(_),Et=ht?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,Dt=_.depthTexture.format===Cr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Js)Jt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Dt,Et,jt,0,qt):i.framebufferTexture2D(i.FRAMEBUFFER,Dt,Et,jt,0);else if(_.depthTexture.format===Cr)Jt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Dt,Et,jt,0,qt):i.framebufferTexture2D(i.FRAMEBUFFER,Dt,Et,jt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function vt(P){const _=n.get(P),K=P.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==P.depthTexture){const ht=P.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ht){const Tt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ht.removeEventListener("dispose",Tt)};ht.addEventListener("dispose",Tt),_.__depthDisposeCallback=Tt}_.__boundDepthTexture=ht}if(P.depthTexture&&!_.__autoAllocateDepthBuffer)if(K)for(let ht=0;ht<6;ht++)Te(_.__webglFramebuffer[ht],P,ht);else{const ht=P.texture.mipmaps;ht&&ht.length>0?Te(_.__webglFramebuffer[0],P,0):Te(_.__webglFramebuffer,P,0)}else if(K){_.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[ht]),_.__webglDepthbuffer[ht]===void 0)_.__webglDepthbuffer[ht]=i.createRenderbuffer(),Ht(_.__webglDepthbuffer[ht],P,!1);else{const Tt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,jt=_.__webglDepthbuffer[ht];i.bindRenderbuffer(i.RENDERBUFFER,jt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,jt)}}else{const ht=P.texture.mipmaps;if(ht&&ht.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ht(_.__webglDepthbuffer,P,!1);else{const Tt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,jt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,jt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,jt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(P,_,K){const ht=n.get(P);_!==void 0&&Kt(ht.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&vt(P)}function Gt(P){const _=P.texture,K=n.get(P),ht=n.get(_);P.addEventListener("dispose",M);const Tt=P.textures,jt=P.isWebGLCubeRenderTarget===!0,qt=Tt.length>1;if(qt||(ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture()),ht.__version=_.version,o.memory.textures++),jt){K.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(_.mipmaps&&_.mipmaps.length>0){K.__webglFramebuffer[Et]=[];for(let Dt=0;Dt<_.mipmaps.length;Dt++)K.__webglFramebuffer[Et][Dt]=i.createFramebuffer()}else K.__webglFramebuffer[Et]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){K.__webglFramebuffer=[];for(let Et=0;Et<_.mipmaps.length;Et++)K.__webglFramebuffer[Et]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(qt)for(let Et=0,Dt=Tt.length;Et<Dt;Et++){const oe=n.get(Tt[Et]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Jt(P)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Et=0;Et<Tt.length;Et++){const Dt=Tt[Et];K.__webglColorRenderbuffer[Et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[Et]);const oe=r.convert(Dt.format,Dt.colorSpace),Ue=r.convert(Dt.type),ie=b(Dt.internalFormat,oe,Ue,Dt.normalized,Dt.colorSpace,P.isXRRenderTarget===!0),Ft=ut(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,ie,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,K.__webglColorRenderbuffer[Et])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),Ht(K.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(jt){e.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture),Z(i.TEXTURE_CUBE_MAP,_);for(let Et=0;Et<6;Et++)if(_.mipmaps&&_.mipmaps.length>0)for(let Dt=0;Dt<_.mipmaps.length;Dt++)Kt(K.__webglFramebuffer[Et][Dt],P,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Dt);else Kt(K.__webglFramebuffer[Et],P,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);p(_)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(qt){for(let Et=0,Dt=Tt.length;Et<Dt;Et++){const oe=Tt[Et],Ue=n.get(oe);let ie=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ie=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ie,Ue.__webglTexture),Z(ie,oe),Kt(K.__webglFramebuffer,P,oe,i.COLOR_ATTACHMENT0+Et,ie,0),p(oe)&&S(ie)}e.unbindTexture()}else{let Et=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Et=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,ht.__webglTexture),Z(Et,_),_.mipmaps&&_.mipmaps.length>0)for(let Dt=0;Dt<_.mipmaps.length;Dt++)Kt(K.__webglFramebuffer[Dt],P,_,i.COLOR_ATTACHMENT0,Et,Dt);else Kt(K.__webglFramebuffer,P,_,i.COLOR_ATTACHMENT0,Et,0);p(_)&&S(Et),e.unbindTexture()}P.depthBuffer&&vt(P)}function Ut(P){const _=P.textures;for(let K=0,ht=_.length;K<ht;K++){const Tt=_[K];if(p(Tt)){const jt=R(P),qt=n.get(Tt).__webglTexture;e.bindTexture(jt,qt),S(jt),e.unbindTexture()}}}const Qt=[],ke=[];function Le(P){if(P.samples>0){if(Jt(P)===!1){const _=P.textures,K=P.width,ht=P.height;let Tt=i.COLOR_BUFFER_BIT;const jt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,qt=n.get(P),Et=_.length>1;if(Et)for(let oe=0;oe<_.length;oe++)e.bindFramebuffer(i.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,qt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer);const Dt=P.texture.mipmaps;Dt&&Dt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let oe=0;oe<_.length;oe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Tt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Tt|=i.STENCIL_BUFFER_BIT)),Et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,qt.__webglColorRenderbuffer[oe]);const Ue=n.get(_[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ue,0)}i.blitFramebuffer(0,0,K,ht,0,0,K,ht,Tt,i.NEAREST),c===!0&&(Qt.length=0,ke.length=0,Qt.push(i.COLOR_ATTACHMENT0+oe),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(Qt.push(jt),ke.push(jt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Qt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Et)for(let oe=0;oe<_.length;oe++){e.bindFramebuffer(i.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,qt.__webglColorRenderbuffer[oe]);const Ue=n.get(_[oe]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,qt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,Ue,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){const _=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ut(P){return Math.min(s.maxSamples,P.samples)}function Jt(P){const _=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function N(P){const _=o.render.frame;u.get(P)!==_&&(u.set(P,_),P.update())}function Zt(P,_){const K=P.colorSpace,ht=P.format,Tt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||K!==Ml&&K!==Zs&&(En.getTransfer(K)===Fn?(ht!==_s||Tt!==Qi)&&rn("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rn("WebGLTextures: Unsupported texture color space:",K)),_}function fe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=Mt,this.resetTextureUnits=nt,this.getTextureUnits=H,this.setTextureUnits=J,this.setTexture2D=At,this.setTexture2DArray=gt,this.setTexture3D=yt,this.setTextureCube=Rt,this.rebindTextures=zt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Kt,this.useMultisampledRTT=Jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ox(i,t){function e(n,s=Zs){let r;const o=En.getTransfer(s);if(n===Qi)return i.UNSIGNED_BYTE;if(n===ku)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ed)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===jf)return i.BYTE;if(n===td)return i.SHORT;if(n===aa)return i.UNSIGNED_SHORT;if(n===Bu)return i.INT;if(n===Ns)return i.UNSIGNED_INT;if(n===vs)return i.FLOAT;if(n===Zi)return i.HALF_FLOAT;if(n===id)return i.ALPHA;if(n===sd)return i.RGB;if(n===_s)return i.RGBA;if(n===Js)return i.DEPTH_COMPONENT;if(n===Cr)return i.DEPTH_STENCIL;if(n===Hu)return i.RED;if(n===Vu)return i.RED_INTEGER;if(n===Ur)return i.RG;if(n===Wu)return i.RG_INTEGER;if(n===Xu)return i.RGBA_INTEGER;if(n===al||n===ll||n===cl||n===ul)if(o===Fn)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===al)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ll)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ul)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===al)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ll)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ul)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hc||n===Vc||n===Wc||n===Xc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Hc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yc||n===Zc||n===qc||n===$c||n===Kc||n===_l||n===Jc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Yc||n===Zc)return o===Fn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qc)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===$c)return r.COMPRESSED_R11_EAC;if(n===Kc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===_l)return r.COMPRESSED_RG11_EAC;if(n===Jc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Qc||n===jc||n===tu||n===eu||n===nu||n===iu||n===su||n===ru||n===ou||n===au||n===lu||n===cu||n===uu||n===hu)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Qc)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jc)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tu)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===eu)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nu)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===iu)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===su)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ru)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ou)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===au)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lu)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cu)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uu)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hu)return o===Fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fu||n===du||n===pu)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fu)return o===Fn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===du)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mu||n===gu||n===xl||n===vu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===mu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===la?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const ax=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lx=`
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

}`;class cx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new md(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new xi({vertexShader:ax,fragmentShader:lx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ne(new ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ux extends Br{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,m=null;const v=typeof XRWebGLBinding<"u",g=new cx,p={},S=e.getContextAttributes();let R=null,b=null;const T=[],A=[],F=new $t;let M=null,C=null;const O=new Xi;O.viewport=new ei;const B=new Xi;B.viewport=new ei;const G=[O,B],nt=new gm;let H=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(_t){let q=T[_t];return q===void 0&&(q=new jl,T[_t]=q),q.getTargetRaySpace()},this.getControllerGrip=function(_t){let q=T[_t];return q===void 0&&(q=new jl,T[_t]=q),q.getGripSpace()},this.getHand=function(_t){let q=T[_t];return q===void 0&&(q=new jl,T[_t]=q),q.getHandSpace()};function Mt(_t){const q=A.indexOf(_t.inputSource);if(q===-1)return;const bt=T[q];bt!==void 0&&(bt.update(_t.inputSource,_t.frame,l||o),bt.dispatchEvent({type:_t.type,data:_t.inputSource}))}function rt(){s.removeEventListener("select",Mt),s.removeEventListener("selectstart",Mt),s.removeEventListener("selectend",Mt),s.removeEventListener("squeeze",Mt),s.removeEventListener("squeezestart",Mt),s.removeEventListener("squeezeend",Mt),s.removeEventListener("end",rt),s.removeEventListener("inputsourceschange",At);for(let _t=0;_t<T.length;_t++){const q=A[_t];q!==null&&(A[_t]=null,T[_t].disconnect(q))}H=null,J=null,g.reset();for(const _t in p)delete p[_t];if(t.setRenderTarget(R),h=null,f=null,d=null,s=null,b=null,ce.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(F.width,F.height,!1),C!==null){const _t=C.camera;_t.fov=C.fov,_t.zoom=C.zoom,_t.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(_t){r=_t,n.isPresenting===!0&&rn("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(_t){a=_t,n.isPresenting===!0&&rn("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(_t){l=_t},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(_t){if(s=_t,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",Mt),s.addEventListener("selectstart",Mt),s.addEventListener("selectend",Mt),s.addEventListener("squeeze",Mt),s.addEventListener("squeezestart",Mt),s.addEventListener("squeezeend",Mt),s.addEventListener("end",rt),s.addEventListener("inputsourceschange",At),S.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(F),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,wt=null,Kt=null;S.depth&&(Kt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=S.stencil?Cr:Js,wt=S.stencil?la:Ns);const Ht={colorFormat:e.RGBA8,depthFormat:Kt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Ht),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Oi(f.textureWidth,f.textureHeight,{format:_s,type:Qi,depthTexture:new ua(f.textureWidth,f.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const bt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,e,bt),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new Oi(h.framebufferWidth,h.framebufferHeight,{format:_s,type:Qi,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ce.setContext(s),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function At(_t){for(let q=0;q<_t.removed.length;q++){const bt=_t.removed[q],wt=A.indexOf(bt);wt>=0&&(A[wt]=null,T[wt].disconnect(bt))}for(let q=0;q<_t.added.length;q++){const bt=_t.added[q];let wt=A.indexOf(bt);if(wt===-1){for(let Ht=0;Ht<T.length;Ht++)if(Ht>=A.length){A.push(bt),wt=Ht;break}else if(A[Ht]===null){A[Ht]=bt,wt=Ht;break}if(wt===-1)break}const Kt=T[wt];Kt&&Kt.connect(bt)}}const gt=new E,yt=new E;function Rt(_t,q,bt){gt.setFromMatrixPosition(q.matrixWorld),yt.setFromMatrixPosition(bt.matrixWorld);const wt=gt.distanceTo(yt),Kt=q.projectionMatrix.elements,Ht=bt.projectionMatrix.elements,Te=Kt[14]/(Kt[10]-1),vt=Kt[14]/(Kt[10]+1),zt=(Kt[9]+1)/Kt[5],Gt=(Kt[9]-1)/Kt[5],Ut=(Kt[8]-1)/Kt[0],Qt=(Ht[8]+1)/Ht[0],ke=Te*Ut,Le=Te*Qt,ut=wt/(-Ut+Qt),Jt=ut*-Ut;if(q.matrixWorld.decompose(_t.position,_t.quaternion,_t.scale),_t.translateX(Jt),_t.translateZ(ut),_t.matrixWorld.compose(_t.position,_t.quaternion,_t.scale),_t.matrixWorldInverse.copy(_t.matrixWorld).invert(),Kt[10]===-1)_t.projectionMatrix.copy(q.projectionMatrix),_t.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const N=Te+ut,Zt=vt+ut,fe=ke-Jt,P=Le+(wt-Jt),_=zt*vt/Zt*N,K=Gt*vt/Zt*N;_t.projectionMatrix.makePerspective(fe,P,_,K,N,Zt),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert()}}function ye(_t,q){q===null?_t.matrixWorld.copy(_t.matrix):_t.matrixWorld.multiplyMatrices(q.matrixWorld,_t.matrix),_t.matrixWorldInverse.copy(_t.matrixWorld).invert()}this.updateCamera=function(_t){if(s===null)return;let q=_t.near,bt=_t.far;g.texture!==null&&(g.depthNear>0&&(q=g.depthNear),g.depthFar>0&&(bt=g.depthFar)),nt.near=B.near=O.near=q,nt.far=B.far=O.far=bt,(H!==nt.near||J!==nt.far)&&(s.updateRenderState({depthNear:nt.near,depthFar:nt.far}),H=nt.near,J=nt.far),nt.layers.mask=_t.layers.mask|6,O.layers.mask=nt.layers.mask&-5,B.layers.mask=nt.layers.mask&-3;const wt=_t.parent,Kt=nt.cameras;ye(nt,wt);for(let Ht=0;Ht<Kt.length;Ht++)ye(Kt[Ht],wt);Kt.length===2?Rt(nt,O,B):nt.projectionMatrix.copy(O.projectionMatrix),C===null&&_t.isPerspectiveCamera&&(C={camera:_t,fov:_t.fov,zoom:_t.zoom}),we(_t,nt,wt)};function we(_t,q,bt){bt===null?_t.matrix.copy(q.matrixWorld):(_t.matrix.copy(bt.matrixWorld),_t.matrix.invert(),_t.matrix.multiply(q.matrixWorld)),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.updateMatrixWorld(!0),_t.projectionMatrix.copy(q.projectionMatrix),_t.projectionMatrixInverse.copy(q.projectionMatrixInverse),_t.isPerspectiveCamera&&(_t.fov=Ao*2*Math.atan(1/_t.projectionMatrix.elements[5]),_t.zoom=1)}this.getCamera=function(){return nt},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(_t){c=_t,f!==null&&(f.fixedFoveation=_t),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=_t)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(nt)},this.getCameraTexture=function(_t){return p[_t]};let en=null;function Z(_t,q){if(u=q.getViewerPose(l||o),m=q,u!==null){const bt=u.views;h!==null&&(t.setRenderTargetFramebuffer(b,h.framebuffer),t.setRenderTarget(b));let wt=!1;bt.length!==nt.cameras.length&&(nt.cameras.length=0,wt=!0);for(let vt=0;vt<bt.length;vt++){const zt=bt[vt];let Gt=null;if(h!==null)Gt=h.getViewport(zt);else{const Qt=d.getViewSubImage(f,zt);Gt=Qt.viewport,vt===0&&(t.setRenderTargetTextures(b,Qt.colorTexture,Qt.depthStencilTexture),t.setRenderTarget(b))}let Ut=G[vt];Ut===void 0&&(Ut=new Xi,Ut.layers.enable(vt),Ut.viewport=new ei,G[vt]=Ut),Ut.matrix.fromArray(zt.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(zt.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),vt===0&&(nt.matrix.copy(Ut.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale)),wt===!0&&nt.cameras.push(Ut)}const Kt=s.enabledFeatures;if(Kt&&Kt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const vt=d.getDepthInformation(bt[0]);vt&&vt.isValid&&vt.texture&&g.init(vt,s.renderState)}if(Kt&&Kt.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let vt=0;vt<bt.length;vt++){const zt=bt[vt].camera;if(zt){let Gt=p[zt];Gt||(Gt=new md,p[zt]=Gt);const Ut=d.getCameraImage(zt);Gt.sourceTexture=Ut}}}}for(let bt=0;bt<T.length;bt++){const wt=A[bt],Kt=T[bt];wt!==null&&Kt!==void 0&&Kt.update(wt,q,l||o)}en&&en(_t,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),m=null}const ce=new Pd;ce.setAnimationLoop(Z),this.setAnimationLoop=function(_t){en=_t},this.dispose=function(){}}}const hx=new xn,Od=new pn;Od.set(-1,0,0,0,1,0,0,0,1);function fx(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,wd(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,S,R,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&h(g,p,b)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,S,R):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Fi&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Fi&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const S=t.get(p),R=S.envMap,b=S.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(hx.makeRotationFromEuler(b)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Od),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,S,R){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=R*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fi&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const S=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function dx(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,T){const A=T.program;n.uniformBlockBinding(b,A)}function l(b,T){let A=s[b.id];A===void 0&&(g(b),A=u(b),s[b.id]=A,b.addEventListener("dispose",S));const F=T.program;n.updateUBOMapping(b,F);const M=t.render.frame;r[b.id]!==M&&(f(b),r[b.id]=M)}function u(b){const T=d();b.__bindingPointIndex=T;const A=i.createBuffer(),F=b.__size,M=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,F,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,A),A}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return Rn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const T=s[b.id],A=b.uniforms,F=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let M=0,C=A.length;M<C;M++){const O=A[M];if(Array.isArray(O))for(let B=0,G=O.length;B<G;B++)h(O[B],M,B,F);else h(O,M,0,F)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(b,T,A,F){if(v(b,T,A,F)===!0){const M=b.__offset,C=b.value;if(Array.isArray(C)){let O=0;for(let B=0;B<C.length;B++){const G=C[B],nt=p(G);m(G,b.__data,O),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(O+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(C,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,b.__data)}}function m(b,T,A){typeof b=="number"||typeof b=="boolean"?T[0]=b:b.isMatrix3?(T[0]=b.elements[0],T[1]=b.elements[1],T[2]=b.elements[2],T[3]=0,T[4]=b.elements[3],T[5]=b.elements[4],T[6]=b.elements[5],T[7]=0,T[8]=b.elements[6],T[9]=b.elements[7],T[10]=b.elements[8],T[11]=0):ArrayBuffer.isView(b)?T.set(new b.constructor(b.buffer,b.byteOffset,T.length)):b.toArray(T,A)}function v(b,T,A,F){const M=b.value,C=T+"_"+A;if(F[C]===void 0)return typeof M=="number"||typeof M=="boolean"?F[C]=M:ArrayBuffer.isView(M)?F[C]=M.slice():F[C]=M.clone(),!0;{const O=F[C];if(typeof M=="number"||typeof M=="boolean"){if(O!==M)return F[C]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(O.equals(M)===!1)return O.copy(M),!0}}return!1}function g(b){const T=b.uniforms;let A=0;const F=16;for(let C=0,O=T.length;C<O;C++){const B=Array.isArray(T[C])?T[C]:[T[C]];for(let G=0,nt=B.length;G<nt;G++){const H=B[G],J=Array.isArray(H.value)?H.value:[H.value];for(let Mt=0,rt=J.length;Mt<rt;Mt++){const At=J[Mt],gt=p(At),yt=A%F,Rt=yt%gt.boundary,ye=yt+Rt;A+=Rt,ye!==0&&F-ye<gt.storage&&(A+=F-ye),H.__data=new Float32Array(gt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=A,A+=gt.storage}}}const M=A%F;return M>0&&(A+=F-M),b.__size=A,b.__cache={},this}function p(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?rn("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(T.boundary=16,T.storage=b.byteLength):rn("WebGLRenderer: Unsupported uniform value type.",b),T}function S(b){const T=b.target;T.removeEventListener("dispose",S);const A=o.indexOf(T.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function R(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:R}}const px=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ws=null;function mx(){return ws===null&&(ws=new fd(px,16,16,Ur,Zi),ws.name="DFG_LUT",ws.minFilter=Pi,ws.magFilter=Pi,ws.wrapS=on,ws.wrapT=on,ws.generateMipmaps=!1,ws.needsUpdate=!0),ws}class gx{constructor(t={}){const{canvas:e=I0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Qi}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const v=h,g=new Set([Xu,Wu,Vu]),p=new Set([Qi,Ns,aa,la,ku,Gu]),S=new Uint32Array(4),R=new Int32Array(4),b=new E;let T=null,A=null;const F=[],M=[];let C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Is,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let B=!1,G=null,nt=null,H=null,J=null;this._outputColorSpace=Wi;let Mt=0,rt=0,At=null,gt=-1,yt=null;const Rt=new ei,ye=new ei;let we=null;const en=new Ot(0);let Z=0,ce=e.width,_t=e.height,q=1,bt=null,wt=null;const Kt=new ei(0,0,ce,_t),Ht=new ei(0,0,ce,_t);let Te=!1;const vt=new Qu;let zt=!1,Gt=!1;const Ut=new xn,Qt=new E,ke=new ei,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Jt(){return At===null?q:1}let N=n;function Zt(w,W){return e.getContext(w,W)}let fe,P,_,K,ht,Tt,jt,qt,Et,Dt,oe,Ue,ie,Ft,Ee,Se,Xe,Q,Yt,Nt,_e,be,Vt;try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Iu}`),e.addEventListener("webglcontextlost",vn,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",fn,!1),N===null){const W="webgl2";if(N=Zt(W,w),N===null)throw Zt(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(w){throw e.removeEventListener("webglcontextlost",vn,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",fn,!1),Rn("WebGLRenderer: "+w.message),w}function Oe(){fe=new mv(N),fe.init(),_e=new ox(N,fe),P=new rv(N,fe,t,_e),_=new sx(N,fe),P.reversedDepthBuffer&&f&&_.buffers.depth.setReversed(!0),nt=N.createFramebuffer(),H=N.createFramebuffer(),J=N.createFramebuffer(),K=new _v(N),ht=new W_,Tt=new rx(N,fe,_,ht,P,_e,K),jt=new pv(O),qt=new Mm(N),be=new iv(N,qt),Et=new gv(N,qt,K,be),Dt=new Mv(N,Et,qt,be,K),Q=new xv(N,P,Tt),Ee=new ov(ht),oe=new V_(O,jt,fe,P,be,Ee),Ue=new fx(O,ht),ie=new Y_,Ft=new Q_(fe),Xe=new nv(O,jt,_,Dt,m,c),Se=new ix(O,Dt,P),Vt=new dx(N,K,P,_),Yt=new sv(N,fe,K),Nt=new vv(N,fe,K),K.programs=oe.programs,O.capabilities=P,O.extensions=fe,O.properties=ht,O.renderLists=ie,O.shadowMap=Se,O.state=_,O.info=K}v!==Qi&&(C=new Sv(v,e.width,e.height,a,s,r));const Ie=new ux(O,N);this.xr=Ie,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=fe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=fe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(ce,_t,!1))},this.getSize=function(w){return w.set(ce,_t)},this.setSize=function(w,W,dt=!0){if(Ie.isPresenting){rn("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=w,_t=W,e.width=Math.floor(w*q),e.height=Math.floor(W*q),dt===!0&&(e.style.width=w+"px",e.style.height=W+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(ce*q,_t*q).floor()},this.setDrawingBufferSize=function(w,W,dt){ce=w,_t=W,q=dt,e.width=Math.floor(w*dt),e.height=Math.floor(W*dt),this.setViewport(0,0,w,W)},this.setEffects=function(w){if(v===Qi){Rn("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let W=0;W<w.length;W++)if(w[W].isOutputPass===!0){rn("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Rt)},this.getViewport=function(w){return w.copy(Kt)},this.setViewport=function(w,W,dt,lt){w.isVector4?Kt.set(w.x,w.y,w.z,w.w):Kt.set(w,W,dt,lt),_.viewport(Rt.copy(Kt).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(Ht)},this.setScissor=function(w,W,dt,lt){w.isVector4?Ht.set(w.x,w.y,w.z,w.w):Ht.set(w,W,dt,lt),_.scissor(ye.copy(Ht).multiplyScalar(q).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(w){_.setScissorTest(Te=w)},this.setOpaqueSort=function(w){bt=w},this.setTransparentSort=function(w){wt=w},this.getClearColor=function(w){return w.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,dt=!0){let lt=0;if(w){let j=!1;if(At!==null){const pe=At.texture.format;j=g.has(pe)}if(j){const pe=At.texture.type,le=p.has(pe),ee=Xe.getClearColor(),ge=Xe.getClearAlpha(),Ae=ee.r,$e=ee.g,Pe=ee.b;le?(S[0]=Ae,S[1]=$e,S[2]=Pe,S[3]=ge,N.clearBufferuiv(N.COLOR,0,S)):(R[0]=Ae,R[1]=$e,R[2]=Pe,R[3]=ge,N.clearBufferiv(N.COLOR,0,R))}else lt|=N.COLOR_BUFFER_BIT}W&&(lt|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),dt&&(lt|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),lt!==0&&N.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),G=w},this.dispose=function(){e.removeEventListener("webglcontextlost",vn,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",fn,!1),Xe.dispose(),ie.dispose(),Ft.dispose(),ht.dispose(),jt.dispose(),Dt.dispose(),be.dispose(),Vt.dispose(),oe.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",X),Ie.removeEventListener("sessionend",at),Lt.stop()};function vn(w){w.preventDefault(),bl("WebGLRenderer: Context Lost."),B=!0}function ae(){bl("WebGLRenderer: Context Restored."),B=!1;const w=K.autoReset,W=Se.enabled,dt=Se.autoUpdate,lt=Se.needsUpdate,j=Se.type;Oe(),K.autoReset=w,Se.enabled=W,Se.autoUpdate=dt,Se.needsUpdate=lt,Se.type=j}function fn(w){Rn("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function gi(w){const W=w.target;W.removeEventListener("dispose",gi),z(W)}function z(w){V(w),ht.remove(w)}function V(w){const W=ht.get(w).programs;W!==void 0&&(W.forEach(function(dt){oe.releaseProgram(dt)}),w.isShaderMaterial&&oe.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,dt,lt,j,pe){W===null&&(W=Le);const le=j.isMesh&&j.matrixWorld.determinantAffine()<0,ee=Xn(w,W,dt,lt,j);_.setMaterial(lt,le);let ge=dt.index,Ae=1;if(lt.wireframe===!0){if(ge=Et.getWireframeAttribute(dt),ge===void 0)return;Ae=2}const $e=dt.drawRange,Pe=dt.attributes.position;let xe=$e.start*Ae,Ce=($e.start+$e.count)*Ae;pe!==null&&(xe=Math.max(xe,pe.start*Ae),Ce=Math.min(Ce,(pe.start+pe.count)*Ae)),ge!==null?(xe=Math.max(xe,0),Ce=Math.min(Ce,ge.count)):Pe!=null&&(xe=Math.max(xe,0),Ce=Math.min(Ce,Pe.count));const ln=Ce-xe;if(ln<0||ln===1/0)return;be.setup(j,lt,ee,dt,ge);let Ye,We=Yt;if(ge!==null&&(Ye=qt.get(ge),We=Nt,We.setIndex(Ye)),j.isMesh)lt.wireframe===!0?(_.setLineWidth(lt.wireframeLinewidth*Jt()),We.setMode(N.LINES)):We.setMode(N.TRIANGLES);else if(j.isLine){let Dn=lt.linewidth;Dn===void 0&&(Dn=1),_.setLineWidth(Dn*Jt()),j.isLineSegments?We.setMode(N.LINES):j.isLineLoop?We.setMode(N.LINE_LOOP):We.setMode(N.LINE_STRIP)}else j.isPoints?We.setMode(N.POINTS):j.isSprite&&We.setMode(N.TRIANGLES);if(j.isBatchedMesh)if(fe.get("WEBGL_multi_draw"))We.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Dn=j._multiDrawStarts,Me=j._multiDrawCounts,Ln=j._multiDrawCount,mn=ge?qt.get(ge).bytesPerElement:1,Zn=ht.get(lt).currentProgram.getUniforms();for(let de=0;de<Ln;de++)Zn.setValue(N,"_gl_DrawID",de),We.render(Dn[de]/mn,Me[de])}else if(j.isInstancedMesh)We.renderInstances(xe,ln,j.count);else if(dt.isInstancedBufferGeometry){const Dn=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,Me=Math.min(dt.instanceCount,Dn);We.renderInstances(xe,ln,Me)}else We.render(xe,ln)};function I(w,W,dt,lt){G!==null&&w.isNodeMaterial&&G.setObject(lt,w),zt===!0&&Ee.setState(w,dt,!1),w.transparent===!0&&w.side===Bn&&w.forceSinglePass===!1?(w.side=Fi,w.needsUpdate=!0,ue(w,W,lt),w.side=Dr,w.needsUpdate=!0,ue(w,W,lt),w.side=Bn):ue(w,W,lt)}this.compile=function(w,W,dt=null){dt===null&&(dt=w),G!==null&&G.renderStart(w,W,dt),A=Ft.get(dt),A.init(W),M.push(A),dt.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(A.pushLight(j),j.castShadow&&A.pushShadow(j))}),w!==dt&&w.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(A.pushLight(j),j.castShadow&&A.pushShadow(j))}),A.setupLights(),G!==null&&G.updateLights(A.state.lightsArray),Gt=this.localClippingEnabled,zt=Ee.init(this.clippingPlanes,Gt),zt===!0&&Ee.setGlobalState(this.clippingPlanes,W),G!==null&&Se.render(A.state.shadowsArray,dt,W);const lt=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const pe=j.material;if(pe)if(Array.isArray(pe))for(let le=0;le<pe.length;le++){const ee=pe[le];I(ee,dt,W,j),lt.add(ee)}else I(pe,dt,W,j),lt.add(pe)}),A=M.pop(),G!==null&&G.renderEnd(),lt},this.compileAsync=function(w,W,dt=null){const lt=this.compile(w,W,dt);return new Promise(j=>{function pe(){if(lt.forEach(function(le){const ge=ht.get(le).currentProgram;(ge===void 0||ge.isReady())&&lt.delete(le)}),lt.size===0){j(w);return}setTimeout(pe,10)}fe.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let U=null;function D(w){U&&U(w)}function X(){Lt.stop()}function at(){Lt.start()}const Lt=new Pd;Lt.setAnimationLoop(D),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(w){U=w,Ie.setAnimationLoop(w),w===null?Lt.stop():Lt.start()},Ie.addEventListener("sessionstart",X),Ie.addEventListener("sessionend",at),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){Rn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;G!==null&&G.renderStart(w,W);const dt=Ie.enabled===!0&&Ie.isPresenting===!0,lt=C!==null&&(At===null||dt)&&C.begin(O,At);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(W),W=Ie.getCamera()),w.isScene===!0&&w.onBeforeRender(O,w,W,At),A=Ft.get(w,M.length),A.init(W),A.state.textureUnits=Tt.getTextureUnits(),M.push(A),Ut.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),vt.setFromProjectionMatrix(Ut,Rs,W.reversedDepth),Gt=this.localClippingEnabled,zt=Ee.init(this.clippingPlanes,Gt),T=ie.get(w,F.length),T.init(),F.push(T),Ie.enabled===!0&&Ie.isPresenting===!0){const le=O.xr.getDepthSensingMesh();le!==null&&se(le,W,-1/0,O.sortObjects)}se(w,W,0,O.sortObjects),T.finish(),G!==null&&G.updateLights(A.state.lightsArray),O.sortObjects===!0&&T.sort(bt,wt),ut=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,ut&&Xe.addToRenderList(T,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),zt===!0&&Ee.beginShadows();const j=A.state.shadowsArray;if(Se.render(j,w,W),zt===!0&&Ee.endShadows(),(lt&&C.hasRenderPass())===!1){const le=T.opaque,ee=T.transmissive;if(A.setupLights(),W.isArrayCamera){const ge=W.cameras;if(ee.length>0)for(let Ae=0,$e=ge.length;Ae<$e;Ae++){const Pe=ge[Ae];re(le,ee,w,Pe)}ut&&Xe.render(w);for(let Ae=0,$e=ge.length;Ae<$e;Ae++){const Pe=ge[Ae];me(T,w,Pe,Pe.viewport)}}else ee.length>0&&re(le,ee,w,W),ut&&Xe.render(w),me(T,w,W)}At!==null&&rt===0&&(Tt.updateMultisampleRenderTarget(At),Tt.updateRenderTargetMipmap(At)),lt&&C.end(O),w.isScene===!0&&w.onAfterRender(O,w,W),be.resetDefaultState(),gt=-1,yt=null,M.pop(),M.length>0?(A=M[M.length-1],Tt.setTextureUnits(A.state.textureUnits),zt===!0&&Ee.setGlobalState(O.clippingPlanes,A.state.camera)):A=null,F.pop(),F.length>0?T=F[F.length-1]:T=null,G!==null&&G.renderEnd()};function se(w,W,dt,lt){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)dt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLightProbeGrid)A.pushLightProbeGrid(w);else if(w.isLight)A.pushLight(w),w.castShadow&&A.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(vt)){lt&&ke.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ut);const le=Dt.update(w),ee=w.material;ee.visible&&T.push(w,le,ee,dt,ke.z,null,W)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(vt))){const le=Dt.update(w),ee=w.material;if(lt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ke.copy(w.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),ke.copy(le.boundingSphere.center)),ke.applyMatrix4(w.matrixWorld).applyMatrix4(Ut)),Array.isArray(ee)){const ge=le.groups;for(let Ae=0,$e=ge.length;Ae<$e;Ae++){const Pe=ge[Ae],xe=ee[Pe.materialIndex];xe&&xe.visible&&T.push(w,le,xe,dt,ke.z,Pe,W)}}else ee.visible&&T.push(w,le,ee,dt,ke.z,null,W)}}const pe=w.children;for(let le=0,ee=pe.length;le<ee;le++)se(pe[le],W,dt,lt)}function me(w,W,dt,lt){const{opaque:j,transmissive:pe,transparent:le}=w;A.setupLightsView(dt),zt===!0&&Ee.setGlobalState(O.clippingPlanes,dt),lt&&_.viewport(Rt.copy(lt)),j.length>0&&Wt(j,W,dt),pe.length>0&&Wt(pe,W,dt),le.length>0&&Wt(le,W,dt),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function re(w,W,dt,lt){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[lt.id]===void 0){const xe=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[lt.id]=new Oi(1,1,{generateMipmaps:!0,type:xe?Zi:Qi,minFilter:Ar,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:En.workingColorSpace})}const pe=A.state.transmissionRenderTarget[lt.id],le=lt.viewport||Rt;pe.setSize(le.z*O.transmissionResolutionScale,le.w*O.transmissionResolutionScale);const ee=O.getRenderTarget(),ge=O.getActiveCubeFace(),Ae=O.getActiveMipmapLevel();O.setRenderTarget(pe),O.getClearColor(en),Z=O.getClearAlpha(),Z<1&&O.setClearColor(16777215,.5),O.clear(),ut&&Xe.render(dt);const $e=O.toneMapping;O.toneMapping=Is;const Pe=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),A.setupLightsView(lt),zt===!0&&Ee.setGlobalState(O.clippingPlanes,lt),Wt(w,dt,lt),Tt.updateMultisampleRenderTarget(pe),Tt.updateRenderTargetMipmap(pe),fe.has("WEBGL_multisampled_render_to_texture")===!1){let xe=!1;for(let Ce=0,ln=W.length;Ce<ln;Ce++){const Ye=W[Ce],{object:We,geometry:Dn,material:Me,group:Ln}=Ye;if(Me.side===Bn&&We.layers.test(lt.layers)){const mn=Me.side;Me.side=Fi,Me.needsUpdate=!0,Ct(We,dt,lt,Dn,Me,Ln),Me.side=mn,Me.needsUpdate=!0,xe=!0}}xe===!0&&(Tt.updateMultisampleRenderTarget(pe),Tt.updateRenderTargetMipmap(pe))}O.setRenderTarget(ee,ge,Ae),O.setClearColor(en,Z),Pe!==void 0&&(lt.viewport=Pe),O.toneMapping=$e}function Wt(w,W,dt){const lt=W.isScene===!0?W.overrideMaterial:null;for(let j=0,pe=w.length;j<pe;j++){const le=w[j],{object:ee,geometry:ge,group:Ae}=le;let $e=le.material;$e.allowOverride===!0&&lt!==null&&($e=lt),ee.layers.test(dt.layers)&&Ct(ee,W,dt,ge,$e,Ae)}}function Ct(w,W,dt,lt,j,pe){G!==null&&j.isNodeMaterial&&G.setObject(w,j),w.onBeforeRender(O,W,dt,lt,j,pe),w.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(O,W,dt,lt,w,pe),j.transparent===!0&&j.side===Bn&&j.forceSinglePass===!1?(j.side=Fi,j.needsUpdate=!0,O.renderBufferDirect(dt,W,lt,j,w,pe),j.side=Dr,j.needsUpdate=!0,O.renderBufferDirect(dt,W,lt,j,w,pe),j.side=Bn):O.renderBufferDirect(dt,W,lt,j,w,pe),w.onAfterRender(O,W,dt,lt,j,pe)}function ue(w,W,dt){W.isScene!==!0&&(W=Le);const lt=ht.get(w),j=A.state.lights,pe=A.state.shadowsArray,le=j.state.version,ee=oe.getParameters(w,j.state,pe,W,dt,A.state.lightProbeGridArray),ge=oe.getProgramCacheKey(ee);let Ae=lt.programs;lt.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?W.environment:null,lt.fog=W.fog;const $e=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;lt.envMap=jt.get(w.envMap||lt.environment,$e),lt.envMapRotation=lt.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,Ae===void 0&&(w.addEventListener("dispose",gi),Ae=new Map,lt.programs=Ae);let Pe=Ae.get(ge);if(Pe!==void 0){if(lt.currentProgram===Pe&&lt.lightsStateVersion===le)return je(w,ee),Pe}else ee.uniforms=oe.getUniforms(w),G!==null&&w.isNodeMaterial&&G.build(w,dt,ee),w.onBeforeCompile(ee,O),Pe=oe.acquireProgram(ee,ge),Ae.set(ge,Pe),lt.uniforms=ee.uniforms;const xe=lt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(xe.clippingPlanes=Ee.uniform),je(w,ee),lt.needsLights=An(w),lt.lightsStateVersion=le,lt.needsLights&&(xe.ambientLightColor.value=j.state.ambient,xe.lightProbe.value=j.state.probe,xe.sunLights.value=j.state.sun,xe.sunLightShadows.value=j.state.sunShadow,xe.directionalLights.value=j.state.directional,xe.directionalLightShadows.value=j.state.directionalShadow,xe.spotLights.value=j.state.spot,xe.spotLightShadows.value=j.state.spotShadow,xe.rectAreaLights.value=j.state.rectArea,xe.ltc_1.value=j.state.rectAreaLTC1,xe.ltc_2.value=j.state.rectAreaLTC2,xe.pointLights.value=j.state.point,xe.pointLightShadows.value=j.state.pointShadow,xe.hemisphereLights.value=j.state.hemi,xe.sunShadowMatrix.value=j.state.sunShadowMatrix,xe.sunShadowCascade.value=j.state.sunShadowCascade,xe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,xe.spotLightMatrix.value=j.state.spotLightMatrix,xe.spotLightMap.value=j.state.spotLightMap,xe.pointShadowMatrix.value=j.state.pointShadowMatrix),lt.lightProbeGrid=A.state.lightProbeGridArray.length>0,lt.currentProgram=Pe,lt.uniformsList=null,Pe}function De(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=dl.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function je(w,W){const dt=ht.get(w);dt.outputColorSpace=W.outputColorSpace,dt.batching=W.batching,dt.batchingColor=W.batchingColor,dt.instancing=W.instancing,dt.instancingColor=W.instancingColor,dt.instancingMorph=W.instancingMorph,dt.skinning=W.skinning,dt.morphTargets=W.morphTargets,dt.morphNormals=W.morphNormals,dt.morphColors=W.morphColors,dt.morphTargetsCount=W.morphTargetsCount,dt.numClippingPlanes=W.numClippingPlanes,dt.numIntersection=W.numClipIntersection,dt.vertexAlphas=W.vertexAlphas,dt.vertexTangents=W.vertexTangents,dt.toneMapping=W.toneMapping}function kn(w,W){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;b.setFromMatrixPosition(W.matrixWorld);for(let dt=0,lt=w.length;dt<lt;dt++){const j=w[dt];if(j.texture!==null&&j.boundingBox.containsPoint(b))return j}return null}function Xn(w,W,dt,lt,j){W.isScene!==!0&&(W=Le),Tt.resetTextureUnits();const pe=W.fog,le=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial?W.environment:null,ee=At===null?O.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:En.workingColorSpace,ge=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial&&!lt.envMap||lt.isMeshPhongMaterial&&!lt.envMap,Ae=jt.get(lt.envMap||le,ge),$e=lt.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,Pe=!!dt.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),xe=!!dt.morphAttributes.position,Ce=!!dt.morphAttributes.normal,ln=!!dt.morphAttributes.color;let Ye=Is;lt.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(Ye=O.toneMapping);const We=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,Dn=We!==void 0?We.length:0,Me=ht.get(lt),Ln=A.state.lights;if(zt===!0&&(Gt===!0||w!==yt)){const Xt=w===yt&&lt.id===gt;Ee.setState(lt,w,Xt)}let mn=!1;lt.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Ln.state.version||Me.outputColorSpace!==ee||j.isBatchedMesh&&Me.batching===!1||!j.isBatchedMesh&&Me.batching===!0||j.isBatchedMesh&&Me.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Me.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Me.instancing===!1||!j.isInstancedMesh&&Me.instancing===!0||j.isSkinnedMesh&&Me.skinning===!1||!j.isSkinnedMesh&&Me.skinning===!0||j.isInstancedMesh&&Me.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Me.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Me.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Me.instancingMorph===!1&&j.morphTexture!==null||Me.envMap!==Ae||lt.fog===!0&&Me.fog!==pe||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Ee.numPlanes||Me.numIntersection!==Ee.numIntersection)||Me.vertexAlphas!==$e||Me.vertexTangents!==Pe||Me.morphTargets!==xe||Me.morphNormals!==Ce||Me.morphColors!==ln||Me.toneMapping!==Ye||Me.morphTargetsCount!==Dn||!!Me.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(mn=!0):(mn=!0,Me.__version=lt.version);let Zn=Me.currentProgram;mn===!0&&(Zn=ue(lt,W,j),G&&lt.isNodeMaterial&&G.onUpdateProgram(lt,Zn,Me));let de=!1,Qe=!1,wn=!1;const qe=Zn.getUniforms(),dn=Me.uniforms;if(_.useProgram(Zn.program)&&(de=!0,Qe=!0,wn=!0),lt.id!==gt&&(gt=lt.id,Qe=!0),Me.needsLights){const Xt=kn(A.state.lightProbeGridArray,j);Me.lightProbeGrid!==Xt&&(Me.lightProbeGrid=Xt,Qe=!0)}if(de||yt!==w){_.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),qe.setValue(N,"projectionMatrix",w.projectionMatrix),qe.setValue(N,"viewMatrix",w.matrixWorldInverse);const yi=qe.map.cameraPosition;yi!==void 0&&yi.setValue(N,Qt.setFromMatrixPosition(w.matrixWorld)),P.logarithmicDepthBuffer&&qe.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&qe.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),yt!==w&&(yt=w,Qe=!0,wn=!0)}if(Me.needsLights&&(Ln.state.sunShadowMap.length>0&&qe.setValue(N,"sunShadowMap",Ln.state.sunShadowMap,Tt),Ln.state.directionalShadowMap.length>0&&qe.setValue(N,"directionalShadowMap",Ln.state.directionalShadowMap,Tt),Ln.state.spotShadowMap.length>0&&qe.setValue(N,"spotShadowMap",Ln.state.spotShadowMap,Tt),Ln.state.pointShadowMap.length>0&&qe.setValue(N,"pointShadowMap",Ln.state.pointShadowMap,Tt)),j.isSkinnedMesh){qe.setOptional(N,j,"bindMatrix"),qe.setOptional(N,j,"bindMatrixInverse");const Xt=j.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),qe.setValue(N,"boneTexture",Xt.boneTexture,Tt))}j.isBatchedMesh&&(qe.setOptional(N,j,"batchingTexture"),qe.setValue(N,"batchingTexture",j._matricesTexture,Tt),qe.setOptional(N,j,"batchingIdTexture"),qe.setValue(N,"batchingIdTexture",j._indirectTexture,Tt),qe.setOptional(N,j,"batchingColorTexture"),j._colorsTexture!==null&&qe.setValue(N,"batchingColorTexture",j._colorsTexture,Tt));const Un=dt.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Q.update(j,dt,Zn),(Qe||Me.receiveShadow!==j.receiveShadow)&&(Me.receiveShadow=j.receiveShadow,qe.setValue(N,"receiveShadow",j.receiveShadow)),(lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial)&&lt.envMap===null&&W.environment!==null&&(dn.envMapIntensity.value=W.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=mx()),Qe){if(qe.setValue(N,"toneMappingExposure",O.toneMappingExposure),Me.needsLights&&Nn(dn,wn),pe&&lt.fog===!0&&Ue.refreshFogUniforms(dn,pe),Ue.refreshMaterialUniforms(dn,lt,q,_t,A.state.transmissionRenderTarget[w.id]),Me.needsLights&&Me.lightProbeGrid){const Xt=Me.lightProbeGrid;dn.probesSH.value=Xt.texture,dn.probesMin.value.copy(Xt.boundingBox.min),dn.probesMax.value.copy(Xt.boundingBox.max),dn.probesResolution.value.copy(Xt.resolution)}dl.upload(N,De(Me),dn,Tt)}if(lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(dl.upload(N,De(Me),dn,Tt),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&qe.setValue(N,"center",j.center),qe.setValue(N,"modelViewMatrix",j.modelViewMatrix),qe.setValue(N,"normalMatrix",j.normalMatrix),qe.setValue(N,"modelMatrix",j.matrixWorld),lt.uniformsGroups!==void 0){const Xt=lt.uniformsGroups;for(let yi=0,Ii=Xt.length;yi<Ii;yi++){const zi=Xt[yi];Vt.update(zi,Zn),Vt.bind(zi,Zn)}}return Zn}function Nn(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.sunLights.needsUpdate=W,w.sunLightShadows.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function An(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return Mt},this.getActiveMipmapLevel=function(){return rt},this.getRenderTarget=function(){return At},this.setRenderTargetTextures=function(w,W,dt){const lt=ht.get(w);lt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),ht.get(w.texture).__webglTexture=W,ht.get(w.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:dt,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){const dt=ht.get(w);dt.__webglFramebuffer=W,dt.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(w,W=0,dt=0){At=w,Mt=W,rt=dt;let lt=null,j=!1,pe=!1;if(w){const ee=ht.get(w);if(ee.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(N.FRAMEBUFFER,ee.__webglFramebuffer),Rt.copy(w.viewport),ye.copy(w.scissor),we=w.scissorTest,_.viewport(Rt),_.scissor(ye),_.setScissorTest(we),gt=-1;return}else if(ee.__webglFramebuffer===void 0)Tt.setupRenderTarget(w);else if(ee.__hasExternalTextures)Tt.rebindTextures(w,ht.get(w.texture).__webglTexture,ht.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const $e=w.depthTexture;if(ee.__boundDepthTexture!==$e){if($e!==null&&ht.has($e)&&(w.width!==$e.image.width||w.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Tt.setupDepthRenderbuffer(w)}}const ge=w.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(pe=!0);const Ae=ht.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ae[W])?lt=Ae[W][dt]:lt=Ae[W],j=!0):w.samples>0&&Tt.useMultisampledRTT(w)===!1?lt=ht.get(w).__webglMultisampledFramebuffer:Array.isArray(Ae)?lt=Ae[dt]:lt=Ae,Rt.copy(w.viewport),ye.copy(w.scissor),we=w.scissorTest}else Rt.copy(Kt).multiplyScalar(q).floor(),ye.copy(Ht).multiplyScalar(q).floor(),we=Te;if(dt!==0&&(lt=nt),_.bindFramebuffer(N.FRAMEBUFFER,lt)&&_.drawBuffers(w,lt),_.viewport(Rt),_.scissor(ye),_.setScissorTest(we),j){const ee=ht.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+W,ee.__webglTexture,dt)}else if(pe){const ee=W;for(let ge=0;ge<w.textures.length;ge++){const Ae=ht.get(w.textures[ge]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+ge,Ae.__webglTexture,dt,ee)}}else if(w!==null&&dt!==0){const ee=ht.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ee.__webglTexture,dt)}gt=-1};function Yn(w){const W=ht.get(w);return(W.__readFormat!==w.format||W.__readType!==w.type)&&(W.__readFormat=w.format,W.__readType=w.type,W.__formatReadable=P.textureFormatReadable(w.format),W.__typeReadable=P.textureTypeReadable(w.type)),W}this.readRenderTargetPixels=function(w,W,dt,lt,j,pe,le,ee=0){if(!(w&&w.isWebGLRenderTarget)){Rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=ht.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&le!==void 0&&(ge=ge[le]),ge){_.bindFramebuffer(N.FRAMEBUFFER,ge);try{const Ae=w.textures[ee],$e=Ae.format,Pe=Ae.type;w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ee);const xe=Yn(Ae);if(xe.__formatReadable===!1){Rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(xe.__typeReadable===!1){Rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-lt&&dt>=0&&dt<=w.height-j&&N.readPixels(W,dt,lt,j,_e.convert($e),_e.convert(Pe),pe)}finally{const Ae=At!==null?ht.get(At).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(w,W,dt,lt,j,pe,le,ee=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=ht.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&le!==void 0&&(ge=ge[le]),ge)if(W>=0&&W<=w.width-lt&&dt>=0&&dt<=w.height-j){_.bindFramebuffer(N.FRAMEBUFFER,ge);const Ae=w.textures[ee],$e=Ae.format,Pe=Ae.type;w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ee);const xe=Yn(Ae);if(xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ce=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ce),N.bufferData(N.PIXEL_PACK_BUFFER,pe.byteLength,N.STREAM_READ),N.readPixels(W,dt,lt,j,_e.convert($e),_e.convert(Pe),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const ln=At!==null?ht.get(At).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,ln);const Ye=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await D0(N,Ye,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ce),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,pe),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Ce),N.deleteSync(Ye),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,W=null,dt=0){const lt=Math.pow(2,-dt),j=Math.floor(w.image.width*lt),pe=Math.floor(w.image.height*lt),le=W!==null?W.x:0,ee=W!==null?W.y:0;Tt.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,dt,0,0,le,ee,j,pe),_.unbindTexture()},this.copyTextureToTexture=function(w,W,dt=null,lt=null,j=0,pe=0){let le,ee,ge,Ae,$e,Pe,xe,Ce,ln;const Ye=w.isCompressedTexture?w.mipmaps[pe]:w.image;if(dt!==null)le=dt.max.x-dt.min.x,ee=dt.max.y-dt.min.y,ge=dt.isBox3?dt.max.z-dt.min.z:1,Ae=dt.min.x,$e=dt.min.y,Pe=dt.isBox3?dt.min.z:0;else{const dn=Math.pow(2,-j);le=Math.floor(Ye.width*dn),ee=Math.floor(Ye.height*dn),w.isDataArrayTexture?ge=Ye.depth:w.isData3DTexture?ge=Math.floor(Ye.depth*dn):ge=1,Ae=0,$e=0,Pe=0}lt!==null?(xe=lt.x,Ce=lt.y,ln=lt.z):(xe=0,Ce=0,ln=0);const We=_e.convert(W.format),Dn=_e.convert(W.type);let Me;W.isData3DTexture?(Tt.setTexture3D(W,0),Me=N.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Tt.setTexture2DArray(W,0),Me=N.TEXTURE_2D_ARRAY):(Tt.setTexture2D(W,0),Me=N.TEXTURE_2D),_.activeTexture(N.TEXTURE0),_.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,W.flipY),_.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),_.pixelStorei(N.UNPACK_ALIGNMENT,W.unpackAlignment);const Ln=_.getParameter(N.UNPACK_ROW_LENGTH),mn=_.getParameter(N.UNPACK_IMAGE_HEIGHT),Zn=_.getParameter(N.UNPACK_SKIP_PIXELS),de=_.getParameter(N.UNPACK_SKIP_ROWS),Qe=_.getParameter(N.UNPACK_SKIP_IMAGES);_.pixelStorei(N.UNPACK_ROW_LENGTH,Ye.width),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ye.height),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Ae),_.pixelStorei(N.UNPACK_SKIP_ROWS,$e),_.pixelStorei(N.UNPACK_SKIP_IMAGES,Pe);const wn=w.isDataArrayTexture||w.isData3DTexture,qe=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){const dn=ht.get(w),Un=ht.get(W),Xt=ht.get(dn.__renderTarget),yi=ht.get(Un.__renderTarget);_.bindFramebuffer(N.READ_FRAMEBUFFER,Xt.__webglFramebuffer),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let Ii=0;Ii<ge;Ii++)wn&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ht.get(w).__webglTexture,j,Pe+Ii),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ht.get(W).__webglTexture,pe,ln+Ii)),N.blitFramebuffer(Ae,$e,le,ee,xe,Ce,le,ee,N.DEPTH_BUFFER_BIT,N.NEAREST);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||ht.has(w)){const dn=ht.get(w),Un=ht.get(W);_.bindFramebuffer(N.READ_FRAMEBUFFER,H),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,J);for(let Xt=0;Xt<ge;Xt++)wn?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,dn.__webglTexture,j,Pe+Xt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,dn.__webglTexture,j),qe?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Un.__webglTexture,pe,ln+Xt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Un.__webglTexture,pe),j!==0?N.blitFramebuffer(Ae,$e,le,ee,xe,Ce,le,ee,N.COLOR_BUFFER_BIT,N.NEAREST):qe?N.copyTexSubImage3D(Me,pe,xe,Ce,ln+Xt,Ae,$e,le,ee):N.copyTexSubImage2D(Me,pe,xe,Ce,Ae,$e,le,ee);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else qe?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(Me,pe,xe,Ce,ln,le,ee,ge,We,Dn,Ye.data):W.isCompressedArrayTexture?N.compressedTexSubImage3D(Me,pe,xe,Ce,ln,le,ee,ge,We,Ye.data):N.texSubImage3D(Me,pe,xe,Ce,ln,le,ee,ge,We,Dn,Ye):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,pe,xe,Ce,le,ee,We,Dn,Ye.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,pe,xe,Ce,Ye.width,Ye.height,We,Ye.data):N.texSubImage2D(N.TEXTURE_2D,pe,xe,Ce,le,ee,We,Dn,Ye);_.pixelStorei(N.UNPACK_ROW_LENGTH,Ln),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,mn),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Zn),_.pixelStorei(N.UNPACK_SKIP_ROWS,de),_.pixelStorei(N.UNPACK_SKIP_IMAGES,Qe),pe===0&&W.generateMipmaps&&N.generateMipmap(Me),_.unbindTexture()},this.initRenderTarget=function(w){ht.get(w).__webglFramebuffer===void 0&&Tt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Tt.setTextureCube(w,0):w.isData3DTexture?Tt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Tt.setTexture2DArray(w,0):Tt.setTexture2D(w,0),_.unbindTexture()},this.resetState=function(){Mt=0,rt=0,At=null,_.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=En._getDrawingBufferColorSpace(t),e.unpackColorSpace=En._getUnpackColorSpace()}}const Ai=Math.PI*2,vx=["spring","summer","autumn","winter"],_x=["clear","rain","snow","fog","storm"],go={spring:{label:"春",title:"新绿",en:"Spring"},summer:{label:"夏",title:"浓荫",en:"Summer"},autumn:{label:"秋",title:"暖金",en:"Autumn"},winter:{label:"冬",title:"静雪",en:"Winter"}},vo={clear:{label:"晴",en:"Clear"},rain:{label:"雨",en:"Rain"},snow:{label:"雪",en:"Snow"},fog:{label:"雾",en:"Fog"},storm:{label:"雷暴",en:"Storm"}},Ge={width:8.4,depth:6.4,logRadius:.195,foundationY:.28,floorY:.34,frontZ:3.2,backZ:-3.2,leftX:-4.2,rightX:4.2,ridgeY:5.45,eaveY:3.08,roof:{overhangX:.78,overhangFront:.7,overhangBack:.55,thickness:.2},porch:{width:6.5,floorY:.34,roofY:3.5,frontZ:5.25,postX:2.85,stepRise:.12},door:{z:3.2,width:1.14,height:2.16},windows:[{id:"front-left",face:"front",x:-2.62,z:3.205,y:1.66,width:1.36,height:1.16,southFacing:!0},{id:"front-right",face:"front",x:2.62,z:3.205,y:1.66,width:1.36,height:1.16,southFacing:!0},{id:"side-right",face:"right",x:4.205,z:-.55,y:1.72,width:1.18,height:1.02,southFacing:!1}],room:{halfX:3.86,halfZ:2.86,height:3,wallThickness:.3},chimney:{x:-4.72,z:-.85,width:1.32,depth:1.5,height:7.15,capY:7.3},smokeAnchor:{x:-4.72,y:7.45,z:-.85},doorAnchor:{x:0,y:1,z:3.9},interiorDoorAnchor:{x:0,y:1,z:2.35}},os={...Ge.room,walkY:.39,furniture:{fireplace:{x:-3.78,z:-.62},bookshelf:{x:-1.5,z:-2.76,w:1.66,d:.36,h:2.08},bed:{x:2.48,z:-1.82,w:1.62,d:2.08},table:{x:1.78,z:1.02,w:1.5,d:.92},armchair:{x:-2.58,z:-1.5},rug:{x:.16,z:.28,w:3.2,d:2.35},chandelier:{x:0,z:.05},entryRug:{x:0,z:2.25,w:1.35,d:.82}},interiorSpawn:{x:0,z:2.12}},Ve={terrainSize:150,path:{start:{x:0,z:5.35},end:{x:.4,z:17.5},width:1.55},well:{x:6.55,z:7.35,height:1.05},spawn:{x:0,z:12.8},player:{walkSpeed:3.2,runSpeed:5.9,eyeHeight:1.62,radius:.3,cameraDistance:5.2,cameraMinDistance:2.4,cameraMaxDistance:9.2},trees:[{x:-10.9,z:8.4,scale:1.24,type:"oak"},{x:10.7,z:9.6,scale:1.12,type:"birch"},{x:-11.6,z:-4.2,scale:1.05,type:"oak"},{x:11.2,z:-3,scale:1.2,type:"pine"},{x:-7.6,z:-13.2,scale:1,type:"oak"},{x:6.9,z:-14.5,scale:1.08,type:"pine"}],interactDistance:2.55},pl={day:{hour:13.2,label:"白天",en:"Day"},dusk:{hour:18.05,label:"黄昏",en:"Dusk"},night:{hour:22.35,label:"夜晚",en:"Night"},auto:{label:"自动",en:"Auto"}},Xs={season:"autumn",weather:"clear",timeOfDay:16.9,timeMode:"manual",hour:16.9},Cc={spring:{leaf:["#8fbf5a","#a9ce6c","#76aa49","#c0d98a"],leafFall:["#d9c6a1","#b7c68d"],ground:"#4a4731",tint:"#c8d5b8"},summer:{leaf:["#4e7f32","#5e9139","#3c6927","#74a044"],leafFall:["#7c9b4f"],ground:"#3b4028",tint:"#d2d8b8"},autumn:{leaf:["#c66a2e","#d9933b","#9d4c27","#e0b257","#a75a2a"],leafFall:["#c97734","#d99b46","#a84d2a","#e3b25e"],ground:"#3d3321",tint:"#e8c294"},winter:{leaf:["#b8b09f","#c8c1b1"],leafFall:["#e8e4dc"],ground:"#c9d2d4",tint:"#cbd9e0"}},Cf={sun:'<circle cx="12" cy="12" r="4.1"/><path d="M12 2.7v2.2M12 19.1v2.2M2.7 12h2.2M19.1 12h2.2M5.15 5.15l1.55 1.55M17.3 17.3l1.55 1.55M18.85 5.15l-1.55 1.55M6.7 17.3l-1.55 1.55"/>',dusk:'<path d="M2.9 18.4h18.2"/><path d="M7.5 18.4a4.5 4.5 0 0 1 9 0"/><path d="M12 9.6V7.3M6.2 12.4l-1.6-1M17.8 12.4l1.6-1M7.6 6.7l1.3 1.3M16.4 6.7l-1.3 1.3"/><path d="M5.2 21.2h4.2M14.6 21.2h4.2" opacity=".5"/>',moon:'<path d="M20.6 13.1A8.4 8.4 0 1 1 10.9 3.3a6.7 6.7 0 0 0 9.7 9.8Z"/>',rain:'<path d="M6.9 15.1a3.4 3.4 0 0 1 .2-6.8 4.8 4.8 0 0 1 9.2 1.3 3.1 3.1 0 0 1-.2 5.5H6.9Z"/><path d="M8.7 17.9l-.8 2.2M12 17.9l-.8 2.2M15.3 17.9l-.8 2.2"/>',snow:'<path d="M12 2.9v18.2M4.1 6.9l15.8 10.2M19.9 6.9 4.1 17.1"/><path d="M9.8 4.5 12 6.3l2.2-1.8M9.8 19.5 12 17.7l2.2 1.8M4.7 9.6l2.9.4.4-2.9M19.3 14.4l-2.9-.4-.4 2.9M19.3 9.6l-2.9.4-.4-2.9M4.7 14.4l2.9-.4.4 2.9"/>',fog:'<path d="M3.4 7.9h12.4M7.6 11.7h13M4.2 15.5h12.2M8.4 19.3h8.4"/>',storm:'<path d="M6.9 14.4a3.4 3.4 0 0 1 .2-6.8 4.8 4.8 0 0 1 9.2 1.3 3.1 3.1 0 0 1-.2 5.5H6.9Z"/><path d="M13.2 14.9 10.6 19h2.5l-.9 3.1 3.7-4.6h-2.5l1.6-2.6"/>',spring:'<path d="M12 21.2v-7.5"/><path d="M12 15.5c0-3.4-2.5-5.7-5.9-5.7 0 3.4 2.4 5.7 5.9 5.7Z"/><path d="M12 14c0-3 2.3-5.1 5.4-5.1 0 3-2.2 5.1-5.4 5.1Z"/><circle cx="12" cy="4.9" r="1.9"/><path d="M12 6.8v1.9"/>',summer:'<path d="M20.2 5.2C13 5.2 5.2 8.6 5.2 15c0 2.6 1.9 4.2 4.3 4.2 6.7 0 10.7-6.6 10.7-14Z"/><path d="M6.1 19.7C9.1 16.1 13.2 12.2 17.6 9"/>',autumn:'<path d="M18.7 4.5C11.5 5.7 5.4 9.9 6.2 15.8c.3 2.2 2.4 3.6 4.6 3.1 5.9-1.2 8.6-7.2 7.9-14.4Z"/><path d="M7.3 18.3C10 14.6 13.5 10.6 17.2 7.3"/><path d="M4.3 8.4c-1.2 1.6-1.5 3.4-.8 5.1" opacity=".55"/>',clear:'<circle cx="12" cy="12" r="4.2"/><path d="M12 2.6v2.3M12 19.1v2.3M2.6 12h2.3M19.1 12h2.3M5 5l1.6 1.6M17.4 17.4 19 19M19 5l-1.6 1.6M6.6 17.4 5 19"/>',person:'<circle cx="12" cy="7.1" r="2.7"/><path d="M5.1 20.4v-2.2c0-3.1 3.1-5.1 6.9-5.1s6.9 2 6.9 5.1v2.2"/>',eye:'<path d="M2.6 12S6.2 5.9 12 5.9 21.4 12 21.4 12 17.8 18.1 12 18.1 2.6 12 2.6 12Z"/><circle cx="12" cy="12" r="2.7"/>',clock:'<circle cx="12" cy="12" r="8.4"/><path d="M12 7.2v5l3.1 1.9"/>',auto:'<path d="M19.6 12a7.6 7.6 0 1 1-2.2-5.4"/><path d="M20 3.9v4.4h-4.4"/>',close:'<path d="M6.4 6.4l11.2 11.2M17.6 6.4 6.4 17.6"/>'},Rf={spring:"spring",summer:"summer",autumn:"autumn",winter:"snow"},Pf={clear:"clear",rain:"rain",snow:"snow",fog:"fog",storm:"storm"},ja={day:{label:"白天",icon:"sun"},dusk:{label:"黄昏",icon:"dusk"},night:{label:"夜晚",icon:"moon"}},xx=["spring","summer","autumn","winter"],Mx=["clear","rain","snow","fog","storm"],yx=["day","dusk","night"],Lf={day:"sun",dusk:"dusk",night:"moon"};function ml(i){return`<svg class="ui-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${Cf[i]||Cf.sun}</svg>`}function ne(i,t,e){const n=document.createElement(i);return t&&(n.className=t),e&&e.appendChild(n),n}function lr(i,t,e){const n=ne("span",t,e);return n.innerHTML=ml(i),n.setAttribute("aria-hidden","true"),n}function ki(i,t){const e=t==null?"":String(t);i.textContent!==e&&(i.textContent=e)}function Er(i,t,e){return Math.min(e,Math.max(t,i))}function tl(i){const t=Math.round(Er(i,0,24)*60)%1440,e=Math.floor(t/60),n=t%60;return`${String(e).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function If(i){return i>=20.4||i<5.4?"night":i>=16.5?"dusk":"day"}function Sx(i){return i>=20.4||i<5.4}function bx(i){if(typeof i!="string")return null;const t=i.match(/(\d{1,2})\s*[:：]\s*(\d{2})/);return t?Er(Number(t[1])+Number(t[2])/60,0,24):null}function wx(i={}){const t=i||{},e=document.getElementById("ui-root")||(()=>{const I=document.createElement("div");return I.id="ui-root",document.body.appendChild(I),I})();e.innerHTML="",e.classList.add("ui-root"),e.dataset.mode="third";const n=document.getElementById("boot-fallback");n&&(n.style.display="none");const s={env:null,info:null,mode:"third",phase:null,panelOpen:!1,panelId:null,lastFocus:null,draggingTime:!1,ready:!1,locked:!1,sliderHour:Er(Number(Xs.hour)||17.2,0,24),promptAction:null,toastTimers:new Set,loaderRemoved:!1};ne("div","hud-scrim hud-scrim--top",e),ne("div","hud-scrim hud-scrim--bottom",e);const r=ne("header","hud-top",e),o=ne("div","title-lockup",r);o.setAttribute("aria-label","林间小屋 · Cabin in the Woods");const a=ne("h1","title-cn",o);a.textContent="林间小屋";const c=ne("div","title-rule",o);c.setAttribute("aria-hidden","true"),ne("span","title-rule-line",c),ne("span","title-rule-gem",c),ne("span","title-rule-line",c);const l=ne("p","title-en",o);l.textContent="CABIN IN THE WOODS";const u=ne("p","title-line",o);u.textContent="灶膛里有火，林子深处有风。";const d=ne("aside","status-card",r);d.setAttribute("aria-label","环境状态");const f=ne("div","status-clock-row",d);lr("clock","status-ic",f);const h=ne("span","status-clock",f);h.textContent="17:12";const m=ne("span","status-phase",f),v=lr("dusk","status-ic status-ic--phase",m),g=ne("span","status-phase-label",m);g.textContent="黄昏",ne("div","status-hairline",d);const p=ne("div","status-env-row",d),S=ne("span","status-env-item",p);S.title="季节";const R=lr("autumn","status-ic status-ic--season",S),b=ne("span","status-env-label",S);b.textContent="秋",ne("span","status-env-sep",p).textContent="·";const T=ne("span","status-env-item",p);T.title="天气";const A=lr("clear","status-ic status-ic--weather",T),F=ne("span","status-env-label",T);F.textContent="晴";const M=ne("span","status-spark",p);M.title="窗前亮着灯",M.setAttribute("aria-label","窗前亮着灯"),M.setAttribute("role","img");const C=ne("div","mode-chip",e);C.id="mode-chip",C.setAttribute("aria-label","当前视角");const O=lr("person","mode-chip-ic",C),B=ne("span","mode-chip-label",C);B.textContent="第三人称";const G=ne("span","mode-chip-key",C);G.textContent="V";const nt=ne("div","reticle",e);nt.id="reticle",nt.setAttribute("aria-hidden","true"),ne("span","reticle-ring",nt),ne("span","reticle-dot",nt);const H=ne("div","hud-bottom",e),J=ne("div","interaction-prompt",H);J.id="interaction-prompt",J.hidden=!0,J.setAttribute("role","status"),J.setAttribute("aria-live","polite");const Mt=ne("span","prompt-key",J);Mt.textContent="E";const rt=ne("span","prompt-action",J),At=ne("div","environment-dock",H);At.id="environment-dock",At.setAttribute("role","group"),At.setAttribute("aria-label","环境设置");const gt=ne("section","dock-group dock-group--season",At);gt.setAttribute("role","group"),gt.setAttribute("aria-label","季节"),ne("div","dock-group-label",gt).textContent="季节";const yt=ne("div","dock-row",gt),Rt=[];for(const I of xx){const U=go[I],D=ne("button","dock-btn season-btn",yt);D.type="button",D.dataset.season=I,D.setAttribute("aria-pressed","false"),D.setAttribute("aria-label",`季节：${U.label}（${U.title}）`),D.title=`${U.label} · ${U.title}`,lr(Rf[I],"dock-btn-ic",D);const X=ne("span","dock-btn-label",D);X.textContent=U.label,D.addEventListener("click",()=>t.onSeasonChange&&t.onSeasonChange(I)),Rt.push(D)}ne("div","dock-divider",At).setAttribute("aria-hidden","true");const ye=ne("section","dock-group dock-group--time",At);ye.setAttribute("role","group"),ye.setAttribute("aria-label","时间");const we=ne("div","dock-head",ye);ne("div","dock-group-label",we).textContent="时辰";const en=ne("span","time-readout",we);en.textContent="17:12";const Z=ne("button","auto-toggle",we);Z.id="auto-toggle",Z.type="button",Z.setAttribute("role","switch"),Z.setAttribute("aria-checked","false"),Z.setAttribute("aria-label","自动推进时间");const ce=ne("span","auto-label",Z);ce.textContent="自动";const _t=ne("span","switch",Z);_t.setAttribute("aria-hidden","true"),ne("span","switch-knob",_t),Z.addEventListener("click",()=>{const I=Z.getAttribute("aria-checked")!=="true";ie(I),t.onAutoToggle&&t.onAutoToggle(I)});const q=ne("div","time-rail",ye),bt=document.createElement("input");bt.type="range",bt.id="time-slider",bt.className="time-slider",bt.min="0",bt.max="24",bt.step="0.05",bt.value=String(s.sliderHour),bt.setAttribute("aria-label","时间，0 到 24 时"),bt.setAttribute("aria-valuetext","17:12 黄昏"),q.appendChild(bt),bt.style.setProperty("--pct",`${s.sliderHour/24*100}%`);const wt=ne("div","time-ticks",q);wt.setAttribute("aria-hidden","true");for(let I=0;I<=24;I+=3){const U=ne("span",`time-tick${I%6===0?" time-tick--major":""}`,wt);U.style.left=`${I/24*100}%`}const Kt=ne("div","time-presets",q);Kt.setAttribute("role","group"),Kt.setAttribute("aria-label","时间预设");const Ht=[];for(const I of yx){const U=ja[I],D=pl[I].label||U.label,X=ne("button","time-preset",Kt);X.type="button",X.dataset.timePreset=I,X.setAttribute("aria-pressed","false"),X.setAttribute("aria-label",`时间预设：${D}`),lr(Lf[I],"time-preset-ic",X);const at=ne("span","time-preset-label",X);at.textContent=D,X.addEventListener("click",()=>t.onTimePreset&&t.onTimePreset(I)),Ht.push(X)}bt.addEventListener("pointerdown",()=>{s.draggingTime=!0,e.classList.add("is-time-dragging")});const Te=()=>{s.draggingTime&&(s.draggingTime=!1,e.classList.remove("is-time-dragging"))};window.addEventListener("pointerup",Te,!0),window.addEventListener("pointercancel",Te,!0),bt.addEventListener("input",()=>{const I=Er(Number(bt.value)||0,0,24);Ft(I,!0),t.onTimeInput&&t.onTimeInput(I)}),ne("div","dock-divider",At).setAttribute("aria-hidden","true");const vt=ne("section","dock-group dock-group--weather",At);vt.setAttribute("role","group"),vt.setAttribute("aria-label","天气"),ne("div","dock-group-label",vt).textContent="天气";const zt=ne("div","dock-row",vt),Gt=[];for(const I of Mx){const U=vo[I],D=ne("button","dock-btn weather-btn",zt);D.type="button",D.dataset.weather=I,D.setAttribute("aria-pressed","false"),D.setAttribute("aria-label",`天气：${U.label}（${U.en}）`),D.title=`${U.label} · ${U.en}`,lr(Pf[I],"dock-btn-ic",D);const X=ne("span","dock-btn-label",D);X.textContent=U.label,D.addEventListener("click",()=>t.onWeatherChange&&t.onWeatherChange(I)),Gt.push(D)}const Ut=ne("footer","hint-bar",H);Ut.setAttribute("aria-label","操作提示");const Qt=ne("div","hint-set hint-set--third",Ut);Ue(Qt,[["WASD","移动",!1],["Shift","加速",!0],["拖拽","旋转",!0],["滚轮","缩放",!0],["V","第一人称",!1],["E","互动",!1]]);const ke=ne("div","hint-set hint-set--first",Ut);Ue(ke,[["WASD","移动",!1],["Shift","加速",!0],["拖拽","环视",!0],["V","返回屋外",!1],["E","互动",!1]]);const Le=ne("div","toast-layer",e);Le.id="toast-layer",Le.setAttribute("role","status"),Le.setAttribute("aria-live","polite");const ut=ne("div","note-layer",e);ut.id="note-layer",ut.hidden=!0;const Jt=ne("div","note-backdrop",ut);Jt.setAttribute("aria-hidden","true");const N=ne("article","note-panel",ut);N.id="note-panel",N.setAttribute("role","dialog"),N.setAttribute("aria-modal","true"),N.setAttribute("aria-labelledby","note-title"),N.setAttribute("aria-describedby","note-body");const Zt=ne("button","note-close",N);Zt.id="note-close",Zt.type="button",Zt.setAttribute("aria-label","关闭手记"),Zt.innerHTML=ml("close"),ne("span","note-frame",N).setAttribute("aria-hidden","true");const fe=ne("p","note-eyebrow",N);fe.textContent="林间手记";const P=ne("h2","note-title",N);P.id="note-title";const _=ne("div","note-body",N);_.id="note-body";const K=ne("p","note-footer",N),ht=ne("p","note-esc",N),Tt=ne("span","note-esc-key",ht);Tt.textContent="Esc";const jt=document.createTextNode(" 关闭手记");ht.appendChild(jt);let qt=null;function Et(){qt=ne("div","ui-loading",e),qt.id="ui-loading",qt.setAttribute("role","status"),qt.setAttribute("aria-live","polite");const I=ne("div","loader-inner",qt);ne("div","loader-glow",I).setAttribute("aria-hidden","true");const U=ne("div","loader-title",I),D=ne("div","loader-cn",U);D.textContent="林间小屋";const X=ne("div","loader-rule",U);X.setAttribute("aria-hidden","true"),ne("span","loader-rule-line",X),ne("span","loader-rule-gem",X),ne("span","loader-rule-line",X);const at=ne("div","loader-en",U);at.textContent="CABIN IN THE WOODS";const Lt=ne("p","loader-poetic",I);Lt.id="loader-label",Lt.textContent="正在点亮窗前的灯…";const se=ne("div","loader-track",I);se.setAttribute("aria-hidden","true");const me=ne("div","loader-fill",se);me.style.width="0%";const re=ne("div","loader-meta",I),Wt=ne("span","loader-pct",re);Wt.id="loader-pct",Wt.textContent="0%";const Ct=ne("span","loader-note",re);return Ct.textContent="为安静的人点亮一盏灯",{loading:qt,label:Lt,fill:me,pct:Wt}}const Dt=Et();let oe=0;function Ue(I,U){U.forEach(([D,X,at])=>{const Lt=ne("span",`hint-item${at?" hint-optional":""}`,I),se=ne("span","hint-key",Lt);se.textContent=D;const me=ne("span","hint-text",Lt);me.textContent=X})}function ie(I){Z.setAttribute("aria-checked",I?"true":"false"),Z.classList.toggle("is-on",!!I),e.classList.toggle("is-auto",!!I)}function Ft(I,U){const D=Er(I,0,24);s.sliderHour=D,bt.style.setProperty("--pct",`${D/24*100}%`),(Math.abs(Number(bt.value)-D)>1e-4||U)&&(bt.value=String(D)),ki(en,tl(D));const X=Ee(If(D));bt.setAttribute("aria-valuetext",`${tl(D)} ${X.label}`)}function Ee(I){return ja[I]||ja.dusk}function Se(I,U){I.dataset.icon!==U&&(I.dataset.icon=U,I.innerHTML=ml(U))}function Xe(I,U,D){for(const X of I){const at=X.getAttribute(D)===U;X.setAttribute("aria-pressed",at?"true":"false")}}function Q(I){for(const U of[r,C,H])I?U.setAttribute("inert",""):U.removeAttribute("inert");Yt()}function Yt(){s.panelOpen||s.locked?At.setAttribute("inert",""):At.removeAttribute("inert")}function Nt(I){if(!s.panelOpen)return;s.panelOpen=!1,s.panelId=null,e.classList.remove("has-note"),ut.classList.remove("is-open"),Q(!1),window.setTimeout(()=>{s.panelOpen||(ut.hidden=!0,ut.setAttribute("aria-hidden","true"))},320);const U=s.lastFocus;if(s.lastFocus=null,U&&typeof U.focus=="function"&&U.isConnected)try{U.focus({preventScroll:!0})}catch{}I&&t.onOverlayClose&&t.onOverlayClose()}function _e(I){if(s.panelOpen){if(I.key==="Escape"||I.key==="Esc"){I.preventDefault(),I.stopPropagation(),Nt(!0);return}if(I.key==="Tab"){I.preventDefault(),Zt.focus({preventScroll:!0});return}I.stopPropagation()}}window.addEventListener("keydown",_e,!0),Zt.addEventListener("click",()=>Nt(!0)),Jt.addEventListener("pointerdown",I=>{I.preventDefault(),I.stopPropagation(),Nt(!0)}),ut.addEventListener("wheel",I=>I.stopPropagation(),{passive:!0});function be(I,U){const D={...s.env||{}};if(I)for(const je of Object.keys(I))I[je]!==void 0&&(D[je]=I[je]);const X={};if(U)for(const je of Object.keys(U))U[je]!==void 0&&(X[je]=U[je]);!s.env&&!I&&!U&&(D.season=Xs.season,D.weather=Xs.weather,D.hour=Xs.hour,D.timeMode=Xs.timeMode);const at=Er(Number(D.hour!=null?D.hour:bx(X.clock)??Xs.hour),0,24);D.hour=at;const Lt=D.timeMode==="auto"?"auto":"manual";D.timeMode=Lt;const se=D.isNight!=null?!!D.isNight:Sx(at);D.isNight=se;const me=go[D.season]?D.season:Xs.season,re=vo[D.weather]?D.weather:Xs.weather;D.season=me,D.weather=re;const Wt=X.preset&&ja[X.preset]?X.preset:If(at),Ct=Ee(Wt),ue=X.clock!=null?String(X.clock):tl(at),De=X.phaseLabel!=null?String(X.phaseLabel):Ct.label;s.env=D,s.info=X,ki(h,ue),ki(g,De),ki(b,go[me].label),ki(F,vo[re].label),S.title=`季节 · ${go[me].title}`,T.title=`天气 · ${vo[re].en}`,Se(v,Lf[Wt]),Se(R,Rf[me]),Se(A,Pf[re]),M.classList.toggle("is-lit",!!D.windowGlow),M.title=D.windowGlow?"窗前亮着灯":"窗内没有灯光",s.phase!==Wt&&(s.phase=Wt,v.dataset.phase=Wt),Xe(Rt,me,"data-season"),Xe(Gt,re,"data-weather"),Xe(Ht,Wt,"data-time-preset"),ie(Lt==="auto"),!s.draggingTime&&document.activeElement!==bt?Math.abs(Number(bt.value)-at)>1e-4?Ft(at,!1):ki(en,ue):ki(en,tl(s.sliderHour))}function Vt(I){if(!I||!I.action){J.hidden||(J.classList.remove("is-visible"),J.hidden=!0),s.promptAction=null;return}const U=String(I.action);ki(Mt,I.key!=null?String(I.key):"E"),s.promptAction!==U&&(ki(rt,U),s.promptAction=U),J.hidden?(J.hidden=!1,requestAnimationFrame(()=>J.classList.add("is-visible"))):J.classList.add("is-visible")}function Oe(I){const U=I==="first"?"first":"third";s.mode=U,e.dataset.mode=U;const D=U==="first";ki(B,D?"第一人称":"第三人称"),O.dataset.icon!==(D?"eye":"person")&&(O.dataset.icon=D?"eye":"person",O.innerHTML=ml(D?"eye":"person")),C.classList.toggle("is-first",D),C.setAttribute("aria-label",D?"当前视角：第一人称":"当前视角：第三人称")}function Ie(I){if(!I){vn();return}const U=s.panelOpen;if(!U){const at=document.activeElement;s.lastFocus=at&&at!==document.body?at:null}s.panelOpen=!0,s.panelId=I.id!=null?String(I.id):null,ki(fe,I.eyebrow?String(I.eyebrow):"林间手记"),ki(P,I.title?String(I.title):""),P.hidden=!I.title;const D=Array.isArray(I.body)?I.body:I.body!=null?[I.body]:[];_.innerHTML="";for(const at of D){const Lt=document.createElement("p");Lt.textContent=String(at),_.appendChild(Lt)}const X=Array.isArray(I.footer)?I.footer:I.footer!=null?[I.footer]:[];if(K.hidden=X.length===0,ki(K,X.map(at=>String(at)).join("　·　")),ut.hidden=!1,ut.setAttribute("aria-hidden","false"),e.classList.add("has-note"),Q(!0),!U)requestAnimationFrame(()=>{if(s.panelOpen){ut.classList.add("is-open");try{Zt.focus({preventScroll:!0})}catch{}}});else{ut.classList.add("is-open");try{Zt.focus({preventScroll:!0})}catch{}}}function vn(){Nt(!1)}function ae(){return s.panelOpen}function fn(I){if(I==null||I==="")return;const U=ne("div","toast",Le);ne("span","toast-gem",U).setAttribute("aria-hidden","true");const D=ne("span","toast-text",U);for(D.textContent=String(I);Le.children.length>3;)Le.firstElementChild.remove();requestAnimationFrame(()=>U.classList.add("is-in"));const X=window.setTimeout(()=>{U.classList.remove("is-in"),U.classList.add("is-out");const at=window.setTimeout(()=>{U.remove(),s.toastTimers.delete(at)},460);s.toastTimers.delete(X)},2800);s.toastTimers.add(X)}function gi(I,U){if(window.clearTimeout(oe),!qt||!qt.isConnected){const X=Et();Object.assign(Dt,X),s.loaderRemoved=!1}qt=Dt.loading,qt.hidden=!1,qt.classList.remove("is-leaving"),qt.setAttribute("aria-hidden","false"),Dt.loading=qt;const D=Number(I);if(I==null||!Number.isFinite(D))qt.classList.add("is-indeterminate"),Dt.pct.textContent="";else{qt.classList.remove("is-indeterminate");const X=Er(D,0,1);Dt.fill.style.width=`${X*100}%`,Dt.pct.textContent=`${Math.round(X*100)}%`}U!=null&&ki(Dt.label,U),e.classList.remove("is-ready"),s.ready=!1}function z(){if(s.ready)return;s.ready=!0,window.clearTimeout(oe);const I=document.getElementById("boot-fallback");I&&I.remove(),qt&&(qt.classList.add("is-leaving"),qt.setAttribute("aria-hidden","true"),oe=window.setTimeout(()=>{qt&&qt.remove(),s.loaderRemoved=!0,Dt.loading=null},1250)),requestAnimationFrame(()=>e.classList.add("is-ready"))}function V(I){const U=!!I;s.locked=U,e.classList.toggle("is-locked",U),e.setAttribute("aria-busy",U?"true":"false"),Yt()}return be(null,null),Oe("third"),{setEnvironment:be,setPrompt:Vt,setMode:Oe,showPanel:Ie,hidePanel:vn,isPanelOpen:ae,notify:fn,setLoading:gi,setReady:z,setLocked:V}}const qo=new E;function ss(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;qo.copy(t),qo[n]=0,qo.normalize();const l=.5*o/(o+a),u=1-qo.angleTo(i)/c;return Math.sign(qo[e])===1?u*l:a/(o+a)+l+l*(1-u)}class rs extends qn{constructor(t=1,e=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new E,l=new E,u=new E(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,h=this.attributes.uv.array,m=d.length/6,v=new E,g=.5/o;for(let p=0,S=0;p<d.length;p+=3,S+=2)switch(c.fromArray(d,p),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),d[p+0]=u.x*Math.sign(c.x)+l.x*r,d[p+1]=u.y*Math.sign(c.y)+l.y*r,d[p+2]=u.z*Math.sign(c.z)+l.z*r,f[p+0]=l.x,f[p+1]=l.y,f[p+2]=l.z,Math.floor(p/m)){case 0:v.set(1,0,0),h[S+0]=ss(v,l,"z","y",r,n),h[S+1]=1-ss(v,l,"y","z",r,e);break;case 1:v.set(-1,0,0),h[S+0]=1-ss(v,l,"z","y",r,n),h[S+1]=1-ss(v,l,"y","z",r,e);break;case 2:v.set(0,1,0),h[S+0]=1-ss(v,l,"x","z",r,t),h[S+1]=ss(v,l,"z","x",r,n);break;case 3:v.set(0,-1,0),h[S+0]=1-ss(v,l,"x","z",r,t),h[S+1]=1-ss(v,l,"z","x",r,n);break;case 4:v.set(0,0,1),h[S+0]=1-ss(v,l,"x","y",r,t),h[S+1]=1-ss(v,l,"y","x",r,e);break;case 5:v.set(0,0,-1),h[S+0]=ss(v,l,"x","y",r,t),h[S+1]=1-ss(v,l,"y","x",r,e);break}}static fromJSON(t){return new rs(t.width,t.height,t.depth,t.segments,t.radius)}}const Bt=Math.PI*2;function He(i=1){let t=i>>>0;return function(){t+=1831565813;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function y(i,t,e){return t+(e-t)*i()}function Ci(i,t){return t[Math.floor(i()*t.length)%t.length]}function gn(i,t,e){return Math.max(t,Math.min(e,i))}function Yi(i,t,e){return i+(t-i)*e}function ls(i,t,e){const n=gn((e-i)/(t-i),0,1);return n*n*(3-2*n)}function yn(i,t,e,n={}){const s=document.createElement("canvas");s.width=i,s.height=t;const r=s.getContext("2d");e(r,i,t);const o=new wp(s);return o.colorSpace=n.srgb===!1?Zs:Wi,o.wrapS=n.wrapS??Eo,o.wrapT=n.wrapT??Eo,o.anisotropy=n.anisotropy??8,n.repeat&&o.repeat.set(n.repeat[0],n.repeat[1]),n.rotation&&(o.center.set(.5,.5),o.rotation=n.rotation),o.needsUpdate=!0,o}function li(i,t,e,n,s=.06,r=1){const o=i.getImageData(0,0,t,e),a=o.data,c=s*255;for(let l=0;l<a.length;l+=4){const u=(n()-.5)*c*r;a[l]=gn(a[l]+u,0,255),a[l+1]=gn(a[l+1]+u,0,255),a[l+2]=gn(a[l+2]+u,0,255)}i.putImageData(o,0,0)}function el(i,t,e=1){const n=Math.sin(i*127.1+t*311.7+e*74.7)*43758.5453123;return n-Math.floor(n)}function Au(i,t,e=1){const n=Math.floor(i),s=Math.floor(t),r=i-n,o=t-s,a=r*r*(3-2*r),c=o*o*(3-2*o),l=el(n,s,e),u=el(n+1,s,e),d=el(n,s+1,e),f=el(n+1,s+1,e);return Yi(Yi(l,u,a),Yi(d,f,a),c)}function Al(i,t,e=4,n=1){let s=0,r=.5,o=1;for(let a=0;a<e;a++)s+=Au(i*o,t*o,n+a)*r,o*=2.07,r*=.5;return s}function Es(i={}){const{size:t=512,base:e="#6f4b2e",light:n="#a67b4c",dark:s="#3d2817",planks:r=0,plankGap:o=.025,vertical:a=!1,seed:c=7,repeat:l=[1,1]}=i,u=t,d=t,f=yn(u,d,h=>{const m=He(c);h.fillStyle=e,h.fillRect(0,0,u,d);for(let g=0;g<22;g++){const p=m()*u,S=y(m,12,90),R=h.createLinearGradient(p,0,p+S,0);R.addColorStop(0,"rgba(0,0,0,0)"),R.addColorStop(.5,m()>.45?n:s),R.addColorStop(1,"rgba(0,0,0,0)"),h.globalAlpha=y(m,.025,.1),h.fillStyle=R,h.fillRect(p,0,S,d)}h.globalAlpha=1;const v=380;for(let g=0;g<v;g++){const p=m()*d,S=y(m,.04,.22),R=y(m,1,8),b=y(m,.008,.035);h.beginPath(),h.strokeStyle=m()>.5?s:n,h.globalAlpha=S,h.lineWidth=y(m,.6,2.4);for(let T=0;T<=u;T+=8){const A=p+Math.sin(T*b+g)*R+Math.sin(T*b*2.7)*R*.23;T===0?h.moveTo(T,A):h.lineTo(T,A)}h.stroke()}for(let g=0;g<6;g++){const p=m()*u,S=m()*d,R=y(m,5,15),b=R*y(m,.35,.65);for(let T=4;T>=0;T--)h.beginPath(),h.ellipse(p,S,R*(1+T*.5),b*(1+T*.55),m()*.2,0,Bt),h.strokeStyle=T===0?"#24150a":s,h.globalAlpha=T===0?.55:.16,h.lineWidth=T===0?2:2.5,h.stroke();h.globalAlpha=1}if(r>0){const g=(a?u:d)/r;for(let p=0;p<=r;p++){const S=p*g;h.globalAlpha=.55,h.fillStyle="#1d1208",a?h.fillRect(S-o*u/2,0,o*u,d):h.fillRect(0,S-o*d/2,u,o*d),h.globalAlpha=.14,h.fillStyle=n,a?h.fillRect(S+2,0,2,d):h.fillRect(0,S+2,u,2)}h.globalAlpha=1}li(h,u,d,m,.05)},{repeat:l});return a&&(f.center.set(.5,.5),f.rotation=Math.PI/2),f}function Cu(i={}){const{size:t=512,seed:e=21,base:n="#57412d",dark:s="#2b1e13",light:r="#8a6a48",repeat:o=[1,1]}=i;return yn(t,t,(a,c,l)=>{const u=He(e);a.fillStyle=n,a.fillRect(0,0,c,l);for(let d=0;d<280;d++){const f=u()*c,h=y(u,30,240),m=u()*l;a.beginPath();const v=y(u,1,10);let g=f;a.moveTo(g,m);for(let p=0;p<h;p+=10)g+=Math.sin(p*.03+d)*1.7,a.lineTo(g+Math.sin(p*.13)*v*.3,m+p);a.strokeStyle=u()>.52?s:r,a.globalAlpha=y(u,.08,.42),a.lineWidth=v,a.lineCap="round",a.stroke()}for(let d=0;d<60;d++){a.beginPath(),a.fillStyle=u()>.4?"rgba(90,105,54,.22)":"rgba(120,125,80,.16)";const f=u()*c,h=u()*l;a.ellipse(f,h,y(u,2,12),y(u,1,5),u()*Bt,0,Bt),a.fill()}li(a,c,l,u,.1)},{repeat:o})}function Cl(i={}){const{size:t=512,seed:e=11,repeat:n=[1,1],base:s="#4b4a43",light:r="#8d887b",dark:o="#25251f"}=i,a=t,c=t;return yn(a,c,l=>{const u=He(e);l.fillStyle=o,l.fillRect(0,0,a,c);const d=5,f=c/d;for(let h=0;h<d;h++){let m=-y(u,.2,.7)*a;for(;m<a;){const v=y(u,.16,.34)*a,g=f*y(u,.82,1.06),p=h*f+y(u,1,4);l.beginPath();const S=()=>y(u,-4,4);l.moveTo(m+S(),p+S()),l.lineTo(m+v+S(),p+S()),l.lineTo(m+v+S(),p+g+S()),l.lineTo(m+S(),p+g+S()),l.closePath();const R=y(u,0,1);l.fillStyle=R>.7?"#6b675c":R>.35?s:"#5d5a51",l.fill();const b=l.createLinearGradient(m,p,m+v,p+g);b.addColorStop(0,"rgba(255,245,220,.18)"),b.addColorStop(.35,"rgba(255,255,255,0)"),b.addColorStop(1,"rgba(0,0,0,.3)"),l.fillStyle=b,l.fill();for(let T=0;T<14;T++)l.fillStyle=u()>.5?"rgba(255,255,255,.08)":"rgba(0,0,0,.14)",l.fillRect(m+u()*v,p+u()*g,y(u,1,3),y(u,1,3));l.beginPath(),l.strokeStyle=r,l.globalAlpha=.16,l.lineWidth=2,l.moveTo(m+2,p+2),l.lineTo(m+v-2,p+2),l.stroke(),l.globalAlpha=1,m+=v+y(u,4,10)}}for(let h=0;h<70;h++)l.beginPath(),l.fillStyle="rgba(68,76,48,.18)",l.ellipse(u()*a,u()*c,y(u,2,9),y(u,1,4),u()*Bt,0,Bt),l.fill();li(l,a,c,u,.08)},{repeat:n})}function zd(i={}){const{size:t=512,seed:e=15,repeat:n=[1,1]}=i,s=t,r=t;return yn(s,r,o=>{const a=He(e);o.fillStyle="#2e2419",o.fillRect(0,0,s,r);const c=9,l=r/c;for(let u=0;u<c;u++){const f=s/7,h=(u%2===0?0:f/2)-f;for(let m=0;m<9;m++){const v=h+m*f+y(a,-2,2),g=u*l-2,p=l*y(a,.86,1.12);o.beginPath();const S=4;o.moveTo(v+1,g),o.lineTo(v+f-1,g),o.lineTo(v+f-1,g+p-4);for(let T=S;T>=0;T--){const A=v+1+(f-2)*T/S,F=g+p-(T%2===0?1:5);o.lineTo(A,F)}o.closePath();const R=a();o.fillStyle=R>.72?"#6d4e30":R>.4?"#5a4029":"#4b3421",o.fill();const b=o.createLinearGradient(v,g,v,g+p);b.addColorStop(0,"rgba(214,180,132,.18)"),b.addColorStop(.5,"rgba(80,55,30,0)"),b.addColorStop(1,"rgba(0,0,0,.25)"),o.fillStyle=b,o.fill();for(let T=0;T<3;T++){o.strokeStyle=a()>.4?"rgba(38,31,21,.18)":"rgba(190,196,138,.08)",o.lineWidth=y(a,1,3),o.beginPath();const A=v+a()*f;o.moveTo(A,g+2),o.lineTo(A+y(a,-4,4),g+p-2),o.stroke()}o.fillStyle="rgba(10,8,5,.4)",o.fillRect(v,g+p-3,f,3)}}for(let u=0;u<30;u++)o.beginPath(),o.fillStyle="rgba(96,104,60,.13)",o.ellipse(a()*s,a()*r,y(a,3,15),y(a,1,5),a()*Bt,0,Bt),o.fill();li(o,s,r,a,.07)},{repeat:n})}function Tx(i={}){const{size:t=1024,seed:e=31,repeat:n=[14,14]}=i,s=t,r=t;return yn(s,r,o=>{const a=He(e);o.fillStyle="#3b3324",o.fillRect(0,0,s,r);for(let l=0;l<230;l++){const u=a()*s,d=a()*r,f=y(a,16,120),h=o.createRadialGradient(u,d,0,u,d,f),m=a(),v=m>.72?"97,103,53":m>.42?"54,48,31":"88,64,39";h.addColorStop(0,`rgba(${v},${y(a,.1,.34)})`),h.addColorStop(1,`rgba(${v},0)`),o.fillStyle=h,o.fillRect(u-f,d-f,f*2,f*2)}const c=["#8a5227","#a8672c","#6f4525","#b98641","#5b4925","#7c6b35"];for(let l=0;l<2600;l++){const u=a()*s,d=a()*r,f=y(a,2,7);o.save(),o.translate(u,d),o.rotate(a()*Bt),o.globalAlpha=y(a,.25,.8),o.fillStyle=Ci(a,c),o.beginPath(),o.ellipse(0,0,f,f*.42,0,0,Bt),o.fill(),o.restore()}for(let l=0;l<220;l++){const u=a()*s,d=a()*r,f=y(a,1,4);o.fillStyle=a()>.5?"rgba(120,117,104,.4)":"rgba(70,68,60,.5)",o.beginPath(),o.ellipse(u,d,f,f*.75,a()*Bt,0,Bt),o.fill()}for(let l=0;l<1800;l++){const u=a()*s,d=a()*r;o.strokeStyle=a()>.5?"rgba(98,77,43,.4)":"rgba(47,39,24,.55)",o.lineWidth=y(a,.4,1.2),o.beginPath(),o.moveTo(u,d),o.lineTo(u+y(a,-8,8),d+y(a,-8,8)),o.stroke()}li(o,s,r,a,.08)},{repeat:n})}function Ex(i={}){const{size:t=512,seed:e=44,repeat:n=[1,6]}=i,s=t,r=t;return yn(s,r,o=>{const a=He(e);o.fillStyle="#4a4235",o.fillRect(0,0,s,r);for(let c=0;c<130;c++){const l=a()*s,u=a()*r,d=y(a,12,46),f=d*y(a,.5,1.1);o.save(),o.translate(l,u),o.rotate(a()*Bt),o.beginPath(),o.ellipse(0,0,d,f,0,0,Bt);const h=a();o.fillStyle=h>.7?"#6c6253":h>.35?"#575044":"#7c7362",o.fill(),o.strokeStyle="rgba(28,24,18,.5)",o.lineWidth=y(a,1,3),o.stroke(),o.beginPath(),o.arc(-d*.25,-f*.3,Math.min(d,f)*.55,0,Bt),o.fillStyle="rgba(230,220,196,.07)",o.fill(),o.restore()}for(let c=0;c<60;c++)o.fillStyle="rgba(69,81,42,.2)",o.beginPath(),o.ellipse(a()*s,a()*r,y(a,3,14),y(a,1,4),a()*Bt,0,Bt),o.fill();li(o,s,r,a,.07)},{repeat:n})}function Ax(i={}){const{size:t=128,seed:e=5,tint:n="#d8d0b4"}=i;return yn(t,t,(s,r,o)=>{const a=He(e);s.clearRect(0,0,r,o);const c=s.createLinearGradient(r*.2,o*.1,r*.8,o*.9);c.addColorStop(0,"#f0ead8"),c.addColorStop(1,n),s.fillStyle=c,s.beginPath();const l=r/2;s.moveTo(l,4),s.bezierCurveTo(r*.9,o*.2,r*.96,o*.72,l,o-6),s.bezierCurveTo(r*.04,o*.72,r*.1,o*.2,l,4),s.fill(),s.strokeStyle="rgba(70,52,26,.28)",s.lineWidth=2,s.beginPath(),s.moveTo(l,o*.08),s.lineTo(l,o*.94),s.stroke();for(let u=0;u<6;u++){const d=.2+u*.13;s.beginPath(),s.lineWidth=1.2,s.globalAlpha=.7,s.moveTo(l,o*d),s.lineTo(l-r*.28*(1-d*.4),o*(d+.1)),s.moveTo(l,o*d),s.lineTo(l+r*.28*(1-d*.4),o*(d+.1)),s.stroke()}s.globalAlpha=1;for(let u=0;u<20;u++)s.fillStyle="rgba(90,70,30,.12)",s.beginPath(),s.arc(a()*r,a()*o,y(a,.5,2),0,Bt),s.fill()},{srgb:!0,wrapS:on,wrapT:on})}function Cx(i={}){const{size:t=64,color:e="#f3c9d1"}=i;return yn(t,t,(n,s,r)=>{n.clearRect(0,0,s,r),n.save(),n.translate(s/2,r/2);const o=n.createRadialGradient(0,0,2,0,0,s*.42);o.addColorStop(0,"#fff7f0"),o.addColorStop(.7,e),o.addColorStop(1,e),n.fillStyle=o;for(let a=0;a<5;a++)n.rotate(Bt/5),n.beginPath(),n.ellipse(0,-s*.2,s*.13,s*.22,0,0,Bt),n.fill();n.restore()},{wrapS:on,wrapT:on})}function nl(i={}){const{size:t=256,color:e="#d8cbb2",repeat:n=[2,2],seed:s=2}=i;return yn(t,t,(r,o,a)=>{const c=He(s);r.fillStyle=e,r.fillRect(0,0,o,a);for(let l=0;l<o;l+=3)r.globalAlpha=.06,r.fillStyle=l%6?"#ffffff":"#000000",r.fillRect(l,0,1,a);for(let l=0;l<a;l+=3)r.globalAlpha=.06,r.fillStyle=l%6?"#000000":"#ffffff",r.fillRect(0,l,o,1);r.globalAlpha=1;for(let l=0;l<900;l++)r.fillStyle=c()>.5?"rgba(255,255,255,.05)":"rgba(0,0,0,.045)",r.fillRect(c()*o,c()*a,y(c,1,9),1);li(r,o,a,c,.03)},{repeat:n})}function Rx(i={}){const{w:t=256,h:e=512,seed:n=23}=i;return yn(t,e,s=>{const r=He(n);s.clearRect(0,0,t,e);for(let a=0;a<400;a++){const c=y(r,.02,.12);s.fillStyle=`rgba(235,245,255,${c})`,s.beginPath(),s.arc(r()*t,r()*e,y(r,.5,2.5),0,Bt),s.fill()}for(let a=0;a<130;a++){const c=r()*t,l=r()*e,u=y(r,8,78),d=s.createLinearGradient(c,l,c,l+u);d.addColorStop(0,"rgba(220,237,250,0.02)"),d.addColorStop(.4,"rgba(235,248,255,.22)"),d.addColorStop(1,"rgba(210,232,246,0.02)"),s.strokeStyle=d,s.lineWidth=y(r,.6,2),s.beginPath(),s.moveTo(c,l),s.quadraticCurveTo(c+y(r,-3,3),l+u*.6,c,l+u),s.stroke(),s.fillStyle="rgba(240,250,255,.35)",s.beginPath(),s.ellipse(c,l+u,y(r,1,2.4),y(r,1,3.2),0,0,Bt),s.fill()}const o=s.createLinearGradient(0,e*.6,0,e);o.addColorStop(0,"rgba(230,245,255,0)"),o.addColorStop(1,"rgba(230,245,255,.15)"),s.fillStyle=o,s.fillRect(0,0,t,e)},{wrapS:on,wrapT:on})}function Px(i={}){const{size:t=128,inner:e="rgba(255,244,214,1)",mid:n="rgba(255,178,86,.5)"}=i;return yn(t,t,(s,r,o)=>{const a=s.createRadialGradient(r/2,o/2,0,r/2,o/2,r/2);a.addColorStop(0,e),a.addColorStop(.25,n),a.addColorStop(1,"rgba(255,120,30,0)"),s.fillStyle=a,s.fillRect(0,0,r,o)},{srgb:!0,wrapS:on,wrapT:on})}function Ir(i={}){const{size:t=128,color:e="255,255,255"}=i;return yn(t,t,(n,s,r)=>{const o=n.createRadialGradient(s/2,r/2,0,s/2,r/2,s/2);o.addColorStop(0,`rgba(${e},1)`),o.addColorStop(.35,`rgba(${e},.65)`),o.addColorStop(.75,`rgba(${e},.16)`),o.addColorStop(1,`rgba(${e},0)`),n.fillStyle=o,n.fillRect(0,0,s,r)},{srgb:!0,wrapS:on,wrapT:on})}function rh(i={}){const{size:t=128,seed:e=12}=i;return yn(t,t,(n,s,r)=>{const o=He(e);n.clearRect(0,0,s,r);for(let a=0;a<22;a++){const c=s*(.25+o()*.5),l=r*(.25+o()*.5),u=y(o,s*.08,s*.3),d=n.createRadialGradient(c,l,0,c,l,u);d.addColorStop(0,"rgba(255,255,255,.22)"),d.addColorStop(.6,"rgba(255,255,255,.08)"),d.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=d,n.fillRect(0,0,s,r)}},{srgb:!0,wrapS:on,wrapT:on})}function Lx(i={}){const{size:t=128}=i;return yn(t,t,(e,n,s)=>{e.clearRect(0,0,n,s);const r=e.createRadialGradient(n/2,s*.65,0,n/2,s*.6,n*.46);r.addColorStop(0,"rgba(255,255,238,.98)"),r.addColorStop(.28,"rgba(255,214,122,.92)"),r.addColorStop(.62,"rgba(255,138,44,.45)"),r.addColorStop(1,"rgba(255,95,20,0)"),e.fillStyle=r,e.beginPath(),e.moveTo(n/2,s*.04),e.bezierCurveTo(n*.75,s*.32,n*.88,s*.62,n*.72,s*.92),e.bezierCurveTo(n*.58,s*1.02,n*.42,s*1.02,n*.28,s*.92),e.bezierCurveTo(n*.12,s*.62,n*.25,s*.32,n/2,s*.04),e.fill()},{srgb:!0,wrapS:on,wrapT:on})}function Ix(i={}){const{size:t=512,seed:e=41}=i;return yn(t,t,(n,s,r)=>{const o=He(e);n.fillStyle="#172022",n.fillRect(0,0,s,r);for(let a=0;a<16;a++){const c=s*o(),l=r*o(),u=n.createRadialGradient(c,l,0,c,l,y(o,20,120));u.addColorStop(0,"rgba(190,215,210,.22)"),u.addColorStop(1,"rgba(20,60,70,0)"),n.fillStyle=u,n.fillRect(0,0,s,r)}for(let a=0;a<30;a++){n.beginPath(),n.strokeStyle=`rgba(220,235,225,${y(o,.04,.15)})`,n.lineWidth=1;const c=o()*s,l=o()*r;n.ellipse(c,l,y(o,20,90),y(o,3,16),0,0,Bt),n.stroke()}li(n,s,r,o,.02)},{repeat:[1,1]})}function Dx(i={}){return new sn({roughness:.85,metalness:0,...i})}function Bd(i,t,e,n=new E(.3,.5,.2)){const o=n.clone().normalize();return yn(512,256,(a,c,l)=>{const u=a.createLinearGradient(0,0,0,l);u.addColorStop(0,i),u.addColorStop(.62,t),u.addColorStop(.78,t),u.addColorStop(1,"#181410"),a.fillStyle=u,a.fillRect(0,0,c,l);const d=(Math.atan2(o.z,o.x)/Bt+.5)*c,f=(.5-Math.asin(gn(o.y,-1,1))/Math.PI)*l,h=a.createRadialGradient(d,f,0,d,f,c*.18);h.addColorStop(0,"rgba(255,244,214,.95)"),h.addColorStop(.06,"rgba(255,226,168,.65)"),h.addColorStop(.4,"rgba(255,190,120,.18)"),h.addColorStop(1,"rgba(255,180,100,0)"),a.fillStyle=h,a.fillRect(0,0,c,l);const m=He(61);for(let v=0;v<40;v++){const g=m()*c,p=l*(.18+m()*.28),S=y(m,30,130),R=y(m,3,16),b=a.createRadialGradient(g,p,0,g,p,S);b.addColorStop(0,"rgba(160,150,140,.12)"),b.addColorStop(1,"rgba(160,150,140,0)"),a.fillStyle=b,a.save(),a.translate(g,p),a.scale(1,R/S),a.beginPath(),a.arc(0,0,S,0,Bt),a.fill(),a.restore()}},{srgb:!0,wrapS:Eo,wrapT:on})}const Nx=Math.PI/180,Ux={spring:48,summer:61,autumn:41,winter:31},Fx=[{h:0,top:"#081525",horizon:"#142536",sun:"#6a7fa8",hemiSky:"#132239",hemiGround:"#0a0b08",fog:"#0b1420",hemiInt:.33,sunInt:0,exposure:1.24},{h:4.6,top:"#0a1828",horizon:"#192a3a",sun:"#7789ad",hemiSky:"#152338",hemiGround:"#0c0d09",fog:"#0d1622",hemiInt:.32,sunInt:0,exposure:1.22},{h:5.8,top:"#1b3048",horizon:"#55545a",sun:"#c79d83",hemiSky:"#293647",hemiGround:"#211d16",fog:"#3d4046",hemiInt:.44,sunInt:.12,exposure:1.1},{h:6.55,top:"#314b68",horizon:"#cf8c61",sun:"#ffc086",hemiSky:"#5d6a77",hemiGround:"#3a3125",fog:"#8a7f72",hemiInt:.62,sunInt:.34,exposure:1.02},{h:8.2,top:"#3f6993",horizon:"#cbc6b2",sun:"#ffe4b8",hemiSky:"#9ab1c6",hemiGround:"#4b4634",fog:"#b1b3aa",hemiInt:.92,sunInt:.82,exposure:.94},{h:12.5,top:"#3a6b99",horizon:"#d3d5c9",sun:"#fff4e0",hemiSky:"#bdd3e4",hemiGround:"#5d5744",fog:"#c2c9c4",hemiInt:1.04,sunInt:1,exposure:.85},{h:15.8,top:"#4a7195",horizon:"#d8c4a8",sun:"#ffdfa8",hemiSky:"#a5b7c6",hemiGround:"#635540",fog:"#c0bdae",hemiInt:.96,sunInt:.9,exposure:.9},{h:17.3,top:"#385676",horizon:"#e6b27a",sun:"#ffc47c",hemiSky:"#8496a8",hemiGround:"#594832",fog:"#b39c81",hemiInt:.82,sunInt:.66,exposure:.97},{h:18.15,top:"#293f5c",horizon:"#f2a061",sun:"#ffa055",hemiSky:"#6b7d90",hemiGround:"#4f3d29",fog:"#a2856b",hemiInt:.68,sunInt:.33,exposure:1.03},{h:18.9,top:"#1b2d44",horizon:"#c47a5e",sun:"#f08a5c",hemiSky:"#3c5066",hemiGround:"#2a231b",fog:"#735f52",hemiInt:.53,sunInt:.06,exposure:1.09},{h:19.9,top:"#0f2032",horizon:"#283847",sun:"#837d86",hemiSky:"#1d2c3f",hemiGround:"#13130f",fog:"#1f2a34",hemiInt:.4,sunInt:0,exposure:1.17},{h:21.4,top:"#081626",horizon:"#142536",sun:"#6b7fa4",hemiSky:"#132239",hemiGround:"#0a0b08",fog:"#0c1520",hemiInt:.33,sunInt:0,exposure:1.24},{h:24,top:"#081525",horizon:"#142536",sun:"#6a7fa8",hemiSky:"#132239",hemiGround:"#0a0b08",fog:"#0b1420",hemiInt:.33,sunInt:0,exposure:1.24}],Sr=Fx.map(i=>({...i,top:new Ot(i.top),horizon:new Ot(i.horizon),sun:new Ot(i.sun),hemiSky:new Ot(i.hemiSky),hemiGround:new Ot(i.hemiGround),fog:new Ot(i.fog)})),Df={spring:{hue:-.008,sat:1,sunHue:.004,sunSat:.92,sunLight:1.04,exposure:1,fog:1.04},summer:{hue:.002,sat:1.07,sunHue:.004,sunSat:1.02,sunLight:1.02,exposure:.97,fog:.92},autumn:{hue:.012,sat:1.04,sunHue:.02,sunSat:1.15,sunLight:.99,exposure:1,fog:1.12},winter:{hue:-.02,sat:.7,sunHue:-.005,sunSat:.66,sunLight:1.1,exposure:1.04,fog:1.22}},Nf={clear:{overcast:0,sunMul:1,hemiMul:1,cloud:.44,cloudOpacity:.55,fogMul:1,rain:0,snow:0,mist:0,dust:1},rain:{overcast:.72,sunMul:.18,hemiMul:.78,cloud:.8,cloudOpacity:.92,fogMul:2.1,rain:1,snow:0,mist:.5,dust:0},snow:{overcast:.56,sunMul:.3,hemiMul:.9,cloud:.72,cloudOpacity:.82,fogMul:1.8,rain:0,snow:1,mist:.25,dust:0},fog:{overcast:.74,sunMul:.22,hemiMul:.86,cloud:.62,cloudOpacity:.7,fogMul:5.2,rain:0,snow:0,mist:1,dust:0},storm:{overcast:.94,sunMul:.06,hemiMul:.62,cloud:.97,cloudOpacity:1,fogMul:3.3,rain:1,snow:0,mist:.6,dust:0}},Ox=new Ot("#98a1a4"),zx=new Ot("#10151d"),Bx=new Ot("#e4eef3"),kx=new Ot("#b8c0be"),Gx=new Ot("#1a2026");function Ts(i,t,e,n){return Yi(i,t,1-Math.exp(-e*n))}function cr(i,t,e,n){const s=1-Math.exp(-e*n);i.lerp(t,s)}function Hx(i){const t=(i%24+24)%24;let e=Sr[0],n=Sr[1];for(let r=0;r<Sr.length-1;r++)if(t>=Sr[r].h&&t<=Sr[r+1].h){e=Sr[r],n=Sr[r+1];break}const s=n.h-e.h||1;return{a:e,b:n,t:gn((t-e.h)/s,0,1)}}const Vx=`
  varying vec3 vWorldPosition;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorldPosition = world.xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Wx=`
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
`;function Xx({scene:i,renderer:t,camera:e}){const n=new Je;n.name="environment",i.add(n);const s=new mi(400,48,28),r={uTopColor:{value:new Ot("#4a617e")},uHorizonColor:{value:new Ot("#e5b47f")},uGroundColor:{value:new Ot("#2b241b")},uFogColor:{value:new Ot("#bea88c")},uSunColor:{value:new Ot("#ffc47c")},uCloudLight:{value:new Ot("#f0c99f")},uCloudShadow:{value:new Ot("#5a5560")},uSunDir:{value:new E(.5,.1,.85).normalize()},uMoonDir:{value:new E(-.5,.6,-.4).normalize()},uTime:{value:0},uCloudCover:{value:.26},uCloudOpacity:{value:.5},uStarStrength:{value:0},uMoonStrength:{value:0},uFlash:{value:0},uSunVisibility:{value:1},uStorminess:{value:0}},o=new xi({uniforms:r,vertexShader:Vx,fragmentShader:Wx,side:Fi,depthWrite:!1,depthTest:!0,fog:!1}),a=new Ne(s,o);a.name="sky",a.frustumCulled=!1,a.renderOrder=-100,n.add(a);const c=new yc("#ffc47c",3.2);c.name="sun-light",c.castShadow=!0,c.shadow.mapSize.set(2048,2048),c.shadow.camera.left=-17,c.shadow.camera.right=17,c.shadow.camera.top=17,c.shadow.camera.bottom=-17,c.shadow.camera.near=1,c.shadow.camera.far=80,c.shadow.bias=-25e-5,c.shadow.normalBias=.035,c.target.position.set(0,1,.8),i.add(c,c.target);const l=new yc("#9db4d9",0);l.name="moon-light",l.castShadow=!0,l.shadow.mapSize.set(1024,1024),l.shadow.camera.left=-17,l.shadow.camera.right=17,l.shadow.camera.top=17,l.shadow.camera.bottom=-17,l.shadow.camera.near=1,l.shadow.camera.far=80,l.shadow.bias=-3e-4,l.shadow.normalBias=.04,l.target.position.set(0,1,.8),l.visible=!1,i.add(l,l.target);const u=new um("#9dacba","#635540",.93);u.name="sky-fill",i.add(u);const d=new yc("#d8b18a",.36);d.name="bounce",d.position.set(-8,3.4,-7),i.add(d);const f=new pm("#5a6673",.16);i.add(f);const h=new Ju(new Ot("#bea88c"),.0115);i.fog=h;const m=new Je;m.name="weather-particles",n.add(m);const v=2100,g=new Float32Array(v*6),p=[],S=He(401);for(let ut=0;ut<v;ut++)p.push({x:(S()-.5)*34,y:S()*16,z:(S()-.5)*34,speed:13+S()*9,len:.35+S()*.55});const R=new Pn;R.setAttribute("position",new Wn(g,3));const b=new dd({color:"#b9cbdc",transparent:!0,opacity:0,depthWrite:!1,blending:Ri,fog:!1}),T=new bp(R,b);T.frustumCulled=!1,T.visible=!1,m.add(T);function A(ut,Jt,N,Zt){const fe=He(Zt),P=new Float32Array(ut*3),_=[];for(let jt=0;jt<ut;jt++)P[jt*3]=(fe()-.5)*34,P[jt*3+1]=fe()*16,P[jt*3+2]=(fe()-.5)*34,_.push({fall:.45+fe()*.8,drift:fe()*Bt,sway:.25+fe()*.55});const K=new Pn;K.setAttribute("position",new Wn(P,3));const ht=new Pr({size:Jt,map:Ir({color:"255,255,255"}),transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,color:"#f4f4ef",fog:!1,alphaTest:.02}),Tt=new So(K,ht);return Tt.frustumCulled=!1,Tt.visible=!1,m.add(Tt),{points:Tt,positions:P,speeds:_,geo:K,mat:ht,targetOpacity:0,baseOpacity:N,rng:fe}}const F=[A(1250,.13,.9,89),A(260,.31,.55,111)],M=rh({size:256,seed:73}),C=[],O=He(701);for(let ut=0;ut<15;ut++){const Jt=new Fr({map:M,color:"#c7ccc5",transparent:!0,opacity:0,depthWrite:!1,depthTest:!0,fog:!1}),N=new yo(Jt),Zt=O()*Bt,fe=6+O()*22;N.position.set(Math.cos(Zt)*fe,.45+O()*1.4,Math.sin(Zt)*fe),N.scale.set(11+O()*12,3+O()*2.5,1),N.userData={phase:O()*Bt,speed:.02+O()*.04,baseY:N.position.y,orbit:fe,angle:Zt},N.visible=!1,m.add(N),C.push({sprite:N,mat:Jt})}const B=150,G=new Float32Array(B*3),nt=[],H=He(912);for(let ut=0;ut<B;ut++){const Jt=(H()-.5)*20,N=.5+H()*3.2,Zt=(H()-.5)*20;G[ut*3]=Jt,G[ut*3+1]=N,G[ut*3+2]=Zt,nt.push({x:Jt,y:N,z:Zt,phase:H()*Bt,speed:.06+H()*.14})}const J=new Pn;J.setAttribute("position",new Wn(G,3));const Mt=new Pr({size:.035,map:Ir({color:"255,238,200"}),color:"#ffe3b0",transparent:!0,opacity:0,depthWrite:!1,blending:Ri,sizeAttenuation:!0,fog:!1,alphaTest:.02}),rt=new So(J,Mt);rt.frustumCulled=!1,rt.visible=!1,m.add(rt);let At=4+Math.random()*4,gt=-1,yt=0;const Rt=new wu(t);Rt.compileEquirectangularShader();let ye=null,we="",en=-10;i.environmentIntensity=.58;const Z={top:new Ot("#4a617e"),horizon:new Ot("#e5b47f"),sunColor:new Ot("#ffc47c"),hemiSky:new Ot("#7f8c99"),hemiGround:new Ot("#594832"),fogColor:new Ot("#bea88c"),cloudLight:new Ot("#f0c99f"),cloudShadow:new Ot("#5a5560"),hemiInt:.8,sunInt:.66,exposure:.97,fogDensity:.0115,rain:0,snow:0,mist:0,dust:0,cloudCover:.26,cloudOpacity:.5,starStrength:0,moonStrength:0,cloudCoverCurrent:.26,initialized:!1,sunDir:new E,moonDir:new E,daylight:1,overcast:0,weatherLabel:"clear"},ce={top:new Ot,horizon:new Ot,sunColor:new Ot,hemiSky:new Ot,hemiGround:new Ot,fogColor:new Ot,cloudLight:new Ot,cloudShadow:new Ot,grayA:new Ot,grayB:new Ot,tmpA:new Ot,tmpB:new Ot,sunDir:new E,moonDir:new E};let _t=0;function q(ut){const Jt=((Number(ut?.hour)||0)%24+24)%24,N=ut?.season||"autumn",Zt=ut?.weather||"clear",fe=Df[N]||Df.autumn,P=Nf[Zt]||Nf.clear,_=Hx(Jt);ce.top.copy(_.a.top).lerp(_.b.top,_.t),ce.horizon.copy(_.a.horizon).lerp(_.b.horizon,_.t),ce.sunColor.copy(_.a.sun).lerp(_.b.sun,_.t),ce.hemiSky.copy(_.a.hemiSky).lerp(_.b.hemiSky,_.t),ce.hemiGround.copy(_.a.hemiGround).lerp(_.b.hemiGround,_.t),ce.fogColor.copy(_.a.fog).lerp(_.b.fog,_.t);const K=Yi(_.a.hemiInt,_.b.hemiInt,_.t),ht=Yi(_.a.sunInt,_.b.sunInt,_.t),Tt=Yi(_.a.exposure,_.b.exposure,_.t);for(const Oe of[ce.top,ce.horizon,ce.hemiSky,ce.hemiGround,ce.fogColor])Oe.offsetHSL(fe.hue,fe.sat-1,0);ce.sunColor.offsetHSL(fe.sunHue,fe.sunSat-1,0);const jt=6.15,Et=(Jt-jt)/(18.35-jt),Dt=(Ux[N]||41)*Nx,oe=Math.sin(Et*Math.PI)*Dt,Ue=Et*Math.PI;ce.sunDir.set(-Math.cos(Ue)*Math.cos(oe),Math.sin(oe),Math.sin(Ue)*Math.cos(oe)).normalize(),ce.moonDir.set(-ce.sunDir.x,Math.max(.22,-ce.sunDir.y),-ce.sunDir.z).normalize();const ie=ls(-.035,.14,ce.sunDir.y),Ft=P.overcast,Ee=ce.grayA.copy(zx).lerp(Ox,ie),Se=ce.grayB.copy(Gx).lerp(kx,ie);ce.top.lerp(Ee,Ft*.72),ce.horizon.lerp(Ee,Ft*.62),ce.hemiSky.lerp(Ee,Ft*.58),ce.hemiGround.lerp(Se,Ft*.35),ce.fogColor.lerp(Se,Ft*.62),ce.sunColor.lerp(Bx,Ft*.8),Zt==="storm"&&ce.sunColor.lerp(new Ot("#b9c7d3"),.4),ce.cloudLight.copy(ce.horizon).lerp(ce.sunColor,.32+ie*.2),ce.cloudShadow.copy(ce.top).multiplyScalar(.74).lerp(ce.fogColor,.22);const Xe=gn(1-Ft*.96,0,1)*ls(-.05,.02,ce.sunDir.y),Q=4.35*ht*P.sunMul*(.55+ie*.45),Yt=K*P.hemiMul*(.92+ie*.14)+Ft*.05,Nt=Tt*fe.exposure*(1+Ft*.13),_e=((.0072+(1-ie)*.0016)*P.fogMul+(Zt==="storm"?.012:0))*fe.fog,be=gn((1-ie*2.1)*(1-Ft*.92),0,1),Vt=gn((1-ie)*(1-Ft*.9),0,1)*.9;return{hour:Jt,season:N,weather:Zt,sunDir:ce.sunDir,moonDir:ce.moonDir,daylight:ie,overcast:Ft,sunVisibility:Xe,sunInt:Q,hemiInt:Yt,exposure:Nt,fogDensity:_e,starStrength:be,moonStrength:Vt,cloudCover:P.cloud,cloudOpacity:P.cloudOpacity,rain:P.rain,snow:P.snow,mist:P.mist,dust:P.dust,colors:ce}}function bt(ut){const Jt=Z.initialized?3.2:999;cr(Z.top,ce.top,Jt,ut),cr(Z.horizon,ce.horizon,Jt,ut),cr(Z.sunColor,ce.sunColor,Jt,ut),cr(Z.hemiSky,ce.hemiSky,Jt,ut),cr(Z.hemiGround,ce.hemiGround,Jt,ut),cr(Z.fogColor,ce.fogColor,Jt*.8,ut),cr(Z.cloudLight,ce.cloudLight,Jt,ut),cr(Z.cloudShadow,ce.cloudShadow,Jt,ut),Z.hemiInt=Z.initialized?Ts(Z.hemiInt,wt.hemiInt,2.6,ut):wt.hemiInt,Z.sunInt=Z.initialized?Ts(Z.sunInt,wt.sunInt,2.6,ut):wt.sunInt,Z.exposure=Z.initialized?Ts(Z.exposure,wt.exposure,2.2,ut):wt.exposure,Z.fogDensity=Z.initialized?Ts(Z.fogDensity,wt.fogDensity,1.7,ut):wt.fogDensity,Z.starStrength=wt.starStrength,Z.moonStrength=wt.moonStrength,Z.rain=Z.initialized?Ts(Z.rain,wt.rain,1.6,ut):wt.rain,Z.snow=Z.initialized?Ts(Z.snow,wt.snow,1.6,ut):wt.snow,Z.mist=Z.initialized?Ts(Z.mist,wt.mist,1.2,ut):wt.mist,Z.dust=Z.initialized?Ts(Z.dust,wt.dust,1.2,ut):wt.dust,Z.cloudCover=Z.initialized?Ts(Z.cloudCover,wt.cloudCover,1.2,ut):wt.cloudCover,Z.cloudOpacity=Z.initialized?Ts(Z.cloudOpacity,wt.cloudOpacity,1.2,ut):wt.cloudOpacity,Z.overcast=wt.overcast,Z.daylight=wt.daylight,Z.weatherLabel=wt.weather,Z.sunDir.copy(wt.sunDir),Z.moonDir.copy(wt.moonDir),wt.colors=ce}let wt=null;function Kt(){const ut=r;ut.uTopColor.value.copy(Z.top),ut.uHorizonColor.value.copy(Z.horizon),ut.uGroundColor.value.copy(Z.fogColor).multiplyScalar(.48),ut.uFogColor.value.copy(Z.fogColor),ut.uSunColor.value.copy(Z.sunColor),ut.uCloudLight.value.copy(Z.cloudLight),ut.uCloudShadow.value.copy(Z.cloudShadow),ut.uSunDir.value.copy(Z.sunDir),ut.uMoonDir.value.copy(Z.moonDir),ut.uTime.value=_t,ut.uCloudCover.value=Z.cloudCover,ut.uCloudOpacity.value=Z.cloudOpacity,ut.uStarStrength.value=Z.starStrength,ut.uMoonStrength.value=Z.moonStrength,ut.uSunVisibility.value=wt?.sunVisibility??1,ut.uStorminess.value=Z.overcast,ut.uFlash.value=yt}function Ht(){const ut={x:0,y:1,z:1.2},Jt=Z.sunDir;c.position.set(ut.x+Jt.x*44,ut.y+Math.max(.02,Jt.y)*44,ut.z+Jt.z*44),c.target.position.set(ut.x,ut.y,ut.z),c.color.copy(Z.sunColor),c.intensity=Z.sunInt,c.castShadow=Z.daylight>.05&&Z.sunInt>.12,c.visible=Z.sunInt>.002,c.shadow.autoUpdate=!0;const N=Z.moonDir;l.position.set(ut.x+N.x*40,ut.y+N.y*40,ut.z+N.z*40),l.target.position.set(ut.x,ut.y,ut.z),l.intensity=Z.moonStrength*1.05,l.castShadow=Z.moonStrength>.25&&Z.daylight<.2,l.visible=Z.moonStrength>.02,u.color.copy(Z.hemiSky),u.groundColor.copy(Z.hemiGround),u.intensity=Z.hemiInt+yt*1.6,d.color.copy(Z.horizon),d.intensity=.28+Z.daylight*.34+Z.overcast*.03,d.position.set(-Z.sunDir.x*12,3.2,-Z.sunDir.z*12),f.color.copy(Z.fogColor),f.intensity=.14+Z.daylight*.06+yt*.9,h.color.copy(Z.fogColor),h.density=Z.fogDensity,t.toneMappingExposure=Z.exposure}function Te(ut=!1){const Jt=_t;if(!ut&&Jt-en<.85)return;const N=[Z.top.getHexString(),Z.horizon.getHexString(),Z.fogColor.getHexString(),Z.sunColor.getHexString(),Z.sunDir.x.toFixed(2),Z.sunDir.y.toFixed(2),Z.sunDir.z.toFixed(2),Z.overcast.toFixed(2),Z.starStrength.toFixed(2)].join("|");if(N===we)return;we=N,en=Jt;const Zt=Bd(Z.top.getStyle(),Z.horizon.getStyle(),Z.sunColor.getStyle(),Z.sunDir),fe=Rt.fromEquirectangular(Zt);Zt.dispose(),i.environment=fe.texture,i.environmentIntensity=.45+(1-Z.overcast)*.2,ye&&ye.dispose(),ye=fe}const vt=new E;function zt(ut,Jt){const N=Z.snow;for(const Zt of F){if(Zt.targetOpacity=Zt.baseOpacity*N,Zt.mat.opacity=Zt.targetOpacity*(N>.02?1:0),Zt.points.visible=N>.01,!Zt.points.visible)continue;const fe=Zt.positions;for(let P=0;P<Zt.speeds.length;P++){const _=Zt.speeds[P];fe[P*3+1]-=_.fall*ut*(.8+N*.5),fe[P*3]+=Math.sin(_t*_.sway+_.drift)*ut*.32,fe[P*3+2]+=Math.cos(_t*_.sway*.7+_.drift)*ut*.22,fe[P*3+1]<0&&(fe[P*3+1]=15+Math.random()*3,fe[P*3]=(Math.random()-.5)*34,fe[P*3+2]=(Math.random()-.5)*34),fe[P*3]<-17&&(fe[P*3]+=34),fe[P*3]>17&&(fe[P*3]-=34),fe[P*3+2]<-17&&(fe[P*3+2]+=34),fe[P*3+2]>17&&(fe[P*3+2]-=34)}Zt.geo.attributes.position.needsUpdate=!0,Zt.points.position.set(Jt.x,0,Jt.z)}}function Gt(ut,Jt){const N=Z.rain;if(b.opacity=N*(Z.weatherLabel==="storm"?.55:.4),T.visible=N>.01,!T.visible)return;T.position.set(Jt.x,0,Jt.z);const Zt=1.15+Z.overcast*.75,fe=.28,P=g;for(let _=0;_<p.length;_++){const K=p[_];K.y-=K.speed*ut,K.y<0&&(K.y=14+Math.random()*4,K.x=(Math.random()-.5)*34,K.z=(Math.random()-.5)*34);const ht=_*6;P[ht]=K.x,P[ht+1]=K.y,P[ht+2]=K.z,P[ht+3]=K.x+Zt*K.len*.16,P[ht+4]=K.y-K.len,P[ht+5]=K.z+fe*K.len*.16}R.attributes.position.needsUpdate=!0,b.color.copy(Z.fogColor).lerp(new Ot("#d7e5f0"),.55+Z.daylight*.2)}function Ut(ut){const Jt=Z.mist;for(const N of C){N.sprite.visible=Jt>.015,N.mat.opacity=.09*Jt;const Zt=N.sprite.userData;Zt.phase+=ut*Zt.speed,N.sprite.position.x=Math.cos(Zt.angle+Zt.phase*.25)*Zt.orbit,N.sprite.position.z=Math.sin(Zt.angle+Zt.phase*.25)*Zt.orbit,N.sprite.position.y=Zt.baseY+Math.sin(_t*.12+Zt.phase)*.25}}function Qt(ut){const Jt=Z.dust*Z.daylight*(1-Z.overcast)*.4;if(rt.visible=Jt>.02,Mt.opacity=Jt*.42,!!rt.visible){for(let N=0;N<B;N++){const Zt=nt[N];Zt.y+=ut*Zt.speed*.12,Zt.y>3.9&&(Zt.y=.45),G[N*3]=Zt.x+Math.sin(_t*.18+Zt.phase)*.45,G[N*3+1]=Zt.y,G[N*3+2]=Zt.z+Math.cos(_t*.14+Zt.phase)*.45}J.attributes.position.needsUpdate=!0}}function ke(ut){if(!(Z.weatherLabel==="storm"&&Z.overcast>.55)){yt=Math.max(0,yt-ut*6);return}if(gt>=0){gt+=ut;const N=gt;let Zt=0;N<.07?Zt=1:N<.15?Zt=.25:N<.23?Zt=.75:N<.46?Zt=.12:N<.53&&(Zt=.35),yt=Zt*(.7+Math.random()*.3),N>.65&&(gt=-1,yt=0,At=3.5+Math.random()*7)}else At-=ut,At<=0&&(gt=0,At=5+Math.random()*7),yt=Math.max(0,yt-ut*5)}function Le(ut,Jt){return ut=Math.min(ut||.016,.1),_t+=ut,wt=q(Jt||{}),bt(ut),ke(ut),Kt(),Ht(),a.position.copy(e.position),vt.copy(e.position),Gt(ut,vt),zt(ut,vt),Ut(ut),Qt(ut),Te(!Z.initialized),Z.initialized=!0,Z}return wt=q({hour:17.2,season:"autumn",weather:"clear"}),Z.top.copy(wt.colors.top),Z.horizon.copy(wt.colors.horizon),Z.sunColor.copy(wt.colors.sunColor),Z.hemiSky.copy(wt.colors.hemiSky),Z.hemiGround.copy(wt.colors.hemiGround),Z.fogColor.copy(wt.colors.fogColor),Z.cloudLight.copy(wt.colors.cloudLight),Z.cloudShadow.copy(wt.colors.cloudShadow),Z.sunDir.copy(wt.sunDir),Z.moonDir.copy(wt.moonDir),Z.sunInt=wt.sunInt,Z.hemiInt=wt.hemiInt,Z.exposure=wt.exposure,Z.fogDensity=wt.fogDensity,Z.cloudCover=wt.cloudCover,Z.cloudOpacity=wt.cloudOpacity,Z.starStrength=wt.starStrength,Z.moonStrength=wt.moonStrength,Z.overcast=wt.overcast,Z.daylight=wt.daylight,Kt(),Ht(),Te(!0),{group:n,sky:a,sunLight:c,moonLight:l,hemi:u,bounce:d,ambient:f,fog:h,state:Z,update:Le,getSunDirection:()=>Z.sunDir.clone(),getMetrics:()=>({daylight:Z.daylight,overcast:Z.overcast,sunElevation:Z.sunDir.y,sunDir:Z.sunDir.clone(),isNight:Z.sunDir.y<-.03,starStrength:Z.starStrength,rain:Z.rain,snow:Z.snow}),forceEnvMapUpdate:()=>Te(!0),dispose(){Rt.dispose(),ye?.dispose(),s.dispose(),o.dispose(),R.dispose(),b.dispose();for(const ut of F)ut.geo.dispose(),ut.mat.map?.dispose(),ut.mat.dispose();J.dispose(),Mt.map?.dispose(),Mt.dispose(),M.dispose()}}}const gl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class No{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Yx=new zl(-1,1,1,-1,0,1);class Zx extends Pn{constructor(){super(),this.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new an([0,2,0,0,2,0],2))}}const qx=new Zx;class oh{constructor(t){this._mesh=new Ne(qx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Yx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class $x extends No{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof xi?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=pa.clone(t.uniforms),this.material=new xi({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new oh(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Uf extends No{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Kx extends No{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Jx{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new $t);this._width=n.width,this._height=n.height,e=new Oi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $x(gl),this.copyPass.material.blending=Ls,this.timer=new vm}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Uf!==void 0&&(o instanceof Uf?n=!0:o instanceof Kx&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new $t);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Qx extends No{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ot}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const jx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ot(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Lo extends No{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new $t(t.x,t.y):new $t(256,256),this.clearColor=new Ot(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Oi(r,o,{type:Zi,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Oi(r,o,{type:Zi,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Oi(r,o,{type:Zi,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=jx;this.highPassUniforms=pa.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xi({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new $t(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=pa.clone(gl.uniforms),this.blendMaterial=new xi({uniforms:this.copyUniforms,vertexShader:gl.vertexShader,fragmentShader:gl.fragmentShader,premultipliedAlpha:!0,blending:Ri,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ot,this._oldClearAlpha=1,this._basic=new ji,this._fsQuad=new oh(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new $t(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Lo.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Lo.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);const s=[],r=[];for(let o=1;o<t;o+=2){const a=e[o],c=o+1<t?e[o+1]:0,l=a+c;s.push((o*a+(o+1)*c)/l),r.push(l)}return new xi({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new $t(.5,.5)},direction:{value:new $t(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new xi({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Lo.BlurDirectionX=new $t(1,0);Lo.BlurDirectionY=new $t(0,1);const il={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class t2 extends No{constructor(){super(),this.isOutputPass=!0,this.uniforms=pa.clone(il.uniforms),this.material=new Td({name:il.name,uniforms:this.uniforms,vertexShader:il.vertexShader,fragmentShader:il.fragmentShader}),this._fsQuad=new oh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},En.getTransfer(this._outputColorSpace)===Fn&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Du?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Nu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Uu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ul?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ou?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===zu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Fu&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function e2({renderer:i,scene:t,camera:e}){const n=new Jx(i);n.setPixelRatio(i.getPixelRatio());const s=new Qx(t,e);n.addPass(s);const r=new Lo(new $t(window.innerWidth,window.innerHeight),.36,.62,.82);n.addPass(r);const o=new t2;n.addPass(o);function a(u,d,f){n.setPixelRatio(f),n.setSize(u,d),r.resolution.set(u,d)}function c(u){n.render(u)}function l(u){r.strength=u}return{composer:n,bloom:r,output:o,setSize:a,render:c,setBloom:l}}const n2=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);function br(i,t,e,n){return J0.lerp(i,t,1-Math.exp(-e*n))}function i2(i,t,e,n){let s=((t-i+Math.PI)%Bt+Bt)%Bt-Math.PI;return i+s*(1-Math.exp(-11*n))}function Vs(i,t=.85,e=0){return new sn({color:i,roughness:t,metalness:e})}function s2(){const i=new Je;i.name="player-character";const t=new Je;i.add(t);const e={coat:Vs("#694232",.9),coatDark:Vs("#503224",.93),scarf:Vs("#b3a079",.96),beanie:Vs("#4f574b",.96),skin:Vs("#bd8f70",.76),pants:Vs("#413d34",.94),boots:Vs("#241d17",.76),pack:Vs("#594a33",.92),strap:Vs("#34291f",.92),brass:new sn({color:"#b08a54",roughness:.38,metalness:.7})};function n(u,d,f,h=0,m=0,v=0){const g=new Ne(d,f);return g.position.set(h,m,v),g.castShadow=!0,g.receiveShadow=!0,u.add(g),g}const s=.91;n(t,new rs(.42,.55,.27,4,.09),e.coat,0,1.2,0),n(t,new rs(.46,.24,.3,3,.07),e.coatDark,0,.96,0),n(t,new qn(.012,.32,.01),e.strap,0,1.22,.142);for(let u=0;u<3;u++)n(t,new ti(.013,.013,.012,8),e.brass,.05,1.32-u*.13,.15).rotation.x=Math.PI/2;n(t,new ci(.115,.045,7,14),e.scarf,0,1.5,.005).rotation.x=Math.PI/2;const r=n(t,new rs(.11,.3,.045,3,.02),e.scarf,.075,1.36,.15);r.rotation.z=.1,n(t,new mi(.115,20,16),e.skin,0,1.65,0),n(t,new mi(.022,8,6),e.skin,0,1.62,.108);const o=n(t,new mi(.123,18,12,0,Bt,0,Math.PI*.55),e.beanie,0,1.67,-.006);o.rotation.x=.06,n(t,new ci(.117,.022,7,20),e.beanie,0,1.637,0).rotation.x=Math.PI/2,n(t,new mi(.045,10,8),e.beanie,0,1.79,0),n(t,new mi(.024,8,6),e.skin,-.112,1.64,0),n(t,new mi(.024,8,6),e.skin,.112,1.64,0);const a=n(t,new rs(.29,.4,.18,4,.055),e.pack,0,1.22,-.2);a.rotation.x=-.06,n(t,new rs(.22,.12,.045,2,.02),e.strap,0,1.08,-.27);for(const u of[-1,1])n(t,new rs(.045,.36,.035,2,.012),e.strap,u*.135,1.24,.13).rotation.z=u*-.05;const c=[];for(const u of[-1,1]){const d=new Je;d.position.set(u*.105,s,0),t.add(d);const f=n(d,new fo(.075,.28,4,10),e.pants,0,-.19,0);f.rotation.z=.035;const h=new Je;h.position.y=-.4,d.add(h),n(h,new fo(.062,.27,4,10),e.pants,0,-.15,.01);const m=n(h,new rs(.14,.13,.26,3,.045),e.boots,0,-.34,.045);m.rotation.x=-.02,n(h,new rs(.145,.035,.265,2,.012),e.boots,0,-.405,.045),c.push({pivot:d,knee:h,side:u})}const l=[];for(const u of[-1,1]){const d=new Je;d.position.set(u*.265,1.41,0),t.add(d),d.rotation.z=u*.12,n(d,new fo(.062,.25,4,10),e.coat,0,-.16,0);const f=new Je;f.position.y=-.32,d.add(f),n(f,new fo(.052,.22,4,10),e.coatDark,0,-.13,.01),n(f,new mi(.057,12,10),e.skin,0,-.28,.012),l.push({shoulder:d,elbow:f,side:u})}return t.position.y=-.085,i.userData.parts={model:t,legs:c,arms:l,scarfTail:r},i.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),i}function r2({scene:i,camera:t,domElement:e,outsideColliders:n=[],interiorColliders:s=[],occluders:r=[],callbacks:o={}}){const a=s2();i.add(a);const c=Ve.player,l=new E(Ve.spawn.x,0,Ve.spawn.z),u=new E,d=new Set,f=new Cd;f.far=20;const h={mode:"third",yaw:0,orbitPitch:.16,lookPitch:-.02,distance:c.cameraDistance,currentDistance:c.cameraDistance,charYaw:Math.PI,walkPhase:0,speed:0,moving:!1,inputEnabled:!0,bob:0,fov:46};let m=!1,v=0,g=0,p=0,S=0,R=0,b=-1;performance.now(),t.fov=46,t.near=.08,t.far=700,t.updateProjectionMatrix(),a.position.copy(l),a.rotation.y=h.charYaw;const T=new E,A=new E,F=new E;function M(q,bt,wt,Kt=c.radius){for(const Ht of wt)if(Ht)if(Ht.radius!==void 0||Ht.type==="circle"){const Te=Ht.x??Ht.cx??0,vt=Ht.z??Ht.cz??0,zt=Ht.radius??Ht.r??0,Gt=q-Te,Ut=bt-vt;if(Gt*Gt+Ut*Ut<(zt+Kt)*(zt+Kt))return!1}else{let Te=Ht.minX,vt=Ht.maxX,zt=Ht.minZ,Gt=Ht.maxZ;if(Te===void 0&&Ht.x!==void 0&&Ht.w!==void 0&&(Te=Ht.x-Ht.w/2,vt=Ht.x+Ht.w/2,zt=Ht.z-Ht.d/2,Gt=Ht.z+Ht.d/2),Te===void 0)continue;if(q>Te-Kt&&q<vt+Kt&&bt>zt-Kt&&bt<Gt+Kt)return!1}return!0}function C(q,bt){const wt=Ge.porch;if(q>-6.5/2&&q<wt.width/2&&bt>Ge.door.z-.1&&bt<wt.frontZ+.08)return wt.floorY;if(Math.abs(q)<1.15){const Kt=wt.frontZ+.08;if(bt>=Kt&&bt<Kt+.3)return wt.floorY-.17;if(bt>=Kt+.3&&bt<Kt+.6)return wt.floorY-.34}return 0}function O(q){h.inputEnabled=q,q||(d.clear(),m=!1)}function B(q,bt,wt){const Kt=new E(-Math.sin(h.yaw),0,-Math.cos(h.yaw)),Ht=new E(Math.cos(h.yaw),0,-Math.sin(h.yaw)),Te=new E;h.inputEnabled&&((d.has("KeyW")||d.has("ArrowUp"))&&Te.add(Kt),(d.has("KeyS")||d.has("ArrowDown"))&&Te.sub(Kt),(d.has("KeyD")||d.has("ArrowRight"))&&Te.add(Ht),(d.has("KeyA")||d.has("ArrowLeft"))&&Te.sub(Ht));const vt=Te.lengthSq()>.001;vt&&Te.normalize().multiplyScalar(wt);const zt=vt?10.5:13.5;u.x=br(u.x,Te.x,zt,q),u.z=br(u.z,Te.z,zt,q),h.speed=Math.hypot(u.x,u.z),h.moving=h.speed>.15;let Gt=l.x+u.x*q;M(Gt,l.z,bt)||(Gt=l.x,u.x=0);let Ut=l.z+u.z*q;M(Gt,Ut,bt)||(Ut=l.z,u.z=0),l.x=Gt,l.z=Ut;const Qt=Math.hypot(l.x,l.z);return Qt>52&&(l.x=l.x/Qt*52,l.z=l.z/Qt*52),vt}function G(q){const bt=d.has("ShiftLeft")||d.has("ShiftRight"),wt=bt?c.runSpeed:c.walkSpeed;B(q,n,wt);const Kt=C(l.x,l.z);if(l.y=br(l.y,Kt,12,q),a.position.set(l.x,l.y,l.z),a.visible=!0,h.moving){const Ut=Math.atan2(u.x,u.z);h.charYaw=i2(h.charYaw,Ut,11,q)}a.rotation.y=h.charYaw;const Ht=h.speed/c.runSpeed;h.walkPhase+=q*h.speed*3.1;const Te=a.userData.parts,vt=Math.sin(h.walkPhase)*(.15+Ht*.62);for(const Ut of Te.legs)Ut.pivot.rotation.x=Ut.side<0?vt:-vt,Ut.knee.rotation.x=Math.max(0,(Ut.side<0?-vt:vt)*.8);for(const Ut of Te.arms)h.moving?(Ut.shoulder.rotation.x=Ut.side<0?-vt*.7:vt*.7,Ut.elbow.rotation.x=.08+Math.abs(vt)*.22):(Ut.shoulder.rotation.x=Math.sin(performance.now()*.0011+Ut.side)*.018,Ut.elbow.rotation.x=.18+Math.sin(performance.now()*.0013+Ut.side)*.01);const zt=Math.sin(performance.now()*.0016)*.008;Te.model.position.y=-.085+(h.moving?Math.abs(Math.sin(h.walkPhase*2))*.035*(.35+Ht):zt),Te.model.rotation.z=-u.x*.008,Te.scarfTail.rotation.x=.12+Math.sin(h.walkPhase*.8)*.12+Ht*.16,Te.model.rotation.z&&(Te.model.rotation.z*=.9);const Gt=bt&&h.moving?49.5:46;h.fov=br(h.fov,Gt,4,q),t.fov=h.fov,t.updateProjectionMatrix()}function nt(q){const wt=d.has("ShiftLeft")||d.has("ShiftRight")?4.1:2.35;B(q,s,wt);const Kt=os.halfX-.3,Ht=os.halfZ-.3;l.x=gn(l.x,-Kt,Kt),l.z=gn(l.z,-Ht,Ht),l.y=os.walkY,a.visible=!1,h.bob+=q*(h.moving?7.2+h.speed*1.2:2.2),h.fov=br(h.fov,64,5,q),t.fov=h.fov,t.updateProjectionMatrix();const Te=H();t.position.copy(Te),t.rotation.order="YXZ",t.rotation.set(h.lookPitch,h.yaw,0)}function H(){const q=h.moving&&h.mode==="first",bt=q?Math.sin(h.bob)*.022*gn(h.speed/2.4,.2,1.2):0,wt=q?Math.cos(h.bob*.5)*.008:0;return new E(l.x+wt,l.y+c.eyeHeight+bt,l.z)}function J(q){T.set(l.x,l.y+1.4,l.z);const bt=Math.cos(h.yaw),wt=-Math.sin(h.yaw);T.x+=bt*.45,T.z+=wt*.45;const Kt=Math.cos(h.orbitPitch);F.set(Math.sin(h.yaw)*Kt,Math.sin(h.orbitPitch),Math.cos(h.yaw)*Kt);const Ht=h.distance;f.set(T,F),f.far=Ht+.4;const Te=r.length?f.intersectObjects(r,!1):[];let vt=Ht;if(Te.length){const Qt=Te.find(ke=>ke.object.visible&&ke.distance>.25);Qt&&(vt=gn(Qt.distance-.28,1.05,Ht))}vt<h.currentDistance?h.currentDistance=br(h.currentDistance,vt,24,q):h.currentDistance=br(h.currentDistance,vt,3.2,q);const zt=h.currentDistance;A.set(T.x+F.x*zt,T.y+F.y*zt,T.z+F.z*zt);const Gt=l.y+.42;A.y<Gt&&(A.y=Gt),t.position.lerp(A,1-Math.exp(-16*q)),t.lookAt(T);const Ut=performance.now()*.001;t.position.x+=Math.sin(Ut*.37)*.004,t.position.y+=Math.cos(Ut*.29)*.003}function Mt(q){q=gn(q||.016,.001,.05),h.mode==="third"?(G(q),J(q)):nt(q),performance.now()}function rt(){if(h.mode==="third"){const q=Math.cos(h.orbitPitch),bt=Math.sin(h.yaw)*q,wt=Math.sin(h.orbitPitch),Kt=Math.cos(h.yaw)*q;T.set(l.x,l.y+1.4,l.z),T.x+=Math.cos(h.yaw)*.45,T.z+=-Math.sin(h.yaw)*.45,t.position.set(T.x+bt*h.distance,Math.max(l.y+.42,T.y+wt*h.distance),T.z+Kt*h.distance),t.lookAt(T),h.currentDistance=h.distance}else t.position.copy(H()),t.rotation.order="YXZ",t.rotation.set(h.lookPitch,h.yaw,0)}function At(){h.mode="first",u.set(0,0,0),l.set(os.interiorSpawn.x,os.walkY,os.interiorSpawn.z),h.yaw=.27,h.lookPitch=-.055,h.bob=0,h.speed=0,h.moving=!1,a.visible=!1,t.fov=64,t.updateProjectionMatrix(),rt()}function gt(){h.mode="third",u.set(0,0,0),l.set(0,C(0,6.4),6.4),l.y=C(l.x,l.z),h.yaw=0,h.orbitPitch=.16,h.distance=c.cameraDistance,h.currentDistance=h.distance,h.charYaw=Math.PI,a.position.copy(l),a.rotation.y=h.charYaw,a.visible=!0,t.fov=46,t.updateProjectionMatrix(),rt()}function yt(q){if(q.button===0&&h.inputEnabled){m=!0,b=q.pointerId,v=p=q.clientX,g=S=q.clientY,R=0;try{e.setPointerCapture(q.pointerId)}catch{}e.style.cursor="grabbing"}}function Rt(q){if(!m||q.pointerId!==b)return;const bt=q.clientX-v,wt=q.clientY-g;R+=Math.abs(bt)+Math.abs(wt),v=q.clientX,g=q.clientY;const Kt=q.pointerType==="touch"?.006:.0042;h.yaw-=bt*Kt,h.mode==="third"?h.orbitPitch=gn(h.orbitPitch-wt*Kt,-.12,.82):h.lookPitch=gn(h.lookPitch-wt*Kt,-1.15,1.05)}function ye(q){if(!m||b!==-1&&q.pointerId!==b)return;m=!1,b=-1,e.style.cursor="",Math.abs(q.clientX-p)+Math.abs(q.clientY-S)<6&&R<8&&o.onCanvasClick?.(q)}function we(q){if(!h.inputEnabled||h.mode!=="third")return;q.preventDefault();const bt=Math.sign(q.deltaY);h.distance=gn(h.distance+bt*.55,c.cameraMinDistance,c.cameraMaxDistance)}function en(q){if(!q)return!1;const bt=q.tagName;return bt==="INPUT"||bt==="TEXTAREA"||bt==="SELECT"||q.isContentEditable}function Z(q){en(q.target)||(n2.has(q.code)||q.code==="ShiftLeft"||q.code==="ShiftRight")&&h.inputEnabled&&(d.add(q.code),q.code.startsWith("Arrow")&&q.preventDefault())}function ce(q){d.delete(q.code)}function _t(){d.clear(),m=!1}return e.addEventListener("pointerdown",yt),window.addEventListener("pointermove",Rt),window.addEventListener("pointerup",ye),window.addEventListener("pointercancel",ye),e.addEventListener("wheel",we,{passive:!1}),window.addEventListener("keydown",Z),window.addEventListener("keyup",ce),window.addEventListener("blur",_t),e.addEventListener("contextmenu",q=>q.preventDefault()),rt(),{character:a,state:h,get mode(){return h.mode},getPosition:()=>l.clone(),getEyePosition:H,setPosition(q,bt){h.mode==="third"&&(l.x=q,l.z=bt,l.y=C(q,bt),u.set(0,0,0),a.position.copy(l),rt())},getInteractionPosition(){return h.mode==="first"?H():new E(l.x,l.y+1,l.z)},getForward(){const q=(h.mode==="first",h.yaw);return new E(-Math.sin(q),0,-Math.cos(q))},setColliders({outside:q,interior:bt,occluders:wt}={}){q&&(n=q),bt&&(s=bt),wt&&(r=wt),f.far=20},update:Mt,enterInterior:At,exitInterior:gt,setInputEnabled:O,isInputEnabled:()=>h.inputEnabled,snapCamera:rt,dispose(){e.removeEventListener("pointerdown",yt),window.removeEventListener("pointermove",Rt),window.removeEventListener("pointerup",ye),window.removeEventListener("pointercancel",ye),e.removeEventListener("wheel",we),window.removeEventListener("keydown",Z),window.removeEventListener("keyup",ce),window.removeEventListener("blur",_t)}}}function As(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Pn;let l=0;for(let u=0;u<i.length;++u){const d=i[u];let f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in d.attributes){if(!n.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(d.attributes[h]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in d.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(d.morphAttributes[h])}if(t){let h;if(e)h=d.index.count;else if(d.attributes.position!==void 0)h=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,h,u),l+=h}}if(e){let u=0;const d=[];for(let f=0;f<i.length;++f){const h=i[f].index;for(let m=0;m<h.count;++m)d.push(h.getX(m)+u);u+=i[f].attributes.position.count}c.setIndex(d)}for(const u in r){const d=Ff(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(const u in o){const d=o[u][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<d;++f){const h=[];for(let v=0;v<o[u].length;++v)h.push(o[u][v][f]);const m=Ff(h);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(m)}}}return c}function Ff(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new Wn(o,e,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const d=c/e;for(let f=0,h=u.count;f<h;f++)for(let m=0;m<e;m++){const v=u.getComponent(f,m);a.setComponent(f+d,m,v)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}const Of=new E(0,1,0),Rc=Ve.terrainSize/2,Rr=new $t(Ve.path.start.x,Ve.path.start.z),o2=new $t(Ve.path.end.x,Ve.path.end.z),Ps=new $t().subVectors(o2,Rr),a2=Ps.x*Ps.x+Ps.y*Ps.y;function Ys(i,t){const e=i-Rr.x,n=t-Rr.y,s=gn((e*Ps.x+n*Ps.y)/a2,0,1),r=Rr.x+Ps.x*s,o=Rr.y+Ps.y*s;return{t:s,px:r,pz:o,dist:Math.hypot(i-r,t-o)}}function ho(i){return{x:Rr.x+Ps.x*i,z:Rr.y+Ps.y*i}}function si(i,t){const e=Math.hypot(i,t),n=Ys(i,t),s=Math.hypot(i-Ve.well.x,t-Ve.well.z);let r=ls(15.4,30,e);r*=ls(2,4.4,n.dist),r*=ls(2.4,4.4,s);const o=(Al(i*.034+13.1,t*.034+7.7,3,5)-.5)*2.7,a=(Al(i*.12+3.7,t*.12+9.2,2,8)-.5)*.5,c=ls(17,68,e)*2.3;return r*(o*.85+c+a)}function zf(i){return i<6.1||i>19.4}const l2=-5.9,c2=5.9,u2=-4.9,h2=6.9;function ur(i,t){return i>l2&&i<c2&&t>u2&&t<h2}function ao(i){return i.x>-5.3&&i.x<5.3&&i.z>-4.4&&i.z<6.3&&i.y<6.4}const hr=[{h:0,top:"#060a12",hor:"#131a26",sun:"#6d84ab"},{h:4.5,top:"#0e1626",hor:"#2b2c3c",sun:"#b98264"},{h:6.2,top:"#3d4c68",hor:"#d99f72",sun:"#ffc98c"},{h:8.5,top:"#6d95ba",hor:"#d6ccb2",sun:"#ffe8c4"},{h:12.5,top:"#78a4cb",hor:"#e7dec7",sun:"#fff5df"},{h:16.2,top:"#6586ad",hor:"#e9c99f",sun:"#ffd99f"},{h:17.9,top:"#42506f",hor:"#e59a66",sun:"#ff9e5a"},{h:19.2,top:"#1d2438",hor:"#5d4354",sun:"#c87b56"},{h:20.8,top:"#0b101c",hor:"#242e3f",sun:"#7e93b8"},{h:24,top:"#060a12",hor:"#131a26",sun:"#6d84ab"}];function f2(i,t=0,e=null){let n=hr[0],s=hr[hr.length-1];for(let h=0;h<hr.length-1;h++)if(i>=hr[h].h&&i<=hr[h+1].h){n=hr[h],s=hr[h+1];break}const r=gn((i-n.h)/Math.max(1e-4,s.h-n.h),0,1),o=new Ot(n.top).lerp(new Ot(s.top),r),a=new Ot(n.hor).lerp(new Ot(s.hor),r),c=new Ot(n.sun).lerp(new Ot(s.sun),r);if(e){const h=new Ot(e);o.lerp(h,.07),a.lerp(h,.15)}if(t>.001){const h=new Ot("#7d8488"),m=new Ot("#a7a8a2");o.lerp(h,t*.78),a.lerp(m,t*.72)}const l=gn((i-6)/12,0,1),u=l*Math.PI,d=Math.max(.05,Math.sin(l*Math.PI)*.92),f=new E(Math.cos(u)*.95,d,Math.sin(u)*.5+.55).normalize();return{top:o,horizon:a,sun:c,sunDir:f}}function Bf(i=1,t=0){return yn(256,256,(n,s,r)=>{const o=He(i+t*37);n.clearRect(0,0,s,r);const a=s*.5,c=r*.5,l=["#f6f0dd","#eee7d0","#fbf5e4","#e2dbc2","#f2ead2","#dcd4ba"],u=["#c9c2a9","#beb79d","#d2cab0"];for(let f=0;f<18;f++){const h=o()*Bt,m=Math.pow(o(),.7)*s*.3,v=a+Math.cos(h)*m,g=c+Math.sin(h)*m*.85+s*.04,p=y(o,s*.07,s*.14);n.save(),n.translate(v,g),n.rotate(o()*Bt),n.globalAlpha=y(o,.6,.95),n.fillStyle=Ci(o,u),n.beginPath(),n.ellipse(0,0,p,p*.44,0,0,Bt),n.fill(),n.restore()}const d=62+Math.floor(o()*26);for(let f=0;f<d;f++){const h=o()*Bt,m=Math.pow(o(),.55)*s*.38,v=a+Math.cos(h)*m,g=c+Math.sin(h)*m*.88,p=y(o,s*.04,s*.1);n.save(),n.translate(v,g),n.rotate(o()*Bt),n.globalAlpha=y(o,.82,1);const S=n.createLinearGradient(-p,-p*.4,p,p*.4);S.addColorStop(0,Ci(o,l)),S.addColorStop(1,"#c6bfa5"),n.fillStyle=S,n.beginPath(),n.ellipse(0,0,p,p*y(o,.34,.48),0,0,Bt),n.fill(),n.strokeStyle="rgba(118,104,74,.28)",n.lineWidth=1,n.beginPath(),n.moveTo(-p*.85,0),n.lineTo(p*.85,0),n.stroke(),n.restore()}},{wrapS:on,wrapT:on})}function d2(i=2,t=0){return yn(256,256,(n,s,r)=>{const o=He(i+t*53);n.clearRect(0,0,s,r);const a=["#eef1da","#dde4c4","#f4f5e2","#cfd9b0","#e6ebcf","#c4cf9f"],c=r*.5;n.strokeStyle="rgba(206,196,168,.8)",n.lineWidth=2.4,n.beginPath(),n.moveTo(s*.07,c+r*.03),n.quadraticCurveTo(s*.55,c-r*.03,s*.94,c+r*.02),n.stroke();const l=26;for(let u=0;u<l;u++){const d=.14+u/l*.82,f=s*d,h=c+Math.sin(d*Math.PI*1.2)*r*.02,m=o()>.5,v=4+Math.floor(o()*5);for(let g=0;g<v;g++){const S=(m?-1:1)*(.45+o()*1)-(m?.35:-.15),R=r*(.1+o()*.2)*(1.2-d*.35);n.beginPath(),n.moveTo(f,h),n.lineTo(f+Math.cos(S)*R*.9,h+Math.sin(S)*R),n.strokeStyle=Ci(o,a),n.lineWidth=y(o,1,2.2),n.lineCap="round",n.globalAlpha=y(o,.6,1),n.stroke()}}n.globalAlpha=1},{wrapS:on,wrapT:on})}function p2(i=8,t=0){return yn(256,256,(n,s,r)=>{const o=He(i+t*17);n.clearRect(0,0,s,r),n.translate(s/2,r*.99);const a=6+t%3;for(let c=0;c<a;c++){const l=-Math.PI/2+y(o,-.9,.9),u=y(o,r*.46,r*.88),d=Math.cos(l),f=Math.sin(l),h=14,m=[];for(let v=0;v<=h;v++){const g=v/h,p=Math.sin(g*Math.PI*.8)*.18;m.push({x:d*u*g+Math.cos(l+Math.PI/2)*u*p*g,y:f*u*g+Math.sin(l+Math.PI/2)*u*p*g})}n.beginPath(),n.moveTo(0,0);for(const v of m)n.lineTo(v.x,v.y);n.strokeStyle="#d9d6bd",n.lineWidth=1.8,n.stroke();for(let v=2;v<h;v++){const g=v/h,p=m[v],S=(1-g*.66)*15,R=l+Math.PI/2;for(const b of[-1,1]){n.save(),n.translate(p.x,p.y),n.rotate(R+(b<0?.35:-.35)),n.beginPath(),n.ellipse(0,b*S*.55,S*.42,S*.85,0,0,Bt);const T=n.createLinearGradient(0,-S,0,S);T.addColorStop(0,"#f6f2dd"),T.addColorStop(1,"#cfcbaa"),n.fillStyle=T,n.globalAlpha=.95,n.fill(),n.restore()}}}},{wrapS:on,wrapT:on})}function m2(i=3,t=0){return yn(160,160,(n,s,r)=>{const o=He(i+t*29);n.clearRect(0,0,s,r);const a=["#f2efd8","#e4e4c4","#cfd4ac","#faf7e4","#bcc59a"];for(let c=0;c<78;c++){const l=s*(.12+o()*.76),u=l+y(o,-s*.3,s*.3),d=r*y(o,.02,.42),f=y(o,-16,16);n.beginPath(),n.moveTo(l,r),n.quadraticCurveTo(l+f,r*.55,u,d);const h=n.createLinearGradient(l,r,u,d);h.addColorStop(0,"rgba(120,124,86,.95)"),h.addColorStop(1,Ci(o,a)),n.strokeStyle=h,n.lineWidth=y(o,1.1,2.8),n.lineCap="round",n.globalAlpha=y(o,.75,1),n.stroke()}n.globalAlpha=1},{wrapS:on,wrapT:on})}function g2(i=9){return yn(256,256,(e,n,s)=>{const r=He(i);e.clearRect(0,0,n,s);const o=n*.5,a=s*.5,c=["#fff8f5","#fdeef0","#f8dde4","#fbe8ea","#f6d2da"];for(let l=0;l<26;l++){const u=r()*Bt,d=Math.pow(r(),.62)*n*.36,f=o+Math.cos(u)*d,h=a+Math.sin(u)*d*.85,m=y(r,n*.045,n*.085);e.save(),e.translate(f,h),e.rotate(r()*Bt),e.fillStyle=Ci(r,c),e.globalAlpha=y(r,.82,1);for(let v=0;v<5;v++)e.rotate(Bt/5),e.beginPath(),e.ellipse(0,-m*.62,m*.4,m*.62,0,0,Bt),e.fill();e.fillStyle="rgba(236,190,120,.9)",e.beginPath(),e.arc(0,0,m*.22,0,Bt),e.fill(),e.restore()}},{wrapS:on,wrapT:on})}function v2(i=4){return yn(256,256,(e,n,s)=>{const r=He(i);e.clearRect(0,0,n,s),e.strokeStyle="#ded4c2",e.lineCap="round";function o(a,c,l,u,d,f){const h=a+Math.cos(l)*u,m=c+Math.sin(l)*u;if(e.globalAlpha=gn(.35+d*.35,.3,1),e.lineWidth=d,e.beginPath(),e.moveTo(a,c),e.quadraticCurveTo(a+Math.cos(l+.18)*u*.55,c+Math.sin(l+.18)*u*.55,h,m),e.stroke(),f<=0||d<.7)return;const v=2+(r()>.55?1:0);for(let g=0;g<v;g++){const p=l+y(r,-.7,.7);o(h,m,p,u*y(r,.45,.72),d*.62,f-1)}}for(let a=0;a<6;a++){const c=n*.5+y(r,-n*.16,n*.16);o(c,s*.96,-Math.PI*.5+y(r,-.75,.75),y(r,s*.2,s*.33),y(r,2,3.2),3)}e.globalAlpha=1},{wrapS:on,wrapT:on})}function _2(i=17){return yn(512,512,(e,n,s)=>{const r=He(i);e.fillStyle="#eef3f6",e.fillRect(0,0,n,s);for(let o=0;o<90;o++){const a=r()*n,c=r()*s,l=y(r,20,120),u=e.createRadialGradient(a,c,0,a,c,l),d=r(),f=d>.6?"214,225,234":d>.3?"255,255,255":"198,213,224";u.addColorStop(0,`rgba(${f},${y(r,.15,.4)})`),u.addColorStop(1,`rgba(${f},0)`),e.fillStyle=u,e.fillRect(a-l,c-l,l*2,l*2)}for(let o=0;o<120;o++)e.fillStyle=r()>.5?"rgba(150,140,120,.10)":"rgba(110,100,80,.08)",e.beginPath(),e.ellipse(r()*n,r()*s,y(r,1,4),y(r,.5,2),r()*Bt,0,Bt),e.fill();for(let o=0;o<500;o++)e.fillStyle=`rgba(255,255,255,${y(r,.15,.6)})`,e.fillRect(r()*n,r()*s,1,1);li(e,n,s,r,.02)},{repeat:[18,18]})}function x2(i=71){const e=yn(512,512,(n,s,r)=>{const o=He(i);n.clearRect(0,0,s,r),n.fillStyle="rgba(255,255,255,1)",n.fillRect(0,0,s,r);for(let v=0;v<150;v++){const g=o()*s,p=o()*r,S=y(o,s*.015,s*.1),R=n.createRadialGradient(g,p,0,g,p,S);R.addColorStop(0,`rgba(0,0,0,${y(o,.12,.5)})`),R.addColorStop(.6,`rgba(0,0,0,${y(o,.04,.2)})`),R.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=R,n.beginPath(),n.ellipse(g,p,S,S*y(o,.5,1),o()*Bt,0,Bt),n.fill()}const a=(v,g)=>[(v/Ve.terrainSize+.5)*s,(g/Ve.terrainSize+.5)*r],c=[{width:3.1,alpha:.5},{width:2.1,alpha:.35}];for(const v of c){n.strokeStyle=`rgba(0,0,0,${v.alpha})`,n.lineWidth=v.width/Ve.terrainSize*s,n.lineCap="round",n.beginPath();for(let g=0;g<=24;g++){const p=g/24,S=ho(p),[R,b]=a(S.x,S.z);g===0?n.moveTo(R,b):n.lineTo(R,b)}n.stroke()}const[l,u]=a(Ve.well.x,Ve.well.z),d=n.createRadialGradient(l,u,0,l,u,2.4/Ve.terrainSize*s);d.addColorStop(0,"rgba(0,0,0,.4)"),d.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=d,n.beginPath(),n.arc(l,u,2.4/Ve.terrainSize*s,0,Bt),n.fill();const[f,h]=a(Ve.spawn.x,Ve.spawn.z),m=n.createRadialGradient(f,h,0,f,h,9/Ve.terrainSize*s);m.addColorStop(0,"rgba(0,0,0,.12)"),m.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=m,n.beginPath(),n.arc(f,h,9/Ve.terrainSize*s,0,Bt),n.fill()},{srgb:!1,wrapS:on,wrapT:on});return e.flipY=!1,e.needsUpdate=!0,e}function ms(i,t,e){const n=i.length,s=[],r=[],o=[],a=[],c=[];for(let h=0;h<n;h++){const m=new E;h===0?m.subVectors(i[1],i[0]):h===n-1?m.subVectors(i[h],i[h-1]):m.subVectors(i[h+1],i[h-1]),m.lengthSq()<1e-9&&m.set(0,1,0),c.push(m.normalize())}let l=null;for(let h=0;h<n;h++){const m=c[h];let v;if(l)v=l.clone(),v.addScaledVector(m,-v.dot(m)),v.lengthSq()<1e-9&&v.set(1,0,0),v.normalize();else{const p=Math.abs(m.y)>.92?new E(1,0,0):new E(0,1,0);v=new E().crossVectors(m,p).normalize()}l=v;const g=new E().crossVectors(m,v).normalize();for(let p=0;p<e;p++){const S=p/e*Bt,R=Math.cos(S),b=Math.sin(S),T=v.x*R+g.x*b,A=v.y*R+g.y*b,F=v.z*R+g.z*b,M=t[h];s.push(i[h].x+T*M,i[h].y+A*M,i[h].z+F*M),r.push(T,A,F),o.push(p/e,h/(n-1))}}for(let h=0;h<n-1;h++)for(let m=0;m<e;m++){const v=(m+1)%e,g=h*e+m,p=h*e+v,S=(h+1)*e+v,R=(h+1)*e+m;a.push(g,p,R,p,S,R)}const u=new Pn;u.setAttribute("position",new an(s,3)),u.setAttribute("normal",new an(r,3)),u.setAttribute("uv",new an(o,2)),u.setIndex(a);let d=0;const f=u.attributes.uv;for(let h=0;h<n;h++){h>0&&(d+=i[h].distanceTo(i[h-1]));for(let m=0;m<e;m++)f.setY(h*e+m,d*.55)}return u}function Ru(i){i.computeVertexNormals();const t=i.attributes.normal;let e=0;for(let n=0;n<t.count;n++)e+=t.getY(n);if(e<0){const n=i.index;if(n){for(let s=0;s<n.count;s+=3){const r=n.getX(s);n.setX(s,n.getX(s+1)),n.setX(s+1,r)}i.computeVertexNormals()}}return i}function Pc(i,t){const e=i.attributes.position.count,n=new Float32Array(e*3);for(let s=0;s<e;s++)n[s*3]=t.r,n[s*3+1]=t.g,n[s*3+2]=t.b;return i.setAttribute("color",new Wn(n,3)),i}function sl(i){const t=[];for(const e of i)!e||!e.attributes||!e.attributes.position||e.attributes.position.count===0||t.push(e.index?e.toNonIndexed():e);return t}function Tr(i,t=0){const e=new bo(1,t),n=e.attributes.position,s=new Map,r=new E,o=i*13.37+5;for(let a=0;a<n.count;a++){r.fromBufferAttribute(n,a);const c=`${r.x.toFixed(3)}|${r.y.toFixed(3)}|${r.z.toFixed(3)}`;let l=s.get(c);if(!l){const u=Au(r.x*2.3+o,r.y*2.7+r.z*1.9+o*3)-.5,d=Au(r.x*5.1+4,r.z*5.3+r.y*3.1+o)-.5,f=1+u*.5+d*.18;let h=r.y*(1+d*.35)*f;h<-.5&&(h=-.5-(h+.5)*.3),l=new E(r.x*f,h,r.z*(f-u*.12)),s.set(c,l)}n.setXYZ(a,l.x,l.y,l.z)}return e.computeVertexNormals(),e}function kf(i=901){const t=Tr(i,0),e=t.attributes.position;let n=1/0;for(let s=0;s<e.count;s++)n=Math.min(n,e.getY(s));for(let s=0;s<e.count;s++)e.setY(s,(e.getY(s)-n)*.92-.06);return t.computeVertexNormals(),t}function M2(i,t=7,e=1,n=.82,s=1){const r=[];for(let m=0;m<t;m++)r.push(m/t*Bt+y(i,-.14,.14)*(Bt/t));const o=[],a=[],c=[],l=s*.5,u=-s*.5;o.push(0,l,0),a.push(.5,.5);for(let m=0;m<t;m++){const v=e*y(i,.82,1.12),g=r[m],p=Math.cos(g)*v,S=Math.sin(g)*v;o.push(p,l,S),a.push(p*.35+.5,S*.35+.5)}for(let m=0;m<t;m++){const v=n*y(i,.82,1.15),g=r[m],p=Math.cos(g)*v,S=Math.sin(g)*v;o.push(p,u,S),a.push(p*.35+.5,S*.35+.5)}const d=1,f=1+t;for(let m=0;m<t;m++){const v=(m+1)%t;c.push(0,d+m,d+v),c.push(d+m,f+m,f+v),c.push(d+m,f+v,d+v)}const h=new Pn;return h.setAttribute("position",new an(o,3)),h.setAttribute("uv",new an(a,2)),h.setIndex(c),Ru(h)}function rl(i=3,t=1,e=1,n=!1){const s=[];for(let r=0;r<i;r++){const o=new ii(t,e);n&&o.translate(0,e*.5,0),o.rotateY(r/i*Math.PI),s.push(o)}return As(s,!1)}function wr(i,t,e={}){const n=e.amount??1,s=e.ground?1:0,r=`nature-wind-${e.key??"x"}`;return i.onBeforeCompile=o=>{o.uniforms.uTime=t.uTime,o.uniforms.uWind=t.uWind,o.vertexShader=`uniform float uTime;
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
      transformed.x += sin(uTime * 2.35 + transformed.y * 2.7 + nPhase) * 0.035 * uWind * nAmt * ${s?"0.0":"1.0"};`)},i.customProgramCacheKey=()=>r,i}function y2({scene:i,callbacks:t={}}={}){const e=new Je;e.name="nature",i&&i.add(e);const n={uTime:{value:0},uWind:{value:1}},s=new $n,r=new Ot,o=Tx({seed:31,repeat:[14,14]}),a=Ex({seed:44,repeat:[1,1]}),c=Cl({seed:11,repeat:[1,1]}),l=Cl({seed:23,repeat:[1,1]}),u=Cu({seed:21}),d=Cu({seed:33,base:"#c7c1b2",dark:"#776f61",light:"#ece7da"}),f=Es({seed:7,planks:4,base:"#6a4b2d",light:"#a38050",dark:"#33200f"}),h=zd({seed:15}),m=Bf(5,0),v=Bf(8,1),g=d2(3,0),p=g2(9),S=v2(4),R=_2(17),b=x2(71),T=Ax({size:128,seed:5,tint:"#d8d0b4"}),A=Cx({size:64,color:"#f3c9d1"}),F=p2(8,0),M=m2(3,0),C=Ir({size:128,color:"255,236,190"}),O=Ix({size:256,seed:41}),B=new sn({map:o,color:16777215,roughness:.96,metalness:0,vertexColors:!0}),G=new sn({map:a,color:12168082,roughness:.94,metalness:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),nt=new sn({map:c,color:11051668,roughness:.92,metalness:0,vertexColors:!1,side:Bn}),H=nt.clone();H.vertexColors=!0;const J=new sn({map:l,color:10328204,roughness:.94,metalness:0}),Mt=new sn({map:u,color:11837572,roughness:.93,metalness:0}),rt=new sn({map:d,color:9866621,roughness:.88,metalness:0}),At=new sn({map:f,color:11044703,roughness:.86,metalness:0}),gt=new sn({map:f,color:8546635,roughness:.9,metalness:0}),yt=new sn({map:h,color:11904142,roughness:.92,metalness:0}),Rt=wr(new sn({map:m,alphaTest:.38,side:Bn,roughness:.82,metalness:0,emissive:new Ot("#241505"),emissiveIntensity:.46}),n,{key:"leaf",amount:1}),ye=wr(new sn({map:v,alphaTest:.38,side:Bn,roughness:.84,metalness:0,emissive:new Ot("#1f1408"),emissiveIntensity:.42}),n,{key:"leafb",amount:1.08}),we=wr(new sn({map:g,alphaTest:.34,side:Bn,roughness:.86,metalness:0,emissive:new Ot("#0c1206"),emissiveIntensity:.25}),n,{key:"pine",amount:.7}),en=wr(new sn({map:p,alphaTest:.3,side:Bn,roughness:.78,metalness:0,emissive:new Ot("#2a1519"),emissiveIntensity:.42}),n,{key:"blossom",amount:1}),Z=wr(new sn({map:S,alphaTest:.3,side:Bn,roughness:.9,metalness:0}),n,{key:"twig",amount:.55}),ce=wr(new sn({map:F,alphaTest:.42,side:Bn,roughness:.88,metalness:0}),n,{key:"fern",amount:1.7,ground:!0}),_t=wr(new sn({map:M,alphaTest:.32,side:Bn,roughness:.9,metalness:0}),n,{key:"grass",amount:2.1,ground:!0}),q=new sn({map:T,alphaTest:.4,side:Bn,roughness:.92,metalness:0}),bt=new sn({color:6253628,roughness:1,metalness:0}),wt=new sn({color:15331316,roughness:.82,metalness:0}),Kt=new sn({map:R,alphaMap:b,transparent:!0,depthWrite:!1,roughness:.86,metalness:0,color:16777215,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),Ht=new sn({color:1910054,roughness:.03,metalness:.72,envMapIntensity:1.5,transparent:!0,opacity:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),Te=new sn({color:1581087,roughness:.07,metalness:.4,map:O}),vt=new sn({color:10125396,roughness:.95,metalness:0}),zt=new sn({color:3813156,roughness:.85,metalness:0});let Gt=null;function Ut(x){const et=x.weather||"clear";let Y=x.overcast??0;et==="rain"?Y=Math.max(Y,.78):et==="storm"?Y=Math.max(Y,.9):et==="fog"?Y=Math.max(Y,.6):et==="snow"&&(Y=Math.max(Y,.45));const k=Cc[x.season]?.tint,pt=f2(x.hour??17.2,Y,k),$=Bd("#"+pt.top.getHexString(),"#"+pt.horizon.getHexString(),"#"+pt.sun.getHexString(),pt.sunDir);$.mapping=ol;const ft=Gt;Gt=$,Ht.envMap=$,Ht.needsUpdate=!0,Te.envMap=$,Te.needsUpdate=!0,B.envMap=$,B.needsUpdate=!0,G.envMap=$,G.needsUpdate=!0,nt.envMap=$,H.envMap=$,J.envMap=$;for(const mt of[nt,H,J])mt.needsUpdate=!0,mt.envMapIntensity=0;return ft&&ft.dispose(),pt}function Qt(){const Y=[],k=[],pt=[];Y.push(0,si(0,0),0),k.push(.5,.5);for(let Pt=1;Pt<=40;Pt++){const st=Rc*Math.pow(Pt/40,1.35);for(let xt=0;xt<100;xt++){const kt=xt/100*Bt,he=Math.cos(kt)*st,ze=Math.sin(kt)*st;Y.push(he,si(he,ze),ze),k.push(he/(Rc*2)+.5,ze/(Rc*2)+.5)}}for(let Pt=0;Pt<100;Pt++)pt.push(0,1+Pt,1+(Pt+1)%100);for(let Pt=1;Pt<40;Pt++){const st=1+(Pt-1)*100,xt=1+Pt*100;for(let kt=0;kt<100;kt++){const he=(kt+1)%100;pt.push(st+kt,xt+kt,st+he),pt.push(st+he,xt+kt,xt+he)}}const $=new Pn;$.setAttribute("position",new an(Y,3)),$.setAttribute("uv",new an(k,2)),$.setIndex(pt),Ru($);const ft=$.attributes.position.count,mt=new Float32Array(ft*3);for(let Pt=0;Pt<ft;Pt++){const st=$.attributes.position.getX(Pt),xt=$.attributes.position.getZ(Pt),kt=Al(st*.13+5.1,xt*.13+2.4,2,9),he=ls(.52,.78,Al(st*.06+1.7,xt*.06+8.9,2,4)),ze=.9+kt*.2;mt[Pt*3]=ze*(1-he*.12),mt[Pt*3+1]=ze*1.02*(1+he*.02),mt[Pt*3+2]=ze*.92*(1-he*.18)}return $.setAttribute("color",new Wn(mt,3)),$}const ke=Qt(),Le=new Ne(ke,B);Le.name="forest-floor",Le.receiveShadow=!0,e.add(Le);const ut=ke.clone();{const x=ut.attributes.position;for(let et=0;et<x.count;et++)x.setY(et,x.getY(et)+.022);ut.computeVertexNormals(),ut.computeBoundingSphere()}const Jt=new Ne(ut,Kt);Jt.name="snow-cover",Jt.receiveShadow=!0,Jt.visible=!1,Jt.renderOrder=2,e.add(Jt);const N=new Je;N.name="path",e.add(N);function Zt(){const et=[],Y=[],k=[],pt=He(404),$=Ve.path.start.z-.4,ft=Ve.path.end.z+.9,mt=Ve.path.width+.55;for(let st=0;st<=26;st++){const xt=st/26,kt=Yi($,ft,xt),he=Ys(0,kt),ze=y(pt,-.16,.18),cn=y(pt,-.16,.18),Sn=he.px;et.push(Sn-mt/2+ze,.012,kt),et.push(Sn+mt/2+cn,.012,kt),Y.push(0,xt*(ft-$)*.5),Y.push(1,xt*(ft-$)*.5)}for(let st=0;st<26;st++){const xt=st*2;k.push(xt,xt+2,xt+1),k.push(xt+1,xt+2,xt+3)}const Pt=new Pn;return Pt.setAttribute("position",new an(et,3)),Pt.setAttribute("uv",new an(Y,2)),Pt.setIndex(k),Ru(Pt),Pt}const fe=new Ne(Zt(),G);fe.receiveShadow=!0,fe.name="path-base",N.add(fe);const P=[],_=[];{const x=He(913),et=[];let Y=Ve.path.start.z+.15,k=0;for(;Y<Ve.path.end.z+.5&&k++<200;){const mt=Ys(0,Y),Pt=x()<.55?2:1;for(let st=0;st<Pt;st++){const xt=mt.px+y(x,-.52,.52)+(st===0?-.24:.26),kt=Y+y(x,-.14,.14),he=y(x,.3,.5);let ze=!0;for(const bi of et)if(Math.hypot(bi.x-xt,bi.z-kt)<(bi.r+he)*.72){ze=!1;break}if(!ze)continue;const cn=y(x,.07,.12),Sn=M2(x,6+Math.floor(x()*3),he,he*y(x,.7,.9),cn),nn=.012+cn*.5-y(x,.01,.035);Sn.rotateY(x()*Bt),Sn.scale(y(x,.78,1.25),1,y(x,.62,1.05));const Si=y(x,.78,1.12),qi=new Ot().setRGB(Si*.98,Si*.97,Si*.93);Pc(Sn,qi),Sn.translate(xt,nn,kt),_.push(Sn),et.push({x:xt,z:kt,r:he}),P.push({x:xt,z:kt,r:he,topY:nn+cn*.5,tone:Si})}Y+=y(x,.42,.66)}const pt=[];for(let mt=0;mt<46;mt++){const Pt=x(),st=ho(Pt),xt=st.x+y(x,-1,1),kt=st.z+y(x,-.4,.4),he=y(x,.05,.13),ze=Tr(300+mt,0);ze.scale(he,he*.66,he*y(x,.8,1.2)),ze.rotateY(x()*Bt),Pc(ze,new Ot().setRGB(.62,.6,.55)),ze.translate(xt,si(xt,kt)+he*.12,kt),pt.push(ze)}_.push(...pt);const $=As(sl(_),!1);if(!$)throw new Error("nature: flagstone merge failed");const ft=new Ne($,H);ft.castShadow=!0,ft.receiveShadow=!0,ft.name="flagstones",N.add(ft)}const K=rl(3,1,1),ht=rl(2,1.9,.75),Tt=rl(3,1,1,!0),jt=rl(2,1,1,!0),qt=new ii(1,1),Et=[],Dt=[],oe=[],Ue=[],ie=[],Ft=[],Ee=[],Se=[];function Xe(x,{birch:et=!1,near:Y=!0,scale:k=1,compact:pt=!1,worldMatrix:$=null}={}){const ft=[],mt=[],Pt=(et?y(x,14.6,18.4):y(x,13,16.8))*k,st=(et?y(x,.2,.28):y(x,.36,.54))*k,xt=Y?7:5,kt=x()*Bt,he=y(x,.06,.28)*Pt*.26,ze=y(x,-.07,.07)*Pt,cn=Pt*(et?.64:.55),Sn=Y?4:3,nn=[],Si=[];for(let ri=0;ri<=Sn;ri++){const Tn=ri/Sn,Kn=Math.cos(kt)*he*Tn*Tn+Math.sin(kt)*ze*Math.sin(Tn*Math.PI)*.5,fi=Math.sin(kt)*he*Tn*Tn-Math.cos(kt)*ze*Math.sin(Tn*Math.PI)*.5;nn.push(new E(Kn,cn*Tn,fi)),Si.push(Yi(st,st*.46,Math.pow(Tn,.82)))}if(ft.push(ms(nn,Si,xt)),Y){const ri=3+Math.floor(x()*2);for(let Tn=0;Tn<ri;Tn++){const Kn=Tn/ri*Bt+y(x,-.4,.4),fi=y(x,.8,1.7)*k,Jn=new E(0,st*.75,0),wi=new E(Math.cos(Kn)*fi*.5,st*.2,Math.sin(Kn)*fi*.5),Ze=new E(Math.cos(Kn)*fi,-.1,Math.sin(Kn)*fi);ft.push(ms([Jn,wi,Ze],[st*.4,st*.18,.03],4))}}const qi=nn[nn.length-1].clone(),bi=et?3+Math.floor(x()*2):4+Math.floor(x()*2),Os=(et?y(x,2,3.1):y(x,3.3,4.8))*k*(pt?.82:1),vi=(et?1.05:1.42)*(Y?1:1.12),Ss=Y?3:2;for(let ri=0;ri<bi;ri++){const Tn=ri/bi*Bt+y(x,-.4,.4)+kt,Kn=Os*y(x,.55,1),fi=Pt*y(x,et?.2:.16,.34)*(pt?1.18:1),Jn=qi.clone(),wi=Jn.clone().add(new E(Math.cos(Tn)*Kn*.4,fi*.52,Math.sin(Tn)*Kn*.4)),Ze=Jn.clone().add(new E(Math.cos(Tn)*Kn,fi,Math.sin(Tn)*Kn));ft.push(ms([Jn,wi,Ze],[st*.36,st*.17,.014*k],xt)),mt.push({p:Ze.clone(),s:vi*y(x,1,1.3)});for(let un=0;un<Ss;un++){const Qn=y(x,.3,.92),hs=Jn.clone().lerp(Ze,Qn),gr=Tn+(un%2===0?1:-1)*y(x,.45,1.2),nr=y(x,1,2.3)*k*(1-Qn*.25),xa=y(x,.18,.75),Jd=hs.clone().add(new E(Math.cos(gr)*nr*.45,xa*nr*.4,Math.sin(gr)*nr*.45)),Ma=hs.clone().add(new E(Math.cos(gr)*nr,xa*nr,Math.sin(gr)*nr));if(ft.push(ms([hs,Jd,Ma],[st*.13,st*.06,.01],Y?xt-1:4)),mt.push({p:Ma.clone(),s:vi*y(x,.85,1.15)}),Y){const hh=gr+y(x,-.7,.7),Wl=y(x,.5,1.1)*k,fh=Ma.clone().add(new E(Math.cos(hh)*Wl,y(x,.2,.6)*Wl,Math.sin(hh)*Wl));ft.push(ms([Ma,fh],[st*.05,.006],3)),mt.push({p:fh.clone(),s:vi*y(x,.7,1)})}}}if(!et){const ri=Y?3:2;for(let Tn=0;Tn<ri;Tn++){const Kn=x()*Bt,fi=cn*y(x,.42,.68),Jn=fi/Pt,wi=new E(Math.cos(kt)*he*Jn*Jn,fi,Math.sin(kt)*he*Jn*Jn),Ze=Os*y(x,.4,.7),un=Ze*y(x,.35,.7),Qn=wi.clone().add(new E(Math.cos(Kn)*Ze,un,Math.sin(Kn)*Ze));$&&ao(Qn.clone().applyMatrix4($))||(ft.push(ms([wi,Qn],[st*.16,.008],Y?5:3)),mt.push({p:Qn.clone(),s:vi*y(x,.8,1.1)}))}}const us=Math.round((et?84:122)*(Y?1:.85)*k*(pt?.86:1)),Bi=qi.clone().add(new E(0,Pt*.2,0)),er=Os*1.2;let ns=0;for(;mt.length<us&&ns++<us*12;){const ri=x()*Bt,Tn=Math.pow(x(),.62)*er,Kn=Bi.y+y(x,-Pt*.18,Pt*.36)*(1-Tn/er*.25);Kn<qi.y-Pt*.1||mt.push({p:new E(Bi.x+Math.cos(ri)*Tn,Kn,Bi.z+Math.sin(ri)*Tn),s:vi*y(x,.7,1.15)})}return{geos:ft,foliage:mt,height:Pt,trunkR:st}}function Q(x,{near:et=!0,scale:Y=1}={}){const k=[],pt=[],$=[],ft=y(x,13,17.2)*Y,mt=y(x,.28,.42)*Y,Pt=x()*Bt,st=y(x,.02,.09)*ft*.32,xt=et?4:3,kt=[],he=[];for(let Sn=0;Sn<=xt;Sn++){const nn=Sn/xt;kt.push(new E(Math.cos(Pt)*st*nn*nn,ft*nn,Math.sin(Pt)*st*nn*nn)),he.push(Yi(mt,.028,Math.pow(nn,.72)))}k.push(ms(kt,he,et?6:5));const ze=et?9:7;for(let Sn=0;Sn<ze;Sn++){const nn=.22+Sn/Math.max(1,ze-1)*.74+y(x,-.028,.028),Si=ft*nn,qi=Math.cos(Pt)*st*nn*nn,bi=Math.sin(Pt)*st*nn*nn,Os=((1-nn)*2.7+.8)*Y;let vi=et?6:5;x()<.3&&(vi+=1),x()<.18&&(vi-=1);for(let Ss=0;Ss<vi;Ss++){const us=Ss/vi*Bt+Sn*.58+y(x,-.2,.2),Bi=Os*y(x,.62,1.05),er=y(x,-.32,.06),ns=new E(qi,Si,bi),ri=ns.clone().add(new E(Math.cos(us)*Bi*.5,er*.45+.1,Math.sin(us)*Bi*.5)),Tn=ns.clone().add(new E(Math.cos(us)*Bi,er+Bi*.1,Math.sin(us)*Bi));k.push(ms([ns,ri,Tn],[mt*.16,mt*.075,.008],et?4:3));const Kn=et?2:1;for(let Jn=0;Jn<Kn;Jn++){const wi=y(x,.42,.82),Ze=ns.clone().lerp(Tn,wi),un=us+(Jn%2===0?1:-1)*y(x,.45,1),Qn=Bi*y(x,.22,.42),hs=Ze.clone().add(new E(Math.cos(un)*Qn,y(x,-.12,.1),Math.sin(un)*Qn));k.push(ms([Ze,hs],[mt*.055,.006],3)),pt.push({p:hs.clone().add(new E(0,.04,0)),s:y(x,.75,1.15)*Y,rx:y(x,.05,.4),ry:-un+y(x,-.1,.1),rz:y(x,-.18,.18),order:"YXZ"})}const fi=et?3:2;for(let Jn=0;Jn<fi;Jn++){const wi=.38+Jn/fi*.62,Ze=ns.clone().lerp(Tn,wi);Ze.y+=.06+wi*.05,pt.push({p:Ze,s:y(x,.85,1.25)*Y*(1.1-wi*.2),rx:y(x,.04,.3),ry:-us+y(x,-.12,.12),rz:y(x,-.16,.16),order:"YXZ"})}x()<.5&&$.push({p:Tn.clone().add(new E(0,.02,0)),s:y(x,.12,.2)*Y})}}const cn=Math.round((et?52:26)*Y);for(let Sn=0;Sn<cn;Sn++){const nn=y(x,.28,.99),Si=x()*Bt,qi=ft*nn,bi=((1-nn)*2.6+.4)*Y*y(x,.2,.9);pt.push({p:new E(Math.cos(Pt)*st*nn*nn+Math.cos(Si)*bi,qi+y(x,-.22,.22),Math.sin(Pt)*st*nn*nn+Math.sin(Si)*bi),s:y(x,.66,1.05)*Y,rx:y(x,.1,.55),ry:-Si+y(x,-.35,.35),rz:y(x,-.22,.22),order:"YXZ"})}return{geos:k,foliage:pt,snowTips:$,height:ft,trunkR:mt}}const Yt=He(501);for(const x of Ve.trees)Se.push({x:x.x,z:x.z,type:x.type,scale:x.scale,fixed:!0});const Nt=[{x:-8.9,z:-8.7,type:"oak",scale:1.18},{x:8.1,z:-9.9,type:"birch",scale:1.06},{x:-4.9,z:-14.2,type:"oak",scale:1}];for(const x of Nt)Se.push({...x,fixed:!0});function _e(x,et){if(Math.abs(x)<6.7&&et>-7.6&&et<21.5||Math.hypot(x-Ve.well.x,et-Ve.well.z)<4.3)return!0;const Y=Ys(x,et);return Y.dist<3.4&&Y.t>-.02&&Y.t<1.02}function be(x,et){for(const Y of Se)if(Math.hypot(Y.x-x,Y.z-et)<3.5)return!1;return!0}const Vt=[{count:14,rMin:14.5,rMax:22.5},{count:13,rMin:23,rMax:34},{count:9,rMin:35,rMax:52}];for(const x of Vt){let et=0,Y=0;for(;et<x.count&&Y++<600;){const k=Yt()*Bt,pt=y(Yt,x.rMin,x.rMax),$=Math.cos(k)*pt,ft=Math.sin(k)*pt;if(_e($,ft)||!be($,ft))continue;const mt=Yt(),Pt=mt<.48?"oak":mt<.82?"birch":"pine";Se.push({x:$,z:ft,type:Pt,scale:y(Yt,.92,1.32)}),et++}}const Oe=[],Ie=[],vn=[],ae=[];for(const x of Se){const et=Math.hypot(x.x,x.z)<27,Y=si(x.x,x.z)-.12,k=Yt()*Bt,pt=new xn().compose(new E(x.x,Y,x.z),new Ms().setFromAxisAngle(Of,k),new E(1,1,1)),$=He(Math.floor((x.x*97+x.z*131+1e3)*7+11)),ft=x.type==="pine"?Q($,{near:et,scale:x.scale}):Xe($,{birch:x.type==="birch",near:et,scale:x.scale,compact:!!x.fixed&&x.z>4,worldMatrix:pt});for(const st of ft.geos){st.applyMatrix4(pt);const xt=x.type==="birch";et?(xt?Ie:Oe).push(st):(xt?ae:vn).push(st)}const mt=new E,Pt=x.type==="pine";for(const st of ft.foliage){if(mt.copy(st.p).applyMatrix4(pt),ao(mt))continue;let xt;Pt?xt={pos:mt.clone(),s:st.s,sx:st.s*y($,.88,1.08),sy:st.s,rx:(st.rx||0)+y($,-.06,.06),ry:st.ry??$()*Bt,rz:(st.rz||0)+y($,-.05,.05),order:st.order,shade:y($,.75,1.1)}:xt={pos:mt.clone(),s:st.s,sx:st.s*y($,.95,1.32),sy:st.s*y($,.78,1.02),ry:$()*Bt,rx:y($,-.32,.32),rz:y($,-.26,.26),shade:y($,.78,1.16)},Pt?Dt.push(xt):Et.push(xt)}if(Pt)for(const st of ft.snowTips||[])mt.copy(st.p).applyMatrix4(pt),!ao(mt)&&ie.push({pos:mt.clone(),s:st.s*y($,.9,1.2),ry:$()*Bt,sy:y($,.03,.05),shade:y($,.92,1.04)});else{for(let xt=0;xt<ft.foliage.length;xt++){if(xt%4===3)continue;const kt=ft.foliage[xt];mt.copy(kt.p).applyMatrix4(pt),!ao(mt)&&Ue.push({pos:mt.clone(),s:kt.s*y($,1.05,1.4),ry:$()*Bt,rx:y($,-.3,.3),rz:y($,-.25,.25),shade:y($,.8,1.15)})}if((et?!0:$()<.5)&&$()<.5)for(let xt=0;xt<ft.foliage.length;xt++){const kt=ft.foliage[xt];$()<.18||(mt.copy(kt.p).applyMatrix4(pt),!ao(mt)&&oe.push({pos:mt.clone(),s:kt.s*y($,.85,1.15),ry:$()*Bt,rx:y($,-.3,.3),rz:y($,-.25,.25),shade:y($,.85,1.12)}))}for(let xt=0;xt<ft.foliage.length;xt+=3){if($()<.25)continue;const kt=ft.foliage[xt];mt.copy(kt.p).applyMatrix4(pt),!ao(mt)&&ie.push({pos:mt.clone().add(new E(0,.04,0)),s:kt.s*y($,.1,.17),ry:$()*Bt,sy:y($,.03,.05),shade:y($,.92,1.04)})}}if(et){const st=ft.trunkR+.28;Ee.push({minX:x.x-st,maxX:x.x+st,minZ:x.z-st,maxZ:x.z+st,name:"tree"})}}function fn(x,et,Y={}){if(!x.length)return null;const k=As(sl(x),!1);if(!k)return console.warn("nature: merge failed for",Y.name||"mesh"),null;const pt=new Ne(k,et);return pt.castShadow=Y.castShadow??!0,pt.receiveShadow=Y.receiveShadow??!0,pt.name=Y.name||"merged",e.add(pt),pt}const gi=fn(Oe,Mt,{name:"trunks-near"}),z=fn(Ie,rt,{name:"trunks-birch-near"});fn(vn,Mt,{name:"trunks-far",castShadow:!1}),fn(ae,rt,{name:"trunks-birch-far",castShadow:!1});function V(x,et,Y,k={}){const pt=new hl(x,et,Y.length);pt.castShadow=k.castShadow??!1,pt.receiveShadow=k.receiveShadow??!1,pt.frustumCulled=!1,pt.name=k.name||"instanced";const $=new $n;for(let ft=0;ft<Y.length;ft++){const mt=Y[ft];$.position.copy(mt.pos),$.rotation.order=mt.order||"XYZ",$.rotation.set(mt.rx||0,mt.ry||0,mt.rz||0);const Pt=mt.s??1;$.scale.set(mt.sx??Pt,mt.sy??Pt,mt.sz??Pt),$.updateMatrix(),pt.setMatrixAt(ft,$.matrix)}return pt.instanceMatrix.needsUpdate=!0,e.add(pt),pt}const I=V(K,Rt,Et.filter((x,et)=>et%2===0),{name:"canopy-a"}),U=V(K,ye,Et.filter((x,et)=>et%2===1),{name:"canopy-b"}),D=V(ht,we,Dt,{name:"pine-needles"}),X=V(K,en,oe,{name:"blossom"}),at=V(K,Z,Ue,{name:"winter-twigs"}),Lt=V(kf(801),wt,ie,{name:"branch-snow"}),se=[],me=[];let re=null,Wt=null;{const x=He(3301),et=[];for(let $=0;$<84;$++){const ft=x()*Bt,mt=y(x,42,76),Pt=Math.cos(ft)*mt,st=Math.sin(ft)*mt,xt=y(x,11,20),kt=si(Pt,st)-.4;et.push({pos:new E(Pt,kt+xt/2,st),sx:y(x,.9,1.7),sy:xt,sz:y(x,.9,1.7),ry:x()*Bt});const he=3+Math.floor(x()*2);for(let ze=0;ze<he;ze++)se.push({pos:new E(Pt+y(x,-2.4,2.4),kt+xt*y(x,.64,1.02),st+y(x,-2.4,2.4)),s:y(x,3.2,6.2),ry:x()*Bt,rx:y(x,-.2,.2),rz:y(x,-.2,.2),shade:y(x,.5,.8)})}for(let $=0;$<104;$++){const ft=x()*Bt,mt=y(x,28,44),Pt=Math.cos(ft)*mt,st=Math.sin(ft)*mt,xt=si(Pt,st);me.push({pos:new E(Pt,xt+y(x,6.5,19),st),s:y(x,4.2,7.4),ry:x()*Bt,rx:y(x,-.18,.18),rz:y(x,-.18,.18),shade:y(x,.4,.66)})}const Y=new ti(.34,.62,1,5),k=new sn({color:4602671,roughness:1});V(Y,k,et,{name:"far-trunks"});const pt=[];for(let $=0;$<55;$++){const ft=x()*Bt,mt=y(x,26,44),Pt=Math.cos(ft)*mt,st=Math.sin(ft)*mt,xt=y(x,10,19),kt=si(Pt,st)-.3;pt.push({pos:new E(Pt,kt+xt/2,st),sx:y(x,.5,1.1),sy:xt,sz:y(x,.5,1.1),ry:x()*Bt})}V(Y,k,pt,{name:"mid-trunks"}),re=V(K,ye,se,{name:"far-canopy"}),Wt=V(K,ye,me,{name:"mid-canopy-wall"})}const Ct=[],ue=[],De=[{x:-4.7,z:11.7,rot:.42,len:3.7,r:.27},{x:7.9,z:13.1,rot:-.5,len:2.9,r:.22},{x:-9.5,z:3.3,rot:1.15,len:3.3,r:.3},{x:8.7,z:2.3,rot:2.35,len:2.7,r:.24},{x:-6.9,z:-7.5,rot:.82,len:3.1,r:.26},{x:3.4,z:-9.9,rot:1.9,len:3.5,r:.3},{x:13.6,z:8.2,rot:.2,len:2.5,r:.2}];{const x=He(616),et=[],Y=[];for(const k of De){const $=si(k.x,k.z)+k.r*.62,ft=new E(-k.len/2,0,0),mt=new E(k.len/2,0,0),Pt=new E(0,.03,0),xt=ms([ft,Pt,mt],[k.r*.92,k.r,k.r*.94],9),kt=new xn().compose(new E(k.x,$,k.z),new Ms().setFromAxisAngle(Of,k.rot),new E(1,1,1));xt.applyMatrix4(kt),et.push(xt);for(const cn of[-1,1]){const Sn=new ti(k.r*(cn<0?.9:.92),k.r*(cn<0?.9:.92),.03,10);Sn.rotateZ(Math.PI/2);const nn=new E(cn*(k.len/2-.005),0,0);nn.applyMatrix4(kt),Sn.translate(nn.x,nn.y,nn.z),Y.push(Sn)}for(let cn=0;cn<4;cn++){const Sn=y(x,.2,.85),nn=new E(-k.len/2+k.len*Sn,k.r*.8,y(x,-.1,.1));nn.applyMatrix4(kt),ue.push({pos:nn,s:y(x,.12,.28)})}for(let cn=0;cn<3;cn++){const Sn=.2+cn/3*.62+y(x,-.04,.04),nn=new E(-k.len/2+k.len*Sn,k.r*.92,0);nn.applyMatrix4(kt),Ft.push({pos:nn,s:k.r*y(x,.7,1),sy:y(x,.035,.06),ry:x()*Bt,shade:y(x,.94,1.03)})}const he=Math.abs(Math.cos(k.rot))*k.len/2+k.r+.15,ze=Math.abs(Math.sin(k.rot))*k.len/2+k.r+.15;Ct.push({minX:k.x-he,maxX:k.x+he,minZ:k.z-ze,maxZ:k.z+ze,name:"fallen-log"})}fn(et,Mt,{name:"fallen-logs"}),fn(Y,At,{name:"log-ends"})}const je=[],kn=[],Xn=[{x:-6.5,z:6.3,s:1},{x:9.4,z:13.8,s:.78},{x:-8.9,z:13.2,s:.66},{x:5.1,z:-6.9,s:.9},{x:-11.6,z:.4,s:.82},{x:13.1,z:4.1,s:.6},{x:7.5,z:16.2,s:.52},{x:-3.2,z:19.8,s:.72},{x:11.8,z:-7.4,s:.84},{x:-13.4,z:9.7,s:.58}],Nn=[];{const x=He(727);for(let Y=0;Y<Xn.length;Y++){const k=Xn[Y],pt=si(k.x,k.z),$=Tr(700+Y,1),ft=k.s*y(x,.8,1.25),mt=k.s*y(x,.5,.78),Pt=k.s*y(x,.8,1.2);$.scale(ft,mt,Pt),$.rotateY(x()*Bt);const st=pt+mt*.16;Pc($,new Ot().setRGB(y(x,.55,.75),y(x,.55,.72),y(x,.5,.66))),$.translate(k.x,st,k.z),Nn.push($),je.push({minX:k.x-ft*.85,maxX:k.x+ft*.85,minZ:k.z-Pt*.85,maxZ:k.z+Pt*.85,name:"rock"}),Ft.push({pos:new E(k.x,st+mt*.78,k.z),s:Math.max(ft,Pt)*y(x,.5,.7),sy:y(x,.05,.085),ry:x()*Bt,shade:1}),kn.push({pos:new E(k.x+y(x,-.2,.2),st+mt*.7,k.z+y(x,-.2,.2)),s:y(x,.14,.3)})}const et=fn(Nn,H,{name:"boulders"});et&&(et.userData.cameraOccluder=!0)}{const x=He(811),et=[],Y=[];for(let mt=0;mt<86;mt++){let Pt=0,st=0,xt=0;do{if(mt<30){const ze=x(),cn=ho(ze);Pt=cn.x+(x()<.5?-1:1)*y(x,1,2.4),st=cn.z+y(x,-1.3,1.3)}else{const ze=x()*Bt,cn=y(x,7,22);Pt=Math.cos(ze)*cn,st=Math.sin(ze)*cn}xt++}while(xt<20&&ur(Pt,st));if(ur(Pt,st))continue;const kt=y(x,.07,.26),he={pos:new E(Pt,si(Pt,st)+kt*.22,st),sx:kt*y(x,.8,1.4),sy:kt*y(x,.5,.8),sz:kt*y(x,.8,1.4),ry:x()*Bt,color:new Ot().setRGB(y(x,.5,.72),y(x,.5,.7),y(x,.45,.64))};x()<.5?et.push(he):Y.push(he)}const k=Tr(801,0),pt=Tr(907,1),$=V(k,nt,et,{name:"rocks-a",castShadow:!0}),ft=V(pt,J,Y,{name:"rocks-b",castShadow:!0});for(let mt=0;mt<et.length;mt++)$.setColorAt(mt,et[mt].color);for(let mt=0;mt<Y.length;mt++)ft.setColorAt(mt,Y[mt].color);$.instanceColor&&($.instanceColor.needsUpdate=!0),ft.instanceColor&&(ft.instanceColor.needsUpdate=!0),kn.push(...et.slice(0,6).map(mt=>({pos:mt.pos,s:mt.sx*1.3})))}{const x=He(844),et=[];for(let k=0;k<64;k++){const pt=x()*Bt,$=y(x,4.5,20),ft=Math.cos(pt)*$,mt=Math.sin(pt)*$;if(Math.abs(ft)<4.6&&mt>-3.6&&mt<5.4)continue;const Pt=y(x,.5,1.6);et.push({x:ft,z:mt,len:Pt,rot:x()*Bt,tilt:y(x,-.25,.25),s:y(x,.1,.22)})}const Y=[];for(const k of et){const pt=new ti(k.s*.32,k.s*.55,k.len,4);pt.rotateZ(Math.PI/2),pt.rotateX(k.tilt),pt.rotateY(k.rot),pt.translate(k.x,si(k.x,k.z)+k.s*.4,k.z),Y.push(pt)}fn(Y,gt,{name:"floor-twigs"})}let An=null,Yn=null;{const x=He(933),et=[],Y=[],k=[{x:-5.4,z:12.4},{x:7.1,z:3.1},{x:-9,z:-6},{x:4.9,z:-8.6},{x:10.9,z:10.9}];for(const Pt of k){const st=5+Math.floor(x()*4);for(let xt=0;xt<st;xt++){const kt=x()*Bt,he=y(x,.15,1),ze=Pt.x+Math.cos(kt)*he,cn=Pt.z+Math.sin(kt)*he,Sn=si(ze,cn),nn=y(x,.5,1.1);Y.push({pos:new E(ze,Sn+.075*nn,cn),s:nn,ry:x()*Bt}),et.push({pos:new E(ze,Sn+.16*nn,cn),s:nn,ry:x()*Bt,color:new Ot(x()>.5?"#a9563a":"#c9a878")})}}const pt=new ti(.022,.035,.15,6);pt.translate(0,.075,0);const $=new mi(.075,8,5,0,Bt,0,Math.PI*.5);$.scale(1,.62,1),$.translate(0,.15,0);const ft=V(pt,new sn({color:14207403,roughness:.9}),Y,{name:"mushroom-stems"}),mt=V($,new sn({color:11694154,roughness:.85}),et,{name:"mushroom-caps"});An=ft,Yn=mt;for(let Pt=0;Pt<et.length;Pt++)mt.setColorAt(Pt,et[Pt].color);mt.instanceColor&&(mt.instanceColor.needsUpdate=!0),ft.castShadow=!1,mt.castShadow=!1}const w=new Je;w.name="old-well",w.position.set(Ve.well.x,0,Ve.well.z),e.add(w);const W=[],dt=[];let lt=null;{const x=He(1201),Y=Ve.well.height,k=new ti(.9,.99,Y,22,1,!0);k.translate(0,Y/2-.02,0);const pt=new ti(.7,.75,Y,22,1,!0);pt.translate(0,Y/2-.02,0);const $=As(sl([k,pt]),!1),ft=new Ne($,nt);ft.castShadow=!0,ft.receiveShadow=!0,w.add(ft),W.push(ft);const mt=new ih(.69,.995,24);mt.rotateX(-Math.PI/2),mt.translate(0,Y-.025,0);const Pt=new Ne(mt,nt);Pt.receiveShadow=!0,w.add(Pt),W.push(Pt);const st=[],xt=[{y:.18,count:16,rad:.975,size:.3},{y:.52,count:15,rad:.965,size:.31},{y:.84,count:15,rad:.95,size:.3}];for(const Ze of xt)for(let un=0;un<Ze.count;un++){const Qn=un/Ze.count*Bt+y(x,-.06,.06),hs=Tr(1300+un*7+Math.floor(Ze.y*100),0),gr=Ze.size*y(x,.8,1.15),nr=.2*y(x,.85,1.2),xa=.16*y(x,.8,1.2);hs.scale(gr,nr,xa),hs.rotateY(-Qn+y(x,-.14,.14)),hs.translate(Math.cos(Qn)*Ze.rad,Ze.y,Math.sin(Qn)*Ze.rad),st.push(hs)}const kt=new Ne(As(sl(st),!1),nt);kt.castShadow=!0,kt.receiveShadow=!0,w.add(kt),W.push(kt);const he=[],ze=12;for(let Ze=0;Ze<ze;Ze++){const un=Ze/ze*Bt,Qn=new qn(y(x,.34,.48),y(x,.08,.12),y(x,.24,.34));Qn.rotateY(un+y(x,-.1,.1)),Qn.translate(Math.cos(un)*.86,Y+.03,Math.sin(un)*.86),he.push(Qn),Ze%3!==2&&Ft.push({pos:new E(Ve.well.x+Math.cos(un)*.86,Y+.09,Ve.well.z+Math.sin(un)*.86),s:.13,sy:.04,ry:x()*Bt,shade:1})}const cn=new Ne(As(he,!1),nt);cn.castShadow=!0,cn.receiveShadow=!0,w.add(cn),W.push(cn);const Sn=new Ne(new Lr(.68,26),Te);Sn.rotation.x=-Math.PI/2,Sn.position.y=Y-.42,w.add(Sn);const nn=[];for(const Ze of[-1,1]){const un=new qn(.13,2.42,.13);un.translate(Ze*.83,1.16,0),nn.push(un);const Qn=new qn(.09,.5,.09);Qn.rotateZ(Ze*.6),Qn.translate(Ze*.66,2.02,0),nn.push(Qn)}const Si=new qn(1.98,.14,.15);Si.translate(0,2.32,0),nn.push(Si);const qi=new ti(.055,.055,1.7,8);qi.rotateZ(Math.PI/2),qi.translate(0,2.14,0),nn.push(qi);for(const Ze of[-1,1]){const un=new qn(2.42,.07,.12);un.rotateX(Ze*.52),un.translate(0,2.78+0,Ze*.32),nn.push(un)}const bi=new Ne(As(nn,!1),gt);bi.castShadow=!0,bi.receiveShadow=!0,w.add(bi),W.push(bi);const Os=2.6,vi=.56,Ss=.92,us=Math.atan2(vi,Ss),Bi=[];for(const Ze of[-1,1]){const un=new qn(2.5,.07,Math.hypot(Ss,vi)+.14);un.rotateX(Ze*us),un.translate(0,Os+vi-vi*.5+.02,Ze*Ss*.5),Bi.push(un)}const er=new qn(2.6,.09,.18);er.translate(0,Os+vi+.05,0),Bi.push(er);const ns=new Ne(As(Bi,!1),yt);ns.castShadow=!0,ns.receiveShadow=!0,w.add(ns),W.push(ns);for(let Ze=0;Ze<2;Ze++){const un=-.55+Ze*.95;for(const Qn of[-1,1])Ft.push({pos:new E(Ve.well.x+un,Os+vi*.5+.09,Ve.well.z+Qn*Ss*.5+.02),s:.16,sy:.04,ry:x()*Bt,shade:1})}lt=new Je,lt.position.set(0,2.3,0),w.add(lt);const ri=new Ne(new ti(.012,.014,.83,5),vt);ri.position.y=-.415,lt.add(ri);const Tn=new Je;Tn.position.y=-.86;const Kn=new Ne(new ti(.17,.13,.26,12,1,!0),At);Kn.castShadow=!0,Tn.add(Kn);const fi=new Ne(new ti(.13,.13,.03,12),gt);fi.position.y=-.13,Tn.add(fi);for(const Ze of[-.08,.08]){const un=new Ne(new ci(Ze>0?.163:.14,.01,4,14),new sn({color:4866104,roughness:.6,metalness:.5}));un.rotation.x=Math.PI/2,un.position.y=Ze,Tn.add(un)}const Jn=new Ne(new ci(.15,.009,4,12,Math.PI),vt);Jn.rotation.z=0,Jn.position.y=.13,Tn.add(Jn),lt.add(Tn),W.push(Kn);const wi=[];for(let Ze=0;Ze<12;Ze++){const un=Ze/12*Bt+x()*.4;wi.push({pos:new E(Ve.well.x+Math.cos(un)*.9,Y+.04,Ve.well.z+Math.sin(un)*.9),s:y(x,.08,.17)})}for(let Ze=0;Ze<10;Ze++){const un=x()*Bt;wi.push({pos:new E(Ve.well.x+Math.cos(un)*y(x,.95,1.15),.03,Ve.well.z+Math.sin(un)*y(x,.95,1.15)),s:y(x,.1,.22)})}kn.push(...wi);for(let Ze=0;Ze<5;Ze++){const un=x()*Bt;dt.push({x:Math.cos(un)*y(x,1.2,1.7),z:Math.sin(un)*y(x,1.2,1.7),s:y(x,.6,1),ry:x()*Bt})}for(const Ze of W)Ze.userData.interactId="well-note"}const j=[],pe=[];{const x=He(1501);for(const Y of dt){const k=Ve.well.x+Y.x,pt=Ve.well.z+Y.z;j.push({pos:new E(k,si(k,pt)+.02,pt),s:Y.s,ry:Y.ry,shade:y(x,.85,1.1)})}let et=0;for(;j.length<290&&et++<3200;){const Y=x()*Bt,k=Math.sqrt(x())*26,pt=Math.cos(Y)*k,$=Math.sin(Y)*k;ur(pt,$)||Math.hypot(pt-Ve.well.x,$-Ve.well.z)<1.25||Ys(pt,$).dist<1.85||k>16&&x()>.55||k<12&&x()<.45||j.push({pos:new E(pt,si(pt,$)+.02,$),s:y(x,.55,1.2)*(k<12?.72:1),ry:x()*Bt,shade:y(x,.7,1.2)})}for(et=0;pe.length<300&&et++<6e3;){let Y,k,pt=!1;if(x()<.4){const ft=x(),mt=ho(ft),Pt=x()<.5?-1:1;Y=mt.x+Pt*y(x,2.25,3.6),k=mt.z+y(x,-.9,.9),pt=!0}else{const ft=x()*Bt,mt=Math.sqrt(x())*24;Y=Math.cos(ft)*mt,k=Math.sin(ft)*mt}if(ur(Y,k)||Math.hypot(Y-Ve.well.x,k-Ve.well.z)<1.2||Ys(Y,k).dist<2.2)continue;const $=Math.hypot(Y,k);$<12&&x()<.55||pe.push({pos:new E(Y,si(Y,k)+.01,k),s:pt?y(x,.1,.19):y(x,.13,.3)*($<12?.72:1),ry:x()*Bt,shade:y(x,.7,1.25)})}}const le=V(Tt,ce,j,{name:"ferns",receiveShadow:!0}),ee=V(jt,_t,pe,{name:"grass",receiveShadow:!0});for(let x=0;x<j.length;x++)le.setColorAt(x,r.setRGB(.9,.95,.85).multiplyScalar(j[x].shade));for(let x=0;x<pe.length;x++)ee.setColorAt(x,r.setRGB(.9,.95,.8).multiplyScalar(pe[x].shade));le.instanceColor&&(le.instanceColor.needsUpdate=!0),ee.instanceColor&&(ee.instanceColor.needsUpdate=!0);const ge=[];{const x=He(1611);for(let et=0;et<760;et++){let Y,k;if(x()<.42){const $=x(),ft=ho($);Y=ft.x+y(x,-1.25,1.25),k=ft.z+y(x,-.7,.7)}else{const $=x()*Bt,ft=Math.sqrt(x())*20;Y=Math.cos($)*ft,k=Math.sin($)*ft}if(Math.abs(Y)<4.2&&k>-3.4&&k<5.2||Math.abs(Y-Ve.well.x)<1.2&&Math.abs(k-Ve.well.z)<1.2)continue;const pt=y(x,.05,.13);ge.push({pos:new E(Y,si(Y,k)+.018+x()*.012,k),sx:pt*y(x,.8,1.3),sz:pt*y(x,.8,1.3),sy:1,ry:x()*Bt,rx:-Math.PI/2+y(x,-.22,.22),rz:y(x,-.2,.2),shade:y(x,.7,1.15)})}}const Ae=V(qt,q,ge,{name:"leaf-litter"}),$e=[];{const x=He(1663);for(let et=0;et<300;et++){let Y,k;if(x()<.5){const pt=x(),$=ho(pt);Y=$.x+y(x,-2.6,2.6),k=$.z+y(x,-1.5,1.5)}else{const pt=x()*Bt,$=Math.sqrt(x())*19;Y=Math.cos(pt)*$,k=Math.sin(pt)*$}Math.abs(Y)<4.2&&k>-3.4&&k<5.2||Ys(Y,k).dist<1.2||$e.push({pos:new E(Y,si(Y,k)+.026,k),s:y(x,.3,.65),ry:x()*Bt,rx:-Math.PI/2,rz:0,shade:y(x,.65,1.12)})}}const Pe=new sn({map:v,alphaTest:.38,side:Bn,roughness:.95,metalness:0}),xe=V(qt,Pe,$e,{name:"leaf-litter-drifts"}),Ce=[];let ln=null;{const x=He(1801);for(let Y=0;Y<100;Y++){const k=x()*Bt,pt=y(x,7.5,20),$=Math.cos(k)*pt,ft=Math.sin(k)*pt;if(ur($,ft)||Ys($,ft).dist<1.9||Math.hypot($-Ve.well.x,ft-Ve.well.z)<2.8||Math.hypot($,ft-17.2)<5.5)continue;const mt=si($,ft),Pt=4+Math.floor(x()*3);for(let st=0;st<Pt;st++)Ce.push({pos:new E($+y(x,-.7,.7),mt+y(x,.3,1.05),ft+y(x,-.7,.7)),s:y(x,.14,.28),ry:x()*Bt,rx:y(x,-.3,.3),rz:y(x,-.25,.25),shade:y(x,.72,1.08)})}const et=[];for(let Y=0;Y<18;Y++){const k=x()*Bt,pt=y(x,8,18),$=Math.cos(k)*pt,ft=Math.sin(k)*pt;if(ur($,ft)||Ys($,ft).dist<2||Math.hypot($-Ve.well.x,ft-Ve.well.z)<1.8)continue;const mt=si($,ft)-.05,Pt=y(x,2.2,4.4),st=y(x,-.2,.2),xt=[new E(0,0,0),new E(st*.4,Pt*.55,st*.2),new E(st,Pt,st*.5)],kt=ms(xt,[.06,.035,.012],4);kt.translate($,mt,ft),et.push(kt);for(let he=0;he<3;he++)Ce.push({pos:new E($+st+y(x,-.5,.5),mt+Pt*y(x,.62,1),ft+st*.5+y(x,-.5,.5)),s:y(x,.14,.27),ry:x()*Bt,rx:y(x,-.3,.3),rz:y(x,-.25,.25),shade:y(x,.72,1.08)})}et.length&&fn(et,Mt,{name:"saplings",castShadow:!1}),ln=V(K,Rt,Ce,{name:"understory-bushes"})}const Ye=Tr(1777,0);Ye.scale(1,.42,1);const We=[];{const x=He(1717);for(const et of kn)We.push(et);for(const et of ue)We.push(et);for(let et=0;et<40;et++){const Y=x()*Bt,k=y(x,6,18),pt=Math.cos(Y)*k,$=Math.sin(Y)*k;We.push({pos:new E(pt,si(pt,$)+.02,$),s:y(x,.08,.2)})}}const Dn=We.filter(x=>!ur(x.pos.x,x.pos.z)).map(x=>({pos:x.pos,s:x.s??.15,ry:x.ry??0,rx:0,rz:0,sy:.5})),Me=V(Ye,bt,Dn,{name:"moss"});for(let x=0;x<Dn.length;x++){const et=.7+x*37%10*.035;Me.setColorAt(x,r.setRGB(et*.95,et,et*.7))}Me.instanceColor&&(Me.instanceColor.needsUpdate=!0);{const x=He(1999);for(let et=0;et<P.length;et++){if(et%2===1)continue;const Y=P[et];Ft.push({pos:new E(Y.x,Y.topY-.004,Y.z),s:Y.r*y(x,.38,.6),sy:y(x,.032,.055),ry:x()*Bt,shade:y(x,.96,1.02)})}}for(let x=Ft.length-1;x>=0;x--)ur(Ft[x].pos.x,Ft[x].pos.z)&&Ft.splice(x,1);const Ln=V(kf(1888),wt,Ft,{name:"ground-snow-caps",receiveShadow:!0});for(let x=0;x<Ft.length;x++){const et=Ft[x].shade??1;Ln.setColorAt(x,r.setRGB(.95*et,.98*et,1*et))}Ln.instanceColor&&(Ln.instanceColor.needsUpdate=!0),Ln.visible=!1;const mn=[];{const x=He(2001),et=[[.9,9.4,1.1,.6],[-1.25,12.7,.9,.5],[2.5,15.1,.7,.4],[-2.3,7.2,1,.55],[5.3,11.6,1.3,.7],[-4.4,8.6,.85,.5],[-5.6,13.6,1.1,.6],[8,12.9,.9,.5],[5.5,8.9,.75,.45],[-1.6,17.2,.8,.45]];for(const[Y,k,pt,$]of et){const ft=new Lr(1,18),mt=ft.attributes.position;for(let st=0;st<mt.count;st++){const xt=mt.getX(st),kt=mt.getY(st),he=Math.atan2(kt,xt),ze=1+Math.sin(he*3+x()*2)*.12+Math.sin(he*5.3)*.07;mt.setX(st,xt*ze),mt.setY(st,kt*ze)}const Pt=new Ne(ft,Ht);Pt.rotation.x=-Math.PI/2,Pt.scale.set(pt,$,1),Pt.position.set(Y,.014,k),Pt.renderOrder=1,Pt.visible=!1,e.add(Pt),mn.push(Pt)}Ht.opacity=0}const Zn=new Je;Zn.name="ambient-life",e.add(Zn);const de=new Je;de.visible=!1,Zn.add(de);const Qe=(()=>{const x=[];x.push(.42,0,0,.02,.02,0,.06,0,-.34,.06,0,.34,.02,.02,0,-.3,0,0,-.28,0,-.1,-.3,0,0,-.28,0,.1);const et=new Pn;return et.setAttribute("position",new an(x,3)),et.computeVertexNormals(),et})(),wn=new ji({color:2827292,side:Bn,transparent:!0,opacity:.9,fog:!0}),qe={uTime:{value:0}};wn.onBeforeCompile=x=>{x.uniforms.uTime=qe.uTime,x.vertexShader=`uniform float uTime;
`+x.vertexShader,x.vertexShader=x.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      float flap = sin(uTime * 7.5 + float(gl_InstanceID) * 1.7) * 0.55;
      transformed.y += abs(transformed.z) * flap;`)},wn.customProgramCacheKey=()=>"nature-bird";const dn=[];{const x=He(2301);for(let Y=0;Y<13;Y++)dn.push({pos:new E(y(x,-7,7),y(x,-1.5,1.5),y(x,-5,5)),s:y(x,.9,1.5),ry:Math.PI/2+y(x,-.4,.4),rx:y(x,-.2,.2),rz:y(x,-.2,.2)});const et=new hl(Qe,wn,dn.length);et.name="bird-flock";for(let Y=0;Y<dn.length;Y++){const k=dn[Y];s.position.copy(k.pos),s.rotation.set(k.rx,k.ry,k.rz),s.scale.setScalar(k.s),s.updateMatrix(),et.setMatrixAt(Y,s.matrix)}et.instanceMatrix.needsUpdate=!0,et.frustumCulled=!1,de.add(et)}const Un=new Je;let Xt=0;{const x=new Ne(new mi(.09,10,8),zt);x.scale.set(1.5,.9,.95),Un.add(x);const et=new Ne(new mi(.062,10,8),zt);et.position.set(.1,.085,0),Un.add(et);const Y=new Ne(new Co(.022,.08,6),new sn({color:11569738,roughness:.8}));Y.rotation.z=-Math.PI/2,Y.position.set(.17,.08,0),Un.add(Y);const k=new Ne(new Co(.045,.16,5),zt);k.rotation.z=Math.PI/2-.25,k.position.set(-.15,0,0),Un.add(k);for(const Pt of[-1,1]){const st=new Ne(new ti(.007,.007,.09,4),new sn({color:7034424,roughness:.8}));st.position.set(.01,-.03,Pt*.03),Un.add(st)}const pt=De[0],$=si(pt.x,pt.z)+pt.r*1.62,ft=pt.rot,mt=.9;Un.position.set(pt.x+Math.cos(ft)*mt,$+.06,pt.z-Math.sin(ft)*mt),Un.rotation.y=-ft+Math.PI/2+.5,Xt=Un.position.y,Un.traverse(Pt=>{Pt.isMesh&&(Pt.castShadow=!0)}),Zn.add(Un)}const yi=[];{const x=He(2401);for(let et=0;et<2;et++){const Y=et===0?45:32,k=new Float32Array(Y*3),pt=[];for(let Pt=0;Pt<Y;Pt++){let st=0,xt=0,kt=0;do{const ze=x()*Bt,cn=y(x,3.5,17);st=Math.cos(ze)*cn,xt=Math.sin(ze)*cn,kt++}while(kt<10&&Math.hypot(st,xt)<3.2);const he=y(x,.4,2.6);k[Pt*3]=st,k[Pt*3+1]=he,k[Pt*3+2]=xt,pt.push({baseX:st,baseY:he,baseZ:xt,phase:x()*Bt,speed:y(x,.3,.8),amp:y(x,.3,1.1)})}const $=new Pn;$.setAttribute("position",new Wn(k,3)),$.attributes.position.setUsage(gh);const ft=new Pr({color:16770216,size:.3,map:C,transparent:!0,opacity:0,depthWrite:!1,blending:Ri,sizeAttenuation:!0,fog:!0}),mt=new So($,ft);mt.frustumCulled=!1,mt.visible=!1,Zn.add(mt),yi.push({points:mt,mat:ft,geo:$,seeds:pt,positions:k,count:Y,phase:et*2.1})}}function Ii(x,et,Y){const k=new ii(.09,.07),pt=new sn({map:x,alphaTest:.3,side:Bn,roughness:.85,metalness:0,transparent:!1}),$=new hl(k,pt,et);$.instanceMatrix.setUsage(gh),$.frustumCulled=!1,$.visible=!1,$.name="falling";const ft=He(2601+et),mt=[];for(let Pt=0;Pt<et;Pt++){const st=ft()*Bt,xt=y(ft,4,15.5);mt.push({x:Math.cos(st)*xt,y:y(ft,3,11),z:Math.sin(st)*xt,vy:y(ft,.28,.65),sway:y(ft,.4,1.6),phase:ft()*Bt,spin:y(ft,-1.8,1.8),rx:ft()*Bt,ry:ft()*Bt,rz:ft()*Bt}),$.setColorAt(Pt,Y(ft))}return $.instanceColor&&($.instanceColor.needsUpdate=!0),Zn.add($),{mesh:$,mat:pt,parts:mt,count:et,rng:ft}}const zi=Ii(A,70,x=>new Ot().setRGB(y(x,.92,1),y(x,.75,.9),y(x,.8,.92))),js=Ii(T,70,x=>{const et=["#b2703a","#c08a4c","#96522e","#caa464","#8a5a34"];return new Ot(Ci(x,et))});{const x=He(2666),et=["#b2703a","#c08a4c","#96522e","#caa464","#8a5a34"];for(let Y=0;Y<js.count;Y++)js.mesh.setColorAt(Y,r.set(Ci(x,et)));js.mesh.instanceColor&&(js.mesh.instanceColor.needsUpdate=!0)}const Vl={id:"well-note",eyebrow:"古井 · THE OLD WELL",title:"井底的一小片天",body:["石壁沁着凉意，青苔沿着砖缝一点点爬。井绳被岁月磨得发亮，木桶里晃着半桶旧年的雨水。","老人们说，把想说的话轻轻说给井听，回声会替你把它藏进冬天。此刻井水很静，静得能照见树梢最后一片红叶。"],footer:"风停了，井绳轻轻碰着石沿。"},va={id:"well-note",label:"古井",anchor:new E(Ve.well.x,1.15,Ve.well.z),radius:3.1,objects:W,getPrompt:()=>({key:"E",action:"望向古井"}),available:()=>!0,action:()=>{typeof t?.showPanel=="function"&&t.showPanel(Vl)}},_a=[{minX:Ve.well.x-1.18,maxX:Ve.well.x+1.18,minZ:Ve.well.z-1.18,maxZ:Ve.well.z+1.18,name:"well"},...Ee,...Ct,...je],tr=[gi,z].filter(Boolean),Cn={season:"autumn",weather:"clear",hour:17.2,isNight:!1,overcast:0,wet:0,snow:!1,snowOpacity:0,puddleOpacity:0,fireflyOpacity:0,wind:1};let Di=0;const Hr={spring:{groundColor:[1.48,1.56,1.26],stoneColor:[1.4,1.38,1.26],pathColor:[1.36,1.3,1.14],fernTint:"#b6d27f",grassTint:"#b9cd91",moss:"#5c6d3d"},summer:{groundColor:[1.44,1.52,1.2],stoneColor:[1.36,1.34,1.22],pathColor:[1.32,1.26,1.1],fernTint:"#8fb45e",grassTint:"#9db57a",moss:"#4e6034"},autumn:{groundColor:[1.82,1.62,1.26],stoneColor:[1.58,1.52,1.38],pathColor:[1.62,1.5,1.26],fernTint:"#c99153",grassTint:"#a89060",moss:"#5f6a38"},winter:{groundColor:[1.3,1.36,1.44],stoneColor:[1.36,1.4,1.44],pathColor:[1.24,1.28,1.3],fernTint:"#8b7f66",grassTint:"#a89878",moss:"#5a5f46"}},L=[];for(const x of["spring","summer","autumn","winter"])L[x]=Cc[x].leaf.map(et=>new Ot(et));const tt={spring:["#55713e","#5f7c46","#496333"],summer:["#2f4a28","#37512f","#273f21"],autumn:["#37482e","#3e4f33","#2f4026"],winter:["#3a453c","#414d43","#313c33"]},ct=["#fdeeee","#f9e0e5","#fdf5ec","#f6d7dd","#ffffff"];function ot(x){const et=x==="winter",Y=L[x];let k=0,pt=0;for(let xt=0;xt<Et.length;xt++){const kt=Et[xt],he=Y[xt%Y.length].clone();he.multiplyScalar(kt.shade),x==="spring"&&he.multiplyScalar(.88),xt%2===0?(I.setColorAt(k,he),k++):(U.setColorAt(pt,he),pt++)}I.visible=!et,U.visible=!et,I.instanceColor&&(I.instanceColor.needsUpdate=!0),U.instanceColor&&(U.instanceColor.needsUpdate=!0);const $=tt[x]||tt.autumn;for(let xt=0;xt<Dt.length;xt++){const kt=new Ot($[xt%$.length]);kt.multiplyScalar(Dt[xt].shade*(et?.9:1)),D.setColorAt(xt,kt)}D.instanceColor&&(D.instanceColor.needsUpdate=!0);const ft=x==="spring";X.visible=ft;for(let xt=0;xt<oe.length;xt++){const kt=new Ot(ct[xt%ct.length]).multiplyScalar(oe[xt].shade);X.setColorAt(xt,kt)}X.instanceColor&&(X.instanceColor.needsUpdate=!0),at.visible=et;for(let xt=0;xt<Ue.length;xt++){const kt=.72+xt%5*.05;at.setColorAt(xt,r.setRGB(.5*kt,.42*kt,.34*kt))}at.instanceColor&&(at.instanceColor.needsUpdate=!0),Lt.visible=et;for(let xt=0;xt<ie.length;xt++){const kt=ie[xt].shade??1;Lt.setColorAt(xt,r.setRGB(.93*kt,.96*kt,1*kt))}Lt.instanceColor&&(Lt.instanceColor.needsUpdate=!0);const mt=new Ot(Hr[x].fernTint);if(Me.visible=!et,An&&(An.visible=!et),Yn&&(Yn.visible=!et),et)le.visible=!1,ee.visible=!1;else{le.visible=!0,ee.visible=!0;const xt=new Ot(x==="autumn"?"#8d8a4e":x==="spring"?"#a8c471":"#7d9a5c");for(let ze=0;ze<j.length;ze++){const cn=ze%3===0?xt:mt;le.setColorAt(ze,cn.clone().multiplyScalar(j[ze].shade))}const kt=new Ot(Hr[x].grassTint),he=new Ot(x==="autumn"?"#7f8550":x==="spring"?"#9fbf6f":"#7f9a5c");for(let ze=0;ze<pe.length;ze++){const cn=ze%4===0?he:kt;ee.setColorAt(ze,cn.clone().multiplyScalar(pe[ze].shade))}le.instanceColor&&(le.instanceColor.needsUpdate=!0),ee.instanceColor&&(ee.instanceColor.needsUpdate=!0)}if(ln){ln.visible=!et;for(let xt=0;xt<Ce.length;xt++){const kt=Y[(xt+1)%Y.length].clone().multiplyScalar(Ce[xt].shade*.8);ln.setColorAt(xt,kt)}ln.instanceColor&&(ln.instanceColor.needsUpdate=!0)}const Pt=Cc[x].leafFall;Ae.visible=!et,xe.visible=!et;for(let xt=0;xt<ge.length;xt++){const kt=new Ot(Pt[xt%Pt.length]).multiplyScalar(ge[xt].shade);Ae.setColorAt(xt,kt)}for(let xt=0;xt<$e.length;xt++){const kt=new Ot(Pt[(xt+2)%Pt.length]).multiplyScalar($e[xt].shade*.92);xe.setColorAt(xt,kt)}if(Ae.instanceColor&&(Ae.instanceColor.needsUpdate=!0),xe.instanceColor&&(xe.instanceColor.needsUpdate=!0),zi.mesh.visible=ft,js.mesh.visible=x==="autumn",re){const xt=et?["#5b4c3e","#655647","#4f4336"]:x==="autumn"?["#8a5a30","#9a6a34","#71492a","#a3763c"]:x==="spring"?["#6d8a52","#7d9a5e","#5f7c49"]:["#435c3c","#4d6644","#3a5234"];for(let kt=0;kt<se.length;kt++)re.setColorAt(kt,new Ot(xt[kt%xt.length]).multiplyScalar(se[kt].shade));re.instanceColor&&(re.instanceColor.needsUpdate=!0)}if(Wt){const xt=et?["#4e4136","#57493c","#443a2f"]:x==="autumn"?["#6f4526","#7d512b","#5d3a21","#8a5e30"]:x==="spring"?["#5a7444","#68854e","#4c6439"]:["#36492f","#3e5237","#2f4128"];for(let kt=0;kt<me.length;kt++)Wt.setColorAt(kt,new Ot(xt[kt%xt.length]).multiplyScalar(me[kt].shade));Wt.instanceColor&&(Wt.instanceColor.needsUpdate=!0)}const st=Hr[x];B.color.setRGB(st.groundColor[0],st.groundColor[1],st.groundColor[2]),nt.color.setRGB(st.stoneColor[0],st.stoneColor[1],st.stoneColor[2]),H.color.setRGB(st.stoneColor[0],st.stoneColor[1],st.stoneColor[2]),J.color.setRGB(st.stoneColor[0],st.stoneColor[1],st.stoneColor[2]),G.color.setRGB(st.pathColor[0],st.pathColor[1],st.pathColor[2]),bt.color.set(st.moss)}function it(x){const et=x.season,Y=x.weather,k=et==="spring"||Y==="rain"||Y==="storm",pt=et==="winter"||Y==="snow";if(Cn.wet=k?1:0,Cn.snow=pt,Cn.wind=Y==="storm"?1.9:Y==="rain"?1.35:Y==="fog"?.55:1,k){B.color.multiplyScalar(.7),B.roughness=.5,B.envMapIntensity=.65,B.metalness=.06,nt.color.multiplyScalar(.7),H.color.multiplyScalar(.7),J.color.multiplyScalar(.7);for(const st of[nt,H,J])st.roughness=.3,st.envMapIntensity=.85,st.metalness=.06;G.color.multiplyScalar(.7),G.roughness=.42,G.envMapIntensity=.7;for(const st of[nt,H,J,G])st.needsUpdate=!0}else{B.roughness=.96,B.envMapIntensity=0,B.metalness=0;for(const st of[nt,H,J])st.roughness=et==="winter"?.9:.92,st.envMapIntensity=.08,st.metalness=0;G.roughness=.94,G.envMapIntensity=0}Ln.visible=pt,Jt.visible=pt,Cn.snowOpacity=pt?1:0,Cn.puddleOpacity=k?Y==="rain"||Y==="storm"?1:.68:0;for(const st of mn)st.visible=k;const $=x.isNight,ft=x.overcast??0,mt=Y==="clear"&&!$&&ft<.45;de.visible=mt,Un.visible=mt;const Pt=et==="summer"&&$&&(Y==="clear"||Y==="snow")&&ft<.4;for(const st of yi)st.points.visible=Pt;Cn.fireflies=Pt?1:0}function St(x){Cn.season=x.season||"autumn",Cn.weather=x.weather||"clear",Cn.hour=x.hour??17.2,Cn.isNight=x.isNight??zf(Cn.hour),Cn.overcast=x.overcast??0,Cn.sky=Ut({season:Cn.season,weather:Cn.weather,hour:Cn.hour,overcast:Cn.overcast}),ot(Cn.season),it(Cn),Ht.envMap=Gt,Ht.needsUpdate=!0,Te.envMap=Gt,Te.needsUpdate=!0,Te.color.set(Cn.isNight?"#101619":"#1d2726")}const It=new E;let te=0;const ve=new E;function Ke(x,et){const Y=et.rng,k=It;for(let pt=0;pt<6;pt++){const $=Y()*Bt,ft=y(Y,3.2,19);if(x.x=Math.cos($)*ft,x.z=Math.sin($)*ft,Math.hypot(x.x-k.x,x.z-k.z)>4.2)break}x.y=y(Y,5,11),x.vy=y(Y,.28,.65),x.sway=y(Y,.4,1.6),x.phase=Y()*Bt,x.spin=y(Y,-1.8,1.8)}function tn(x,et,Y={}){const k=Math.min(Number(x)||.016,.1);Di+=k,n.uTime.value=Di;const pt=Cn.wind??1;if(n.uWind.value+=(pt-n.uWind.value)*Math.min(1,k*1.8),Y.camera&&It.copy(Y.camera.position),et){const st=Math.abs((et.hour??Cn.hour)-Cn.hour)>.34;(et.season!==Cn.season||et.weather!==Cn.weather||st||et.isNight!==void 0&&et.isNight!==Cn.isNight)&&St({...Cn,...et})}const $=Cn.snow?1:0;Cn.snowOpacity+=($-Cn.snowOpacity)*Math.min(1,k*3.5),Jt.visible?Jt.material.opacity=Cn.snowOpacity:Cn.snowOpacity=0;const ft=Cn.puddleOpacity,mt=Ht.opacity,Pt=mt+(ft-mt)*Math.min(1,k*3.2);Ht.opacity=Pt;for(const st of yi){if(!st.points.visible){st.mat.opacity=Math.max(0,st.mat.opacity-k*2),st.mat.opacity<=.01&&(st.points.visible=!1);continue}st.mat.opacity=Math.min(1,st.mat.opacity+k*1.5);const xt=st.positions;for(let kt=0;kt<st.count;kt++){const he=st.seeds[kt],ze=Di*he.speed+he.phase;xt[kt*3]=he.baseX+Math.sin(ze*.8)*he.amp+Math.sin(ze*2.1+kt)*.18,xt[kt*3+1]=he.baseY+Math.sin(ze*1.2+kt*.7)*.22,xt[kt*3+2]=he.baseZ+Math.cos(ze*.63)*he.amp+Math.cos(ze*1.7+kt)*.18}st.geo.attributes.position.needsUpdate=!0,st.mat.opacity*=.985+.015*(.55+.45*Math.sin(Di*1.7+st.phase))}if(de.visible){te+=k;const st=150,xt=te%st/st;ve.set(Yi(-64,64,xt),24+Math.sin(xt*Math.PI*2)*3,-26-10*Math.sin(xt*Math.PI)),de.position.copy(ve),de.rotation.y=Math.sin(xt*Math.PI*2)*.12,qe.uTime.value=Di}for(const st of[zi,js]){if(!st.mesh.visible)continue;const xt=st.parts;for(let kt=0;kt<st.count;kt++){const he=xt[kt];he.y-=he.vy*k,he.x+=Math.sin(Di*he.sway+he.phase)*.22*k,he.z+=Math.cos(Di*he.sway*.8+he.phase)*.18*k,he.rx+=he.spin*k*.6,he.ry+=he.spin*k*.4,he.y<.06&&Ke(he,st);const ze=he.x-It.x,cn=he.z-It.z;ze*ze+cn*cn<2.4*2.4&&Ke(he,st),s.position.set(he.x,he.y,he.z),s.rotation.set(he.rx,he.ry,he.rz),s.scale.setScalar(1),s.updateMatrix(),st.mesh.setMatrixAt(kt,s.matrix)}st.mesh.instanceMatrix.needsUpdate=!0}lt&&(lt.rotation.x=Math.sin(Di*.9)*.022+Math.sin(Di*2.1)*.006,lt.rotation.z=Math.cos(Di*.73)*.018),Un.visible&&(Un.rotation.z=Math.sin(Di*1.3)*.03,Un.position.y=Xt+Math.sin(Di*2.3)*.006)}return St({season:"autumn",weather:"clear",hour:17.2,isNight:!1,overcast:0}),e.userData.nature={setEnvironment:St,isNightHour:zf},{group:e,colliders:_a,cameraOccluders:tr,interactables:[va],setEnvironment:St,update:tn}}function S2(i=7){return yn(512,512,(t,e,n)=>{const s=He(i);t.fillStyle="#6d4b2f",t.fillRect(0,0,e,n);for(let r=0;r<26;r++){const o=s()*e,a=y(s,16,120),c=t.createLinearGradient(o,0,o+a,0),l=s()>.5?"#a67b4c":"#3a2414";c.addColorStop(0,"rgba(0,0,0,0)"),c.addColorStop(.5,l),c.addColorStop(1,"rgba(0,0,0,0)"),t.globalAlpha=y(s,.04,.14),t.fillStyle=c,t.fillRect(o,0,a,n)}t.globalAlpha=1;for(let r=0;r<420;r++){const o=s()*e,a=y(s,1,7),c=y(s,.008,.03);t.beginPath(),t.strokeStyle=s()>.5?"#3a2414":"#a47a4d",t.globalAlpha=y(s,.05,.24),t.lineWidth=y(s,.6,2.2);for(let l=0;l<=n;l+=8){const u=o+Math.sin(l*c+r)*a+Math.sin(l*c*2.6)*a*.25;l===0?t.moveTo(u,l):t.lineTo(u,l)}t.stroke()}t.globalAlpha=1;for(let r=0;r<5;r++){const o=s()*e,a=s()*n,c=y(s,6,16);for(let l=3;l>=0;l--)t.beginPath(),t.ellipse(o,a,c*(1+l*.6),c*(.5+l*.5),0,0,Bt),t.strokeStyle=l===0?"#24150a":"#3a2414",t.globalAlpha=l===0?.6:.18,t.lineWidth=l===0?2:3,t.stroke();t.globalAlpha=1}for(let r=0;r<70;r++)t.fillStyle=s()>.55?"rgba(122,126,88,.10)":"rgba(30,22,14,.12)",t.beginPath(),t.ellipse(s()*e,s()*n,y(s,4,30),y(s,2,12),s()*Bt,0,Bt),t.fill();li(t,e,n,s,.055)},{repeat:[1,1]})}function b2(i=13){return yn(128,128,(t,e,n)=>{const s=He(i),r=e/2,o=n/2;t.fillStyle="#7c5838",t.fillRect(0,0,e,n);for(let a=1;a<26;a++)t.beginPath(),t.ellipse(r+y(s,-3,3),o+y(s,-3,3),a/26*e*.48,a/26*n*.46,y(s,-.2,.2),0,Bt),t.strokeStyle=a%3===0?"#3a2414":"#5d4028",t.globalAlpha=y(s,.25,.6),t.lineWidth=y(s,.8,2),t.stroke();t.globalAlpha=1;for(let a=0;a<7;a++){const c=s()*Bt;t.strokeStyle="#2a180c",t.globalAlpha=.5,t.lineWidth=1.2,t.beginPath(),t.moveTo(r,o),t.lineTo(r+Math.cos(c)*e*y(s,.2,.45),o+Math.sin(c)*n*y(s,.2,.45)),t.stroke()}t.globalAlpha=1,li(t,e,n,s,.06)},{wrapS:on,wrapT:on})}function w2({size:i=512,planks:t=6,seed:e=21}={}){return yn(i,i,(n,s,r)=>{const o=He(e);n.fillStyle="#5d4029",n.fillRect(0,0,s,r);const a=s/t;for(let c=0;c<t;c++){const l=c*a;n.globalAlpha=y(o,.05,.2),n.fillStyle=o()>.5?"#8a6540":"#3a2616",n.fillRect(l,0,a,r),n.globalAlpha=1;for(let u=0;u<46;u++){const d=l+y(o,2,a-2);n.beginPath(),n.strokeStyle=o()>.5?"#33210f":"#9a7450",n.globalAlpha=y(o,.06,.26),n.lineWidth=y(o,.6,1.8);const f=y(o,.5,3);for(let h=0;h<=r;h+=10){const m=d+Math.sin(h*.02+u)*f;h===0?n.moveTo(m,h):n.lineTo(m,h)}n.stroke()}n.globalAlpha=1,n.fillStyle="rgba(22,13,7,.62)",n.fillRect(l-1,0,2.4,r),n.fillStyle="rgba(200,168,120,.10)",n.fillRect(l+2.2,0,1.6,r)}for(let c=0;c<6;c++){const l=o()*s,u=o()*r,d=y(o,5,12);for(let f=2;f>=0;f--)n.beginPath(),n.ellipse(l,u,d*(1+f*.6),d*(.5+f*.45),0,0,Bt),n.strokeStyle=f===0?"#24150a":"#33210f",n.globalAlpha=f===0?.5:.2,n.lineWidth=1.6,n.stroke();n.globalAlpha=1}li(n,s,r,o,.05)},{repeat:[1,1]})}function T2(i=31){return yn(256,256,(t,e,n)=>{const s=He(i);t.fillStyle="#eef2f3",t.fillRect(0,0,e,n);for(let r=0;r<90;r++){const o=s()*e,a=s()*n,c=y(s,6,46),l=t.createRadialGradient(o,a,0,o,a,c),u=s()>.5?"212,224,232":"255,255,255";l.addColorStop(0,`rgba(${u},${y(s,.12,.3)})`),l.addColorStop(1,`rgba(${u},0)`),t.fillStyle=l,t.fillRect(o-c,a-c,c*2,c*2)}for(let r=0;r<140;r++)t.fillStyle="rgba(255,255,255,.75)",t.fillRect(s()*e,s()*n,y(s,.6,1.6),y(s,.6,1.6));li(t,e,n,s,.022)},{repeat:[1,1]})}function E2(){return yn(256,320,(i,t,e)=>{const n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#3a2410"),n.addColorStop(.42,"#9c5a1e"),n.addColorStop(1,"#eaa055"),i.fillStyle=n,i.fillRect(0,0,t,e);const s=i.createRadialGradient(t*.52,e*.7,4,t*.52,e*.7,t*.66);s.addColorStop(0,"rgba(255,226,178,.82)"),s.addColorStop(.35,"rgba(255,170,94,.45)"),s.addColorStop(1,"rgba(120,60,20,0)"),i.fillStyle=s,i.fillRect(0,0,t,e),i.fillStyle="rgba(30,18,9,.55)",i.fillRect(0,0,t,e*.1),i.fillRect(0,0,t*.07,e),i.fillRect(t*.93,0,t*.07,e),i.fillStyle="rgba(40,22,10,.35)",i.fillRect(t*.12,e*.62,t*.24,e*.38)},{repeat:[1,1],wrapS:on,wrapT:on})}function A2(i=41){return yn(128,256,(t,e,n)=>{const s=He(i);t.clearRect(0,0,e,n);for(let o=0;o<64;o++){const a=s()*e,c=y(s,n*.3,n*.95),l=t.createLinearGradient(0,0,0,c);l.addColorStop(0,"rgba(12,9,7,.55)"),l.addColorStop(.35,"rgba(16,12,9,.28)"),l.addColorStop(1,"rgba(20,15,10,0)"),t.fillStyle=l,t.fillRect(a,0,y(s,2,9),c)}const r=t.createLinearGradient(0,0,0,n*.42);r.addColorStop(0,"rgba(10,8,6,.6)"),r.addColorStop(1,"rgba(10,8,6,0)"),t.fillStyle=r,t.fillRect(0,0,e,n*.42)},{wrapS:on,wrapT:on})}function C2({scene:i}={}){const t=He(9137),e=new Je;e.name="cabin",i&&i.add(e);const n=[],s=Ge.width/2,r=Ge.depth/2,o=Ge.frontZ,a=Ge.backZ,c=Ge.floorY,l=Ge.foundationY,u=Ge.logRadius,d=.17,f=d*2,h=u*2,m=8,v=.02,g=l+v,p=g+m*h,S=os.halfX,R=os.halfZ,b=.34,T=Ge.roof.thickness,A=s+Ge.roof.overhangX;let F=(Ge.ridgeY-Ge.eaveY)/A;for(let L=0;L<8;L++){const tt=Math.sqrt(1+F*F);F=(Ge.ridgeY-Ge.eaveY-T*tt)/A}const M=1/Math.sqrt(1+F*F),C=F*M,O=Ge.ridgeY-A*F,B=r+Ge.roof.overhangFront,G=-r-Ge.roof.overhangBack,nt=B-G,H=A/M,J=L=>Ge.ridgeY-Math.abs(L)*F-T/M,Mt=(L,tt)=>-.055*Math.sin(Math.PI*gn(L,0,1))*Math.sin(Math.PI*gn(tt,0,1)),rt=Ge.porch,At=rt.floorY,gt=o-.02,yt=rt.frontZ,Rt=o-.08,ye=rt.frontZ+.25,we=.144,en=.16,Z=rt.width/2+.2,ce=L=>rt.roofY-(L-Rt)*we,_t=L=>ce(L)+en/Math.cos(Math.atan(we)),q=rt.frontZ-.1,bt=ce(q)-.02-.16,wt=(L,tt)=>-.055*Math.sin(Math.PI*gn(Math.abs(L)/A,0,1))*Math.sin(Math.PI*gn((tt-G)/nt,0,1)),Kt=(L,tt)=>-.032*Math.sin(Math.PI*gn((L+Z)/(2*Z),0,1))*Math.sin(Math.PI*gn((tt-Rt)/(ye-Rt),0,1)),Ht=Ge.door.width,Te=Ge.door.height,vt=c+Te,zt=Ge.windows;function Gt(L,tt){let ct=null,ot=null;for(let it=0;it<m;it++){const St=g+it*h,It=St+h;It<=L+1e-6||St>=tt-1e-6||(ct=ct===null?St:Math.min(ct,St),ot=ot===null?It:Math.max(ot,It))}return ct===null?[L,tt]:[ct,ot]}const Ut=(L,tt,ct)=>({axis:L,sign:tt,outer:ct,point:(ot,it,St)=>L==="x"?new E(ot,it,ct+tt*St):new E(ct+tt*St,it,ot)}),Qt={id:"front",...Ut("x",1,o),uMin:-s,uMax:s,throughParity:0},ke={id:"back",...Ut("x",-1,a),uMin:-s,uMax:s,throughParity:0},Le={id:"left",...Ut("z",-1,Ge.leftX),uMin:-r,uMax:r,throughParity:1},ut={id:"right",...Ut("z",1,Ge.rightX),uMin:-r,uMax:r,throughParity:1},Jt=[Qt,ke,Le,ut],N=zt.filter(L=>L.face==="front");zt.find(L=>L.face==="right");const Zt=zt.map(L=>{const tt=c+L.y,ct=tt-L.height/2,ot=tt+L.height/2,it=Gt(ct,ot),St=L.face==="front"?L.x-L.width/2:L.z-L.width/2,It=L.face==="front"?L.x+L.width/2:L.z+L.width/2,te=Math.max(ct,it[0]),ve=Math.min(ot,it[1]);return{...L,y0:ct,y1:ot,holeY0:it[0],holeY1:it[1],u0:St,u1:It,visY0:te,visY1:ve,wall:L.face==="front"?Qt:ut}}),fe=Gt(c,vt);Qt.openings=[{u0:-Ht/2,u1:Ht/2,y0:fe[0],y1:fe[1],id:"door"},...N.map(L=>{const tt=Zt.find(ct=>ct.id===L.id);return{u0:tt.u0,u1:tt.u1,y0:tt.holeY0,y1:tt.holeY1,id:L.id}})].sort((L,tt)=>L.u0-tt.u0),ke.openings=[],Le.openings=[],ut.openings=[{u0:Zt.find(L=>L.id==="side-right").u0,u1:Zt.find(L=>L.id==="side-right").u1,y0:Zt.find(L=>L.id==="side-right").holeY0,y1:Zt.find(L=>L.id==="side-right").holeY1,id:"side-right"}];const P=S2(7),_=b2(13),K=(()=>{const L=Cl({size:512,seed:11,base:"#57544b",light:"#948d7d",dark:"#242319"});return L.repeat.set(.62,.62),L})(),ht=(()=>{const L=zd({size:512,seed:15});return L.repeat.set(.92,.44),L})(),Tt=w2({planks:6,seed:21});Tt.repeat.set(.7,.7);const jt=(()=>{const L=Es({base:"#5d4029",light:"#98714a",dark:"#2c1a0e",seed:31});return L.repeat.set(.62,.62),L})(),qt=(()=>{const L=Es({base:"#45311f",light:"#735537",dark:"#1e120a",seed:44});return L.repeat.set(.7,.7),L})(),Et=E2(),Dt=Rx({seed:23}),oe=T2(31);oe.repeat.set(.8,.8);const Ue=A2(41),ie=rh({seed:12}),Ft=L=>Dx(L),Ee=new sn({color:"#af9c85",roughness:.1,metalness:0,transparent:!0,opacity:.36,depthWrite:!1,side:Bn,envMapIntensity:.65,emissive:new Ot("#ff9c46"),emissiveMap:Et,emissiveIntensity:0}),Se={logs:Ft({map:P,roughness:.8,color:"#e3d5bf",bumpMap:P,bumpScale:.22}),logEnds:Ft({map:_,roughness:.84,color:"#dfd0b8"}),core:Ft({color:"#2a1e14",roughness:.96}),trim:Ft({map:jt,roughness:.76,color:"#dcc9ad"}),trimDark:Ft({map:qt,roughness:.8,color:"#c9b596"}),plank:Ft({map:Tt,roughness:.78,color:"#d5c0a3"}),door:Ft({map:Tt,roughness:.8,color:"#b3916c"}),stone:Ft({map:K,roughness:.9,color:"#c0b8a7"}),stonePier:Ft({map:K,roughness:.92,color:"#948d7e"}),stoneSoot:Ft({map:K,roughness:.94,color:"#a49c8c"}),shingle:Ft({map:ht,roughness:.84,color:"#d6c1a4",bumpMap:ht,bumpScale:.5}),soffit:Ft({map:qt,roughness:.84,color:"#c2ad90"}),metal:Ft({color:"#2b2620",roughness:.48,metalness:.72}),lanternGlass:new sn({color:"#ffce8c",emissive:new Ot("#ff9640"),emissiveIntensity:.6,transparent:!0,opacity:.72,roughness:.3,depthWrite:!1}),snow:new sn({map:oe,color:"#f2f6f8",roughness:.88,metalness:0,transparent:!0,opacity:0,depthWrite:!0}),rain:new ji({map:Dt,color:"#cfe0ea",transparent:!0,opacity:0,depthWrite:!1,side:Bn}),soot:new ji({map:Ue,color:"#15100c",transparent:!0,opacity:.68,depthWrite:!1,side:Bn}),glass:Ee},Xe=new Map,Q=[];function Yt(L,tt){let ct=tt;ct.index&&(ct=ct.toNonIndexed());for(const it of Object.keys(ct.attributes))it!=="position"&&it!=="normal"&&it!=="uv"&&ct.deleteAttribute(it);if(ct.attributes.normal||ct.computeVertexNormals(),!ct.attributes.uv){const it=ct.attributes.position.count;ct.setAttribute("uv",new Wn(new Float32Array(it*2),2))}let ot=Xe.get(L);ot||(ot=[],Xe.set(L,ot),Q.push(L)),ot.push(ct)}const Nt=new E,_e=new Ms,be=new ys,Vt=new xn,Oe=new E(1,1,1);function Ie(L,tt="geometry"){const ct=[];for(const it of L){if(!it||!it.attributes||!it.attributes.position)continue;const St=it.index?it.toNonIndexed():it;for(const It of Object.keys(St.attributes))It!=="position"&&It!=="normal"&&It!=="uv"&&St.deleteAttribute(It);St.attributes.normal||St.computeVertexNormals(),St.attributes.uv||St.setAttribute("uv",new Wn(new Float32Array(St.attributes.position.count*2),2)),ct.push(St)}if(!ct.length)return null;if(ct.length===1)return ct[0];const ot=As(ct,!1);return ot||console.warn(`[cabin] mergeGeometries failed for "${tt}" (${ct.length} pieces)`),ot}function vn(L,tt,ct){const ot=L.attributes.uv;if(!ot)return L;for(let it=0;it<ot.count;it++)ot.setXY(it,ot.getX(it)*tt,ot.getY(it)*ct);return ot.needsUpdate=!0,L}function ae(L,tt,ct,ot,it,St,It,te={}){let ve;if(te.rounded?ve=new rs(tt,ct,ot,2,Math.min(te.rounded,tt/2,ct/2,ot/2)):ve=new qn(tt,ct,ot),te.uv!==!1){const Ke=te.uv?te.uv[0]:Math.max(tt,ot),tn=te.uv?te.uv[1]:ct;vn(ve,Ke,tn)}return be.set(te.rot?.[0]??0,te.rot?.[1]??0,te.rot?.[2]??0),_e.setFromEuler(be),Vt.compose(Nt.set(it,St,It),_e,Oe),ve.applyMatrix4(Vt),Yt(L,ve),ve}function fn(L,tt,ct,ot,it,St,It,te,ve={}){const Ke=tt.point(St,It,te);return tt.axis==="x"?ae(L,ct,ot,it,Ke.x,Ke.y,Ke.z,ve):ae(L,it,ot,ct,Ke.x,Ke.y,Ke.z,ve),Ke}function gi(L,tt,ct,ot,it,St,It,te,ve={}){const Ke=new ti(tt,ct,ot,it,1,!!ve.open);return ve.uv!==!1&&vn(Ke,ve.uvScale?.[0]??1,ve.uvScale?.[1]??1),be.set(ve.rot?.[0]??0,ve.rot?.[1]??0,ve.rot?.[2]??0),_e.setFromEuler(be),Vt.compose(Nt.set(St,It,te),_e,Oe),Ke.applyMatrix4(Vt),Yt(L,Ke),Ke}function z(L,tt,ct,ot,it){const St=new ti(1,1,1,14,1,!1);L==="x"?(St.scale(u,tt,d),St.rotateZ(Math.PI/2),St.translate(ct,ot,it)):(St.scale(d,tt,u),St.rotateX(Math.PI/2),St.translate(it,ot,ct)),vn(St,1,tt/1.35),Yt("logs",St)}function V(L,tt,ct,ot,it){const St=new Lr(1,14);St.scale(d,u,1),L==="x"?(St.rotateY(it>0?Math.PI/2:-Math.PI/2),St.translate(tt+it*.002,ct,ot)):(it<0&&St.rotateY(Math.PI),St.translate(ot,ct,tt+it*.002)),Yt("logEnds",St)}function I(L,tt,ct,ot,it,St={}){const It=new fl(tt.map(ve=>new $t(ve[0],ve[1]))),te=new ra(It,{depth:ct,bevelEnabled:!1,steps:1,curveSegments:1});return St.uvScale&&vn(te,St.uvScale[0],St.uvScale[1]),it&&te.applyMatrix4(it),Yt(L,te),te}const U=Ge.width+.36,D=Ge.depth+.36;ae("stone",U+.16,.1,D+.16,0,.05,0,{uv:[U,.1]}),ae("stone",U,l-.1,D,0,.1+(l-.1)/2,0,{uv:[U,l]});for(let L=0;L<30;L++){const tt=L%4,ct=t()*2-1,ot=y(t,.28,.72),it=y(t,.09,.16),St=y(t,.06,l-.1),It=y(t,.015,.045);tt===0?ae("stone",ot,it,.1,ct*(U/2-.6),St,D/2+It*.5,{uv:[ot,it]}):tt===1?ae("stone",ot,it,.1,ct*(U/2-.6),St,-D/2-It*.5,{uv:[ot,it]}):tt===2?ae("stone",.1,it,ot,-U/2-It*.5,St,ct*(D/2-.5),{uv:[ot,it]}):ae("stone",.1,it,ot,U/2+It*.5,St,ct*(D/2-.5),{uv:[ot,it]})}for(const L of Jt)fn("trimDark",L,L.uMax-L.uMin+.12,v,f+.06,0,l+v/2,-.17+.03);function X(L,tt,ct,ot){let it=[L.slice()];for(const St of tt){if(ot<=St.y0+1e-6||ct>=St.y1-1e-6)continue;const It=[];for(const[te,ve]of it){if(St.u1<=te+1e-6||St.u0>=ve-1e-6){It.push([te,ve]);continue}St.u0>te&&It.push([te,Math.min(St.u0,ve)]),St.u1<ve&&It.push([Math.max(St.u1,te),ve])}it=It}return it}for(let L=0;L<m;L++){const tt=g+u+L*h,ct=tt-u,ot=tt+u;for(const it of Jt){const St=L%2===it.throughParity,It=St?it.uMin-b:it.axis==="x"?-S:-R,te=St?it.uMax+b:it.axis==="x"?S:R,ve=it.outer-it.sign*d,Ke=X([It,te],it.openings,ct,ot);for(const[tn,x]of Ke)x-tn<.04||z(it.axis,x-tn,(tn+x)/2,tt,ve);if(St)for(const[tn,x]of Ke)Math.abs(tn-It)<1e-4&&V(it.axis,tn,tt,ve,-1),Math.abs(x-te)<1e-4&&V(it.axis,x,tt,ve,1)}}function at(L){const tt=-f/2-.09,ct=.13,ot=[];let it=L.uMin;const St=[...L.openings].sort((It,te)=>It.u0-te.u0);for(const It of St)It.u0>it+1e-4&&ot.push([it,It.u0,l,p]),It.y0>l+.01&&ot.push([It.u0,It.u1,l,It.y0]),It.y1<p-.01&&ot.push([It.u0,It.u1,It.y1,p]),it=Math.max(it,It.u1);it<L.uMax-1e-4&&ot.push([it,L.uMax,l,p]);for(const[It,te,ve,Ke]of ot)te-It<.02||Ke-ve<.02||fn("core",L,te-It,Ke-ve,ct,(It+te)/2,(ve+Ke)/2,tt,{uv:!1})}Jt.forEach(at),ae("core",S*2+.2,.08,R*2+.2,0,p+.05,0,{uv:!1});for(const L of[Le,ut])fn("trim",L,nt+.04,.07,.42,(B+G)/2,p+.015,-f/2-.01);const Lt=p-.02,se=J(0)-.03,me=s+.02,re=[[-me,Lt],[me,Lt],[0,se]];for(const L of[-1,1]){const tt=L>0?o-.23:a+.05,ct=new xn().makeTranslation(0,0,tt);I("plank",re,.18,0,ct,{uvScale:[1,1]}),ae("trim",me*2+.1,.12,.26,0,Lt+.045,L>0?o-.17:a+.17,{uv:[me*2,.12]})}{const L=o-.228,tt=Lt+(se-Lt)*.42,ct=new Lr(.3,22);ct.translate(0,tt,L+.002),Yt("core",ct);const ot=new ci(.31,.035,8,26);ot.translate(0,tt,L+.012),Yt("trim",ot);for(let St=0;St<3;St++){const It=new qn(.045,.56,.035);It.rotateZ(St*Math.PI/3),It.translate(0,tt,L+.02),Yt("trimDark",It)}const it=new ti(.06,.06,.05,10);it.rotateX(Math.PI/2),it.translate(0,tt,L+.03),Yt("trimDark",it)}const Wt=Math.atan2(C,M),Ct=Ge.chimney,ue=Ct.z-Ct.depth/2,De=Ct.z+Ct.depth/2,je=(Math.abs(Ct.x)-Ct.width/2+.1)/M;function kn(L,tt,ct,ot,it){const St=ct-tt,It=it-ot,te=new qn(Math.max(St,.05),T,Math.max(It,.05),Math.max(2,Math.ceil(St/1)),1,Math.max(2,Math.ceil(It/1)));te.rotateZ(-L*Wt);const ve=(tt+ct)/2,Ke=(ot+it)/2,tn=new E(L*ve*M,Ge.ridgeY-ve*C,Ke),x=new E(L*C,M,0);return tn.addScaledVector(x,-T/2),te.translate(tn.x,tn.y,tn.z),te}const Xn=[kn(1,0,H,G,B),kn(-1,0,H,G,ue),kn(-1,0,je,ue,De),kn(-1,0,H,De,B)];let Nn=Ie(Xn,"roof-panels");if(!Nn)throw new Error("cabin: failed to merge roof panels");Nn.index&&(Nn=Nn.toNonIndexed());{const L=Nn.attributes.position,tt=Nn.attributes.uv;for(let ct=0;ct<L.count;ct++){const ot=L.getX(ct),it=L.getY(ct),St=L.getZ(ct),It=Math.abs(ot)/M,te=gn(It/H,0,1),ve=gn((St-G)/nt,0,1);L.setY(ct,it+Mt(te,ve)),tt.setXY(ct,St,It)}L.needsUpdate=!0,tt.needsUpdate=!0,Nn.computeVertexNormals()}const An=Nn.clone();{const L=An.attributes.position,tt=An.attributes.uv;for(let ct=0;ct<L.count;ct++){const ot=L.getX(ct),it=L.getZ(ct);L.setY(ct,L.getY(ct)-.016),tt.setXY(ct,Math.abs(ot)/M,it)}L.needsUpdate=!0,tt.needsUpdate=!0,An.computeVertexNormals()}Yt("shingle",Nn),Yt("soffit",An),I("trimDark",[[-.22,Ge.ridgeY-.38],[.22,Ge.ridgeY-.38],[0,Ge.ridgeY]],nt+.1,0,new xn().makeTranslation(0,0,G-.05));const Yn=O-Ge.eaveY+.03,w=(O+Ge.eaveY)/2-.005;ae("trimDark",.055,Yn,nt+.04,A-.02,w,(B+G)/2,{uv:[nt,Yn]});for(const[L,tt]of[[G-.02,ue-.01],[De+.01,B+.02]])ae("trimDark",.055,Yn,tt-L,-A+.02,w,(L+tt)/2,{uv:[tt-L,Yn]});{const L=H+.02;for(const tt of[-1,1]){const ct=new E(tt*C,M,0);for(const[ot]of[[B-.02],[G+.02]]){const it=H/2,St=new E(tt*it*M,Ge.ridgeY-it*C,ot);St.addScaledVector(ct,-.1),ae("trim",L,.22,.075,St.x,St.y,St.z,{rot:[0,0,-tt*Wt],uv:[L,.22]})}}}{const L=(s-.35)/M,tt=H-.07,ct=tt-L,ot=(L+tt)/2;for(const it of[-1,1]){const St=new E(it*C,M,0);for(let It=G+.45;It<=B-.45;It+=1.1){if(it<0&&It>ue-.24&&It<De+.24)continue;const te=new E(it*ot*M,Ge.ridgeY-ot*C,It);te.addScaledVector(St,-.27),ae("trimDark",ct,.13,.07,te.x,te.y,te.z,{rot:[0,0,-it*Wt],uv:[ct,.13]})}}}const W=Math.atan(we),dt=ye-Rt,lt=(Rt+ye)/2;{const L=new qn(Z*2,en,dt,12,1,8);L.rotateX(W);const tt=new E(0,Math.cos(W),Math.sin(W)),ct=new E(0,_t(lt),lt).addScaledVector(tt,-en/2);L.translate(ct.x,ct.y,ct.z);const ot=L.attributes.position,it=L.attributes.uv;for(let It=0;It<ot.count;It++){const te=ot.getX(It),ve=ot.getZ(It),Ke=gn((te+Z)/(2*Z),0,1),tn=gn((ve-Rt)/dt,0,1);ot.setY(It,ot.getY(It)-.032*Math.sin(Math.PI*Ke)*Math.sin(Math.PI*tn)),it.setXY(It,te,ve)}ot.needsUpdate=!0,it.needsUpdate=!0,L.computeVertexNormals();const St=L.clone();{const It=St.attributes.position,te=St.attributes.uv;for(let ve=0;ve<It.count;ve++)It.setY(ve,It.getY(ve)-.014),te.setXY(ve,It.getX(ve),It.getZ(ve));It.needsUpdate=!0,te.needsUpdate=!0,St.computeVertexNormals()}Yt("shingle",L),Yt("soffit",St)}ae("trimDark",Z*2+.02,.2,.06,0,_t(ye)-.09,ye-.01,{uv:[Z*2,.2]});for(const L of[-1,1])ae("trim",.06,.2,dt/Math.cos(W),L*(Z-.04),_t(lt)-.1,lt,{rot:[W,0,0],uv:[dt,.2]});ae("trim",Z*2,.16,.09,0,_t(Rt+.03)+.04,Rt+.02,{uv:[Z*2,.16]});for(const L of[-2.85,-1.9,-.95,0,.95,1.9,2.85])ae("trimDark",.07,.1,dt/Math.cos(W)-.08,L,ce(lt)-.06,lt,{rot:[W,0,0],uv:[dt,.1]});{const L=Ct.width,tt=Ct.depth,ct=Ct.height-.25,ot=3.46;ae("stone",L+.3,.22,tt+.3,Ct.x,.11,Ct.z,{uv:[L,.22]}),ae("stone",L+.06,ot-.22,tt+.06,Ct.x,.22+(ot-.22)/2,Ct.z,{uv:[L,ot]}),ae("stoneSoot",L-.02,ct-ot,tt-.02,Ct.x,(ct+ot)/2,Ct.z,{uv:[L,ct]}),ae("stoneSoot",L+.16,.14,tt+.16,Ct.x,ct+.07,Ct.z,{uv:[L,.14]}),ae("stoneSoot",L+.34,.18,tt+.34,Ct.x,ct+.23,Ct.z,{uv:[L,.18]}),ae("stone",L+.4,.08,tt+.4,Ct.x,Ct.capY-.04,Ct.z,{uv:[L,.08]}),ae("stone",L+.24,.42,tt+.24,Ct.x,3.41,Ct.z,{uv:[L,.42]});const it=2.55,St=ct-.12-it/2,It=new ii(L*.88,it);It.translate(Ct.x+.02,St,Ct.z+tt/2+.006),Yt("soot",It);const te=new ii(tt*.84,it);te.rotateY(-Math.PI/2),te.translate(Ct.x-L/2-.006,St,Ct.z+.02),Yt("soot",te)}const j=rt.width/2,pe=yt-gt,le=rt.frontZ-.1,ee=[];for(const L of[-2.7,-.9,.9,2.7])ae("stonePier",.3,.19,.3,L,.095,yt-.32,{uv:[.3,.19]});for(const L of[gt+.3,(gt+yt)/2,yt-.18])ae("trimDark",j*2-.04,.09,.12,0,.235,L,{uv:[j*2,.12]});{const ct=(pe+.04-.12)/7;for(let ot=0;ot<7;ot++){const it=gt-.01+ct/2+ot*(ct+.02);ae("trim",j*2-.02,.06,ct,0,.31+(t()-.5)*.004,it,{uv:[j*2,ct]})}}ae("trimDark",j*2,.1,.05,0,.28,yt+.005,{uv:[j*2,.1]});for(const L of[-1,1])ae("trimDark",.05,.1,pe,L*(j-.015),.28,(gt+yt)/2,{uv:[pe,.1]});{const L=rt.stepRise,tt=At-L,ct=tt-L,ot=.36;ae("trim",2.3,tt-.01,ot,0,(tt+.01)/2,yt+ot/2,{uv:[2.3,ot]}),ae("trim",2.62,ct-.01,ot,0,(ct+.01)/2,yt+ot*1.5,{uv:[2.62,ot]}),ee.push({w:2.3,h:.035,d:ot*.8,x:0,y:tt+.018,z:yt+ot/2}),ee.push({w:2.62,h:.035,d:ot*.8,x:0,y:ct+.018,z:yt+ot*1.5})}for(const L of[-2.85,rt.postX]){ae("stone",.28,.1,.28,L,At+.05,le,{uv:[.28,.1]});const tt=At+.1;ae("trim",.2,bt-tt,.2,L,(tt+bt)/2,le,{uv:[.2,bt-tt]});for(const ct of[-1,1]){const ot=L+ct*.1,it=2.5,St=L+ct*.62,It=bt+.08,te=St-ot,ve=It-it;ae("trim",Math.hypot(te,ve),.09,.11,(ot+St)/2,(it+It)/2,le,{rot:[0,0,Math.atan2(ve,te)],uv:[Math.hypot(te,ve),.09]})}}ae("trimDark",Z*2-.1,.16,.16,0,bt+.08,le,{uv:[Z*2,.16]});for(const L of[-1,1])ae("trimDark",.13,.15,dt/Math.cos(W),L*(j-.06),ce(lt)-.1,lt,{rot:[W,0,0],uv:[dt,.15]});const ge=rt.frontZ-.07,Ae=At+.9;function $e(L,tt,ct,ot,it){const St=L==="x"?ct-tt:it-ot,It=L==="x"?(tt+ct)/2:tt,te=L==="x"?ot:(ot+it)/2;ae("trim",L==="x"?St:.09,.07,L==="x"?.09:St,It,Ae,te,{uv:[St,.09]}),ae("trim",L==="x"?St:.07,.055,L==="x"?.07:St,It,At+.15,te,{uv:[St,.07]});const ve=Math.max(2,Math.round(St/.19));for(let Ke=0;Ke<=ve;Ke++){const tn=Ke/ve,x=L==="x"?tt+St*tn:tt,et=L==="x"?ot:ot+St*tn;ae("trimDark",.035,Ae-.1-(At+.15),.035,x,(At+.15+Ae-.1)/2,et,{uv:[.035,.65]})}ee.push({w:L==="x"?St:.13,h:.045,d:L==="x"?.13:St,x:It,y:Ae+.055,z:te})}$e("x",-j+.06,-1.15,ge,ge),$e("x",1.15,j-.06,ge,ge),$e("z",-j+.06,-j+.06,3.34,ge-.05),$e("z",j-.06,j-.06,3.34,ge-.05);for(const L of[-1.15,1.15,-j+.06,j-.06])ae("trim",.115,1.1,.115,L,At+.55,L===1.15||L===-1.15?ge:ge-.02,{uv:[.115,1.1]});for(const[L,tt]of[[-j+.06,3.34],[j-.06,3.34]])ae("trim",.115,1.06,.115,L,At+.53,tt,{uv:[.115,1.06]});{const ct=At+.46;for(const ot of[-.48,.48])for(const it of[-.16,.16])ae("trimDark",.07,ct-.03-At,.07,-1.28+ot,At+(ct-.03-At)/2,3.62+it,{uv:[.07,.4]});ae("trim",1.16,.055,.44,-1.28,ct-.028,3.62,{uv:[1.16,.44]});for(const ot of[-.48,.48])ae("trimDark",.07,.78,.06,-1.28+ot,ct+.36,3.62-.19,{uv:[.07,.78]});for(let ot=0;ot<3;ot++)ae("trim",1.08,.1,.045,-1.28,ct+.18+ot*.21,3.62-.19,{uv:[1.08,.1]});ee.push({w:1.06,h:.04,d:.4,x:-1.28,y:ct+.014,z:3.62})}function Pe(L,tt,ct,ot){ee.push({w:ot*2,h:.035,d:ot*2,x:L,y:tt+ot+.015,z:ct,rounded:!0})}function xe(L,tt,ct,ot,it){gi("logs",it,it,ot,10,ct,tt,L,{rot:[Math.PI/2,0,0],uvScale:[1,ot/1.2]});const St=new Lr(1,10);St.scale(it,it,1),St.translate(ct,tt,L+ot/2+.002),Yt("logEnds",St)}{const it=[.13,.13+Math.sqrt(3)*.13,.13+Math.sqrt(3)*.13*2];for(let St=0;St<3;St++){const It=3-St;for(let te=0;te<It;te++){const ve=4.42+St*.13+te*2*.13;xe(2+y(t,-.05,.05),it[St],ve,1.15+y(t,-.1,.1),.13),St===2&&Pe(ve,it[St],2,.13)}}Pe(4.42+.13,it[0],2,.13*.7),Pe(4.42+.13+2*.13,it[0],2,.13*.7)}{const ot=[.11,.11+Math.sqrt(3)*.11];for(let it=0;it<2;it++){const St=2-it;for(let It=0;It<St;It++){const te=-4.72+it*.11+It*2*.11;xe(1+y(t,-.04,.04),ot[it],te,1+y(t,-.08,.08),.11),it===1&&Pe(te,ot[it],1,.11)}}}const Ce={x:rt.postX,y:2.5,z:le+.25};{const L=rt.postX,tt=le+.1;ae("metal",.045,.055,.34,L,2.98,tt+.17,{uv:[.05,.34]}),ae("metal",.04,.26,.04,L,2.86,tt+.02,{uv:[.04,.26]}),ae("metal",.035,.035,.2,L,2.83,tt+.16,{rot:[.7,0,0],uv:[.035,.2]});for(let it=0;it<3;it++)ae("metal",.012,.045,.012,Ce.x,2.795-it*.045,Ce.z,{uv:!1});const ct=2.75;ae("metal",.2,.02,.2,Ce.x,ct,Ce.z,{uv:[.2,.2]}),ae("metal",.22,.02,.22,Ce.x,ct-.28,Ce.z,{uv:[.22,.22]});{const it=new Co(.155,.1,4,1);it.rotateY(Math.PI/4),it.translate(Ce.x,ct+.06,Ce.z),Yt("metal",it)}for(const it of[-.085,.085])for(const St of[-.085,.085])ae("metal",.016,.26,.016,Ce.x+it,ct-.13,Ce.z+St,{uv:!1});const ot=new ci(.028,.008,6,12);ot.translate(Ce.x,ct+.135,Ce.z),Yt("metal",ot),ae("lanternGlass",.15,.22,.15,Ce.x,ct-.15,Ce.z,{uv:!1})}function ln(L){const tt=L.wall,ct=L.u0,ot=L.u1,it=(ct+ot)/2,St=L.visY0,It=L.visY1,te=L.holeY0,ve=L.holeY1,Ke=(St+It)/2,tn=ot-ct,x=It-St,et=-.16,Y=.4,k=(ft,mt)=>{mt-ft<.004||fn("trim",tt,tn+.06,mt-ft,.34,it,(ft+mt)/2,-.172,{uv:[tn,mt-ft]})};k(te,St),k(It,ve),fn("trim",tt,.085,ve-te+.02,Y,ct,(te+ve)/2,et,{uv:[.085,ve-te]}),fn("trim",tt,.085,ve-te+.02,Y,ot,(te+ve)/2,et,{uv:[.085,ve-te]}),fn("trim",tt,tn+.17,.09,Y,it,It+.025,et,{uv:[tn,.09]}),fn("trim",tt,tn+.24,.1,.46,it,St-.04,-.14,{uv:[tn,.1]}),fn("trim",tt,.13,x+.34,.06,ct-.01,Ke+.05,.05,{uv:[.13,x]}),fn("trim",tt,.13,x+.34,.06,ot+.01,Ke+.05,.05,{uv:[.13,x]}),fn("trim",tt,tn+.32,.13,.06,it,It+.1,.05,{uv:[tn,.13]}),fn("trimDark",tt,tn+.16,.09,.05,it,St-.14,.02,{uv:[tn,.09]});const pt=tn-.2,$=x-.02;for(const ft of[-.07,-.15]){const mt=new ii(pt,$);tt.axis==="x"?mt.translate(it,Ke,tt.outer+tt.sign*ft):(mt.rotateY(Math.PI/2),mt.translate(tt.outer+tt.sign*ft,Ke,it)),Yt("glass",mt)}fn("trim",tt,.05,$+.03,.075,it,Ke,-.11,{uv:[.05,$]}),fn("trim",tt,pt+.03,.05,.075,it,Ke,-.11,{uv:[pt,.05]});{const ft=new ii(pt+.02,$-.01);tt.axis==="x"?ft.translate(it,Ke,tt.outer+tt.sign*-.045):(ft.rotateY(Math.PI/2),ft.translate(tt.outer+tt.sign*-.045,Ke,it)),Yt("rain",ft)}tt.axis==="x"?ee.push({w:tn+.12,h:.05,d:.34,x:it,y:St+.035,z:tt.outer+tt.sign*-.1}):ee.push({w:.34,h:.05,d:tn+.12,x:tt.outer+tt.sign*-.1,y:St+.035,z:it})}Zt.forEach(ln);const Ye=new Je;Ye.position.set(-.5199999999999999,c+.02,o-.035),e.add(Ye);let We=null;const Dn=[];{const L=Qt,tt=fe[0],ct=fe[1];fn("trimDark",L,Ht,c-tt,.34,0,(c+tt)/2,-.172,{uv:[Ht,.05]}),fn("trim",L,Ht+.06,ct-vt,.4,0,(vt+ct)/2,-.16,{uv:[Ht,ct-vt]}),fn("trim",L,.08,Te+.1,.42,-Ht/2,c+Te/2+.02,-.16,{uv:[.08,Te]}),fn("trim",L,.08,Te+.1,.42,Ht/2,c+Te/2+.02,-.16,{uv:[.08,Te]}),fn("trim",L,Ht+.3,.12,.42,0,vt+.03,-.16,{uv:[Ht,.12]}),ae("trimDark",Ht+.06,.02,.4,0,c+.01,o-.15,{uv:[Ht,.4]}),ae("metal",.03,.14,.05,Ht/2-.02,c+1.05,o+.01,{uv:!1});const ot=Ht-.1,it=Te-.06,St=.07,It=0,te=[],ve=(Y,k,pt,$,ft,mt,Pt)=>{const st=new qn(Y,k,pt);vn(st,Math.max(Y,pt),k),Pt&&st.rotateZ(Pt),st.translate($,ft,mt),te.push(st)};ve(ot,it,St,ot/2,it/2,It-St/2),ve(ot-.14,.13,.028,ot/2,.28,It+0),ve(ot-.14,.13,.028,ot/2,it-.3,It+0),ve(1.72,.12,.026,ot/2,it/2,It+0,Math.atan2(it-.62,ot-.3));const Ke=Ie(te,"door-wood");if(!Ke)throw new Error("cabin: failed to merge door leaf");We=new Ne(Ke,Se.door),We.castShadow=!0,We.receiveShadow=!0,We.userData.interactId="cabin-door",Ye.add(We);const tn=(Y,k,pt,$,ft,mt,Pt)=>{const st=new qn(Y,k,pt);st.translate($,ft,mt),Dn.push(st.index?st.toNonIndexed():st)};for(const Y of[.52,it-.42]){tn(.56,.06,.016,.3,Y,It+.018),tn(.035,.09,.016,.05,Y,It+.02);for(const k of[.1,.3,.52]){const pt=new ti(.014,.014,.02,6);pt.rotateX(Math.PI/2),pt.translate(k,Y,It+.026),Dn.push(pt)}}const x=new ci(.055,.012,6,14);x.translate(ot-.16,1.02,It+.02),Dn.push(x),tn(.06,.2,.016,ot-.16,1.02,It+.016);const et=new Ne(Ie(Dn,"door-metal"),Se.metal);et.castShadow=!0,Ye.add(et),n.push(We)}function Me(L,tt,ct,ot,it,St,It={}){ae("snow",L,tt,ct,ot,it,St,{uv:[Math.max(L,ct),Math.max(L,ct)],rounded:It.rounded})}{const L=tt=>{const ct=new E(tt*M,-C,0),ot=new E(0,0,1),it=new E(-tt*C,-M,0),St=tt>0?-.035:-.015,It=[],te=22,ve=-.05,Ke=H-.07,tn=G+.08,x=B-.1;for(let $=0;$<=te;$++){const ft=$/te,mt=.07+.05*Math.sin(ft*11+1.7)+.025*Math.sin(ft*27+.4);It.push([ve+(Ke-ve)*ft,tn+mt])}for(let $=1;$<=te;$++){const ft=$/te,mt=.06+.05*Math.sin(ft*9+3.1)+.03*Math.sin(ft*23+2.2);It.push([Ke-mt,tn+(x-tn)*ft])}for(let $=1;$<=te;$++){const ft=$/te,mt=.09+.045*Math.sin(ft*13+.8)+.02*Math.sin(ft*29+2.6);It.push([Ke-(Ke-ve)*ft,x-mt])}for(let $=1;$<te;$++){const ft=$/te;It.push([ve+.02*Math.sin(ft*7+2),x-(x-tn)*ft])}const et=new fl(It.map($=>new $t($[0],$[1]))),Y=new ra(et,{depth:.05,bevelEnabled:!1,steps:1,curveSegments:1});Y.translate(0,0,St);const k=new xn().makeBasis(ct,ot,it).setPosition(0,Ge.ridgeY,0);Y.applyMatrix4(k);const pt=Y.attributes.position;for(let $=0;$<pt.count;$++){const ft=pt.getX($),mt=pt.getZ($);pt.setY($,pt.getY($)+wt(ft,mt))}pt.needsUpdate=!0,Y.computeVertexNormals(),Yt("snow",Y)};L(1),L(-1)}{const L=W,tt=new E(1,0,0),ct=new E(0,-Math.sin(L),Math.cos(L)),ot=new E(0,-Math.cos(L),-Math.sin(L)),it=new E(0,_t(Rt),Rt),St=-Z+.14,It=Z-.14,te=.06,ve=dt-.12,Ke=[],tn=20;for(let k=0;k<=tn;k++){const pt=k/tn;Ke.push([St+(It-St)*pt,te+.04+.02*Math.sin(pt*12)])}for(let k=1;k<=tn;k++){const pt=k/tn,$=.1+.05*Math.sin(pt*10+2.1)+.025*Math.sin(pt*25+.7);Ke.push([It-$,te+(ve-te)*pt])}for(let k=1;k<=tn;k++){const pt=k/tn;Ke.push([It-(It-St)*pt,ve-.05-.03*Math.sin(pt*14+1.2)])}for(let k=1;k<tn;k++){const pt=k/tn;Ke.push([St+.08+.06*Math.sin(pt*9+2.6),ve-(ve-te)*pt])}const x=new fl(Ke.map(k=>new $t(k[0],k[1]))),et=new ra(x,{depth:.05,bevelEnabled:!1,steps:1,curveSegments:1});et.translate(0,0,-.03),et.applyMatrix4(new xn().makeBasis(tt,ct,ot).setPosition(it));const Y=et.attributes.position;for(let k=0;k<Y.count;k++){const pt=Y.getX(k),$=Y.getZ(k);Y.setY(k,Y.getY(k)+Kt(pt,$))}Y.needsUpdate=!0,et.computeVertexNormals(),Yt("snow",et)}for(let L=G+.3;L<=B-.3;L+=.52)Me(.26,.07,.42,A-.14,O+.015,L,{rounded:!0}),L>ue-.35&&L<De+.35||Me(.26,.07,.42,-A+.14,O+.015,L,{rounded:!0});for(let L=-Z+.3;L<=Z-.3;L+=.55)Me(.36,.06,.32,L,_t(ye)+.01,ye-.07,{rounded:!0});for(const L of ee)Me(L.w,L.h,L.d,L.x,L.y,L.z,{rounded:L.rounded});Me(Ct.width+.36,.07,Ct.depth+.36,Ct.x,Ct.capY+.035,Ct.z),Me(Ht+.24,.05,.12,0,vt+.11,o-.01);const Ln=[];{const L=Ge.smokeAnchor;for(let tt=0;tt<12;tt++){const ct=new Fr({map:ie,color:"#cfc6b8",transparent:!0,opacity:0,depthWrite:!1}),ot=new yo(ct);ot.position.set(L.x,L.y,L.z),ot.userData.phase=tt/12,Ln.push(ot),e.add(ot)}}const mn=new Ad("#ffb168",0,10.5,2);mn.position.set(Ce.x,Ce.y,Ce.z+.02),mn.castShadow=!1,e.add(mn);const Zn=Ir({size:128,color:"255,196,128"}),de=new yo(new Fr({map:Zn,color:"#ffbe7a",transparent:!0,opacity:0,depthWrite:!1,blending:Ri}));de.scale.set(1.5,1.5,1),de.position.set(Ce.x,Ce.y,Ce.z+.04),e.add(de);const Qe={};for(const L of Q){const tt=Xe.get(L),ct=Ie(tt,`bucket:${L}`);if(!ct){console.warn(`[cabin] skipping bucket "${L}" (merge failed)`);continue}const ot=Se[L]||Se.trim,it=new Ne(ct,ot);it.name=`cabin-${L}`,ot.transparent,it.castShadow=!(L==="snow"||L==="rain"||L==="glass"||L==="soot"||L==="lanternGlass"),it.receiveShadow=!(L==="rain"||L==="glass"||L==="soot"||L==="lanternGlass"),it.matrixAutoUpdate=!1,it.updateMatrix(),e.add(it),Qe[L]=it}const wn=Qe.snow,qe=Qe.rain;wn&&(wn.visible=!1),qe&&(qe.visible=!1);const dn=[{minX:-s-.12,maxX:-Ht/2-.04,minZ:o-f,maxZ:o+.06,name:"cabin-front-left"},{minX:Ht/2+.04,maxX:s+.12,minZ:o-f,maxZ:o+.06,name:"cabin-front-right"},{minX:-s-.12,maxX:s+.12,minZ:a-.06,maxZ:a+f,name:"cabin-back"},{minX:Ge.leftX-.06,maxX:Ge.leftX+f+.06,minZ:-r-.1,maxZ:r+.1,name:"cabin-left"},{minX:Ge.rightX-f-.06,maxX:Ge.rightX+.06,minZ:-r-.1,maxZ:r+.1,name:"cabin-right"},{minX:Ct.x-Ct.width/2-.18,maxX:Ct.x+Ct.width/2,minZ:Ct.z-Ct.depth/2-.18,maxZ:Ct.z+Ct.depth/2+.18,name:"chimney"},{minX:rt.postX-.16,maxX:rt.postX+.16,minZ:le-.16,maxZ:le+.16,name:"porch-post-right"},{minX:-2.85-.16,maxX:-2.85+.16,minZ:le-.16,maxZ:le+.16,name:"porch-post-left"},{minX:-j-.02,maxX:-1.14,minZ:ge-.1,maxZ:ge+.1,name:"porch-rail-front-left"},{minX:1.14,maxX:j+.02,minZ:ge-.1,maxZ:ge+.1,name:"porch-rail-front-right"},{minX:j-.16,maxX:j+.02,minZ:3.3,maxZ:ge+.1,name:"porch-rail-right"},{minX:-j-.02,maxX:-j+.16,minZ:3.3,maxZ:ge+.1,name:"porch-rail-left"},{minX:-1.86,maxX:-.7,minZ:3.38,maxZ:3.86,name:"porch-bench"},{minX:4.22,maxX:5.1,minZ:1.35,maxZ:2.65,name:"woodpile-right"},{minX:-4.92,maxX:-4.3,minZ:.44,maxZ:1.56,name:"woodpile-left"}],Un=[Qe.logs,Qe.plank,Qe.shingle,Qe.stone,Qe.trimDark,Qe.trim,Qe.core].filter(Boolean),Xt={env:{season:"autumn",weather:"clear",hour:17.2,timeMode:"manual",isNight:!1,windowGlow:!0,overcast:0},elapsed:0,doorOpen:!1,doorAngle:0,smokeLevel:0,smoke:0,glow:0,rain:0,snow:0,lantern:0,wet:0,smokeTarget:0,glowTarget:0,rainTarget:0,snowTarget:0,lanternTarget:0,wetTarget:0};function yi(L){if(L.isNight)return 1;const tt=L.hour??12;return tt>=20||tt<5.5?1:tt>=17?ls(17,20,tt):tt<8?1-ls(5.5,8,tt):0}function Ii(){const L=Xt.env,tt=yi(L),ct=L.overcast??0,ot=L.season==="winter";Xt.glowTarget=L.windowGlow?gn(.42+.58*tt+.15*ct,0,1):0,Xt.lanternTarget=L.windowGlow?gn(.45+.55*tt+.2*ct,0,1.1):gn(.18*ct,0,.3),Xt.rainTarget=L.weather==="rain"||L.weather==="storm"?1:0,Xt.snowTarget=ot||L.weather==="snow"?1:0,Xt.wetTarget=L.weather==="rain"||L.weather==="storm"?1:0,Xt.smokeTarget=Math.max(Xt.smokeLevel,ot?.4:0)}function zi(L={}){Xt.env={...Xt.env,...L},Ii()}function js(L){Xt.doorOpen=!!L,Hr.doorOpen=Xt.doorOpen}function Vl(L){Xt.smokeLevel=gn(Number(L)||0,0,1),Ii()}const va=[[Se.logs,.8,.56],[Se.trim,.76,.5],[Se.trimDark,.8,.54],[Se.plank,.78,.53],[Se.door,.8,.54],[Se.stone,.9,.62],[Se.stoneSoot,.94,.7],[Se.shingle,.84,.54],[Se.soffit,.84,.58]],_a=new Map;for(const[L]of va)_a.set(L,{dry:L.color.clone(),wet:L.color.clone().multiplyScalar(.72)});function tr(L){for(const[tt,ct,ot]of va){tt.roughness=Yi(ct,ot,L);const it=_a.get(tt);tt.color.copy(it.dry).lerp(it.wet,L)}}function Cn(L){Xt.smoke+=(Xt.smokeTarget-Xt.smoke)*(1-Math.exp(-L*1.6));const tt=Ge.smokeAnchor,ct=Xt.smoke;for(let ot=0;ot<Ln.length;ot++){const it=Ln[ot],It=(it.userData.phase+Xt.elapsed*.055)%1,te=Math.sin(Xt.elapsed*.42+ot*1.9)*.5;it.position.set(tt.x+te*It*1.3+Math.sin(Xt.elapsed*.3+ot)*.16*It,tt.y+It*5.2,tt.z+Math.cos(Xt.elapsed*.36+ot*2.1)*.28*It);const ve=.55+It*2.6;it.scale.set(ve,ve*1.2,1),it.material.opacity=ct*.2*Math.sin(Math.PI*Math.min(1,It*1.25))*(1-It*.6),it.visible=ct>.01}}function Di(L=.016,tt){tt&&(Xt.env=tt),Ii();const ct=gn(L,0,.1);Xt.elapsed+=ct;const ot=It=>1-Math.exp(-ct*It),it=Xt.doorOpen?1.62:0;Xt.doorAngle+=(it-Xt.doorAngle)*ot(6.5),Ye.rotation.y=Xt.doorAngle,Xt.glow+=(Xt.glowTarget-Xt.glow)*ot(2.2),Xt.rain+=(Xt.rainTarget-Xt.rain)*ot(2),Xt.snow+=(Xt.snowTarget-Xt.snow)*ot(1.8),Xt.lantern+=(Xt.lanternTarget-Xt.lantern)*ot(3),Xt.wet+=(Xt.wetTarget-Xt.wet)*ot(1.2),Ee.emissiveIntensity=Xt.glow*2.3,Ee.opacity=.3+Xt.glow*.58;const St=.86+.1*Math.sin(Xt.elapsed*9.7)+.05*Math.sin(Xt.elapsed*17.3+1.3)+.035*Math.sin(Xt.elapsed*29.1+.6);mn.intensity=Xt.lantern*11*St,Se.lanternGlass.emissiveIntensity=.45+Xt.lantern*.85*St,de.material.opacity=(.035+Xt.lantern*.14)*St,de.visible=de.material.opacity>.005,Xt.rain>.01&&(Dt.offset.y=(Dt.offset.y-ct*.45)%1),qe&&(qe.visible=Xt.rain>.01,Se.rain.opacity=Xt.rain*.85),wn&&(wn.visible=Xt.snow>.01,Se.snow.opacity=gn(Xt.snow,0,1),Se.snow.depthWrite=Xt.snow>.5),Math.abs(Xt.wet-tr.last)>.002&&(tr(Xt.wet),tr.last=Xt.wet),Cn(ct)}tr.last=0,zi(Xt.env),Di(0,Xt.env),Xt.glow=Xt.glowTarget,Xt.rain=Xt.rainTarget,Xt.snow=Xt.snowTarget,Xt.lantern=Xt.lanternTarget,Xt.wet=Xt.wetTarget,tr(Xt.wet),tr.last=Xt.wet,Ee.emissiveIntensity=Xt.glow*2.3,Ee.opacity=.3+Xt.glow*.58,wn&&(wn.visible=Xt.snow>.01,Se.snow.opacity=gn(Xt.snow,0,1)),qe&&(qe.visible=Xt.rain>.01,Se.rain.opacity=Xt.rain*.85),Ye.rotation.y=Xt.doorAngle;const Hr={group:e,colliders:dn,cameraOccluders:Un,setEnvironment:zi,setDoorOpen:js,setSmokeLevel:Vl,update:Di,doorOpen:!1,doorAnchor:new E(Ge.doorAnchor.x,Ge.doorAnchor.y,Ge.doorAnchor.z),interiorDoorAnchor:new E(Ge.interiorDoorAnchor.x,Ge.interiorDoorAnchor.y,Ge.interiorDoorAnchor.z),clickables:n,smokeAnchor:new E(Ge.smokeAnchor.x,Ge.smokeAnchor.y,Ge.smokeAnchor.z),lanternAnchor:new E(Ce.x,Ce.y,Ce.z),meshes:Qe,materials:Se};return Hr}const Gn=Ge.floorY,Ji=.05,On=Gn+Ji,Hi=os.halfX,Vi=os.halfZ,pi=Gn+os.height,In=os.furniture,fr=-Vi,Vn=Vi,lo=-Hi,co=Hi,Gf=new E,Hf=new Ms,Vf=new ys,R2=new E(1,1,1),Wf=new xn;function P2(i,t=0,e=0,n=0,s=0,r=0,o=0){return Vf.set(s,r,o),Hf.setFromEuler(Vf),Gf.set(t,e,n),Wf.compose(Gf,Hf,R2),i.applyMatrix4(Wf),i}function jn(i=!1){const t=[],e=new Set(["position","normal","uv"]),n={add(s,r=0,o=0,a=0,c=0,l=0,u=0,d="#8a8a8a"){P2(s,r,o,a,c,l,u);let f=s;if(f.index){const h=f.toNonIndexed();f.dispose(),f=h}for(const h of Object.keys(f.attributes))(h==="color"&&!i||h!=="color"&&!e.has(h))&&f.deleteAttribute(h);if(i){const h=f.attributes.position.count,m=new Float32Array(h*3),v=new Ot(d);for(let g=0;g<h;g++)m[g*3]=v.r,m[g*3+1]=v.g,m[g*3+2]=v.b;f.setAttribute("color",new Wn(m,3))}if(f.attributes.normal||f.computeVertexNormals(),!f.attributes.uv){const h=f.attributes.position.count;f.setAttribute("uv",new Wn(new Float32Array(h*2),2))}return t.push(f),n},box(s,r,o,a,c,l,u=0,d=0,f=0,h){return n.add(new qn(s,r,o),a,c,l,u,d,f,h)},cyl(s,r,o,a,c,l,u,d=0,f=0,h=0,m){return n.add(new ti(s,r,o,a),c,l,u,d,f,h,m)},build(s,r=null,o=!1,a=!0){if(!t.length)return null;let c=null;try{c=As(t,!1)}catch{c=null}if(!c){const u=new Je;for(const d of t){const f=new Ne(d,s);f.castShadow=o,f.receiveShadow=a,u.add(f)}return t.length=0,r&&r.add(u),u}t.forEach(u=>u.dispose());const l=new Ne(c,s);return l.castShadow=o,l.receiveShadow=a,r&&r.add(l),l}};return n}function Fe(i,t,e,n,s,r,o,a,c=0,l=0,u=0,d=!0,f=!0){const h=new Ne(new qn(t,e,n),s);return h.position.set(r,o,a),h.rotation.set(c,l,u),h.castShadow=d,h.receiveShadow=f,i.add(h),h}function ai(i,t,e,n,s,r,o,a,c,l=0,u=0,d=0,f=!0,h=!0,m=2){const v=Math.min(s,t/2-1e-4,e/2-1e-4,n/2-1e-4),g=new Ne(new rs(t,e,n,m,v),r);return g.position.set(o,a,c),g.rotation.set(l,u,d),g.castShadow=f,g.receiveShadow=h,i.add(g),g}function hn(i,t,e,n,s,r,o,a,c,l=0,u=0,d=0,f=!0,h=!0,m=!1){const v=new Ne(new ti(t,e,n,s,1,m),r);return v.position.set(o,a,c),v.rotation.set(l,u,d),v.castShadow=f,v.receiveShadow=h,i.add(v),v}function Gi(i,t,e,n,s,r,o,a=!0,c=!0){const l=t.map(([d,f])=>new $t(d,f)),u=new Ne(new nh(l,e),n);return u.position.set(s,r,o),u.castShadow=a,u.receiveShadow=c,i.add(u),u}function Ws(i,t,e,n=.42){const s=new ji({map:i.contact,transparent:!0,opacity:n,depthWrite:!1,color:"#000000"}),r=new Ne(new ii(t,e),s);return r.rotation.x=-Math.PI/2,r.renderOrder=1,r}function L2(){return yn(1024,768,(i,t,e)=>{const n=He(501);i.fillStyle="#362720",i.fillRect(0,0,t,e),i.fillStyle="#7d4330",i.fillRect(30,30,t-60,e-60),i.fillStyle="#6d3b2b",i.fillRect(88,88,t-176,e-176),i.strokeStyle="#c8a878",i.lineWidth=7,i.strokeRect(62,62,t-124,e-124),i.lineWidth=3,i.strokeStyle="rgba(200,168,120,.55)",i.strokeRect(108,108,t-216,e-216);const s=(r,o,a,c,l)=>{i.beginPath(),i.moveTo(r,o-c),i.lineTo(r+a,o),i.lineTo(r,o+c),i.lineTo(r-a,o),i.closePath(),i.fillStyle=l,i.fill()};for(let r=120;r<t-100;r+=86)s(r,74,17,12,"#c8a878"),s(r,e-74,17,12,"#c8a878");for(let r=140;r<e-100;r+=86)s(74,r,12,17,"#c8a878"),s(t-74,r,12,17,"#c8a878");for(let r=0;r<3;r++){const o=t*(.24+r*.26),a=e*.5;s(o,a,64,96,"#3f2a22"),s(o,a,52,80,"#b98a4e"),s(o,a,38,60,"#5a3527"),s(o,a,20,32,"#d6c3a0"),s(o,a,8,14,"#8a4a34"),i.strokeStyle="rgba(214,195,160,.7)",i.lineWidth=4;for(let c=0;c<8;c++){const l=c/8*Ai;i.beginPath(),i.arc(o+Math.cos(l)*82,a+Math.sin(l)*122,7,l,l+2.1),i.stroke()}}for(let r=190;r<e-150;r+=92)for(let o=180;o<t-150;o+=92){if(Math.abs(o-t*.5)<120&&Math.abs(r-e*.5)<130)continue;const a=(Math.round(o/92)+Math.round(r/92))%2===0;s(o,r,14,21,a?"#c8a878":"#4c2f25"),i.fillStyle="rgba(214,195,160,.55)";for(let c=0;c<4;c++){const l=c/4*Ai+.4;i.beginPath(),i.arc(o+Math.cos(l)*26,r+Math.sin(l)*34,2.6,0,Ai),i.fill()}}for(let r=0;r<46;r++){const o=140+n()*(t-280),a=150+n()*(e-300);Math.abs(a-e/2)<130||(i.strokeStyle=n()>.5?"rgba(200,168,120,.5)":"rgba(90,53,39,.7)",i.lineWidth=3,i.beginPath(),i.moveTo(o-8,a),i.lineTo(o+8,a),i.moveTo(o,a-8),i.lineTo(o,a+8),i.stroke())}for(let r=0;r<e;r+=3)i.fillStyle=r%6===0?"rgba(0,0,0,.075)":"rgba(255,238,208,.045)",i.fillRect(0,r,t,1);for(let r=0;r<t;r+=4)i.fillStyle=r%8===0?"rgba(0,0,0,.05)":"rgba(255,240,214,.035)",i.fillRect(r,0,1,e);for(let r=0;r<22;r++){const o=n()*t,a=n()*e,c=y(n,40,190),l=i.createRadialGradient(o,a,0,o,a,c);l.addColorStop(0,`rgba(255,222,178,${y(n,.02,.07)})`),l.addColorStop(1,"rgba(255,222,178,0)"),i.fillStyle=l,i.fillRect(o-c,a-c,c*2,c*2)}li(i,t,e,n,.055)})}function I2(){return yn(512,256,(i,t,e)=>{const n=He(511);i.fillStyle="#4a3527",i.fillRect(0,0,t,e);for(let s=0;s<e;s+=20){const r=s/20%2===0?0:13;for(let o=-20;o<t+20;o+=26){const a=o+r;i.beginPath(),i.ellipse(a,s+10,16,11,0,0,Ai);const c=n();i.fillStyle=c>.66?"#8a6a44":c>.33?"#63492f":"#a3835a",i.fill(),i.strokeStyle="rgba(40,26,14,.45)",i.lineWidth=2,i.stroke(),i.beginPath(),i.ellipse(a-3,s+7,11,5,0,0,Ai),i.fillStyle="rgba(255,236,200,.12)",i.fill()}}li(i,t,e,n,.05)})}function D2(){return yn(512,512,(i,t,e)=>{const n=He(502),s=["#b39471","#c3ad8a","#97845f","#a88a63","#8d8a6a","#bda684","#9c7a5a","#b0a17c"];i.fillStyle="#c3ad8a",i.fillRect(0,0,t,e);const r=4,o=t/r;for(let a=0;a<r;a++)for(let c=0;c<r;c++){i.fillStyle=s[Math.floor(n()*s.length)%s.length],i.fillRect(c*o,a*o,o,o),i.globalAlpha=.08;for(let l=0;l<o;l+=4)i.fillStyle="#000",i.fillRect(c*o,a*o+l,o,1);for(let l=0;l<o;l+=4)i.fillStyle="#fff",i.fillRect(c*o+l,a*o,1,o);i.globalAlpha=1,i.strokeStyle="rgba(226,210,182,.55)",i.lineWidth=2,i.setLineDash([7,6]),i.strokeRect(c*o+7,a*o+7,o-14,o-14),i.setLineDash([])}i.strokeStyle="rgba(74,52,32,.18)",i.lineWidth=2;for(let a=-e;a<t+e;a+=64)i.beginPath(),i.moveTo(a,0),i.lineTo(a+e,e),i.stroke(),i.beginPath(),i.moveTo(a+e,0),i.lineTo(a,e),i.stroke();for(let a=0;a<30;a++){const c=n()*t,l=n()*e,u=y(n,30,130),d=i.createRadialGradient(c,l,0,c,l,u);d.addColorStop(0,`rgba(255,240,214,${y(n,.02,.07)})`),d.addColorStop(1,"rgba(255,240,214,0)"),i.fillStyle=d,i.fillRect(c-u,l-u,u*2,u*2)}li(i,t,e,n,.05)})}function N2(){return yn(256,512,(i,t,e)=>{const n=He(503);i.fillStyle="#b08f5e",i.fillRect(0,0,t,e);for(let s=0;s<t;s+=4)i.fillStyle=s%8===0?"rgba(0,0,0,.055)":"rgba(255,246,222,.05)",i.fillRect(s,0,1,e);for(let s=14;s<t;s+=46)i.fillStyle="rgba(96,66,38,.18)",i.fillRect(s,0,9,e),i.fillStyle="rgba(236,214,168,.16)",i.fillRect(s+9,0,2,e);i.fillStyle="rgba(122,92,58,.5)",i.fillRect(0,e-46,t,46),i.fillStyle="rgba(232,210,164,.55)",i.fillRect(0,e-50,t,3),i.fillStyle="rgba(90,64,38,.45)",i.fillRect(0,18,t,16);for(let s=4;s<t;s+=14)i.fillStyle="rgba(60,42,24,.4)",i.fillRect(s,22,4,5);for(let s=0;s<900;s++)i.fillStyle=n()>.5?"rgba(255,246,224,.05)":"rgba(0,0,0,.045)",i.fillRect(n()*t,n()*e,y(n,1,7),1);li(i,t,e,n,.03)})}function U2(){return yn(256,256,(i,t,e)=>{const n=He(504);i.fillStyle="#8f4f38",i.fillRect(0,0,t,e);for(let s=0;s<e;s+=32)i.fillStyle="#d6c3a0",i.fillRect(0,s+8,t,9),i.fillStyle="#4c5a44",i.fillRect(0,s+21,t,5),i.fillStyle="rgba(40,24,16,.35)",i.fillRect(0,s+29,t,3);for(let s=0;s<1600;s++)i.fillStyle=n()>.5?"rgba(255,240,215,.07)":"rgba(0,0,0,.05)",i.fillRect(n()*t,n()*e,y(n,1,6),1);li(i,t,e,n,.04)})}function F2(){return yn(256,256,(i,t,e)=>{const n=He(505);i.fillStyle="#9a7746",i.fillRect(0,0,t,e),i.lineWidth=5;for(let s=-e;s<t+e;s+=13)i.strokeStyle=s%2===0?"rgba(64,42,20,.5)":"rgba(236,208,158,.35)",i.beginPath(),i.moveTo(s,0),i.lineTo(s+e,e),i.stroke();for(let s=-e;s<t+e;s+=17)i.strokeStyle="rgba(210,178,124,.22)",i.lineWidth=3,i.beginPath(),i.moveTo(s+e,0),i.lineTo(s,e),i.stroke();for(let s=0;s<e;s+=64)i.fillStyle="rgba(72,48,24,.3)",i.fillRect(0,s,t,6);li(i,t,e,n,.06)})}function O2(){return yn(64,128,(i,t,e)=>{const n=He(506);i.fillStyle="#e7e2d6",i.fillRect(0,0,t,e);for(let r=0;r<500;r++)i.fillStyle=n()>.5?"rgba(255,255,255,.16)":"rgba(0,0,0,.09)",i.fillRect(n()*t,n()*e,1,y(n,1,3));i.fillStyle="rgba(255,252,240,.95)",i.fillRect(0,10,t,6),i.fillRect(0,e-18,t,6),i.fillRect(0,e-27,t,3),i.fillStyle="rgba(255,250,235,.5)",i.fillRect(t*.18,e*.34,t*.64,e*.3),i.fillStyle="rgba(40,30,20,.55)";for(let r=0;r<3;r++)i.fillRect(t*.26,e*(.4+r*.075),t*.48,2);const s=i.createLinearGradient(0,0,t,0);s.addColorStop(0,"rgba(0,0,0,.28)"),s.addColorStop(.15,"rgba(0,0,0,0)"),s.addColorStop(.85,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,.28)"),i.fillStyle=s,i.fillRect(0,0,t,e)},{wrapS:on,wrapT:on})}function Lc(i){return yn(512,384,(t,e,n)=>{const s=He(600+i);if(i===0){let o=t.createLinearGradient(0,0,0,n);o.addColorStop(0,"#2f2f38"),o.addColorStop(.42,"#6e5a52"),o.addColorStop(.62,"#c08a58"),o.addColorStop(.78,"#e0b070"),o.addColorStop(1,"#3e3128"),t.fillStyle=o,t.fillRect(0,0,e,n),o=t.createRadialGradient(e*.62,n*.63,0,e*.62,n*.63,e*.23),o.addColorStop(0,"rgba(255,240,205,.9)"),o.addColorStop(.35,"rgba(255,205,140,.35)"),o.addColorStop(1,"rgba(255,190,120,0)"),t.fillStyle=o,t.fillRect(0,0,e,n),t.fillStyle="rgba(56,48,48,.75)",t.beginPath(),t.moveTo(0,n*.72);for(let a=0;a<=e;a+=24)t.lineTo(a,n*.72+Math.sin(a*.02)*12+s()*8);t.lineTo(e,n),t.lineTo(0,n),t.fill();for(let a=0;a<22;a++){const c=s()*e,l=n*y(s,.3,.62),u=`rgba(${30+s()*20},${26+s()*16},${22+s()*12},${y(s,.55,.9)})`;t.fillStyle=u,t.fillRect(c-2,n-l,y(s,2,5),l);for(let d=0;d<4;d++){const f=n-l*(.45+d*.16),h=l*y(s,.12,.3);t.beginPath(),t.moveTo(c,f-l*.14),t.lineTo(c+h,f),t.lineTo(c-h,f+y(s,2,8)),t.closePath(),t.fill()}}t.fillStyle="rgba(238,196,138,.16)",t.fillRect(0,n*.62,e,n*.2)}else if(i===1){t.fillStyle="#d8c6a2",t.fillRect(0,0,e,n);for(let o=0;o<60;o++){const a=s()*e,c=s()*n,l=y(s,16,120),u=t.createRadialGradient(a,c,0,a,c,l);u.addColorStop(0,`rgba(120,88,48,${y(s,.02,.08)})`),u.addColorStop(1,"rgba(120,88,48,0)"),t.fillStyle=u,t.fillRect(a-l,c-l,l*2,l*2)}t.strokeStyle="rgba(74,58,36,.85)",t.lineWidth=2.5,t.beginPath(),t.moveTo(e*.5,n*.85),t.bezierCurveTo(e*.46,n*.55,e*.56,n*.36,e*.5,n*.15),t.stroke();for(let o=0;o<9;o++){const a=.2+o*.075,c=o%2===0?1:-1,l=n*(.85-a*.7);t.save(),t.translate(e*.5,l),t.rotate(c*.7),t.beginPath(),t.ellipse(c*e*.09,0,e*.085,e*.03,0,0,Ai),t.strokeStyle="rgba(74,58,36,.7)",t.lineWidth=2,t.stroke(),t.fillStyle=`rgba(${110+o*6},${116+o*2},${70+o*3},.25)`,t.fill(),t.restore()}t.fillStyle="rgba(80,62,40,.5)";for(let o=0;o<3;o++)t.fillRect(e*.12,n*.88+o*6,e*.24,1.6)}else{let o=t.createLinearGradient(0,0,0,n);o.addColorStop(0,"#b9c2c4"),o.addColorStop(.45,"#d9cdb8"),o.addColorStop(.7,"#c8a878"),o.addColorStop(1,"#5c5a4a"),t.fillStyle=o,t.fillRect(0,0,e,n);for(let a=0;a<4;a++){t.fillStyle=`rgba(${70+a*26},${72+a*24},${66+a*20},${.65-a*.14})`,t.beginPath(),t.moveTo(0,n);for(let c=0;c<=e;c+=16){const l=n*(.42+a*.09)-Math.sin(c*.011+a*2.1)*n*.1-s()*6;t.lineTo(c,l)}t.lineTo(e,n),t.fill()}t.fillStyle="rgba(240,238,225,.22)",t.fillRect(0,n*.56,e,n*.18)}const r=t.createRadialGradient(e/2,n/2,e*.24,e/2,n/2,e*.72);r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(26,18,10,.45)"),t.fillStyle=r,t.fillRect(0,0,e,n),li(t,e,n,s,.05)},{wrapS:on,wrapT:on})}function z2(){const i={};i.floor=Es({size:1024,seed:71,base:"#6a472a",light:"#b4885a",dark:"#2c1a0d",planks:9,plankGap:.016,repeat:[3.4,2.5]}),i.ceiling=Es({size:512,seed:73,base:"#3f2c1b",light:"#7d5b38",dark:"#1d1108",planks:8,repeat:[3,3.4]}),i.beam=Es({size:512,seed:75,base:"#45301d",light:"#8a6540",dark:"#1f120a",repeat:[1,3]}),i.trim=Es({size:512,seed:77,base:"#432c1b",light:"#8a6742",dark:"#1e1108"}),i.furniture=Es({size:512,seed:79,base:"#5b3d25",light:"#a87c4d",dark:"#2a180c"}),i.lightWood=Es({size:256,seed:83,base:"#8a6740",light:"#c9a571",dark:"#4a3018"}),i.darkWood=Es({size:512,seed:85,base:"#332215",light:"#654a2e",dark:"#160d06"}),i.stone=Cl({size:512,seed:91,base:"#57534b",light:"#94897a",dark:"#24231e",repeat:[2,2]}),i.bark=Cu({size:256,seed:94,base:"#4e3a26",dark:"#241a10",light:"#7e6040",repeat:[2,1]}),i.rug=L2(),i.entryRug=I2(),i.quilt=D2(),i.curtain=N2(),i.wool=U2(),i.wicker=F2(),i.bookSpine=O2(),i.art=[Lc(0),Lc(1),Lc(2)],i.linen=nl({size:256,color:"#c9b391",repeat:[2,2]}),i.linenOchre=nl({size:256,color:"#b08b56",repeat:[2,2]}),i.moss=nl({size:256,color:"#566244",repeat:[2,2]}),i.bone=nl({size:256,color:"#d6c7ac",repeat:[3,3]}),i.contact=Ir({size:128,color:"0,0,0"}),i.glow=Px({size:128}),i.flame=Lx({size:128}),i.smoke=rh({size:128}),i.ember=Ir({size:64,color:"255,158,68"}),i.dust=Ir({size:64,color:"255,232,190"});const t=n=>new sn({roughness:.85,metalness:0,...n}),e={floor:t({map:i.floor,roughness:.58,metalness:.02}),ceiling:t({map:i.ceiling,roughness:.88}),beam:t({map:i.beam,roughness:.78}),trim:t({map:i.trim,roughness:.72}),furniture:t({map:i.furniture,roughness:.66}),furnitureDark:t({map:i.darkWood,roughness:.7}),lightWood:t({map:i.lightWood,roughness:.62}),carved:t({map:i.lightWood,roughness:.48}),stone:t({map:i.stone,roughness:.94}),bark:t({map:i.bark,roughness:.95}),stoneHearth:t({map:i.stone,color:"#cfc8bb",roughness:.9}),stoneDark:t({map:i.stone,color:"#6c6459",roughness:.95}),soot:t({color:"#100d0a",roughness:.99}),iron:t({color:"#26231f",roughness:.6,metalness:.62}),brass:t({color:"#a8813f",roughness:.32,metalness:.82}),copper:t({color:"#9a5a34",roughness:.38,metalness:.78}),pewter:t({color:"#6f6d64",roughness:.4,metalness:.72}),ceramicBone:t({color:"#d6c6a8",roughness:.46}),ceramicMoss:t({color:"#7f8a68",roughness:.5}),ceramicRust:t({color:"#9a5b3c",roughness:.55}),linen:t({map:i.linen,roughness:.95}),linenOchre:t({map:i.linenOchre,roughness:.95}),moss:t({map:i.moss,roughness:.95}),boneFab:t({map:i.bone,roughness:.96}),wool:t({map:i.wool,roughness:.98}),quilt:t({map:i.quilt,roughness:.95}),rug:t({map:i.rug,roughness:.98}),entryRug:t({map:i.entryRug,roughness:.98}),curtain:t({map:i.curtain,roughness:.96,side:Bn}),wicker:t({map:i.wicker,roughness:.92}),paper:t({color:"#e2d4b4",roughness:.9}),wax:t({color:"#e8dcc2",roughness:.55,emissive:new Ot("#3a2714"),emissiveIntensity:.12}),charred:t({color:"#1a110b",roughness:.97,emissive:new Ot("#ff4208"),emissiveIntensity:0}),ember:t({color:"#2a120a",roughness:.9,emissive:new Ot("#ff6a1f"),emissiveIntensity:0}),leather:t({color:"#5b3a24",roughness:.58}),clay:t({color:"#9c6244",roughness:.85}),plant:t({color:"#5f7346",roughness:.85,side:Bn}),book:t({map:i.bookSpine,roughness:.82}),art0:new sn({map:i.art[0],roughness:.62}),art1:new sn({map:i.art[1],roughness:.7}),art2:new sn({map:i.art[2],roughness:.62})};return e.flame=new ji({map:i.flame,transparent:!0,blending:Ri,depthWrite:!1,color:"#ffc27a",opacity:.9,side:Bn,toneMapped:!1}),e.flameOuter=new ji({map:i.flame,transparent:!0,blending:Ri,depthWrite:!1,color:"#ff7a24",opacity:.55,side:Bn,toneMapped:!1}),e.candleFlame=new ji({map:i.flame,transparent:!0,blending:Ri,depthWrite:!1,color:"#ffe0a6",opacity:.95,side:Bn,toneMapped:!1}),e.candleGlow=new Fr({map:i.glow,color:"#ffb066",transparent:!0,opacity:.3,depthWrite:!1,blending:Ri}),e.fireGlow=new ji({map:i.glow,transparent:!0,blending:Ri,depthWrite:!1,color:"#ff8a3c",opacity:0,toneMapped:!1}),e.contactShadow=new ji({map:i.contact,transparent:!0,opacity:.4,depthWrite:!1,color:"#000000"}),{T:i,M:e}}function B2({scene:i,callbacks:t={}}={}){const e={showPanel:()=>{},hidePanel:()=>{},notify:()=>{},...t},{T:n,M:s}=z2(),r=new Je;r.name="interior",i.add(r);const o=[],a=[],c=[],l=[],u=He(4242);let d=0,f="third",h={season:"autumn",weather:"clear",hour:17.2,timeMode:"manual",isNight:!1,windowGlow:!1,overcast:0},m=!1,v=0,g=!0,p=1,S=!0,R=1,b=!1,T=null,A=0,F=null,M=null,C=null,O=null,B=null,G=null,nt=[],H=null,J=[],Mt=null,rt=null,At=null,gt=[],yt=null,Rt=null;const ye=[],we=[];let en=null;const Z=new Ot("#ffb977"),ce=new Ot("#f2ead9"),_t=new Ot("#7f93b8"),q=new Ot("#ffc178"),bt={id:"bird-note",eyebrow:"木鸟 · 书架第三层",title:"给愿意停下来的人",body:["这只鸟是我父亲用一截梨木削成的。他说，木头里住着风；只要有人愿意静下来听，它就会把风放出来。","我离开林子的那年冬天，把它留在了这里。后来每次回来，它都还朝着门的方向——像是在等某个推门进来的人。","如果你读到这里，请替我照看窗边那盏灯。山里的夜很长，赶路的人需要看见一点暖。"],footer:"—— 小屋旧主人 · 于初雪之前"},wt={fire:0,chandelier:0,window:0,windowColor:new Ot("#ffd9ae"),chandelierColor:new Ot("#ffc178")};new Ot;function Kt(){const z=new Ne(new qn(Hi*2+.3,Ji,Vi*2+.3),s.floor);z.position.set(0,Gn+Ji/2-.001,0),z.receiveShadow=!0,z.castShadow=!1,r.add(z);const V=jn(),I=.022;V.box(Hi*2,I,.006,0,On+I/2,fr+.004),V.box(Hi*2,I,.006,0,On+I/2,Vn-.004),V.box(.006,I,Vi*2,lo+.004,On+I/2,0),V.box(.006,I,Vi*2,co-.004,On+I/2,0),V.build(s.soot,r,!1,!1);const U=new Ne(new ii(Hi*2+.34,Vi*2+.34),s.ceiling);U.rotation.x=Math.PI/2,U.position.set(0,pi-.01,0),U.receiveShadow=!0,r.add(U);const D=jn(),X=.15,at=.035,Lt=On+X/2;D.box(Hi*2,X,at,0,Lt,fr+at/2),D.box(Hi*2,X,at,0,Lt,Vn-at/2),D.box(at,X,Vi*2,lo+at/2,Lt,0),D.box(at,X,Vi*2,co-at/2,Lt,0);const se=.3,me=.07,re=pi-se/2-.004;D.box(Hi*2,se,me,0,re,fr+me/2),D.box(Hi*2,se,me,0,re,Vn-me/2),D.box(me,se,Vi*2,lo+me/2,re,0),D.box(me,se,Vi*2,co-me/2,re,0);const Wt=pi-se-.03;D.box(Hi*2,.055,.105,0,Wt,fr+.0525),D.box(Hi*2,.055,.105,0,Wt,Vn-.0525),D.box(.105,.055,Vi*2,lo+.0525,Wt,0),D.box(.105,.055,Vi*2,co-.0525,Wt,0);const Ct=.16,ue=pi-On,De=On+ue/2;for(const An of[-1,1])for(const Yn of[-1,1])D.box(Ct,ue,Ct,An*(Hi-Ct/2),De,Yn*(Vi-Ct/2));const je=.11,kn=.05;for(const An of[-3.02,1.58])D.box(je,ue,kn,An,De,fr+kn/2);for(const An of[-2.5,1.92])D.box(je,ue,kn,lo+kn/2,De,An);for(const An of[-2.42,2.18])D.box(je,ue,kn,co-kn/2,De,An);for(const An of[-1.42,1.42])D.box(je,ue,kn,An,De,Vn-kn/2);D.build(s.trim,r,!1,!0);const Xn=jn();for(const An of[-2.45,0,2.45])Xn.box(.17,.18,Vi*2-.08,An,pi-.1,0);for(const An of[-1.92,1.92])Xn.box(Hi*2-.08,.13,.13,0,pi-.075,An);Xn.build(s.beam,r,!0,!0);const Nn=jn();Nn.add(new ci(.035,.008,5,8),0,pi-.21,1.22,Math.PI/2),Nn.add(new ci(.035,.008,5,8),0,pi-.21,-1.32,Math.PI/2),Nn.add(new ci(.035,.008,5,8),-2.45,pi-.19,1.64,Math.PI/2),Nn.build(s.iron,r,!1,!1);for(const An of Ge.windows)An.face==="front"&&(Ht(An),vt(An));zt()}function Ht(z){const V=Gn+z.y,I=V+z.height/2,U=V-z.height/2,D=Vn-.026,X=jn(),at=.1;for(const Ct of[-1,1])X.box(at,z.height+.22,.052,z.x+Ct*(z.width/2+at/2),(I+U)/2+.02,D);X.box(z.width+at*2+.06,.11,.052,z.x,I+.055,D),X.box(z.width+at*2+.02,.075,.045,z.x,U-.085,D+.004),X.build(s.trim,r,!1,!0),Fe(r,z.width+.34,.055,.16,s.trim,z.x,U-.028,Vn-.08,0,0,0,!0,!0);const Lt=I+.17,se=Vn-.205,me=hn(r,.017,.017,z.width+.62,8,s.brass,z.x,Lt,se,0,0,Math.PI/2,!1,!0);me.castShadow=!1;for(const Ct of[-1,1])hn(r,.03,.03,.05,8,s.brass,z.x+Ct*(z.width/2+.33),Lt,se,0,0,Math.PI/2,!1,!0),Fe(r,.03,.06,.2,s.brass,z.x+Ct*(z.width*.34),Lt,Vn-.115,0,0,0,!1,!0);const re=jn(),Wt=7;for(let Ct=0;Ct<Wt;Ct++){const ue=Ct/(Wt-1)-.5;re.add(new ci(.026,.006,4,7),z.x+ue*(z.width+.58),Lt,se,0,0,0)}re.build(s.brass,r,!1,!1)}function Te(z,V,I){const X=new ii(z,V,26,4),at=X.attributes.position;for(let Lt=0;Lt<at.count;Lt++){const se=at.getX(Lt),me=at.getY(Lt),re=se/z+.5,Wt=me/V+.5,Ct=.86+.14*Wt,ue=.038*(.3+.7*(1-Wt)),De=Math.sin(re*Math.PI*2*I+.5)*ue*Math.sin(Math.PI*gn(re,.02,.98));at.setX(Lt,se*Ct),at.setZ(Lt,De)}return X.computeVertexNormals(),X}function vt(z){const V=Gn+z.y,U=V+z.height/2+.17,D=Vn-.205,X=.78,at=V-z.height/2,se=z.x>0?On+.055:at-.12,me=U-se,re=Te(X,me,3),Wt={left:null,right:null,win:z,rodY:U,bottom:se,height:me,z:D,closedOffset:.315,openOffset:z.width/2+.16,openScale:.36,seed:u()*10};for(const ue of[-1,1]){const De=new Je;De.position.set(z.x+ue*Wt.closedOffset,U,D);const je=new Ne(re,s.curtain);je.position.y=-me/2,je.castShadow=!1,je.receiveShadow=!0,je.userData.interactId=z.x<0?"curtains-left":"curtains-right",De.add(je),r.add(De),ue<0?Wt.left=De:Wt.right=De,Wt[ue<0?"leftMesh":"rightMesh"]=je}const Ct={id:z.x<0?"curtains-left":"curtains-right",label:"窗帘",anchor:new E(z.x,1.78,Vn-.68),radius:2,objects:[Wt.leftMesh,Wt.rightMesh],getPrompt:()=>({key:"E",action:g?"拉上窗帘":"拉开窗帘"}),available:()=>f==="first",action:()=>Se()};a.push(Ct),ye.push(Wt)}function zt(){const z=Vn-.026,V=jn(),I=Ge.door.height,U=Ge.door.width,D=Gn+I,X=D+.11;for(const at of[-1,1])V.box(.1,X-On,.052,at*(U/2+.05),(On+X)/2,z);V.box(U+.3,.11,.052,0,D+.055,z),V.build(s.trim,r,!1,!0),Fe(r,U+.14,Ji+.012,.3,s.furnitureDark,0,Gn+(Ji+.012)/2,Vn-.13,0,0,0,!1,!0)}function Gt(){const z=In.fireplace.z,V=-3.42,I=-3.9,U=(V+I)/2,D=V-I,X=-1.72,at=.48,Lt=-1.11,se=-.13,me=Gn+.06,re=Gn+.78,Wt=Gn+.96,Ct=Gn+1.08,ue=new Je;ue.name="fireplace",ue.position.y=Ji,r.add(ue);const De=[],je=Fe(ue,1,.03,2.5,s.stoneHearth,-3.5,Gn+.015,z,0,0,0,!1,!0);De.push(je);const kn=jn();for(let de=0;de<9;de++){const Qe=-1.84+de*.3;kn.box(.075,.028,.26,-3.02,Gn+.038,Qe,0,0,0,Ci(u,["#8a8376","#6f695e","#9a9182"]))}kn.build(s.stone,ue,!1,!0);const Xn=jn();Xn.box(D,Wt-Gn,Lt-X,U,(Gn+Wt)/2,(X+Lt)/2),Xn.box(D,Wt-Gn,at-se,U,(Gn+Wt)/2,(se+at)/2),Xn.box(D,Wt-re,se-Lt,U,(re+Wt)/2,z),Xn.build(s.stone,ue,!0,!0);const Nn=jn();Nn.box(.05,re-.38,se-Lt,-3.865,(.38+re)/2,z),Nn.box(.44,re-.38,.025,U,(.38+re)/2,Lt+.012),Nn.box(.44,re-.38,.025,U,(.38+re)/2,se-.012),Nn.box(.44,.025,se-Lt,U,re-.012,z),Nn.build(s.soot,ue,!1,!0);const An=Fe(ue,.44,.03,se-Lt,s.soot,U,.395,z,0,0,0,!1,!0);De.push(An);const Yn=jn(!0),w=["#5c574e","#4b463f","#6a6459","#413d36","#736b5e","#565046","#625b50"];for(const[de,Qe]of[[(X+Lt)/2,Lt-X],[(se+at)/2,at-se]])for(let wn=Gn+.14;wn<Wt-.08;wn+=.19)for(let qe=de-Qe/2+.1;qe<de+Qe/2-.06;qe+=y(u,.19,.27)){if(u()<.3)continue;const dn=y(u,.1,.17),Un=y(u,.075,.115),Xt=y(u,.008,.02);Yn.box(Xt,Un,dn,V+Xt/2+.001,wn+y(u,-.02,.02),qe+y(u,-.02,.02),0,0,y(u,-.08,.08),Ci(u,w))}for(let de=Lt+.07;de<se-.02;de+=y(u,.16,.21)){if(u()<.2)continue;const Qe=y(u,.11,.16),wn=y(u,.11,.16),qe=y(u,.008,.02);Yn.box(qe,wn,Qe,V+qe/2+.001,re+wn*.5+.005,de,0,0,0,Ci(u,w))}for(let de=Gn+.08;de<Wt-.05;de+=.24){const Qe=y(u,.012,.026);Yn.box(Qe,.16,.2,V+Qe/2+.001,de+.075,X+.11,0,0,0,Ci(u,w)),Yn.box(Qe,.16,.2,V+Qe/2+.001,de+.075,at-.11,0,0,0,Ci(u,w))}Yn.build(new sn({vertexColors:!0,roughness:.96,metalness:0}),ue,!1,!0);const W=Fe(ue,.32,pi-Ct,1.74,s.stone,-3.74,(Ct+pi)/2,z,0,0,0,!0,!0);De.push(W);const dt=jn(!0);for(let de=Ct+.16;de<pi-.18;de+=.34)for(let Qe=z-.72;Qe<z+.72;Qe+=y(u,.34,.46)){if(u()<.25)continue;const wn=y(u,.16,.26),qe=y(u,.14,.21),dn=y(u,.007,.016);dt.box(dn,qe,wn,-3.58+dn/2,de+y(u,-.03,.03),Qe+y(u,-.03,.03),0,0,y(u,-.05,.05),Ci(u,w))}dt.build(new sn({vertexColors:!0,roughness:.96}),ue,!1,!0);const lt=Fe(ue,.6,.13,2.26,s.furniture,-3.6,Ct-.065,z,0,0,0,!0,!0);De.push(lt);const j=jn();for(const de of[-1.28,.04,z])j.box(.16,.14,.1,-3.52,Ct-.2,de+0,0,0,0);j.build(s.furnitureDark,ue,!0,!0);const pe=new Ne(new ii(.86,.22),new ji({map:yn(128,64,(de,Qe,wn)=>{const qe=de.createLinearGradient(0,0,0,wn);qe.addColorStop(0,"rgba(10,8,6,.0)"),qe.addColorStop(.65,"rgba(12,9,6,.30)"),qe.addColorStop(1,"rgba(10,7,5,.55)"),de.fillStyle=qe,de.fillRect(0,0,Qe,wn)},{wrapS:on,wrapT:on}),transparent:!0,depthWrite:!1,opacity:.8}));pe.rotation.y=Math.PI/2,pe.position.set(-3.413,re+.09,z),ue.add(pe);const le=jn();le.box(.055,.055,1.1,V+.004,re+.022,z),le.box(.055,.045,1.1,V+.004,me-.02,z),le.box(.055,re-me+.06,.055,V+.004,(me+re)/2,Lt-.018),le.box(.055,re-me+.06,.055,V+.004,(me+re)/2,se+.018),le.build(s.iron,ue,!1,!0);const ee=(de,Qe,wn,qe)=>{const dn=new Je;return dn.position.set(de,Qe,wn),dn.scale.setScalar(qe),Gi(dn,[[.055,0],[.055,.012],[.022,.02],[.016,.06],[.03,.07],[.018,.08],[.02,.11],[.036,.12],[.036,.135]],10,s.brass,0,0,0),hn(dn,.0145,.017,.2,8,s.wax,0,.235,0,0,0,0,!1,!0),Qt(dn,0,.35,0,.11),ue.add(dn),dn};ee(-3.58,Ct,z-.72,1),ee(-3.58,Ct,z+.3,.85),Gi(ue,[[.052,0],[.062,.02],[.058,.09],[.04,.13],[.036,.16],[.05,.17]],12,s.ceramicRust,-3.58,Ct,z-.24,!0,!0),Gi(ue,[[.03,0],[.055,.01],[.075,.035],[.07,.05]],12,s.ceramicMoss,-3.58,Ct,z+.06,!0,!0),ut(.74,.52,s.art0,s.furnitureDark,-3.505,2.18,z,Math.PI/2);const ge=jn();for(const de of[-1,1])ge.box(.14,.02,.03,U+.02,.455,z+de*.31),ge.box(.03,.14,.03,U+.1,.5,z+de*.31),ge.box(.14,.02,.03,-3.55,.455,z+de*.31);for(let de=0;de<3;de++)ge.box(.02,.02,.68,-3.55+de*.06,.465,z);ge.build(s.iron,ue,!1,!0);const Ae=[],$e=[{x:-3.6,y:.5,z:z-.1,ry:.12,rz:.02,r:.06,l:.62},{x:-3.62,y:.585,z:z+.07,ry:-.18,rz:-.04,r:.055,l:.56},{x:-3.54,y:.46,z:z-.05,ry:.55,rz:.1,r:.05,l:.48}];for(const de of $e){const Qe=s.charred.clone();Ae.push(Qe);const wn=hn(ue,de.r,de.r*.92,de.l,8,Qe,de.x,de.y,de.z,Math.PI/2,0,de.ry,!1,!0);wn.rotation.z=de.rz,De.push(wn)}J=Ae;for(let de=0;de<9;de++){const Qe=new Ne(new bo(y(u,.03,.06),0),s.ember.clone());Qe.position.set(-3.62+y(u,-.06,.1),.41+y(u,0,.03),z+y(u,-.38,.38)),Qe.rotation.set(u()*3,u()*3,u()*3),Qe.castShadow=!1,Qe.receiveShadow=!1,ue.add(Qe),J.push(Qe.material)}const Pe=new Pn,xe=new Float32Array(120);for(let de=0;de<40;de++)xe[de*3]=-3.66+u()*.2,xe[de*3+1]=.42+u()*.1,xe[de*3+2]=z+y(u,-.4,.4);Pe.setAttribute("position",new Wn(xe,3));const Ce=new Pr({map:n.ember,size:.055,transparent:!0,blending:Ri,depthWrite:!1,color:"#ff8a35",opacity:0,sizeAttenuation:!0,toneMapped:!1});H=new So(Pe,Ce),ue.add(H);const ln=new Je;ln.position.set(-3.55,0,z),ue.add(ln);const Ye=[[-.12,.64,-.2,.46,.88,.9],[0,.72,.02,.5,1,1],[-.05,.6,.2,.4,.78,.85],[.06,.78,-.08,.34,.68,.8],[0,.55,-.3,.3,.56,.7]];for(let de=0;de<Ye.length;de++){const[Qe,wn,qe,dn,Un,Xt]=Ye[de];for(const yi of[-.22,.22]){const Ii=de%2===0?s.flame:s.flameOuter,zi=new Ne(new ii(dn,Un),Ii);zi.position.set(-.02,wn,Qe+qe),zi.rotation.set(0,Math.PI/2+yi,0),zi.renderOrder=5,ln.add(zi),l.push({mesh:zi,baseY:wn,baseScaleX:dn,baseScaleY:Un,phase:u()*Ai,speed:y(u,2.2,3.6),sc:Xt})}}const We=new Ne(new ii(.28,.3),s.flame);We.position.set(-.01,.5,-.02),We.rotation.y=Math.PI/2,We.renderOrder=6,ln.add(We),l.push({mesh:We,baseY:.5,baseScaleX:.28,baseScaleY:.3,phase:1.13,speed:2.9,sc:.6}),rt=new Ne(new ii(.8,.66),s.fireGlow),rt.rotation.y=Math.PI/2,rt.position.set(-3.4,.78,z),rt.renderOrder=4,ue.add(rt),At=new Ne(new ii(.6,.74),s.fireGlow.clone()),At.rotation.x=-Math.PI/2,At.position.set(-3.63,.452,z),At.renderOrder=4,ue.add(At),Mt=new Ne(new ii(1.55,1.15),s.fireGlow.clone()),Mt.rotation.x=-Math.PI/2,Mt.position.set(-2.98,On+.034,z),Mt.renderOrder=3,r.add(Mt);const Dn=new Pn,Me=new Float32Array(108);nt=[];for(let de=0;de<36;de++)Me[de*3]=-3.6,Me[de*3+1]=.45,Me[de*3+2]=z,nt.push({x:-3.58,y:.45+u()*.2,z:z+y(u,-.3,.3),vx:y(u,-.05,.12),vy:y(u,.25,.7),vz:y(u,-.1,.1),life:u(),max:y(u,.6,1.5),wob:u()*Ai});Dn.setAttribute("position",new Wn(Me,3));const Ln=new Pr({map:n.ember,size:.034,transparent:!0,blending:Ri,depthWrite:!1,color:"#ffb066",opacity:0,sizeAttenuation:!0,toneMapped:!1});G=new So(Dn,Ln),G.frustumCulled=!1,ue.add(G),Ut(-3.34,On+.03,z+.86),M=new Mc("#ff9a4d",0,7,.94,.9,1.45),M.position.set(-3.02,1.02,z),M.target.position.set(-1.15,.52,z),M.castShadow=!1,M.name="interior-fire-light",ue.add(M,M.target);const mn={id:"fireplace",label:"壁炉",anchor:new E(-3.18,1.1,z),radius:2.35,objects:De,getPrompt:()=>({key:"E",action:m?"熄灭壁炉":"点燃壁炉"}),available:()=>!0,action:()=>Ee()};for(const de of De)de.userData.interactId="fireplace";a.push(mn);const Zn=Ws(n,2.4,1.6,.5);Zn.position.set(-3,On+.0025,z),r.add(Zn),o.push({minX:-3.98,maxX:-2.96,minZ:-1.92,maxZ:.68,name:"fireplace"})}function Ut(z,V,I){const U=new Je;U.position.set(z,V,I),Gi(U,[[.085,0],[.1,.02],[.105,.07],[.095,.13],[.062,.17],[.052,.185],[.058,.195]],14,s.copper,0,0,0,!0,!0),hn(U,.022,.028,.028,8,s.brass,0,.205,0,0,0,0,!1,!0),hn(U,.018,.03,.16,8,s.copper,.1,.14,0,0,0,-1,!1,!0);const D=new Ne(new ci(.075,.008,6,14,Math.PI),s.iron);D.position.set(-.005,.19,0),D.rotation.set(0,0,0),U.add(D),hn(U,.11,.12,.02,12,s.iron,0,-.01,0,0,0,0,!1,!0);for(let X=0;X<4;X++){const at=new Fr({map:n.smoke,color:"#cfc4b4",transparent:!0,opacity:0,depthWrite:!1,blending:_o}),Lt=new yo(at);Lt.position.set(.01,.24+X*.12,0),Lt.scale.setScalar(.1+X*.05),Lt.renderOrder=7,U.add(Lt),gt.push({sprite:Lt,phase:X/4,base:.1+X*.05})}return r.add(U),U}function Qt(z,V,I,U,D=1){const X=new Je;X.position.set(V,I,U),X.scale.setScalar(D);const at=s.candleFlame,Lt=new Ne(new ii(.075,.13),at);Lt.position.y=.05;const se=new Ne(new ii(.075,.13),at);se.position.y=.05,se.rotation.y=Math.PI/2,Lt.renderOrder=8,se.renderOrder=8,X.add(Lt,se);const me=new yo(s.candleGlow);return me.position.y=.06,me.scale.setScalar(.3),me.renderOrder=7,X.add(me),z.add(X),c.push({mesh:X,baseScale:D,phase:u()*Ai,speed:y(u,5,9),baseY:0,kind:"candle"}),X}function ke(){const z=In.bookshelf.x,V=In.bookshelf.z,I=In.bookshelf.w,U=In.bookshelf.d,D=In.bookshelf.h,X=Gn,at=new Je;at.name="bookshelf",at.position.y=Ji,r.add(at);const Lt=.055,se=.038,me=I-Lt*2-.02,re=V-U/2+.045;Fe(at,I,.11,U+.02,s.furnitureDark,z,X+.055,V);for(const Pe of[-1,1])Fe(at,Lt,D-.1,U,z+Pe*(I/2-Lt/2),X+.1+(D-.1)/2,V);Fe(at,I-.06,D-.13,.025,s.darkWood,z,X+.1+(D-.13)/2,V-U/2+.028),Fe(at,I+.04,.045,U+.035,s.furniture,z,X+D-.0225,V),Fe(at,I+.02,.035,.04,s.furnitureDark,z,X+D-.06,V+U/2-.02);const Wt=jn();for(let Pe=0;Pe<5;Pe++)Wt.box(I/5-.012,D-.14,.012,z-I/2+I/10+Pe*(I/5),X+.1+(D-.13)/2,V-U/2+.042);Wt.build(s.furniture,at,!1,!0);const Ct=[.15,.56,.97,1.38,1.79],ue=jn();ue.box(.035,D-.16,U-.05,z,X+.1+(D-.14)/2,V);for(const Pe of Ct)ue.box(me,se,U-.04,z,X+Pe-se/2,V);ue.build(s.furnitureDark,at,!0,!0);const De=["#7c3f2e","#8a6a3e","#5c6b4a","#3f4a52","#a8814f","#6d4432","#8f8352","#57352c","#7d8464","#b39a6a","#4d5c50","#9a5a3c","#c4b48c","#6a4a5a","#87926e"],je=[],kn=U/2,Xn=(Pe,xe,Ce,ln={})=>{let Ye=Pe;for(;Ye<xe-.035;){const We=y(u,.024,.062);if(Ye+We>xe)break;if(ln.skip&&Ye+We>ln.skip[0]&&Ye<ln.skip[1]){Ye=ln.skip[1];continue}const Dn=y(u,ln.hMin??.19,ln.hMax??.29),Me=y(u,.16,kn+.1),Ln=u()<.13?y(u,-.09,.09):0;je.push({x:Ye+We/2,y:X+Ce+Dn/2*Math.cos(Ln)+We/2*Math.abs(Math.sin(Ln)),z:re+Me/2+y(u,0,.02),w:We,h:Dn,d:Me,rz:Ln,ry:y(u,-.02,.02),color:Ci(u,De)}),Ye+=We+y(u,.0015,.006),u()<.055&&(Ye+=y(u,.02,.055))}},Nn=z-me/2+.02,An=z-.03,Yn=z+.03,w=z+me/2-.02;Xn(Nn,An,.56),Xn(Yn,w,.56),Xn(Nn,An,.97),Xn(Yn,w,.97,{skip:[-1.06,-.92]}),Xn(Nn,An,1.38),Xn(Yn,w,1.38,{skip:[-1.19,-.86]}),Xn(Nn,An,1.79,{hMin:.16,hMax:.22}),Xn(Yn,w,1.79,{hMin:.15,hMax:.21,skip:[-1.2,-1.02]});const W=new qn(1,1,1),dt=new hl(W,s.book,je.length),lt=new xn,j=new Ms,pe=new ys,le=new Ot;je.forEach((Pe,xe)=>{pe.set(0,Pe.ry,Pe.rz),j.setFromEuler(pe),lt.compose(new E(Pe.x,Pe.y,Pe.z),j,new E(Pe.w,Pe.h,Pe.d)),dt.setMatrixAt(xe,lt),le.set(Pe.color).offsetHSL(y(u,-.02,.02),y(u,-.07,.07),y(u,-.05,.05)),dt.setColorAt(xe,le)}),dt.instanceMatrix.needsUpdate=!0,dt.instanceColor&&(dt.instanceColor.needsUpdate=!0),dt.castShadow=!1,dt.receiveShadow=!0,at.add(dt);const ee=(Pe,xe,Ce,ln,Ye,We,Dn,Me=0)=>{const Ln=Fe(at,ln,Ye,We,s.book,Pe,xe+Ye/2,Ce,0,Me,0,!1,!0);return Ln.material=s.book,Ln};ee(z-.42,X+.15,re+.13,.2,.035,.15,"#7c3f2e",.06),ee(z-.41,X+.185,re+.14,.18,.028,.13,"#c4b48c",-.04),ee(z-.43,X+.213,re+.12,.16,.03,.12,"#4d5c50",.1);const ge=(Pe,xe,Ce,ln)=>{const Ye=new Je;Ye.position.set(Pe,X+.15,xe),hn(Ye,Ce,Ce*.86,ln,14,s.wicker,0,ln/2,0,0,0,0,!1,!0,!0);const We=new Ne(new ci(Ce,.012,6,16),s.wicker);return We.rotation.x=Math.PI/2,We.position.y=ln,Ye.add(We),hn(Ye,Ce*.98,Ce*.98,.012,14,s.fabricDark??s.furnitureDark,0,ln-.01,0,0,0,0,!1,!0),at.add(Ye),Ye};ge(z+.34,V-.02,.16,.24),ge(z+.66,V-.03,.13,.2),Gi(at,[[.032,0],[.04,.01],[.052,.05],[.045,.09],[.05,.1]],10,s.ceramicMoss,z+.58,X+.97,re+.1,!1,!0),hn(at,.025,.028,.07,10,s.ceramicRust,z-1.02,X+.97+.035,re+.12,0,0,0,!1,!0),Gi(at,[[.05,0],[.065,.02],[.06,.1],[.045,.13],[.05,.145]],12,s.clay,z+.42,X+D,re+.12,!0,!0);const Ae=jn();for(let Pe=0;Pe<7;Pe++){const xe=u()*Ai,Ce=y(u,.1,.5);Ae.cyl(.0022,.0035,y(u,.2,.34),4,z+.42+Math.cos(xe)*.02,X+D+.14+.12,re+.12+Math.sin(xe)*.02,Math.cos(xe)*Ce,0,Math.sin(xe)*Ce)}Ae.build(s.furnitureDark,at,!1,!0),ut(.34,.26,s.art1,s.furnitureDark,z-1.62,X+D+.14,V-.02,0,-.1,at),Le(z+.5,On+1.38,V+.02),o.push({minX:z-I/2-.02,maxX:z+I/2+.02,minZ:V-U/2-.02,maxZ:V+U/2+.03,name:"bookshelf"});const $e=Ws(n,1.9,.7,.38);$e.position.set(z,On+.004,V+.25),r.add($e)}function Le(z,V,I){const U=new Je;U.position.set(z,V,I),A=.55,U.rotation.y=A;const D=[];D.push(hn(U,.052,.06,.022,12,s.furnitureDark,0,.011,0,0,0,0,!0,!0));const X=ai(U,.078,.098,.15,.038,s.carved,0,.085,-.012,.06,0,0,!0,!0,3);D.push(X);const at=ai(U,.062,.07,.07,.03,s.carved,0,.078,.045,-.15,0,0,!0,!0,3);D.push(at);const Lt=new Ne(new mi(.042,14,10),s.carved);Lt.position.set(0,.152,.062),Lt.castShadow=!0,U.add(Lt),D.push(Lt);const se=new Ne(new Co(.013,.05,7),s.furnitureDark);se.rotation.x=Math.PI/2,se.position.set(0,.146,.108),se.castShadow=!0,U.add(se),D.push(se);const me=Fe(U,.045,.012,.11,s.carved,0,.098,-.105,-.42,0,0,!0,!0);D.push(me);for(const Ct of[-1,1]){const ue=ai(U,.016,.052,.088,.008,s.carved,Ct*.042,.092,-.008,0,0,Ct*.16,!0,!0,2);D.push(ue)}for(const Ct of[-1,1]){const ue=new Ne(new mi(.0075,6,5),s.soot);ue.position.set(Ct*.028,.16,.082),U.add(ue)}const re=jn();for(let Ct=0;Ct<3;Ct++)re.box(.03,.002,.002,0,.128-Ct*.016,.048+Ct*.004,0,0,0);re.build(s.furnitureDark,U,!1,!1);for(const Ct of[-1,1])hn(U,.005,.006,.03,5,s.furnitureDark,Ct*.019,.032,.012,0,0,0,!1,!0);T=U,r.add(U);const Wt={id:"bird-note",label:"木鸟",anchor:new E(z,V+.13,I+.14),radius:1.95,objects:D,getPrompt:()=>({key:"E",action:"端详木鸟"}),available:()=>!0,action:()=>Q()};for(const Ct of D)Ct.userData.interactId="bird-note";a.push(Wt)}function ut(z,V,I,U,D,X,at,Lt=0,se=0,me=r){const re=new Je;re.position.set(D,X,at),re.rotation.y=Lt,se&&(re.rotation.x=se);const Wt=Math.min(.055,z*.09),Ct=.035;return Fe(re,z+Wt*2,Wt,Ct,U,0,V/2+Wt/2,0,0,0,0,!1,!0),Fe(re,z+Wt*2,Wt,Ct,U,0,-V/2-Wt/2,0,0,0,0,!1,!0),Fe(re,Wt,V,Ct,U,-z/2-Wt/2,0,0,0,0,0,!1,!0),Fe(re,Wt,V,Ct,U,z/2+Wt/2,0,0,0,0,0,!1,!0),Fe(re,z+.012,V+.012,.012,s.paper,0,0,-.016,0,0,0,!1,!0),Fe(re,z-.03,V-.03,.006,I,0,0,.002,0,0,0,!1,!0),me.add(re),re}function Jt(){const z=In.bed.x,V=In.bed.z,I=In.bed.w,U=In.bed.d,D=Gn,X=new Je;X.name="bed",X.position.y=Ji,r.add(X);const at=V-U/2+.055,Lt=V+U/2-.055,se=I/2-.05,me=D+.64,re=[[at,1.44],[at,1.44],[Lt,.98],[Lt,.98]],Wt=[z-se,z+se,z-se,z+se];for(let De=0;De<4;De++){const je=D+re[De][1];Fe(X,.095,je-D,.095,s.furniture,Wt[De],(D+je)/2,re[De][0],0,0,0,!0,!0),Gi(X,[[.055,0],[.07,.02],[.045,.06],[.05,.09],[.03,.12],[.005,.13]],10,s.furnitureDark,Wt[De],je,re[De][0],!1,!0)}Fe(X,I-.16,.11,.055,s.furniture,z,D+1.34,at,0,0,0,!0,!0),Fe(X,I-.16,.09,.05,s.furniture,z,D+.6,at,0,0,0,!0,!0);for(let De=0;De<5;De++){const je=z-(I-.4)/2+De*((I-.4)/4);hn(X,.021,.021,.66,7,s.furnitureDark,je,D+.97,at,0,0,0,!1,!0)}Fe(X,I-.16,.1,.05,s.furniture,z,D+.92,Lt,0,0,0,!0,!0),Fe(X,I-.16,.08,.05,s.furniture,z,D+.52,Lt,0,0,0,!0,!0);for(let De=0;De<3;De++){const je=z-(I-.52)/2+De*((I-.52)/2);hn(X,.023,.023,.32,7,s.furnitureDark,je,D+.72,Lt,0,0,0,!1,!0)}for(const De of[-1,1])Fe(X,.06,.16,U-.15,s.furniture,z+De*se,D+.33,V,0,0,0,!0,!0);ai(X,I-.12,.24,U-.18,.05,s.linen,z,D+.52,V,0,0,0,!0,!0,3),Fe(X,I-.16,.02,.34,s.boneFab,z,me-.02,V-.72,0,0,0,!1,!0),ai(X,I-.06,.075,1.34,.03,s.quilt,z,me+.02,V+.33,0,0,0,!0,!0,2);for(const De of[-1,1])Fe(X,.055,.48,1.34,s.quilt,z+De*(I/2-.03),me-.22,V+.33,.02,0,De*.045,!1,!0);Fe(X,I-.06,.42,.055,s.quilt,z,me-.19,V+.33+.67,-.07,0,0,!1,!0),ai(X,.62,.18,.42,.075,s.boneFab,z-.38,me+.15,V-.72,-.42,0,.02,!0,!0,3),ai(X,.62,.18,.42,.075,s.linen,z+.38,me+.15,V-.7,-.38,0,-.03,!0,!0,3),ai(X,.4,.13,.3,.06,s.wool,z,me+.14,V-.42,-.25,.1,0,!0,!0,3),Fe(X,.74,.065,.44,s.wool,z,me+.075,V+.7,0,0,0,!0,!0),Fe(X,.68,.055,.4,s.boneFab,z,me+.135,V+.7,0,0,0,!0,!0),Fe(X,.7,.3,.05,s.wool,z,me-.08,Lt-.02,.1,0,0,!1,!0);const Ct=new Je;Ct.position.set(z-.48,D,V+.34),hn(Ct,.19,.165,.24,14,s.wicker,0,.12,0,0,0,0,!1,!0,!0),hn(Ct,.185,.185,.012,14,s.furnitureDark,0,.235,0,0,0,0,!1,!0),X.add(Ct),ai(X,.1,.055,.23,.03,s.leather,z-1.02,D+.028,Lt+.38,0,.22,0,!1,!0,2),ai(X,.1,.055,.23,.03,s.leather,z-.86,D+.028,Lt+.46,0,.05,0,!1,!0,2),o.push({minX:z-I/2-.02,maxX:z+I/2+.02,minZ:V-U/2-.02,maxZ:V+U/2+.02,name:"bed"});const ue=Ws(n,I+.5,U+.4,.42);ue.position.set(z,On+.004,V),r.add(ue)}function N(){const z=In.rug;Fe(r,z.w,.014,z.d,s.rug,z.x,On+.0115,z.z,0,0,0,!1,!0);const V=jn();for(const U of[-1,1]){const D=z.x+U*z.w/2;for(let X=0;X<22;X++){const at=z.z-z.d/2+.06+X*((z.d-.12)/21);V.box(y(u,.05,.08),.006,.012,D+U*.035,On+.0045,at+y(u,-.006,.006),0,y(u,-.15,.15),0)}}V.build(s.boneFab,r,!1,!0);const I=In.entryRug;Fe(r,I.w,.008,I.d,s.entryRug,I.x,On+.0065,I.z,0,0,0,!1,!0)}function Zt(z,V,I,U,D,X=0){const at=new Je;at.position.set(V,I,U),at.rotation.y=X,hn(at,.038,.034,.09,12,D,0,.045,0,0,0,0,!1,!0),hn(at,.031,.031,.004,12,new sn({color:"#2b1a10",roughness:.35}),0,.078,0,0,0,0,!1,!0);const Lt=new Ne(new ci(.026,.006,5,10,Math.PI*1.25),D);return Lt.position.set(.038,.05,0),Lt.rotation.z=-.5,Lt.castShadow=!1,at.add(Lt),z.add(at),at}function fe(z,V,I,U,D=0){const X=new Je;return X.position.set(V,I,U),X.rotation.y=D,Fe(X,.22,.035,.16,s.book,0,.0175,0,0,0,0,!1,!0),Fe(X,.2,.03,.15,s.book,.01,.05,.005,0,.06,0,!1,!0),Fe(X,.17,.028,.13,s.leather,-.012,.079,0,0,-.05,0,!1,!0),z.add(X),X}function P(){const z=In.table.x,V=In.table.z,I=1.48,U=.9,D=Gn,X=D+.76,at=new Je;at.name="table",at.position.y=Ji,r.add(at),ai(at,I,.055,U,.012,s.furniture,z,X-.0275,V,0,0,0,!0,!0,2);for(const Wt of[-1,1])Fe(at,.035,.05,U+.01,s.furnitureDark,z+Wt*(I/2-.0175),X-.027,V,0,0,0,!0,!0);const Lt=[[.055,0],[.055,.035],[.038,.06],[.052,.1],[.055,.15],[.042,.22],[.048,.3],[.043,.52],[.052,.55],[.048,.6],[.052,.64],[.046,.7]];for(const Wt of[-1,1])for(const Ct of[-1,1])Gi(at,Lt,9,s.furnitureDark,z+Wt*(I/2-.13),D,V+Ct*(U/2-.115),!0,!0);for(const Wt of[-1,1])Fe(at,I-.32,.085,.035,s.furnitureDark,z,D+.66,V+Wt*(U/2-.075),0,0,0,!0,!0),Fe(at,.035,.085,U-.3,s.furnitureDark,z+Wt*(I/2-.075),D+.66,V,0,0,0,!0,!0);Fe(at,I-.34,.05,.06,s.furnitureDark,z,D+.32,V,0,0,0,!0,!0),Fe(at,.06,.05,U-.32,s.furnitureDark,z,D+.32,V,0,0,0,!0,!0);const se=new Je;se.position.set(z-.26,X,V-.18),Gi(se,[[.055,0],[.05,.01],[.022,.03],[.018,.05],[.032,.055]],10,s.brass,0,0,0,!1,!0),hn(se,.018,.019,.2,8,s.wax,0,.155,0,0,0,0,!1,!0),Qt(se,0,.265,0,.9),at.add(se),Zt(at,z+.2,X,V-.22,s.ceramicBone,-.5),Zt(at,z+.34,X,V+.06,s.ceramicMoss,1.4);const me=new Je;me.position.set(z-.2,X,V+.2),Gi(me,[[.055,0],[.1,.015],[.135,.055],[.13,.075]],14,s.furniture,0,0,0,!0,!0);for(let Wt=0;Wt<3;Wt++){const Ct=Wt/3*Ai+.4,ue=new Ne(new mi(.036,12,9),new sn({color:Wt===1?"#8a3a2a":"#6f2c22",roughness:.55}));ue.position.set(Math.cos(Ct)*.045,.105,Math.sin(Ct)*.045),ue.castShadow=!1,ue.receiveShadow=!0,me.add(ue)}at.add(me),fe(at,z+.42,X,V+.28,.5),Fe(at,.34,.006,.24,s.boneFab,z-.28,X+.003,V+.02,0,.03,0,!1,!0),o.push({minX:z-In.table.w/2-.02,maxX:z+In.table.w/2+.02,minZ:V-In.table.d/2-.02,maxZ:V+In.table.d/2+.02,name:"table"});const re=Ws(n,I+.5,U+.5,.42);re.position.set(z,On+.0195,V),r.add(re),_(z-.48,V-.7,0),_(z+.52,V+.67,Math.PI)}function _(z,V,I){const U=Gn,D=new Je;D.position.set(z,U+Ji,V),D.rotation.y=I,r.add(D),Fe(D,.46,.045,.43,s.furniture,0,.455,0,0,0,0,!0,!0),Fe(D,.42,.075,.38,s.furnitureDark,0,.395,0,0,0,0,!0,!0);for(const Lt of[-1,1])hn(D,.026,.021,.45,7,s.furnitureDark,Lt*.19,.225,.17,0,0,0,!0,!0),Fe(D,.042,.95,.042,s.furniture,Lt*.19,.475,-.175,.02,0,0,!0,!0);Fe(D,.42,.075,.045,s.furniture,0,.9,-.175,.02,0,0,!0,!0),Fe(D,.4,.045,.03,s.furniture,0,.7,-.175,.02,0,0,!1,!0),Fe(D,.4,.045,.03,s.furniture,0,.57,-.175,.02,0,0,!1,!0);for(const Lt of[-1,1])Fe(D,.032,.03,.39,s.furnitureDark,Lt*.19,.17,0,0,0,0,!1,!0);Fe(D,.4,.03,.032,s.furnitureDark,0,.22,.17,0,0,0,!1,!0),ai(D,.4,.035,.37,.015,s.boneFab,0,.493,.005,0,0,0,!1,!0,2);const X=Ws(n,.72,.68,.38),at=Math.abs(z-In.rug.x)<In.rug.w/2&&Math.abs(V-In.rug.z)<In.rug.d/2;X.position.set(z,at?On+.0195:On+.0025,V),r.add(X),o.push({minX:z-.27,maxX:z+.27,minZ:V-.27,maxZ:V+.27,name:"chair"})}function K(){const I=Gn,U=new Je;U.name="side-table",U.position.y=Ji,r.add(U),Fe(U,.44,.045,.4,s.furniture,-3.28,I+.6,-2.42,0,0,0,!0,!0),Fe(U,.4,.06,.36,s.furnitureDark,-3.28,I+.555,-2.42,0,0,0,!0,!0);for(const at of[-1,1])for(const Lt of[-1,1])hn(U,.022,.018,.56,6,s.furnitureDark,-3.28+at*.17,I+.28,-2.42+Lt*.15,0,0,at*.01,!0,!0);Fe(U,.34,.03,.3,s.furnitureDark,-3.28,I+.2,-2.42,0,0,0,!1,!0);const D=new Je;D.position.set(-3.28-.08,I+.6225,-2.42-.05),Gi(D,[[.045,0],[.04,.012],[.018,.025],[.03,.035]],9,s.iron,0,0,0,!1,!0),hn(D,.015,.016,.17,8,s.wax,0,.12,0,0,0,0,!1,!0),Qt(D,0,.215,0,.85),U.add(D),fe(U,-3.28+.06,I+.6225,-2.42+.02,-.4),Zt(U,-3.28+.13,I+.6225,-2.42-.13,s.ceramicRust,.8),o.push({minX:-3.28-.28,maxX:-3.28+.28,minZ:-2.42-.26,maxZ:-2.42+.26,name:"side-table"});const X=Ws(n,.7,.65,.35);X.position.set(-3.28,On+.0025,-2.42),r.add(X)}function ht(){const z=In.armchair.x,V=In.armchair.z,I=Gn,U=Math.atan2(In.fireplace.x-z,In.fireplace.z-V),D=new Je;D.name="armchair",D.position.set(z,I+Ji,V),D.rotation.y=U,r.add(D);for(const De of[-1,1])for(const je of[-1,1])Gi(D,[[.038,0],[.045,.02],[.03,.05],[.038,.07],[.026,.12],[.032,.15]],8,s.furnitureDark,De*.32,0,je*.3,!0,!0);Fe(D,.8,.18,.78,s.furnitureDark,0,.22,0,0,0,0,!0,!0),ai(D,.74,.18,.7,.06,s.moss,0,.39,.02,0,0,0,!0,!0,3),Fe(D,.8,.58,.13,s.furnitureDark,0,.62,-.33,-.07,0,0,!0,!0),ai(D,.7,.6,.18,.07,s.moss,0,.63,-.24,-.09,0,0,!0,!0,3);const X=new Ne(new ti(.048,.048,.64,10),s.moss);X.rotation.z=Math.PI/2,X.position.set(0,.925,-.25),X.castShadow=!0,D.add(X);for(const De of[-1,1]){ai(D,.15,.19,.72,.06,s.moss,De*.335,.46,.02,0,0,0,!0,!0,3);const je=new Ne(new ti(.052,.052,.68,10),s.moss);je.rotation.x=Math.PI/2,je.position.set(De*.335,.555,.02),je.castShadow=!0,D.add(je),Fe(D,.05,.3,.05,s.furnitureDark,De*.335,.25,.33,0,0,0,!0,!0)}ai(D,.32,.05,.42,.02,s.wool,.335,.605,0,0,.04,.03,!0,!0,2),Fe(D,.1,.34,.05,s.wool,.335,.43,.22,.06,.03,0,!1,!0),ai(D,.42,.3,.14,.06,s.boneFab,0,.67,-.1,-.22,.04,0,!0,!0,3),Fe(D,.2,.035,.15,s.leather,-.12,.49,.12,0,.3,0,!1,!0);const at=Math.abs(Math.cos(U)),Lt=Math.abs(Math.sin(U)),se=.42*at+.43*Lt,me=.42*Lt+.43*at;o.push({minX:z-se,maxX:z+se,minZ:V-me,maxZ:V+me,name:"armchair"});const re=Ws(n,1.4,1.4,.4);re.position.set(z,On+.0025,V),r.add(re);const Wt=new Je;Wt.position.set(-3.55,On,-2.02),hn(Wt,.17,.145,.22,12,s.wicker,0,.11,0,0,0,0,!1,!0,!0),hn(Wt,.165,.165,.01,12,s.furnitureDark,0,.215,0,0,0,0,!1,!0);const Ct=new Ne(new mi(.075,10,8),new sn({color:"#a86a4a",roughness:.95}));Ct.position.set(.01,.24,.02),Wt.add(Ct);const ue=new Ne(new mi(.06,10,8),new sn({color:"#7d8464",roughness:.95}));ue.position.set(-.02,.3,-.06),Wt.add(ue),r.add(Wt)}function Tt(){const z=In.chandelier.x,V=In.chandelier.z,I=2.9;hn(r,.1,.12,.035,12,s.iron,z,pi-.205,V,0,0,0,!1,!0),hn(r,.1,.1,.01,12,s.iron,z,pi-.19,V,0,0,0,!1,!0);const U=jn();for(let Wt=0;Wt<3;Wt++)U.add(new ci(.032,.007,5,8),z,pi-.255-Wt*.075,V,0,Wt%2?Math.PI/2:0,0);U.build(s.iron,r,!1,!1);const D=new Je;D.position.set(z,I,V),r.add(D),F=D;const X=new Ne(new ci(.32,.024,8,32),s.furniture);X.rotation.x=Math.PI/2,X.castShadow=!0,D.add(X);for(let Wt=0;Wt<4;Wt++){const Ct=Wt/4*Math.PI*2+Math.PI/4;Fe(D,.32,.02,.026,s.furnitureDark,Math.cos(Ct)*.16,.006,Math.sin(Ct)*.16,0,-Ct,0,!1,!0)}hn(D,.052,.048,.06,12,s.furniture,0,.01,0,0,0,0,!0,!0),hn(D,.018,.018,.09,6,s.iron,0,.075,0,0,0,0,!1,!0),we.length=0;for(let Wt=0;Wt<5;Wt++){const Ct=-Math.PI/2+Wt/5*Math.PI*2,ue=Math.cos(Ct)*.275,De=Math.sin(Ct)*.275;hn(D,.044,.035,.02,10,s.iron,ue,.016,De,0,0,0,!1,!0);const je=y(u,.07,.11);hn(D,.014,.016,je,8,s.wax,ue,.026+je/2,De,0,0,0,!1,!0);const kn=Qt(D,ue,.03+je,De,.78);kn.userData.chandelier=!0,we.push(kn)}const at=jn(!0);for(const Wt of[-2.2,.6,1.9]){at.cyl(.004,.004,.12,4,Math.cos(Wt)*.32,-.05,Math.sin(Wt)*.32,Math.cos(Wt)*.4,0,Math.sin(Wt)*.4,"#6b5a35");for(let Ct=0;Ct<3;Ct++)at.add(new bo(.015,0),Math.cos(Wt)*.32+y(u,-.01,.01),-.11-Ct*.03,Math.sin(Wt)*.32+y(u,-.01,.01),0,0,0,Ct===1?"#8a7a4a":"#6f7a4a")}at.build(new sn({vertexColors:!0,roughness:.9}),D,!1,!1);const Lt=new Fr({map:n.glow,color:"#ffbf7a",transparent:!0,opacity:.22,depthWrite:!1,blending:Ri}),se=new yo(Lt);se.scale.setScalar(.48),se.position.y=.05,D.add(se),en=se;const me=[X],re={id:"chandelier",label:"烛台",anchor:new E(z,I,V),radius:2.5,objects:me,getPrompt:()=>({key:"E",action:S?"吹灭烛台":"点亮烛台"}),available:()=>!0,action:()=>Xe()};X.userData.interactId="chandelier",a.push(re)}function jt(){const V=(Ge.windows.find(Ct=>Ct.id==="front-left")||Ge.windows[0]).x,I=Vn-.32,U=Gn,D=1.5,X=.42,at=U+.46,Lt=new Je;Lt.name="window-bench",Lt.position.y=Ji,r.add(Lt),Fe(Lt,D,.07,X,s.furniture,V,at-.035,I,0,0,0,!0,!0);for(const Ct of[-1,1])Fe(Lt,D-.28,.08,.04,s.furnitureDark,V,at-.11,I+Ct*(X/2-.05),0,0,0,!0,!0);for(const Ct of[-1,1])for(const ue of[-1,1])Gi(Lt,[[.036,0],[.044,.02],[.028,.05],[.036,.16],[.026,.3],[.038,.34],[.032,.4]],8,s.furnitureDark,V+Ct*(D/2-.08),U,I+ue*(X/2-.08),!0,!0);Fe(Lt,D-.18,.03,X-.12,s.furnitureDark,V,U+.15,I,0,0,0,!1,!0);const se=new Je;se.position.set(V-.44,U+.165,I),hn(se,.15,.13,.18,12,s.wicker,0,.09,0,0,0,0,!1,!0,!0),hn(se,.145,.145,.01,12,s.furnitureDark,0,.18,0,0,0,0,!1,!0),Lt.add(se);for(let Ct=0;Ct<3;Ct++)hn(Lt,.045,.045,.42,7,s.bark,V+.34+Ct%2*.09,U+.225+Math.floor(Ct/2)*.08,I+y(u,-.06,.06),0,0,Math.PI/2,!1,!0);ai(Lt,D-.1,.085,X-.06,.03,s.boneFab,V,at+.045,I,0,0,0,!1,!0,2),Fe(Lt,.4,.075,.38,s.wool,V+.44,at+.125,I-.01,0,.04,0,!1,!0),Fe(Lt,.36,.065,.34,s.boneFab,V+.44,at+.195,I-.01,0,-.03,0,!1,!0),ai(Lt,.34,.3,.12,.05,s.moss,V-.4,at+.2,I+.12,-.32,.1,0,!1,!0,3),ai(Lt,.3,.26,.11,.05,s.wool,V+.02,at+.18,I+.12,-.28,-.12,0,!1,!0,3),fe(Lt,V-.42,at+.09,I-.02,.3),Zt(Lt,V+.12,at+.09,I+.05,s.ceramicBone,.4);const me=Ge.windows.find(Ct=>Ct.id==="front-right"),re=new Je;re.position.set(me.x+.38,Gn+me.y-me.height/2+.001,Vn-.14),Gi(re,[[.045,0],[.052,.02],[.055,.09],[.06,.1]],10,s.clay,0,0,0,!1,!0);for(let Ct=0;Ct<5;Ct++){const ue=Ct/5*Ai;hn(re,.004,.006,.18,4,s.plant,Math.cos(ue)*.02,.19,Math.sin(ue)*.02,Math.cos(ue)*.4,0,Math.sin(ue)*.4,!1,!0)}r.add(re),o.push({minX:V-D/2,maxX:V+D/2,minZ:Vn-.55,maxZ:Vn,name:"window-bench"});const Wt=Ws(n,D+.3,X+.3,.36);Wt.position.set(V,On+.0025,I),r.add(Wt)}function qt(){ut(.86,.6,s.art0,s.furnitureDark,.48,2.02,fr+.028,0),ut(.96,.56,s.art1,s.furnitureDark,In.bed.x,2.3,fr+.028,0),ut(.46,.6,s.art2,s.furnitureDark,co-.028,1.95,.85,-Math.PI/2);for(const z of[-.28,1.24]){const V=new Je;V.position.set(z,2.05,fr+.03),Fe(V,.1,.17,.025,s.iron,0,0,0,0,0,0,!1,!0),Fe(V,.025,.025,.13,s.iron,0,.055,.065,0,0,0,!1,!0),hn(V,.028,.034,.05,8,s.iron,0,.085,.125,0,0,0,!1,!0),hn(V,.014,.015,.11,8,s.wax,0,.16,.125,0,0,0,!1,!0),Qt(V,0,.225,.125,.8),r.add(V)}for(const[z,V]of[[1.45,2.02],[2.25,1.66]]){const I=new Je;I.position.set(lo+.045,V,z),hn(I,.17,.17,.035,14,s.wicker,0,0,0,0,0,Math.PI/2,!1,!0);const U=new Ne(new ci(.17,.014,6,18),s.wicker);U.rotation.y=Math.PI/2,I.add(U),r.add(I)}}function Et(){const z=[[0,pi-.24,1.22],[0,pi-.24,-1.32],[-2.45,pi-.22,1.64]],V=jn(!0);for(const[U,D,X]of z){V.cyl(.004,.004,.11,4,U,D-.055,X,0,0,0,"#6b5a3a");const at=9;for(let Lt=0;Lt<at;Lt++){const se=Lt/at*Ai+u()*.4,me=y(u,.12,.42),re=y(u,.2,.34),Wt=U+Math.cos(se)*.012,Ct=X+Math.sin(se)*.012;V.cyl(.0035,.0025,re,4,Wt+Math.cos(se)*re*.35*Math.sin(me),D-.1-re/2,Ct+Math.sin(se)*re*.35*Math.sin(me),Math.sin(se)*me,0,-Math.cos(se)*me,"#6f6242");for(let ue=0;ue<3;ue++){const De=.45+ue*.25;V.add(new bo(y(u,.008,.016),0),U+Math.cos(se)*re*De*Math.sin(me)+y(u,-.01,.01),D-.1-re*De,X+Math.sin(se)*re*De*Math.sin(me)+y(u,-.01,.01),0,0,0,Ci(u,["#8a7a4a","#6f7a4a","#9a8a5a","#5f6b45"]))}}}const I=V.build(new sn({vertexColors:!0,roughness:.92}),r,!1,!1);I&&(I.castShadow=!1)}function Dt(){const I=new Je;I.position.set(-3.52,On,.95),hn(I,.28,.245,.36,14,s.wicker,0,.18,0,0,0,0,!0,!0,!0),hn(I,.285,.285,.012,14,s.furnitureDark,0,.355,0,0,0,0,!1,!0);for(let D=0;D<5;D++){const X=D/5*Ai;hn(I,.052,.052,.52,7,s.bark,Math.cos(X)*.1,.42,Math.sin(X)*.1,y(u,-.15,.15),0,y(u,-.15,.15),!1,!0),D%2===0&&hn(I,.047,.047,.012,7,s.lightWood,Math.cos(X)*.1,.69,Math.sin(X)*.1,y(u,-.15,.15),0,y(u,-.15,.15),!1,!0)}r.add(I),o.push({minX:-3.52-.3,maxX:-3.52+.3,minZ:.95-.3,maxZ:.95+.3,name:"log-basket"});const U=Ws(n,.85,.85,.34);U.position.set(-3.52,On+.0025,.95),r.add(U)}function oe(){Fe(r,.6,.13,.035,s.furnitureDark,1,1.88,Vn-.02,0,0,0,!1,!0);for(const U of[.81,.93,1.05,1.17])hn(r,.011,.013,.075,6,s.furnitureDark,U,1.88-.01,Vn-.055,Math.PI/2,0,0,!1,!0);const V=new Je;V.position.set(.84,1.88-.2,Vn-.1),V.rotation.x=Math.PI/2,hn(V,.15,.15,.012,16,s.wicker,0,0,0,0,0,0,!1,!0),hn(V,.075,.085,.085,12,s.wicker,0,.045,0,0,0,0,!1,!0),V.rotation.z=.06,r.add(V),Fe(r,.22,.44,.018,s.linen,1.07,1.88-.31,Vn-.055,0,0,.03,!1,!0),Fe(r,.22,.03,.02,s.furnitureDark,1.07,1.88-.1,Vn-.055,0,0,.03,!1,!0);const I=new Je;I.position.set(-.96,On,Vn-.16),I.rotation.x=-.1,hn(I,.017,.014,1.52,7,s.furniture,0,.86,0,0,0,.03,!1,!0),Fe(I,.11,.06,.06,s.wicker,0,.14,0,0,0,0,!1,!0);for(let U=0;U<7;U++){const D=-.5+U/6*1;hn(I,.005,.012,.3,4,s.wicker,Math.sin(D)*.035,.06,Math.cos(D)*.01,Math.sin(D)*.4,0,0,!1,!0)}r.add(I)}function Ue(){const V=new Pn,I=new Float32Array(240);Rt=[];for(let D=0;D<80;D++){const X=y(u,-2.8,2.8),at=y(u,.55,2.9),Lt=y(u,-2.4,2.4);I[D*3]=X,I[D*3+1]=at,I[D*3+2]=Lt,Rt.push({x:X,y:at,z:Lt,p:u()*Ai,s:y(u,.15,.5)})}V.setAttribute("position",new Wn(I,3));const U=new Pr({map:n.dust,size:.022,transparent:!0,opacity:.32,depthWrite:!1,color:"#ffe2b8",sizeAttenuation:!0,blending:Ri,toneMapped:!1});yt=new So(V,U),yt.frustumCulled=!1,r.add(yt)}function ie(){C=new Ad("#ffc178",0,5,1.4),C.position.set(In.chandelier.x,3.12,In.chandelier.z),C.castShadow=!1,C.name="interior-chandelier-light",r.add(C),O=new Mc("#ffd9ae",0,8,1.02,.95,1.6),O.position.set(-2.55,2.1,Vn-.62),O.target.position.set(-.5,.65,-.6),O.castShadow=!1,O.name="interior-window-light-l",r.add(O,O.target),B=new Mc("#ffd9ae",0,8,1.02,.95,1.6),B.position.set(2.55,2.1,Vn-.62),B.target.position.set(.5,.65,-.6),B.castShadow=!1,B.name="interior-window-light-r",r.add(B,B.target)}function Ft(){const z=h,V=typeof z.hour=="number"?z.hour:17.2,I=gn(z.overcast??(z.weather==="rain"||z.weather==="storm"?.55:z.weather==="snow"?.45:z.weather==="fog"?.4:0),0,1),U=!!z.isNight;let D=0;U||(D=ls(5.4,8.2,V)*(1-ls(17.8,20.4,V)),D=gn(D,0,1));const X=gn(1-Math.abs(V-17.5)/3.2,0,1),at=z.weather==="rain"||z.weather==="storm",Lt=g?1:.42;wt.window=(U?2:8+30*D)*(1-.5*I)*Lt*(at?.8:1),U?wt.windowColor.copy(_t):wt.windowColor.copy(ce).lerp(Z,X),wt.chandelier=S?U?17:8.5+3.5*I+3*(1-D):0,wt.fire=m?U?55:46:0,wt.chandelierColor.copy(q)}function Ee(){m=!m,Ft(),e.notify(m?"炉火燃起来了":"炉火熄灭了")}function Se(){g=!g,Ft(),e.notify(g?"窗帘拉开了":"窗帘合上了")}function Xe(){S=!S,Ft(),e.notify(S?"烛台亮了起来":"烛台熄了")}function Q(){if(b){b=!1,e.hidePanel();return}b=!0,e.showPanel(bt)}function Yt(z){v+=((m?1:0)-v)*(1-Math.exp(-z*(m?2.4:6.5))),v<.002&&(v=0),v>1&&(v=1);const I=d,U=.82+.085*Math.sin(I*7.9)+.055*Math.sin(I*14.3+1.7)+.035*Math.sin(I*27.1+.6)+.025*Math.sin(I*43.7+2.2);M&&(M.intensity=wt.fire*v*U);for(const D of l){const X=.75+.25*Math.sin(I*D.speed+D.phase)+.12*Math.sin(I*D.speed*1.9+D.phase*2.1);D.mesh.scale.set(1+.1*Math.sin(I*D.speed*.7+D.phase),Math.max(.35,X),1),D.mesh.position.y=D.baseY+.018*Math.sin(I*2.2+D.phase),D.mesh.visible=v>.02}s.flame.opacity=.82*v,s.flameOuter.opacity=.45*v,rt&&(rt.material.opacity=v*(.16+.06*U)),At&&(At.material.opacity=v*(.42+.14*U)),Mt&&(Mt.material.opacity=v*(.2+.07*U)),H&&(H.material.opacity=v*(.55+.25*Math.sin(I*3.1)));for(let D=0;D<J.length;D++){const X=J[D];if(!X)continue;const at=.5+.5*Math.sin(I*(1.5+D%5*.7)+D);X.emissiveIntensity=v*(.85+.75*at)+.1}if(G&&(G.visible=v>.05,G.visible)){const D=G.geometry.attributes.position;for(let X=0;X<nt.length;X++){const at=nt[X];at.life-=z*.9,at.life<=0&&(at.life=1,at.x=-3.58,at.y=.52+u()*.18,at.z=In.fireplace.z+y(u,-.3,.3),at.vx=y(u,-.1,.22),at.vy=y(u,.35,.85),at.vz=y(u,-.12,.12),at.wob=u()*Ai);const Lt=z*(.6+at.life);at.x+=(at.vx+Math.sin(I*3+at.wob)*.06)*Lt,at.y+=at.vy*Lt,at.z+=at.vz*Lt,at.y>1.75&&(at.life=0),D.setXYZ(X,at.x,at.y,at.z)}D.needsUpdate=!0,G.material.opacity=.85*v}}function Nt(z){const V=1-Math.exp(-z*3.6);R+=((S?1:0)-R)*(1-Math.exp(-z*4.2)),C&&(C.intensity+=(wt.chandelier*R-C.intensity)*V,C.color.lerp(wt.chandelierColor,.15));for(const I of[O,B])I&&(I.intensity+=(wt.window-I.intensity)*V,I.color.lerp(wt.windowColor,.15))}function _e(){for(const z of c){const V=z.baseScale*(.92+.08*Math.sin(d*z.speed+z.phase)+.03*Math.sin(d*z.speed*2.3+z.phase*2));z.mesh.scale.setScalar(V),z.mesh.rotation.y=Math.sin(d*z.speed*.32+z.phase)*.14}}function be(z){const V=g?1:0;p+=(V-p)*(1-Math.exp(-z*3.4)),Math.abs(V-p)<.0015&&(p=V);const I=ls(0,1,p);for(const U of ye){const D=Yi(U.closedOffset,U.openOffset,I),X=Yi(1,U.openScale,I);U.left&&(U.left.position.x=U.win.x-D,U.left.scale.x=X,U.left.rotation.z=Math.sin(d*.9+U.seed)*.006*I,U.left.rotation.x=Math.sin(d*.62+U.seed*2)*.004*I),U.right&&(U.right.position.x=U.win.x+D,U.right.scale.x=X,U.right.rotation.z=-Math.sin(d*.9+U.seed)*.006*I,U.right.rotation.x=Math.sin(d*.62+U.seed*2)*.004*I)}}function Vt(z){F&&(F.rotation.z=Math.sin(d*.55)*.006,F.rotation.x=Math.sin(d*.43+1.2)*.004);const V=R>.05;for(const I of we)I.visible=V;en&&(en.material.opacity=.2*R)}function Oe(z){if(!T)return;const V=b?.16:.05;T.rotation.y=A+Math.sin(d*.75+1.2)*V,T.rotation.z=b?Math.sin(d*2.1)*.05:0}function Ie(z){for(let V=0;V<gt.length;V++){const I=gt[V];I.phase=(I.phase+z*.22)%1;const U=I.phase;I.sprite.position.y=.25+U*.55,I.sprite.position.x=.012+Math.sin(U*6.2+V*1.7)*.04*U,I.sprite.scale.setScalar(I.base*(.7+U*1.6));const D=U<.1?U/.1:1-(U-.1)/.9;I.sprite.material.opacity=Math.max(0,.2*D*v)}}function vn(){if(!yt)return;const z=d,V=yt.geometry.attributes.position;for(let I=0;I<Rt.length;I++){const U=Rt[I];V.setXYZ(I,U.x+Math.sin(z*.11*U.s+U.p)*.35,U.y+Math.sin(z*.16*U.s+U.p*2.1)*.22,U.z+Math.cos(z*.09*U.s+U.p)*.35)}V.needsUpdate=!0,yt.material.opacity=.2+.07*Math.sin(z*.4)}function ae(z){!z||typeof z!="object"||(Object.assign(h,z),Ft())}function fn(z=.016,V,I={}){const U=Math.min(Math.max(z||0,0),.06);d+=U,V&&(Object.assign(h,V),Ft()),I&&I.mode&&(f=I.mode),Yt(U),Nt(U),_e(),be(U),Vt(),Oe(),Ie(U),vn()}return Kt(),Gt(),ke(),Jt(),N(),P(),K(),ht(),Tt(),jt(),qt(),Et(),Dt(),oe(),ie(),Ue(),Ft(),{group:r,colliders:o,interactables:a,setEnvironment:ae,update:fn,note:bt,get fireplaceOn(){return m},get curtainsOpen(){return g},get chandelierOn(){return S},get fireLevel(){return v},setFireplace(z){m=!!z,m&&(v=Math.max(v,.3)),Ft()},toggleFireplace:Ee,setCurtains(z){g=!!z,Ft()},toggleCurtains:Se,setChandelier(z){S=!!z,Ft()},toggleChandelier:Xe,showBirdNote:Q,hideBirdNote(){b=!1,e.hidePanel()},notifyNoteClosed(){b=!1},_debug:{group:r,lights:()=>({fire:M,chandelier:C,windowL:O,windowR:B}),state:()=>({fireplaceOn:m,fireLevel:v,curtainsOpen:g,curtainT:p,chandelierLit:S,birdNoteOpen:b,mode:f})}}}const k2={clear:.04,rain:.72,snow:.56,fog:.74,storm:.94},vl=i=>new Promise(t=>setTimeout(t,i)),$o=()=>new Promise(i=>requestAnimationFrame(()=>i())),Be={...Xs,activePreset:null,hourTarget:null,windowGlow:!0},G2=document.getElementById("app"),H2=document.getElementById("scene-root"),kd=document.createElement("div");kd.id="atmosphere";G2.appendChild(kd);const Rl=document.createElement("div");Rl.id="scene-transition";document.body.appendChild(Rl);const V2=document.getElementById("boot-fallback"),Mi=new gx({antialias:!0,powerPreference:"high-performance",alpha:!1,stencil:!1});Mi.setPixelRatio(Math.min(window.devicePixelRatio||1,1.65));Mi.setSize(window.innerWidth,window.innerHeight);Mi.shadowMap.enabled=!0;Mi.shadowMap.type=ta;Mi.toneMapping=Ul;Mi.toneMappingExposure=1;Mi.outputColorSpace=Wi;Mi.domElement.setAttribute("aria-label","林间小屋 三维场景");H2.appendChild(Mi.domElement);const Uo=new hp,cs=new Xi(46,window.innerWidth/window.innerHeight,.08,700);cs.position.set(0,2.1,17.4);let es=!1,$s=!1,Qs=!1,pr=null,Pl="",Xf=0,Ic=0;const Hn=wx({onTimePreset:i=>Wd(i),onAutoToggle:i=>Xd(i),onTimeInput:i=>Yd(i),onWeatherChange:i=>Zd(i),onSeasonChange:i=>qd(i),onOverlayClose:()=>{es=!1,ts?.notifyNoteClosed?.(),$s||bn?.setInputEnabled(!0),Hn.setPrompt(null)}});Hn.setLoading(.08,"正在拨开林间的雾…");const ah=Xx({scene:Uo,renderer:Mi,camera:cs}),Gl=e2({renderer:Mi,scene:Uo,camera:cs}),Gd={showPanel:i=>$2(i),hidePanel:()=>ma(),notify:i=>Hn.notify?.(i)},zr=y2({scene:Uo,callbacks:Gd}),xs=C2({scene:Uo}),ts=B2({scene:Uo,callbacks:Gd}),bn=r2({scene:Uo,camera:cs,domElement:Mi.domElement,outsideColliders:[...xs.colliders||[],...zr.colliders||[]],interiorColliders:[...ts.colliders||[]],occluders:[...qf(xs.cameraOccluders),...qf(zr.cameraOccluders)],callbacks:{onCanvasClick:i=>Z2(i)}});bn.setInputEnabled(!1);const Yf=new Cd,Dc=new $t,lh=[],Ll=new Map,Pu=[];function ch(i,t=new E){return i?i.isVector3?i.clone():new E(i.x||0,i.y||0,i.z||0):t.clone()}function Hl(i){if(!i||!i.id)return;const t={...i,anchor:ch(i.anchor),radius:i.radius??Ve.interactDistance,objects:i.objects||[],available:i.available||(()=>!0)};lh.push(t),Ll.set(t.id,t);for(const e of t.objects)e&&(e.userData.interactId=t.id,e.traverse?e.traverse(n=>{n.isMesh&&Pu.push(n)}):e.isMesh&&Pu.push(e))}const W2=ch(Ge.doorAnchor),X2=ch(Ge.interiorDoorAnchor);Hl({id:"cabin-door",label:"木门",anchor:W2,radius:2.7,objects:xs.clickables||[],available:()=>bn.mode==="third",getPrompt:()=>({key:"E",action:"进入小屋"}),action:()=>uh()});Hl({id:"cabin-exit",label:"木门",anchor:X2,radius:2.15,objects:[],available:()=>bn.mode==="first",getPrompt:()=>({key:"E",action:"离开小屋"}),action:()=>uh()});for(const i of ts.interactables||[]){const t=i.available||(()=>!0);Hl({...i,available:()=>bn.mode==="first"&&t()})}for(const i of zr.interactables||[]){const t=i.available||(()=>!0);Hl({...i,available:()=>bn.mode==="third"&&t()})}function Y2(){if(!Qs||$s||es)return null;const i=bn.getInteractionPosition();let t=null,e=1/0;for(const n of lh){let s=!1;try{s=!!n.available()}catch{s=!1}if(!s)continue;const r=i.x-n.anchor.x,o=i.z-n.anchor.z,a=Math.hypot(r,o);a<=n.radius&&a<e&&(t=n,e=a)}return t}function Hd(i){if(!i)return null;let t;try{t=i.getPrompt?i.getPrompt():{key:"E",action:i.label||"互动"}}catch{t={key:"E",action:i.label||"互动"}}return typeof t=="string"&&(t={key:"E",action:t}),{...t,id:i.id}}function Il(i=!1){const t=Y2(),e=t?t.id:"";if(!i&&e===Pl){pr=t;return}Pl=e,pr=t,Hn.setPrompt(t?Hd(t):null)}function Z2(i){if(!Qs||$s||es)return;const t=Mi.domElement.getBoundingClientRect();Dc.x=(i.clientX-t.left)/t.width*2-1,Dc.y=-((i.clientY-t.top)/t.height)*2+1,Yf.setFromCamera(Dc,cs);const e=Yf.intersectObjects(Pu,!1);if(!e.length)return;let n=e[0].object,s=null;for(;n;){if(n.userData?.interactId){s=n.userData.interactId;break}n=n.parent}if(!s)return;const r=Ll.get(s);if(!r)return;let o=!1;try{o=!!r.available()}catch{o=!1}if(!o)return;const a=bn.getInteractionPosition();if(Math.hypot(a.x-r.anchor.x,a.z-r.anchor.z)>r.radius+1.1){Hn.notify?.("再靠近一些");return}r.action?.()}function q2(){if(!(!Qs||$s)){if(es){ma();return}Il(!0),pr&&pr.action?.()}}async function uh(){!Qs||$s||($s=!0,bn.setInputEnabled(!1),Hn.setLocked?.(!0),Hn.setPrompt(null),pr=null,Pl="",Rl.classList.add("active"),await vl(430),bn.mode==="third"?(xs.setDoorOpen?.(!0),bn.enterInterior(),Hn.setMode("first")):(xs.setDoorOpen?.(!0),bn.exitInterior(),Hn.setMode("third")),await vl(150),Rl.classList.remove("active"),await vl(520),bn.mode==="third"&&setTimeout(()=>xs.setDoorOpen?.(!1),450),$s=!1,bn.setInputEnabled(!es),Hn.setLocked?.(!1),Us(!0))}function $2(i){i&&(es=!0,bn.setInputEnabled(!1),Hn.setPrompt(null),pr=null,Pl="",Hn.showPanel(i))}function ma(){if(!es){Hn.hidePanel();return}es=!1,Hn.hidePanel(),ts.notifyNoteClosed?.(),$s||bn.setInputEnabled(!0),Us(!0)}function K2(i=Be.hour){return i<6.3||i>=19.3}function Ks(){return Be.hour<7.4||Be.hour>16.55||Be.weather!=="clear"}function Zf(i=Be.hour){return i>=5.5&&i<7.3?"清晨":i>=7.3&&i<16.7?"白天":i>=16.7&&i<19.4?"黄昏":"夜晚"}function J2(i){const t=Math.floor(i)%24,e=Math.floor((i-Math.floor(i))*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}function wo(){const i=k2[Be.weather]??0;return{season:Be.season,weather:Be.weather,hour:Be.hour,timeMode:Be.timeMode,isNight:K2(),windowGlow:Be.windowGlow,overcast:i}}function Io(i=!0){const t=wo();xs.setEnvironment?.(t),ts.setEnvironment?.(t),zr.setEnvironment?.(t)}function Us(i=!1){const t=performance.now();if(!i&&t-Xf<120)return;Xf=t;const e=wo();Hn.setEnvironment(e,{phaseLabel:Zf(),timeLabel:Zf(),clock:J2(Be.hour),timeMode:Be.timeMode,preset:Be.activePreset,auto:Be.timeMode==="auto",seasonLabel:go[Be.season]?.label||Be.season,weatherLabel:vo[Be.weather]?.label||Be.weather})}function Vd(i=!0){const t=Ks();t!==Be.windowGlow&&(Be.windowGlow=t,i=!0),i&&Io(!0),Us(!0)}function Wd(i){!pl[i]||!pl[i].hour||(Be.timeMode="manual",Be.activePreset=i,Be.hourTarget=pl[i].hour,Us(!0))}function Xd(i){i?(Be.timeMode="auto",Be.activePreset="auto",Be.hourTarget=null):(Be.timeMode="manual",Be.activePreset=null,Be.hourTarget=null),Us(!0)}function Yd(i){const t=Math.max(0,Math.min(24,Number(i)||0));Be.hour=t%24,Be.timeMode="manual",Be.activePreset=null,Be.hourTarget=null,Be.windowGlow=Ks(),Io(!1),Us(!0)}function Zd(i){_x.includes(i)&&(Be.weather=i,Be.windowGlow=Ks(),Vd(!0),Hn.notify?.(`天气 · ${vo[i]?.label||i}`))}function qd(i){vx.includes(i)&&(Be.season=i,Vd(!0),Hn.notify?.(`季节 · ${go[i]?.label||i}`))}const jo={hour:Be.hour,season:Be.season,weather:Be.weather};let Dl=performance.now(),Lu=!1;function Q2(i){if(Be.timeMode==="auto")Be.hour=(Be.hour+i*(24/260))%24,Be.windowGlow!==Ks()&&(Be.windowGlow=Ks(),Io(!1));else if(Be.hourTarget!==null){const t=Be.hourTarget;let e=((t-Be.hour+24)%24+24)%24;e>12&&(e-=24),Math.abs(e)<.006?(Be.hour=t,Be.hourTarget=null):Be.hour=(Be.hour+e*(1-Math.exp(-i*2.4))+24)%24;const n=Ks();n!==Be.windowGlow&&(Be.windowGlow=n,Io(!1))}}function j2(i){Qs&&(Ic+=i,!(Ic<.1)&&(Ic=0,Il(!1)))}const Nl={ready:!1,state:Be,player:bn,camera:cs,get modules(){return{environment:ah,cabin:xs,interior:ts,nature:zr,ui:Hn,post:Gl,player:bn}},getState:()=>({...Be,windowGlow:Be.windowGlow,mode:bn.mode,position:bn.getPosition().toArray()}),setHour(i,t=null){Yd(Number(i)),Be.activePreset=t,Us(!0)},setPreset:i=>Wd(i),setWeather:i=>Zd(i),setSeason:i=>qd(i),setAuto:i=>Xd(i),enterCabin:()=>{bn.mode==="third"&&(bn.enterInterior(),Hn.setMode("first"))},exitCabin:()=>{bn.mode==="first"&&(bn.exitInterior(),Hn.setMode("third"))},toggleFire:()=>ts.setFireplace?.(!ts.fireplaceOn),setFire:i=>ts.setFireplace?.(!!i),openBird:()=>{(Ll.get("bird-note")||lh.find(t=>t.id.includes("bird")))?.action?.()},closePanel:()=>ma(),interact:i=>Ll.get(i)?.action?.(),setInput:i=>bn.setInputEnabled(!!i),teleport:(i,t)=>{bn.setPosition(Number(i),Number(t)),Il(!0)},closeNote:()=>{const i=document.querySelector("#note-close");i?i.click():ma()},screenshotMode:i=>{i==="first"&&bn.mode!=="first"&&Nl.enterCabin(),i==="third"&&bn.mode!=="third"&&Nl.exitCabin()},getPrompt:()=>pr?Hd(pr):null,refreshPrompt:()=>Il(!0)};window.__scene=Nl;function $d(){const i=performance.now(),t=Math.min((i-Dl)/1e3,.06);if(Dl=i,!Lu){Q2(t),jo.hour=Be.hour,jo.season=Be.season,jo.weather=Be.weather,bn.update(t),ah.update(t,jo);const e=wo();if(xs.update?.(t,e),ts.update?.(t,e,{camera:cs,mode:bn.mode}),zr.update?.(t,e,{camera:cs,playerPosition:bn.getPosition(),mode:bn.mode}),xs.setSmokeLevel?.(Be.season==="winter"?1:ts.fireplaceOn?.7:0),es&&!Hn.isPanelOpen()&&(es=!1,ts.notifyNoteClosed?.(),$s||bn.setInputEnabled(!0)),j2(t),Us(!1),!Qs||Be.windowGlow!==Ks()){const n=Ks();n!==Be.windowGlow&&(Be.windowGlow=n,Io(!1))}Gl.render(t),Qs&&(window.__sceneStats={fps:1/Math.max(t,1e-4),triangles:Mi.info.render.triangles,calls:Mi.info.render.calls})}requestAnimationFrame($d)}function Kd(){const i=window.innerWidth,t=window.innerHeight,e=Math.min(window.devicePixelRatio||1,1.65);cs.aspect=i/t,cs.updateProjectionMatrix(),Mi.setPixelRatio(e),Mi.setSize(i,t),Gl.setSize(i,t,e)}window.addEventListener("resize",Kd);document.addEventListener("visibilitychange",()=>{Lu=document.hidden,Lu||(Dl=performance.now())});window.addEventListener("keydown",i=>{if(!Qs||i.repeat)return;const t=i.target?.tagName;if(!(t==="INPUT"||t==="TEXTAREA"||t==="SELECT"||i.target?.isContentEditable))if(i.code==="KeyV"){if(es)return;i.preventDefault(),uh()}else i.code==="KeyE"?(i.preventDefault(),q2()):i.code==="Escape"&&es&&ma()});function qf(i=[]){const t=[];for(const e of i||[])e&&(e.isMesh?t.push(e):e.traverse&&e.traverse(n=>{n.isMesh&&t.push(n)}));return t}async function tM(){Be.windowGlow=Ks(),Io(!0),Us(!0),Kd(),await $o(),Hn.setLoading(.36,"正在铺好门前的青石…"),await $o(),Hn.setLoading(.62,"正在让树叶落回原处…"),await $o(),Hn.setLoading(.84,"正在点亮窗前的灯…"),await $o(),ah.update(.016,jo),xs.update?.(.016,wo()),ts.update?.(.016,wo(),{camera:cs,mode:bn.mode}),zr.update?.(.016,wo(),{camera:cs,playerPosition:bn.getPosition(),mode:bn.mode}),bn.update(.016),Gl.render(.016),await $o(),Dl=performance.now(),$d(),await vl(260),Hn.setReady?.(),V2?.remove(),Qs=!0,Nl.ready=!0,bn.setInputEnabled(!0),Us(!0),setTimeout(()=>{es||Hn.setPrompt(null)},300)}tM();
