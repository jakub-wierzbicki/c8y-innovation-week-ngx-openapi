/* tslint:disable */
/* eslint-disable */
import { DescObjectId } from '../models/desc-object-id';
import { DescObjectName } from '../models/desc-object-name';
import { DescSelf } from '../models/desc-self';
export interface NotificationSubscription {

  /**
   * The context within which the subscription is to be processed.
   * > **&#9432; Info:** If the value is `mo`, then `source` must also be provided in the request body.
   */
  context: 'mo' | 'tenant';

  /**
   * Transforms the data to *only* include specified custom fragments. Each custom fragment is identified by a unique name. If nothing is specified here, the data is forwarded as-is.
   */
  fragmentsToCopy?: Array<string>;

  /**
   * Unique identifier of the subscription.
   */
  id?: string;

  /**
   * Indicates whether the messages for this subscription are persistent or non-persistent, meaning they can be lost if consumer is not connected.
   */
  nonPersistent?: boolean;
  self?: DescSelf;

  /**
   * The managed object to which the subscription is associated.
   */
  source?: {
'id'?: DescObjectId;
'name'?: DescObjectName;
'self'?: DescSelf;
};

  /**
   * The subscription name. Each subscription is identified by a unique name within a specific context.
   */
  subscription: string;

  /**
   * Applicable filters to the subscription.
   */
  subscriptionFilter?: {

/**
 * For the `mo` (Managed object) context, notifications from the `alarms`, `alarmsWithChildren`, `events`, `eventsWithChildren`, `managedobjects` (Inventory), `measurements` and `operations` (Device control) APIs can be subscribed to.  
 * The `alarmsWithChildren` and `eventsWithChildren` APIs subscribe to alarms and events respectively from the managed object identified by the `source.id` field, and all of its descendant managed objects.
 *
 * For the `tenant` context, notifications from the `alarms`, `events` and `managedobjects` (Inventory) APIs can be subscribed to.
 *
 * For all contexts, the `*` (wildcard) value can be used to subscribe to notifications from all of the available APIs in that context.
 *
 * > **&#9432; Info:** The wildcard `*` cannot be used in conjunction with other values.
 *
 * > **&#9432; Info:** When filtering Events in the `tenant` context it is required to also specify the `typeFilter`.
 */
'apis'?: Array<'alarms' | 'alarmsWithChildren' | 'events' | 'eventsWithChildren' | 'managedobjects' | 'measurements' | 'operations' | '*'>;

/**
 * Used to match the `type` property of the data. This must either be a string to match one specific type exactly, or be an `or` OData expression, allowing the filter to match any one of a number of types.
 *
 * > **&#9432; Info:** The use of a `type` attribute is assumed, for example when using only a string literal `'c8y_Temperature'` (or using `c8y_Temperature`, as quotes can be omitted when matching a single type) it is equivalent to a `type eq 'c8y_Temperature'` OData expression.
 *
 * > **&#9432; Info:** Currently only the `or` operator is allowed when using an OData expression. Example usage is `'c8y_Temperature' or 'c8y_Pressure'` which will match all the data with types `c8y_Temperature` or `c8y_Pressure`.
 */
'typeFilter'?: string;
};
}
