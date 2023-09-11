/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RetentionRule } from '../../models/retention-rule';

export interface GetRetentionRuleResource$Params {

/**
 * Unique identifier of the retention rule.
 */
  id: string;
}

export function getRetentionRuleResource(http: HttpClient, rootUrl: string, params: GetRetentionRuleResource$Params, context?: HttpContext): Observable<StrictHttpResponse<RetentionRule>> {
  const rb = new RequestBuilder(rootUrl, getRetentionRuleResource.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getRetentionRuleResource.PATH = '/retention/retentions/{id}';
