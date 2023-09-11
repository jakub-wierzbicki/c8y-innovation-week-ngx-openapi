/* tslint:disable */
/* eslint-disable */
import { DescSelf } from '../models/desc-self';
import { Option } from '../models/option';
import { Tenant } from '../models/tenant';
export interface TenantApiResource {

  /**
   * Collection of tenant options
   */
  options?: {
'self'?: DescSelf;
'options'?: Array<Option> | null;
};
  self?: DescSelf;

  /**
   * Represents an individual application reference that can be viewed.
   */
  tenantApplicationForId?: string;

  /**
   * Retrieves subscribed applications.
   */
  tenantApplications?: string;

  /**
   * Represents an individual tenant that can be viewed.
   */
  tenantForId?: string;

  /**
   * Retrieves a key of the category of tenant options.
   */
  tenantOptionForCategoryAndKey?: string;

  /**
   * Represents a category of tenant options.
   */
  tenantOptionsForCategory?: string;

  /**
   * Retrieves the tenant system options.
   */
  tenantSystemOptions?: string;

  /**
   * Retrieves the tenant system options based on category and key.
   */
  tenantSystemOptionsForCategoryAndKey?: string;

  /**
   * Collection of subtenants
   */
  tenants?: {
'self'?: DescSelf;
'tenants'?: Array<Tenant> | null;
};
}
