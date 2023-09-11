/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TenantApiResource } from '../../models/tenant-api-resource';

export interface GetTenantsApiResource$Params {
}

export function getTenantsApiResource(http: HttpClient, rootUrl: string, params?: GetTenantsApiResource$Params, context?: HttpContext): Observable<StrictHttpResponse<TenantApiResource>> {
  const rb = new RequestBuilder(rootUrl, getTenantsApiResource.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.tenantapi+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TenantApiResource>;
    })
  );
}

getTenantsApiResource.PATH = '/tenant';
