/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Measurement } from '../../models/measurement';

export interface GetMeasurementResource$Params {

/**
 * Unique identifier of the measurement.
 */
  id: string;
}

export function getMeasurementResource(http: HttpClient, rootUrl: string, params: GetMeasurementResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Measurement>> {
  const rb = new RequestBuilder(rootUrl, getMeasurementResource.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.measurement+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Measurement>;
    })
  );
}

getMeasurementResource.PATH = '/measurement/measurements/{id}';
