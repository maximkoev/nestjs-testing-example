import { IsNotEmptyid } from '../validators/isNotEmptyId';
import { IsNotEmptyModel } from '../validators/isNotEmptyModel';
import { IsNotEmptyPrice } from '../validators/isNotEmptyPrice';
import { IsDefined, IsString } from 'class-validator';

export class Product {
  @IsDefined()
  @IsNotEmptyid()
  id: number;
  @IsNotEmptyModel()
  @IsString()
  model: string;
  @IsNotEmptyPrice()
  price: number;
}
