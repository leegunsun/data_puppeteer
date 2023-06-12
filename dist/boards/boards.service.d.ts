/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { createStockDTO } from './dto/boards.dto';
import { BoardsData } from './interface/boards.interface';
import { Model } from 'mongoose';
import { StockDocument, Stock } from './schema/boards.schema';
export declare class BoardsService {
    private stockModel;
    constructor(stockModel: Model<StockDocument>);
    name(url: string[]): Promise<BoardsData>;
    createStock(createStockDTO: createStockDTO): Promise<StockDocument>;
    getOneStock(): Promise<import("mongoose").Document<unknown, {}, StockDocument> & Omit<Stock & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    getAllStock(stockName: string): Promise<(import("mongoose").Document<unknown, {}, StockDocument> & Omit<Stock & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    editStock(stockId: string, createStockDTO: createStockDTO): Promise<StockDocument | null>;
    deleteStock(stockId: string): Promise<StockDocument | null>;
}
