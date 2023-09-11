/* tslint:disable */
/* eslint-disable */
import { DescObjectId } from '../models/desc-object-id';
import { DescSelf } from '../models/desc-self';
export interface ExternalId {

  /**
   * The identifier used in the external system that Cumulocity IoT interfaces with.
   */
  externalId: string;

  /**
   * The managed object linked to the external ID.
   */
  managedObject?: {
'id'?: DescObjectId;
'self'?: DescSelf;
};
  self?: DescSelf;

  /**
   * The type of the external identifier.
   */
  type: string;
}
