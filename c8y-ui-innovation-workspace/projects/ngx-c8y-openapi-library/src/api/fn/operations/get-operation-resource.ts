/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Operation } from '../../models/operation';

export interface GetOperationResource$Params {

/**
 * Unique identifier of the operation.
 */
  id: string;
}

export function getOperationResource(http: HttpClient, rootUrl: string, params: GetOperationResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Operation>> {
  const rb = new RequestBuilder(rootUrl, getOperationResource.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.operation+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Operation>;
    })
  );
}

getOperationResource.PATH = '/devicecontrol/operations/{id}';
