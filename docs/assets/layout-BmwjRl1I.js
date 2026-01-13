(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&p(i)}).observe(document,{childList:!0,subtree:!0});function d(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function p(t){if(t.ep)return;t.ep=!0;const o=d(t);fetch(t.href,o)}})();function q(){try{const s="pub-1298950542115439",r=document.querySelectorAll(".adsbygoogle");r.length>0&&r.forEach(d=>{d.getAttribute("data-adsbygoogle-status")||(window.adsbygoogle=window.adsbygoogle||[]).push({})})}catch(s){console.error("AdSense error:",s)}}function x(s,r){if(!document.querySelector("#google-fonts")){const e=document.createElement("link");e.id="google-fonts",e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap",document.head.appendChild(e)}const d=`
    <header class="glass-panel" style="margin-bottom: 30px;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <a href="/" class="logo">WebTools<span style="color:#fff">Suite</span></a>
        <nav class="nav-links">
          <a href="/" class="nav-item ${s==="home"?"active":""}">ホーム</a>
          <div class="dropdown">
            <button class="nav-item dropdown-toggle">ツール一覧 ▾</button>
            <div class="dropdown-menu glass-panel">
              <a href="/qrcode.html">📱 QRコード</a>
              <a href="/image.html">🖼️ 画像圧縮</a>
              <a href="/password.html">🔒 パスワード</a>
              <a href="/text.html">📝 文字数</a>
              <a href="/base64.html">🔄 Base64</a>
              <a href="/json.html">🔧 JSON整形</a>
              <a href="/color.html">🎨 カラー変換</a>
              <a href="/uuid.html">🆔 UUID生成</a>
              <hr style="border:0; border-top:1px solid rgba(255,255,255,0.1); margin:4px 0;">
              <a href="/url.html">🌐 URL変換</a>
              <a href="/timestamp.html">⏰ Unix時間</a>
              <a href="/lorem.html">📄 Lorem Ipsum</a>
              <a href="/markdown.html">👁️ Markdown</a>
              <a href="/useragent.html">🔍 UA解析</a>
              <a href="/diff.html">⚖️ 差分比較</a>
              <a href="/units.html">📏 単位変換</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  `,p=`
    <footer>
      <p>&copy; 2026 Web Tools Suite. All logic runs locally in your browser.<br>
        <a href="/privacy.html">プライバシーポリシー</a> | 
        <a href="/terms.html">利用規約</a> | 
        <a href="/contact.html">お問い合わせ</a>
      </p>
    </footer>
  `,t=`
    <div class="container" style="margin-top: 20px;">
      <div style="text-align: center; margin-bottom: 20px;">
        <ins class="adsbygoogle ad-responsive" style="display:block" data-ad-client="ca-pub-1298950542115439"
          data-ad-slot="1234567890" data-ad-format="auto" data-full-width-responsive="true"></ins>
      </div>
    </div>
  `,o=document.getElementById("app");if(o){const e=document.createElement("div");e.className="container",e.innerHTML=d,document.body.insertBefore(e,o.parentElement);const a=document.createElement("div");a.innerHTML=t,document.body.insertBefore(a,o.parentElement);const n=document.createElement("div");n.innerHTML=p,document.body.appendChild(n)}r&&(document.title=`${r} - Web Tools Suite`);const i=document.querySelector(".dropdown-toggle"),y=document.querySelector(".dropdown-menu");i&&(i.addEventListener("click",e=>{e.stopPropagation(),y.classList.toggle("show")}),document.addEventListener("click",()=>{y.classList.remove("show")})),setTimeout(q,500);const u="https://tmpacc100.github.io",c=s==="home"?u+"/":`${u}/${s}.html`,h=document.querySelector('meta[name="description"]')?.content||"登録不要・インストール不要。すべての処理がブラウザ内で完結する、安全で高速なWebツール集です。";let m=document.querySelector('link[rel="canonical"]');m||(m=document.createElement("link"),m.rel="canonical",document.head.appendChild(m)),m.href=c;const w={"og:type":"website","og:url":c,"og:title":document.title,"og:description":h,"og:image":`${u}/vite.svg`,"og:site_name":"Web Tools Suite","twitter:card":"summary","twitter:title":document.title,"twitter:description":h};Object.entries(w).forEach(([e,a])=>{let n=document.querySelector(`meta[property="${e}"]`)||document.querySelector(`meta[name="${e}"]`);n||(n=document.createElement("meta"),e.startsWith("og:")?n.setAttribute("property",e):n.setAttribute("name",e),document.head.appendChild(n)),n.content=a});const S={"@context":"https://schema.org","@type":"WebApplication",name:r||"Web Tools Suite",url:c,description:h,applicationCategory:"UtilitiesApplication",operatingSystem:"Any",offers:{"@type":"Offer",price:"0",priceCurrency:"JPY"}},g={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:u}]};s!=="home"&&g.itemListElement.push({"@type":"ListItem",position:2,name:r,item:c});const f=document.createElement("script");f.type="application/ld+json",f.textContent=JSON.stringify(g),document.head.appendChild(f);const b=document.querySelectorAll(".faq-item");if(b.length>0){const e={"@context":"https://schema.org","@type":"FAQPage",mainEntity:[]};b.forEach(n=>{const v=n.querySelector(".faq-question").textContent.replace("Q.","").trim(),L=n.querySelector(".faq-answer").textContent.replace("A.","").trim();e.mainEntity.push({"@type":"Question",name:v,acceptedAnswer:{"@type":"Answer",text:L}})});const a=document.createElement("script");a.type="application/ld+json",a.textContent=JSON.stringify(e),document.head.appendChild(a)}setTimeout(()=>{const e=document.querySelector(".share-x"),a=document.querySelector(".share-line"),n=`【${r}】便利ツール見つけた！ #WebToolsSuite`;e&&(e.href=`https://twitter.com/intent/tweet?text=${encodeURIComponent(n)}&url=${encodeURIComponent(c)}`,e.target="_blank"),a&&(a.href=`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(c)}`,a.target="_blank")},500);let l=document.querySelector("#json-ld");l||(l=document.createElement("script"),l.id="json-ld",l.type="application/ld+json",document.head.appendChild(l)),l.textContent=JSON.stringify(S)}export{x as s};
