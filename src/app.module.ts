import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './boards/boards.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URL!), BoardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
