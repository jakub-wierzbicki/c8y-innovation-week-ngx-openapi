/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface DeleteTrustedCertificateResource$Params {

/**
 * Unique identifier of a Cumulocity IoT tenant.
 */
  tenantId: string;

/**
 * Unique identifier of a trusted certificate.
 */
  fingerprint: string;
}

export function deleteTrustedCertificateResource(http: HttpClient, rootUrl: string, params: DeleteTrustedCertificateResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, deleteTrustedCertificateResource.PATH, 'delete');
  if (params) {
    rb.path('tenantId', params.tenantId, {});
    rb.path('fingerprint', params.fingerprint, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

deleteTrustedCertificateResource.PATH = '/tenant/tenants/{tenantId}/trusted-certificates/{fingerprint}';
