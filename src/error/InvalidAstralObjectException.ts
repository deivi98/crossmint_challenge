import { BaseException } from "./BaseExcception";
import { ErrorCode } from "./ErrorCode";

/**
 * Any uknown, non-well put or invalid astral object
 * in the megaverse
 */
export class InvalidAstralObjectException extends BaseException {
    
    constructor(message: string, cause?: any) {
        super({ name: ErrorCode.INVALID_ASTRAL_OBJECT, message, cause });
    }

}