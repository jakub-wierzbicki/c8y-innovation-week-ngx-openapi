/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface DeleteMeasurementCollectionResource$Params {

/**
 * Used to explicitly control the processing mode of the request. See [Processing mode](#processing-mode) for more details.
 */
  'X-Cumulocity-Processing-Mode'?: 'PERSISTENT' | 'TRANSIENT' | 'QUIESCENT' | 'CEP';

/**
 * Start date or date and time of the measurement.
 */
  dateFrom?: string;

/**
 * End date or date and time of the measurement.
 */
  dateTo?: string;

/**
 * A characteristic which identifies a managed object or event, for example, geolocation, electricity sensor, relay state.
 */
  fragmentType?: string;

/**
 * The managed object ID to which the measurement is associated.
 */
  source?: string;

/**
 * The type of measurement to search for.
 */
  type?: string;
}

export function deleteMeasurementCollectionResource(http: HttpClient, rootUrl: string, params?: DeleteMeasurementCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, deleteMeasurementCollectionResource.PATH, 'delete');
  if (params) {
    rb.header('X-Cumulocity-Processing-Mode', params['X-Cumulocity-Processing-Mode'], {});
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

deleteMeasurementCollectionResource.PATH = '/measurement/measurements';
