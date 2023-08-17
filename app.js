import express from "express";
import Service from "./service.js";
import cors from "cors";

export const app = express();
app.use(express.json());
app.use(cors())

const service = new Service();

app.get("/getStockInfo/:stockSymbol", async (req, res) => {
  try {
    const stockSymbol = req.params.stockSymbol;
    if (stockSymbol) {
      const currPriceInfo = await service.getStockInfo(stockSymbol);
      const error = currPriceInfo.error;
      if (error) {
        res.status(400).send({
          data: null,
          message: "Please Provide a valid Stock Symbol"
        })
      } else {
        res.status(200).send({
          data: currPriceInfo,
          message: "Successfully fetched Stock information"
        })
      }
    } else {
      res.status(400).send({
        data: null,
        message: "Stock Symbol Missing."
      })
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      data: null,
      message: "Internal Server Error"
    })
  }
})

app.get("/getEquityIntraDayInfo/:stockSymbol", async (req, res) => {
  try {
    console.log("in GetEquityIntraDayInfo")
    const stockSymbol = req.params.stockSymbol;
    if (stockSymbol) {
      const intraDayInfo = await service.getEquityIntradayInfo(stockSymbol);
      res.status(200).send({
        data: intraDayInfo,
        message: "Successfully fetched Equity intraday info."
      })
    } else {
      res.status(400).send({
        data: null,
        message: "Stock Symbol Missing"
      })
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      data: null,
      message: "Internal Server Error"
    })
  }
})

app.get('/getAllSymbols', async (req, res) => {
  try {
    const symbols = await service.getAllSymbols();
    res.status(200).json({symbols: symbols});
  } catch(error) {
    console.log(error);
    res.status(500).send({
      data: null,
      message: "Internal Server Error"
    })
  }
})

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the New world...");
})