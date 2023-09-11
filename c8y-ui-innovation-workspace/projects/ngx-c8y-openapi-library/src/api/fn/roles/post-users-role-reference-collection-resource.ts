/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RoleReference } from '../../models/role-reference';
import { SubscribedRole } from '../../models/subscribed-role';

export interface PostUsersRoleReferenceCollectionResource$Params {

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
      body: SubscribedRole
}

export function postUsersRoleReferenceCollectionResource(http: HttpClient, rootUrl: string, params: PostUsersRoleReferenceCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<RoleReference>> {
  const rb = new RequestBuilder(rootUrl, postUsersRoleReferenceCollectionResource.PATH, 'post');
  if (params) {
    rb.path('tenantId', params.tenantId, {});
    rb.path('userId', params.userId, {});
    rb.header('Accept', params.Accept, {});
    rb.body(params.body, 'application/vnd.com.nsn.cumulocity.rolereference+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.rolereference+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RoleReference>;
    })
  );
}

postUsersRoleReferenceCollectionResource.PATH = '/user/{tenantId}/users/{userId}/roles';
