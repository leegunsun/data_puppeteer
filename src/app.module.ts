import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './boards/boards.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';

config();
// redis 메세지 큐 만들어보기
@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URL!), BoardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
