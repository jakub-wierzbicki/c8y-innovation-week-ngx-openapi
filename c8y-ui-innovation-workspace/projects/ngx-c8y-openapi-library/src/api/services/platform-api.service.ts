/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getPlatformApiResource } from '../fn/platform-api/get-platform-api-resource';
import { GetPlatformApiResource$Params } from '../fn/platform-api/get-platform-api-resource';
import { PlatformApiResource } from '../models/platform-api-resource';


/**
 * To discover the URIs of the various interfaces of Cumulocity IoT, a platform interface is provided. This interface aggregates all the underlying API resources.
 */
@Injectable({ providedIn: 'root' })
export class PlatformApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getPlatformApiResource()` */
  static readonly GetPlatformApiResourcePath = '/platform';

  /**
   * Retrieve URIs to collection platform objects.
   *
   * Retrieve URIs and URI templates to collections of platform objects.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPlatformApiResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPlatformApiResource$Response(params?: GetPlatformApiResource$Params, context?: HttpContext): Observable<StrictHttpResponse<PlatformApiResource>> {
    return getPlatformApiResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve URIs to collection platform objects.
   *
   * Retrieve URIs and URI templates to collections of platform objects.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPlatformApiResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPlatformApiResource(params?: GetPlatformApiResource$Params, context?: HttpContext): Observable<PlatformApiResource> {
    return this.getPlatformApiResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<PlatformApiResource>): PlatformApiResource => r.body)
    );
  }

}
