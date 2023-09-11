/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PasswordChange } from '../../models/password-change';

export interface PutUserChangePasswordResource$Params {

/**
 * Unique identifier of a Cumulocity IoT tenant.
 */
  tenantId: string;

/**
 * Unique identifier of the a user.
 */
  userId: string;

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;
      body: PasswordChange
}

export function putUserChangePasswordResource(http: HttpClient, rootUrl: string, params: PutUserChangePasswordResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, putUserChangePasswordResource.PATH, 'put');
  if (params) {
    rb.path('tenantId', params.tenantId, {});
    rb.path('userId', params.userId, {});
    rb.header('Accept', params.Accept, {});
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

putUserChangePasswordResource.PATH = '/user/{tenantId}/users/{userId}/password';
