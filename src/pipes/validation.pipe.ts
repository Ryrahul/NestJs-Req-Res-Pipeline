
import { PipeTransform, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class Addpipe implements PipeTransform {
    private readonly logger=new Logger(Addpipe.name)
  transform(value: any) {
    value=value+value;
    this.logger.log(value)
    return value
  }
}
