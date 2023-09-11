/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SummaryAllTenantsUsageStatisticsCollection } from '../../models/summary-all-tenants-usage-statistics-collection';

export interface GetSummaryAllTenantsUsageStatistics$Params {

/**
 * Start date or date and time of the statistics.
 */
  dateFrom?: string;

/**
 * End date or date and time of the statistics.
 */
  dateTo?: string;
}

export function getSummaryAllTenantsUsageStatistics(http: HttpClient, rootUrl: string, params?: GetSummaryAllTenantsUsageStatistics$Params, context?: HttpContext): Observable<StrictHttpResponse<SummaryAllTenantsUsageStatisticsCollection>> {
  const rb = new RequestBuilder(rootUrl, getSummaryAllTenantsUsageStatistics.PATH, 'get');
  if (params) {
    rb.query('dateFrom', params.dateFrom, {});
    rb.query('dateTo', params.dateTo, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SummaryAllTenantsUsageStatisticsCollection>;
    })
  );
}

getSummaryAllTenantsUsageStatistics.PATH = '/tenant/statistics/allTenantsSummary';
