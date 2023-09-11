/* tslint:disable */
/* eslint-disable */
import { DescNextPage } from '../models/desc-next-page';
import { DescPrevPage } from '../models/desc-prev-page';
import { DescSelf } from '../models/desc-self';
import { PageStatistics } from '../models/page-statistics';
import { UserReference } from '../models/user-reference';
export interface UserReferenceCollection {
  next?: DescNextPage;
  prev?: DescPrevPage;

  /**
   * An array of user references.
   */
  references?: Array<UserReference>;
  self?: DescSelf;
  statistics?: PageStatistics;
}
