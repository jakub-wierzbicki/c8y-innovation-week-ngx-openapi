/* tslint:disable */
/* eslint-disable */

/**
 * The session configuration properties are only available for OAuth internal. See [Changing settings > OAuth internal](https://cumulocity.com/guides/users-guide/administration/#oauth-internal) for more details.
 */
export interface OAuthSessionConfiguration {

  /**
   * Maximum session duration (in milliseconds) during which a user does not have to login again.
   */
  absoluteTimeoutMillis?: number;

  /**
   * Maximum number of parallel sessions for one user.
   */
  maximumNumberOfParallelSessions?: number;

  /**
   * Amount of time before a token expires (in milliseconds) during which the token may be renewed.
   */
  renewalTimeoutMillis?: number;

  /**
   * Switch to turn additional user agent verification on or off during the session.
   */
  userAgentValidationRequired?: boolean;
}
