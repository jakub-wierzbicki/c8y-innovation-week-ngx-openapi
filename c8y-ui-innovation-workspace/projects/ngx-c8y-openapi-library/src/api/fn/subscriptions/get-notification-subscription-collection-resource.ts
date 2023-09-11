/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { NotificationSubscriptionCollection } from '../../models/notification-subscription-collection';

export interface GetNotificationSubscriptionCollectionResource$Params {

/**
 * The context to which the subscription is associated.
 */
  context?: 'mo' | 'tenant';

/**
 * The current page of the paginated results.
 */
  currentPage?: number;

/**
 * Indicates how many entries of the collection shall be returned. The upper limit for one page is 2,000 objects.
 */
  pageSize?: number;

/**
 * The managed object ID to which the subscription is associated.
 */
  source?: string;

/**
 * The subscription name by which filtering will be done.
 */
  subscription?: string;

/**
 * The type used to filter subscriptions. This will check the subscription's `subscriptionFilter.typeFilter` field.
 * > **&#9432; Info:** Filtering by `typeFilter` may affect paging. Additional post filtering may be performed if OData-like expressions are used in the subscriptions.
 */
  typeFilter?: string;

/**
 * When set to `true`, the returned result will contain in the statistics object the total number of elements. Only applicable on [range queries](https://en.wikipedia.org/wiki/Range_query_(database)).
 */
  withTotalElements?: boolean;

/**
 * When set to `true`, the returned result will contain in the statistics object the total number of pages. Only applicable on [range queries](https://en.wikipedia.org/wiki/Range_query_(database)).
 */
  withTotalPages?: boolean;
}

export function getNotificationSubscriptionCollectionResource(http: HttpClient, rootUrl: string, params?: GetNotificationSubscriptionCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<NotificationSubscriptionCollection>> {
  const rb = new RequestBuilder(rootUrl, getNotificationSubscriptionCollectionResource.PATH, 'get');
  if (params) {
    rb.query('context', params.context, {});
    rb.query('currentPage', params.currentPage, {});
    rb.query('pageSize', params.pageSize, {});
    rb.query('source', params.source, {});
    rb.query('subscription', params.subscription, {});
    rb.query('typeFilter', params.typeFilter, {});
    rb.query('withTotalElements', params.withTotalElements, {});
    rb.query('withTotalPages', params.withTotalPages, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.subscriptioncollection+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<NotificationSubscriptionCollection>;
    })
  );
}

getNotificationSubscriptionCollectionResource.PATH = '/notification2/subscriptions';
