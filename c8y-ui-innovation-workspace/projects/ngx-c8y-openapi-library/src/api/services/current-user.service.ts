/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CurrentUser } from '../models/current-user';
import { CurrentUserTotpSecret } from '../models/current-user-totp-secret';
import { CurrentUserTotpSecretActivity } from '../models/current-user-totp-secret-activity';
import { getCurrentUserResource } from '../fn/current-user/get-current-user-resource';
import { GetCurrentUserResource$Params } from '../fn/current-user/get-current-user-resource';
import { getCurrentUserTfaTotpResourceActivity } from '../fn/current-user/get-current-user-tfa-totp-resource-activity';
import { GetCurrentUserTfaTotpResourceActivity$Params } from '../fn/current-user/get-current-user-tfa-totp-resource-activity';
import { postCurrentUserTfaTotpResource } from '../fn/current-user/post-current-user-tfa-totp-resource';
import { PostCurrentUserTfaTotpResource$Params } from '../fn/current-user/post-current-user-tfa-totp-resource';
import { postCurrentUserTfaTotpResourceActivity } from '../fn/current-user/post-current-user-tfa-totp-resource-activity';
import { PostCurrentUserTfaTotpResourceActivity$Params } from '../fn/current-user/post-current-user-tfa-totp-resource-activity';
import { postCurrentUserTfaTotpResourceVerify } from '../fn/current-user/post-current-user-tfa-totp-resource-verify';
import { PostCurrentUserTfaTotpResourceVerify$Params } from '../fn/current-user/post-current-user-tfa-totp-resource-verify';
import { putCurrentUserPasswordResource } from '../fn/current-user/put-current-user-password-resource';
import { PutCurrentUserPasswordResource$Params } from '../fn/current-user/put-current-user-password-resource';
import { putCurrentUserResource } from '../fn/current-user/put-current-user-resource';
import { PutCurrentUserResource$Params } from '../fn/current-user/put-current-user-resource';


/**
 * The current user is the user that is currently authenticated with Cumulocity IoT for the API calls.
 *
 * > **&#9432; Info:** The Accept header should be provided in all PUT requests, otherwise an empty response body will be returned.
 */
@Injectable({ providedIn: 'root' })
export class CurrentUserService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCurrentUserResource()` */
  static readonly GetCurrentUserResourcePath = '/user/currentUser';

  /**
   * Retrieve the current user.
   *
   * Retrieve the user reference of the current user.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_OWN_READ <b>OR</b> ROLE_SYSTEM
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCurrentUserResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentUserResource$Response(params?: GetCurrentUserResource$Params, context?: HttpContext): Observable<StrictHttpResponse<CurrentUser>> {
    return getCurrentUserResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve the current user.
   *
   * Retrieve the user reference of the current user.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_OWN_READ <b>OR</b> ROLE_SYSTEM
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCurrentUserResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentUserResource(params?: GetCurrentUserResource$Params, context?: HttpContext): Observable<CurrentUser> {
    return this.getCurrentUserResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<CurrentUser>): CurrentUser => r.body)
    );
  }

  /** Path part for operation `putCurrentUserResource()` */
  static readonly PutCurrentUserResourcePath = '/user/currentUser';

  /**
   * Update the current user.
   *
   * Update the current user.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_OWN_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putCurrentUserResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.currentuser+json` and handles request body of type `application/vnd.com.nsn.cumulocity.currentuser+json`.
   */
  putCurrentUserResource$Response(params: PutCurrentUserResource$Params, context?: HttpContext): Observable<StrictHttpResponse<CurrentUser>> {
    return putCurrentUserResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Update the current user.
   *
   * Update the current user.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_OWN_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putCurrentUserResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.currentuser+json` and handles request body of type `application/vnd.com.nsn.cumulocity.currentuser+json`.
   */
  putCurrentUserResource(params: PutCurrentUserResource$Params, context?: HttpContext): Observable<CurrentUser> {
    return this.putCurrentUserResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<CurrentUser>): CurrentUser => r.body)
    );
  }

  /** Path part for operation `putCurrentUserPasswordResource()` */
  static readonly PutCurrentUserPasswordResourcePath = '/user/currentUser/password';

  /**
   * Update the current user's password.
   *
   * Update the current user's  password.
   *
   * > **⚠️ Important:** If the tenant uses OAI-Secure authentication, the current user will not be logged out. Instead, a new cookie will be set with a new token, and the previous token will expire within a minute.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_OWN_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putCurrentUserPasswordResource()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putCurrentUserPasswordResource$Response(params: PutCurrentUserPasswordResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return putCurrentUserPasswordResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Update the current user's password.
   *
   * Update the current user's  password.
   *
   * > **⚠️ Important:** If the tenant uses OAI-Secure authentication, the current user will not be logged out. Instead, a new cookie will be set with a new token, and the previous token will expire within a minute.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_OWN_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putCurrentUserPasswordResource$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putCurrentUserPasswordResource(params: PutCurrentUserPasswordResource$Params, context?: HttpContext): Observable<void> {
    return this.putCurrentUserPasswordResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `postCurrentUserTfaTotpResource()` */
  static readonly PostCurrentUserTfaTotpResourcePath = '/user/currentUser/totpSecret';

  /**
   * Generate secret to set up TFA.
   *
   * Generate a secret code to create a QR code to set up the two-factor authentication functionality using a TFA app/service.
   *
   * For more information about the feature, see [User Guide > Administration > Two-factor authentication](https://cumulocity.com/guides/users-guide/administration/#tfa) in the *Cumulocity IoT documentation*.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_OWN_READ <b>OR</b> ROLE_SYSTEM
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCurrentUserTfaTotpResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  postCurrentUserTfaTotpResource$Response(params?: PostCurrentUserTfaTotpResource$Params, context?: HttpContext): Observable<StrictHttpResponse<CurrentUserTotpSecret>> {
    return postCurrentUserTfaTotpResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Generate secret to set up TFA.
   *
   * Generate a secret code to create a QR code to set up the two-factor authentication functionality using a TFA app/service.
   *
   * For more information about the feature, see [User Guide > Administration > Two-factor authentication](https://cumulocity.com/guides/users-guide/administration/#tfa) in the *Cumulocity IoT documentation*.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_OWN_READ <b>OR</b> ROLE_SYSTEM
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCurrentUserTfaTotpResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postCurrentUserTfaTotpResource(params?: PostCurrentUserTfaTotpResource$Params, context?: HttpContext): Observable<CurrentUserTotpSecret> {
    return this.postCurrentUserTfaTotpResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<CurrentUserTotpSecret>): CurrentUserTotpSecret => r.body)
    );
  }

  /** Path part for operation `getCurrentUserTfaTotpResourceActivity()` */
  static readonly GetCurrentUserTfaTotpResourceActivityPath = '/user/currentUser/totpSecret/activity';

  /**
   * Returns the activation state of the two-factor authentication feature.
   *
   * Returns the activation state of the two-factor authentication feature for the current user.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_OWN_READ <b>OR</b> ROLE_SYSTEM
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCurrentUserTfaTotpResourceActivity()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentUserTfaTotpResourceActivity$Response(params?: GetCurrentUserTfaTotpResourceActivity$Params, context?: HttpContext): Observable<StrictHttpResponse<CurrentUserTotpSecretActivity>> {
    return getCurrentUserTfaTotpResourceActivity(this.http, this.rootUrl, params, context);
  }

  /**
   * Returns the activation state of the two-factor authentication feature.
   *
   * Returns the activation state of the two-factor authentication feature for the current user.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_OWN_READ <b>OR</b> ROLE_SYSTEM
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCurrentUserTfaTotpResourceActivity$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentUserTfaTotpResourceActivity(params?: GetCurrentUserTfaTotpResourceActivity$Params, context?: HttpContext): Observable<CurrentUserTotpSecretActivity> {
    return this.getCurrentUserTfaTotpResourceActivity$Response(params, context).pipe(
      map((r: StrictHttpResponse<CurrentUserTotpSecretActivity>): CurrentUserTotpSecretActivity => r.body)
    );
  }

  /** Path part for operation `postCurrentUserTfaTotpResourceActivity()` */
  static readonly PostCurrentUserTfaTotpResourceActivityPath = '/user/currentUser/totpSecret/activity';

  /**
   * Activates or deactivates the two-factor authentication feature.
   *
   * Activates or deactivates the two-factor authentication feature for the current user.
   *
   * For more information about the feature, see [User Guide > Administration > Two-factor authentication](https://cumulocity.com/guides/users-guide/administration/#tfa) in the *Cumulocity IoT documentation*.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_OWN_READ <b>OR</b> ROLE_SYSTEM
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCurrentUserTfaTotpResourceActivity()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCurrentUserTfaTotpResourceActivity$Response(params: PostCurrentUserTfaTotpResourceActivity$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return postCurrentUserTfaTotpResourceActivity(this.http, this.rootUrl, params, context);
  }

  /**
   * Activates or deactivates the two-factor authentication feature.
   *
   * Activates or deactivates the two-factor authentication feature for the current user.
   *
   * For more information about the feature, see [User Guide > Administration > Two-factor authentication](https://cumulocity.com/guides/users-guide/administration/#tfa) in the *Cumulocity IoT documentation*.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_OWN_READ <b>OR</b> ROLE_SYSTEM
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCurrentUserTfaTotpResourceActivity$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCurrentUserTfaTotpResourceActivity(params: PostCurrentUserTfaTotpResourceActivity$Params, context?: HttpContext): Observable<void> {
    return this.postCurrentUserTfaTotpResourceActivity$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `postCurrentUserTfaTotpResourceVerify()` */
  static readonly PostCurrentUserTfaTotpResourceVerifyPath = '/user/currentUser/totpSecret/verify';

  /**
   * Verify TFA code.
   *
   * Verifies the authentication code that the current user received from a TFA app/service and uploaded to the platform to gain access or enable the two-factor authentication feature.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_OWN_READ <b>OR</b> ROLE_SYSTEM
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCurrentUserTfaTotpResourceVerify()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCurrentUserTfaTotpResourceVerify$Response(params: PostCurrentUserTfaTotpResourceVerify$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return postCurrentUserTfaTotpResourceVerify(this.http, this.rootUrl, params, context);
  }

  /**
   * Verify TFA code.
   *
   * Verifies the authentication code that the current user received from a TFA app/service and uploaded to the platform to gain access or enable the two-factor authentication feature.
   *
   * <section><h5>Required roles</h5>
   * ROLE_USER_MANAGEMENT_OWN_READ <b>OR</b> ROLE_SYSTEM
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCurrentUserTfaTotpResourceVerify$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCurrentUserTfaTotpResourceVerify(params: PostCurrentUserTfaTotpResourceVerify$Params, context?: HttpContext): Observable<void> {
    return this.postCurrentUserTfaTotpResourceVerify$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
