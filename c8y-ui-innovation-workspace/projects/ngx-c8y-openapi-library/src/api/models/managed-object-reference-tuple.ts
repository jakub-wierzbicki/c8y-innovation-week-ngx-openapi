/* tslint:disable */
/* eslint-disable */
import { DescObjectId } from '../models/desc-object-id';
import { DescObjectName } from '../models/desc-object-name';
import { DescSelf } from '../models/desc-self';
export interface ManagedObjectReferenceTuple {

  /**
   * Details of the referenced managed object.
   */
  managedObject?: {
'id'?: DescObjectId;
'name'?: DescObjectName;
'self'?: DescSelf;
};
  self?: DescSelf;
}
