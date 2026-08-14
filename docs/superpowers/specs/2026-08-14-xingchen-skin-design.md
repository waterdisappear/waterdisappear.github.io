# 星辰风轻量换肤设计

日期：2026-08-14  
范围：方案 A — 保留 AcadHomepage 侧栏与论文结构，统一视觉气质

## 目标

将个人主页视觉对齐「星辰 AI 公司风」：浅底、蓝紫青渐变、圆角卡片、细线边框、轻悬浮；侧栏与正文同一色板。

## 不做

- 不重做单栏落地页 / 不改 Markdown 内容结构
- 不加招生公告条、营销 CTA

## 实现

- 新建 `_sass/_xingchen-theme.scss`（`main.scss` 已 `@import "xingchen-theme"`）
- 补全缺失的 `.paper-box` / `.badge` 布局与星辰化样式
- 覆盖 body / masthead / sidebar / 标题 / 链接
- 沿用 `assets/js/theme-enhance.js` 的入场动效

## Token

- bg `#F7F9FC` · card `#FFFFFF` · ink `#0B1220` · dim `#5A6A85` · line `#E4E9F2`
- blue `#3B6FF5` · violet `#7C5CFC` · cyan `#22C7E8`
- grad `linear-gradient(120deg, #3B6FF5, #7C5CFC 60%, #22C7E8)`
