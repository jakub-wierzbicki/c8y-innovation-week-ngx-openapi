/* tslint:disable */
/* eslint-disable */
export interface ApplicationManifestProbe {

  /**
   * The probe failure threshold.
   */
  failureThreshold?: number;

  /**
   * The probe's HTTP GET method information.
   */
  httpGet?: {

/**
 * The HTTP path.
 */
'path'?: string;

/**
 * The HTTP port.
 */
'port'?: number;
};

  /**
   * The probe's initial delay in seconds.
   */
  initialDelaySeconds?: number;

  /**
   * The probe period in seconds.
   */
  periodSeconds?: number;

  /**
   * The probe success threshold.
   */
  successThreshold?: number;

  /**
   * The probe timeout in seconds.
   */
  timeoutSeconds?: number;
}
