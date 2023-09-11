/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApplicationReferenceCollection } from '../../models/application-reference-collection';

export interface GetTenantApplicationReferenceCollectionResource$Params {

/**
 * Unique identifier of a Cumulocity IoT tenant.
 */
  tenantId: string;

/**
 * The current page of the paginated results.
 */
  currentPage?: number;

/**
 * Indicates how many entries of the collection shall be returned. The upper limit for one page is 2,000 objects.
 */
  pageSize?: number;

/**
 * When set to `true`, the returned result will contain in the statistics object the total number of elements. Only applicable on [range queries](https://en.wikipedia.org/wiki/Range_query_(database)).
 */
  withTotalElements?: boolean;

/**
 * When set to `true`, the returned result will contain in the statistics object the total number of pages. Only applicable on [range queries](https://en.wikipedia.org/wiki/Range_query_(database)).
 */
  withTotalPages?: boolean;
}

export function getTenantApplicationReferenceCollectionResource(http: HttpClient, rootUrl: string, params: GetTenantApplicationReferenceCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ApplicationReferenceCollection>> {
  const rb = new RequestBuilder(rootUrl, getTenantApplicationReferenceCollectionResource.PATH, 'get');
  if (params) {
    rb.path('tenantId', params.tenantId, {});
    rb.query('currentPage', params.currentPage, {});
    rb.query('pageSize', params.pageSize, {});
    rb.query('withTotalElements', params.withTotalElements, {});
    rb.query('withTotalPages', params.withTotalPages, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.applicationreferencecollection+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApplicationReferenceCollection>;
    })
  );
}

getTenantApplicationReferenceCollectionResource.PATH = '/tenant/tenants/{tenantId}/applications';
