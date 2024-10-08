import { Cometh, ComethDirection } from "../model/Cometh";
import { Position } from "../model/Position";
import { SpaceMapper } from "./SpaceMapper";

export class ComethMapper {
    static buildFromGoal(position: Position, key: string): Cometh {
        const direction: ComethDirection = key.split(SpaceMapper.SEPARATOR)[0] as ComethDirection;
        
        return new Cometh(position, direction);
    }
}