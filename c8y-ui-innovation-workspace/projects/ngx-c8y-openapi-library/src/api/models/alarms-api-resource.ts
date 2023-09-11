/* tslint:disable */
/* eslint-disable */
import { Alarm } from '../models/alarm';
import { DescSelf } from '../models/desc-self';
export interface AlarmsApiResource {

  /**
   * Collection of all alarms
   */
  alarms?: {
'self'?: DescSelf;
'alarms'?: Array<Alarm> | null;
};

  /**
   * Read-only collection of all alarms for a specific source object. The placeholder {source} must be a unique ID of an object in the inventory.
   */
  alarmsForSource?: string;

  /**
   * Read-only collection of all alarms for a specific source object in a particular status.
   */
  alarmsForSourceAndStatus?: string;

  /**
   * Read-only collection of all alarms for a specific source, status and time range.
   */
  alarmsForSourceAndStatusAndTime?: string;

  /**
   * Read-only collection of all alarms for a specific source and time range.
   */
  alarmsForSourceAndTime?: string;

  /**
   * Read-only collection of all alarms in a particular status. The placeholder {status} can be one of the following values: ACTIVE, ACKNOWLEDGED or CLEARED
   */
  alarmsForStatus?: string;

  /**
   * Read-only collection of all alarms for a particular status and time range.
   */
  alarmsForStatusAndTime?: string;

  /**
   * Read-only collection of all alarms for a particular time range.
   */
  alarmsForTime?: string;
  self?: DescSelf;
}
