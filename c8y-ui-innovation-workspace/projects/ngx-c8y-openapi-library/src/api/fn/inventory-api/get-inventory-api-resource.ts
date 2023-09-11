/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { InventoryApiResource } from '../../models/inventory-api-resource';

export interface GetInventoryApiResource$Params {
}

export function getInventoryApiResource(http: HttpClient, rootUrl: string, params?: GetInventoryApiResource$Params, context?: HttpContext): Observable<StrictHttpResponse<InventoryApiResource>> {
  const rb = new RequestBuilder(rootUrl, getInventoryApiResource.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.inventoryapi+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<InventoryApiResource>;
    })
  );
}

getInventoryApiResource.PATH = '/inventory';
