/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApplicationApiResource } from '../models/application-api-resource';
import { getApplicationManagementApiResource } from '../fn/application-api/get-application-management-api-resource';
import { GetApplicationManagementApiResource$Params } from '../fn/application-api/get-application-management-api-resource';


/**
 * The application API resource returns URIs and URI templates to collections of applications so that all applications with a particular name and all applications owned by particular tenant can be queried.
 */
@Injectable({ providedIn: 'root' })
export class ApplicationApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getApplicationManagementApiResource()` */
  static readonly GetApplicationManagementApiResourcePath = '/application';

  /**
   * Retrieve URIs to collections of applications.
   *
   * Retrieve URIs and URI templates to collections of applications.
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApplicationManagementApiResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationManagementApiResource$Response(params?: GetApplicationManagementApiResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ApplicationApiResource>> {
    return getApplicationManagementApiResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve URIs to collections of applications.
   *
   * Retrieve URIs and URI templates to collections of applications.
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getApplicationManagementApiResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationManagementApiResource(params?: GetApplicationManagementApiResource$Params, context?: HttpContext): Observable<ApplicationApiResource> {
    return this.getApplicationManagementApiResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApplicationApiResource>): ApplicationApiResource => r.body)
    );
  }

}
