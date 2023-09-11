/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BulkOperationCollection } from '../../models/bulk-operation-collection';

export interface GetBulkOperationCollectionResource$Params {

/**
 * The current page of the paginated results.
 */
  currentPage?: number;

/**
 * Indicates how many entries of the collection shall be returned. The upper limit for one page is 2,000 objects.
 */
  pageSize?: number;

/**
 * When set to `true`, the returned result will contain in the statistics object the total number of elements. Only applicable on [range queries](https://en.wikipedia.org/wiki/Range_query_(database)).
 */
  withTotalElements?: boolean;
}

export function getBulkOperationCollectionResource(http: HttpClient, rootUrl: string, params?: GetBulkOperationCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<BulkOperationCollection>> {
  const rb = new RequestBuilder(rootUrl, getBulkOperationCollectionResource.PATH, 'get');
  if (params) {
    rb.query('currentPage', params.currentPage, {});
    rb.query('pageSize', params.pageSize, {});
    rb.query('withTotalElements', params.withTotalElements, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.bulkoperationcollection+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<BulkOperationCollection>;
    })
  );
}

getBulkOperationCollectionResource.PATH = '/devicecontrol/bulkoperations';
