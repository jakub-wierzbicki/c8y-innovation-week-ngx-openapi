/* tslint:disable */
/* eslint-disable */
import { DescSelf } from '../models/desc-self';
export interface EventBinary {

  /**
   * Name of the attachment. If it is not provided in the request, it will be set as the event ID.
   */
  name?: string;
  self?: DescSelf;

  /**
   * Unique identifier of the event.
   */
  source?: string;

  /**
   * Media type of the attachment.
   */
  type?: string;
}
