import { HttpInterceptorFn } from '@angular/common/http';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    headers: req.headers.set('Authorization', 'bearer test'),
  });
  return next(authReq);
};
