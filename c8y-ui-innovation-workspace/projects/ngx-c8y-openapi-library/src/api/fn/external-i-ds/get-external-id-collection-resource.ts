/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ExternalIds } from '../../models/external-ids';

export interface GetExternalIdCollectionResource$Params {

/**
 * Unique identifier of the managed object.
 */
  id: string;
}

export function getExternalIdCollectionResource(http: HttpClient, rootUrl: string, params: GetExternalIdCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ExternalIds>> {
  const rb = new RequestBuilder(rootUrl, getExternalIdCollectionResource.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.externalidcollection+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ExternalIds>;
    })
  );
}

getExternalIdCollectionResource.PATH = '/identity/globalIds/{id}/externalIds';
