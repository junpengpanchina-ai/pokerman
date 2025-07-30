# 宝可梦传说网站

一个现代化的宝可梦主题网站，提供完整的宝可梦图鉴、游戏攻略和社区交流平台。

## 🎯 项目特色

- **完整的宝可梦图鉴** - 包含所有宝可梦的详细信息、属性和技能
- **游戏攻略中心** - 提供详细的游戏攻略和技巧分享
- **社区论坛** - 宝可梦爱好者交流和分享的平台
- **新闻资讯** - 最新的宝可梦相关新闻和更新
- **响应式设计** - 完美适配桌面、平板和移动设备
- **现代化UI** - 采用最新的设计趋势和动画效果

## 🚀 技术栈

### 前端
- **Next.js 14** - React全栈框架
- **TypeScript** - 类型安全的JavaScript
- **Tailwind CSS** - 实用优先的CSS框架
- **React Icons** - 丰富的图标库
- **Framer Motion** - 流畅的动画库

### 后端 (计划中)
- **Node.js** - JavaScript运行时
- **Express.js** - Web应用框架
- **MongoDB** - NoSQL数据库
- **JWT** - 用户认证

## 📁 项目结构

```
pokemon-legends-website/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   └── globals.css        # 全局样式
├── components/            # React组件
│   ├── Header.tsx         # 网站头部
│   ├── Footer.tsx         # 网站底部
│   ├── Hero.tsx           # 首页英雄区域
│   ├── FeaturedPokemon.tsx # 热门宝可梦
│   ├── LatestGuides.tsx   # 最新攻略
│   ├── CommunityHighlights.tsx # 社区热门
│   └── NewsCarousel.tsx   # 新闻轮播
├── lib/                   # 工具库
├── types/                 # TypeScript类型定义
├── public/                # 静态资源
└── docs/                  # 文档
```

## 🎨 设计系统

### 色彩方案
- **主色调**: #FF6B6B (宝可梦红)
- **辅助色**: #4ECDC4 (宝可梦蓝)
- **强调色**: #FFE66D (宝可梦黄)
- **背景色**: #F7F7F7 (浅灰)
- **文字色**: #2C3E50 (深灰)

### 字体
- **标题**: Pokemon Solid
- **正文**: Roboto
- **代码**: Fira Code

## 🛠️ 开发指南

### 环境要求
- Node.js 18+
- npm 或 yarn

### 安装依赖
```bash
npm install
# 或
yarn install
```

### 开发模式
```bash
npm run dev
# 或
yarn dev
```

### 构建生产版本
```bash
npm run build
# 或
yarn build
```

### 启动生产服务器
```bash
npm run start
# 或
yarn start
```

### 代码检查
```bash
npm run lint
# 或
yarn lint
```

## 📱 功能模块

### 1. 宝可梦图鉴
- 完整的宝可梦数据库
- 详细的属性信息
- 技能列表和效果
- 进化链展示
- 搜索和筛选功能

### 2. 攻略中心
- 游戏攻略分类
- 难度等级标识
- 作者信息
- 阅读时间估算
- 评论系统

### 3. 社区论坛
- 用户注册/登录
- 发帖和回复
- 话题分类
- 点赞和收藏
- 用户个人资料

### 4. 新闻资讯
- 官方新闻发布
- 游戏更新公告
- 活动信息
- 相关资讯聚合

## 🔧 配置说明

### 环境变量
创建 `.env.local` 文件：
```env
POKEAPI_BASE_URL=https://pokeapi.co/api/v2
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Tailwind CSS 配置
项目使用自定义的Tailwind配置，包含宝可梦主题色彩和动画。

## 📊 性能优化

- **图片优化** - 使用Next.js Image组件
- **代码分割** - 自动代码分割和懒加载
- **缓存策略** - 静态资源缓存
- **SEO优化** - Meta标签和结构化数据

## 🧪 测试

```bash
# 运行测试
npm run test

# 监听模式
npm run test:watch
```

## 📦 部署

### Vercel (推荐)
1. 连接GitHub仓库
2. 自动部署和预览

### Netlify
1. 连接GitHub仓库
2. 设置构建命令: `npm run build`
3. 设置发布目录: `.next`

### 自托管
```bash
npm run build
npm run start
```

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [PokeAPI](https://pokeapi.co/) - 宝可梦数据API
- [Next.js](https://nextjs.org/) - React框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS框架
- [React Icons](https://react-icons.github.io/react-icons/) - 图标库

## 📞 联系我们

- 项目主页: [GitHub](https://github.com/your-username/pokemon-legends-website)
- 问题反馈: [Issues](https://github.com/your-username/pokemon-legends-website/issues)
- 邮箱: contact@pokemon-legends.com

---

**宝可梦传说网站** - 让我们一起探索宝可梦的奇妙世界！ 🌟 