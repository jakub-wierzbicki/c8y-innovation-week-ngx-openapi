/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ManagedObjectUser } from '../../models/managed-object-user';

export interface GetManagedObjectUserResource$Params {

/**
 * Unique identifier of the managed object.
 */
  id: string;
}

export function getManagedObjectUserResource(http: HttpClient, rootUrl: string, params: GetManagedObjectUserResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ManagedObjectUser>> {
  const rb = new RequestBuilder(rootUrl, getManagedObjectUserResource.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.managedobjectuser+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ManagedObjectUser>;
    })
  );
}

getManagedObjectUserResource.PATH = '/inventory/managedObjects/{id}/user';
