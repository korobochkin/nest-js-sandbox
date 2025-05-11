import { Injectable } from '@nestjs/common';
import { AppDataSource } from './typeorm/data-source';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async slowRequests(): Promise<void> {
    await AppDataSource.query("SELECT pg_sleep(10)");
  }
}
