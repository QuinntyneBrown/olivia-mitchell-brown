import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from "./pages/landing-page.component";

export const ROUTES = [
    {
        path: '',
        pathMatch: 'full',
        component: LandingPageComponent
    }
]

export const RoutingModule = RouterModule.forRoot([
    ...ROUTES
]);