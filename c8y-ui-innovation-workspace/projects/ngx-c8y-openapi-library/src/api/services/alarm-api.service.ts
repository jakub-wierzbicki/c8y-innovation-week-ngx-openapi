/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AlarmsApiResource } from '../models/alarms-api-resource';
import { getAlarmsApiResource } from '../fn/alarm-api/get-alarms-api-resource';
import { GetAlarmsApiResource$Params } from '../fn/alarm-api/get-alarms-api-resource';


/**
 * The alarm API resource returns URIs and URI templates to collections of alarms, so that all alarms or alarms of a specified source device and/or status can be retrieved.
 */
@Injectable({ providedIn: 'root' })
export class AlarmApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAlarmsApiResource()` */
  static readonly GetAlarmsApiResourcePath = '/alarm';

  /**
   * Retrieve URIs to collections of alarms.
   *
   * Retrieve URIs and URI templates to collections of alarms.
   *
   * <section><h5>Required roles</h5>
   * ROLE_ALARM_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAlarmsApiResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAlarmsApiResource$Response(params?: GetAlarmsApiResource$Params, context?: HttpContext): Observable<StrictHttpResponse<AlarmsApiResource>> {
    return getAlarmsApiResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve URIs to collections of alarms.
   *
   * Retrieve URIs and URI templates to collections of alarms.
   *
   * <section><h5>Required roles</h5>
   * ROLE_ALARM_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAlarmsApiResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAlarmsApiResource(params?: GetAlarmsApiResource$Params, context?: HttpContext): Observable<AlarmsApiResource> {
    return this.getAlarmsApiResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<AlarmsApiResource>): AlarmsApiResource => r.body)
    );
  }

}
