/* tslint:disable */
/* eslint-disable */
import { DescSelf } from '../models/desc-self';
import { ExternalId } from '../models/external-id';
export interface ExternalIds {

  /**
   * An array containing the details of all external IDs (if any).
   */
  externalIds?: Array<ExternalId>;
  self?: DescSelf;
}
