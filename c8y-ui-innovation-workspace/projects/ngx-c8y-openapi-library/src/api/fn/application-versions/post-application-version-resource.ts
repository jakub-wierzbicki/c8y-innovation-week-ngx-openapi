/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApplicationVersion } from '../../models/application-version';

export interface PostApplicationVersionResource$Params {

/**
 * Unique identifier of the application.
 */
  id: string;

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;
      body: {

/**
 * The ZIP file to be uploaded.
 */
'applicationBinary': Blob;

/**
 * The JSON file with version information.
 */
'applicationVersion': string;
}
}

export function postApplicationVersionResource(http: HttpClient, rootUrl: string, params: PostApplicationVersionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ApplicationVersion>> {
  const rb = new RequestBuilder(rootUrl, postApplicationVersionResource.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.header('Accept', params.Accept, {});
    rb.body(params.body, 'multipart/form-data');
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

postApplicationVersionResource.PATH = '/application/applications/{id}/versions';
