/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteManagedObjectResource } from '../fn/managed-objects/delete-managed-object-resource';
import { DeleteManagedObjectResource$Params } from '../fn/managed-objects/delete-managed-object-resource';
import { getLastAvailabilityManagedObjectResource } from '../fn/managed-objects/get-last-availability-managed-object-resource';
import { GetLastAvailabilityManagedObjectResource$Params } from '../fn/managed-objects/get-last-availability-managed-object-resource';
import { getManagedObjectCollectionResource } from '../fn/managed-objects/get-managed-object-collection-resource';
import { GetManagedObjectCollectionResource$Params } from '../fn/managed-objects/get-managed-object-collection-resource';
import { getManagedObjectResource } from '../fn/managed-objects/get-managed-object-resource';
import { GetManagedObjectResource$Params } from '../fn/managed-objects/get-managed-object-resource';
import { getManagedObjectUserResource } from '../fn/managed-objects/get-managed-object-user-resource';
import { GetManagedObjectUserResource$Params } from '../fn/managed-objects/get-managed-object-user-resource';
import { getSupportedMeasurementsManagedObjectResource } from '../fn/managed-objects/get-supported-measurements-managed-object-resource';
import { GetSupportedMeasurementsManagedObjectResource$Params } from '../fn/managed-objects/get-supported-measurements-managed-object-resource';
import { getSupportedSeriesManagedObjectResource } from '../fn/managed-objects/get-supported-series-managed-object-resource';
import { GetSupportedSeriesManagedObjectResource$Params } from '../fn/managed-objects/get-supported-series-managed-object-resource';
import { ManagedObject } from '../models/managed-object';
import { ManagedObjectCollection } from '../models/managed-object-collection';
import { ManagedObjectUser } from '../models/managed-object-user';
import { postManagedObjectCollectionResource } from '../fn/managed-objects/post-managed-object-collection-resource';
import { PostManagedObjectCollectionResource$Params } from '../fn/managed-objects/post-managed-object-collection-resource';
import { putManagedObjectResource } from '../fn/managed-objects/put-managed-object-resource';
import { PutManagedObjectResource$Params } from '../fn/managed-objects/put-managed-object-resource';
import { putManagedObjectUserResource } from '../fn/managed-objects/put-managed-object-user-resource';
import { PutManagedObjectUserResource$Params } from '../fn/managed-objects/put-managed-object-user-resource';
import { SupportedMeasurements } from '../models/supported-measurements';
import { SupportedSeries } from '../models/supported-series';


/**
 * The inventory stores devices and other assets relevant to your IoT solution. We refer to them as managed objects and such can be “smart objects”, for example, smart electricity meters, home automation gateways or GPS devices.
 *
 * > **&#9432; Info:** The Accept header should be provided in all POST/PUT requests, otherwise an empty response body will be returned.
 */
@Injectable({ providedIn: 'root' })
export class ManagedObjectsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getManagedObjectCollectionResource()` */
  static readonly GetManagedObjectCollectionResourcePath = '/inventory/managedObjects';

  /**
   * Retrieve all managed objects.
   *
   * Retrieve all managed objects (for example, devices, assets, etc.) registered in your tenant, or a subset based on queries.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getManagedObjectCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getManagedObjectCollectionResource$Response(params?: GetManagedObjectCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ManagedObjectCollection>> {
    return getManagedObjectCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all managed objects.
   *
   * Retrieve all managed objects (for example, devices, assets, etc.) registered in your tenant, or a subset based on queries.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getManagedObjectCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getManagedObjectCollectionResource(params?: GetManagedObjectCollectionResource$Params, context?: HttpContext): Observable<ManagedObjectCollection> {
    return this.getManagedObjectCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<ManagedObjectCollection>): ManagedObjectCollection => r.body)
    );
  }

  /** Path part for operation `postManagedObjectCollectionResource()` */
  static readonly PostManagedObjectCollectionResourcePath = '/inventory/managedObjects';

  /**
   * Create a managed object.
   *
   * Create a managed object, for example, a device with temperature measurements support or a binary switch.<br>
   * In general, each managed object may consist of:
   *
   * *  A unique identifier that references the object.
   * *  The name of the object.
   * *  The most specific type of the managed object.
   * *  A time stamp showing the last update.
   * *  Fragments with specific meanings, for example, `c8y_IsDevice`, `c8y_SupportedOperations`.
   * *  Any additional custom fragments.
   *
   * Imagine, for example, that you want to describe electric meters from different vendors. Depending on the make of the meter, one may have a relay and one may be capable to measure a single phase or three phases (for example, a three-phase electricity sensor). A fragment `c8y_ThreePhaseElectricitySensor` would identify such an electric meter. Devices' characteristics are identified by storing fragments for each of them.
   *
   * > **&#9432; Info:** For more details about fragments with specific meanings, review the sections [Device management library](#section/Device-management-library) and [Sensor library](#section/Sensor-library).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> ROLE_INVENTORY_CREATE
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postManagedObjectCollectionResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.managedobject+json` and handles request body of type `application/vnd.com.nsn.cumulocity.managedobject+json`.
   */
  postManagedObjectCollectionResource$Response(params: PostManagedObjectCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ManagedObject>> {
    return postManagedObjectCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a managed object.
   *
   * Create a managed object, for example, a device with temperature measurements support or a binary switch.<br>
   * In general, each managed object may consist of:
   *
   * *  A unique identifier that references the object.
   * *  The name of the object.
   * *  The most specific type of the managed object.
   * *  A time stamp showing the last update.
   * *  Fragments with specific meanings, for example, `c8y_IsDevice`, `c8y_SupportedOperations`.
   * *  Any additional custom fragments.
   *
   * Imagine, for example, that you want to describe electric meters from different vendors. Depending on the make of the meter, one may have a relay and one may be capable to measure a single phase or three phases (for example, a three-phase electricity sensor). A fragment `c8y_ThreePhaseElectricitySensor` would identify such an electric meter. Devices' characteristics are identified by storing fragments for each of them.
   *
   * > **&#9432; Info:** For more details about fragments with specific meanings, review the sections [Device management library](#section/Device-management-library) and [Sensor library](#section/Sensor-library).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> ROLE_INVENTORY_CREATE
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postManagedObjectCollectionResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.managedobject+json` and handles request body of type `application/vnd.com.nsn.cumulocity.managedobject+json`.
   */
  postManagedObjectCollectionResource(params: PostManagedObjectCollectionResource$Params, context?: HttpContext): Observable<ManagedObject> {
    return this.postManagedObjectCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<ManagedObject>): ManagedObject => r.body)
    );
  }

  /** Path part for operation `getManagedObjectResource()` */
  static readonly GetManagedObjectResourcePath = '/inventory/managedObjects/{id}';

  /**
   * Retrieve a specific managed object.
   *
   * Retrieve a specific managed object (for example, device, group, template) by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_READ <b>OR</b> owner of the source <b>OR</b> MANAGE_OBJECT_READ permission on the source
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getManagedObjectResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getManagedObjectResource$Response(params: GetManagedObjectResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ManagedObject>> {
    return getManagedObjectResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a specific managed object.
   *
   * Retrieve a specific managed object (for example, device, group, template) by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_READ <b>OR</b> owner of the source <b>OR</b> MANAGE_OBJECT_READ permission on the source
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getManagedObjectResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getManagedObjectResource(params: GetManagedObjectResource$Params, context?: HttpContext): Observable<ManagedObject> {
    return this.getManagedObjectResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<ManagedObject>): ManagedObject => r.body)
    );
  }

  /** Path part for operation `putManagedObjectResource()` */
  static readonly PutManagedObjectResourcePath = '/inventory/managedObjects/{id}';

  /**
   * Update a specific managed object.
   *
   * Update a specific managed object (for example, device) by a given ID.
   *
   * For example, if you want to specify that your managed object is a device, you must add the fragment `c8y_IsDevice`.
   *
   *
   * The endpoint can also be used as a device availability heartbeat.
   * If you only specifiy the `id`, it updates the date when the last message was received and no other property.
   * The response then only contains the `id` instead of the full managed object.
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> owner of the source <b>OR</b> MANAGE_OBJECT_ADMIN permission on the source
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putManagedObjectResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.managedobject+json` and handles request body of type `application/vnd.com.nsn.cumulocity.managedobject+json`.
   */
  putManagedObjectResource$Response(params: PutManagedObjectResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ManagedObject>> {
    return putManagedObjectResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a specific managed object.
   *
   * Update a specific managed object (for example, device) by a given ID.
   *
   * For example, if you want to specify that your managed object is a device, you must add the fragment `c8y_IsDevice`.
   *
   *
   * The endpoint can also be used as a device availability heartbeat.
   * If you only specifiy the `id`, it updates the date when the last message was received and no other property.
   * The response then only contains the `id` instead of the full managed object.
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> owner of the source <b>OR</b> MANAGE_OBJECT_ADMIN permission on the source
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putManagedObjectResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.managedobject+json` and handles request body of type `application/vnd.com.nsn.cumulocity.managedobject+json`.
   */
  putManagedObjectResource(params: PutManagedObjectResource$Params, context?: HttpContext): Observable<ManagedObject> {
    return this.putManagedObjectResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<ManagedObject>): ManagedObject => r.body)
    );
  }

  /** Path part for operation `deleteManagedObjectResource()` */
  static readonly DeleteManagedObjectResourcePath = '/inventory/managedObjects/{id}';

  /**
   * Remove a specific managed object.
   *
   * Remove a specific managed object (for example, device) by a given ID.
   *
   * > **&#9432; Info:** Inventory DELETE requests are not synchronous. The response could be returned before the delete request has been completed. This may happen especially when the deleted managed object has a lot of associated data. After sending the request, the platform starts deleting the associated data in an asynchronous way. Finally, the requested managed object is deleted after all associated data has been deleted.
   *
   * > **&#9432; Info:** By default, the delete operation is always propagated to the subgroups, but only if the deleted object is a group.
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> owner of the source <b>OR</b> MANAGE_OBJECT_ADMIN permission on the source
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteManagedObjectResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteManagedObjectResource$Response(params: DeleteManagedObjectResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteManagedObjectResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove a specific managed object.
   *
   * Remove a specific managed object (for example, device) by a given ID.
   *
   * > **&#9432; Info:** Inventory DELETE requests are not synchronous. The response could be returned before the delete request has been completed. This may happen especially when the deleted managed object has a lot of associated data. After sending the request, the platform starts deleting the associated data in an asynchronous way. Finally, the requested managed object is deleted after all associated data has been deleted.
   *
   * > **&#9432; Info:** By default, the delete operation is always propagated to the subgroups, but only if the deleted object is a group.
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> owner of the source <b>OR</b> MANAGE_OBJECT_ADMIN permission on the source
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteManagedObjectResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteManagedObjectResource(params: DeleteManagedObjectResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteManagedObjectResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getLastAvailabilityManagedObjectResource()` */
  static readonly GetLastAvailabilityManagedObjectResourcePath = '/inventory/managedObjects/{id}/availability';

  /**
   * Retrieve the latest availability date of a specific managed object.
   *
   * Retrieve the date when a specific managed object (by a given ID) sent the last message to Cumulocity IoT.
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLastAvailabilityManagedObjectResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLastAvailabilityManagedObjectResource$Response(params: GetLastAvailabilityManagedObjectResource$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getLastAvailabilityManagedObjectResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve the latest availability date of a specific managed object.
   *
   * Retrieve the date when a specific managed object (by a given ID) sent the last message to Cumulocity IoT.
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getLastAvailabilityManagedObjectResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLastAvailabilityManagedObjectResource(params: GetLastAvailabilityManagedObjectResource$Params, context?: HttpContext): Observable<string> {
    return this.getLastAvailabilityManagedObjectResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getSupportedMeasurementsManagedObjectResource()` */
  static readonly GetSupportedMeasurementsManagedObjectResourcePath = '/inventory/managedObjects/{id}/supportedMeasurements';

  /**
   * Retrieve all supported measurement fragments of a specific managed object.
   *
   * Retrieve all measurement types of a specific managed object by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_READ <b>OR</b> owner of the source <b>OR</b> MANAGE_OBJECT_READ permission on the source
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSupportedMeasurementsManagedObjectResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSupportedMeasurementsManagedObjectResource$Response(params: GetSupportedMeasurementsManagedObjectResource$Params, context?: HttpContext): Observable<StrictHttpResponse<SupportedMeasurements>> {
    return getSupportedMeasurementsManagedObjectResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all supported measurement fragments of a specific managed object.
   *
   * Retrieve all measurement types of a specific managed object by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_READ <b>OR</b> owner of the source <b>OR</b> MANAGE_OBJECT_READ permission on the source
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSupportedMeasurementsManagedObjectResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSupportedMeasurementsManagedObjectResource(params: GetSupportedMeasurementsManagedObjectResource$Params, context?: HttpContext): Observable<SupportedMeasurements> {
    return this.getSupportedMeasurementsManagedObjectResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<SupportedMeasurements>): SupportedMeasurements => r.body)
    );
  }

  /** Path part for operation `getSupportedSeriesManagedObjectResource()` */
  static readonly GetSupportedSeriesManagedObjectResourcePath = '/inventory/managedObjects/{id}/supportedSeries';

  /**
   * Retrieve all supported measurement fragments and series of a specific managed object.
   *
   * Retrieve all supported measurement fragments and series of a specific managed object by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_READ <b>OR</b> owner of the source <b>OR</b> MANAGE_OBJECT_READ permission on the source
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSupportedSeriesManagedObjectResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSupportedSeriesManagedObjectResource$Response(params: GetSupportedSeriesManagedObjectResource$Params, context?: HttpContext): Observable<StrictHttpResponse<SupportedSeries>> {
    return getSupportedSeriesManagedObjectResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all supported measurement fragments and series of a specific managed object.
   *
   * Retrieve all supported measurement fragments and series of a specific managed object by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_READ <b>OR</b> owner of the source <b>OR</b> MANAGE_OBJECT_READ permission on the source
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSupportedSeriesManagedObjectResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSupportedSeriesManagedObjectResource(params: GetSupportedSeriesManagedObjectResource$Params, context?: HttpContext): Observable<SupportedSeries> {
    return this.getSupportedSeriesManagedObjectResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<SupportedSeries>): SupportedSeries => r.body)
    );
  }

  /** Path part for operation `getManagedObjectUserResource()` */
  static readonly GetManagedObjectUserResourcePath = '/inventory/managedObjects/{id}/user';

  /**
   * Retrieve the username and state of a specific managed object.
   *
   * Retrieve the device owner's username and state (enabled or disabled) of a specific managed object (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_READ <b>OR</b> owner of the source <b>OR</b> MANAGE_OBJECT_READ permission on the source
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getManagedObjectUserResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getManagedObjectUserResource$Response(params: GetManagedObjectUserResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ManagedObjectUser>> {
    return getManagedObjectUserResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve the username and state of a specific managed object.
   *
   * Retrieve the device owner's username and state (enabled or disabled) of a specific managed object (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_READ <b>OR</b> owner of the source <b>OR</b> MANAGE_OBJECT_READ permission on the source
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getManagedObjectUserResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getManagedObjectUserResource(params: GetManagedObjectUserResource$Params, context?: HttpContext): Observable<ManagedObjectUser> {
    return this.getManagedObjectUserResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<ManagedObjectUser>): ManagedObjectUser => r.body)
    );
  }

  /** Path part for operation `putManagedObjectUserResource()` */
  static readonly PutManagedObjectUserResourcePath = '/inventory/managedObjects/{id}/user';

  /**
   * Update the user's details of a specific managed object.
   *
   * Update the device owner's state (enabled or disabled) of a specific managed object (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> owner of the source <b>OR</b> MANAGE_OBJECT_ADMIN permission on the source
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putManagedObjectUserResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.managedobjectuser+json` and handles request body of type `application/vnd.com.nsn.cumulocity.managedobjectuser+json`.
   */
  putManagedObjectUserResource$Response(params: PutManagedObjectUserResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ManagedObjectUser>> {
    return putManagedObjectUserResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Update the user's details of a specific managed object.
   *
   * Update the device owner's state (enabled or disabled) of a specific managed object (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> owner of the source <b>OR</b> MANAGE_OBJECT_ADMIN permission on the source
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putManagedObjectUserResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.managedobjectuser+json` and handles request body of type `application/vnd.com.nsn.cumulocity.managedobjectuser+json`.
   */
  putManagedObjectUserResource(params: PutManagedObjectUserResource$Params, context?: HttpContext): Observable<ManagedObjectUser> {
    return this.putManagedObjectUserResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<ManagedObjectUser>): ManagedObjectUser => r.body)
    );
  }

}
