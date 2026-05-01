export const SITE = {
  website: "https://yourusername.github.io/personal-website/", // 请替换为你的 GitHub Pages URL
  author: "你的名字", // 请修改为你的名字
  profile: "https://github.com/yourusername", // 请修改为你的个人主页
  desc: "欢迎来到我的个人网站！这里分享我的技术思考和生活感悟。", // 网站描述
  title: "我的个人网站", // 网站标题
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // 在文章详情页显示返回按钮
  editPost: {
    enabled: true,
    text: "编辑页面",
    url: "https://github.com/yourusername/personal-website/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh-CN", // HTML 语言代码，中文网站使用 zh-CN
  timezone: "Asia/Shanghai", // 时区设置，中国使用 Asia/Shanghai
} as const;
