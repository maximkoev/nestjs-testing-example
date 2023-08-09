import { AppModule } from '../../src/app/app.module';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { SuperTestResponse } from '../models/product';

export class BaseApp {
  private app: INestApplication;
  private server;
  async init() {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    this.app = moduleFixture.createNestApplication();
    this.app.enableCors();
    await this.app.init();
    this.server = this.app.getHttpServer();
  }
  async close(): Promise<void> {
    await this.app.close();
  }

  protected GET(url: string, queries?: string) {
    return request(this.server).get(url).query(queries).auth('token', 'Bearer');
  }

  protected POST<T>(url, data: T | string) {
    return request(this.server)
      .post(url)
      .send(data as any);
  }
  protected DELETE(url) {
    return request(this.server).delete(url);
  }
}
