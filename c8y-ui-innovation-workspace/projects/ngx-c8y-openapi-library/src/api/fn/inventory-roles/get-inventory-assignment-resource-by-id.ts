/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { InventoryAssignment } from '../../models/inventory-assignment';

export interface GetInventoryAssignmentResourceById$Params {

/**
 * Unique identifier of a Cumulocity IoT tenant.
 */
  tenantId: string;

/**
 * Unique identifier of the a user.
 */
  userId: string;

/**
 * Unique identifier of the inventory assignment.
 */
  id: number;
}

export function getInventoryAssignmentResourceById(http: HttpClient, rootUrl: string, params: GetInventoryAssignmentResourceById$Params, context?: HttpContext): Observable<StrictHttpResponse<InventoryAssignment>> {
  const rb = new RequestBuilder(rootUrl, getInventoryAssignmentResourceById.PATH, 'get');
  if (params) {
    rb.path('tenantId', params.tenantId, {});
    rb.path('userId', params.userId, {});
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.inventoryassignment+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<InventoryAssignment>;
    })
  );
}

getInventoryAssignmentResourceById.PATH = '/user/{tenantId}/users/{userId}/roles/inventory/{id}';
