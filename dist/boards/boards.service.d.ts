import { createStockDTO } from './dto/boards.dto';
export declare class BoardsService {
    name(url: string): Promise<{
        currentPercent: {
            change_percent: string;
            name: string;
        }[];
    }>;
    createStock(createStockDTO: createStockDTO): Promise<void>;
}
