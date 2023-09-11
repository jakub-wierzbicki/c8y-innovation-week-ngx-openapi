/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { IdentityApiResource } from '../../models/identity-api-resource';

export interface GetIdentityApiResource$Params {
}

export function getIdentityApiResource(http: HttpClient, rootUrl: string, params?: GetIdentityApiResource$Params, context?: HttpContext): Observable<StrictHttpResponse<IdentityApiResource>> {
  const rb = new RequestBuilder(rootUrl, getIdentityApiResource.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.identityapi+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<IdentityApiResource>;
    })
  );
}

getIdentityApiResource.PATH = '/identity';
