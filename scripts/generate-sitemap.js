const fs = require("fs");
const path = require("path");

const SITE_URL = "https://psy-yv.com.ua";

const buildPath = path.join(__dirname, "../build");
const articlesPath = path.join(buildPath, "data/articles/index.json");
const sitemapPath = path.join(buildPath, "sitemap.xml");

const staticRoutes = [
  "/",
  "/about",
  "/contact",
  "/articles"
];

/**
 * Перетворення дати з DD.MM.YYYY → YYYY-MM-DD
 */
function toISODate(dateStr) {
  if (!dateStr) return null;

  const parts = dateStr.split(".");
  if (parts.length !== 3) return null;

  const [d, m, y] = parts;
  const iso = `${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;

  return /^\d{4}-\d{2}-\d{2}$/.test(iso) ? iso : null;
}

let urls = [];

/* === Статичні сторінки === */
staticRoutes.forEach((route) => {
  urls.push(`
  <url>
    <loc>${SITE_URL}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);
});

/* === Статті === */
if (!fs.existsSync(articlesPath)) {
  console.warn("⚠ articles index.json не знайдено, статті пропущено");
} else {
  const articles = JSON.parse(fs.readFileSync(articlesPath, "utf-8"));

  articles.forEach((article) => {
    if (!article.slug) {
      console.warn("⚠ Пропущена стаття без slug");
      return;
    }

    const lastmod = toISODate(article.date);

    if (!lastmod) {
      console.warn(`⚠ Некоректна дата у статті: ${article.slug}`);
    }

    urls.push(`
    <url>
      <loc>${SITE_URL}/articles/${article.slug}</loc>
      ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>`);
  });

  console.log(`📄 Додано статей у sitemap: ${articles.length}`);
}

/* === Фінальний sitemap === */
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("")}
</urlset>`;

fs.writeFileSync(sitemapPath, sitemap.trim());

console.log(`✅ sitemap.xml згенеровано (${urls.length} URL)`);
console.log(`📍 ${sitemapPath}`);

