/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserApiResource } from '../../models/user-api-resource';

export interface GetUserApiResource$Params {
}

export function getUserApiResource(http: HttpClient, rootUrl: string, params?: GetUserApiResource$Params, context?: HttpContext): Observable<StrictHttpResponse<UserApiResource>> {
  const rb = new RequestBuilder(rootUrl, getUserApiResource.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.userapi+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserApiResource>;
    })
  );
}

getUserApiResource.PATH = '/user';
