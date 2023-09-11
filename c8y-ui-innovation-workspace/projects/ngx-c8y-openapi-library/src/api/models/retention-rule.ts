/* tslint:disable */
/* eslint-disable */
import { DescSelf } from '../models/desc-self';
export interface RetentionRule {

  /**
   * The data type(s) to which the rule is applied.
   */
  dataType?: 'ALARM' | 'AUDIT' | 'BULK_OPERATION' | 'EVENT' | 'MEASUREMENT' | 'OPERATION' | '*';

  /**
   * Indicates whether the rule is editable or not. It can be updated only by the Management tenant.
   */
  editable?: boolean;

  /**
   * The fragment type(s) to which the rule is applied. Used by the data types EVENT, MEASUREMENT, OPERATION and BULK_OPERATION.
   */
  fragmentType?: string;

  /**
   * Unique identifier of the retention rule.
   */
  id?: string;

  /**
   * Maximum age expressed in number of days.
   */
  maximumAge?: number;
  self?: DescSelf;

  /**
   * The source(s) to which the rule is applied. Used by all data types.
   */
  source?: string;

  /**
   * The type(s) to which the rule is applied. Used by the data types ALARM, AUDIT, EVENT and MEASUREMENT.
   */
  type?: string;
}
