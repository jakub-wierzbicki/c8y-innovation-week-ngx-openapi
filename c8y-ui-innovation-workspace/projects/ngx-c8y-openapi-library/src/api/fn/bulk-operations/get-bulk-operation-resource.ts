/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BulkOperation } from '../../models/bulk-operation';

export interface GetBulkOperationResource$Params {

/**
 * Unique identifier of the bulk operation.
 */
  id: string;
}

export function getBulkOperationResource(http: HttpClient, rootUrl: string, params: GetBulkOperationResource$Params, context?: HttpContext): Observable<StrictHttpResponse<BulkOperation>> {
  const rb = new RequestBuilder(rootUrl, getBulkOperationResource.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.bulkoperation+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<BulkOperation>;
    })
  );
}

getBulkOperationResource.PATH = '/devicecontrol/bulkoperations/{id}';
