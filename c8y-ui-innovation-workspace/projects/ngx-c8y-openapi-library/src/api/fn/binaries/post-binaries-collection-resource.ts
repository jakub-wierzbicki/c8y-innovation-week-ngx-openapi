/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Binary } from '../../models/binary';
import { BinaryInfo } from '../../models/binary-info';

export interface PostBinariesCollectionResource$Params {
      body: {
'object': BinaryInfo;

/**
 * Path of the file to be uploaded.
 */
'file': Blob;
}
}

export function postBinariesCollectionResource(http: HttpClient, rootUrl: string, params: PostBinariesCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Binary>> {
  const rb = new RequestBuilder(rootUrl, postBinariesCollectionResource.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.managedobject+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Binary>;
    })
  );
}

postBinariesCollectionResource.PATH = '/inventory/binaries';
