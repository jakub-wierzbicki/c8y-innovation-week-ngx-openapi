/* tslint:disable */
/* eslint-disable */
import { ManagedObjectReferenceTuple } from '../models/managed-object-reference-tuple';

/**
 * A collection of references to device parent objects.
 */
export interface ObjectDeviceParents {

  /**
   * An array with the references to parent objects.
   */
  references?: Array<ManagedObjectReferenceTuple>;

  /**
   * Link to this resource's parent objects.
   */
  self?: string;
}
