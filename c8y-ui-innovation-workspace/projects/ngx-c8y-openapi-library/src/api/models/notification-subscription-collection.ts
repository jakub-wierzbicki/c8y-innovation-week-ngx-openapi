/* tslint:disable */
/* eslint-disable */
import { DescNextPage } from '../models/desc-next-page';
import { DescPrevPage } from '../models/desc-prev-page';
import { DescSelf } from '../models/desc-self';
import { NotificationSubscription } from '../models/notification-subscription';
import { PageStatistics } from '../models/page-statistics';
export interface NotificationSubscriptionCollection {
  next?: DescNextPage;
  prev?: DescPrevPage;
  self?: DescSelf;
  statistics?: PageStatistics;

  /**
   * An array containing the subscriptions of the request.
   */
  subscriptions?: Array<NotificationSubscription>;
}
