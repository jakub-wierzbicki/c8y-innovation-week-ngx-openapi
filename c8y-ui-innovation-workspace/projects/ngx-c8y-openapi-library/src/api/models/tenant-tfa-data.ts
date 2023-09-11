/* tslint:disable */
/* eslint-disable */
export interface TenantTfaData {

  /**
   * Indicates whether two-factor authentication is enabled on system level or not.
   */
  enabledOnSystemLevel?: boolean;

  /**
   * Indicates whether two-factor authentication is enabled on tenant level or not.
   */
  enabledOnTenantLevel?: boolean;

  /**
   * Indicates whether two-factor authentication is enforced on system level or not.
   */
  enforcedOnSystemLevel?: boolean;

  /**
   * Two-factor authentication is enforced for the specified group.
   */
  enforcedUsersGroup?: string;

  /**
   * Two-factor authentication strategy.
   */
  strategy?: 'SMS' | 'TOTP';

  /**
   * Indicates whether two-factor authentication is enforced on tenant level or not.
   */
  totpEnforcedOnTenantLevel?: boolean;
}
