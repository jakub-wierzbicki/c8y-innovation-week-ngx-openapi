/* tslint:disable */
/* eslint-disable */
import { Application } from '../models/application';
import { DescNextPage } from '../models/desc-next-page';
import { DescPrevPage } from '../models/desc-prev-page';
import { DescSelf } from '../models/desc-self';
import { PageStatistics } from '../models/page-statistics';
export interface ApplicationReferenceCollection {
  next?: DescNextPage;
  prev?: DescPrevPage;

  /**
   * An array containing all subscribed applications.
   */
  references?: Array<Application>;
  self?: DescSelf;
  statistics?: PageStatistics;
}
