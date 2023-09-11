/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApplicationVersion } from '../../models/application-version';
import { ApplicationVersionTag } from '../../models/application-version-tag';

export interface PutApplicationVersionResource$Params {

/**
 * Unique identifier of the application.
 */
  id: string;

/**
 * Version of the application.
 */
  version: string;

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;
      body: ApplicationVersionTag
}

export function putApplicationVersionResource(http: HttpClient, rootUrl: string, params: PutApplicationVersionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ApplicationVersion>> {
  const rb = new RequestBuilder(rootUrl, putApplicationVersionResource.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('version', params.version, {});
    rb.header('Accept', params.Accept, {});
    rb.body(params.body, 'application/json');
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

putApplicationVersionResource.PATH = '/application/applications/{id}/versions/{version}';
