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
import { ApplicationCollection } from '../models/application-collection';
import { deleteApplicationResource } from '../fn/applications/delete-application-resource';
import { DeleteApplicationResource$Params } from '../fn/applications/delete-application-resource';
import { DescNextPage } from '../models/desc-next-page';
import { DescPrevPage } from '../models/desc-prev-page';
import { DescSelf } from '../models/desc-self';
import { getAbstractApplicationCollectionResource } from '../fn/applications/get-abstract-application-collection-resource';
import { GetAbstractApplicationCollectionResource$Params } from '../fn/applications/get-abstract-application-collection-resource';
import { getApplicationResource } from '../fn/applications/get-application-resource';
import { GetApplicationResource$Params } from '../fn/applications/get-application-resource';
import { getApplicationsByNameCollectionResource } from '../fn/applications/get-applications-by-name-collection-resource';
import { GetApplicationsByNameCollectionResource$Params } from '../fn/applications/get-applications-by-name-collection-resource';
import { getApplicationsByOwnerCollectionResource } from '../fn/applications/get-applications-by-owner-collection-resource';
import { GetApplicationsByOwnerCollectionResource$Params } from '../fn/applications/get-applications-by-owner-collection-resource';
import { getApplicationsByTenantCollectionResource } from '../fn/applications/get-applications-by-tenant-collection-resource';
import { GetApplicationsByTenantCollectionResource$Params } from '../fn/applications/get-applications-by-tenant-collection-resource';
import { getApplicationsByUserCollectionResource } from '../fn/applications/get-applications-by-user-collection-resource';
import { GetApplicationsByUserCollectionResource$Params } from '../fn/applications/get-applications-by-user-collection-resource';
import { postApplicationCollectionResource } from '../fn/applications/post-application-collection-resource';
import { PostApplicationCollectionResource$Params } from '../fn/applications/post-application-collection-resource';
import { postApplicationResource } from '../fn/applications/post-application-resource';
import { PostApplicationResource$Params } from '../fn/applications/post-application-resource';
import { putApplicationResource } from '../fn/applications/put-application-resource';
import { PutApplicationResource$Params } from '../fn/applications/put-application-resource';


/**
 * API methods to retrieve, create, update and delete applications.
 *
 * ### Application names
 *
 * For each tenant, Cumulocity IoT manages the subscribed applications and provides a number of applications of various types.
 * In case you want to subscribe a tenant to an application using an API, you must use the application name in the argument (as name).
 *
 * Refer to the tables in [Administration > Managing applications](https://cumulocity.com/guides/users-guide/administration#managing-applications) in the *User guide* for the respective application name to be used.
 *
 * > **&#9432; Info:** The Accept header should be provided in all POST/PUT requests, otherwise an empty response body will be returned.
 */
@Injectable({ providedIn: 'root' })
export class ApplicationsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAbstractApplicationCollectionResource()` */
  static readonly GetAbstractApplicationCollectionResourcePath = '/application/applications';

  /**
   * Retrieve all applications.
   *
   * Retrieve all applications on your tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAbstractApplicationCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAbstractApplicationCollectionResource$Response(params?: GetAbstractApplicationCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ApplicationCollection>> {
    return getAbstractApplicationCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all applications.
   *
   * Retrieve all applications on your tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAbstractApplicationCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAbstractApplicationCollectionResource(params?: GetAbstractApplicationCollectionResource$Params, context?: HttpContext): Observable<ApplicationCollection> {
    return this.getAbstractApplicationCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApplicationCollection>): ApplicationCollection => r.body)
    );
  }

  /** Path part for operation `postApplicationCollectionResource()` */
  static readonly PostApplicationCollectionResourcePath = '/application/applications';

  /**
   * Create an application.
   *
   * Create an application on your tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApplicationCollectionResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.application+json` and handles request body of type `application/vnd.com.nsn.cumulocity.application+json`.
   */
  postApplicationCollectionResource$Response(params: PostApplicationCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Application>> {
    return postApplicationCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Create an application.
   *
   * Create an application on your tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postApplicationCollectionResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.application+json` and handles request body of type `application/vnd.com.nsn.cumulocity.application+json`.
   */
  postApplicationCollectionResource(params: PostApplicationCollectionResource$Params, context?: HttpContext): Observable<Application> {
    return this.postApplicationCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Application>): Application => r.body)
    );
  }

  /** Path part for operation `getApplicationResource()` */
  static readonly GetApplicationResourcePath = '/application/applications/{id}';

  /**
   * Retrieve a specific application.
   *
   * Retrieve a specific application (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_READ <b>OR</b> current user has explicit access to the application
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApplicationResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationResource$Response(params: GetApplicationResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Application>> {
    return getApplicationResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a specific application.
   *
   * Retrieve a specific application (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_READ <b>OR</b> current user has explicit access to the application
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getApplicationResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationResource(params: GetApplicationResource$Params, context?: HttpContext): Observable<Application> {
    return this.getApplicationResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Application>): Application => r.body)
    );
  }

  /** Path part for operation `putApplicationResource()` */
  static readonly PutApplicationResourcePath = '/application/applications/{id}';

  /**
   * Update a specific application.
   *
   * Update a specific application (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putApplicationResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.application+json` and handles request body of type `application/vnd.com.nsn.cumulocity.application+json`.
   */
  putApplicationResource$Response(params: PutApplicationResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Application>> {
    return putApplicationResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a specific application.
   *
   * Update a specific application (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putApplicationResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.application+json` and handles request body of type `application/vnd.com.nsn.cumulocity.application+json`.
   */
  putApplicationResource(params: PutApplicationResource$Params, context?: HttpContext): Observable<Application> {
    return this.putApplicationResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Application>): Application => r.body)
    );
  }

  /** Path part for operation `deleteApplicationResource()` */
  static readonly DeleteApplicationResourcePath = '/application/applications/{id}';

  /**
   * Delete an application.
   *
   * Delete an application (by a given ID).
   * This method is not supported by microservice applications.
   *
   * > **&#9432; Info:** With regards to a hosted application, there is a caching mechanism in place that keeps the information about the placement of application files (html, javascript, css, fonts, etc.). Removing a hosted application, in normal circumstances, will cause the subsequent requests for application files to fail with an HTTP 404 error because the application is removed synchronously, its files are immediately removed on the node serving the request and at the same time the information is propagated to other nodes – but in rare cases there might be a delay with this propagation. In such situations, the files of the removed application can be served from those nodes up until the aforementioned cache expires. For the same reason, the cache can also cause HTTP 404 errors when the application is updated as it will keep the path to the files of the old version of the application. The cache is filled on demand, so there should not be issues if application files were not accessed prior to the delete request. The expiration delay of the cache can differ, but should not take more than one minute.
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_ADMIN <b>AND</b> tenant is the owner of the application
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApplicationResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApplicationResource$Response(params: DeleteApplicationResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteApplicationResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete an application.
   *
   * Delete an application (by a given ID).
   * This method is not supported by microservice applications.
   *
   * > **&#9432; Info:** With regards to a hosted application, there is a caching mechanism in place that keeps the information about the placement of application files (html, javascript, css, fonts, etc.). Removing a hosted application, in normal circumstances, will cause the subsequent requests for application files to fail with an HTTP 404 error because the application is removed synchronously, its files are immediately removed on the node serving the request and at the same time the information is propagated to other nodes – but in rare cases there might be a delay with this propagation. In such situations, the files of the removed application can be served from those nodes up until the aforementioned cache expires. For the same reason, the cache can also cause HTTP 404 errors when the application is updated as it will keep the path to the files of the old version of the application. The cache is filled on demand, so there should not be issues if application files were not accessed prior to the delete request. The expiration delay of the cache can differ, but should not take more than one minute.
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_ADMIN <b>AND</b> tenant is the owner of the application
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteApplicationResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApplicationResource(params: DeleteApplicationResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteApplicationResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `postApplicationResource()` */
  static readonly PostApplicationResourcePath = '/application/applications/{id}/clone';

  /**
   * Copy an application.
   *
   * Copy an application (by a given ID).
   *
   * This method is not supported by microservice applications.
   *
   * A request to the "clone" resource creates a new application based on an already existing one.
   *
   * The properties are copied to the newly created application and the prefix "clone" is added to the properties `name`, `key` and `contextPath` in order to be unique.
   *
   * If the target application is hosted and has an active version, the new application will have the active version with the same content.
   *
   * If the original application is hosted with versions, then only one binary version is cloned. By default it is a version with the "latest" tag. You can also specify a target version directly by using exactly one of the query parameters `version` or `tag`.
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApplicationResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApplicationResource$Response(params: PostApplicationResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Application>> {
    return postApplicationResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Copy an application.
   *
   * Copy an application (by a given ID).
   *
   * This method is not supported by microservice applications.
   *
   * A request to the "clone" resource creates a new application based on an already existing one.
   *
   * The properties are copied to the newly created application and the prefix "clone" is added to the properties `name`, `key` and `contextPath` in order to be unique.
   *
   * If the target application is hosted and has an active version, the new application will have the active version with the same content.
   *
   * If the original application is hosted with versions, then only one binary version is cloned. By default it is a version with the "latest" tag. You can also specify a target version directly by using exactly one of the query parameters `version` or `tag`.
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postApplicationResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApplicationResource(params: PostApplicationResource$Params, context?: HttpContext): Observable<Application> {
    return this.postApplicationResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Application>): Application => r.body)
    );
  }

  /** Path part for operation `getApplicationsByNameCollectionResource()` */
  static readonly GetApplicationsByNameCollectionResourcePath = '/application/applicationsByName/{name}';

  /**
   * Retrieve applications by name.
   *
   * Retrieve applications by name.
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApplicationsByNameCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationsByNameCollectionResource$Response(params: GetApplicationsByNameCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ApplicationCollection & {
'self'?: DescSelf & any;
'prev'?: DescPrevPage & any;
'next'?: DescNextPage & any;
}>> {
    return getApplicationsByNameCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve applications by name.
   *
   * Retrieve applications by name.
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getApplicationsByNameCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationsByNameCollectionResource(params: GetApplicationsByNameCollectionResource$Params, context?: HttpContext): Observable<ApplicationCollection & {
'self'?: DescSelf & any;
'prev'?: DescPrevPage & any;
'next'?: DescNextPage & any;
}> {
    return this.getApplicationsByNameCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApplicationCollection & {
'self'?: DescSelf & any;
'prev'?: DescPrevPage & any;
'next'?: DescNextPage & any;
}>): ApplicationCollection & {
'self'?: DescSelf & any;
'prev'?: DescPrevPage & any;
'next'?: DescNextPage & any;
} => r.body)
    );
  }

  /** Path part for operation `getApplicationsByTenantCollectionResource()` */
  static readonly GetApplicationsByTenantCollectionResourcePath = '/application/applicationsByTenant/{tenantId}';

  /**
   * Retrieve applications by tenant.
   *
   * Retrieve applications subscribed or owned by a particular tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApplicationsByTenantCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationsByTenantCollectionResource$Response(params: GetApplicationsByTenantCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ApplicationCollection & {
'self'?: DescSelf & any;
'prev'?: DescPrevPage & any;
'next'?: DescNextPage & any;
}>> {
    return getApplicationsByTenantCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve applications by tenant.
   *
   * Retrieve applications subscribed or owned by a particular tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getApplicationsByTenantCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationsByTenantCollectionResource(params: GetApplicationsByTenantCollectionResource$Params, context?: HttpContext): Observable<ApplicationCollection & {
'self'?: DescSelf & any;
'prev'?: DescPrevPage & any;
'next'?: DescNextPage & any;
}> {
    return this.getApplicationsByTenantCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApplicationCollection & {
'self'?: DescSelf & any;
'prev'?: DescPrevPage & any;
'next'?: DescNextPage & any;
}>): ApplicationCollection & {
'self'?: DescSelf & any;
'prev'?: DescPrevPage & any;
'next'?: DescNextPage & any;
} => r.body)
    );
  }

  /** Path part for operation `getApplicationsByOwnerCollectionResource()` */
  static readonly GetApplicationsByOwnerCollectionResourcePath = '/application/applicationsByOwner/{tenantId}';

  /**
   * Retrieve applications by owner.
   *
   * Retrieve all applications owned by a particular tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApplicationsByOwnerCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationsByOwnerCollectionResource$Response(params: GetApplicationsByOwnerCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ApplicationCollection & {
'self'?: DescSelf & any;
'prev'?: DescPrevPage & any;
'next'?: DescNextPage & any;
}>> {
    return getApplicationsByOwnerCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve applications by owner.
   *
   * Retrieve all applications owned by a particular tenant (by a given tenant ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_APPLICATION_MANAGEMENT_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getApplicationsByOwnerCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationsByOwnerCollectionResource(params: GetApplicationsByOwnerCollectionResource$Params, context?: HttpContext): Observable<ApplicationCollection & {
'self'?: DescSelf & any;
'prev'?: DescPrevPage & any;
'next'?: DescNextPage & any;
}> {
    return this.getApplicationsByOwnerCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApplicationCollection & {
'self'?: DescSelf & any;
'prev'?: DescPrevPage & any;
'next'?: DescNextPage & any;
}>): ApplicationCollection & {
'self'?: DescSelf & any;
'prev'?: DescPrevPage & any;
'next'?: DescNextPage & any;
} => r.body)
    );
  }

  /** Path part for operation `getApplicationsByUserCollectionResource()` */
  static readonly GetApplicationsByUserCollectionResourcePath = '/application/applicationsByUser/{username}';

  /**
   * Retrieve applications by user.
   *
   * Retrieve all applications for a particular user (by a given username).
   *
   * <section><h5>Required roles</h5>
   * (ROLE_USER_MANAGEMENT_OWN_READ <b>AND</b> is the current user) <b>OR</b> (ROLE_USER_MANAGEMENT_READ <b>AND</b> ROLE_APPLICATION_MANAGEMENT_READ)
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApplicationsByUserCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationsByUserCollectionResource$Response(params: GetApplicationsByUserCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ApplicationCollection & {
'self'?: DescSelf & any;
'prev'?: DescPrevPage & any;
'next'?: DescNextPage & any;
}>> {
    return getApplicationsByUserCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve applications by user.
   *
   * Retrieve all applications for a particular user (by a given username).
   *
   * <section><h5>Required roles</h5>
   * (ROLE_USER_MANAGEMENT_OWN_READ <b>AND</b> is the current user) <b>OR</b> (ROLE_USER_MANAGEMENT_READ <b>AND</b> ROLE_APPLICATION_MANAGEMENT_READ)
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getApplicationsByUserCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationsByUserCollectionResource(params: GetApplicationsByUserCollectionResource$Params, context?: HttpContext): Observable<ApplicationCollection & {
'self'?: DescSelf & any;
'prev'?: DescPrevPage & any;
'next'?: DescNextPage & any;
}> {
    return this.getApplicationsByUserCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApplicationCollection & {
'self'?: DescSelf & any;
'prev'?: DescPrevPage & any;
'next'?: DescNextPage & any;
}>): ApplicationCollection & {
'self'?: DescSelf & any;
'prev'?: DescPrevPage & any;
'next'?: DescNextPage & any;
} => r.body)
    );
  }

}
