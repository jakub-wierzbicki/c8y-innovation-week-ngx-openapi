/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MeasurementSeries } from '../../models/measurement-series';

export interface GetMeasurementSeriesResource$Params {

/**
 * Fetch aggregated results as specified.
 */
  aggregationType?: 'DAILY' | 'HOURLY' | 'MINUTELY';

/**
 * Start date or date and time of the measurement.
 */
  dateFrom: string;

/**
 * End date or date and time of the measurement.
 */
  dateTo: string;

/**
 * If you are using a range query (that is, at least one of the `dateFrom` or `dateTo` parameters is included in the request), then setting `revert=true` will sort the results by the newest measurements first.
 * By default, the results are sorted by the oldest measurements first.
 */
  revert?: boolean;

/**
 * The specific series to search for.
 * >**&#9432; Info:** If you query for multiple series at once, comma-separate the values.
 */
  series?: Array<string>;

/**
 * The managed object ID to which the measurement is associated.
 */
  source: string;
}

export function getMeasurementSeriesResource(http: HttpClient, rootUrl: string, params: GetMeasurementSeriesResource$Params, context?: HttpContext): Observable<StrictHttpResponse<MeasurementSeries>> {
  const rb = new RequestBuilder(rootUrl, getMeasurementSeriesResource.PATH, 'get');
  if (params) {
    rb.query('aggregationType', params.aggregationType, {});
    rb.query('dateFrom', params.dateFrom, {});
    rb.query('dateTo', params.dateTo, {});
    rb.query('revert', params.revert, {});
    rb.query('series', params.series, {"style":"form","explode":false});
    rb.query('source', params.source, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<MeasurementSeries>;
    })
  );
}

getMeasurementSeriesResource.PATH = '/measurement/measurements/series';
