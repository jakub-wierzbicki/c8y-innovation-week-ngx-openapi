/* tslint:disable */
/* eslint-disable */
import { DescNextPage } from '../models/desc-next-page';
import { DescPrevPage } from '../models/desc-prev-page';
import { DescSelf } from '../models/desc-self';
import { NewDeviceRequest } from '../models/new-device-request';
import { PageStatistics } from '../models/page-statistics';
export interface NewDeviceRequestCollection {

  /**
   * An array of new device requests.
   */
  newDeviceRequests?: Array<NewDeviceRequest>;
  next?: DescNextPage;
  prev?: DescPrevPage;
  self?: DescSelf;
  statistics?: PageStatistics;
}
