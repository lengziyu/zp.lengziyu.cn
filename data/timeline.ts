export type TimelineItem = {
  date: string;
  company: string;
  role: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    date: "2023.03-至今",
    company: "鲁班（广东）科技有限公司",
    role: "前端开发工程师",
    description: "负责 ERP 企业管理系统相关前端开发，参与 AI 相关项目开发，围绕企业管理场景推进业务功能迭代、页面交互优化与日常维护。",
  },
  {
    date: "2021.09-2023.01",
    company: "昭阳健康（广州）科技有限公司",
    role: "前端开发工程师",
    description: "负责患者端小程序重构、IM 聊天、腾讯/云信音视频、基因检测、药单支付与上门打针 H5 等核心模块。",
  },
  {
    date: "2019.11-2021.09",
    company: "广东惠龙邦电子商务有限公司",
    role: "前端开发",
    description: "独立负责 B2B 用户版/供应版 APP、管理后台、H5 活动页开发，完成 uni-app 跨端开发、上架审核与版本更新。",
  },
  {
    date: "2017.06-2019.11",
    company: "广州市一呼百应网络技术股份有限公司",
    role: "前端开发工程师",
    description: "负责工业品直卖网 PC、H5、小程序、运营后台与商家后台，推进 Vue SEO 方案、通用组件与主要业务模块开发。",
  },
  {
    date: "2015.05-2017.06",
    company: "恒拓开源信息科技股份有限公司",
    role: "前端开发工程师",
    description: "参与南航项目与创新分享项目，负责 React、Webpack、Node.js 等技术实践、飞行航线可视化和内部 npm 系统搭建。",
  },
];
