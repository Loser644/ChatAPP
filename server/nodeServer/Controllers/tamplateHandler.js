import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import handlebars from "handlebars";

// recreate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function renderTemplate(templateName, templateData = {}) {
  try {
    const filePath = path.join(__dirname, "../EmailTamp", templateName + ".html");
    const source = await fs.readFile(filePath, "utf8");
    const template = handlebars.compile(source);
    return template(templateData);
  } catch (err) {
    console.error("❌ Template render error:", err);
    throw err;
  }
}

export { renderTemplate };
