/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface GetAlarmCollectionCountResource$Params {

/**
 * Start date or date and time of the alarm occurrence.
 */
  dateFrom?: string;

/**
 * End date or date and time of the alarm occurrence.
 */
  dateTo?: string;

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
}

export function getAlarmCollectionCountResource(http: HttpClient, rootUrl: string, params?: GetAlarmCollectionCountResource$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
  const rb = new RequestBuilder(rootUrl, getAlarmCollectionCountResource.PATH, 'get');
  if (params) {
    rb.query('dateFrom', params.dateFrom, {});
    rb.query('dateTo', params.dateTo, {});
    rb.query('resolved', params.resolved, {});
    rb.query('severity', params.severity, {"explode":false});
    rb.query('source', params.source, {});
    rb.query('status', params.status, {"explode":false});
    rb.query('type', params.type, {"explode":false});
    rb.query('withSourceAssets', params.withSourceAssets, {});
    rb.query('withSourceDevices', params.withSourceDevices, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/plain, application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
    })
  );
}

getAlarmCollectionCountResource.PATH = '/alarm/alarms/count';
