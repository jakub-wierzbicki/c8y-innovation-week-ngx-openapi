/* tslint:disable */
/* eslint-disable */
import { DescSelf } from '../models/desc-self';

/**
 * A user role.
 */
export interface Role {

  /**
   * A unique identifier for this user role.
   */
  id?: string;

  /**
   * The name of this user role.
   */
  name?: string;
  self?: DescSelf;
}
