/* tslint:disable */
/* eslint-disable */
import { DescNextPage } from '../models/desc-next-page';
import { DescPrevPage } from '../models/desc-prev-page';
import { DescSelf } from '../models/desc-self';
import { PageStatistics } from '../models/page-statistics';
import { RetentionRule } from '../models/retention-rule';
export interface RetentionRuleCollection {
  next?: DescNextPage;
  prev?: DescPrevPage;

  /**
   * An array containing the results (retention rules) of the request.
   */
  retentionRules?: Array<RetentionRule>;
  self?: DescSelf;
  statistics?: PageStatistics;
}
