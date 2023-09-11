/* tslint:disable */
/* eslint-disable */
import { UsageStatisticsResourcesUsedBy } from '../models/usage-statistics-resources-used-by';

/**
 * Resources usage for each subscribed microservice application.
 */
export interface UsageStatisticsResources {

  /**
   * Total number of CPU usage for tenant microservices, specified in CPU milliseconds (1000m = 1 CPU).
   */
  cpu?: number;

  /**
   * Total number of memory usage for tenant microservices, specified in MB.
   */
  memory?: number;

  /**
   * Collection of resources usage for each microservice.
   */
  usedBy?: Array<UsageStatisticsResourcesUsedBy>;
}
