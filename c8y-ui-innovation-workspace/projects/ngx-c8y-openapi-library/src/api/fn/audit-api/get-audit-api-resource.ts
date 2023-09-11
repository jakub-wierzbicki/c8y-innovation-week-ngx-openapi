/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AuditApiResource } from '../../models/audit-api-resource';

export interface GetAuditApiResource$Params {
}

export function getAuditApiResource(http: HttpClient, rootUrl: string, params?: GetAuditApiResource$Params, context?: HttpContext): Observable<StrictHttpResponse<AuditApiResource>> {
  const rb = new RequestBuilder(rootUrl, getAuditApiResource.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.auditapi+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AuditApiResource>;
    })
  );
}

getAuditApiResource.PATH = '/audit';
