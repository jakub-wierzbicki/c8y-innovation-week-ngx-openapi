/* tslint:disable */
/* eslint-disable */
import { DescNextPage } from '../models/desc-next-page';
import { DescPrevPage } from '../models/desc-prev-page';
import { DescSelf } from '../models/desc-self';
import { Operation } from '../models/operation';
import { PageStatistics } from '../models/page-statistics';
export interface OperationCollection {
  next?: DescNextPage;

  /**
   * An array of operations.
   */
  operations?: Array<Operation>;
  prev?: DescPrevPage;
  self?: DescSelf;
  statistics?: PageStatistics;
}
