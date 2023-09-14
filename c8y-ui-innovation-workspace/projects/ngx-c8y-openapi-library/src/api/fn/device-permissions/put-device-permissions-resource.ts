/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpdatedDevicePermissions } from '../../models/updated-device-permissions';

export interface PutDevicePermissionsResource$Params {

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;

/**
 * Unique identifier of the managed object.
 */
  id: string;
      body: UpdatedDevicePermissions
}

export function putDevicePermissionsResource(http: HttpClient, rootUrl: string, params: PutDevicePermissionsResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, putDevicePermissionsResource.PATH, 'put');
  if (params) {
    rb.header('Accept', params.Accept, {});
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

putDevicePermissionsResource.PATH = '/user/devicePermissions/{id}';
