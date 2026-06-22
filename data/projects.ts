export type Project = {
  name: string;
  description: string;
  tags: string[];
  role: string;
  status: string;
  icon: "price" | "toolbox" | "resume" | "navigation" | "environment" | "trending" | "voice" | "pageforge" | "kintrace";
  href: string;
};

export const projects: Project[] = [
  {
    name: "AI 比价与优惠",
    description: "基于 AI 的商品比价与优惠活动聚合平台，帮助用户快速发现更合适的价格和优惠信息。",
    tags: ["AI", "商品比价", "优惠聚合"],
    role: "独立开发",
    status: "已上线",
    icon: "price",
    href: "https://price.lengziyu.cn",
  },
  {
    name: "牛马百宝箱",
    description: "为打工人准备的在线工具箱，覆盖图片处理、文档转换和二维码生成。",
    tags: ["Vue 3", "工具站", "响应式"],
    role: "独立开发",
    status: "已上线",
    icon: "toolbox",
    href: "https://niuma.lengziyu.cn",
  },
  {
    name: "在线简历生成器",
    description: "轻量、易用的在线简历编辑与生成工具，帮助用户快速制作个人简历。",
    tags: ["Vue 3", "简历编辑", "PDF"],
    role: "独立开发",
    status: "已上线",
    icon: "resume",
    href: "https://cv.lengziyu.cn",
  },
  {
    name: "AI 前沿导航",
    description: "聚合最新模型、Agent、开发工具与行业趋势的 AI 技术导航站。",
    tags: ["AI", "内容聚合", "导航站"],
    role: "独立开发",
    status: "持续维护",
    icon: "navigation",
    href: "https://nav.lengziyu.cn",
  },
  {
    name: "Envra",
    description: "面向开发者的跨平台环境管理桌面应用，统一管理本地开发环境。",
    tags: ["Desktop", "开发工具", "跨平台"],
    role: "独立开发",
    status: "已上线",
    icon: "environment",
    href: "https://envra.lengziyu.cn",
  },
  {
    name: "GitHub Trending Push",
    description: "抓取 GitHub Trending，经 AI 翻译后定时推送到 Telegram、飞书和企业微信。",
    tags: ["Python", "OpenAI", "GitHub Actions"],
    role: "开源项目",
    status: "持续维护",
    icon: "trending",
    href: "https://github.com/lengziyu/github-trending-push",
  },
  {
    name: "Voice Page Agent",
    description: "基于 page-agent 的语音唤醒插件，通过浏览器语音识别用自然语言控制网页，兼容 Vue 2/3。",
    tags: ["page-agent", "Vue 2/3", "TypeScript"],
    role: "开源项目",
    status: "持续维护",
    icon: "voice",
    href: "https://github.com/lengziyu/voice-page-agent",
  },
  {
    name: "PageForge",
    description: "企业官网模板与模块化拖拽编辑器，支持快速搭建和发布企业网站。",
    tags: ["可视化编辑", "低代码", "企业官网"],
    role: "独立开发",
    status: "已上线",
    icon: "pageforge",
    href: "https://pageforge.lengziyu.cn",
  },
  {
    name: "宗迹 KinTrace",
    description: "以清晰的交互体验呈现家族信息与关系脉络的数字化产品。",
    tags: ["Vue 3", "数据可视化", "产品设计"],
    role: "独立开发",
    status: "已上线",
    icon: "kintrace",
    href: "https://zj.lengziyu.cn",
  },
];
