/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ManagedObjectReference } from '../../models/managed-object-reference';

export interface GetManagedObjectChildAssetResource$Params {

/**
 * Unique identifier of the managed object.
 */
  id: string;

/**
 * Unique identifier of the child object.
 */
  childId: string;
}

export function getManagedObjectChildAssetResource(http: HttpClient, rootUrl: string, params: GetManagedObjectChildAssetResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ManagedObjectReference & {
'self'?: any;
}>> {
  const rb = new RequestBuilder(rootUrl, getManagedObjectChildAssetResource.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('childId', params.childId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.managedobjectreference+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ManagedObjectReference & {
      'self'?: any;
      }>;
    })
  );
}

getManagedObjectChildAssetResource.PATH = '/inventory/managedObjects/{id}/childAssets/{childId}';
