/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://savora-next.vercel.app",

  generateRobotsTxt: true,

  generateIndexSitemap: true,

  sitemapSize: 5000,

  changefreq: "weekly",

  priority: 0.7,

  autoLastmod: true,

  exclude: ["/404", "/500", "/api/*"],

  robotsTxtOptions: {
    additionalSitemaps: ["https://savora-next.vercel.app/sitemap.xml"],
  },
};
