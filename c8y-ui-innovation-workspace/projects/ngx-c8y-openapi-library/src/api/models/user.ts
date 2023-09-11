/* tslint:disable */
/* eslint-disable */
import { Application } from '../models/application';
import { CustomProperties } from '../models/custom-properties';
import { DescSelf } from '../models/desc-self';
import { DescUserDevicepermissions } from '../models/desc-user-devicepermissions';
import { GroupReference } from '../models/group-reference';
import { PageStatistics } from '../models/page-statistics';
import { RoleReference } from '../models/role-reference';
export interface User {

  /**
   * A list of applications for this user.
   */
  applications?: Array<Application>;
  customProperties?: CustomProperties;
  devicePermissions?: DescUserDevicepermissions;

  /**
   * The user's display name in Cumulocity IoT.
   */
  displayName?: string;

  /**
   * The user's email address.
   */
  email?: string;

  /**
   * Indicates whether the user is enabled or not. Disabled users cannot log in or perform API requests.
   */
  enabled?: boolean;

  /**
   * The user's first name.
   */
  firstName?: string;

  /**
   * An object with a list of user groups.
   */
  groups?: {
'self'?: DescSelf;

/**
 * A list of user group references.
 */
'references'?: Array<GroupReference>;
'statistics'?: PageStatistics;
};

  /**
   * A unique identifier for this user.
   */
  id?: string;

  /**
   * The user's last name.
   */
  lastName?: string;

  /**
   * The date and time when the user's password was last changed, in [ISO 8601 datetime format](https://www.w3.org/TR/NOTE-datetime).
   */
  lastPasswordChange?: string;

  /**
   * Indicates whether the user is subscribed to the newsletter or not.
   */
  newsletter?: boolean;

  /**
   * Identifier of the parent user. If present, indicates that a user belongs to a user hierarchy by pointing to its direct ancestor. Can only be set by users with role USER_MANAGEMENT_ADMIN during user creation. Otherwise it's assigned automatically.
   */
  owner?: string;

  /**
   * The user's password. Only Latin1 characters are allowed.
   *
   * If you do not specify a password when creating a new user with a POST request, it must contain the property `sendPasswordResetEmail` with a value of `true`.
   */
  password?: string;

  /**
   * Indicates the password strength. The value can be GREEN, YELLOW or RED for decreasing password strengths.
   */
  passwordStrength?: 'GREEN' | 'YELLOW' | 'RED';

  /**
   * The user's phone number.
   */
  phone?: string;

  /**
   * An object with a list of user roles.
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
   * When set to `true`, this field will cause Cumulocity IoT to send a password reset email to the email address specified.
   *
   * If there is no password specified when creating a new user with a POST request, this must be specified and it must be set to `true`.
   */
  sendPasswordResetEmail?: boolean;

  /**
   * Indicates if the user should reset the password on the next login.
   */
  shouldResetPassword?: boolean;

  /**
   * Indicates if the user has to use two-factor authentication to log in.
   */
  twoFactorAuthenticationEnabled?: boolean;

  /**
   * The user's username. It can have a maximum of 1000 characters.
   */
  userName?: string;
}
