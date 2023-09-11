/* tslint:disable */
/* eslint-disable */
import { DescNextPage } from '../models/desc-next-page';
import { DescPrevPage } from '../models/desc-prev-page';
import { DescSelf } from '../models/desc-self';
import { Group } from '../models/group';
import { PageStatistics } from '../models/page-statistics';
export interface UserGroupCollection {

  /**
   * An array of user groups.
   */
  groups?: Array<Group>;
  next?: DescNextPage & any;
  prev?: DescPrevPage & any;
  self?: DescSelf & any;
  statistics?: PageStatistics;
}
