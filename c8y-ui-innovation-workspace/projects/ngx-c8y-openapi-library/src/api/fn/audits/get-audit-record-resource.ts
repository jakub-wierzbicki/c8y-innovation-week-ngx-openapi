/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AuditRecord } from '../../models/audit-record';

export interface GetAuditRecordResource$Params {

/**
 * Unique identifier of the audit record.
 */
  id: string;
}

export function getAuditRecordResource(http: HttpClient, rootUrl: string, params: GetAuditRecordResource$Params, context?: HttpContext): Observable<StrictHttpResponse<AuditRecord>> {
  const rb = new RequestBuilder(rootUrl, getAuditRecordResource.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.auditrecord+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AuditRecord>;
    })
  );
}

getAuditRecordResource.PATH = '/audit/auditRecords/{id}';
