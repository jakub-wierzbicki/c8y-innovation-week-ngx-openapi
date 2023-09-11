/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { InventoryAssignmentCollection } from '../../models/inventory-assignment-collection';

export interface GetInventoryAssignmentResource$Params {

/**
 * Unique identifier of a Cumulocity IoT tenant.
 */
  tenantId: string;

/**
 * Unique identifier of the a user.
 */
  userId: string;
}

export function getInventoryAssignmentResource(http: HttpClient, rootUrl: string, params: GetInventoryAssignmentResource$Params, context?: HttpContext): Observable<StrictHttpResponse<InventoryAssignmentCollection>> {
  const rb = new RequestBuilder(rootUrl, getInventoryAssignmentResource.PATH, 'get');
  if (params) {
    rb.path('tenantId', params.tenantId, {});
    rb.path('userId', params.userId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.inventoryassignmentcollection+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<InventoryAssignmentCollection>;
    })
  );
}

getInventoryAssignmentResource.PATH = '/user/{tenantId}/users/{userId}/roles/inventory';
