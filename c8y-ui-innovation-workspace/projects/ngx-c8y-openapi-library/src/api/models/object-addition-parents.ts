/* tslint:disable */
/* eslint-disable */
import { ManagedObjectReferenceTuple } from '../models/managed-object-reference-tuple';

/**
 * A collection of references to addition parent objects.
 */
export interface ObjectAdditionParents {

  /**
   * An array with the references to addition parent objects.
   */
  references?: Array<ManagedObjectReferenceTuple>;

  /**
   * Link to this resource's addition parent objects.
   */
  self?: string;
}
