/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { BulkOperation } from '../models/bulk-operation';
import { BulkOperationCollection } from '../models/bulk-operation-collection';
import { deleteBulkOperationResource } from '../fn/bulk-operations/delete-bulk-operation-resource';
import { DeleteBulkOperationResource$Params } from '../fn/bulk-operations/delete-bulk-operation-resource';
import { getBulkOperationCollectionResource } from '../fn/bulk-operations/get-bulk-operation-collection-resource';
import { GetBulkOperationCollectionResource$Params } from '../fn/bulk-operations/get-bulk-operation-collection-resource';
import { getBulkOperationResource } from '../fn/bulk-operations/get-bulk-operation-resource';
import { GetBulkOperationResource$Params } from '../fn/bulk-operations/get-bulk-operation-resource';
import { postBulkOperationCollectionResource } from '../fn/bulk-operations/post-bulk-operation-collection-resource';
import { PostBulkOperationCollectionResource$Params } from '../fn/bulk-operations/post-bulk-operation-collection-resource';
import { putBulkOperationResource } from '../fn/bulk-operations/put-bulk-operation-resource';
import { PutBulkOperationResource$Params } from '../fn/bulk-operations/put-bulk-operation-resource';


/**
 * The bulk operations API allows to schedule an operation on a group of devices to be executed at a specified time.
 * It is required to specify the delay between the creation of subsequent operations.
 * When the bulk operation is created, it has the status ACTIVE.
 * When all operations are created, the bulk operation has the status COMPLETED.
 * It is also possible to cancel an already created bulk operation by deleting it.
 *
 * When you create a bulk operation, you can run it in two modes:
 *
 * * If `groupId` is passed, it works the standard way, that means, it takes devices from a group and schedules operations on them.
 * * If `failedParentId` is passed, it takes the already processed bulk operation by that ID, and schedules operations on devices for which the previous operations failed.
 *
 * Note that passing both `groupId` and `failedParentId` will not work, and a bulk operation works with groups of type `static` and `dynamic`.
 *
 * > **&#9432; Info:** The bulk operations API requires different roles than the rest of the device control API: `BULK_OPERATION_READ` and `BULK_OPERATION_ADMIN`.
 * >
 * > The Accept header should be provided in all POST/PUT requests, otherwise an empty response body will be returned.
 */
@Injectable({ providedIn: 'root' })
export class BulkOperationsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getBulkOperationCollectionResource()` */
  static readonly GetBulkOperationCollectionResourcePath = '/devicecontrol/bulkoperations';

  /**
   * Retrieve a list of bulk operations.
   *
   * Retrieve a list of bulk operations.
   *
   * <section><h5>Required roles</h5>
   * ROLE_BULK_OPERATION_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBulkOperationCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBulkOperationCollectionResource$Response(params?: GetBulkOperationCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<BulkOperationCollection>> {
    return getBulkOperationCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a list of bulk operations.
   *
   * Retrieve a list of bulk operations.
   *
   * <section><h5>Required roles</h5>
   * ROLE_BULK_OPERATION_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBulkOperationCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBulkOperationCollectionResource(params?: GetBulkOperationCollectionResource$Params, context?: HttpContext): Observable<BulkOperationCollection> {
    return this.getBulkOperationCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<BulkOperationCollection>): BulkOperationCollection => r.body)
    );
  }

  /** Path part for operation `postBulkOperationCollectionResource()` */
  static readonly PostBulkOperationCollectionResourcePath = '/devicecontrol/bulkoperations';

  /**
   * Create a bulk operation.
   *
   * Create a bulk operation.
   *
   * <section><h5>Required roles</h5>
   * ROLE_BULK_OPERATION_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postBulkOperationCollectionResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.bulkoperation+json` and handles request body of type `application/vnd.com.nsn.cumulocity.bulkoperation+json`.
   */
  postBulkOperationCollectionResource$Response(params: PostBulkOperationCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<BulkOperation>> {
    return postBulkOperationCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a bulk operation.
   *
   * Create a bulk operation.
   *
   * <section><h5>Required roles</h5>
   * ROLE_BULK_OPERATION_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postBulkOperationCollectionResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.bulkoperation+json` and handles request body of type `application/vnd.com.nsn.cumulocity.bulkoperation+json`.
   */
  postBulkOperationCollectionResource(params: PostBulkOperationCollectionResource$Params, context?: HttpContext): Observable<BulkOperation> {
    return this.postBulkOperationCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<BulkOperation>): BulkOperation => r.body)
    );
  }

  /** Path part for operation `getBulkOperationResource()` */
  static readonly GetBulkOperationResourcePath = '/devicecontrol/bulkoperations/{id}';

  /**
   * Retrieve a specific bulk operation.
   *
   * Retrieve a specific bulk operation (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_BULK_OPERATION_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBulkOperationResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBulkOperationResource$Response(params: GetBulkOperationResource$Params, context?: HttpContext): Observable<StrictHttpResponse<BulkOperation>> {
    return getBulkOperationResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a specific bulk operation.
   *
   * Retrieve a specific bulk operation (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_BULK_OPERATION_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBulkOperationResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBulkOperationResource(params: GetBulkOperationResource$Params, context?: HttpContext): Observable<BulkOperation> {
    return this.getBulkOperationResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<BulkOperation>): BulkOperation => r.body)
    );
  }

  /** Path part for operation `putBulkOperationResource()` */
  static readonly PutBulkOperationResourcePath = '/devicecontrol/bulkoperations/{id}';

  /**
   * Update a specific bulk operation.
   *
   * Update a specific bulk operation (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_BULK_OPERATION_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putBulkOperationResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.bulkoperation+json` and handles request body of type `application/vnd.com.nsn.cumulocity.bulkoperation+json`.
   */
  putBulkOperationResource$Response(params: PutBulkOperationResource$Params, context?: HttpContext): Observable<StrictHttpResponse<BulkOperation>> {
    return putBulkOperationResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a specific bulk operation.
   *
   * Update a specific bulk operation (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_BULK_OPERATION_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putBulkOperationResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.bulkoperation+json` and handles request body of type `application/vnd.com.nsn.cumulocity.bulkoperation+json`.
   */
  putBulkOperationResource(params: PutBulkOperationResource$Params, context?: HttpContext): Observable<BulkOperation> {
    return this.putBulkOperationResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<BulkOperation>): BulkOperation => r.body)
    );
  }

  /** Path part for operation `deleteBulkOperationResource()` */
  static readonly DeleteBulkOperationResourcePath = '/devicecontrol/bulkoperations/{id}';

  /**
   * Delete a specific bulk operation.
   *
   * Delete a specific bulk operation (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_BULK_OPERATION_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteBulkOperationResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBulkOperationResource$Response(params: DeleteBulkOperationResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteBulkOperationResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a specific bulk operation.
   *
   * Delete a specific bulk operation (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_BULK_OPERATION_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteBulkOperationResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBulkOperationResource(params: DeleteBulkOperationResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteBulkOperationResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
