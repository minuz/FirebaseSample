import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DynamicFormsCoreModule } from '@ng2-dynamic-forms/core';
import { DynamicFormsNGBootstrapUIModule } from '@ng2-dynamic-forms/ui-ng-bootstrap';
import { TrucksRoutingModule } from './trucks-routing.module';

import { TrucksFormComponent } from './trucks-form/trucks-form.component';
import { TrucksTableComponent } from './trucks-table/trucks-table.component';

const ModuleComponents = [
    TrucksTableComponent,
    TrucksFormComponent
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        DynamicFormsCoreModule.forRoot(),
        DynamicFormsNGBootstrapUIModule,
        TrucksRoutingModule
    ],
    exports: [ModuleComponents],
    declarations: [ModuleComponents],
    entryComponents: [ModuleComponents]
})
export class TrucksModule { }
