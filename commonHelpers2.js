import"./assets/modulepreload-polyfill-ec808ebb.js";const e=document.querySelector(".feedback-form"),o="feedback-form-state",a=JSON.parse(localStorage.getItem(o));a&&(e.elements.email.value=a.email,e.elements.message.value=a.message);e.addEventListener("input",()=>{const t=new FormData(e),r={};t.forEach((s,m)=>{r[m.trim()]=s.trim(),localStorage.setItem(o,JSON.stringify(r))})});e.addEventListener("submit",t=>{t.preventDefault(),console.log(JSON.parse(localStorage.getItem(o)))});
//# sourceMappingURL=commonHelpers2.js.map