/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TrustedCertificate } from '../../models/trusted-certificate';
import { UploadedTrustedCertificate } from '../../models/uploaded-trusted-certificate';

export interface PostTrustedCertificateCollectionResource$Params {

/**
 * Unique identifier of a Cumulocity IoT tenant.
 */
  tenantId: string;

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;

/**
 * Used to explicitly control the processing mode of the request. See [Processing mode](#processing-mode) for more details.
 */
  'X-Cumulocity-Processing-Mode'?: 'PERSISTENT' | 'TRANSIENT' | 'QUIESCENT' | 'CEP';

/**
 * If set to `true` the certificate is added to the truststore.
 *
 * The truststore contains all trusted certificates. A connection to a device is only established if it connects to Cumulocity IoT with a certificate in the truststore.
 */
  addToTrustStore?: boolean;
      body: UploadedTrustedCertificate
}

export function postTrustedCertificateCollectionResource(http: HttpClient, rootUrl: string, params: PostTrustedCertificateCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<TrustedCertificate>> {
  const rb = new RequestBuilder(rootUrl, postTrustedCertificateCollectionResource.PATH, 'post');
  if (params) {
    rb.path('tenantId', params.tenantId, {});
    rb.header('Accept', params.Accept, {});
    rb.header('X-Cumulocity-Processing-Mode', params['X-Cumulocity-Processing-Mode'], {});
    rb.query('addToTrustStore', params.addToTrustStore, {});
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

postTrustedCertificateCollectionResource.PATH = '/tenant/tenants/{tenantId}/trusted-certificates';
