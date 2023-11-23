import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Addpipe } from './pipes/validation.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  getHi(@Body('id', new Addpipe()) id: string):object{
    const output={
      id:id
    }
    return output

  }
}
