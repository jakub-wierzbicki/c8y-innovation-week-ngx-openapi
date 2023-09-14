/* tslint:disable */
/* eslint-disable */
import { DescUserDevicepermissions } from '../models/desc-user-devicepermissions';

/**
 * A list of device permissions.
 */
export interface UpdatedDevicePermissions {
  groups?: Array<{
'id'?: string;
'devicePermissions'?: DescUserDevicepermissions;
}>;
  users?: Array<{
'userName'?: string;
'devicePermissions'?: DescUserDevicepermissions;
}>;
}
