/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Alarm } from '../../models/alarm';

export interface PostAlarmCollectionResource$Params {

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;

/**
 * Used to explicitly control the processing mode of the request. See [Processing mode](#processing-mode) for more details.
 */
  'X-Cumulocity-Processing-Mode'?: 'PERSISTENT' | 'TRANSIENT' | 'QUIESCENT' | 'CEP';
      body: Alarm & {
'source': {
'name'?: any;
};
}
}

export function postAlarmCollectionResource(http: HttpClient, rootUrl: string, params: PostAlarmCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Alarm>> {
  const rb = new RequestBuilder(rootUrl, postAlarmCollectionResource.PATH, 'post');
  if (params) {
    rb.header('Accept', params.Accept, {});
    rb.header('X-Cumulocity-Processing-Mode', params['X-Cumulocity-Processing-Mode'], {});
    rb.body(params.body, 'application/vnd.com.nsn.cumulocity.alarm+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.alarm+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Alarm>;
    })
  );
}

postAlarmCollectionResource.PATH = '/alarm/alarms';
