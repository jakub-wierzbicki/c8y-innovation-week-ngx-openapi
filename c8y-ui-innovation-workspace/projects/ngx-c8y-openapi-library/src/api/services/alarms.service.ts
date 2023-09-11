/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Alarm } from '../models/alarm';
import { AlarmCollection } from '../models/alarm-collection';
import { deleteAlarmCollectionResource } from '../fn/alarms/delete-alarm-collection-resource';
import { DeleteAlarmCollectionResource$Params } from '../fn/alarms/delete-alarm-collection-resource';
import { getAlarmCollectionCountResource } from '../fn/alarms/get-alarm-collection-count-resource';
import { GetAlarmCollectionCountResource$Params } from '../fn/alarms/get-alarm-collection-count-resource';
import { getAlarmCollectionResource } from '../fn/alarms/get-alarm-collection-resource';
import { GetAlarmCollectionResource$Params } from '../fn/alarms/get-alarm-collection-resource';
import { getAlarmResource } from '../fn/alarms/get-alarm-resource';
import { GetAlarmResource$Params } from '../fn/alarms/get-alarm-resource';
import { postAlarmCollectionResource } from '../fn/alarms/post-alarm-collection-resource';
import { PostAlarmCollectionResource$Params } from '../fn/alarms/post-alarm-collection-resource';
import { putAlarmCollectionResource } from '../fn/alarms/put-alarm-collection-resource';
import { PutAlarmCollectionResource$Params } from '../fn/alarms/put-alarm-collection-resource';
import { putAlarmResource } from '../fn/alarms/put-alarm-resource';
import { PutAlarmResource$Params } from '../fn/alarms/put-alarm-resource';


/**
 * An alarm represents an event that requires manual action, for example, when the temperature of a fridge increases above a particular threshold.
 *
 * > **&#9432; Info:** The Accept header should be provided in all POST/PUT requests, otherwise an empty response body will be returned.
 */
@Injectable({ providedIn: 'root' })
export class AlarmsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAlarmCollectionResource()` */
  static readonly GetAlarmCollectionResourcePath = '/alarm/alarms';

  /**
   * Retrieve all alarms.
   *
   * Retrieve all alarms on your tenant, or a specific subset based on queries. The results are sorted by the newest alarms first.
   *
   * #### Query parameters
   *
   * The query parameter `withTotalPages` only works when the user has the ROLE_ALARM_READ role, otherwise it is ignored.
   *
   * <section><h5>Required roles</h5>
   * The role ROLE_ALARM_READ is not required, but if a user has this role, all the alarms on the tenant are returned. If a user has access to alarms through inventory roles, only those alarms are returned.
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAlarmCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAlarmCollectionResource$Response(params?: GetAlarmCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<AlarmCollection>> {
    return getAlarmCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all alarms.
   *
   * Retrieve all alarms on your tenant, or a specific subset based on queries. The results are sorted by the newest alarms first.
   *
   * #### Query parameters
   *
   * The query parameter `withTotalPages` only works when the user has the ROLE_ALARM_READ role, otherwise it is ignored.
   *
   * <section><h5>Required roles</h5>
   * The role ROLE_ALARM_READ is not required, but if a user has this role, all the alarms on the tenant are returned. If a user has access to alarms through inventory roles, only those alarms are returned.
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAlarmCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAlarmCollectionResource(params?: GetAlarmCollectionResource$Params, context?: HttpContext): Observable<AlarmCollection> {
    return this.getAlarmCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<AlarmCollection>): AlarmCollection => r.body)
    );
  }

  /** Path part for operation `putAlarmCollectionResource()` */
  static readonly PutAlarmCollectionResourcePath = '/alarm/alarms';

  /**
   * Update alarm collections.
   *
   * Update alarm collections specified by query parameters. At least one query parameter is required to avoid accidentally updating all existing alarms.<br>
   * Currently, only the status of alarms can be modified.
   *
   * > **&#9432; Info:** Since this operation can take considerable time, the request returns after maximum 0.5 seconds of processing, and the update operation continues as a background process in the platform.
   *
   * <section><h5>Required roles</h5>
   * ROLE_ALARM_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putAlarmCollectionResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.alarm+json` and handles request body of type `application/vnd.com.nsn.cumulocity.alarm+json`.
   */
  putAlarmCollectionResource$Response(params: PutAlarmCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return putAlarmCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Update alarm collections.
   *
   * Update alarm collections specified by query parameters. At least one query parameter is required to avoid accidentally updating all existing alarms.<br>
   * Currently, only the status of alarms can be modified.
   *
   * > **&#9432; Info:** Since this operation can take considerable time, the request returns after maximum 0.5 seconds of processing, and the update operation continues as a background process in the platform.
   *
   * <section><h5>Required roles</h5>
   * ROLE_ALARM_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putAlarmCollectionResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.alarm+json` and handles request body of type `application/vnd.com.nsn.cumulocity.alarm+json`.
   */
  putAlarmCollectionResource(params: PutAlarmCollectionResource$Params, context?: HttpContext): Observable<void> {
    return this.putAlarmCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `postAlarmCollectionResource()` */
  static readonly PostAlarmCollectionResourcePath = '/alarm/alarms';

  /**
   * Create an alarm.
   *
   * An alarm must be associated with a source (managed object) identified by ID.<br>
   * In general, each alarm may consist of:
   *
   * *   A status showing whether the alarm is ACTIVE, ACKNOWLEDGED or CLEARED.
   * *   A time stamp to indicate when the alarm was last updated.
   * *   The severity of the alarm: CRITICAL, MAJOR, MINOR or WARNING.
   * *   A history of changes to the event in form of audit logs.
   *
   * ### Alarm suppression
   *
   * If the source device is in maintenance mode, the alarm is not created and not reported to the Cumulocity IoT event processing engine. When sending a POST request to create a new alarm and if the source device is in maintenance mode, the self link of the alarm will be:
   *
   * ```json
   * "self": "https://<TENANT_DOMAIN>/alarm/alarms/null"
   * ```
   *
   * ### Alarm de-duplication
   *
   * If an ACTIVE or ACKNOWLEDGED alarm with the same source and type exists, no new alarm is created.
   * Instead, the existing alarm is updated by incrementing the `count` property; the `time` property is also updated.
   * Any other changes are ignored, and the alarm history is not updated. Alarms with status CLEARED are not de-duplicated.
   * The first occurrence of the alarm is recorded in the `firstOccurrenceTime` property.
   *
   * <section><h5>Required roles</h5>
   * ROLE_ALARM_ADMIN <b>OR</b> owner of the source <b>OR</b> ALARM_ADMIN permission on the source
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postAlarmCollectionResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.alarm+json` and handles request body of type `application/vnd.com.nsn.cumulocity.alarm+json`.
   */
  postAlarmCollectionResource$Response(params: PostAlarmCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Alarm>> {
    return postAlarmCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Create an alarm.
   *
   * An alarm must be associated with a source (managed object) identified by ID.<br>
   * In general, each alarm may consist of:
   *
   * *   A status showing whether the alarm is ACTIVE, ACKNOWLEDGED or CLEARED.
   * *   A time stamp to indicate when the alarm was last updated.
   * *   The severity of the alarm: CRITICAL, MAJOR, MINOR or WARNING.
   * *   A history of changes to the event in form of audit logs.
   *
   * ### Alarm suppression
   *
   * If the source device is in maintenance mode, the alarm is not created and not reported to the Cumulocity IoT event processing engine. When sending a POST request to create a new alarm and if the source device is in maintenance mode, the self link of the alarm will be:
   *
   * ```json
   * "self": "https://<TENANT_DOMAIN>/alarm/alarms/null"
   * ```
   *
   * ### Alarm de-duplication
   *
   * If an ACTIVE or ACKNOWLEDGED alarm with the same source and type exists, no new alarm is created.
   * Instead, the existing alarm is updated by incrementing the `count` property; the `time` property is also updated.
   * Any other changes are ignored, and the alarm history is not updated. Alarms with status CLEARED are not de-duplicated.
   * The first occurrence of the alarm is recorded in the `firstOccurrenceTime` property.
   *
   * <section><h5>Required roles</h5>
   * ROLE_ALARM_ADMIN <b>OR</b> owner of the source <b>OR</b> ALARM_ADMIN permission on the source
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postAlarmCollectionResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.alarm+json` and handles request body of type `application/vnd.com.nsn.cumulocity.alarm+json`.
   */
  postAlarmCollectionResource(params: PostAlarmCollectionResource$Params, context?: HttpContext): Observable<Alarm> {
    return this.postAlarmCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Alarm>): Alarm => r.body)
    );
  }

  /** Path part for operation `deleteAlarmCollectionResource()` */
  static readonly DeleteAlarmCollectionResourcePath = '/alarm/alarms';

  /**
   * Remove alarm collections.
   *
   * Remove alarm collections specified by query parameters.
   *
   * > **⚠️ Important:** Note that it is possible to call this endpoint without providing any parameter - it will result in deleting all alarms and it is not recommended.
   * > Also note that DELETE requests are not synchronous. The response could be returned before the delete request has been completed.
   *
   * <section><h5>Required roles</h5>
   * ROLE_ALARM_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAlarmCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAlarmCollectionResource$Response(params?: DeleteAlarmCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteAlarmCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove alarm collections.
   *
   * Remove alarm collections specified by query parameters.
   *
   * > **⚠️ Important:** Note that it is possible to call this endpoint without providing any parameter - it will result in deleting all alarms and it is not recommended.
   * > Also note that DELETE requests are not synchronous. The response could be returned before the delete request has been completed.
   *
   * <section><h5>Required roles</h5>
   * ROLE_ALARM_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteAlarmCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAlarmCollectionResource(params?: DeleteAlarmCollectionResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteAlarmCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getAlarmResource()` */
  static readonly GetAlarmResourcePath = '/alarm/alarms/{id}';

  /**
   * Retrieve a specific alarm.
   *
   * Retrieve a specific alarm by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_ALARM_READ <b>OR</b> owner of the source <b>OR</b> ALARM_READ permission on the source
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAlarmResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAlarmResource$Response(params: GetAlarmResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Alarm>> {
    return getAlarmResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a specific alarm.
   *
   * Retrieve a specific alarm by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_ALARM_READ <b>OR</b> owner of the source <b>OR</b> ALARM_READ permission on the source
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAlarmResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAlarmResource(params: GetAlarmResource$Params, context?: HttpContext): Observable<Alarm> {
    return this.getAlarmResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Alarm>): Alarm => r.body)
    );
  }

  /** Path part for operation `putAlarmResource()` */
  static readonly PutAlarmResourcePath = '/alarm/alarms/{id}';

  /**
   * Update a specific alarm.
   *
   * Update a specific alarm by a given ID.
   * Only text, status, severity and custom properties can be modified. A request will be rejected when non-modifiable properties are provided in the request body.
   *
   * > **&#9432; Info:** Changes to alarms will generate a new audit record. The audit record will include the username and application that triggered the update, if applicable. If the update operation doesn’t change anything (that is, the request body contains data that is identical to the already present in the database), there will be no audit record added and no notifications will be sent.
   *
   * <section><h5>Required roles</h5>
   * ROLE_ALARM_ADMIN <b>OR</b> owner of the source <b>OR</b> ALARM_ADMIN permission on the source
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putAlarmResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.alarm+json` and handles request body of type `application/vnd.com.nsn.cumulocity.alarm+json`.
   */
  putAlarmResource$Response(params: PutAlarmResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Alarm>> {
    return putAlarmResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a specific alarm.
   *
   * Update a specific alarm by a given ID.
   * Only text, status, severity and custom properties can be modified. A request will be rejected when non-modifiable properties are provided in the request body.
   *
   * > **&#9432; Info:** Changes to alarms will generate a new audit record. The audit record will include the username and application that triggered the update, if applicable. If the update operation doesn’t change anything (that is, the request body contains data that is identical to the already present in the database), there will be no audit record added and no notifications will be sent.
   *
   * <section><h5>Required roles</h5>
   * ROLE_ALARM_ADMIN <b>OR</b> owner of the source <b>OR</b> ALARM_ADMIN permission on the source
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putAlarmResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.alarm+json` and handles request body of type `application/vnd.com.nsn.cumulocity.alarm+json`.
   */
  putAlarmResource(params: PutAlarmResource$Params, context?: HttpContext): Observable<Alarm> {
    return this.putAlarmResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Alarm>): Alarm => r.body)
    );
  }

  /** Path part for operation `getAlarmCollectionCountResource()` */
  static readonly GetAlarmCollectionCountResourcePath = '/alarm/alarms/count';

  /**
   * Retrieve the total number of alarms.
   *
   * Count the total number of active alarms on your tenant.
   *
   * <section><h5>Required roles</h5>
   * The role ROLE_ALARM_READ is not required, but if a user has this role, all the alarms on the tenant are counted. Otherwise, inventory role permissions are used to count the alarms and the limit is 100.
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAlarmCollectionCountResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAlarmCollectionCountResource$Response(params?: GetAlarmCollectionCountResource$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return getAlarmCollectionCountResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve the total number of alarms.
   *
   * Count the total number of active alarms on your tenant.
   *
   * <section><h5>Required roles</h5>
   * The role ROLE_ALARM_READ is not required, but if a user has this role, all the alarms on the tenant are counted. Otherwise, inventory role permissions are used to count the alarms and the limit is 100.
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAlarmCollectionCountResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAlarmCollectionCountResource(params?: GetAlarmCollectionCountResource$Params, context?: HttpContext): Observable<number> {
    return this.getAlarmCollectionCountResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

}
