/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteGroupByIdResource } from '../fn/groups/delete-group-by-id-resource';
import { DeleteGroupByIdResource$Params } from '../fn/groups/delete-group-by-id-resource';
import { getGroupByIdResource } from '../fn/groups/get-group-by-id-resource';
import { GetGroupByIdResource$Params } from '../fn/groups/get-group-by-id-resource';
import { getGroupByNameResource } from '../fn/groups/get-group-by-name-resource';
import { GetGroupByNameResource$Params } from '../fn/groups/get-group-by-name-resource';
import { getGroupCollectionResource } from '../fn/groups/get-group-collection-resource';
import { GetGroupCollectionResource$Params } from '../fn/groups/get-group-collection-resource';
import { getGroupReferenceCollectionResource } from '../fn/groups/get-group-reference-collection-resource';
import { GetGroupReferenceCollectionResource$Params } from '../fn/groups/get-group-reference-collection-resource';
import { Group } from '../models/group';
import { GroupReferenceCollection } from '../models/group-reference-collection';
import { postGroupCollectionResource } from '../fn/groups/post-group-collection-resource';
import { PostGroupCollectionResource$Params } from '../fn/groups/post-group-collection-resource';
import { putGroupByIdResource } from '../fn/groups/put-group-by-id-resource';
import { PutGroupByIdResource$Params } from '../fn/groups/put-group-by-id-resource';
import { UserGroupCollection } from '../models/user-group-collection';


/**
 * API methods to create, retrieve, update and delete user groups.
 *
 * > **⚠️ Important:** In the Cumulocity IoT user interface, user groups are referred to as "global roles". Global roles are not to be confused with user roles.
 *
 * > **&#9432; Info:** The Accept header should be provided in all POST/PUT requests, otherwise an empty response body will be returned.
 */
@Injectable({ providedIn: 'root' })
export class GroupsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getGroupCollectionResource()` */
  static readonly GetGroupCollectionResourcePath = '/user/{tenantId}/groups';

  /**
   * Retrieve all user groups of a specific tenant.
   *
   * Retrieve all user groups of a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_CREATE
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGroupCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGroupCollectionResource$Response(params: GetGroupCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<UserGroupCollection>> {
    return getGroupCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all user groups of a specific tenant.
   *
   * Retrieve all user groups of a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_CREATE
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getGroupCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGroupCollectionResource(params: GetGroupCollectionResource$Params, context?: HttpContext): Observable<UserGroupCollection> {
    return this.getGroupCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserGroupCollection>): UserGroupCollection => r.body)
    );
  }

  /** Path part for operation `postGroupCollectionResource()` */
  static readonly PostGroupCollectionResourcePath = '/user/{tenantId}/groups';

  /**
   * Create a user group for a specific tenant.
   *
   * Create a user group for a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postGroupCollectionResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.group+json` and handles request body of type `application/vnd.com.nsn.cumulocity.group+json`.
   */
  postGroupCollectionResource$Response(params: PostGroupCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Group>> {
    return postGroupCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a user group for a specific tenant.
   *
   * Create a user group for a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postGroupCollectionResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.group+json` and handles request body of type `application/vnd.com.nsn.cumulocity.group+json`.
   */
  postGroupCollectionResource(params: PostGroupCollectionResource$Params, context?: HttpContext): Observable<Group> {
    return this.postGroupCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Group>): Group => r.body)
    );
  }

  /** Path part for operation `getGroupByIdResource()` */
  static readonly GetGroupByIdResourcePath = '/user/{tenantId}/groups/{groupId}';

  /**
   * Retrieve a specific user group for a specific tenant.
   *
   * Retrieve a specific user group (by a given user group ID) for a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> is parent of the user <b>AND</b> is not the current user
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGroupByIdResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGroupByIdResource$Response(params: GetGroupByIdResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Group>> {
    return getGroupByIdResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a specific user group for a specific tenant.
   *
   * Retrieve a specific user group (by a given user group ID) for a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> is parent of the user <b>AND</b> is not the current user
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getGroupByIdResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGroupByIdResource(params: GetGroupByIdResource$Params, context?: HttpContext): Observable<Group> {
    return this.getGroupByIdResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Group>): Group => r.body)
    );
  }

  /** Path part for operation `putGroupByIdResource()` */
  static readonly PutGroupByIdResourcePath = '/user/{tenantId}/groups/{groupId}';

  /**
   * Update a specific user group for a specific tenant.
   *
   * Update a specific user group (by a given user group ID) for a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putGroupByIdResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.group+json` and handles request body of type `application/vnd.com.nsn.cumulocity.group+json`.
   */
  putGroupByIdResource$Response(params: PutGroupByIdResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Group>> {
    return putGroupByIdResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a specific user group for a specific tenant.
   *
   * Update a specific user group (by a given user group ID) for a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putGroupByIdResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.group+json` and handles request body of type `application/vnd.com.nsn.cumulocity.group+json`.
   */
  putGroupByIdResource(params: PutGroupByIdResource$Params, context?: HttpContext): Observable<Group> {
    return this.putGroupByIdResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Group>): Group => r.body)
    );
  }

  /** Path part for operation `deleteGroupByIdResource()` */
  static readonly DeleteGroupByIdResourcePath = '/user/{tenantId}/groups/{groupId}';

  /**
   * Delete a specific user group for a specific tenant.
   *
   * Delete a specific user group (by a given user group ID) for a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteGroupByIdResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteGroupByIdResource$Response(params: DeleteGroupByIdResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteGroupByIdResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a specific user group for a specific tenant.
   *
   * Delete a specific user group (by a given user group ID) for a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteGroupByIdResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteGroupByIdResource(params: DeleteGroupByIdResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteGroupByIdResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getGroupByNameResource()` */
  static readonly GetGroupByNameResourcePath = '/user/{tenantId}/groupByName/{groupName}';

  /**
   * Retrieve a user group by group name for a specific tenant.
   *
   * Retrieve a user group by group name for a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> has access to groups
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGroupByNameResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGroupByNameResource$Response(params: GetGroupByNameResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Group>> {
    return getGroupByNameResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a user group by group name for a specific tenant.
   *
   * Retrieve a user group by group name for a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> has access to groups
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getGroupByNameResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGroupByNameResource(params: GetGroupByNameResource$Params, context?: HttpContext): Observable<Group> {
    return this.getGroupByNameResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Group>): Group => r.body)
    );
  }

  /** Path part for operation `getGroupReferenceCollectionResource()` */
  static readonly GetGroupReferenceCollectionResourcePath = '/user/{tenantId}/users/{userId}/groups';

  /**
   * Get all user groups for specific user in a specific tenant.
   *
   * Get all user groups for a specific user (by a given user ID) in a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> is parent of the user
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGroupReferenceCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGroupReferenceCollectionResource$Response(params: GetGroupReferenceCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<GroupReferenceCollection>> {
    return getGroupReferenceCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all user groups for specific user in a specific tenant.
   *
   * Get all user groups for a specific user (by a given user ID) in a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> is parent of the user
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getGroupReferenceCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGroupReferenceCollectionResource(params: GetGroupReferenceCollectionResource$Params, context?: HttpContext): Observable<GroupReferenceCollection> {
    return this.getGroupReferenceCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<GroupReferenceCollection>): GroupReferenceCollection => r.body)
    );
  }

}
