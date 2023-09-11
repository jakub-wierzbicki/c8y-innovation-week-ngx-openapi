/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface DeleteBinaryApplicationContentResourceById$Params {

/**
 * Unique identifier of the application.
 */
  id: string;

/**
 * Unique identifier of the binary.
 */
  binaryId: string;
}

export function deleteBinaryApplicationContentResourceById(http: HttpClient, rootUrl: string, params: DeleteBinaryApplicationContentResourceById$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, deleteBinaryApplicationContentResourceById.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('binaryId', params.binaryId, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

deleteBinaryApplicationContentResourceById.PATH = '/application/applications/{id}/binaries/{binaryId}';
