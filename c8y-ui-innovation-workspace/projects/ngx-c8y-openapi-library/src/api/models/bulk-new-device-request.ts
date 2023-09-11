/* tslint:disable */
/* eslint-disable */
export interface BulkNewDeviceRequest {

  /**
   * An array with the updated device credentials.
   */
  credentialUpdatedList?: Array<{

/**
 * The device credentials creation status.
 */
'bulkNewDeviceStatus'?: 'CREATED' | 'FAILED' | 'CREDENTIAL_UPDATED';

/**
 * Unique identifier of the device.
 */
'deviceId'?: string;
}>;

  /**
   * An array with details of the failed device credentials.
   */
  failedCreationList?: Array<{

/**
 * The device credentials creation status.
 */
'bulkNewDeviceStatus'?: 'CREATED' | 'FAILED' | 'CREDENTIAL_UPDATED';

/**
 * Unique identifier of the device.
 */
'deviceId'?: string;

/**
 * Reason for the failure.
 */
'failureReason'?: string;

/**
 * Line where the failure occurred.
 */
'line'?: string;
}>;

  /**
   * Number of lines processed from the CSV file, without the first line (column headers).
   */
  numberOfAll?: number;

  /**
   * Number of created device credentials.
   */
  numberOfCreated?: number;

  /**
   * Number of failed creations of device credentials.
   */
  numberOfFailed?: number;

  /**
   * Number of successful creations of device credentials. This counts both create and update operations.
   */
  numberOfSuccessful?: number;
}
