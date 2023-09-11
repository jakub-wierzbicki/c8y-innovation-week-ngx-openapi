/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteOperationCollectionResource } from '../fn/operations/delete-operation-collection-resource';
import { DeleteOperationCollectionResource$Params } from '../fn/operations/delete-operation-collection-resource';
import { getOperationCollectionResource } from '../fn/operations/get-operation-collection-resource';
import { GetOperationCollectionResource$Params } from '../fn/operations/get-operation-collection-resource';
import { getOperationResource } from '../fn/operations/get-operation-resource';
import { GetOperationResource$Params } from '../fn/operations/get-operation-resource';
import { Operation } from '../models/operation';
import { OperationCollection } from '../models/operation-collection';
import { postOperationCollectionResource } from '../fn/operations/post-operation-collection-resource';
import { PostOperationCollectionResource$Params } from '../fn/operations/post-operation-collection-resource';
import { putOperationResource } from '../fn/operations/put-operation-resource';
import { PutOperationResource$Params } from '../fn/operations/put-operation-resource';


/**
 * API methods to create, retrieve, update and delete operations in Cumulocity IoT.
 *
 * > **&#9432; Info:** The Accept header should be provided in all POST/PUT requests, otherwise an empty response body will be returned.
 */
@Injectable({ providedIn: 'root' })
export class OperationsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getOperationCollectionResource()` */
  static readonly GetOperationCollectionResourcePath = '/devicecontrol/operations';

  /**
   * Retrieve a list of operations.
   *
   * Retrieve a list of operations.
   *
   * Notes about operation collections:
   *
   * * The embedded operation object contains `deviceExternalIDs` only when queried with an `agentId` parameter.
   * * The embedded operation object is filled with `deviceName`, but only when requesting resource: Get a collection of operations.
   * * Operations are returned in the order of their ascending IDs.
   *
   * <section><h5>Required roles</h5>
   * ROLE_DEVICE_CONTROL_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOperationCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOperationCollectionResource$Response(params?: GetOperationCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<OperationCollection>> {
    return getOperationCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a list of operations.
   *
   * Retrieve a list of operations.
   *
   * Notes about operation collections:
   *
   * * The embedded operation object contains `deviceExternalIDs` only when queried with an `agentId` parameter.
   * * The embedded operation object is filled with `deviceName`, but only when requesting resource: Get a collection of operations.
   * * Operations are returned in the order of their ascending IDs.
   *
   * <section><h5>Required roles</h5>
   * ROLE_DEVICE_CONTROL_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getOperationCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOperationCollectionResource(params?: GetOperationCollectionResource$Params, context?: HttpContext): Observable<OperationCollection> {
    return this.getOperationCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<OperationCollection>): OperationCollection => r.body)
    );
  }

  /** Path part for operation `postOperationCollectionResource()` */
  static readonly PostOperationCollectionResourcePath = '/devicecontrol/operations';

  /**
   * Create an operation.
   *
   * Create an operation.
   *
   * It is possible to add custom fragments to operations, for example `com_cumulocity_model_WebCamDevice` is a custom object of the webcam operation.
   *
   * <section><h5>Required roles</h5>
   * ROLE_DEVICE_CONTROL_ADMIN <b>OR</b> owner of the device <b>OR</b> ADMIN permissions on the device
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postOperationCollectionResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.operation+json` and handles request body of type `application/vnd.com.nsn.cumulocity.operation+json`.
   */
  postOperationCollectionResource$Response(params: PostOperationCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Operation>> {
    return postOperationCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Create an operation.
   *
   * Create an operation.
   *
   * It is possible to add custom fragments to operations, for example `com_cumulocity_model_WebCamDevice` is a custom object of the webcam operation.
   *
   * <section><h5>Required roles</h5>
   * ROLE_DEVICE_CONTROL_ADMIN <b>OR</b> owner of the device <b>OR</b> ADMIN permissions on the device
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postOperationCollectionResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.operation+json` and handles request body of type `application/vnd.com.nsn.cumulocity.operation+json`.
   */
  postOperationCollectionResource(params: PostOperationCollectionResource$Params, context?: HttpContext): Observable<Operation> {
    return this.postOperationCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Operation>): Operation => r.body)
    );
  }

  /** Path part for operation `deleteOperationCollectionResource()` */
  static readonly DeleteOperationCollectionResourcePath = '/devicecontrol/operations';

  /**
   * Delete a list of operations.
   *
   * Delete a list of operations.
   *
   * The DELETE method allows for deletion of operation collections.
   *
   * <section><h5>Required roles</h5>
   * ROLE_DEVICE_CONTROL_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteOperationCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOperationCollectionResource$Response(params?: DeleteOperationCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteOperationCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a list of operations.
   *
   * Delete a list of operations.
   *
   * The DELETE method allows for deletion of operation collections.
   *
   * <section><h5>Required roles</h5>
   * ROLE_DEVICE_CONTROL_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteOperationCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOperationCollectionResource(params?: DeleteOperationCollectionResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteOperationCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getOperationResource()` */
  static readonly GetOperationResourcePath = '/devicecontrol/operations/{id}';

  /**
   * Retrieve a specific operation.
   *
   * Retrieve a specific operation (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_DEVICE_CONTROL_READ <b>OR</b> owner of the resource <b>OR</b> ADMIN permission on the device
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOperationResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOperationResource$Response(params: GetOperationResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Operation>> {
    return getOperationResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a specific operation.
   *
   * Retrieve a specific operation (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_DEVICE_CONTROL_READ <b>OR</b> owner of the resource <b>OR</b> ADMIN permission on the device
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getOperationResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOperationResource(params: GetOperationResource$Params, context?: HttpContext): Observable<Operation> {
    return this.getOperationResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Operation>): Operation => r.body)
    );
  }

  /** Path part for operation `putOperationResource()` */
  static readonly PutOperationResourcePath = '/devicecontrol/operations/{id}';

  /**
   * Update a specific operation status.
   *
   * Update a specific operation (by a given ID).
   * You can only update its status.
   *
   * <section><h5>Required roles</h5>
   * ROLE_DEVICE_CONTROL_ADMIN <b>OR</b> owner of the resource <b>OR</b> ADMIN permission on the device
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putOperationResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.operation+json` and handles request body of type `application/vnd.com.nsn.cumulocity.operation+json`.
   */
  putOperationResource$Response(params: PutOperationResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Operation>> {
    return putOperationResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a specific operation status.
   *
   * Update a specific operation (by a given ID).
   * You can only update its status.
   *
   * <section><h5>Required roles</h5>
   * ROLE_DEVICE_CONTROL_ADMIN <b>OR</b> owner of the resource <b>OR</b> ADMIN permission on the device
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putOperationResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.operation+json` and handles request body of type `application/vnd.com.nsn.cumulocity.operation+json`.
   */
  putOperationResource(params: PutOperationResource$Params, context?: HttpContext): Observable<Operation> {
    return this.putOperationResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Operation>): Operation => r.body)
    );
  }

}
