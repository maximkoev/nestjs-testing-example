import { PriceService } from './price.service';
import { Test, TestingModule } from '@nestjs/testing';

const data = [
  { id: 1, model: 'IPhone 7', price: 5000 },
  { id: 2, model: 'IPhone 8', price: 8000 },
];
describe('price.service', () => {
  let service: PriceService;
  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [PriceService],
    }).compile();
    service = await app.resolve<PriceService>(PriceService);
  });
  it('should return most expensive product', () => {
    jest
      .spyOn(service as any, 'products', 'get')
      .mockImplementation(() => data);
    return service.mostExpensive().then((res) => expect(res).toEqual(data[1]));
  });

  it('should return the cheapest product', () => {
    jest
      .spyOn(service as any, 'products', 'get')
      .mockImplementation(() => data);
    return service.cheapest().then((res) => expect(res).toEqual(data[0]));
  });
});
