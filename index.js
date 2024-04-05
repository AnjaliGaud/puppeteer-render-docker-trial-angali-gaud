const express = require("express");
const { scrapeLogic } = require("./scrapeLogic");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/scrape", async (req, res) => {
  try {
    const startTime = Date.now();
    const result = await scrapeLogic();
    const endTime = Date.now();
    const totalTime = endTime - startTime;
    console.log(`Scraping took ${totalTime} milliseconds.`);
    res.send(`result: ${result}\nTime taken: ${totalTime}`);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.get("/", (req, res) => {
  res.send("Render Puppeteer server is up and running! 😎Jessan ");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
