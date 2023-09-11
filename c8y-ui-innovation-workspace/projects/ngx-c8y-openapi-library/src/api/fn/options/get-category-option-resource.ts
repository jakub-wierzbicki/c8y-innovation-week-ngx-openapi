/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CategoryOptions } from '../../models/category-options';

export interface GetCategoryOptionResource$Params {

/**
 * The category of the options.
 */
  category: string;
}

export function getCategoryOptionResource(http: HttpClient, rootUrl: string, params: GetCategoryOptionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryOptions>> {
  const rb = new RequestBuilder(rootUrl, getCategoryOptionResource.PATH, 'get');
  if (params) {
    rb.path('category', params.category, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.option+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CategoryOptions>;
    })
  );
}

getCategoryOptionResource.PATH = '/tenant/options/{category}';
