/* tslint:disable */
/* eslint-disable */
import { SystemOption } from '../models/system-option';

/**
 * All available system options of the tenant.
 */
export interface SystemOptionCollection {

  /**
   * An array containing the predefined system options.
   */
  options?: Array<SystemOption>;
}
