/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface DeleteGroupRoleReferenceResource$Params {

/**
 * Unique identifier of a Cumulocity IoT tenant.
 */
  tenantId: string;

/**
 * Unique identifier of the user group.
 */
  groupId: number;

/**
 * Unique identifier of the user role.
 */
  roleId: string;
}

export function deleteGroupRoleReferenceResource(http: HttpClient, rootUrl: string, params: DeleteGroupRoleReferenceResource$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, deleteGroupRoleReferenceResource.PATH, 'delete');
  if (params) {
    rb.path('tenantId', params.tenantId, {});
    rb.path('groupId', params.groupId, {});
    rb.path('roleId', params.roleId, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

deleteGroupRoleReferenceResource.PATH = '/user/{tenantId}/groups/{groupId}/roles/{roleId}';
