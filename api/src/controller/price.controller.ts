import { Controller, Get } from '@nestjs/common';
import { PriceService } from '../service/price.service';
@Controller('/price')
export class PriceController {
  constructor(private readonly service: PriceService) {}
  @Get('/most-expensive')
  mostExpensive() {
    return this.service.mostExpensive();
  }

  @Get('/cheapest')
  cheapest() {
    return this.service.cheapest();
  }
}
