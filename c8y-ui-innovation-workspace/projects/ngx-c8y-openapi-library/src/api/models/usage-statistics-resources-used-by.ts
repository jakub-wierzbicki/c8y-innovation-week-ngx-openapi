/* tslint:disable */
/* eslint-disable */
export interface UsageStatisticsResourcesUsedBy {

  /**
   * Reason for calculating statistics of the specified microservice.
   */
  cause?: string;

  /**
   * Number of CPU usage for a single microservice.
   */
  cpu?: number;

  /**
   * Number of memory usage for a single microservice.
   */
  memory?: number;

  /**
   * Name of the microservice.
   */
  name?: string;
}
