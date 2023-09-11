/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Tenant } from '../../models/tenant';

export interface GetTenantResource$Params {

/**
 * Unique identifier of a Cumulocity IoT tenant.
 */
  tenantId: string;
}

export function getTenantResource(http: HttpClient, rootUrl: string, params: GetTenantResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Tenant>> {
  const rb = new RequestBuilder(rootUrl, getTenantResource.PATH, 'get');
  if (params) {
    rb.path('tenantId', params.tenantId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.tenant+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Tenant>;
    })
  );
}

getTenantResource.PATH = '/tenant/tenants/{tenantId}';
