# Expert Portfolio

面向投资管理与战略规划专家的中英双语个人展示网站，用于呈现职业背景、专业能力、代表案例与行业观点，并提供合作联系入口。

A bilingual Chinese/English portfolio website for an investment management and strategic planning professional.

## 页面与功能

| 路径 | 页面 | 内容 |
| --- | --- | --- |
| `/` | 首页 | 专业定位、核心成就、价值主张与能力概览 |
| `/about` | 关于 | 职业背景与个人介绍 |
| `/expertise` | 专业能力 | 投资管理、战略规划、风险控制等能力展示 |
| `/projects` | 代表案例 | 项目案例展示 |
| `/insights` | 观点洞察 | 行业观点与专业内容 |
| `/contact` | 联系 | 联系方式与演示表单 |

- 支持中文与英文切换，默认中文；语言状态保存在当前页面会话中，刷新后恢复默认。
- 使用响应式布局，适配桌面与移动端。
- 使用 Wouter 实现客户端路由，并提供 404 页面。
- 内容直接维护在前端源码中；当前服务端负责静态资源托管与路由回退。

> 联系表单目前仅在浏览器控制台记录输入并显示成功提示，不会发送邮件或保存消息。正式使用前需要接入后端接口或表单服务，并替换页面中的示例联系方式。

## 技术栈

- **界面：** React 19、TypeScript、Tailwind CSS 4
- **组件：** shadcn/ui 风格组件、Radix UI、Lucide 图标
- **路由：** Wouter（仓库包含 pnpm 补丁）
- **开发与构建：** Vite 7、esbuild
- **生产服务：** Express 4
- **包管理与格式化：** pnpm、Prettier

具体依赖版本与脚本见 [package.json](./package.json)。

## 本地运行

建议使用 Node.js 22.12 或更高版本，以及项目 `packageManager` 字段指定的 pnpm 10.4.1。

```bash
git clone https://github.com/predsun/expert-portfolio.git
cd expert-portfolio
pnpm install --frozen-lockfile
pnpm dev
```

默认访问 <http://localhost:3000>。如果端口被占用，Vite 会尝试其他端口，以终端输出为准。

请使用 pnpm 安装依赖，以应用 [patches/wouter@3.7.1.patch](./patches/wouter@3.7.1.patch) 和仓库中的锁文件。

## 常用命令

| 命令 | 作用 |
| --- | --- |
| `pnpm dev` | 启动 Vite 开发服务器 |
| `pnpm check` | 执行 TypeScript 类型检查，不输出编译文件 |
| `pnpm build` | 构建前端并打包 Express 服务入口 |
| `pnpm preview` | 在本地预览已构建的前端 |
| `pnpm start` | 启动生产 Express 服务，需先完成构建 |
| `pnpm format` | 使用 Prettier 格式化项目文件，会修改文件 |

当前 `package.json` 未定义 `test` 脚本；`pnpm check` 是类型检查，不是自动化功能测试。

## 构建与部署

```bash
pnpm check
pnpm build
pnpm start
```

构建输出：

- `dist/public/`：前端 HTML、JavaScript、CSS 与静态资源。
- `dist/index.js`：Express 服务入口。

生产服务默认使用端口 `3000`，可以通过环境变量 `PORT` 修改。服务端会将未匹配的路径回退到 `index.html`，支持直接访问或刷新 `/about` 等页面。

`pnpm start` 使用 POSIX 风格的环境变量语法。在 Windows PowerShell 中，可在构建完成后执行：

```powershell
$env:NODE_ENV = "production"
node dist/index.js
```

部署 Express 服务时，需要保留运行时依赖，因为服务端构建使用 `--packages=external`。也可以将 `dist/public/` 部署至静态托管服务，但需要配置 SPA 回退规则，将页面路由重写到 `/index.html`。当前路由和链接使用站点根路径，部署到子目录前需相应调整配置与链接。

## 环境配置

Vite 从仓库根目录读取环境文件。页面入口 [client/index.html](./client/index.html) 引用了以下分析统计配置：

| 变量 | 用途 |
| --- | --- |
| `VITE_ANALYTICS_ENDPOINT` | 分析服务基础地址，页面会请求其 `/umami` 脚本 |
| `VITE_ANALYTICS_WEBSITE_ID` | 分析服务的网站标识 |
| `PORT` | 生产 Express 服务端口，默认 `3000` |

如需分析统计，请在构建前配置两个 `VITE_ANALYTICS_*` 变量；如不使用，请移除 `client/index.html` 中对应的统计脚本，避免未配置的占位符请求。所有 `VITE_*` 值都会暴露给浏览器，不应填写服务端密钥。

## 项目结构与内容维护

| 位置 | 用途 |
| --- | --- |
| [client/src/App.tsx](./client/src/App.tsx) | 路由、全局 Provider 与页面框架 |
| [client/src/pages/](./client/src/pages/) | 各页面内容与布局 |
| [client/src/contexts/LanguageContext.tsx](./client/src/contexts/LanguageContext.tsx) | 语言状态、导航与首页等翻译词典 |
| [client/src/components/](./client/src/components/) | 导航、页脚与可复用组件 |
| [client/src/components/ui/](./client/src/components/ui/) | 基础 UI 组件 |
| [client/src/index.css](./client/src/index.css) | 全局样式与主题变量 |
| [client/public/](./client/public/) | 静态资源 |
| [client/index.html](./client/index.html) | 页面标题、HTML 入口与统计脚本 |
| [server/index.ts](./server/index.ts) | 生产静态资源服务与 SPA 回退 |
| [shared/](./shared/) | 共享常量 |
| [vite.config.ts](./vite.config.ts) | 开发服务器、构建、别名与开发调试插件 |

修改内容时：

1. 在 `LanguageContext.tsx` 中更新共用翻译；其他页面还包含直接写在组件中的中英双语内容，需要同步修改。
2. 在 `client/src/pages/` 中更新职业背景、项目、观点及联系信息。
3. 修改导航或页脚时，查看 `Navigation.tsx`、`Footer.tsx` 和路由配置。
4. 运行 `pnpm check` 与 `pnpm build`，并在浏览器中检查中英文、移动端布局与页面导航。

## 内容与设计参考

- [CONTENT.md](./CONTENT.md)：中英双语内容规划。
- [DESIGN_SPEC.md](./DESIGN_SPEC.md)：视觉规范与内容策略。

以上文档用于参考，网站实际展示内容由前端源码决定，修改 Markdown 不会自动更新页面。

## 许可证

`package.json` 的 `license` 字段标注为 `MIT`；仓库目前尚未包含独立的 `LICENSE` 文件。
