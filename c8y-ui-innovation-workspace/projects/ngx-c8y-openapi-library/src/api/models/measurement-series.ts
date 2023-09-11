/* tslint:disable */
/* eslint-disable */
import { MeasurementFragmentSeries } from '../models/measurement-fragment-series';
export interface MeasurementSeries {

  /**
   * An array containing the type of series and units.
   */
  series?: Array<MeasurementFragmentSeries>;

  /**
   * If there were more than 5000 values, the final result was truncated.
   */
  truncated?: boolean;

  /**
   * Each property contained here is a date taken from the measurement and it contains an array of objects specifying `min` and `max` pair of values. Each pair corresponds to a single series object in the `series` array. If there is no aggregation used, `min` is equal to `max` in every pair.
   */
  values?: {
};
}
