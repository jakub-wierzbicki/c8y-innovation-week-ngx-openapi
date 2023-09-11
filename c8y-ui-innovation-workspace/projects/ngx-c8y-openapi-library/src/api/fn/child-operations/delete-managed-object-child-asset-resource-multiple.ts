/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ChildOperationsAddMultiple } from '../../models/child-operations-add-multiple';

export interface DeleteManagedObjectChildAssetResourceMultiple$Params {

/**
 * Unique identifier of the managed object.
 */
  id: string;

/**
 * Used to explicitly control the processing mode of the request. See [Processing mode](#processing-mode) for more details.
 */
  'X-Cumulocity-Processing-Mode'?: 'PERSISTENT' | 'TRANSIENT' | 'QUIESCENT' | 'CEP';
      body: ChildOperationsAddMultiple
}

export function deleteManagedObjectChildAssetResourceMultiple(http: HttpClient, rootUrl: string, params: DeleteManagedObjectChildAssetResourceMultiple$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, deleteManagedObjectChildAssetResourceMultiple.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
    rb.header('X-Cumulocity-Processing-Mode', params['X-Cumulocity-Processing-Mode'], {});
    rb.body(params.body, 'application/vnd.com.nsn.cumulocity.managedobjectreferencecollection+json');
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

deleteManagedObjectChildAssetResourceMultiple.PATH = '/inventory/managedObjects/{id}/childAssets';
