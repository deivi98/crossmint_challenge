import { Position } from "../model/Position";
import { Void } from "../model/Void";

/**
 * Void mapper. In charge of mapping from
 * raw response from API to model + validating
 * 
 * Might be redundant. Need review
 */
export class VoidMapper {
    static buildFromGoal(position: Position): Void {
        return new Void(position);
    }
}