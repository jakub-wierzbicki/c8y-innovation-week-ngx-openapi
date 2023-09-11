/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Option } from '../../models/option';

export interface GetOptionResource$Params {

/**
 * The category of the options.
 */
  category: string;

/**
 * The key of an option.
 */
  key: string;
}

export function getOptionResource(http: HttpClient, rootUrl: string, params: GetOptionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Option>> {
  const rb = new RequestBuilder(rootUrl, getOptionResource.PATH, 'get');
  if (params) {
    rb.path('category', params.category, {});
    rb.path('key', params.key, {});
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

getOptionResource.PATH = '/tenant/options/{category}/{key}';
