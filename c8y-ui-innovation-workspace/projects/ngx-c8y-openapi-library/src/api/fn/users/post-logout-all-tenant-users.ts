/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface PostLogoutAllTenantUsers$Params {

/**
 * Unique identifier of a Cumulocity IoT tenant.
 */
  tenantId: string;
}

export function postLogoutAllTenantUsers(http: HttpClient, rootUrl: string, params: PostLogoutAllTenantUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, postLogoutAllTenantUsers.PATH, 'post');
  if (params) {
    rb.path('tenantId', params.tenantId, {});
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

postLogoutAllTenantUsers.PATH = '/user/logout/{tenantId}/allUsers';
