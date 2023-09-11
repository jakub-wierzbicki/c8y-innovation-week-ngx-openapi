/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Group } from '../../models/group';

export interface GetGroupByIdResource$Params {

/**
 * Unique identifier of a Cumulocity IoT tenant.
 */
  tenantId: string;

/**
 * Unique identifier of the user group.
 */
  groupId: number;
}

export function getGroupByIdResource(http: HttpClient, rootUrl: string, params: GetGroupByIdResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Group>> {
  const rb = new RequestBuilder(rootUrl, getGroupByIdResource.PATH, 'get');
  if (params) {
    rb.path('tenantId', params.tenantId, {});
    rb.path('groupId', params.groupId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.group+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Group>;
    })
  );
}

getGroupByIdResource.PATH = '/user/{tenantId}/groups/{groupId}';
