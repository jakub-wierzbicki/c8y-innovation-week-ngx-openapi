/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CategoryKeyOption } from '../../models/category-key-option';
import { Option } from '../../models/option';

export interface PutOptionResource$Params {

/**
 * The category of the options.
 */
  category: string;

/**
 * The key of an option.
 */
  key: string;

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;
      body: CategoryKeyOption
}

export function putOptionResource(http: HttpClient, rootUrl: string, params: PutOptionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Option>> {
  const rb = new RequestBuilder(rootUrl, putOptionResource.PATH, 'put');
  if (params) {
    rb.path('category', params.category, {});
    rb.path('key', params.key, {});
    rb.header('Accept', params.Accept, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.option+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Option>;
    })
  );
}

putOptionResource.PATH = '/tenant/options/{category}/{key}';
