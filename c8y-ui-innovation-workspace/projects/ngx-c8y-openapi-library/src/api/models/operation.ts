/* tslint:disable */
/* eslint-disable */
import { DescSelf } from '../models/desc-self';
import { ExternalIds } from '../models/external-ids';
export interface Operation {

  /**
   * Reference to a bulk operation ID if this operation was scheduled from a bulk operation.
   */
  bulkOperationId?: string;

  /**
   * Date and time when the operation was created in the database.
   */
  creationTime?: string;
  deviceExternalIDs?: ExternalIds;

  /**
   * Identifier of the target device where the operation should be performed.
   */
  deviceId?: string;

  /**
   * Reason for the failure.
   */
  failureReason?: string;

  /**
   * Unique identifier of this operation.
   */
  id?: string;
  self?: DescSelf;

  /**
   * The status of the operation.
   */
  status?: 'SUCCESSFUL' | 'FAILED' | 'EXECUTING' | 'PENDING';

  [key: string]: 'SUCCESSFUL' | 'FAILED' | 'EXECUTING' | 'PENDING' | DescSelf | ExternalIds | any | string | undefined;
}
