const fs = require("fs");
const path = require("path");
const version = Date.now();
// Шлях до папки білду
const buildPath = path.join(__dirname, "../build");
const jsPath = path.join(buildPath, "static/js");
const cssPath = path.join(buildPath, "static/css");
const indexPath = path.join(buildPath, "index.html");

console.log("indexPath:", indexPath);

// Функція для знаходження актуальних main.js та main.css
function getLatestFile(dir, prefix, ext) {
  const files = fs.readdirSync(dir);
  const match = files.find(
    (file) => file.startsWith(prefix) && file.endsWith(ext)
  );
  return match ? path.join(dir, match) : null;
}

// Знаходимо файли
const latestJS = getLatestFile(jsPath, "main.", ".js");
const latestCSS = getLatestFile(cssPath, "main.", ".css");

// Створюємо main.latest.js та main.latest.css
if (latestJS) {
  fs.copyFileSync(latestJS, path.join(jsPath, "main.latest.js"));
  console.log("✅ main.latest.js оновлено");
} else {
  console.error("❌ Помилка: Не знайдено main.js");
}

if (latestCSS) {
  fs.copyFileSync(latestCSS, path.join(cssPath, "main.latest.css"));
  console.log("✅ main.latest.css оновлено");
} else {
  console.error("❌ Помилка: Не знайдено main.css");
}

// Оновлення index.html для використання main.latest.js та main.latest.css
fs.readFile(indexPath, "utf8", (err, data) => {
  if (err) {
    console.error("❌ Помилка читання index.html:", err);
    return;
  }

  let updatedHtml = data

    .replace(
      /\/static\/js\/main\.[0-9a-z]+\.js/g,
      `/static/js/main.latest.js?v=${version}`
    )
    .replace(
      /\/static\/css\/main\.[0-9a-z]+\.css/g,
      `/static/css/main.latest.css?v=${version}`
    );
  fs.writeFile(indexPath, updatedHtml, "utf8", (err) => {
    if (err) {
      console.error("❌ Помилка запису index.html:", err);
      return;
    }
    console.log("Оригінальний index.html:", data);
    console.log("Оновлений index.html:", updatedHtml);
    console.log(
      "✅ index.html оновлено для використання main.latest.js та main.latest.css"
    );
  });
});
