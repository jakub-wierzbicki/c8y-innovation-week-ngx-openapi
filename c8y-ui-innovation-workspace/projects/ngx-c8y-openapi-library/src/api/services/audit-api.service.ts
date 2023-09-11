/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AuditApiResource } from '../models/audit-api-resource';
import { getAuditApiResource } from '../fn/audit-api/get-audit-api-resource';
import { GetAuditApiResource$Params } from '../fn/audit-api/get-audit-api-resource';


/**
 * The audit API resource returns URIs and URI templates to collections of audit records, so that they can be retrieved by criteria such as “all records from a particular user”, or “all records from a particular application”.
 *
 * ### Audited information:
 *
 * * Alarm modifications
 * * Operation modifications
 * * Two-factor authentication login attempts
 * * Smart rule modifications
 * * Complex Event Processing (CEP) module modifications
 * * User and group permissions modifications
 * * SSO and OAuth Internal logout and login attempts
 */
@Injectable({ providedIn: 'root' })
export class AuditApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAuditApiResource()` */
  static readonly GetAuditApiResourcePath = '/audit';

  /**
   * Retrieve URIs to collections of audits.
   *
   * Retrieve URIs and URI templates to collections of audit records.
   *
   * <section><h5>Required roles</h5>
   * ROLE_AUDIT_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAuditApiResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAuditApiResource$Response(params?: GetAuditApiResource$Params, context?: HttpContext): Observable<StrictHttpResponse<AuditApiResource>> {
    return getAuditApiResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve URIs to collections of audits.
   *
   * Retrieve URIs and URI templates to collections of audit records.
   *
   * <section><h5>Required roles</h5>
   * ROLE_AUDIT_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAuditApiResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAuditApiResource(params?: GetAuditApiResource$Params, context?: HttpContext): Observable<AuditApiResource> {
    return this.getAuditApiResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuditApiResource>): AuditApiResource => r.body)
    );
  }

}
