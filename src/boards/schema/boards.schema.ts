import { createStock } from '../interface/boards.interface';
import * as mongoose from 'mongoose';

export const CreateStockSchema = new mongoose.Schema<createStock>(
  {
    stockName: { type: String, required: true },
    yesterday_value: { type: Number, required: false },
    current_value: { type: Number, required: false },
    fluctuation_rate: { type: Number, required: false },
    profit: { type: Number, required: false },
  },
  { timestamps: true },
);
