/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TrustedCertificate } from '../../models/trusted-certificate';

export interface PostVerificationCodeTrustedCertificatesPopResource$Params {

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
}

export function postVerificationCodeTrustedCertificatesPopResource(http: HttpClient, rootUrl: string, params: PostVerificationCodeTrustedCertificatesPopResource$Params, context?: HttpContext): Observable<StrictHttpResponse<TrustedCertificate>> {
  const rb = new RequestBuilder(rootUrl, postVerificationCodeTrustedCertificatesPopResource.PATH, 'post');
  if (params) {
    rb.path('tenantId', params.tenantId, {});
    rb.path('fingerprint', params.fingerprint, {});
    rb.header('Accept', params.Accept, {});
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

postVerificationCodeTrustedCertificatesPopResource.PATH = '/tenant/tenants/{tenantId}/trusted-certificates-pop/{fingerprint}/verification-code';
