import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DynamicFormsCoreModule } from '@ng2-dynamic-forms/core';
import { DynamicFormsNGBootstrapUIModule } from '@ng2-dynamic-forms/ui-ng-bootstrap';
import { MotorcyclesRoutingModule } from './motorcycles-routing.module';

import { MotorcyclesFormComponent } from './motorcycles-form/motorcycles-form.component';
import { MotorcyclesTableComponent } from './motorcycles-table/motorcycles-table.component';

const ModuleComponents = [
    MotorcyclesTableComponent,
    MotorcyclesFormComponent
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        DynamicFormsCoreModule.forRoot(),
        DynamicFormsNGBootstrapUIModule,
        MotorcyclesRoutingModule
    ],
    exports: [ModuleComponents],
    declarations: [ModuleComponents],
    entryComponents: [ModuleComponents]
})
export class MotorcyclesModule { }
