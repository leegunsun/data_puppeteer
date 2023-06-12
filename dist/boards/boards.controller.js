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
exports.BoardsController = void 0;
const common_1 = require("@nestjs/common");
const boards_service_1 = require("./boards.service");
const boards_dto_1 = require("./dto/boards.dto");
let BoardsController = exports.BoardsController = class BoardsController {
    constructor(boardsService) {
        this.boardsService = boardsService;
    }
    async findOneLastStock() {
        return this.boardsService.getOneStock();
    }
    async findAllStock(FindAllStockDTO) {
        return this.boardsService.getAllStock(FindAllStockDTO.stockName);
    }
    async currentStock(url) {
        return await this.boardsService.name(url);
    }
    async createStock(createStockDTO) {
        return await this.boardsService.createStock(createStockDTO);
    }
    async editStock(stockId, createStockDTO) {
        return await this.boardsService.editStock(stockId, createStockDTO);
    }
    async deleteStock(stockId) {
        return await this.boardsService.deleteStock(stockId);
    }
};
__decorate([
    (0, common_1.Get)('/getlastone'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "findOneLastStock", null);
__decorate([
    (0, common_1.Get)('/getAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [boards_dto_1.FindAllStockDTO]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "findAllStock", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)('url')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "currentStock", null);
__decorate([
    (0, common_1.Post)('/createStock'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [boards_dto_1.createStockDTO]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "createStock", null);
__decorate([
    (0, common_1.Put)('/editStock'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, boards_dto_1.createStockDTO]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "editStock", null);
__decorate([
    (0, common_1.Delete)('/deleteStock'),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "deleteStock", null);
exports.BoardsController = BoardsController = __decorate([
    (0, common_1.Controller)('boards'),
    __metadata("design:paramtypes", [boards_service_1.BoardsService])
], BoardsController);
//# sourceMappingURL=boards.controller.js.map