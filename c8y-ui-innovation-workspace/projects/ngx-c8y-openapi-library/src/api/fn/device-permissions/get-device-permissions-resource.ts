/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DevicePermissionOwners } from '../../models/device-permission-owners';

export interface GetDevicePermissionsResource$Params {

/**
 * Unique identifier of the managed object.
 */
  id: string;
}

export function getDevicePermissionsResource(http: HttpClient, rootUrl: string, params: GetDevicePermissionsResource$Params, context?: HttpContext): Observable<StrictHttpResponse<DevicePermissionOwners>> {
  const rb = new RequestBuilder(rootUrl, getDevicePermissionsResource.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DevicePermissionOwners>;
    })
  );
}

getDevicePermissionsResource.PATH = '/user/devicePermissions/{id}';
