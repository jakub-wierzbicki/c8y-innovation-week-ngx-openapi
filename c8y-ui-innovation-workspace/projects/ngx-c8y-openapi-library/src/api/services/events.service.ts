/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteEventCollectionResource } from '../fn/events/delete-event-collection-resource';
import { DeleteEventCollectionResource$Params } from '../fn/events/delete-event-collection-resource';
import { deleteEventResource } from '../fn/events/delete-event-resource';
import { DeleteEventResource$Params } from '../fn/events/delete-event-resource';
import { Event } from '../models/event';
import { EventCollection } from '../models/event-collection';
import { getEventCollectionResource } from '../fn/events/get-event-collection-resource';
import { GetEventCollectionResource$Params } from '../fn/events/get-event-collection-resource';
import { getEventResource } from '../fn/events/get-event-resource';
import { GetEventResource$Params } from '../fn/events/get-event-resource';
import { postEventCollectionResource } from '../fn/events/post-event-collection-resource';
import { PostEventCollectionResource$Params } from '../fn/events/post-event-collection-resource';
import { putEventResource } from '../fn/events/put-event-resource';
import { PutEventResource$Params } from '../fn/events/put-event-resource';


/**
 * Events are used to pass real-time information through Cumulocity IoT.
 *
 * > **&#9432; Info:** The Accept header should be provided in all POST/PUT requests, otherwise an empty response body will be returned.
 */
@Injectable({ providedIn: 'root' })
export class EventsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getEventCollectionResource()` */
  static readonly GetEventCollectionResourcePath = '/event/events';

  /**
   * Retrieve all events.
   *
   * Retrieve all events on your tenant.
   *
   * In case of executing [range queries](https://en.wikipedia.org/wiki/Range_query_(database)) between an upper and lower boundary, for example, querying using `dateFrom`–`dateTo` or `createdFrom`–`createdTo`, the newest registered events are returned first. It is possible to change the order using the query parameter `revert=true`.
   *
   * <section><h5>Required roles</h5>
   * ROLE_EVENT_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEventCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEventCollectionResource$Response(params?: GetEventCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<EventCollection>> {
    return getEventCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all events.
   *
   * Retrieve all events on your tenant.
   *
   * In case of executing [range queries](https://en.wikipedia.org/wiki/Range_query_(database)) between an upper and lower boundary, for example, querying using `dateFrom`–`dateTo` or `createdFrom`–`createdTo`, the newest registered events are returned first. It is possible to change the order using the query parameter `revert=true`.
   *
   * <section><h5>Required roles</h5>
   * ROLE_EVENT_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getEventCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEventCollectionResource(params?: GetEventCollectionResource$Params, context?: HttpContext): Observable<EventCollection> {
    return this.getEventCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<EventCollection>): EventCollection => r.body)
    );
  }

  /** Path part for operation `postEventCollectionResource()` */
  static readonly PostEventCollectionResourcePath = '/event/events';

  /**
   * Create an event.
   *
   * An event must be associated with a source (managed object) identified by an ID.<br>
   * In general, each event consists of:
   *
   * *  A type to identify the nature of the event.
   * *  A time stamp to indicate when the event was last updated.
   * *  A description of the event.
   * *  The managed object which originated the event.
   *
   * <section><h5>Required roles</h5>
   * ROLE_EVENT_ADMIN <b>OR</b> owner of the source <b>OR</b> EVENT_ADMIN permission on the source
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postEventCollectionResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.event+json` and handles request body of type `application/vnd.com.nsn.cumulocity.event+json`.
   */
  postEventCollectionResource$Response(params: PostEventCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Event>> {
    return postEventCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Create an event.
   *
   * An event must be associated with a source (managed object) identified by an ID.<br>
   * In general, each event consists of:
   *
   * *  A type to identify the nature of the event.
   * *  A time stamp to indicate when the event was last updated.
   * *  A description of the event.
   * *  The managed object which originated the event.
   *
   * <section><h5>Required roles</h5>
   * ROLE_EVENT_ADMIN <b>OR</b> owner of the source <b>OR</b> EVENT_ADMIN permission on the source
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postEventCollectionResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.event+json` and handles request body of type `application/vnd.com.nsn.cumulocity.event+json`.
   */
  postEventCollectionResource(params: PostEventCollectionResource$Params, context?: HttpContext): Observable<Event> {
    return this.postEventCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Event>): Event => r.body)
    );
  }

  /** Path part for operation `deleteEventCollectionResource()` */
  static readonly DeleteEventCollectionResourcePath = '/event/events';

  /**
   * Remove event collections.
   *
   * Remove event collections specified by query parameters.
   *
   * DELETE requests are not synchronous. The response could be returned before the delete request has been completed. This may happen especially when the deleted event has a lot of associated data. After sending the request, the platform starts deleting the associated data in an asynchronous way. Finally, the requested event is deleted after all associated data has been deleted.
   *
   * > **⚠️ Important:** Note that it is possible to call this endpoint without providing any parameter - it will result in deleting all events and it is not recommended.
   *
   * <section><h5>Required roles</h5>
   * ROLE_EVENT_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteEventCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEventCollectionResource$Response(params?: DeleteEventCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteEventCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove event collections.
   *
   * Remove event collections specified by query parameters.
   *
   * DELETE requests are not synchronous. The response could be returned before the delete request has been completed. This may happen especially when the deleted event has a lot of associated data. After sending the request, the platform starts deleting the associated data in an asynchronous way. Finally, the requested event is deleted after all associated data has been deleted.
   *
   * > **⚠️ Important:** Note that it is possible to call this endpoint without providing any parameter - it will result in deleting all events and it is not recommended.
   *
   * <section><h5>Required roles</h5>
   * ROLE_EVENT_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteEventCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEventCollectionResource(params?: DeleteEventCollectionResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteEventCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getEventResource()` */
  static readonly GetEventResourcePath = '/event/events/{id}';

  /**
   * Retrieve a specific event.
   *
   * Retrieve a specific event by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_EVENT_READ <b>OR</b> owner of the source <b>OR</b> EVENT_READ permission on the source
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEventResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEventResource$Response(params: GetEventResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Event>> {
    return getEventResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a specific event.
   *
   * Retrieve a specific event by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_EVENT_READ <b>OR</b> owner of the source <b>OR</b> EVENT_READ permission on the source
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getEventResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEventResource(params: GetEventResource$Params, context?: HttpContext): Observable<Event> {
    return this.getEventResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Event>): Event => r.body)
    );
  }

  /** Path part for operation `putEventResource()` */
  static readonly PutEventResourcePath = '/event/events/{id}';

  /**
   * Update a specific event.
   *
   * Update a specific event by a given ID. Only its text description and custom fragments can be updated.
   *
   * <section><h5>Required roles</h5>
   * ROLE_EVENT_ADMIN <b>OR</b> owner of the source <b>OR</b> EVENT_ADMIN permission on the source
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putEventResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.event+json` and handles request body of type `application/vnd.com.nsn.cumulocity.event+json`.
   */
  putEventResource$Response(params: PutEventResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Event>> {
    return putEventResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a specific event.
   *
   * Update a specific event by a given ID. Only its text description and custom fragments can be updated.
   *
   * <section><h5>Required roles</h5>
   * ROLE_EVENT_ADMIN <b>OR</b> owner of the source <b>OR</b> EVENT_ADMIN permission on the source
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putEventResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.event+json` and handles request body of type `application/vnd.com.nsn.cumulocity.event+json`.
   */
  putEventResource(params: PutEventResource$Params, context?: HttpContext): Observable<Event> {
    return this.putEventResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Event>): Event => r.body)
    );
  }

  /** Path part for operation `deleteEventResource()` */
  static readonly DeleteEventResourcePath = '/event/events/{id}';

  /**
   * Remove a specific event.
   *
   * Remove a specific event by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_EVENT_ADMIN <b>OR</b> owner of the source <b>OR</b> EVENT_ADMIN permission on the source
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteEventResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEventResource$Response(params: DeleteEventResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteEventResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove a specific event.
   *
   * Remove a specific event by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_EVENT_ADMIN <b>OR</b> owner of the source <b>OR</b> EVENT_ADMIN permission on the source
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteEventResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEventResource(params: DeleteEventResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteEventResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
