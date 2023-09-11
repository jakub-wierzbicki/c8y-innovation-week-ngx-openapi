/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteNewDeviceRequestResource } from '../fn/new-device-requests/delete-new-device-request-resource';
import { DeleteNewDeviceRequestResource$Params } from '../fn/new-device-requests/delete-new-device-request-resource';
import { getNewDeviceRequestCollectionResource } from '../fn/new-device-requests/get-new-device-request-collection-resource';
import { GetNewDeviceRequestCollectionResource$Params } from '../fn/new-device-requests/get-new-device-request-collection-resource';
import { getNewDeviceRequestResource } from '../fn/new-device-requests/get-new-device-request-resource';
import { GetNewDeviceRequestResource$Params } from '../fn/new-device-requests/get-new-device-request-resource';
import { NewDeviceRequest } from '../models/new-device-request';
import { NewDeviceRequestCollection } from '../models/new-device-request-collection';
import { postNewDeviceRequestCollectionResource } from '../fn/new-device-requests/post-new-device-request-collection-resource';
import { PostNewDeviceRequestCollectionResource$Params } from '../fn/new-device-requests/post-new-device-request-collection-resource';
import { putNewDeviceRequestResource } from '../fn/new-device-requests/put-new-device-request-resource';
import { PutNewDeviceRequestResource$Params } from '../fn/new-device-requests/put-new-device-request-resource';


/**
 * API methods to create, retrieve, update and delete new device requests in Cumulocity IoT.
 *
 * > **&#9432; Info:** The Accept header should be provided in all POST/PUT requests, otherwise an empty response body will be returned.
 */
@Injectable({ providedIn: 'root' })
export class NewDeviceRequestsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getNewDeviceRequestCollectionResource()` */
  static readonly GetNewDeviceRequestCollectionResourcePath = '/devicecontrol/newDeviceRequests';

  /**
   * Retrieve a list of new device requests.
   *
   * Retrieve a list of new device requests.
   *
   * <section><h5>Required roles</h5>
   * ROLE_DEVICE_CONTROL_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getNewDeviceRequestCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNewDeviceRequestCollectionResource$Response(params?: GetNewDeviceRequestCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<NewDeviceRequestCollection>> {
    return getNewDeviceRequestCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a list of new device requests.
   *
   * Retrieve a list of new device requests.
   *
   * <section><h5>Required roles</h5>
   * ROLE_DEVICE_CONTROL_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getNewDeviceRequestCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNewDeviceRequestCollectionResource(params?: GetNewDeviceRequestCollectionResource$Params, context?: HttpContext): Observable<NewDeviceRequestCollection> {
    return this.getNewDeviceRequestCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<NewDeviceRequestCollection>): NewDeviceRequestCollection => r.body)
    );
  }

  /** Path part for operation `postNewDeviceRequestCollectionResource()` */
  static readonly PostNewDeviceRequestCollectionResourcePath = '/devicecontrol/newDeviceRequests';

  /**
   * Create a new device request.
   *
   * Create a new device request.
   *
   * <section><h5>Required roles</h5>
   * ROLE_DEVICE_CONTROL_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postNewDeviceRequestCollectionResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.newdevicerequest+json` and handles request body of type `application/vnd.com.nsn.cumulocity.newdevicerequest+json`.
   */
  postNewDeviceRequestCollectionResource$Response(params: PostNewDeviceRequestCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<NewDeviceRequest>> {
    return postNewDeviceRequestCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a new device request.
   *
   * Create a new device request.
   *
   * <section><h5>Required roles</h5>
   * ROLE_DEVICE_CONTROL_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postNewDeviceRequestCollectionResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.newdevicerequest+json` and handles request body of type `application/vnd.com.nsn.cumulocity.newdevicerequest+json`.
   */
  postNewDeviceRequestCollectionResource(params: PostNewDeviceRequestCollectionResource$Params, context?: HttpContext): Observable<NewDeviceRequest> {
    return this.postNewDeviceRequestCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<NewDeviceRequest>): NewDeviceRequest => r.body)
    );
  }

  /** Path part for operation `getNewDeviceRequestResource()` */
  static readonly GetNewDeviceRequestResourcePath = '/devicecontrol/newDeviceRequests/{requestId}';

  /**
   * Retrieve a specific new device request.
   *
   * Retrieve a specific new device request (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_DEVICE_CONTROL_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getNewDeviceRequestResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNewDeviceRequestResource$Response(params: GetNewDeviceRequestResource$Params, context?: HttpContext): Observable<StrictHttpResponse<NewDeviceRequest>> {
    return getNewDeviceRequestResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a specific new device request.
   *
   * Retrieve a specific new device request (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_DEVICE_CONTROL_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getNewDeviceRequestResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNewDeviceRequestResource(params: GetNewDeviceRequestResource$Params, context?: HttpContext): Observable<NewDeviceRequest> {
    return this.getNewDeviceRequestResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<NewDeviceRequest>): NewDeviceRequest => r.body)
    );
  }

  /** Path part for operation `putNewDeviceRequestResource()` */
  static readonly PutNewDeviceRequestResourcePath = '/devicecontrol/newDeviceRequests/{requestId}';

  /**
   * Update a specific new device request status.
   *
   * Update a specific new device request (by a given ID).
   * You can only update its status.
   *
   * <section><h5>Required roles</h5>
   * ROLE_DEVICE_CONTROL_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putNewDeviceRequestResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.newdevicerequest+json` and handles request body of type `application/vnd.com.nsn.cumulocity.newdevicerequest+json`.
   */
  putNewDeviceRequestResource$Response(params: PutNewDeviceRequestResource$Params, context?: HttpContext): Observable<StrictHttpResponse<NewDeviceRequest>> {
    return putNewDeviceRequestResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a specific new device request status.
   *
   * Update a specific new device request (by a given ID).
   * You can only update its status.
   *
   * <section><h5>Required roles</h5>
   * ROLE_DEVICE_CONTROL_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putNewDeviceRequestResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.newdevicerequest+json` and handles request body of type `application/vnd.com.nsn.cumulocity.newdevicerequest+json`.
   */
  putNewDeviceRequestResource(params: PutNewDeviceRequestResource$Params, context?: HttpContext): Observable<NewDeviceRequest> {
    return this.putNewDeviceRequestResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<NewDeviceRequest>): NewDeviceRequest => r.body)
    );
  }

  /** Path part for operation `deleteNewDeviceRequestResource()` */
  static readonly DeleteNewDeviceRequestResourcePath = '/devicecontrol/newDeviceRequests/{requestId}';

  /**
   * Delete a specific new device request.
   *
   * Delete a specific new device request (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteNewDeviceRequestResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteNewDeviceRequestResource$Response(params: DeleteNewDeviceRequestResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteNewDeviceRequestResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a specific new device request.
   *
   * Delete a specific new device request (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteNewDeviceRequestResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteNewDeviceRequestResource(params: DeleteNewDeviceRequestResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteNewDeviceRequestResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
