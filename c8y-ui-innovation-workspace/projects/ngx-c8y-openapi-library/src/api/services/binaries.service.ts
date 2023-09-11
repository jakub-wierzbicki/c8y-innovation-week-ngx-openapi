/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Binary } from '../models/binary';
import { BinaryCollection } from '../models/binary-collection';
import { deleteBinariesResource } from '../fn/binaries/delete-binaries-resource';
import { DeleteBinariesResource$Params } from '../fn/binaries/delete-binaries-resource';
import { getBinariesCollectionResource } from '../fn/binaries/get-binaries-collection-resource';
import { GetBinariesCollectionResource$Params } from '../fn/binaries/get-binaries-collection-resource';
import { getBinariesResource } from '../fn/binaries/get-binaries-resource';
import { GetBinariesResource$Params } from '../fn/binaries/get-binaries-resource';
import { postBinariesCollectionResource } from '../fn/binaries/post-binaries-collection-resource';
import { PostBinariesCollectionResource$Params } from '../fn/binaries/post-binaries-collection-resource';
import { putBinariesResource } from '../fn/binaries/put-binaries-resource';
import { PutBinariesResource$Params } from '../fn/binaries/put-binaries-resource';


/**
 * Managed objects can perform operations to store, retrieve and delete binaries. One binary can store only one file. Together with the binary, a managed object is created which acts as a metadata information for the binary.
 *
 * > **&#9432; Info:** Supports only HTTP 1.1 clients.
 * > **&#9432; Info:** The Accept header should be provided in all POST/PUT requests, otherwise an empty response body will be returned.
 */
@Injectable({ providedIn: 'root' })
export class BinariesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getBinariesCollectionResource()` */
  static readonly GetBinariesCollectionResourcePath = '/inventory/binaries';

  /**
   * Search for stored files.
   *
   * Retrieve metadata information about stored files. Search for files by query parameters. This will not download the files.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBinariesCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBinariesCollectionResource$Response(params?: GetBinariesCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<BinaryCollection>> {
    return getBinariesCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Search for stored files.
   *
   * Retrieve metadata information about stored files. Search for files by query parameters. This will not download the files.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBinariesCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBinariesCollectionResource(params?: GetBinariesCollectionResource$Params, context?: HttpContext): Observable<BinaryCollection> {
    return this.getBinariesCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<BinaryCollection>): BinaryCollection => r.body)
    );
  }

  /** Path part for operation `postBinariesCollectionResource()` */
  static readonly PostBinariesCollectionResourcePath = '/inventory/binaries';

  /**
   * Upload a file.
   *
   * Uploading a file (binary) requires providing the following properties:
   *
   * * `object` – In JSON format, it contains information about the file.
   * * `file` – Contains the file to be uploaded.
   *
   * After the file has been uploaded, the corresponding managed object will contain the fragment `c8y_IsBinary`.
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> ROLE_INVENTORY_CREATE
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postBinariesCollectionResource()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postBinariesCollectionResource$Response(params: PostBinariesCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Binary>> {
    return postBinariesCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Upload a file.
   *
   * Uploading a file (binary) requires providing the following properties:
   *
   * * `object` – In JSON format, it contains information about the file.
   * * `file` – Contains the file to be uploaded.
   *
   * After the file has been uploaded, the corresponding managed object will contain the fragment `c8y_IsBinary`.
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> ROLE_INVENTORY_CREATE
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postBinariesCollectionResource$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postBinariesCollectionResource(params: PostBinariesCollectionResource$Params, context?: HttpContext): Observable<Binary> {
    return this.postBinariesCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Binary>): Binary => r.body)
    );
  }

  /** Path part for operation `getBinariesResource()` */
  static readonly GetBinariesResourcePath = '/inventory/binaries/{id}';

  /**
   * Retrieve a stored file.
   *
   * Retrieve a stored file (managed object) by a given ID.
   * Supports chunk download and resuming an interrupted download using the [`Range` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_READ <b>OR</b> owner of the resource <b>OR</b> MANAGE_OBJECT_READ permission on the resource
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBinariesResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBinariesResource$Response(params: GetBinariesResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return getBinariesResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a stored file.
   *
   * Retrieve a stored file (managed object) by a given ID.
   * Supports chunk download and resuming an interrupted download using the [`Range` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_READ <b>OR</b> owner of the resource <b>OR</b> MANAGE_OBJECT_READ permission on the resource
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBinariesResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBinariesResource(params: GetBinariesResource$Params, context?: HttpContext): Observable<Blob> {
    return this.getBinariesResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `putBinariesResource()` */
  static readonly PutBinariesResourcePath = '/inventory/binaries/{id}';

  /**
   * Replace a file.
   *
   * Upload and replace the attached file (binary) of a specific managed object by a given ID.<br>
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> owner of the resource <b>OR</b> MANAGE_OBJECT_ADMIN permission on the resource
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putBinariesResource()` instead.
   *
   * This method sends `text/plain` and handles request body of type `text/plain`.
   */
  putBinariesResource$Response(params: PutBinariesResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Binary>> {
    return putBinariesResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Replace a file.
   *
   * Upload and replace the attached file (binary) of a specific managed object by a given ID.<br>
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> owner of the resource <b>OR</b> MANAGE_OBJECT_ADMIN permission on the resource
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putBinariesResource$Response()` instead.
   *
   * This method sends `text/plain` and handles request body of type `text/plain`.
   */
  putBinariesResource(params: PutBinariesResource$Params, context?: HttpContext): Observable<Binary> {
    return this.putBinariesResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Binary>): Binary => r.body)
    );
  }

  /** Path part for operation `deleteBinariesResource()` */
  static readonly DeleteBinariesResourcePath = '/inventory/binaries/{id}';

  /**
   * Remove a stored file.
   *
   * Remove a managed object and its stored file by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> owner of the resource <b>OR</b> MANAGE_OBJECT_ADMIN permission on the resource
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteBinariesResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBinariesResource$Response(params: DeleteBinariesResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteBinariesResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove a stored file.
   *
   * Remove a managed object and its stored file by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> owner of the resource <b>OR</b> MANAGE_OBJECT_ADMIN permission on the resource
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteBinariesResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBinariesResource(params: DeleteBinariesResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteBinariesResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
