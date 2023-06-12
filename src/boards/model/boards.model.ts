import { MongooseModule } from '@nestjs/mongoose';
import { CreateStockSchema, Stock } from '../schema/boards.schema';

export const StockSchema = MongooseModule.forFeature([
  { name: Stock.name, schema: CreateStockSchema },
]);
