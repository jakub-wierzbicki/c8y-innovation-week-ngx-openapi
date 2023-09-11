/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getMeasurementApiResource } from '../fn/measurement-api/get-measurement-api-resource';
import { GetMeasurementApiResource$Params } from '../fn/measurement-api/get-measurement-api-resource';
import { MeasurementApiResource } from '../models/measurement-api-resource';


/**
 * The measurement API resource returns URIs and URI templates to collections of measurements, so that all measurements can be filtered and retrieved. Querying without filters can be slow, hence it is recommended to narrow the scope by using time [range queries](https://en.wikipedia.org/wiki/Range_query_(database)). Moreover, the scope can be significantly reduced by querying by source.
 */
@Injectable({ providedIn: 'root' })
export class MeasurementApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getMeasurementApiResource()` */
  static readonly GetMeasurementApiResourcePath = '/measurement';

  /**
   * Retrieve URIs to collections of measurements.
   *
   * Retrieve URIs and URI templates to collections of measurements.
   *
   * > **&#9432; Info:** The response sample on the right side contains a subset of all URIs returned by the endpoint method. For all available query parameters see [Retrieve all measurements](#operation/getMeasurementCollectionResource).
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMeasurementApiResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMeasurementApiResource$Response(params?: GetMeasurementApiResource$Params, context?: HttpContext): Observable<StrictHttpResponse<MeasurementApiResource>> {
    return getMeasurementApiResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve URIs to collections of measurements.
   *
   * Retrieve URIs and URI templates to collections of measurements.
   *
   * > **&#9432; Info:** The response sample on the right side contains a subset of all URIs returned by the endpoint method. For all available query parameters see [Retrieve all measurements](#operation/getMeasurementCollectionResource).
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMeasurementApiResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMeasurementApiResource(params?: GetMeasurementApiResource$Params, context?: HttpContext): Observable<MeasurementApiResource> {
    return this.getMeasurementApiResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<MeasurementApiResource>): MeasurementApiResource => r.body)
    );
  }

}
