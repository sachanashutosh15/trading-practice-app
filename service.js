import { NseIndia } from "stock-nse-india";

export default class Service {
  nseIndia = new NseIndia();

  async getAllSymbols() {
    const indices = await this.nseIndia.getAllStockSymbols();
    return indices;
  }

  async getStockInfo(stockSymbol) {
    const currentPriceInfo = await this.nseIndia.getEquityDetails(stockSymbol);
    return currentPriceInfo;
  }

  async getEquityIntradayInfo(stockSymbol) {
    const intraDayInfo = await this.nseIndia.getEquityIntradayData(stockSymbol);
    return intraDayInfo;
  }
}