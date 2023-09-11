/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getInventoryApiResource } from '../fn/inventory-api/get-inventory-api-resource';
import { GetInventoryApiResource$Params } from '../fn/inventory-api/get-inventory-api-resource';
import { InventoryApiResource } from '../models/inventory-api-resource';


/**
 * The inventory stores all master data related to devices, their configuration and their connections. It also contains all related assets (for example, vehicles, machines, buildings) and their structure. The inventory API resource returns URIs and URI templates to collections of managed objects.
 */
@Injectable({ providedIn: 'root' })
export class InventoryApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getInventoryApiResource()` */
  static readonly GetInventoryApiResourcePath = '/inventory';

  /**
   * Retrieve URIs to collections of managed objects.
   *
   * Retrieve URIs and URI templates to collections of managed objects.
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getInventoryApiResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInventoryApiResource$Response(params?: GetInventoryApiResource$Params, context?: HttpContext): Observable<StrictHttpResponse<InventoryApiResource>> {
    return getInventoryApiResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve URIs to collections of managed objects.
   *
   * Retrieve URIs and URI templates to collections of managed objects.
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getInventoryApiResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInventoryApiResource(params?: GetInventoryApiResource$Params, context?: HttpContext): Observable<InventoryApiResource> {
    return this.getInventoryApiResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<InventoryApiResource>): InventoryApiResource => r.body)
    );
  }

}
