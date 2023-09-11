/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getSummaryAllTenantsUsageStatistics } from '../fn/usage-statistics/get-summary-all-tenants-usage-statistics';
import { GetSummaryAllTenantsUsageStatistics$Params } from '../fn/usage-statistics/get-summary-all-tenants-usage-statistics';
import { getSummaryUsageStatistics } from '../fn/usage-statistics/get-summary-usage-statistics';
import { GetSummaryUsageStatistics$Params } from '../fn/usage-statistics/get-summary-usage-statistics';
import { getTenantUsageStatisticsCollectionResource } from '../fn/usage-statistics/get-tenant-usage-statistics-collection-resource';
import { GetTenantUsageStatisticsCollectionResource$Params } from '../fn/usage-statistics/get-tenant-usage-statistics-collection-resource';
import { getTenantUsageStatisticsFileById } from '../fn/usage-statistics/get-tenant-usage-statistics-file-by-id';
import { GetTenantUsageStatisticsFileById$Params } from '../fn/usage-statistics/get-tenant-usage-statistics-file-by-id';
import { getTenantUsageStatisticsFileCollectionResource } from '../fn/usage-statistics/get-tenant-usage-statistics-file-collection-resource';
import { GetTenantUsageStatisticsFileCollectionResource$Params } from '../fn/usage-statistics/get-tenant-usage-statistics-file-collection-resource';
import { getTenantUsageStatisticsLatestFile } from '../fn/usage-statistics/get-tenant-usage-statistics-latest-file';
import { GetTenantUsageStatisticsLatestFile$Params } from '../fn/usage-statistics/get-tenant-usage-statistics-latest-file';
import { postGenerateStatisticsFileRequest } from '../fn/usage-statistics/post-generate-statistics-file-request';
import { PostGenerateStatisticsFileRequest$Params } from '../fn/usage-statistics/post-generate-statistics-file-request';
import { StatisticsFile } from '../models/statistics-file';
import { SummaryAllTenantsUsageStatisticsCollection } from '../models/summary-all-tenants-usage-statistics-collection';
import { SummaryTenantUsageStatistics } from '../models/summary-tenant-usage-statistics';
import { TenantUsageStatisticsCollection } from '../models/tenant-usage-statistics-collection';
import { TenantUsageStatisticsFileCollection } from '../models/tenant-usage-statistics-file-collection';


/**
 * Days are counted according to server timezone, so be aware that the tenant usage statistics displaying/filtering may not work correctly when the client is not in the same timezone as the server. However, it is possible to send a request with a time range (using the query parameters `dateFrom` and `dateTo`) in zoned format (for example, `2020-10-26T03:00:00%2B01:00`). Statistics from past days are stored with daily aggregations, which means that for a specific day you get either the statistics for the whole day or none at all.
 *
 * ### Request counting in SmartREST and MQTT
 *
 * * SmartREST: Each row in a SmartREST request is transformed into a separate HTTP request. For example, if one SmartREST request contains 10 rows, then 10 separate calls are executed, meaning that request count is increased by 10.
 * * MQTT: Each row/line counts as a separate request. Creating custom template counts as a single request.
 *
 * ### REST specific counting details
 *
 * * All counters increase also when the request is invalid, for example, wrong payload or missing permissions.
 * * Bulk measurements creation and bulk alarm status update are counted as a single "requestCount"/"deviceRequestCount" and multiple inbound data transfer count.
 *
 * ### SmartREST 1.0 specific counting details
 *
 * * Invalid SmartREST requests are not counted, for example, when the template doesn't exist.
 * * A new template registration is treated as two separate requests. Create a new inventory object which increases "requestCount", "deviceRequestCount" and "inventoriesCreatedCount". There is also a second request which binds the template with X-ID, this increases "requestCount" and "deviceRequestCount".
 * * Each row in a SmartREST request is transformed into a separate HTTP request. For example, if one SmartREST request contains 10 rows, then 10 separate calls are executed, meaning that both "requestCount" and "deviceRequestCount" are increased by 10.
 *
 * ### MQTT specific counting details
 *
 * * Invalid requests are counted, for example, when sending a message with a wrong template ID.
 * * Device creation request and automatic device creation are counted.
 * * Each row/line counts as a separate request.
 * * Creating a custom template counts as a single request, no matter how many rows are sent in the request.
 * * There is one special SmartREST 2.0 template (402 Create location update event with device update) which is doing two things in one call, that is, create a new location event and update the location of the device. It is counted as two separate requests.
 *
 * ### JSON via MQTT specific counting details
 *
 * * Invalid requests are counted, for example, when the message payload is invalid.
 * * Bulk creation requests are counted as a single "requestCount"/"deviceRequestCount" and multiple inbound data transfer count.
 * * Bulk creation requests with a wrong payload are not counted for inbound data transfer count.
 *
 * ### Total inbound data transfer
 *
 * Inbound data transfer refers to the total number of inbound requests performed to transfer data into the Cumulocity IoT platform. This includes sensor readings, alarms, events, commands and alike that are transferred between devices and the Cumulocity IoT platform using the REST and/or MQTT interfaces. Such an inbound request could also originate from a custom microservice, website or any other client.
 *
 * See the table below for more information on how the counters are increased. Additionally, it shows how inbound data transfers are handled for both MQTT and REST:
 *
 * |Type of transfer|MQTT counter information|REST counter information|
 * |:---------------|:-----------------------|:-----------------------|
 * |Creation of an **alarm** in one request|One alarm creation is counted.|One alarm creation is counted via REST.|
 * |Update of an **alarm** (for example, status change)|One alarm update is counted.|One alarm update is counted via REST.|
 * |Creation of **multiple alarms** in one request|Each alarm creation in a single MQTT request will be counted.|Not supported by C8Y (REST does not support creating multiple alarms in one call).|
 * |Update of **multiple alarms** (for example, status change) in one request|Each alarm update in a single MQTT request will be counted.|Each alarm that matches the filter is counted as an alarm update (causing multiple updates).|
 * |Creation of an **event** in one request|One event creation is counted.|One event creation is counted.|
 * |Update of an **event** (for example, text change)|One event update is counted.|One event update is counted.|
 * |Creation of **multiple events** in one request|Each event creation in a single MQTT request will be counted.|Not supported by C8Y (REST does not support creating multiple events in one call).|
 * |Update of **multiple events** (for example, text change) in one request|Each event update in a single MQTT request will be counted.|Not supported by C8Y (REST does not support updating multiple events in one call).|
 * |Creation of a **measurement** in one request|One measurement creation is counted. |One measurement creation is counted.|
 * |Creation of **multiple measurements** in one request|Each measurement creation in a single MQTT request will be counted. Example: If MQTT is used to report 5 measurements, the measurementCreated counter will be incremented by five.|REST allows multiple measurements to be created by sending multiple measurements in one call. In this case, each measurement sent via REST is counted individually. The call itself is not counted. For example, if somebody sends 5 measurements via REST in one call, the corresponding counter will be increased by 5. Measurements with multiple series are counted as a singular measurement.|
 * |Creation of a **managed object** in one request|One managed object creation is counted.|One managed object creation is counted.|
 * |Update of one **managed object** (for example, status change)|One managed object update is counted.|One managed object update is counted.|
 * |Update of **multiple managed objects** in one request|Each managed object update in a single MQTT request will be counted.|Not supported by C8Y (REST does not support updating multiple managed objects in one call).|
 * |Creation/update of **multiple alarms/measurements/events/inventories** mixed in a single call.|Each MQTT line is processed separately. If it is a creation/update of an event/alarm/measurement/inventory, the corresponding counter is increased by one.|Not supported by the REST API.|
 * |Assign/unassign of **child devices and child assets** in one request|One managed object update is counted.|One managed object update is counted.|
 *
 * ### Microservice usage statistics
 *
 * The microservice usage statistics gathers information on the resource usage for tenants for each subscribed application which are collected on a daily base.
 *
 * The microservice usage's information is stored in the `resources` object.
 *
 * ### Frequently asked questions
 *
 * #### Which requests are counted as general "requestCount"?
 *
 * All requests which the platform receives are counted, including,for example, UI requests, microservices requests, device requests and agents requests. Only a few internal endpoints are not counted:
 * * `/health` (and all endpoints including this URI fragment, like `/tenant/health`)
 * * `/application/currentApplication` (and all subresources, like `/application/currentApplication/subscriptions`)
 * * `/tenant/limit`
 * * `/devicecontrol/deviceCredentials`
 * * `/inventory/templates` (and all subresources)
 *
 * #### My devices are not sending any data, but "requestCount" is increasing, and the total number is really big. Why is this happening?
 *
 * Not only device requests are counted. Every user interaction with UI applications generates some requests to the backend API. Additionally you may have subscribed standard or custom microservices, which also regularly send requests to the platform.
 *
 * Example: If you have four microservices and each microservice sends five requests per minute, this setup creates `4 * 5 * 60 * 24 = 28800` requests per day. Similar numbers arise if there are multiple users working with the given tenant UI concurrently. 
 *
 * #### Which requests are counted as "deviceRequestCount"?
 *
 * All requests from "requestCount" except the following:
 *
 * * Tenant API requests
 * * Application API requests
 * * User API requests
 * * Requests with the proper HTTP header `X-Cumulocity-Application-Key`, matching the application key of one of the applications used by a particular tenant 
 *
 * The exclusion of the APIs in the list above means that requests to endpoints which start with the mentioned API prefixes are not counted. For example, for the Tenant API the following endpoints are not counted (the list is incomplete):
 * * `/tenant/tenants`
 * * `/tenant/currentTenant`
 * * `/tenant/statistics`
 * * `/tenant/options`
 *
 * > **&#9432; Info:** Each microservice and web application must include the `X-Cumulocity-Application-Key` header in all requests.
 * > Otherwise such requests are counted as device requests which incorrectly affects the "deviceRequestCount" usage metric.
 */
@Injectable({ providedIn: 'root' })
export class UsageStatisticsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getTenantUsageStatisticsCollectionResource()` */
  static readonly GetTenantUsageStatisticsCollectionResourcePath = '/tenant/statistics';

  /**
   * Retrieve statistics of the current tenant.
   *
   * Retrieve usage statistics of the current tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_TENANT_STATISTICS_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTenantUsageStatisticsCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTenantUsageStatisticsCollectionResource$Response(params?: GetTenantUsageStatisticsCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<TenantUsageStatisticsCollection>> {
    return getTenantUsageStatisticsCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve statistics of the current tenant.
   *
   * Retrieve usage statistics of the current tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_TENANT_STATISTICS_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTenantUsageStatisticsCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTenantUsageStatisticsCollectionResource(params?: GetTenantUsageStatisticsCollectionResource$Params, context?: HttpContext): Observable<TenantUsageStatisticsCollection> {
    return this.getTenantUsageStatisticsCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<TenantUsageStatisticsCollection>): TenantUsageStatisticsCollection => r.body)
    );
  }

  /** Path part for operation `getSummaryUsageStatistics()` */
  static readonly GetSummaryUsageStatisticsPath = '/tenant/statistics/summary';

  /**
   * Retrieve a usage statistics summary.
   *
   * Retrieve a usage statistics summary of a tenant.
   * <section><h5>Required roles</h5> ROLE_TENANT_STATISTICS_READ <b>OR</b> ROLE_INVENTORY_READ <br/> If the `tenant` request parameter is specified, then the current tenant must be the management tenant <b>OR</b> the parent of the requested `tenant`. </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSummaryUsageStatistics()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSummaryUsageStatistics$Response(params?: GetSummaryUsageStatistics$Params, context?: HttpContext): Observable<StrictHttpResponse<SummaryTenantUsageStatistics>> {
    return getSummaryUsageStatistics(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a usage statistics summary.
   *
   * Retrieve a usage statistics summary of a tenant.
   * <section><h5>Required roles</h5> ROLE_TENANT_STATISTICS_READ <b>OR</b> ROLE_INVENTORY_READ <br/> If the `tenant` request parameter is specified, then the current tenant must be the management tenant <b>OR</b> the parent of the requested `tenant`. </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSummaryUsageStatistics$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSummaryUsageStatistics(params?: GetSummaryUsageStatistics$Params, context?: HttpContext): Observable<SummaryTenantUsageStatistics> {
    return this.getSummaryUsageStatistics$Response(params, context).pipe(
      map((r: StrictHttpResponse<SummaryTenantUsageStatistics>): SummaryTenantUsageStatistics => r.body)
    );
  }

  /** Path part for operation `getSummaryAllTenantsUsageStatistics()` */
  static readonly GetSummaryAllTenantsUsageStatisticsPath = '/tenant/statistics/allTenantsSummary';

  /**
   * Retrieve a summary of all usage statistics.
   *
   * Retrieve a summary of all tenants usage statistics.
   *
   * <section><h5>Required roles</h5>
   * ROLE_TENANT_MANAGEMENT_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSummaryAllTenantsUsageStatistics()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSummaryAllTenantsUsageStatistics$Response(params?: GetSummaryAllTenantsUsageStatistics$Params, context?: HttpContext): Observable<StrictHttpResponse<SummaryAllTenantsUsageStatisticsCollection>> {
    return getSummaryAllTenantsUsageStatistics(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a summary of all usage statistics.
   *
   * Retrieve a summary of all tenants usage statistics.
   *
   * <section><h5>Required roles</h5>
   * ROLE_TENANT_MANAGEMENT_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSummaryAllTenantsUsageStatistics$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSummaryAllTenantsUsageStatistics(params?: GetSummaryAllTenantsUsageStatistics$Params, context?: HttpContext): Observable<SummaryAllTenantsUsageStatisticsCollection> {
    return this.getSummaryAllTenantsUsageStatistics$Response(params, context).pipe(
      map((r: StrictHttpResponse<SummaryAllTenantsUsageStatisticsCollection>): SummaryAllTenantsUsageStatisticsCollection => r.body)
    );
  }

  /** Path part for operation `getTenantUsageStatisticsFileCollectionResource()` */
  static readonly GetTenantUsageStatisticsFileCollectionResourcePath = '/tenant/statistics/files';

  /**
   * Retrieve usage statistics files metadata.
   *
   * Retrieve usage statistics summary files report metadata.
   *
   * <section><h5>Required roles</h5>
   * ROLE_TENANT_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTenantUsageStatisticsFileCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTenantUsageStatisticsFileCollectionResource$Response(params?: GetTenantUsageStatisticsFileCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<TenantUsageStatisticsFileCollection>> {
    return getTenantUsageStatisticsFileCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve usage statistics files metadata.
   *
   * Retrieve usage statistics summary files report metadata.
   *
   * <section><h5>Required roles</h5>
   * ROLE_TENANT_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTenantUsageStatisticsFileCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTenantUsageStatisticsFileCollectionResource(params?: GetTenantUsageStatisticsFileCollectionResource$Params, context?: HttpContext): Observable<TenantUsageStatisticsFileCollection> {
    return this.getTenantUsageStatisticsFileCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<TenantUsageStatisticsFileCollection>): TenantUsageStatisticsFileCollection => r.body)
    );
  }

  /** Path part for operation `postGenerateStatisticsFileRequest()` */
  static readonly PostGenerateStatisticsFileRequestPath = '/tenant/statistics/files';

  /**
   * Generate a statistics file report.
   *
   * Generate a TEST statistics file report for a given time range.
   *
   * There are two types of statistics files:
   * * REAL - generated by the system on the first day of the month and including statistics from the previous month.
   * * TEST - generated by the user with a time range specified in the query parameters (`dateFrom`, `dateTo`).
   * <section><h5>Required roles</h5>
   * ROLE_TENANT_MANAGEMENT_ADMIN <b>OR</b> ROLE_TENANT_MANAGEMENT_CREATE
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postGenerateStatisticsFileRequest()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.tenantstatisticsdate+json` and handles request body of type `application/vnd.com.nsn.cumulocity.tenantstatisticsdate+json`.
   */
  postGenerateStatisticsFileRequest$Response(params: PostGenerateStatisticsFileRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<StatisticsFile>> {
    return postGenerateStatisticsFileRequest(this.http, this.rootUrl, params, context);
  }

  /**
   * Generate a statistics file report.
   *
   * Generate a TEST statistics file report for a given time range.
   *
   * There are two types of statistics files:
   * * REAL - generated by the system on the first day of the month and including statistics from the previous month.
   * * TEST - generated by the user with a time range specified in the query parameters (`dateFrom`, `dateTo`).
   * <section><h5>Required roles</h5>
   * ROLE_TENANT_MANAGEMENT_ADMIN <b>OR</b> ROLE_TENANT_MANAGEMENT_CREATE
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postGenerateStatisticsFileRequest$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.tenantstatisticsdate+json` and handles request body of type `application/vnd.com.nsn.cumulocity.tenantstatisticsdate+json`.
   */
  postGenerateStatisticsFileRequest(params: PostGenerateStatisticsFileRequest$Params, context?: HttpContext): Observable<StatisticsFile> {
    return this.postGenerateStatisticsFileRequest$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatisticsFile>): StatisticsFile => r.body)
    );
  }

  /** Path part for operation `getTenantUsageStatisticsFileById()` */
  static readonly GetTenantUsageStatisticsFileByIdPath = '/tenant/statistics/files/{id}';

  /**
   * Retrieve a usage statistics file.
   *
   * Retrieve a specific usage statistics file (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_TENANT_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTenantUsageStatisticsFileById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTenantUsageStatisticsFileById$Response(params: GetTenantUsageStatisticsFileById$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return getTenantUsageStatisticsFileById(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a usage statistics file.
   *
   * Retrieve a specific usage statistics file (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_TENANT_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTenantUsageStatisticsFileById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTenantUsageStatisticsFileById(params: GetTenantUsageStatisticsFileById$Params, context?: HttpContext): Observable<Blob> {
    return this.getTenantUsageStatisticsFileById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `getTenantUsageStatisticsLatestFile()` */
  static readonly GetTenantUsageStatisticsLatestFilePath = '/tenant/statistics/files/latest/{month}';

  /**
   * Retrieve the latest usage statistics file.
   *
   * Retrieve the latest usage statistics file with REAL data for a given month.
   *
   * There are two types of statistics files:
   * * REAL - generated by the system on the first day of the month and includes statistics for the previous month.
   * * TEST - generated by the user with a time range specified in the query parameters (`dateFrom`, `dateTo`).
   *
   * <section><h5>Required roles</h5>
   * ROLE_TENANT_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTenantUsageStatisticsLatestFile()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTenantUsageStatisticsLatestFile$Response(params: GetTenantUsageStatisticsLatestFile$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return getTenantUsageStatisticsLatestFile(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve the latest usage statistics file.
   *
   * Retrieve the latest usage statistics file with REAL data for a given month.
   *
   * There are two types of statistics files:
   * * REAL - generated by the system on the first day of the month and includes statistics for the previous month.
   * * TEST - generated by the user with a time range specified in the query parameters (`dateFrom`, `dateTo`).
   *
   * <section><h5>Required roles</h5>
   * ROLE_TENANT_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTenantUsageStatisticsLatestFile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTenantUsageStatisticsLatestFile(params: GetTenantUsageStatisticsLatestFile$Params, context?: HttpContext): Observable<Blob> {
    return this.getTenantUsageStatisticsLatestFile$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
