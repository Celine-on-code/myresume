# 林育芳 Celine｜個人履歷與作品集

以個人介紹、技能地圖、精選專案、工作經歷與專業認證，說明「我是誰、我會什麼，以及我想解決什麼問題」。

- **線上網站**：[celine-on-code.github.io/myresume](https://celine-on-code.github.io/myresume/)
- **主要聯絡方式**：[Email](mailto:linyufangs@gmail.com) · [LinkedIn](https://www.linkedin.com/in/linyufang/)

## 專案特色

- **清晰的個人定位**：說明 UI/UX 設計與前端開發的跨領域背景，以及希望解決的使用體驗與設計落地問題。
- **技能地圖**：依探索、設計、開發與交付流程整理專業技能。
- **專案與經歷**：以挑戰、方法與交付成果呈現精選案例，並提供工作經歷與證照資訊。
- **響應式設計（RWD）**：使用 CSS Grid、Flexbox 與媒體查詢支援桌機、平板及手機。
- **互動體驗**：包含行動版導覽、區塊進場動畫、導覽列目前位置提示與 Canvas 背景。
- **無障礙考量**：使用語意化 HTML、鍵盤焦點樣式，並尊重減少動態效果的系統偏好設定。

## 使用技術

- HTML5 語意化結構
- CSS3：自訂樣式、CSS Grid、Flexbox、RWD 與動畫
- 原生 JavaScript：導覽互動、Intersection Observer、Canvas
- Tailwind CSS CDN：首頁使用的工具類別
- Google Fonts：Plus Jakarta Sans、Noto Sans TC

## 專案結構

```text
myresume/
├── index.html   # 網頁內容與語意化結構
├── styles.css   # 視覺樣式、元件與響應式斷點
├── script.js    # 動畫、證照資料、導覽與背景互動
└── README.md    # 專案說明與維護方式
```

## 本機預覽

本專案為靜態網站，無需安裝套件或建置流程。可直接開啟 `index.html`，或在專案根目錄執行簡易 HTTP 伺服器：

```bash
python3 -m http.server 8000
```

接著瀏覽 <http://localhost:8000>。

## 更新網站內容

1. 編輯 `index.html` 更新自我介紹、技能、專案、經歷與聯絡資訊。
2. 證照卡片資料定義於 `script.js` 的 `certs` 陣列。
3. 編輯 `styles.css` 調整色彩、元件樣式與 RWD 斷點。
4. 更新內容後，確認導覽連結的片段（例如 `#projects`）與對應區塊的 `id` 相符。

發佈前請確認外部連結有效、專案描述符合可公開資訊，並在手機與桌機寬度檢查版面。

## 部署

網站目前使用 GitHub Pages 發佈。若要在此專案部署，可於 GitHub 專案設定中的 **Pages** 選擇 `main` 分支及根目錄作為來源；推送變更後，GitHub Pages 會自動更新網站。

## Git Commit 慣例

提交訊息採用簡潔的 Conventional Commits 格式：

```text
<type>: <以動詞描述的變更>
```

常用類型：`feat`（新增功能）、`fix`（修正問題）、`docs`（文件）、`style`（不影響行為的樣式）、`refactor`（重構）。

範例：

```text
feat: add project portfolio and skill map
docs: expand setup and deployment guide
```
