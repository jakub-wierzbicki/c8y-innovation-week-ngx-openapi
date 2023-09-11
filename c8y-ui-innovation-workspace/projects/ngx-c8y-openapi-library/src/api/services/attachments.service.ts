/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteEventBinaryResource } from '../fn/attachments/delete-event-binary-resource';
import { DeleteEventBinaryResource$Params } from '../fn/attachments/delete-event-binary-resource';
import { EventBinary } from '../models/event-binary';
import { getEventBinaryResource } from '../fn/attachments/get-event-binary-resource';
import { GetEventBinaryResource$Params } from '../fn/attachments/get-event-binary-resource';
import { postEventBinaryResource$FormData } from '../fn/attachments/post-event-binary-resource-form-data';
import { PostEventBinaryResource$FormData$Params } from '../fn/attachments/post-event-binary-resource-form-data';
import { postEventBinaryResource$Plain } from '../fn/attachments/post-event-binary-resource-plain';
import { PostEventBinaryResource$Plain$Params } from '../fn/attachments/post-event-binary-resource-plain';
import { putEventBinaryResource } from '../fn/attachments/put-event-binary-resource';
import { PutEventBinaryResource$Params } from '../fn/attachments/put-event-binary-resource';


/**
 * It is possible to store, retrieve and delete binaries for events. Each event can have only one binary attached.
 */
@Injectable({ providedIn: 'root' })
export class AttachmentsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getEventBinaryResource()` */
  static readonly GetEventBinaryResourcePath = '/event/events/{id}/binaries';

  /**
   * Retrieve the attached file of a specific event.
   *
   * Retrieve the attached file (binary) of a specific event by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_EVENT_READ <b>OR</b> EVENT_READ permission on the source
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEventBinaryResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEventBinaryResource$Response(params: GetEventBinaryResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return getEventBinaryResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve the attached file of a specific event.
   *
   * Retrieve the attached file (binary) of a specific event by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_EVENT_READ <b>OR</b> EVENT_READ permission on the source
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getEventBinaryResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEventBinaryResource(params: GetEventBinaryResource$Params, context?: HttpContext): Observable<Blob> {
    return this.getEventBinaryResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `putEventBinaryResource()` */
  static readonly PutEventBinaryResourcePath = '/event/events/{id}/binaries';

  /**
   * Replace the attached file of a specific event.
   *
   * Upload and replace the attached file (binary) of a specific event by a given ID.<br>
   * The size of the attachment is configurable, and the default size is 50 MiB. The default chunk size is 5MiB.
   *
   * <section><h5>Required roles</h5>
   * ROLE_EVENT_ADMIN <b>OR</b> owner of the source <b>OR</b> EVENT_ADMIN permission on the source
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putEventBinaryResource()` instead.
   *
   * This method sends `text/plain` and handles request body of type `text/plain`.
   */
  putEventBinaryResource$Response(params: PutEventBinaryResource$Params, context?: HttpContext): Observable<StrictHttpResponse<EventBinary>> {
    return putEventBinaryResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Replace the attached file of a specific event.
   *
   * Upload and replace the attached file (binary) of a specific event by a given ID.<br>
   * The size of the attachment is configurable, and the default size is 50 MiB. The default chunk size is 5MiB.
   *
   * <section><h5>Required roles</h5>
   * ROLE_EVENT_ADMIN <b>OR</b> owner of the source <b>OR</b> EVENT_ADMIN permission on the source
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putEventBinaryResource$Response()` instead.
   *
   * This method sends `text/plain` and handles request body of type `text/plain`.
   */
  putEventBinaryResource(params: PutEventBinaryResource$Params, context?: HttpContext): Observable<EventBinary> {
    return this.putEventBinaryResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<EventBinary>): EventBinary => r.body)
    );
  }

  /** Path part for operation `postEventBinaryResource()` */
  static readonly PostEventBinaryResourcePath = '/event/events/{id}/binaries';

  /**
   * Attach a file to a specific event.
   *
   * Upload a file (binary) as an attachment of a specific event by a given ID.
   * The size of the attachment is configurable, and the default size is 50 MiB. The default chunk size is 5MiB.
   *
   * > **&#9432; Info:** If there is a binary already attached to the event, the POST request results in a 409 error.
   *
   * When the file has been uploaded, the corresponding event contains the fragment `c8y_IsBinary` similar to:
   *
   * ```json
   * "c8y_IsBinary": {
   *     "name": "hello.txt",
   *     "length": 365,
   *     "type": "text/plain"
   * }
   * ```
   *
   * There are two request body schemas you can use for your POST requests.
   * `text/plain` is preselected (see below).
   * If you set it to `multipart/form-data` each value is sent as a block of data (body part), with a user agent-defined delimiter (`boundary`) separating each part.
   * The keys are given in the `Content-Disposition` header of each part.
   *
   * ```http
   * POST /event/events/{id}/binaries
   * Host: https://<TENANT_DOMAIN>
   * Authorization: <AUTHORIZATION>
   * Accept: application/json
   * Content-Type: multipart/form-data;boundary="boundary"
   *
   * --boundary
   * Content-Disposition: form-data; name="object"
   *
   * { "name": "hello.txt", "type": "text/plain" }
   * --boundary
   * Content-Disposition: form-data; name="file"; filename="hello.txt"
   * Content-Type: text/plain
   *
   * <FILE_CONTENTS>
   * --boundary--
   * ```
   *
   * <section><h5>Required roles</h5>
   * ROLE_EVENT_ADMIN <b>OR</b> owner of the source <b>OR</b> EVENT_ADMIN permission on the source
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postEventBinaryResource$Plain()` instead.
   *
   * This method sends `text/plain` and handles request body of type `text/plain`.
   */
  postEventBinaryResource$Plain$Response(params: PostEventBinaryResource$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<EventBinary>> {
    return postEventBinaryResource$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Attach a file to a specific event.
   *
   * Upload a file (binary) as an attachment of a specific event by a given ID.
   * The size of the attachment is configurable, and the default size is 50 MiB. The default chunk size is 5MiB.
   *
   * > **&#9432; Info:** If there is a binary already attached to the event, the POST request results in a 409 error.
   *
   * When the file has been uploaded, the corresponding event contains the fragment `c8y_IsBinary` similar to:
   *
   * ```json
   * "c8y_IsBinary": {
   *     "name": "hello.txt",
   *     "length": 365,
   *     "type": "text/plain"
   * }
   * ```
   *
   * There are two request body schemas you can use for your POST requests.
   * `text/plain` is preselected (see below).
   * If you set it to `multipart/form-data` each value is sent as a block of data (body part), with a user agent-defined delimiter (`boundary`) separating each part.
   * The keys are given in the `Content-Disposition` header of each part.
   *
   * ```http
   * POST /event/events/{id}/binaries
   * Host: https://<TENANT_DOMAIN>
   * Authorization: <AUTHORIZATION>
   * Accept: application/json
   * Content-Type: multipart/form-data;boundary="boundary"
   *
   * --boundary
   * Content-Disposition: form-data; name="object"
   *
   * { "name": "hello.txt", "type": "text/plain" }
   * --boundary
   * Content-Disposition: form-data; name="file"; filename="hello.txt"
   * Content-Type: text/plain
   *
   * <FILE_CONTENTS>
   * --boundary--
   * ```
   *
   * <section><h5>Required roles</h5>
   * ROLE_EVENT_ADMIN <b>OR</b> owner of the source <b>OR</b> EVENT_ADMIN permission on the source
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postEventBinaryResource$Plain$Response()` instead.
   *
   * This method sends `text/plain` and handles request body of type `text/plain`.
   */
  postEventBinaryResource$Plain(params: PostEventBinaryResource$Plain$Params, context?: HttpContext): Observable<EventBinary> {
    return this.postEventBinaryResource$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<EventBinary>): EventBinary => r.body)
    );
  }

  /**
   * Attach a file to a specific event.
   *
   * Upload a file (binary) as an attachment of a specific event by a given ID.
   * The size of the attachment is configurable, and the default size is 50 MiB. The default chunk size is 5MiB.
   *
   * > **&#9432; Info:** If there is a binary already attached to the event, the POST request results in a 409 error.
   *
   * When the file has been uploaded, the corresponding event contains the fragment `c8y_IsBinary` similar to:
   *
   * ```json
   * "c8y_IsBinary": {
   *     "name": "hello.txt",
   *     "length": 365,
   *     "type": "text/plain"
   * }
   * ```
   *
   * There are two request body schemas you can use for your POST requests.
   * `text/plain` is preselected (see below).
   * If you set it to `multipart/form-data` each value is sent as a block of data (body part), with a user agent-defined delimiter (`boundary`) separating each part.
   * The keys are given in the `Content-Disposition` header of each part.
   *
   * ```http
   * POST /event/events/{id}/binaries
   * Host: https://<TENANT_DOMAIN>
   * Authorization: <AUTHORIZATION>
   * Accept: application/json
   * Content-Type: multipart/form-data;boundary="boundary"
   *
   * --boundary
   * Content-Disposition: form-data; name="object"
   *
   * { "name": "hello.txt", "type": "text/plain" }
   * --boundary
   * Content-Disposition: form-data; name="file"; filename="hello.txt"
   * Content-Type: text/plain
   *
   * <FILE_CONTENTS>
   * --boundary--
   * ```
   *
   * <section><h5>Required roles</h5>
   * ROLE_EVENT_ADMIN <b>OR</b> owner of the source <b>OR</b> EVENT_ADMIN permission on the source
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postEventBinaryResource$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postEventBinaryResource$FormData$Response(params: PostEventBinaryResource$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<EventBinary>> {
    return postEventBinaryResource$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * Attach a file to a specific event.
   *
   * Upload a file (binary) as an attachment of a specific event by a given ID.
   * The size of the attachment is configurable, and the default size is 50 MiB. The default chunk size is 5MiB.
   *
   * > **&#9432; Info:** If there is a binary already attached to the event, the POST request results in a 409 error.
   *
   * When the file has been uploaded, the corresponding event contains the fragment `c8y_IsBinary` similar to:
   *
   * ```json
   * "c8y_IsBinary": {
   *     "name": "hello.txt",
   *     "length": 365,
   *     "type": "text/plain"
   * }
   * ```
   *
   * There are two request body schemas you can use for your POST requests.
   * `text/plain` is preselected (see below).
   * If you set it to `multipart/form-data` each value is sent as a block of data (body part), with a user agent-defined delimiter (`boundary`) separating each part.
   * The keys are given in the `Content-Disposition` header of each part.
   *
   * ```http
   * POST /event/events/{id}/binaries
   * Host: https://<TENANT_DOMAIN>
   * Authorization: <AUTHORIZATION>
   * Accept: application/json
   * Content-Type: multipart/form-data;boundary="boundary"
   *
   * --boundary
   * Content-Disposition: form-data; name="object"
   *
   * { "name": "hello.txt", "type": "text/plain" }
   * --boundary
   * Content-Disposition: form-data; name="file"; filename="hello.txt"
   * Content-Type: text/plain
   *
   * <FILE_CONTENTS>
   * --boundary--
   * ```
   *
   * <section><h5>Required roles</h5>
   * ROLE_EVENT_ADMIN <b>OR</b> owner of the source <b>OR</b> EVENT_ADMIN permission on the source
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postEventBinaryResource$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postEventBinaryResource$FormData(params: PostEventBinaryResource$FormData$Params, context?: HttpContext): Observable<EventBinary> {
    return this.postEventBinaryResource$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<EventBinary>): EventBinary => r.body)
    );
  }

  /** Path part for operation `deleteEventBinaryResource()` */
  static readonly DeleteEventBinaryResourcePath = '/event/events/{id}/binaries';

  /**
   * Remove the attached file from a specific event.
   *
   * Remove the attached file (binary) from a specific event by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_EVENT_ADMIN <b>OR</b> owner of the source <b>OR</b> EVENT_ADMIN permission on the source
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteEventBinaryResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEventBinaryResource$Response(params: DeleteEventBinaryResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteEventBinaryResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove the attached file from a specific event.
   *
   * Remove the attached file (binary) from a specific event by a given ID.
   *
   * <section><h5>Required roles</h5>
   * ROLE_EVENT_ADMIN <b>OR</b> owner of the source <b>OR</b> EVENT_ADMIN permission on the source
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteEventBinaryResource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEventBinaryResource(params: DeleteEventBinaryResource$Params, context?: HttpContext): Observable<void> {
    return this.deleteEventBinaryResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
