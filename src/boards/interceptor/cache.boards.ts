import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements NestInterceptor {
  private readonly cache = new Map();

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const key = context.getHandler().name;
    const cacheValue = this.cache.get(key);
    const now = Date.now();

    if (cacheValue) {
      if (Date.now() < cacheValue.expirationTime) {
        console.log('in?');
        console.log(`Execution time: ${Date.now() - now}ms`);
        return of(cacheValue.data);
      }
      this.cache.delete(key);
    }

    return next.handle().pipe(
      tap((data) => {
        const expirationTime = Date.now() + 1000 * 60 * 5;
        this.cache.set(key, { data, expirationTime });
        console.log(`Execution time: ${Date.now() - now}ms`);
        console.log(key);
        console.log(this.cache.get(key));
      }),
    );
  }
}
