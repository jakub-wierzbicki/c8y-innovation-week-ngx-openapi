/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AuthConfig } from '../../models/auth-config';

export interface GetLoginOptionResource$Params {

/**
 * The type or ID of the login option. The type's value is case insensitive and can be `OAUTH2`, `OAUTH2_INTERNAL` or `BASIC`.
 */
  typeOrId: string;

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;
}

export function getLoginOptionResource(http: HttpClient, rootUrl: string, params: GetLoginOptionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthConfig>> {
  const rb = new RequestBuilder(rootUrl, getLoginOptionResource.PATH, 'get');
  if (params) {
    rb.path('typeOrId', params.typeOrId, {});
    rb.header('Accept', params.Accept, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.authConfig+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AuthConfig>;
    })
  );
}

getLoginOptionResource.PATH = '/tenant/loginOptions/{typeOrId}';
