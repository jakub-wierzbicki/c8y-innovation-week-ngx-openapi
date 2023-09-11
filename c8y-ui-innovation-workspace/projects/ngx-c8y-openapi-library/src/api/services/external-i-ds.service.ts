/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteExternalIdResource } from '../fn/external-i-ds/delete-external-id-resource';
import { DeleteExternalIdResource$Params } from '../fn/external-i-ds/delete-external-id-resource';
import { ExternalId } from '../models/external-id';
import { ExternalIds } from '../models/external-ids';
import { getExternalIdCollectionResource } from '../fn/external-i-ds/get-external-id-collection-resource';
import { GetExternalIdCollectionResource$Params } from '../fn/external-i-ds/get-external-id-collection-resource';
import { getExternalIdResource } from '../fn/external-i-ds/get-external-id-resource';
import { GetExternalIdResource$Params } from '../fn/external-i-ds/get-external-id-resource';
import { postExternalIdCollectionResource } from '../fn/external-i-ds/post-external-id-collection-resource';
import { PostExternalIdCollectionResource$Params } from '../fn/external-i-ds/post-external-id-collection-resource';


/**
 * The external ID resource represents an individual external ID that can be queried and deleted.
 *
 * > **&#9432; Info:** The Accept header should be provided in all POST requests, otherwise an empty response body will be returned.
 */
@Injectable({ providedIn: 'root' })
export class ExternalIDsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getExternalIdCollectionResource()` */
  static readonly GetExternalIdCollectionResourcePath = '/identity/globalIds/{id}/externalIds';

  /**
   * Retrieve all external IDs of a specific managed object.
   *
   * Retrieve all external IDs of a existing managed object (identified by ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_IDENTITY_READ <b>OR</b> owner of the resource <b>OR</b> MANAGED_OBJECT_READ permission on the resource
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getExternalIdCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getExternalIdCollectionResource$Response(params: GetExternalIdCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ExternalIds>> {
    return getExternalIdCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all external IDs of a specific managed object.
   *
   * Retrieve all external IDs of a existing managed object (identified by ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_IDENTITY_READ <b>OR</b> owner of the resource <b>OR</b> MANAGED_OBJECT_READ permission on the resource
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getExternalIdCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getExternalIdCollectionResource(params: GetExternalIdCollectionResource$Params, context?: HttpContext): Observable<ExternalIds> {
    return this.getExternalIdCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<ExternalIds>): ExternalIds => r.body)
    );
  }

  /** Path part for operation `postExternalIdCollectionResource()` */
  static readonly PostExternalIdCollectionResourcePath = '/identity/globalIds/{id}/externalIds';

  /**
   * Create an external ID.
   *
   * Create an external ID for an existing managed object (identified by ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_IDENTITY_ADMIN <b>OR</b> owner of the resource <b>OR</b> MANAGED_OBJECT_ADMIN permission on the resource
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postExternalIdCollectionResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.externalid+json` and handles request body of type `application/vnd.com.nsn.cumulocity.externalid+json`.
   */
  postExternalIdCollectionResource$Response(params: PostExternalIdCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ExternalId>> {
    return postExternalIdCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Create an external ID.
   *
   * Create an external ID for an existing managed object (identified by ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_IDENTITY_ADMIN <b>OR</b> owner of the resource <b>OR</b> MANAGED_OBJECT_ADMIN permission on the resource
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postExternalIdCollectionResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.externalid+json` and handles request body of type `application/vnd.com.nsn.cumulocity.externalid+json`.
   */
  postExternalIdCollectionResource(params: PostExternalIdCollectionResource$Params, context?: HttpContext): Observable<ExternalId> {
    return this.postExternalIdCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<ExternalId>): ExternalId => r.body)
    );
  }

  /** Path part for operation `getExternalIdResource()` */
  static readonly GetExternalIdResourcePath = '/identity/externalIds/{type}/{externalId}';

  /**
   * Retrieve a specific external ID.
   *
   * Retrieve a specific external ID of a particular type.
   *
   * <section><h5>Required roles</h5>
   * ROLE_IDENTITY_READ <b>OR</b> owner of the resource <b>OR</b> MANAGED_OBJECT_READ permission on the resource
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getExternalIdResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getExternalIdResource$Response(params: GetExternalIdResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ExternalId>> {
    return getExternalIdResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a specific external ID.
   *
   * Retrieve a specific external ID of a particular type.
   *
   * <section><h5>Required roles</h5>
   * ROLE_IDENTITY_READ <b>OR</b> owner of the resource <b>OR</b> MANAGED_OBJECT_READ permission on the resource
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getExternalIdResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getExternalIdResource(params: GetExternalIdResource$Params, context?: HttpContext): Observable<ExternalId> {
    return this.getExternalIdResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<ExternalId>): ExternalId => r.body)
    );
  }

  /** Path part for operation `deleteExternalIdResource()` */
  static readonly DeleteExternalIdResourcePath = '/identity/externalIds/{type}/{externalId}';

  /**
   * Remove a specific external ID.
   *
   * Remove a specific external ID of a particular type.
   *
   * <section><h5>Required roles</h5>
   * ROLE_IDENTITY_ADMIN <b>OR</b> owner of the resource <b>OR</b> MANAGED_OBJECT_ADMIN permission on the resource
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteExternalIdResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteExternalIdResource$Response(params: DeleteExternalIdResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteExternalIdResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove a specific external ID.
   *
   * Remove a specific external ID of a particular type.
   *
   * <section><h5>Required roles</h5>
   * ROLE_IDENTITY_ADMIN <b>OR</b> owner of the resource <b>OR</b> MANAGED_OBJECT_ADMIN permission on the resource
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteExternalIdResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteExternalIdResource(params: DeleteExternalIdResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteExternalIdResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
