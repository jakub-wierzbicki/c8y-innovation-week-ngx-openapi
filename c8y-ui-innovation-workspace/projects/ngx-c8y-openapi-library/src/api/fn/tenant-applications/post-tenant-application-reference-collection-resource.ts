/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApplicationReference } from '../../models/application-reference';
import { SubscribedApplicationReference } from '../../models/subscribed-application-reference';

export interface PostTenantApplicationReferenceCollectionResource$Params {

/**
 * Unique identifier of a Cumulocity IoT tenant.
 */
  tenantId: string;

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;
      body: SubscribedApplicationReference
}

export function postTenantApplicationReferenceCollectionResource(http: HttpClient, rootUrl: string, params: PostTenantApplicationReferenceCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ApplicationReference>> {
  const rb = new RequestBuilder(rootUrl, postTenantApplicationReferenceCollectionResource.PATH, 'post');
  if (params) {
    rb.path('tenantId', params.tenantId, {});
    rb.header('Accept', params.Accept, {});
    rb.body(params.body, 'application/vnd.com.nsn.cumulocity.applicationreference+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.applicationreference+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApplicationReference>;
    })
  );
}

postTenantApplicationReferenceCollectionResource.PATH = '/tenant/tenants/{tenantId}/applications';
