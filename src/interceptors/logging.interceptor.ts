import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

@Injectable()
export class LoggingInterceptor implements NestInterceptor{
      private readonly logger = new Logger(LoggingInterceptor.name);
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const request=context.switchToHttp().getRequest()
        const useragent=request.get('user-agent')|| ''
        const{ip,path}=request
        this.logger.log(`${ip},${path},${context.getClass().name},${useragent}`)
        return next
      .handle()
      .pipe(
        tap((res)=>{
            const Response=context.switchToHttp().getResponse()
            const {statusCode}=Response
            this.logger.log(`${statusCode}`)
                this.logger.debug('Response:', res);

        }),
      );
      
    }

}