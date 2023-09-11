/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SummaryTenantUsageStatistics } from '../../models/summary-tenant-usage-statistics';

export interface GetSummaryUsageStatistics$Params {

/**
 * Start date or date and time of the statistics.
 */
  dateFrom?: string;

/**
 * End date or date and time of the statistics.
 */
  dateTo?: string;

/**
 * Unique identifier of a Cumulocity IoT tenant.
 */
  tenant?: string;
}

export function getSummaryUsageStatistics(http: HttpClient, rootUrl: string, params?: GetSummaryUsageStatistics$Params, context?: HttpContext): Observable<StrictHttpResponse<SummaryTenantUsageStatistics>> {
  const rb = new RequestBuilder(rootUrl, getSummaryUsageStatistics.PATH, 'get');
  if (params) {
    rb.query('dateFrom', params.dateFrom, {});
    rb.query('dateTo', params.dateTo, {});
    rb.query('tenant', params.tenant, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.tenantusagestatisticssummary+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SummaryTenantUsageStatistics>;
    })
  );
}

getSummaryUsageStatistics.PATH = '/tenant/statistics/summary';
