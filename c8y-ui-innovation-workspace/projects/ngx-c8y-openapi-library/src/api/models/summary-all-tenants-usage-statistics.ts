/* tslint:disable */
/* eslint-disable */
import { CustomProperties } from '../models/custom-properties';
import { DescTenantId } from '../models/desc-tenant-id';
import { UsageStatisticsResources } from '../models/usage-statistics-resources';
export interface SummaryAllTenantsUsageStatistics {

  /**
   * Number of created alarms.
   */
  alarmsCreatedCount?: number;

  /**
   * Number of updates made to the alarms.
   */
  alarmsUpdatedCount?: number;

  /**
   * Date and time of the tenant's creation.
   */
  creationTime?: string;

  /**
   * Number of devices in the tenant identified by the fragment `c8y_IsDevice`. Updated only three times a day starting at 8:57, 16:57 and 23:57.
   */
  deviceCount?: number;

  /**
   * Number of devices which do not have child devices. Updated only three times a day starting at 8:57, 16:57 and 23:57.
   */
  deviceEndpointCount?: number;

  /**
   * Number of requests that were issued only by devices against the tenant. Updated every 5 minutes. The following requests are not included:
   *
   * * Requests made to <kbd>/user</kbd>, <kbd>/tenant</kbd> and <kbd>/application</kbd> APIs
   * * Application related requests (with `X-Cumulocity-Application-Key` header)
   */
  deviceRequestCount?: number;

  /**
   * Number of devices with children. Updated only three times a day starting at 8:57, 16:57 and 23:57.
   */
  deviceWithChildrenCount?: number;

  /**
   * Number of created events.
   */
  eventsCreatedCount?: number;

  /**
   * Number of updates made to the events.
   */
  eventsUpdatedCount?: number;

  /**
   * Tenant external reference.
   */
  externalReference?: string;

  /**
   * Number of created managed objects.
   */
  inventoriesCreatedCount?: number;

  /**
   * Number of updates made to the managed objects.
   */
  inventoriesUpdatedCount?: number;

  /**
   * Number of created measurements.
   *
   * > **&#9432; Info:** Bulk creation of measurements is handled in a way that each measurement is counted individually.
   */
  measurementsCreatedCount?: number;

  /**
   * ID of the parent tenant.
   */
  parentTenantId?: string;

  /**
   * Peak value of `deviceCount` calculated for the requested time period of the summary.
   */
  peakDeviceCount?: number;

  /**
   * Peak value of `deviceWithChildrenCount` calculated for the requested time period of the summary.
   */
  peakDeviceWithChildrenCount?: number;

  /**
   * Peak value of used storage size in bytes, calculated for the requested time period of the summary.
   */
  peakStorageSize?: number;

  /**
   * Number of requests that were made against the tenant. Updated every 5 minutes. The following requests are not included:
   *
   * *  Internal SmartREST requests used to resolve templates
   * *  Internal SLA monitoring requests
   * *  Calls to any <kbd>/health</kbd> endpoint
   * *  Device bootstrap process requests related to configuring and retrieving device credentials
   * *  Microservice SDK internal calls for applications and subscriptions
   */
  requestCount?: number;
  resources?: UsageStatisticsResources;

  /**
   * Database storage in use, specified in bytes. It is affected by your retention rules and by the regularly running database optimization functions in Cumulocity IoT. If the size decreases, it does not necessarily mean that data was deleted. Updated only three times a day starting at 8:57, 16:57 and 23:57.
   */
  storageSize?: number;

  /**
   * Names of the tenant subscribed applications. Updated only three times a day starting at 8:57, 16:57 and 23:57.
   */
  subscribedApplications?: Array<string>;

  /**
   * The tenant's company name.
   */
  tenantCompany?: string;
  tenantCustomProperties?: CustomProperties;

  /**
   * URL of the tenant's domain. The domain name permits only the use of alphanumeric characters separated by dots `.`, hyphens `-` and underscores `_`.
   */
  tenantDomain?: string;
  tenantId?: DescTenantId;

  /**
   * Sum of all inbound transfers.
   */
  totalResourceCreateAndUpdateCount?: number;
}
