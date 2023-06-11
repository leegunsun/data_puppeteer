import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type StockDocument = Stock & Document;

@Schema({ timestamps: true })
export class Stock {
  @Prop({ required: true })
  stockName: string;

  @Prop()
  yesterday_value: number;

  @Prop()
  current_value: number;

  @Prop()
  fluctuation_rate: number;

  @Prop()
  profit: number;
}

export interface BoardData {
  change_percent: string;
  name: string;
}

export interface BoardsData {
  currentPercent: BoardData[];
}

export const CreateStockSchema = SchemaFactory.createForClass(Stock);
