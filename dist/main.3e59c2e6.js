parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"LeFU":[function(require,module,exports) {
CanvasRenderingContext2D.prototype.Circle=function(n,t,e){this.arc(n,t,e,0,360,!1)};
},{}],"g7hl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("./canvasExtensions");var e=document.getElementById("canvas"),t=e.getContext("2d"),l=80,n=3*l/2,a="bold "+1.6*n+"px sans-serif",o=n+5,i=e.height-n+10-5,d="00",r="#0000ff",h=null;document.getElementById("number").addEventListener("change",function(e){d=e.currentTarget.value.toString(),s()});var c=document.getElementById("color"),u=document.getElementById("hex");function s(){if(t.clearRect(0,0,e.width,e.height),null!==h){var c=Math.max(e.width/h.width,e.height/h.height);t.drawImage(h,(e.width+l)/2-h.width/2*c,e.height/2-l-h.height/2*c,h.width*c,h.height*c)}t.fillStyle=r,t.shadowColor="black",t.shadowBlur=20,t.fillRect(0,0,l,e.height),t.fillRect(0,e.height-l,e.width,l),t.shadowColor="none",t.shadowBlur=0,t.fillRect(0,0,l,e.height),t.font=a,t.textAlign="center",t.textBaseline="middle",t.fillStyle="black",t.shadowColor="black",t.shadowBlur=50,t.fillText(d,o,i),t.shadowColor="none",t.shadowBlur=0,t.beginPath(),t.Circle(n+5,e.height-n-5,n),t.fillStyle=r,t.shadowColor="black",t.shadowBlur=20,t.fill(),t.shadowColor="none",t.shadowBlur=0,t.lineWidth=20,t.strokeStyle=r,t.strokeText(d,o,i),t.fillStyle="white",t.shadowColor="black",t.shadowBlur=20,t.fillText(d,o,i)}c.addEventListener("change",function(e){r=e.currentTarget.value,u.value=r,s()}),u.addEventListener("keyup",function(e){var t=e.currentTarget.value;/^#[0-9A-F]{6}$/i.test(t)&&(r=c.value=t,s())}),document.getElementById("background").addEventListener("change",function(e){var t=URL.createObjectURL(e.target.files[0]);(h=new Image).src=t,h.onload=function(){s()}}),document.getElementById("download").addEventListener("click",function(t){var l=document.createElement("a");l.download="file-"+d+".jpg",l.href=e.toDataURL("image/jpeg"),l.click()}),s();
},{"./canvasExtensions":"LeFU"}]},{},["g7hl"], null)
//# sourceMappingURL=/main.3e59c2e6.js.map