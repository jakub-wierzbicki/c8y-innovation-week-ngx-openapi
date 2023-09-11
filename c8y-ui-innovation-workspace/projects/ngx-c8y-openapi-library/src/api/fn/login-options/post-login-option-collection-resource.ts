/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AuthConfig } from '../../models/auth-config';

export interface PostLoginOptionCollectionResource$Params {

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;
      body: AuthConfig & {
'id'?: any;
}
}

export function postLoginOptionCollectionResource(http: HttpClient, rootUrl: string, params: PostLoginOptionCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthConfig>> {
  const rb = new RequestBuilder(rootUrl, postLoginOptionCollectionResource.PATH, 'post');
  if (params) {
    rb.header('Accept', params.Accept, {});
    rb.body(params.body, 'application/vnd.com.nsn.cumulocity.authconfig+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.authconfig+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AuthConfig>;
    })
  );
}

postLoginOptionCollectionResource.PATH = '/tenant/loginOptions';
