/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CategoryOptions } from '../../models/category-options';

export interface PutCategoryOptionResource$Params {

/**
 * The category of the options.
 */
  category: string;

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;
      body: CategoryOptions
}

export function putCategoryOptionResource(http: HttpClient, rootUrl: string, params: PutCategoryOptionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryOptions>> {
  const rb = new RequestBuilder(rootUrl, putCategoryOptionResource.PATH, 'put');
  if (params) {
    rb.path('category', params.category, {});
    rb.header('Accept', params.Accept, {});
    rb.body(params.body, 'application/json');
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

putCategoryOptionResource.PATH = '/tenant/options/{category}';
