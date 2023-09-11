/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteGroupRoleReferenceResource } from '../fn/roles/delete-group-role-reference-resource';
import { DeleteGroupRoleReferenceResource$Params } from '../fn/roles/delete-group-role-reference-resource';
import { deleteUserRoleReferenceResource } from '../fn/roles/delete-user-role-reference-resource';
import { DeleteUserRoleReferenceResource$Params } from '../fn/roles/delete-user-role-reference-resource';
import { getGroupsRoleReferenceCollectionResource } from '../fn/roles/get-groups-role-reference-collection-resource';
import { GetGroupsRoleReferenceCollectionResource$Params } from '../fn/roles/get-groups-role-reference-collection-resource';
import { getRoleCollectionResource } from '../fn/roles/get-role-collection-resource';
import { GetRoleCollectionResource$Params } from '../fn/roles/get-role-collection-resource';
import { getRoleCollectionResourceByName } from '../fn/roles/get-role-collection-resource-by-name';
import { GetRoleCollectionResourceByName$Params } from '../fn/roles/get-role-collection-resource-by-name';
import { postGroupsRoleReferenceCollectionResource } from '../fn/roles/post-groups-role-reference-collection-resource';
import { PostGroupsRoleReferenceCollectionResource$Params } from '../fn/roles/post-groups-role-reference-collection-resource';
import { postUsersRoleReferenceCollectionResource } from '../fn/roles/post-users-role-reference-collection-resource';
import { PostUsersRoleReferenceCollectionResource$Params } from '../fn/roles/post-users-role-reference-collection-resource';
import { Role } from '../models/role';
import { RoleReference } from '../models/role-reference';
import { RoleReferenceCollection } from '../models/role-reference-collection';
import { UserRoleCollection } from '../models/user-role-collection';


/**
 * API methods to create, retrieve, update and delete user roles.
 *
 * > **&#9432; Info:** The Accept header should be provided in all POST requests, otherwise an empty response body will be returned.
 */
@Injectable({ providedIn: 'root' })
export class RolesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getRoleCollectionResource()` */
  static readonly GetRoleCollectionResourcePath = '/user/roles';

  /**
   * Retrieve all user roles.
   *
   * Retrieve all user roles.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> has access to the user role
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRoleCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRoleCollectionResource$Response(params?: GetRoleCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<UserRoleCollection>> {
    return getRoleCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all user roles.
   *
   * Retrieve all user roles.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> has access to the user role
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRoleCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRoleCollectionResource(params?: GetRoleCollectionResource$Params, context?: HttpContext): Observable<UserRoleCollection> {
    return this.getRoleCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserRoleCollection>): UserRoleCollection => r.body)
    );
  }

  /** Path part for operation `getRoleCollectionResourceByName()` */
  static readonly GetRoleCollectionResourceByNamePath = '/user/roles/{name}';

  /**
   * Retrieve a user role by name.
   *
   * Retrieve a user role by name.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> current user has access to the role with this name
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRoleCollectionResourceByName()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRoleCollectionResourceByName$Response(params: GetRoleCollectionResourceByName$Params, context?: HttpContext): Observable<StrictHttpResponse<Role>> {
    return getRoleCollectionResourceByName(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a user role by name.
   *
   * Retrieve a user role by name.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> current user has access to the role with this name
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRoleCollectionResourceByName$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRoleCollectionResourceByName(params: GetRoleCollectionResourceByName$Params, context?: HttpContext): Observable<Role> {
    return this.getRoleCollectionResourceByName$Response(params, context).pipe(
      map((r: StrictHttpResponse<Role>): Role => r.body)
    );
  }

  /** Path part for operation `getGroupsRoleReferenceCollectionResource()` */
  static readonly GetGroupsRoleReferenceCollectionResourcePath = '/user/{tenantId}/groups/{groupId}/roles';

  /**
   * Retrieve all roles assigned to a specific user group in a specific tenant.
   *
   * Retrieve all roles assigned to a specific user group (by a given user group ID) in a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGroupsRoleReferenceCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGroupsRoleReferenceCollectionResource$Response(params: GetGroupsRoleReferenceCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<RoleReferenceCollection>> {
    return getGroupsRoleReferenceCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all roles assigned to a specific user group in a specific tenant.
   *
   * Retrieve all roles assigned to a specific user group (by a given user group ID) in a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getGroupsRoleReferenceCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGroupsRoleReferenceCollectionResource(params: GetGroupsRoleReferenceCollectionResource$Params, context?: HttpContext): Observable<RoleReferenceCollection> {
    return this.getGroupsRoleReferenceCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<RoleReferenceCollection>): RoleReferenceCollection => r.body)
    );
  }

  /** Path part for operation `postGroupsRoleReferenceCollectionResource()` */
  static readonly PostGroupsRoleReferenceCollectionResourcePath = '/user/{tenantId}/groups/{groupId}/roles';

  /**
   * Assign a role to a specific user group in a specific tenant.
   *
   * Assign a role to a specific user group (by a given user group ID) in a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postGroupsRoleReferenceCollectionResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.rolereference+json` and handles request body of type `application/vnd.com.nsn.cumulocity.rolereference+json`.
   */
  postGroupsRoleReferenceCollectionResource$Response(params: PostGroupsRoleReferenceCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<RoleReference>> {
    return postGroupsRoleReferenceCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Assign a role to a specific user group in a specific tenant.
   *
   * Assign a role to a specific user group (by a given user group ID) in a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postGroupsRoleReferenceCollectionResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.rolereference+json` and handles request body of type `application/vnd.com.nsn.cumulocity.rolereference+json`.
   */
  postGroupsRoleReferenceCollectionResource(params: PostGroupsRoleReferenceCollectionResource$Params, context?: HttpContext): Observable<RoleReference> {
    return this.postGroupsRoleReferenceCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<RoleReference>): RoleReference => r.body)
    );
  }

  /** Path part for operation `deleteGroupRoleReferenceResource()` */
  static readonly DeleteGroupRoleReferenceResourcePath = '/user/{tenantId}/groups/{groupId}/roles/{roleId}';

  /**
   * Unassign a specific role for a specific user group in a specific tenant.
   *
   * Unassign a specific role (given by a role ID) for a specific user group (by a given user group ID) in a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteGroupRoleReferenceResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteGroupRoleReferenceResource$Response(params: DeleteGroupRoleReferenceResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteGroupRoleReferenceResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Unassign a specific role for a specific user group in a specific tenant.
   *
   * Unassign a specific role (given by a role ID) for a specific user group (by a given user group ID) in a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteGroupRoleReferenceResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteGroupRoleReferenceResource(params: DeleteGroupRoleReferenceResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteGroupRoleReferenceResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `postUsersRoleReferenceCollectionResource()` */
  static readonly PostUsersRoleReferenceCollectionResourcePath = '/user/{tenantId}/users/{userId}/roles';

  /**
   * Assign a role to specific user in a specific tenant.
   *
   * Assign a role to a specific user (by a given user ID) in a specific tenant (by a given tenant ID).
   *
   * When a role is assigned to a user, a corresponding audit record is created with type "User" and activity "User updated".
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN to assign any role to root users in a user hierarchy <b>OR</b> users that are not in any hierarchy<br/>
   * ROLE_USER_MANAGEMENT_ADMIN to assign roles accessible by the parent of assigned user to non-root users in a user hierarchy<br/>
   * ROLE_USER_MANAGEMENT_CREATE to assign roles accessible by the current user <b>AND</b> accessible by the parent of the assigned user to the descendants of the current user in a user hierarchy
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUsersRoleReferenceCollectionResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.rolereference+json` and handles request body of type `application/vnd.com.nsn.cumulocity.rolereference+json`.
   */
  postUsersRoleReferenceCollectionResource$Response(params: PostUsersRoleReferenceCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<RoleReference>> {
    return postUsersRoleReferenceCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Assign a role to specific user in a specific tenant.
   *
   * Assign a role to a specific user (by a given user ID) in a specific tenant (by a given tenant ID).
   *
   * When a role is assigned to a user, a corresponding audit record is created with type "User" and activity "User updated".
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN to assign any role to root users in a user hierarchy <b>OR</b> users that are not in any hierarchy<br/>
   * ROLE_USER_MANAGEMENT_ADMIN to assign roles accessible by the parent of assigned user to non-root users in a user hierarchy<br/>
   * ROLE_USER_MANAGEMENT_CREATE to assign roles accessible by the current user <b>AND</b> accessible by the parent of the assigned user to the descendants of the current user in a user hierarchy
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postUsersRoleReferenceCollectionResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.rolereference+json` and handles request body of type `application/vnd.com.nsn.cumulocity.rolereference+json`.
   */
  postUsersRoleReferenceCollectionResource(params: PostUsersRoleReferenceCollectionResource$Params, context?: HttpContext): Observable<RoleReference> {
    return this.postUsersRoleReferenceCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<RoleReference>): RoleReference => r.body)
    );
  }

  /** Path part for operation `deleteUserRoleReferenceResource()` */
  static readonly DeleteUserRoleReferenceResourcePath = '/user/{tenantId}/users/{userId}/roles/{roleId}';

  /**
   * Unassign a specific role from a specific user in a specific tenant.
   *
   * Unassign a specific role (by a given role ID) from a specific user (by a given user ID) in a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> is parent of the user <b>AND</b> has access to roles
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUserRoleReferenceResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserRoleReferenceResource$Response(params: DeleteUserRoleReferenceResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteUserRoleReferenceResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Unassign a specific role from a specific user in a specific tenant.
   *
   * Unassign a specific role (by a given role ID) from a specific user (by a given user ID) in a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> is parent of the user <b>AND</b> has access to roles
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteUserRoleReferenceResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserRoleReferenceResource(params: DeleteUserRoleReferenceResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteUserRoleReferenceResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
