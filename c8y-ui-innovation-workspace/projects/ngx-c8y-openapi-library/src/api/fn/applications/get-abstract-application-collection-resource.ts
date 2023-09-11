/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApplicationCollection } from '../../models/application-collection';

export interface GetAbstractApplicationCollectionResource$Params {

/**
 * The current page of the paginated results.
 */
  currentPage?: number;

/**
 * The name of the application.
 */
  name?: string;

/**
 * The ID of the tenant that owns the applications.
 */
  owner?: string;

/**
 * Indicates how many entries of the collection shall be returned. The upper limit for one page is 2,000 objects.
 */
  pageSize?: number;

/**
 * The ID of a tenant that is subscribed to the applications but doesn't own them.
 */
  providedFor?: string;

/**
 * The ID of a tenant that is subscribed to the applications.
 */
  subscriber?: string;

/**
 * The ID of a tenant that either owns the application or is subscribed to the applications.
 */
  tenant?: string;

/**
 * The type of the application. It is possible to use multiple values separated by a comma. For example, `EXTERNAL,HOSTED` will return only applications with type `EXTERNAL` or `HOSTED`.
 */
  type?: 'EXTERNAL' | 'HOSTED' | 'MICROSERVICE';

/**
 * The ID of a user that has access to the applications.
 */
  user?: string;

/**
 * When set to `true`, the returned result will contain in the statistics object the total number of elements. Only applicable on [range queries](https://en.wikipedia.org/wiki/Range_query_(database)).
 */
  withTotalElements?: boolean;

/**
 * When set to `true`, the returned result will contain in the statistics object the total number of pages. Only applicable on [range queries](https://en.wikipedia.org/wiki/Range_query_(database)).
 */
  withTotalPages?: boolean;

/**
 * When set to `true`, the returned result contains applications with an `applicationVersions` field that is not empty. When set to `false`, the result will contain applications with an empty `applicationVersions` field.
 */
  hasVersions?: boolean;
}

export function getAbstractApplicationCollectionResource(http: HttpClient, rootUrl: string, params?: GetAbstractApplicationCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ApplicationCollection>> {
  const rb = new RequestBuilder(rootUrl, getAbstractApplicationCollectionResource.PATH, 'get');
  if (params) {
    rb.query('currentPage', params.currentPage, {});
    rb.query('name', params.name, {});
    rb.query('owner', params.owner, {});
    rb.query('pageSize', params.pageSize, {});
    rb.query('providedFor', params.providedFor, {});
    rb.query('subscriber', params.subscriber, {});
    rb.query('tenant', params.tenant, {});
    rb.query('type', params.type, {});
    rb.query('user', params.user, {});
    rb.query('withTotalElements', params.withTotalElements, {});
    rb.query('withTotalPages', params.withTotalPages, {});
    rb.query('hasVersions', params.hasVersions, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.applicationcollection+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApplicationCollection>;
    })
  );
}

getAbstractApplicationCollectionResource.PATH = '/application/applications';
