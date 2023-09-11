/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CurrentTenant } from '../../models/current-tenant';

export interface GetCurrentTenantResource$Params {

/**
 * When set to `true`, the returned result will contain the parent of the current tenant.
 */
  withParent?: boolean;
}

export function getCurrentTenantResource(http: HttpClient, rootUrl: string, params?: GetCurrentTenantResource$Params, context?: HttpContext): Observable<StrictHttpResponse<CurrentTenant>> {
  const rb = new RequestBuilder(rootUrl, getCurrentTenantResource.PATH, 'get');
  if (params) {
    rb.query('withParent', params.withParent, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.currenttenant+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CurrentTenant>;
    })
  );
}

getCurrentTenantResource.PATH = '/tenant/currentTenant';
