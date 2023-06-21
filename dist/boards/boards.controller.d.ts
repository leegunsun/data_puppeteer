import { BoardsService } from './boards.service';
import { FindAllStockDTO, createStockDTO } from './dto/boards.dto';
import { BoardsData } from './interface/boards.interface';
import { StockDocument } from './schema/boards.schema';
export declare const UserId: (...dataOrPipes: unknown[]) => ParameterDecorator;
export declare function GoodLuck(): MethodDecorator;
export declare class BoardsController {
    private boardsService;
    constructor(boardsService: BoardsService);
    test(): Promise<{
        count: number;
    }>;
    test2(): Promise<{
        gigi: string;
    }>;
    findOneLastStock(): Promise<StockDocument>;
    findAllStock(FindAllStockDTO: FindAllStockDTO): Promise<StockDocument[]>;
    currentStock(url: string[]): Promise<BoardsData>;
    createStock(createStockDTO: createStockDTO): Promise<StockDocument>;
    editStock(stockId: string, createStockDTO: createStockDTO): Promise<StockDocument | null>;
    deleteStock(stockId: string): Promise<StockDocument | null>;
    toDayEnterprise(url: string): Promise<{
        Today: any[];
    }>;
}
