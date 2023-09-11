/* tslint:disable */
/* eslint-disable */
import { DescSelf } from '../models/desc-self';
export interface IdentityApiResource {

  /**
   * Single external ID, represented by the type and the value of the external ID.
   */
  externalId?: string;

  /**
   * Represents a collection of external IDs for a specified global ID.
   */
  externalIdsOfGlobalId?: string;
  self?: DescSelf;
}
