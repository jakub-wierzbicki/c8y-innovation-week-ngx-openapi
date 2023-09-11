/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BinaryInfo } from '../../models/binary-info';
import { EventBinary } from '../../models/event-binary';

export interface PostEventBinaryResource$FormData$Params {

/**
 * Unique identifier of the event.
 */
  id: string;
      body: {
'object': BinaryInfo;

/**
 * Path of the file to be uploaded.
 */
'file': Blob;
}
}

export function postEventBinaryResource$FormData(http: HttpClient, rootUrl: string, params: PostEventBinaryResource$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<EventBinary>> {
  const rb = new RequestBuilder(rootUrl, postEventBinaryResource$FormData.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'multipart/form-data');
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

postEventBinaryResource$FormData.PATH = '/event/events/{id}/binaries';
