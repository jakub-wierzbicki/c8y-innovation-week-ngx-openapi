/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getIdentityApiResource } from '../fn/identity-api/get-identity-api-resource';
import { GetIdentityApiResource$Params } from '../fn/identity-api/get-identity-api-resource';
import { IdentityApiResource } from '../models/identity-api-resource';


/**
 * Cumulocity IoT can associate devices and assets with multiple external identities.
 * For instance, devices can often be identified by the IMEI of their modem, by a micro-controller serial number or by an asset tag.
 * This is useful, for example, when you have non-functional hardware and must replace the hardware without losing the data that was recorded.
 *
 * The identity API resource returns URIs and URI templates for associating external identifiers with unique identifiers.
 */
@Injectable({ providedIn: 'root' })
export class IdentityApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getIdentityApiResource()` */
  static readonly GetIdentityApiResourcePath = '/identity';

  /**
   * Retrieve URIs to collections of external IDs.
   *
   * Retrieve URIs and URI templates for associating external identifiers with unique identifiers.
   *
   * <section><h5>Required roles</h5>
   * ROLE_IDENTITY_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getIdentityApiResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIdentityApiResource$Response(params?: GetIdentityApiResource$Params, context?: HttpContext): Observable<StrictHttpResponse<IdentityApiResource>> {
    return getIdentityApiResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve URIs to collections of external IDs.
   *
   * Retrieve URIs and URI templates for associating external identifiers with unique identifiers.
   *
   * <section><h5>Required roles</h5>
   * ROLE_IDENTITY_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getIdentityApiResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIdentityApiResource(params?: GetIdentityApiResource$Params, context?: HttpContext): Observable<IdentityApiResource> {
    return this.getIdentityApiResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<IdentityApiResource>): IdentityApiResource => r.body)
    );
  }

}
