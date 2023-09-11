/* tslint:disable */
/* eslint-disable */
import { ApplicationManifestProbe } from '../models/application-manifest-probe';
import { ApplicationRequiredRoles } from '../models/application-required-roles';
import { ApplicationRoles } from '../models/application-roles';
import { ApplicationSettings } from '../models/application-settings';

/**
 * The manifest of the microservice application.
 */
export interface MicroserviceApplicationManifest {

  /**
   * Document type format discriminator, for future changes in format.
   */
  apiVersion?: string;

  /**
   * The billing mode of the application.
   *
   * In case of RESOURCES, the number of resources used is exposed for billing calculation per usage.
   * In case of SUBSCRIPTION, all resources usage is counted for the microservice owner and the subtenant is charged for subscription.
   */
  billingMode?: 'RESOURCES' | 'SUBSCRIPTION';

  /**
   * The context path in the URL makes the application accessible.
   */
  contextPath?: string;

  /**
   * A list of URL extensions for this microservice application.
   */
  extensions?: Array<{

/**
 * The relative path in Cumulocity IoT for this microservice application.
 */
'path'?: string;

/**
 * The type of this extension.
 */
'type'?: string;
}>;

  /**
   * Deployment isolation.
   * In case of PER_TENANT, there is a separate instance for each tenant.
   * Otherwise, there is one single instance for all subscribed tenants.
   * This will affect billing.
   */
  isolation?: 'MULTI_TENANT' | 'PER_TENANT';
  livenessProbe?: any & ApplicationManifestProbe;

  /**
   * Application provider information.
   * Simple name allowed for predefined providers, for example, c8y.
   * Detailed object for external provider.
   */
  provider?: {

/**
 * The name of the application provider.
 */
'name'?: string;
};
  readinessProbe?: any & ApplicationManifestProbe;

  /**
   * The minimum required resources for the microservice application.
   */
  requestResources?: {

/**
 * The required CPU resource for this microservice application.
 */
'cpu'?: string;

/**
 * The required memory resource for this microservice application.
 */
'memory'?: string;
};
  requiredRoles?: ApplicationRequiredRoles;

  /**
   * The recommended resources for this microservice application.
   */
  resources?: {

/**
 * The required CPU resource for this microservice application.
 */
'cpu'?: string;

/**
 * The required memory resource for this microservice application.
 */
'memory'?: string;
};
  roles?: ApplicationRoles;

  /**
   * Allows to configure a microservice auto scaling policy.
   * If the microservice uses a lot of CPU resources, a second instance will be created automatically when this is set to `AUTO`.
   * The default is `NONE`, meaning auto scaling will not happen.
   */
  scale?: 'NONE' | 'AUTO';
  settings?: ApplicationSettings;

  /**
   * Allows to specify a custom category for microservice settings.
   * By default, `contextPath` is used.
   */
  settingsCategory?: string;

  /**
   * Application version.
   * Must be a correct [SemVer](https://semver.org/) value but the "+" sign is disallowed.
   */
  version?: string;
}
