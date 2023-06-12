"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
const puppeteer = require("puppeteer");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const boards_schema_1 = require("./schema/boards.schema");
let BoardsService = exports.BoardsService = class BoardsService {
    constructor(stockModel) {
        this.stockModel = stockModel;
    }
    async name(url) {
        const browser = await puppeteer.launch({
            headless: false,
        });
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
                let name = newElement
                    ? newElement.textContent
                    : 'No data found';
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
        const createStock = new this.stockModel(createStockDTO);
        return createStock.save();
    }
    async getOneStock() {
        return this.stockModel.findOne().sort({ createdAt: 'desc' });
    }
    async getAllStock(stockName) {
        if (stockName) {
            return this.stockModel.find({ stockName });
        }
        return this.stockModel.find();
    }
    async editStock(stockId, createStockDTO) {
        const updateData = createStockDTO;
        return this.stockModel.findByIdAndUpdate(stockId, updateData, {
            new: true,
        });
    }
    async deleteStock(stockId) {
        return this.stockModel.findByIdAndDelete(stockId);
    }
};
exports.BoardsService = BoardsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(boards_schema_1.Stock.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BoardsService);
//# sourceMappingURL=boards.service.js.map