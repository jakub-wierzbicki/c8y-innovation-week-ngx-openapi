/* tslint:disable */
/* eslint-disable */
import { Application } from '../models/application';
import { CustomProperties } from '../models/custom-properties';
import { DescSelf } from '../models/desc-self';
import { DescTenantId } from '../models/desc-tenant-id';
export interface Tenant {

  /**
   * Email address of the tenant's administrator.
   */
  adminEmail?: string;

  /**
   * Username of the tenant's administrator.
   * > **&#9432; Info:** When it is provided in the request body, also `adminEmail` and `adminPass` must be provided.
   */
  adminName?: string;

  /**
   * Password of the tenant's administrator.
   */
  adminPass?: string;

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
'self'?: DescSelf;
};

  /**
   * Tenant's company name.
   */
  company?: string;

  /**
   * Name of the contact person.
   */
  contactName?: string;

  /**
   * Phone number of the contact person, provided in the international format, for example, +48 123 456 7890.
   */
  contactPhone?: string;

  /**
   * The date and time when the tenant was created.
   */
  creationTime?: string;
  customProperties?: CustomProperties;

  /**
   * URL of the tenant's domain. The domain name permits only the use of alphanumeric characters separated by dots `.` and hyphens `-`.
   */
  domain?: string;
  id?: DescTenantId;

  /**
   * Collection of the owned applications.
   */
  ownedApplications?: {

/**
 * An array containing all owned applications (only applications with availability MARKET).
 */
'references'?: Array<Application>;
'self'?: DescSelf;
};

  /**
   * ID of the parent tenant.
   */
  parent?: string;
  self?: DescSelf;

  /**
   * Current status of the tenant.
   */
  status?: 'ACTIVE' | 'SUSPENDED';
}
