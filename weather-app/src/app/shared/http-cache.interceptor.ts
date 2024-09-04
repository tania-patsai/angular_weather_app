import {HttpInterceptorFn, HttpResponse} from '@angular/common/http';
import {filter, of, tap, catchError, throwError} from 'rxjs';

const requestsMap = new Map<
  string,
  {
    src: string;
    data: HttpResponse<any>;
    params?: any;
    ttl?: number;
  }
>();

export const httpCacheInterceptor = (options: {
  globalTTL: number;
}) => {
  const {globalTTL} = options;
  const fn: HttpInterceptorFn = (req, next) => {
    const key = req.urlWithParams;

    const prevRequest = () => requestsMap.get(key);
    const getTTL = () => new Date().getTime() + globalTTL;

    const prevReq = prevRequest();


    if (prevReq) {
      const {data, ttl} = prevReq;

      if (data && ttl && ttl > new Date().getTime()) {

        console.log(requestsMap, data, 'MOCK returned');
        return of(data);
      }
    } else {
      requestsMap.set(key, {
        src: req.url,
        data: new HttpResponse<any>(),
        params: req.body,
        ttl: getTTL(),
      });
    }

    return next(req).pipe(
      catchError(error => {
        const key = error.urlWithParams;

        if (requestsMap.has(key)) {
          requestsMap.delete(key)
        }

        return throwError(() => error);
      }),
      filter((x) => x instanceof HttpResponse),
      tap((x) => {
        const data = x as HttpResponse<any>;
        const r = prevRequest();
        if (!r) return;

        r.data = data;
        r.ttl = getTTL();
      })
    );
  };

  return fn;
};
