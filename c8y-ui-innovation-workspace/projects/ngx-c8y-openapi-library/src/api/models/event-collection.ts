/* tslint:disable */
/* eslint-disable */
import { DescNextPage } from '../models/desc-next-page';
import { DescPrevPage } from '../models/desc-prev-page';
import { DescSelf } from '../models/desc-self';
import { Event } from '../models/event';
import { PageStatistics } from '../models/page-statistics';
export interface EventCollection {

  /**
   * An array containing the results (events) of the request.
   */
  events?: Array<Event>;
  next?: DescNextPage;
  prev?: DescPrevPage;
  self?: DescSelf;
  statistics?: PageStatistics;
}
