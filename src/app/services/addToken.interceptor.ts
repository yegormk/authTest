// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { ApiBaseService } from './api-base.service';
//
// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {
//   constructor(private auth: ApiBaseService) {}
//
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     if (this.auth.isLoggedIn()) {
//       req = req.clone({
//         setHeaders: {
//           'X-Token': '' + this.auth.getToken(),
//         },
//       });
//     }
//
//     return next.handle(req);
//   }
// }
