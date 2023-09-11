/* tslint:disable */
/* eslint-disable */
export interface VerifyCertificateChain {

  /**
   * The name of the organization which signed the certificate.
   */
  issuer?: string;

  /**
   * The name of the organization to which the certificate belongs.
   */
  subject?: string;

  /**
   * The result of validating the certificate chain.
   */
  successfullyValidated?: boolean;

  /**
   * The tenant ID used for validation.
   */
  tenantId?: string;
}
