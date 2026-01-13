function v(){const y=document.querySelector("#app");y.innerHTML=`
    <div class="glass-panel tool-view">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
        <h2 style="font-size: 1.5rem;">🔒 パスワード生成</h2>
        <a href="#" class="glass-btn" style="padding: 8px 16px; font-size: 0.9rem;">戻る</a>
      </div>

      <!-- Result Display -->
      <div style="position: relative; margin-bottom: 24px;">
        <input type="text" id="pw-result" class="glass-input" readonly 
          style="font-size: 1.5rem; text-align: center; padding-right: 50px; height: 60px; font-family: monospace;" 
          placeholder="生成結果がここに表示されます">
        <button id="copy-btn" title="コピー" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: none; border: none; color: white; cursor: pointer; font-size: 1.2rem;">
          📋
        </button>
      </div>

      <!-- Controls -->
      <div style="display: flex; gap: 20px; flex-wrap: wrap; margin-bottom: 24px;">
        <div style="flex: 1; min-width: 200px;">
          <label class="input-label">長さ: <span id="len-val">12</span>文字</label>
          <input type="range" id="pw-length" min="4" max="64" value="12" style="width: 100%; accent-color: var(--accent-color);">
        </div>
        
        <div style="flex: 1; display: flex; flex-direction: column; gap: 10px; justify-content: center;">
          <label style="display: flex; align-items: center; cursor: pointer;">
            <input type="checkbox" id="chk-upper" checked style="accent-color: var(--accent-color); margin-right: 8px;"> A-Z (大文字)
          </label>
          <label style="display: flex; align-items: center; cursor: pointer;">
            <input type="checkbox" id="chk-lower" checked style="accent-color: var(--accent-color); margin-right: 8px;"> a-z (小文字)
          </label>
          <label style="display: flex; align-items: center; cursor: pointer;">
            <input type="checkbox" id="chk-num" checked style="accent-color: var(--accent-color); margin-right: 8px;"> 0-9 (数字)
          </label>
          <label style="display: flex; align-items: center; cursor: pointer;">
            <input type="checkbox" id="chk-sym" style="accent-color: var(--accent-color); margin-right: 8px;"> !@# (記号)
          </label>
        </div>
      </div>

      <button id="gen-btn" class="glass-btn" style="width: 100%; border-color: var(--accent-color); font-size: 1.1rem;">
        パスワードを生成する
      </button>

      <!-- Ad Slot -->
      <div style="text-align: center; margin-top: 24px;">
        <ins class="adsbygoogle ad-responsive"
             style="display:block"
             data-ad-client="ca-pub-0000000000000000"
             data-ad-slot="1234567890"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
    </div>
  `;const l=document.getElementById("pw-result"),n=document.getElementById("copy-btn"),o=document.getElementById("pw-length"),x=document.getElementById("len-val"),f=document.getElementById("gen-btn"),b=()=>x.textContent=o.value;o.addEventListener("input",b);const g=()=>{const a=parseInt(o.value),c=document.getElementById("chk-upper").checked,i=document.getElementById("chk-lower").checked,r=document.getElementById("chk-num").checked,s=document.getElementById("chk-sym").checked;if(!c&&!i&&!r&&!s){alert("少なくとも1つの文字種を選択してください");return}const d="ABCDEFGHIJKLMNOPQRSTUVWXYZ",p="abcdefghijklmnopqrstuvwxyz",u="0123456789",m="!@#$%^&*()_+-=[]{}|;:,.<>?";let t="";c&&(t+=d),i&&(t+=p),r&&(t+=u),s&&(t+=m);let e="";c&&(e+=d[Math.floor(Math.random()*d.length)]),i&&(e+=p[Math.floor(Math.random()*p.length)]),r&&(e+=u[Math.floor(Math.random()*u.length)]),s&&(e+=m[Math.floor(Math.random()*m.length)]);for(let h=e.length;h<a;h++)e+=t[Math.floor(Math.random()*t.length)];e=e.split("").sort(()=>.5-Math.random()).join(""),l.value=e};f.addEventListener("click",g),n.addEventListener("click",()=>{l.value&&navigator.clipboard.writeText(l.value).then(()=>{const a=n.innerText;n.innerText="✅",setTimeout(()=>n.innerText=a,1500)})}),g()}export{v as render};
