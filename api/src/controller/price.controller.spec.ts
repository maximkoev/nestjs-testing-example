import { PriceController } from './price.controller';
import { PriceService } from '../service/price.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('price.controller', () => {
  let controller: PriceController;
  let service: PriceService;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PriceController],
      providers: [PriceService],
    }).compile();
    controller = app.get<PriceController>(PriceController);
    service = await app.resolve<PriceService>(PriceService);
  });
  it('should verify mostExpensive', () => {
    const data = { id: 1, model: 'IPhone 7', price: 5000 };
    const meSpy = jest.spyOn(service, 'mostExpensive').mockResolvedValue(data);

    return controller.mostExpensive().then((res) => {
      expect(res).toEqual(data);
      expect(meSpy).toHaveBeenCalled();
    });
  });
  it('should verify cheapest', () => {
    const data = { id: 1, model: 'IPhone 7', price: 5000 };
    const meSpy = jest.spyOn(service, 'cheapest').mockResolvedValue(data);

    return controller.cheapest().then((res) => {
      expect(res).toEqual(data);
      expect(meSpy).toHaveBeenCalled();
    });
  });
});
