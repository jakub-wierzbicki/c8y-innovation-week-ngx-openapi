/* tslint:disable */
/* eslint-disable */

/**
 * For basic authentication case only.
 */
export interface BasicAuthenticationRestrictions {

  /**
   * List of types of clients which are not allowed to use basic authentication. Currently the only supported option is WEB_BROWSERS.
   */
  forbiddenClients?: Array<string>;

  /**
   * List of user agents, passed in `User-Agent` HTTP header, which are blocked if basic authentication is used.
   */
  forbiddenUserAgents?: Array<string>;

  /**
   * List of user agents, passed in `User-Agent` HTTP header, which are allowed to use basic authentication.
   */
  trustedUserAgents?: Array<string>;
}
