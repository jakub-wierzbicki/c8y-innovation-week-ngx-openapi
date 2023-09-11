/* tslint:disable */
/* eslint-disable */
import { Application } from '../models/application';
import { DescNextPage } from '../models/desc-next-page';
import { DescPrevPage } from '../models/desc-prev-page';
import { DescSelf } from '../models/desc-self';
import { PageStatistics } from '../models/page-statistics';
export interface ApplicationCollection {

  /**
   * An array of applications.
   */
  applications?: Array<Application>;
  next?: DescNextPage;
  prev?: DescPrevPage;
  self?: DescSelf;
  statistics?: PageStatistics;
}
