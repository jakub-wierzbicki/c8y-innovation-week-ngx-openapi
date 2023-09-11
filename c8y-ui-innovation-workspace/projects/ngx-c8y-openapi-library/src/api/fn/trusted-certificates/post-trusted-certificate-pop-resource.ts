/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TrustedCertificate } from '../../models/trusted-certificate';
import { UploadedTrustedCertSignedVerificationCode } from '../../models/uploaded-trusted-cert-signed-verification-code';

export interface PostTrustedCertificatePopResource$Params {

/**
 * Unique identifier of a Cumulocity IoT tenant.
 */
  tenantId: string;

/**
 * Unique identifier of a trusted certificate.
 */
  fingerprint: string;

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;
      body: UploadedTrustedCertSignedVerificationCode
}

export function postTrustedCertificatePopResource(http: HttpClient, rootUrl: string, params: PostTrustedCertificatePopResource$Params, context?: HttpContext): Observable<StrictHttpResponse<TrustedCertificate>> {
  const rb = new RequestBuilder(rootUrl, postTrustedCertificatePopResource.PATH, 'post');
  if (params) {
    rb.path('tenantId', params.tenantId, {});
    rb.path('fingerprint', params.fingerprint, {});
    rb.header('Accept', params.Accept, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TrustedCertificate>;
    })
  );
}

postTrustedCertificatePopResource.PATH = '/tenant/tenants/{tenantId}/trusted-certificates-pop/{fingerprint}/pop';
