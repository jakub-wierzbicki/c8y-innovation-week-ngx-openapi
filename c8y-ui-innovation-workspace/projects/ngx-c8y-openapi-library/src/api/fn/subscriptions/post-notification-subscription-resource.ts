/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { NotificationSubscription } from '../../models/notification-subscription';

export interface PostNotificationSubscriptionResource$Params {

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;

/**
 * Used to explicitly control the processing mode of the request. See [Processing mode](#processing-mode) for more details.
 */
  'X-Cumulocity-Processing-Mode'?: 'PERSISTENT' | 'TRANSIENT' | 'QUIESCENT' | 'CEP';
      body: NotificationSubscription
}

export function postNotificationSubscriptionResource(http: HttpClient, rootUrl: string, params: PostNotificationSubscriptionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<NotificationSubscription>> {
  const rb = new RequestBuilder(rootUrl, postNotificationSubscriptionResource.PATH, 'post');
  if (params) {
    rb.header('Accept', params.Accept, {});
    rb.header('X-Cumulocity-Processing-Mode', params['X-Cumulocity-Processing-Mode'], {});
    rb.body(params.body, 'application/vnd.com.nsn.cumulocity.subscription+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.subscription+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<NotificationSubscription>;
    })
  );
}

postNotificationSubscriptionResource.PATH = '/notification2/subscriptions';
