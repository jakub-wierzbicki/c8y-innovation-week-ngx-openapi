/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface GetLastAvailabilityManagedObjectResource$Params {

/**
 * Unique identifier of the managed object.
 */
  id: string;
}

export function getLastAvailabilityManagedObjectResource(http: HttpClient, rootUrl: string, params: GetLastAvailabilityManagedObjectResource$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, getLastAvailabilityManagedObjectResource.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/plain, application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<string>;
    })
  );
}

getLastAvailabilityManagedObjectResource.PATH = '/inventory/managedObjects/{id}/availability';
