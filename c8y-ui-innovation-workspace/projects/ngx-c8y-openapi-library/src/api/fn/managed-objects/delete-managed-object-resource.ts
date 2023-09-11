/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface DeleteManagedObjectResource$Params {

/**
 * Unique identifier of the managed object.
 */
  id: string;

/**
 * Used to explicitly control the processing mode of the request. See [Processing mode](#processing-mode) for more details.
 */
  'X-Cumulocity-Processing-Mode'?: 'PERSISTENT' | 'TRANSIENT' | 'QUIESCENT' | 'CEP';

/**
 * When set to `true` and the managed object is a device or group, all the hierarchy will be deleted.
 */
  cascade?: boolean;

/**
 * When set to `true` all the hierarchy will be deleted without checking the type of managed object. It takes precedence over the parameter `cascade`.
 */
  forceCascade?: boolean;

/**
 * When set to `true` and the managed object is a device, it deletes the associated device user (credentials).
 */
  withDeviceUser?: boolean;
}

export function deleteManagedObjectResource(http: HttpClient, rootUrl: string, params: DeleteManagedObjectResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, deleteManagedObjectResource.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
    rb.header('X-Cumulocity-Processing-Mode', params['X-Cumulocity-Processing-Mode'], {});
    rb.query('cascade', params.cascade, {});
    rb.query('forceCascade', params.forceCascade, {});
    rb.query('withDeviceUser', params.withDeviceUser, {});
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

deleteManagedObjectResource.PATH = '/inventory/managedObjects/{id}';
