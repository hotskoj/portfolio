import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { Client } from "@notionhq/client";
import "dotenv/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, "../dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

const app = express();
const notion = new Client({
  auth: process.env.NOTION_KEY,
});

app.use(morgan("dev"));
app.use(express.static(DIST_DIR));

app.get("/skills", async (req, res) => {
  try {
    const skills = await notion.databases.query({
      database_id: process.env.SKILL_DB_ID,
      sorts: [
        {
          property: "Order",
          direction: "ascending",
        },
      ],
    });
    res.send(skills.results.map(item => {
        return {
            id: item.id,
            skill: item.properties.Name.title[0].text.content
        }
    }));
  } catch (error) {
    res.send([]);
  }
});

app.get("/hobbies", async (req, res) => {
  try {
    const hobbies = await notion.databases.query({
      database_id: process.env.HOBBY_DB_ID,
    });

    res.send(
      hobbies.results.map((item) => {
        return {
          id: item.id,
          hobby: item.properties.Description.title[0].text.content,
        };
      })
    );
  } catch (error) {
    res.send([]);
  }
});

app.get("/project", async (req, res) => {
  try {
    const projects = await notion.databases.query({
      database_id: process.env.PROJECT_DB_ID,
      sorts: [
        {
          property: "Order",
          direction: "ascending",
        },
      ],
    });
    res.send(
      projects.results.map((item) => {
        return {
          id: item.id,
          name: item.properties.Name.title[0].plain_text,
          img: item.properties["Files & media"].files[0].file.url,
          description: item.properties.Description.rich_text[0].plain_text,
          git: item.properties.gitURL.rich_text[0].href,
          url: item.properties.URL.url,
        };
      })
    );
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.get("*", (req, res) => {
  res.sendFile(HTML_FILE);
});

export default app;
