import { App } from '../app/App';
import { ProductDTO } from '../models/product';
import { HttpStatus } from '@nestjs/common';
import { response } from 'express';

describe('Products', () => {
  const app = new App();
  beforeAll(async () => {
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return all products', (done) => {
    app
      .getAllProducts()
      .expect(200)
      .then((response) => {
        expect(response.body.length).toBe(11);
        done();
      });
  });
  it('should return particular product by its id', () => {
    return app
      .getProductByid(1)
      .expect(200)
      .then((response) => {
        expect(response.body.model).toBe('IPhone 7');
        expect(response.body.price).toBe(5000);
        expect(response.body.id).toBe(1);
        expect(response.body).toEqual({
          id: 1,
          model: 'IPhone 7',
          price: 5000,
        });
      });
  });

  it('should add new product to the bd', async () => {
    const data: ProductDTO = { model: 'OnePlus', id: 13, price: 19000 };
    await app.addProduct(data).expect(200).expect({
      status: 200,
      message: 'Product successfully added',
    });
    const product = await app.getProductByid(data.id);
    expect(product.body).toEqual(data);
  });
});
