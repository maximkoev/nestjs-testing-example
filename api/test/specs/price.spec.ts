import { App } from '../app/App';

const expectedResult = {
  id: 10,
  model: 'IPhone 15',
  price: 54000,
};
describe('/price', () => {
  const app: App = new App();
  beforeAll(async () => {
    await app.init();
  });
  it('should get the most expensive product', async () => {
    await app
      .getMostExpensive()
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(expectedResult);
      });
  });
});
