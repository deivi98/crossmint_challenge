import { ErrorCode } from "./ErrorCode";

interface BaseExceptionProps {
    readonly name: ErrorCode;
    readonly message: string;
    readonly cause: any;
}

/**
 * General exception to be used all
 * across the application
 */
export class BaseException extends Error {
    readonly name: ErrorCode;
    readonly message: string;
    readonly cause: any;
    
    constructor({ name, message, cause }: BaseExceptionProps) {
        super();
        this.name = name;
        this.message = message;
        this.cause = cause;
    }
}