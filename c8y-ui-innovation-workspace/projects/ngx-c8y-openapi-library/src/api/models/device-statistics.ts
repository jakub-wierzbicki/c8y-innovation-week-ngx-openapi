/* tslint:disable */
/* eslint-disable */

/**
 * Statistics of a specific device (identified by an ID).
 */
export interface DeviceStatistics {

  /**
   * Sum of measurements, events and alarms created and updated for the specified device.
   */
  count?: number;

  /**
   * Unique identifier of the device.
   */
  deviceId?: string;

  /**
   * List of unique identifiers of parents for the corresponding device. Available only with monthly data.
   */
  deviceParents?: null | Array<string>;

  /**
   * Value of the `type` field from the corresponding device. Available only with monthly data.
   */
  deviceType?: string;
}
