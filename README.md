# vite-react-admin

vite-react-admin 是一个基于 vite 和 react 的 react-admin 中后台项目模板。

开箱即用，无需配置，直接上手。

## 技术栈

- vite
- react
- react-admin
- react-router-dom
- axios
- antd
- sass
- redux
- react-i18next
- typescript

## 功能

- 登录
- 权限管理
- 国际化
- 主题
- 多语言
- 多主题

## 快速开始

### 安装依赖

```bash
cd my-react-admin
npm install

# 或使用 yarn
yarn

# 或使用 pnpm
pnpm install
```

### 启动项目

```bash
npm run dev

# 或使用 yarn
yarn dev

# 或使用 pnpm
pnpm dev
```

## 目录结构

```tree
├── public/              # 静态公共资源目录
├── src/                 # 源代码目录
│   ├── assets/         # 静态资源文件(图片、字体等)
│   ├── components/     # 公共组件
│   ├── layouts/        # 布局组件
│   ├── pages/          # 页面组件
│   ├── router/         # 路由配置
│   ├── store/          # 状态管理
│   ├── styles/         # 全局样式文件
│   ├── utils/          # 工具函数
│   ├── services/       # API 服务
│   ├── hooks/          # 自定义 Hooks
│   ├── constants/      # 常量配置
│   ├── types/          # TypeScript 类型定义
│   ├── locales/        # 国际化语言包
│   ├── App.tsx         # 应用入口组件
│   └── main.tsx        # 应用入口文件
├── .env                # 环境变量
├── .env.development    # 开发环境变量
├── .env.production     # 生产环境变量
├── .eslintrc.js        # ESLint 配置
├── .prettierrc         # Prettier 配置
├── tsconfig.json       # TypeScript 配置
├── vite.config.ts      # Vite 配置
└── package.json        # 项目依赖配置
```

## 开发指南

### 新增页面

1. 在 `src/pages` 下创建页面组件
2. 在 `src/router` 中配置路由
3. 在 `src/constants/menu.ts` 中添加菜单项

### 权限控制

项目使用基于角色的访问控制（RBAC），详细配置在 `src/constants/permission.ts`

### 样式主题

使用 Ant Design 的主题定制功能，配置文件在 `src/styles/theme.ts`

## 构建部署

### 构建项目

```shell
npm run build

# 或使用 yarn
yarn build

# 或使用 pnpm
pnpm build
```

### 预览构建结果

```shell
npm run preview

# 或使用 yarn
yarn preview

# 或使用 pnpm
pnpm preview
```

## 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 许可证

本项目使用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件
