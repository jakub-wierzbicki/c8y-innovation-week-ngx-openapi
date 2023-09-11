/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AlarmsApiResource } from '../../models/alarms-api-resource';

export interface GetAlarmsApiResource$Params {
}

export function getAlarmsApiResource(http: HttpClient, rootUrl: string, params?: GetAlarmsApiResource$Params, context?: HttpContext): Observable<StrictHttpResponse<AlarmsApiResource>> {
  const rb = new RequestBuilder(rootUrl, getAlarmsApiResource.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.alarmapi+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AlarmsApiResource>;
    })
  );
}

getAlarmsApiResource.PATH = '/alarm';
