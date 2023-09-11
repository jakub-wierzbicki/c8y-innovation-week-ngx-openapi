/* tslint:disable */
/* eslint-disable */
import { DescNextPage } from '../models/desc-next-page';
import { DescPrevPage } from '../models/desc-prev-page';
import { DescSelf } from '../models/desc-self';
import { PageStatistics } from '../models/page-statistics';
import { Role } from '../models/role';
export interface UserRoleCollection {
  next?: DescNextPage;
  prev?: DescPrevPage;

  /**
   * An array of user roles.
   */
  roles?: Array<Role>;
  self?: DescSelf;
  statistics?: PageStatistics;
}
