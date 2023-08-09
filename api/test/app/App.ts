import { BaseApp } from './BaseApp';
import { URL } from './constants';
import { ProductDTO } from '../models/product';

export class App extends BaseApp {
  constructor() {
    super();
  }
  getAllProducts() {
    return this.GET(URL.products);
  }

  echo() {
    return this.GET(URL.echo);
  }

  getProductByid(id: number) {
    return this.GET(`${URL.products}/${id}`);
  }
  addProduct(product: ProductDTO) {
    return this.POST<ProductDTO>(URL.products, product);
  }

  deleteProduct(id: number) {
    return this.DELETE(`${URL.products}/${id}`);
  }

  getMostExpensive() {
    return this.GET('/price/most-expensive');
  }
}
