import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { StockSchema } from './model/boards.model';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GoodLuckIntercepotor } from './interceptor/boards.interceptor';

@Module({
  imports: [StockSchema],
  controllers: [BoardsController],
  providers: [
    BoardsService,
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: GoodLuckIntercepotor,
    // },
  ],
})
export class BoardsModule {}
