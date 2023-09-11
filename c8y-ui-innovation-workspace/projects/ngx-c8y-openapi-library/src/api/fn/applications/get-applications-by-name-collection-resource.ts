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

export interface GetApplicationsByNameCollectionResource$Params {

/**
 * The name of the application.
 */
  name: string;
}

export function getApplicationsByNameCollectionResource(http: HttpClient, rootUrl: string, params: GetApplicationsByNameCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ApplicationCollection & {
'self'?: DescSelf & any;
'prev'?: DescPrevPage & any;
'next'?: DescNextPage & any;
}>> {
  const rb = new RequestBuilder(rootUrl, getApplicationsByNameCollectionResource.PATH, 'get');
  if (params) {
    rb.path('name', params.name, {});
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

getApplicationsByNameCollectionResource.PATH = '/application/applicationsByName/{name}';
