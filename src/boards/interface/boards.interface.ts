import { Document } from 'mongoose';

export type createStock = Readonly<{
  stockName: string;
  yesterday_value: number;
  current_value: number;
  fluctuation_rate: number;
  profit: number;
}> &
  Document;
