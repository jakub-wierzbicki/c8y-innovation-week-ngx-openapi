/* tslint:disable */
/* eslint-disable */
import { DescObjectId } from '../models/desc-object-id';
import { DescObjectName } from '../models/desc-object-name';
import { DescSelf } from '../models/desc-self';
export interface Alarm {

  /**
   * Number of times that this alarm has been triggered.
   */
  count?: number;

  /**
   * The date and time when the alarm was created.
   */
  creationTime?: string;

  /**
   * The time at which the alarm occurred for the first time. Only present when `count` is greater than 1.
   */
  firstOccurrenceTime?: string;

  /**
   * Unique identifier of the alarm.
   */
  id?: string;

  /**
   * The date and time when the alarm was last updated.
   */
  lastUpdated?: string;
  self?: DescSelf;

  /**
   * The severity of the alarm.
   */
  severity?: 'CRITICAL' | 'MAJOR' | 'MINOR' | 'WARNING';

  /**
   * The managed object to which the alarm is associated.
   */
  source?: {
'id'?: DescObjectId;
'name'?: DescObjectName;
'self'?: DescSelf;
};

  /**
   * The status of the alarm. If not specified, a new alarm will be created as ACTIVE.
   */
  status?: 'ACTIVE' | 'ACKNOWLEDGED' | 'CLEARED';

  /**
   * Description of the alarm.
   */
  text?: string;

  /**
   * The date and time when the alarm is triggered.
   */
  time?: string;

  /**
   * Identifies the type of this alarm.
   */
  type?: string;

  [key: string]: 'ACTIVE' | 'ACKNOWLEDGED' | 'CLEARED' | 'CRITICAL' | 'MAJOR' | 'MINOR' | 'WARNING' | DescSelf | any | number | string | undefined | {
'id'?: DescObjectId;
'name'?: DescObjectName;
'self'?: DescSelf;
};
}
