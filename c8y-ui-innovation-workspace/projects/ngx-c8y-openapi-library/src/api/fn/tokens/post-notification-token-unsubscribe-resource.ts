/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { NotificationSubscriptionResult } from '../../models/notification-subscription-result';

export interface PostNotificationTokenUnsubscribeResource$Params {

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;

/**
 * Used to explicitly control the processing mode of the request. See [Processing mode](#processing-mode) for more details.
 */
  'X-Cumulocity-Processing-Mode'?: 'PERSISTENT' | 'TRANSIENT' | 'QUIESCENT' | 'CEP';

/**
 * Subscriptions associated with this token will be removed.
 */
  token: string;
}

export function postNotificationTokenUnsubscribeResource(http: HttpClient, rootUrl: string, params: PostNotificationTokenUnsubscribeResource$Params, context?: HttpContext): Observable<StrictHttpResponse<NotificationSubscriptionResult>> {
  const rb = new RequestBuilder(rootUrl, postNotificationTokenUnsubscribeResource.PATH, 'post');
  if (params) {
    rb.header('Accept', params.Accept, {});
    rb.header('X-Cumulocity-Processing-Mode', params['X-Cumulocity-Processing-Mode'], {});
    rb.query('token', params.token, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<NotificationSubscriptionResult>;
    })
  );
}

postNotificationTokenUnsubscribeResource.PATH = '/notification2/unsubscribe';
