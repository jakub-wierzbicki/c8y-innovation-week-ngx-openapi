/* tslint:disable */
/* eslint-disable */
import { DescSelf } from '../models/desc-self';
import { NotificationSubscription } from '../models/notification-subscription';
export interface NotificationApiResource {

  /**
   * Collection of all notification subscriptions.
   */
  notificationSubscriptions?: {
'self'?: DescSelf;
'subscriptions'?: Array<NotificationSubscription> | null;
};

  /**
   * Read-only collection of all notification subscriptions of a particular context.
   */
  notificationSubscriptionsByContext?: string;

  /**
   * Read-only collection of all notification subscriptions for a specific source object. The placeholder {source} must be a unique ID of an object in the inventory.
   */
  notificationSubscriptionsBySource?: string;

  /**
   * Read-only collection of all notification subscriptions of a particular context and a specific source object.
   */
  notificationSubscriptionsBySourceAndContext?: string;
  self?: DescSelf;
}
