/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TenantCollection } from '../../models/tenant-collection';

export interface GetTenantCollectionResource$Params {

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

/**
 * Company name associated with the Cumulocity IoT tenant.
 */
  company?: string;

/**
 * Domain name of the Cumulocity IoT tenant.
 */
  domain?: string;

/**
 * Identifier of the Cumulocity IoT tenant's parent.
 */
  parent?: string;
}

export function getTenantCollectionResource(http: HttpClient, rootUrl: string, params?: GetTenantCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<TenantCollection>> {
  const rb = new RequestBuilder(rootUrl, getTenantCollectionResource.PATH, 'get');
  if (params) {
    rb.query('currentPage', params.currentPage, {});
    rb.query('pageSize', params.pageSize, {});
    rb.query('withTotalElements', params.withTotalElements, {});
    rb.query('withTotalPages', params.withTotalPages, {});
    rb.query('company', params.company, {});
    rb.query('domain', params.domain, {});
    rb.query('parent', params.parent, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.tenantcollection+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TenantCollection>;
    })
  );
}

getTenantCollectionResource.PATH = '/tenant/tenants';
