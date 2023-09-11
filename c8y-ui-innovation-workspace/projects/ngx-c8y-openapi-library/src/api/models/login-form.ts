/* tslint:disable */
/* eslint-disable */
export interface LoginForm {

  /**
   * Used in case of SSO login. A code received from the external authentication server is exchanged to an internal access token.
   */
  code?: string;

  /**
   * Dependent on the authentication type. PASSWORD is used for OAI-Secure.
   */
  grant_type?: 'PASSWORD' | 'AUTHORIZATION_CODE' | 'REFRESH_TOKEN';

  /**
   * Used in cases of basic or OAI-Secure authentication.
   */
  password?: string;

  /**
   * Current TFA code, sent by the user, if a TFA code is required to log in.
   */
  tfa_code?: string;

  /**
   * Used in cases of basic or OAI-Secure authentication.
   */
  username?: string;
}
