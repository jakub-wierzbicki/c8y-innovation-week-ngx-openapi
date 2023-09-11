/* tslint:disable */
/* eslint-disable */
import { DescSelf } from '../models/desc-self';
import { Event } from '../models/event';
export interface EventsApiResource {

  /**
   * Collection of all events
   */
  events?: {
'self'?: DescSelf;
'events'?: Array<Event> | null;
};

  /**
   * Read-only collection of all events containing a particular fragment type.
   */
  eventsForFragmentType?: string;

  /**
   * Read-only collection of all events for a specific source object. The placeholder {source} must be a unique ID of an object in the inventory.
   */
  eventsForSource?: string;

  /**
   * Read-only collection of all events for a specific source object in a particular time range.
   */
  eventsForSourceAndTime?: string;

  /**
   * Read-only collection of all events of a particular type and a specific source object.
   */
  eventsForSourceAndType?: string;

  /**
   * Read-only collection of all events for a particular time range.
   */
  eventsForTime?: string;

  /**
   * Read-only collection of all events of a particular type.
   */
  eventsForType?: string;
  self?: DescSelf;
}
