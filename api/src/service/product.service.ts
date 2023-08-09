import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Product } from '../types';
import { PRODUCTS } from '../data';

@Injectable()
export class ProductService {
  private products: Array<Product>;
  getAllProducts(): Promise<Array<Product>> {
    if (this.cashedProducts) {
      return Promise.resolve(this.cashedProducts);
    } else {
      return this.fetchProducts()
        .then((products) => {
          if (products.length > 0) {
            this.cashProducts(products);
            return products;
          } else {
            throw new Error('No Products');
          }
        })
        .catch((error) => {
          throw new HttpException(error.message, 404);
        });
    }
  }

  private cashProducts(products: Array<Product>) {
    this.products = products;
  }

  private get cashedProducts(): Array<Product> {
    return this.products;
  }

  private clearCash() {
    this.products = null;
  }

  private fetchProducts(): Promise<Array<Product>> {
    return new Promise((resolve) => setTimeout(resolve, 1000, PRODUCTS));
  }

  deleteProduct(id: number) {
    this.clearCash();
    return new Promise((resolve, reject) => {
      const i = PRODUCTS.indexOf(PRODUCTS.find((product) => product.id == id));
      if (i > 0) {
        PRODUCTS.splice(i, 1);
        resolve({
          status: HttpStatus.OK,
          message: 'Product successfully removed',
        });
      } else {
        reject(i);
      }
    }).catch(() => {
      throw new HttpException('No such product id', 404);
    });
  }

  addProduct(product: Product) {
    return new Promise((resolve) =>
      setTimeout(() => {
        PRODUCTS.push(product);
        resolve({
          status: HttpStatus.OK,
          message: 'Product successfully added',
        });
      }, 1000),
    );
  }

  getProduct(id): Promise<Product> {
    return this.getAllProducts().then((products) =>
      products.find((product) => product.id == id),
    );
  }
}
