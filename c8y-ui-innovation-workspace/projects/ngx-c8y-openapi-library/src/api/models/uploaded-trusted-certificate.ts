/* tslint:disable */
/* eslint-disable */
export interface UploadedTrustedCertificate {

  /**
   * Indicates whether the automatic device registration is enabled or not.
   */
  autoRegistrationEnabled?: boolean;

  /**
   * Trusted certificate in PEM format.
   */
  certInPemFormat: string;

  /**
   * Name of the certificate.
   */
  name?: string;

  /**
   * Indicates if the certificate is active and can be used by the device to establish a connection to the Cumulocity IoT platform.
   */
  status: 'ENABLED' | 'DISABLED';
}
