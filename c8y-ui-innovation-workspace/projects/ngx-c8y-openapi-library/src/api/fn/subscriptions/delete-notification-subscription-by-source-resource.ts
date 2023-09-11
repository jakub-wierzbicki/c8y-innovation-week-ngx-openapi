/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface DeleteNotificationSubscriptionBySourceResource$Params {

/**
 * Used to explicitly control the processing mode of the request. See [Processing mode](#processing-mode) for more details.
 */
  'X-Cumulocity-Processing-Mode'?: 'PERSISTENT' | 'TRANSIENT' | 'QUIESCENT' | 'CEP';

/**
 * The context to which the subscription is associated.
 * > **&#9432; Info:** If the value is `mo`, then `source` must also be provided in the query.
 */
  context?: 'mo' | 'tenant';

/**
 * The managed object ID to which the subscription is associated.
 */
  source?: string;
}

export function deleteNotificationSubscriptionBySourceResource(http: HttpClient, rootUrl: string, params?: DeleteNotificationSubscriptionBySourceResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, deleteNotificationSubscriptionBySourceResource.PATH, 'delete');
  if (params) {
    rb.header('X-Cumulocity-Processing-Mode', params['X-Cumulocity-Processing-Mode'], {});
    rb.query('context', params.context, {});
    rb.query('source', params.source, {});
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

deleteNotificationSubscriptionBySourceResource.PATH = '/notification2/subscriptions';
