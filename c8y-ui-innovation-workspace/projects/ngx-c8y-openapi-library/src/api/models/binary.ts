/* tslint:disable */
/* eslint-disable */
import { DescObjectId } from '../models/desc-object-id';
import { DescSelf } from '../models/desc-self';
export interface Binary {

  /**
   * Fragment to identify this managed object as a file.
   */
  c8y_IsBinary?: {
};

  /**
   * Media type of the file.
   */
  contentType?: string;
  id?: DescObjectId;

  /**
   * Date and time of the file's last update.
   */
  lastUpdated?: string;

  /**
   * Size of the file in bytes.
   */
  length?: number;

  /**
   * Name of the managed object. It is set from the `object` contained in the payload.
   */
  name?: string;

  /**
   * Username of the owner of the file.
   */
  owner?: string;
  self?: DescSelf;

  /**
   * Type of the managed object. It is set from the `object` contained in the payload.
   */
  type?: string;
}
