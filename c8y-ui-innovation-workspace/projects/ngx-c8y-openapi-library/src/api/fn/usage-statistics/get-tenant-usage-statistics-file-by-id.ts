/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface GetTenantUsageStatisticsFileById$Params {

/**
 * Unique identifier of the statistics file.
 */
  id: string;
}

export function getTenantUsageStatisticsFileById(http: HttpClient, rootUrl: string, params: GetTenantUsageStatisticsFileById$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, getTenantUsageStatisticsFileById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: 'application/octet-stream', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Blob>;
    })
  );
}

getTenantUsageStatisticsFileById.PATH = '/tenant/statistics/files/{id}';
