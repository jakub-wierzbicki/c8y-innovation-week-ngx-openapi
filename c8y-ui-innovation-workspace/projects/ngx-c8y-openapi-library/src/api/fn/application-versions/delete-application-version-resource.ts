/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface DeleteApplicationVersionResource$Params {

/**
 * Unique identifier of the application.
 */
  id: string;

/**
 * The version field of the application version.
 */
  version?: string;

/**
 * The tag of the application version.
 */
  tag?: string;
}

export function deleteApplicationVersionResource(http: HttpClient, rootUrl: string, params: DeleteApplicationVersionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, deleteApplicationVersionResource.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
    rb.query('version', params.version, {});
    rb.query('tag', params.tag, {});
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

deleteApplicationVersionResource.PATH = '/application/applications/{id}/versions';
