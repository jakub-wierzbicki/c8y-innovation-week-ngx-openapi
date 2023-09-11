/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteNotificationSubscriptionBySourceResource } from '../fn/subscriptions/delete-notification-subscription-by-source-resource';
import { DeleteNotificationSubscriptionBySourceResource$Params } from '../fn/subscriptions/delete-notification-subscription-by-source-resource';
import { deleteNotificationSubscriptionResource } from '../fn/subscriptions/delete-notification-subscription-resource';
import { DeleteNotificationSubscriptionResource$Params } from '../fn/subscriptions/delete-notification-subscription-resource';
import { getNotificationSubscriptionCollectionResource } from '../fn/subscriptions/get-notification-subscription-collection-resource';
import { GetNotificationSubscriptionCollectionResource$Params } from '../fn/subscriptions/get-notification-subscription-collection-resource';
import { getNotificationSubscriptionResource } from '../fn/subscriptions/get-notification-subscription-resource';
import { GetNotificationSubscriptionResource$Params } from '../fn/subscriptions/get-notification-subscription-resource';
import { NotificationSubscription } from '../models/notification-subscription';
import { NotificationSubscriptionCollection } from '../models/notification-subscription-collection';
import { postNotificationSubscriptionResource } from '../fn/subscriptions/post-notification-subscription-resource';
import { PostNotificationSubscriptionResource$Params } from '../fn/subscriptions/post-notification-subscription-resource';


/**
 * Methods to create, retrieve and delete notification subscriptions.
 */
@Injectable({ providedIn: 'root' })
export class SubscriptionsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getNotificationSubscriptionCollectionResource()` */
  static readonly GetNotificationSubscriptionCollectionResourcePath = '/notification2/subscriptions';

  /**
   * Retrieve all subscriptions.
   *
   * Retrieve all subscriptions on your tenant, or a specific subset based on queries.
   *
   * <section><h5>Required roles</h5>
   * ROLE_NOTIFICATION_2_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getNotificationSubscriptionCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNotificationSubscriptionCollectionResource$Response(params?: GetNotificationSubscriptionCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<NotificationSubscriptionCollection>> {
    return getNotificationSubscriptionCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all subscriptions.
   *
   * Retrieve all subscriptions on your tenant, or a specific subset based on queries.
   *
   * <section><h5>Required roles</h5>
   * ROLE_NOTIFICATION_2_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getNotificationSubscriptionCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNotificationSubscriptionCollectionResource(params?: GetNotificationSubscriptionCollectionResource$Params, context?: HttpContext): Observable<NotificationSubscriptionCollection> {
    return this.getNotificationSubscriptionCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<NotificationSubscriptionCollection>): NotificationSubscriptionCollection => r.body)
    );
  }

  /** Path part for operation `postNotificationSubscriptionResource()` */
  static readonly PostNotificationSubscriptionResourcePath = '/notification2/subscriptions';

  /**
   * Create a subscription.
   *
   * Create a new subscription, for example, a subscription that forwards measurements and events of a specific type for a given device.
   *
   * In general, each subscription may consist of:
   *
   * *  The managed object to which the subscription is associated.
   * *  The context under which the subscription is to be processed.
   * *  The name of the subscription.
   * *  The applicable filter criteria.
   * *  The option to only include specific custom fragments in the forwarded data.
   * *  The option to use persistent or non-persistent message storage.
   *
   * <section><h5>Required roles</h5>
   * ROLE_NOTIFICATION_2_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postNotificationSubscriptionResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.subscription+json` and handles request body of type `application/vnd.com.nsn.cumulocity.subscription+json`.
   */
  postNotificationSubscriptionResource$Response(params: PostNotificationSubscriptionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<NotificationSubscription>> {
    return postNotificationSubscriptionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a subscription.
   *
   * Create a new subscription, for example, a subscription that forwards measurements and events of a specific type for a given device.
   *
   * In general, each subscription may consist of:
   *
   * *  The managed object to which the subscription is associated.
   * *  The context under which the subscription is to be processed.
   * *  The name of the subscription.
   * *  The applicable filter criteria.
   * *  The option to only include specific custom fragments in the forwarded data.
   * *  The option to use persistent or non-persistent message storage.
   *
   * <section><h5>Required roles</h5>
   * ROLE_NOTIFICATION_2_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postNotificationSubscriptionResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.subscription+json` and handles request body of type `application/vnd.com.nsn.cumulocity.subscription+json`.
   */
  postNotificationSubscriptionResource(params: PostNotificationSubscriptionResource$Params, context?: HttpContext): Observable<NotificationSubscription> {
    return this.postNotificationSubscriptionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<NotificationSubscription>): NotificationSubscription => r.body)
    );
  }

  /** Path part for operation `deleteNotificationSubscriptionBySourceResource()` */
  static readonly DeleteNotificationSubscriptionBySourceResourcePath = '/notification2/subscriptions';

  /**
   * Remove subscriptions by source.
   *
   * Remove subscriptions by source and context.
   *
   * >**&#9432; Info:** The request will result in an error if there are no query parameters. The `source` parameter is optional only if the `context` parameter equals `tenant`.
   *
   * <section><h5>Required roles</h5>
   * ROLE_NOTIFICATION_2_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteNotificationSubscriptionBySourceResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteNotificationSubscriptionBySourceResource$Response(params?: DeleteNotificationSubscriptionBySourceResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteNotificationSubscriptionBySourceResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove subscriptions by source.
   *
   * Remove subscriptions by source and context.
   *
   * >**&#9432; Info:** The request will result in an error if there are no query parameters. The `source` parameter is optional only if the `context` parameter equals `tenant`.
   *
   * <section><h5>Required roles</h5>
   * ROLE_NOTIFICATION_2_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteNotificationSubscriptionBySourceResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteNotificationSubscriptionBySourceResource(params?: DeleteNotificationSubscriptionBySourceResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteNotificationSubscriptionBySourceResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getNotificationSubscriptionResource()` */
  static readonly GetNotificationSubscriptionResourcePath = '/notification2/subscriptions/{id}';

  /**
   * Retrieve a specific subscription.
   *
   * Retrieve a specific subscription by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_NOTIFICATION_2_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getNotificationSubscriptionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNotificationSubscriptionResource$Response(params: GetNotificationSubscriptionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<NotificationSubscription>> {
    return getNotificationSubscriptionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a specific subscription.
   *
   * Retrieve a specific subscription by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_NOTIFICATION_2_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getNotificationSubscriptionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNotificationSubscriptionResource(params: GetNotificationSubscriptionResource$Params, context?: HttpContext): Observable<NotificationSubscription> {
    return this.getNotificationSubscriptionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<NotificationSubscription>): NotificationSubscription => r.body)
    );
  }

  /** Path part for operation `deleteNotificationSubscriptionResource()` */
  static readonly DeleteNotificationSubscriptionResourcePath = '/notification2/subscriptions/{id}';

  /**
   * Remove a specific subscription.
   *
   * Remove a specific subscription by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_NOTIFICATION_2_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteNotificationSubscriptionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteNotificationSubscriptionResource$Response(params: DeleteNotificationSubscriptionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteNotificationSubscriptionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove a specific subscription.
   *
   * Remove a specific subscription by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_NOTIFICATION_2_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteNotificationSubscriptionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteNotificationSubscriptionResource(params: DeleteNotificationSubscriptionResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteNotificationSubscriptionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
