/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { EventsApiResource } from '../models/events-api-resource';
import { getEventsApiResource } from '../fn/event-api/get-events-api-resource';
import { GetEventsApiResource$Params } from '../fn/event-api/get-events-api-resource';


/**
 * The event API resource returns URIs and URI templates to collections of events, so that all events or events of a specified type and/or source device can be retrieved.
 */
@Injectable({ providedIn: 'root' })
export class EventApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getEventsApiResource()` */
  static readonly GetEventsApiResourcePath = '/event';

  /**
   * Retrieve URIs to collections of events.
   *
   * Retrieve URIs and URI templates to collections of events.
   *
   * <section><h5>Required roles</h5>
   * ROLE_EVENT_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEventsApiResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEventsApiResource$Response(params?: GetEventsApiResource$Params, context?: HttpContext): Observable<StrictHttpResponse<EventsApiResource>> {
    return getEventsApiResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve URIs to collections of events.
   *
   * Retrieve URIs and URI templates to collections of events.
   *
   * <section><h5>Required roles</h5>
   * ROLE_EVENT_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getEventsApiResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEventsApiResource(params?: GetEventsApiResource$Params, context?: HttpContext): Observable<EventsApiResource> {
    return this.getEventsApiResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<EventsApiResource>): EventsApiResource => r.body)
    );
  }

}
