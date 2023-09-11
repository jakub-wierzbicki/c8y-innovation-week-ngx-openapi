/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Role } from '../../models/role';

export interface GetRoleCollectionResourceByName$Params {

/**
 * The name of the user role.
 */
  name: string;
}

export function getRoleCollectionResourceByName(http: HttpClient, rootUrl: string, params: GetRoleCollectionResourceByName$Params, context?: HttpContext): Observable<StrictHttpResponse<Role>> {
  const rb = new RequestBuilder(rootUrl, getRoleCollectionResourceByName.PATH, 'get');
  if (params) {
    rb.path('name', params.name, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.role+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Role>;
    })
  );
}

getRoleCollectionResourceByName.PATH = '/user/roles/{name}';
