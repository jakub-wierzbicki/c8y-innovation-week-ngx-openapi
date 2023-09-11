/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApplicationVersion } from '../models/application-version';
import { ApplicationVersionCollection } from '../models/application-version-collection';
import { deleteApplicationVersionResource } from '../fn/application-versions/delete-application-version-resource';
import { DeleteApplicationVersionResource$Params } from '../fn/application-versions/delete-application-version-resource';
import { getApplicationVersionCollectionResource } from '../fn/application-versions/get-application-version-collection-resource';
import { GetApplicationVersionCollectionResource$Params } from '../fn/application-versions/get-application-version-collection-resource';
import { getApplicationVersionResource } from '../fn/application-versions/get-application-version-resource';
import { GetApplicationVersionResource$Params } from '../fn/application-versions/get-application-version-resource';
import { postApplicationVersionResource } from '../fn/application-versions/post-application-version-resource';
import { PostApplicationVersionResource$Params } from '../fn/application-versions/post-application-version-resource';
import { putApplicationVersionResource } from '../fn/application-versions/put-application-version-resource';
import { PutApplicationVersionResource$Params } from '../fn/application-versions/put-application-version-resource';


/**
 * API methods to retrieve, create, update and delete application versions.
 */
@Injectable({ providedIn: 'root' })
export class ApplicationVersionsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getApplicationVersionResource()` */
  static readonly GetApplicationVersionResourcePath = '/application/applications/{id}/versions?version=1.0';

  /**
   * Retrieve a specific version of an application.
   *
   * Retrieve the selected version of an application in your tenant. To select the version, use only the version or only the tag query parameter.
   * <section><h5>Required roles</h5> ROLE_APPLICATION_MANAGEMENT_READ </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApplicationVersionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationVersionResource$Response(params: GetApplicationVersionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ApplicationVersion>> {
    return getApplicationVersionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a specific version of an application.
   *
   * Retrieve the selected version of an application in your tenant. To select the version, use only the version or only the tag query parameter.
   * <section><h5>Required roles</h5> ROLE_APPLICATION_MANAGEMENT_READ </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getApplicationVersionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationVersionResource(params: GetApplicationVersionResource$Params, context?: HttpContext): Observable<ApplicationVersion> {
    return this.getApplicationVersionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApplicationVersion>): ApplicationVersion => r.body)
    );
  }

  /** Path part for operation `getApplicationVersionCollectionResource()` */
  static readonly GetApplicationVersionCollectionResourcePath = '/application/applications/{id}/versions';

  /**
   * Retrieve all versions of an application.
   *
   * Retrieve all versions of an application in your tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApplicationVersionCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationVersionCollectionResource$Response(params: GetApplicationVersionCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ApplicationVersionCollection>> {
    return getApplicationVersionCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all versions of an application.
   *
   * Retrieve all versions of an application in your tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getApplicationVersionCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationVersionCollectionResource(params: GetApplicationVersionCollectionResource$Params, context?: HttpContext): Observable<ApplicationVersionCollection> {
    return this.getApplicationVersionCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApplicationVersionCollection>): ApplicationVersionCollection => r.body)
    );
  }

  /** Path part for operation `postApplicationVersionResource()` */
  static readonly PostApplicationVersionResourcePath = '/application/applications/{id}/versions';

  /**
   * Create an application version.
   *
   * Create an application version in your tenant.
   *
   * Uploaded version and tags can only contain upper and lower case letters, integers and `.`,` + `,` -`. Other characters are prohibited.
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApplicationVersionResource()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postApplicationVersionResource$Response(params: PostApplicationVersionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ApplicationVersion>> {
    return postApplicationVersionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Create an application version.
   *
   * Create an application version in your tenant.
   *
   * Uploaded version and tags can only contain upper and lower case letters, integers and `.`,` + `,` -`. Other characters are prohibited.
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postApplicationVersionResource$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postApplicationVersionResource(params: PostApplicationVersionResource$Params, context?: HttpContext): Observable<ApplicationVersion> {
    return this.postApplicationVersionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApplicationVersion>): ApplicationVersion => r.body)
    );
  }

  /** Path part for operation `deleteApplicationVersionResource()` */
  static readonly DeleteApplicationVersionResourcePath = '/application/applications/{id}/versions';

  /**
   * Delete a specific version of an application.
   *
   * Delete a specific version of an application in your tenant, by a given tag or version.
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApplicationVersionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApplicationVersionResource$Response(params: DeleteApplicationVersionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteApplicationVersionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a specific version of an application.
   *
   * Delete a specific version of an application in your tenant, by a given tag or version.
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteApplicationVersionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApplicationVersionResource(params: DeleteApplicationVersionResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteApplicationVersionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `putApplicationVersionResource()` */
  static readonly PutApplicationVersionResourcePath = '/application/applications/{id}/versions/{version}';

  /**
   * Replace an application version's tags.
   *
   * Replaces the tags of a given application version in your tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putApplicationVersionResource()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putApplicationVersionResource$Response(params: PutApplicationVersionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ApplicationVersion>> {
    return putApplicationVersionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Replace an application version's tags.
   *
   * Replaces the tags of a given application version in your tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putApplicationVersionResource$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putApplicationVersionResource(params: PutApplicationVersionResource$Params, context?: HttpContext): Observable<ApplicationVersion> {
    return this.putApplicationVersionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApplicationVersion>): ApplicationVersion => r.body)
    );
  }

}
