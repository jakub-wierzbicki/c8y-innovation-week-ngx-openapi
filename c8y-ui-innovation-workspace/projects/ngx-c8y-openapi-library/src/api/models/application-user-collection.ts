/* tslint:disable */
/* eslint-disable */
export interface ApplicationUserCollection {

  /**
   * A list of users who are subscribed to the current application.
   */
  users?: Array<{

/**
 * The username.
 */
'name'?: string;

/**
 * The user password.
 */
'password'?: string;

/**
 * The user tenant.
 */
'tenant'?: string;
}>;
}
