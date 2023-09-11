/* tslint:disable */
/* eslint-disable */
import { DescNextPage } from '../models/desc-next-page';
import { DescPrevPage } from '../models/desc-prev-page';
import { DescSelf } from '../models/desc-self';
import { Option } from '../models/option';
import { PageStatistics } from '../models/page-statistics';

/**
 * All available options of the tenant.
 */
export interface OptionCollection {
  next?: DescNextPage;

  /**
   * An array containing the available options.
   */
  options?: Array<Option>;
  prev?: DescPrevPage;
  self?: DescSelf;
  statistics?: PageStatistics;
}
