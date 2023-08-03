(()=>{"use strict";var n={426:(n,t,e)=>{e.d(t,{Z:()=>o});var s=e(81),r=e.n(s),i=e(645),a=e.n(i)()(r());a.push([n.id,'body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: "Montserrat", sans-serif;\n    font-weight: 400;\n    font-size: 16;\n    font-weight: 600;\n    color: white;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n.container {\n    width: 632px;\n    height: 528px;\n    position: relative;\n    overflow: hidden;\n    transition: opacity 0.5s ease-in-out;\n}\n\n.statistics {\n    width: calc(445px - 60px);\n    padding: 0 30px;\n    position: absolute;\n    top: -32px;\n    right: 0;\n    background-color: #ffffff70;\n    height: 32px;\n    display: flex;\n    justify-content: space-between;\n    color: #333;\n    transition: all 0.5s ease;\n}\n\n.statistics_show {\n    top: 0;\n}\n\n.statistics__item {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    height: 100%;\n}\n\n.statistics__top {\n    font-size: 7px;\n    font-weight: 600;\n}\n\n.statistics__bot {\n    font-weight: 900;\n    font-size: 12px;\n}\n\n.counters {\n    display: flex;\n    width: 80%;\n    justify-content: end;\n}\n\n.playground {\n    width: calc(100% - 140px);\n    padding: 60px 70px;\n    height: 400px;\n}\n\n.fade-out-left {\n    transform: translateX(-100%);\n    transition: all 0.5s ease;\n}\n\n.fade-out-right {\n    transform: translateX(100%);\n    transition: all none;\n}\n\n.fade-in {\n    transform: translateX(0);\n    transition: all 0.5s ease;\n}\n\n.task {\n    margin-bottom: 30px;\n    padding: 30px 20px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: white;\n    box-shadow: 0 7px 35px 0 rgba(0, 0, 0, 0.3);\n    font-size: 1.15rem;\n    font-family: "Open Sans", sans-serif;\n}\n\n.task span {\n    font-family: "Montserrat", sans-serif;\n    font-weight: 600;\n    font-size: 3rem;\n    line-height: 1;\n}\n\n.grid {\n    height: 200px;\n    display: grid;\n    grid-column-gap: 15px;\n    grid-row-gap: 15px;\n}\n\n.grid_6 {\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    font-size: 2rem;\n}\n\n.grid_12 {\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    font-size: 1.75rem;\n    height: 280px;\n}\n\n.grid_16 {\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(4, 1fr);\n    font-size: 1.5rem;\n    height: 280px;\n}\n\n.grid_25 {\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n    font-size: 1.3rem;\n    height: 280px;\n    grid-column-gap: 10px;\n    grid-row-gap: 10px;\n}\n\n.tutorial {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    font-family: \'Open Sans\', sans-serif;\n    font-size: 1rem;\n    bottom: 50px;\n    text-align: center;\n    width: 200px;\n}\n\n.point-img {\n    position: absolute;\n    bottom: 150px;\n    left: 99px;\n    width: 96px;\n    height: 103px;\n}\n\n.item {\n    all: unset;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    font-family: "Montserrat", sans-serif;\n    font-weight: 600;\n    transition: all 0.1s ease;\n}\n\n.item_nohover {\n    all: unset;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    font-family: "Montserrat", sans-serif;\n    font-weight: 600;\n    transition: all 0.1s ease;\n}\n\n.item:hover {\n    -webkit-box-shadow: 0px 0px 16px 1px rgba(34, 60, 80, 0.36);\n    -moz-box-shadow: 0px 0px 16px 1px rgba(34, 60, 80, 0.36);\n    box-shadow: 0px 0px 16px 1px rgba(34, 60, 80, 0.36);\n    cursor: pointer;\n}\n\n.answer-img {\n    transition: all 0.5s ease;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    margin-top: -65px;\n    margin-left: -65px;\n    animation: rotate 0.5s linear infinite, blur 1s linear infinite;\n}\n\n\n\n\n\n.results {\n    width: calc(100% - 100px);\n    height: calc(100% - 100px);\n    padding: 50px;\n    font-family: "Open Sans", sans-serif;\n}\n\n.results__header {\n    height: 120px;\n    width: 100%;\n    background-color: rgb(101, 44, 145);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2.3rem;\n    font-weight: 200;\n    line-height: 1;\n}\n\n.results__items {\n    width: 300px;\n    margin: 0 auto;\n    margin-top: 50px;\n    display: flex;\n    justify-content: space-between;\n    color: #333;\n    font-size: 0.9rem;\n    font-weight: 700;\n    \n}\n\n.results__items_left {\n    display: flex;\n    flex-direction: column;\n    color: #999;\n    font-weight: 500;\n    font-size: 0.9rem;\n}\n\n.results__items_left span:not(:last-child) {\n    margin-bottom: 10px;\n}\n\n.results__items_right {\n    display: flex;\n    flex-direction: column;\n}\n\n.results__items_right span:not(:last-child) {\n    margin-bottom: 10px;\n}\n\n.results__button {\n    all: unset;\n    color: white;\n    padding: 15px 30px;\n    border-radius: 50px;\n    background-color: rgb(142, 61, 203);\n    position: absolute;\n    bottom: 50px;\n    left: 50%;\n    transform: translateX(-50%);\n    transition: all 0.2s ease;\n    cursor: pointer;\n}\n\n.results__button:hover {\n    box-shadow: 0 7px 35px 0 rgba(0, 0, 0, 0.3);\n    background-color: rgb(101, 44, 145);\n    transform: translateX(-50%) translateY(-5px);;\n}\n\n@keyframes rotate {\n    0% {\n        transform: rotate(0);\n    }\n    25% {\n        transform: rotate(15deg);\n    }\n    50% {\n        transform: rotate(0deg);\n    }\n    75% {\n        transform: rotate(-15deg);\n    }\n    100% {\n        transform: rotate(0deg);\n    }\n}\n\n.rotate-animation span {\n    animation: rotate 0.75s linear infinite;\n}\n\n@keyframes scale {\n    0% {\n        transform: scale(1);\n    }\n    25% {\n        transform: scale(1.1);\n    }\n    50% {\n        transform: scale(1);\n    }\n    75% {\n        transform: scale(0.9);\n    }\n    100% {\n        transform: scale(1);\n    }\n}\n\n.scale-animation {\n    animation: scale 0.5s linear infinite;\n}\n\n@keyframes blur {\n    0% {\n        opacity: 1;\n    }\n    50% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n.blur-animation {\n    animation: blur 1s linear infinite;\n}\n\n@keyframes shadow {\n    0% {\n        -webkit-box-shadow: 0px 6px 22px -15px rgba(34, 60, 80, 0.36);\n        -moz-box-shadow: 0px 6px 22px -15px rgba(34, 60, 80, 0.36);\n        box-shadow: 0px 6px 22px -15px rgba(34, 60, 80, 0.36);\n    }\n    50% {\n        -webkit-box-shadow: 0px 42px 71px -15px rgba(34, 60, 80, 0.36);\n        -moz-box-shadow: 0px 42px 71px -15px rgba(34, 60, 80, 0.36);\n        box-shadow: 0px 42px 71px -15px rgba(34, 60, 80, 0.36);\n    }\n    100% {\n        -webkit-box-shadow: 0px 6px 22px -15px rgba(34, 60, 80, 0.36);\n        -moz-box-shadow: 0px 6px 22px -15px rgba(34, 60, 80, 0.36);\n        box-shadow: 0px 6px 22px -15px rgba(34, 60, 80, 0.36);\n    }\n}\n.shadow-animation {\n    animation: shadow 1.5s linear infinite;\n}\n',""]);const o=a},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",s=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),s&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),s&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,s,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(s)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(a[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);s&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,s=0;s<t.length;s++)if(t[s].identifier===n){e=s;break}return e}function s(n,s){for(var i={},a=[],o=0;o<n.length;o++){var l=n[o],c=s.base?l[0]+s.base:l[0],d=i[c]||0,p="".concat(c," ").concat(d);i[c]=d+1;var g=e(p),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==g)t[g].references++,t[g].updater(u);else{var h=r(u,s);s.byIndex=o,t.splice(o,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var i=s(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var o=e(i[a]);t[o].references--}for(var l=s(n,r),c=0;c<i.length;c++){var d=e(i[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=l}}},569:n=>{var t={};n.exports=function(n,e){var s=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var s="";e.supports&&(s+="@supports (".concat(e.supports,") {")),e.media&&(s+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(s+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),s+=e.css,r&&(s+="}"),e.media&&(s+="}"),e.supports&&(s+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(s,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(s){var r=t[s];if(void 0!==r)return r.exports;var i=t[s]={id:s,exports:{}};return n[s](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var s in t)e.o(t,s)&&!e.o(n,s)&&Object.defineProperty(n,s,{enumerable:!0,get:t[s]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var s=t.getElementsByTagName("script");if(s.length)for(var r=s.length-1;r>-1&&!n;)n=s[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.nc=void 0,(()=>{var n=e(379),t=e.n(n),s=e(795),r=e.n(s),i=e(569),a=e.n(i),o=e(565),l=e.n(o),c=e(216),d=e.n(c),p=e(589),g=e.n(p),u=e(426),h={};h.styleTagTransform=g(),h.setAttributes=l(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),t()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;const m={ORANGE:"rgb(242, 142, 55)",BLUE:"rgb(77, 184, 236)",PINK:"rgb(252, 115, 176)",VIOLET:"rgb(142, 61, 203)",GREEN:"rgb(148, 201, 77)"},f={rotate:"rotate-animation",scale:"scale-animation",blur:"blur-animation",blurAndScale:"blur-animation scale-animation",blurAndRotate:"blur-animation rotate-animation"},A={getRandomFromObject(n){let t=Object.entries(n).map((([n,t])=>t));return t[Math.floor(Math.random()*t.length)]},generateNumbersArray:n=>Array.from({length:n},(()=>Math.floor(900*Math.random())+100)),startTimer(n){let t=60;const e=document.getElementById("timer"),s=setInterval((()=>{const r=Math.floor(t/60);let i=t%60;i=i<10?"0"+i:i,e.textContent=r+":"+i,--t<0&&(clearInterval(s),n.isFinished=!0)}),1e3)},swipeAnimation(n){n.classList.add("fade-out-left"),setTimeout((()=>{n.classList.remove("fade-out-left"),n.classList.add("fade-out-right")}),500),setTimeout((()=>{n.classList.add("fade-in")}),501),setTimeout((()=>{n.classList.remove("fade-out-right","fade-in")}),1e3)}},x=e.p+"images/505cd55273f95ebee5bb11beefd17f2d.png",b=()=>{const n=document.querySelector(".container"),t=new class{constructor(){this.score=0,this.level=1,this.bonus=1,this.itemsArray=[],this.answer=null,this.gridLevel="grid_6",this.isFinished=!1,this.rigthCount=0,this.answerCount=0}generateItemsArray(){switch(this.level){case 1:case 2:case 3:this.itemsArray=A.generateNumbersArray(6);break;case 4:case 5:this.gridLevel="grid_12",this.itemsArray=A.generateNumbersArray(12);break;case 6:case 7:this.gridLevel="grid_16",this.itemsArray=A.generateNumbersArray(16);break;case 8:case 9:this.gridLevel="grid_25",this.itemsArray=A.generateNumbersArray(25);break;default:this.gridLevel="grid_6",this.itemsArray=A.generateNumbersArray(6)}}setAnswer(){this.answer=this.itemsArray[Math.floor(Math.random()*this.itemsArray.length)]}setScore(){this.score+=42*this.bonus,this.level<9&&(this.level+=1),this.bonus<5&&(this.bonus+=1)}startTimer(){A.startTimer(this)}renderScene(){return`\n            <aside class="statistics">\n                <div class="statistics__item">\n                    <span class="statistics__top">ВРЕМЯ</span>\n                    <span id="timer" class="statistics__bot">1:00</span>\n                </div>\n                <div class="statistics__item">\n                    <span class="statistics__top">УРОВЕНЬ</span>\n                    <span id="level" class="statistics__bot">${this.level}/9</span>\n                </div>\n                <div class="statistics__item">\n                    <span class="statistics__top">ОЧКИ</span>\n                    <span id="score" class="statistics__bot">${this.score}</span>\n                </div>\n                <div class="statistics__item">\n                    <span class="statistics__top">БОНУС</span>\n                    <span id="bonus" class="statistics__bot">x${this.bonus}</span>\n                </div>\n            </aside>\n            <section class="playground"></section>\n        `}renderTask(){return`\n            <div class="task">Найдите указанное число: <span>${this.answer}</span></div>\n            <div class="grid ${this.gridLevel}"></div>\n        `}renderItem(n){return`\n            <button class="item ${this.level>2&&A.getRandomFromObject(f)}" id=${n} style="background: ${A.getRandomFromObject(m)};">\n                <span>${n}</span> \n            </button>\n        `}renderResults(){return`\n        <section class="results">\n            <div class="results__header">Ваши результаты</div>\n            <div class="results__items">\n                <div class="results__items_left">\n                    <span>Текущий результат: </span>\n                    <span>Верных ответов: </span>\n                    <span>Точность ответов: </span>\n                </div>\n                <div class="results__items_right">\n                    <span>${this.score}</span>\n                    <span>${this.rigthCount}/${this.answerCount}</span>\n                    <span>${(this.rigthCount/this.answerCount*100).toFixed(1)}%</span>\n                </div>\n                <button class="results__button">НАЧАТЬ ЗАНОВО</button>\n            </div>\n        </section>\n        `}},e=()=>{t.generateItemsArray(),t.setAnswer()};e();const s=()=>{const n=document.querySelector(".grid"),e=t.itemsArray.map((n=>t.renderItem(n))).join("");n.innerHTML=e},r=()=>{const e=A.getRandomFromObject(m);n.style.background=e,document.querySelector(".playground").innerHTML=t.renderTask(),document.querySelector(".task").style.background=e,document.getElementById("level").textContent=t.level+"/9",document.getElementById("score").textContent=t.score,document.getElementById("bonus").textContent=[...new Array(t.bonus)].map((()=>"+")).join("")+[...new Array(5-t.bonus)].map((()=>"-")).join("")+" x"+t.bonus};(()=>{n.innerHTML=t.renderScene(),r(),s();const o=document.querySelectorAll(".item");console.log(o),o.forEach((n=>{n.classList.remove("item"),n.classList.add("item_nohover")}));let l=document.createElement("div");l.classList.add("tutorial"),l.textContent="Нажмите на экран, чтобы продолжить",n.appendChild(l);let c=document.createElement("img");c.src=x,c.classList.add("point-img"),n.appendChild(c);const d=()=>{n.style.opacity=0,setTimeout((()=>{i(),e(),r(),s(),a(),n.style.opacity=1}),500),n.removeEventListener("click",d)};n.addEventListener("click",d)})();const i=()=>{n.innerHTML=t.renderScene(),r();const e=document.querySelector(".statistics");setTimeout((()=>{e.classList.add("statistics_show")}),100),t.startTimer()},a=()=>{document.querySelectorAll(".item").forEach((i=>{i.addEventListener("click",(i=>{const c=document.querySelector(".playground");A.swipeAnimation(c),t.answerCount++,i.target.textContent==t.answer?(t.setScore(),t.rigthCount++,o("data:image/png;base64,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")):o("data:image/png;base64,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");let d=setTimeout((()=>{e(),r(),s(),a(),document.getElementById("answer-img")&&n.removeChild(document.getElementById("answer-img")),clearTimeout(d)}),500);t.isFinished&&(n.style.opacity=0,setTimeout((()=>{l(),n.style.opacity=1}),500))}))}))},o=t=>{let e=document.createElement("img");e.src=t,e.classList.add("answer-img"),e.id="answer-img",n.appendChild(e)},l=()=>{n.innerHTML=t.renderResults(),n.style.background="white",document.querySelector(".results__button").addEventListener("click",(()=>{n.style.opacity=0,setTimeout((()=>{b(),n.style.opacity=1}),500)}))}};b()})()})();