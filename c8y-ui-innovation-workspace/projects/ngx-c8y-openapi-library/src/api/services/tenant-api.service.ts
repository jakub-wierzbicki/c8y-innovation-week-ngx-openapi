/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getTenantsApiResource } from '../fn/tenant-api/get-tenants-api-resource';
import { GetTenantsApiResource$Params } from '../fn/tenant-api/get-tenants-api-resource';
import { TenantApiResource } from '../models/tenant-api-resource';


/**
 * The tenant API resource returns URIs and URI templates to collections of tenants, so that all tenants can be filtered and retrieved.
 */
@Injectable({ providedIn: 'root' })
export class TenantApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getTenantsApiResource()` */
  static readonly GetTenantsApiResourcePath = '/tenant';

  /**
   * Retrieve URIs to collections of tenants.
   *
   * Retrieve URIs and URI templates to collections of tenants and options.
   *
   * <section><h5>Required roles</h5>
   * ROLE_TENANT_MANAGEMENT_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTenantsApiResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTenantsApiResource$Response(params?: GetTenantsApiResource$Params, context?: HttpContext): Observable<StrictHttpResponse<TenantApiResource>> {
    return getTenantsApiResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve URIs to collections of tenants.
   *
   * Retrieve URIs and URI templates to collections of tenants and options.
   *
   * <section><h5>Required roles</h5>
   * ROLE_TENANT_MANAGEMENT_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTenantsApiResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTenantsApiResource(params?: GetTenantsApiResource$Params, context?: HttpContext): Observable<TenantApiResource> {
    return this.getTenantsApiResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<TenantApiResource>): TenantApiResource => r.body)
    );
  }

}
