/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RangeStatisticsFile } from '../../models/range-statistics-file';
import { StatisticsFile } from '../../models/statistics-file';

export interface PostGenerateStatisticsFileRequest$Params {

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;
      body: RangeStatisticsFile
}

export function postGenerateStatisticsFileRequest(http: HttpClient, rootUrl: string, params: PostGenerateStatisticsFileRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<StatisticsFile>> {
  const rb = new RequestBuilder(rootUrl, postGenerateStatisticsFileRequest.PATH, 'post');
  if (params) {
    rb.header('Accept', params.Accept, {});
    rb.body(params.body, 'application/vnd.com.nsn.cumulocity.tenantstatisticsdate+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.tenantstatisticsfile+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<StatisticsFile>;
    })
  );
}

postGenerateStatisticsFileRequest.PATH = '/tenant/statistics/files';
