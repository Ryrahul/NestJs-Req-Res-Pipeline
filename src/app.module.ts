import { MiddlewareConsumer, Module, NestModule, Scope } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { middleware } from './middleware/middleware';
import { reqService } from './req.service';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { Addpipe } from './pipes/validation.pipe';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,reqService,
    {
    provide:APP_INTERCEPTOR,
    scope:Scope.REQUEST,
    useClass:LoggingInterceptor
  },{
    provide:APP_FILTER,
    scope:Scope.REQUEST,
    useClass:Addpipe
  }
],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(middleware).forRoutes('*');
  }
}
