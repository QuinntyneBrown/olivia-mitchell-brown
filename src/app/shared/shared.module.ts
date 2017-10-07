import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http";

import { HeaderComponent } from "./components/header.component";
import { HamburgerButtonComponent } from "./components/hamburger-button.component";
import "./components/carousel";
import "./components/carousel-item-content.component";

import { Storage } from "./services/storage.service";
import { LoggingService } from "./services/logging.service";

const providers = [
    Storage,
    LoggingService
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