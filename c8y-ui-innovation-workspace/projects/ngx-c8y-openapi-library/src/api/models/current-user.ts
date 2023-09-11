/* tslint:disable */
/* eslint-disable */
import { DescSelf } from '../models/desc-self';
import { DescUserDevicepermissions } from '../models/desc-user-devicepermissions';
import { Role } from '../models/role';

/**
 * The current user.
 */
export interface CurrentUser {
  devicePermissions?: DescUserDevicepermissions;

  /**
   * A list of user roles.
   */
  effectiveRoles?: Array<Role>;

  /**
   * The user's email address.
   */
  email?: string;

  /**
   * The user's first name.
   */
  firstName?: string;

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
   * The user's password. Only Latin1 characters are allowed.
   */
  password?: string;

  /**
   * The user's phone number.
   */
  phone?: string;
  self?: DescSelf;

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
