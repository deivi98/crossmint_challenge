import { BaseException } from "./BaseExcception";
import { ErrorCode } from "./ErrorCode";

export class RequestFailedException extends BaseException {
    
    constructor(message: string, cause?: any) {
        super({ name: ErrorCode.REQUEST_FAILED, message, cause });
    }

}