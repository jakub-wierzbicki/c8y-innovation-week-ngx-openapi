/* tslint:disable */
/* eslint-disable */
import { ManagedObjectReferenceTuple } from '../models/managed-object-reference-tuple';

/**
 * A collection of references to child devices.
 */
export interface ObjectChildDevices {

  /**
   * The total number of child devices. Only present if the value is greater than 0.
   */
  count?: number;

  /**
   * An array with the references to child devices.
   */
  references?: Array<ManagedObjectReferenceTuple>;

  /**
   * Link to this resource's child devices.
   */
  self?: string;
}
