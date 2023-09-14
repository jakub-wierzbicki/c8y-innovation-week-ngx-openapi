/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { NotificationApiResource } from '../../models/notification-api-resource';

export interface GetNotificationApiResource$Params {
}

export function getNotificationApiResource(http: HttpClient, rootUrl: string, params?: GetNotificationApiResource$Params, context?: HttpContext): Observable<StrictHttpResponse<NotificationApiResource>> {
  const rb = new RequestBuilder(rootUrl, getNotificationApiResource.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.notificationapi+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<NotificationApiResource>;
    })
  );
}

getNotificationApiResource.PATH = '/notification2';
