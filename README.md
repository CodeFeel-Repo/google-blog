# Google Blogger Custom Assets

구글 블로그(Blogger) 운영을 위한 커스텀 스크립트 및 스타일시트 저장소입니다.
GitHub과 jsDelivr CDN을 연동하여 블로그 테마에 전역으로 적용할 수 있도록 구성되었습니다.

## 📂 파일 구성 (File Overview)

* **`code-block.css`**
  * 다크 모드 기반의 깔끔한 코드 블록 UI와 복사 버튼 디자인을 담당하는 스타일시트.
* **`code-block.js`**
  * 코드 블록 내의 텍스트를 클립보드에 복사하고, 버튼 상태를 시각적으로 변경해 주는 자바스크립트.
* **`protect.js`**
  * 블로그 콘텐츠 보호를 위해 F12(개발자 도구), 마우스 우클릭, 텍스트 드래그를 차단하는 1차 방어 스크립트.
* **`index.html`**
  * 로컬 환경에서 위의 스크립트와 스타일이 정상적으로 작동하는지 통합 테스트하기 위한 템플릿 파일.

---

## 🚀 적용 방법 (How to Use)

### 1. 블로그 스킨(테마) 전역 설정
구글 블로거 관리자의 **[테마] ➔ [HTML 편집]** 메뉴에서 아래 코드를 삽입합니다.
> **주의:** `[깃허브아이디]`와 `[저장소이름]` 부분을 실제 본인의 GitHub 정보로 변경하여 사용하세요.

**CSS 추가 (`<head>` 태그 내부):**
```html
<link href='https://cdn.jsdelivr.net/gh/CodeFeel-Repo/google-blog@main/code-block.css' rel='stylesheet'/>

```

**JavaScript 추가 (`</body>` 태그 바로 위):**

```html
<!-- 코드 복사 기능 -->
<script src='https://cdn.jsdelivr.net/gh/CodeFeel-Repo/google-blog@main/code-block.js'/>
<!-- 불펌 방지 기능 -->
<script src='https://cdn.jsdelivr.net/gh/CodeFeel-Repo/google-blog@main/code-protect.js'/>
```

### 2. 블로그 포스팅에서 코드 블록 사용하기

블로그 글 작성 시 **[HTML 보기]** 모드로 전환한 후, 코드 삽입이 필요한 곳에 아래 양식을 붙여넣어 사용합니다.

```html
<div class="code-container">
  <div class="code-header">
    <span>언어이름(예: JavaScript)</span>
    <button class="copy-btn" onclick="copyCode(this)">Copy</button>
  </div>
  <pre class="code-content"><code>
// 여기에 소스코드를 작성하세요.
// 꺾쇠 기호(<, >)는 HTML 충돌 방지를 위해 &lt; 와 &gt; 로 치환하여 입력해야 합니다.
  </code></pre>
</div>

<div class="code-container"><div class="code-header"><span></span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre class="code-content"><code>Code-Document</code></pre></div>
```

---

## 💡 주의사항 (Notes)

* 깃허브에서 코드를 수정한 후 블로그에 즉시 반영되지 않는다면, jsDelivr CDN의 캐시 때문입니다. 브라우저 강력 새로고침을 하거나 일정 시간이 지나면 정상 반영됩니다.
* `protect.js`의 콘텐츠 보호 기능은 자바스크립트 기반이므로 완벽한 차단은 불가능합니다. 방문자의 무단 스크랩을 번거롭게 만드는 '효과적인 허들' 용도로 활용해 주세요.