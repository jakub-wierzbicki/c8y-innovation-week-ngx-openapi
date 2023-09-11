/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RoleReferenceCollection } from '../../models/role-reference-collection';

export interface GetGroupsRoleReferenceCollectionResource$Params {

/**
 * Unique identifier of a Cumulocity IoT tenant.
 */
  tenantId: string;

/**
 * Unique identifier of the user group.
 */
  groupId: number;

/**
 * The current page of the paginated results.
 */
  currentPage?: number;

/**
 * Indicates how many entries of the collection shall be returned. The upper limit for one page is 2,000 objects.
 */
  pageSize?: number;
}

export function getGroupsRoleReferenceCollectionResource(http: HttpClient, rootUrl: string, params: GetGroupsRoleReferenceCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<RoleReferenceCollection>> {
  const rb = new RequestBuilder(rootUrl, getGroupsRoleReferenceCollectionResource.PATH, 'get');
  if (params) {
    rb.path('tenantId', params.tenantId, {});
    rb.path('groupId', params.groupId, {});
    rb.query('currentPage', params.currentPage, {});
    rb.query('pageSize', params.pageSize, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.rolereferencecollection+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RoleReferenceCollection>;
    })
  );
}

getGroupsRoleReferenceCollectionResource.PATH = '/user/{tenantId}/groups/{groupId}/roles';
