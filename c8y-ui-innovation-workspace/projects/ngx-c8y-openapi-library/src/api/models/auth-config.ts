/* tslint:disable */
/* eslint-disable */
import { BasicAuthenticationRestrictions } from '../models/basic-authentication-restrictions';
import { DescSelf } from '../models/desc-self';
import { JsonPredicateRepresentation } from '../models/json-predicate-representation';
import { OAuthSessionConfiguration } from '../models/o-auth-session-configuration';
import { RequestRepresentation } from '../models/request-representation';

/**
 * Parameters determining the authentication process.
 */
export interface AuthConfig {

  /**
   * SSO specific. Describes the fields in the access token from the external server containing user information.
   */
  accessTokenToUserDataMapping?: {

/**
 * The name of the field containing the user's email.
 */
'emailClaimName'?: string;

/**
 * The name of the field containing the user's first name.
 */
'firstNameClaimName'?: string;

/**
 * The name of the field containing the user's last name.
 */
'lastNameClaimName'?: string;

/**
 * The name of the field containing the user's phone number.
 */
'phoneNumberClaimName'?: string;
};

  /**
   * SSO specific. Token audience.
   */
  audience?: string;
  authenticationRestrictions?: BasicAuthenticationRestrictions;
  authorizationRequest?: RequestRepresentation & any;

  /**
   * SSO specific. Information for the UI about the name displayed on the external server login button.
   */
  buttonName?: string;

  /**
   * SSO specific. The identifier of the Cumulocity IoT tenant on the external authorization server.
   */
  clientId?: string;

  /**
   * A configuration for authentication with an access token from the authorization server.
   */
  externalTokenConfig?: {

/**
 * Indicates whether authentication is enabled or disabled.
 */
'enabled'?: boolean;

/**
 * Points to the claim of the access token from the authorization server that must be used as the username in the Cumulocity IoT platform.
 */
'userOrAppIdConfig'?: {

/**
 * Used only if `useConstantValue` is set to `true`.
 */
'constantValue'?: string;

/**
 * The name of the field containing the JWT.
 */
'jwtField'?: string;

/**
 * Not recommended. If set to `true`, all users share a single account in the Cumulocity IoT platform.
 */
'useConstantValue'?: boolean;
};

/**
 * If set to `true`, the access token is validated against the authorization server by way of introspection or user info request.
 */
'validationRequired'?: boolean;

/**
 * The method of validation of the access token.
 */
'validationMethod'?: 'INTROSPECTION' | 'USERINFO';

/**
 * Request to the external authorization server used by the Cumulocity IoT platform to validate the access token.
 */
'tokenValidationRequest'?: RequestRepresentation;

/**
 * The frequency (in Minutes) in which Cumulocity sends a validation request to authorization server. The recommended frequency is 1 minute.
 */
'accessTokenValidityCheckIntervalInMinutes'?: number;
};

  /**
   * The authentication configuration grant type identifier.
   */
  grantType?: 'AUTHORIZATION_CODE' | 'PASSWORD';

  /**
   * Unique identifier of this login option.
   */
  id?: string;

  /**
   * SSO specific. External token issuer.
   */
  issuer?: string;
  logoutRequest?: RequestRepresentation & any;

  /**
   * SSO specific. Describes the process of internal user creation during login with the external authorization server.
   */
  onNewUser?: {

/**
 * Modern version of configuration of default groups and applications. This ensures backward compatibility.
 */
'dynamicMapping'?: {

/**
 * Configuration of the mapping.
 */
'configuration'?: {

/**
 * Indicates whether the mapping should be evaluated always or only during the first external login when the internal user is created.
 */
'mapRolesOnlyForNewUser'?: boolean;

/**
 * If set to `true`, dynamic access mapping is only managed for global roles, applications and inventory roles which are listed in the configuration. Others remain unchanged.
 */
'manageRolesOnlyFromAccessMapping'?: boolean;
};

/**
 * Represents rules used to assign groups and applications.
 */
'mappings'?: Array<{
'when'?: JsonPredicateRepresentation;

/**
 * List of the applications' identifiers.
 */
'thenApplications'?: Array<number>;

/**
 * List of the groups' identifiers.
 */
'thenGroups'?: Array<number>;
}>;

/**
 * Represents rules used to assign inventory roles.
 */
'inventoryMappings'?: Array<{
'when'?: JsonPredicateRepresentation;

/**
 * List of the OAuth inventory assignments.
 */
'thenInventoryRoles'?: Array<{

/**
 * A unique identifier for the managed object for which the roles are assigned.
 */
'managedObject'?: string;

/**
 * List of the inventory roles' identifiers.
 */
'roleIds'?: Array<number>;
}>;
}>;
};
};

  /**
   * Indicates whether the configuration is only accessible to the management tenant.
   */
  onlyManagementTenantAccess?: boolean;

  /**
   * The name of the authentication provider.
   */
  providerName: string;

  /**
   * SSO specific. URL used for redirecting to the Cumulocity IoT platform.
   */
  redirectToPlatform?: string;
  refreshRequest?: RequestRepresentation & any;
  self?: DescSelf;
  sessionConfiguration?: OAuthSessionConfiguration;

  /**
   * SSO specific and authorization server dependent. Describes the method of access token signature verification on the Cumulocity IoT platform.
   */
  signatureVerificationConfig?: {

/**
 * AAD signature verification configuration.
 */
'aad'?: {

/**
 * URL used to retrieve the public key used for signature verification.
 */
'publicKeyDiscoveryUrl'?: string;
};

/**
 * ADFS manifest signature verification configuration.
 */
'adfsManifest'?: {

/**
 * The URI to the manifest resource.
 */
'manifestUrl'?: string;
};

/**
 * The address of the endpoint which is used to retrieve the public key used to verify the JWT access token signature.
 */
'jwks'?: {

/**
 * The URI to the public key resource.
 */
'jwksUrl'?: string;
};

/**
 * Describes the process of verification of JWT access token with the public keys embedded in the provided X.509 certificates.
 */
'manual'?: {

/**
 * The name of the field in the JWT access token containing the certificate identifier.
 */
'certIdField'?: string;

/**
 * Indicates whether the certificate identifier should be read from the JWT access token.
 */
'certIdFromField'?: boolean;

/**
 * Details of the certificates.
 */
'certificates'?: {

/**
 * The signing algorithm of the JWT access token.
 */
'alg'?: 'RSA' | 'PCKS';

/**
 * The public key certificate.
 */
'publicKey'?: string;

/**
 * The validity start date of the certificate.
 */
'validFrom'?: string;

/**
 * The expiry date of the certificate.
 */
'validTill'?: string;
};
};
};

  /**
   * SSO specific. Template name used by the UI.
   */
  template?: string;
  tokenRequest?: RequestRepresentation & any;

  /**
   * The authentication configuration type. Note that the value is case insensitive.
   */
  type: 'BASIC' | 'OAUTH2' | 'OAUTH2_INTERNAL';

  /**
   * SSO specific. Points to the field in the obtained JWT access token that should be used as the username in the Cumulocity IoT platform.
   */
  userIdConfig?: {

/**
 * Used only when `useConstantValue` is set to `true`.
 */
'constantValue'?: string;

/**
 * The name of the field containing the JWT.
 */
'jwtField'?: string;

/**
 * Not recommended. If set to `true`, all SSO users will share one account in the Cumulocity IoT platform.
 */
'useConstantValue'?: boolean;
};

  /**
   * Indicates whether user data are managed internally by the Cumulocity IoT platform or by an external server. Note that the value is case insensitive.
   */
  userManagementSource?: 'INTERNAL' | 'REMOTE';

  /**
   * Information for the UI if the respective authentication form should be visible for the user.
   */
  visibleOnLoginPage?: boolean;
}
