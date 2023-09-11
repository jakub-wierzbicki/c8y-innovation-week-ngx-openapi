/* tslint:disable */
/* eslint-disable */
import { DescNextPage } from '../models/desc-next-page';
import { DescPrevPage } from '../models/desc-prev-page';
import { DescSelf } from '../models/desc-self';
import { InventoryRole } from '../models/inventory-role';
import { PageStatistics } from '../models/page-statistics';
export interface InventoryRoleCollection {
  next?: DescNextPage;
  prev?: DescPrevPage;

  /**
   * An array of inventory roles.
   */
  roles?: Array<InventoryRole>;
  self?: DescSelf;
  statistics?: PageStatistics;
}
