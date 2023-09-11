/* tslint:disable */
/* eslint-disable */
import { DescSelf } from '../models/desc-self';
export interface UserApiResource {

  /**
   * Reference to the resource of the logged in user.
   */
  currentUser?: string;

  /**
   * Reference to a resource of type group.
   */
  groupByName?: string;

  /**
   * Collection of all users belonging to a given tenant.
   */
  groups?: string;

  /**
   * Collection of all roles.
   */
  roles?: string;
  self?: DescSelf;

  /**
   * Reference to a resource of type user.
   */
  userByName?: string;

  /**
   * Collection of all users belonging to a given tenant.
   */
  users?: string;
}
