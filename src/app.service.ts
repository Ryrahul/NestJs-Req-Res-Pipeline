import { Injectable, Logger } from '@nestjs/common';
import { reqService } from './req.service';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(private readonly requestservice: reqService) {}
  getHello(): string {
    this.logger.log('userid:', this.requestservice.getToken());
    return 'Hello World!';
  }
}
