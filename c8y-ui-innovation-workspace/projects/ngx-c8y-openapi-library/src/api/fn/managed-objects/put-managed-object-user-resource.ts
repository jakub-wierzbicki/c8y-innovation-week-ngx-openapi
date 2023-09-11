/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ManagedObjectUser } from '../../models/managed-object-user';

export interface PutManagedObjectUserResource$Params {

/**
 * Unique identifier of the managed object.
 */
  id: string;

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;

/**
 * Used to explicitly control the processing mode of the request. See [Processing mode](#processing-mode) for more details.
 */
  'X-Cumulocity-Processing-Mode'?: 'PERSISTENT' | 'TRANSIENT' | 'QUIESCENT' | 'CEP';
      body: ManagedObjectUser
}

export function putManagedObjectUserResource(http: HttpClient, rootUrl: string, params: PutManagedObjectUserResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ManagedObjectUser>> {
  const rb = new RequestBuilder(rootUrl, putManagedObjectUserResource.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.header('Accept', params.Accept, {});
    rb.header('X-Cumulocity-Processing-Mode', params['X-Cumulocity-Processing-Mode'], {});
    rb.body(params.body, 'application/vnd.com.nsn.cumulocity.managedobjectuser+json');
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

putManagedObjectUserResource.PATH = '/inventory/managedObjects/{id}/user';
