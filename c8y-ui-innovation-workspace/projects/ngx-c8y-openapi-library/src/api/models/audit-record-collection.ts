/* tslint:disable */
/* eslint-disable */
import { AuditRecord } from '../models/audit-record';
import { DescNextPage } from '../models/desc-next-page';
import { DescPrevPage } from '../models/desc-prev-page';
import { DescSelf } from '../models/desc-self';
import { PageStatistics } from '../models/page-statistics';
export interface AuditRecordCollection {

  /**
   * An array containing the results of the request.
   */
  auditRecords?: Array<AuditRecord>;
  next?: DescNextPage;
  prev?: DescPrevPage;
  self?: DescSelf;
  statistics?: PageStatistics;
}
