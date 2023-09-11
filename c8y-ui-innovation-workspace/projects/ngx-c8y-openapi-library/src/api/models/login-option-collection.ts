/* tslint:disable */
/* eslint-disable */
import { DescSelf } from '../models/desc-self';
import { LoginOption } from '../models/login-option';

/**
 * All available login options of the tenant.
 */
export interface LoginOptionCollection {

  /**
   * An array containing the available login options.
   */
  loginOptions?: Array<LoginOption>;
  self?: DescSelf;
}
