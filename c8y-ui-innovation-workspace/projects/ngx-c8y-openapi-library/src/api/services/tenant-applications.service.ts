/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApplicationReference } from '../models/application-reference';
import { ApplicationReferenceCollection } from '../models/application-reference-collection';
import { deleteTenantApplicationReferenceResource } from '../fn/tenant-applications/delete-tenant-application-reference-resource';
import { DeleteTenantApplicationReferenceResource$Params } from '../fn/tenant-applications/delete-tenant-application-reference-resource';
import { getTenantApplicationReferenceCollectionResource } from '../fn/tenant-applications/get-tenant-application-reference-collection-resource';
import { GetTenantApplicationReferenceCollectionResource$Params } from '../fn/tenant-applications/get-tenant-application-reference-collection-resource';
import { postTenantApplicationReferenceCollectionResource } from '../fn/tenant-applications/post-tenant-application-reference-collection-resource';
import { PostTenantApplicationReferenceCollectionResource$Params } from '../fn/tenant-applications/post-tenant-application-reference-collection-resource';


/**
 * References to the tenant subscribed applications.
 * > **&#9432; Info:** The Accept header should be provided in all POST requests, otherwise an empty response body will be returned.
 */
@Injectable({ providedIn: 'root' })
export class TenantApplicationsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getTenantApplicationReferenceCollectionResource()` */
  static readonly GetTenantApplicationReferenceCollectionResourcePath = '/tenant/tenants/{tenantId}/applications';

  /**
   * Retrieve subscribed applications.
   *
   * Retrieve the tenant subscribed applications by a given tenant ID.
   *
   * <section><h5>Required roles</h5>
   * (ROLE_TENANT_MANAGEMENT_READ <b>OR</b> ROLE_TENANT_ADMIN) <b>AND</b> (the current tenant is its parent <b>OR</b> is the management tenant)
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTenantApplicationReferenceCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTenantApplicationReferenceCollectionResource$Response(params: GetTenantApplicationReferenceCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ApplicationReferenceCollection>> {
    return getTenantApplicationReferenceCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve subscribed applications.
   *
   * Retrieve the tenant subscribed applications by a given tenant ID.
   *
   * <section><h5>Required roles</h5>
   * (ROLE_TENANT_MANAGEMENT_READ <b>OR</b> ROLE_TENANT_ADMIN) <b>AND</b> (the current tenant is its parent <b>OR</b> is the management tenant)
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTenantApplicationReferenceCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTenantApplicationReferenceCollectionResource(params: GetTenantApplicationReferenceCollectionResource$Params, context?: HttpContext): Observable<ApplicationReferenceCollection> {
    return this.getTenantApplicationReferenceCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApplicationReferenceCollection>): ApplicationReferenceCollection => r.body)
    );
  }

  /** Path part for operation `postTenantApplicationReferenceCollectionResource()` */
  static readonly PostTenantApplicationReferenceCollectionResourcePath = '/tenant/tenants/{tenantId}/applications';

  /**
   * Subscribe to an application.
   *
   * Subscribe a tenant (by a given ID) to an application.
   *
   * <section><h5>Required roles</h5>
   * 1. the current tenant is application owner and has the role ROLE_APPLICATION_MANAGEMENT_ADMIN <b>OR</b><br>
   * 2. for applications that are not microservices, the current tenant is the management tenant or the parent of the application owner tenant, and the user has one of the follwoing roles: ROLE_TENANT_MANAGEMENT_ADMIN, ROLE_TENANT_MANAGEMENT_UPDATE <b>OR</b><br>
   * 3. for microservices, the current tenant is the management tenant or the parent of the application owner tenant, and the user has the role ROLE_TENANT_MANAGEMENT_ADMIN OR ROLE_TENANT_MANAGEMENT_UPDATE and one of following conditions is met:<br>
   * * the microservice has no manifest<br>
   * * the microservice version is supported<br>
   * * the current tenant is subscribed to 'feature-privileged-microservice-hosting'
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postTenantApplicationReferenceCollectionResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.applicationreference+json` and handles request body of type `application/vnd.com.nsn.cumulocity.applicationreference+json`.
   */
  postTenantApplicationReferenceCollectionResource$Response(params: PostTenantApplicationReferenceCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ApplicationReference>> {
    return postTenantApplicationReferenceCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Subscribe to an application.
   *
   * Subscribe a tenant (by a given ID) to an application.
   *
   * <section><h5>Required roles</h5>
   * 1. the current tenant is application owner and has the role ROLE_APPLICATION_MANAGEMENT_ADMIN <b>OR</b><br>
   * 2. for applications that are not microservices, the current tenant is the management tenant or the parent of the application owner tenant, and the user has one of the follwoing roles: ROLE_TENANT_MANAGEMENT_ADMIN, ROLE_TENANT_MANAGEMENT_UPDATE <b>OR</b><br>
   * 3. for microservices, the current tenant is the management tenant or the parent of the application owner tenant, and the user has the role ROLE_TENANT_MANAGEMENT_ADMIN OR ROLE_TENANT_MANAGEMENT_UPDATE and one of following conditions is met:<br>
   * * the microservice has no manifest<br>
   * * the microservice version is supported<br>
   * * the current tenant is subscribed to 'feature-privileged-microservice-hosting'
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postTenantApplicationReferenceCollectionResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.applicationreference+json` and handles request body of type `application/vnd.com.nsn.cumulocity.applicationreference+json`.
   */
  postTenantApplicationReferenceCollectionResource(params: PostTenantApplicationReferenceCollectionResource$Params, context?: HttpContext): Observable<ApplicationReference> {
    return this.postTenantApplicationReferenceCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApplicationReference>): ApplicationReference => r.body)
    );
  }

  /** Path part for operation `deleteTenantApplicationReferenceResource()` */
  static readonly DeleteTenantApplicationReferenceResourcePath = '/tenant/tenants/{tenantId}/applications/{applicationId}';

  /**
   * Unsubscribe from an application.
   *
   * Unsubscribe a tenant (by a given tenant ID) from an application (by a given application ID).
   *
   * <section><h5>Required roles</h5>
   * (ROLE_APPLICATION_MANAGEMENT_ADMIN <b>AND</b> is the application owner <b>AND</b> is the current tenant) <b>OR</b><br>
   * ((ROLE_TENANT_MANAGEMENT_ADMIN <b>OR</b> ROLE_TENANT_MANAGEMENT_UPDATE) <b>AND</b> (the current tenant is its parent <b>OR</b> is the management tenant))
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTenantApplicationReferenceResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTenantApplicationReferenceResource$Response(params: DeleteTenantApplicationReferenceResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteTenantApplicationReferenceResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Unsubscribe from an application.
   *
   * Unsubscribe a tenant (by a given tenant ID) from an application (by a given application ID).
   *
   * <section><h5>Required roles</h5>
   * (ROLE_APPLICATION_MANAGEMENT_ADMIN <b>AND</b> is the application owner <b>AND</b> is the current tenant) <b>OR</b><br>
   * ((ROLE_TENANT_MANAGEMENT_ADMIN <b>OR</b> ROLE_TENANT_MANAGEMENT_UPDATE) <b>AND</b> (the current tenant is its parent <b>OR</b> is the management tenant))
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteTenantApplicationReferenceResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTenantApplicationReferenceResource(params: DeleteTenantApplicationReferenceResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteTenantApplicationReferenceResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
