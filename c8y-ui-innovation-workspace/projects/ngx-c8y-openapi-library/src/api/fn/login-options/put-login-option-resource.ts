/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AuthConfig } from '../../models/auth-config';

export interface PutLoginOptionResource$Params {

/**
 * The type or ID of the login option. The type's value is case insensitive and can be `OAUTH2`, `OAUTH2_INTERNAL` or `BASIC`.
 */
  typeOrId: string;

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;

/**
 * Used to explicitly control the processing mode of the request. See [Processing mode](#processing-mode) for more details.
 */
  'X-Cumulocity-Processing-Mode'?: 'PERSISTENT' | 'TRANSIENT' | 'QUIESCENT' | 'CEP';
      body: AuthConfig & any
}

export function putLoginOptionResource(http: HttpClient, rootUrl: string, params: PutLoginOptionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthConfig>> {
  const rb = new RequestBuilder(rootUrl, putLoginOptionResource.PATH, 'put');
  if (params) {
    rb.path('typeOrId', params.typeOrId, {});
    rb.header('Accept', params.Accept, {});
    rb.header('X-Cumulocity-Processing-Mode', params['X-Cumulocity-Processing-Mode'], {});
    rb.body(params.body, 'application/vnd.com.nsn.cumulocity.authconfig+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.authconfig+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AuthConfig>;
    })
  );
}

putLoginOptionResource.PATH = '/tenant/loginOptions/{typeOrId}';
