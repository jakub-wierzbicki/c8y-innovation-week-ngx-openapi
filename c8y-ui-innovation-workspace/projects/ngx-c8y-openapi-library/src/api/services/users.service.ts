/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteUserReferenceResource } from '../fn/users/delete-user-reference-resource';
import { DeleteUserReferenceResource$Params } from '../fn/users/delete-user-reference-resource';
import { deleteUserResource } from '../fn/users/delete-user-resource';
import { DeleteUserResource$Params } from '../fn/users/delete-user-resource';
import { getUserCollectionResource } from '../fn/users/get-user-collection-resource';
import { GetUserCollectionResource$Params } from '../fn/users/get-user-collection-resource';
import { getUserReferenceCollectionResource } from '../fn/users/get-user-reference-collection-resource';
import { GetUserReferenceCollectionResource$Params } from '../fn/users/get-user-reference-collection-resource';
import { getUserResource } from '../fn/users/get-user-resource';
import { GetUserResource$Params } from '../fn/users/get-user-resource';
import { getUsersByNameResource } from '../fn/users/get-users-by-name-resource';
import { GetUsersByNameResource$Params } from '../fn/users/get-users-by-name-resource';
import { getUsersTfaResource } from '../fn/users/get-users-tfa-resource';
import { GetUsersTfaResource$Params } from '../fn/users/get-users-tfa-resource';
import { postLogoutAllTenantUsers } from '../fn/users/post-logout-all-tenant-users';
import { PostLogoutAllTenantUsers$Params } from '../fn/users/post-logout-all-tenant-users';
import { postLogoutUser } from '../fn/users/post-logout-user';
import { PostLogoutUser$Params } from '../fn/users/post-logout-user';
import { postUserCollectionResource } from '../fn/users/post-user-collection-resource';
import { PostUserCollectionResource$Params } from '../fn/users/post-user-collection-resource';
import { postUserReferenceCollectionResource } from '../fn/users/post-user-reference-collection-resource';
import { PostUserReferenceCollectionResource$Params } from '../fn/users/post-user-reference-collection-resource';
import { putUserChangePasswordResource } from '../fn/users/put-user-change-password-resource';
import { PutUserChangePasswordResource$Params } from '../fn/users/put-user-change-password-resource';
import { putUserResource } from '../fn/users/put-user-resource';
import { PutUserResource$Params } from '../fn/users/put-user-resource';
import { User } from '../models/user';
import { UserCollection } from '../models/user-collection';
import { UserReference } from '../models/user-reference';
import { UserReferenceCollection } from '../models/user-reference-collection';
import { UserTfaData } from '../models/user-tfa-data';


/**
 * API methods to create, retrieve, update and delete users in Cumulocity IoT.
 *
 * > **&#9432; Info:** The Accept header should be provided in all POST/PUT requests, otherwise an empty response body will be returned.
 */
@Injectable({ providedIn: 'root' })
export class UsersService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getUserCollectionResource()` */
  static readonly GetUserCollectionResourcePath = '/user/{tenantId}/users';

  /**
   * Retrieve all users for a specific tenant.
   *
   * Retrieve all users for a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_CREATE
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserCollectionResource$Response(params: GetUserCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<UserCollection>> {
    return getUserCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all users for a specific tenant.
   *
   * Retrieve all users for a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_CREATE
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserCollectionResource(params: GetUserCollectionResource$Params, context?: HttpContext): Observable<UserCollection> {
    return this.getUserCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserCollection>): UserCollection => r.body)
    );
  }

  /** Path part for operation `postUserCollectionResource()` */
  static readonly PostUserCollectionResourcePath = '/user/{tenantId}/users';

  /**
   * Create a user for a specific tenant.
   *
   * Create a user for a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> has access to roles, groups, device permissions and applications
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUserCollectionResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.user+json` and handles request body of type `application/vnd.com.nsn.cumulocity.user+json`.
   */
  postUserCollectionResource$Response(params: PostUserCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return postUserCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a user for a specific tenant.
   *
   * Create a user for a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> has access to roles, groups, device permissions and applications
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postUserCollectionResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.user+json` and handles request body of type `application/vnd.com.nsn.cumulocity.user+json`.
   */
  postUserCollectionResource(params: PostUserCollectionResource$Params, context?: HttpContext): Observable<User> {
    return this.postUserCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `getUserResource()` */
  static readonly GetUserResourcePath = '/user/{tenantId}/users/{userId}';

  /**
   * Retrieve a specific user for a specific tenant.
   *
   * Retrieve a specific user (by a given user ID) for a specific tenant (by a given tenant ID).
   *
   * Users in the response are sorted by username in ascending order.
   * Only objects which the user is allowed to see are returned to the user.
   * The user password is never returned in a GET response. Authentication mechanism is provided by another interface.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> is parent of the user
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserResource$Response(params: GetUserResource$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return getUserResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a specific user for a specific tenant.
   *
   * Retrieve a specific user (by a given user ID) for a specific tenant (by a given tenant ID).
   *
   * Users in the response are sorted by username in ascending order.
   * Only objects which the user is allowed to see are returned to the user.
   * The user password is never returned in a GET response. Authentication mechanism is provided by another interface.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> is parent of the user
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserResource(params: GetUserResource$Params, context?: HttpContext): Observable<User> {
    return this.getUserResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `putUserResource()` */
  static readonly PutUserResourcePath = '/user/{tenantId}/users/{userId}';

  /**
   * Update a specific user for a specific tenant.
   *
   * Update a specific user (by a given user ID) for a specific tenant (by a given tenant ID).
   *
   * Any change in user's roles, device permissions and groups creates corresponding audit records with type "User" and activity "User updated" with information which properties have been changed.
   *
   * When the user is updated with changed permissions or groups, a corresponding audit record is created with type "User" and activity "User updated".
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN to update root users in a user hierarchy <b>OR</b> users that are not in any hierarchy<br/>
   * ROLE_USER_MANAGEMENT_ADMIN to update non-root users in a user hierarchy <b>AND</b> whose parents have access to roles, groups, device permissions and applications being assigned<br/>
   * ROLE_USER_MANAGEMENT_CREATE to update descendants of the current user in a user hierarchy <b>AND</b> whose parents have access to roles, groups, device permissions and applications being assigned
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putUserResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.user+json` and handles request body of type `application/vnd.com.nsn.cumulocity.user+json`.
   */
  putUserResource$Response(params: PutUserResource$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return putUserResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a specific user for a specific tenant.
   *
   * Update a specific user (by a given user ID) for a specific tenant (by a given tenant ID).
   *
   * Any change in user's roles, device permissions and groups creates corresponding audit records with type "User" and activity "User updated" with information which properties have been changed.
   *
   * When the user is updated with changed permissions or groups, a corresponding audit record is created with type "User" and activity "User updated".
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN to update root users in a user hierarchy <b>OR</b> users that are not in any hierarchy<br/>
   * ROLE_USER_MANAGEMENT_ADMIN to update non-root users in a user hierarchy <b>AND</b> whose parents have access to roles, groups, device permissions and applications being assigned<br/>
   * ROLE_USER_MANAGEMENT_CREATE to update descendants of the current user in a user hierarchy <b>AND</b> whose parents have access to roles, groups, device permissions and applications being assigned
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putUserResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.user+json` and handles request body of type `application/vnd.com.nsn.cumulocity.user+json`.
   */
  putUserResource(params: PutUserResource$Params, context?: HttpContext): Observable<User> {
    return this.putUserResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `deleteUserResource()` */
  static readonly DeleteUserResourcePath = '/user/{tenantId}/users/{userId}';

  /**
   * Delete a specific user for a specific tenant.
   *
   * Delete a specific user (by a given user ID) for a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> is parent of the user <b>AND</b> not the current user
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUserResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserResource$Response(params: DeleteUserResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteUserResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a specific user for a specific tenant.
   *
   * Delete a specific user (by a given user ID) for a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> is parent of the user <b>AND</b> not the current user
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteUserResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserResource(params: DeleteUserResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteUserResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `putUserChangePasswordResource()` */
  static readonly PutUserChangePasswordResourcePath = '/user/{tenantId}/users/{userId}/password';

  /**
   * Update a specific user's password of a specific tenant.
   *
   * Update a specific user's password (by a given user ID) of a specific tenant (by a given tenant ID).
   *
   * Changing the user's password creates a corresponding audit record of type "User" and activity "User updated", and specifying that the password has been changed.
   *
   * > **⚠️ Important:** If the tenant uses OAI-Secure authentication, the target user will be logged out.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN to update root users in a user hierarchy <b>OR</b> users that are not in any hierarchy<br/>
   * ROLE_USER_MANAGEMENT_ADMIN to update non-root users in a user hierarchy <b>AND</b> whose parents have access to assigned roles, groups, device permissions and applications<br/>
   * ROLE_USER_MANAGEMENT_CREATE to update descendants of the current user in a user hierarchy <b>AND</b> whose parents have access to assigned roles, groups, device permissions and applications
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putUserChangePasswordResource()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putUserChangePasswordResource$Response(params: PutUserChangePasswordResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return putUserChangePasswordResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a specific user's password of a specific tenant.
   *
   * Update a specific user's password (by a given user ID) of a specific tenant (by a given tenant ID).
   *
   * Changing the user's password creates a corresponding audit record of type "User" and activity "User updated", and specifying that the password has been changed.
   *
   * > **⚠️ Important:** If the tenant uses OAI-Secure authentication, the target user will be logged out.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN to update root users in a user hierarchy <b>OR</b> users that are not in any hierarchy<br/>
   * ROLE_USER_MANAGEMENT_ADMIN to update non-root users in a user hierarchy <b>AND</b> whose parents have access to assigned roles, groups, device permissions and applications<br/>
   * ROLE_USER_MANAGEMENT_CREATE to update descendants of the current user in a user hierarchy <b>AND</b> whose parents have access to assigned roles, groups, device permissions and applications
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putUserChangePasswordResource$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putUserChangePasswordResource(params: PutUserChangePasswordResource$Params, context?: HttpContext): Observable<void> {
    return this.putUserChangePasswordResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getUsersTfaResource()` */
  static readonly GetUsersTfaResourcePath = '/user/{tenantId}/users/{userId}/tfa';

  /**
   * Retrieve the TFA settings of a specific user.
   *
   * Retrieve the two-factor authentication settings for the specified user.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> (ROLE_USER_MANAGEMENT_CREATE <b>AND</b> is parent of the user) <b>OR</b> is the current user
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUsersTfaResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsersTfaResource$Response(params: GetUsersTfaResource$Params, context?: HttpContext): Observable<StrictHttpResponse<UserTfaData>> {
    return getUsersTfaResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve the TFA settings of a specific user.
   *
   * Retrieve the two-factor authentication settings for the specified user.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> (ROLE_USER_MANAGEMENT_CREATE <b>AND</b> is parent of the user) <b>OR</b> is the current user
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUsersTfaResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsersTfaResource(params: GetUsersTfaResource$Params, context?: HttpContext): Observable<UserTfaData> {
    return this.getUsersTfaResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserTfaData>): UserTfaData => r.body)
    );
  }

  /** Path part for operation `getUsersByNameResource()` */
  static readonly GetUsersByNameResourcePath = '/user/{tenantId}/userByName/{username}';

  /**
   * Retrieve a user by username in a specific tenant.
   *
   * Retrieve a user by username in a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> is parent of the user
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUsersByNameResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsersByNameResource$Response(params: GetUsersByNameResource$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return getUsersByNameResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a user by username in a specific tenant.
   *
   * Retrieve a user by username in a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> is parent of the user
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUsersByNameResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsersByNameResource(params: GetUsersByNameResource$Params, context?: HttpContext): Observable<User> {
    return this.getUsersByNameResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `getUserReferenceCollectionResource()` */
  static readonly GetUserReferenceCollectionResourcePath = '/user/{tenantId}/groups/{groupId}/users';

  /**
   * Retrieve the users of a specific user group of a specific tenant.
   *
   * Retrieve the users of a specific user group (by a given user group ID) of a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> (ROLE_USER_MANAGEMENT_CREATE <b>AND</b> has access to the user group)
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserReferenceCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserReferenceCollectionResource$Response(params: GetUserReferenceCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<UserReferenceCollection>> {
    return getUserReferenceCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve the users of a specific user group of a specific tenant.
   *
   * Retrieve the users of a specific user group (by a given user group ID) of a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> (ROLE_USER_MANAGEMENT_CREATE <b>AND</b> has access to the user group)
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserReferenceCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserReferenceCollectionResource(params: GetUserReferenceCollectionResource$Params, context?: HttpContext): Observable<UserReferenceCollection> {
    return this.getUserReferenceCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserReferenceCollection>): UserReferenceCollection => r.body)
    );
  }

  /** Path part for operation `postUserReferenceCollectionResource()` */
  static readonly PostUserReferenceCollectionResourcePath = '/user/{tenantId}/groups/{groupId}/users';

  /**
   * Add a user to a specific user group of a specific tenant.
   *
   * Add a user to a specific user group (by a given user group ID) of a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN to assign root users in a user hierarchy <b>OR</b> users that are not in any hierarchy to any group<br/>
   * ROLE_USER_MANAGEMENT_ADMIN to assign non-root users in a user hierarchy to groups accessible by the parent of assigned user<br/>
   * ROLE_USER_MANAGEMENT_CREATE to assign descendants of the current user in a user hierarchy to groups accessible by current user <b>AND</b> accessible by the parent of assigned user
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUserReferenceCollectionResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.userreference+json` and handles request body of type `application/vnd.com.nsn.cumulocity.userreference+json`.
   */
  postUserReferenceCollectionResource$Response(params: PostUserReferenceCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<UserReference>> {
    return postUserReferenceCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Add a user to a specific user group of a specific tenant.
   *
   * Add a user to a specific user group (by a given user group ID) of a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN to assign root users in a user hierarchy <b>OR</b> users that are not in any hierarchy to any group<br/>
   * ROLE_USER_MANAGEMENT_ADMIN to assign non-root users in a user hierarchy to groups accessible by the parent of assigned user<br/>
   * ROLE_USER_MANAGEMENT_CREATE to assign descendants of the current user in a user hierarchy to groups accessible by current user <b>AND</b> accessible by the parent of assigned user
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postUserReferenceCollectionResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.userreference+json` and handles request body of type `application/vnd.com.nsn.cumulocity.userreference+json`.
   */
  postUserReferenceCollectionResource(params: PostUserReferenceCollectionResource$Params, context?: HttpContext): Observable<UserReference> {
    return this.postUserReferenceCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserReference>): UserReference => r.body)
    );
  }

  /** Path part for operation `deleteUserReferenceResource()` */
  static readonly DeleteUserReferenceResourcePath = '/user/{tenantId}/groups/{groupId}/users/{userId}';

  /**
   * Remove a specific user from a specific user group of a specific tenant.
   *
   * Remove a specific user (by a given user ID) from a specific user group (by a given user group ID) of a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> is parent of the user <b>AND</b> is not the current user
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUserReferenceResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserReferenceResource$Response(params: DeleteUserReferenceResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteUserReferenceResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove a specific user from a specific user group of a specific tenant.
   *
   * Remove a specific user (by a given user ID) from a specific user group (by a given user group ID) of a specific tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN <b>OR</b> ROLE_USER_MANAGEMENT_CREATE <b>AND</b> is parent of the user <b>AND</b> is not the current user
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteUserReferenceResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserReferenceResource(params: DeleteUserReferenceResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteUserReferenceResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `postLogoutUser()` */
  static readonly PostLogoutUserPath = '/user/logout';

  /**
   * Terminate a user's session.
   *
   * After logging out, a user has to enter valid credentials again to get access to the platform.
   *
   * The request is responsible for removing cookies from the browser and invalidating internal platform access tokens.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postLogoutUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  postLogoutUser$Response(params?: PostLogoutUser$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return postLogoutUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Terminate a user's session.
   *
   * After logging out, a user has to enter valid credentials again to get access to the platform.
   *
   * The request is responsible for removing cookies from the browser and invalidating internal platform access tokens.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postLogoutUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postLogoutUser(params?: PostLogoutUser$Params, context?: HttpContext): Observable<void> {
    return this.postLogoutUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `postLogoutAllTenantUsers()` */
  static readonly PostLogoutAllTenantUsersPath = '/user/logout/{tenantId}/allUsers';

  /**
   * Terminate all tenant users' sessions and invalidate tokens.
   *
   * The user with the role ROLE_USER_MANAGEMENT_ADMIN is authorized to log out all tenant users with a toked based access.
   *
   * The request is responsible for terminating all tenant users' toked based sessions and invalidating internal platform access tokens.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN <b>AND</b> is the current tenant
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postLogoutAllTenantUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  postLogoutAllTenantUsers$Response(params: PostLogoutAllTenantUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return postLogoutAllTenantUsers(this.http, this.rootUrl, params, context);
  }

  /**
   * Terminate all tenant users' sessions and invalidate tokens.
   *
   * The user with the role ROLE_USER_MANAGEMENT_ADMIN is authorized to log out all tenant users with a toked based access.
   *
   * The request is responsible for terminating all tenant users' toked based sessions and invalidating internal platform access tokens.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN <b>AND</b> is the current tenant
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postLogoutAllTenantUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postLogoutAllTenantUsers(params: PostLogoutAllTenantUsers$Params, context?: HttpContext): Observable<void> {
    return this.postLogoutAllTenantUsers$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
