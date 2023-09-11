/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MeasurementCollection } from '../../models/measurement-collection';

export interface GetMeasurementCollectionResource$Params {

/**
 * The current page of the paginated results.
 */
  currentPage?: number;

/**
 * Start date or date and time of the measurement.
 */
  dateFrom?: string;

/**
 * End date or date and time of the measurement.
 */
  dateTo?: string;

/**
 * Indicates how many entries of the collection shall be returned. The upper limit for one page is 2,000 objects.
 */
  pageSize?: number;

/**
 * If you are using a range query (that is, at least one of the `dateFrom` or `dateTo` parameters is included in the request), then setting `revert=true` will sort the results by the newest measurements first.
 * By default, the results are sorted by the oldest measurements first.
 */
  revert?: boolean;

/**
 * The managed object ID to which the measurement is associated.
 */
  source?: string;

/**
 * The type of measurement to search for.
 */
  type?: string;

/**
 * The specific series to search for.
 */
  valueFragmentSeries?: string;

/**
 * A characteristic which identifies the measurement.
 */
  valueFragmentType?: string;

/**
 * When set to `true`, the returned result will contain in the statistics object the total number of elements. Only applicable on [range queries](https://en.wikipedia.org/wiki/Range_query_(database)).
 */
  withTotalElements?: boolean;

/**
 * When set to `true`, the returned result will contain in the statistics object the total number of pages. Only applicable on [range queries](https://en.wikipedia.org/wiki/Range_query_(database)).
 */
  withTotalPages?: boolean;
}

export function getMeasurementCollectionResource(http: HttpClient, rootUrl: string, params?: GetMeasurementCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<MeasurementCollection>> {
  const rb = new RequestBuilder(rootUrl, getMeasurementCollectionResource.PATH, 'get');
  if (params) {
    rb.query('currentPage', params.currentPage, {});
    rb.query('dateFrom', params.dateFrom, {});
    rb.query('dateTo', params.dateTo, {});
    rb.query('pageSize', params.pageSize, {});
    rb.query('revert', params.revert, {});
    rb.query('source', params.source, {});
    rb.query('type', params.type, {});
    rb.query('valueFragmentSeries', params.valueFragmentSeries, {});
    rb.query('valueFragmentType', params.valueFragmentType, {});
    rb.query('withTotalElements', params.withTotalElements, {});
    rb.query('withTotalPages', params.withTotalPages, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.measurementcollection+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<MeasurementCollection>;
    })
  );
}

getMeasurementCollectionResource.PATH = '/measurement/measurements';
