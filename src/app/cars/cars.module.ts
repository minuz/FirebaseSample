import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
import { DynamicFormsNGBootstrapUIModule } from '@ng-dynamic-forms/ui-ng-bootstrap';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsTableComponent } from './cars-table/cars-table.component';
import { CarsFormComponent } from './cars-form/cars-form.component';

const ModuleComponents = [
    CarsTableComponent,
    CarsFormComponent
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CarsRoutingModule,
        DynamicFormsCoreModule.forRoot(),
        DynamicFormsNGBootstrapUIModule
    ],
    exports: [ModuleComponents],
    declarations: [ModuleComponents],
    entryComponents: [ModuleComponents]
})
export class CarsModule { }
