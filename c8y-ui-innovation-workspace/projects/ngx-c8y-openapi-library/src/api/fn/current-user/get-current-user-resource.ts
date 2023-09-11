/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CurrentUser } from '../../models/current-user';

export interface GetCurrentUserResource$Params {
}

export function getCurrentUserResource(http: HttpClient, rootUrl: string, params?: GetCurrentUserResource$Params, context?: HttpContext): Observable<StrictHttpResponse<CurrentUser>> {
  const rb = new RequestBuilder(rootUrl, getCurrentUserResource.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.currentuser+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CurrentUser>;
    })
  );
}

getCurrentUserResource.PATH = '/user/currentUser';
