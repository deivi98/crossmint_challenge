import { BaseException } from "./BaseExcception";
import { ErrorCode } from "./ErrorCode";

export class InvalidAstralObjectException extends BaseException {
    
    constructor(message: string, cause?: any) {
        super({ name: ErrorCode.INVALID_ASTRAL_OBJECT, message, cause });
    }

}