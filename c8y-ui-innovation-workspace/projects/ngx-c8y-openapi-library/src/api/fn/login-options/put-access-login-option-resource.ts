/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AuthConfig } from '../../models/auth-config';
import { AuthConfigAccess } from '../../models/auth-config-access';

export interface PutAccessLoginOptionResource$Params {

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;

/**
 * The type or ID of the login option. The type's value is case insensitive and can be `OAUTH2`, `OAUTH2_INTERNAL` or `BASIC`.
 */
  typeOrId: string;

/**
 * Unique identifier of a Cumulocity IoT tenant.
 */
  targetTenant: string;
      body: AuthConfigAccess
}

export function putAccessLoginOptionResource(http: HttpClient, rootUrl: string, params: PutAccessLoginOptionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthConfig>> {
  const rb = new RequestBuilder(rootUrl, putAccessLoginOptionResource.PATH, 'put');
  if (params) {
    rb.header('Accept', params.Accept, {});
    rb.path('typeOrId', params.typeOrId, {});
    rb.query('targetTenant', params.targetTenant, {});
    rb.body(params.body, 'application/json');
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

putAccessLoginOptionResource.PATH = '/tenant/loginOptions/{typeOrId}/restrict';
