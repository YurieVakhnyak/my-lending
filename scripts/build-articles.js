import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const contentDir = "./src/content/articles";
const outputFile = "./public/data/articles/index.json";

/**
 * Нормалізація slug:
 * – тільки латиниця
 * – без кирилиці
 * – без спецсимволів
 */
function sanitizeSlug(slug = "") {
  return slug
    .toLowerCase()
    .normalize("NFD")                  // розбиває літери + діакритики
    .replace(/[\u0300-\u036f]/g, "")   // прибирає діакритику
    .replace(/[^a-z0-9-]/g, "")        // прибирає ВСЕ, крім a-z 0-9 -
    .replace(/-+/g, "-")               // прибирає подвійні дефіси
    .replace(/^-|-$/g, "");            // дефіси на початку/кінці
}

function parseUA(dateStr) {
  const [d, m, y] = dateStr.split(".");
  return new Date(`${y}-${m}-${d}`);
}

const files = fs.readdirSync(contentDir);

const articles = files.map((file) => {
  const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
  const { data, content } = matter(raw);

  const safeSlug = sanitizeSlug(data.slug);

  if (safeSlug !== data.slug) {
    console.warn(`⚠ slug виправлено: "${data.slug}" → "${safeSlug}"`);
  }

  return {
    title: data.title,
    slug: safeSlug,
    date: data.date,
    text: `<div>${marked(content)}</div>`
  };
});

const sortedArticles = [...articles].sort(
  (a, b) => parseUA(b.date) - parseUA(a.date)
);

fs.writeFileSync(
  outputFile,
  JSON.stringify(sortedArticles, null, 2)
);

console.log("✔ articles index.json generated");



