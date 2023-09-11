/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Application } from '../../models/application';

export interface PostApplicationResource$Params {

/**
 * Unique identifier of the application.
 */
  id: string;

/**
 * The version field of the application version.
 */
  version?: string;

/**
 * The tag of the application version.
 */
  tag?: string;

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;

/**
 * Used to explicitly control the processing mode of the request. See [Processing mode](#processing-mode) for more details.
 */
  'X-Cumulocity-Processing-Mode'?: 'PERSISTENT' | 'TRANSIENT' | 'QUIESCENT' | 'CEP';
}

export function postApplicationResource(http: HttpClient, rootUrl: string, params: PostApplicationResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Application>> {
  const rb = new RequestBuilder(rootUrl, postApplicationResource.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.query('version', params.version, {});
    rb.query('tag', params.tag, {});
    rb.header('Accept', params.Accept, {});
    rb.header('X-Cumulocity-Processing-Mode', params['X-Cumulocity-Processing-Mode'], {});
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

postApplicationResource.PATH = '/application/applications/{id}/clone';
