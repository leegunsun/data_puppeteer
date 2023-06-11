"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
const puppeteer = require("puppeteer");
let BoardsService = exports.BoardsService = class BoardsService {
    async name(url) {
        const browser = await puppeteer.launch({ headless: false });
        let arr = [];
        for (let urls of url) {
            const page = await browser.newPage();
            await page.goto(urls, { waitUntil: 'networkidle2' });
            const result = await page.evaluate(() => {
                const nameElement = document.querySelector('div.instrument-price_instrument-price__xfgbB > div.text-xl > span.instrument-price_change-percent__bT4yt');
                const newElement = document.querySelector('div.instrument-header_instrument-name__VxZ1O > h1');
                let change_percent = nameElement
                    ? nameElement.textContent
                    : 'No data found';
                let name = newElement ? newElement.textContent : 'No data found';
                return { change_percent, name };
            });
            const arrName = {
                change_percent: result.change_percent,
                name: result.name,
            };
            arr.push(arrName);
            await page.close();
        }
        await browser.close();
        return { currentPercent: arr };
    }
    async createStock(createStockDTO) {
        return;
    }
};
exports.BoardsService = BoardsService = __decorate([
    (0, common_1.Injectable)()
], BoardsService);
//# sourceMappingURL=boards.service.js.map