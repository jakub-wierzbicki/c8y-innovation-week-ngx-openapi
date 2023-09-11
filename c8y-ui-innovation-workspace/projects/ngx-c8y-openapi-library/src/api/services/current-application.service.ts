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
import { ApplicationSettings } from '../models/application-settings';
import { ApplicationUserCollection } from '../models/application-user-collection';
import { getApplicationUserCollectionRepresentation } from '../fn/current-application/get-application-user-collection-representation';
import { GetApplicationUserCollectionRepresentation$Params } from '../fn/current-application/get-application-user-collection-representation';
import { getCurrentApplicationResource } from '../fn/current-application/get-current-application-resource';
import { GetCurrentApplicationResource$Params } from '../fn/current-application/get-current-application-resource';
import { getCurrentApplicationResourceSettings } from '../fn/current-application/get-current-application-resource-settings';
import { GetCurrentApplicationResourceSettings$Params } from '../fn/current-application/get-current-application-resource-settings';
import { putCurrentApplicationResource } from '../fn/current-application/put-current-application-resource';
import { PutCurrentApplicationResource$Params } from '../fn/current-application/put-current-application-resource';


/**
 * API methods to retrieve and update the current application and to retrieve its subscribers.
 * It is the authenticated microservice user's application.
 */
@Injectable({ providedIn: 'root' })
export class CurrentApplicationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCurrentApplicationResource()` */
  static readonly GetCurrentApplicationResourcePath = '/application/currentApplication';

  /**
   * Retrieve the current application.
   *
   * Retrieve the current application.
   * This only works inside an application, for example, a microservice.
   *
   * <section><h5>Required roles</h5>
   * Microservice bootstrap user required.
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCurrentApplicationResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentApplicationResource$Response(params?: GetCurrentApplicationResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Application>> {
    return getCurrentApplicationResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve the current application.
   *
   * Retrieve the current application.
   * This only works inside an application, for example, a microservice.
   *
   * <section><h5>Required roles</h5>
   * Microservice bootstrap user required.
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCurrentApplicationResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentApplicationResource(params?: GetCurrentApplicationResource$Params, context?: HttpContext): Observable<Application> {
    return this.getCurrentApplicationResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Application>): Application => r.body)
    );
  }

  /** Path part for operation `putCurrentApplicationResource()` */
  static readonly PutCurrentApplicationResourcePath = '/application/currentApplication';

  /**
   * Update the current application.
   *
   * Update the current application.
   * This only works inside an application, for example, a microservice. This method is deprecated as it is only used by legacy microservices that are not running on Kubernetes.
   *
   * <section><h5>Required roles</h5>
   * Microservice bootstrap user required.
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putCurrentApplicationResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.application+json` and handles request body of type `application/vnd.com.nsn.cumulocity.application+json`.
   *
   * @deprecated
   */
  putCurrentApplicationResource$Response(params: PutCurrentApplicationResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Application>> {
    return putCurrentApplicationResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Update the current application.
   *
   * Update the current application.
   * This only works inside an application, for example, a microservice. This method is deprecated as it is only used by legacy microservices that are not running on Kubernetes.
   *
   * <section><h5>Required roles</h5>
   * Microservice bootstrap user required.
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putCurrentApplicationResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.application+json` and handles request body of type `application/vnd.com.nsn.cumulocity.application+json`.
   *
   * @deprecated
   */
  putCurrentApplicationResource(params: PutCurrentApplicationResource$Params, context?: HttpContext): Observable<Application> {
    return this.putCurrentApplicationResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Application>): Application => r.body)
    );
  }

  /** Path part for operation `getCurrentApplicationResourceSettings()` */
  static readonly GetCurrentApplicationResourceSettingsPath = '/application/currentApplication/settings';

  /**
   * Retrieve the current application settings.
   *
   * Retrieve the current application settings.
   * This only works inside an application, for example, a microservice.
   *
   * <section><h5>Required roles</h5>
   * Microservice bootstrap user <b>OR</b> microservice service user required.
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCurrentApplicationResourceSettings()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentApplicationResourceSettings$Response(params?: GetCurrentApplicationResourceSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApplicationSettings>> {
    return getCurrentApplicationResourceSettings(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve the current application settings.
   *
   * Retrieve the current application settings.
   * This only works inside an application, for example, a microservice.
   *
   * <section><h5>Required roles</h5>
   * Microservice bootstrap user <b>OR</b> microservice service user required.
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCurrentApplicationResourceSettings$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentApplicationResourceSettings(params?: GetCurrentApplicationResourceSettings$Params, context?: HttpContext): Observable<ApplicationSettings> {
    return this.getCurrentApplicationResourceSettings$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApplicationSettings>): ApplicationSettings => r.body)
    );
  }

  /** Path part for operation `getApplicationUserCollectionRepresentation()` */
  static readonly GetApplicationUserCollectionRepresentationPath = '/application/currentApplication/subscriptions';

  /**
   * Retrieve the subscribed users of the current application.
   *
   * Retrieve the subscribed users of the current application.
   *
   * <section><h5>Required roles</h5>
   * Microservice bootstrap user required.
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApplicationUserCollectionRepresentation()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationUserCollectionRepresentation$Response(params?: GetApplicationUserCollectionRepresentation$Params, context?: HttpContext): Observable<StrictHttpResponse<ApplicationUserCollection>> {
    return getApplicationUserCollectionRepresentation(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve the subscribed users of the current application.
   *
   * Retrieve the subscribed users of the current application.
   *
   * <section><h5>Required roles</h5>
   * Microservice bootstrap user required.
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getApplicationUserCollectionRepresentation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationUserCollectionRepresentation(params?: GetApplicationUserCollectionRepresentation$Params, context?: HttpContext): Observable<ApplicationUserCollection> {
    return this.getApplicationUserCollectionRepresentation$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApplicationUserCollection>): ApplicationUserCollection => r.body)
    );
  }

}
