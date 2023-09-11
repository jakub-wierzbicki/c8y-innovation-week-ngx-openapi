/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MeasurementApiResource } from '../../models/measurement-api-resource';

export interface GetMeasurementApiResource$Params {
}

export function getMeasurementApiResource(http: HttpClient, rootUrl: string, params?: GetMeasurementApiResource$Params, context?: HttpContext): Observable<StrictHttpResponse<MeasurementApiResource>> {
  const rb = new RequestBuilder(rootUrl, getMeasurementApiResource.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.measurementapi+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<MeasurementApiResource>;
    })
  );
}

getMeasurementApiResource.PATH = '/measurement';
