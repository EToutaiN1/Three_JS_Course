(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const to="148",zu=0,Co=1,Nu=2,ac=1,Uu=2,yr=3,_i=0,Je=1,As=2,Xr=3,Gn=0,Wi=1,Lo=2,Do=3,Po=4,ku=5,ki=100,Bu=101,Vu=102,Ro=103,Io=104,Gu=200,Hu=201,Wu=202,Xu=203,oc=204,lc=205,qu=206,$u=207,Yu=208,ju=209,Zu=210,Ku=0,Ju=1,Qu=2,Aa=3,th=4,eh=5,nh=6,ih=7,cc=0,rh=1,sh=2,Pn=0,ah=1,oh=2,lh=3,ch=4,uh=5,uc=300,ji=301,Zi=302,Ca=303,La=304,Cs=306,Da=1e3,an=1001,Pa=1002,be=1003,Fo=1004,ks=1005,$e=1006,hh=1007,Ar=1008,xi=1009,dh=1010,fh=1011,hc=1012,ph=1013,li=1014,ci=1015,Cr=1016,mh=1017,gh=1018,Xi=1020,_h=1021,xh=1022,on=1023,vh=1024,yh=1025,hi=1026,Ki=1027,Mh=1028,bh=1029,Sh=1030,wh=1031,Th=1033,Bs=33776,Vs=33777,Gs=33778,Hs=33779,Oo=35840,zo=35841,No=35842,Uo=35843,Eh=36196,ko=37492,Bo=37496,Vo=37808,Go=37809,Ho=37810,Wo=37811,Xo=37812,qo=37813,$o=37814,Yo=37815,jo=37816,Zo=37817,Ko=37818,Jo=37819,Qo=37820,tl=37821,el=36492,vi=3e3,Ut=3001,Ah=3200,Ch=3201,Lh=0,Dh=1,cn="srgb",Lr="srgb-linear",Ws=7680,Ph=519,nl=35044,il="300 es",Ra=1035;class lr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const he=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xs=Math.PI/180,rl=180/Math.PI;function Ur(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(he[o&255]+he[o>>8&255]+he[o>>16&255]+he[o>>24&255]+"-"+he[t&255]+he[t>>8&255]+"-"+he[t>>16&15|64]+he[t>>24&255]+"-"+he[e&63|128]+he[e>>8&255]+"-"+he[e>>16&255]+he[e>>24&255]+he[n&255]+he[n>>8&255]+he[n>>16&255]+he[n>>24&255]).toLowerCase()}function Oe(o,t,e){return Math.max(t,Math.min(e,o))}function Rh(o,t){return(o%t+t)%t}function qs(o,t,e){return(1-e)*o+e*t}function sl(o){return(o&o-1)===0&&o!==0}function Ia(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function qr(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Pe(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(t=0,e=0){Rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,a,s,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=s,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],s=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],_=n[8],f=i[0],p=i[3],g=i[6],M=i[1],v=i[4],b=i[7],y=i[2],A=i[5],C=i[8];return r[0]=a*f+s*M+l*y,r[3]=a*p+s*v+l*A,r[6]=a*g+s*b+l*C,r[1]=c*f+u*M+h*y,r[4]=c*p+u*v+h*A,r[7]=c*g+u*b+h*C,r[2]=d*f+m*M+_*y,r[5]=d*p+m*v+_*A,r[8]=d*g+m*b+_*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*s*c-n*r*u+n*s*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],l=t[6],c=t[7],u=t[8],h=u*a-s*c,d=s*l-u*r,m=c*r-a*l,_=e*h+n*d+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/_;return t[0]=h*f,t[1]=(i*c-u*n)*f,t[2]=(s*n-i*a)*f,t[3]=d*f,t[4]=(u*e-i*l)*f,t[5]=(i*r-s*e)*f,t[6]=m*f,t[7]=(n*l-c*e)*f,t[8]=(a*e-n*r)*f,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,s){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*s)+a+t,-i*c,i*l,-i*(-c*a+l*s)+s+e,0,0,1),this}scale(t,e){return this.premultiply($s.makeScale(t,e)),this}rotate(t){return this.premultiply($s.makeRotation(-t)),this}translate(t,e){return this.premultiply($s.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $s=new Ne;function dc(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Dr(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function di(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function fs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Ys={[cn]:{[Lr]:di},[Lr]:{[cn]:fs}},ye={legacyMode:!0,get workingColorSpace(){return Lr},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,t,e){if(this.legacyMode||t===e||!t||!e)return o;if(Ys[t]&&Ys[t][e]!==void 0){const n=Ys[t][e];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)}},fc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kt={r:0,g:0,b:0},nn={h:0,s:0,l:0},$r={h:0,s:0,l:0};function js(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}function Yr(o,t){return t.r=o.r,t.g=o.g,t.b=o.b,t}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ye.workingColorSpace){return this.r=t,this.g=e,this.b=n,ye.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ye.workingColorSpace){if(t=Rh(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=js(a,r,t+1/3),this.g=js(a,r,t),this.b=js(a,r,t-1/3)}return ye.toWorkingColorSpace(this,i),this}setStyle(t,e=cn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,ye.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,ye.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,ye.toWorkingColorSpace(this,e),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,ye.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=cn){const n=fc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return ye.fromWorkingColorSpace(Yr(this,Kt),t),Oe(Kt.r*255,0,255)<<16^Oe(Kt.g*255,0,255)<<8^Oe(Kt.b*255,0,255)<<0}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.fromWorkingColorSpace(Yr(this,Kt),e);const n=Kt.r,i=Kt.g,r=Kt.b,a=Math.max(n,i,r),s=Math.min(n,i,r);let l,c;const u=(s+a)/2;if(s===a)l=0,c=0;else{const h=a-s;switch(c=u<=.5?h/(a+s):h/(2-a-s),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ye.workingColorSpace){return ye.fromWorkingColorSpace(Yr(this,Kt),e),t.r=Kt.r,t.g=Kt.g,t.b=Kt.b,t}getStyle(t=cn){return ye.fromWorkingColorSpace(Yr(this,Kt),t),t!==cn?`color(${t} ${Kt.r} ${Kt.g} ${Kt.b})`:`rgb(${Kt.r*255|0},${Kt.g*255|0},${Kt.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(nn),nn.h+=t,nn.s+=e,nn.l+=n,this.setHSL(nn.h,nn.s,nn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(nn),t.getHSL($r);const n=qs(nn.h,$r.h,e),i=qs(nn.s,$r.s,e),r=qs(nn.l,$r.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Gt.NAMES=fc;let wi;class pc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{wi===void 0&&(wi=Dr("canvas")),wi.width=t.width,wi.height=t.height;const n=wi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=wi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Dr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=di(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class mc{constructor(t=null){this.isSource=!0,this.uuid=Ur(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?r.push(Zs(i[a].image)):r.push(Zs(i[a]))}else r=Zs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Zs(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?pc.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ih=0;class Te extends lr{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=an,i=an,r=$e,a=Ar,s=on,l=xi,c=Te.DEFAULT_ANISOTROPY,u=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Ur(),this.name="",this.source=new mc(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Da:t.x=t.x-Math.floor(t.x);break;case an:t.x=t.x<0?0:1;break;case Pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Da:t.y=t.y-Math.floor(t.y);break;case an:t.y=t.y<0?0:1;break;case Pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=uc;Te.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,i=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],_=l[9],f=l[2],p=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-f)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+f)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,b=(m+1)/2,y=(g+1)/2,A=(u+d)/4,C=(h+f)/4,x=(_+p)/4;return v>b&&v>y?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=A/n,r=C/n):b>y?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=A/i,r=x/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=C/r,i=x/r),this.set(n,i,r,e),this}let M=Math.sqrt((p-_)*(p-_)+(h-f)*(h-f)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(h-f)/M,this.z=(d-u)/M,this.w=Math.acos((c+m+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yi extends lr{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Te(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:$e,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new mc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gc extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=be,this.minFilter=be,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fh extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=be,this.minFilter=be,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kr{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,s){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[a+0],m=r[a+1],_=r[a+2],f=r[a+3];if(s===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(s===1){t[e+0]=d,t[e+1]=m,t[e+2]=_,t[e+3]=f;return}if(h!==f||l!==d||c!==m||u!==_){let p=1-s;const g=l*d+c*m+u*_+h*f,M=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const y=Math.sqrt(v),A=Math.atan2(y,g*M);p=Math.sin(p*A)/y,s=Math.sin(s*A)/y}const b=s*M;if(l=l*p+d*b,c=c*p+m*b,u=u*p+_*b,h=h*p+f*b,p===1-s){const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,a){const s=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],d=r[a+1],m=r[a+2],_=r[a+3];return t[e]=s*_+u*h+l*m-c*d,t[e+1]=l*_+u*d+c*h-s*m,t[e+2]=c*_+u*m+s*d-l*h,t[e+3]=u*_-s*h-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,a=t._order,s=Math.cos,l=Math.sin,c=s(n/2),u=s(i/2),h=s(r/2),d=l(n/2),m=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h-d*m*_;break;case"YXZ":this._x=d*u*h+c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h+d*m*_;break;case"ZXY":this._x=d*u*h-c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h-d*m*_;break;case"ZYX":this._x=d*u*h-c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h+d*m*_;break;case"YZX":this._x=d*u*h+c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h-d*m*_;break;case"XZY":this._x=d*u*h-c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],s=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+s+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>s&&n>h){const m=2*Math.sqrt(1+n-s-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(s>h){const m=2*Math.sqrt(1+s-n-h);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-s);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,s=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*s+i*c-r*l,this._y=i*u+a*l+r*s-n*c,this._z=r*u+a*c+n*l-i*s,this._w=a*u-n*s-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let s=a*t._w+n*t._x+i*t._y+r*t._z;if(s<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,s=-s):this.copy(t),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,n=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(al.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(al.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,s=t.z,l=t.w,c=l*e+a*i-s*n,u=l*n+s*e-r*i,h=l*i+r*n-a*e,d=-r*e-a*n-s*i;return this.x=c*l+d*-r+u*-s-h*-a,this.y=u*l+d*-a+h*-r-c*-s,this.z=h*l+d*-s+c*-a-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,s=e.y,l=e.z;return this.x=i*l-r*s,this.y=r*a-n*l,this.z=n*s-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ks.copy(this).projectOnVector(t),this.sub(Ks)}reflect(t){return this.sub(Ks.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ks=new z,al=new kr;class Br{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=t.length;l<c;l+=3){const u=t[l],h=t[l+1],d=t[l+2];u<e&&(e=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>a&&(a=h),d>s&&(s=d)}return this.min.set(e,n,i),this.max.set(r,a,s),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=t.count;l<c;l++){const u=t.getX(l),h=t.getY(l),d=t.getZ(l);u<e&&(e=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>a&&(a=h),d>s&&(s=d)}return this.min.set(e,n,i),this.max.set(r,a,s),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,s=r.count;a<s;a++)Qn.fromBufferAttribute(r,a).applyMatrix4(t.matrixWorld),this.expandByPoint(Qn)}else n.boundingBox===null&&n.computeBoundingBox(),Js.copy(n.boundingBox),Js.applyMatrix4(t.matrixWorld),this.union(Js);const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Qn),Qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(dr),jr.subVectors(this.max,dr),Ti.subVectors(t.a,dr),Ei.subVectors(t.b,dr),Ai.subVectors(t.c,dr),On.subVectors(Ei,Ti),zn.subVectors(Ai,Ei),ti.subVectors(Ti,Ai);let e=[0,-On.z,On.y,0,-zn.z,zn.y,0,-ti.z,ti.y,On.z,0,-On.x,zn.z,0,-zn.x,ti.z,0,-ti.x,-On.y,On.x,0,-zn.y,zn.x,0,-ti.y,ti.x,0];return!Qs(e,Ti,Ei,Ai,jr)||(e=[1,0,0,0,1,0,0,0,1],!Qs(e,Ti,Ei,Ai,jr))?!1:(Zr.crossVectors(On,zn),e=[Zr.x,Zr.y,Zr.z],Qs(e,Ti,Ei,Ai,jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Qn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Qn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const vn=[new z,new z,new z,new z,new z,new z,new z,new z],Qn=new z,Js=new Br,Ti=new z,Ei=new z,Ai=new z,On=new z,zn=new z,ti=new z,dr=new z,jr=new z,Zr=new z,ei=new z;function Qs(o,t,e,n,i){for(let r=0,a=o.length-3;r<=a;r+=3){ei.fromArray(o,r);const s=i.x*Math.abs(ei.x)+i.y*Math.abs(ei.y)+i.z*Math.abs(ei.z),l=t.dot(ei),c=e.dot(ei),u=n.dot(ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const Oh=new Br,fr=new z,ta=new z;class eo{constructor(t=new z,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Oh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fr.subVectors(t,this.center);const e=fr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(fr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ta.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fr.copy(t.center).add(ta)),this.expandByPoint(fr.copy(t.center).sub(ta))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new z,ea=new z,Kr=new z,Nn=new z,na=new z,Jr=new z,ia=new z;class _c{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.direction).multiplyScalar(e).add(this.origin),yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ea.copy(t).add(e).multiplyScalar(.5),Kr.copy(e).sub(t).normalize(),Nn.copy(this.origin).sub(ea);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Kr),s=Nn.dot(this.direction),l=-Nn.dot(Kr),c=Nn.lengthSq(),u=Math.abs(1-a*a);let h,d,m,_;if(u>0)if(h=a*l-s,d=a*s-l,_=r*u,h>=0)if(d>=-_)if(d<=_){const f=1/u;h*=f,d*=f,m=h*(h+a*d+2*s)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+s)),m=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+s)),m=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*r+s)),d=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(h=Math.max(0,-(a*r+s)),d=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+s)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Kr).multiplyScalar(d).add(ea),m}intersectSphere(t,e){yn.subVectors(t.center,this.origin);const n=yn.dot(this.direction),i=yn.dot(yn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),s=n-a,l=n+a;return s<0&&l<0?null:s<0?this.at(l,e):this.at(s,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,s,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(s=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(s=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||s>i)||((s>n||n!==n)&&(n=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,n,i,r){na.subVectors(e,t),Jr.subVectors(n,t),ia.crossVectors(na,Jr);let a=this.direction.dot(ia),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Nn.subVectors(this.origin,t);const l=s*this.direction.dot(Jr.crossVectors(Nn,Jr));if(l<0)return null;const c=s*this.direction.dot(na.cross(Nn));if(c<0||l+c>a)return null;const u=-s*Nn.dot(ia);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,a,s,l,c,u,h,d,m,_,f,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=s,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=d,g[3]=m,g[7]=_,g[11]=f,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ci.setFromMatrixColumn(t,0).length(),r=1/Ci.setFromMatrixColumn(t,1).length(),a=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),s=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=a*u,m=a*h,_=s*u,f=s*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+_*c,e[5]=d-f*c,e[9]=-s*l,e[2]=f-d*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,m=l*h,_=c*u,f=c*h;e[0]=d+f*s,e[4]=_*s-m,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-s,e[2]=m*s-_,e[6]=f+d*s,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,m=l*h,_=c*u,f=c*h;e[0]=d-f*s,e[4]=-a*h,e[8]=_+m*s,e[1]=m+_*s,e[5]=a*u,e[9]=f-d*s,e[2]=-a*c,e[6]=s,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,m=a*h,_=s*u,f=s*h;e[0]=l*u,e[4]=_*c-m,e[8]=d*c+f,e[1]=l*h,e[5]=f*c+d,e[9]=m*c-_,e[2]=-c,e[6]=s*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*c,_=s*l,f=s*c;e[0]=l*u,e[4]=f-d*h,e[8]=_*h+m,e[1]=h,e[5]=a*u,e[9]=-s*u,e[2]=-c*u,e[6]=m*h+_,e[10]=d-f*h}else if(t.order==="XZY"){const d=a*l,m=a*c,_=s*l,f=s*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+f,e[5]=a*u,e[9]=m*h-_,e[2]=_*h-m,e[6]=s*u,e[10]=f*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zh,t,Nh)}lookAt(t,e,n){const i=this.elements;return Re.subVectors(t,e),Re.lengthSq()===0&&(Re.z=1),Re.normalize(),Un.crossVectors(n,Re),Un.lengthSq()===0&&(Math.abs(n.z)===1?Re.x+=1e-4:Re.z+=1e-4,Re.normalize(),Un.crossVectors(n,Re)),Un.normalize(),Qr.crossVectors(Re,Un),i[0]=Un.x,i[4]=Qr.x,i[8]=Re.x,i[1]=Un.y,i[5]=Qr.y,i[9]=Re.y,i[2]=Un.z,i[6]=Qr.z,i[10]=Re.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],s=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],_=n[2],f=n[6],p=n[10],g=n[14],M=n[3],v=n[7],b=n[11],y=n[15],A=i[0],C=i[4],x=i[8],T=i[12],D=i[1],O=i[5],j=i[9],R=i[13],P=i[2],N=i[6],Y=i[10],$=i[14],k=i[3],tt=i[7],Z=i[11],U=i[15];return r[0]=a*A+s*D+l*P+c*k,r[4]=a*C+s*O+l*N+c*tt,r[8]=a*x+s*j+l*Y+c*Z,r[12]=a*T+s*R+l*$+c*U,r[1]=u*A+h*D+d*P+m*k,r[5]=u*C+h*O+d*N+m*tt,r[9]=u*x+h*j+d*Y+m*Z,r[13]=u*T+h*R+d*$+m*U,r[2]=_*A+f*D+p*P+g*k,r[6]=_*C+f*O+p*N+g*tt,r[10]=_*x+f*j+p*Y+g*Z,r[14]=_*T+f*R+p*$+g*U,r[3]=M*A+v*D+b*P+y*k,r[7]=M*C+v*O+b*N+y*tt,r[11]=M*x+v*j+b*Y+y*Z,r[15]=M*T+v*R+b*$+y*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],s=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],m=t[14],_=t[3],f=t[7],p=t[11],g=t[15];return _*(+r*l*h-i*c*h-r*s*d+n*c*d+i*s*m-n*l*m)+f*(+e*l*m-e*c*d+r*a*d-i*a*m+i*c*u-r*l*u)+p*(+e*c*h-e*s*m-r*a*h+n*a*m+r*s*u-n*c*u)+g*(-i*s*u-e*l*h+e*s*d+i*a*h-n*a*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],m=t[11],_=t[12],f=t[13],p=t[14],g=t[15],M=h*p*c-f*d*c+f*l*m-s*p*m-h*l*g+s*d*g,v=_*d*c-u*p*c-_*l*m+a*p*m+u*l*g-a*d*g,b=u*f*c-_*h*c+_*s*m-a*f*m-u*s*g+a*h*g,y=_*h*l-u*f*l-_*s*d+a*f*d+u*s*p-a*h*p,A=e*M+n*v+i*b+r*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=M*C,t[1]=(f*d*r-h*p*r-f*i*m+n*p*m+h*i*g-n*d*g)*C,t[2]=(s*p*r-f*l*r+f*i*c-n*p*c-s*i*g+n*l*g)*C,t[3]=(h*l*r-s*d*r-h*i*c+n*d*c+s*i*m-n*l*m)*C,t[4]=v*C,t[5]=(u*p*r-_*d*r+_*i*m-e*p*m-u*i*g+e*d*g)*C,t[6]=(_*l*r-a*p*r-_*i*c+e*p*c+a*i*g-e*l*g)*C,t[7]=(a*d*r-u*l*r+u*i*c-e*d*c-a*i*m+e*l*m)*C,t[8]=b*C,t[9]=(_*h*r-u*f*r-_*n*m+e*f*m+u*n*g-e*h*g)*C,t[10]=(a*f*r-_*s*r+_*n*c-e*f*c-a*n*g+e*s*g)*C,t[11]=(u*s*r-a*h*r-u*n*c+e*h*c+a*n*m-e*s*m)*C,t[12]=y*C,t[13]=(u*f*i-_*h*i+_*n*d-e*f*d-u*n*p+e*h*p)*C,t[14]=(_*s*i-a*f*i-_*n*l+e*f*l+a*n*p-e*s*p)*C,t[15]=(a*h*i-u*s*i+u*n*l-e*h*l-a*n*d+e*s*d)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,s=t.y,l=t.z,c=r*a,u=r*s;return this.set(c*a+n,c*s-i*l,c*l+i*s,0,c*s+i*l,u*s+n,u*l-i*a,0,c*l-i*s,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,s=e._z,l=e._w,c=r+r,u=a+a,h=s+s,d=r*c,m=r*u,_=r*h,f=a*u,p=a*h,g=s*h,M=l*c,v=l*u,b=l*h,y=n.x,A=n.y,C=n.z;return i[0]=(1-(f+g))*y,i[1]=(m+b)*y,i[2]=(_-v)*y,i[3]=0,i[4]=(m-b)*A,i[5]=(1-(d+g))*A,i[6]=(p+M)*A,i[7]=0,i[8]=(_+v)*C,i[9]=(p-M)*C,i[10]=(1-(d+f))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ci.set(i[0],i[1],i[2]).length();const a=Ci.set(i[4],i[5],i[6]).length(),s=Ci.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],rn.copy(this);const c=1/r,u=1/a,h=1/s;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=h,rn.elements[9]*=h,rn.elements[10]*=h,e.setFromRotationMatrix(rn),n.x=r,n.y=a,n.z=s,this}makePerspective(t,e,n,i,r,a){const s=this.elements,l=2*r/(e-t),c=2*r/(n-i),u=(e+t)/(e-t),h=(n+i)/(n-i),d=-(a+r)/(a-r),m=-2*a*r/(a-r);return s[0]=l,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=c,s[9]=h,s[13]=0,s[2]=0,s[6]=0,s[10]=d,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(t,e,n,i,r,a){const s=this.elements,l=1/(e-t),c=1/(n-i),u=1/(a-r),h=(e+t)*l,d=(n+i)*c,m=(a+r)*u;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-h,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-d,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ci=new z,rn=new ce,zh=new z(0,0,0),Nh=new z(1,1,1),Un=new z,Qr=new z,Re=new z,ol=new ce,ll=new kr;class Vr{constructor(t=0,e=0,n=0,i=Vr.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],s=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Oe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ol.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ol,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ll.setFromEuler(this),this.setFromQuaternion(ll,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Vr.DefaultOrder="XYZ";Vr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class no{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Uh=0;const cl=new z,Li=new kr,Mn=new ce,ts=new z,pr=new z,kh=new z,Bh=new kr,ul=new z(1,0,0),hl=new z(0,1,0),dl=new z(0,0,1),Vh={type:"added"},fl={type:"removed"};class Ue extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DefaultUp.clone();const t=new z,e=new Vr,n=new kr,i=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ce},normalMatrix:{value:new Ne}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Ue.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ue.DefaultMatrixWorldAutoUpdate,this.layers=new no,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.multiply(Li),this}rotateOnWorldAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.premultiply(Li),this}rotateX(t){return this.rotateOnAxis(ul,t)}rotateY(t){return this.rotateOnAxis(hl,t)}rotateZ(t){return this.rotateOnAxis(dl,t)}translateOnAxis(t,e){return cl.copy(t).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ul,t)}translateY(t){return this.translateOnAxis(hl,t)}translateZ(t){return this.translateOnAxis(dl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ts.copy(t):ts.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(pr,ts,this.up):Mn.lookAt(ts,pr,this.up),this.quaternion.setFromRotationMatrix(Mn),i&&(Mn.extractRotation(i.matrixWorld),Li.setFromRotationMatrix(Mn),this.quaternion.premultiply(Li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Vh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(fl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,t,kh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,Bh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(r(t.materials,this.material[l]));i.material=s}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(r(t.animations,l))}}if(e){const s=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),m=a(t.animations),_=a(t.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ue.DefaultUp=new z(0,1,0);Ue.DefaultMatrixAutoUpdate=!0;Ue.DefaultMatrixWorldAutoUpdate=!0;const sn=new z,bn=new z,ra=new z,Sn=new z,Di=new z,Pi=new z,pl=new z,sa=new z,aa=new z,oa=new z;class An{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),sn.subVectors(t,e),i.cross(sn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){sn.subVectors(i,e),bn.subVectors(n,e),ra.subVectors(t,e);const a=sn.dot(sn),s=sn.dot(bn),l=sn.dot(ra),c=bn.dot(bn),u=bn.dot(ra),h=a*c-s*s;if(h===0)return r.set(-2,-1,-1);const d=1/h,m=(c*l-s*u)*d,_=(a*u-s*l)*d;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Sn),Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getUV(t,e,n,i,r,a,s,l){return this.getBarycoord(t,e,n,i,Sn),l.set(0,0),l.addScaledVector(r,Sn.x),l.addScaledVector(a,Sn.y),l.addScaledVector(s,Sn.z),l}static isFrontFacing(t,e,n,i){return sn.subVectors(n,e),bn.subVectors(t,e),sn.cross(bn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),sn.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return An.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return An.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return An.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return An.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return An.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,s;Di.subVectors(i,n),Pi.subVectors(r,n),sa.subVectors(t,n);const l=Di.dot(sa),c=Pi.dot(sa);if(l<=0&&c<=0)return e.copy(n);aa.subVectors(t,i);const u=Di.dot(aa),h=Pi.dot(aa);if(u>=0&&h<=u)return e.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Di,a);oa.subVectors(t,r);const m=Di.dot(oa),_=Pi.dot(oa);if(_>=0&&m<=_)return e.copy(r);const f=m*c-l*_;if(f<=0&&c>=0&&_<=0)return s=c/(c-_),e.copy(n).addScaledVector(Pi,s);const p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return pl.subVectors(r,i),s=(h-u)/(h-u+(m-_)),e.copy(i).addScaledVector(pl,s);const g=1/(p+f+d);return a=f*g,s=d*g,e.copy(n).addScaledVector(Di,a).addScaledVector(Pi,s)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Gh=0;class Ls extends lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Ur(),this.name="",this.type="Material",this.blending=Wi,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=oc,this.blendDst=lc,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const s in r){const l=r[s];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class xc extends Ls{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Yt=new z,es=new Rt;class dn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)es.fromBufferAttribute(this,e),es.applyMatrix3(t),this.setXY(e,es.x,es.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Yt.fromBufferAttribute(this,e),Yt.applyMatrix3(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Yt.fromBufferAttribute(this,e),Yt.applyMatrix4(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Yt.fromBufferAttribute(this,e),Yt.applyNormalMatrix(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Yt.fromBufferAttribute(this,e),Yt.transformDirection(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nl&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class vc extends dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yc extends dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fi extends dn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Hh=0;const We=new ce,la=new Ue,Ri=new z,Ie=new Br,mr=new Br,se=new z;class bi extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=Ur(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dc(t)?yc:vc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return la.lookAt(t),la.updateMatrix(),this.applyMatrix4(la.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new fi(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ie.setFromBufferAttribute(r),this.morphTargetsRelative?(se.addVectors(this.boundingBox.min,Ie.min),this.boundingBox.expandByPoint(se),se.addVectors(this.boundingBox.max,Ie.max),this.boundingBox.expandByPoint(se)):(this.boundingBox.expandByPoint(Ie.min),this.boundingBox.expandByPoint(Ie.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(Ie.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const s=e[r];mr.setFromBufferAttribute(s),this.morphTargetsRelative?(se.addVectors(Ie.min,mr.min),Ie.expandByPoint(se),se.addVectors(Ie.max,mr.max),Ie.expandByPoint(se)):(Ie.expandByPoint(mr.min),Ie.expandByPoint(mr.max))}Ie.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)se.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(se));if(e)for(let r=0,a=e.length;r<a;r++){const s=e[r],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)se.fromBufferAttribute(s,c),l&&(Ri.fromBufferAttribute(t,c),se.add(Ri)),i=Math.max(i,n.distanceToSquared(se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<s;D++)c[D]=new z,u[D]=new z;const h=new z,d=new z,m=new z,_=new Rt,f=new Rt,p=new Rt,g=new z,M=new z;function v(D,O,j){h.fromArray(i,D*3),d.fromArray(i,O*3),m.fromArray(i,j*3),_.fromArray(a,D*2),f.fromArray(a,O*2),p.fromArray(a,j*2),d.sub(h),m.sub(h),f.sub(_),p.sub(_);const R=1/(f.x*p.y-p.x*f.y);isFinite(R)&&(g.copy(d).multiplyScalar(p.y).addScaledVector(m,-f.y).multiplyScalar(R),M.copy(m).multiplyScalar(f.x).addScaledVector(d,-p.x).multiplyScalar(R),c[D].add(g),c[O].add(g),c[j].add(g),u[D].add(M),u[O].add(M),u[j].add(M))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let D=0,O=b.length;D<O;++D){const j=b[D],R=j.start,P=j.count;for(let N=R,Y=R+P;N<Y;N+=3)v(n[N+0],n[N+1],n[N+2])}const y=new z,A=new z,C=new z,x=new z;function T(D){C.fromArray(r,D*3),x.copy(C);const O=c[D];y.copy(O),y.sub(C.multiplyScalar(C.dot(O))).normalize(),A.crossVectors(x,O);const R=A.dot(u[D])<0?-1:1;l[D*4]=y.x,l[D*4+1]=y.y,l[D*4+2]=y.z,l[D*4+3]=R}for(let D=0,O=b.length;D<O;++D){const j=b[D],R=j.start,P=j.count;for(let N=R,Y=R+P;N<Y;N+=3)T(n[N+0]),T(n[N+1]),T(n[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new z,r=new z,a=new z,s=new z,l=new z,c=new z,u=new z,h=new z;if(t)for(let d=0,m=t.count;d<m;d+=3){const _=t.getX(d+0),f=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,f),a.fromBufferAttribute(e,p),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),s.fromBufferAttribute(n,_),l.fromBufferAttribute(n,f),c.fromBufferAttribute(n,p),s.add(u),l.add(u),c.add(u),n.setXYZ(_,s.x,s.y,s.z),n.setXYZ(f,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)se.fromBufferAttribute(t,e),se.normalize(),t.setXYZ(e,se.x,se.y,se.z)}toNonIndexed(){function t(s,l){const c=s.array,u=s.itemSize,h=s.normalized,d=new c.constructor(l.length*u);let m=0,_=0;for(let f=0,p=l.length;f<p;f++){s.isInterleavedBufferAttribute?m=l[f]*s.data.stride+s.offset:m=l[f]*u;for(let g=0;g<u;g++)d[_++]=c[m++]}return new dn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new bi,n=this.index.array,i=this.attributes;for(const s in i){const l=i[s],c=t(l,n);e.setAttribute(s,c)}const r=this.morphAttributes;for(const s in r){const l=[],c=r[s];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=t(d,n);l.push(m)}e.morphAttributes[s]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const c=a[s];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(t.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const s=t.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ml=new ce,Ii=new _c,ca=new eo,gr=new z,_r=new z,xr=new z,ua=new z,ns=new z,is=new Rt,rs=new Rt,ss=new Rt,ha=new z,as=new z;class Ln extends Ue{constructor(t=new bi,e=new xc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const s=this.morphTargetInfluences;if(r&&s){ns.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=s[l],h=r[l];u!==0&&(ua.fromBufferAttribute(h,t),a?ns.addScaledVector(ua,u):ns.addScaledVector(ua.sub(e),u))}e.add(ns)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(r),t.ray.intersectsSphere(ca)===!1)||(ml.copy(r).invert(),Ii.copy(t.ray).applyMatrix4(ml),n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1))return;let a;const s=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,d=n.drawRange;if(s!==null)if(Array.isArray(i))for(let m=0,_=h.length;m<_;m++){const f=h[m],p=i[f.materialIndex],g=Math.max(f.start,d.start),M=Math.min(s.count,Math.min(f.start+f.count,d.start+d.count));for(let v=g,b=M;v<b;v+=3){const y=s.getX(v),A=s.getX(v+1),C=s.getX(v+2);a=os(this,p,t,Ii,c,u,y,A,C),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=f.materialIndex,e.push(a))}}else{const m=Math.max(0,d.start),_=Math.min(s.count,d.start+d.count);for(let f=m,p=_;f<p;f+=3){const g=s.getX(f),M=s.getX(f+1),v=s.getX(f+2);a=os(this,i,t,Ii,c,u,g,M,v),a&&(a.faceIndex=Math.floor(f/3),e.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,_=h.length;m<_;m++){const f=h[m],p=i[f.materialIndex],g=Math.max(f.start,d.start),M=Math.min(l.count,Math.min(f.start+f.count,d.start+d.count));for(let v=g,b=M;v<b;v+=3){const y=v,A=v+1,C=v+2;a=os(this,p,t,Ii,c,u,y,A,C),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=f.materialIndex,e.push(a))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let f=m,p=_;f<p;f+=3){const g=f,M=f+1,v=f+2;a=os(this,i,t,Ii,c,u,g,M,v),a&&(a.faceIndex=Math.floor(f/3),e.push(a))}}}}function Wh(o,t,e,n,i,r,a,s){let l;if(t.side===Je?l=n.intersectTriangle(a,r,i,!0,s):l=n.intersectTriangle(i,r,a,t.side===_i,s),l===null)return null;as.copy(s),as.applyMatrix4(o.matrixWorld);const c=e.ray.origin.distanceTo(as);return c<e.near||c>e.far?null:{distance:c,point:as.clone(),object:o}}function os(o,t,e,n,i,r,a,s,l){o.getVertexPosition(a,gr),o.getVertexPosition(s,_r),o.getVertexPosition(l,xr);const c=Wh(o,t,e,n,gr,_r,xr,ha);if(c){i&&(is.fromBufferAttribute(i,a),rs.fromBufferAttribute(i,s),ss.fromBufferAttribute(i,l),c.uv=An.getUV(ha,gr,_r,xr,is,rs,ss,new Rt)),r&&(is.fromBufferAttribute(r,a),rs.fromBufferAttribute(r,s),ss.fromBufferAttribute(r,l),c.uv2=An.getUV(ha,gr,_r,xr,is,rs,ss,new Rt));const u={a,b:s,c:l,normal:new z,materialIndex:0};An.getNormal(gr,_r,xr,u.normal),c.face=u}return c}class Gr extends bi{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const s=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,m=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new fi(c,3)),this.setAttribute("normal",new fi(u,3)),this.setAttribute("uv",new fi(h,2));function _(f,p,g,M,v,b,y,A,C,x,T){const D=b/C,O=y/x,j=b/2,R=y/2,P=A/2,N=C+1,Y=x+1;let $=0,k=0;const tt=new z;for(let Z=0;Z<Y;Z++){const U=Z*O-R;for(let B=0;B<N;B++){const K=B*D-j;tt[f]=K*M,tt[p]=U*v,tt[g]=P,c.push(tt.x,tt.y,tt.z),tt[f]=0,tt[p]=0,tt[g]=A>0?1:-1,u.push(tt.x,tt.y,tt.z),h.push(B/C),h.push(1-Z/x),$+=1}}for(let Z=0;Z<x;Z++)for(let U=0;U<C;U++){const B=d+U+N*Z,K=d+U+N*(Z+1),J=d+(U+1)+N*(Z+1),it=d+(U+1)+N*Z;l.push(B,K,it),l.push(K,J,it),k+=6}s.addGroup(m,k,T),m+=k,d+=$}}static fromJSON(t){return new Gr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ji(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Me(o){const t={};for(let e=0;e<o.length;e++){const n=Ji(o[e]);for(const i in n)t[i]=n[i]}return t}function Xh(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function Mc(o){return o.getRenderTarget()===null&&o.outputEncoding===Ut?cn:Lr}const qh={clone:Ji,merge:Me};var $h=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends Ls{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$h,this.fragmentShader=Yh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=Xh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class bc extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ye extends bc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rl*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const s=this.filmOffset;s!==0&&(r+=t*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Fi=-90,Oi=1;class jh extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ye(Fi,Oi,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Ye(Fi,Oi,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new Ye(Fi,Oi,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const s=new Ye(Fi,Oi,t,e);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const l=new Ye(Fi,Oi,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Ye(Fi,Oi,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,s,l,c]=this.children,u=t.getRenderTarget(),h=t.toneMapping,d=t.xr.enabled;t.toneMapping=Pn,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,s),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Sc extends Te{constructor(t,e,n,i,r,a,s,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ji,super(t,e,n,i,r,a,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zh extends yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Sc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Gr(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:Gn});r.uniforms.tEquirect.value=e;const a=new Ln(i,r),s=e.minFilter;return e.minFilter===Ar&&(e.minFilter=$e),new jh(1,10,this).update(t,a),e.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const da=new z,Kh=new z,Jh=new Ne;class ri{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=da.subVectors(n,e).cross(Kh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(da),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Jh.getNormalMatrix(t),i=this.coplanarPoint(da).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new eo,ls=new z;class wc{constructor(t=new ri,e=new ri,n=new ri,i=new ri,r=new ri,a=new ri){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const s=this.planes;return s[0].copy(t),s[1].copy(e),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],a=n[2],s=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],m=n[9],_=n[10],f=n[11],p=n[12],g=n[13],M=n[14],v=n[15];return e[0].setComponents(s-i,h-l,f-d,v-p).normalize(),e[1].setComponents(s+i,h+l,f+d,v+p).normalize(),e[2].setComponents(s+r,h+c,f+m,v+g).normalize(),e[3].setComponents(s-r,h-c,f-m,v-g).normalize(),e[4].setComponents(s-a,h-u,f-_,v-M).normalize(),e[5].setComponents(s+a,h+u,f+_,v+M).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSprite(t){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ls.x=i.normal.x>0?t.max.x:t.min.x,ls.y=i.normal.y>0?t.max.y:t.min.y,ls.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ls)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tc(){let o=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){o=r}}}function Qh(o,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,m=o.createBuffer();o.bindBuffer(u,m),o.bufferData(u,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(h instanceof Int16Array)_=5122;else if(h instanceof Uint32Array)_=5125;else if(h instanceof Int32Array)_=5124;else if(h instanceof Int8Array)_=5120;else if(h instanceof Uint8Array)_=5121;else if(h instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const d=u.array,m=u.updateRange;o.bindBuffer(h,c),m.count===-1?o.bufferSubData(h,0,d):(e?o.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):o.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:s,update:l}}class Ds extends bi{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,s=Math.floor(n),l=Math.floor(i),c=s+1,u=l+1,h=t/s,d=e/l,m=[],_=[],f=[],p=[];for(let g=0;g<u;g++){const M=g*d-a;for(let v=0;v<c;v++){const b=v*h-r;_.push(b,-M,0),f.push(0,0,1),p.push(v/s),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<s;M++){const v=M+c*g,b=M+c*(g+1),y=M+1+c*(g+1),A=M+1+c*g;m.push(v,b,A),m.push(b,y,A)}this.setIndex(m),this.setAttribute("position",new fi(_,3)),this.setAttribute("normal",new fi(f,3)),this.setAttribute("uv",new fi(p,2))}static fromJSON(t){return new Ds(t.width,t.height,t.widthSegments,t.heightSegments)}}var td=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ed=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ad="vec3 transformed = vec3( position );",od=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ld=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,cd=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,ud=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vd=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,yd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Md=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Td=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ed="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ad=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dd=`#ifdef USE_ENVMAP
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
#endif`,Pd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Od=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nd=`#ifdef USE_GRADIENTMAP
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
}`,Ud=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Hd=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Wd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$d=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,jd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Qd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ef=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,of=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,df=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ff=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,pf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,mf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,yf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Mf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,bf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Sf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Ef=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Df=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rf=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,If=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ff=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Of=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Uf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kf=`#ifdef USE_SKINNING
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
#endif`,Bf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Xf=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,qf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,$f=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Yf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,jf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Zf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Kf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Jf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tp=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,np=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,ap=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,op=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,lp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,up=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,pp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,gp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_p=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,xp=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,bp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,wp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Ep=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ap=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Cp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Pp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Rp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Mt={alphamap_fragment:td,alphamap_pars_fragment:ed,alphatest_fragment:nd,alphatest_pars_fragment:id,aomap_fragment:rd,aomap_pars_fragment:sd,begin_vertex:ad,beginnormal_vertex:od,bsdfs:ld,iridescence_fragment:cd,bumpmap_pars_fragment:ud,clipping_planes_fragment:hd,clipping_planes_pars_fragment:dd,clipping_planes_pars_vertex:fd,clipping_planes_vertex:pd,color_fragment:md,color_pars_fragment:gd,color_pars_vertex:_d,color_vertex:xd,common:vd,cube_uv_reflection_fragment:yd,defaultnormal_vertex:Md,displacementmap_pars_vertex:bd,displacementmap_vertex:Sd,emissivemap_fragment:wd,emissivemap_pars_fragment:Td,encodings_fragment:Ed,encodings_pars_fragment:Ad,envmap_fragment:Cd,envmap_common_pars_fragment:Ld,envmap_pars_fragment:Dd,envmap_pars_vertex:Pd,envmap_physical_pars_fragment:Hd,envmap_vertex:Rd,fog_vertex:Id,fog_pars_vertex:Fd,fog_fragment:Od,fog_pars_fragment:zd,gradientmap_pars_fragment:Nd,lightmap_fragment:Ud,lightmap_pars_fragment:kd,lights_lambert_fragment:Bd,lights_lambert_pars_fragment:Vd,lights_pars_begin:Gd,lights_toon_fragment:Wd,lights_toon_pars_fragment:Xd,lights_phong_fragment:qd,lights_phong_pars_fragment:$d,lights_physical_fragment:Yd,lights_physical_pars_fragment:jd,lights_fragment_begin:Zd,lights_fragment_maps:Kd,lights_fragment_end:Jd,logdepthbuf_fragment:Qd,logdepthbuf_pars_fragment:tf,logdepthbuf_pars_vertex:ef,logdepthbuf_vertex:nf,map_fragment:rf,map_pars_fragment:sf,map_particle_fragment:af,map_particle_pars_fragment:of,metalnessmap_fragment:lf,metalnessmap_pars_fragment:cf,morphcolor_vertex:uf,morphnormal_vertex:hf,morphtarget_pars_vertex:df,morphtarget_vertex:ff,normal_fragment_begin:pf,normal_fragment_maps:mf,normal_pars_fragment:gf,normal_pars_vertex:_f,normal_vertex:xf,normalmap_pars_fragment:vf,clearcoat_normal_fragment_begin:yf,clearcoat_normal_fragment_maps:Mf,clearcoat_pars_fragment:bf,iridescence_pars_fragment:Sf,output_fragment:wf,packing:Tf,premultiplied_alpha_fragment:Ef,project_vertex:Af,dithering_fragment:Cf,dithering_pars_fragment:Lf,roughnessmap_fragment:Df,roughnessmap_pars_fragment:Pf,shadowmap_pars_fragment:Rf,shadowmap_pars_vertex:If,shadowmap_vertex:Ff,shadowmask_pars_fragment:Of,skinbase_vertex:zf,skinning_pars_vertex:Nf,skinning_vertex:Uf,skinnormal_vertex:kf,specularmap_fragment:Bf,specularmap_pars_fragment:Vf,tonemapping_fragment:Gf,tonemapping_pars_fragment:Hf,transmission_fragment:Wf,transmission_pars_fragment:Xf,uv_pars_fragment:qf,uv_pars_vertex:$f,uv_vertex:Yf,uv2_pars_fragment:jf,uv2_pars_vertex:Zf,uv2_vertex:Kf,worldpos_vertex:Jf,background_vert:Qf,background_frag:tp,backgroundCube_vert:ep,backgroundCube_frag:np,cube_vert:ip,cube_frag:rp,depth_vert:sp,depth_frag:ap,distanceRGBA_vert:op,distanceRGBA_frag:lp,equirect_vert:cp,equirect_frag:up,linedashed_vert:hp,linedashed_frag:dp,meshbasic_vert:fp,meshbasic_frag:pp,meshlambert_vert:mp,meshlambert_frag:gp,meshmatcap_vert:_p,meshmatcap_frag:xp,meshnormal_vert:vp,meshnormal_frag:yp,meshphong_vert:Mp,meshphong_frag:bp,meshphysical_vert:Sp,meshphysical_frag:wp,meshtoon_vert:Tp,meshtoon_frag:Ep,points_vert:Ap,points_frag:Cp,shadow_vert:Lp,shadow_frag:Dp,sprite_vert:Pp,sprite_frag:Rp},rt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ne},uv2Transform:{value:new Ne},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ne}}},un={basic:{uniforms:Me([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:Me([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:Me([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:Me([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:Me([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:Me([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:Me([rt.points,rt.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:Me([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:Me([rt.common,rt.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:Me([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:Me([rt.sprite,rt.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:Me([rt.common,rt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:Me([rt.lights,rt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};un.physical={uniforms:Me([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const cs={r:0,b:0,g:0};function Ip(o,t,e,n,i,r,a){const s=new Gt(0);let l=r===!0?0:1,c,u,h=null,d=0,m=null;function _(p,g){let M=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?e:t).get(v));const b=o.xr,y=b.getSession&&b.getSession();y&&y.environmentBlendMode==="additive"&&(v=null),v===null?f(s,l):v&&v.isColor&&(f(v,1),M=!0),(o.autoClear||M)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Cs)?(u===void 0&&(u=new Ln(new Gr(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Ji(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=v.encoding!==Ut,(h!==v||d!==v.version||m!==o.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,m=o.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ln(new Ds(2,2),new Xn({name:"BackgroundMaterial",uniforms:Ji(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=v.encoding!==Ut,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||m!==o.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,m=o.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function f(p,g){p.getRGB(cs,Mc(o)),n.buffers.color.setClear(cs.r,cs.g,cs.b,g,a)}return{getClearColor:function(){return s},setClearColor:function(p,g=1){s.set(p),l=g,f(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,f(s,l)},render:_}}function Fp(o,t,e,n){const i=o.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,s={},l=p(null);let c=l,u=!1;function h(P,N,Y,$,k){let tt=!1;if(a){const Z=f($,Y,N);c!==Z&&(c=Z,m(c.object)),tt=g(P,$,Y,k),tt&&M(P,$,Y,k)}else{const Z=N.wireframe===!0;(c.geometry!==$.id||c.program!==Y.id||c.wireframe!==Z)&&(c.geometry=$.id,c.program=Y.id,c.wireframe=Z,tt=!0)}k!==null&&e.update(k,34963),(tt||u)&&(u=!1,x(P,N,Y,$),k!==null&&o.bindBuffer(34963,e.get(k).buffer))}function d(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function m(P){return n.isWebGL2?o.bindVertexArray(P):r.bindVertexArrayOES(P)}function _(P){return n.isWebGL2?o.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function f(P,N,Y){const $=Y.wireframe===!0;let k=s[P.id];k===void 0&&(k={},s[P.id]=k);let tt=k[N.id];tt===void 0&&(tt={},k[N.id]=tt);let Z=tt[$];return Z===void 0&&(Z=p(d()),tt[$]=Z),Z}function p(P){const N=[],Y=[],$=[];for(let k=0;k<i;k++)N[k]=0,Y[k]=0,$[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:Y,attributeDivisors:$,object:P,attributes:{},index:null}}function g(P,N,Y,$){const k=c.attributes,tt=N.attributes;let Z=0;const U=Y.getAttributes();for(const B in U)if(U[B].location>=0){const J=k[B];let it=tt[B];if(it===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(it=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(it=P.instanceColor)),J===void 0||J.attribute!==it||it&&J.data!==it.data)return!0;Z++}return c.attributesNum!==Z||c.index!==$}function M(P,N,Y,$){const k={},tt=N.attributes;let Z=0;const U=Y.getAttributes();for(const B in U)if(U[B].location>=0){let J=tt[B];J===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(J=P.instanceColor));const it={};it.attribute=J,J&&J.data&&(it.data=J.data),k[B]=it,Z++}c.attributes=k,c.attributesNum=Z,c.index=$}function v(){const P=c.newAttributes;for(let N=0,Y=P.length;N<Y;N++)P[N]=0}function b(P){y(P,0)}function y(P,N){const Y=c.newAttributes,$=c.enabledAttributes,k=c.attributeDivisors;Y[P]=1,$[P]===0&&(o.enableVertexAttribArray(P),$[P]=1),k[P]!==N&&((n.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),k[P]=N)}function A(){const P=c.newAttributes,N=c.enabledAttributes;for(let Y=0,$=N.length;Y<$;Y++)N[Y]!==P[Y]&&(o.disableVertexAttribArray(Y),N[Y]=0)}function C(P,N,Y,$,k,tt){n.isWebGL2===!0&&(Y===5124||Y===5125)?o.vertexAttribIPointer(P,N,Y,k,tt):o.vertexAttribPointer(P,N,Y,$,k,tt)}function x(P,N,Y,$){if(n.isWebGL2===!1&&(P.isInstancedMesh||$.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const k=$.attributes,tt=Y.getAttributes(),Z=N.defaultAttributeValues;for(const U in tt){const B=tt[U];if(B.location>=0){let K=k[U];if(K===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(K=P.instanceColor)),K!==void 0){const J=K.normalized,it=K.itemSize,X=e.get(K);if(X===void 0)continue;const Lt=X.buffer,ct=X.type,xt=X.bytesPerElement;if(K.isInterleavedBufferAttribute){const lt=K.data,Ft=lt.stride,bt=K.offset;if(lt.isInstancedInterleavedBuffer){for(let _t=0;_t<B.locationSize;_t++)y(B.location+_t,lt.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let _t=0;_t<B.locationSize;_t++)b(B.location+_t);o.bindBuffer(34962,Lt);for(let _t=0;_t<B.locationSize;_t++)C(B.location+_t,it/B.locationSize,ct,J,Ft*xt,(bt+it/B.locationSize*_t)*xt)}else{if(K.isInstancedBufferAttribute){for(let lt=0;lt<B.locationSize;lt++)y(B.location+lt,K.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let lt=0;lt<B.locationSize;lt++)b(B.location+lt);o.bindBuffer(34962,Lt);for(let lt=0;lt<B.locationSize;lt++)C(B.location+lt,it/B.locationSize,ct,J,it*xt,it/B.locationSize*lt*xt)}}else if(Z!==void 0){const J=Z[U];if(J!==void 0)switch(J.length){case 2:o.vertexAttrib2fv(B.location,J);break;case 3:o.vertexAttrib3fv(B.location,J);break;case 4:o.vertexAttrib4fv(B.location,J);break;default:o.vertexAttrib1fv(B.location,J)}}}}A()}function T(){j();for(const P in s){const N=s[P];for(const Y in N){const $=N[Y];for(const k in $)_($[k].object),delete $[k];delete N[Y]}delete s[P]}}function D(P){if(s[P.id]===void 0)return;const N=s[P.id];for(const Y in N){const $=N[Y];for(const k in $)_($[k].object),delete $[k];delete N[Y]}delete s[P.id]}function O(P){for(const N in s){const Y=s[N];if(Y[P.id]===void 0)continue;const $=Y[P.id];for(const k in $)_($[k].object),delete $[k];delete Y[P.id]}}function j(){R(),u=!0,c!==l&&(c=l,m(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:j,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:D,releaseStatesOfProgram:O,initAttributes:v,enableAttribute:b,disableUnusedAttributes:A}}function Op(o,t,e,n){const i=n.isWebGL2;let r;function a(c){r=c}function s(c,u){o.drawArrays(r,c,u),e.update(u,r,1)}function l(c,u,h){if(h===0)return;let d,m;if(i)d=o,m="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,c,u,h),e.update(u,r,h)}this.setMode=a,this.render=s,this.renderInstances=l}function zp(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let s=e.precision!==void 0?e.precision:"highp";const l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=o.getParameter(34930),d=o.getParameter(35660),m=o.getParameter(3379),_=o.getParameter(34076),f=o.getParameter(34921),p=o.getParameter(36347),g=o.getParameter(36348),M=o.getParameter(36349),v=d>0,b=a||t.has("OES_texture_float"),y=v&&b,A=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:f,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:b,floatVertexTextures:y,maxSamples:A}}function Np(o){const t=this;let e=null,n=0,i=!1,r=!1;const a=new ri,s=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,m){const _=h.length!==0||d||n!==0||i;return i=d,e=u(h,m,0),n=h.length,_},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,d,m){const _=h.clippingPlanes,f=h.clipIntersection,p=h.clipShadows,g=o.get(h);if(!i||_===null||_.length===0||r&&!p)r?u(null):c();else{const M=r?0:n,v=M*4;let b=g.clippingState||null;l.value=b,b=u(_,d,v,m);for(let y=0;y!==v;++y)b[y]=e[y];g.clippingState=b,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,m,_){const f=h!==null?h.length:0;let p=null;if(f!==0){if(p=l.value,_!==!0||p===null){const g=m+f*4,M=d.matrixWorldInverse;s.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,b=m;v!==f;++v,b+=4)a.copy(h[v]).applyMatrix4(M,s),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=f,t.numIntersection=0,p}}function Up(o){let t=new WeakMap;function e(a,s){return s===Ca?a.mapping=ji:s===La&&(a.mapping=Zi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===Ca||s===La)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Zh(l.height/2);return c.fromEquirectangularTexture(o,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const l=t.get(s);l!==void 0&&(t.delete(s),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class kp extends bc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,s=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Bi=4,gl=[.125,.215,.35,.446,.526,.582],oi=20,fa=new kp,_l=new Gt;let pa=null;const si=(1+Math.sqrt(5))/2,Ni=1/si,xl=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,si,Ni),new z(0,si,-Ni),new z(Ni,0,si),new z(-Ni,0,si),new z(si,Ni,0),new z(-si,Ni,0)];class vl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){pa=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pa),t.scissorTest=!1,us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ji||t.mapping===Zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pa=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:Cr,format:on,encoding:vi,depthBuffer:!1},i=yl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bp(r)),this._blurMaterial=Vp(r,t,e)}return i}_compileMaterial(t){const e=new Ln(this._lodPlanes[0],t);this._renderer.compile(e,fa)}_sceneToCubeUV(t,e,n,i){const s=new Ye(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(_l),u.toneMapping=Pn,u.autoClear=!1;const m=new xc({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),_=new Ln(new Gr,m);let f=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,f=!0):(m.color.copy(_l),f=!0);for(let g=0;g<6;g++){const M=g%3;M===0?(s.up.set(0,l[g],0),s.lookAt(c[g],0,0)):M===1?(s.up.set(0,0,l[g]),s.lookAt(0,c[g],0)):(s.up.set(0,l[g],0),s.lookAt(0,0,c[g]));const v=this._cubeSize;us(i,M*v,g>2?v:0,v,v),u.setRenderTarget(i),f&&u.render(_,s),u.render(t,s)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ji||t.mapping===Zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ml());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Ln(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=t;const l=this._cubeSize;us(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,fa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=xl[(i-1)%xl.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,s){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ln(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*oi-1),f=r/_,p=isFinite(r)?1+Math.floor(u*f):oi;p>oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${oi}`);const g=[];let M=0;for(let C=0;C<oi;++C){const x=C/f,T=Math.exp(-x*x/2);g.push(T),C===0?M+=T:C<p&&(M+=2*T)}for(let C=0;C<g.length;C++)g[C]=g[C]/M;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=a==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-n;const b=this._sizeLods[i],y=3*b*(i>v-Bi?i-v+Bi:0),A=4*(this._cubeSize-b);us(e,y,A,3*b,2*b),l.setRenderTarget(e),l.render(h,fa)}}function Bp(o){const t=[],e=[],n=[];let i=o;const r=o-Bi+1+gl.length;for(let a=0;a<r;a++){const s=Math.pow(2,i);e.push(s);let l=1/s;a>o-Bi?l=gl[a-o+Bi-1]:a===0&&(l=0),n.push(l);const c=1/(s-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,f=3,p=2,g=1,M=new Float32Array(f*_*m),v=new Float32Array(p*_*m),b=new Float32Array(g*_*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,x=A>2?0:-1,T=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];M.set(T,f*_*A),v.set(d,p*_*A);const D=[A,A,A,A,A,A];b.set(D,g*_*A)}const y=new bi;y.setAttribute("position",new dn(M,f)),y.setAttribute("uv",new dn(v,p)),y.setAttribute("faceIndex",new dn(b,g)),t.push(y),i>Bi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yl(o,t,e){const n=new yi(o,t,e);return n.texture.mapping=Cs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function us(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function Vp(o,t,e){const n=new Float32Array(oi),i=new z(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Ml(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:io(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function bl(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function io(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gp(o){let t=new WeakMap,e=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===Ca||l===La,u=l===ji||l===Zi;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=t.get(s);return e===null&&(e=new vl(o)),h=c?e.fromEquirectangular(s,h):e.fromCubemap(s,h),t.set(s,h),h.texture}else{if(t.has(s))return t.get(s).texture;{const h=s.image;if(c&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new vl(o));const d=c?e.fromEquirectangular(s):e.fromCubemap(s);return t.set(s,d),s.addEventListener("dispose",r),d.texture}else return null}}}return s}function i(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function r(s){const l=s.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Hp(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Wp(o,t,e,n){const i={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete i[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function s(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)t.update(d[_],34962);const m=h.morphAttributes;for(const _ in m){const f=m[_];for(let p=0,g=f.length;p<g;p++)t.update(f[p],34962)}}function c(h){const d=[],m=h.index,_=h.attributes.position;let f=0;if(m!==null){const M=m.array;f=m.version;for(let v=0,b=M.length;v<b;v+=3){const y=M[v+0],A=M[v+1],C=M[v+2];d.push(y,A,A,C,C,y)}}else{const M=_.array;f=_.version;for(let v=0,b=M.length/3-1;v<b;v+=3){const y=v+0,A=v+1,C=v+2;d.push(y,A,A,C,C,y)}}const p=new(dc(d)?yc:vc)(d,1);p.version=f;const g=r.get(h);g&&t.remove(g),r.set(h,p)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:s,update:l,getWireframeAttribute:u}}function Xp(o,t,e,n){const i=n.isWebGL2;let r;function a(d){r=d}let s,l;function c(d){s=d.type,l=d.bytesPerElement}function u(d,m){o.drawElements(r,m,s,d*l),e.update(m,r,1)}function h(d,m,_){if(_===0)return;let f,p;if(i)f=o,p="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,m,s,d*l,_),e.update(m,r,_)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function qp(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,s){switch(e.calls++,a){case 4:e.triangles+=s*(r/3);break;case 1:e.lines+=s*(r/2);break;case 3:e.lines+=s*(r-1);break;case 2:e.lines+=s*r;break;case 0:e.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function $p(o,t){return o[0]-t[0]}function Yp(o,t){return Math.abs(t[1])-Math.abs(o[1])}function jp(o,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new le,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,h,d){const m=c.morphTargetInfluences;if(t.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=f!==void 0?f.length:0;let g=r.get(u);if(g===void 0||g.count!==p){let Y=function(){P.dispose(),r.delete(u),u.removeEventListener("dispose",Y)};var _=Y;g!==void 0&&g.texture.dispose();const b=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let D=0;b===!0&&(D=1),y===!0&&(D=2),A===!0&&(D=3);let O=u.attributes.position.count*D,j=1;O>t.maxTextureSize&&(j=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const R=new Float32Array(O*j*4*p),P=new gc(R,O,j,p);P.type=ci,P.needsUpdate=!0;const N=D*4;for(let $=0;$<p;$++){const k=C[$],tt=x[$],Z=T[$],U=O*j*4*$;for(let B=0;B<k.count;B++){const K=B*N;b===!0&&(a.fromBufferAttribute(k,B),R[U+K+0]=a.x,R[U+K+1]=a.y,R[U+K+2]=a.z,R[U+K+3]=0),y===!0&&(a.fromBufferAttribute(tt,B),R[U+K+4]=a.x,R[U+K+5]=a.y,R[U+K+6]=a.z,R[U+K+7]=0),A===!0&&(a.fromBufferAttribute(Z,B),R[U+K+8]=a.x,R[U+K+9]=a.y,R[U+K+10]=a.z,R[U+K+11]=Z.itemSize===4?a.w:1)}}g={count:p,texture:P,size:new Rt(O,j)},r.set(u,g),u.addEventListener("dispose",Y)}let M=0;for(let b=0;b<m.length;b++)M+=m[b];const v=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(o,"morphTargetBaseInfluence",v),d.getUniforms().setValue(o,"morphTargetInfluences",m),d.getUniforms().setValue(o,"morphTargetsTexture",g.texture,e),d.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}else{const f=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==f){p=[];for(let y=0;y<f;y++)p[y]=[y,0];n[u.id]=p}for(let y=0;y<f;y++){const A=p[y];A[0]=y,A[1]=m[y]}p.sort(Yp);for(let y=0;y<8;y++)y<f&&p[y][1]?(s[y][0]=p[y][0],s[y][1]=p[y][1]):(s[y][0]=Number.MAX_SAFE_INTEGER,s[y][1]=0);s.sort($p);const g=u.morphAttributes.position,M=u.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const A=s[y],C=A[0],x=A[1];C!==Number.MAX_SAFE_INTEGER&&x?(g&&u.getAttribute("morphTarget"+y)!==g[C]&&u.setAttribute("morphTarget"+y,g[C]),M&&u.getAttribute("morphNormal"+y)!==M[C]&&u.setAttribute("morphNormal"+y,M[C]),i[y]=x,v+=x):(g&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),M&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const b=u.morphTargetsRelative?1:1-v;d.getUniforms().setValue(o,"morphTargetBaseInfluence",b),d.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function Zp(o,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);return i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Ec=new Te,Ac=new gc,Cc=new Fh,Lc=new Sc,Sl=[],wl=[],Tl=new Float32Array(16),El=new Float32Array(9),Al=new Float32Array(4);function cr(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let r=Sl[i];if(r===void 0&&(r=new Float32Array(i),Sl[i]=r),t!==0){n.toArray(r,0);for(let a=1,s=0;a!==t;++a)s+=e,o[a].toArray(r,s)}return r}function te(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function ee(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function Ps(o,t){let e=wl[t];e===void 0&&(e=new Int32Array(t),wl[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function Kp(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function Jp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(te(e,t))return;o.uniform2fv(this.addr,t),ee(e,t)}}function Qp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(te(e,t))return;o.uniform3fv(this.addr,t),ee(e,t)}}function tm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(te(e,t))return;o.uniform4fv(this.addr,t),ee(e,t)}}function em(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(te(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),ee(e,t)}else{if(te(e,n))return;Al.set(n),o.uniformMatrix2fv(this.addr,!1,Al),ee(e,n)}}function nm(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(te(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),ee(e,t)}else{if(te(e,n))return;El.set(n),o.uniformMatrix3fv(this.addr,!1,El),ee(e,n)}}function im(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(te(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),ee(e,t)}else{if(te(e,n))return;Tl.set(n),o.uniformMatrix4fv(this.addr,!1,Tl),ee(e,n)}}function rm(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function sm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(te(e,t))return;o.uniform2iv(this.addr,t),ee(e,t)}}function am(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(te(e,t))return;o.uniform3iv(this.addr,t),ee(e,t)}}function om(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(te(e,t))return;o.uniform4iv(this.addr,t),ee(e,t)}}function lm(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function cm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(te(e,t))return;o.uniform2uiv(this.addr,t),ee(e,t)}}function um(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(te(e,t))return;o.uniform3uiv(this.addr,t),ee(e,t)}}function hm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(te(e,t))return;o.uniform4uiv(this.addr,t),ee(e,t)}}function dm(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Ec,i)}function fm(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Cc,i)}function pm(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Lc,i)}function mm(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ac,i)}function gm(o){switch(o){case 5126:return Kp;case 35664:return Jp;case 35665:return Qp;case 35666:return tm;case 35674:return em;case 35675:return nm;case 35676:return im;case 5124:case 35670:return rm;case 35667:case 35671:return sm;case 35668:case 35672:return am;case 35669:case 35673:return om;case 5125:return lm;case 36294:return cm;case 36295:return um;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return dm;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return pm;case 36289:case 36303:case 36311:case 36292:return mm}}function _m(o,t){o.uniform1fv(this.addr,t)}function xm(o,t){const e=cr(t,this.size,2);o.uniform2fv(this.addr,e)}function vm(o,t){const e=cr(t,this.size,3);o.uniform3fv(this.addr,e)}function ym(o,t){const e=cr(t,this.size,4);o.uniform4fv(this.addr,e)}function Mm(o,t){const e=cr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function bm(o,t){const e=cr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function Sm(o,t){const e=cr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function wm(o,t){o.uniform1iv(this.addr,t)}function Tm(o,t){o.uniform2iv(this.addr,t)}function Em(o,t){o.uniform3iv(this.addr,t)}function Am(o,t){o.uniform4iv(this.addr,t)}function Cm(o,t){o.uniform1uiv(this.addr,t)}function Lm(o,t){o.uniform2uiv(this.addr,t)}function Dm(o,t){o.uniform3uiv(this.addr,t)}function Pm(o,t){o.uniform4uiv(this.addr,t)}function Rm(o,t,e){const n=this.cache,i=t.length,r=Ps(e,i);te(n,r)||(o.uniform1iv(this.addr,r),ee(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Ec,r[a])}function Im(o,t,e){const n=this.cache,i=t.length,r=Ps(e,i);te(n,r)||(o.uniform1iv(this.addr,r),ee(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Cc,r[a])}function Fm(o,t,e){const n=this.cache,i=t.length,r=Ps(e,i);te(n,r)||(o.uniform1iv(this.addr,r),ee(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Lc,r[a])}function Om(o,t,e){const n=this.cache,i=t.length,r=Ps(e,i);te(n,r)||(o.uniform1iv(this.addr,r),ee(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Ac,r[a])}function zm(o){switch(o){case 5126:return _m;case 35664:return xm;case 35665:return vm;case 35666:return ym;case 35674:return Mm;case 35675:return bm;case 35676:return Sm;case 5124:case 35670:return wm;case 35667:case 35671:return Tm;case 35668:case 35672:return Em;case 35669:case 35673:return Am;case 5125:return Cm;case 36294:return Lm;case 36295:return Dm;case 36296:return Pm;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35679:case 36299:case 36307:return Im;case 35680:case 36300:case 36308:case 36293:return Fm;case 36289:case 36303:case 36311:case 36292:return Om}}class Nm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=gm(e.type)}}class Um{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=zm(e.type)}}class km{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const s=i[r];s.setValue(t,e[s.id],n)}}}const ma=/(\w+)(\])?(\[|\.)?/g;function Cl(o,t){o.seq.push(t),o.map[t.id]=t}function Bm(o,t,e){const n=o.name,i=n.length;for(ma.lastIndex=0;;){const r=ma.exec(n),a=ma.lastIndex;let s=r[1];const l=r[2]==="]",c=r[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===i){Cl(e,c===void 0?new Nm(s,o,t):new Um(s,o,t));break}else{let h=e.map[s];h===void 0&&(h=new km(s),Cl(e,h)),e=h}}}class ps{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Bm(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const s=e[r],l=n[s.id];l.needsUpdate!==!1&&s.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Ll(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}let Vm=0;function Gm(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const s=a+1;n.push(`${s===t?">":" "} ${s}: ${e[a]}`)}return n.join(`
`)}function Hm(o){switch(o){case vi:return["Linear","( value )"];case Ut:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Dl(o,t,e){const n=o.getShaderParameter(t,35713),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Gm(o.getShaderSource(t),a)}else return i}function Wm(o,t){const e=Hm(t);return"vec4 "+o+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Xm(o,t){let e;switch(t){case ah:e="Linear";break;case oh:e="Reinhard";break;case lh:e="OptimizedCineon";break;case ch:e="ACESFilmic";break;case uh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function qm(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mr).join(`
`)}function $m(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ym(o,t){const e={},n=o.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(t,i),a=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),e[a]={type:r.type,location:o.getAttribLocation(t,a),locationSize:s}}return e}function Mr(o){return o!==""}function Pl(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rl(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fa(o){return o.replace(jm,Zm)}function Zm(o,t){const e=Mt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Fa(e)}const Km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Il(o){return o.replace(Km,Jm)}function Jm(o,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Fl(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Qm(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===ac?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Uu?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===yr&&(t="SHADOWMAP_TYPE_VSM"),t}function tg(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ji:case Zi:t="ENVMAP_TYPE_CUBE";break;case Cs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function eg(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Zi:t="ENVMAP_MODE_REFRACTION";break}return t}function ng(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case cc:t="ENVMAP_BLENDING_MULTIPLY";break;case rh:t="ENVMAP_BLENDING_MIX";break;case sh:t="ENVMAP_BLENDING_ADD";break}return t}function ig(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function rg(o,t,e,n){const i=o.getContext(),r=e.defines;let a=e.vertexShader,s=e.fragmentShader;const l=Qm(e),c=tg(e),u=eg(e),h=ng(e),d=ig(e),m=e.isWebGL2?"":qm(e),_=$m(r),f=i.createProgram();let p,g,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[_].filter(Mr).join(`
`),p.length>0&&(p+=`
`),g=[m,_].filter(Mr).join(`
`),g.length>0&&(g+=`
`)):(p=[Fl(e),"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),g=[m,Fl(e),"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?Mt.tonemapping_pars_fragment:"",e.toneMapping!==Pn?Xm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Mt.encodings_pars_fragment,Wm("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mr).join(`
`)),a=Fa(a),a=Pl(a,e),a=Rl(a,e),s=Fa(s),s=Pl(s,e),s=Rl(s,e),a=Il(a),s=Il(s),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=M+p+a,b=M+g+s,y=Ll(i,35633,v),A=Ll(i,35632,b);if(i.attachShader(f,y),i.attachShader(f,A),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),o.debug.checkShaderErrors){const T=i.getProgramInfoLog(f).trim(),D=i.getShaderInfoLog(y).trim(),O=i.getShaderInfoLog(A).trim();let j=!0,R=!0;if(i.getProgramParameter(f,35714)===!1){j=!1;const P=Dl(i,y,"vertex"),N=Dl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+T+`
`+P+`
`+N)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(D===""||O==="")&&(R=!1);R&&(this.diagnostics={runnable:j,programLog:T,vertexShader:{log:D,prefix:p},fragmentShader:{log:O,prefix:g}})}i.deleteShader(y),i.deleteShader(A);let C;this.getUniforms=function(){return C===void 0&&(C=new ps(i,f)),C};let x;return this.getAttributes=function(){return x===void 0&&(x=Ym(i,f)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=e.shaderName,this.id=Vm++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=y,this.fragmentShader=A,this}let sg=0;class ag{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new og(t),e.set(t,n)),n}}class og{constructor(t){this.id=sg++,this.code=t,this.usedTimes=0}}function lg(o,t,e,n,i,r,a){const s=new no,l=new ag,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x,T,D,O,j){const R=O.fog,P=j.geometry,N=x.isMeshStandardMaterial?O.environment:null,Y=(x.isMeshStandardMaterial?e:t).get(x.envMap||N),$=Y&&Y.mapping===Cs?Y.image.height:null,k=_[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const tt=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Z=tt!==void 0?tt.length:0;let U=0;P.morphAttributes.position!==void 0&&(U=1),P.morphAttributes.normal!==void 0&&(U=2),P.morphAttributes.color!==void 0&&(U=3);let B,K,J,it;if(k){const Ft=un[k];B=Ft.vertexShader,K=Ft.fragmentShader}else B=x.vertexShader,K=x.fragmentShader,l.update(x),J=l.getVertexShaderID(x),it=l.getFragmentShaderID(x);const X=o.getRenderTarget(),Lt=x.alphaTest>0,ct=x.clearcoat>0,xt=x.iridescence>0;return{isWebGL2:u,shaderID:k,shaderName:x.type,vertexShader:B,fragmentShader:K,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:it,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:j.isInstancedMesh===!0,instancingColor:j.isInstancedMesh===!0&&j.instanceColor!==null,supportsVertexTextures:d,outputEncoding:X===null?o.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:vi,map:!!x.map,matcap:!!x.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:$,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Dh,tangentSpaceNormalMap:x.normalMapType===Lh,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Ut,clearcoat:ct,clearcoatMap:ct&&!!x.clearcoatMap,clearcoatRoughnessMap:ct&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:ct&&!!x.clearcoatNormalMap,iridescence:xt,iridescenceMap:xt&&!!x.iridescenceMap,iridescenceThicknessMap:xt&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Wi,alphaMap:!!x.alphaMap,alphaTest:Lt,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!P.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!R,useFog:x.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:j.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:U,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&D.length>0,shadowMapType:o.shadowMap.type,toneMapping:x.toneMapped?o.toneMapping:Pn,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===As,flipSided:x.side===Je,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)T.push(D),T.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(g(T,x),M(T,x),T.push(o.outputEncoding)),T.push(x.customProgramCacheKey),T.join()}function g(x,T){x.push(T.precision),x.push(T.outputEncoding),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.combine),x.push(T.vertexUvs),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){s.disableAll(),T.isWebGL2&&s.enable(0),T.supportsVertexTextures&&s.enable(1),T.instancing&&s.enable(2),T.instancingColor&&s.enable(3),T.map&&s.enable(4),T.matcap&&s.enable(5),T.envMap&&s.enable(6),T.lightMap&&s.enable(7),T.aoMap&&s.enable(8),T.emissiveMap&&s.enable(9),T.bumpMap&&s.enable(10),T.normalMap&&s.enable(11),T.objectSpaceNormalMap&&s.enable(12),T.tangentSpaceNormalMap&&s.enable(13),T.clearcoat&&s.enable(14),T.clearcoatMap&&s.enable(15),T.clearcoatRoughnessMap&&s.enable(16),T.clearcoatNormalMap&&s.enable(17),T.iridescence&&s.enable(18),T.iridescenceMap&&s.enable(19),T.iridescenceThicknessMap&&s.enable(20),T.displacementMap&&s.enable(21),T.specularMap&&s.enable(22),T.roughnessMap&&s.enable(23),T.metalnessMap&&s.enable(24),T.gradientMap&&s.enable(25),T.alphaMap&&s.enable(26),T.alphaTest&&s.enable(27),T.vertexColors&&s.enable(28),T.vertexAlphas&&s.enable(29),T.vertexUvs&&s.enable(30),T.vertexTangents&&s.enable(31),T.uvsVertexOnly&&s.enable(32),x.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.skinning&&s.enable(4),T.morphTargets&&s.enable(5),T.morphNormals&&s.enable(6),T.morphColors&&s.enable(7),T.premultipliedAlpha&&s.enable(8),T.shadowMapEnabled&&s.enable(9),T.physicallyCorrectLights&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.specularIntensityMap&&s.enable(15),T.specularColorMap&&s.enable(16),T.transmission&&s.enable(17),T.transmissionMap&&s.enable(18),T.thicknessMap&&s.enable(19),T.sheen&&s.enable(20),T.sheenColorMap&&s.enable(21),T.sheenRoughnessMap&&s.enable(22),T.decodeVideoTexture&&s.enable(23),T.opaque&&s.enable(24),x.push(s.mask)}function v(x){const T=_[x.type];let D;if(T){const O=un[T];D=qh.clone(O.uniforms)}else D=x.uniforms;return D}function b(x,T){let D;for(let O=0,j=c.length;O<j;O++){const R=c[O];if(R.cacheKey===T){D=R,++D.usedTimes;break}}return D===void 0&&(D=new rg(o,T,x,r),c.push(D)),D}function y(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),x.destroy()}}function A(x){l.remove(x)}function C(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:y,releaseShaderCache:A,programs:c,dispose:C}}function cg(){let o=new WeakMap;function t(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function e(r){o.delete(r)}function n(r,a,s){o.get(r)[a]=s}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function ug(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Ol(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function zl(){const o=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(h,d,m,_,f,p){let g=o[t];return g===void 0?(g={id:h.id,object:h,geometry:d,material:m,groupOrder:_,renderOrder:h.renderOrder,z:f,group:p},o[t]=g):(g.id=h.id,g.object=h,g.geometry=d,g.material=m,g.groupOrder=_,g.renderOrder=h.renderOrder,g.z=f,g.group=p),t++,g}function s(h,d,m,_,f,p){const g=a(h,d,m,_,f,p);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):e.push(g)}function l(h,d,m,_,f,p){const g=a(h,d,m,_,f,p);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):e.unshift(g)}function c(h,d){e.length>1&&e.sort(h||ug),n.length>1&&n.sort(d||Ol),i.length>1&&i.sort(d||Ol)}function u(){for(let h=t,d=o.length;h<d;h++){const m=o[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:s,unshift:l,finish:u,sort:c}}function hg(){let o=new WeakMap;function t(n,i){const r=o.get(n);let a;return r===void 0?(a=new zl,o.set(n,[a])):i>=r.length?(a=new zl,r.push(a)):a=r[i],a}function e(){o=new WeakMap}return{get:t,dispose:e}}function dg(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Gt};break;case"SpotLight":e={position:new z,direction:new z,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new z,halfWidth:new z,halfHeight:new z};break}return o[t.id]=e,e}}}function fg(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let pg=0;function mg(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function gg(o,t){const e=new dg,n=fg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new z);const r=new z,a=new ce,s=new ce;function l(u,h){let d=0,m=0,_=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let f=0,p=0,g=0,M=0,v=0,b=0,y=0,A=0,C=0,x=0;u.sort(mg);const T=h!==!0?Math.PI:1;for(let O=0,j=u.length;O<j;O++){const R=u[O],P=R.color,N=R.intensity,Y=R.distance,$=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=P.r*N*T,m+=P.g*N*T,_+=P.b*N*T;else if(R.isLightProbe)for(let k=0;k<9;k++)i.probe[k].addScaledVector(R.sh.coefficients[k],N);else if(R.isDirectionalLight){const k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity*T),R.castShadow){const tt=R.shadow,Z=n.get(R);Z.shadowBias=tt.bias,Z.shadowNormalBias=tt.normalBias,Z.shadowRadius=tt.radius,Z.shadowMapSize=tt.mapSize,i.directionalShadow[f]=Z,i.directionalShadowMap[f]=$,i.directionalShadowMatrix[f]=R.shadow.matrix,b++}i.directional[f]=k,f++}else if(R.isSpotLight){const k=e.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(P).multiplyScalar(N*T),k.distance=Y,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,i.spot[g]=k;const tt=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,tt.updateMatrices(R),R.castShadow&&x++),i.spotLightMatrix[g]=tt.matrix,R.castShadow){const Z=n.get(R);Z.shadowBias=tt.bias,Z.shadowNormalBias=tt.normalBias,Z.shadowRadius=tt.radius,Z.shadowMapSize=tt.mapSize,i.spotShadow[g]=Z,i.spotShadowMap[g]=$,A++}g++}else if(R.isRectAreaLight){const k=e.get(R);k.color.copy(P).multiplyScalar(N),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),i.rectArea[M]=k,M++}else if(R.isPointLight){const k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity*T),k.distance=R.distance,k.decay=R.decay,R.castShadow){const tt=R.shadow,Z=n.get(R);Z.shadowBias=tt.bias,Z.shadowNormalBias=tt.normalBias,Z.shadowRadius=tt.radius,Z.shadowMapSize=tt.mapSize,Z.shadowCameraNear=tt.camera.near,Z.shadowCameraFar=tt.camera.far,i.pointShadow[p]=Z,i.pointShadowMap[p]=$,i.pointShadowMatrix[p]=R.shadow.matrix,y++}i.point[p]=k,p++}else if(R.isHemisphereLight){const k=e.get(R);k.skyColor.copy(R.color).multiplyScalar(N*T),k.groundColor.copy(R.groundColor).multiplyScalar(N*T),i.hemi[v]=k,v++}}M>0&&(t.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=_;const D=i.hash;(D.directionalLength!==f||D.pointLength!==p||D.spotLength!==g||D.rectAreaLength!==M||D.hemiLength!==v||D.numDirectionalShadows!==b||D.numPointShadows!==y||D.numSpotShadows!==A||D.numSpotMaps!==C)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=M,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=A+C-x,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=x,D.directionalLength=f,D.pointLength=p,D.spotLength=g,D.rectAreaLength=M,D.hemiLength=v,D.numDirectionalShadows=b,D.numPointShadows=y,D.numSpotShadows=A,D.numSpotMaps=C,i.version=pg++)}function c(u,h){let d=0,m=0,_=0,f=0,p=0;const g=h.matrixWorldInverse;for(let M=0,v=u.length;M<v;M++){const b=u[M];if(b.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),d++}else if(b.isSpotLight){const y=i.spot[_];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),_++}else if(b.isRectAreaLight){const y=i.rectArea[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),s.identity(),a.copy(b.matrixWorld),a.premultiply(g),s.extractRotation(a),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),f++}else if(b.isPointLight){const y=i.point[m];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),m++}else if(b.isHemisphereLight){const y=i.hemi[p];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(g),p++}}}return{setup:l,setupView:c,state:i}}function Nl(o,t){const e=new gg(o,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function s(h){i.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:s}}function _g(o,t){let e=new WeakMap;function n(r,a=0){const s=e.get(r);let l;return s===void 0?(l=new Nl(o,t),e.set(r,[l])):a>=s.length?(l=new Nl(o,t),s.push(l)):l=s[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class xg extends Ls{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class vg extends Ls{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bg(o,t,e){let n=new wc;const i=new Rt,r=new Rt,a=new le,s=new xg({depthPacking:Ch}),l=new vg,c={},u=e.maxTextureSize,h={0:Je,1:_i,2:As},d=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:yg,fragmentShader:Mg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new bi;_.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new Ln(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac,this.render=function(b,y,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const C=o.getRenderTarget(),x=o.getActiveCubeFace(),T=o.getActiveMipmapLevel(),D=o.state;D.setBlending(Gn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let O=0,j=b.length;O<j;O++){const R=b[O],P=R.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const N=P.getFrameExtents();if(i.multiply(N),r.copy(P.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/N.x),i.x=r.x*N.x,P.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/N.y),i.y=r.y*N.y,P.mapSize.y=r.y)),P.map===null){const $=this.type!==yr?{minFilter:be,magFilter:be}:{};P.map=new yi(i.x,i.y,$),P.map.texture.name=R.name+".shadowMap",P.camera.updateProjectionMatrix()}o.setRenderTarget(P.map),o.clear();const Y=P.getViewportCount();for(let $=0;$<Y;$++){const k=P.getViewport($);a.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),D.viewport(a),P.updateMatrices(R,$),n=P.getFrustum(),v(y,A,P.camera,R,this.type)}P.isPointLightShadow!==!0&&this.type===yr&&g(P,A),P.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(C,x,T)};function g(b,y){const A=t.update(f);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new yi(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,o.setRenderTarget(b.mapPass),o.clear(),o.renderBufferDirect(y,null,A,d,f,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,o.setRenderTarget(b.map),o.clear(),o.renderBufferDirect(y,null,A,m,f,null)}function M(b,y,A,C,x,T){let D=null;const O=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(O!==void 0)D=O;else if(D=A.isPointLight===!0?l:s,o.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const j=D.uuid,R=y.uuid;let P=c[j];P===void 0&&(P={},c[j]=P);let N=P[R];N===void 0&&(N=D.clone(),P[R]=N),D=N}return D.visible=y.visible,D.wireframe=y.wireframe,T===yr?D.side=y.shadowSide!==null?y.shadowSide:y.side:D.side=y.shadowSide!==null?y.shadowSide:h[y.side],D.alphaMap=y.alphaMap,D.alphaTest=y.alphaTest,D.map=y.map,D.clipShadows=y.clipShadows,D.clippingPlanes=y.clippingPlanes,D.clipIntersection=y.clipIntersection,D.displacementMap=y.displacementMap,D.displacementScale=y.displacementScale,D.displacementBias=y.displacementBias,D.wireframeLinewidth=y.wireframeLinewidth,D.linewidth=y.linewidth,A.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(A.matrixWorld),D.nearDistance=C,D.farDistance=x),D}function v(b,y,A,C,x){if(b.visible===!1)return;if(b.layers.test(y.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===yr)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const O=t.update(b),j=b.material;if(Array.isArray(j)){const R=O.groups;for(let P=0,N=R.length;P<N;P++){const Y=R[P],$=j[Y.materialIndex];if($&&$.visible){const k=M(b,$,C,A.near,A.far,x);o.renderBufferDirect(A,null,O,k,b,Y)}}}else if(j.visible){const R=M(b,j,C,A.near,A.far,x);o.renderBufferDirect(A,null,O,R,b,null)}}const D=b.children;for(let O=0,j=D.length;O<j;O++)v(D[O],y,A,C,x)}}function Sg(o,t,e){const n=e.isWebGL2;function i(){let L=!1;const V=new le;let Q=null;const ot=new le(0,0,0,0);return{setMask:function(ht){Q!==ht&&!L&&(o.colorMask(ht,ht,ht,ht),Q=ht)},setLocked:function(ht){L=ht},setClear:function(ht,It,ie,ue,jn){jn===!0&&(ht*=ue,It*=ue,ie*=ue),V.set(ht,It,ie,ue),ot.equals(V)===!1&&(o.clearColor(ht,It,ie,ue),ot.copy(V))},reset:function(){L=!1,Q=null,ot.set(-1,0,0,0)}}}function r(){let L=!1,V=null,Q=null,ot=null;return{setTest:function(ht){ht?Lt(2929):ct(2929)},setMask:function(ht){V!==ht&&!L&&(o.depthMask(ht),V=ht)},setFunc:function(ht){if(Q!==ht){switch(ht){case Ku:o.depthFunc(512);break;case Ju:o.depthFunc(519);break;case Qu:o.depthFunc(513);break;case Aa:o.depthFunc(515);break;case th:o.depthFunc(514);break;case eh:o.depthFunc(518);break;case nh:o.depthFunc(516);break;case ih:o.depthFunc(517);break;default:o.depthFunc(515)}Q=ht}},setLocked:function(ht){L=ht},setClear:function(ht){ot!==ht&&(o.clearDepth(ht),ot=ht)},reset:function(){L=!1,V=null,Q=null,ot=null}}}function a(){let L=!1,V=null,Q=null,ot=null,ht=null,It=null,ie=null,ue=null,jn=null;return{setTest:function(Bt){L||(Bt?Lt(2960):ct(2960))},setMask:function(Bt){V!==Bt&&!L&&(o.stencilMask(Bt),V=Bt)},setFunc:function(Bt,_n,He){(Q!==Bt||ot!==_n||ht!==He)&&(o.stencilFunc(Bt,_n,He),Q=Bt,ot=_n,ht=He)},setOp:function(Bt,_n,He){(It!==Bt||ie!==_n||ue!==He)&&(o.stencilOp(Bt,_n,He),It=Bt,ie=_n,ue=He)},setLocked:function(Bt){L=Bt},setClear:function(Bt){jn!==Bt&&(o.clearStencil(Bt),jn=Bt)},reset:function(){L=!1,V=null,Q=null,ot=null,ht=null,It=null,ie=null,ue=null,jn=null}}}const s=new i,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let d={},m={},_=new WeakMap,f=[],p=null,g=!1,M=null,v=null,b=null,y=null,A=null,C=null,x=null,T=!1,D=null,O=null,j=null,R=null,P=null;const N=o.getParameter(35661);let Y=!1,$=0;const k=o.getParameter(7938);k.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(k)[1]),Y=$>=1):k.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),Y=$>=2);let tt=null,Z={};const U=o.getParameter(3088),B=o.getParameter(2978),K=new le().fromArray(U),J=new le().fromArray(B);function it(L,V,Q){const ot=new Uint8Array(4),ht=o.createTexture();o.bindTexture(L,ht),o.texParameteri(L,10241,9728),o.texParameteri(L,10240,9728);for(let It=0;It<Q;It++)o.texImage2D(V+It,0,6408,1,1,0,6408,5121,ot);return ht}const X={};X[3553]=it(3553,3553,1),X[34067]=it(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Lt(2929),l.setFunc(Aa),xe(!1),Ge(Co),Lt(2884),ge(Gn);function Lt(L){d[L]!==!0&&(o.enable(L),d[L]=!0)}function ct(L){d[L]!==!1&&(o.disable(L),d[L]=!1)}function xt(L,V){return m[L]!==V?(o.bindFramebuffer(L,V),m[L]=V,n&&(L===36009&&(m[36160]=V),L===36160&&(m[36009]=V)),!0):!1}function lt(L,V){let Q=f,ot=!1;if(L)if(Q=_.get(V),Q===void 0&&(Q=[],_.set(V,Q)),L.isWebGLMultipleRenderTargets){const ht=L.texture;if(Q.length!==ht.length||Q[0]!==36064){for(let It=0,ie=ht.length;It<ie;It++)Q[It]=36064+It;Q.length=ht.length,ot=!0}}else Q[0]!==36064&&(Q[0]=36064,ot=!0);else Q[0]!==1029&&(Q[0]=1029,ot=!0);ot&&(e.isWebGL2?o.drawBuffers(Q):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Ft(L){return p!==L?(o.useProgram(L),p=L,!0):!1}const bt={[ki]:32774,[Bu]:32778,[Vu]:32779};if(n)bt[Ro]=32775,bt[Io]=32776;else{const L=t.get("EXT_blend_minmax");L!==null&&(bt[Ro]=L.MIN_EXT,bt[Io]=L.MAX_EXT)}const _t={[Gu]:0,[Hu]:1,[Wu]:768,[oc]:770,[Zu]:776,[Yu]:774,[qu]:772,[Xu]:769,[lc]:771,[ju]:775,[$u]:773};function ge(L,V,Q,ot,ht,It,ie,ue){if(L===Gn){g===!0&&(ct(3042),g=!1);return}if(g===!1&&(Lt(3042),g=!0),L!==ku){if(L!==M||ue!==T){if((v!==ki||A!==ki)&&(o.blendEquation(32774),v=ki,A=ki),ue)switch(L){case Wi:o.blendFuncSeparate(1,771,1,771);break;case Lo:o.blendFunc(1,1);break;case Do:o.blendFuncSeparate(0,769,0,1);break;case Po:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Wi:o.blendFuncSeparate(770,771,1,771);break;case Lo:o.blendFunc(770,1);break;case Do:o.blendFuncSeparate(0,769,0,1);break;case Po:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,y=null,C=null,x=null,M=L,T=ue}return}ht=ht||V,It=It||Q,ie=ie||ot,(V!==v||ht!==A)&&(o.blendEquationSeparate(bt[V],bt[ht]),v=V,A=ht),(Q!==b||ot!==y||It!==C||ie!==x)&&(o.blendFuncSeparate(_t[Q],_t[ot],_t[It],_t[ie]),b=Q,y=ot,C=It,x=ie),M=L,T=!1}function _e(L,V){L.side===As?ct(2884):Lt(2884);let Q=L.side===Je;V&&(Q=!Q),xe(Q),L.blending===Wi&&L.transparent===!1?ge(Gn):ge(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),s.setMask(L.colorWrite);const ot=L.stencilWrite;c.setTest(ot),ot&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ot(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Lt(32926):ct(32926)}function xe(L){D!==L&&(L?o.frontFace(2304):o.frontFace(2305),D=L)}function Ge(L){L!==zu?(Lt(2884),L!==O&&(L===Co?o.cullFace(1029):L===Nu?o.cullFace(1028):o.cullFace(1032))):ct(2884),O=L}function Zt(L){L!==j&&(Y&&o.lineWidth(L),j=L)}function Ot(L,V,Q){L?(Lt(32823),(R!==V||P!==Q)&&(o.polygonOffset(V,Q),R=V,P=Q)):ct(32823)}function gn(L){L?Lt(3089):ct(3089)}function en(L){L===void 0&&(L=33984+N-1),tt!==L&&(o.activeTexture(L),tt=L)}function E(L,V,Q){Q===void 0&&(tt===null?Q=33984+N-1:Q=tt);let ot=Z[Q];ot===void 0&&(ot={type:void 0,texture:void 0},Z[Q]=ot),(ot.type!==L||ot.texture!==V)&&(tt!==Q&&(o.activeTexture(Q),tt=Q),o.bindTexture(L,V||X[L]),ot.type=L,ot.texture=V)}function S(){const L=Z[tt];L!==void 0&&L.type!==void 0&&(o.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function H(){try{o.compressedTexImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{o.compressedTexImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{o.texSubImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{o.texSubImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{o.texStorage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{o.texStorage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{o.texImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{o.texImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(L){K.equals(L)===!1&&(o.scissor(L.x,L.y,L.z,L.w),K.copy(L))}function dt(L){J.equals(L)===!1&&(o.viewport(L.x,L.y,L.z,L.w),J.copy(L))}function Dt(L,V){let Q=h.get(V);Q===void 0&&(Q=new WeakMap,h.set(V,Q));let ot=Q.get(L);ot===void 0&&(ot=o.getUniformBlockIndex(V,L.name),Q.set(L,ot))}function kt(L,V){const ot=h.get(V).get(L);u.get(V)!==ot&&(o.uniformBlockBinding(V,ot,L.__bindingPointIndex),u.set(V,ot))}function ne(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},tt=null,Z={},m={},_=new WeakMap,f=[],p=null,g=!1,M=null,v=null,b=null,y=null,A=null,C=null,x=null,T=!1,D=null,O=null,j=null,R=null,P=null,K.set(0,0,o.canvas.width,o.canvas.height),J.set(0,0,o.canvas.width,o.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Lt,disable:ct,bindFramebuffer:xt,drawBuffers:lt,useProgram:Ft,setBlending:ge,setMaterial:_e,setFlipSided:xe,setCullFace:Ge,setLineWidth:Zt,setPolygonOffset:Ot,setScissorTest:gn,activeTexture:en,bindTexture:E,unbindTexture:S,compressedTexImage2D:H,compressedTexImage3D:et,texImage2D:gt,texImage3D:ut,updateUBOMapping:Dt,uniformBlockBinding:kt,texStorage2D:q,texStorage3D:pt,texSubImage2D:nt,texSubImage3D:st,compressedTexSubImage2D:vt,compressedTexSubImage3D:at,scissor:mt,viewport:dt,reset:ne}}function wg(o,t,e,n,i,r,a){const s=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(E,S){return g?new OffscreenCanvas(E,S):Dr("canvas")}function v(E,S,H,et){let nt=1;if((E.width>et||E.height>et)&&(nt=et/Math.max(E.width,E.height)),nt<1||S===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const st=S?Ia:Math.floor,vt=st(nt*E.width),at=st(nt*E.height);f===void 0&&(f=M(vt,at));const q=H?M(vt,at):f;return q.width=vt,q.height=at,q.getContext("2d").drawImage(E,0,0,vt,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+vt+"x"+at+")."),q}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function b(E){return sl(E.width)&&sl(E.height)}function y(E){return s?!1:E.wrapS!==an||E.wrapT!==an||E.minFilter!==be&&E.minFilter!==$e}function A(E,S){return E.generateMipmaps&&S&&E.minFilter!==be&&E.minFilter!==$e}function C(E){o.generateMipmap(E)}function x(E,S,H,et,nt=!1){if(s===!1)return S;if(E!==null){if(o[E]!==void 0)return o[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let st=S;return S===6403&&(H===5126&&(st=33326),H===5131&&(st=33325),H===5121&&(st=33321)),S===33319&&(H===5126&&(st=33328),H===5131&&(st=33327),H===5121&&(st=33323)),S===6408&&(H===5126&&(st=34836),H===5131&&(st=34842),H===5121&&(st=et===Ut&&nt===!1?35907:32856),H===32819&&(st=32854),H===32820&&(st=32855)),(st===33325||st===33326||st===33327||st===33328||st===34842||st===34836)&&t.get("EXT_color_buffer_float"),st}function T(E,S,H){return A(E,H)===!0||E.isFramebufferTexture&&E.minFilter!==be&&E.minFilter!==$e?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function D(E){return E===be||E===Fo||E===ks?9728:9729}function O(E){const S=E.target;S.removeEventListener("dispose",O),R(S),S.isVideoTexture&&_.delete(S)}function j(E){const S=E.target;S.removeEventListener("dispose",j),N(S)}function R(E){const S=n.get(E);if(S.__webglInit===void 0)return;const H=E.source,et=p.get(H);if(et){const nt=et[S.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&P(E),Object.keys(et).length===0&&p.delete(H)}n.remove(E)}function P(E){const S=n.get(E);o.deleteTexture(S.__webglTexture);const H=E.source,et=p.get(H);delete et[S.__cacheKey],a.memory.textures--}function N(E){const S=E.texture,H=n.get(E),et=n.get(S);if(et.__webglTexture!==void 0&&(o.deleteTexture(et.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++)o.deleteFramebuffer(H.__webglFramebuffer[nt]),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer[nt]);else{if(o.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&o.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let nt=0;nt<H.__webglColorRenderbuffer.length;nt++)H.__webglColorRenderbuffer[nt]&&o.deleteRenderbuffer(H.__webglColorRenderbuffer[nt]);H.__webglDepthRenderbuffer&&o.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let nt=0,st=S.length;nt<st;nt++){const vt=n.get(S[nt]);vt.__webglTexture&&(o.deleteTexture(vt.__webglTexture),a.memory.textures--),n.remove(S[nt])}n.remove(S),n.remove(E)}let Y=0;function $(){Y=0}function k(){const E=Y;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),Y+=1,E}function tt(E){const S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.encoding),S.join()}function Z(E,S){const H=n.get(E);if(E.isVideoTexture&&gn(E),E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){const et=E.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(H,E,S);return}}e.bindTexture(3553,H.__webglTexture,33984+S)}function U(E,S){const H=n.get(E);if(E.version>0&&H.__version!==E.version){ct(H,E,S);return}e.bindTexture(35866,H.__webglTexture,33984+S)}function B(E,S){const H=n.get(E);if(E.version>0&&H.__version!==E.version){ct(H,E,S);return}e.bindTexture(32879,H.__webglTexture,33984+S)}function K(E,S){const H=n.get(E);if(E.version>0&&H.__version!==E.version){xt(H,E,S);return}e.bindTexture(34067,H.__webglTexture,33984+S)}const J={[Da]:10497,[an]:33071,[Pa]:33648},it={[be]:9728,[Fo]:9984,[ks]:9986,[$e]:9729,[hh]:9985,[Ar]:9987};function X(E,S,H){if(H?(o.texParameteri(E,10242,J[S.wrapS]),o.texParameteri(E,10243,J[S.wrapT]),(E===32879||E===35866)&&o.texParameteri(E,32882,J[S.wrapR]),o.texParameteri(E,10240,it[S.magFilter]),o.texParameteri(E,10241,it[S.minFilter])):(o.texParameteri(E,10242,33071),o.texParameteri(E,10243,33071),(E===32879||E===35866)&&o.texParameteri(E,32882,33071),(S.wrapS!==an||S.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(E,10240,D(S.magFilter)),o.texParameteri(E,10241,D(S.minFilter)),S.minFilter!==be&&S.minFilter!==$e&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===be||S.minFilter!==ks&&S.minFilter!==Ar||S.type===ci&&t.has("OES_texture_float_linear")===!1||s===!1&&S.type===Cr&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(o.texParameterf(E,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Lt(E,S){let H=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",O));const et=S.source;let nt=p.get(et);nt===void 0&&(nt={},p.set(et,nt));const st=tt(S);if(st!==E.__cacheKey){nt[st]===void 0&&(nt[st]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,H=!0),nt[st].usedTimes++;const vt=nt[E.__cacheKey];vt!==void 0&&(nt[E.__cacheKey].usedTimes--,vt.usedTimes===0&&P(S)),E.__cacheKey=st,E.__webglTexture=nt[st].texture}return H}function ct(E,S,H){let et=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(et=35866),S.isData3DTexture&&(et=32879);const nt=Lt(E,S),st=S.source;e.bindTexture(et,E.__webglTexture,33984+H);const vt=n.get(st);if(st.version!==vt.__version||nt===!0){e.activeTexture(33984+H),o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const at=y(S)&&b(S.image)===!1;let q=v(S.image,at,!1,u);q=en(S,q);const pt=b(q)||s,gt=r.convert(S.format,S.encoding);let ut=r.convert(S.type),mt=x(S.internalFormat,gt,ut,S.encoding,S.isVideoTexture);X(et,S,pt);let dt;const Dt=S.mipmaps,kt=s&&S.isVideoTexture!==!0,ne=vt.__version===void 0||nt===!0,L=T(S,q,pt);if(S.isDepthTexture)mt=6402,s?S.type===ci?mt=36012:S.type===li?mt=33190:S.type===Xi?mt=35056:mt=33189:S.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===hi&&mt===6402&&S.type!==hc&&S.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=li,ut=r.convert(S.type)),S.format===Ki&&mt===6402&&(mt=34041,S.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Xi,ut=r.convert(S.type))),ne&&(kt?e.texStorage2D(3553,1,mt,q.width,q.height):e.texImage2D(3553,0,mt,q.width,q.height,0,gt,ut,null));else if(S.isDataTexture)if(Dt.length>0&&pt){kt&&ne&&e.texStorage2D(3553,L,mt,Dt[0].width,Dt[0].height);for(let V=0,Q=Dt.length;V<Q;V++)dt=Dt[V],kt?e.texSubImage2D(3553,V,0,0,dt.width,dt.height,gt,ut,dt.data):e.texImage2D(3553,V,mt,dt.width,dt.height,0,gt,ut,dt.data);S.generateMipmaps=!1}else kt?(ne&&e.texStorage2D(3553,L,mt,q.width,q.height),e.texSubImage2D(3553,0,0,0,q.width,q.height,gt,ut,q.data)):e.texImage2D(3553,0,mt,q.width,q.height,0,gt,ut,q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){kt&&ne&&e.texStorage3D(35866,L,mt,Dt[0].width,Dt[0].height,q.depth);for(let V=0,Q=Dt.length;V<Q;V++)dt=Dt[V],S.format!==on?gt!==null?kt?e.compressedTexSubImage3D(35866,V,0,0,0,dt.width,dt.height,q.depth,gt,dt.data,0,0):e.compressedTexImage3D(35866,V,mt,dt.width,dt.height,q.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?e.texSubImage3D(35866,V,0,0,0,dt.width,dt.height,q.depth,gt,ut,dt.data):e.texImage3D(35866,V,mt,dt.width,dt.height,q.depth,0,gt,ut,dt.data)}else{kt&&ne&&e.texStorage2D(3553,L,mt,Dt[0].width,Dt[0].height);for(let V=0,Q=Dt.length;V<Q;V++)dt=Dt[V],S.format!==on?gt!==null?kt?e.compressedTexSubImage2D(3553,V,0,0,dt.width,dt.height,gt,dt.data):e.compressedTexImage2D(3553,V,mt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?e.texSubImage2D(3553,V,0,0,dt.width,dt.height,gt,ut,dt.data):e.texImage2D(3553,V,mt,dt.width,dt.height,0,gt,ut,dt.data)}else if(S.isDataArrayTexture)kt?(ne&&e.texStorage3D(35866,L,mt,q.width,q.height,q.depth),e.texSubImage3D(35866,0,0,0,0,q.width,q.height,q.depth,gt,ut,q.data)):e.texImage3D(35866,0,mt,q.width,q.height,q.depth,0,gt,ut,q.data);else if(S.isData3DTexture)kt?(ne&&e.texStorage3D(32879,L,mt,q.width,q.height,q.depth),e.texSubImage3D(32879,0,0,0,0,q.width,q.height,q.depth,gt,ut,q.data)):e.texImage3D(32879,0,mt,q.width,q.height,q.depth,0,gt,ut,q.data);else if(S.isFramebufferTexture){if(ne)if(kt)e.texStorage2D(3553,L,mt,q.width,q.height);else{let V=q.width,Q=q.height;for(let ot=0;ot<L;ot++)e.texImage2D(3553,ot,mt,V,Q,0,gt,ut,null),V>>=1,Q>>=1}}else if(Dt.length>0&&pt){kt&&ne&&e.texStorage2D(3553,L,mt,Dt[0].width,Dt[0].height);for(let V=0,Q=Dt.length;V<Q;V++)dt=Dt[V],kt?e.texSubImage2D(3553,V,0,0,gt,ut,dt):e.texImage2D(3553,V,mt,gt,ut,dt);S.generateMipmaps=!1}else kt?(ne&&e.texStorage2D(3553,L,mt,q.width,q.height),e.texSubImage2D(3553,0,0,0,gt,ut,q)):e.texImage2D(3553,0,mt,gt,ut,q);A(S,pt)&&C(et),vt.__version=st.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function xt(E,S,H){if(S.image.length!==6)return;const et=Lt(E,S),nt=S.source;e.bindTexture(34067,E.__webglTexture,33984+H);const st=n.get(nt);if(nt.version!==st.__version||et===!0){e.activeTexture(33984+H),o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const vt=S.isCompressedTexture||S.image[0].isCompressedTexture,at=S.image[0]&&S.image[0].isDataTexture,q=[];for(let V=0;V<6;V++)!vt&&!at?q[V]=v(S.image[V],!1,!0,c):q[V]=at?S.image[V].image:S.image[V],q[V]=en(S,q[V]);const pt=q[0],gt=b(pt)||s,ut=r.convert(S.format,S.encoding),mt=r.convert(S.type),dt=x(S.internalFormat,ut,mt,S.encoding),Dt=s&&S.isVideoTexture!==!0,kt=st.__version===void 0||et===!0;let ne=T(S,pt,gt);X(34067,S,gt);let L;if(vt){Dt&&kt&&e.texStorage2D(34067,ne,dt,pt.width,pt.height);for(let V=0;V<6;V++){L=q[V].mipmaps;for(let Q=0;Q<L.length;Q++){const ot=L[Q];S.format!==on?ut!==null?Dt?e.compressedTexSubImage2D(34069+V,Q,0,0,ot.width,ot.height,ut,ot.data):e.compressedTexImage2D(34069+V,Q,dt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?e.texSubImage2D(34069+V,Q,0,0,ot.width,ot.height,ut,mt,ot.data):e.texImage2D(34069+V,Q,dt,ot.width,ot.height,0,ut,mt,ot.data)}}}else{L=S.mipmaps,Dt&&kt&&(L.length>0&&ne++,e.texStorage2D(34067,ne,dt,q[0].width,q[0].height));for(let V=0;V<6;V++)if(at){Dt?e.texSubImage2D(34069+V,0,0,0,q[V].width,q[V].height,ut,mt,q[V].data):e.texImage2D(34069+V,0,dt,q[V].width,q[V].height,0,ut,mt,q[V].data);for(let Q=0;Q<L.length;Q++){const ht=L[Q].image[V].image;Dt?e.texSubImage2D(34069+V,Q+1,0,0,ht.width,ht.height,ut,mt,ht.data):e.texImage2D(34069+V,Q+1,dt,ht.width,ht.height,0,ut,mt,ht.data)}}else{Dt?e.texSubImage2D(34069+V,0,0,0,ut,mt,q[V]):e.texImage2D(34069+V,0,dt,ut,mt,q[V]);for(let Q=0;Q<L.length;Q++){const ot=L[Q];Dt?e.texSubImage2D(34069+V,Q+1,0,0,ut,mt,ot.image[V]):e.texImage2D(34069+V,Q+1,dt,ut,mt,ot.image[V])}}}A(S,gt)&&C(34067),st.__version=nt.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function lt(E,S,H,et,nt){const st=r.convert(H.format,H.encoding),vt=r.convert(H.type),at=x(H.internalFormat,st,vt,H.encoding);n.get(S).__hasExternalTextures||(nt===32879||nt===35866?e.texImage3D(nt,0,at,S.width,S.height,S.depth,0,st,vt,null):e.texImage2D(nt,0,at,S.width,S.height,0,st,vt,null)),e.bindFramebuffer(36160,E),Ot(S)?d.framebufferTexture2DMultisampleEXT(36160,et,nt,n.get(H).__webglTexture,0,Zt(S)):(nt===3553||nt>=34069&&nt<=34074)&&o.framebufferTexture2D(36160,et,nt,n.get(H).__webglTexture,0),e.bindFramebuffer(36160,null)}function Ft(E,S,H){if(o.bindRenderbuffer(36161,E),S.depthBuffer&&!S.stencilBuffer){let et=33189;if(H||Ot(S)){const nt=S.depthTexture;nt&&nt.isDepthTexture&&(nt.type===ci?et=36012:nt.type===li&&(et=33190));const st=Zt(S);Ot(S)?d.renderbufferStorageMultisampleEXT(36161,st,et,S.width,S.height):o.renderbufferStorageMultisample(36161,st,et,S.width,S.height)}else o.renderbufferStorage(36161,et,S.width,S.height);o.framebufferRenderbuffer(36160,36096,36161,E)}else if(S.depthBuffer&&S.stencilBuffer){const et=Zt(S);H&&Ot(S)===!1?o.renderbufferStorageMultisample(36161,et,35056,S.width,S.height):Ot(S)?d.renderbufferStorageMultisampleEXT(36161,et,35056,S.width,S.height):o.renderbufferStorage(36161,34041,S.width,S.height),o.framebufferRenderbuffer(36160,33306,36161,E)}else{const et=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let nt=0;nt<et.length;nt++){const st=et[nt],vt=r.convert(st.format,st.encoding),at=r.convert(st.type),q=x(st.internalFormat,vt,at,st.encoding),pt=Zt(S);H&&Ot(S)===!1?o.renderbufferStorageMultisample(36161,pt,q,S.width,S.height):Ot(S)?d.renderbufferStorageMultisampleEXT(36161,pt,q,S.width,S.height):o.renderbufferStorage(36161,q,S.width,S.height)}}o.bindRenderbuffer(36161,null)}function bt(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);const et=n.get(S.depthTexture).__webglTexture,nt=Zt(S);if(S.depthTexture.format===hi)Ot(S)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,et,0,nt):o.framebufferTexture2D(36160,36096,3553,et,0);else if(S.depthTexture.format===Ki)Ot(S)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,et,0,nt):o.framebufferTexture2D(36160,33306,3553,et,0);else throw new Error("Unknown depthTexture format")}function _t(E){const S=n.get(E),H=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");bt(S.__webglFramebuffer,E)}else if(H){S.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(36160,S.__webglFramebuffer[et]),S.__webglDepthbuffer[et]=o.createRenderbuffer(),Ft(S.__webglDepthbuffer[et],E,!1)}else e.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=o.createRenderbuffer(),Ft(S.__webglDepthbuffer,E,!1);e.bindFramebuffer(36160,null)}function ge(E,S,H){const et=n.get(E);S!==void 0&&lt(et.__webglFramebuffer,E,E.texture,36064,3553),H!==void 0&&_t(E)}function _e(E){const S=E.texture,H=n.get(E),et=n.get(S);E.addEventListener("dispose",j),E.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=o.createTexture()),et.__version=S.version,a.memory.textures++);const nt=E.isWebGLCubeRenderTarget===!0,st=E.isWebGLMultipleRenderTargets===!0,vt=b(E)||s;if(nt){H.__webglFramebuffer=[];for(let at=0;at<6;at++)H.__webglFramebuffer[at]=o.createFramebuffer()}else{if(H.__webglFramebuffer=o.createFramebuffer(),st)if(i.drawBuffers){const at=E.texture;for(let q=0,pt=at.length;q<pt;q++){const gt=n.get(at[q]);gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&E.samples>0&&Ot(E)===!1){const at=st?S:[S];H.__webglMultisampledFramebuffer=o.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let q=0;q<at.length;q++){const pt=at[q];H.__webglColorRenderbuffer[q]=o.createRenderbuffer(),o.bindRenderbuffer(36161,H.__webglColorRenderbuffer[q]);const gt=r.convert(pt.format,pt.encoding),ut=r.convert(pt.type),mt=x(pt.internalFormat,gt,ut,pt.encoding,E.isXRRenderTarget===!0),dt=Zt(E);o.renderbufferStorageMultisample(36161,dt,mt,E.width,E.height),o.framebufferRenderbuffer(36160,36064+q,36161,H.__webglColorRenderbuffer[q])}o.bindRenderbuffer(36161,null),E.depthBuffer&&(H.__webglDepthRenderbuffer=o.createRenderbuffer(),Ft(H.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(36160,null)}}if(nt){e.bindTexture(34067,et.__webglTexture),X(34067,S,vt);for(let at=0;at<6;at++)lt(H.__webglFramebuffer[at],E,S,36064,34069+at);A(S,vt)&&C(34067),e.unbindTexture()}else if(st){const at=E.texture;for(let q=0,pt=at.length;q<pt;q++){const gt=at[q],ut=n.get(gt);e.bindTexture(3553,ut.__webglTexture),X(3553,gt,vt),lt(H.__webglFramebuffer,E,gt,36064+q,3553),A(gt,vt)&&C(3553)}e.unbindTexture()}else{let at=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(s?at=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(at,et.__webglTexture),X(at,S,vt),lt(H.__webglFramebuffer,E,S,36064,at),A(S,vt)&&C(at),e.unbindTexture()}E.depthBuffer&&_t(E)}function xe(E){const S=b(E)||s,H=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let et=0,nt=H.length;et<nt;et++){const st=H[et];if(A(st,S)){const vt=E.isWebGLCubeRenderTarget?34067:3553,at=n.get(st).__webglTexture;e.bindTexture(vt,at),C(vt),e.unbindTexture()}}}function Ge(E){if(s&&E.samples>0&&Ot(E)===!1){const S=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],H=E.width,et=E.height;let nt=16384;const st=[],vt=E.stencilBuffer?33306:36096,at=n.get(E),q=E.isWebGLMultipleRenderTargets===!0;if(q)for(let pt=0;pt<S.length;pt++)e.bindFramebuffer(36160,at.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+pt,36161,null),e.bindFramebuffer(36160,at.__webglFramebuffer),o.framebufferTexture2D(36009,36064+pt,3553,null,0);e.bindFramebuffer(36008,at.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,at.__webglFramebuffer);for(let pt=0;pt<S.length;pt++){st.push(36064+pt),E.depthBuffer&&st.push(vt);const gt=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if(gt===!1&&(E.depthBuffer&&(nt|=256),E.stencilBuffer&&(nt|=1024)),q&&o.framebufferRenderbuffer(36008,36064,36161,at.__webglColorRenderbuffer[pt]),gt===!0&&(o.invalidateFramebuffer(36008,[vt]),o.invalidateFramebuffer(36009,[vt])),q){const ut=n.get(S[pt]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,ut,0)}o.blitFramebuffer(0,0,H,et,0,0,H,et,nt,9728),m&&o.invalidateFramebuffer(36008,st)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),q)for(let pt=0;pt<S.length;pt++){e.bindFramebuffer(36160,at.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+pt,36161,at.__webglColorRenderbuffer[pt]);const gt=n.get(S[pt]).__webglTexture;e.bindFramebuffer(36160,at.__webglFramebuffer),o.framebufferTexture2D(36009,36064+pt,3553,gt,0)}e.bindFramebuffer(36009,at.__webglMultisampledFramebuffer)}}function Zt(E){return Math.min(h,E.samples)}function Ot(E){const S=n.get(E);return s&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function gn(E){const S=a.render.frame;_.get(E)!==S&&(_.set(E,S),E.update())}function en(E,S){const H=E.encoding,et=E.format,nt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Ra||H!==vi&&(H===Ut?s===!1?t.has("EXT_sRGB")===!0&&et===on?(E.format=Ra,E.minFilter=$e,E.generateMipmaps=!1):S=pc.sRGBToLinear(S):(et!==on||nt!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),S}this.allocateTextureUnit=k,this.resetTextureUnits=$,this.setTexture2D=Z,this.setTexture2DArray=U,this.setTexture3D=B,this.setTextureCube=K,this.rebindTextures=ge,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=Ot}function Tg(o,t,e){const n=e.isWebGL2;function i(r,a=null){let s;if(r===xi)return 5121;if(r===mh)return 32819;if(r===gh)return 32820;if(r===dh)return 5120;if(r===fh)return 5122;if(r===hc)return 5123;if(r===ph)return 5124;if(r===li)return 5125;if(r===ci)return 5126;if(r===Cr)return n?5131:(s=t.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===_h)return 6406;if(r===on)return 6408;if(r===vh)return 6409;if(r===yh)return 6410;if(r===hi)return 6402;if(r===Ki)return 34041;if(r===xh)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Ra)return s=t.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===Mh)return 6403;if(r===bh)return 36244;if(r===Sh)return 33319;if(r===wh)return 33320;if(r===Th)return 36249;if(r===Bs||r===Vs||r===Gs||r===Hs)if(a===Ut)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Bs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Bs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Oo||r===zo||r===No||r===Uo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Oo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===No)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Uo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Eh)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ko||r===Bo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(r===ko)return a===Ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Bo)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Vo||r===Go||r===Ho||r===Wo||r===Xo||r===qo||r===$o||r===Yo||r===jo||r===Zo||r===Ko||r===Jo||r===Qo||r===tl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Vo)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Go)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ho)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wo)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xo)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===qo)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$o)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Yo)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jo)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zo)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ko)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Jo)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qo)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===tl)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===el)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(r===el)return a===Ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Xi?n?34042:(s=t.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class Eg extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class hs extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ag={type:"move"};class ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const s=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const f of t.hand.values()){const p=e.getJointPose(f,n),g=this._getHandJoint(c,f);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Ag)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new hs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Cg extends Te{constructor(t,e,n,i,r,a,s,l,c,u){if(u=u!==void 0?u:hi,u!==hi&&u!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===hi&&(n=li),n===void 0&&u===Ki&&(n=Xi),super(null,i,r,a,s,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=s!==void 0?s:be,this.minFilter=l!==void 0?l:be,this.flipY=!1,this.generateMipmaps=!1}}class Lg extends lr{constructor(t,e){super();const n=this;let i=null,r=1,a=null,s="local-floor",l=null,c=null,u=null,h=null,d=null,m=null;const _=e.getContextAttributes();let f=null,p=null;const g=[],M=[],v=new Set,b=new Map,y=new Ye;y.layers.enable(1),y.viewport=new le;const A=new Ye;A.layers.enable(2),A.viewport=new le;const C=[y,A],x=new Eg;x.layers.enable(1),x.layers.enable(2);let T=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let B=g[U];return B===void 0&&(B=new ga,g[U]=B),B.getTargetRaySpace()},this.getControllerGrip=function(U){let B=g[U];return B===void 0&&(B=new ga,g[U]=B),B.getGripSpace()},this.getHand=function(U){let B=g[U];return B===void 0&&(B=new ga,g[U]=B),B.getHandSpace()};function O(U){const B=M.indexOf(U.inputSource);if(B===-1)return;const K=g[B];K!==void 0&&K.dispatchEvent({type:U.type,data:U.inputSource})}function j(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",R);for(let U=0;U<g.length;U++){const B=M[U];B!==null&&(M[U]=null,g[U].disconnect(B))}T=null,D=null,t.setRenderTarget(f),d=null,h=null,u=null,i=null,p=null,Z.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){s=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",j),i.addEventListener("inputsourceschange",R),_.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const B={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,B),i.updateRenderState({baseLayer:d}),p=new yi(d.framebufferWidth,d.framebufferHeight,{format:on,type:xi,encoding:t.outputEncoding,stencilBuffer:_.stencil})}else{let B=null,K=null,J=null;_.depth&&(J=_.stencil?35056:33190,B=_.stencil?Ki:hi,K=_.stencil?Xi:li);const it={colorFormat:32856,depthFormat:J,scaleFactor:r};u=new XRWebGLBinding(i,e),h=u.createProjectionLayer(it),i.updateRenderState({layers:[h]}),p=new yi(h.textureWidth,h.textureHeight,{format:on,type:xi,depthTexture:new Cg(h.textureWidth,h.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:_.stencil,encoding:t.outputEncoding,samples:_.antialias?4:0});const X=t.properties.get(p);X.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(s),Z.setContext(i),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(U){for(let B=0;B<U.removed.length;B++){const K=U.removed[B],J=M.indexOf(K);J>=0&&(M[J]=null,g[J].disconnect(K))}for(let B=0;B<U.added.length;B++){const K=U.added[B];let J=M.indexOf(K);if(J===-1){for(let X=0;X<g.length;X++)if(X>=M.length){M.push(K),J=X;break}else if(M[X]===null){M[X]=K,J=X;break}if(J===-1)break}const it=g[J];it&&it.connect(K)}}const P=new z,N=new z;function Y(U,B,K){P.setFromMatrixPosition(B.matrixWorld),N.setFromMatrixPosition(K.matrixWorld);const J=P.distanceTo(N),it=B.projectionMatrix.elements,X=K.projectionMatrix.elements,Lt=it[14]/(it[10]-1),ct=it[14]/(it[10]+1),xt=(it[9]+1)/it[5],lt=(it[9]-1)/it[5],Ft=(it[8]-1)/it[0],bt=(X[8]+1)/X[0],_t=Lt*Ft,ge=Lt*bt,_e=J/(-Ft+bt),xe=_e*-Ft;B.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(xe),U.translateZ(_e),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const Ge=Lt+_e,Zt=ct+_e,Ot=_t-xe,gn=ge+(J-xe),en=xt*ct/Zt*Ge,E=lt*ct/Zt*Ge;U.projectionMatrix.makePerspective(Ot,gn,en,E,Ge,Zt)}function $(U,B){B===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(B.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;x.near=A.near=y.near=U.near,x.far=A.far=y.far=U.far,(T!==x.near||D!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,D=x.far);const B=U.parent,K=x.cameras;$(x,B);for(let it=0;it<K.length;it++)$(K[it],B);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),U.matrix.copy(x.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale);const J=U.children;for(let it=0,X=J.length;it<X;it++)J[it].updateMatrixWorld(!0);K.length===2?Y(x,y,A):x.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(U){h!==null&&(h.fixedFoveation=U),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=U)},this.getPlanes=function(){return v};let k=null;function tt(U,B){if(c=B.getViewerPose(l||a),m=B,c!==null){const K=c.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let J=!1;K.length!==x.cameras.length&&(x.cameras.length=0,J=!0);for(let it=0;it<K.length;it++){const X=K[it];let Lt=null;if(d!==null)Lt=d.getViewport(X);else{const xt=u.getViewSubImage(h,X);Lt=xt.viewport,it===0&&(t.setRenderTargetTextures(p,xt.colorTexture,h.ignoreDepthValues?void 0:xt.depthStencilTexture),t.setRenderTarget(p))}let ct=C[it];ct===void 0&&(ct=new Ye,ct.layers.enable(it),ct.viewport=new le,C[it]=ct),ct.matrix.fromArray(X.transform.matrix),ct.projectionMatrix.fromArray(X.projectionMatrix),ct.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),it===0&&x.matrix.copy(ct.matrix),J===!0&&x.cameras.push(ct)}}for(let K=0;K<g.length;K++){const J=M[K],it=g[K];J!==null&&it!==void 0&&it.update(J,B,l||a)}if(k&&k(U,B),B.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:B.detectedPlanes});let K=null;for(const J of v)B.detectedPlanes.has(J)||(K===null&&(K=[]),K.push(J));if(K!==null)for(const J of K)v.delete(J),b.delete(J),n.dispatchEvent({type:"planeremoved",data:J});for(const J of B.detectedPlanes)if(!v.has(J))v.add(J),b.set(J,B.lastChangedTime),n.dispatchEvent({type:"planeadded",data:J});else{const it=b.get(J);J.lastChangedTime>it&&(b.set(J,J.lastChangedTime),n.dispatchEvent({type:"planechanged",data:J}))}}m=null}const Z=new Tc;Z.setAnimationLoop(tt),this.setAnimationLoop=function(U){k=U},this.dispose=function(){}}}function Dg(o,t){function e(f,p){p.color.getRGB(f.fogColor.value,Mc(o)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,g,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(f,p):p.isMeshToonMaterial?(i(f,p),u(f,p)):p.isMeshPhongMaterial?(i(f,p),c(f,p)):p.isMeshStandardMaterial?(i(f,p),h(f,p),p.isMeshPhysicalMaterial&&d(f,p,v)):p.isMeshMatcapMaterial?(i(f,p),m(f,p)):p.isMeshDepthMaterial?i(f,p):p.isMeshDistanceMaterial?(i(f,p),_(f,p)):p.isMeshNormalMaterial?i(f,p):p.isLineBasicMaterial?(r(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?s(f,p,g,M):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.bumpMap&&(f.bumpMap.value=p.bumpMap,f.bumpScale.value=p.bumpScale,p.side===Je&&(f.bumpScale.value*=-1)),p.displacementMap&&(f.displacementMap.value=p.displacementMap,f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap),p.normalMap&&(f.normalMap.value=p.normalMap,f.normalScale.value.copy(p.normalScale),p.side===Je&&f.normalScale.value.negate()),p.specularMap&&(f.specularMap.value=p.specularMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const g=t.get(p).envMap;if(g&&(f.envMap.value=g,f.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const b=o.physicallyCorrectLights!==!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*b}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap?M=p.clearcoatRoughnessMap:p.iridescenceMap?M=p.iridescenceMap:p.iridescenceThicknessMap?M=p.iridescenceThicknessMap:p.specularIntensityMap?M=p.specularIntensityMap:p.specularColorMap?M=p.specularColorMap:p.transmissionMap?M=p.transmissionMap:p.thicknessMap?M=p.thicknessMap:p.sheenColorMap?M=p.sheenColorMap:p.sheenRoughnessMap&&(M=p.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),f.uvTransform.value.copy(M.matrix));let v;p.aoMap?v=p.aoMap:p.lightMap&&(v=p.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),f.uv2Transform.value.copy(v.matrix))}function r(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function s(f,p,g,M){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*g,f.scale.value=M*.5,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),f.uvTransform.value.copy(v.matrix))}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),f.uvTransform.value.copy(g.matrix))}function c(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function h(f,p){f.roughness.value=p.roughness,f.metalness.value=p.metalness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function d(f,p,g){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),f.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Je&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=g.texture,f.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap)}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){f.referencePosition.value.copy(p.referencePosition),f.nearDistance.value=p.nearDistance,f.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Pg(o,t,e,n){let i={},r={},a=[];const s=e.isWebGL2?o.getParameter(35375):0;function l(M,v){const b=v.program;n.uniformBlockBinding(M,b)}function c(M,v){let b=i[M.id];b===void 0&&(_(M),b=u(M),i[M.id]=b,M.addEventListener("dispose",p));const y=v.program;n.updateUBOMapping(M,y);const A=t.render.frame;r[M.id]!==A&&(d(M),r[M.id]=A)}function u(M){const v=h();M.__bindingPointIndex=v;const b=o.createBuffer(),y=M.__size,A=M.usage;return o.bindBuffer(35345,b),o.bufferData(35345,y,A),o.bindBuffer(35345,null),o.bindBufferBase(35345,v,b),b}function h(){for(let M=0;M<s;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=i[M.id],b=M.uniforms,y=M.__cache;o.bindBuffer(35345,v);for(let A=0,C=b.length;A<C;A++){const x=b[A];if(m(x,A,y)===!0){const T=x.__offset,D=Array.isArray(x.value)?x.value:[x.value];let O=0;for(let j=0;j<D.length;j++){const R=D[j],P=f(R);typeof R=="number"?(x.__data[0]=R,o.bufferSubData(35345,T+O,x.__data)):R.isMatrix3?(x.__data[0]=R.elements[0],x.__data[1]=R.elements[1],x.__data[2]=R.elements[2],x.__data[3]=R.elements[0],x.__data[4]=R.elements[3],x.__data[5]=R.elements[4],x.__data[6]=R.elements[5],x.__data[7]=R.elements[0],x.__data[8]=R.elements[6],x.__data[9]=R.elements[7],x.__data[10]=R.elements[8],x.__data[11]=R.elements[0]):(R.toArray(x.__data,O),O+=P.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,T,x.__data)}}o.bindBuffer(35345,null)}function m(M,v,b){const y=M.value;if(b[v]===void 0){if(typeof y=="number")b[v]=y;else{const A=Array.isArray(y)?y:[y],C=[];for(let x=0;x<A.length;x++)C.push(A[x].clone());b[v]=C}return!0}else if(typeof y=="number"){if(b[v]!==y)return b[v]=y,!0}else{const A=Array.isArray(b[v])?b[v]:[b[v]],C=Array.isArray(y)?y:[y];for(let x=0;x<A.length;x++){const T=A[x];if(T.equals(C[x])===!1)return T.copy(C[x]),!0}}return!1}function _(M){const v=M.uniforms;let b=0;const y=16;let A=0;for(let C=0,x=v.length;C<x;C++){const T=v[C],D={boundary:0,storage:0},O=Array.isArray(T.value)?T.value:[T.value];for(let j=0,R=O.length;j<R;j++){const P=O[j],N=f(P);D.boundary+=N.boundary,D.storage+=N.storage}if(T.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=b,C>0){A=b%y;const j=y-A;A!==0&&j-D.boundary<0&&(b+=y-A,T.__offset=b)}b+=D.storage}return A=b%y,A>0&&(b+=y-A),M.__size=b,M.__cache={},this}function f(M){const v={boundary:0,storage:0};return typeof M=="number"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function p(M){const v=M.target;v.removeEventListener("dispose",p);const b=a.indexOf(v.__bindingPointIndex);a.splice(b,1),o.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function g(){for(const M in i)o.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:g}}function Rg(){const o=Dr("canvas");return o.style.display="block",o}function Dc(o={}){this.isWebGLRenderer=!0;const t=o.canvas!==void 0?o.canvas:Rg(),e=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,s=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let h=null,d=null;const m=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=vi,this.physicallyCorrectLights=!1,this.toneMapping=Pn,this.toneMappingExposure=1;const f=this;let p=!1,g=0,M=0,v=null,b=-1,y=null;const A=new le,C=new le;let x=null,T=t.width,D=t.height,O=1,j=null,R=null;const P=new le(0,0,T,D),N=new le(0,0,T,D);let Y=!1;const $=new wc;let k=!1,tt=!1,Z=null;const U=new ce,B=new Rt,K=new z,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function it(){return v===null?O:1}let X=e;function Lt(w,F){for(let G=0;G<w.length;G++){const I=w[G],W=t.getContext(I,F);if(W!==null)return W}return null}try{const w={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${to}`),t.addEventListener("webglcontextlost",mt,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",Dt,!1),X===null){const F=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&F.shift(),X=Lt(F,w),X===null)throw Lt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ct,xt,lt,Ft,bt,_t,ge,_e,xe,Ge,Zt,Ot,gn,en,E,S,H,et,nt,st,vt,at,q,pt;function gt(){ct=new Hp(X),xt=new zp(X,ct,o),ct.init(xt),at=new Tg(X,ct,xt),lt=new Sg(X,ct,xt),Ft=new qp,bt=new cg,_t=new wg(X,ct,lt,bt,xt,at,Ft),ge=new Up(f),_e=new Gp(f),xe=new Qh(X,xt),q=new Fp(X,ct,xe,xt),Ge=new Wp(X,xe,Ft,q),Zt=new Zp(X,Ge,xe,Ft),nt=new jp(X,xt,_t),S=new Np(bt),Ot=new lg(f,ge,_e,ct,xt,q,S),gn=new Dg(f,bt),en=new hg,E=new _g(ct,xt),et=new Ip(f,ge,_e,lt,Zt,u,a),H=new bg(f,Zt,xt),pt=new Pg(X,Ft,xt,lt),st=new Op(X,ct,Ft,xt),vt=new Xp(X,ct,Ft,xt),Ft.programs=Ot.programs,f.capabilities=xt,f.extensions=ct,f.properties=bt,f.renderLists=en,f.shadowMap=H,f.state=lt,f.info=Ft}gt();const ut=new Lg(f,X);this.xr=ut,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const w=ct.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ct.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(w){w!==void 0&&(O=w,this.setSize(T,D,!1))},this.getSize=function(w){return w.set(T,D)},this.setSize=function(w,F,G){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=w,D=F,t.width=Math.floor(w*O),t.height=Math.floor(F*O),G!==!1&&(t.style.width=w+"px",t.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(T*O,D*O).floor()},this.setDrawingBufferSize=function(w,F,G){T=w,D=F,O=G,t.width=Math.floor(w*G),t.height=Math.floor(F*G),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(P)},this.setViewport=function(w,F,G,I){w.isVector4?P.set(w.x,w.y,w.z,w.w):P.set(w,F,G,I),lt.viewport(A.copy(P).multiplyScalar(O).floor())},this.getScissor=function(w){return w.copy(N)},this.setScissor=function(w,F,G,I){w.isVector4?N.set(w.x,w.y,w.z,w.w):N.set(w,F,G,I),lt.scissor(C.copy(N).multiplyScalar(O).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(w){lt.setScissorTest(Y=w)},this.setOpaqueSort=function(w){j=w},this.setTransparentSort=function(w){R=w},this.getClearColor=function(w){return w.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(w=!0,F=!0,G=!0){let I=0;w&&(I|=16384),F&&(I|=256),G&&(I|=1024),X.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Dt,!1),en.dispose(),E.dispose(),bt.dispose(),ge.dispose(),_e.dispose(),Zt.dispose(),q.dispose(),pt.dispose(),Ot.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",ot),ut.removeEventListener("sessionend",ht),Z&&(Z.dispose(),Z=null),It.stop()};function mt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const w=Ft.autoReset,F=H.enabled,G=H.autoUpdate,I=H.needsUpdate,W=H.type;gt(),Ft.autoReset=w,H.enabled=F,H.autoUpdate=G,H.needsUpdate=I,H.type=W}function Dt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function kt(w){const F=w.target;F.removeEventListener("dispose",kt),ne(F)}function ne(w){L(w),bt.remove(w)}function L(w){const F=bt.get(w).programs;F!==void 0&&(F.forEach(function(G){Ot.releaseProgram(G)}),w.isShaderMaterial&&Ot.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,G,I,W,ft){F===null&&(F=J);const yt=W.isMesh&&W.matrixWorld.determinant()<0,St=Ru(w,F,G,I,W);lt.setMaterial(I,yt);let wt=G.index,Pt=1;I.wireframe===!0&&(wt=Ge.getWireframeAttribute(G),Pt=2);const Et=G.drawRange,At=G.attributes.position;let qt=Et.start*Pt,Le=(Et.start+Et.count)*Pt;ft!==null&&(qt=Math.max(qt,ft.start*Pt),Le=Math.min(Le,(ft.start+ft.count)*Pt)),wt!==null?(qt=Math.max(qt,0),Le=Math.min(Le,wt.count)):At!=null&&(qt=Math.max(qt,0),Le=Math.min(Le,At.count));const xn=Le-qt;if(xn<0||xn===1/0)return;q.setup(W,I,St,G,wt);let Zn,$t=st;if(wt!==null&&(Zn=xe.get(wt),$t=vt,$t.setIndex(Zn)),W.isMesh)I.wireframe===!0?(lt.setLineWidth(I.wireframeLinewidth*it()),$t.setMode(1)):$t.setMode(4);else if(W.isLine){let Ct=I.linewidth;Ct===void 0&&(Ct=1),lt.setLineWidth(Ct*it()),W.isLineSegments?$t.setMode(1):W.isLineLoop?$t.setMode(2):$t.setMode(3)}else W.isPoints?$t.setMode(0):W.isSprite&&$t.setMode(4);if(W.isInstancedMesh)$t.renderInstances(qt,xn,W.count);else if(G.isInstancedBufferGeometry){const Ct=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Os=Math.min(G.instanceCount,Ct);$t.renderInstances(qt,xn,Os)}else $t.render(qt,xn)},this.compile=function(w,F){function G(I,W,ft){I.transparent===!0&&I.side===Xr?(I.side=Je,I.needsUpdate=!0,He(I,W,ft),I.side=_i,I.needsUpdate=!0,He(I,W,ft),I.side=Xr):He(I,W,ft)}d=E.get(w),d.init(),_.push(d),w.traverseVisible(function(I){I.isLight&&I.layers.test(F.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),d.setupLights(f.physicallyCorrectLights),w.traverse(function(I){const W=I.material;if(W)if(Array.isArray(W))for(let ft=0;ft<W.length;ft++){const yt=W[ft];G(yt,w,I)}else G(W,w,I)}),_.pop(),d=null};let V=null;function Q(w){V&&V(w)}function ot(){It.stop()}function ht(){It.start()}const It=new Tc;It.setAnimationLoop(Q),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(w){V=w,ut.setAnimationLoop(w),w===null?It.stop():It.start()},ut.addEventListener("sessionstart",ot),ut.addEventListener("sessionend",ht),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(F),F=ut.getCamera()),w.isScene===!0&&w.onBeforeRender(f,w,F,v),d=E.get(w,_.length),d.init(),_.push(d),U.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),$.setFromProjectionMatrix(U),tt=this.localClippingEnabled,k=S.init(this.clippingPlanes,tt,F),h=en.get(w,m.length),h.init(),m.push(h),ie(w,F,0,f.sortObjects),h.finish(),f.sortObjects===!0&&h.sort(j,R),k===!0&&S.beginShadows();const G=d.state.shadowsArray;if(H.render(G,w,F),k===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(h,w),d.setupLights(f.physicallyCorrectLights),F.isArrayCamera){const I=F.cameras;for(let W=0,ft=I.length;W<ft;W++){const yt=I[W];ue(h,w,yt,yt.viewport)}}else ue(h,w,F);v!==null&&(_t.updateMultisampleRenderTarget(v),_t.updateRenderTargetMipmap(v)),w.isScene===!0&&w.onAfterRender(f,w,F),q.resetDefaultState(),b=-1,y=null,_.pop(),_.length>0?d=_[_.length-1]:d=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function ie(w,F,G,I){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||$.intersectsSprite(w)){I&&K.setFromMatrixPosition(w.matrixWorld).applyMatrix4(U);const yt=Zt.update(w),St=w.material;St.visible&&h.push(w,yt,St,G,K.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==Ft.render.frame&&(w.skeleton.update(),w.skeleton.frame=Ft.render.frame),!w.frustumCulled||$.intersectsObject(w))){I&&K.setFromMatrixPosition(w.matrixWorld).applyMatrix4(U);const yt=Zt.update(w),St=w.material;if(Array.isArray(St)){const wt=yt.groups;for(let Pt=0,Et=wt.length;Pt<Et;Pt++){const At=wt[Pt],qt=St[At.materialIndex];qt&&qt.visible&&h.push(w,yt,qt,G,K.z,At)}}else St.visible&&h.push(w,yt,St,G,K.z,null)}}const ft=w.children;for(let yt=0,St=ft.length;yt<St;yt++)ie(ft[yt],F,G,I)}function ue(w,F,G,I){const W=w.opaque,ft=w.transmissive,yt=w.transparent;d.setupLightsView(G),ft.length>0&&jn(W,F,G),I&&lt.viewport(A.copy(I)),W.length>0&&Bt(W,F,G),ft.length>0&&Bt(ft,F,G),yt.length>0&&Bt(yt,F,G),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function jn(w,F,G){const I=xt.isWebGL2;Z===null&&(Z=new yi(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")?Cr:xi,minFilter:Ar,samples:I&&r===!0?4:0})),f.getDrawingBufferSize(B),I?Z.setSize(B.x,B.y):Z.setSize(Ia(B.x),Ia(B.y));const W=f.getRenderTarget();f.setRenderTarget(Z),f.clear();const ft=f.toneMapping;f.toneMapping=Pn,Bt(w,F,G),f.toneMapping=ft,_t.updateMultisampleRenderTarget(Z),_t.updateRenderTargetMipmap(Z),f.setRenderTarget(W)}function Bt(w,F,G){const I=F.isScene===!0?F.overrideMaterial:null;for(let W=0,ft=w.length;W<ft;W++){const yt=w[W],St=yt.object,wt=yt.geometry,Pt=I===null?yt.material:I,Et=yt.group;St.layers.test(G.layers)&&_n(St,F,G,wt,Pt,Et)}}function _n(w,F,G,I,W,ft){w.onBeforeRender(f,F,G,I,W,ft),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(f,F,G,I,w,ft),W.transparent===!0&&W.side===Xr?(W.side=Je,W.needsUpdate=!0,f.renderBufferDirect(G,F,I,W,w,ft),W.side=_i,W.needsUpdate=!0,f.renderBufferDirect(G,F,I,W,w,ft),W.side=Xr):f.renderBufferDirect(G,F,I,W,w,ft),w.onAfterRender(f,F,G,I,W,ft)}function He(w,F,G){F.isScene!==!0&&(F=J);const I=bt.get(w),W=d.state.lights,ft=d.state.shadowsArray,yt=W.state.version,St=Ot.getParameters(w,W.state,ft,F,G),wt=Ot.getProgramCacheKey(St);let Pt=I.programs;I.environment=w.isMeshStandardMaterial?F.environment:null,I.fog=F.fog,I.envMap=(w.isMeshStandardMaterial?_e:ge).get(w.envMap||I.environment),Pt===void 0&&(w.addEventListener("dispose",kt),Pt=new Map,I.programs=Pt);let Et=Pt.get(wt);if(Et!==void 0){if(I.currentProgram===Et&&I.lightsStateVersion===yt)return To(w,St),Et}else St.uniforms=Ot.getUniforms(w),w.onBuild(G,St,f),w.onBeforeCompile(St,f),Et=Ot.acquireProgram(St,wt),Pt.set(wt,Et),I.uniforms=St.uniforms;const At=I.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(At.clippingPlanes=S.uniform),To(w,St),I.needsLights=Fu(w),I.lightsStateVersion=yt,I.needsLights&&(At.ambientLightColor.value=W.state.ambient,At.lightProbe.value=W.state.probe,At.directionalLights.value=W.state.directional,At.directionalLightShadows.value=W.state.directionalShadow,At.spotLights.value=W.state.spot,At.spotLightShadows.value=W.state.spotShadow,At.rectAreaLights.value=W.state.rectArea,At.ltc_1.value=W.state.rectAreaLTC1,At.ltc_2.value=W.state.rectAreaLTC2,At.pointLights.value=W.state.point,At.pointLightShadows.value=W.state.pointShadow,At.hemisphereLights.value=W.state.hemi,At.directionalShadowMap.value=W.state.directionalShadowMap,At.directionalShadowMatrix.value=W.state.directionalShadowMatrix,At.spotShadowMap.value=W.state.spotShadowMap,At.spotLightMatrix.value=W.state.spotLightMatrix,At.spotLightMap.value=W.state.spotLightMap,At.pointShadowMap.value=W.state.pointShadowMap,At.pointShadowMatrix.value=W.state.pointShadowMatrix);const qt=Et.getUniforms(),Le=ps.seqWithValue(qt.seq,At);return I.currentProgram=Et,I.uniformsList=Le,Et}function To(w,F){const G=bt.get(w);G.outputEncoding=F.outputEncoding,G.instancing=F.instancing,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Ru(w,F,G,I,W){F.isScene!==!0&&(F=J),_t.resetTextureUnits();const ft=F.fog,yt=I.isMeshStandardMaterial?F.environment:null,St=v===null?f.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:vi,wt=(I.isMeshStandardMaterial?_e:ge).get(I.envMap||yt),Pt=I.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Et=!!I.normalMap&&!!G.attributes.tangent,At=!!G.morphAttributes.position,qt=!!G.morphAttributes.normal,Le=!!G.morphAttributes.color,xn=I.toneMapped?f.toneMapping:Pn,Zn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,$t=Zn!==void 0?Zn.length:0,Ct=bt.get(I),Os=d.state.lights;if(k===!0&&(tt===!0||w!==y)){const De=w===y&&I.id===b;S.setState(I,w,De)}let re=!1;I.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Os.state.version||Ct.outputEncoding!==St||W.isInstancedMesh&&Ct.instancing===!1||!W.isInstancedMesh&&Ct.instancing===!0||W.isSkinnedMesh&&Ct.skinning===!1||!W.isSkinnedMesh&&Ct.skinning===!0||Ct.envMap!==wt||I.fog===!0&&Ct.fog!==ft||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==S.numPlanes||Ct.numIntersection!==S.numIntersection)||Ct.vertexAlphas!==Pt||Ct.vertexTangents!==Et||Ct.morphTargets!==At||Ct.morphNormals!==qt||Ct.morphColors!==Le||Ct.toneMapping!==xn||xt.isWebGL2===!0&&Ct.morphTargetsCount!==$t)&&(re=!0):(re=!0,Ct.__version=I.version);let Kn=Ct.currentProgram;re===!0&&(Kn=He(I,F,W));let Eo=!1,hr=!1,zs=!1;const ve=Kn.getUniforms(),Jn=Ct.uniforms;if(lt.useProgram(Kn.program)&&(Eo=!0,hr=!0,zs=!0),I.id!==b&&(b=I.id,hr=!0),Eo||y!==w){if(ve.setValue(X,"projectionMatrix",w.projectionMatrix),xt.logarithmicDepthBuffer&&ve.setValue(X,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),y!==w&&(y=w,hr=!0,zs=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const De=ve.map.cameraPosition;De!==void 0&&De.setValue(X,K.setFromMatrixPosition(w.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&ve.setValue(X,"isOrthographic",w.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||W.isSkinnedMesh)&&ve.setValue(X,"viewMatrix",w.matrixWorldInverse)}if(W.isSkinnedMesh){ve.setOptional(X,W,"bindMatrix"),ve.setOptional(X,W,"bindMatrixInverse");const De=W.skeleton;De&&(xt.floatVertexTextures?(De.boneTexture===null&&De.computeBoneTexture(),ve.setValue(X,"boneTexture",De.boneTexture,_t),ve.setValue(X,"boneTextureSize",De.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ns=G.morphAttributes;if((Ns.position!==void 0||Ns.normal!==void 0||Ns.color!==void 0&&xt.isWebGL2===!0)&&nt.update(W,G,I,Kn),(hr||Ct.receiveShadow!==W.receiveShadow)&&(Ct.receiveShadow=W.receiveShadow,ve.setValue(X,"receiveShadow",W.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(Jn.envMap.value=wt,Jn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),hr&&(ve.setValue(X,"toneMappingExposure",f.toneMappingExposure),Ct.needsLights&&Iu(Jn,zs),ft&&I.fog===!0&&gn.refreshFogUniforms(Jn,ft),gn.refreshMaterialUniforms(Jn,I,O,D,Z),ps.upload(X,Ct.uniformsList,Jn,_t)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(ps.upload(X,Ct.uniformsList,Jn,_t),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&ve.setValue(X,"center",W.center),ve.setValue(X,"modelViewMatrix",W.modelViewMatrix),ve.setValue(X,"normalMatrix",W.normalMatrix),ve.setValue(X,"modelMatrix",W.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const De=I.uniformsGroups;for(let Us=0,Ou=De.length;Us<Ou;Us++)if(xt.isWebGL2){const Ao=De[Us];pt.update(Ao,Kn),pt.bind(Ao,Kn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Kn}function Iu(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Fu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(w,F,G){bt.get(w.texture).__webglTexture=F,bt.get(w.depthTexture).__webglTexture=G;const I=bt.get(w);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=G===void 0,I.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,F){const G=bt.get(w);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,G=0){v=w,g=F,M=G;let I=!0,W=null,ft=!1,yt=!1;if(w){const wt=bt.get(w);wt.__useDefaultFramebuffer!==void 0?(lt.bindFramebuffer(36160,null),I=!1):wt.__webglFramebuffer===void 0?_t.setupRenderTarget(w):wt.__hasExternalTextures&&_t.rebindTextures(w,bt.get(w.texture).__webglTexture,bt.get(w.depthTexture).__webglTexture);const Pt=w.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(yt=!0);const Et=bt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(W=Et[F],ft=!0):xt.isWebGL2&&w.samples>0&&_t.useMultisampledRTT(w)===!1?W=bt.get(w).__webglMultisampledFramebuffer:W=Et,A.copy(w.viewport),C.copy(w.scissor),x=w.scissorTest}else A.copy(P).multiplyScalar(O).floor(),C.copy(N).multiplyScalar(O).floor(),x=Y;if(lt.bindFramebuffer(36160,W)&&xt.drawBuffers&&I&&lt.drawBuffers(w,W),lt.viewport(A),lt.scissor(C),lt.setScissorTest(x),ft){const wt=bt.get(w.texture);X.framebufferTexture2D(36160,36064,34069+F,wt.__webglTexture,G)}else if(yt){const wt=bt.get(w.texture),Pt=F||0;X.framebufferTextureLayer(36160,36064,wt.__webglTexture,G||0,Pt)}b=-1},this.readRenderTargetPixels=function(w,F,G,I,W,ft,yt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&yt!==void 0&&(St=St[yt]),St){lt.bindFramebuffer(36160,St);try{const wt=w.texture,Pt=wt.format,Et=wt.type;if(Pt!==on&&at.convert(Pt)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const At=Et===Cr&&(ct.has("EXT_color_buffer_half_float")||xt.isWebGL2&&ct.has("EXT_color_buffer_float"));if(Et!==xi&&at.convert(Et)!==X.getParameter(35738)&&!(Et===ci&&(xt.isWebGL2||ct.has("OES_texture_float")||ct.has("WEBGL_color_buffer_float")))&&!At){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-I&&G>=0&&G<=w.height-W&&X.readPixels(F,G,I,W,at.convert(Pt),at.convert(Et),ft)}finally{const wt=v!==null?bt.get(v).__webglFramebuffer:null;lt.bindFramebuffer(36160,wt)}}},this.copyFramebufferToTexture=function(w,F,G=0){const I=Math.pow(2,-G),W=Math.floor(F.image.width*I),ft=Math.floor(F.image.height*I);_t.setTexture2D(F,0),X.copyTexSubImage2D(3553,G,0,0,w.x,w.y,W,ft),lt.unbindTexture()},this.copyTextureToTexture=function(w,F,G,I=0){const W=F.image.width,ft=F.image.height,yt=at.convert(G.format),St=at.convert(G.type);_t.setTexture2D(G,0),X.pixelStorei(37440,G.flipY),X.pixelStorei(37441,G.premultiplyAlpha),X.pixelStorei(3317,G.unpackAlignment),F.isDataTexture?X.texSubImage2D(3553,I,w.x,w.y,W,ft,yt,St,F.image.data):F.isCompressedTexture?X.compressedTexSubImage2D(3553,I,w.x,w.y,F.mipmaps[0].width,F.mipmaps[0].height,yt,F.mipmaps[0].data):X.texSubImage2D(3553,I,w.x,w.y,yt,St,F.image),I===0&&G.generateMipmaps&&X.generateMipmap(3553),lt.unbindTexture()},this.copyTextureToTexture3D=function(w,F,G,I,W=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ft=w.max.x-w.min.x+1,yt=w.max.y-w.min.y+1,St=w.max.z-w.min.z+1,wt=at.convert(I.format),Pt=at.convert(I.type);let Et;if(I.isData3DTexture)_t.setTexture3D(I,0),Et=32879;else if(I.isDataArrayTexture)_t.setTexture2DArray(I,0),Et=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,I.flipY),X.pixelStorei(37441,I.premultiplyAlpha),X.pixelStorei(3317,I.unpackAlignment);const At=X.getParameter(3314),qt=X.getParameter(32878),Le=X.getParameter(3316),xn=X.getParameter(3315),Zn=X.getParameter(32877),$t=G.isCompressedTexture?G.mipmaps[0]:G.image;X.pixelStorei(3314,$t.width),X.pixelStorei(32878,$t.height),X.pixelStorei(3316,w.min.x),X.pixelStorei(3315,w.min.y),X.pixelStorei(32877,w.min.z),G.isDataTexture||G.isData3DTexture?X.texSubImage3D(Et,W,F.x,F.y,F.z,ft,yt,St,wt,Pt,$t.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Et,W,F.x,F.y,F.z,ft,yt,St,wt,$t.data)):X.texSubImage3D(Et,W,F.x,F.y,F.z,ft,yt,St,wt,Pt,$t),X.pixelStorei(3314,At),X.pixelStorei(32878,qt),X.pixelStorei(3316,Le),X.pixelStorei(3315,xn),X.pixelStorei(32877,Zn),W===0&&I.generateMipmaps&&X.generateMipmap(Et),lt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?_t.setTextureCube(w,0):w.isData3DTexture?_t.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?_t.setTexture2DArray(w,0):_t.setTexture2D(w,0),lt.unbindTexture()},this.resetState=function(){g=0,M=0,v=null,lt.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Ig extends Dc{}Ig.prototype.isWebGL1Renderer=!0;class Fg extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}const Ul={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Og{constructor(t,e,n){const i=this;let r=!1,a=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){s++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,s),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,s),a===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const zg=new Og;class Pc{constructor(t){this.manager=t!==void 0?t:zg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class Ng extends Pc{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Ul.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const s=Dr("img");function l(){u(),Ul.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){u(),i&&i(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(t),s.src=t,s}}class Ug extends Pc{constructor(t){super(t)}load(t,e,n,i){const r=new Te,a=new Ng(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(s){r.image=s,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class kg{constructor(t,e,n=0,i=1/0){this.ray=new _c(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new no,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Oa(t,this,n,e),n.sort(kl),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Oa(t[i],this,n,e);return n.sort(kl),n}}function kl(o,t){return o.distance-t.distance}function Oa(o,t,e,n){if(o.layers.test(t.layers)&&o.raycast(t,e),n===!0){const i=o.children;for(let r=0,a=i.length;r<a;r++)Oa(i[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:to}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=to);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class fn{constructor(t,e,n,i,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),fn.nextNameID=fn.nextNameID||0,this.$name.id=`lil-gui-name-${++fn.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Bg extends fn{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function za(o){let t,e;return(t=o.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const Vg={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:za,toHexString:za},Pr={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},Gg={isPrimitive:!1,match:Array.isArray,fromHexString(o,t,e=1){const n=Pr.fromHexString(o);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([o,t,e],n=1){n=255/n;const i=o*n<<16^t*n<<8^e*n<<0;return Pr.toHexString(i)}},Hg={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,t,e=1){const n=Pr.fromHexString(o);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:o,g:t,b:e},n=1){n=255/n;const i=o*n<<16^t*n<<8^e*n<<0;return Pr.toHexString(i)}},Wg=[Vg,Pr,Gg,Hg];function Xg(o){return Wg.find(t=>t.match(o))}class qg extends fn{constructor(t,e,n,i){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Xg(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=za(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class _a extends fn{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class $g extends fn{constructor(t,e,n,i,r,a){super(t,e,n,"number"),this._initInput(),this.min(i),this.max(r);const s=a!==void 0;this.step(s?a:this._getImplicitStep(),s),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let g=parseFloat(this.$input.value);isNaN(g)||(this._stepExplicit&&(g=this._snap(g)),this.setValue(this._clamp(g)))},e=g=>{const M=parseFloat(this.$input.value);isNaN(M)||(this._snapClampSetValue(M+g),this.$input.value=this.getValue())},n=g=>{g.code==="Enter"&&this.$input.blur(),g.code==="ArrowUp"&&(g.preventDefault(),e(this._step*this._arrowKeyMultiplier(g))),g.code==="ArrowDown"&&(g.preventDefault(),e(this._step*this._arrowKeyMultiplier(g)*-1))},i=g=>{this._inputFocused&&(g.preventDefault(),e(this._step*this._normalizeMouseWheel(g)))};let r=!1,a,s,l,c,u;const h=5,d=g=>{a=g.clientX,s=l=g.clientY,r=!0,c=this.getValue(),u=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",_)},m=g=>{if(r){const M=g.clientX-a,v=g.clientY-s;Math.abs(v)>h?(g.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(M)>h&&_()}if(!r){const M=g.clientY-l;u-=M*this._step*this._arrowKeyMultiplier(g),c+u>this._max?u=this._max-c:c+u<this._min&&(u=this._min-c),this._snapClampSetValue(c+u)}l=g.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",_)},f=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",i,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",f),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(g,M,v,b,y)=>(g-M)/(v-M)*(y-b)+b,e=g=>{const M=this.$slider.getBoundingClientRect();let v=t(g,M.left,M.right,this._min,this._max);this._snapClampSetValue(v)},n=g=>{this._setDraggingStyle(!0),e(g.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=g=>{e(g.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let a=!1,s,l;const c=g=>{g.preventDefault(),this._setDraggingStyle(!0),e(g.touches[0].clientX),a=!1},u=g=>{g.touches.length>1||(this._hasScrollBar?(s=g.touches[0].clientX,l=g.touches[0].clientY,a=!0):c(g),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=g=>{if(a){const M=g.touches[0].clientX-s,v=g.touches[0].clientY-l;Math.abs(M)>Math.abs(v)?c(g):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else g.preventDefault(),e(g.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},m=this._callOnFinishChange.bind(this),_=400;let f;const p=g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();const v=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+v),this.$input.value=this.getValue(),clearTimeout(f),f=setTimeout(m,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Yg extends fn{constructor(t,e,n,i){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(r=>{const a=document.createElement("option");a.innerHTML=r,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class jg extends fn{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Zg=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Kg(o){const t=document.createElement("style");t.innerHTML=o;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Bl=!1;class ro{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:r="Controls",injectStyles:a=!0,touchStyles:s=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),s&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!Bl&&a&&(Kg(Zg),Bl=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(t,e,n,i,r){if(Object(n)===n)return new Yg(this,t,e,n);const a=t[e];switch(typeof a){case"number":return new $g(this,t,e,n,i,r);case"boolean":return new Bg(this,t,e);case"string":return new jg(this,t,e);case"function":return new _a(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,a)}addColor(t,e,n=1){return new qg(this,t,e,n)}addFolder(t){return new ro({parent:this,title:t})}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof _a||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof _a)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}function Tn(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Rc(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ke={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Qi={duration:.5,overwrite:!1,delay:0},so,pe,jt,je=1e8,Nt=1/je,Na=Math.PI*2,Jg=Na/4,Qg=0,Ic=Math.sqrt,t_=Math.cos,e_=Math.sin,ae=function(t){return typeof t=="string"},Wt=function(t){return typeof t=="function"},In=function(t){return typeof t=="number"},ao=function(t){return typeof t>"u"},mn=function(t){return typeof t=="object"},Ee=function(t){return t!==!1},Fc=function(){return typeof window<"u"},ds=function(t){return Wt(t)||ae(t)},Oc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},me=Array.isArray,Ua=/(?:-?\.?\d|\.)+/gi,zc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Vi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,xa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Nc=/[+-]=-?[.\d]+/,Uc=/[^,'"\[\]\s]+/gi,n_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Vt,qe,ka,oo,Be={},xs={},kc,Bc=function(t){return(xs=Mi(t,Be))&&Ve},lo=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},vs=function(t,e){return!e&&console.warn(t)},Vc=function(t,e){return t&&(Be[t]=e)&&xs&&(xs[t]=e)||Be},Rr=function(){return 0},i_={suppressEvents:!0,isStart:!0,kill:!1},ms={suppressEvents:!0,kill:!1},r_={suppressEvents:!0},co={},Hn=[],Ba={},Gc,Fe={},va={},Vl=30,gs=[],uo="",ho=function(t){var e=t[0],n,i;if(mn(e)||Wt(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=gs.length;i--&&!gs[i].targetTest(e););n=gs[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new uu(t[i],n)))||t.splice(i,1);return t},pi=function(t){return t._gsap||ho(Ze(t))[0]._gsap},Hc=function(t,e,n){return(n=t[e])&&Wt(n)?t[e]():ao(n)&&t.getAttribute&&t.getAttribute(e)||n},Ae=function(t,e){return(t=t.split(",")).forEach(e)||t},Xt=function(t){return Math.round(t*1e5)/1e5||0},oe=function(t){return Math.round(t*1e7)/1e7||0},qi=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},s_=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ys=function(){var t=Hn.length,e=Hn.slice(0),n,i;for(Ba={},Hn.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Wc=function(t,e,n,i){Hn.length&&!pe&&ys(),t.render(e,n,i||pe&&e<0&&(t._initted||t._startAt)),Hn.length&&!pe&&ys()},Xc=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Uc).length<2?e:ae(t)?t.trim():t},qc=function(t){return t},Qe=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},a_=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Mi=function(t,e){for(var n in e)t[n]=e[n];return t},Gl=function o(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=mn(e[n])?o(t[n]||(t[n]={}),e[n]):e[n]);return t},Ms=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},wr=function(t){var e=t.parent||Vt,n=t.keyframes?a_(me(t.keyframes)):Qe;if(Ee(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},o_=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},$c=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],s;if(r)for(s=e[r];a&&a[r]>s;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Rs=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},qn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},mi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},l_=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Va=function(t,e,n,i){return t._startAt&&(pe?t._startAt.revert(ms):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},c_=function o(t){return!t||t._ts&&o(t.parent)},Hl=function(t){return t._repeat?tr(t._tTime,t=t.duration()+t._rDelay)*t:0},tr=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},bs=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Is=function(t){return t._end=oe(t._start+(t._tDur/Math.abs(t._ts||t._rts||Nt)||0))},Fs=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=oe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Is(t),n._dirty||mi(n,t)),t},Yc=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=bs(t.rawTime(),e),(!e._dur||Hr(0,e.totalDuration(),n)-e._tTime>Nt)&&e.render(n,!0)),mi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Nt}},hn=function(t,e,n,i){return e.parent&&qn(e),e._start=oe((In(n)?n:n||t!==Vt?Xe(t,n,e):t._time)+e._delay),e._end=oe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),$c(t,e,"_first","_last",t._sort?"_start":0),Ga(e)||(t._recent=e),i||Yc(t,e),t._ts<0&&Fs(t,t._tTime),t},jc=function(t,e){return(Be.ScrollTrigger||lo("scrollTrigger",e))&&Be.ScrollTrigger.create(e,t)},Zc=function(t,e,n,i,r){if(po(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!pe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Gc!==ze.frame)return Hn.push(t),t._lazy=[r,i],1},u_=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},Ga=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},h_=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&u_(t)&&!(!t._initted&&Ga(t))||(t._ts<0||t._dp._ts<0)&&!Ga(t))?0:1,s=t._rDelay,l=0,c,u,h;if(s&&t._repeat&&(l=Hr(0,t._tDur,e),u=tr(l,s),t._yoyo&&u&1&&(a=1-a),u!==tr(t._tTime,s)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||pe||i||t._zTime===Nt||!e&&t._zTime){if(!t._initted&&Zc(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?Nt:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Va(t,e,n,!0),t._onUpdate&&!n&&Ke(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Ke(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&qn(t,1),!n&&!pe&&(Ke(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},d_=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},er=function(t,e,n,i){var r=t._repeat,a=oe(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:oe(a*(r+1)+t._rDelay*r):a,s>0&&!i&&Fs(t,t._tTime=t._tDur*s),t.parent&&Is(t),n||mi(t.parent,t),t},Wl=function(t){return t instanceof we?mi(t):er(t,t._dur)},f_={_start:0,endTime:Rr,totalDuration:Rr},Xe=function o(t,e,n){var i=t.labels,r=t._recent||f_,a=t.duration()>=je?r.endTime(!1):t._dur,s,l,c;return ae(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",s=e.indexOf("="),l==="<"||l===">"?(s>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(s<0?r:n).totalDuration()/100:1)):s<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(s-1)+e.substr(s+1)),c&&n&&(l=l/100*(me(n)?n[0]:n).totalDuration()),s>1?o(t,e.substr(0,s-1),n)+l:a+l)):e==null?a:+e},Tr=function(t,e,n){var i=In(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],s,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(s=a,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=Ee(l.vars.inherit)&&l.parent;a.immediateRender=Ee(s.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new Qt(e[0],a,e[r+1])},Yn=function(t,e){return t||t===0?e(t):e},Hr=function(t,e,n){return n<t?t:n>e?e:n},fe=function(t,e){return!ae(t)||!(e=n_.exec(t))?"":e[1]},p_=function(t,e,n){return Yn(n,function(i){return Hr(t,e,i)})},Ha=[].slice,Kc=function(t,e){return t&&mn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&mn(t[0]))&&!t.nodeType&&t!==qe},m_=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return ae(i)&&!e||Kc(i,1)?(r=n).push.apply(r,Ze(i)):n.push(i)})||n},Ze=function(t,e,n){return jt&&!e&&jt.selector?jt.selector(t):ae(t)&&!n&&(ka||!nr())?Ha.call((e||oo).querySelectorAll(t),0):me(t)?m_(t,n):Kc(t)?Ha.call(t,0):t?[t]:[]},Wa=function(t){return t=Ze(t)[0]||vs("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Ze(e,n.querySelectorAll?n:n===t?vs("Invalid scope")||oo.createElement("div"):t)}},Jc=function(t){return t.sort(function(){return .5-Math.random()})},Qc=function(t){if(Wt(t))return t;var e=mn(t)?t:{each:t},n=gi(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},s=i>0&&i<1,l=isNaN(i)||s,c=e.axis,u=i,h=i;return ae(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(u=i[0],h=i[1]),function(d,m,_){var f=(_||e).length,p=a[f],g,M,v,b,y,A,C,x,T;if(!p){if(T=e.grid==="auto"?0:(e.grid||[1,je])[1],!T){for(C=-je;C<(C=_[T++].getBoundingClientRect().left)&&T<f;);T--}for(p=a[f]=[],g=l?Math.min(T,f)*u-.5:i%T,M=T===je?0:l?f*h/T-.5:i/T|0,C=0,x=je,A=0;A<f;A++)v=A%T-g,b=M-(A/T|0),p[A]=y=c?Math.abs(c==="y"?b:v):Ic(v*v+b*b),y>C&&(C=y),y<x&&(x=y);i==="random"&&Jc(p),p.max=C-x,p.min=x,p.v=f=(parseFloat(e.amount)||parseFloat(e.each)*(T>f?f-1:c?c==="y"?f/T:T:Math.max(T,f/T))||0)*(i==="edges"?-1:1),p.b=f<0?r-f:r,p.u=fe(e.amount||e.each)||0,n=n&&f<0?ou(n):n}return f=(p[d]-p.min)/p.max||0,oe(p.b+(n?n(f):f)*p.v)+p.u}},Xa=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=oe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(In(n)?0:fe(n))}},tu=function(t,e){var n=me(t),i,r;return!n&&mn(t)&&(i=n=t.radius||je,t.values?(t=Ze(t.values),(r=!In(t[0]))&&(i*=i)):t=Xa(t.increment)),Yn(e,n?Wt(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var s=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=je,u=0,h=t.length,d,m;h--;)r?(d=t[h].x-s,m=t[h].y-l,d=d*d+m*m):d=Math.abs(t[h]-s),d<c&&(c=d,u=h);return u=!i||c<=i?t[u]:a,r||u===a||In(a)?u:u+fe(a)}:Xa(t))},eu=function(t,e,n,i){return Yn(me(t)?!e:n===!0?!!(n=0):!i,function(){return me(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},g_=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},__=function(t,e){return function(n){return t(parseFloat(n))+(e||fe(n))}},x_=function(t,e,n){return iu(t,e,0,1,n)},nu=function(t,e,n){return Yn(n,function(i){return t[~~e(i)]})},v_=function o(t,e,n){var i=e-t;return me(t)?nu(t,o(0,t.length),e):Yn(n,function(r){return(i+(r-t)%i)%i+t})},y_=function o(t,e,n){var i=e-t,r=i*2;return me(t)?nu(t,o(0,t.length-1),e):Yn(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},Ir=function(t){for(var e=0,n="",i,r,a,s;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),s=t.charAt(i+7)==="[",r=t.substr(i+7,a-i-7).match(s?Uc:Ua),n+=t.substr(e,i-e)+eu(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},iu=function(t,e,n,i,r){var a=e-t,s=i-n;return Yn(r,function(l){return n+((l-t)/a*s||0)})},M_=function o(t,e,n,i){var r=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!r){var a=ae(t),s={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(me(t)&&!me(e)){for(u=[],h=t.length,d=h-2,c=1;c<h;c++)u.push(o(t[c-1],t[c]));h--,r=function(_){_*=h;var f=Math.min(d,~~_);return u[f](_-f)},n=e}else i||(t=Mi(me(t)?[]:{},t));if(!u){for(l in e)fo.call(s,t,l,"get",e[l]);r=function(_){return _o(_,s)||(a?t.p:t)}}}return Yn(n,r)},Xl=function(t,e,n){var i=t.labels,r=je,a,s,l;for(a in i)s=i[a]-e,s<0==!!n&&s&&r>(s=Math.abs(s))&&(l=a,r=s);return l},Ke=function(t,e,n){var i=t.vars,r=i[e],a=jt,s=t._ctx,l,c,u;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Hn.length&&ys(),s&&(jt=s),u=l?r.apply(c,l):r.call(c),jt=a,u},br=function(t){return qn(t),t.scrollTrigger&&t.scrollTrigger.kill(!!pe),t.progress()<1&&Ke(t,"onInterrupt"),t},Gi,b_=function(t){t=!t.name&&t.default||t;var e=t.name,n=Wt(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Rr,render:_o,add:fo,kill:U_,modifier:N_,rawVars:0},a={targetTest:0,get:0,getSetter:go,aliases:{},register:0};if(nr(),t!==i){if(Fe[e])return;Qe(i,Qe(Ms(t,r),a)),Mi(i.prototype,Mi(r,Ms(t,a))),Fe[i.prop=e]=i,t.targetTest&&(gs.push(i),co[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Vc(e,i),t.register&&t.register(Ve,i,Ce)},zt=255,Sr={aqua:[0,zt,zt],lime:[0,zt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,zt],navy:[0,0,128],white:[zt,zt,zt],olive:[128,128,0],yellow:[zt,zt,0],orange:[zt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[zt,0,0],pink:[zt,192,203],cyan:[0,zt,zt],transparent:[zt,zt,zt,0]},ya=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*zt+.5|0},ru=function(t,e,n){var i=t?In(t)?[t>>16,t>>8&zt,t&zt]:0:Sr.black,r,a,s,l,c,u,h,d,m,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Sr[t])i=Sr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),s=t.charAt(3),t="#"+r+r+a+a+s+s+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&zt,i&zt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&zt,t&zt]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Ua),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=ya(l+1/3,r,a),i[1]=ya(l,r,a),i[2]=ya(l-1/3,r,a);else if(~t.indexOf("="))return i=t.match(zc),n&&i.length<4&&(i[3]=1),i}else i=t.match(Ua)||Sr.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/zt,a=i[1]/zt,s=i[2]/zt,h=Math.max(r,a,s),d=Math.min(r,a,s),u=(h+d)/2,h===d?l=c=0:(m=h-d,c=u>.5?m/(2-h-d):m/(h+d),l=h===r?(a-s)/m+(a<s?6:0):h===a?(s-r)/m+2:(r-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},su=function(t){var e=[],n=[],i=-1;return t.split(Wn).forEach(function(r){var a=r.match(Vi)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},ql=function(t,e,n){var i="",r=(t+i).match(Wn),a=e?"hsla(":"rgba(",s=0,l,c,u,h;if(!r)return t;if(r=r.map(function(d){return(d=ru(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=su(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(Wn,"1").split(Vi),h=c.length-1;s<h;s++)i+=c[s]+(~l.indexOf(s)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=t.split(Wn),h=c.length-1;s<h;s++)i+=c[s]+r[s];return i+c[h]},Wn=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Sr)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),S_=/hsl[a]?\(/,au=function(t){var e=t.join(" "),n;if(Wn.lastIndex=0,Wn.test(e))return n=S_.test(e),t[1]=ql(t[1],n),t[0]=ql(t[0],n,su(t[1])),!0},Fr,ze=function(){var o=Date.now,t=500,e=33,n=o(),i=n,r=1e3/240,a=r,s=[],l,c,u,h,d,m,_=function f(p){var g=o()-i,M=p===!0,v,b,y,A;if(g>t&&(n+=g-e),i+=g,y=i-n,v=y-a,(v>0||M)&&(A=++h.frame,d=y-h.time*1e3,h.time=y=y/1e3,a+=v+(v>=r?4:r-v),b=1),M||(l=c(f)),b)for(m=0;m<s.length;m++)s[m](y,d,A,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){kc&&(!ka&&Fc()&&(qe=ka=window,oo=qe.document||{},Be.gsap=Ve,(qe.gsapVersions||(qe.gsapVersions=[])).push(Ve.version),Bc(xs||qe.GreenSockGlobals||!qe.gsap&&qe||{}),u=qe.requestAnimationFrame),l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},Fr=1,_(2))},sleep:function(){(u?qe.cancelAnimationFrame:clearTimeout)(l),Fr=0,c=Rr},lagSmoothing:function(p,g){t=p||1/0,e=Math.min(g||33,t)},fps:function(p){r=1e3/(p||240),a=h.time*1e3+r},add:function(p,g,M){var v=g?function(b,y,A,C){p(b,y,A,C),h.remove(v)}:p;return h.remove(p),s[M?"unshift":"push"](v),nr(),v},remove:function(p,g){~(g=s.indexOf(p))&&s.splice(g,1)&&m>=g&&m--},_listeners:s},h}(),nr=function(){return!Fr&&ze.wake()},Tt={},w_=/^[\d.\-M][\d.\-,\s]/,T_=/["']/g,E_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,s,l,c;r<a;r++)l=n[r],s=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,s),e[i]=isNaN(c)?c.replace(T_,"").trim():+c,i=l.substr(s+1).trim();return e},A_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},C_=function(t){var e=(t+"").split("("),n=Tt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[E_(e[1])]:A_(t).split(",").map(Xc)):Tt._CE&&w_.test(t)?Tt._CE("",t):n},ou=function(t){return function(e){return 1-t(1-e)}},lu=function o(t,e){for(var n=t._first,i;n;)n instanceof we?o(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?o(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},gi=function(t,e){return t&&(Wt(t)?t:Tt[t]||C_(t))||e},Si=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return Ae(t,function(s){Tt[s]=Be[s]=r,Tt[a=s.toLowerCase()]=n;for(var l in r)Tt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Tt[s+"."+l]=r[l]}),r},cu=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ma=function o(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/Na*(Math.asin(1/i)||0),s=function(u){return u===1?1:i*Math.pow(2,-10*u)*e_((u-a)*r)+1},l=t==="out"?s:t==="in"?function(c){return 1-s(1-c)}:cu(s);return r=Na/r,l.config=function(c,u){return o(t,c,u)},l},ba=function o(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:cu(n);return i.config=function(r){return o(t,r)},i};Ae("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;Si(o+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Tt.Linear.easeNone=Tt.none=Tt.Linear.easeIn;Si("Elastic",Ma("in"),Ma("out"),Ma());(function(o,t){var e=1/t,n=2*e,i=2.5*e,r=function(s){return s<e?o*s*s:s<n?o*Math.pow(s-1.5/t,2)+.75:s<i?o*(s-=2.25/t)*s+.9375:o*Math.pow(s-2.625/t,2)+.984375};Si("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Si("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});Si("Circ",function(o){return-(Ic(1-o*o)-1)});Si("Sine",function(o){return o===1?1:-t_(o*Jg)+1});Si("Back",ba("in"),ba("out"),ba());Tt.SteppedEase=Tt.steps=Be.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-Nt;return function(s){return((i*Hr(0,a,s)|0)+r)*n}}};Qi.ease=Tt["quad.out"];Ae("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return uo+=o+","+o+"Params,"});var uu=function(t,e){this.id=Qg++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Hc,this.set=e?e.getSetter:go},ir=function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,er(this,+e.duration,1,1),this.data=e.data,jt&&(this._ctx=jt,jt.data.push(this)),Fr||ze.wake()}var t=o.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,er(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(nr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Fs(this,n),!r._dp||r.parent||Yc(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&hn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Nt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Wc(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Hl(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Hl(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?tr(this._tTime,r)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Nt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?bs(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Nt?0:this._rts,this.totalTime(Hr(-this._delay,this._tDur,i),!0),Is(this),l_(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(nr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Nt&&(this._tTime-=Nt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&hn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Ee(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?bs(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=r_);var i=pe;return pe=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),pe=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Wl(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Wl(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Xe(this,n),Ee(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ee(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Nt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Nt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Nt)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(r){var a=Wt(n)?n:qc,s=function(){var c=i.then;i.then=null,Wt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},t.kill=function(){br(this)},o}();Qe(ir.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Nt,_prom:0,_ps:!1,_rts:1});var we=function(o){Rc(t,o);function t(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Ee(n.sortChildren),Vt&&hn(n.parent||Vt,Tn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&jc(Tn(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return Tr(0,arguments,this),this},e.from=function(i,r,a){return Tr(1,arguments,this),this},e.fromTo=function(i,r,a,s){return Tr(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,wr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Qt(i,r,Xe(this,a),1),this},e.call=function(i,r,a){return hn(this,Qt.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,s,l,c,u){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Qt(i,a,Xe(this,l)),this},e.staggerFrom=function(i,r,a,s,l,c,u){return a.runBackwards=1,wr(a).immediateRender=Ee(a.immediateRender),this.staggerTo(i,r,a,s,l,c,u)},e.staggerFromTo=function(i,r,a,s,l,c,u,h){return s.startAt=a,wr(s).immediateRender=Ee(s.immediateRender),this.staggerTo(i,r,s,l,c,u,h)},e.render=function(i,r,a){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:oe(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,m,_,f,p,g,M,v,b,y,A,C;if(this!==Vt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(s!==this._time&&c&&(u+=this._time-s,i+=this._time-s),d=u,b=this._start,v=this._ts,g=!v,h&&(c||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(d=oe(u%p),u===l?(f=this._repeat,d=c):(f=~~(u/p),f&&f===u/p&&(d=c,f--),d>c&&(d=c)),y=tr(this._tTime,p),!s&&this._tTime&&y!==f&&(y=f),A&&f&1&&(d=c-d,C=1),f!==y&&!this._lock){var x=A&&y&1,T=x===(A&&f&1);if(f<y&&(x=!x),s=x?0:c,this._lock=1,this.render(s||(C?0:oe(f*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Ke(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),s&&s!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,s=x?c:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;lu(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=d_(this,oe(s),oe(d)),M&&(u-=d-(d=M._start))),this._tTime=u,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&d&&!r&&(Ke(this,"onStart"),this._tTime!==u))return this;if(d>=s&&i>=0)for(m=this._first;m;){if(_=m._next,(m._act||d>=m._start)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,r,a),d!==this._time||!this._ts&&!g){M=0,_&&(u+=this._zTime=-Nt);break}}m=_}else{m=this._last;for(var D=i<0?i:d;m;){if(_=m._prev,(m._act||D<=m._end)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(D-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(D-m._start)*m._ts,r,a||pe&&(m._initted||m._startAt)),d!==this._time||!this._ts&&!g){M=0,_&&(u+=this._zTime=D?-Nt:Nt);break}}m=_}}if(M&&!r&&(this.pause(),M.render(d>=s?0:-Nt)._zTime=d>=s?1:-1,this._ts))return this._start=b,Is(this),this.render(i,r,a);this._onUpdate&&!r&&Ke(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&s)&&(b===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&qn(this,1),!r&&!(i<0&&!s)&&(u||s||!l)&&(Ke(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(In(r)||(r=Xe(this,r,i)),!(i instanceof ir)){if(me(i))return i.forEach(function(s){return a.add(s,r)}),this;if(ae(i))return this.addLabel(i,r);if(Wt(i))i=Qt.delayedCall(0,i);else return this}return this!==i?hn(this,i,r):this},e.getChildren=function(i,r,a,s){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-je);for(var l=[],c=this._first;c;)c._start>=s&&(c instanceof Qt?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return ae(i)?this.removeLabel(i):Wt(i)?this.killTweensOf(i):(Rs(this,i),i===this._recent&&(this._recent=this._last),mi(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=oe(ze.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Xe(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var s=Qt.delayedCall(0,r||Rr,a);return s.data="isPause",this._hasPause=1,hn(this,s,Xe(this,i))},e.removePause=function(i){var r=this._first;for(i=Xe(this,i);r;)r._start===i&&r.data==="isPause"&&qn(r),r=r._next},e.killTweensOf=function(i,r,a){for(var s=this.getTweensOf(i,a),l=s.length;l--;)kn!==s[l]&&s[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],s=Ze(i),l=this._first,c=In(r),u;l;)l instanceof Qt?s_(l._targets,s)&&(c?(!kn||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(s,r)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,s=Xe(a,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,m,_=Qt.to(a,Qe({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale())||Nt,onStart:function(){if(a.pause(),!m){var p=r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&er(_,p,0,1).render(_._time,!0,!0),m=1}u&&u.apply(_,h||[])}},r));return d?_.render(0):_},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,Qe({startAt:{time:Xe(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Xl(this,Xe(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Xl(this,Xe(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Nt)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var s=this._first,l=this.labels,c;s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return mi(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return o.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),mi(this)},e.totalDuration=function(i){var r=0,a=this,s=a._last,l=je,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;s;)c=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>l&&a._sort&&s._ts&&!a._lock?(a._lock=1,hn(a,s,u-s._delay,1)._lock=0):l=u,u<0&&s._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=c;er(a,a===Vt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Vt._ts&&(Wc(Vt,bs(i,Vt)),Gc=ze.frame),ze.frame>=Vl){Vl+=ke.autoSleep||120;var r=Vt._first;if((!r||!r._ts)&&ke.autoSleep&&ze._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ze.sleep()}}},t}(ir);Qe(we.prototype,{_lock:0,_hasPause:0,_forcing:0});var L_=function(t,e,n,i,r,a,s){var l=new Ce(this._pt,t,e,0,1,gu,null,r),c=0,u=0,h,d,m,_,f,p,g,M;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Ir(i)),a&&(M=[n,i],a(M,t,e),n=M[0],i=M[1]),d=n.match(xa)||[];h=xa.exec(i);)_=h[0],f=i.substring(c,h.index),m?m=(m+1)%5:f.substr(-5)==="rgba("&&(m=1),_!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:f||u===1?f:",",s:p,c:_.charAt(1)==="="?qi(p,_)-p:parseFloat(_)-p,m:m&&m<4?Math.round:0},c=xa.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=s,(Nc.test(i)||g)&&(l.e=0),this._pt=l,l},fo=function(t,e,n,i,r,a,s,l,c,u){Wt(i)&&(i=i(r||0,t,a));var h=t[e],d=n!=="get"?n:Wt(h)?c?t[e.indexOf("set")||!Wt(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,m=Wt(h)?c?F_:pu:mo,_;if(ae(i)&&(~i.indexOf("random(")&&(i=Ir(i)),i.charAt(1)==="="&&(_=qi(d,i)+(fe(d)||0),(_||_===0)&&(i=_))),!u||d!==i||qa)return!isNaN(d*i)&&i!==""?(_=new Ce(this._pt,t,e,+d||0,i-(d||0),typeof h=="boolean"?z_:mu,0,m),c&&(_.fp=c),s&&_.modifier(s,this,t),this._pt=_):(!h&&!(e in t)&&lo(e,i),L_.call(this,t,e,d,i,m,l||ke.stringFilter,c))},D_=function(t,e,n,i,r){if(Wt(t)&&(t=Er(t,r,e,n,i)),!mn(t)||t.style&&t.nodeType||me(t)||Oc(t))return ae(t)?Er(t,r,e,n,i):t;var a={},s;for(s in t)a[s]=Er(t[s],r,e,n,i);return a},hu=function(t,e,n,i,r,a){var s,l,c,u;if(Fe[t]&&(s=new Fe[t]).init(r,s.rawVars?e[t]:D_(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Ce(n._pt,r,t,0,1,s.render,s,0,s.priority),n!==Gi))for(c=n._ptLookup[n._targets.indexOf(r)],u=s._props.length;u--;)c[s._props[u]]=l;return s},kn,qa,po=function o(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,s=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,d=i.runBackwards,m=i.yoyoEase,_=i.keyframes,f=i.autoRevert,p=t._dur,g=t._startAt,M=t._targets,v=t.parent,b=v&&v.data==="nested"?v.vars.targets:M,y=t._overwrite==="auto"&&!so,A=t.timeline,C,x,T,D,O,j,R,P,N,Y,$,k,tt;if(A&&(!_||!r)&&(r="none"),t._ease=gi(r,Qi.ease),t._yEase=m?ou(gi(m===!0?r:m,Qi.ease)):0,m&&t._yoyo&&!t._repeat&&(m=t._yEase,t._yEase=t._ease,t._ease=m),t._from=!A&&!!i.runBackwards,!A||_&&!i.stagger){if(P=M[0]?pi(M[0]).harness:0,k=P&&i[P.prop],C=Ms(i,co),g&&(g._zTime<0&&g.progress(1),e<0&&d&&s&&!f?g.render(-1,!0):g.revert(d&&p?ms:i_),g._lazy=0),a){if(qn(t._startAt=Qt.set(M,Qe({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!g&&Ee(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(pe||!s&&!f)&&t._startAt.revert(ms),s&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(d&&p&&!g){if(e&&(s=!1),T=Qe({overwrite:!1,data:"isFromStart",lazy:s&&!g&&Ee(l),immediateRender:s,stagger:0,parent:v},C),k&&(T[P.prop]=k),qn(t._startAt=Qt.set(M,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(pe?t._startAt.revert(ms):t._startAt.render(-1,!0)),t._zTime=e,!s)o(t._startAt,Nt,Nt);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&Ee(l)||l&&!p,x=0;x<M.length;x++){if(O=M[x],R=O._gsap||ho(M)[x]._gsap,t._ptLookup[x]=Y={},Ba[R.id]&&Hn.length&&ys(),$=b===M?x:b.indexOf(O),P&&(N=new P).init(O,k||C,t,$,b)!==!1&&(t._pt=D=new Ce(t._pt,O,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(Z){Y[Z]=D}),N.priority&&(j=1)),!P||k)for(T in C)Fe[T]&&(N=hu(T,C,t,$,O,b))?N.priority&&(j=1):Y[T]=D=fo.call(t,O,T,"get",C[T],$,b,0,i.stringFilter);t._op&&t._op[x]&&t.kill(O,t._op[x]),y&&t._pt&&(kn=t,Vt.killTweensOf(O,Y,t.globalTime(e)),tt=!t.parent,kn=0),t._pt&&l&&(Ba[R.id]=1)}j&&_u(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!tt,_&&e<=0&&A.render(je,!0,!0)},P_=function(t,e,n,i,r,a,s){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,u,h,d;if(!l)for(l=t._ptCache[e]=[],h=t._ptLookup,d=t._targets.length;d--;){if(c=h[d][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return qa=1,t.vars[e]="+=0",po(t,s),qa=0,1;l.push(c)}for(d=l.length;d--;)u=l[d],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=Xt(n)+fe(u.e)),u.b&&(u.b=c.s+fe(u.b))},R_=function(t,e){var n=t[0]?pi(t[0]).harness:0,i=n&&n.aliases,r,a,s,l;if(!i)return e;r=Mi({},e);for(a in i)if(a in r)for(l=i[a].split(","),s=l.length;s--;)r[l[s]]=r[a];return r},I_=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,s;if(me(e))s=n[t]||(n[t]=[]),e.forEach(function(l,c){return s.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)s=n[a]||(n[a]=[]),a==="ease"||s.push({t:parseFloat(t),v:e[a],e:r})},Er=function(t,e,n,i,r){return Wt(t)?t.call(e,n,i,r):ae(t)&&~t.indexOf("random(")?Ir(t):t},du=uo+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",fu={};Ae(du+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return fu[o]=1});var Qt=function(o){Rc(t,o);function t(n,i,r,a){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=o.call(this,a?i:wr(i))||this;var l=s.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,m=l.overwrite,_=l.keyframes,f=l.defaults,p=l.scrollTrigger,g=l.yoyoEase,M=i.parent||Vt,v=(me(n)||Oc(n)?In(n[0]):"length"in i)?[n]:Ze(n),b,y,A,C,x,T,D,O;if(s._targets=v.length?ho(v):vs("GSAP target "+n+" not found. https://greensock.com",!ke.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,_||d||ds(c)||ds(u)){if(i=s.vars,b=s.timeline=new we({data:"nested",defaults:f||{},targets:M&&M.data==="nested"?M.vars.targets:v}),b.kill(),b.parent=b._dp=Tn(s),b._start=0,d||ds(c)||ds(u)){if(C=v.length,D=d&&Qc(d),mn(d))for(x in d)~du.indexOf(x)&&(O||(O={}),O[x]=d[x]);for(y=0;y<C;y++)A=Ms(i,fu),A.stagger=0,g&&(A.yoyoEase=g),O&&Mi(A,O),T=v[y],A.duration=+Er(c,Tn(s),y,T,v),A.delay=(+Er(u,Tn(s),y,T,v)||0)-s._delay,!d&&C===1&&A.delay&&(s._delay=u=A.delay,s._start+=u,A.delay=0),b.to(T,A,D?D(y,T,v):0),b._ease=Tt.none;b.duration()?c=u=0:s.timeline=0}else if(_){wr(Qe(b.vars.defaults,{ease:"none"})),b._ease=gi(_.ease||i.ease||"none");var j=0,R,P,N;if(me(_))_.forEach(function(Y){return b.to(v,Y,">")}),b.duration();else{A={};for(x in _)x==="ease"||x==="easeEach"||I_(x,_[x],A,_.easeEach);for(x in A)for(R=A[x].sort(function(Y,$){return Y.t-$.t}),j=0,y=0;y<R.length;y++)P=R[y],N={ease:P.e,duration:(P.t-(y?R[y-1].t:0))/100*c},N[x]=P.v,b.to(v,N,j),j+=N.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||s.duration(c=b.duration())}else s.timeline=0;return m===!0&&!so&&(kn=Tn(s),Vt.killTweensOf(v),kn=0),hn(M,Tn(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(h||!c&&!_&&s._start===oe(M._time)&&Ee(h)&&c_(Tn(s))&&M.data!=="nested")&&(s._tTime=-Nt,s.render(Math.max(0,-u)||0)),p&&jc(Tn(s),p),s}var e=t.prototype;return e.render=function(i,r,a){var s=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Nt&&!u?l:i<Nt?0:i,d,m,_,f,p,g,M,v,b;if(!c)h_(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,v=this.timeline,this._repeat){if(f=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(f*100+i,r,a);if(d=oe(h%f),h===l?(_=this._repeat,d=c):(_=~~(h/f),_&&_===h/f&&(d=c,_--),d>c&&(d=c)),g=this._yoyo&&_&1,g&&(b=this._yEase,d=c-d),p=tr(this._tTime,f),d===s&&!a&&this._initted)return this._tTime=h,this;_!==p&&(v&&this._yEase&&lu(v,g),this.vars.repeatRefresh&&!g&&!this._lock&&(this._lock=a=1,this.render(oe(f*_),!0).invalidate()._lock=0))}if(!this._initted){if(Zc(this,u?i:d,a,r,h))return this._tTime=0,this;if(s!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(b||this._ease)(d/c),this._from&&(this.ratio=M=1-M),d&&!s&&!r&&(Ke(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(M,m.d),m=m._next;v&&v.render(i<0?i:!d&&g?-Nt:v._dur*v._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Va(this,i,r,a),Ke(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&Ke(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Va(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&qn(this,1),!r&&!(u&&!s)&&(h||s||g)&&(Ke(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,s){Fr||ze.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||po(this,l),c=this._ease(l/this._dur),P_(this,i,r,a,s,c,l)?this.resetTo(i,r,a,s):(Fs(this,0),this.parent||$c(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?br(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,kn&&kn.vars.overwrite!==!0)._first||br(this),this.parent&&a!==this.timeline.totalDuration()&&er(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,l=i?Ze(i):s,c=this._ptLookup,u=this._pt,h,d,m,_,f,p,g;if((!r||r==="all")&&o_(s,l))return r==="all"&&(this._pt=0),br(this);for(h=this._op=this._op||[],r!=="all"&&(ae(r)&&(f={},Ae(r,function(M){return f[M]=1}),r=f),r=R_(s,r)),g=s.length;g--;)if(~l.indexOf(s[g])){d=c[g],r==="all"?(h[g]=r,_=d,m={}):(m=h[g]=h[g]||{},_=r);for(f in _)p=d&&d[f],p&&((!("kill"in p.d)||p.d.kill(f)===!0)&&Rs(this,p,"_pt"),delete d[f]),m!=="all"&&(m[f]=1)}return this._initted&&!this._pt&&u&&br(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Tr(1,arguments)},t.delayedCall=function(i,r,a,s){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},t.fromTo=function(i,r,a){return Tr(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return Vt.killTweensOf(i,r,a)},t}(ir);Qe(Qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ae("staggerTo,staggerFrom,staggerFromTo",function(o){Qt[o]=function(){var t=new we,e=Ha.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var mo=function(t,e,n){return t[e]=n},pu=function(t,e,n){return t[e](n)},F_=function(t,e,n,i){return t[e](i.fp,n)},O_=function(t,e,n){return t.setAttribute(e,n)},go=function(t,e){return Wt(t[e])?pu:ao(t[e])&&t.setAttribute?O_:mo},mu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},z_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},gu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},_o=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},N_=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},U_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Rs(this,e,"_pt"):e.dep||(n=1),e=i;return!n},k_=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},_u=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},Ce=function(){function o(e,n,i,r,a,s,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=s||mu,this.d=l||this,this.set=c||mo,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=k_,this.m=n,this.mt=r,this.tween=i},o}();Ae(uo+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return co[o]=1});Be.TweenMax=Be.TweenLite=Qt;Be.TimelineLite=Be.TimelineMax=we;Vt=new we({sortChildren:!1,defaults:Qi,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ke.stringFilter=au;var rr=[],_s={},B_=[],$l=0,Sa=function(t){return(_s[t]||B_).map(function(e){return e()})},$a=function(){var t=Date.now(),e=[];t-$l>2&&(Sa("matchMediaInit"),rr.forEach(function(n){var i=n.queries,r=n.conditions,a,s,l,c;for(s in i)a=qe.matchMedia(i[s]).matches,a&&(l=1),a!==r[s]&&(r[s]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Sa("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),$l=t,Sa("matchMedia"))},xu=function(){function o(e,n){this.selector=n&&Wa(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=o.prototype;return t.add=function(n,i,r){Wt(n)&&(r=i,i=n,n=Wt);var a=this,s=function(){var c=jt,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=Wa(r)),jt=a,h=i.apply(a,arguments),Wt(h)&&a._r.push(h),jt=c,a.selector=u,a.isReverted=!1,h};return a.last=s,n===Wt?s(a):n?a[n]=s:s},t.ignore=function(n){var i=jt;jt=null,n(this),jt=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof Qt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof ir)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var s=rr.indexOf(this);~s&&rr.splice(s,1)}},t.revert=function(n){this.kill(n||{})},o}(),V_=function(){function o(e){this.contexts=[],this.scope=e}var t=o.prototype;return t.add=function(n,i,r){mn(n)||(n={matches:n});var a=new xu(0,r||this.scope),s=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=qe.matchMedia(n[c]),l&&(rr.indexOf(a)<0&&rr.push(a),(s[c]=l.matches)&&(u=1),l.addListener?l.addListener($a):l.addEventListener("change",$a)));return u&&i(a),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),Ss={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return b_(i)})},timeline:function(t){return new we(t)},getTweensOf:function(t,e){return Vt.getTweensOf(t,e)},getProperty:function(t,e,n,i){ae(t)&&(t=Ze(t)[0]);var r=pi(t||{}).get,a=n?qc:Xc;return n==="native"&&(n=""),t&&(e?a((Fe[e]&&Fe[e].get||r)(t,e,n,i)):function(s,l,c){return a((Fe[s]&&Fe[s].get||r)(t,s,l,c))})},quickSetter:function(t,e,n){if(t=Ze(t),t.length>1){var i=t.map(function(u){return Ve.quickSetter(u,e,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}t=t[0]||{};var a=Fe[e],s=pi(t),l=s.harness&&(s.harness.aliases||{})[e]||e,c=a?function(u){var h=new a;Gi._pt=0,h.init(t,n?u+n:u,Gi,0,[t]),h.render(1,h),Gi._pt&&_o(1,Gi)}:s.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,s,1)}},quickTo:function(t,e,n){var i,r=Ve.to(t,Mi((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(e,l,c,u)};return a.tween=r,a},isTweening:function(t){return Vt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=gi(t.ease,Qi.ease)),Gl(Qi,t||{})},config:function(t){return Gl(ke,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!Fe[s]&&!Be[s]&&vs(e+" effect requires "+s+" plugin.")}),va[e]=function(s,l,c){return n(Ze(s),Qe(l||{},r),c)},a&&(we.prototype[e]=function(s,l,c){return this.add(va[e](s,mn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Tt[t]=gi(e)},parseEase:function(t,e){return arguments.length?gi(t,e):Tt},getById:function(t){return Vt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new we(t),i,r;for(n.smoothChildTiming=Ee(t.smoothChildTiming),Vt.remove(n),n._dp=0,n._time=n._tTime=Vt._time,i=Vt._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Qt&&i.vars.onComplete===i._targets[0]))&&hn(n,i,i._start-i._delay),i=r;return hn(Vt,n,0),n},context:function(t,e){return t?new xu(t,e):jt},matchMedia:function(t){return new V_(t)},matchMediaRefresh:function(){return rr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||$a()},addEventListener:function(t,e){var n=_s[t]||(_s[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=_s[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:v_,wrapYoyo:y_,distribute:Qc,random:eu,snap:tu,normalize:x_,getUnit:fe,clamp:p_,splitColor:ru,toArray:Ze,selector:Wa,mapRange:iu,pipe:g_,unitize:__,interpolate:M_,shuffle:Jc},install:Bc,effects:va,ticker:ze,updateRoot:we.updateRoot,plugins:Fe,globalTimeline:Vt,core:{PropTween:Ce,globals:Vc,Tween:Qt,Timeline:we,Animation:ir,getCache:pi,_removeLinkedListItem:Rs,reverting:function(){return pe},context:function(t){return t&&jt&&(jt.data.push(t),t._ctx=jt),jt},suppressOverwrites:function(t){return so=t}}};Ae("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Ss[o]=Qt[o]});ze.add(we.updateRoot);Gi=Ss.to({},{duration:0});var G_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},H_=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=G_(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},wa=function(t,e){return{name:t,rawVars:1,init:function(i,r,a){a._onInit=function(s){var l,c;if(ae(r)&&(l={},Ae(r,function(u){return l[u]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}H_(s,r)}}}},Ve=Ss.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,s,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",s=this.add(t,"setAttribute",(l||0)+"",e[a],i,r,0,0,a),s.op=a,s.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)pe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},wa("roundProps",Xa),wa("modifiers"),wa("snap",tu))||Ss;Qt.version=we.version=Ve.version="3.11.4";kc=1;Fc()&&nr();Tt.Power0;Tt.Power1;Tt.Power2;Tt.Power3;Tt.Power4;Tt.Linear;Tt.Quad;Tt.Cubic;Tt.Quart;Tt.Quint;Tt.Strong;Tt.Elastic;Tt.Back;Tt.SteppedEase;Tt.Bounce;Tt.Sine;Tt.Expo;Tt.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Yl,Bn,$i,xo,ui,jl,vo,W_=function(){return typeof window<"u"},Fn={},ai=180/Math.PI,Yi=Math.PI/180,Ui=Math.atan2,Zl=1e8,yo=/([A-Z])/g,X_=/(left|right|width|margin|padding|x)/i,q_=/[\s,\(]\S/,Dn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ya=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},$_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Y_=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},j_=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},vu=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},yu=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Z_=function(t,e,n){return t.style[e]=n},K_=function(t,e,n){return t.style.setProperty(e,n)},J_=function(t,e,n){return t._gsap[e]=n},Q_=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},t0=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},e0=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},Ht="transform",ln=Ht+"Origin",n0=function(t,e){var n=this,i=this.target,r=i.style;if(t in Fn){if(this.tfm=this.tfm||{},t!=="transform"&&(t=Dn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=En(i,a)}):this.tfm[t]=i._gsap.x?i._gsap[t]:En(i,t)),this.props.indexOf(Ht)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ln,e,"")),t=Ht}(r||e)&&this.props.push(t,e,r[t])},Mu=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},i0=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].replace(yo,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=vo(),r&&!r.isStart&&!n[Ht]&&(Mu(n),i.uncache=1)}},bu=function(t,e){var n={target:t,props:[],revert:i0,save:n0};return e&&e.split(",").forEach(function(i){return n.save(i)}),n},Su,ja=function(t,e){var n=Bn.createElementNS?Bn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Bn.createElement(t);return n.style?n:Bn.createElement(t)},pn=function o(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(yo,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&o(t,sr(e)||e,1)||""},Kl="O,Moz,ms,Ms,Webkit".split(","),sr=function(t,e,n){var i=e||ui,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Kl[a]+t in r););return a<0?null:(a===3?"ms":a>=0?Kl[a]:"")+t},Za=function(){W_()&&window.document&&(Yl=window,Bn=Yl.document,$i=Bn.documentElement,ui=ja("div")||{style:{}},ja("div"),Ht=sr(Ht),ln=Ht+"Origin",ui.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Su=!!sr("perspective"),vo=Ve.core.reverting,xo=1)},Ta=function o(t){var e=ja("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if($i.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),$i.removeChild(e),this.style.cssText=r,a},Jl=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},wu=function(t){var e;try{e=t.getBBox()}catch{e=Ta.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Ta||(e=Ta.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Jl(t,["x","cx","x1"])||0,y:+Jl(t,["y","cy","y1"])||0,width:0,height:0}:e},Tu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&wu(t))},Or=function(t,e){if(e){var n=t.style;e in Fn&&e!==ln&&(e=Ht),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(yo,"-$1").toLowerCase())):n.removeAttribute(e)}},Vn=function(t,e,n,i,r,a){var s=new Ce(t._pt,e,n,0,1,a?yu:vu);return t._pt=s,s.b=i,s.e=r,t._props.push(n),s},Ql={deg:1,rad:1,turn:1},r0={grid:1,flex:1},$n=function o(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",s=ui.style,l=X_.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",m=i==="%",_,f,p,g;return i===a||!r||Ql[i]||Ql[a]?r:(a!=="px"&&!d&&(r=o(t,e,n,"px")),g=t.getCTM&&Tu(t),(m||a==="%")&&(Fn[e]||~e.indexOf("adius"))?(_=g?t.getBBox()[l?"width":"height"]:t[u],Xt(m?r/_*h:r/100*_)):(s[l?"width":"height"]=h+(d?a:i),f=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(f=(t.ownerSVGElement||{}).parentNode),(!f||f===Bn||!f.appendChild)&&(f=Bn.body),p=f._gsap,p&&m&&p.width&&l&&p.time===ze.time&&!p.uncache?Xt(r/p.width*h):((m||a==="%")&&!r0[pn(f,"display")]&&(s.position=pn(t,"position")),f===t&&(s.position="static"),f.appendChild(ui),_=ui[u],f.removeChild(ui),s.position="absolute",l&&m&&(p=pi(f),p.time=ze.time,p.width=f[u]),Xt(d?_*r/h:_&&r?h/_*r:0))))},En=function(t,e,n,i){var r;return xo||Za(),e in Dn&&e!=="transform"&&(e=Dn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Fn[e]&&e!=="transform"?(r=Nr(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Ts(pn(t,ln))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ws[e]&&ws[e](t,e,n)||pn(t,e)||Hc(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?$n(t,e,r,n)+n:r},s0=function(t,e,n,i){if(!n||n==="none"){var r=sr(e,t,1),a=r&&pn(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=pn(t,"borderTopColor"))}var s=new Ce(this._pt,t.style,e,0,1,gu),l=0,c=0,u,h,d,m,_,f,p,g,M,v,b,y;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=pn(t,e)||i,t.style[e]=n),u=[n,i],au(u),n=u[0],i=u[1],d=n.match(Vi)||[],y=i.match(Vi)||[],y.length){for(;h=Vi.exec(i);)p=h[0],M=i.substring(l,h.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),p!==(f=d[c++]||"")&&(m=parseFloat(f)||0,b=f.substr((m+"").length),p.charAt(1)==="="&&(p=qi(m,p)+b),g=parseFloat(p),v=p.substr((g+"").length),l=Vi.lastIndex-v.length,v||(v=v||ke.units[e]||b,l===i.length&&(i+=v,s.e+=v)),b!==v&&(m=$n(t,e,f,v)||0),s._pt={_next:s._pt,p:M||c===1?M:",",s:m,c:g-m,m:_&&_<4||e==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=e==="display"&&i==="none"?yu:vu;return Nc.test(i)&&(s.e=0),this._pt=s,s},tc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},a0=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=tc[n]||n,e[1]=tc[i]||i,e.join(" ")},o0=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,s,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)s=r[c],Fn[s]&&(l=1,s=s==="transformOrigin"?ln:Ht),Or(n,s);l&&(Or(n,Ht),a&&(a.svg&&n.removeAttribute("transform"),Nr(n,1),a.uncache=1,Mu(i)))}},ws={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new Ce(t._pt,e,n,0,0,o0);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},zr=[1,0,0,1,0,0],Eu={},Au=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ec=function(t){var e=pn(t,Ht);return Au(e)?zr:e.substr(7).match(zc).map(Xt)},Mo=function(t,e){var n=t._gsap||pi(t),i=t.style,r=ec(t),a,s,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?zr:r):(r===zr&&!t.offsetParent&&t!==$i&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,s=t.nextElementSibling,$i.appendChild(t)),r=ec(t),l?i.display=l:Or(t,"display"),c&&(s?a.insertBefore(t,s):a?a.appendChild(t):$i.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ka=function(t,e,n,i,r,a){var s=t._gsap,l=r||Mo(t,!0),c=s.xOrigin||0,u=s.yOrigin||0,h=s.xOffset||0,d=s.yOffset||0,m=l[0],_=l[1],f=l[2],p=l[3],g=l[4],M=l[5],v=e.split(" "),b=parseFloat(v[0])||0,y=parseFloat(v[1])||0,A,C,x,T;n?l!==zr&&(C=m*p-_*f)&&(x=b*(p/C)+y*(-f/C)+(f*M-p*g)/C,T=b*(-_/C)+y*(m/C)-(m*M-_*g)/C,b=x,y=T):(A=wu(t),b=A.x+(~v[0].indexOf("%")?b/100*A.width:b),y=A.y+(~(v[1]||v[0]).indexOf("%")?y/100*A.height:y)),i||i!==!1&&s.smooth?(g=b-c,M=y-u,s.xOffset=h+(g*m+M*f)-g,s.yOffset=d+(g*_+M*p)-M):s.xOffset=s.yOffset=0,s.xOrigin=b,s.yOrigin=y,s.smooth=!!i,s.origin=e,s.originIsAbsolute=!!n,t.style[ln]="0px 0px",a&&(Vn(a,s,"xOrigin",c,b),Vn(a,s,"yOrigin",u,y),Vn(a,s,"xOffset",h,s.xOffset),Vn(a,s,"yOffset",d,s.yOffset)),t.setAttribute("data-svg-origin",b+" "+y)},Nr=function(t,e){var n=t._gsap||new uu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",s="deg",l=getComputedStyle(t),c=pn(t,ln)||"0",u,h,d,m,_,f,p,g,M,v,b,y,A,C,x,T,D,O,j,R,P,N,Y,$,k,tt,Z,U,B,K,J,it;return u=h=d=f=p=g=M=v=b=0,m=_=1,n.svg=!!(t.getCTM&&Tu(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ht]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ht]!=="none"?l[Ht]:"")),i.scale=i.rotate=i.translate="none"),C=Mo(t,n.svg),n.svg&&(n.uncache?(k=t.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",$=""):$=!e&&t.getAttribute("data-svg-origin"),Ka(t,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,C)),y=n.xOrigin||0,A=n.yOrigin||0,C!==zr&&(O=C[0],j=C[1],R=C[2],P=C[3],u=N=C[4],h=Y=C[5],C.length===6?(m=Math.sqrt(O*O+j*j),_=Math.sqrt(P*P+R*R),f=O||j?Ui(j,O)*ai:0,M=R||P?Ui(R,P)*ai+f:0,M&&(_*=Math.abs(Math.cos(M*Yi))),n.svg&&(u-=y-(y*O+A*R),h-=A-(y*j+A*P))):(it=C[6],K=C[7],Z=C[8],U=C[9],B=C[10],J=C[11],u=C[12],h=C[13],d=C[14],x=Ui(it,B),p=x*ai,x&&(T=Math.cos(-x),D=Math.sin(-x),$=N*T+Z*D,k=Y*T+U*D,tt=it*T+B*D,Z=N*-D+Z*T,U=Y*-D+U*T,B=it*-D+B*T,J=K*-D+J*T,N=$,Y=k,it=tt),x=Ui(-R,B),g=x*ai,x&&(T=Math.cos(-x),D=Math.sin(-x),$=O*T-Z*D,k=j*T-U*D,tt=R*T-B*D,J=P*D+J*T,O=$,j=k,R=tt),x=Ui(j,O),f=x*ai,x&&(T=Math.cos(x),D=Math.sin(x),$=O*T+j*D,k=N*T+Y*D,j=j*T-O*D,Y=Y*T-N*D,O=$,N=k),p&&Math.abs(p)+Math.abs(f)>359.9&&(p=f=0,g=180-g),m=Xt(Math.sqrt(O*O+j*j+R*R)),_=Xt(Math.sqrt(Y*Y+it*it)),x=Ui(N,Y),M=Math.abs(x)>2e-4?x*ai:0,b=J?1/(J<0?-J:J):0),n.svg&&($=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Au(pn(t,Ht)),$&&t.setAttribute("transform",$))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(m*=-1,M+=f<=0?180:-180,f+=f<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Xt(m),n.scaleY=Xt(_),n.rotation=Xt(f)+s,n.rotationX=Xt(p)+s,n.rotationY=Xt(g)+s,n.skewX=M+s,n.skewY=v+s,n.transformPerspective=b+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[ln]=Ts(c)),n.xOffset=n.yOffset=0,n.force3D=ke.force3D,n.renderTransform=n.svg?c0:Su?Cu:l0,n.uncache=0,n},Ts=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ea=function(t,e,n){var i=fe(e);return Xt(parseFloat(e)+parseFloat($n(t,"x",n+"px",i)))+i},l0=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Cu(t,e)},ni="0deg",vr="0px",ii=") ",Cu=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,m=n.skewY,_=n.scaleX,f=n.scaleY,p=n.transformPerspective,g=n.force3D,M=n.target,v=n.zOrigin,b="",y=g==="auto"&&t&&t!==1||g===!0;if(v&&(h!==ni||u!==ni)){var A=parseFloat(u)*Yi,C=Math.sin(A),x=Math.cos(A),T;A=parseFloat(h)*Yi,T=Math.cos(A),a=Ea(M,a,C*T*-v),s=Ea(M,s,-Math.sin(A)*-v),l=Ea(M,l,x*T*-v+v)}p!==vr&&(b+="perspective("+p+ii),(i||r)&&(b+="translate("+i+"%, "+r+"%) "),(y||a!==vr||s!==vr||l!==vr)&&(b+=l!==vr||y?"translate3d("+a+", "+s+", "+l+") ":"translate("+a+", "+s+ii),c!==ni&&(b+="rotate("+c+ii),u!==ni&&(b+="rotateY("+u+ii),h!==ni&&(b+="rotateX("+h+ii),(d!==ni||m!==ni)&&(b+="skew("+d+", "+m+ii),(_!==1||f!==1)&&(b+="scale("+_+", "+f+ii),M.style[Ht]=b||"translate(0, 0)"},c0=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,m=n.target,_=n.xOrigin,f=n.yOrigin,p=n.xOffset,g=n.yOffset,M=n.forceCSS,v=parseFloat(a),b=parseFloat(s),y,A,C,x,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Yi,c*=Yi,y=Math.cos(l)*h,A=Math.sin(l)*h,C=Math.sin(l-c)*-d,x=Math.cos(l-c)*d,c&&(u*=Yi,T=Math.tan(c-u),T=Math.sqrt(1+T*T),C*=T,x*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),y*=T,A*=T)),y=Xt(y),A=Xt(A),C=Xt(C),x=Xt(x)):(y=h,x=d,A=C=0),(v&&!~(a+"").indexOf("px")||b&&!~(s+"").indexOf("px"))&&(v=$n(m,"x",a,"px"),b=$n(m,"y",s,"px")),(_||f||p||g)&&(v=Xt(v+_-(_*y+f*C)+p),b=Xt(b+f-(_*A+f*x)+g)),(i||r)&&(T=m.getBBox(),v=Xt(v+i/100*T.width),b=Xt(b+r/100*T.height)),T="matrix("+y+","+A+","+C+","+x+","+v+","+b+")",m.setAttribute("transform",T),M&&(m.style[Ht]=T)},u0=function(t,e,n,i,r){var a=360,s=ae(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?ai:1),c=l-i,u=i+c+"deg",h,d;return s&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Zl)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Zl)%a-~~(c/a)*a)),t._pt=d=new Ce(t._pt,e,n,i,c,$_),d.e=u,d.u="deg",t._props.push(n),d},nc=function(t,e){for(var n in e)t[n]=e[n];return t},h0=function(t,e,n){var i=nc({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,s,l,c,u,h,d,m,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ht]=e,s=Nr(n,1),Or(n,Ht),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ht],a[Ht]=e,s=Nr(n,1),a[Ht]=c);for(l in Fn)c=i[l],u=s[l],c!==u&&r.indexOf(l)<0&&(m=fe(c),_=fe(u),h=m!==_?$n(n,l,c,_):parseFloat(c),d=parseFloat(u),t._pt=new Ce(t._pt,s,l,h,d-h,Ya),t._pt.u=_||0,t._props.push(l));nc(s,i)};Ae("padding,margin,Width,Radius",function(o,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(s){return t<2?o+s:"border"+s+o});ws[t>1?"border"+o:o]=function(s,l,c,u,h){var d,m;if(arguments.length<4)return d=a.map(function(_){return En(s,_,c)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(u+"").split(" "),m={},a.forEach(function(_,f){return m[_]=d[f]=d[f]||d[(f-1)/2|0]}),s.init(l,m,h)}});var Lu={name:"css",register:Za,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,s=t.style,l=n.vars.startAt,c,u,h,d,m,_,f,p,g,M,v,b,y,A,C,x;xo||Za(),this.styles=this.styles||bu(t),x=this.styles.props,this.tween=n;for(f in e)if(f!=="autoRound"&&(u=e[f],!(Fe[f]&&hu(f,e,n,i,t,r)))){if(m=typeof u,_=ws[f],m==="function"&&(u=u.call(n,i,t,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Ir(u)),_)_(this,t,f,u,n)&&(C=1);else if(f.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(f)+"").trim(),u+="",Wn.lastIndex=0,Wn.test(c)||(p=fe(c),g=fe(u)),g?p!==g&&(c=$n(t,f,c,g)+g):p&&(u+=p),this.add(s,"setProperty",c,u,i,r,0,0,f),a.push(f),x.push(f,0,s[f]);else if(m!=="undefined"){if(l&&f in l?(c=typeof l[f]=="function"?l[f].call(n,i,t,r):l[f],ae(c)&&~c.indexOf("random(")&&(c=Ir(c)),fe(c+"")||(c+=ke.units[f]||fe(En(t,f))||""),(c+"").charAt(1)==="="&&(c=En(t,f))):c=En(t,f),d=parseFloat(c),M=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),f in Dn&&(f==="autoAlpha"&&(d===1&&En(t,"visibility")==="hidden"&&h&&(d=0),x.push("visibility",0,s.visibility),Vn(this,s,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),f!=="scale"&&f!=="transform"&&(f=Dn[f],~f.indexOf(",")&&(f=f.split(",")[0]))),v=f in Fn,v){if(this.styles.save(f),b||(y=t._gsap,y.renderTransform&&!e.parseTransform||Nr(t,e.parseTransform),A=e.smoothOrigin!==!1&&y.smooth,b=this._pt=new Ce(this._pt,s,Ht,0,1,y.renderTransform,y,0,-1),b.dep=1),f==="scale")this._pt=new Ce(this._pt,y,"scaleY",y.scaleY,(M?qi(y.scaleY,M+h):h)-y.scaleY||0,Ya),this._pt.u=0,a.push("scaleY",f),f+="X";else if(f==="transformOrigin"){x.push(ln,0,s[ln]),u=a0(u),y.svg?Ka(t,u,0,A,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==y.zOrigin&&Vn(this,y,"zOrigin",y.zOrigin,g),Vn(this,s,f,Ts(c),Ts(u)));continue}else if(f==="svgOrigin"){Ka(t,u,1,A,0,this);continue}else if(f in Eu){u0(this,y,f,d,M?qi(d,M+u):u);continue}else if(f==="smoothOrigin"){Vn(this,y,"smooth",y.smooth,u);continue}else if(f==="force3D"){y[f]=u;continue}else if(f==="transform"){h0(this,u,t);continue}}else f in s||(f=sr(f)||f);if(v||(h||h===0)&&(d||d===0)&&!q_.test(u)&&f in s)p=(c+"").substr((d+"").length),h||(h=0),g=fe(u)||(f in ke.units?ke.units[f]:p),p!==g&&(d=$n(t,f,c,g)),this._pt=new Ce(this._pt,v?y:s,f,d,(M?qi(d,M+h):h)-d,!v&&(g==="px"||f==="zIndex")&&e.autoRound!==!1?j_:Ya),this._pt.u=g||0,p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=Y_);else if(f in s)s0.call(this,t,f,c,M?M+u:u);else if(f in t)this.add(t,f,c||t[f],M?M+u:u,i,r);else if(f!=="parseTransform"){lo(f,u);continue}v||(f in s?x.push(f,0,s[f]):x.push(f,1,c||t[f])),a.push(f)}}C&&_u(this)},render:function(t,e){if(e.tween._time||!vo())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:En,aliases:Dn,getSetter:function(t,e,n){var i=Dn[e];return i&&i.indexOf(",")<0&&(e=i),e in Fn&&e!==ln&&(t._gsap.x||En(t,"x"))?n&&jl===n?e==="scale"?Q_:J_:(jl=n||{})&&(e==="scale"?t0:e0):t.style&&!ao(t.style[e])?Z_:~e.indexOf("-")?K_:go(t,e)},core:{_removeProperty:Or,_getMatrix:Mo}};Ve.utils.checkPrefix=sr;Ve.core.getStyleSaver=bu;(function(o,t,e,n){var i=Ae(o+","+t+","+e,function(r){Fn[r]=1});Ae(t,function(r){ke.units[r]="deg",Eu[r]=1}),Dn[i[13]]=o+","+t,Ae(n,function(r){var a=r.split(":");Dn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ae("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){ke.units[o]="px"});Ve.registerPlugin(Lu);var Se=Ve.registerPlugin(Lu)||Ve;Se.core.Tween;var d0=`varying vec2 vUv;

void main() {\r
    vUv = uv;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}`,f0=`uniform sampler2D uTexture;\r
uniform float uFilterIntensity;\r
uniform float uRepeat; 
uniform vec2 uOffset;\r
varying vec2 vUv;

void main() {\r
    vec2 uv = vUv * vec2(uRepeat, uRepeat); 
    uv += uOffset; 
    uv = fract(uv); 
    vec4 color = texture2D(uTexture, uv);\r
    float grayscale = dot(color.rgb, vec3(0.299, 0.587, 0.114));\r
    vec3 filteredColor = mix(vec3(grayscale), color.rgb, uFilterIntensity);\r
    gl_FragColor = vec4(filteredColor, color.a);\r
}`;let Ja=0,Hi=0,ic=0,Jt,rc,Es=!0,Cn=!1;const bo=new ro,p0=document.querySelector("canvas.webgl"),ur=new Fg,wn=new Ug,sc=[wn.load("images/first-steps-of-hip-hop.jpg"),wn.load("images/the-sounds-of-rap.jpg"),wn.load("images/substance-before-form.jpg"),wn.load("images/golden-age.jpg"),wn.load("images/new-school.jpg"),wn.load("images/rap-explosion.jpg"),wn.load("images/g-funk.jpg"),wn.load("images/after-math.jpg"),wn.load("images/post-2000.jpg")],de={width:window.innerWidth,height:window.innerHeight};let m0=1.78;const g0=new Ds(m0,1,32,32);let Wr=[];for(let o=0;o<sc.length;o++){const t=new Xn({side:As,transparent:!0,uniforms:{uTexture:{value:sc[o]},uFilterIntensity:{value:1},uRepeat:{value:.5},uOffset:{value:new Rt(.25,.25)}},vertexShader:d0,fragmentShader:f0});let e=new Ln(g0,t);e.position.set(0,0,0),Wr.push({slide:e,index:o,dist:0}),ur.add(e)}Array(5).fill({dist:0});const So=o=>{Ja+=-o.deltaY*3e-4};window.addEventListener("wheel",So);const Qa=2,_0=()=>{Wr.forEach(o=>{o.slide.position.x=Qa*o.index+Hi})};window.addEventListener("resize",()=>{de.width=window.innerWidth,de.height=window.innerHeight,tn.aspect=de.width/de.height,tn.updateProjectionMatrix(),ar.setSize(de.width,de.height),ar.setPixelRatio(Math.min(window.devicePixelRatio,2))});const tn=new Ye(75,de.width/de.height,.1,100);tn.position.set(0,0,1.6);ur.add(tn);bo.add(tn.position,"z").min(-10).max(10);bo.add(tn.position,"x").min(-10).max(10);bo.add(tn.position,"y").min(-10).max(10);const ar=new Dc({canvas:p0});ar.setSize(de.width,de.height);ar.setPixelRatio(Math.min(window.devicePixelRatio,2));ar.setClearColor(2171169);const or=new kg,Rn=new Rt,x0=o=>{Wr.forEach(t=>{Rn.x=o.clientX/de.width*2-1,Rn.y=-(o.clientY/de.height)*2+1,or.setFromCamera(Rn,tn);const e=or.intersectObjects(ur.children);e.length>0&&e[0].object.geometry.isBufferGeometry&&(rc=e[0].object,Se.to(rc.material.uniforms.filterIntensity,{value:0,duration:1.5,ease:"power3.out"}))})},wo=o=>{if(Es){window.removeEventListener("wheel",So),Rn.x=o.clientX/de.width*2-1,Rn.y=-(o.clientY/de.height)*2+1,or.setFromCamera(Rn,tn);const t=or.intersectObjects(ur.children);if(t.length>0){if(t[0].object.geometry.isBufferGeometry){Es=!1,console.log("you clicked on the plane :",t[0].object.id%9),Jt=t[0].object,Se.to(Jt.scale,{x:1.2,y:1.2,duration:1.5,ease:"power3.out"}),Se.to(Jt.position,{z:1,duration:1,ease:"power3.out"}),Jt.position.x-Hi,Se.to(tn.position,{duration:1.5,x:Jt.position.x,ease:"power3.out"}),Wr.forEach(i=>{i.slide!==Jt&&(Se.to(i.slide.scale,{x:.5,y:.5,z:1,duration:1.5,ease:"power3.out"}),Se.to(i.slide.position,{x:Qa*i.index-Qa*Jt.id,y:0,z:0,duration:1.5,ease:"power3.out"}))}),Se.to(Jt.position,{x:0,y:0,z:0,duration:1.5,ease:"power3.out"});const e=Cn?.5:1,n=Cn?new Rt(.25,.25):new Rt(0,0);console.log(Jt.material.uniforms.uRepeat),Se.to(Jt.material.uniforms.uRepeat,{value:e,duration:1,ease:"power2.out"}),console.log(Jt.material.uniforms.uRepeat),Se.to(Jt.material.uniforms.uOffset.value,{x:n.x,y:n.y,duration:1,ease:"power2.out"}),Cn=!Cn,console.log(Cn)}window.removeEventListener("click",wo),console.log("plane click event disabled"),window.addEventListener("click",Du),console.log("outside click event enabled")}}};window.addEventListener("click",wo);const Du=o=>{if(!Es){Rn.x=o.clientX/de.width*2-1,Rn.y=-(o.clientY/de.height)*2+1,or.setFromCamera(Rn,tn);let t=or.intersectObjects(ur.children);if(t.length>0&&t[0].object==Jt&&console.log("plane already clicked"),console.log("intersect"),console.log(t),t.length==0||t[0].object!=Jt){console.log("handle outside click"),Wr.forEach(i=>{Se.to(i.slide.scale,{x:1,y:1,duration:1.5,ease:"power3.out"}),Se.to(i.slide.position,{z:0,duration:1.5,ease:"power3.out"})});const e=Cn?.5:1,n=Cn?new Rt(.25,.25):new Rt(0,0);console.log(Jt.material.uniforms.uRepeat),Se.to(Jt.material.uniforms.uRepeat,{value:e,duration:1,ease:"power2.out"}),console.log(Jt.material.uniforms.uRepeat),Se.to(Jt.material.uniforms.uOffset.value,{x:n.x,y:n.y,duration:1,ease:"power2.out"}),Es=!0,Jt=null,window.addEventListener("wheel",So),Cn=!Cn,window.addEventListener("click",wo),console.log("Out side : plane click event enabled"),window.removeEventListener("click",Du),console.log("Out side : outside click event disabled")}}};window.addEventListener("mousemove",x0);const Pu=()=>{Hi+=Ja,Ja*=.9,ic=Math.round(Hi);let o=ic-Hi;Hi+=Math.sign(o)*Math.pow(Math.abs(o),.96)*.015,_0(),ar.render(ur,tn),window.requestAnimationFrame(Pu)};Pu();
//# sourceMappingURL=index-7156c54c.js.map
