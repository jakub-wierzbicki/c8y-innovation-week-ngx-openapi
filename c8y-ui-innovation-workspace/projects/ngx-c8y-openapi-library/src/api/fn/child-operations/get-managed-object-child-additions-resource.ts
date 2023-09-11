/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ManagedObjectReferenceCollection } from '../../models/managed-object-reference-collection';

export interface GetManagedObjectChildAdditionsResource$Params {

/**
 * Unique identifier of the managed object.
 */
  id: string;

/**
 * The current page of the paginated results.
 */
  currentPage?: number;

/**
 * Indicates how many entries of the collection shall be returned. The upper limit for one page is 2,000 objects.
 */
  pageSize?: number;

/**
 * Use query language to perform operations and/or filter the results. Details about the properties and supported operations can be found in [Query language](#tag/Query-language).
 */
  query?: string;

/**
 * Determines if children with ID and name should be returned when fetching the managed object. Set it to `false` to improve query performance.
 */
  withChildren?: boolean;

/**
 * When set to `true`, the returned result will contain the total number of children in the respective objects (`childAdditions`, `childAssets` and `childDevices`).
 */
  withChildrenCount?: boolean;

/**
 * When set to `true`, the returned result will contain in the statistics object the total number of elements. Only applicable on [range queries](https://en.wikipedia.org/wiki/Range_query_(database)).
 */
  withTotalElements?: boolean;

/**
 * When set to `true`, the returned result will contain in the statistics object the total number of pages. Only applicable on [range queries](https://en.wikipedia.org/wiki/Range_query_(database)).
 */
  withTotalPages?: boolean;
}

export function getManagedObjectChildAdditionsResource(http: HttpClient, rootUrl: string, params: GetManagedObjectChildAdditionsResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ManagedObjectReferenceCollection>> {
  const rb = new RequestBuilder(rootUrl, getManagedObjectChildAdditionsResource.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.query('currentPage', params.currentPage, {});
    rb.query('pageSize', params.pageSize, {});
    rb.query('query', params.query, {});
    rb.query('withChildren', params.withChildren, {});
    rb.query('withChildrenCount', params.withChildrenCount, {});
    rb.query('withTotalElements', params.withTotalElements, {});
    rb.query('withTotalPages', params.withTotalPages, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.managedobjectreferencecollection+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ManagedObjectReferenceCollection>;
    })
  );
}

getManagedObjectChildAdditionsResource.PATH = '/inventory/managedObjects/{id}/childAdditions';
