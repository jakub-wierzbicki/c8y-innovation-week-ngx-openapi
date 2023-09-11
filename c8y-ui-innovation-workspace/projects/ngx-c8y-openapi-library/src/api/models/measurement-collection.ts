/* tslint:disable */
/* eslint-disable */
import { DescNextPage } from '../models/desc-next-page';
import { DescPrevPage } from '../models/desc-prev-page';
import { DescSelf } from '../models/desc-self';
import { Measurement } from '../models/measurement';
import { PageStatistics } from '../models/page-statistics';
export interface MeasurementCollection {

  /**
   * An array containing the measurements of the request.
   */
  measurements: Array<Measurement>;
  next?: DescNextPage;
  prev?: DescPrevPage;
  self?: DescSelf;
  statistics?: any & PageStatistics;
}
