import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
import { DynamicFormsNGBootstrapUIModule } from '@ng-dynamic-forms/ui-ng-bootstrap';
import { BikesRoutingModule } from './bikes-routing.module';

import { BikesFormComponent } from './bikes-form/bikes-form.component';
import { BikesTableComponent } from './bikes-table/bikes-table.component';

const ModuleComponents = [
    BikesTableComponent,
    BikesFormComponent
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        DynamicFormsCoreModule.forRoot(),
        DynamicFormsNGBootstrapUIModule,
        BikesRoutingModule
    ],
    exports: [ModuleComponents],
    declarations: [ModuleComponents],
    entryComponents: [ModuleComponents]
})
export class BikesModule { }
