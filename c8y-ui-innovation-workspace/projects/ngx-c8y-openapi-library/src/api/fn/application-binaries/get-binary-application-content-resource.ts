/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApplicationBinaries } from '../../models/application-binaries';

export interface GetBinaryApplicationContentResource$Params {

/**
 * Unique identifier of the application.
 */
  id: string;
}

export function getBinaryApplicationContentResource(http: HttpClient, rootUrl: string, params: GetBinaryApplicationContentResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ApplicationBinaries>> {
  const rb = new RequestBuilder(rootUrl, getBinaryApplicationContentResource.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.applicationbinaries+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApplicationBinaries>;
    })
  );
}

getBinaryApplicationContentResource.PATH = '/application/applications/{id}/binaries';
