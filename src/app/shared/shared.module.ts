import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http";

import { HeaderComponent } from "./components/header.component";
import { HamburgerButtonComponent } from "./components/hamburger-button.component";

import { Storage } from "./services/storage.service";

const providers = [
    Storage
];

const declarations = [
    HamburgerButtonComponent,
    HeaderComponent
];

@NgModule({
    imports: [CommonModule, RouterModule, HttpClientModule],
    entryComponents: [],
    declarations,
    exports:declarations,
    providers
})
export class SharedModule {}