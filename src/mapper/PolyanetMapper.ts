import { Polyanet } from "../model/Polyanet";
import { Position } from "../model/Position";

export class PolyanetMapper {
    static buildFromGoal(position: Position): Polyanet {
        return new Polyanet(position);
    }
}