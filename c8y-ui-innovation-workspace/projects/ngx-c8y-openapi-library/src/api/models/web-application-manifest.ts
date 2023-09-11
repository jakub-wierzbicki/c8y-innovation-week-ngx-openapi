/* tslint:disable */
/* eslint-disable */

/**
 * The manifest of the web application.
 *
 * @deprecated
 */
export interface WebApplicationManifest {

  /**
   * A legacy flag that identified a certain type of web application that would control the behavior of plugin tab in the application details view.
   * It is no longer used.
   *
   * @deprecated
   */
  '_webpaas'?: boolean;

  /**
   * The content security policy of the application.
   */
  contentSecurityPolicy?: string;

  /**
   * A flag that decides if the application is shown in the app switcher on the UI.
   */
  noAppSwitcher?: boolean;

  /**
   * A flag that decides if the application tabs are displayed horizontally or not.
   */
  tabsHorizontal?: boolean;
}
