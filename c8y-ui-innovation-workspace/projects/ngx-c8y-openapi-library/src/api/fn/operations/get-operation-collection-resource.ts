/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OperationCollection } from '../../models/operation-collection';

export interface GetOperationCollectionResource$Params {

/**
 * An agent ID that may be part of the operation. If this parameter is set, the operation response objects contain the `deviceExternalIDs` object.
 */
  agentId?: string;

/**
 * The bulk operation ID that this operation belongs to.
 */
  bulkOperationId?: string;

/**
 * The current page of the paginated results.
 */
  currentPage?: number;

/**
 * Start date or date and time of the operation.
 */
  dateFrom?: string;

/**
 * End date or date and time of the operation.
 */
  dateTo?: string;

/**
 * The ID of the device the operation is performed for.
 */
  deviceId?: string;

/**
 * The type of fragment that must be part of the operation.
 */
  fragmentType?: string;

/**
 * Indicates how many entries of the collection shall be returned. The upper limit for one page is 2,000 objects.
 */
  pageSize?: number;

/**
 * If you are using a range query (that is, at least one of the `dateFrom` or `dateTo` parameters is included in the request), then setting `revert=true` will sort the results by the newest operations first.
 * By default, the results are sorted by the oldest operations first.
 */
  revert?: boolean;

/**
 * Status of the operation.
 */
  status?: 'SUCCESSFUL' | 'FAILED' | 'EXECUTING' | 'PENDING';

/**
 * When set to `true`, the returned result will contain in the statistics object the total number of elements. Only applicable on [range queries](https://en.wikipedia.org/wiki/Range_query_(database)).
 */
  withTotalElements?: boolean;

/**
 * When set to `true`, the returned result will contain in the statistics object the total number of pages. Only applicable on [range queries](https://en.wikipedia.org/wiki/Range_query_(database)).
 */
  withTotalPages?: boolean;
}

export function getOperationCollectionResource(http: HttpClient, rootUrl: string, params?: GetOperationCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<OperationCollection>> {
  const rb = new RequestBuilder(rootUrl, getOperationCollectionResource.PATH, 'get');
  if (params) {
    rb.query('agentId', params.agentId, {});
    rb.query('bulkOperationId', params.bulkOperationId, {});
    rb.query('currentPage', params.currentPage, {});
    rb.query('dateFrom', params.dateFrom, {});
    rb.query('dateTo', params.dateTo, {});
    rb.query('deviceId', params.deviceId, {});
    rb.query('fragmentType', params.fragmentType, {});
    rb.query('pageSize', params.pageSize, {});
    rb.query('revert', params.revert, {});
    rb.query('status', params.status, {});
    rb.query('withTotalElements', params.withTotalElements, {});
    rb.query('withTotalPages', params.withTotalPages, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.operationcollection+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<OperationCollection>;
    })
  );
}

getOperationCollectionResource.PATH = '/devicecontrol/operations';
