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

    // 데이터 반환 코딩테스트 문제 해결 BFS DFS 지원완료
    // 프로그래머스 코딩테스트 완료@
    if (cacheValue) {
      if (Date.now() < cacheValue.expirationTime) {
        console.log('in?');
        console.log(this.cache.get(key));
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
      }),
    );
  }
}
