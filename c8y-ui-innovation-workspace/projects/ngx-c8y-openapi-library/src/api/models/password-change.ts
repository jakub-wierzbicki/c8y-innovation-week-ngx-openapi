/* tslint:disable */
/* eslint-disable */
export interface PasswordChange {

  /**
   * The current password of the user performing the request.
   */
  currentUserPassword: string;

  /**
   * The new password to be set for the user performing the request.
   */
  newPassword: string;
}
