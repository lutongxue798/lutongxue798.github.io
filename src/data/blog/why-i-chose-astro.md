---
title: "为什么我选择 Astro 来搭建个人网站"
author: "你的名字"
pubDatetime: 2026-05-01T14:00:00.000+08:00
slug: why-i-chose-astro
featured: false
draft: false
tags:
  - Astro
  - 前端开发
  - 静态网站
description: "分享我选择 Astro 作为静态网站生成器的原因和体验"
timezone: "Asia/Shanghai"
---

在构建这个个人网站时，我对比了多个静态网站生成器（SSG），最终选择了 [Astro](https://astro.build/)。以下是我的选择理由。

## 为什么选择静态网站生成器？

相比于动态网站（如 WordPress、Hexo 等），静态网站生成器有以下优势：

- ⚡ **更快的加载速度** - 预先生成的 HTML 页面，无需服务器端渲染
- 🔒 **更高的安全性** - 没有数据库和动态脚本，攻击面更小
- 💰 **更低的托管成本** - 可以免费托管在 GitHub Pages、Vercel 等平台
- 📝 **更好的写作体验** - 使用 Markdown 编写内容，专注于内容本身

## 为什么选择 Astro？

在众多 SSG 中，Astro 有以下独特优势：

### 1. 零 JavaScript 默认策略

Astro 默认只向浏览器发送纯 HTML 和 CSS，JavaScript 可以按需加载。这意味着：

- 更快的首屏加载速度
- 更好的 SEO 表现
- 更小的页面体积

### 2. 现代化的开发体验

- 🎨 使用最新的 Web 标准
- 🔧 优秀的 TypeScript 支持
- 📦 集成 TailwindCSS 等现代工具
- 🚀 热模块替换（HMR）开发体验

### 3. 内容优先的设计理念

Astro 专门为内容驱动的网站设计，非常适合：

- 个人博客
- 文档网站
- 作品集展示
- 营销落地页

### 4. 活跃的社区和丰富的主题

- 官方维护的 [AstroPaper](https://github.com/satnaing/astro-paper) 等优秀主题
- 活跃的 Discord 社区
- 持续更新的功能和文档

## 使用体验

搭建这个网站的过程非常顺利：

```bash
# 使用 AstroPaper 模板创建项目
npm create astro@latest -- --template satnaing/astro-paper

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

只需几条命令，网站就运行起来了！整个过程不到 30 分钟。

## 总结

如果你也在考虑搭建个人网站或博客，我强烈推荐尝试 Astro。它的现代化理念和优秀的开发体验，会让你爱上构建静态网站的过程。

---

**相关链接：**
- [Astro 官方文档](https://docs.astro.build/)
- [AstroPaper 主题](https://github.com/satnaing/astro-paper)
- [部署到 GitHub Pages 指南](https://docs.astro.build/en/guides/deploy/github/)
