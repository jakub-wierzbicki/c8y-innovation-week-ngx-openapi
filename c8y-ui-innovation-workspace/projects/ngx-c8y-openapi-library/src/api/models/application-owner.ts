/* tslint:disable */
/* eslint-disable */
import { DescSelf } from '../models/desc-self';

/**
 * Reference to the tenant owning this application. The default value is a reference to the current tenant.
 */
export interface ApplicationOwner {
  self?: DescSelf;
  tenant?: {

/**
 * The tenant ID.
 */
'id'?: string;
};
}
