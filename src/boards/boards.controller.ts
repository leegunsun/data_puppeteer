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
  createParamDecorator,
  ExecutionContext,
  UseInterceptors,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { FindAllStockDTO, createStockDTO } from './dto/boards.dto';
import { BoardsData } from './interface/boards.interface';
import { StockDocument } from './schema/boards.schema';
import { GoodLuckIntercepotor } from './interceptor/boards.interceptor';
import { CacheInterceptor } from './interceptor/cache.boards';

function deco(val: string) {
  console.log('out');
  return function cd(
    target: any,
    propKey: string,
    propDesc: PropertyDescriptor,
  ) {
    // console.log(val);
  };
}

export const UserId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getResponse();
    return request.user.id;
  },
);

export function GoodLuck(): MethodDecorator {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor,
  ) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log('good luck');
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}

let count = 0;

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('test')
  @deco('good')
  // @GoodLuck()
  async test() {
    count++;
    console.log('gdg');
    return { count };
  }

  @Get('test2')
  @UseInterceptors(GoodLuckIntercepotor, CacheInterceptor)
  async test2() {
    return { gigi: '안녕' };
  }

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
