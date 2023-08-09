import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { ProductService } from '../service/product.service';
import { Product } from '../types';

@Controller('/products')
export class ProductController {
  constructor(private readonly service: ProductService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  getAllProducts() {
    return this.service.getAllProducts();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  getProduct(@Param('id') id: number) {
    return this.service.getProduct(id);
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  addProduct(@Body() product: Product) {
    return this.service.addProduct(product);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  deleteProduct(@Param('id') id: number) {
    return this.service.deleteProduct(id);
  }
}
