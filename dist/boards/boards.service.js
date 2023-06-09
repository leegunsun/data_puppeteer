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
    async name() {
        const url = 'https://m.naver.com';
        const browser = await puppeteer.launch({
            headless: false,
            waitForInitialPage: true,
        });
        const page = await browser.newPage();
        await page.goto(url);
        const data = await page.evaluate(() => {
            let items = document.querySelectorAll('.PM_CL_newsstand_item .PM_CL_newsstand_data');
            let results = [];
            items.forEach((item) => {
                console.log('results ===========>', item);
                let titleElement = item.querySelector('.PM_CL_newsstand_link');
                let linkElement = item.querySelector('.PM_CL_newsstand_link');
                results.push({
                    title: titleElement.innerText,
                    link: linkElement.href
                });
                console.log('results ===========>', results);
            });
            return results;
        });
        await browser.close();
        return data;
    }
};
exports.BoardsService = BoardsService = __decorate([
    (0, common_1.Injectable)()
], BoardsService);
//# sourceMappingURL=boards.service.js.map