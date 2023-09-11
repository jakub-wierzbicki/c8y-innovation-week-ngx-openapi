/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface DeleteGroupByIdResource$Params {

/**
 * Unique identifier of a Cumulocity IoT tenant.
 */
  tenantId: string;

/**
 * Unique identifier of the user group.
 */
  groupId: number;
}

export function deleteGroupByIdResource(http: HttpClient, rootUrl: string, params: DeleteGroupByIdResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, deleteGroupByIdResource.PATH, 'delete');
  if (params) {
    rb.path('tenantId', params.tenantId, {});
    rb.path('groupId', params.groupId, {});
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

deleteGroupByIdResource.PATH = '/user/{tenantId}/groups/{groupId}';
