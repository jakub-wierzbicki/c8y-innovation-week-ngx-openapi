/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getNotificationApiResource } from '../fn/notification-2-0-api/get-notification-api-resource';
import { GetNotificationApiResource$Params } from '../fn/notification-2-0-api/get-notification-api-resource';
import { NotificationApiResource } from '../models/notification-api-resource';


/**
 * The notification 2.0 API resource returns URIs and URI templates to collections of notifications, so that all notifications or notifications of a specified context and/or source device can be retrieved. See [Notifications 2.0](https://cumulocity.com/guides/reference/notifications) in the *Reference guide* for more details about the API and the consumer protocol.
 */
@Injectable({ providedIn: 'root' })
export class Notification20ApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getNotificationApiResource()` */
  static readonly GetNotificationApiResourcePath = '/notification2';

  /**
   * Retrieve URIs to collections of notification subscriptions.
   *
   * Retrieve URIs and URI templates to collections of notification subscriptions.
   *
   * <section><h5>Required roles</h5>
   * ROLE_NOTIFICATION_2_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getNotificationApiResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNotificationApiResource$Response(params?: GetNotificationApiResource$Params, context?: HttpContext): Observable<StrictHttpResponse<NotificationApiResource>> {
    return getNotificationApiResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve URIs to collections of notification subscriptions.
   *
   * Retrieve URIs and URI templates to collections of notification subscriptions.
   *
   * <section><h5>Required roles</h5>
   * ROLE_NOTIFICATION_2_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getNotificationApiResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNotificationApiResource(params?: GetNotificationApiResource$Params, context?: HttpContext): Observable<NotificationApiResource> {
    return this.getNotificationApiResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<NotificationApiResource>): NotificationApiResource => r.body)
    );
  }

}
