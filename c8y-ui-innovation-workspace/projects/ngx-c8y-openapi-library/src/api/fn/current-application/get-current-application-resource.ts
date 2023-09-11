/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Application } from '../../models/application';

export interface GetCurrentApplicationResource$Params {
}

export function getCurrentApplicationResource(http: HttpClient, rootUrl: string, params?: GetCurrentApplicationResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Application>> {
  const rb = new RequestBuilder(rootUrl, getCurrentApplicationResource.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.application+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Application>;
    })
  );
}

getCurrentApplicationResource.PATH = '/application/currentApplication';
