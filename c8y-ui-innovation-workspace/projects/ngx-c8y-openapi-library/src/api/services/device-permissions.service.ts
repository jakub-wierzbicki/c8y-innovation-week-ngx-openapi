/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { DevicePermissions } from '../models/device-permissions';
import { getDevicePermissionsResource } from '../fn/device-permissions/get-device-permissions-resource';
import { GetDevicePermissionsResource$Params } from '../fn/device-permissions/get-device-permissions-resource';
import { putDevicePermissionsResource } from '../fn/device-permissions/put-device-permissions-resource';
import { PutDevicePermissionsResource$Params } from '../fn/device-permissions/put-device-permissions-resource';


/**
 * API methods to retrieve and update device permissions assignments.
 *
 * Device permissions enable users to access and manipulate devices.
 *
 * The device permission structure is **[API:fragment_name:permission]** where:
 *
 * * **API** is one of the following values: OPERATION, ALARM, AUDIT, EVENT, MANAGED_OBJECT, MEASUREMENT or "*"
 * * **fragment_name** can be the name of any fragment, for example, "c8y_Restart" or "*"
 * * **permission** is ADMIN, READ or "*"
 *
 * Required permission per HTTP method:
 *
 * + GET - READ or "*"
 * + PUT - ADMIN or "*"
 *
 * The wildcard "*" enables you to access every API and stored object regardless of the fragments that are inside it.
 *
 * > **⚠️ Important:** If there is no fragment in an object, for example, to read the object, you must use the wildcard "*" for the **fragment_name** part of the device permission (see the structure above). For example: `"10200":["MEASUREMENT:*:READ"]`.
 */
@Injectable({ providedIn: 'root' })
export class DevicePermissionsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getDevicePermissionsResource()` */
  static readonly GetDevicePermissionsResourcePath = '/user/devicePermissions/{id}';

  /**
   * Returns all device permissions assignments.
   *
   * Returns all device permissions assignments if the current user has READ permission.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_CREATE
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDevicePermissionsResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDevicePermissionsResource$Response(params: GetDevicePermissionsResource$Params, context?: HttpContext): Observable<StrictHttpResponse<DevicePermissions>> {
    return getDevicePermissionsResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Returns all device permissions assignments.
   *
   * Returns all device permissions assignments if the current user has READ permission.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_READ <b>OR</b> ROLE_USER_MANAGEMENT_CREATE
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDevicePermissionsResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDevicePermissionsResource(params: GetDevicePermissionsResource$Params, context?: HttpContext): Observable<DevicePermissions> {
    return this.getDevicePermissionsResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<DevicePermissions>): DevicePermissions => r.body)
    );
  }

  /** Path part for operation `putDevicePermissionsResource()` */
  static readonly PutDevicePermissionsResourcePath = '/user/devicePermissions/{id}';

  /**
   * Updates the device permissions assignments.
   *
   * Updates the device permissions assignments if the current user has ADMIN permission or CREATE permission and also has all device permissions.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN <b>OR</b> ROLE_USER_MANAGEMENT_CREATE
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putDevicePermissionsResource()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putDevicePermissionsResource$Response(params: PutDevicePermissionsResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return putDevicePermissionsResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Updates the device permissions assignments.
   *
   * Updates the device permissions assignments if the current user has ADMIN permission or CREATE permission and also has all device permissions.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_ADMIN <b>OR</b> ROLE_USER_MANAGEMENT_CREATE
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putDevicePermissionsResource$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putDevicePermissionsResource(params: PutDevicePermissionsResource$Params, context?: HttpContext): Observable<void> {
    return this.putDevicePermissionsResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
