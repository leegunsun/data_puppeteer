import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { StockSchema } from './model/boards.model';

@Module({
  imports: [StockSchema],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
