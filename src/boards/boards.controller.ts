import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { createStockDTO } from './dto/boards.dto';
import { BoardsData } from './interface/boards.interface';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Post('/')
  async currentStock(@Body('url') url: string[]): Promise<BoardsData> {
    return await this.boardsService.name(url);
  }

  @Post('/createStock')
  async createStock(@Body() createStockDTO: createStockDTO) {
    return await this.boardsService.createStock(createStockDTO);
  }
}
