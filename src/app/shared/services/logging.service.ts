import { Injectable } from "@angular/core";


export enum LogLevel {
	error,
	info,
	warning
}

@Injectable()
export class LoggingService {

	public log(message:string,level: LogLevel) {
		console.log(message);
	}
}
