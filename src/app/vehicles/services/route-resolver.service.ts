import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { VehiclesRoutes, AppRoutes, FirestoreCollection } from 'app/shared/models/enums';
import { RouteData } from 'app/shared/models/route-data.model';
import { TableFactory } from 'app/shared/util';
import { AuthService } from 'app/services/auth.service';

@Injectable()
export class RouteResolverService implements Resolve<RouteData> {

  constructor(private authService: AuthService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RouteData> {

    const vehicleType = route.url.map(segments => segments.path)[0];
    const tableHeaders = TableFactory.GetTableHeaders(<VehiclesRoutes>vehicleType);
    const firestoreCollection = <FirestoreCollection>vehicleType;
    return Observable.of({ tableHeaders, firestoreCollection });

  }
}
