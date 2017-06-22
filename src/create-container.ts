import { ApiService } from "./app/shared/api.service";
import { Router } from "@quinntynebrown/router";

export const createContainer = () => [
    { provide: ApiService, useValue: new ApiService() },  
    { provide: Router, useValue: Router.Instance }  
];