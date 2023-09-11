/* tslint:disable */
/* eslint-disable */
import { ManagedObjectReferenceTuple } from '../models/managed-object-reference-tuple';

/**
 * A collection of references to asset parent objects.
 */
export interface ObjectAssetParents {

  /**
   * An array with the references to asset parent objects.
   */
  references?: Array<ManagedObjectReferenceTuple>;

  /**
   * Link to this resource's asset parent objects.
   */
  self?: string;
}
