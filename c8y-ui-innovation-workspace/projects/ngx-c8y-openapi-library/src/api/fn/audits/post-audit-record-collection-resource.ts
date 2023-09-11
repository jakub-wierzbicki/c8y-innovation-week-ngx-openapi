/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AuditRecord } from '../../models/audit-record';

export interface PostAuditRecordCollectionResource$Params {

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;
      body: AuditRecord
}

export function postAuditRecordCollectionResource(http: HttpClient, rootUrl: string, params: PostAuditRecordCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<AuditRecord>> {
  const rb = new RequestBuilder(rootUrl, postAuditRecordCollectionResource.PATH, 'post');
  if (params) {
    rb.header('Accept', params.Accept, {});
    rb.body(params.body, 'application/vnd.com.nsn.cumulocity.auditrecord+json');
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

postAuditRecordCollectionResource.PATH = '/audit/auditRecords';
