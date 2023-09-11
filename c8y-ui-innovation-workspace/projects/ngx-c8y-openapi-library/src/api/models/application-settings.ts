/* tslint:disable */
/* eslint-disable */

/**
 * A list of settings objects for this microservice application.
 */
export type ApplicationSettings = Array<{

/**
 * The name of the setting.
 */
'key'?: string;

/**
 * The value schema determines the values that the microservice can process.
 */
'valueSchema'?: {

/**
 * The value schema type.
 */
'type'?: string;
};

/**
 * The default value.
 */
'defaultValue'?: string;

/**
 * Indicates if the value is editable.
 */
'editable'?: boolean;

/**
 * Indicated wether this setting is inherited.
 */
'inheritFromOwner'?: boolean;
}>;
