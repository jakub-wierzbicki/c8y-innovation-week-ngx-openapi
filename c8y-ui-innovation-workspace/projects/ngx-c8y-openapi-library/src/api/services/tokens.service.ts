/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { NotificationSubscriptionResult } from '../models/notification-subscription-result';
import { NotificationToken } from '../models/notification-token';
import { postNotificationTokenResource } from '../fn/tokens/post-notification-token-resource';
import { PostNotificationTokenResource$Params } from '../fn/tokens/post-notification-token-resource';
import { postNotificationTokenUnsubscribeResource } from '../fn/tokens/post-notification-token-unsubscribe-resource';
import { PostNotificationTokenUnsubscribeResource$Params } from '../fn/tokens/post-notification-token-unsubscribe-resource';


/**
 * In order to receive subscribed notifications, a consumer application or microservice must obtain an authorization token that provides proof that the holder is allowed to receive subscribed notifications.
 */
@Injectable({ providedIn: 'root' })
export class TokensService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `postNotificationTokenResource()` */
  static readonly PostNotificationTokenResourcePath = '/notification2/token';

  /**
   * Create a notification token.
   *
   * Create a new JWT (JSON web token) access token which can be used to establish a successful WebSocket connection to read a sequence of notifications.
   *
   * In general, each request to obtain an access token consists of:
   *
   * *  The subscriber name which the client wishes to be identified with.
   * *  The subscription name. This value must be associated with a subscription that's already been created and in essence, the obtained token will give the ability to read notifications for the subscription that is specified here.
   * *  The token expiration duration.
   * *  The option to disable signing of the token by the Cumulocity IoT platform.
   * *  The subscription type that the token should be associated with.
   * *  The option to use the token to create shared consumers of the subscription.
   * *  The option to select the non-persistent variant of the subscription, if one exists.
   *
   * <section><h5>Required roles</h5>
   * ROLE_NOTIFICATION_2_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postNotificationTokenResource()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postNotificationTokenResource$Response(params: PostNotificationTokenResource$Params, context?: HttpContext): Observable<StrictHttpResponse<NotificationToken>> {
    return postNotificationTokenResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a notification token.
   *
   * Create a new JWT (JSON web token) access token which can be used to establish a successful WebSocket connection to read a sequence of notifications.
   *
   * In general, each request to obtain an access token consists of:
   *
   * *  The subscriber name which the client wishes to be identified with.
   * *  The subscription name. This value must be associated with a subscription that's already been created and in essence, the obtained token will give the ability to read notifications for the subscription that is specified here.
   * *  The token expiration duration.
   * *  The option to disable signing of the token by the Cumulocity IoT platform.
   * *  The subscription type that the token should be associated with.
   * *  The option to use the token to create shared consumers of the subscription.
   * *  The option to select the non-persistent variant of the subscription, if one exists.
   *
   * <section><h5>Required roles</h5>
   * ROLE_NOTIFICATION_2_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postNotificationTokenResource$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postNotificationTokenResource(params: PostNotificationTokenResource$Params, context?: HttpContext): Observable<NotificationToken> {
    return this.postNotificationTokenResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<NotificationToken>): NotificationToken => r.body)
    );
  }

  /** Path part for operation `postNotificationTokenUnsubscribeResource()` */
  static readonly PostNotificationTokenUnsubscribeResourcePath = '/notification2/unsubscribe';

  /**
   * Unsubscribe a subscriber.
   *
   * Unsubscribe a notification subscriber using the notification token.
   *
   * Once a subscription is made, notifications will be kept until they are consumed by all subscribers who have previously connected to the subscription. For non-volatile subscriptions, this can result in notifications remaining in storage if never consumed by the application.
   * They will be deleted if a tenant is deleted. It can take up considerable space in permanent storage for high-frequency notification sources. Therefore, we recommend you to unsubscribe a subscriber that will never run again.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postNotificationTokenUnsubscribeResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  postNotificationTokenUnsubscribeResource$Response(params: PostNotificationTokenUnsubscribeResource$Params, context?: HttpContext): Observable<StrictHttpResponse<NotificationSubscriptionResult>> {
    return postNotificationTokenUnsubscribeResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Unsubscribe a subscriber.
   *
   * Unsubscribe a notification subscriber using the notification token.
   *
   * Once a subscription is made, notifications will be kept until they are consumed by all subscribers who have previously connected to the subscription. For non-volatile subscriptions, this can result in notifications remaining in storage if never consumed by the application.
   * They will be deleted if a tenant is deleted. It can take up considerable space in permanent storage for high-frequency notification sources. Therefore, we recommend you to unsubscribe a subscriber that will never run again.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postNotificationTokenUnsubscribeResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postNotificationTokenUnsubscribeResource(params: PostNotificationTokenUnsubscribeResource$Params, context?: HttpContext): Observable<NotificationSubscriptionResult> {
    return this.postNotificationTokenUnsubscribeResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<NotificationSubscriptionResult>): NotificationSubscriptionResult => r.body)
    );
  }

}
