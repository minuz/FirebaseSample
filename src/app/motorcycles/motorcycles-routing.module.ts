import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotorcyclesTableComponent } from './motorcycles-table/motorcycles-table.component';

const routes: Routes = [
  { path: '', component: MotorcyclesTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotorcyclesRoutingModule { }
