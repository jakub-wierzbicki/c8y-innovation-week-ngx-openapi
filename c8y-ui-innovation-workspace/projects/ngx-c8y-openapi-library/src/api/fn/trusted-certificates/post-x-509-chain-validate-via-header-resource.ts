/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { VerifyCertificateChain } from '../../models/verify-certificate-chain';

export interface PostX509ChainValidateViaHeaderResource$Params {

/**
 * Used to send a tenant ID.
 */
  'X-Cumulocity-TenantId'?: string;

/**
 * Used to send a certificate chain in the header. Separate the chain with `,` and also each 64 bit block with ` ` (a space character).
 */
  'X-Cumulocity-Client-Cert-Chain': string;
}

export function postX509ChainValidateViaHeaderResource(http: HttpClient, rootUrl: string, params: PostX509ChainValidateViaHeaderResource$Params, context?: HttpContext): Observable<StrictHttpResponse<VerifyCertificateChain>> {
  const rb = new RequestBuilder(rootUrl, postX509ChainValidateViaHeaderResource.PATH, 'post');
  if (params) {
    rb.header('X-Cumulocity-TenantId', params['X-Cumulocity-TenantId'], {});
    rb.header('X-Cumulocity-Client-Cert-Chain', params['X-Cumulocity-Client-Cert-Chain'], {});
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

postX509ChainValidateViaHeaderResource.PATH = '/tenant/tenants/verify-cert-chain';
