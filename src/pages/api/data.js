import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  // const file = await fs.readFile(filePath, "utf8");
  // const data = JSON.parse(file);

  await fetch(
    "http://localhost:8888/kianproperties/wp-json/wp/v2/posts/?acf_format=standard"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data); // Handle the data from the response
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });

  // res.status(200).json(data);
}
