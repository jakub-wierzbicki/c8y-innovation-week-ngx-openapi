/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Application } from '../models/application';
import { ApplicationBinaries } from '../models/application-binaries';
import { deleteBinaryApplicationContentResourceById } from '../fn/application-binaries/delete-binary-application-content-resource-by-id';
import { DeleteBinaryApplicationContentResourceById$Params } from '../fn/application-binaries/delete-binary-application-content-resource-by-id';
import { getBinaryApplicationContentResource } from '../fn/application-binaries/get-binary-application-content-resource';
import { GetBinaryApplicationContentResource$Params } from '../fn/application-binaries/get-binary-application-content-resource';
import { getBinaryApplicationContentResourceById } from '../fn/application-binaries/get-binary-application-content-resource-by-id';
import { GetBinaryApplicationContentResourceById$Params } from '../fn/application-binaries/get-binary-application-content-resource-by-id';
import { postBinaryApplicationContentResource } from '../fn/application-binaries/post-binary-application-content-resource';
import { PostBinaryApplicationContentResource$Params } from '../fn/application-binaries/post-binary-application-content-resource';


/**
 * An API method to upload an application binary. It is a deployable microservice or web application.
 */
@Injectable({ providedIn: 'root' })
export class ApplicationBinariesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getBinaryApplicationContentResource()` */
  static readonly GetBinaryApplicationContentResourcePath = '/application/applications/{id}/binaries';

  /**
   * Retrieve all application attachments.
   *
   * Retrieve all application attachments.
   * This method is not supported by microservice applications.
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBinaryApplicationContentResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBinaryApplicationContentResource$Response(params: GetBinaryApplicationContentResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ApplicationBinaries>> {
    return getBinaryApplicationContentResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all application attachments.
   *
   * Retrieve all application attachments.
   * This method is not supported by microservice applications.
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBinaryApplicationContentResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBinaryApplicationContentResource(params: GetBinaryApplicationContentResource$Params, context?: HttpContext): Observable<ApplicationBinaries> {
    return this.getBinaryApplicationContentResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApplicationBinaries>): ApplicationBinaries => r.body)
    );
  }

  /** Path part for operation `postBinaryApplicationContentResource()` */
  static readonly PostBinaryApplicationContentResourcePath = '/application/applications/{id}/binaries';

  /**
   * Upload an application attachment.
   *
   * Upload an application attachment (by a given application ID).
   *
   * For the applications of type “microservice” and “web application” to be available for Cumulocity IoT platform users, an attachment ZIP file must be uploaded.
   *
   * For a microservice application, the ZIP file must consist of:
   *
   * * cumulocity.json - file describing the deployment
   * * image.tar - executable Docker image
   *
   * For a web application, the ZIP file must include an index.html file in the root directory.
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_ADMIN <b>AND</b> tenant is the owner of the application
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postBinaryApplicationContentResource()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postBinaryApplicationContentResource$Response(params: PostBinaryApplicationContentResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Application>> {
    return postBinaryApplicationContentResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Upload an application attachment.
   *
   * Upload an application attachment (by a given application ID).
   *
   * For the applications of type “microservice” and “web application” to be available for Cumulocity IoT platform users, an attachment ZIP file must be uploaded.
   *
   * For a microservice application, the ZIP file must consist of:
   *
   * * cumulocity.json - file describing the deployment
   * * image.tar - executable Docker image
   *
   * For a web application, the ZIP file must include an index.html file in the root directory.
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_ADMIN <b>AND</b> tenant is the owner of the application
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postBinaryApplicationContentResource$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postBinaryApplicationContentResource(params: PostBinaryApplicationContentResource$Params, context?: HttpContext): Observable<Application> {
    return this.postBinaryApplicationContentResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Application>): Application => r.body)
    );
  }

  /** Path part for operation `getBinaryApplicationContentResourceById()` */
  static readonly GetBinaryApplicationContentResourceByIdPath = '/application/applications/{id}/binaries/{binaryId}';

  /**
   * Retrieve a specific application attachment.
   *
   * Retrieve a specific application attachment (by a given application ID and a given binary ID).
   * This method is not supported by microservice applications.
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBinaryApplicationContentResourceById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBinaryApplicationContentResourceById$Response(params: GetBinaryApplicationContentResourceById$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return getBinaryApplicationContentResourceById(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a specific application attachment.
   *
   * Retrieve a specific application attachment (by a given application ID and a given binary ID).
   * This method is not supported by microservice applications.
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBinaryApplicationContentResourceById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBinaryApplicationContentResourceById(params: GetBinaryApplicationContentResourceById$Params, context?: HttpContext): Observable<Blob> {
    return this.getBinaryApplicationContentResourceById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `deleteBinaryApplicationContentResourceById()` */
  static readonly DeleteBinaryApplicationContentResourceByIdPath = '/application/applications/{id}/binaries/{binaryId}';

  /**
   * Delete a specific application attachment.
   *
   * Delete  a specific application attachment (by a given application ID and a given binary ID).
   * This method is not supported by microservice applications.
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_ADMIN <b>AND</b> tenant is the owner of the application
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteBinaryApplicationContentResourceById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBinaryApplicationContentResourceById$Response(params: DeleteBinaryApplicationContentResourceById$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteBinaryApplicationContentResourceById(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a specific application attachment.
   *
   * Delete  a specific application attachment (by a given application ID and a given binary ID).
   * This method is not supported by microservice applications.
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_ADMIN <b>AND</b> tenant is the owner of the application
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteBinaryApplicationContentResourceById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBinaryApplicationContentResourceById(params: DeleteBinaryApplicationContentResourceById$Params, context?: HttpContext): Observable<void> {
    return this.deleteBinaryApplicationContentResourceById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
