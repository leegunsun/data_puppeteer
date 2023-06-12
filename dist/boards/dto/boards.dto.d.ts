import { Stock } from '../schema/boards.schema';
declare const createStockDTO_base: import("@nestjs/mapped-types").MappedType<Pick<Stock, "stockName" | "current_value">>;
export declare class createStockDTO extends createStockDTO_base {
}
export declare class FindAllStockDTO {
    stockName?: string;
}
export {};
