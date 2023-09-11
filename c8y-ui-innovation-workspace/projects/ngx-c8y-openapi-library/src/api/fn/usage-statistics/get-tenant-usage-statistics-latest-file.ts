/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface GetTenantUsageStatisticsLatestFile$Params {

/**
 * Date (format YYYY-MM-dd) specifying the month for which the statistics file will be downloaded (the day value is ignored).
 */
  month: string;
}

export function getTenantUsageStatisticsLatestFile(http: HttpClient, rootUrl: string, params: GetTenantUsageStatisticsLatestFile$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, getTenantUsageStatisticsLatestFile.PATH, 'get');
  if (params) {
    rb.path('month', params.month, {});
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

getTenantUsageStatisticsLatestFile.PATH = '/tenant/statistics/files/latest/{month}';
