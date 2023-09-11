/* tslint:disable */
/* eslint-disable */
import { InventoryRole } from '../models/inventory-role';

/**
 * An inventory assignment.
 */
export interface InventoryAssignment {

  /**
   * A unique identifier for this inventory assignment.
   */
  id?: number;

  /**
   * A unique identifier for the managed object for which the roles are assigned.
   */
  managedObject?: string;

  /**
   * An array of roles that are assigned to the managed object for the user.
   */
  roles?: Array<InventoryRole>;

  /**
   * A URL linking to this resource.
   */
  self?: string;
}
