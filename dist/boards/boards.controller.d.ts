import { BoardsService } from './boards.service';
import { createStockDTO } from './dto/boards.dto';
export declare class BoardsController {
    private boardsService;
    constructor(boardsService: BoardsService);
    currentStock(url: string): Promise<{
        currentPercent: {
            change_percent: string;
            name: string;
        }[];
    }>;
    createStock(createStockDTO: createStockDTO): Promise<void>;
}
