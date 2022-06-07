(()=>{"use strict";var n={28:(n,t,e)=>{e.d(t,{Z:()=>s});var r=e(81),o=e.n(r),a=e(645),i=e.n(a)()(o());i.push([n.id,"/**\r\n * Body CSS\r\n */\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nhtml,\r\nbody,\r\ninput,\r\ntextarea,\r\nbutton {\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\r\n}\r\n\r\n\r\n/**\r\n * Sidebar CSS\r\n */\r\n\r\n#sidebar {\r\n  background-color: #2196F3;\r\n  padding: 15px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  #sidebar {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 180px;\r\n    height: 100%;\r\n    padding-top: 30px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  #content {\r\n    margin-left: 180px;\r\n  }\r\n}\r\n\r\n.floating-btn {\r\n    position: fixed;\r\n    bottom: 50px;\r\n    right: 50px;\r\n}\r\n\r\n.modal {\r\n  max-width: 600px;\r\n  max-height: 300px;\r\n  margin: 100px auto;\r\n  overflow-y: auto;\r\n  background: #fff;\r\n}\r\n\r\n.modal h1 {\r\n  text-align: center;\r\n}\r\n\r\n.modal .modal-content {\r\n  padding: 1rem;\r\n}\r\n\r\n.error {\r\n  color: red;\r\n}",""]);const s=i},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=e(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);t[s].references--}for(var c=r(n,o),d=0;d<a.length;d++){var l=e(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{class n{static create(e){return fetch("https://podcast-app-4d251-default-rtdb.firebaseio.com/questions.json",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((n=>n.json())).then((n=>(e.id=n.name,e))).then(t).then(n.renderList)}static fetch(n){return n?fetch(`https://podcast-app-4d251-default-rtdb.firebaseio.com/questions.json?auth=${n}`).then((n=>n.json())).then((n=>n&&n.error?`<p class = "arror">${n.error}</p>`:n?Object.keys(n).map((t=>({...n[t],id:t}))):[])):Promise.resolve('<p class = "arror">У вас нет токена</p>')}static renderList(){const n=r(),t=n.length?n.map(o).join(""):'<div class = "mui--text-headline">Вы пока ничего не спрашивали.</div>';document.getElementById("list").innerHTML=t}static listToHTML(n){return console.log(1),n.length?`<ol>${n.map((n=>`<li>${n.text}</li>`)).join("")}</ol>`:"<p>Вопросов пока нет</p>"}}function t(n){const t=r();t.push(n),localStorage.setItem("questions",JSON.stringify(t))}function r(){return JSON.parse(localStorage.getItem("questions")||"[]")}function o(n){return`\n        <div class="mui--text-black-54">\n            ${new Date(n.date).toLocaleDateString()}\n            ${new Date(n.date).toLocaleTimeString()}\n        </div>\n        <div>${n.text}</div>\n        <br>\n    `}function a(n){return n.length>=10}function i(n,t){const e=document.createElement("div");e.classList.add("modal");const r=`\n        <h1>${n}</h1>\n        <div class = "modal-content">${t}</div>\n\t`;e.innerHTML=r,mui.overlay("on",e)}var s=e(379),c=e.n(s),d=e(795),l=e.n(d),u=e(569),p=e.n(u),f=e(565),m=e.n(f),h=e(216),v=e.n(h),b=e(589),y=e.n(b),g=e(28),x={};x.styleTagTransform=y(),x.setAttributes=m(),x.insert=p().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=v(),c()(g.Z,x),g.Z&&g.Z.locals&&g.Z.locals;const S=document.getElementById("form"),w=S.querySelector("#question-input"),T=S.querySelector("#submit"),L=document.getElementById("modal-btn");function E(t){t.preventDefault();const e=t.target.querySelector("button"),r=t.target.querySelector("#email").value,o=t.target.querySelector("#password").value;e.disabled=!0,function(n,t){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCfWxq9VpmQFWca336aR22AtXxMmaouszs",{method:"POST",body:JSON.stringify({email:n,password:t,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((n=>n.json())).then((n=>n.idToken))}(r,o).then((t=>n.fetch(t))).then(j).then((()=>e.disabled=!1))}function j(t){"string"==typeof t?i("Ошибка!",t):i("Список вопросов",n.listToHTML(t))}window.addEventListener("load",n.renderList),S.addEventListener("submit",(function(t){if(t.preventDefault(),a(w.value)){const t={text:w.value.trim(),date:(new Date).toJSON()};T.disabled=!0,n.create(t).then((()=>{w.value="",w.className="",T.disabled=!1}))}})),L.addEventListener("click",(function(){i("Авторизация",'\n        <form class = "mui-form" id= "auth-form"> \n            <div \n                class = "mui-textfield mui-textfield--float-label">\n                <input \n                    type = "email" \n                    id = "email"\n                    required>\n                <label \n                    for = "email">\n                    E-mail\n                </label>\n            </div> \n            <div \n                class = "mui-textfield mui-textfield--float-label">\n                <input \n                    type = "password" \n                    id = "password"\n                    required>\n                <label \n                    for = "password">\n                    Пароль\n                </label>\n            </div>\n            <button \n                type = "submit" \n                class="mui-btn mui-btn--raised mui-btn--primary"\n                >\n                Войти\n            </button>\n        </form>\n\t'),document.getElementById("auth-form").addEventListener("submit",E,{once:!0})})),w.addEventListener("input",(()=>{T.disabled=!a(w.value)}))})()})();