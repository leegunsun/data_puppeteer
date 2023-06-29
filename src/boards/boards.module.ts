import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { StockSchema } from './model/boards.model';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GoodLuckIntercepotor } from './interceptor/boards.interceptor';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    StockSchema,
    ClientsModule.register([
      {
        name: 'TEST_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3001,
        },
      },
    ]),
  ],
  controllers: [BoardsController],
  providers: [
    BoardsService,
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: GoodLuckIntercepotor,
    // },
    // RegExp 완료,
    //development support
  ],
})
export class BoardsModule {}
