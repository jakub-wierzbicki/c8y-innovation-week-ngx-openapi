/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TrustedCertificateCollection } from '../../models/trusted-certificate-collection';
import { UploadedTrustedCertificateCollection } from '../../models/uploaded-trusted-certificate-collection';

export interface PostTrustedCertificateCollectionResourceBulk$Params {

/**
 * Unique identifier of a Cumulocity IoT tenant.
 */
  tenantId: string;

/**
 * If set to `true` the certificate is added to the truststore.
 *
 * The truststore contains all trusted certificates. A connection to a device is only established if it connects to Cumulocity IoT with a certificate in the truststore.
 */
  addToTrustStore?: boolean;

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;
      body: UploadedTrustedCertificateCollection
}

export function postTrustedCertificateCollectionResourceBulk(http: HttpClient, rootUrl: string, params: PostTrustedCertificateCollectionResourceBulk$Params, context?: HttpContext): Observable<StrictHttpResponse<TrustedCertificateCollection>> {
  const rb = new RequestBuilder(rootUrl, postTrustedCertificateCollectionResourceBulk.PATH, 'post');
  if (params) {
    rb.path('tenantId', params.tenantId, {});
    rb.query('addToTrustStore', params.addToTrustStore, {});
    rb.header('Accept', params.Accept, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TrustedCertificateCollection>;
    })
  );
}

postTrustedCertificateCollectionResourceBulk.PATH = '/tenant/tenants/{tenantId}/trusted-certificates/bulk';
