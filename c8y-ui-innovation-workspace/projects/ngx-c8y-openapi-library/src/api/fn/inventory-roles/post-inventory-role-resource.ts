/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { InventoryRole } from '../../models/inventory-role';

export interface PostInventoryRoleResource$Params {

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;
      body: InventoryRole & any
}

export function postInventoryRoleResource(http: HttpClient, rootUrl: string, params: PostInventoryRoleResource$Params, context?: HttpContext): Observable<StrictHttpResponse<InventoryRole>> {
  const rb = new RequestBuilder(rootUrl, postInventoryRoleResource.PATH, 'post');
  if (params) {
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

postInventoryRoleResource.PATH = '/user/inventoryroles';
