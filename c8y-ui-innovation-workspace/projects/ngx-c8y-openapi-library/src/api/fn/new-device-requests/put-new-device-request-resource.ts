/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { NewDeviceRequest } from '../../models/new-device-request';

export interface PutNewDeviceRequestResource$Params {

/**
 * Unique identifier of the new device request.
 */
  requestId: string;

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;
      body: NewDeviceRequest & {
'id'?: any;
}
}

export function putNewDeviceRequestResource(http: HttpClient, rootUrl: string, params: PutNewDeviceRequestResource$Params, context?: HttpContext): Observable<StrictHttpResponse<NewDeviceRequest>> {
  const rb = new RequestBuilder(rootUrl, putNewDeviceRequestResource.PATH, 'put');
  if (params) {
    rb.path('requestId', params.requestId, {});
    rb.header('Accept', params.Accept, {});
    rb.body(params.body, 'application/vnd.com.nsn.cumulocity.newdevicerequest+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.newdevicerequest+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<NewDeviceRequest>;
    })
  );
}

putNewDeviceRequestResource.PATH = '/devicecontrol/newDeviceRequests/{requestId}';
