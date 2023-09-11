/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface DeleteLoginOptionResource$Params {

/**
 * The type or ID of the login option. The type's value is case insensitive and can be `OAUTH2`, `OAUTH2_INTERNAL` or `BASIC`.
 */
  typeOrId: string;
}

export function deleteLoginOptionResource(http: HttpClient, rootUrl: string, params: DeleteLoginOptionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, deleteLoginOptionResource.PATH, 'delete');
  if (params) {
    rb.path('typeOrId', params.typeOrId, {});
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

deleteLoginOptionResource.PATH = '/tenant/loginOptions/{typeOrId}';
