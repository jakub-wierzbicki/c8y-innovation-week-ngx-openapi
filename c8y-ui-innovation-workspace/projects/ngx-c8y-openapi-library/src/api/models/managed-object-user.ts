/* tslint:disable */
/* eslint-disable */
import { DescSelf } from '../models/desc-self';
export interface ManagedObjectUser {

  /**
   * Specifies if the device's owner is enabled or not.
   */
  enabled?: boolean;
  self?: DescSelf;

  /**
   * The username of the device's owner.
   */
  userName?: string;
}
