/* tslint:disable */
/* eslint-disable */
import { BulkOperation } from '../models/bulk-operation';
import { DescNextPage } from '../models/desc-next-page';
import { DescPrevPage } from '../models/desc-prev-page';
import { DescSelf } from '../models/desc-self';
import { PageStatistics } from '../models/page-statistics';
export interface BulkOperationCollection {

  /**
   * An array of bulk operations.
   */
  bulkOperations?: Array<BulkOperation>;
  next?: DescNextPage;
  prev?: DescPrevPage;
  self?: DescSelf;
  statistics?: PageStatistics;
}
