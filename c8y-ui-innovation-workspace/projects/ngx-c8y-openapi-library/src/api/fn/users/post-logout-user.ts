/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface PostLogoutUser$Params {

/**
 * The authorization cookie storing the access token of the user. This parameter is specific to OAI-Secure authentication.
 */
  Cookie?: string;

/**
 * Prevents XRSF attack of the authenticated user. This parameter is specific to OAI-Secure authentication.
 */
  'X-XSRF-TOKEN'?: string;
}

export function postLogoutUser(http: HttpClient, rootUrl: string, params?: PostLogoutUser$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, postLogoutUser.PATH, 'post');
  if (params) {
    rb.header('Cookie', params.Cookie, {});
    rb.header('X-XSRF-TOKEN', params['X-XSRF-TOKEN'], {});
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

postLogoutUser.PATH = '/user/logout';
