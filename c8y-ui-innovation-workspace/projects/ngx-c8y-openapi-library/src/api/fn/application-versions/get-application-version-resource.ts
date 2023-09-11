/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApplicationVersion } from '../../models/application-version';

export interface GetApplicationVersionResource$Params {

/**
 * Unique identifier of the application.
 */
  id: string;

/**
 * The header is required to access this endpoint.
 */
  Accept: 'application/vnd.com.nsn.cumulocity.applicationVersion+json' | 'application/vnd.com.nsn.cumulocity.applicationVersionCollection+json';

/**
 * The version field of the application version.
 */
  version?: string;

/**
 * The tag of the application version.
 */
  tag?: string;
}

export function getApplicationVersionResource(http: HttpClient, rootUrl: string, params: GetApplicationVersionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ApplicationVersion>> {
  const rb = new RequestBuilder(rootUrl, getApplicationVersionResource.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.header('Accept', params.Accept, {});
    rb.query('version', params.version, {});
    rb.query('tag', params.tag, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.applicationVersion+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApplicationVersion>;
    })
  );
}

getApplicationVersionResource.PATH = '/application/applications/{id}/versions?version=1.0';
