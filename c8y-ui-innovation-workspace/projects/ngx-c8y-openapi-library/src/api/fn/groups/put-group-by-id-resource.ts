/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Group } from '../../models/group';

export interface PutGroupByIdResource$Params {

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
      body: Group
}

export function putGroupByIdResource(http: HttpClient, rootUrl: string, params: PutGroupByIdResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Group>> {
  const rb = new RequestBuilder(rootUrl, putGroupByIdResource.PATH, 'put');
  if (params) {
    rb.path('tenantId', params.tenantId, {});
    rb.path('groupId', params.groupId, {});
    rb.header('Accept', params.Accept, {});
    rb.body(params.body, 'application/vnd.com.nsn.cumulocity.group+json');
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

putGroupByIdResource.PATH = '/user/{tenantId}/groups/{groupId}';
