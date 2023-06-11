import { Expose } from 'class-transformer';
import { IsString, IsNumber } from 'class-validator';

export class createStockDTO {
  @Expose()
  @IsString()
  stockName: string;

  @Expose()
  @IsNumber()
  current_value: number;
}
