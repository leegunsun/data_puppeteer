import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsString, IsNumber, IsOptional } from 'class-validator';
import { Document } from 'mongoose';

export type StockDocument = Stock & Document;

@Schema({ timestamps: true })
export class Stock {
  @Prop({ required: true })
  @IsString()
  stockName: string;

  @Prop()
  @IsNumber()
  yesterday_value: number;

  @Prop()
  @IsNumber()
  current_value: number;

  @Prop()
  @IsNumber()
  fluctuation_rate: number;

  @Prop()
  @IsNumber()
  profit: number;
}

export const CreateStockSchema = SchemaFactory.createForClass(Stock);
