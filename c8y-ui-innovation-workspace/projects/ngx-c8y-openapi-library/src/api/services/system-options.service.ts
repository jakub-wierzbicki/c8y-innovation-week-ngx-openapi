/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getSystemOptionCollectionResource } from '../fn/system-options/get-system-option-collection-resource';
import { GetSystemOptionCollectionResource$Params } from '../fn/system-options/get-system-option-collection-resource';
import { getSystemOptionResource } from '../fn/system-options/get-system-option-resource';
import { GetSystemOptionResource$Params } from '../fn/system-options/get-system-option-resource';
import { SystemOption } from '../models/system-option';
import { SystemOptionCollection } from '../models/system-option-collection';


/**
 * API methods to retrieve the read-only properties predefined in the platform's configuration.
 *
 * For security reasons, a few system options are considered secured, which means the user must have the required role **ROLE_OPTION_MANAGEMENT_ADMIN** to read their values.
 *
 * List of options:
 *
 * |         Category          | Key                           | Considered as secured |
 * |:-------------------------:|:------------------------------|:----------------------|
 * |         password          | green.min-length              | yes                   |
 * | two-factor-authentication | pin.validity                  | yes                   |
 * | two-factor-authentication | token.length                  | yes                   |
 * | two-factor-authentication | token.validity                | yes                   |
 * |      authentication       | badRequestCounter             | yes                   |
 * |           files           | microservice.zipped.max.size  | yes                   |
 * |           files           | microservice.unzipped.max.size| yes                   |
 * |           files           | webapp.zipped.max.size        | yes                   |
 * |           files           | webapp.unzipped.max.size      | yes                   |
 * | two-factor-authentication | enforced                      | no                    |
 * |       reportMailer        | available                     | no                    |
 * |          system           | version                       | no                    |
 * |          plugin           | eventprocessing.enabled       | no                    |
 * |         password          | limit.validity                | no                    |
 * |         password          | enforce.strength              | no                    |
 * | two-factor-authentication | strategy                      | no                    |
 * | two-factor-authentication | pin.length                    | no                    |
 * | two-factor-authentication | enabled                       | no                    |
 * | two-factor-authentication | enforced.group                | no                    |
 * | two-factor-authentication | tenant-scope-settings.enabled | no                    |
 * | two-factor-authentication | logout-on-browser-termination | no                    |
 * |       connectivity        | microservice.url              | no                    |
 * |       support-user        | enabled                       | no                    |
 * |          support          | url                           | no                    |
 * |         trackers          | supported.models              | no                    |
 * |         encoding          | test                          | no                    |
 * |        data-broker        | bootstrap.period              | no                    |
 * |           files           | max.size                      | no                    |
 * |      device-control       | bulkoperation.creationramp    | no                    |
 * |         gainsight         | api.key                       | no                    |
 * |            cep            | deprecation.alarm             | no                    |
 * |       remoteaccess        | pass-through.enabled          | no                    |
 * |    device-registration    | security-token.policy         | no                    |
 */
@Injectable({ providedIn: 'root' })
export class SystemOptionsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getSystemOptionCollectionResource()` */
  static readonly GetSystemOptionCollectionResourcePath = '/tenant/system/options';

  /**
   * Retrieve all system options.
   *
   * Retrieve all the system options available on the tenant.
   *
   * > **⚠️ Important:** Note that it is possible to call this endpoint without the ROLE_OPTION_MANAGEMENT_ADMIN role, but options that are considered secured (see the list of options above) will be obfuscated with a constant value `"<<Encrypted>>"`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSystemOptionCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSystemOptionCollectionResource$Response(params?: GetSystemOptionCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<SystemOptionCollection>> {
    return getSystemOptionCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all system options.
   *
   * Retrieve all the system options available on the tenant.
   *
   * > **⚠️ Important:** Note that it is possible to call this endpoint without the ROLE_OPTION_MANAGEMENT_ADMIN role, but options that are considered secured (see the list of options above) will be obfuscated with a constant value `"<<Encrypted>>"`.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSystemOptionCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSystemOptionCollectionResource(params?: GetSystemOptionCollectionResource$Params, context?: HttpContext): Observable<SystemOptionCollection> {
    return this.getSystemOptionCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<SystemOptionCollection>): SystemOptionCollection => r.body)
    );
  }

  /** Path part for operation `getSystemOptionResource()` */
  static readonly GetSystemOptionResourcePath = '/tenant/system/options/{category}/{key}';

  /**
   * Retrieve a specific system option.
   *
   * Retrieve a specific system option (by a given category and key) on your tenant.
   *
   * > **⚠️ Important:** Note that it is possible to call this endpoint without the ROLE_OPTION_MANAGEMENT_ADMIN role, but only the options that are considered not secured (see the list of options above) will be returned. Otherwise, if the option is considered secured and the user does not have the required role, an HTTP response 403 will be returned.
   * <section><h5>Required roles</h5>
   * ROLE_OPTION_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSystemOptionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSystemOptionResource$Response(params: GetSystemOptionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<SystemOption>> {
    return getSystemOptionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a specific system option.
   *
   * Retrieve a specific system option (by a given category and key) on your tenant.
   *
   * > **⚠️ Important:** Note that it is possible to call this endpoint without the ROLE_OPTION_MANAGEMENT_ADMIN role, but only the options that are considered not secured (see the list of options above) will be returned. Otherwise, if the option is considered secured and the user does not have the required role, an HTTP response 403 will be returned.
   * <section><h5>Required roles</h5>
   * ROLE_OPTION_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSystemOptionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSystemOptionResource(params: GetSystemOptionResource$Params, context?: HttpContext): Observable<SystemOption> {
    return this.getSystemOptionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<SystemOption>): SystemOption => r.body)
    );
  }

}
