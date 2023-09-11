/* tslint:disable */
/* eslint-disable */
export interface ApplicationVersion {

  /**
   * Unique identifier of the binary file assigned to the version.
   */
  binaryId?: string;

  /**
   * Tag assigned to the version. Version tags must be unique across all versions and version fields of application versions.
   */
  tag?: Array<string>;

  /**
   * Unique identifier of the version.
   */
  version?: string;
}
