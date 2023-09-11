/* tslint:disable */
/* eslint-disable */
import { DescSelf } from '../models/desc-self';
export interface BulkOperation {

  /**
   * Delay between every operation creation in seconds.
   */
  creationRamp?: number;

  /**
   * Identifies the failed bulk operation from which the failed operations should be rescheduled.
   * >**&#9432; Info:** `groupId` and `failedParentId` are mutually exclusive. Use only one of them in your request.
   */
  failedParentId?: string;

  /**
   * The general status of this bulk operation. The general status is visible for end users and they can filter and evaluate bulk operations by this status.
   */
  generalStatus?: 'SCHEDULED' | 'EXECUTING' | 'EXECUTING_WITH_ERRORS' | 'SUCCESSFUL' | 'FAILED' | 'CANCELED';

  /**
   * Identifies the target group on which this operation should be performed.
   * >**&#9432; Info:** `groupId` and `failedParentId` are mutually exclusive. Use only one of them in your request.
   */
  groupId?: string;

  /**
   * Unique identifier of this bulk operation.
   */
  id?: string;

  /**
   * Operation to be executed for every device in a group.
   */
  operationPrototype?: {
};

  /**
   * Contains information about the number of processed operations.
   */
  progress?: {

/**
 * Number of pending operations.
 */
'pending'?: number;

/**
 * Number of failed operations.
 */
'failed'?: number;

/**
 * Number of operations being executed.
 */
'executing'?: number;

/**
 * Number of operations successfully processed.
 */
'successful'?: number;

/**
 * Total number of processed operations.
 */
'all'?: number;
};
  self?: DescSelf;

  /**
   * Date and time when the operations of this bulk operation should be created.
   */
  startDate?: string;

  /**
   * The status of this bulk operation, in context of the execution of all its single operations.
   */
  status?: 'ACTIVE' | 'IN_PROGRESS' | 'COMPLETED' | 'DELETED';
}
