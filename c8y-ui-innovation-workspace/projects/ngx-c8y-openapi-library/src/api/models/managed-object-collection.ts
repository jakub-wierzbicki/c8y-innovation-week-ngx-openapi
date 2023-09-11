/* tslint:disable */
/* eslint-disable */
import { DescNextPage } from '../models/desc-next-page';
import { DescPrevPage } from '../models/desc-prev-page';
import { DescSelf } from '../models/desc-self';
import { ManagedObject } from '../models/managed-object';
import { PageStatistics } from '../models/page-statistics';
export interface ManagedObjectCollection {

  /**
   * An array containing the results (managed objects) of the request.
   */
  managedObjects?: Array<ManagedObject>;
  next?: DescNextPage;
  prev?: DescPrevPage;
  self?: DescSelf;
  statistics?: PageStatistics;
}
