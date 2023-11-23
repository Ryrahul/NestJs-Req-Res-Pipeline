import { CanActivate, ExecutionContext, Injectable, Logger } from "@nestjs/common";
import { Observable, retry } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate{
    private logger=new Logger(AuthGuard.name)
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        this.logger.log(AuthGuard.name)
        const request=context.switchToHttp().getRequest()
        
        return true;
    }
}