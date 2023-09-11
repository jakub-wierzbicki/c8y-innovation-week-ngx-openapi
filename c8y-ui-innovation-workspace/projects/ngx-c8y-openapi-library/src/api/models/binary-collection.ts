/* tslint:disable */
/* eslint-disable */
import { Binary } from '../models/binary';
import { DescNextPage } from '../models/desc-next-page';
import { DescPrevPage } from '../models/desc-prev-page';
import { DescSelf } from '../models/desc-self';
import { PageStatistics } from '../models/page-statistics';
export interface BinaryCollection {

  /**
   * An array containing the results (managed objects) of the request.
   */
  managedObjects?: Array<Binary>;
  next?: DescNextPage;
  prev?: DescPrevPage;
  self?: DescSelf;
  statistics?: PageStatistics;
}
