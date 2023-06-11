"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockSchema = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const boards_interface_1 = require("../interface/boards.interface");
exports.StockSchema = mongoose_1.MongooseModule.forFeature([
    { name: boards_interface_1.Stock.name, schema: boards_interface_1.CreateStockSchema },
]);
//# sourceMappingURL=boards.model.js.map