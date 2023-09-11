/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CurrentUserTotpSecretActivity } from '../../models/current-user-totp-secret-activity';

export interface GetCurrentUserTfaTotpResourceActivity$Params {
}

export function getCurrentUserTfaTotpResourceActivity(http: HttpClient, rootUrl: string, params?: GetCurrentUserTfaTotpResourceActivity$Params, context?: HttpContext): Observable<StrictHttpResponse<CurrentUserTotpSecretActivity>> {
  const rb = new RequestBuilder(rootUrl, getCurrentUserTfaTotpResourceActivity.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CurrentUserTotpSecretActivity>;
    })
  );
}

getCurrentUserTfaTotpResourceActivity.PATH = '/user/currentUser/totpSecret/activity';
