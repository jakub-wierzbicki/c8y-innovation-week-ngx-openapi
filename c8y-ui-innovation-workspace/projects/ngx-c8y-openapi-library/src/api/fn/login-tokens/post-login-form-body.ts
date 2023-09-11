/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AccessToken } from '../../models/access-token';
import { LoginForm } from '../../models/login-form';

export interface PostLoginFormBody$Params {

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;
      body: LoginForm
}

export function postLoginFormBody(http: HttpClient, rootUrl: string, params: PostLoginFormBody$Params, context?: HttpContext): Observable<StrictHttpResponse<AccessToken>> {
  const rb = new RequestBuilder(rootUrl, postLoginFormBody.PATH, 'post');
  if (params) {
    rb.header('Accept', params.Accept, {});
    rb.body(params.body, 'application/x-www-form-urlencoded');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AccessToken>;
    })
  );
}

postLoginFormBody.PATH = '/tenant/oauth/token';
