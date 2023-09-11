/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SupportedMeasurements } from '../../models/supported-measurements';

export interface GetSupportedMeasurementsManagedObjectResource$Params {

/**
 * Unique identifier of the managed object.
 */
  id: string;
}

export function getSupportedMeasurementsManagedObjectResource(http: HttpClient, rootUrl: string, params: GetSupportedMeasurementsManagedObjectResource$Params, context?: HttpContext): Observable<StrictHttpResponse<SupportedMeasurements>> {
  const rb = new RequestBuilder(rootUrl, getSupportedMeasurementsManagedObjectResource.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SupportedMeasurements>;
    })
  );
}

getSupportedMeasurementsManagedObjectResource.PATH = '/inventory/managedObjects/{id}/supportedMeasurements';
