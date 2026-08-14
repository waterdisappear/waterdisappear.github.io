# 星辰主题覆盖层实现计划

日期：2026-08-14  
规格：`docs/superpowers/specs/2026-08-14-xingchen-theme-design.md`

## 文件

| 文件 | 变更 |
|---|---|
| `_sass/_xingchen-theme.scss` | 新建：变量 + 全局/侧栏/标题/论文卡/动效 |
| `assets/css/main.scss` | 末尾 `@import "xingchen-theme"` |
| `assets/js/theme-enhance.js` | 新建：可选入场 reveal |
| `_includes/scripts.html` | 引入 theme-enhance.js |

## 任务

1. 写 `_xingchen-theme.scss`（配色、body、masthead、sidebar、h1、paper-box、badge、链接按钮）
2. 接入 main.scss + 可选 reveal JS
3. 目视验收：桌面/窄屏不破版、悬停与徽章正常

## 验收

- 侧栏白卡、论文卡悬停上浮、badge 渐变 pill
- `prefers-reduced-motion` 下关闭入场动画
- Markdown 内容未改
