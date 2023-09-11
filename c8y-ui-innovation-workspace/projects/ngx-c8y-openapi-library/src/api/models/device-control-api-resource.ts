/* tslint:disable */
/* eslint-disable */
import { DescSelf } from '../models/desc-self';
import { OperationReference } from '../models/operation-reference';
export interface DeviceControlApiResource {

  /**
   * Collection of all operations.
   */
  operations?: {
'self'?: DescSelf;

/**
 * An array containing the registered operations.
 */
'operations'?: Array<OperationReference> | null;
};

  /**
   * Read-only collection of all operations targeting a particular agent.
   */
  operationsByAgentId?: string;

  /**
   * Read-only collection of all operations targeting a particular agent and with a particular status.
   */
  operationsByAgentIdAndStatus?: string;

  /**
   * Read-only collection of all operations to be executed on a particular device.
   */
  operationsByDeviceId?: string;

  /**
   * Read-only collection of all operations with a particular status, that should be executed on a particular device.
   */
  operationsByDeviceIdAndStatus?: string;

  /**
   * Read-only collection of all operations with a particular status.
   */
  operationsByStatus?: string;
  self?: DescSelf;
}
