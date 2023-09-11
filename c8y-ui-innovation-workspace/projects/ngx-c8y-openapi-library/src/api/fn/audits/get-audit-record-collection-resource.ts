/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AuditRecordCollection } from '../../models/audit-record-collection';

export interface GetAuditRecordCollectionResource$Params {

/**
 * Name of the application from which the audit was carried out.
 */
  application?: string;

/**
 * The current page of the paginated results.
 */
  currentPage?: number;

/**
 * Start date or date and time of the audit record.
 */
  dateFrom?: string;

/**
 * End date or date and time of the audit record.
 */
  dateTo?: string;

/**
 * Indicates how many entries of the collection shall be returned. The upper limit for one page is 2,000 objects.
 */
  pageSize?: number;

/**
 * The platform component ID to which the audit is associated.
 */
  source?: string;

/**
 * The type of audit record to search for.
 */
  type?: string;

/**
 * The username to search for.
 */
  user?: string;

/**
 * When set to `true`, the returned result will contain in the statistics object the total number of elements. Only applicable on [range queries](https://en.wikipedia.org/wiki/Range_query_(database)).
 */
  withTotalElements?: boolean;

/**
 * When set to `true`, the returned result will contain in the statistics object the total number of pages. Only applicable on [range queries](https://en.wikipedia.org/wiki/Range_query_(database)).
 */
  withTotalPages?: boolean;
}

export function getAuditRecordCollectionResource(http: HttpClient, rootUrl: string, params?: GetAuditRecordCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<AuditRecordCollection>> {
  const rb = new RequestBuilder(rootUrl, getAuditRecordCollectionResource.PATH, 'get');
  if (params) {
    rb.query('application', params.application, {});
    rb.query('currentPage', params.currentPage, {});
    rb.query('dateFrom', params.dateFrom, {});
    rb.query('dateTo', params.dateTo, {});
    rb.query('pageSize', params.pageSize, {});
    rb.query('source', params.source, {});
    rb.query('type', params.type, {});
    rb.query('user', params.user, {});
    rb.query('withTotalElements', params.withTotalElements, {});
    rb.query('withTotalPages', params.withTotalPages, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.auditrecordcollection+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AuditRecordCollection>;
    })
  );
}

getAuditRecordCollectionResource.PATH = '/audit/auditRecords';
