/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CurrentTenant } from '../models/current-tenant';
import { deleteTenantResource } from '../fn/tenants/delete-tenant-resource';
import { DeleteTenantResource$Params } from '../fn/tenants/delete-tenant-resource';
import { getCurrentTenantResource } from '../fn/tenants/get-current-tenant-resource';
import { GetCurrentTenantResource$Params } from '../fn/tenants/get-current-tenant-resource';
import { getTenantCollectionResource } from '../fn/tenants/get-tenant-collection-resource';
import { GetTenantCollectionResource$Params } from '../fn/tenants/get-tenant-collection-resource';
import { getTenantResource } from '../fn/tenants/get-tenant-resource';
import { GetTenantResource$Params } from '../fn/tenants/get-tenant-resource';
import { getTenantsTfaResourceTfa } from '../fn/tenants/get-tenants-tfa-resource-tfa';
import { GetTenantsTfaResourceTfa$Params } from '../fn/tenants/get-tenants-tfa-resource-tfa';
import { postTenantCollectionResource } from '../fn/tenants/post-tenant-collection-resource';
import { PostTenantCollectionResource$Params } from '../fn/tenants/post-tenant-collection-resource';
import { putTenantResource } from '../fn/tenants/put-tenant-resource';
import { PutTenantResource$Params } from '../fn/tenants/put-tenant-resource';
import { Tenant } from '../models/tenant';
import { TenantCollection } from '../models/tenant-collection';
import { TenantTfaData } from '../models/tenant-tfa-data';


/**
 * Tenants are physically separated data spaces with a separate URL, with own users, a separate application management and no sharing of data by default. Users in a single tenant by default share the same URL and the same data space.
 *
 * ### Tenant ID and tenant domain
 *
 * The **tenant ID** is a unique identifier across all tenants in Cumulocity IoT and it follows the format t&lt;number>, for example, t07007007. It is possible to specify the tenant ID while creating a subtenant, but the ID cannot be changed after creation. If the ID is not specified (recommended), it gets auto-generated for all tenant types.
 *
 * The location where a tenant can be accessed is called **tenant domain**, for example, _mytenant.cumulocity.com_. It needs to be unique across all tenants and it can be changed after tenant creation.
 * The tenant domain may contain only lowercase letters, digits and hyphens. It must start with a lowercase letter, hyphens are only allowed in the middle, and the minimum length is 2 characters. Note that the usage of underscore characters is deprecated but still possible for backward compatibility reasons.
 *
 * In general, the tenant domain should be used for communication if it is known.
 *
 * > **⚠️ Important:** For support user access, the tenant ID must be used and not the tenant domain.
 *
 * See [Tenant > Current tenant](#operation/getCurrentTenantResource) for information on how to retrieve the tenant ID and domain of the current tenant via the API.
 *
 * In the UI, the tenant ID is displayed in the user dropdown menu, see [Getting started > User options and settings](https://cumulocity.com/guides/users-guide/getting-started/#user-settings) in the User guide.
 *
 * ### Access rights and permissions
 *
 * There are two types of roles in Cumulocity IoT – global and inventory. Global roles are applied at the tenant level. In a Role Based Access Control (RBAC) approach you must use the inventory roles in order to have the correct level of separation. Apart from some global permissions (like "own user management") customer users will not be assigned any roles. Inventory roles must be created, or the default roles used, and then assigned to the user in combination with the assets the roles apply to. This needs to be done at least once for each customer.
 *
 * In a multi-tenancy approach, as the tenant is completely separated from all other customers you do not necessarily need to be involved in setting up the access rights of the customer. If customers are given administration rights for their tenants, they can set up permissions on their own. It is not possible for customers to have any sight or knowledge of other customers.
 *
 * In the RBAC approach, managing access is the most complicated part because a misconfiguration can potentially give customers access to data that they must not see, like other customers' data. The inventory roles allow you to granularly define access for only certain parts of data, but they don't protect you from accidental misconfigurations. A limitation here is that customers won't be able to create their own roles.
 *
 * For more details, see [RBAC versus multi-tenancy approach](https://cumulocity.com/guides/concepts/tenant-hierarchy/#comparison).
 *
 * > **&#9432; Info:** The Accept header should be provided in all POST/PUT requests, otherwise an empty response body will be returned.
 */
@Injectable({ providedIn: 'root' })
export class TenantsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getTenantCollectionResource()` */
  static readonly GetTenantCollectionResourcePath = '/tenant/tenants';

  /**
   * Retrieve all subtenants.
   *
   * Retrieve all subtenants of the current tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_TENANT_MANAGEMENT_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTenantCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTenantCollectionResource$Response(params?: GetTenantCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<TenantCollection>> {
    return getTenantCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all subtenants.
   *
   * Retrieve all subtenants of the current tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_TENANT_MANAGEMENT_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTenantCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTenantCollectionResource(params?: GetTenantCollectionResource$Params, context?: HttpContext): Observable<TenantCollection> {
    return this.getTenantCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<TenantCollection>): TenantCollection => r.body)
    );
  }

  /** Path part for operation `postTenantCollectionResource()` */
  static readonly PostTenantCollectionResourcePath = '/tenant/tenants';

  /**
   * Create a tenant.
   *
   * Create a subtenant for the current tenant.
   *
   * <section><h5>Required roles</h5>
   * (ROLE_TENANT_MANAGEMENT_ADMIN <b>OR</b> ROLE_TENANT_MANAGEMENT_CREATE) <b>AND</b> the current tenant is allowed to create subtenants
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postTenantCollectionResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.tenant+json` and handles request body of type `application/vnd.com.nsn.cumulocity.tenant+json`.
   */
  postTenantCollectionResource$Response(params: PostTenantCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Tenant>> {
    return postTenantCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a tenant.
   *
   * Create a subtenant for the current tenant.
   *
   * <section><h5>Required roles</h5>
   * (ROLE_TENANT_MANAGEMENT_ADMIN <b>OR</b> ROLE_TENANT_MANAGEMENT_CREATE) <b>AND</b> the current tenant is allowed to create subtenants
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postTenantCollectionResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.tenant+json` and handles request body of type `application/vnd.com.nsn.cumulocity.tenant+json`.
   */
  postTenantCollectionResource(params: PostTenantCollectionResource$Params, context?: HttpContext): Observable<Tenant> {
    return this.postTenantCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Tenant>): Tenant => r.body)
    );
  }

  /** Path part for operation `getCurrentTenantResource()` */
  static readonly GetCurrentTenantResourcePath = '/tenant/currentTenant';

  /**
   * Retrieve the current tenant.
   *
   * Retrieve information about the current tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_OWN_READ <b>OR</b> ROLE_SYSTEM
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCurrentTenantResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentTenantResource$Response(params?: GetCurrentTenantResource$Params, context?: HttpContext): Observable<StrictHttpResponse<CurrentTenant>> {
    return getCurrentTenantResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve the current tenant.
   *
   * Retrieve information about the current tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_OWN_READ <b>OR</b> ROLE_SYSTEM
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCurrentTenantResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentTenantResource(params?: GetCurrentTenantResource$Params, context?: HttpContext): Observable<CurrentTenant> {
    return this.getCurrentTenantResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<CurrentTenant>): CurrentTenant => r.body)
    );
  }

  /** Path part for operation `getTenantResource()` */
  static readonly GetTenantResourcePath = '/tenant/tenants/{tenantId}';

  /**
   * Retrieve a specific tenant.
   *
   * Retrieve a specific tenant by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_TENANT_MANAGEMENT_READ <b>AND</b> (the current tenant is its parent <b>OR</b> is the management tenant)
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTenantResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTenantResource$Response(params: GetTenantResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Tenant>> {
    return getTenantResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a specific tenant.
   *
   * Retrieve a specific tenant by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_TENANT_MANAGEMENT_READ <b>AND</b> (the current tenant is its parent <b>OR</b> is the management tenant)
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTenantResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTenantResource(params: GetTenantResource$Params, context?: HttpContext): Observable<Tenant> {
    return this.getTenantResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Tenant>): Tenant => r.body)
    );
  }

  /** Path part for operation `putTenantResource()` */
  static readonly PutTenantResourcePath = '/tenant/tenants/{tenantId}';

  /**
   * Update a specific tenant.
   *
   * Update a specific tenant by a given ID.
   *
   * <section><h5>Required roles</h5>
   * (ROLE_TENANT_MANAGEMENT_ADMIN <b>OR</b> ROLE_TENANT_MANAGEMENT_UPDATE) <b>AND</b><br>
   * ((the current tenant is its parent <b>AND</b> the current tenant is allowed to create subtenants) <b>OR</b> is the management tenant)
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putTenantResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.tenant+json` and handles request body of type `application/vnd.com.nsn.cumulocity.tenant+json`.
   */
  putTenantResource$Response(params: PutTenantResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Tenant>> {
    return putTenantResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a specific tenant.
   *
   * Update a specific tenant by a given ID.
   *
   * <section><h5>Required roles</h5>
   * (ROLE_TENANT_MANAGEMENT_ADMIN <b>OR</b> ROLE_TENANT_MANAGEMENT_UPDATE) <b>AND</b><br>
   * ((the current tenant is its parent <b>AND</b> the current tenant is allowed to create subtenants) <b>OR</b> is the management tenant)
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putTenantResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.tenant+json` and handles request body of type `application/vnd.com.nsn.cumulocity.tenant+json`.
   */
  putTenantResource(params: PutTenantResource$Params, context?: HttpContext): Observable<Tenant> {
    return this.putTenantResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Tenant>): Tenant => r.body)
    );
  }

  /** Path part for operation `deleteTenantResource()` */
  static readonly DeleteTenantResourcePath = '/tenant/tenants/{tenantId}';

  /**
   * Remove a specific tenant.
   *
   * Remove a specific tenant by a given ID.
   *
   * > **⚠️ Important:** Deleting a subtenant cannot be reverted. For security reasons, it is therefore only available in the management tenant. You cannot delete tenants from any tenant but the management tenant.
   * >
   * > Administrators in Enterprise Tenants are only allowed to suspend active subtenants, but not to delete them.
   *
   * <section><h5>Required roles</h5>
   * ROLE_TENANT_MANAGEMENT_ADMIN <b>AND</b> is the management tenant
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTenantResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTenantResource$Response(params: DeleteTenantResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteTenantResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove a specific tenant.
   *
   * Remove a specific tenant by a given ID.
   *
   * > **⚠️ Important:** Deleting a subtenant cannot be reverted. For security reasons, it is therefore only available in the management tenant. You cannot delete tenants from any tenant but the management tenant.
   * >
   * > Administrators in Enterprise Tenants are only allowed to suspend active subtenants, but not to delete them.
   *
   * <section><h5>Required roles</h5>
   * ROLE_TENANT_MANAGEMENT_ADMIN <b>AND</b> is the management tenant
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteTenantResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTenantResource(params: DeleteTenantResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteTenantResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getTenantsTfaResourceTfa()` */
  static readonly GetTenantsTfaResourceTfaPath = '/tenant/tenants/{tenantId}/tfa';

  /**
   * Retrieve TFA settings of a specific tenant.
   *
   * Retrieve the two-factor authentication settings of a specific tenant by a given tenant ID.
   *
   * <section><h5>Required roles</h5>
   * ((ROLE_TENANT_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_READ) <b>AND</b> (the current tenant is its parent <b>OR</b> is the management tenant <b>OR</b> the current user belongs to the tenant)) <b>OR</b> (the user belongs to the tenant <b>AND</b> ROLE_USER_MANAGEMENT_OWN_READ)
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTenantsTfaResourceTfa()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTenantsTfaResourceTfa$Response(params: GetTenantsTfaResourceTfa$Params, context?: HttpContext): Observable<StrictHttpResponse<TenantTfaData>> {
    return getTenantsTfaResourceTfa(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve TFA settings of a specific tenant.
   *
   * Retrieve the two-factor authentication settings of a specific tenant by a given tenant ID.
   *
   * <section><h5>Required roles</h5>
   * ((ROLE_TENANT_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_READ) <b>AND</b> (the current tenant is its parent <b>OR</b> is the management tenant <b>OR</b> the current user belongs to the tenant)) <b>OR</b> (the user belongs to the tenant <b>AND</b> ROLE_USER_MANAGEMENT_OWN_READ)
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTenantsTfaResourceTfa$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTenantsTfaResourceTfa(params: GetTenantsTfaResourceTfa$Params, context?: HttpContext): Observable<TenantTfaData> {
    return this.getTenantsTfaResourceTfa$Response(params, context).pipe(
      map((r: StrictHttpResponse<TenantTfaData>): TenantTfaData => r.body)
    );
  }

}
