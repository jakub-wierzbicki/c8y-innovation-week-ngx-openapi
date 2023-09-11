/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteRetentionRuleResource } from '../fn/retention-rules/delete-retention-rule-resource';
import { DeleteRetentionRuleResource$Params } from '../fn/retention-rules/delete-retention-rule-resource';
import { getRetentionRuleCollectionResource } from '../fn/retention-rules/get-retention-rule-collection-resource';
import { GetRetentionRuleCollectionResource$Params } from '../fn/retention-rules/get-retention-rule-collection-resource';
import { getRetentionRuleResource } from '../fn/retention-rules/get-retention-rule-resource';
import { GetRetentionRuleResource$Params } from '../fn/retention-rules/get-retention-rule-resource';
import { postRetentionRuleCollectionResource } from '../fn/retention-rules/post-retention-rule-collection-resource';
import { PostRetentionRuleCollectionResource$Params } from '../fn/retention-rules/post-retention-rule-collection-resource';
import { putRetentionRuleResource } from '../fn/retention-rules/put-retention-rule-resource';
import { PutRetentionRuleResource$Params } from '../fn/retention-rules/put-retention-rule-resource';
import { RetentionRule } from '../models/retention-rule';
import { RetentionRuleCollection } from '../models/retention-rule-collection';


/**
 * It is possible to define rules that make the platform remove certain data. A retention rule shows which data will be deleted. For example, a retention rule with `dataType=EVENT` and `maximumAge=30` removes from the system all events older than 30 days.
 *
 * > **&#9432; Info:** The Accept header should be provided in all POST/PUT requests, otherwise an empty response body will be returned.
 */
@Injectable({ providedIn: 'root' })
export class RetentionRulesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getRetentionRuleCollectionResource()` */
  static readonly GetRetentionRuleCollectionResourcePath = '/retention/retentions';

  /**
   * Retrieve all retention rules.
   *
   * Retrieve all retention rules on your tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_RETENTION_RULE_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRetentionRuleCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRetentionRuleCollectionResource$Response(params?: GetRetentionRuleCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<RetentionRuleCollection>> {
    return getRetentionRuleCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all retention rules.
   *
   * Retrieve all retention rules on your tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_RETENTION_RULE_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRetentionRuleCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRetentionRuleCollectionResource(params?: GetRetentionRuleCollectionResource$Params, context?: HttpContext): Observable<RetentionRuleCollection> {
    return this.getRetentionRuleCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<RetentionRuleCollection>): RetentionRuleCollection => r.body)
    );
  }

  /** Path part for operation `postRetentionRuleCollectionResource()` */
  static readonly PostRetentionRuleCollectionResourcePath = '/retention/retentions';

  /**
   * Create a retention rule.
   *
   * Create a retention rule on your tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_RETENTION_RULE_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postRetentionRuleCollectionResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.retentionrule+json` and handles request body of type `application/vnd.com.nsn.cumulocity.retentionrule+json`.
   */
  postRetentionRuleCollectionResource$Response(params: PostRetentionRuleCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<RetentionRule>> {
    return postRetentionRuleCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a retention rule.
   *
   * Create a retention rule on your tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_RETENTION_RULE_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postRetentionRuleCollectionResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.retentionrule+json` and handles request body of type `application/vnd.com.nsn.cumulocity.retentionrule+json`.
   */
  postRetentionRuleCollectionResource(params: PostRetentionRuleCollectionResource$Params, context?: HttpContext): Observable<RetentionRule> {
    return this.postRetentionRuleCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<RetentionRule>): RetentionRule => r.body)
    );
  }

  /** Path part for operation `getRetentionRuleResource()` */
  static readonly GetRetentionRuleResourcePath = '/retention/retentions/{id}';

  /**
   * Retrieve a retention rule.
   *
   * Retrieve a specific retention rule by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_RETENTION_RULE_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRetentionRuleResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRetentionRuleResource$Response(params: GetRetentionRuleResource$Params, context?: HttpContext): Observable<StrictHttpResponse<RetentionRule>> {
    return getRetentionRuleResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a retention rule.
   *
   * Retrieve a specific retention rule by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_RETENTION_RULE_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRetentionRuleResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRetentionRuleResource(params: GetRetentionRuleResource$Params, context?: HttpContext): Observable<RetentionRule> {
    return this.getRetentionRuleResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<RetentionRule>): RetentionRule => r.body)
    );
  }

  /** Path part for operation `putRetentionRuleResource()` */
  static readonly PutRetentionRuleResourcePath = '/retention/retentions/{id}';

  /**
   * Update a retention rule.
   *
   * Update a specific retention rule by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_RETENTION_RULE_ADMIN <b>AND</b> (the rule is editable <b>OR</b> it's the tenant management)
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putRetentionRuleResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.retentionrule+json` and handles request body of type `application/vnd.com.nsn.cumulocity.retentionrule+json`.
   */
  putRetentionRuleResource$Response(params: PutRetentionRuleResource$Params, context?: HttpContext): Observable<StrictHttpResponse<RetentionRule>> {
    return putRetentionRuleResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a retention rule.
   *
   * Update a specific retention rule by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_RETENTION_RULE_ADMIN <b>AND</b> (the rule is editable <b>OR</b> it's the tenant management)
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putRetentionRuleResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.retentionrule+json` and handles request body of type `application/vnd.com.nsn.cumulocity.retentionrule+json`.
   */
  putRetentionRuleResource(params: PutRetentionRuleResource$Params, context?: HttpContext): Observable<RetentionRule> {
    return this.putRetentionRuleResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<RetentionRule>): RetentionRule => r.body)
    );
  }

  /** Path part for operation `deleteRetentionRuleResource()` */
  static readonly DeleteRetentionRuleResourcePath = '/retention/retentions/{id}';

  /**
   * Remove a retention rule.
   *
   * Remove a specific retention rule by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_RETENTION_RULE_ADMIN <b>AND</b> the rule is editable
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteRetentionRuleResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRetentionRuleResource$Response(params: DeleteRetentionRuleResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteRetentionRuleResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove a retention rule.
   *
   * Remove a specific retention rule by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_RETENTION_RULE_ADMIN <b>AND</b> the rule is editable
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteRetentionRuleResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRetentionRuleResource(params: DeleteRetentionRuleResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteRetentionRuleResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
