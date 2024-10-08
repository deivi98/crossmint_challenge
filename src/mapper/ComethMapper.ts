import { Cometh, ComethDirection } from "../model/Cometh";
import { Position } from "../model/Position";
import { MegaverseMapper } from "./MegaverseMapper";

export class ComethMapper {
    static buildFromGoal(position: Position, key: string): Cometh {
        const direction: ComethDirection = key.split(MegaverseMapper.SEPARATOR)[0] as ComethDirection;
        
        return new Cometh(position, direction);
    }
}