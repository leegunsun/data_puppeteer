import { MongooseModule } from '@nestjs/mongoose';
import { CreateStockSchema, Stock } from '../interface/boards.interface';

export const StockSchema = MongooseModule.forFeature([
  { name: Stock.name, schema: CreateStockSchema },
]);
