import { Injectable } from '@nestjs/common';
import { Product } from '../types';
import { PRODUCTS } from '../data';

@Injectable()
export class PriceService {
  mostExpensive(): Promise<Product> {
    return new Promise((resolve) => {
      let maxPrice: number = this.products[0].price;
      let maxId: number = this.products[0].id;
      this.products.forEach((product) => {
        if (maxPrice < product.price) {
          maxPrice = product.price;
          maxId = product.id;
        }
      });
      resolve(this.products.find((p) => p.id === maxId));
    });
  }

  private get products(): Array<Product> {
    return PRODUCTS;
  }

  cheapest(): Promise<Product> {
    return new Promise((resolve) => {
      let minPrice: number = this.products[0].price;
      let minId: number = this.products[0].id;
      this.products.forEach((product) => {
        if (minPrice > product.price) {
          minPrice = product.price;
          minId = product.id;
        }
      });
      resolve(this.products.find((p) => p.id === minId));
    });
  }
}
