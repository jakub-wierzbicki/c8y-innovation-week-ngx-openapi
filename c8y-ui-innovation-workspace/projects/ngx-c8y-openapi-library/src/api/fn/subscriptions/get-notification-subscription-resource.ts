/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { NotificationSubscription } from '../../models/notification-subscription';

export interface GetNotificationSubscriptionResource$Params {

/**
 * Unique identifier of the notification subscription.
 */
  id: string;
}

export function getNotificationSubscriptionResource(http: HttpClient, rootUrl: string, params: GetNotificationSubscriptionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<NotificationSubscription>> {
  const rb = new RequestBuilder(rootUrl, getNotificationSubscriptionResource.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getNotificationSubscriptionResource.PATH = '/notification2/subscriptions/{id}';
