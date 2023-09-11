/* tslint:disable */
/* eslint-disable */
import { C8YSteam } from '../models/c-8-y-steam';
import { DescObjectId } from '../models/desc-object-id';
import { DescSelf } from '../models/desc-self';
export interface Measurement {
  c8y_Steam?: C8YSteam;

  /**
   * Unique identifier of the measurement.
   */
  id?: string;
  self?: DescSelf;

  /**
   * The managed object to which the measurement is associated.
   */
  source: {
'id': DescObjectId;
'self'?: DescSelf;
};

  /**
   * The date and time when the measurement is created.
   */
  time: string;

  /**
   * Identifies the type of this measurement.
   */
  type: string;

  [key: string]: C8YSteam | DescSelf | any | string | undefined | {
'id': DescObjectId;
'self'?: DescSelf;
};
}
