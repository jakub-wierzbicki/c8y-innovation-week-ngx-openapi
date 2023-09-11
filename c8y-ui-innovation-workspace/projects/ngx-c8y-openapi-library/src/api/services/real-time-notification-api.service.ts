/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { postNotificationRealtimeResource } from '../fn/real-time-notification-api/post-notification-realtime-resource';
import { PostNotificationRealtimeResource$Params } from '../fn/real-time-notification-api/post-notification-realtime-resource';
import { RealtimeNotification } from '../models/realtime-notification';


/**
 * # Real-time operations
 *
 * Real-time notification services of Cumulocity IoT have their own subscription channel name format and URL. The real-time notifications are available for [Alarms](#tag/Alarm-notification-API), [Device control](#tag/Device-control-notification-API), [Events](#tag/Event-notification-API), [Inventory](#tag/Inventory-notification-API) and [Measurements](#tag/Measurement-notification-API).
 *
 * Note that when using long-polling, all POST requests must contain the Accept header, otherwise an empty response body will be returned.
 * All requests are sent to the <kbd>/notification/realtime</kbd> endpoint.
 *
 * > **&#9432; Info:** The long-polling interface is designed as a mechanism for custom applications to poll infrequent events from Cumulocity IoT. The long-polling interface is not designed as a mechanism to stream large data volumes (>100kB/sec) or frequent data (>50 events/sec) out of Cumulocity IoT. The usage of long-polling is not supported for such use cases.
 *
 * ## Handshake
 *
 * A real-time notifications client initiates the connection negotiation by sending a message to the `/meta/handshake` channel. In response, the client receives a `clientId` which identifies a conversation and must be passed in every non-handshake request.
 *
 * > **&#9432; Info:** The number of parallel connections that can be opened at the same time by a single user is limited. After exceeding this limit when a new connection is created, the oldest one will be closed and the newly created one will be added in its place. This limit is configurable and managed per installation. Its default value is 10 connections per user, subscription channel and server node.
 *
 * When using WebSockets, a property `ext` containing an authentication object must be sent. In case of basic authentication, the token is used with Base64 encoded credentials. In case of OAuth authentication, the request must have the cookie with the authorization name, holding the access token. Moreover, the XSRF token must be forwarded as part of the handshake message.
 *
 * ### Request example
 *
 * ```http
 * POST /notification/realtime
 * Authorization: <AUTHORIZATION>
 * Content-Type: application/json
 *
 * [
 *   {
 *     "channel": "/meta/handshake",
 *     "version": "1.0"
 *   }
 * ]
 * ```
 *
 * ### Response example
 *
 * A successful response looks like:
 *
 * ```json
 * [
 *   {
 *     "channel": "/meta/handshake",
 *     "clientId": "69wzith4teyensmz6zyk516um4yum0mvp",
 *     "minimumVersion": "1.0",
 *     "successful": true,
 *     "supportedConnectionTypes": [
 *       "long-polling",
 *       "smartrest-long-polling",
 *       "websocket"
 *     ],
 *     "version": "1.0"
 *   }
 * ]
 * ```
 *
 * When an error occurs, the response looks like:
 *
 * ```json
 * [
 *   {
 *     "channel": "/meta/handshake",
 *     "error": "403::Handshake denied",
 *     "successful": false
 *   }
 * ]
 * ```
 *
 * ## Subscribe
 *
 * A notification client can send subscribe messages and specify the desired channel to receive output messages from the Cumulocity IoT server. The client will receive the messages in succeeding connect requests.
 *
 * Each REST API that uses the real-time notification service has its own format for channel names. See [Device control](#tag/Device-control-notification-API) for more details.
 *
 * ### Request example
 *
 * ```http
 * POST /notification/realtime
 * Authorization: <AUTHORIZATION>
 * Content-Type: application/json
 *
 * [
 *   {
 *     "channel": "/meta/subscribe",
 *     "clientId": "69wzith4teyensmz6zyk516um4yum0mvp",
 *     "subscription": "/alarms/<DEVICE_ID>"
 *   }
 * ]
 * ```
 *
 * ### Response example
 *
 * ```json
 * [
 *   {
 *     "channel": "/meta/subscribe",
 *     "clientId": "69wzith4teyensmz6zyk516um4yum0mvp",
 *     "subscription": "/alarms/<DEVICE_ID>",
 *     "successful": true
 *   }
 * ]
 * ```
 *
 * ## Unsubscribe
 *
 * To stop receiving notifications from a channel, send a message to the channel `/meta/unsubscribe` in the same format as used during subscription.
 *
 * ### Request example
 *
 * Example Request:
 *
 * ```http
 * POST /notification/realtime
 * Authorization: <AUTHORIZATION>
 * Content-Type: application/json
 *
 * [
 *   {
 *     "channel": "/meta/unsubscribe",
 *     "clientId": "69wzith4teyensmz6zyk516um4yum0mvp",
 *     "subscription": "/alarms/<DEVICE_ID>"
 *   }
 * ]
 * ```
 *
 * ### Response example
 *
 * ```json
 * [
 *   {
 *     "channel": "/meta/unsubscribe",
 *     "subscription": "/alarms/<DEVICE_ID>",
 *     "successful": true
 *   }
 * ]
 * ```
 *
 * ## Connect
 *
 * After a Bayeux client has discovered the server's capabilities with a handshake exchange and subscribed to the desired channels, a connection is established by sending a message to the `/meta/connect` channel. This message may be transported over any of the transports returned by the server in the handshake response. Requests to the connect channel must be immediately repeated after every response to receive the next batch of notifications.
 *
 * ### Request example
 *
 * ```http
 * POST /notification/realtime
 * Authorization: <AUTHORIZATION>
 * Content-Type: application/json
 *
 * [
 *   {
 *     "channel": "/meta/connect",
 *     "clientId": "69wzith4teyensmz6zyk516um4yum0mvp",
 *     "connectionType": "long-polling",
 *     "advice": {
 *       "timeout": 5400000,
 *       "interval": 3000
 *     }
 *   }
 * ]
 * ```
 *
 * ### Response example
 *
 * ```json
 * [
 *   {
 *     "channel": "/meta/connect",
 *     "data": null,
 *     "advice": {
 *       "interval": 3000,
 *       "timeout": 5400000
 *     },
 *     "successful": true
 *   }
 * ]
 * ```
 *
 * ## Disconnect
 *
 * To stop receiving notifications from all channels and close the conversation, send a message to the `/meta/disconnect` channel.
 *
 * ### Request example
 *
 * ```http
 * POST /notification/realtime
 * Authorization: <AUTHORIZATION>
 * Content-Type: application/json
 *
 * [
 *   {
 *     "channel": "/meta/disconnect",
 *     "clientId": "69wzith4teyensmz6zyk516um4yum0mvp"
 *   }
 * ]
 * ```
 *
 * ### Response example
 *
 * ```json
 * [
 *   {
 *     "channel": "/meta/disconnect",
 *     "successful": true
 *   }
 * ]
 * ```
 */
@Injectable({ providedIn: 'root' })
export class RealTimeNotificationApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `postNotificationRealtimeResource()` */
  static readonly PostNotificationRealtimeResourcePath = '/notification/realtime';

  /**
   * Responsive communication.
   *
   * The Real-time notification API enables responsive communication from Cumulocity IoT over restricted networks towards clients such as web browser and mobile devices. All clients subscribe to so-called channels to receive messages. These channels are filled by Cumulocity IoT with the output of [Operations](#tag/Operations). In addition, particular system channels are used for the initial handshake with clients, subscription to channels, removal from channels and connection. The [Bayeux protocol](https://docs.cometd.org/current/reference/#_concepts_bayeux_protocol) over HTTPS or WSS is used as communication mechanism.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postNotificationRealtimeResource()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postNotificationRealtimeResource$Response(params: PostNotificationRealtimeResource$Params, context?: HttpContext): Observable<StrictHttpResponse<RealtimeNotification>> {
    return postNotificationRealtimeResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Responsive communication.
   *
   * The Real-time notification API enables responsive communication from Cumulocity IoT over restricted networks towards clients such as web browser and mobile devices. All clients subscribe to so-called channels to receive messages. These channels are filled by Cumulocity IoT with the output of [Operations](#tag/Operations). In addition, particular system channels are used for the initial handshake with clients, subscription to channels, removal from channels and connection. The [Bayeux protocol](https://docs.cometd.org/current/reference/#_concepts_bayeux_protocol) over HTTPS or WSS is used as communication mechanism.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postNotificationRealtimeResource$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postNotificationRealtimeResource(params: PostNotificationRealtimeResource$Params, context?: HttpContext): Observable<RealtimeNotification> {
    return this.postNotificationRealtimeResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<RealtimeNotification>): RealtimeNotification => r.body)
    );
  }

}
