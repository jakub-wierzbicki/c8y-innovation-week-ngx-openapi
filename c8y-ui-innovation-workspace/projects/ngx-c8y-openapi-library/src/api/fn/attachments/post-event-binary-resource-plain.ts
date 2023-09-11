/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EventBinary } from '../../models/event-binary';

export interface PostEventBinaryResource$Plain$Params {

/**
 * Unique identifier of the event.
 */
  id: string;
      body: Blob
}

export function postEventBinaryResource$Plain(http: HttpClient, rootUrl: string, params: PostEventBinaryResource$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<EventBinary>> {
  const rb = new RequestBuilder(rootUrl, postEventBinaryResource$Plain.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'text/plain');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EventBinary>;
    })
  );
}

postEventBinaryResource$Plain.PATH = '/event/events/{id}/binaries';
