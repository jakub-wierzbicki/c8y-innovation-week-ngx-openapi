/* tslint:disable */
/* eslint-disable */
import { DescNextPage } from '../models/desc-next-page';
import { DescPrevPage } from '../models/desc-prev-page';
import { DescSelf } from '../models/desc-self';
import { PageStatistics } from '../models/page-statistics';
import { RoleReference } from '../models/role-reference';
export interface RoleReferenceCollection {
  next?: DescNextPage;
  prev?: DescPrevPage;
  references?: RoleReference;
  self?: DescSelf;
  statistics?: PageStatistics;
}
