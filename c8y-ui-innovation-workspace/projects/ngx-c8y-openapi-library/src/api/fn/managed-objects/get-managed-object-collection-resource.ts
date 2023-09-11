/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ManagedObjectCollection } from '../../models/managed-object-collection';

export interface GetManagedObjectCollectionResource$Params {

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
 * A characteristic which identifies a managed object or event, for example, geolocation, electricity sensor, relay state.
 */
  fragmentType?: string;

/**
 * The managed object IDs to search for.
 * >**&#9432; Info:** If you query for multiple IDs at once, comma-separate the values.
 */
  ids?: Array<string>;

/**
 * When set to `true` it returns managed objects which don't have any parent. If the current user doesn't have access to the parent, this is also root for the user.
 */
  onlyRoots?: boolean;

/**
 * Username of the owner of the managed objects.
 */
  owner?: string;

/**
 * Indicates how many entries of the collection shall be returned. The upper limit for one page is 2,000 objects.
 */
  pageSize?: number;

/**
 * Similar to the parameter `query`, but it assumes that this is a device query request and it adds automatically the search criteria `fragmentType=c8y_IsDevice`.
 */
  q?: string;

/**
 * Use query language to perform operations and/or filter the results. Details about the properties and supported operations can be found in [Query language](#tag/Query-language).
 */
  query?: string;

/**
 * When set to `true`, the returned references of child devices won't contain their names.
 */
  skipChildrenNames?: boolean;

/**
 * Search for managed objects where any property value is equal to the given one. Only string values are supported.
 */
  text?: string;

/**
 * The type of managed object to search for.
 */
  type?: string;

/**
 * Determines if children with ID and name should be returned when fetching the managed object. Set it to `false` to improve query performance.
 */
  withChildren?: boolean;

/**
 * When set to `true`, the returned result will contain the total number of children in the respective objects (`childAdditions`, `childAssets` and `childDevices`).
 */
  withChildrenCount?: boolean;

/**
 * When set to `true` it returns additional information about the groups to which the searched managed object belongs. This results in setting the `assetParents` property with additional information about the groups.
 */
  withGroups?: boolean;

/**
 * When set to `true`, the returned references of child parents will return the device's parents (if any). Otherwise, it will be an empty array.
 */
  withParents?: boolean;

/**
 * When set to `true`, the returned result will contain in the statistics object the total number of elements. Only applicable on [range queries](https://en.wikipedia.org/wiki/Range_query_(database)).
 */
  withTotalElements?: boolean;

/**
 * When set to `true`, the returned result will contain in the statistics object the total number of pages. Only applicable on [range queries](https://en.wikipedia.org/wiki/Range_query_(database)).
 */
  withTotalPages?: boolean;
}

export function getManagedObjectCollectionResource(http: HttpClient, rootUrl: string, params?: GetManagedObjectCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ManagedObjectCollection>> {
  const rb = new RequestBuilder(rootUrl, getManagedObjectCollectionResource.PATH, 'get');
  if (params) {
    rb.query('childAdditionId', params.childAdditionId, {});
    rb.query('childAssetId', params.childAssetId, {});
    rb.query('childDeviceId', params.childDeviceId, {});
    rb.query('currentPage', params.currentPage, {});
    rb.query('fragmentType', params.fragmentType, {});
    rb.query('ids', params.ids, {"style":"form","explode":false});
    rb.query('onlyRoots', params.onlyRoots, {});
    rb.query('owner', params.owner, {});
    rb.query('pageSize', params.pageSize, {});
    rb.query('q', params.q, {});
    rb.query('query', params.query, {});
    rb.query('skipChildrenNames', params.skipChildrenNames, {});
    rb.query('text', params.text, {});
    rb.query('type', params.type, {});
    rb.query('withChildren', params.withChildren, {});
    rb.query('withChildrenCount', params.withChildrenCount, {});
    rb.query('withGroups', params.withGroups, {});
    rb.query('withParents', params.withParents, {});
    rb.query('withTotalElements', params.withTotalElements, {});
    rb.query('withTotalPages', params.withTotalPages, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.managedobjectcollection+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ManagedObjectCollection>;
    })
  );
}

getManagedObjectCollectionResource.PATH = '/inventory/managedObjects';
