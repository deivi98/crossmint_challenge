import { Polyanet } from "../model/Polyanet";
import { Position } from "../model/Position";

/**
 * Polyanet mapper. In charge of mapping from
 * raw response from API to model + validating
 */
export class PolyanetMapper {
    static buildFromGoal(position: Position): Polyanet {
        return new Polyanet(position);
    }
}