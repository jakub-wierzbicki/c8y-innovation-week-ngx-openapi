/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserTfaData } from '../../models/user-tfa-data';

export interface GetUsersTfaResource$Params {

/**
 * Unique identifier of a Cumulocity IoT tenant.
 */
  tenantId: string;

/**
 * Unique identifier of the a user.
 */
  userId: string;
}

export function getUsersTfaResource(http: HttpClient, rootUrl: string, params: GetUsersTfaResource$Params, context?: HttpContext): Observable<StrictHttpResponse<UserTfaData>> {
  const rb = new RequestBuilder(rootUrl, getUsersTfaResource.PATH, 'get');
  if (params) {
    rb.path('tenantId', params.tenantId, {});
    rb.path('userId', params.userId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserTfaData>;
    })
  );
}

getUsersTfaResource.PATH = '/user/{tenantId}/users/{userId}/tfa';
