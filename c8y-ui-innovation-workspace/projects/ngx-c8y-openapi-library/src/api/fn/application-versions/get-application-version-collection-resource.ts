/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApplicationVersionCollection } from '../../models/application-version-collection';

export interface GetApplicationVersionCollectionResource$Params {

/**
 * Unique identifier of the application.
 */
  id: string;

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;
}

export function getApplicationVersionCollectionResource(http: HttpClient, rootUrl: string, params: GetApplicationVersionCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ApplicationVersionCollection>> {
  const rb = new RequestBuilder(rootUrl, getApplicationVersionCollectionResource.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.header('Accept', params.Accept, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.applicationVersionCollection+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApplicationVersionCollection>;
    })
  );
}

getApplicationVersionCollectionResource.PATH = '/application/applications/{id}/versions';
