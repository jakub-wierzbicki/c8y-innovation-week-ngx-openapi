/* tslint:disable */
/* eslint-disable */
import { DescObjectId } from '../models/desc-object-id';
export interface ChildOperationsAddMultiple {

  /**
   * An array containing the IDs of the managed objects (children).
   */
  references: Array<{
'managedObject'?: {
'id': DescObjectId;
};
}>;
}
