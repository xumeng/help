const baseSiteConfig = {
  name: "职生机 职业生涯的导师伙伴",
  description: "职生机是您职业生涯的最佳导师伙伴之一",
  url: "https://help.gegegugu.com",
  ogImage: "https://help.gegegugu.com/logo.png",
  metadataBase: "/",
  keywords: [
    "职生机",
    "职生机 Help",
    "职生机 Jobot",
    "职业发展",
    "职业晋升",
    "职业培训",
    "职业生涯规划",
    "职业定位分析",
    "学习路线图",
    "学习资源推荐",
    "转行互联网",
    "转行计算机",
    "转行前后端",
    "全栈开发培训",
    "独立开发培训",
    "简历优化",
    "面试辅导",
    "项目实战",
  ],
  authors: [
    {
      name: "amonxu",
      url: "https://about.amonxu.com",
    },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export const SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "zh-CN",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
};
