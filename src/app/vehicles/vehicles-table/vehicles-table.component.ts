import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// RxJs
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/takeUntil';

// Firebase
import { UserInfo } from 'firebase/app';

// Modal
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

// Models
import { TableHeader } from 'app/shared/models/table.models';
import { VehiclesRoutes } from 'app/shared/models/enums';
import { IVehicle } from 'app/shared/models/vehicles';
import { RouteData } from 'app/shared/models/route-data.model';
import { FirestoreCollection } from 'app/shared/models/enums';

// Services
import { AuthService } from 'app/services/auth.service';
import { VehiclesService } from 'app/vehicles/services/vehicles.service';

// Others
import { VehiclesFormComponent } from 'app/vehicles/vehicles-form/vehicles-form.component';
import { FormFactory } from 'app/shared/util';

@Component({
  selector: 'app-vehicles-table',
  templateUrl: './vehicles-table.component.html',
  styleUrls: ['./vehicles-table.component.scss'],
  providers: [VehiclesService]
})
export class VehiclesTableComponent implements OnInit, OnDestroy {

  headers: TableHeader[];
  collection: FirestoreCollection;
  user: UserInfo;

  data$: Observable<IVehicle[]>;
  modalRef: BsModalRef;
  destroy$ = new Subject<boolean>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private modalService: BsModalService,
    private vehicleService: VehiclesService,
    private authService: AuthService
  ) {
    activatedRoute.data
      .takeUntil(this.destroy$)
      .map(routeData => routeData.dto)
      .subscribe((routeData: RouteData) => {
        this.headers = routeData.tableHeaders;
        this.collection = routeData.firestoreCollection;
      })
  }

  ngOnInit() {
    this.data$ = this.authService.getUserInfo()
      .takeUntil(this.destroy$)
      .do(user => this.user = user)
      .mergeMap(user => this.vehicleService.GetWhere(this.collection, 'uid', '==', user.uid));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  delete(itemId) {
    this.vehicleService.Delete(this.collection, itemId);
  }

  openModal(item) {
    this.modalRef = this.modalService.show(VehiclesFormComponent, { class: 'modal-lg' });
    this.modalRef.content.vehicle = item;
    this.modalRef.content.initForm(this.collection, this.user);
  }

}
