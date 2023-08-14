import express from "express";
import Service from "./service.js";

export const app = express();
const service = new Service();

app.get("/", (req, res) => {
  res.json({
    "key": "value"
  })
})

app.get('/getAllIndices', async (req, res) => {
  const indices = await service.getAllIndices();
  res.status(200).send(indices);
})