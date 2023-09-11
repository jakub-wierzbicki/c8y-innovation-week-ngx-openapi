/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CategoryOptions } from '../models/category-options';
import { deleteOptionResource } from '../fn/options/delete-option-resource';
import { DeleteOptionResource$Params } from '../fn/options/delete-option-resource';
import { getCategoryOptionResource } from '../fn/options/get-category-option-resource';
import { GetCategoryOptionResource$Params } from '../fn/options/get-category-option-resource';
import { getOptionCollectionResource } from '../fn/options/get-option-collection-resource';
import { GetOptionCollectionResource$Params } from '../fn/options/get-option-collection-resource';
import { getOptionResource } from '../fn/options/get-option-resource';
import { GetOptionResource$Params } from '../fn/options/get-option-resource';
import { Option } from '../models/option';
import { OptionCollection } from '../models/option-collection';
import { postOptionCollectionResource } from '../fn/options/post-option-collection-resource';
import { PostOptionCollectionResource$Params } from '../fn/options/post-option-collection-resource';
import { putCategoryOptionResource } from '../fn/options/put-category-option-resource';
import { PutCategoryOptionResource$Params } from '../fn/options/put-category-option-resource';
import { putOptionResource } from '../fn/options/put-option-resource';
import { PutOptionResource$Params } from '../fn/options/put-option-resource';


/**
 * API methods to retrieve the options configured in the tenant.
 *
 * > **&#9432; Info:** The Accept header should be provided in all POST/PUT requests, otherwise an empty response body will be returned.
 */
@Injectable({ providedIn: 'root' })
export class OptionsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getOptionCollectionResource()` */
  static readonly GetOptionCollectionResourcePath = '/tenant/options';

  /**
   * Retrieve all options.
   *
   * Retrieve all the options available on the tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_OPTION_MANAGEMENT_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOptionCollectionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOptionCollectionResource$Response(params?: GetOptionCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<OptionCollection>> {
    return getOptionCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all options.
   *
   * Retrieve all the options available on the tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_OPTION_MANAGEMENT_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getOptionCollectionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOptionCollectionResource(params?: GetOptionCollectionResource$Params, context?: HttpContext): Observable<OptionCollection> {
    return this.getOptionCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<OptionCollection>): OptionCollection => r.body)
    );
  }

  /** Path part for operation `postOptionCollectionResource()` */
  static readonly PostOptionCollectionResourcePath = '/tenant/options';

  /**
   * Create an option.
   *
   * Create an option on your tenant.
   *
   * Options are category-key-value tuples which store tenant configurations. Some categories of options allow the creation of new ones, while others are limited to predefined set of keys.
   *
   * Any option of any tenant can be defined as "non-editable" by the "management" tenant; once done, any PUT or DELETE requests made on that option by the tenant owner will result in a 403 error (Unauthorized).
   *
   * ### Default option categories
   *
   * **access.control**
   *
   * | Key |	Default value |	Predefined | Description |
   * |--|--|--|--|
   * | allow.origin | * | Yes | Comma separated list of domains allowed for execution of CORS. Wildcards are allowed (for example, `*.cumuclocity.com`) |
   *
   * **alarm.type.mapping**
   *
   * | Key  |	Predefined | Description |
   * |--|--|--|
   * | &lt;ALARM_TYPE> | No | Overrides the severity and alarm text for the alarm with type &lt;ALARM_TYPE>. The severity and text are specified as `<ALARM_SEVERITY>\|<ALARM_TEXT>`. If either part is empty, the value will not be overridden. If the severity is NONE, the alarm will be suppressed. Example: `"CRITICAL\|temperature too high"`|
   *
   * ### Encrypted credentials
   *
   * Adding a "credentials." prefix to the `key` will make the `value` of the option encrypted. When the option is  sent to a microservice, the "credentials." prefix is removed and the `value` is decrypted. For example:
   *
   * ```json
   * {
   *   "category": "secrets",
   *   "key": "credentials.mykey",
   *   "value": "myvalue"
   * }
   * ```
   *
   * In that particular example, the request will contain an additional header `"Mykey": "myvalue"`.
   *
   * <section><h5>Required roles</h5>
   * ROLE_OPTION_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postOptionCollectionResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.option+json` and handles request body of type `application/vnd.com.nsn.cumulocity.option+json`.
   */
  postOptionCollectionResource$Response(params: PostOptionCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Option>> {
    return postOptionCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Create an option.
   *
   * Create an option on your tenant.
   *
   * Options are category-key-value tuples which store tenant configurations. Some categories of options allow the creation of new ones, while others are limited to predefined set of keys.
   *
   * Any option of any tenant can be defined as "non-editable" by the "management" tenant; once done, any PUT or DELETE requests made on that option by the tenant owner will result in a 403 error (Unauthorized).
   *
   * ### Default option categories
   *
   * **access.control**
   *
   * | Key |	Default value |	Predefined | Description |
   * |--|--|--|--|
   * | allow.origin | * | Yes | Comma separated list of domains allowed for execution of CORS. Wildcards are allowed (for example, `*.cumuclocity.com`) |
   *
   * **alarm.type.mapping**
   *
   * | Key  |	Predefined | Description |
   * |--|--|--|
   * | &lt;ALARM_TYPE> | No | Overrides the severity and alarm text for the alarm with type &lt;ALARM_TYPE>. The severity and text are specified as `<ALARM_SEVERITY>\|<ALARM_TEXT>`. If either part is empty, the value will not be overridden. If the severity is NONE, the alarm will be suppressed. Example: `"CRITICAL\|temperature too high"`|
   *
   * ### Encrypted credentials
   *
   * Adding a "credentials." prefix to the `key` will make the `value` of the option encrypted. When the option is  sent to a microservice, the "credentials." prefix is removed and the `value` is decrypted. For example:
   *
   * ```json
   * {
   *   "category": "secrets",
   *   "key": "credentials.mykey",
   *   "value": "myvalue"
   * }
   * ```
   *
   * In that particular example, the request will contain an additional header `"Mykey": "myvalue"`.
   *
   * <section><h5>Required roles</h5>
   * ROLE_OPTION_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postOptionCollectionResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.option+json` and handles request body of type `application/vnd.com.nsn.cumulocity.option+json`.
   */
  postOptionCollectionResource(params: PostOptionCollectionResource$Params, context?: HttpContext): Observable<Option> {
    return this.postOptionCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Option>): Option => r.body)
    );
  }

  /** Path part for operation `getCategoryOptionResource()` */
  static readonly GetCategoryOptionResourcePath = '/tenant/options/{category}';

  /**
   * Retrieve all options by category.
   *
   * Retrieve all the options (by a specified category) on your tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_OPTION_MANAGEMENT_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCategoryOptionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategoryOptionResource$Response(params: GetCategoryOptionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryOptions>> {
    return getCategoryOptionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all options by category.
   *
   * Retrieve all the options (by a specified category) on your tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_OPTION_MANAGEMENT_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCategoryOptionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategoryOptionResource(params: GetCategoryOptionResource$Params, context?: HttpContext): Observable<CategoryOptions> {
    return this.getCategoryOptionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryOptions>): CategoryOptions => r.body)
    );
  }

  /** Path part for operation `putCategoryOptionResource()` */
  static readonly PutCategoryOptionResourcePath = '/tenant/options/{category}';

  /**
   * Update options by category.
   *
   * Update one or more options (by a specified category) on your tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_OPTION_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putCategoryOptionResource()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putCategoryOptionResource$Response(params: PutCategoryOptionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryOptions>> {
    return putCategoryOptionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Update options by category.
   *
   * Update one or more options (by a specified category) on your tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_OPTION_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putCategoryOptionResource$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putCategoryOptionResource(params: PutCategoryOptionResource$Params, context?: HttpContext): Observable<CategoryOptions> {
    return this.putCategoryOptionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryOptions>): CategoryOptions => r.body)
    );
  }

  /** Path part for operation `getOptionResource()` */
  static readonly GetOptionResourcePath = '/tenant/options/{category}/{key}';

  /**
   * Retrieve a specific option.
   *
   * Retrieve a specific option (by a given category and key) on your tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_OPTION_MANAGEMENT_READ
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOptionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOptionResource$Response(params: GetOptionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Option>> {
    return getOptionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a specific option.
   *
   * Retrieve a specific option (by a given category and key) on your tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_OPTION_MANAGEMENT_READ
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getOptionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOptionResource(params: GetOptionResource$Params, context?: HttpContext): Observable<Option> {
    return this.getOptionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Option>): Option => r.body)
    );
  }

  /** Path part for operation `putOptionResource()` */
  static readonly PutOptionResourcePath = '/tenant/options/{category}/{key}';

  /**
   * Update a specific option.
   *
   * Update the value of a specific option (by a given category and key) on your tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_OPTION_MANAGEMENT_ADMIN <b>AND</b> the option is editable
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putOptionResource()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putOptionResource$Response(params: PutOptionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Option>> {
    return putOptionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a specific option.
   *
   * Update the value of a specific option (by a given category and key) on your tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_OPTION_MANAGEMENT_ADMIN <b>AND</b> the option is editable
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putOptionResource$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putOptionResource(params: PutOptionResource$Params, context?: HttpContext): Observable<Option> {
    return this.putOptionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Option>): Option => r.body)
    );
  }

  /** Path part for operation `deleteOptionResource()` */
  static readonly DeleteOptionResourcePath = '/tenant/options/{category}/{key}';

  /**
   * Remove a specific option.
   *
   * Remove a specific option (by a given category and key) on your tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_OPTION_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteOptionResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOptionResource$Response(params: DeleteOptionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteOptionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove a specific option.
   *
   * Remove a specific option (by a given category and key) on your tenant.
   *
   * <section><h5>Required roles</h5>
   * ROLE_OPTION_MANAGEMENT_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteOptionResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOptionResource(params: DeleteOptionResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteOptionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
