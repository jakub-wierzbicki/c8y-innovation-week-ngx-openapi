/* tslint:disable */
/* eslint-disable */

/**
 * A permission object of an inventory role.
 */
export interface InventoryRolePermission {

  /**
   * A unique identifier for this permission.
   */
  id?: number;

  /**
   * The permission level.
   */
  permission?: 'ADMIN' | 'READ' | '*';

  /**
   * The scope of this permission.
   */
  scope?: 'ALARM' | 'AUDIT' | 'EVENT' | 'MANAGED_OBJECT' | 'MEASUREMENT' | 'OPERATION' | '*';

  /**
   * The type of this permission. It can be the name of a fragment, for example, `c8y_Restart`.
   */
  type?: string;
}
