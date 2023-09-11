/* tslint:disable */
/* eslint-disable */
export interface Error {

  /**
   * The type of error returned.
   */
  error?: string;

  /**
   * A URI reference [[RFC3986](https://tools.ietf.org/html/rfc3986)] that identifies the error code reported.
   */
  info?: string;

  /**
   * A human-readable message providing more details about the error.
   */
  message?: string;
}
