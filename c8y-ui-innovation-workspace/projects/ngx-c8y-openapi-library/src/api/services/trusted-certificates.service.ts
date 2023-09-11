/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteTrustedCertificateResource } from '../fn/trusted-certificates/delete-trusted-certificate-resource';
import { DeleteTrustedCertificateResource$Params } from '../fn/trusted-certificates/delete-trusted-certificate-resource';
import { getTrustedCertificateCollectionResource } from '../fn/trusted-certificates/get-trusted-certificate-collection-resource';
import { GetTrustedCertificateCollectionResource$Params } from '../fn/trusted-certificates/get-trusted-certificate-collection-resource';
import { getTrustedCertificateResource } from '../fn/trusted-certificates/get-trusted-certificate-resource';
import { GetTrustedCertificateResource$Params } from '../fn/trusted-certificates/get-trusted-certificate-resource';
import { postConfirmedTrustedCertificatePopResource } from '../fn/trusted-certificates/post-confirmed-trusted-certificate-pop-resource';
import { PostConfirmedTrustedCertificatePopResource$Params } from '../fn/trusted-certificates/post-confirmed-trusted-certificate-pop-resource';
import { postTrustedCertificateCollectionResource } from '../fn/trusted-certificates/post-trusted-certificate-collection-resource';
import { PostTrustedCertificateCollectionResource$Params } from '../fn/trusted-certificates/post-trusted-certificate-collection-resource';
import { postTrustedCertificateCollectionResourceBulk } from '../fn/trusted-certificates/post-trusted-certificate-collection-resource-bulk';
import { PostTrustedCertificateCollectionResourceBulk$Params } from '../fn/trusted-certificates/post-trusted-certificate-collection-resource-bulk';
import { postTrustedCertificatePopResource } from '../fn/trusted-certificates/post-trusted-certificate-pop-resource';
import { PostTrustedCertificatePopResource$Params } from '../fn/trusted-certificates/post-trusted-certificate-pop-resource';
import { postVerificationCodeTrustedCertificatesPopResource } from '../fn/trusted-certificates/post-verification-code-trusted-certificates-pop-resource';
import { PostVerificationCodeTrustedCertificatesPopResource$Params } from '../fn/trusted-certificates/post-verification-code-trusted-certificates-pop-resource';
import { postX509ChainValidateViaFileUploadResource } from '../fn/trusted-certificates/post-x-509-chain-validate-via-file-upload-resource';
import { PostX509ChainValidateViaFileUploadResource$Params } from '../fn/trusted-certificates/post-x-509-chain-validate-via-file-upload-resource';
import { postX509ChainValidateViaHeaderResource } from '../fn/trusted-certificates/post-x-509-chain-validate-via-header-resource';
import { PostX509ChainValidateViaHeaderResource$Params } from '../fn/trusted-certificates/post-x-509-chain-validate-via-header-resource';
import { putTrustedCertificateResource } from '../fn/trusted-certificates/put-trusted-certificate-resource';
import { PutTrustedCertificateResource$Params } from '../fn/trusted-certificates/put-trusted-certificate-resource';
import { TrustedCertificate } from '../models/trusted-certificate';
import { TrustedCertificateCollection } from '../models/trusted-certificate-collection';
import { VerifyCertificateChain } from '../models/verify-certificate-chain';


/**
 * API methods for managing trusted certificates used to establish device connections via MQTT.
 *
 * More detailed information about trusted certificates and their role can be found in [Device management > Managing device data](https://cumulocity.com/guides/users-guide/device-management/#managing-device-data) in the *User guide*.
 *
 * > **&#9432; Info:** The Accept header must be provided in all POST/PUT requests, otherwise an empty response body will be returned.
 */
@Injectable({ providedIn: 'root' })
export class TrustedCertificatesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getTrustedCertificateCollectionResource()` */
  static readonly GetTrustedCertificateCollectionResourcePath = '/tenant/tenants/{tenantId}/trusted-certificates';

  /**
   * Retrieve all stored certificates.
   *
   * Retrieve all the trusted certificates of a specific tenant (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * (ROLE_TENANT_MANAGEMENT_ADMIN <b>OR</b> ROLE_TENANT_ADMIN) <b>AND</b> (is the current tenant)
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTrustedCertificateCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTrustedCertificateCollectionResource$Response(params: GetTrustedCertificateCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<TrustedCertificateCollection>> {
    return getTrustedCertificateCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all stored certificates.
   *
   * Retrieve all the trusted certificates of a specific tenant (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * (ROLE_TENANT_MANAGEMENT_ADMIN <b>OR</b> ROLE_TENANT_ADMIN) <b>AND</b> (is the current tenant)
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTrustedCertificateCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTrustedCertificateCollectionResource(params: GetTrustedCertificateCollectionResource$Params, context?: HttpContext): Observable<TrustedCertificateCollection> {
    return this.getTrustedCertificateCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<TrustedCertificateCollection>): TrustedCertificateCollection => r.body)
    );
  }

  /** Path part for operation `postTrustedCertificateCollectionResource()` */
  static readonly PostTrustedCertificateCollectionResourcePath = '/tenant/tenants/{tenantId}/trusted-certificates';

  /**
   * Add a new certificate.
   *
   * Add a new trusted certificate to a specific tenant (by a given ID) which can be further used by the devices to establish connections with the Cumulocity IoT platform.
   *
   * <section><h5>Required roles</h5>
   * (ROLE_TENANT_MANAGEMENT_ADMIN <b>OR</b> ROLE_TENANT_ADMIN) <b>AND</b> (is the current tenant)
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postTrustedCertificateCollectionResource()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postTrustedCertificateCollectionResource$Response(params: PostTrustedCertificateCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<TrustedCertificate>> {
    return postTrustedCertificateCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Add a new certificate.
   *
   * Add a new trusted certificate to a specific tenant (by a given ID) which can be further used by the devices to establish connections with the Cumulocity IoT platform.
   *
   * <section><h5>Required roles</h5>
   * (ROLE_TENANT_MANAGEMENT_ADMIN <b>OR</b> ROLE_TENANT_ADMIN) <b>AND</b> (is the current tenant)
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postTrustedCertificateCollectionResource$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postTrustedCertificateCollectionResource(params: PostTrustedCertificateCollectionResource$Params, context?: HttpContext): Observable<TrustedCertificate> {
    return this.postTrustedCertificateCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<TrustedCertificate>): TrustedCertificate => r.body)
    );
  }

  /** Path part for operation `postTrustedCertificateCollectionResourceBulk()` */
  static readonly PostTrustedCertificateCollectionResourceBulkPath = '/tenant/tenants/{tenantId}/trusted-certificates/bulk';

  /**
   * Add multiple certificates.
   *
   * Add multiple trusted certificates to a specific tenant (by a given ID) which can be further used by the devices to establish connections with the Cumulocity IoT platform.
   *
   * <section><h5>Required roles</h5>
   * (ROLE_TENANT_MANAGEMENT_ADMIN <b>OR</b> ROLE_TENANT_ADMIN) <b>AND</b> (is the current tenant)
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postTrustedCertificateCollectionResourceBulk()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postTrustedCertificateCollectionResourceBulk$Response(params: PostTrustedCertificateCollectionResourceBulk$Params, context?: HttpContext): Observable<StrictHttpResponse<TrustedCertificateCollection>> {
    return postTrustedCertificateCollectionResourceBulk(this.http, this.rootUrl, params, context);
  }

  /**
   * Add multiple certificates.
   *
   * Add multiple trusted certificates to a specific tenant (by a given ID) which can be further used by the devices to establish connections with the Cumulocity IoT platform.
   *
   * <section><h5>Required roles</h5>
   * (ROLE_TENANT_MANAGEMENT_ADMIN <b>OR</b> ROLE_TENANT_ADMIN) <b>AND</b> (is the current tenant)
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postTrustedCertificateCollectionResourceBulk$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postTrustedCertificateCollectionResourceBulk(params: PostTrustedCertificateCollectionResourceBulk$Params, context?: HttpContext): Observable<TrustedCertificateCollection> {
    return this.postTrustedCertificateCollectionResourceBulk$Response(params, context).pipe(
      map((r: StrictHttpResponse<TrustedCertificateCollection>): TrustedCertificateCollection => r.body)
    );
  }

  /** Path part for operation `getTrustedCertificateResource()` */
  static readonly GetTrustedCertificateResourcePath = '/tenant/tenants/{tenantId}/trusted-certificates/{fingerprint}';

  /**
   * Retrieve a stored certificate.
   *
   * Retrieve the data of a stored trusted certificate (by a given fingerprint) of a specific tenant (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * (ROLE_TENANT_MANAGEMENT_ADMIN <b>OR</b> ROLE_TENANT_ADMIN) <b>AND</b> (is the current tenant <b>OR</b> is the management tenant)
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTrustedCertificateResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTrustedCertificateResource$Response(params: GetTrustedCertificateResource$Params, context?: HttpContext): Observable<StrictHttpResponse<TrustedCertificate>> {
    return getTrustedCertificateResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a stored certificate.
   *
   * Retrieve the data of a stored trusted certificate (by a given fingerprint) of a specific tenant (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * (ROLE_TENANT_MANAGEMENT_ADMIN <b>OR</b> ROLE_TENANT_ADMIN) <b>AND</b> (is the current tenant <b>OR</b> is the management tenant)
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTrustedCertificateResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTrustedCertificateResource(params: GetTrustedCertificateResource$Params, context?: HttpContext): Observable<TrustedCertificate> {
    return this.getTrustedCertificateResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<TrustedCertificate>): TrustedCertificate => r.body)
    );
  }

  /** Path part for operation `putTrustedCertificateResource()` */
  static readonly PutTrustedCertificateResourcePath = '/tenant/tenants/{tenantId}/trusted-certificates/{fingerprint}';

  /**
   * Update a stored certificate.
   *
   * Update the data of a stored trusted certificate (by a given fingerprint) of a specific tenant (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * (ROLE_TENANT_MANAGEMENT_ADMIN <b>OR</b> ROLE_TENANT_ADMIN) <b>AND</b> (is the current tenant <b>OR</b> is the management tenant)
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putTrustedCertificateResource()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putTrustedCertificateResource$Response(params: PutTrustedCertificateResource$Params, context?: HttpContext): Observable<StrictHttpResponse<TrustedCertificate>> {
    return putTrustedCertificateResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a stored certificate.
   *
   * Update the data of a stored trusted certificate (by a given fingerprint) of a specific tenant (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * (ROLE_TENANT_MANAGEMENT_ADMIN <b>OR</b> ROLE_TENANT_ADMIN) <b>AND</b> (is the current tenant <b>OR</b> is the management tenant)
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putTrustedCertificateResource$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putTrustedCertificateResource(params: PutTrustedCertificateResource$Params, context?: HttpContext): Observable<TrustedCertificate> {
    return this.putTrustedCertificateResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<TrustedCertificate>): TrustedCertificate => r.body)
    );
  }

  /** Path part for operation `deleteTrustedCertificateResource()` */
  static readonly DeleteTrustedCertificateResourcePath = '/tenant/tenants/{tenantId}/trusted-certificates/{fingerprint}';

  /**
   * Remove a stored certificate.
   *
   * Remove a stored trusted certificate (by a given fingerprint) from a specific tenant (by a given ID). 
   * When a trusted certificate is deleted, the established MQTT connection to all devices that are using the corresponding certificate are closed.
   *
   * <section><h5>Required roles</h5>
   * (ROLE_TENANT_MANAGEMENT_ADMIN <b>OR</b> ROLE_TENANT_ADMIN) <b>AND</b> (is the current tenant <b>OR</b> is the management tenant)
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTrustedCertificateResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTrustedCertificateResource$Response(params: DeleteTrustedCertificateResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteTrustedCertificateResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove a stored certificate.
   *
   * Remove a stored trusted certificate (by a given fingerprint) from a specific tenant (by a given ID). 
   * When a trusted certificate is deleted, the established MQTT connection to all devices that are using the corresponding certificate are closed.
   *
   * <section><h5>Required roles</h5>
   * (ROLE_TENANT_MANAGEMENT_ADMIN <b>OR</b> ROLE_TENANT_ADMIN) <b>AND</b> (is the current tenant <b>OR</b> is the management tenant)
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteTrustedCertificateResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTrustedCertificateResource(params: DeleteTrustedCertificateResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteTrustedCertificateResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `postTrustedCertificatePopResource()` */
  static readonly PostTrustedCertificatePopResourcePath = '/tenant/tenants/{tenantId}/trusted-certificates-pop/{fingerprint}/pop';

  /**
   * Provide the proof of possession for an already uploaded certificate.
   *
   * Provide the proof of possession for a specific uploaded certificate (by a given fingerprint) for a specific tenant (by a given ID).
   *
   * <div class="reqRoles"><div><h5></h5></div><div>
   * (ROLE_TENANT_MANAGEMENT_ADMIN <b>OR</b> ROLE_TENANT_ADMIN) <b>AND</b> is the current tenant
   * </div></div>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postTrustedCertificatePopResource()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postTrustedCertificatePopResource$Response(params: PostTrustedCertificatePopResource$Params, context?: HttpContext): Observable<StrictHttpResponse<TrustedCertificate>> {
    return postTrustedCertificatePopResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Provide the proof of possession for an already uploaded certificate.
   *
   * Provide the proof of possession for a specific uploaded certificate (by a given fingerprint) for a specific tenant (by a given ID).
   *
   * <div class="reqRoles"><div><h5></h5></div><div>
   * (ROLE_TENANT_MANAGEMENT_ADMIN <b>OR</b> ROLE_TENANT_ADMIN) <b>AND</b> is the current tenant
   * </div></div>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postTrustedCertificatePopResource$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postTrustedCertificatePopResource(params: PostTrustedCertificatePopResource$Params, context?: HttpContext): Observable<TrustedCertificate> {
    return this.postTrustedCertificatePopResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<TrustedCertificate>): TrustedCertificate => r.body)
    );
  }

  /** Path part for operation `postConfirmedTrustedCertificatePopResource()` */
  static readonly PostConfirmedTrustedCertificatePopResourcePath = '/tenant/tenants/{tenantId}/trusted-certificates-pop/{fingerprint}/confirmed';

  /**
   * Confirm an already uploaded certificate.
   *
   * Confirm an already uploaded certificate (by a given fingerprint) for a specific tenant (by a given ID).
   *
   * <div class="reqRoles"><div><h5></h5></div><div>
   * (ROLE_TENANT_MANAGEMENT_ADMIN <b>OR</b> ROLE_TENANT_ADMIN) <b>AND</b> is the management tenant
   * </div></div>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postConfirmedTrustedCertificatePopResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  postConfirmedTrustedCertificatePopResource$Response(params: PostConfirmedTrustedCertificatePopResource$Params, context?: HttpContext): Observable<StrictHttpResponse<TrustedCertificate>> {
    return postConfirmedTrustedCertificatePopResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Confirm an already uploaded certificate.
   *
   * Confirm an already uploaded certificate (by a given fingerprint) for a specific tenant (by a given ID).
   *
   * <div class="reqRoles"><div><h5></h5></div><div>
   * (ROLE_TENANT_MANAGEMENT_ADMIN <b>OR</b> ROLE_TENANT_ADMIN) <b>AND</b> is the management tenant
   * </div></div>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postConfirmedTrustedCertificatePopResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postConfirmedTrustedCertificatePopResource(params: PostConfirmedTrustedCertificatePopResource$Params, context?: HttpContext): Observable<TrustedCertificate> {
    return this.postConfirmedTrustedCertificatePopResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<TrustedCertificate>): TrustedCertificate => r.body)
    );
  }

  /** Path part for operation `postVerificationCodeTrustedCertificatesPopResource()` */
  static readonly PostVerificationCodeTrustedCertificatesPopResourcePath = '/tenant/tenants/{tenantId}/trusted-certificates-pop/{fingerprint}/verification-code';

  /**
   * Generate a verification code for the proof of possession operation for the given certificate.
   *
   * Generate a verification code for the proof of possession operation for the certificate (by a given fingerprint).
   *
   * <div class="reqRoles"><div><h5></h5></div><div>
   * (ROLE_TENANT_MANAGEMENT_ADMIN <b>OR</b> ROLE_TENANT_ADMIN) <b>AND</b> is the current tenant
   * </div></div>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postVerificationCodeTrustedCertificatesPopResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  postVerificationCodeTrustedCertificatesPopResource$Response(params: PostVerificationCodeTrustedCertificatesPopResource$Params, context?: HttpContext): Observable<StrictHttpResponse<TrustedCertificate>> {
    return postVerificationCodeTrustedCertificatesPopResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Generate a verification code for the proof of possession operation for the given certificate.
   *
   * Generate a verification code for the proof of possession operation for the certificate (by a given fingerprint).
   *
   * <div class="reqRoles"><div><h5></h5></div><div>
   * (ROLE_TENANT_MANAGEMENT_ADMIN <b>OR</b> ROLE_TENANT_ADMIN) <b>AND</b> is the current tenant
   * </div></div>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postVerificationCodeTrustedCertificatesPopResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postVerificationCodeTrustedCertificatesPopResource(params: PostVerificationCodeTrustedCertificatesPopResource$Params, context?: HttpContext): Observable<TrustedCertificate> {
    return this.postVerificationCodeTrustedCertificatesPopResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<TrustedCertificate>): TrustedCertificate => r.body)
    );
  }

  /** Path part for operation `postX509ChainValidateViaFileUploadResource()` */
  static readonly PostX509ChainValidateViaFileUploadResourcePath = '/tenant/tenants/verify-cert-chain/fileUpload';

  /**
   * Verify a certificate chain via file upload.
   *
   * Verify a device certificate chain against a specific tenant. Max chain length support is <b>10</b>.
   * The tenant ID is `optional` and this api will be further enhanced to resolve the tenant from the chain in future release.
   *
   * <section><h5>Required roles</h5>
   * (ROLE_TENANT_MANAGEMENT_ADMIN) <b>AND</b> (is the current tenant <b>OR</b> is current management tenant)
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postX509ChainValidateViaFileUploadResource()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postX509ChainValidateViaFileUploadResource$Response(params: PostX509ChainValidateViaFileUploadResource$Params, context?: HttpContext): Observable<StrictHttpResponse<VerifyCertificateChain>> {
    return postX509ChainValidateViaFileUploadResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Verify a certificate chain via file upload.
   *
   * Verify a device certificate chain against a specific tenant. Max chain length support is <b>10</b>.
   * The tenant ID is `optional` and this api will be further enhanced to resolve the tenant from the chain in future release.
   *
   * <section><h5>Required roles</h5>
   * (ROLE_TENANT_MANAGEMENT_ADMIN) <b>AND</b> (is the current tenant <b>OR</b> is current management tenant)
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postX509ChainValidateViaFileUploadResource$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postX509ChainValidateViaFileUploadResource(params: PostX509ChainValidateViaFileUploadResource$Params, context?: HttpContext): Observable<VerifyCertificateChain> {
    return this.postX509ChainValidateViaFileUploadResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<VerifyCertificateChain>): VerifyCertificateChain => r.body)
    );
  }

  /** Path part for operation `postX509ChainValidateViaHeaderResource()` */
  static readonly PostX509ChainValidateViaHeaderResourcePath = '/tenant/tenants/verify-cert-chain';

  /**
   * Verify a certificate chain via HTTP header.
   *
   * Verify a device certificate chain against a specific tenant. Max chain length support is <b>6</b>.
   * The tenant ID is `optional` and this api will be further enhanced to resolve the tenant from the chain in future release.
   *
   * <section><h5>Required roles</h5>
   * (ROLE_TENANT_MANAGEMENT_ADMIN) <b>AND</b> (is the current tenant <b>OR</b> is current management tenant)
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postX509ChainValidateViaHeaderResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  postX509ChainValidateViaHeaderResource$Response(params: PostX509ChainValidateViaHeaderResource$Params, context?: HttpContext): Observable<StrictHttpResponse<VerifyCertificateChain>> {
    return postX509ChainValidateViaHeaderResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Verify a certificate chain via HTTP header.
   *
   * Verify a device certificate chain against a specific tenant. Max chain length support is <b>6</b>.
   * The tenant ID is `optional` and this api will be further enhanced to resolve the tenant from the chain in future release.
   *
   * <section><h5>Required roles</h5>
   * (ROLE_TENANT_MANAGEMENT_ADMIN) <b>AND</b> (is the current tenant <b>OR</b> is current management tenant)
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postX509ChainValidateViaHeaderResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postX509ChainValidateViaHeaderResource(params: PostX509ChainValidateViaHeaderResource$Params, context?: HttpContext): Observable<VerifyCertificateChain> {
    return this.postX509ChainValidateViaHeaderResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<VerifyCertificateChain>): VerifyCertificateChain => r.body)
    );
  }

}
