/* tslint:disable */
/* eslint-disable */
import { AlarmsApiResource } from '../models/alarms-api-resource';
import { AuditApiResource } from '../models/audit-api-resource';
import { DescSelf } from '../models/desc-self';
import { DeviceControlApiResource } from '../models/device-control-api-resource';
import { EventsApiResource } from '../models/events-api-resource';
import { IdentityApiResource } from '../models/identity-api-resource';
import { InventoryApiResource } from '../models/inventory-api-resource';
import { MeasurementApiResource } from '../models/measurement-api-resource';
import { TenantApiResource } from '../models/tenant-api-resource';
import { UserApiResource } from '../models/user-api-resource';
export interface PlatformApiResource {
  alarm?: AlarmsApiResource;
  audit?: AuditApiResource;
  deviceControl?: DeviceControlApiResource;
  event?: EventsApiResource;
  identity?: IdentityApiResource;
  inventory?: InventoryApiResource;
  measurement?: MeasurementApiResource;
  self?: DescSelf & any;
  tenant?: TenantApiResource;
  user?: UserApiResource;
}
