/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Binary } from '../../models/binary';

export interface PutBinariesResource$Params {

/**
 * Unique identifier of the managed object.
 */
  id: string;
      body: Blob
}

export function putBinariesResource(http: HttpClient, rootUrl: string, params: PutBinariesResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Binary>> {
  const rb = new RequestBuilder(rootUrl, putBinariesResource.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'text/plain');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.managedobject+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Binary>;
    })
  );
}

putBinariesResource.PATH = '/inventory/binaries/{id}';
