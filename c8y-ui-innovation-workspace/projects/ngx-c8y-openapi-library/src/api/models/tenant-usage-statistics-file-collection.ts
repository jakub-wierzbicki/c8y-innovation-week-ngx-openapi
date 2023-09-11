/* tslint:disable */
/* eslint-disable */
import { DescNextPage } from '../models/desc-next-page';
import { DescPrevPage } from '../models/desc-prev-page';
import { DescSelf } from '../models/desc-self';
import { PageStatistics } from '../models/page-statistics';
import { StatisticsFile } from '../models/statistics-file';

/**
 * Statistics files metadata.
 */
export interface TenantUsageStatisticsFileCollection {
  next?: DescNextPage;
  prev?: DescPrevPage;
  self?: DescSelf;
  statistics?: PageStatistics;

  /**
   * An array containing the usage statistics files metadata.
   */
  statisticsFiles?: Array<StatisticsFile>;
}
