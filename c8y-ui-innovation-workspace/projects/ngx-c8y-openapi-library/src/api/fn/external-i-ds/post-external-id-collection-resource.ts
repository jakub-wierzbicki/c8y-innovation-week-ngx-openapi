/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ExternalId } from '../../models/external-id';

export interface PostExternalIdCollectionResource$Params {

/**
 * Unique identifier of the managed object.
 */
  id: string;

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;
      body: ExternalId
}

export function postExternalIdCollectionResource(http: HttpClient, rootUrl: string, params: PostExternalIdCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ExternalId>> {
  const rb = new RequestBuilder(rootUrl, postExternalIdCollectionResource.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.header('Accept', params.Accept, {});
    rb.body(params.body, 'application/vnd.com.nsn.cumulocity.externalid+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.externalid+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ExternalId>;
    })
  );
}

postExternalIdCollectionResource.PATH = '/identity/globalIds/{id}/externalIds';
