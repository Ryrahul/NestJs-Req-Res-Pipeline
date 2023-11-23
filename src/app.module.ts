import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { middleware } from './middleware/middleware';
import { reqService } from './req.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,reqService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(middleware).forRoutes('*');
  }
}
