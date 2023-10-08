/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var e={559:function(e,t){var n,o;void 0===(o="function"==typeof(n=function(){"use strict";if("undefined"==typeof window||void 0===window.navigator||void 0===window.navigator.userAgent||void 0===window.navigator.mimeTypes)return!1;let e=window.navigator,t=window.navigator.userAgent,n="ActiveXObject"in window,o=void 0!==window.Promise,i=void 0!==e.mimeTypes["application/pdf"],r=void 0!==e.platform&&"MacIntel"===e.platform&&void 0!==e.maxTouchPoints&&e.maxTouchPoints>1||/Mobi|Tablet|Android|iPad|iPhone/.test(t),c=!r&&void 0!==e.vendor&&/Apple/.test(e.vendor)&&/Safari/.test(t),a=!!(!r&&/irefox/.test(t)&&t.split("rv:").length>1)&&parseInt(t.split("rv:")[1].split(".")[0],10)>18,d=function(e){var t;try{t=new ActiveXObject(e)}catch(e){t=null}return t},s=!r&&(o||a||i||n&&!(!d("AcroPDF.PDF")&&!d("PDF.PdfCtrl"))),l=function(e,t){return t||console.log("[PDFObject] "+e),!1},p=function(e,t,n,o,i,r,c,a,d,s,l){!function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(t);let p=n;if("pdfjs"===e){let e=-1!==l.indexOf("?")?"&":"?";p=l+e+"file="+encodeURIComponent(n)+o}else p+=o;let m="pdfjs"===e||"iframe"===e?"iframe":"embed",u=document.createElement(m);if(u.className="pdfobject",u.type="application/pdf",u.title=a,u.src=p,c&&(u.id=c),"iframe"===m&&(u.allow="fullscreen",u.frameborder="0"),!d){let e="embed"===m?"overflow: auto;":"border: none;";t!==document.body?e+="width: "+i+"; height: "+r+";":e+="position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;",u.style.cssText=e}return s&&s.key&&-1===["className","type","title","src","style","id","allow","frameborder"].indexOf(s.key)&&u.setAttribute(s.key,void 0!==s.value?s.value:""),t.classList.add("pdfobject-container"),t.appendChild(u),t.getElementsByTagName(m)[0]},m=function(e,t,n){let o=t||!1,i=n||{},a="string"==typeof i.id?i.id:"",d=i.page||!1,m=i.pdfOpenParams||{},u="string"!=typeof i.fallbackLink&&"boolean"!=typeof i.fallbackLink||i.fallbackLink,f=i.width||"100%",h=i.height||"100%",g=i.title||"Embedded PDF",b="boolean"!=typeof i.assumptionMode||i.assumptionMode,v="boolean"==typeof i.forcePDFJS&&i.forcePDFJS,y="boolean"==typeof i.supportRedirect&&i.supportRedirect,C="boolean"==typeof i.omitInlineStyles&&i.omitInlineStyles,w="boolean"==typeof i.suppressConsole&&i.suppressConsole,E="boolean"==typeof i.forceIframe&&i.forceIframe,x=i.PDFJS_URL||!1,S=function(e){let t=document.body;return"string"==typeof e?t=document.querySelector(e):void 0!==window.jQuery&&e instanceof jQuery&&e.length?t=e.get(0):void 0!==e.nodeType&&1===e.nodeType&&(t=e),t}(o),P="",T="",k=i.customAttribute||{};return"string"!=typeof e?l("URL is not valid",w):S?(d&&(m.page=d),T=function(e){let t,n="";if(e){for(t in e)e.hasOwnProperty(t)&&(n+=encodeURIComponent(t)+"="+encodeURIComponent(e[t])+"&");n&&(n="#"+n,n=n.slice(0,n.length-1))}return n}(m),v&&x?p("pdfjs",S,e,T,f,h,a,g,C,k,x):s||b&&!r?p(E||y||c?"iframe":"embed",S,e,T,f,h,a,g,C,k):x?p("pdfjs",S,e,T,f,h,a,g,C,k,x):(u&&(P="string"==typeof u?u:"<p>This browser does not support inline PDFs. Please download the PDF to view it: <a href='[url]'>Download PDF</a></p>",S.innerHTML=P.replace(/\[url\]/g,e)),l("This browser does not support embedded PDFs",w))):l("Target element cannot be determined",w)};return{embed:function(e,t,n){return m(e,t,n)},pdfobjectversion:"2.2.12",supportsPDFs:s}})?n.apply(t,[]):n)||(e.exports=o)}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&!e;)e=o[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{"use strict";const e=n.p+"751613c432a446576bf6.gif",t=n.p+"10c9e2aa0ca7edf36fce.svg",o=n.p+"4c1b5332c1b1057928f6.svg",i=n.p+"a751bad6c81431ab4dd6.svg",r=n.p+"8664168d5bc90b1a2439.svg",c=n.p+"39769a8bd378bf410d6b.svg",a=n.p+"87689eab730642c86d2b.svg",d=n.p+"19598217529d2acd420a.svg",s=n.p+"3e91ebeb866625ec0bf6.svg";function l(){const n=document.querySelector("main #content #container");n.className="dynamic-page",document.querySelector("p#active-title").textContent="OVERVIEW.md";const l=document.createElement("img");l.className="gif",l.src=e;const p=document.createElement("h1");p.textContent="Yes. Hi.",n.append(l,p),n.appendChild(document.createElement("hr"));const m=document.createElement("h2");m.className="sub-title",m.textContent="👾 About Me:",n.append(m),n.appendChild(document.createElement("h3")).textContent="I'm a Web Developer ⚒️ in progress ⚒️",n.appendChild(document.createElement("p")).textContent="- 👟 pursuing a Computer Science degree",n.appendChild(document.createElement("p")).textContent="- 🧭 crafting webdev experiences and soaking up knowledge along the way",n.appendChild(document.createElement("p")).textContent="- 🫱🏼‍🫲🏼 interning at Codsoft";const u=document.createElement("div");u.id="bmo-quote",u.appendChild(document.createElement("h2")).textContent='"Sometimes life is scary and dark.',u.appendChild(document.createElement("h2")).textContent='That is why we must find the light."',u.appendChild(document.createElement("h3")).textContent="- BMO",n.append(u);const f=document.createElement("h2");f.className="sub-title",f.textContent="⚙️ Skills and Tools:",n.append(f),n.appendChild(document.createElement("p")).textContent="- 🏛️ proficient in structuring web content using HTMl, and always striving to improve my markup for better semantics and accessibility.",n.appendChild(document.createElement("p")).textContent="- 🎨 actively learning new CSS techniques to style web pages creatively",n.appendChild(document.createElement("p")).textContent="- 🤹🏻‍♀️ dedicated to expanding my skills to create interactive and dynamic web interfaces with Javascript.";const h=document.createElement("div");h.id="tools-container",h.appendChild(document.createElement("img")).src=t,h.appendChild(document.createElement("img")).src=o,h.appendChild(document.createElement("img")).src=i,h.appendChild(document.createElement("img")).src=r,h.appendChild(document.createElement("img")).src=c,h.appendChild(document.createElement("img")).src=a,h.appendChild(document.createElement("img")).src=d,h.appendChild(document.createElement("img")).src=s,n.append(h)}const p=n.p+"8a85dae49092089f7f2b.gif",m=n.p+"paula-joyce-ucol-resume.pdf";n(559);const u=document.querySelector("main #content #container");function f(e){for(var t=e.firstChild;t;)t.remove(),t=e.firstChild}document.querySelector("#overview-btn").addEventListener("click",(()=>{f(u),l()})),document.querySelector("#projects-btn").addEventListener("click",(()=>{f(u),document.querySelector("p#active-title").textContent="PROJECTS.md"})),document.querySelector("#resume-btn").addEventListener("click",(()=>{f(u),function(){document.querySelector("p#active-title").textContent="RESUME.md";const e=document.querySelector("main #content #container");e.className="dynamic-page";const t=document.createElement("img");t.className="gif",t.src=p;const n=document.createElement("h1");n.textContent="Um.",e.append(t,n),e.appendChild(document.createElement("h3")).textContent="This section is ⚒️ under construction ⚒️ (since I don't have a resume). But here's a pdf.";const o=document.createElement("div");o.id="resume-container";const i=document.createElement("embed");i.src=m,o.append(i),e.append(o)}()})),document.querySelector("#contact-btn").addEventListener("click",(()=>{f(u),document.querySelector("p#active-title").textContent="CONTACT.md"})),l()})()})();