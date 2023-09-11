/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApplicationUserCollection } from '../../models/application-user-collection';

export interface GetApplicationUserCollectionRepresentation$Params {
}

export function getApplicationUserCollectionRepresentation(http: HttpClient, rootUrl: string, params?: GetApplicationUserCollectionRepresentation$Params, context?: HttpContext): Observable<StrictHttpResponse<ApplicationUserCollection>> {
  const rb = new RequestBuilder(rootUrl, getApplicationUserCollectionRepresentation.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.applicationusercollection+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApplicationUserCollection>;
    })
  );
}

getApplicationUserCollectionRepresentation.PATH = '/application/currentApplication/subscriptions';
