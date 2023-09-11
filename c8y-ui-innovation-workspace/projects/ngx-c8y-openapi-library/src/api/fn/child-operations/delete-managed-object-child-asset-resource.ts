/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface DeleteManagedObjectChildAssetResource$Params {

/**
 * Unique identifier of the managed object.
 */
  id: string;

/**
 * Unique identifier of the child object.
 */
  childId: string;

/**
 * Used to explicitly control the processing mode of the request. See [Processing mode](#processing-mode) for more details.
 */
  'X-Cumulocity-Processing-Mode'?: 'PERSISTENT' | 'TRANSIENT' | 'QUIESCENT' | 'CEP';
}

export function deleteManagedObjectChildAssetResource(http: HttpClient, rootUrl: string, params: DeleteManagedObjectChildAssetResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, deleteManagedObjectChildAssetResource.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('childId', params.childId, {});
    rb.header('X-Cumulocity-Processing-Mode', params['X-Cumulocity-Processing-Mode'], {});
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

deleteManagedObjectChildAssetResource.PATH = '/inventory/managedObjects/{id}/childAssets/{childId}';
