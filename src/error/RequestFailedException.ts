import { BaseException } from "./BaseExcception";
import { ErrorCode } from "./ErrorCode";

/**
 * Wrapper for any kind of failure during requests
 * to the Megaverse API, to be more granularized
 */
export class RequestFailedException extends BaseException {
    
    constructor(message: string, cause?: any) {
        super({ name: ErrorCode.REQUEST_FAILED, message, cause });
    }

}