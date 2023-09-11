/* tslint:disable */
/* eslint-disable */
export interface NotificationTokenClaims {

  /**
   * The token expiration duration.
   */
  expiresInMinutes?: number;

  /**
   * If `true`, indicates that the created token refers to the non-persistent variant of the named subscription.
   */
  nonPersistent?: boolean;

  /**
   * If `true`, indicates that the token is used to create a shared consumer on the subscription.
   */
  shared?: boolean;

  /**
   * If `true`, the token will be securely signed by the Cumulocity IoT platform.
   */
  signed?: boolean;

  /**
   * The subscriber name which the client wishes to be identified with.
   */
  subscriber: string;

  /**
   * The subscription name. This value must match the same that was used when the subscription was created.
   */
  subscription: string;

  /**
   * The subscription type. Currently the only supported type is `notification` .Other types may be added in future.
   */
  type?: 'notification';
}
