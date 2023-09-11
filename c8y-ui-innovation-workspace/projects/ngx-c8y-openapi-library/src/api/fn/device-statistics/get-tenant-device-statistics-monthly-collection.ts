/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DeviceStatisticsCollection } from '../../models/device-statistics-collection';

export interface GetTenantDeviceStatisticsMonthlyCollection$Params {

/**
 * Unique identifier of a Cumulocity IoT tenant.
 */
  tenantId: string;

/**
 * Date (format YYYY-MM-dd) of the queried month (the day value is ignored).
 */
  date: string;

/**
 * The current page of the paginated results.
 */
  currentPage?: number;

/**
 * The ID of the device to search for.
 */
  deviceId?: string;

/**
 * Indicates how many entries of the collection shall be returned. The upper limit for one page is 2,000 objects.
 */
  pageSize?: number;

/**
 * When set to `true`, the returned result will contain in the statistics object the total number of pages. Only applicable on [range queries](https://en.wikipedia.org/wiki/Range_query_(database)).
 */
  withTotalPages?: boolean;
}

export function getTenantDeviceStatisticsMonthlyCollection(http: HttpClient, rootUrl: string, params: GetTenantDeviceStatisticsMonthlyCollection$Params, context?: HttpContext): Observable<StrictHttpResponse<DeviceStatisticsCollection>> {
  const rb = new RequestBuilder(rootUrl, getTenantDeviceStatisticsMonthlyCollection.PATH, 'get');
  if (params) {
    rb.path('tenantId', params.tenantId, {});
    rb.path('date', params.date, {});
    rb.query('currentPage', params.currentPage, {});
    rb.query('deviceId', params.deviceId, {});
    rb.query('pageSize', params.pageSize, {});
    rb.query('withTotalPages', params.withTotalPages, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DeviceStatisticsCollection>;
    })
  );
}

getTenantDeviceStatisticsMonthlyCollection.PATH = '/tenant/statistics/device/{tenantId}/monthly/{date}';
