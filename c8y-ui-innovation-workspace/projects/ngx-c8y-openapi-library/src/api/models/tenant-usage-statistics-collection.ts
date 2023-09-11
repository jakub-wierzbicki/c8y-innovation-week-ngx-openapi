/* tslint:disable */
/* eslint-disable */
import { DailyUsageStatistics } from '../models/daily-usage-statistics';
import { DescNextPage } from '../models/desc-next-page';
import { DescPrevPage } from '../models/desc-prev-page';
import { DescSelf } from '../models/desc-self';
import { PageStatistics } from '../models/page-statistics';
export interface TenantUsageStatisticsCollection {
  next?: DescNextPage;
  prev?: DescPrevPage;
  self?: DescSelf;
  statistics?: PageStatistics;

  /**
   * An array containing the tenant usage statistics.
   */
  usageStatistics?: Array<DailyUsageStatistics>;
}
