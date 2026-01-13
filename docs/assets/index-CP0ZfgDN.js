(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))f(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&f(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function f(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const _="modulepreload",P=function(e){return"/"+e},h={},p=function(n,r,f){let t=Promise.resolve();if(r&&r.length>0){let g=function(i){return Promise.all(i.map(l=>Promise.resolve(l).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};var u=g;document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),s=c?.nonce||c?.getAttribute("nonce");t=g(r.map(i=>{if(i=P(i),i in h)return;h[i]=!0;const l=i.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${d}`))return;const a=document.createElement("link");if(a.rel=l?"stylesheet":_,l||(a.as="script"),a.crossOrigin="",a.href=i,s&&a.setAttribute("nonce",s),document.head.appendChild(a),l)return new Promise((E,L)=>{a.addEventListener("load",E),a.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${i}`)))})}))}function o(c){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=c,window.dispatchEvent(s),!s.defaultPrevented)throw c}return t.then(c=>{for(const s of c||[])s.status==="rejected"&&o(s.reason);return n().catch(o)})};function y(){try{const e="pub-1298950542115439",n=document.querySelectorAll(".adsbygoogle");n.length>0&&n.forEach(r=>{r.getAttribute("data-adsbygoogle-status")||(window.adsbygoogle=window.adsbygoogle||[]).push({})})}catch(e){console.error("AdSense error:",e)}}const m=document.querySelector("#app"),b=[{id:"qrcode",title:"QRコード作成",desc:"テキストやURLからQRコードを瞬時に作成します。サーバー送信なしで安心。",icon:"📱",action:()=>p(()=>import("./index-BntWuiFu.js"),[]).then(e=>e.render())},{id:"password",title:"パスワード生成",desc:"強力で安全なパスワードをブラウザ内で生成します。",icon:"🔒",action:()=>p(()=>import("./index-CffQOt-9.js"),[]).then(e=>e.render())},{id:"image",title:"画像圧縮・変換",desc:"画質を保ったまま画像サイズを軽量化します。アップロード不要。",icon:"🖼️",action:()=>p(()=>import("./index-BUiQiKCb.js"),[]).then(e=>e.render())}];function v(){m.innerHTML=`
    <div class="glass-panel" style="padding: 40px; text-align: center; margin-bottom: 40px;">
      <h1 style="font-size: 2.5rem; margin-bottom: 16px; background: linear-gradient(90deg, #38bdf8, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
        Web Tools Suite
      </h1>
      <p style="color: #cbd5e1; font-size: 1.1rem; max-width: 600px; margin: 0 auto;">
        登録不要・インストール不要。すべての処理がブラウザ内で完結する、安全で高速なWebツール集です。
      </p>
    </div>

    <div class="tools-grid">
      ${b.map(e=>`
        <div class="glass-panel tool-card" data-tool="${e.id}" role="button" tabindex="0">
          <div class="tool-icon">${e.icon}</div>
          <div class="tool-title">${e.title}</div>
          <div class="tool-desc">${e.desc}</div>
          <a href="#${e.id}" class="glass-btn">使ってみる</a>
        </div>
      `).join("")}
    </div>

    <!-- Ad Slot -->
    <div style="text-align: center; margin-top: 40px;">
      <!-- Footer/Grid Ad Unit -->
      <ins class="adsbygoogle ad-responsive"
           style="display:block"
           data-ad-client="ca-pub-0000000000000000"
           data-ad-slot="1234567890"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  `,y()}async function w(){const e=window.location.hash.slice(1);if(!e){v();return}const n=b.find(r=>r.id===e);if(n){m.innerHTML=`<div style="text-align:center; padding:50px;">Loading ${n.title}...</div>`;try{await n.action(),y()}catch(r){console.error(r),m.innerHTML=`
        <div class="glass-panel tool-view">
          <h2>${n.title}</h2>
          <p>この機能は現在準備中です。</p>
          <br>
          <a href="#" class="glass-btn">ホームに戻る</a>
        </div>
      `}}else v()}window.addEventListener("hashchange",w);window.addEventListener("load",w);document.getElementById("home-link").addEventListener("click",e=>{e.preventDefault(),window.location.hash=""});
