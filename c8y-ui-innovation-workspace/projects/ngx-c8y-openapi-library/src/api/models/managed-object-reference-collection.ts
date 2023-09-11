/* tslint:disable */
/* eslint-disable */
import { DescNextPage } from '../models/desc-next-page';
import { DescPrevPage } from '../models/desc-prev-page';
import { DescSelf } from '../models/desc-self';
import { ManagedObject } from '../models/managed-object';
import { PageStatistics } from '../models/page-statistics';
export interface ManagedObjectReferenceCollection {
  next?: DescNextPage & any;
  prev?: DescPrevPage & any;

  /**
   * An array containing the details of all children (if any).
   */
  references?: Array<{
'managedObject'?: ManagedObject;
}>;
  self?: DescSelf & any;
  statistics?: PageStatistics;
}
