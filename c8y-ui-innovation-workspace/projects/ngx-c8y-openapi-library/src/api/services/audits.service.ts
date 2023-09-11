/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AuditRecord } from '../models/audit-record';
import { AuditRecordCollection } from '../models/audit-record-collection';
import { getAuditRecordCollectionResource } from '../fn/audits/get-audit-record-collection-resource';
import { GetAuditRecordCollectionResource$Params } from '../fn/audits/get-audit-record-collection-resource';
import { getAuditRecordResource } from '../fn/audits/get-audit-record-resource';
import { GetAuditRecordResource$Params } from '../fn/audits/get-audit-record-resource';
import { postAuditRecordCollectionResource } from '../fn/audits/post-audit-record-collection-resource';
import { PostAuditRecordCollectionResource$Params } from '../fn/audits/post-audit-record-collection-resource';


/**
 * An audit log stores events that are security-relevant and should be stored for auditing. For example, an audit log should be generated when a user logs into a gateway.
 *
 * An audit log extends an event through:
 *
 * * A username of the user that carried out the activity.
 * * An application that was used to carry out the activity.
 * * The actual activity.
 * * A severity.
 *
 * > **&#9432; Info:** The Accept header should be provided in all POST requests, otherwise an empty response body will be returned.
 */
@Injectable({ providedIn: 'root' })
export class AuditsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAuditRecordCollectionResource()` */
  static readonly GetAuditRecordCollectionResourcePath = '/audit/auditRecords';

  /**
   * Retrieve all audit records.
   *
   * Retrieve all audit records registered on your tenant, or a specific subset based on queries.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAuditRecordCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAuditRecordCollectionResource$Response(params?: GetAuditRecordCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<AuditRecordCollection>> {
    return getAuditRecordCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all audit records.
   *
   * Retrieve all audit records registered on your tenant, or a specific subset based on queries.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAuditRecordCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAuditRecordCollectionResource(params?: GetAuditRecordCollectionResource$Params, context?: HttpContext): Observable<AuditRecordCollection> {
    return this.getAuditRecordCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuditRecordCollection>): AuditRecordCollection => r.body)
    );
  }

  /** Path part for operation `postAuditRecordCollectionResource()` */
  static readonly PostAuditRecordCollectionResourcePath = '/audit/auditRecords';

  /**
   * Create an audit record.
   *
   * Create an audit record.
   *
   * <section><h5>Required roles</h5>
   * ROLE_AUDIT_ADMIN <b>OR</b> ROLE_SYSTEM <b>OR</b> AUDIT_ADMIN permission on the resource
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postAuditRecordCollectionResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.auditrecord+json` and handles request body of type `application/vnd.com.nsn.cumulocity.auditrecord+json`.
   */
  postAuditRecordCollectionResource$Response(params: PostAuditRecordCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<AuditRecord>> {
    return postAuditRecordCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Create an audit record.
   *
   * Create an audit record.
   *
   * <section><h5>Required roles</h5>
   * ROLE_AUDIT_ADMIN <b>OR</b> ROLE_SYSTEM <b>OR</b> AUDIT_ADMIN permission on the resource
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postAuditRecordCollectionResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.auditrecord+json` and handles request body of type `application/vnd.com.nsn.cumulocity.auditrecord+json`.
   */
  postAuditRecordCollectionResource(params: PostAuditRecordCollectionResource$Params, context?: HttpContext): Observable<AuditRecord> {
    return this.postAuditRecordCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuditRecord>): AuditRecord => r.body)
    );
  }

  /** Path part for operation `getAuditRecordResource()` */
  static readonly GetAuditRecordResourcePath = '/audit/auditRecords/{id}';

  /**
   * Retrieve a specific audit record.
   *
   * Retrieve a specific audit record by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_AUDIT_READ <b>OR</b> AUDIT_READ permission on the source
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAuditRecordResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAuditRecordResource$Response(params: GetAuditRecordResource$Params, context?: HttpContext): Observable<StrictHttpResponse<AuditRecord>> {
    return getAuditRecordResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a specific audit record.
   *
   * Retrieve a specific audit record by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_AUDIT_READ <b>OR</b> AUDIT_READ permission on the source
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAuditRecordResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAuditRecordResource(params: GetAuditRecordResource$Params, context?: HttpContext): Observable<AuditRecord> {
    return this.getAuditRecordResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuditRecord>): AuditRecord => r.body)
    );
  }

}
