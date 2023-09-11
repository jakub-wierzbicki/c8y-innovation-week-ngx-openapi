/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BootstrapUser } from '../../models/bootstrap-user';

export interface GetApplicationUserRepresentation$Params {

/**
 * Unique identifier of the application.
 */
  id: string;
}

export function getApplicationUserRepresentation(http: HttpClient, rootUrl: string, params: GetApplicationUserRepresentation$Params, context?: HttpContext): Observable<StrictHttpResponse<BootstrapUser>> {
  const rb = new RequestBuilder(rootUrl, getApplicationUserRepresentation.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.user+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<BootstrapUser>;
    })
  );
}

getApplicationUserRepresentation.PATH = '/application/applications/{id}/bootstrapUser';
