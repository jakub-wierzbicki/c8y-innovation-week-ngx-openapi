/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface DeleteEventCollectionResource$Params {

/**
 * Used to explicitly control the processing mode of the request. See [Processing mode](#processing-mode) for more details.
 */
  'X-Cumulocity-Processing-Mode'?: 'PERSISTENT' | 'TRANSIENT' | 'QUIESCENT' | 'CEP';

/**
 * Start date or date and time of the event's creation (set by the platform during creation).
 */
  createdFrom?: string;

/**
 * End date or date and time of the event's creation (set by the platform during creation).
 */
  createdTo?: string;

/**
 * Start date or date and time of the event occurrence (provided by the device).
 */
  dateFrom?: string;

/**
 * End date or date and time of the event occurrence (provided by the device).
 */
  dateTo?: string;

/**
 * A characteristic which identifies a managed object or event, for example, geolocation, electricity sensor, relay state.
 */
  fragmentType?: string;

/**
 * The managed object ID to which the event is associated.
 */
  source?: string;

/**
 * The type of event to search for.
 */
  type?: string;
}

export function deleteEventCollectionResource(http: HttpClient, rootUrl: string, params?: DeleteEventCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, deleteEventCollectionResource.PATH, 'delete');
  if (params) {
    rb.header('X-Cumulocity-Processing-Mode', params['X-Cumulocity-Processing-Mode'], {});
    rb.query('createdFrom', params.createdFrom, {});
    rb.query('createdTo', params.createdTo, {});
    rb.query('dateFrom', params.dateFrom, {});
    rb.query('dateTo', params.dateTo, {});
    rb.query('fragmentType', params.fragmentType, {});
    rb.query('source', params.source, {});
    rb.query('type', params.type, {});
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

deleteEventCollectionResource.PATH = '/event/events';
