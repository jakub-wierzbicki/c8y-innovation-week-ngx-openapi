/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SubscribedUser } from '../../models/subscribed-user';
import { UserReference } from '../../models/user-reference';

export interface PostUserReferenceCollectionResource$Params {

/**
 * Unique identifier of a Cumulocity IoT tenant.
 */
  tenantId: string;

/**
 * Unique identifier of the user group.
 */
  groupId: number;

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;
      body: SubscribedUser
}

export function postUserReferenceCollectionResource(http: HttpClient, rootUrl: string, params: PostUserReferenceCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<UserReference>> {
  const rb = new RequestBuilder(rootUrl, postUserReferenceCollectionResource.PATH, 'post');
  if (params) {
    rb.path('tenantId', params.tenantId, {});
    rb.path('groupId', params.groupId, {});
    rb.header('Accept', params.Accept, {});
    rb.body(params.body, 'application/vnd.com.nsn.cumulocity.userreference+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.userreference+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserReference>;
    })
  );
}

postUserReferenceCollectionResource.PATH = '/user/{tenantId}/groups/{groupId}/users';
