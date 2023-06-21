import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GoodLuckIntercepotor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    // console.log(context.switchToHttp().getResponse());
    return next
      .handle()
      .pipe(map((data) => ({ ...data, gigi: `${data.gigi} dd` })));
  }
}
