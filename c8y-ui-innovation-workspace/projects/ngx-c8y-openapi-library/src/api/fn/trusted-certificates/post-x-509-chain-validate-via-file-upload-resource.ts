/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { VerifyCertificateChain } from '../../models/verify-certificate-chain';

export interface PostX509ChainValidateViaFileUploadResource$Params {
      body: {
'tenantId'?: string;

/**
 * File to be uploaded.
 */
'file': Blob;
}
}

export function postX509ChainValidateViaFileUploadResource(http: HttpClient, rootUrl: string, params: PostX509ChainValidateViaFileUploadResource$Params, context?: HttpContext): Observable<StrictHttpResponse<VerifyCertificateChain>> {
  const rb = new RequestBuilder(rootUrl, postX509ChainValidateViaFileUploadResource.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<VerifyCertificateChain>;
    })
  );
}

postX509ChainValidateViaFileUploadResource.PATH = '/tenant/tenants/verify-cert-chain/fileUpload';
