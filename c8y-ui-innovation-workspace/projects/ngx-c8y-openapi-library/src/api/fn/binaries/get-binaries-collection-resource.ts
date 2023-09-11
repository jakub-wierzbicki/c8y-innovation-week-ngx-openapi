/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BinaryCollection } from '../../models/binary-collection';

export interface GetBinariesCollectionResource$Params {

/**
 * Search for a specific child addition and list all the groups to which it belongs.
 */
  childAdditionId?: string;

/**
 * Search for a specific child asset and list all the groups to which it belongs.
 */
  childAssetId?: string;

/**
 * Search for a specific child device and list all the groups to which it belongs.
 */
  childDeviceId?: string;

/**
 * The current page of the paginated results.
 */
  currentPage?: number;

/**
 * The managed object IDs to search for.
 * >**&#9432; Info:** If you query for multiple IDs at once, comma-separate the values.
 */
  ids?: Array<string>;

/**
 * Username of the owner of the managed objects.
 */
  owner?: string;

/**
 * Indicates how many entries of the collection shall be returned. The upper limit for one page is 2,000 objects.
 */
  pageSize?: number;

/**
 * Search for managed objects where any property value is equal to the given one. Only string values are supported.
 */
  text?: string;

/**
 * The type of managed object to search for.
 */
  type?: string;

/**
 * When set to `true`, the returned result will contain in the statistics object the total number of pages. Only applicable on [range queries](https://en.wikipedia.org/wiki/Range_query_(database)).
 */
  withTotalPages?: boolean;
}

export function getBinariesCollectionResource(http: HttpClient, rootUrl: string, params?: GetBinariesCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<BinaryCollection>> {
  const rb = new RequestBuilder(rootUrl, getBinariesCollectionResource.PATH, 'get');
  if (params) {
    rb.query('childAdditionId', params.childAdditionId, {});
    rb.query('childAssetId', params.childAssetId, {});
    rb.query('childDeviceId', params.childDeviceId, {});
    rb.query('currentPage', params.currentPage, {});
    rb.query('ids', params.ids, {"style":"form","explode":false});
    rb.query('owner', params.owner, {});
    rb.query('pageSize', params.pageSize, {});
    rb.query('text', params.text, {});
    rb.query('type', params.type, {});
    rb.query('withTotalPages', params.withTotalPages, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.managedobjectcollection+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<BinaryCollection>;
    })
  );
}

getBinariesCollectionResource.PATH = '/inventory/binaries';
