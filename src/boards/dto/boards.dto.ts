import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class createStockDTO {
  @Expose()
  @IsString()
  stockName: string;
}
