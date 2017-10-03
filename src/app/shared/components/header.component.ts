import { Component, ElementRef } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import "rxjs/add/operator/filter";

@Component({
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
    selector: "ce-header"
})
export class HeaderComponent {
    constructor(
        private _elementRef: ElementRef,
        private _router: Router
    ) { }

    ngOnInit() {
        this._router.events
            .filter(x => x instanceof NavigationEnd)
            .subscribe(x => { });
    }
}