/* tslint:disable */
/* eslint-disable */
import { DescObjectName } from '../models/desc-object-name';
import { DescSelf } from '../models/desc-self';
import { ObjectAdditionParents } from '../models/object-addition-parents';
import { ObjectAssetParents } from '../models/object-asset-parents';
import { ObjectChildAdditions } from '../models/object-child-additions';
import { ObjectChildAssets } from '../models/object-child-assets';
import { ObjectChildDevices } from '../models/object-child-devices';
import { ObjectDeviceParents } from '../models/object-device-parents';
export interface ManagedObject {
  additionParents?: ObjectAdditionParents;
  assetParents?: ObjectAssetParents;

  /**
   * This fragment must be added in order to publish sample commands for a subset of devices sharing the same device type. If the fragment is present, the list of sample commands for a device type will be extended with the sample commands for the `c8y_DeviceTypes`. New sample commands created from the user interface will be created in the context of the `c8y_DeviceTypes`.
   */
  c8y_DeviceTypes?: Array<string>;

  /**
   * A fragment which identifies this managed object as a device.
   */
  c8y_IsDevice?: {
};

  /**
   * A fragment which identifies this managed object as a device group.
   */
  c8y_IsDeviceGroup?: {
};

  /**
   * Lists the operations that are available for a particular device, so that applications can trigger the operations.
   */
  c8y_SupportedOperations?: Array<string>;
  childAdditions?: ObjectChildAdditions;
  childAssets?: ObjectChildAssets;
  childDevices?: ObjectChildDevices;

  /**
   * The date and time when the object was created.
   */
  creationTime?: string;
  deviceParents?: ObjectDeviceParents;

  /**
   * Unique identifier of the object.
   */
  id?: string;

  /**
   * The date and time when the object was updated for the last time.
   */
  lastUpdated?: string;
  name?: DescObjectName;

  /**
   * Username of the device's owner.
   */
  owner?: string;
  self?: DescSelf;

  /**
   * The fragment type can be interpreted as _device class_, this means, devices with the same type can receive the same types of configuration, software, firmware and operations. The type value is indexed and is therefore used for queries.
   */
  type?: string;

  [key: string]: Array<string> | DescObjectName | DescSelf | ObjectAdditionParents | ObjectAssetParents | ObjectChildAdditions | ObjectChildAssets | ObjectChildDevices | ObjectDeviceParents | any | string | undefined | {
};
}
