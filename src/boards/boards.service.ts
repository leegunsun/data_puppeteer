import { Controller, Get, Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import { InjectModel } from '@nestjs/mongoose';
import { createStockDTO } from './dto/boards.dto';
import { BoardsData, BoardData } from './interface/boards.interface';
import { Model } from 'mongoose';
import { StockDocument, Stock } from './schema/boards.schema';

@Injectable()
export class BoardsService {
  constructor(
    @InjectModel(Stock.name) private stockModel: Model<StockDocument>,
  ) {}

  /**
   * url에 맞는 데이터를 크롤링
   * 1. 현재 호가
   * 2. 주식 이름
   * @param url
   * @returns
   */
  async name(url: string[]): Promise<BoardsData> {
    const browser: puppeteer.Browser = await puppeteer.launch({
      headless: false,
    });
    let arr: BoardData[] = [];

    for (let urls of url) {
      const page: puppeteer.Page = await browser.newPage();
      await page.goto(urls, { waitUntil: 'networkidle2' });

      const result: BoardData = await page.evaluate(() => {
        const nameElement: HTMLElement | null = document.querySelector(
          'div.instrument-price_instrument-price__xfgbB > div.text-xl > span.instrument-price_change-percent__bT4yt',
        );

        const newElement: HTMLElement | null = document.querySelector(
          'div.instrument-header_instrument-name__VxZ1O > h1',
        );

        let change_percent: string = nameElement
          ? nameElement.textContent
          : 'No data found';
        let name: string = newElement
          ? newElement.textContent
          : 'No data found';
        return { change_percent, name };
      });

      const arrName: BoardData = {
        change_percent: result.change_percent,
        name: result.name,
      };

      arr.push(arrName);
      await page.close();
    }

    await browser.close();
    return { currentPercent: arr };
  }

  /**
   * 주식을 추가
   * @param createStockDTO
   * @returns
   */
  async createStock(createStockDTO: createStockDTO): Promise<StockDocument> {
    const createStock: InstanceType<Model<StockDocument>> = new this.stockModel(
      createStockDTO,
    );
    return createStock.save();
  }

  /**
   * 가장 최근에 생성된 Stock을 하나 가져온다.
   * @returns
   */
  async getOneStock() {
    return this.stockModel.findOne().sort({ createdAt: 'desc' });
  }

  /**
   * 1. 쿼리 스트링이 없다면 모든 값을 가져옵니다.
   * 2. 쿼리 스트링이 있다면 하나의 주식의 모든 값을 가져옵니다.
   * @param stockName
   * @returns
   */
  async getAllStock(stockName: string) {
    if (stockName) {
      return this.stockModel.find({ stockName });
    }

    return this.stockModel.find();
  }

  /**
   * 주식을 수정
   * @param stockId
   * @param createStockDTO
   * @returns
   */
  async editStock(
    stockId: string,
    createStockDTO: createStockDTO,
  ): Promise<StockDocument | null> {
    const updateData: Partial<createStockDTO> = createStockDTO;
    return this.stockModel.findByIdAndUpdate(stockId, updateData, {
      new: true,
    });
  }

  /**
   * 주식을 삭제
   * @param stockId
   */
  async deleteStock(stockId: string): Promise<StockDocument | null> {
    return this.stockModel.findByIdAndDelete(stockId);
  }
}
