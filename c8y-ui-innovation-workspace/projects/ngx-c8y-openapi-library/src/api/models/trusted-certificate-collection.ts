/* tslint:disable */
/* eslint-disable */
import { DescNextPage } from '../models/desc-next-page';
import { DescPrevPage } from '../models/desc-prev-page';
import { DescSelf } from '../models/desc-self';
import { PageStatistics } from '../models/page-statistics';
import { TrustedCertificate } from '../models/trusted-certificate';

/**
 * A collection of trusted certificates.
 */
export interface TrustedCertificateCollection {

  /**
   * An array containing trusted certificates.
   */
  certificates?: Array<TrustedCertificate>;
  next?: DescNextPage;
  prev?: DescPrevPage;
  self?: DescSelf;
  statistics?: PageStatistics;
}
