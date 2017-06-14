import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrucksTableComponent } from './trucks-table/trucks-table.component';

const routes: Routes = [
  { path: '', component: TrucksTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrucksRoutingModule { }
