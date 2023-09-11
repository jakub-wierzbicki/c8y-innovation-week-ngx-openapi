/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { LoginOptionCollection } from '../../models/login-option-collection';

export interface GetLoginOptionCollectionResource$Params {

/**
 * If this is set to `true`, the management tenant login options will be returned.
 *
 * > **&#9432; Info:** The `tenantId` parameter must not be present in the request when using the `management` parameter, otherwise it will cause an error.
 */
  management?: boolean;

/**
 * Unique identifier of a Cumulocity IoT tenant.
 */
  tenantId?: string;
}

export function getLoginOptionCollectionResource(http: HttpClient, rootUrl: string, params?: GetLoginOptionCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<LoginOptionCollection>> {
  const rb = new RequestBuilder(rootUrl, getLoginOptionCollectionResource.PATH, 'get');
  if (params) {
    rb.query('management', params.management, {});
    rb.query('tenantId', params.tenantId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.loginoptioncollection+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<LoginOptionCollection>;
    })
  );
}

getLoginOptionCollectionResource.PATH = '/tenant/loginOptions';
