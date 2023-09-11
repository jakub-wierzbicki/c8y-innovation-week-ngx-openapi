/* tslint:disable */
/* eslint-disable */
import { DescSelf } from '../models/desc-self';
export interface ApplicationApiResource {

  /**
   * A reference to a resource of type Application.
   */
  applicationById?: string;

  /**
   * Collection of all applications..
   */
  applications?: string;

  /**
   * Read-only collection of all applications with a particular name.
   */
  applicationsByName?: string;

  /**
   * Read-only collection of all applications owned by a particular tenant.
   */
  applicationsByOwner?: string;

  /**
   * Read-only collection of all applications subscribed by a particular tenant.
   */
  applicationsByTenant?: string;

  /**
   * Read-only collection of all applications owned by a particular user.
   */
  applicationsByUser?: string;
  self?: DescSelf;
}
