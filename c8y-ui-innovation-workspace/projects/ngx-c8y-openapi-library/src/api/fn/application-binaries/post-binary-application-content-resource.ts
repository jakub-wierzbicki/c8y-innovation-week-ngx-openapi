/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Application } from '../../models/application';

export interface PostBinaryApplicationContentResource$Params {

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
'file': Blob;
}
}

export function postBinaryApplicationContentResource(http: HttpClient, rootUrl: string, params: PostBinaryApplicationContentResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Application>> {
  const rb = new RequestBuilder(rootUrl, postBinaryApplicationContentResource.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.header('Accept', params.Accept, {});
    rb.body(params.body, 'multipart/form-data');
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

postBinaryApplicationContentResource.PATH = '/application/applications/{id}/binaries';
