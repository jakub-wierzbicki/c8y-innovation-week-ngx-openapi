/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface DeleteOptionResource$Params {

/**
 * The category of the options.
 */
  category: string;

/**
 * The key of an option.
 */
  key: string;
}

export function deleteOptionResource(http: HttpClient, rootUrl: string, params: DeleteOptionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, deleteOptionResource.PATH, 'delete');
  if (params) {
    rb.path('category', params.category, {});
    rb.path('key', params.key, {});
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

deleteOptionResource.PATH = '/tenant/options/{category}/{key}';
