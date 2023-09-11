/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { LoginForm } from '../../models/login-form';

export interface PostLoginFormCookie$Params {

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;
      body: LoginForm
}

export function postLoginFormCookie(http: HttpClient, rootUrl: string, params: PostLoginFormCookie$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, postLoginFormCookie.PATH, 'post');
  if (params) {
    rb.header('Accept', params.Accept, {});
    rb.body(params.body, 'application/x-www-form-urlencoded');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

postLoginFormCookie.PATH = '/tenant/oauth';
