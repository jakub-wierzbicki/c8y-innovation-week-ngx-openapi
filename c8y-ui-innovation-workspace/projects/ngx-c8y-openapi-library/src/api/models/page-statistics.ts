/* tslint:disable */
/* eslint-disable */

/**
 * Information about paging statistics.
 */
export interface PageStatistics {

  /**
   * The current page of the paginated results.
   */
  currentPage?: number;

  /**
   * Indicates the number of objects that the collection may contain per page. The upper limit for one page is 2,000 objects.
   */
  pageSize?: number;

  /**
   * The total number of results (elements).
   */
  totalElements?: number;

  /**
   * The total number of paginated results (pages).
   *
   * > **&#9432; Info:** This property is returned by default except when an operation retrieves all records where values are between an upper and lower boundary, for example, querying ranges using `dateFrom`–`dateTo`. In such cases, the query parameter `withTotalPages=true` should be used to include the total number of pages (at the expense of slightly slower performance).
   */
  totalPages?: number;
}
