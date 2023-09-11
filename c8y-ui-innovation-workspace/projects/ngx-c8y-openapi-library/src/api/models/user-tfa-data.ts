/* tslint:disable */
/* eslint-disable */
export interface UserTfaData {

  /**
   * Latest date and time when the user has used two-factor authentication to log in.
   */
  lastTfaRequestTime?: string;

  /**
   * Two-factor authentication strategy.
   */
  strategy?: 'SMS' | 'TOTP';

  /**
   * Indicates whether the user has enabled two-factor authentication or not.
   */
  tfaEnabled?: boolean;

  /**
   * Indicates whether two-factor authentication is enforced by the tenant admin or not.
   */
  tfaEnforced?: boolean;
}
