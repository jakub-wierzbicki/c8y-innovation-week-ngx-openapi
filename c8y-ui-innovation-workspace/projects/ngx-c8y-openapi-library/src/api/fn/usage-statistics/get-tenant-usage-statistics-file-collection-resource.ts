/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TenantUsageStatisticsFileCollection } from '../../models/tenant-usage-statistics-file-collection';

export interface GetTenantUsageStatisticsFileCollectionResource$Params {

/**
 * The current page of the paginated results.
 */
  currentPage?: number;

/**
 * Start date or date and time of the statistics file generation.
 */
  dateFrom?: string;

/**
 * End date or date and time of the statistics file generation.
 */
  dateTo?: string;

/**
 * Indicates how many entries of the collection shall be returned. The upper limit for one page is 2,000 objects.
 */
  pageSize?: number;

/**
 * When set to `true`, the returned result will contain in the statistics object the total number of pages. Only applicable on [range queries](https://en.wikipedia.org/wiki/Range_query_(database)).
 */
  withTotalPages?: boolean;
}

export function getTenantUsageStatisticsFileCollectionResource(http: HttpClient, rootUrl: string, params?: GetTenantUsageStatisticsFileCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<TenantUsageStatisticsFileCollection>> {
  const rb = new RequestBuilder(rootUrl, getTenantUsageStatisticsFileCollectionResource.PATH, 'get');
  if (params) {
    rb.query('currentPage', params.currentPage, {});
    rb.query('dateFrom', params.dateFrom, {});
    rb.query('dateTo', params.dateTo, {});
    rb.query('pageSize', params.pageSize, {});
    rb.query('withTotalPages', params.withTotalPages, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.tenantStatisticsfilecollection+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TenantUsageStatisticsFileCollection>;
    })
  );
}

getTenantUsageStatisticsFileCollectionResource.PATH = '/tenant/statistics/files';
