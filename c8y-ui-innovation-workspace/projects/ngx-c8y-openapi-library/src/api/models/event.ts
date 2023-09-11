/* tslint:disable */
/* eslint-disable */
import { DescObjectId } from '../models/desc-object-id';
import { DescSelf } from '../models/desc-self';
export interface Event {

  /**
   * The date and time when the event was created.
   */
  creationTime?: string;

  /**
   * Unique identifier of the event.
   */
  id?: string;

  /**
   * The date and time when the event was last updated.
   */
  lastUpdated?: string;
  self?: DescSelf;

  /**
   * The managed object to which the event is associated.
   */
  source?: {
'id'?: DescObjectId;
'self'?: DescSelf;
};

  /**
   * Description of the event.
   */
  text?: string;

  /**
   * The date and time when the event is updated.
   */
  time?: string;

  /**
   * Identifies the type of this event.
   */
  type?: string;

  [key: string]: DescSelf | any | string | undefined | {
'id'?: DescObjectId;
'self'?: DescSelf;
};
}
