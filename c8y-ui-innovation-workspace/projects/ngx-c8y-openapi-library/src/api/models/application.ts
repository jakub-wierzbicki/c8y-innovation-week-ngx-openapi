/* tslint:disable */
/* eslint-disable */
import { ApplicationOwner } from '../models/application-owner';
import { ApplicationRequiredRoles } from '../models/application-required-roles';
import { ApplicationRoles } from '../models/application-roles';
import { DescSelf } from '../models/desc-self';
import { MicroserviceApplicationManifest } from '../models/microservice-application-manifest';
import { WebApplicationManifest } from '../models/web-application-manifest';
export interface Application {

  /**
   * The active version ID of the application. For microservice applications the active version ID is the microservice manifest version ID.
   */
  activeVersionId?: string;

  /**
   * Application access level for other tenants.
   */
  availability?: 'MARKET' | 'PRIVATE';

  /**
   * A flag to indicate if the application has a breadcrumbs navigation on the UI.
   * > **&#9432; Info:** This property is specific to the web application type.
   */
  breadcrumbs?: boolean;

  /**
   * The content security policy of the application.
   * > **&#9432; Info:** This property is specific to the web application type.
   */
  contentSecurityPolicy?: string;

  /**
   * The context path in the URL makes the application accessible. Mandatory when the type of the application is `HOSTED`.
   */
  contextPath?: string;

  /**
   * Description of the application.
   */
  description?: string;

  /**
   * A URL to a JSON object with dynamic content options.
   * > **&#9432; Info:** This property is specific to the web application type.
   */
  dynamicOptionsUrl?: string;

  /**
   * The global title of the application.
   * > **&#9432; Info:** This property is specific to the web application type.
   */
  globalTitle?: string;

  /**
   * Unique identifier of the application.
   */
  id?: string;

  /**
   * Applications, regardless of their form, are identified by an application key.
   */
  key?: string;

  /**
   * A flag that shows if the application is a legacy application or not.
   * > **&#9432; Info:** This property is specific to the web application type.
   */
  legacy?: boolean;
  manifest?: (MicroserviceApplicationManifest | WebApplicationManifest);

  /**
   * Name of the application.
   */
  name?: string;
  owner?: ApplicationOwner;
  requiredRoles?: ApplicationRequiredRoles;

  /**
   * URL to the application base directory hosted on an external server. Only present in legacy hosted applications.
   *
   * @deprecated
   */
  resourcesUrl?: string;

  /**
   * A flag to indicate if the application uses the UI context menu on the right side.
   * > **&#9432; Info:** This property is specific to the web application type.
   */
  rightDrawer?: boolean;
  roles?: ApplicationRoles;
  self?: DescSelf;

  /**
   * The type of the application.
   */
  type?: 'EXTERNAL' | 'HOSTED' | 'MICROSERVICE';

  /**
   * A flag that shows if the application is hybrid and using Angular and AngularJS simultaneously.
   * > **&#9432; Info:** This property is specific to the web application type.
   */
  upgrade?: boolean;
}
