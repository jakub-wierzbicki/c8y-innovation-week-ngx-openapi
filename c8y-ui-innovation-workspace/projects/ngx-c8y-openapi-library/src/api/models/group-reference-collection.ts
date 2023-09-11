/* tslint:disable */
/* eslint-disable */
import { DescNextPage } from '../models/desc-next-page';
import { DescPrevPage } from '../models/desc-prev-page';
import { DescSelf } from '../models/desc-self';
import { GroupReference } from '../models/group-reference';
import { PageStatistics } from '../models/page-statistics';
export interface GroupReferenceCollection {
  next?: DescNextPage & any;
  prev?: DescPrevPage & any;

  /**
   * An array of group references.
   */
  references?: Array<GroupReference>;
  self?: DescSelf & any;
  statistics?: PageStatistics;
}
