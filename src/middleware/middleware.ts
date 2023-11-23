import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { reqService } from 'src/req.service';

@Injectable()
export class middleware implements NestMiddleware {
    private readonly logger=new Logger(middleware.name)
  constructor(private readonly requestservice: reqService) {}
  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(middleware.name)
    //Write auth logic
    const token = 'a123mkghty';
    this.requestservice.settoken(token);
    next()
  }
}
