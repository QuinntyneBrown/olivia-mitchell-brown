import { Injectable } from "@angular/core";

export interface ILogger {
    log(logLevel: LogLevel, message: string): void;
}

export enum LogLevel {
    Trace = 0,
    Information,
    Warning,
    Error,
    None
}

@Injectable()
export class LoggerService implements ILogger {
    constructor(private _minimumLogLevel: LogLevel) { }

    public log(logLevel: LogLevel, message: string) {
        if (logLevel >= this._minimumLogLevel) {
            console.log(`${LogLevel[logLevel]}: ${message}`);
        }
    } 
}
