import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const contentDir = "./src/content/articles";
const outputFile = "./public/data/articles/index.json";

const files = fs.readdirSync(contentDir);

const articles = files.map((file) => {
  const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
  const { data, content } = matter(raw);

  return {
    title: data.title,
    slug: data.slug,
    date: data.date,
    text: `<div>${marked(content)}</div>`
  };
});

function parseUA(dateStr) {
  const [d, m, y] = dateStr.split(".");
  return new Date(`${y}-${m}-${d}`);
}

const sortedArticles = [...articles].sort(
  (a, b) => parseUA(b.date) - parseUA(a.date)
);

fs.writeFileSync(
  outputFile,
  JSON.stringify(sortedArticles, null, 2)
);

console.log("✔ articles index.json generated");


