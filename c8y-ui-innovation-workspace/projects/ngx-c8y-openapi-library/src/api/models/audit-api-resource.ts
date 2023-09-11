/* tslint:disable */
/* eslint-disable */
import { AuditRecord } from '../models/audit-record';
import { DescSelf } from '../models/desc-self';
export interface AuditApiResource {

  /**
   * Collection of audit records
   */
  auditRecords?: {
'self'?: DescSelf;
'auditRecords'?: Array<AuditRecord> | null;
};

  /**
   * Read-only collection of audit records for a specific application. The placeholder {application} must be the name of a registered application.
   */
  auditRecordsForApplication?: string;

  /**
   * Read-only collection of audit records for a specific type.
   */
  auditRecordsForType?: string;

  /**
   * Read-only collection of audit records for specific type and application.
   */
  auditRecordsForTypeAndApplication?: string;

  /**
   * Read-only collection of audit records for specific type, user and application.
   */
  auditRecordsForTypeAndUserAndApplication?: string;

  /**
   * Read-only collection of audit records for a specific user. The placeholder {user} must be a username of a registered user.
   */
  auditRecordsForUser?: string;

  /**
   * Read-only collection of audit records for specific user and application.
   */
  auditRecordsForUserAndApplication?: string;

  /**
   * Read-only collection of audit records for specific user and type.
   */
  auditRecordsForUserAndType?: string;
  self?: DescSelf;
}
