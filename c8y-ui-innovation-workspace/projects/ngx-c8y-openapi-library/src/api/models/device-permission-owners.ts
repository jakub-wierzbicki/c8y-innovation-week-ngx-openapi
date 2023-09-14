/* tslint:disable */
/* eslint-disable */
import { Group } from '../models/group';
import { User } from '../models/user';

/**
 * A list of device permissions.
 */
export interface DevicePermissionOwners {
  groups?: Array<Group>;
  users?: Array<User>;
}
