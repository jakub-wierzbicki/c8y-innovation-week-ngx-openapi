/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { BulkNewDeviceRequest } from '../models/bulk-new-device-request';
import { DeviceCredentials } from '../models/device-credentials';
import { postBulkNewDeviceRequestCollectionResource } from '../fn/device-credentials/post-bulk-new-device-request-collection-resource';
import { PostBulkNewDeviceRequestCollectionResource$Params } from '../fn/device-credentials/post-bulk-new-device-request-collection-resource';
import { postDeviceCredentialsCollectionResource } from '../fn/device-credentials/post-device-credentials-collection-resource';
import { PostDeviceCredentialsCollectionResource$Params } from '../fn/device-credentials/post-device-credentials-collection-resource';


/**
 * API methods to create device credentials in Cumulocity IoT.
 *
 * Device credentials can be enquired by devices that do not have credentials for accessing a tenant yet.
 * Since the device does not have credentials yet, a set of fixed credentials is used for this API.
 * The credentials can be obtained by [contacting support](https://cumulocity.com/guides/about-doc/contacting-support/).
 *
 * > **⚠️ Important:** Do not use your tenant credentials with this API.
 *
 * > **&#9432; Info:** The Accept header should be provided in all POST requests, otherwise an empty response body will be returned.
 */
@Injectable({ providedIn: 'root' })
export class DeviceCredentialsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `postDeviceCredentialsCollectionResource()` */
  static readonly PostDeviceCredentialsCollectionResourcePath = '/devicecontrol/deviceCredentials';

  /**
   * Create device credentials.
   *
   * Create device credentials.
   *
   * <section><h5>Required roles</h5>
   * ROLE_DEVICE_BOOTSTRAP
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postDeviceCredentialsCollectionResource()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.devicecredentials+json` and handles request body of type `application/vnd.com.nsn.cumulocity.devicecredentials+json`.
   */
  postDeviceCredentialsCollectionResource$Response(params: PostDeviceCredentialsCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<DeviceCredentials>> {
    return postDeviceCredentialsCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Create device credentials.
   *
   * Create device credentials.
   *
   * <section><h5>Required roles</h5>
   * ROLE_DEVICE_BOOTSTRAP
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postDeviceCredentialsCollectionResource$Response()` instead.
   *
   * This method sends `application/vnd.com.nsn.cumulocity.devicecredentials+json` and handles request body of type `application/vnd.com.nsn.cumulocity.devicecredentials+json`.
   */
  postDeviceCredentialsCollectionResource(params: PostDeviceCredentialsCollectionResource$Params, context?: HttpContext): Observable<DeviceCredentials> {
    return this.postDeviceCredentialsCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<DeviceCredentials>): DeviceCredentials => r.body)
    );
  }

  /** Path part for operation `postBulkNewDeviceRequestCollectionResource()` */
  static readonly PostBulkNewDeviceRequestCollectionResourcePath = '/devicecontrol/bulkNewDeviceRequests';

  /**
   * Create a bulk device credentials request.
   *
   * Create a bulk device credentials request.
   *
   * Device credentials and basic device representation can be provided within a CSV file which must be UTF-8 or ANSI encoded. The CSV file must have two sections.
   *
   * The first section is the first line of the CSV file. This line contains column names (headers):
   *
   * |Name|Mandatory|Description|
   * |--- |--- |--- |
   * |ID|Yes|The external ID of a device.|
   * |CREDENTIALS|Yes*|Password for the device's user. Mandatory, unless AUTH_TYPE is "CERTIFICATES", then CREDENTIALS can be skipped.|
   * |AUTH_TYPE|No|Required authentication type for the device's user. If the device uses credentials, this can be skipped or filled with "BASIC". Devices that use certificates must set "CERTIFICATES".|
   * |TENANT|No|The ID of the tenant for which the registration is executed (only allowed for the management tenant).|
   * |TYPE|No|The type of the device representation.|
   * |NAME|No|The name of the device representation.|
   * |ICCID|No|The ICCID of the device (SIM card number). If the ICCID appears in file, the import adds a fragment `c8y_Mobile.iccid`. The ICCID value is not mandatory for each row, see the example for an HTTP request below.|
   * |IDTYPE|No|The type of the external ID. If IDTYPE doesn't appear in the file, the default value is used. The default value is `c8y_Serial`. The IDTYPE value is not mandatory for each row, see the example for an HTTP request below.|
   * |PATH|No|The path in the groups hierarchy where the device is added. PATH contains the name of each group separated by `/`, that is: `main_group/sub_group/.../last_sub_group`. If a group does not exist, the import creates the group.|
   * |SHELL|No|If this column contains a value of 1, the import adds the SHELL feature to the device (specifically the `c8y_SupportedOperations` fragment). The SHELL value is not mandatory for each row, see the example for an HTTP request below.|
   *
   * Section two is the rest of the CSV file. Section two contains the device information. The order and quantity of the values must be the same as of the headers.
   *
   * A separator is automatically obtained from the CSV file. Valid separator values are: `\t` (tabulation mark), `;` (semicolon) and `,` (comma).
   *
   * > **⚠️ Important:** The CSV file needs the "com_cumulocity_model_Agent.active" header with a value of "true" to be added to the request.
   *
   * > **&#9432; Info:** A bulk registration creates an elementary representation of the device. Then, the device needs to update it to a full representation with its own status. The device is ready to use only after it is updated to the full representation. Also see [credentials upload](https://cumulocity.com/guides/users-guide/device-management/#creds-upload) and [device integration](https://cumulocity.com/guides/device-sdk/rest/#device-integration).
   *
   * A CSV file can appear in many forms (with regard to the optional tenant column and the occurrence of device information):
   *
   * * If a user is logged in as the management tenant, then the columns ID, CREDENTIALS and TENANT are mandatory, and the device credentials will be created for the tenant mentioned in the TENANT column.
   * * If a user is logged in as a different tenant, for example, as `sample_tenant`, then the columns ID and CREDENTIALS are mandatory (if the file contains the TENANT column, it is ignored and the device credentials will be created for the tenant that is logged in).
   * * If a user wants to add information about the device, the columns TYPE and NAME must appear in the CSV file.
   * * If a user wants to add information about a SIM card number, the columns TYPE, NAME and ICCID must appear in the CSV file.
   * * If a user wants to change the type of external ID, the columns TYPE, NAME and IDTYPE must appear in the CSV file.
   * * If a user wants to add a device to a group, the columns TYPE, NAME and PATH must appear in the CSV file.
   * * If a user wants to add the SHELL feature, the columns TYPE, NAME and SHELL must appear in the CSV file and the column SHELL must contain a value of 1.
   *
   * It is possible to define a custom [external ID](#tag/External-IDs) mapping and some custom device properties which are added to newly created devices during registration:
   *
   * * To add a custom external ID mapping, enter the external ID type as the header of the last column with the prefix "external-", for example, to add an external ID mapping of type `c8y_Imei`, enter `external-c8y_Imei` in the last column header. The value of this external ID type should be set in the corresponding column of the data rows.
   * * To add a custom property to a registered device, enter the custom property name as a header, for example, "myCustomProperty", and the value would be in the rows below.
   *
   * The custom device properties mapping has the following limitations:
   *
   * * Braces '{}' used in data rows will be interpreted as strings of "{}". The system will interpret the value as an object when some custom property is added, for example, put `com_cumulocity_model_Agent.active` into the headers row and `true` into the data row to create an object `"com_cumulocity_model_Agent": {"active": "true"}"`.
   * * It is not possible to add array values via bulk registration.
   *
   * Example file:
   *
   * ```csv
   * ID;CREDENTIALS;TYPE;NAME;ICCID;IDTYPE;PATH;SHELL
   * id_101;AbcD1234!1234AbcD;type_of_device;Device 101;111111111;;csv device/subgroup0;1
   * id_102;AbcD1234!1234AbcD;type_of_device;Device 102;222222222;;csv device/subgroup0;0
   * id_111;AbcD1234!1234AbcD;type_of_device;Device 111;333333333;c8y_Imei;csv device1/subgroup1;0
   * id_112;AbcD1234!1234AbcD;type_of_device;Device 112;444444444;;csv device1/subgroup1;1
   * id_121;AbcD1234!1234AbcD;type_of_device;Device 121;555555555;;csv device1/subgroup2;1
   * id_122;AbcD1234!1234AbcD;type_of_device;Device 122;;;csv device1/subgroup2;
   * id_131;AbcD1234!1234AbcD;type_of_device;Device 131;;;csv device1/subgroup3;
   * ```
   *
   * There is also a simple registration method that creates all registration requests at once, then each one needs to go through regular acceptance.
   * This simple registration only makes use of the ID and PATH fields from the list above.
   *
   * <section><h5>Required roles</h5>
   * ROLE_DEVICE_CONTROL_ADMIN
   * </section>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postBulkNewDeviceRequestCollectionResource()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postBulkNewDeviceRequestCollectionResource$Response(params: PostBulkNewDeviceRequestCollectionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<BulkNewDeviceRequest>> {
    return postBulkNewDeviceRequestCollectionResource(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a bulk device credentials request.
   *
   * Create a bulk device credentials request.
   *
   * Device credentials and basic device representation can be provided within a CSV file which must be UTF-8 or ANSI encoded. The CSV file must have two sections.
   *
   * The first section is the first line of the CSV file. This line contains column names (headers):
   *
   * |Name|Mandatory|Description|
   * |--- |--- |--- |
   * |ID|Yes|The external ID of a device.|
   * |CREDENTIALS|Yes*|Password for the device's user. Mandatory, unless AUTH_TYPE is "CERTIFICATES", then CREDENTIALS can be skipped.|
   * |AUTH_TYPE|No|Required authentication type for the device's user. If the device uses credentials, this can be skipped or filled with "BASIC". Devices that use certificates must set "CERTIFICATES".|
   * |TENANT|No|The ID of the tenant for which the registration is executed (only allowed for the management tenant).|
   * |TYPE|No|The type of the device representation.|
   * |NAME|No|The name of the device representation.|
   * |ICCID|No|The ICCID of the device (SIM card number). If the ICCID appears in file, the import adds a fragment `c8y_Mobile.iccid`. The ICCID value is not mandatory for each row, see the example for an HTTP request below.|
   * |IDTYPE|No|The type of the external ID. If IDTYPE doesn't appear in the file, the default value is used. The default value is `c8y_Serial`. The IDTYPE value is not mandatory for each row, see the example for an HTTP request below.|
   * |PATH|No|The path in the groups hierarchy where the device is added. PATH contains the name of each group separated by `/`, that is: `main_group/sub_group/.../last_sub_group`. If a group does not exist, the import creates the group.|
   * |SHELL|No|If this column contains a value of 1, the import adds the SHELL feature to the device (specifically the `c8y_SupportedOperations` fragment). The SHELL value is not mandatory for each row, see the example for an HTTP request below.|
   *
   * Section two is the rest of the CSV file. Section two contains the device information. The order and quantity of the values must be the same as of the headers.
   *
   * A separator is automatically obtained from the CSV file. Valid separator values are: `\t` (tabulation mark), `;` (semicolon) and `,` (comma).
   *
   * > **⚠️ Important:** The CSV file needs the "com_cumulocity_model_Agent.active" header with a value of "true" to be added to the request.
   *
   * > **&#9432; Info:** A bulk registration creates an elementary representation of the device. Then, the device needs to update it to a full representation with its own status. The device is ready to use only after it is updated to the full representation. Also see [credentials upload](https://cumulocity.com/guides/users-guide/device-management/#creds-upload) and [device integration](https://cumulocity.com/guides/device-sdk/rest/#device-integration).
   *
   * A CSV file can appear in many forms (with regard to the optional tenant column and the occurrence of device information):
   *
   * * If a user is logged in as the management tenant, then the columns ID, CREDENTIALS and TENANT are mandatory, and the device credentials will be created for the tenant mentioned in the TENANT column.
   * * If a user is logged in as a different tenant, for example, as `sample_tenant`, then the columns ID and CREDENTIALS are mandatory (if the file contains the TENANT column, it is ignored and the device credentials will be created for the tenant that is logged in).
   * * If a user wants to add information about the device, the columns TYPE and NAME must appear in the CSV file.
   * * If a user wants to add information about a SIM card number, the columns TYPE, NAME and ICCID must appear in the CSV file.
   * * If a user wants to change the type of external ID, the columns TYPE, NAME and IDTYPE must appear in the CSV file.
   * * If a user wants to add a device to a group, the columns TYPE, NAME and PATH must appear in the CSV file.
   * * If a user wants to add the SHELL feature, the columns TYPE, NAME and SHELL must appear in the CSV file and the column SHELL must contain a value of 1.
   *
   * It is possible to define a custom [external ID](#tag/External-IDs) mapping and some custom device properties which are added to newly created devices during registration:
   *
   * * To add a custom external ID mapping, enter the external ID type as the header of the last column with the prefix "external-", for example, to add an external ID mapping of type `c8y_Imei`, enter `external-c8y_Imei` in the last column header. The value of this external ID type should be set in the corresponding column of the data rows.
   * * To add a custom property to a registered device, enter the custom property name as a header, for example, "myCustomProperty", and the value would be in the rows below.
   *
   * The custom device properties mapping has the following limitations:
   *
   * * Braces '{}' used in data rows will be interpreted as strings of "{}". The system will interpret the value as an object when some custom property is added, for example, put `com_cumulocity_model_Agent.active` into the headers row and `true` into the data row to create an object `"com_cumulocity_model_Agent": {"active": "true"}"`.
   * * It is not possible to add array values via bulk registration.
   *
   * Example file:
   *
   * ```csv
   * ID;CREDENTIALS;TYPE;NAME;ICCID;IDTYPE;PATH;SHELL
   * id_101;AbcD1234!1234AbcD;type_of_device;Device 101;111111111;;csv device/subgroup0;1
   * id_102;AbcD1234!1234AbcD;type_of_device;Device 102;222222222;;csv device/subgroup0;0
   * id_111;AbcD1234!1234AbcD;type_of_device;Device 111;333333333;c8y_Imei;csv device1/subgroup1;0
   * id_112;AbcD1234!1234AbcD;type_of_device;Device 112;444444444;;csv device1/subgroup1;1
   * id_121;AbcD1234!1234AbcD;type_of_device;Device 121;555555555;;csv device1/subgroup2;1
   * id_122;AbcD1234!1234AbcD;type_of_device;Device 122;;;csv device1/subgroup2;
   * id_131;AbcD1234!1234AbcD;type_of_device;Device 131;;;csv device1/subgroup3;
   * ```
   *
   * There is also a simple registration method that creates all registration requests at once, then each one needs to go through regular acceptance.
   * This simple registration only makes use of the ID and PATH fields from the list above.
   *
   * <section><h5>Required roles</h5>
   * ROLE_DEVICE_CONTROL_ADMIN
   * </section>
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postBulkNewDeviceRequestCollectionResource$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postBulkNewDeviceRequestCollectionResource(params: PostBulkNewDeviceRequestCollectionResource$Params, context?: HttpContext): Observable<BulkNewDeviceRequest> {
    return this.postBulkNewDeviceRequestCollectionResource$Response(params, context).pipe(
      map((r: StrictHttpResponse<BulkNewDeviceRequest>): BulkNewDeviceRequest => r.body)
    );
  }

}
