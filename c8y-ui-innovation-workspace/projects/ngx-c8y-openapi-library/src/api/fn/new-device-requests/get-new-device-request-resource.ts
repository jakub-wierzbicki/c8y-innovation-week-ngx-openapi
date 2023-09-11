/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { NewDeviceRequest } from '../../models/new-device-request';

export interface GetNewDeviceRequestResource$Params {

/**
 * Unique identifier of the new device request.
 */
  requestId: string;
}

export function getNewDeviceRequestResource(http: HttpClient, rootUrl: string, params: GetNewDeviceRequestResource$Params, context?: HttpContext): Observable<StrictHttpResponse<NewDeviceRequest>> {
  const rb = new RequestBuilder(rootUrl, getNewDeviceRequestResource.PATH, 'get');
  if (params) {
    rb.path('requestId', params.requestId, {});
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

getNewDeviceRequestResource.PATH = '/devicecontrol/newDeviceRequests/{requestId}';
