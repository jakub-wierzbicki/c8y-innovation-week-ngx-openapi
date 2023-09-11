/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EventCollection } from '../../models/event-collection';

export interface GetEventCollectionResource$Params {

/**
 * Start date or date and time of the event's creation (set by the platform during creation).
 */
  createdFrom?: string;

/**
 * End date or date and time of the event's creation (set by the platform during creation).
 */
  createdTo?: string;

/**
 * The current page of the paginated results.
 */
  currentPage?: number;

/**
 * Start date or date and time of the event occurrence (provided by the device).
 */
  dateFrom?: string;

/**
 * End date or date and time of the event occurrence (provided by the device).
 */
  dateTo?: string;

/**
 * A characteristic which identifies a managed object or event, for example, geolocation, electricity sensor, relay state.
 */
  fragmentType?: string;

/**
 * Allows filtering events by the fragment's value, but only when provided together with `fragmentType`.
 *
 * > **⚠️ Important:** Only fragments with a string value are supported.
 */
  fragmentValue?: string;

/**
 * Start date or date and time of the last update made.
 */
  lastUpdatedFrom?: string;

/**
 * End date or date and time of the last update made.
 */
  lastUpdatedTo?: string;

/**
 * Indicates how many entries of the collection shall be returned. The upper limit for one page is 2,000 objects.
 */
  pageSize?: number;

/**
 * If you are using a range query (that is, at least one of the `dateFrom` or `dateTo` parameters is included in the request), then setting `revert=true` will sort the results by the oldest events first.
 * By default, the results are sorted by the newest events first.
 */
  revert?: boolean;

/**
 * The managed object ID to which the event is associated.
 */
  source?: string;

/**
 * The type of event to search for.
 */
  type?: string;

/**
 * When set to `true` also events for related source assets will be included in the request. When this parameter is provided a `source` must be specified.
 */
  withSourceAssets?: boolean;

/**
 * When set to `true` also events for related source devices will be included in the request. When this parameter is provided a `source` must be specified.
 */
  withSourceDevices?: boolean;

/**
 * When set to `true`, the returned result will contain in the statistics object the total number of elements. Only applicable on [range queries](https://en.wikipedia.org/wiki/Range_query_(database)).
 */
  withTotalElements?: boolean;

/**
 * When set to `true`, the returned result will contain in the statistics object the total number of pages. Only applicable on [range queries](https://en.wikipedia.org/wiki/Range_query_(database)).
 */
  withTotalPages?: boolean;
}

export function getEventCollectionResource(http: HttpClient, rootUrl: string, params?: GetEventCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<EventCollection>> {
  const rb = new RequestBuilder(rootUrl, getEventCollectionResource.PATH, 'get');
  if (params) {
    rb.query('createdFrom', params.createdFrom, {});
    rb.query('createdTo', params.createdTo, {});
    rb.query('currentPage', params.currentPage, {});
    rb.query('dateFrom', params.dateFrom, {});
    rb.query('dateTo', params.dateTo, {});
    rb.query('fragmentType', params.fragmentType, {});
    rb.query('fragmentValue', params.fragmentValue, {});
    rb.query('lastUpdatedFrom', params.lastUpdatedFrom, {});
    rb.query('lastUpdatedTo', params.lastUpdatedTo, {});
    rb.query('pageSize', params.pageSize, {});
    rb.query('revert', params.revert, {});
    rb.query('source', params.source, {});
    rb.query('type', params.type, {});
    rb.query('withSourceAssets', params.withSourceAssets, {});
    rb.query('withSourceDevices', params.withSourceDevices, {});
    rb.query('withTotalElements', params.withTotalElements, {});
    rb.query('withTotalPages', params.withTotalPages, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.eventcollection+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EventCollection>;
    })
  );
}

getEventCollectionResource.PATH = '/event/events';
