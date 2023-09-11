/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { InventoryRole } from '../../models/inventory-role';

export interface PutInventoryRoleResourceId$Params {

/**
 * Unique identifier of the inventory role.
 */
  id: number;

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;
      body: InventoryRole
}

export function putInventoryRoleResourceId(http: HttpClient, rootUrl: string, params: PutInventoryRoleResourceId$Params, context?: HttpContext): Observable<StrictHttpResponse<InventoryRole>> {
  const rb = new RequestBuilder(rootUrl, putInventoryRoleResourceId.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.header('Accept', params.Accept, {});
    rb.body(params.body, 'application/vnd.com.nsn.cumulocity.inventoryrole+json');
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

putInventoryRoleResourceId.PATH = '/user/inventoryroles/{id}';
