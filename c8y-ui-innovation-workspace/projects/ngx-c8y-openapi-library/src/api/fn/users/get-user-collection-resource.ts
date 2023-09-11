/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserCollection } from '../../models/user-collection';

export interface GetUserCollectionResource$Params {

/**
 * Unique identifier of a Cumulocity IoT tenant.
 */
  tenantId: string;

/**
 * The current page of the paginated results.
 */
  currentPage?: number;

/**
 * Numeric group identifiers. The response will contain only users which belong to at least one of the specified groups.
 * >**&#9432; Info:** If you query for multiple user groups at once, comma-separate the values.
 */
  groups?: Array<string>;

/**
 * If set to `true`, the response will only contain users created during bootstrap process (starting with “device_”).
 * If the flag is absent or `false` the result will not contain “device_” users.
 */
  onlyDevices?: boolean;

/**
 * Exact username of the owner of the user
 */
  owner?: string;

/**
 * Indicates how many entries of the collection shall be returned. The upper limit for one page is 2,000 objects.
 */
  pageSize?: number;

/**
 * Prefix or full username
 */
  username?: string;

/**
 * If set to `true`, then each of returned user will contain an additional field “subusersCount”.
 * It is the number of direct subusers (users with corresponding “owner”).
 */
  withSubusersCount?: boolean;

/**
 * When set to `true`, the returned result will contain in the statistics object the total number of elements. Only applicable on [range queries](https://en.wikipedia.org/wiki/Range_query_(database)).
 */
  withTotalElements?: boolean;

/**
 * When set to `true`, the returned result will contain in the statistics object the total number of pages. Only applicable on [range queries](https://en.wikipedia.org/wiki/Range_query_(database)).
 */
  withTotalPages?: boolean;
}

export function getUserCollectionResource(http: HttpClient, rootUrl: string, params: GetUserCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<UserCollection>> {
  const rb = new RequestBuilder(rootUrl, getUserCollectionResource.PATH, 'get');
  if (params) {
    rb.path('tenantId', params.tenantId, {});
    rb.query('currentPage', params.currentPage, {});
    rb.query('groups', params.groups, {"style":"form","explode":false});
    rb.query('onlyDevices', params.onlyDevices, {});
    rb.query('owner', params.owner, {});
    rb.query('pageSize', params.pageSize, {});
    rb.query('username', params.username, {});
    rb.query('withSubusersCount', params.withSubusersCount, {});
    rb.query('withTotalElements', params.withTotalElements, {});
    rb.query('withTotalPages', params.withTotalPages, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.usercollection+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserCollection>;
    })
  );
}

getUserCollectionResource.PATH = '/user/{tenantId}/users';
