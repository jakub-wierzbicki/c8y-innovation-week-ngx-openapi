/* tslint:disable */
/* eslint-disable */
import { DescSelf } from '../models/desc-self';
import { InventoryAssignment } from '../models/inventory-assignment';
export interface InventoryAssignmentCollection {

  /**
   * An array of inventory assignments.
   */
  inventoryAssignments?: Array<InventoryAssignment>;
  self?: DescSelf & any;
}
