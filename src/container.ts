import { createContainer } from "./create-container";
import { ReflectiveInjector, OpaqueToken } from 'injection-js';

export class Container {
    constructor() {
        this._injector = ReflectiveInjector.resolveAndCreate(createContainer());
    }

    private static _instance: Container;

    public static get instance(): Container {
        this._instance = this._instance || new this();
        return this._instance;
    }

    public static resolve(token: any) {
        return this.instance._injector.get(token);
    }

    private _injector: ReflectiveInjector;
}