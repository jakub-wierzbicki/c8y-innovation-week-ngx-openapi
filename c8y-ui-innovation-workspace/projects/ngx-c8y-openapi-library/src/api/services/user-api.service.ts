/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getUserApiResource } from '../fn/user-api/get-user-api-resource';
import { GetUserApiResource$Params } from '../fn/user-api/get-user-api-resource';
import { UserApiResource } from '../models/user-api-resource';


/**
 * The user API resource returns URIs and URI templates to collections of users, groups, and roles, so that they can be queried.
 */
@Injectable({ providedIn: 'root' })
export class UserApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getUserApiResource()` */
  static readonly GetUserApiResourcePath = '/user';

  /**
   * Retrieve URIs to collections of users, groups and roles.
   *
   * Retrieve URIs and URI templates to collections of users, groups, and roles, so that they can be queried.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_CREATE
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserApiResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserApiResource$Response(params?: GetUserApiResource$Params, context?: HttpContext): Observable<StrictHttpResponse<UserApiResource>> {
    return getUserApiResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve URIs to collections of users, groups and roles.
   *
   * Retrieve URIs and URI templates to collections of users, groups, and roles, so that they can be queried.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_CREATE
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserApiResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserApiResource(params?: GetUserApiResource$Params, context?: HttpContext): Observable<UserApiResource> {
    return this.getUserApiResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserApiResource>): UserApiResource => r.body)
    );
  }

}
