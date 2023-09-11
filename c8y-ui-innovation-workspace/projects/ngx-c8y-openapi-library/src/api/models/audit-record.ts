/* tslint:disable */
/* eslint-disable */
import { DescObjectId } from '../models/desc-object-id';
import { DescSelf } from '../models/desc-self';
export interface AuditRecord {

  /**
   * Summary of the action that was carried out.
   */
  activity: string;

  /**
   * Name of the application that performed the action.
   */
  application?: string;

  /**
   * Metadata of the audit record.
   */
  c8y_Metadata?: {

/**
 * The action that was carried out.
 */
'action'?: 'SUBSCRIBE' | 'DEPLOY' | 'SCALE' | 'DELETE';
};

  /**
   * Collection of objects describing the changes that were carried out.
   */
  changes?: Array<{

/**
 * The attribute that was changed.
 */
'attribute'?: string;

/**
 * The type of change that was carried out.
 */
'changeType'?: 'ADDED' | 'REPLACED';

/**
 * The new value of the object.
 */
'newValue'?: (string | {

/**
 * Number of CPUs or CPU time limit.
 */
'cpu'?: string;

/**
 * Memory usage limit.
 */
'memory'?: string;
}) | null;

/**
 * The previous value of the object.
 */
'previousValue'?: (string | {

/**
 * Number of CPUs or CPU time limit.
 */
'cpu'?: string;

/**
 * Memory usage limit.
 */
'memory'?: string;
}) | null;

/**
 * The type of the object.
 */
'type'?: string | null;
}>;

  /**
   * The date and time when the audit record was created.
   */
  creationTime?: string;

  /**
   * Unique identifier of the audit record.
   */
  id?: string;
  self?: DescSelf;

  /**
   * The severity of the audit action.
   */
  severity?: 'CRITICAL' | 'MAJOR' | 'MINOR' | 'WARNING' | 'INFORMATION';

  /**
   * The managed object to which the audit is associated.
   */
  source: {
'id': DescObjectId;
'self'?: DescSelf;
};

  /**
   * Details of the action that was carried out.
   */
  text: string;

  /**
   * The date and time when the audit is updated.
   */
  time: string;

  /**
   * Identifies the platform component of the audit.
   */
  type: 'Alarm' | 'Application' | 'BulkOperation' | 'CepModule' | 'Connector' | 'Event' | 'Group' | 'Inventory' | 'InventoryRole' | 'Operation' | 'Option' | 'Report' | 'SingleSignOn' | 'SmartRule' | 'SYSTEM' | 'Tenant' | 'TenantAuthConfig' | 'TrustedCertificates' | 'User' | 'UserAuthentication';

  /**
   * The user who carried out the activity.
   */
  user?: string;

  [key: string]: 'Alarm' | 'Application' | 'BulkOperation' | 'CepModule' | 'Connector' | 'Event' | 'Group' | 'Inventory' | 'InventoryRole' | 'Operation' | 'Option' | 'Report' | 'SingleSignOn' | 'SmartRule' | 'SYSTEM' | 'Tenant' | 'TenantAuthConfig' | 'TrustedCertificates' | 'User' | 'UserAuthentication' | 'CRITICAL' | 'MAJOR' | 'MINOR' | 'WARNING' | 'INFORMATION' | Array<{

/**
 * The attribute that was changed.
 */
'attribute'?: string;

/**
 * The type of change that was carried out.
 */
'changeType'?: 'ADDED' | 'REPLACED';

/**
 * The new value of the object.
 */
'newValue'?: (string | {

/**
 * Number of CPUs or CPU time limit.
 */
'cpu'?: string;

/**
 * Memory usage limit.
 */
'memory'?: string;
}) | null;

/**
 * The previous value of the object.
 */
'previousValue'?: (string | {

/**
 * Number of CPUs or CPU time limit.
 */
'cpu'?: string;

/**
 * Memory usage limit.
 */
'memory'?: string;
}) | null;

/**
 * The type of the object.
 */
'type'?: string | null;
}> | DescSelf | any | string | undefined | {

/**
 * The action that was carried out.
 */
'action'?: 'SUBSCRIBE' | 'DEPLOY' | 'SCALE' | 'DELETE';
} | {
'id': DescObjectId;
'self'?: DescSelf;
};
}
