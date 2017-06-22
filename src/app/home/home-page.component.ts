import { ApiService } from "../shared";
import { Container } from "../../container";
import { Router } from "@quinntynebrown/router";

declare var System: any;

const template = document.createElement("template");

const promises = Promise.all([
    System.import("./home-page.component.html"),
    System.import("./home-page.component.css")
]);

export class HomePageComponent extends HTMLElement {
    constructor(
        private _apiService: ApiService = Container.resolve(ApiService),
        private _router: Router = Container.resolve(Router)
        ) {
        super();
    }

    static get observedAttributes () {
        return [];
    }

    async connectedCallback() {

        const assests = await promises;
        
        template.innerHTML = `<style>${assests[1]}</style>${assests[0]}`; 

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(document.importNode(template.content, true));  

        if (!this.hasAttribute('role'))
            this.setAttribute('role', 'homepage');

        this._bind();
        this._setEventListeners();
    }

    private async _bind() {
        var result = await this._apiService.getContentBlock({ name: "Home" });        
        this.homeContentBlockElement.setAttribute("content-block", JSON.stringify(result));
    }

    private get homeContentBlockElement(): HTMLElement { return this.shadowRoot.querySelector("ce-content-block") as HTMLElement; }


    private _setEventListeners() {

    }

    disconnectedCallback() {

    }

    attributeChangedCallback (name, oldValue, newValue) {
        switch (name) {
            default:
                break;
        }
    }
}

customElements.define(`ce-home-page`,HomePageComponent);
