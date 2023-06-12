"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockSchema = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const boards_schema_1 = require("../schema/boards.schema");
exports.StockSchema = mongoose_1.MongooseModule.forFeature([
    { name: boards_schema_1.Stock.name, schema: boards_schema_1.CreateStockSchema },
]);
//# sourceMappingURL=boards.model.js.map