/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { InventoryRole } from '../../models/inventory-role';

export interface GetInventoryRoleResourceId$Params {

/**
 * Unique identifier of the inventory role.
 */
  id: number;
}

export function getInventoryRoleResourceId(http: HttpClient, rootUrl: string, params: GetInventoryRoleResourceId$Params, context?: HttpContext): Observable<StrictHttpResponse<InventoryRole>> {
  const rb = new RequestBuilder(rootUrl, getInventoryRoleResourceId.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.inventoryrole+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<InventoryRole>;
    })
  );
}

getInventoryRoleResourceId.PATH = '/user/inventoryroles/{id}';
