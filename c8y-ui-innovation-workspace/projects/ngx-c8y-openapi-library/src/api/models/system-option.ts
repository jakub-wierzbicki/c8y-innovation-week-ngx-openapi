/* tslint:disable */
/* eslint-disable */

/**
 * A tuple storing tenant configuration.
 */
export interface SystemOption {

  /**
   * Name of the system option category.
   */
  category?: string;

  /**
   * A unique identifier for this system option.
   */
  key?: string;

  /**
   * Value of this system option.
   */
  value?: string;
}
