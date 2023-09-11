/* tslint:disable */
/* eslint-disable */
export interface CurrentUserTotpSecret {

  /**
   * Secret used by two-factor authentication applications to generate the TFA codes.
   */
  rawSecret?: string;

  /**
   * URL used to set the two-factor authentication secret for the TFA application.
   */
  secretQrUrl?: string;
}
