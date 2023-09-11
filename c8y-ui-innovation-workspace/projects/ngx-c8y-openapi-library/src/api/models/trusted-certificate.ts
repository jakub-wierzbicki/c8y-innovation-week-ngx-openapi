/* tslint:disable */
/* eslint-disable */
import { DescSelf } from '../models/desc-self';
export interface TrustedCertificate {

  /**
   * Algorithm used to decode/encode the certificate.
   */
  algorithmName?: string;

  /**
   * Indicates whether the automatic device registration is enabled or not.
   */
  autoRegistrationEnabled?: boolean;

  /**
   * Trusted certificate in PEM format.
   */
  certInPemFormat?: string;

  /**
   * Unique identifier of the trusted certificate.
   */
  fingerprint?: string;

  /**
   * The name of the organization which signed the certificate.
   */
  issuer?: string;

  /**
   * Name of the certificate.
   */
  name?: string;

  /**
   * The end date and time of the certificate's validity.
   */
  notAfter?: string;

  /**
   * The start date and time of the certificate's validity.
   */
  notBefore?: string;

  /**
   * An unsigned verification code that provides proof of possession for the certificate after signing.
   */
  proofOfPossessionUnsignedVerificationCode?: string;

  /**
   * Indicates whether the proof of possession for the certificate was provided.
   */
  proofOfPossessionValid?: boolean;

  /**
   * Validity of the verification code.
   */
  proofOfPossessionVerificationCodeUsableUntil?: string;
  self?: DescSelf;

  /**
   * The certificate's serial number.
   */
  serialNumber?: string;

  /**
   * Indicates if the certificate is active and can be used by the device to establish a connection to the Cumulocity IoT platform.
   */
  status?: 'ENABLED' | 'DISABLED';

  /**
   * Name of the organization to which the certificate belongs.
   */
  subject?: string;

  /**
   * Version of the X.509 certificate standard.
   */
  version?: number;
}
