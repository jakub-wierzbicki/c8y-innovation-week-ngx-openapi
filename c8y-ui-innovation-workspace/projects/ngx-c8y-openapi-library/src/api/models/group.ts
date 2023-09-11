/* tslint:disable */
/* eslint-disable */
import { Application } from '../models/application';
import { CustomProperties } from '../models/custom-properties';
import { DescSelf } from '../models/desc-self';
import { DescUserDevicepermissions } from '../models/desc-user-devicepermissions';
import { PageStatistics } from '../models/page-statistics';
import { RoleReference } from '../models/role-reference';
import { User } from '../models/user';
export interface Group {

  /**
   * A list of applications.
   */
  applications?: Array<Application>;
  customProperties?: CustomProperties;

  /**
   * A description of the group.
   */
  description?: string;
  devicePermissions?: DescUserDevicepermissions;

  /**
   * A unique identifier for this group.
   */
  id?: number;

  /**
   * The name of the group.
   */
  name: string;

  /**
   * An object containing user roles for this group.
   */
  roles?: {
'self'?: DescSelf;

/**
 * A list of user role references.
 */
'references'?: Array<RoleReference>;
'statistics'?: PageStatistics;
};
  self?: DescSelf;

  /**
   * The list of users in this group.
   */
  users?: {
'self'?: DescSelf;

/**
 * The list of users in this group.
 */
'references'?: Array<User>;
};
}
