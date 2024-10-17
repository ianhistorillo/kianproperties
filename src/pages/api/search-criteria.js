import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), "public/data/search-criteria.json");
  const file = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(file);
  res.status(200).json(data);
}
