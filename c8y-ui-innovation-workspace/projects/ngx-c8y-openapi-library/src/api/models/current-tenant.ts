/* tslint:disable */
/* eslint-disable */
import { Application } from '../models/application';
import { CustomProperties } from '../models/custom-properties';
import { DescSelf } from '../models/desc-self';
import { DescTenantId } from '../models/desc-tenant-id';
export interface CurrentTenant {

  /**
   * Indicates if this tenant can create subtenants.
   */
  allowCreateTenants?: boolean;

  /**
   * Collection of the subscribed applications.
   */
  applications?: {

/**
 * An array containing all subscribed applications.
 */
'references'?: Array<Application>;
};
  customProperties?: CustomProperties;

  /**
   * URL of the tenant's domain. The domain name permits only the use of alphanumeric characters separated by dots `.`, hyphens `-` and underscores `_`.
   */
  domainName?: string;
  name?: DescTenantId;

  /**
   * ID of the parent tenant.
   */
  parent?: string;
  self?: DescSelf;
}
