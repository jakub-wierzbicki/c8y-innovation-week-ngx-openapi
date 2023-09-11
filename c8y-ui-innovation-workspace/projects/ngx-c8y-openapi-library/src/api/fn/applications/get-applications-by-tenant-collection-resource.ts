/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApplicationCollection } from '../../models/application-collection';
import { DescNextPage } from '../../models/desc-next-page';
import { DescPrevPage } from '../../models/desc-prev-page';
import { DescSelf } from '../../models/desc-self';

export interface GetApplicationsByTenantCollectionResource$Params {

/**
 * Unique identifier of a Cumulocity IoT tenant.
 */
  tenantId: string;
}

export function getApplicationsByTenantCollectionResource(http: HttpClient, rootUrl: string, params: GetApplicationsByTenantCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ApplicationCollection & {
'self'?: DescSelf & any;
'prev'?: DescPrevPage & any;
'next'?: DescNextPage & any;
}>> {
  const rb = new RequestBuilder(rootUrl, getApplicationsByTenantCollectionResource.PATH, 'get');
  if (params) {
    rb.path('tenantId', params.tenantId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.applicationcollection+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApplicationCollection & {
      'self'?: DescSelf & any;
      'prev'?: DescPrevPage & any;
      'next'?: DescNextPage & any;
      }>;
    })
  );
}

getApplicationsByTenantCollectionResource.PATH = '/application/applicationsByTenant/{tenantId}';
