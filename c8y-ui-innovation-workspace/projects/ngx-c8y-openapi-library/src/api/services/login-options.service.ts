/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AuthConfig } from '../models/auth-config';
import { deleteLoginOptionResource } from '../fn/login-options/delete-login-option-resource';
import { DeleteLoginOptionResource$Params } from '../fn/login-options/delete-login-option-resource';
import { getLoginOptionCollectionResource } from '../fn/login-options/get-login-option-collection-resource';
import { GetLoginOptionCollectionResource$Params } from '../fn/login-options/get-login-option-collection-resource';
import { getLoginOptionResource } from '../fn/login-options/get-login-option-resource';
import { GetLoginOptionResource$Params } from '../fn/login-options/get-login-option-resource';
import { LoginOptionCollection } from '../models/login-option-collection';
import { postLoginOptionCollectionResource } from '../fn/login-options/post-login-option-collection-resource';
import { PostLoginOptionCollectionResource$Params } from '../fn/login-options/post-login-option-collection-resource';
import { putAccessLoginOptionResource } from '../fn/login-options/put-access-login-option-resource';
import { PutAccessLoginOptionResource$Params } from '../fn/login-options/put-access-login-option-resource';
import { putLoginOptionResource } from '../fn/login-options/put-login-option-resource';
import { PutLoginOptionResource$Params } from '../fn/login-options/put-login-option-resource';


/**
 * API methods to retrieve the login options configured in the tenant.
 *
 * More detailed information about the parameters and their meaning can be found in [Administration > Changing settings](https://cumulocity.com/guides/users-guide/administration/#changing-settings) in the *Users guide*.
 * > **&#9432; Info:** If OAuth external is the only login option shown in the response, the user will be automatically redirected to the SSO login screen.
 */
@Injectable({ providedIn: 'root' })
export class LoginOptionsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getLoginOptionCollectionResource()` */
  static readonly GetLoginOptionCollectionResourcePath = '/tenant/loginOptions';

  /**
   * Retrieve all login options.
   *
   * Retrieve all login options available in the tenant.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLoginOptionCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLoginOptionCollectionResource$Response(params?: GetLoginOptionCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<LoginOptionCollection>> {
    return getLoginOptionCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all login options.
   *
   * Retrieve all login options available in the tenant.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getLoginOptionCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLoginOptionCollectionResource(params?: GetLoginOptionCollectionResource$Params, context?: HttpContext): Observable<LoginOptionCollection> {
    return this.getLoginOptionCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<LoginOptionCollection>): LoginOptionCollection => r.body)
    );
  }

  /** Path part for operation `postLoginOptionCollectionResource()` */
  static readonly PostLoginOptionCollectionResourcePath = '/tenant/loginOptions';

  /**
   * Create a login option.
   *
   * Create an authentication configuration on your tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_TENANT_ADMIN <b>OR</b> ROLE_TENANT_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postLoginOptionCollectionResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.authconfig+json` and handles request body of type `application/vnd.com.nsn.cumulocity.authconfig+json`.
   */
  postLoginOptionCollectionResource$Response(params: PostLoginOptionCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthConfig>> {
    return postLoginOptionCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a login option.
   *
   * Create an authentication configuration on your tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_TENANT_ADMIN <b>OR</b> ROLE_TENANT_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postLoginOptionCollectionResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.authconfig+json` and handles request body of type `application/vnd.com.nsn.cumulocity.authconfig+json`.
   */
  postLoginOptionCollectionResource(params: PostLoginOptionCollectionResource$Params, context?: HttpContext): Observable<AuthConfig> {
    return this.postLoginOptionCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthConfig>): AuthConfig => r.body)
    );
  }

  /** Path part for operation `getLoginOptionResource()` */
  static readonly GetLoginOptionResourcePath = '/tenant/loginOptions/{typeOrId}';

  /**
   * Retrieve a specific login option.
   *
   * Retrieve a specific login option in the tenant by the given type or ID.
   *
   * <section><h5>Required roles</h5>
   * ((ROLE_TENANT_ADMIN <b>OR</b> ROLE_TENANT_MANAGEMENT_ADMIN <b>OR</b> ROLE_USER_MANAGEMENT_OWN_ADMIN <b>OR</b> ROLE_USER_MANAGEMENT_CREATE)
   * <b>AND</b> tenant access to login option is not restricted by management tenant)
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLoginOptionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLoginOptionResource$Response(params: GetLoginOptionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthConfig>> {
    return getLoginOptionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a specific login option.
   *
   * Retrieve a specific login option in the tenant by the given type or ID.
   *
   * <section><h5>Required roles</h5>
   * ((ROLE_TENANT_ADMIN <b>OR</b> ROLE_TENANT_MANAGEMENT_ADMIN <b>OR</b> ROLE_USER_MANAGEMENT_OWN_ADMIN <b>OR</b> ROLE_USER_MANAGEMENT_CREATE)
   * <b>AND</b> tenant access to login option is not restricted by management tenant)
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getLoginOptionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLoginOptionResource(params: GetLoginOptionResource$Params, context?: HttpContext): Observable<AuthConfig> {
    return this.getLoginOptionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthConfig>): AuthConfig => r.body)
    );
  }

  /** Path part for operation `putLoginOptionResource()` */
  static readonly PutLoginOptionResourcePath = '/tenant/loginOptions/{typeOrId}';

  /**
   * Update a specific login option.
   *
   * Update a specific login option in the tenant by a given type or ID.
   *
   * <section><h5>Required roles</h5>
   * ((ROLE_TENANT_ADMIN <b>OR</b> ROLE_TENANT_MANAGEMENT_ADMIN)
   * <b>AND</b> tenant access to login option is not restricted by management tenant)
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putLoginOptionResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.authconfig+json` and handles request body of type `application/vnd.com.nsn.cumulocity.authconfig+json`.
   */
  putLoginOptionResource$Response(params: PutLoginOptionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthConfig>> {
    return putLoginOptionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a specific login option.
   *
   * Update a specific login option in the tenant by a given type or ID.
   *
   * <section><h5>Required roles</h5>
   * ((ROLE_TENANT_ADMIN <b>OR</b> ROLE_TENANT_MANAGEMENT_ADMIN)
   * <b>AND</b> tenant access to login option is not restricted by management tenant)
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putLoginOptionResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.authconfig+json` and handles request body of type `application/vnd.com.nsn.cumulocity.authconfig+json`.
   */
  putLoginOptionResource(params: PutLoginOptionResource$Params, context?: HttpContext): Observable<AuthConfig> {
    return this.putLoginOptionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthConfig>): AuthConfig => r.body)
    );
  }

  /** Path part for operation `deleteLoginOptionResource()` */
  static readonly DeleteLoginOptionResourcePath = '/tenant/loginOptions/{typeOrId}';

  /**
   * Delete a specific login option.
   *
   * Delete a specific login option in the tenant by a given type or ID.
   *
   * <section><h5>Required roles</h5>
   * ((ROLE_TENANT_ADMIN <b>OR</b> ROLE_TENANT_MANAGEMENT_ADMIN)
   * <b>AND</b> tenant access to login option is not restricted by management tenant)
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteLoginOptionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteLoginOptionResource$Response(params: DeleteLoginOptionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteLoginOptionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a specific login option.
   *
   * Delete a specific login option in the tenant by a given type or ID.
   *
   * <section><h5>Required roles</h5>
   * ((ROLE_TENANT_ADMIN <b>OR</b> ROLE_TENANT_MANAGEMENT_ADMIN)
   * <b>AND</b> tenant access to login option is not restricted by management tenant)
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteLoginOptionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteLoginOptionResource(params: DeleteLoginOptionResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteLoginOptionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `putAccessLoginOptionResource()` */
  static readonly PutAccessLoginOptionResourcePath = '/tenant/loginOptions/{typeOrId}/restrict';

  /**
   * Update a tenant's access to the login option.
   *
   * Update the tenant's access to the authentication configuration.
   *
   * <section><h5>Required roles</h5>
   * ROLE_TENANT_MANAGEMENT_ADMIN <b>AND</b> is the management tenant
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putAccessLoginOptionResource()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putAccessLoginOptionResource$Response(params: PutAccessLoginOptionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthConfig>> {
    return putAccessLoginOptionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a tenant's access to the login option.
   *
   * Update the tenant's access to the authentication configuration.
   *
   * <section><h5>Required roles</h5>
   * ROLE_TENANT_MANAGEMENT_ADMIN <b>AND</b> is the management tenant
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putAccessLoginOptionResource$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putAccessLoginOptionResource(params: PutAccessLoginOptionResource$Params, context?: HttpContext): Observable<AuthConfig> {
    return this.putAccessLoginOptionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthConfig>): AuthConfig => r.body)
    );
  }

}
