/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RetentionRule } from '../../models/retention-rule';

export interface PutRetentionRuleResource$Params {

/**
 * Unique identifier of the retention rule.
 */
  id: string;

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;
      body: RetentionRule
}

export function putRetentionRuleResource(http: HttpClient, rootUrl: string, params: PutRetentionRuleResource$Params, context?: HttpContext): Observable<StrictHttpResponse<RetentionRule>> {
  const rb = new RequestBuilder(rootUrl, putRetentionRuleResource.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.header('Accept', params.Accept, {});
    rb.body(params.body, 'application/vnd.com.nsn.cumulocity.retentionrule+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.retentionrule+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RetentionRule>;
    })
  );
}

putRetentionRuleResource.PATH = '/retention/retentions/{id}';
