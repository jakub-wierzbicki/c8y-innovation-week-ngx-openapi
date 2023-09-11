/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { PlatformApiService } from './services/platform-api.service';
import { AlarmApiService } from './services/alarm-api.service';
import { AlarmsService } from './services/alarms.service';
import { DeviceControlApiService } from './services/device-control-api.service';
import { OperationsService } from './services/operations.service';
import { NewDeviceRequestsService } from './services/new-device-requests.service';
import { DeviceCredentialsService } from './services/device-credentials.service';
import { BulkOperationsService } from './services/bulk-operations.service';
import { ApplicationApiService } from './services/application-api.service';
import { ApplicationsService } from './services/applications.service';
import { ApplicationBinariesService } from './services/application-binaries.service';
import { ApplicationVersionsService } from './services/application-versions.service';
import { BootstrapUserService } from './services/bootstrap-user.service';
import { CurrentApplicationService } from './services/current-application.service';
import { AuditApiService } from './services/audit-api.service';
import { AuditsService } from './services/audits.service';
import { EventApiService } from './services/event-api.service';
import { EventsService } from './services/events.service';
import { AttachmentsService } from './services/attachments.service';
import { InventoryApiService } from './services/inventory-api.service';
import { BinariesService } from './services/binaries.service';
import { ManagedObjectsService } from './services/managed-objects.service';
import { ChildOperationsService } from './services/child-operations.service';
import { IdentityApiService } from './services/identity-api.service';
import { ExternalIDsService } from './services/external-i-ds.service';
import { UserApiService } from './services/user-api.service';
import { CurrentUserService } from './services/current-user.service';
import { DevicePermissionsService } from './services/device-permissions.service';
import { InventoryRolesService } from './services/inventory-roles.service';
import { RolesService } from './services/roles.service';
import { UsersService } from './services/users.service';
import { GroupsService } from './services/groups.service';
import { MeasurementApiService } from './services/measurement-api.service';
import { MeasurementsService } from './services/measurements.service';
import { TokensService } from './services/tokens.service';
import { SubscriptionsService } from './services/subscriptions.service';
import { RealTimeNotificationApiService } from './services/real-time-notification-api.service';
import { RetentionRulesService } from './services/retention-rules.service';
import { TenantApiService } from './services/tenant-api.service';
import { TenantsService } from './services/tenants.service';
import { TenantApplicationsService } from './services/tenant-applications.service';
import { TrustedCertificatesService } from './services/trusted-certificates.service';
import { UsageStatisticsService } from './services/usage-statistics.service';
import { DeviceStatisticsService } from './services/device-statistics.service';
import { LoginOptionsService } from './services/login-options.service';
import { LoginTokensService } from './services/login-tokens.service';
import { OptionsService } from './services/options.service';
import { SystemOptionsService } from './services/system-options.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    PlatformApiService,
    AlarmApiService,
    AlarmsService,
    DeviceControlApiService,
    OperationsService,
    NewDeviceRequestsService,
    DeviceCredentialsService,
    BulkOperationsService,
    ApplicationApiService,
    ApplicationsService,
    ApplicationBinariesService,
    ApplicationVersionsService,
    BootstrapUserService,
    CurrentApplicationService,
    AuditApiService,
    AuditsService,
    EventApiService,
    EventsService,
    AttachmentsService,
    InventoryApiService,
    BinariesService,
    ManagedObjectsService,
    ChildOperationsService,
    IdentityApiService,
    ExternalIDsService,
    UserApiService,
    CurrentUserService,
    DevicePermissionsService,
    InventoryRolesService,
    RolesService,
    UsersService,
    GroupsService,
    MeasurementApiService,
    MeasurementsService,
    TokensService,
    SubscriptionsService,
    RealTimeNotificationApiService,
    RetentionRulesService,
    TenantApiService,
    TenantsService,
    TenantApplicationsService,
    TrustedCertificatesService,
    UsageStatisticsService,
    DeviceStatisticsService,
    LoginOptionsService,
    LoginTokensService,
    OptionsService,
    SystemOptionsService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor(
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
