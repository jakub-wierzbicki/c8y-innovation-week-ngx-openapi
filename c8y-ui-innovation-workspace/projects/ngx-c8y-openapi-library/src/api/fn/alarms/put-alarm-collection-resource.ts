/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Alarm } from '../../models/alarm';

export interface PutAlarmCollectionResource$Params {

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;

/**
 * Used to explicitly control the processing mode of the request. See [Processing mode](#processing-mode) for more details.
 */
  'X-Cumulocity-Processing-Mode'?: 'PERSISTENT' | 'TRANSIENT' | 'QUIESCENT' | 'CEP';

/**
 * Start date or date and time of the alarm creation.
 */
  createdFrom?: string;

/**
 * End date or date and time of the alarm creation.
 */
  createdTo?: string;

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
 * When set to `true` also alarms for related source assets will be included in the request. When this parameter is provided a `source` must be specified.
 */
  withSourceAssets?: boolean;

/**
 * When set to `true` also alarms for related source devices will be included in the request. When this parameter is provided a `source` must be specified.
 */
  withSourceDevices?: boolean;
      body: Alarm & {
'severity'?: any;
'source'?: any;
'text'?: any;
'time'?: any;
'type'?: any;
}
}

export function putAlarmCollectionResource(http: HttpClient, rootUrl: string, params: PutAlarmCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, putAlarmCollectionResource.PATH, 'put');
  if (params) {
    rb.header('Accept', params.Accept, {});
    rb.header('X-Cumulocity-Processing-Mode', params['X-Cumulocity-Processing-Mode'], {});
    rb.query('createdFrom', params.createdFrom, {});
    rb.query('createdTo', params.createdTo, {});
    rb.query('dateFrom', params.dateFrom, {});
    rb.query('dateTo', params.dateTo, {});
    rb.query('resolved', params.resolved, {});
    rb.query('severity', params.severity, {"explode":false});
    rb.query('source', params.source, {});
    rb.query('status', params.status, {"explode":false});
    rb.query('withSourceAssets', params.withSourceAssets, {});
    rb.query('withSourceDevices', params.withSourceDevices, {});
    rb.body(params.body, 'application/vnd.com.nsn.cumulocity.alarm+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

putAlarmCollectionResource.PATH = '/alarm/alarms';
