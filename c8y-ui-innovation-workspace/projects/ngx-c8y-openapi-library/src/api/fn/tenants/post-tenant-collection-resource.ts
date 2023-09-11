/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Tenant } from '../../models/tenant';

export interface PostTenantCollectionResource$Params {

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;
      body: Tenant & any
}

export function postTenantCollectionResource(http: HttpClient, rootUrl: string, params: PostTenantCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Tenant>> {
  const rb = new RequestBuilder(rootUrl, postTenantCollectionResource.PATH, 'post');
  if (params) {
    rb.header('Accept', params.Accept, {});
    rb.body(params.body, 'application/vnd.com.nsn.cumulocity.tenant+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.tenant+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Tenant>;
    })
  );
}

postTenantCollectionResource.PATH = '/tenant/tenants';
