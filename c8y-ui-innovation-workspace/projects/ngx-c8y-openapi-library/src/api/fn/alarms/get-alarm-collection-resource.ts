/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AlarmCollection } from '../../models/alarm-collection';

export interface GetAlarmCollectionResource$Params {

/**
 * Start date or date and time of the alarm creation.
 */
  createdFrom?: string;

/**
 * End date or date and time of the alarm creation.
 */
  createdTo?: string;

/**
 * The current page of the paginated results.
 */
  currentPage?: number;

/**
 * Start date or date and time of the alarm occurrence.
 */
  dateFrom?: string;

/**
 * End date or date and time of the alarm occurrence.
 */
  dateTo?: string;

/**
 * Start date or date and time of the last update made.
 */
  lastUpdatedFrom?: string;

/**
 * End date or date and time of the last update made.
 */
  lastUpdatedTo?: string;

/**
 * Indicates how many entries of the collection shall be returned. The upper limit for one page is 2,000 objects.
 */
  pageSize?: number;

/**
 * When set to `true` only alarms with status CLEARED will be fetched, whereas `false` will fetch all alarms with status ACTIVE or ACKNOWLEDGED. Takes precedence over the `status` parameter.
 */
  resolved?: boolean;

/**
 * The severity of the alarm to search for.
 * >**&#9432; Info:** If you query for multiple alarm severities at once, comma-separate the values.
 */
  severity?: Array<string>;

/**
 * The managed object ID to which the alarm is associated.
 */
  source?: string;

/**
 * The status of the alarm to search for. Should not be used when `resolved` parameter is provided.
 * >**&#9432; Info:** If you query for multiple alarm statuses at once, comma-separate the values.
 */
  status?: Array<string>;

/**
 * The types of alarm to search for.
 * >**&#9432; Info:** If you query for multiple alarm types at once, comma-separate the values. Space characters in alarm types must be escaped.
 */
  type?: Array<string>;

/**
 * When set to `true` also alarms for related source assets will be included in the request. When this parameter is provided a `source` must be specified.
 */
  withSourceAssets?: boolean;

/**
 * When set to `true` also alarms for related source devices will be included in the request. When this parameter is provided a `source` must be specified.
 */
  withSourceDevices?: boolean;

/**
 * When set to `true`, the returned result will contain in the statistics object the total number of elements. Only applicable on [range queries](https://en.wikipedia.org/wiki/Range_query_(database)).
 */
  withTotalElements?: boolean;

/**
 * When set to `true`, the returned result will contain in the statistics object the total number of pages. Only applicable on [range queries](https://en.wikipedia.org/wiki/Range_query_(database)).
 */
  withTotalPages?: boolean;
}

export function getAlarmCollectionResource(http: HttpClient, rootUrl: string, params?: GetAlarmCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<AlarmCollection>> {
  const rb = new RequestBuilder(rootUrl, getAlarmCollectionResource.PATH, 'get');
  if (params) {
    rb.query('createdFrom', params.createdFrom, {});
    rb.query('createdTo', params.createdTo, {});
    rb.query('currentPage', params.currentPage, {});
    rb.query('dateFrom', params.dateFrom, {});
    rb.query('dateTo', params.dateTo, {});
    rb.query('lastUpdatedFrom', params.lastUpdatedFrom, {});
    rb.query('lastUpdatedTo', params.lastUpdatedTo, {});
    rb.query('pageSize', params.pageSize, {});
    rb.query('resolved', params.resolved, {});
    rb.query('severity', params.severity, {"explode":false});
    rb.query('source', params.source, {});
    rb.query('status', params.status, {"explode":false});
    rb.query('type', params.type, {"explode":false});
    rb.query('withSourceAssets', params.withSourceAssets, {});
    rb.query('withSourceDevices', params.withSourceDevices, {});
    rb.query('withTotalElements', params.withTotalElements, {});
    rb.query('withTotalPages', params.withTotalPages, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.alarmcollection+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AlarmCollection>;
    })
  );
}

getAlarmCollectionResource.PATH = '/alarm/alarms';
