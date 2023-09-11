/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteMeasurementCollectionResource } from '../fn/measurements/delete-measurement-collection-resource';
import { DeleteMeasurementCollectionResource$Params } from '../fn/measurements/delete-measurement-collection-resource';
import { deleteMeasurementResource } from '../fn/measurements/delete-measurement-resource';
import { DeleteMeasurementResource$Params } from '../fn/measurements/delete-measurement-resource';
import { getMeasurementCollectionResource } from '../fn/measurements/get-measurement-collection-resource';
import { GetMeasurementCollectionResource$Params } from '../fn/measurements/get-measurement-collection-resource';
import { getMeasurementResource } from '../fn/measurements/get-measurement-resource';
import { GetMeasurementResource$Params } from '../fn/measurements/get-measurement-resource';
import { getMeasurementSeriesResource } from '../fn/measurements/get-measurement-series-resource';
import { GetMeasurementSeriesResource$Params } from '../fn/measurements/get-measurement-series-resource';
import { Measurement } from '../models/measurement';
import { MeasurementCollection } from '../models/measurement-collection';
import { MeasurementSeries } from '../models/measurement-series';
import { postMeasurementCollectionResource } from '../fn/measurements/post-measurement-collection-resource';
import { PostMeasurementCollectionResource$Params } from '../fn/measurements/post-measurement-collection-resource';


/**
 * Measurements are produced by reading sensor values. In some cases, this data is read in static intervals and sent to the platform (for example, temperature sensors or electrical meters). In other cases, the data is read on demand or at irregular intervals (for example, health devices such as weight scales). Regardless what kind of protocol the device supports, the agent is responsible for converting it into a "push" protocol by uploading data to Cumulocity IoT.
 *
 * > **&#9432; Info:** The Accept header should be provided in all POST requests, otherwise an empty response body will be returned.
 */
@Injectable({ providedIn: 'root' })
export class MeasurementsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getMeasurementCollectionResource()` */
  static readonly GetMeasurementCollectionResourcePath = '/measurement/measurements';

  /**
   * Retrieve all measurements.
   *
   * Retrieve all measurements on your tenant, or a specific subset based on queries.
   *
   * In case of executing [range queries](https://en.wikipedia.org/wiki/Range_query_(database)) between an upper and lower boundary, for example, querying using `dateFrom`–`dateTo`, the oldest registered measurements are returned first. It is possible to change the order using the query parameter `revert=true`.
   *
   * For large measurement collections, querying older records without filters can be slow as the server needs to scan from the beginning of the input results set before beginning to return the results. For cases when older measurements should be retrieved, it is recommended to narrow the scope by using range queries based on the time stamp reported by a device. The scope of query can also be reduced significantly when a source device is provided.
   *
   * Review [Measurements Specifics](#tag/Measurements-specifics) for details about data streaming and response formats.
   *
   * <section><h5>Required roles</h5>
   * ROLE_MEASUREMENT_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMeasurementCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMeasurementCollectionResource$Response(params?: GetMeasurementCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<MeasurementCollection>> {
    return getMeasurementCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all measurements.
   *
   * Retrieve all measurements on your tenant, or a specific subset based on queries.
   *
   * In case of executing [range queries](https://en.wikipedia.org/wiki/Range_query_(database)) between an upper and lower boundary, for example, querying using `dateFrom`–`dateTo`, the oldest registered measurements are returned first. It is possible to change the order using the query parameter `revert=true`.
   *
   * For large measurement collections, querying older records without filters can be slow as the server needs to scan from the beginning of the input results set before beginning to return the results. For cases when older measurements should be retrieved, it is recommended to narrow the scope by using range queries based on the time stamp reported by a device. The scope of query can also be reduced significantly when a source device is provided.
   *
   * Review [Measurements Specifics](#tag/Measurements-specifics) for details about data streaming and response formats.
   *
   * <section><h5>Required roles</h5>
   * ROLE_MEASUREMENT_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMeasurementCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMeasurementCollectionResource(params?: GetMeasurementCollectionResource$Params, context?: HttpContext): Observable<MeasurementCollection> {
    return this.getMeasurementCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<MeasurementCollection>): MeasurementCollection => r.body)
    );
  }

  /** Path part for operation `postMeasurementCollectionResource()` */
  static readonly PostMeasurementCollectionResourcePath = '/measurement/measurements';

  /**
   * Create a measurement.
   *
   * A measurement must be associated with a source (managed object) identified by ID, and must specify the type of measurement and the time when it was measured by the device (for example, a thermometer).
   *
   * Each measurement fragment is an object (for example, `c8y_Steam`) containing the actual measurements as properties. The property name represents the name of the measurement (for example, `Temperature`) and it contains two properties:
   *
   * *   `value` - The value of the individual measurement. The maximum precision for floating point numbers is 64-bit IEEE 754. For integers it's a 64-bit two's complement integer. The `value` is mandatory for a fragment.
   * *   `unit` - The unit of the measurements.
   *
   * Review the [System of units](#section/System-of-units) section for details about the conversions of units. Also review the [Naming conventions of fragments](https://cumulocity.com/guides/concepts/domain-model/#naming-conventions-of-fragments) in the Concepts guide.
   *
   * The example below uses `c8y_Steam` in the request body to illustrate a fragment for recording temperature measurements.
   *
   * > **⚠️ Important:** Property names used for fragment and series must not contain whitespaces nor the special characters `. , * [ ] ( ) @ $`. This is required to ensure a correct processing and visualization of measurement series on UI graphs.
   *
   * ### Create multiple measurements
   *
   * It is also possible to create multiple measurements at once by sending a `measurements` array containing all the measurements to be created. The content type must be `application/vnd.com.nsn.cumulocity.measurementcollection+json`.
   *
   * > **&#9432; Info:** For more details about fragments with specific meanings, review the sections [Device management library](#section/Device-management-library) and [Sensor library](#section/Sensor-library).
   *
   * <section><h5>Required roles</h5>
   * ROLE_MEASUREMENT_ADMIN <b>OR</b> owner of the source <b>OR</b> MEASUREMENT_ADMIN permission on the source
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postMeasurementCollectionResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.measurementcollection+json` and handles request body of type `application/vnd.com.nsn.cumulocity.measurementcollection+json`.
   */
  postMeasurementCollectionResource$Response(params: PostMeasurementCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<MeasurementCollection>> {
    return postMeasurementCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a measurement.
   *
   * A measurement must be associated with a source (managed object) identified by ID, and must specify the type of measurement and the time when it was measured by the device (for example, a thermometer).
   *
   * Each measurement fragment is an object (for example, `c8y_Steam`) containing the actual measurements as properties. The property name represents the name of the measurement (for example, `Temperature`) and it contains two properties:
   *
   * *   `value` - The value of the individual measurement. The maximum precision for floating point numbers is 64-bit IEEE 754. For integers it's a 64-bit two's complement integer. The `value` is mandatory for a fragment.
   * *   `unit` - The unit of the measurements.
   *
   * Review the [System of units](#section/System-of-units) section for details about the conversions of units. Also review the [Naming conventions of fragments](https://cumulocity.com/guides/concepts/domain-model/#naming-conventions-of-fragments) in the Concepts guide.
   *
   * The example below uses `c8y_Steam` in the request body to illustrate a fragment for recording temperature measurements.
   *
   * > **⚠️ Important:** Property names used for fragment and series must not contain whitespaces nor the special characters `. , * [ ] ( ) @ $`. This is required to ensure a correct processing and visualization of measurement series on UI graphs.
   *
   * ### Create multiple measurements
   *
   * It is also possible to create multiple measurements at once by sending a `measurements` array containing all the measurements to be created. The content type must be `application/vnd.com.nsn.cumulocity.measurementcollection+json`.
   *
   * > **&#9432; Info:** For more details about fragments with specific meanings, review the sections [Device management library](#section/Device-management-library) and [Sensor library](#section/Sensor-library).
   *
   * <section><h5>Required roles</h5>
   * ROLE_MEASUREMENT_ADMIN <b>OR</b> owner of the source <b>OR</b> MEASUREMENT_ADMIN permission on the source
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postMeasurementCollectionResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.measurementcollection+json` and handles request body of type `application/vnd.com.nsn.cumulocity.measurementcollection+json`.
   */
  postMeasurementCollectionResource(params: PostMeasurementCollectionResource$Params, context?: HttpContext): Observable<MeasurementCollection> {
    return this.postMeasurementCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<MeasurementCollection>): MeasurementCollection => r.body)
    );
  }

  /** Path part for operation `deleteMeasurementCollectionResource()` */
  static readonly DeleteMeasurementCollectionResourcePath = '/measurement/measurements';

  /**
   * Remove measurement collections.
   *
   * Remove measurement collections specified by query parameters.
   *
   * DELETE requests are not synchronous. The response could be returned before the delete request has been completed. This may happen especially when there are a lot of measurements to be deleted.
   *
   * > **⚠️ Important:** Note that it is possible to call this endpoint without providing any parameter - it may result in deleting all measurements and it is not recommended.
   *
   * In case of enhanced time series measurements, both `dateFrom` and `dateTo` parameters must be truncated to full hours (for example, 2022-08-19T14:00:00.000Z), otherwise an error will be returned.
   * The `fragmentType` parameter allows to delete measurements only by a measurement fragment when enhanced time series measurements are used.
   * It's not possible to delete by a custom (non-measurement) fragment.
   *
   * Example for a valid measurement value fragment:
   * ```
   * "c8y_TemperatureMeasurement": {
   *     "T": {
   *       "value": 28,
   *       "unit": "C"
   *     }
   * }
   * ```
   * In the example above `c8y_TemperatureMeasurement` is called fragment and `T` is called series.
   *
   * Example for a non-measurement fragment:
   * ```
   * "c8y_TemperatureMeasurement": 28
   * ```
   * Enhanced Time series measurements will not allow to delete by fragment specific like above.
   *
   * <section><h5>Required roles</h5>
   * ROLE_MEASUREMENT_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteMeasurementCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteMeasurementCollectionResource$Response(params?: DeleteMeasurementCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteMeasurementCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove measurement collections.
   *
   * Remove measurement collections specified by query parameters.
   *
   * DELETE requests are not synchronous. The response could be returned before the delete request has been completed. This may happen especially when there are a lot of measurements to be deleted.
   *
   * > **⚠️ Important:** Note that it is possible to call this endpoint without providing any parameter - it may result in deleting all measurements and it is not recommended.
   *
   * In case of enhanced time series measurements, both `dateFrom` and `dateTo` parameters must be truncated to full hours (for example, 2022-08-19T14:00:00.000Z), otherwise an error will be returned.
   * The `fragmentType` parameter allows to delete measurements only by a measurement fragment when enhanced time series measurements are used.
   * It's not possible to delete by a custom (non-measurement) fragment.
   *
   * Example for a valid measurement value fragment:
   * ```
   * "c8y_TemperatureMeasurement": {
   *     "T": {
   *       "value": 28,
   *       "unit": "C"
   *     }
   * }
   * ```
   * In the example above `c8y_TemperatureMeasurement` is called fragment and `T` is called series.
   *
   * Example for a non-measurement fragment:
   * ```
   * "c8y_TemperatureMeasurement": 28
   * ```
   * Enhanced Time series measurements will not allow to delete by fragment specific like above.
   *
   * <section><h5>Required roles</h5>
   * ROLE_MEASUREMENT_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteMeasurementCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteMeasurementCollectionResource(params?: DeleteMeasurementCollectionResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteMeasurementCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getMeasurementResource()` */
  static readonly GetMeasurementResourcePath = '/measurement/measurements/{id}';

  /**
   * Retrieve a specific measurement.
   *
   * Retrieve a specific measurement by a given ID.
   * Note that you cannot retrieve time series measurements by ID.
   * Instead you can search for such measurements via query parameters.
   * No behavior changes for tenants which do not have time series enabled.
   *
   * <section><h5>Required roles</h5>
   * ROLE_MEASUREMENT_READ <b>OR</b> owner of the source <b>OR</b> MEASUREMENT_READ permission on the source
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMeasurementResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMeasurementResource$Response(params: GetMeasurementResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Measurement>> {
    return getMeasurementResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a specific measurement.
   *
   * Retrieve a specific measurement by a given ID.
   * Note that you cannot retrieve time series measurements by ID.
   * Instead you can search for such measurements via query parameters.
   * No behavior changes for tenants which do not have time series enabled.
   *
   * <section><h5>Required roles</h5>
   * ROLE_MEASUREMENT_READ <b>OR</b> owner of the source <b>OR</b> MEASUREMENT_READ permission on the source
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMeasurementResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMeasurementResource(params: GetMeasurementResource$Params, context?: HttpContext): Observable<Measurement> {
    return this.getMeasurementResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Measurement>): Measurement => r.body)
    );
  }

  /** Path part for operation `deleteMeasurementResource()` */
  static readonly DeleteMeasurementResourcePath = '/measurement/measurements/{id}';

  /**
   * Remove a specific measurement.
   *
   * Remove a specific measurement by a given ID.
   * Note that you cannot delete time series measurements by ID.
   * Instead, you can delete by query or use the retention rules to remove expired measurements data from the Operational Store.
   * No behavior changes for tenants which do not have time series enabled.
   *
   *
   * <section><h5>Required roles</h5>
   * ROLE_MEASUREMENT_ADMIN <b>OR</b> owner of the source <b>OR</b> MEASUREMENT_ADMIN permission on the source
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteMeasurementResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteMeasurementResource$Response(params: DeleteMeasurementResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteMeasurementResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove a specific measurement.
   *
   * Remove a specific measurement by a given ID.
   * Note that you cannot delete time series measurements by ID.
   * Instead, you can delete by query or use the retention rules to remove expired measurements data from the Operational Store.
   * No behavior changes for tenants which do not have time series enabled.
   *
   *
   * <section><h5>Required roles</h5>
   * ROLE_MEASUREMENT_ADMIN <b>OR</b> owner of the source <b>OR</b> MEASUREMENT_ADMIN permission on the source
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteMeasurementResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteMeasurementResource(params: DeleteMeasurementResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteMeasurementResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getMeasurementSeriesResource()` */
  static readonly GetMeasurementSeriesResourcePath = '/measurement/measurements/series';

  /**
   * Retrieve a list of series and their values.
   *
   * Retrieve a list of series (all or only those matching the specified names) and their values within a given period of a specific managed object (source).<br>
   * A series is any fragment in measurement that contains a `value` property.
   *
   * It is possible to fetch aggregated results using the `aggregationType` parameter. If the aggregation is not specified, the result will contain no more than 5000 values.
   *
   * > **⚠️ Important:** For the aggregation to be done correctly, a device shall always use the same time zone when it sends dates.
   *
   * <section><h5>Required roles</h5>
   * ROLE_MEASUREMENT_READ <b>OR</b> owner of the source <b>OR</b> MEASUREMENT_READ permission on the source
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMeasurementSeriesResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMeasurementSeriesResource$Response(params: GetMeasurementSeriesResource$Params, context?: HttpContext): Observable<StrictHttpResponse<MeasurementSeries>> {
    return getMeasurementSeriesResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a list of series and their values.
   *
   * Retrieve a list of series (all or only those matching the specified names) and their values within a given period of a specific managed object (source).<br>
   * A series is any fragment in measurement that contains a `value` property.
   *
   * It is possible to fetch aggregated results using the `aggregationType` parameter. If the aggregation is not specified, the result will contain no more than 5000 values.
   *
   * > **⚠️ Important:** For the aggregation to be done correctly, a device shall always use the same time zone when it sends dates.
   *
   * <section><h5>Required roles</h5>
   * ROLE_MEASUREMENT_READ <b>OR</b> owner of the source <b>OR</b> MEASUREMENT_READ permission on the source
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMeasurementSeriesResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMeasurementSeriesResource(params: GetMeasurementSeriesResource$Params, context?: HttpContext): Observable<MeasurementSeries> {
    return this.getMeasurementSeriesResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<MeasurementSeries>): MeasurementSeries => r.body)
    );
  }

}
