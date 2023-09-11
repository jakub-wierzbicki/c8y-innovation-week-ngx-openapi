/* tslint:disable */
/* eslint-disable */
import { Alarm } from '../models/alarm';
import { DescNextPage } from '../models/desc-next-page';
import { DescPrevPage } from '../models/desc-prev-page';
import { DescSelf } from '../models/desc-self';
import { PageStatistics } from '../models/page-statistics';
export interface AlarmCollection {

  /**
   * An array containing the results (alarms) of the request.
   */
  alarms?: Array<Alarm>;
  next?: DescNextPage;
  prev?: DescPrevPage;
  self?: DescSelf;
  statistics?: PageStatistics;
}
