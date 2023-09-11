/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AccessToken } from '../models/access-token';
import { postLoginFormBody } from '../fn/login-tokens/post-login-form-body';
import { PostLoginFormBody$Params } from '../fn/login-tokens/post-login-form-body';
import { postLoginFormCookie } from '../fn/login-tokens/post-login-form-cookie';
import { PostLoginFormCookie$Params } from '../fn/login-tokens/post-login-form-cookie';


/**
 * API methods to obtain access tokens to the Cumulocity IoT platform in case of OAI-Secure or SSO authentication.
 */
@Injectable({ providedIn: 'root' })
export class LoginTokensService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `postLoginFormCookie()` */
  static readonly PostLoginFormCookiePath = '/tenant/oauth';

  /**
   * Obtain access tokens in cookies.
   *
   * Obtain an OAI-Secure and XSRF tokens in cookies.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postLoginFormCookie()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  postLoginFormCookie$Response(params: PostLoginFormCookie$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return postLoginFormCookie(this.http, this.rootUrl, params, context);
  }

  /**
   * Obtain access tokens in cookies.
   *
   * Obtain an OAI-Secure and XSRF tokens in cookies.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postLoginFormCookie$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  postLoginFormCookie(params: PostLoginFormCookie$Params, context?: HttpContext): Observable<void> {
    return this.postLoginFormCookie$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `postLoginFormBody()` */
  static readonly PostLoginFormBodyPath = '/tenant/oauth/token';

  /**
   * Obtain an access token.
   *
   * Obtain an OAI-Secure access token.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postLoginFormBody()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  postLoginFormBody$Response(params: PostLoginFormBody$Params, context?: HttpContext): Observable<StrictHttpResponse<AccessToken>> {
    return postLoginFormBody(this.http, this.rootUrl, params, context);
  }

  /**
   * Obtain an access token.
   *
   * Obtain an OAI-Secure access token.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postLoginFormBody$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  postLoginFormBody(params: PostLoginFormBody$Params, context?: HttpContext): Observable<AccessToken> {
    return this.postLoginFormBody$Response(params, context).pipe(
      map((r: StrictHttpResponse<AccessToken>): AccessToken => r.body)
    );
  }

}
