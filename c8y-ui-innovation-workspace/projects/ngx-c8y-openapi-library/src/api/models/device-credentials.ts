/* tslint:disable */
/* eslint-disable */
import { DescSelf } from '../models/desc-self';
export interface DeviceCredentials {

  /**
   * The external ID of the device.
   */
  id?: string;

  /**
   * Password of these device credentials.
   */
  password?: string;
  self?: DescSelf;

  /**
   * Tenant ID for these device credentials.
   */
  tenantId?: string;

  /**
   * Username of these device credentials.
   */
  username?: string;
}
