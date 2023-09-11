/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ManagedObject } from '../../models/managed-object';

export interface GetManagedObjectResource$Params {

/**
 * Unique identifier of the managed object.
 */
  id: string;

/**
 * When set to `true`, the returned references of child devices won't contain their names.
 */
  skipChildrenNames?: boolean;

/**
 * Determines if children with ID and name should be returned when fetching the managed object. Set it to `false` to improve query performance.
 */
  withChildren?: boolean;

/**
 * When set to `true`, the returned result will contain the total number of children in the respective objects (`childAdditions`, `childAssets` and `childDevices`).
 */
  withChildrenCount?: boolean;

/**
 * When set to `true`, the returned references of child parents will return the device's parents (if any). Otherwise, it will be an empty array.
 */
  withParents?: boolean;
}

export function getManagedObjectResource(http: HttpClient, rootUrl: string, params: GetManagedObjectResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ManagedObject>> {
  const rb = new RequestBuilder(rootUrl, getManagedObjectResource.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.query('skipChildrenNames', params.skipChildrenNames, {});
    rb.query('withChildren', params.withChildren, {});
    rb.query('withChildrenCount', params.withChildrenCount, {});
    rb.query('withParents', params.withParents, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.managedobject+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ManagedObject>;
    })
  );
}

getManagedObjectResource.PATH = '/inventory/managedObjects/{id}';
