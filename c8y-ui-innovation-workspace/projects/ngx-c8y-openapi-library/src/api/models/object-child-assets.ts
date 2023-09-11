/* tslint:disable */
/* eslint-disable */
import { ManagedObjectReferenceTuple } from '../models/managed-object-reference-tuple';

/**
 * A collection of references to child assets.
 */
export interface ObjectChildAssets {

  /**
   * The total number of child assets. Only present if the value is greater than 0.
   */
  count?: number;

  /**
   * An array with the references to child assets.
   */
  references?: Array<ManagedObjectReferenceTuple>;

  /**
   * Link to this resource's child assets.
   */
  self?: string;
}
