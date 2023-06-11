// import { Controller, Get, Injectable } from '@nestjs/common';
// import * as puppeteer from 'puppeteer';

// @Injectable()
// export class BoardsService {
//   async name() {
//     // Puppeteer를 사용해 크롤링 진행
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();
//     await page.goto('https://intellipick.spartacodingclub.kr/');

//     // 웹사이트의 데이터를 가져옴
//     const websiteData = await page.evaluate(() => {
//       // 데이터 선택자를 무작위로 선택, 여기서는 예시로 첫 번째 아이템을 선택하였음
//       const randomDataSelector =
//         '#__next > main > div > div > div > div.css-1e7pmv9 > div.css-1glohcq > div:nth-child(1)';

//       const dataElement = document.querySelector(randomDataSelector);

//       console.log(dataElement);

//       if (dataElement) {
//         return dataElement.textContent || 'No data found';
//       }

//       return 'No data found';
//     });

//     await browser.close();

//     return websiteData;
//   }
// }

// import { Controller, Get, Injectable } from '@nestjs/common';
// import * as puppeteer from 'puppeteer';

// @Injectable()
// export class BoardsService {
//   async name() {
//     // Puppeteer를 사용해 크롤링 진행
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();
//     await page.goto('https://intellipick.spartacodingclub.kr/');

//     // 웹사이트의 데이터를 가져옴
//     const websiteData = await page.evaluate(() => {
//       // `<a>` 태그 선택자
//       const linkSelector =
//         '#__next > main > div > div > div > div.css-1e7pmv9 > div.css-1glohcq > div:nth-child(1) > a';

//       // 각 `<a>` 태그에서 원하는 `div`의 값을 가져옴
//       const linkElements = Array.from(document.querySelectorAll(linkSelector));

//       return linkElements.map((linkElement) => {
//         const divElement = linkElement.querySelector(
//           'div.css-5k80h3 > div.css-1x39nj6',
//         );
//         return divElement ? divElement.textContent : 'No data found';
//       });
//     });

//     await browser.close();

//     return websiteData;
//   }
// }

// import { Controller, Get, Injectable } from '@nestjs/common';
// import * as puppeteer from 'puppeteer';

// @Injectable()
// export class BoardsService {
//   async name() {
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();
//     await page.goto('https://www.naver.com/');

//     // 웹사이트의 데이터를 가져옴
//     const nasdaqData = await page.evaluate(() => {
//       const priceElement = document.querySelector(
//         '#newsstand > div.ContentHeaderSubView-module__content_header_sub___Yszwk > a',
//       );
//       return priceElement ? priceElement.textContent : 'No data found';
//     });

//     await browser.close();

//     return nasdaqData;
//   }
// }
// -----
// 실패함
// import { Controller, Get, Injectable } from '@nestjs/common';
// import * as puppeteer from 'puppeteer';

// @Injectable()
// export class BoardsService {
//   async name() {
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();
//     await page.goto('https://kr.investing.com/indices/nasdaq-composite');

//     // 웹사이트의 데이터를 가져옴
//     const nasdaqData = await page.evaluate(() => {
//       const nameElement = document.querySelector(
//         'h1.instrument-header_name__KQzyA',
//       );
//       return nameElement ? nameElement.textContent : 'No data found';
//     });

//     await browser.close();

//     return nasdaqData;
//   }
// }
// -----
// import { Controller, Get, Injectable } from '@nestjs/common';
// import * as puppeteer from 'puppeteer';

// @Injectable()
// export class BoardsService {
//   async name() {
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();
//     await page.goto('https://kr.investing.com/indices/nasdaq-composite');

//     // 웹사이트의 데이터를 가져옴
//     const nasdaqData = await page.evaluate(() => {
//       const nameElement = document.querySelector(
//         'div.instrument-price_instrument-price__xfgbB > div.text-xl.flex.items-end.flex-wrap > span.instrument-price_change-percent__bT4yt',
//       );

//       return nameElement ? nameElement.textContent : 'No data found';
//     });

//     // soxl data
//     const soxlPage = await browser.newPage();
//     await soxlPage.goto(
//       'https://kr.investing.com/etfs/direxion-dly-semiconductor-bull-3x',
//     );
//     const soxlData = await soxlPage.evaluate(() => {
//       const searchElement = document.querySelector(
//         'div.instrument-price_instrument-price__xfgbB > div.text-xl.flex.items-end.flex-wrap > span.instrument-price_change-percent__bT4yt',
//       );
//       return searchElement ? searchElement.textContent : 'No data found';
//     });

//     // tna data
//     const tnaPage = await browser.newPage();
//     await tnaPage.goto(
//       'https://kr.investing.com/etfs/direxion-daily-small-cap-bull-3x-sh',
//     );

//     const tnaData = await tnaPage.evaluate(() => {
//       const searchElement = document.querySelector(
//         'div.instrument-price_instrument-price__xfgbB > div.text-xl.flex.items-end.flex-wrap > span.instrument-price_change-percent__bT4yt',
//       );
//       return searchElement ? searchElement.textContent : 'No data found';
//     });

//     // tqqq tada
//     const tqqqPage = await browser.newPage();
//     await tqqqPage.goto(
//       'https://www.investing.com/etfs/proshares-trust-ultrapro-qqq',
//     );
//     const tqqqData = tnaPage.evaluate(() => {
//       const searchElement = document.querySelector(
//         'div.instrument-price_instrument-price__xfgbB > div.text-xl.flex.items-end.flex-wrap > span.instrument-price_change-percent__bT4yt',
//       );
//       return searchElement ? searchElement.textContent : 'No data found';
//     });

//     await browser.close();

//     return { nasdaqData, soxlData, tnaData, tqqqData };
//   }
// }
import { Controller, Get, Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import { InjectModel } from '@nestjs/mongoose';
import { createStockDTO } from './dto/boards.dto';
import {
  BoardsData,
  BoardData,
  StockDocument,
  Stock,
} from './interface/boards.interface';
import { Model } from 'mongoose';

@Injectable()
export class BoardsService {
  constructor(
    @InjectModel(Stock.name) private stockModel: Model<StockDocument>,
  ) {}
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

  async createStock(createStockDTO: createStockDTO) {
    const createtest = new this.stockModel(createStockDTO);
    return createtest.save();
  }
}
