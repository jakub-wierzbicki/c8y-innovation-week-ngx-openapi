/* tslint:disable */
/* eslint-disable */
import { Group } from '../models/group';
import { User } from '../models/user';

/**
 * A list of device permissions.
 */
export interface DevicePermissions {
  groups?: Array<Group>;
  users?: Array<User>;
}
