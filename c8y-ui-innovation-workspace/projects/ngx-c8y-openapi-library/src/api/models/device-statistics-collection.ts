/* tslint:disable */
/* eslint-disable */
import { DescNextPage } from '../models/desc-next-page';
import { DescPrevPage } from '../models/desc-prev-page';
import { DescSelf } from '../models/desc-self';
import { DeviceStatistics } from '../models/device-statistics';

/**
 * Statistics of the tenant devices.
 */
export interface DeviceStatisticsCollection {
  next?: DescNextPage;
  prev?: DescPrevPage;
  self?: DescSelf;

  /**
   * An array containing the tenant device statistics.
   */
  statistics?: Array<DeviceStatistics>;
}
