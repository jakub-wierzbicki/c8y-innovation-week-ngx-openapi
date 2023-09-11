/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { BootstrapUser } from '../models/bootstrap-user';
import { getApplicationUserRepresentation } from '../fn/bootstrap-user/get-application-user-representation';
import { GetApplicationUserRepresentation$Params } from '../fn/bootstrap-user/get-application-user-representation';


/**
 * API methods to retrieve the bootstrap user of an application.
 */
@Injectable({ providedIn: 'root' })
export class BootstrapUserService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getApplicationUserRepresentation()` */
  static readonly GetApplicationUserRepresentationPath = '/application/applications/{id}/bootstrapUser';

  /**
   * Retrieve the bootstrap user for a specific application.
   *
   * Retrieve the bootstrap user for a specific application (by a given ID).
   *
   * This only works for microservice applications.
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApplicationUserRepresentation()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationUserRepresentation$Response(params: GetApplicationUserRepresentation$Params, context?: HttpContext): Observable<StrictHttpResponse<BootstrapUser>> {
    return getApplicationUserRepresentation(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve the bootstrap user for a specific application.
   *
   * Retrieve the bootstrap user for a specific application (by a given ID).
   *
   * This only works for microservice applications.
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getApplicationUserRepresentation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationUserRepresentation(params: GetApplicationUserRepresentation$Params, context?: HttpContext): Observable<BootstrapUser> {
    return this.getApplicationUserRepresentation$Response(params, context).pipe(
      map((r: StrictHttpResponse<BootstrapUser>): BootstrapUser => r.body)
    );
  }

}
