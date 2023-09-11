/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PlatformApiResource } from '../../models/platform-api-resource';

export interface GetPlatformApiResource$Params {
}

export function getPlatformApiResource(http: HttpClient, rootUrl: string, params?: GetPlatformApiResource$Params, context?: HttpContext): Observable<StrictHttpResponse<PlatformApiResource>> {
  const rb = new RequestBuilder(rootUrl, getPlatformApiResource.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.platformapi+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PlatformApiResource>;
    })
  );
}

getPlatformApiResource.PATH = '/platform';
