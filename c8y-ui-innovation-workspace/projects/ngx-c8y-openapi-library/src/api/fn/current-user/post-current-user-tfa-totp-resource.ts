/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CurrentUserTotpSecret } from '../../models/current-user-totp-secret';

export interface PostCurrentUserTfaTotpResource$Params {

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;
}

export function postCurrentUserTfaTotpResource(http: HttpClient, rootUrl: string, params?: PostCurrentUserTfaTotpResource$Params, context?: HttpContext): Observable<StrictHttpResponse<CurrentUserTotpSecret>> {
  const rb = new RequestBuilder(rootUrl, postCurrentUserTfaTotpResource.PATH, 'post');
  if (params) {
    rb.header('Accept', params.Accept, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CurrentUserTotpSecret>;
    })
  );
}

postCurrentUserTfaTotpResource.PATH = '/user/currentUser/totpSecret';
