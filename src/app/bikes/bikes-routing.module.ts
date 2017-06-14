import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikesTableComponent } from './bikes-table/bikes-table.component';

const routes: Routes = [
  { path: '', component: BikesTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikesRoutingModule { }
