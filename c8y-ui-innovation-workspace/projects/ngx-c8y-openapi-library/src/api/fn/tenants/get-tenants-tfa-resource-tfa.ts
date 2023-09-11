/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TenantTfaData } from '../../models/tenant-tfa-data';

export interface GetTenantsTfaResourceTfa$Params {

/**
 * Unique identifier of a Cumulocity IoT tenant.
 */
  tenantId: string;
}

export function getTenantsTfaResourceTfa(http: HttpClient, rootUrl: string, params: GetTenantsTfaResourceTfa$Params, context?: HttpContext): Observable<StrictHttpResponse<TenantTfaData>> {
  const rb = new RequestBuilder(rootUrl, getTenantsTfaResourceTfa.PATH, 'get');
  if (params) {
    rb.path('tenantId', params.tenantId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TenantTfaData>;
    })
  );
}

getTenantsTfaResourceTfa.PATH = '/tenant/tenants/{tenantId}/tfa';
