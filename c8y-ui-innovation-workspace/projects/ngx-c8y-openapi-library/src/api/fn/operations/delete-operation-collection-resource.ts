/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface DeleteOperationCollectionResource$Params {

/**
 * Used to explicitly control the processing mode of the request. See [Processing mode](#processing-mode) for more details.
 */
  'X-Cumulocity-Processing-Mode'?: 'PERSISTENT' | 'TRANSIENT' | 'QUIESCENT' | 'CEP';

/**
 * An agent ID that may be part of the operation.
 */
  agentId?: string;

/**
 * Start date or date and time of the operation.
 */
  dateFrom?: string;

/**
 * End date or date and time of the operation.
 */
  dateTo?: string;

/**
 * The ID of the device the operation is performed for.
 */
  deviceId?: string;

/**
 * Status of the operation.
 */
  status?: 'SUCCESSFUL' | 'FAILED' | 'EXECUTING' | 'PENDING';
}

export function deleteOperationCollectionResource(http: HttpClient, rootUrl: string, params?: DeleteOperationCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, deleteOperationCollectionResource.PATH, 'delete');
  if (params) {
    rb.header('X-Cumulocity-Processing-Mode', params['X-Cumulocity-Processing-Mode'], {});
    rb.query('agentId', params.agentId, {});
    rb.query('dateFrom', params.dateFrom, {});
    rb.query('dateTo', params.dateTo, {});
    rb.query('deviceId', params.deviceId, {});
    rb.query('status', params.status, {});
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

deleteOperationCollectionResource.PATH = '/devicecontrol/operations';
