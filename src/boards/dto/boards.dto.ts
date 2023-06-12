import { PickType } from '@nestjs/mapped-types';
import { IsString, IsNumber, IsOptional, IsIn } from 'class-validator';
import { Stock } from '../schema/boards.schema';

export class createStockDTO extends PickType(Stock, [
  'stockName',
  'current_value',
]) {}

export class FindAllStockDTO {
  @IsOptional()
  @IsIn(['SOXL', 'TNA', 'TQQQ'])
  stockName?: string;
}
