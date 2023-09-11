/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { InventoryAssignment } from '../../models/inventory-assignment';

export interface PostInventoryAssignmentResource$Params {

/**
 * Unique identifier of a Cumulocity IoT tenant.
 */
  tenantId: string;

/**
 * Unique identifier of the a user.
 */
  userId: string;

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;
      body: InventoryAssignment & {
'roles': Array<{
'description'?: any;
'permissions'?: any;
}>;
}
}

export function postInventoryAssignmentResource(http: HttpClient, rootUrl: string, params: PostInventoryAssignmentResource$Params, context?: HttpContext): Observable<StrictHttpResponse<InventoryAssignment>> {
  const rb = new RequestBuilder(rootUrl, postInventoryAssignmentResource.PATH, 'post');
  if (params) {
    rb.path('tenantId', params.tenantId, {});
    rb.path('userId', params.userId, {});
    rb.header('Accept', params.Accept, {});
    rb.body(params.body, 'application/vnd.com.nsn.cumulocity.inventoryassignment+json');
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

postInventoryAssignmentResource.PATH = '/user/{tenantId}/users/{userId}/roles/inventory';
