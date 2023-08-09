import { App } from '../app/App';

describe('Echo', () => {
  const app = new App();
  beforeAll(async () => {
    await app.init();
  });
  afterAll(async () => {
    await app.close();
  });

  it('/ (GET)', async () => {
    // const app = new App();
    // await app.init();
    return app.echo().expect(200).expect('Hello World!');
  });
});
