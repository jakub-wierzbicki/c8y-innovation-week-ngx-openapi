/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { DeviceControlApiResource } from '../models/device-control-api-resource';
import { getDeviceControlApiResource } from '../fn/device-control-api/get-device-control-api-resource';
import { GetDeviceControlApiResource$Params } from '../fn/device-control-api/get-device-control-api-resource';


/**
 * The device control API resource returns URIs and URI templates to collections of operations so that they can be retrieved.
 *
 * > **&#9432; Info:** In order to create/retrieve/update an operation for a device, the device must be in the “childDevices” hierarchy of an existing agent. To create an agent in the inventory, you should create a managed object with a fragment `com_cumulocity_model_Agent`.
 */
@Injectable({ providedIn: 'root' })
export class DeviceControlApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getDeviceControlApiResource()` */
  static readonly GetDeviceControlApiResourcePath = '/devicecontrol';

  /**
   * Retrieve URIs to collections of operations.
   *
   * Retrieve URIs to collections of operations.
   *
   * <section><h5>Required roles</h5>
   * ROLE_DEVICE_CONTROL_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDeviceControlApiResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDeviceControlApiResource$Response(params?: GetDeviceControlApiResource$Params, context?: HttpContext): Observable<StrictHttpResponse<DeviceControlApiResource>> {
    return getDeviceControlApiResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve URIs to collections of operations.
   *
   * Retrieve URIs to collections of operations.
   *
   * <section><h5>Required roles</h5>
   * ROLE_DEVICE_CONTROL_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDeviceControlApiResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDeviceControlApiResource(params?: GetDeviceControlApiResource$Params, context?: HttpContext): Observable<DeviceControlApiResource> {
    return this.getDeviceControlApiResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<DeviceControlApiResource>): DeviceControlApiResource => r.body)
    );
  }

}
