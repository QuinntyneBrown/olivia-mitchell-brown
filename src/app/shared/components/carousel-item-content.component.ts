const template = document.createElement("template");
const html = require("./carousel-item-content.component.html");
const css = require("./carousel-item-content.component.css");

import { BehaviorSubject } from "rxjs/BehaviorSubject";

export class CarouselItemContentComponent extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes () {
        return [
            "carousel-item-content-title"
        ];
    }

    async connectedCallback() {
    
        template.innerHTML = `<style>${css}</style>${html}`; 

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(document.importNode(template.content, true));  

        if (!this.hasAttribute('role'))
            this.setAttribute('role', 'carouselitemcontent');

        this._bind();
        this._setEventListeners();
    }

    private async _bind() {
        this.title$.subscribe(x => this.titleElement.innerText = x);
    }

    private _setEventListeners() {

    }

    disconnectedCallback() {

    }

    attributeChangedCallback (name, oldValue, newValue) {
        switch (name) {
            case "carousel-item-content-title":
                this.title$.next(newValue);
                break;
        }
    }

    public get titleElement(): HTMLElement { return this.shadowRoot.querySelector("h1"); }

    public title$: BehaviorSubject<string> = new BehaviorSubject("");
}

customElements.define(`ce-carousel-item-content`,CarouselItemContentComponent);
