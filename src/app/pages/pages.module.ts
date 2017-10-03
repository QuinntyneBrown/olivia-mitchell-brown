import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SharedModule } from "../shared/shared.module";

import { LandingPageComponent } from "./landing-page.component";

const providers = [
    
];

const declarables = [
    LandingPageComponent
];

@NgModule({
    imports: [CommonModule, RouterModule, HttpClientModule],
    entryComponents: [],
    declarations: [declarables],
    exports: [declarables],
    providers: providers
})
export class PagesModule { }