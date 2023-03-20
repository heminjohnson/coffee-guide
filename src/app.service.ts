import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth() {
    const version = '0.1.0';
    const message = 'HEALTH OK';

    return { message, version };
  }
}
