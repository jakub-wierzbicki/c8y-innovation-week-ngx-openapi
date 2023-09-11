/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Operation } from '../../models/operation';

export interface PostOperationCollectionResource$Params {

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;

/**
 * Used to explicitly control the processing mode of the request. See [Processing mode](#processing-mode) for more details.
 */
  'X-Cumulocity-Processing-Mode'?: 'PERSISTENT' | 'TRANSIENT' | 'QUIESCENT' | 'CEP';
      body: Operation & {
'status'?: any;
}
}

export function postOperationCollectionResource(http: HttpClient, rootUrl: string, params: PostOperationCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Operation>> {
  const rb = new RequestBuilder(rootUrl, postOperationCollectionResource.PATH, 'post');
  if (params) {
    rb.header('Accept', params.Accept, {});
    rb.header('X-Cumulocity-Processing-Mode', params['X-Cumulocity-Processing-Mode'], {});
    rb.body(params.body, 'application/vnd.com.nsn.cumulocity.operation+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.operation+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Operation>;
    })
  );
}

postOperationCollectionResource.PATH = '/devicecontrol/operations';
