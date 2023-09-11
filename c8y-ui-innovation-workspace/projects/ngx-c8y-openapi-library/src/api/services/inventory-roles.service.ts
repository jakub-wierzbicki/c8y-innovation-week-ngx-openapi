/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteInventoryAssignmentResourceById } from '../fn/inventory-roles/delete-inventory-assignment-resource-by-id';
import { DeleteInventoryAssignmentResourceById$Params } from '../fn/inventory-roles/delete-inventory-assignment-resource-by-id';
import { deleteInventoryRoleResourceId } from '../fn/inventory-roles/delete-inventory-role-resource-id';
import { DeleteInventoryRoleResourceId$Params } from '../fn/inventory-roles/delete-inventory-role-resource-id';
import { getInventoryAssignmentResource } from '../fn/inventory-roles/get-inventory-assignment-resource';
import { GetInventoryAssignmentResource$Params } from '../fn/inventory-roles/get-inventory-assignment-resource';
import { getInventoryAssignmentResourceById } from '../fn/inventory-roles/get-inventory-assignment-resource-by-id';
import { GetInventoryAssignmentResourceById$Params } from '../fn/inventory-roles/get-inventory-assignment-resource-by-id';
import { getInventoryRoleResource } from '../fn/inventory-roles/get-inventory-role-resource';
import { GetInventoryRoleResource$Params } from '../fn/inventory-roles/get-inventory-role-resource';
import { getInventoryRoleResourceId } from '../fn/inventory-roles/get-inventory-role-resource-id';
import { GetInventoryRoleResourceId$Params } from '../fn/inventory-roles/get-inventory-role-resource-id';
import { InventoryAssignment } from '../models/inventory-assignment';
import { InventoryAssignmentCollection } from '../models/inventory-assignment-collection';
import { InventoryRole } from '../models/inventory-role';
import { InventoryRoleCollection } from '../models/inventory-role-collection';
import { postInventoryAssignmentResource } from '../fn/inventory-roles/post-inventory-assignment-resource';
import { PostInventoryAssignmentResource$Params } from '../fn/inventory-roles/post-inventory-assignment-resource';
import { postInventoryRoleResource } from '../fn/inventory-roles/post-inventory-role-resource';
import { PostInventoryRoleResource$Params } from '../fn/inventory-roles/post-inventory-role-resource';
import { putInventoryAssignmentResourceById } from '../fn/inventory-roles/put-inventory-assignment-resource-by-id';
import { PutInventoryAssignmentResourceById$Params } from '../fn/inventory-roles/put-inventory-assignment-resource-by-id';
import { putInventoryRoleResourceId } from '../fn/inventory-roles/put-inventory-role-resource-id';
import { PutInventoryRoleResourceId$Params } from '../fn/inventory-roles/put-inventory-role-resource-id';


/**
 * API methods to create, retrieve, update and delete inventory roles.
 *
 * > **&#9432; Info:** The Accept header should be provided in all POST/PUT requests, otherwise an empty response body will be returned.
 */
@Injectable({ providedIn: 'root' })
export class InventoryRolesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getInventoryRoleResource()` */
  static readonly GetInventoryRoleResourcePath = '/user/inventoryroles';

  /**
   * Retrieve all inventory roles.
   *
   * Retrieve all inventory roles.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_CREATE
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getInventoryRoleResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInventoryRoleResource$Response(params?: GetInventoryRoleResource$Params, context?: HttpContext): Observable<StrictHttpResponse<InventoryRoleCollection>> {
    return getInventoryRoleResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all inventory roles.
   *
   * Retrieve all inventory roles.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_CREATE
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getInventoryRoleResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInventoryRoleResource(params?: GetInventoryRoleResource$Params, context?: HttpContext): Observable<InventoryRoleCollection> {
    return this.getInventoryRoleResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<InventoryRoleCollection>): InventoryRoleCollection => r.body)
    );
  }

  /** Path part for operation `postInventoryRoleResource()` */
  static readonly PostInventoryRoleResourcePath = '/user/inventoryroles';

  /**
   * Create an inventory role.
   *
   * Create an inventory role.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postInventoryRoleResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.inventoryrole+json` and handles request body of type `application/vnd.com.nsn.cumulocity.inventoryrole+json`.
   */
  postInventoryRoleResource$Response(params: PostInventoryRoleResource$Params, context?: HttpContext): Observable<StrictHttpResponse<InventoryRole>> {
    return postInventoryRoleResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Create an inventory role.
   *
   * Create an inventory role.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postInventoryRoleResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.inventoryrole+json` and handles request body of type `application/vnd.com.nsn.cumulocity.inventoryrole+json`.
   */
  postInventoryRoleResource(params: PostInventoryRoleResource$Params, context?: HttpContext): Observable<InventoryRole> {
    return this.postInventoryRoleResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<InventoryRole>): InventoryRole => r.body)
    );
  }

  /** Path part for operation `getInventoryRoleResourceId()` */
  static readonly GetInventoryRoleResourceIdPath = '/user/inventoryroles/{id}';

  /**
   * Retrieve a specific inventory role.
   *
   * Retrieve a specific inventory role (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> has access to the inventory role
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getInventoryRoleResourceId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInventoryRoleResourceId$Response(params: GetInventoryRoleResourceId$Params, context?: HttpContext): Observable<StrictHttpResponse<InventoryRole>> {
    return getInventoryRoleResourceId(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a specific inventory role.
   *
   * Retrieve a specific inventory role (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> has access to the inventory role
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getInventoryRoleResourceId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInventoryRoleResourceId(params: GetInventoryRoleResourceId$Params, context?: HttpContext): Observable<InventoryRole> {
    return this.getInventoryRoleResourceId$Response(params, context).pipe(
      map((r: StrictHttpResponse<InventoryRole>): InventoryRole => r.body)
    );
  }

  /** Path part for operation `putInventoryRoleResourceId()` */
  static readonly PutInventoryRoleResourceIdPath = '/user/inventoryroles/{id}';

  /**
   * Update a specific inventory role.
   *
   * Update a specific inventory role (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putInventoryRoleResourceId()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.inventoryrole+json` and handles request body of type `application/vnd.com.nsn.cumulocity.inventoryrole+json`.
   */
  putInventoryRoleResourceId$Response(params: PutInventoryRoleResourceId$Params, context?: HttpContext): Observable<StrictHttpResponse<InventoryRole>> {
    return putInventoryRoleResourceId(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a specific inventory role.
   *
   * Update a specific inventory role (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putInventoryRoleResourceId$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.inventoryrole+json` and handles request body of type `application/vnd.com.nsn.cumulocity.inventoryrole+json`.
   */
  putInventoryRoleResourceId(params: PutInventoryRoleResourceId$Params, context?: HttpContext): Observable<InventoryRole> {
    return this.putInventoryRoleResourceId$Response(params, context).pipe(
      map((r: StrictHttpResponse<InventoryRole>): InventoryRole => r.body)
    );
  }

  /** Path part for operation `deleteInventoryRoleResourceId()` */
  static readonly DeleteInventoryRoleResourceIdPath = '/user/inventoryroles/{id}';

  /**
   * Remove a specific inventory role.
   *
   * Remove a specific inventory role (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteInventoryRoleResourceId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteInventoryRoleResourceId$Response(params: DeleteInventoryRoleResourceId$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteInventoryRoleResourceId(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove a specific inventory role.
   *
   * Remove a specific inventory role (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteInventoryRoleResourceId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteInventoryRoleResourceId(params: DeleteInventoryRoleResourceId$Params, context?: HttpContext): Observable<void> {
    return this.deleteInventoryRoleResourceId$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getInventoryAssignmentResource()` */
  static readonly GetInventoryAssignmentResourcePath = '/user/{tenantId}/users/{userId}/roles/inventory';

  /**
   * Retrieve all inventory roles assigned to a user.
   *
   * Retrieve all inventory roles assigned to a specific user (by a given user ID) in a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> is the parent of the user
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getInventoryAssignmentResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInventoryAssignmentResource$Response(params: GetInventoryAssignmentResource$Params, context?: HttpContext): Observable<StrictHttpResponse<InventoryAssignmentCollection>> {
    return getInventoryAssignmentResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all inventory roles assigned to a user.
   *
   * Retrieve all inventory roles assigned to a specific user (by a given user ID) in a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> is the parent of the user
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getInventoryAssignmentResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInventoryAssignmentResource(params: GetInventoryAssignmentResource$Params, context?: HttpContext): Observable<InventoryAssignmentCollection> {
    return this.getInventoryAssignmentResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<InventoryAssignmentCollection>): InventoryAssignmentCollection => r.body)
    );
  }

  /** Path part for operation `postInventoryAssignmentResource()` */
  static readonly PostInventoryAssignmentResourcePath = '/user/{tenantId}/users/{userId}/roles/inventory';

  /**
   * Assign an inventory role to a user.
   *
   * Assign an existing inventory role to a specific user (by a given user ID) in a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN to assign any inventory role to root users in a user hierarchy <b>OR</b> users that are not in any hierarchy<br/>
   * ROLE_USER_MANAGEMENT_ADMIN to assign inventory roles accessible by the parent of the assigned user to non-root users in a user hierarchy<br/>
   * ROLE_USER_MANAGEMENT_CREATE to assign inventory roles accessible by the current user <b>AND</b> accessible by the parent of the assigned user to the descendants of the current user in a user hierarchy
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postInventoryAssignmentResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.inventoryassignment+json` and handles request body of type `application/vnd.com.nsn.cumulocity.inventoryassignment+json`.
   */
  postInventoryAssignmentResource$Response(params: PostInventoryAssignmentResource$Params, context?: HttpContext): Observable<StrictHttpResponse<InventoryAssignment>> {
    return postInventoryAssignmentResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Assign an inventory role to a user.
   *
   * Assign an existing inventory role to a specific user (by a given user ID) in a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN to assign any inventory role to root users in a user hierarchy <b>OR</b> users that are not in any hierarchy<br/>
   * ROLE_USER_MANAGEMENT_ADMIN to assign inventory roles accessible by the parent of the assigned user to non-root users in a user hierarchy<br/>
   * ROLE_USER_MANAGEMENT_CREATE to assign inventory roles accessible by the current user <b>AND</b> accessible by the parent of the assigned user to the descendants of the current user in a user hierarchy
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postInventoryAssignmentResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.inventoryassignment+json` and handles request body of type `application/vnd.com.nsn.cumulocity.inventoryassignment+json`.
   */
  postInventoryAssignmentResource(params: PostInventoryAssignmentResource$Params, context?: HttpContext): Observable<InventoryAssignment> {
    return this.postInventoryAssignmentResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<InventoryAssignment>): InventoryAssignment => r.body)
    );
  }

  /** Path part for operation `getInventoryAssignmentResourceById()` */
  static readonly GetInventoryAssignmentResourceByIdPath = '/user/{tenantId}/users/{userId}/roles/inventory/{id}';

  /**
   * Retrieve a specific inventory role assigned to a user.
   *
   * Retrieve a specific inventory role (by a given ID) assigned to a specific user (by a given user ID) in a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> is the parent of the user
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getInventoryAssignmentResourceById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInventoryAssignmentResourceById$Response(params: GetInventoryAssignmentResourceById$Params, context?: HttpContext): Observable<StrictHttpResponse<InventoryAssignment>> {
    return getInventoryAssignmentResourceById(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a specific inventory role assigned to a user.
   *
   * Retrieve a specific inventory role (by a given ID) assigned to a specific user (by a given user ID) in a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> is the parent of the user
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getInventoryAssignmentResourceById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInventoryAssignmentResourceById(params: GetInventoryAssignmentResourceById$Params, context?: HttpContext): Observable<InventoryAssignment> {
    return this.getInventoryAssignmentResourceById$Response(params, context).pipe(
      map((r: StrictHttpResponse<InventoryAssignment>): InventoryAssignment => r.body)
    );
  }

  /** Path part for operation `putInventoryAssignmentResourceById()` */
  static readonly PutInventoryAssignmentResourceByIdPath = '/user/{tenantId}/users/{userId}/roles/inventory/{id}';

  /**
   * Update a specific inventory role assigned to a user.
   *
   * Update a specific inventory role (by a given ID) assigned to a specific user (by a given user ID) in a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN to update the assignment of any inventory roles to root users in a user hierarchy <b>OR</b> users that are not in any hierarchy<br/>
   * ROLE_USER_MANAGEMENT_ADMIN to update the assignment of inventory roles accessible by the assigned user parent, to non-root users in a user hierarchy<br/>
   * ROLE_USER_MANAGEMENT_CREATE to update the assignment of inventory roles accessible by the current user <b>AND</b> the parent of the assigned user to the descendants of the current user in the user hierarchy
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putInventoryAssignmentResourceById()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.inventoryassignment+json` and handles request body of type `application/vnd.com.nsn.cumulocity.inventoryassignment+json`.
   */
  putInventoryAssignmentResourceById$Response(params: PutInventoryAssignmentResourceById$Params, context?: HttpContext): Observable<StrictHttpResponse<InventoryAssignment>> {
    return putInventoryAssignmentResourceById(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a specific inventory role assigned to a user.
   *
   * Update a specific inventory role (by a given ID) assigned to a specific user (by a given user ID) in a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN to update the assignment of any inventory roles to root users in a user hierarchy <b>OR</b> users that are not in any hierarchy<br/>
   * ROLE_USER_MANAGEMENT_ADMIN to update the assignment of inventory roles accessible by the assigned user parent, to non-root users in a user hierarchy<br/>
   * ROLE_USER_MANAGEMENT_CREATE to update the assignment of inventory roles accessible by the current user <b>AND</b> the parent of the assigned user to the descendants of the current user in the user hierarchy
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putInventoryAssignmentResourceById$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.inventoryassignment+json` and handles request body of type `application/vnd.com.nsn.cumulocity.inventoryassignment+json`.
   */
  putInventoryAssignmentResourceById(params: PutInventoryAssignmentResourceById$Params, context?: HttpContext): Observable<InventoryAssignment> {
    return this.putInventoryAssignmentResourceById$Response(params, context).pipe(
      map((r: StrictHttpResponse<InventoryAssignment>): InventoryAssignment => r.body)
    );
  }

  /** Path part for operation `deleteInventoryAssignmentResourceById()` */
  static readonly DeleteInventoryAssignmentResourceByIdPath = '/user/{tenantId}/users/{userId}/roles/inventory/{id}';

  /**
   * Remove a specific inventory role assigned to a user.
   *
   * Remove a specific inventory role (by a given ID) assigned to a specific user (by a given user ID) in a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN <b>AND</b> (is not in user hierarchy <b>OR</b> is root in the user hierarchy) <b>OR</b> ROLE_USER_MANAGEMENT_ADMIN <b>AND</b> is in user hiararchy <b>AND</b> has parent access to inventory assignments <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> is parent of the user <b>AND</b> is not the current user <b>AND</b> has current user access to inventory assignments <b>AND</b> has parent access to inventory assignments
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteInventoryAssignmentResourceById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteInventoryAssignmentResourceById$Response(params: DeleteInventoryAssignmentResourceById$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteInventoryAssignmentResourceById(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove a specific inventory role assigned to a user.
   *
   * Remove a specific inventory role (by a given ID) assigned to a specific user (by a given user ID) in a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN <b>AND</b> (is not in user hierarchy <b>OR</b> is root in the user hierarchy) <b>OR</b> ROLE_USER_MANAGEMENT_ADMIN <b>AND</b> is in user hiararchy <b>AND</b> has parent access to inventory assignments <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> is parent of the user <b>AND</b> is not the current user <b>AND</b> has current user access to inventory assignments <b>AND</b> has parent access to inventory assignments
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteInventoryAssignmentResourceById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteInventoryAssignmentResourceById(params: DeleteInventoryAssignmentResourceById$Params, context?: HttpContext): Observable<void> {
    return this.deleteInventoryAssignmentResourceById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
