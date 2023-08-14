import { NseIndia } from "stock-nse-india";

export default class Service {
  nseIndia = new NseIndia();

  async getAllIndices() {
    const indices = await this.nseIndia.getAllStockSymbols();
    return indices;
  }
}