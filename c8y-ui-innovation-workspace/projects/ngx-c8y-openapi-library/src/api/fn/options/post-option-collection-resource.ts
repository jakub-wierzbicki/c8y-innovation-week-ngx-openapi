/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Option } from '../../models/option';

export interface PostOptionCollectionResource$Params {

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;
      body: Option & any
}

export function postOptionCollectionResource(http: HttpClient, rootUrl: string, params: PostOptionCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Option>> {
  const rb = new RequestBuilder(rootUrl, postOptionCollectionResource.PATH, 'post');
  if (params) {
    rb.header('Accept', params.Accept, {});
    rb.body(params.body, 'application/vnd.com.nsn.cumulocity.option+json');
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

postOptionCollectionResource.PATH = '/tenant/options';
