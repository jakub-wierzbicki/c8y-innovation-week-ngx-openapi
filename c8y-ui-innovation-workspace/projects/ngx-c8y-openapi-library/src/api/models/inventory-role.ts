/* tslint:disable */
/* eslint-disable */
import { InventoryRolePermission } from '../models/inventory-role-permission';

/**
 * An inventory role.
 */
export interface InventoryRole {

  /**
   * A description for this inventory role.
   */
  description?: string;

  /**
   * A unique identifier for this inventory role.
   */
  id?: number;

  /**
   * The name of this inventory role.
   */
  name?: string;

  /**
   * A set of permissions for this inventory role.
   */
  permissions?: Array<InventoryRolePermission>;

  /**
   * A URL linking to this resource.
   */
  self?: string;
}
