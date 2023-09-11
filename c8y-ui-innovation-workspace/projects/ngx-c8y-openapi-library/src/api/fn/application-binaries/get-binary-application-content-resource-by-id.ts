/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface GetBinaryApplicationContentResourceById$Params {

/**
 * Unique identifier of the application.
 */
  id: string;

/**
 * Unique identifier of the binary.
 */
  binaryId: string;
}

export function getBinaryApplicationContentResourceById(http: HttpClient, rootUrl: string, params: GetBinaryApplicationContentResourceById$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, getBinaryApplicationContentResourceById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('binaryId', params.binaryId, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: 'application/zip', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Blob>;
    })
  );
}

getBinaryApplicationContentResourceById.PATH = '/application/applications/{id}/binaries/{binaryId}';
