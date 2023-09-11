/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ExternalId } from '../../models/external-id';

export interface GetExternalIdResource$Params {

/**
 * The identifier used in the external system that Cumulocity IoT interfaces with.
 */
  type: string;

/**
 * The type of the external identifier.
 */
  externalId: string;
}

export function getExternalIdResource(http: HttpClient, rootUrl: string, params: GetExternalIdResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ExternalId>> {
  const rb = new RequestBuilder(rootUrl, getExternalIdResource.PATH, 'get');
  if (params) {
    rb.path('type', params.type, {});
    rb.path('externalId', params.externalId, {});
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

getExternalIdResource.PATH = '/identity/externalIds/{type}/{externalId}';
