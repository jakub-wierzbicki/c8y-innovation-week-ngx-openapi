/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EventsApiResource } from '../../models/events-api-resource';

export interface GetEventsApiResource$Params {
}

export function getEventsApiResource(http: HttpClient, rootUrl: string, params?: GetEventsApiResource$Params, context?: HttpContext): Observable<StrictHttpResponse<EventsApiResource>> {
  const rb = new RequestBuilder(rootUrl, getEventsApiResource.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.eventapi+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EventsApiResource>;
    })
  );
}

getEventsApiResource.PATH = '/event';
