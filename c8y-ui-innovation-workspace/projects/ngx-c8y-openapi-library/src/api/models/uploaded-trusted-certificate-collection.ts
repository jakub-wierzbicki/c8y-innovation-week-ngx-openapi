/* tslint:disable */
/* eslint-disable */
import { DescNextPage } from '../models/desc-next-page';
import { DescPrevPage } from '../models/desc-prev-page';
import { DescSelf } from '../models/desc-self';
import { PageStatistics } from '../models/page-statistics';
import { UploadedTrustedCertificate } from '../models/uploaded-trusted-certificate';

/**
 * A collection of uploaded trusted certificates.
 */
export interface UploadedTrustedCertificateCollection {
  certificates?: Array<UploadedTrustedCertificate>;
  next?: DescNextPage;
  prev?: DescPrevPage;
  self?: DescSelf;
  statistics?: PageStatistics;
}
