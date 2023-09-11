/* tslint:disable */
/* eslint-disable */
import { DescSelf } from '../models/desc-self';
import { Measurement } from '../models/measurement';
export interface MeasurementApiResource {

  /**
   * Collection of all measurements
   */
  measurements?: {
'measurements'?: Array<Measurement> | null;
'self'?: DescSelf;
};

  /**
   * Read-only collection of all measurements for a particular time range.
   */
  measurementsForDate?: string;

  /**
   * Read-only collection of all measurements for a specific fragment type and a particular time range.
   */
  measurementsForDateAndFragmentType?: string;

  /**
   * Read-only collection of all measurements for a specific source object. The placeholder {source} must be a unique ID of an object in the inventory.
   */
  measurementsForSource?: string;

  /**
   * Read-only collection of all measurements for a specific source object in a particular time range.
   */
  measurementsForSourceAndDate?: string;

  /**
   * Read-only collection of all measurements of a particular type and a specific source object.
   */
  measurementsForSourceAndType?: string;

  /**
   * Read-only collection of all measurements for a specific source object, particular fragment type and series, and an event type.
   */
  measurementsForSourceAndValueFragmentTypeAndValueFragmentSeries?: string;

  /**
   * Read-only collection of all measurements of a particular type.
   */
  measurementsForType?: string;

  /**
   * Read-only collection of all measurements containing a particular fragment type.
   */
  measurementsForValueFragmentType?: string;
  self?: DescSelf;
}
