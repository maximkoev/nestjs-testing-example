import { Module } from '@nestjs/common';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { ProductController } from '../controller/product.controller';
import { PriceService } from '../service/price.service';
import { ProductService } from '../service/product.service';
import { PriceController } from '../controller/price.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductController, PriceController],
  providers: [AppService, ProductService, PriceService],
})
export class AppModule {}
