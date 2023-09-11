/* tslint:disable */
/* eslint-disable */
import { DescSelf } from '../models/desc-self';

/**
 * A tuple storing tenant configuration.
 */
export interface Option {

  /**
   * Name of the option category.
   */
  category?: string;

  /**
   * A unique identifier for this option.
   */
  key?: string;
  self?: DescSelf;

  /**
   * Value of this option.
   */
  value?: string;
}
