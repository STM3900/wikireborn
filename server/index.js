const express = require("express");
const app = express();

const fetch = require("node-fetch");
require("dotenv").config();
const port = 3000;

const cors = require("cors");
app.use(cors());

async function getData() {
  const response = await fetch(
    `https://rest.minestrator.com/api/v1/server/content/${process.env.SUPPORT_NUMBER}`,
    {
      method: "GET",
      headers: {
        Authorization: process.env.APIKEY,
      },
    }
  );
  return response.json();
}

app.get("/getdata", async (req, res) => {
  const data = await getData();
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
