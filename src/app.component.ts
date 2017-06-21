import { HeaderComponent, FooterComponent } from "@quinntynebrown/custom-elements";
import { RouterOutlet } from "@quinntynebrown/router";

const importedCustomElements = [
    HeaderComponent,
    FooterComponent
];

declare var System: any;

const template = document.createElement("template");

const promises = Promise.all([
    System.import("./app.component.html"),
    System.import("./app.component.css")
]);

export class AppComponent extends HTMLElement {
    constructor() {
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
            this.setAttribute('role', 'app');

        this._bind();
        this._setEventListeners();
    }

    private async _bind() {

    }

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

customElements.define(`ce-app`,AppComponent);
