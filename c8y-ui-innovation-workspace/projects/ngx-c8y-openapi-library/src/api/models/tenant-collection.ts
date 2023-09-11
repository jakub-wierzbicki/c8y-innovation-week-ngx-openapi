/* tslint:disable */
/* eslint-disable */
import { DescNextPage } from '../models/desc-next-page';
import { DescPrevPage } from '../models/desc-prev-page';
import { DescSelf } from '../models/desc-self';
import { PageStatistics } from '../models/page-statistics';
import { Tenant } from '../models/tenant';
export interface TenantCollection {
  next?: DescNextPage;
  prev?: DescPrevPage;
  self?: DescSelf;
  statistics?: PageStatistics;

  /**
   * An array containing the results (subtenants) of the request.
   */
  tenants?: Array<Tenant>;
}
