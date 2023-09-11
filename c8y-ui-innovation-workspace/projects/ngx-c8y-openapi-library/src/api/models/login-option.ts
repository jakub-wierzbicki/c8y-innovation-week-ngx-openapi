/* tslint:disable */
/* eslint-disable */
import { BasicAuthenticationRestrictions } from '../models/basic-authentication-restrictions';
import { DescSelf } from '../models/desc-self';
import { OAuthSessionConfiguration } from '../models/o-auth-session-configuration';

/**
 * Login option properties.
 */
export interface LoginOption {

  /**
   * The type of authentication.
   *
   * @deprecated
   */
  '_type'?: string;
  authenticationRestrictions?: BasicAuthenticationRestrictions;

  /**
   * Indicates if password strength is enforced.
   */
  enforceStrength?: boolean;

  /**
   * The grant type of the OAuth configuration.
   */
  grantType?: 'PASSWORD' | 'AUTHORIZATION_CODE';

  /**
   * Minimum length for the password when the strength validation is enforced.
   */
  greenMinLength?: number;

  /**
   * Unique identifier of this login option.
   */
  id?: string;

  /**
   * A URL linking to the token generating endpoint.
   */
  initRequest?: string;

  /**
   * The tenant domain.
   */
  loginRedirectDomain?: string;
  self?: DescSelf;
  sessionConfiguration?: OAuthSessionConfiguration;

  /**
   * Enforce password strength validation on subtenant level. `enforceStrength` enforces it on all tenants in the platform.
   */
  strengthValidity?: boolean;

  /**
   * Two-factor authentication being used by this login option. TFA supported: SMS and TOTP.
   */
  tfaStrategy?: string;

  /**
   * The type of authentication. See [Authentication](#section/Authentication) for more details.
   */
  type?: string;

  /**
   * Specifies if the users are managed internally by Cumulocity IoT (`INTERNAL`) or if the users data are managed by a external system (`REMOTE`).
   */
  userManagementSource?: string;

  /**
   * Indicates if this login option is available in the login page (only for SSO).
   */
  visibleOnLoginPage?: boolean;
}
