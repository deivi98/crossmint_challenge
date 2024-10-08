import { Position } from "../model/Position";
import { Void } from "../model/Void";

export class VoidMapper {
    static buildFromGoal(position: Position): Void {
        return new Void(position);
    }
}