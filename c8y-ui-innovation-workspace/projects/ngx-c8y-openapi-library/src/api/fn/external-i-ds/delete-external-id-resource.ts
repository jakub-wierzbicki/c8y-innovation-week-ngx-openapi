/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface DeleteExternalIdResource$Params {

/**
 * The identifier used in the external system that Cumulocity IoT interfaces with.
 */
  type: string;

/**
 * The type of the external identifier.
 */
  externalId: string;
}

export function deleteExternalIdResource(http: HttpClient, rootUrl: string, params: DeleteExternalIdResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, deleteExternalIdResource.PATH, 'delete');
  if (params) {
    rb.path('type', params.type, {});
    rb.path('externalId', params.externalId, {});
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

deleteExternalIdResource.PATH = '/identity/externalIds/{type}/{externalId}';
