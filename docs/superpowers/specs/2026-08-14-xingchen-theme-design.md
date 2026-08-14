# 学术主页中度美化设计（星辰风格 · 学术微调）

日期：2026-08-14  
仓库：`waterdisappear/waterdisappear.github.io`  
状态：待用户确认后进入实现计划

## 1. 目标与范围

在保留 AcadHomepage「左侧作者栏 + 右侧正文」结构与现有 Markdown 内容的前提下，用独立主题覆盖层吸收「星辰 AI 公司风」的现代感，并做学术向配色微调。

**做：**

- 页面底色、侧栏卡片化、分区标题、论文卡、链接按钮、克制悬停/入场动效
- 以 CSS（+ 少量可选 JS）实现，内容文件尽量不动

**不做：**

- 不改成单栏落地页 / 不重写论文条目 HTML 结构
- 不引入公司站式公告条、招生大卡、指标条
- 不改动论文正文、教育经历、Services 文案（本规格仅覆盖视觉）

## 2. 已确认决策

| 项 | 选择 |
|---|---|
| 美化深度 | B · 中度美化 |
| 配色 | 2 · 学术微调（蓝青为主，弱紫） |
| 实现路径 | 1 · 独立 theme 覆盖层 |

参考视觉来源：`06_星辰_AI公司风.html`（浅底、圆角白卡、渐变点缀、轻悬停）。

## 3. 视觉系统

### 3.1 CSS 变量

```css
:root {
  --bg: #F7F9FC;
  --card: #FFFFFF;
  --ink: #0B1220;
  --dim: #5A6A85;
  --line: #E4E9F2;
  --blue: #3B6FF5;
  --cyan: #22C7E8;
  --violet: #7C5CFC; /* 仅少量点缀 */
  --grad: linear-gradient(120deg, #3B6FF5, #22C7E8);
  --radius: 18px;
  --shadow: 0 16px 40px rgba(11, 18, 32, 0.08);
}
```

### 3.2 字体

- 正文：`"PingFang SC", "HarmonyOS Sans SC", "Microsoft YaHei", "Noto Sans SC", system-ui, sans-serif`
- 小标签：`"SF Mono", "Cascadia Mono", Consolas, monospace`

### 3.3 气质

浅灰蓝学术页 + 蓝青强调；避免强紫渐变主视觉、强 glow、过多 pill 堆叠。

## 4. 组件规格

### 4.1 全局

- `body` / `#main` 背景 → `--bg`
- 选中文本：蓝底白字
- 链接默认继承，强调链接用 `--blue`

### 4.2 侧栏（`.sidebar` / `.profile_box`）

- 白底、`--radius`、`1px solid --line`、轻阴影
- 头像：圆角矩形 + 细渐变描边（或伪元素环）
- 姓名：加粗、深色；bio：蓝色小字或轻标签感
- 社交列表：悬停变蓝，间距收紧

### 4.3 分区标题（`h1` / 带 emoji 的标题）

- 上方可选等宽小标签（letter-spacing 加大、`--blue`）
- 标题字重加强；与下方内容间距参考星辰 `sec-head`

实现优先用 CSS（`:first-letter` / 相邻选择器）或在覆盖层对 `.page__content h1` 统一样式；**不强制改 Markdown 加标签文字**，以免动内容。若纯 CSS 难以生成 “01 · ABOUT” 文案，则仅做字重、色、底部分割/左侧色条，不硬造编号文案。

### 4.4 论文卡（`.paper-box`）

- 白底、圆角、细边框；条目间距加大
- 去掉旧版图片重灰阴影；缩略图轻阴影 + 圆角
- `.badge`：蓝青渐变小 pill、白字
- Paper / BibTex / 知乎 / Code 等链接：浅底圆角小按钮；悬停边框/文字变蓝
- 悬停：`translateY(-3px~-4px)` + `--shadow`；左侧 3px `--grad` 色条（默认透明，悬停显现）

### 4.5 Intro / Educations / Services

- Intro 保持两端对齐；内联链接蓝色
- 列表项间距略增；无链接同蓝

### 4.6 动效

- 卡片悬停过渡约 `0.25s–0.3s`
- 可选：`.paper-box` / 侧栏入场淡入上移（IntersectionObserver，尊重 `prefers-reduced-motion`）
- 不做强光晕、大面积装饰动画

## 5. 技术实现

### 5.1 文件

| 文件 | 作用 |
|---|---|
| `_sass/_xingchen-theme.scss`（新建） | 全部视觉覆盖与变量 |
| `assets/css/main.scss` | `@import "xingchen-theme";`（置于现有 paper-box 规则之后，便于覆盖） |
| `assets/js/theme-enhance.js`（可选） | 入场 reveal；若动效全用 CSS 则可省略 |
| `_includes/scripts.html` 或 `head/custom.html` | 仅在需要 JS 时引入 |

### 5.2 原则

- 覆盖优先，少改 `_sidebar.scss` / `_page.scss` 源文件
- 不修改 `_pages/includes/*.md` 内容结构（除非为挂 class 所必需；本规格默认不改）
- 移动端：保持现有断点；卡片改为全宽堆叠时圆角与间距仍适用

### 5.3 验收

- 桌面：侧栏卡片化、论文卡悬停、徽章与链接按钮可读
- 窄屏：布局不破版、图片不溢出
- 对比「星辰」参考：能看出同源气质，但更学术、紫更弱
- 内容与链接行为与改版前一致

## 6. 明确非目标

- 不重建 Hero / 横向成果轨 / 双栏动态区 / 深色 footer 招商块
- 不更换头像图、不改 SEO/Analytics 配置
- 本规格不包含提交/发布步骤（由用户另行指示）

## 7. 开放问题（已关闭）

- 美化深度、配色、实现路径均已确认；无阻塞项。
