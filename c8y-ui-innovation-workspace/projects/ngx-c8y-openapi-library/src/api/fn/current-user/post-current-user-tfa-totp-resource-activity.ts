/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CurrentUserTotpSecretActivity } from '../../models/current-user-totp-secret-activity';

export interface PostCurrentUserTfaTotpResourceActivity$Params {
      body: CurrentUserTotpSecretActivity
}

export function postCurrentUserTfaTotpResourceActivity(http: HttpClient, rootUrl: string, params: PostCurrentUserTfaTotpResourceActivity$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, postCurrentUserTfaTotpResourceActivity.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

postCurrentUserTfaTotpResourceActivity.PATH = '/user/currentUser/totpSecret/activity';
