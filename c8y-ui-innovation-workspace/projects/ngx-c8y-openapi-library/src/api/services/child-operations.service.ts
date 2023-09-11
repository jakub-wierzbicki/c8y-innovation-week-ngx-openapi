/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteManagedObjectChildAdditionResource } from '../fn/child-operations/delete-managed-object-child-addition-resource';
import { DeleteManagedObjectChildAdditionResource$Params } from '../fn/child-operations/delete-managed-object-child-addition-resource';
import { deleteManagedObjectChildAdditionResourceMultiple } from '../fn/child-operations/delete-managed-object-child-addition-resource-multiple';
import { DeleteManagedObjectChildAdditionResourceMultiple$Params } from '../fn/child-operations/delete-managed-object-child-addition-resource-multiple';
import { deleteManagedObjectChildAssetResource } from '../fn/child-operations/delete-managed-object-child-asset-resource';
import { DeleteManagedObjectChildAssetResource$Params } from '../fn/child-operations/delete-managed-object-child-asset-resource';
import { deleteManagedObjectChildAssetResourceMultiple } from '../fn/child-operations/delete-managed-object-child-asset-resource-multiple';
import { DeleteManagedObjectChildAssetResourceMultiple$Params } from '../fn/child-operations/delete-managed-object-child-asset-resource-multiple';
import { deleteManagedObjectChildDeviceResource } from '../fn/child-operations/delete-managed-object-child-device-resource';
import { DeleteManagedObjectChildDeviceResource$Params } from '../fn/child-operations/delete-managed-object-child-device-resource';
import { deleteManagedObjectChildDeviceResourceMultiple } from '../fn/child-operations/delete-managed-object-child-device-resource-multiple';
import { DeleteManagedObjectChildDeviceResourceMultiple$Params } from '../fn/child-operations/delete-managed-object-child-device-resource-multiple';
import { getManagedObjectChildAdditionResource } from '../fn/child-operations/get-managed-object-child-addition-resource';
import { GetManagedObjectChildAdditionResource$Params } from '../fn/child-operations/get-managed-object-child-addition-resource';
import { getManagedObjectChildAdditionsResource } from '../fn/child-operations/get-managed-object-child-additions-resource';
import { GetManagedObjectChildAdditionsResource$Params } from '../fn/child-operations/get-managed-object-child-additions-resource';
import { getManagedObjectChildAssetResource } from '../fn/child-operations/get-managed-object-child-asset-resource';
import { GetManagedObjectChildAssetResource$Params } from '../fn/child-operations/get-managed-object-child-asset-resource';
import { getManagedObjectChildAssetsResource } from '../fn/child-operations/get-managed-object-child-assets-resource';
import { GetManagedObjectChildAssetsResource$Params } from '../fn/child-operations/get-managed-object-child-assets-resource';
import { getManagedObjectChildDeviceResource } from '../fn/child-operations/get-managed-object-child-device-resource';
import { GetManagedObjectChildDeviceResource$Params } from '../fn/child-operations/get-managed-object-child-device-resource';
import { getManagedObjectChildDevicesResource } from '../fn/child-operations/get-managed-object-child-devices-resource';
import { GetManagedObjectChildDevicesResource$Params } from '../fn/child-operations/get-managed-object-child-devices-resource';
import { ManagedObjectReference } from '../models/managed-object-reference';
import { ManagedObjectReferenceCollection } from '../models/managed-object-reference-collection';
import { postManagedObjectChildAdditionsResource } from '../fn/child-operations/post-managed-object-child-additions-resource';
import { PostManagedObjectChildAdditionsResource$Params } from '../fn/child-operations/post-managed-object-child-additions-resource';
import { postManagedObjectChildAssetsResource } from '../fn/child-operations/post-managed-object-child-assets-resource';
import { PostManagedObjectChildAssetsResource$Params } from '../fn/child-operations/post-managed-object-child-assets-resource';
import { postManagedObjectChildDevicesResource } from '../fn/child-operations/post-managed-object-child-devices-resource';
import { PostManagedObjectChildDevicesResource$Params } from '../fn/child-operations/post-managed-object-child-devices-resource';


/**
 * Managed objects can contain collections of references to child devices, additions and assets.
 *
 * > **&#9432; Info:** The Accept header should be provided in all POST requests, otherwise an empty response body will be returned.
 */
@Injectable({ providedIn: 'root' })
export class ChildOperationsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getManagedObjectChildAdditionsResource()` */
  static readonly GetManagedObjectChildAdditionsResourcePath = '/inventory/managedObjects/{id}/childAdditions';

  /**
   * Retrieve all child additions of a specific managed object.
   *
   * Retrieve all child additions of a specific managed object by a given ID, or a subset based on queries.
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_READ <b>OR</b> owner of the source <b>OR</b> MANAGE_OBJECT_READ permission on the source
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getManagedObjectChildAdditionsResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getManagedObjectChildAdditionsResource$Response(params: GetManagedObjectChildAdditionsResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ManagedObjectReferenceCollection>> {
    return getManagedObjectChildAdditionsResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all child additions of a specific managed object.
   *
   * Retrieve all child additions of a specific managed object by a given ID, or a subset based on queries.
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_READ <b>OR</b> owner of the source <b>OR</b> MANAGE_OBJECT_READ permission on the source
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getManagedObjectChildAdditionsResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getManagedObjectChildAdditionsResource(params: GetManagedObjectChildAdditionsResource$Params, context?: HttpContext): Observable<ManagedObjectReferenceCollection> {
    return this.getManagedObjectChildAdditionsResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<ManagedObjectReferenceCollection>): ManagedObjectReferenceCollection => r.body)
    );
  }

  /** Path part for operation `postManagedObjectChildAdditionsResource()` */
  static readonly PostManagedObjectChildAdditionsResourcePath = '/inventory/managedObjects/{id}/childAdditions';

  /**
   * Assign a managed object as child addition.
   *
   * The possible ways to assign child objects are:
   *
   * *  Assign an existing managed object (by a given child ID) as child addition of another managed object (by a given ID).
   * *  Assign multiple existing managed objects (by given child IDs) as child additions of another managed object (by a given ID).
   * *  Create a managed object in the inventory and assign it as a child addition to another managed object (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> ((owner of the source <b>OR</b> MANAGE_OBJECT_ADMIN permission on the source) <b>AND</b> (owner of the child <b>OR</b> MANAGE_OBJECT_ADMIN permission on the child))
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postManagedObjectChildAdditionsResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.managedobject+json` and handles request body of type `application/vnd.com.nsn.cumulocity.managedobject+json`.
   */
  postManagedObjectChildAdditionsResource$Response(params: PostManagedObjectChildAdditionsResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return postManagedObjectChildAdditionsResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Assign a managed object as child addition.
   *
   * The possible ways to assign child objects are:
   *
   * *  Assign an existing managed object (by a given child ID) as child addition of another managed object (by a given ID).
   * *  Assign multiple existing managed objects (by given child IDs) as child additions of another managed object (by a given ID).
   * *  Create a managed object in the inventory and assign it as a child addition to another managed object (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> ((owner of the source <b>OR</b> MANAGE_OBJECT_ADMIN permission on the source) <b>AND</b> (owner of the child <b>OR</b> MANAGE_OBJECT_ADMIN permission on the child))
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postManagedObjectChildAdditionsResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.managedobject+json` and handles request body of type `application/vnd.com.nsn.cumulocity.managedobject+json`.
   */
  postManagedObjectChildAdditionsResource(params: PostManagedObjectChildAdditionsResource$Params, context?: HttpContext): Observable<void> {
    return this.postManagedObjectChildAdditionsResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `deleteManagedObjectChildAdditionResourceMultiple()` */
  static readonly DeleteManagedObjectChildAdditionResourceMultiplePath = '/inventory/managedObjects/{id}/childAdditions';

  /**
   * Remove specific child additions from its parent.
   *
   * Remove specific child additions (by given child IDs) from its parent (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> owner of the source (parent) <b>OR</b> owner of the child <b>OR</b> MANAGE_OBJECT_ADMIN permission on the source (parent)
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteManagedObjectChildAdditionResourceMultiple()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.managedobjectreferencecollection+json` and handles request body of type `application/vnd.com.nsn.cumulocity.managedobjectreferencecollection+json`.
   */
  deleteManagedObjectChildAdditionResourceMultiple$Response(params: DeleteManagedObjectChildAdditionResourceMultiple$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteManagedObjectChildAdditionResourceMultiple(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove specific child additions from its parent.
   *
   * Remove specific child additions (by given child IDs) from its parent (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> owner of the source (parent) <b>OR</b> owner of the child <b>OR</b> MANAGE_OBJECT_ADMIN permission on the source (parent)
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteManagedObjectChildAdditionResourceMultiple$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.managedobjectreferencecollection+json` and handles request body of type `application/vnd.com.nsn.cumulocity.managedobjectreferencecollection+json`.
   */
  deleteManagedObjectChildAdditionResourceMultiple(params: DeleteManagedObjectChildAdditionResourceMultiple$Params, context?: HttpContext): Observable<void> {
    return this.deleteManagedObjectChildAdditionResourceMultiple$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getManagedObjectChildAdditionResource()` */
  static readonly GetManagedObjectChildAdditionResourcePath = '/inventory/managedObjects/{id}/childAdditions/{childId}';

  /**
   * Retrieve a specific child addition of a specific managed object.
   *
   * Retrieve a specific child addition (by a given child ID) of a specific managed object (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_READ <b>OR</b> MANAGE_OBJECT_READ permission on the source (parent)
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getManagedObjectChildAdditionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getManagedObjectChildAdditionResource$Response(params: GetManagedObjectChildAdditionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ManagedObjectReference & {
'self'?: any;
}>> {
    return getManagedObjectChildAdditionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a specific child addition of a specific managed object.
   *
   * Retrieve a specific child addition (by a given child ID) of a specific managed object (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_READ <b>OR</b> MANAGE_OBJECT_READ permission on the source (parent)
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getManagedObjectChildAdditionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getManagedObjectChildAdditionResource(params: GetManagedObjectChildAdditionResource$Params, context?: HttpContext): Observable<ManagedObjectReference & {
'self'?: any;
}> {
    return this.getManagedObjectChildAdditionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<ManagedObjectReference & {
'self'?: any;
}>): ManagedObjectReference & {
'self'?: any;
} => r.body)
    );
  }

  /** Path part for operation `deleteManagedObjectChildAdditionResource()` */
  static readonly DeleteManagedObjectChildAdditionResourcePath = '/inventory/managedObjects/{id}/childAdditions/{childId}';

  /**
   * Remove a specific child addition from its parent.
   *
   * Remove a specific child addition (by a given child ID) from its parent (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> owner of the source (parent) <b>OR</b> owner of the child <b>OR</b> MANAGE_OBJECT_ADMIN permission on the source (parent)
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteManagedObjectChildAdditionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteManagedObjectChildAdditionResource$Response(params: DeleteManagedObjectChildAdditionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteManagedObjectChildAdditionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove a specific child addition from its parent.
   *
   * Remove a specific child addition (by a given child ID) from its parent (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> owner of the source (parent) <b>OR</b> owner of the child <b>OR</b> MANAGE_OBJECT_ADMIN permission on the source (parent)
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteManagedObjectChildAdditionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteManagedObjectChildAdditionResource(params: DeleteManagedObjectChildAdditionResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteManagedObjectChildAdditionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getManagedObjectChildAssetsResource()` */
  static readonly GetManagedObjectChildAssetsResourcePath = '/inventory/managedObjects/{id}/childAssets';

  /**
   * Retrieve all child assets of a specific managed object.
   *
   * Retrieve all child assets of a specific managed object by a given ID, or a subset based on queries.
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_READ <b>OR</b> owner of the source <b>OR</b> MANAGE_OBJECT_READ permission on the source
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getManagedObjectChildAssetsResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getManagedObjectChildAssetsResource$Response(params: GetManagedObjectChildAssetsResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ManagedObjectReferenceCollection & {
'prev'?: any;
'self'?: any;
'next'?: any;
}>> {
    return getManagedObjectChildAssetsResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all child assets of a specific managed object.
   *
   * Retrieve all child assets of a specific managed object by a given ID, or a subset based on queries.
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_READ <b>OR</b> owner of the source <b>OR</b> MANAGE_OBJECT_READ permission on the source
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getManagedObjectChildAssetsResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getManagedObjectChildAssetsResource(params: GetManagedObjectChildAssetsResource$Params, context?: HttpContext): Observable<ManagedObjectReferenceCollection & {
'prev'?: any;
'self'?: any;
'next'?: any;
}> {
    return this.getManagedObjectChildAssetsResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<ManagedObjectReferenceCollection & {
'prev'?: any;
'self'?: any;
'next'?: any;
}>): ManagedObjectReferenceCollection & {
'prev'?: any;
'self'?: any;
'next'?: any;
} => r.body)
    );
  }

  /** Path part for operation `postManagedObjectChildAssetsResource()` */
  static readonly PostManagedObjectChildAssetsResourcePath = '/inventory/managedObjects/{id}/childAssets';

  /**
   * Assign a managed object as child asset.
   *
   * The possible ways to assign child objects are:
   *
   * *  Assign an existing managed object (by a given child ID) as child asset of another managed object (by a given ID).
   * *  Assign multiple existing managed objects (by given child IDs) as child assets of another managed object (by a given ID).
   * *  Create a managed object in the inventory and assign it as a child asset to another managed object (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> ((owner of the source <b>OR</b> MANAGE_OBJECT_ADMIN permission on the source) <b>AND</b> (owner of the child <b>OR</b> MANAGE_OBJECT_ADMIN permission on the child))
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postManagedObjectChildAssetsResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.managedobject+json` and handles request body of type `application/vnd.com.nsn.cumulocity.managedobject+json`.
   */
  postManagedObjectChildAssetsResource$Response(params: PostManagedObjectChildAssetsResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return postManagedObjectChildAssetsResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Assign a managed object as child asset.
   *
   * The possible ways to assign child objects are:
   *
   * *  Assign an existing managed object (by a given child ID) as child asset of another managed object (by a given ID).
   * *  Assign multiple existing managed objects (by given child IDs) as child assets of another managed object (by a given ID).
   * *  Create a managed object in the inventory and assign it as a child asset to another managed object (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> ((owner of the source <b>OR</b> MANAGE_OBJECT_ADMIN permission on the source) <b>AND</b> (owner of the child <b>OR</b> MANAGE_OBJECT_ADMIN permission on the child))
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postManagedObjectChildAssetsResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.managedobject+json` and handles request body of type `application/vnd.com.nsn.cumulocity.managedobject+json`.
   */
  postManagedObjectChildAssetsResource(params: PostManagedObjectChildAssetsResource$Params, context?: HttpContext): Observable<void> {
    return this.postManagedObjectChildAssetsResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `deleteManagedObjectChildAssetResourceMultiple()` */
  static readonly DeleteManagedObjectChildAssetResourceMultiplePath = '/inventory/managedObjects/{id}/childAssets';

  /**
   * Remove specific child assets from its parent.
   *
   * Remove specific child assets (by given child IDs) from its parent (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> owner of the source (parent) <b>OR</b> owner of the child <b>OR</b> MANAGE_OBJECT_ADMIN permission on the source (parent)
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteManagedObjectChildAssetResourceMultiple()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.managedobjectreferencecollection+json` and handles request body of type `application/vnd.com.nsn.cumulocity.managedobjectreferencecollection+json`.
   */
  deleteManagedObjectChildAssetResourceMultiple$Response(params: DeleteManagedObjectChildAssetResourceMultiple$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteManagedObjectChildAssetResourceMultiple(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove specific child assets from its parent.
   *
   * Remove specific child assets (by given child IDs) from its parent (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> owner of the source (parent) <b>OR</b> owner of the child <b>OR</b> MANAGE_OBJECT_ADMIN permission on the source (parent)
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteManagedObjectChildAssetResourceMultiple$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.managedobjectreferencecollection+json` and handles request body of type `application/vnd.com.nsn.cumulocity.managedobjectreferencecollection+json`.
   */
  deleteManagedObjectChildAssetResourceMultiple(params: DeleteManagedObjectChildAssetResourceMultiple$Params, context?: HttpContext): Observable<void> {
    return this.deleteManagedObjectChildAssetResourceMultiple$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getManagedObjectChildAssetResource()` */
  static readonly GetManagedObjectChildAssetResourcePath = '/inventory/managedObjects/{id}/childAssets/{childId}';

  /**
   * Retrieve a specific child asset of a specific managed object.
   *
   * Retrieve a specific child asset (by a given child ID) of a specific managed object (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_READ <b>OR</b> MANAGE_OBJECT_READ permission on the source (parent)
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getManagedObjectChildAssetResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getManagedObjectChildAssetResource$Response(params: GetManagedObjectChildAssetResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ManagedObjectReference & {
'self'?: any;
}>> {
    return getManagedObjectChildAssetResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a specific child asset of a specific managed object.
   *
   * Retrieve a specific child asset (by a given child ID) of a specific managed object (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_READ <b>OR</b> MANAGE_OBJECT_READ permission on the source (parent)
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getManagedObjectChildAssetResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getManagedObjectChildAssetResource(params: GetManagedObjectChildAssetResource$Params, context?: HttpContext): Observable<ManagedObjectReference & {
'self'?: any;
}> {
    return this.getManagedObjectChildAssetResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<ManagedObjectReference & {
'self'?: any;
}>): ManagedObjectReference & {
'self'?: any;
} => r.body)
    );
  }

  /** Path part for operation `deleteManagedObjectChildAssetResource()` */
  static readonly DeleteManagedObjectChildAssetResourcePath = '/inventory/managedObjects/{id}/childAssets/{childId}';

  /**
   * Remove a specific child asset from its parent.
   *
   * Remove a specific child asset (by a given child ID) from its parent (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> owner of the source (parent) <b>OR</b> owner of the child <b>OR</b> MANAGE_OBJECT_ADMIN permission on the source (parent)
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteManagedObjectChildAssetResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteManagedObjectChildAssetResource$Response(params: DeleteManagedObjectChildAssetResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteManagedObjectChildAssetResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove a specific child asset from its parent.
   *
   * Remove a specific child asset (by a given child ID) from its parent (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> owner of the source (parent) <b>OR</b> owner of the child <b>OR</b> MANAGE_OBJECT_ADMIN permission on the source (parent)
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteManagedObjectChildAssetResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteManagedObjectChildAssetResource(params: DeleteManagedObjectChildAssetResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteManagedObjectChildAssetResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getManagedObjectChildDevicesResource()` */
  static readonly GetManagedObjectChildDevicesResourcePath = '/inventory/managedObjects/{id}/childDevices';

  /**
   * Retrieve all child devices of a specific managed object.
   *
   * Retrieve all child devices of a specific managed object by a given ID, or a subset based on queries.
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_READ <b>OR</b> owner of the source <b>OR</b> MANAGE_OBJECT_READ permission on the source
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getManagedObjectChildDevicesResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getManagedObjectChildDevicesResource$Response(params: GetManagedObjectChildDevicesResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ManagedObjectReferenceCollection & {
'prev'?: any;
'self'?: any;
'next'?: any;
}>> {
    return getManagedObjectChildDevicesResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all child devices of a specific managed object.
   *
   * Retrieve all child devices of a specific managed object by a given ID, or a subset based on queries.
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_READ <b>OR</b> owner of the source <b>OR</b> MANAGE_OBJECT_READ permission on the source
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getManagedObjectChildDevicesResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getManagedObjectChildDevicesResource(params: GetManagedObjectChildDevicesResource$Params, context?: HttpContext): Observable<ManagedObjectReferenceCollection & {
'prev'?: any;
'self'?: any;
'next'?: any;
}> {
    return this.getManagedObjectChildDevicesResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<ManagedObjectReferenceCollection & {
'prev'?: any;
'self'?: any;
'next'?: any;
}>): ManagedObjectReferenceCollection & {
'prev'?: any;
'self'?: any;
'next'?: any;
} => r.body)
    );
  }

  /** Path part for operation `postManagedObjectChildDevicesResource()` */
  static readonly PostManagedObjectChildDevicesResourcePath = '/inventory/managedObjects/{id}/childDevices';

  /**
   * Assign a managed object as child device.
   *
   * The possible ways to assign child objects are:
   *
   * *  Assign an existing managed object (by a given child ID) as child device of another managed object (by a given ID).
   * *  Assign multiple existing managed objects (by given child IDs) as child devices of another managed object (by a given ID).
   * *  Create a managed object in the inventory and assign it as a child device to another managed object (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> ((owner of the source <b>OR</b> MANAGE_OBJECT_ADMIN permission on the source) <b>AND</b> (owner of the child <b>OR</b> MANAGE_OBJECT_ADMIN permission on the child))
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postManagedObjectChildDevicesResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.managedobject+json` and handles request body of type `application/vnd.com.nsn.cumulocity.managedobject+json`.
   */
  postManagedObjectChildDevicesResource$Response(params: PostManagedObjectChildDevicesResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return postManagedObjectChildDevicesResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Assign a managed object as child device.
   *
   * The possible ways to assign child objects are:
   *
   * *  Assign an existing managed object (by a given child ID) as child device of another managed object (by a given ID).
   * *  Assign multiple existing managed objects (by given child IDs) as child devices of another managed object (by a given ID).
   * *  Create a managed object in the inventory and assign it as a child device to another managed object (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> ((owner of the source <b>OR</b> MANAGE_OBJECT_ADMIN permission on the source) <b>AND</b> (owner of the child <b>OR</b> MANAGE_OBJECT_ADMIN permission on the child))
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postManagedObjectChildDevicesResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.managedobject+json` and handles request body of type `application/vnd.com.nsn.cumulocity.managedobject+json`.
   */
  postManagedObjectChildDevicesResource(params: PostManagedObjectChildDevicesResource$Params, context?: HttpContext): Observable<void> {
    return this.postManagedObjectChildDevicesResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `deleteManagedObjectChildDeviceResourceMultiple()` */
  static readonly DeleteManagedObjectChildDeviceResourceMultiplePath = '/inventory/managedObjects/{id}/childDevices';

  /**
   * Remove specific child devices from its parent.
   *
   * Remove specific child devices (by given child IDs) from its parent (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> owner of the source (parent) <b>OR</b> owner of the child <b>OR</b> MANAGE_OBJECT_ADMIN permission on the source (parent)
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteManagedObjectChildDeviceResourceMultiple()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.managedobjectreferencecollection+json` and handles request body of type `application/vnd.com.nsn.cumulocity.managedobjectreferencecollection+json`.
   */
  deleteManagedObjectChildDeviceResourceMultiple$Response(params: DeleteManagedObjectChildDeviceResourceMultiple$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteManagedObjectChildDeviceResourceMultiple(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove specific child devices from its parent.
   *
   * Remove specific child devices (by given child IDs) from its parent (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> owner of the source (parent) <b>OR</b> owner of the child <b>OR</b> MANAGE_OBJECT_ADMIN permission on the source (parent)
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteManagedObjectChildDeviceResourceMultiple$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.managedobjectreferencecollection+json` and handles request body of type `application/vnd.com.nsn.cumulocity.managedobjectreferencecollection+json`.
   */
  deleteManagedObjectChildDeviceResourceMultiple(params: DeleteManagedObjectChildDeviceResourceMultiple$Params, context?: HttpContext): Observable<void> {
    return this.deleteManagedObjectChildDeviceResourceMultiple$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getManagedObjectChildDeviceResource()` */
  static readonly GetManagedObjectChildDeviceResourcePath = '/inventory/managedObjects/{id}/childDevices/{childId}';

  /**
   * Retrieve a specific child device of a specific managed object.
   *
   * Retrieve a specific child device (by a given child ID) of a specific managed object (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_READ <b>OR</b> MANAGE_OBJECT_READ permission on the source (parent)
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getManagedObjectChildDeviceResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getManagedObjectChildDeviceResource$Response(params: GetManagedObjectChildDeviceResource$Params, context?: HttpContext): Observable<StrictHttpResponse<ManagedObjectReference & {
'self'?: any;
}>> {
    return getManagedObjectChildDeviceResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a specific child device of a specific managed object.
   *
   * Retrieve a specific child device (by a given child ID) of a specific managed object (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_READ <b>OR</b> MANAGE_OBJECT_READ permission on the source (parent)
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getManagedObjectChildDeviceResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getManagedObjectChildDeviceResource(params: GetManagedObjectChildDeviceResource$Params, context?: HttpContext): Observable<ManagedObjectReference & {
'self'?: any;
}> {
    return this.getManagedObjectChildDeviceResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<ManagedObjectReference & {
'self'?: any;
}>): ManagedObjectReference & {
'self'?: any;
} => r.body)
    );
  }

  /** Path part for operation `deleteManagedObjectChildDeviceResource()` */
  static readonly DeleteManagedObjectChildDeviceResourcePath = '/inventory/managedObjects/{id}/childDevices/{childId}';

  /**
   * Remove a specific child device from its parent.
   *
   * Remove a specific child device (by a given child ID) from its parent (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> owner of the source (parent) <b>OR</b> owner of the child <b>OR</b> MANAGE_OBJECT_ADMIN permission on the source (parent)
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteManagedObjectChildDeviceResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteManagedObjectChildDeviceResource$Response(params: DeleteManagedObjectChildDeviceResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteManagedObjectChildDeviceResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove a specific child device from its parent.
   *
   * Remove a specific child device (by a given child ID) from its parent (by a given ID).
   *
   * <section><h5>Required roles</h5>
   * ROLE_INVENTORY_ADMIN <b>OR</b> owner of the source (parent) <b>OR</b> owner of the child <b>OR</b> MANAGE_OBJECT_ADMIN permission on the source (parent)
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteManagedObjectChildDeviceResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteManagedObjectChildDeviceResource(params: DeleteManagedObjectChildDeviceResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteManagedObjectChildDeviceResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
