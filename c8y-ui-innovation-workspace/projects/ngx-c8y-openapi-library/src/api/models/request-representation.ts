/* tslint:disable */
/* eslint-disable */
export interface RequestRepresentation {

  /**
   * Body of the request.
   */
  body?: string;

  /**
   * Headers of the request.
   */
  headers?: {
[key: string]: string;
};

  /**
   * HTTP request method.
   */
  method?: 'GET' | 'POST';

  /**
   * Requested operation.
   */
  operation?: 'EXECUTE' | 'REDIRECT';

  /**
   * Parameters of the request.
   */
  requestParams?: {
[key: string]: string;
};

  /**
   * Target of the request described as a URL.
   */
  url?: string;
}
