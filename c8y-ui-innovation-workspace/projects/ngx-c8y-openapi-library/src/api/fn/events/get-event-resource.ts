/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Event } from '../../models/event';

export interface GetEventResource$Params {

/**
 * Unique identifier of the event.
 */
  id: string;
}

export function getEventResource(http: HttpClient, rootUrl: string, params: GetEventResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Event>> {
  const rb = new RequestBuilder(rootUrl, getEventResource.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.event+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Event>;
    })
  );
}

getEventResource.PATH = '/event/events/{id}';
