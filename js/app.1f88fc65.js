(function(){"use strict";var e={8089:function(e,t,n){var o=n(9242),r=n(3396),a=n(4870);const i={class:"wrapper"},c=(0,r._)("div",{class:"heading"},[(0,r._)("h3",null,"Aventuras com contentEditable"),(0,r._)("p",null,[(0,r._)("i",{style:{color:"gray"}},"Uso da Selection e Range API - parte II")])],-1),s=(0,r._)("div",{class:"suggestion"},[(0,r._)("p",null,"type #hashtag or email@format.com")],-1),l={class:"control"},d=(0,r._)("div",{class:"feature"},[(0,r._)("p",null,[(0,r._)("strong",{style:{color:"darkgray"}},"InstaMatch"),(0,r.Uk)(" EXPERIMENTAL")]),(0,r._)("p"),(0,r._)("p",null,[(0,r._)("span",{style:{"font-size":"1.2em"}}," ⚠️ "),(0,r.Uk)(" Tests in FF, Opera and Chrome")])],-1),u=(0,r._)("p",null,[(0,r._)("a",{href:"https://github.com/tfnix/tst2"},"Back2tst2repo")],-1);var f=(0,r.aZ)({__name:"App",setup(e){let t=(0,a.iH)(0),n=(0,a.iH)(!1);function o(){location.reload()}function f(){var e,t;document.createRange?(e=document.createRange(document.getElementById("ideditor")),e.selectNodeContents(document.getElementById("ideditor")),e.collapse(!1),t=window.getSelection(),t.removeAllRanges(),t.addRange(e)):console.log("no window selection()")}function p(e){let t=document.getElementById("ideditor");t.innerHTML="<div></div>",b(t)}function g(e){let t=/[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)|\w+@\w+.([a-z]{1,3})|#(?![0-9_]+\b)([a-zA-Z0-9_]{1,30})(\b|\r)/g,n=e.match(t),o={};if(n){for(let e=0;e<n.length;e++)n[e].includes("#")?o[n[e]]='<span class="hashtag">'+n[e]+"</span>":n[e].includes("@")&&(o[n[e]]='<span class="email">'+n[e]+"</span>");return e.replace(t,(function(e){return o[e]}))}return e}function m(e){for(const t of e.childNodes)if(t&&1==t.nodeType){if("SPAN"==t.parentNode.tagName||"FONT"==t.parentNode.tagName)return;if("SPAN"==t.tagName)return;let e=t.textContent,n=g(e);"DIV"==t.parentNode.tagName&&(t.innerHTML=n)}else{let e=t.textContent,n=g(e),o=document.createElement("div");o.innerHTML=n,"DIV"==t.parentNode.tagName&&t.replaceWith(o)}}function h(){let e=window.getSelection(),t=e.getRangeAt(0).startContainer.parentNode;if("SPAN"==t.parentNode.tagName||"FONT"==t.parentNode.tagName)return;let n=t.textContent,o=g(n);"DIV"!=t.tagName||t.classList.contains("div_editor")||(t.innerHTML=o)}function v(e,t,n){if(n.done)return t;if(0==e.childNodes.length)e.textContent.length>=n.pos?(t.setStart(e,n.pos),n.done=!0):n.pos=n.pos-e.textContent.length;else for(var o=0;o<e.childNodes.length&&!n.done;o++){let r=e.childNodes[o];v(r,t,n)}return t}function N(e,t,n,o){if(o.done)return o;let r=null;if(0==e.childNodes.length)o.pos+=e.textContent.length;else for(var a=0;a<e.childNodes.length&&!o.done;a++){if(r=e.childNodes[a],r===t)return o.pos+=n,o.done=!0,o;N(r,t,n,o)}return o}function w(e){let t,o,r,a,i,c=e.target;switch(e.which){case 37:case 39:t=window.getSelection(),o=t.focusNode,r=t.focusOffset,a=N(c,o,r,{pos:0,done:!1}),m(e.target),t.removeAllRanges(),i=v(c,document.createRange(),{pos:a.pos,done:!1}),i.collapse(!0),t.addRange(i);break;case 38:case 40:break;case 46:break;case 8:break;case 32:t=window.getSelection(),o=t.focusNode,r=t.focusOffset,a=N(c,o,r,{pos:0,done:!1}),m(e.target),t.removeAllRanges(),i=v(c,document.createRange(),{pos:a.pos,done:!1}),i.collapse(!0),t.addRange(i);break;case 13:var s=e.target;s.innerHTML="",b(s);break;default:t=window.getSelection(),o=t.focusNode,r=t.focusOffset,a=N(c,o,r,{pos:0,done:!1}),m(c),t.removeAllRanges(),i=v(c,document.createRange(),{pos:a.pos,done:!1}),i.collapse(!0),t.addRange(i),n.value&&(t=window.getSelection(),o=t.focusNode,r=t.focusOffset,a=N(c,o,r,{pos:0,done:!1}),h(),t.removeAllRanges(),i=v(c,document.createRange(),{pos:a.pos,done:!1}),i.collapse(!0),t.addRange(i))}}function b(e){e&&e.focus()}return(0,r.bv)((()=>{m(document.getElementById("ideditor")),(document.documentMode||/Edge/.test(navigator.userAgent))&&(t.value=1),f(),b(document.getElementById("ideditor")),window.setcur=f})),(e,t)=>((0,r.wg)(),(0,r.iD)("div",i,[c,(0,r._)("div",{class:"editor",id:"ideditor",onInput:t[0]||(t[0]=e=>w(e)),spellcheck:"false",contentEditable:"true"}," type #tags ",32),s,(0,r._)("div",l,[(0,r._)("button",{onClick:t[1]||(t[1]=e=>p())},"Clear"),(0,r._)("button",{onClick:t[2]||(t[2]=e=>o())},"Reload")]),d,u]))}});const p=f;var g=p;(0,o.ri)(g).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],a=e[d][2];for(var c=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(c=!1,a<i&&(i=a));if(c){e.splice(d--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],c=o[1],s=o[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(s)var d=s(n)}for(t&&t(o);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},o=self["webpackChunkwedit_2"]=self["webpackChunkwedit_2"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(8089)}));o=n.O(o)})();
//# sourceMappingURL=app.1f88fc65.js.map