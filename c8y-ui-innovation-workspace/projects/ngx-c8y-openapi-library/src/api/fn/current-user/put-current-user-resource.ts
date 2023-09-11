/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CurrentUser } from '../../models/current-user';

export interface PutCurrentUserResource$Params {

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;
      body: CurrentUser
}

export function putCurrentUserResource(http: HttpClient, rootUrl: string, params: PutCurrentUserResource$Params, context?: HttpContext): Observable<StrictHttpResponse<CurrentUser>> {
  const rb = new RequestBuilder(rootUrl, putCurrentUserResource.PATH, 'put');
  if (params) {
    rb.header('Accept', params.Accept, {});
    rb.body(params.body, 'application/vnd.com.nsn.cumulocity.currentuser+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.currentuser+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CurrentUser>;
    })
  );
}

putCurrentUserResource.PATH = '/user/currentUser';
