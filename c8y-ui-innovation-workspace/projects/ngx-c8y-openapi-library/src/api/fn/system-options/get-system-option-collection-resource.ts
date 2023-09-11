/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SystemOptionCollection } from '../../models/system-option-collection';

export interface GetSystemOptionCollectionResource$Params {
}

export function getSystemOptionCollectionResource(http: HttpClient, rootUrl: string, params?: GetSystemOptionCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<SystemOptionCollection>> {
  const rb = new RequestBuilder(rootUrl, getSystemOptionCollectionResource.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.optioncollection+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SystemOptionCollection>;
    })
  );
}

getSystemOptionCollectionResource.PATH = '/tenant/system/options';
