/* tslint:disable */
/* eslint-disable */
import { DescSelf } from '../models/desc-self';
export interface NewDeviceRequest {

  /**
   * External ID of the device.
   */
  id?: string;
  self?: DescSelf;

  /**
   * Status of this new device request.
   */
  status?: 'WAITING_FOR_CONNECTION' | 'PENDING_ACCEPTANCE' | 'ACCEPTED';
}
