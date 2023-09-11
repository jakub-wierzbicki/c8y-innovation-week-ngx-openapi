/* tslint:disable */
/* eslint-disable */
import { DescSelf } from '../models/desc-self';
import { ManagedObject } from '../models/managed-object';
export interface InventoryApiResource {

  /**
   * Collection of all managed objects
   */
  managedObjects?: {

/**
 * An array containing the referenced managed objects.
 */
'references'?: Array<ManagedObject>;
'self'?: DescSelf;
};

  /**
   * Read-only collection of all managed objects with a particular fragment type or capability (placeholder {fragmentType}).
   */
  managedObjectsForFragmentType?: string;

  /**
   * Read-only collection of managed objects fetched for a given list of ids, for example, “ids=41,43,68”.
   */
  managedObjectsForListOfIds?: string;

  /**
   * Read-only collection of all managed objects of a particular type (placeholder {type}).
   */
  managedObjectsForType?: string;
  self?: DescSelf;
}
