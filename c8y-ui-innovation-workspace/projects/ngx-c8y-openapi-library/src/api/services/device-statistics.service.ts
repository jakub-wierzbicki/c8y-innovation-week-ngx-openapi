/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { DeviceStatisticsCollection } from '../models/device-statistics-collection';
import { getTenantDeviceStatisticsDailyCollection } from '../fn/device-statistics/get-tenant-device-statistics-daily-collection';
import { GetTenantDeviceStatisticsDailyCollection$Params } from '../fn/device-statistics/get-tenant-device-statistics-daily-collection';
import { getTenantDeviceStatisticsMonthlyCollection } from '../fn/device-statistics/get-tenant-device-statistics-monthly-collection';
import { GetTenantDeviceStatisticsMonthlyCollection$Params } from '../fn/device-statistics/get-tenant-device-statistics-monthly-collection';


/**
 * Device statistics are collected for each inventory object with at least one measurement, event or alarm. There are no additional checks if the inventory object is marked as device using the `c8y_IsDevice` fragment. When the first measurement, event or alarm is created for a specific inventory object, Cumulocity IoT is always considering this as a device and starts counting.
 *
 * Device statistics are counted with daily and monthy rate. All requests are considered when counting device statistics, no matter which processing mode is used.
 *
 * The following requests are counted:
 *
 * * Alarm creation and update
 * * Event creation and update
 * * Measurement creation
 * * Bulk measurement creation is counted as multiple requests
 * * Bulk alarm status update is counted as multiple requests
 * * MQTT and SmartREST requests with multiple rows are counted as multiple requests
 *
 * ### Frequently asked questions
 *
 * #### Are operations on device firmware counted?
 *
 * **No**, device configuration and firmware update operate on inventory objects, hence they are not counted.
 *
 * #### Are requests done by the UI applications, for example, when browsing device details, counted?
 *
 * **No**, viewing device details performs only GET requests which are not counted.
 *
 * #### Is the clear alarm operation done from the UI counted?
 *
 * **Yes**, a clear alarm operation in fact performs an alarm update operation and it will be counted as device request.
 *
 * #### Is there any operation performed on the device which is counted?
 *
 * **Yes**, retrieving device logs requires from the device to create an event and attach a binary with logs to it. Those are two separate requests and both are counted.
 *
 * #### When I have a device with children are the requests counted always to the root device or separately for each child?
 *
 * Separately for each child.
 */
@Injectable({ providedIn: 'root' })
export class DeviceStatisticsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getTenantDeviceStatisticsMonthlyCollection()` */
  static readonly GetTenantDeviceStatisticsMonthlyCollectionPath = '/tenant/statistics/device/{tenantId}/monthly/{date}';

  /**
   * Retrieve monthly device statistics.
   *
   * Retrieve monthly device statistics from a specific tenant (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_TENANT_STATISTICS_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTenantDeviceStatisticsMonthlyCollection()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTenantDeviceStatisticsMonthlyCollection$Response(params: GetTenantDeviceStatisticsMonthlyCollection$Params, context?: HttpContext): Observable<StrictHttpResponse<DeviceStatisticsCollection>> {
    return getTenantDeviceStatisticsMonthlyCollection(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve monthly device statistics.
   *
   * Retrieve monthly device statistics from a specific tenant (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_TENANT_STATISTICS_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTenantDeviceStatisticsMonthlyCollection$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTenantDeviceStatisticsMonthlyCollection(params: GetTenantDeviceStatisticsMonthlyCollection$Params, context?: HttpContext): Observable<DeviceStatisticsCollection> {
    return this.getTenantDeviceStatisticsMonthlyCollection$Response(params, context).pipe(
      map((r: StrictHttpResponse<DeviceStatisticsCollection>): DeviceStatisticsCollection => r.body)
    );
  }

  /** Path part for operation `getTenantDeviceStatisticsDailyCollection()` */
  static readonly GetTenantDeviceStatisticsDailyCollectionPath = '/tenant/statistics/device/{tenantId}/daily/{date}';

  /**
   * Retrieve daily device statistics.
   *
   * Retrieve daily device statistics from a specific tenant (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_TENANT_STATISTICS_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTenantDeviceStatisticsDailyCollection()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTenantDeviceStatisticsDailyCollection$Response(params: GetTenantDeviceStatisticsDailyCollection$Params, context?: HttpContext): Observable<StrictHttpResponse<DeviceStatisticsCollection>> {
    return getTenantDeviceStatisticsDailyCollection(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve daily device statistics.
   *
   * Retrieve daily device statistics from a specific tenant (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_TENANT_STATISTICS_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTenantDeviceStatisticsDailyCollection$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTenantDeviceStatisticsDailyCollection(params: GetTenantDeviceStatisticsDailyCollection$Params, context?: HttpContext): Observable<DeviceStatisticsCollection> {
    return this.getTenantDeviceStatisticsDailyCollection$Response(params, context).pipe(
      map((r: StrictHttpResponse<DeviceStatisticsCollection>): DeviceStatisticsCollection => r.body)
    );
  }

}
