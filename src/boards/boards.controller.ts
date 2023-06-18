import {
  Body,
  Controller,
  Get,
  Put,
  Post,
  Delete,
  UsePipes,
  ValidationPipe,
  Param,
  Query,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { FindAllStockDTO, createStockDTO } from './dto/boards.dto';
import { BoardsData } from './interface/boards.interface';
import { StockDocument } from './schema/boards.schema';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/getlastone')
  async findOneLastStock(): Promise<StockDocument> {
    return this.boardsService.getOneStock();
  }

  @Get('/getAll')
  async findAllStock(
    @Query() FindAllStockDTO: FindAllStockDTO,
  ): Promise<StockDocument[]> {
    return this.boardsService.getAllStock(FindAllStockDTO.stockName);
  }

  @Post('/')
  async currentStock(@Body('url') url: string[]): Promise<BoardsData> {
    return await this.boardsService.name(url);
  }

  @Post('/createStock')
  @UsePipes(new ValidationPipe())
  async createStock(
    @Body() createStockDTO: createStockDTO,
  ): Promise<StockDocument> {
    return await this.boardsService.createStock(createStockDTO);
  }

  @Put('/editStock')
  @UsePipes(new ValidationPipe())
  async editStock(
    @Body('id') stockId: string,
    @Body() createStockDTO: createStockDTO,
  ): Promise<StockDocument | null> {
    return await this.boardsService.editStock(stockId, createStockDTO);
  }

  @Delete('/deleteStock')
  async deleteStock(
    @Body('id') stockId: string,
  ): Promise<StockDocument | null> {
    return await this.boardsService.deleteStock(stockId);
  }

  @Post('/today')
  async toDayEnterprise(@Body('url') url: string) {
    return this.boardsService.toDayEnterprise(url);
  }
}
