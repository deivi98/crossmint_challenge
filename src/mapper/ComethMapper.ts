import { InvalidAstralObjectException } from "../error/InvalidAstralObjectException";
import { Cometh, ComethDirection } from "../model/Cometh";
import { Position } from "../model/Position";
import { MegaverseMapper } from "./MegaverseMapper";

export class ComethMapper {
    static buildFromGoal(position: Position, key: string): Cometh {
        const direction: ComethDirection = key.split(MegaverseMapper.SEPARATOR)[0].toLowerCase() as ComethDirection;
        
        if (!Object.values(ComethDirection).includes(direction)) {
            throw new InvalidAstralObjectException(`Invalid cometh direction at ${position.x}, ${position.y}`);
        }
        
        return new Cometh(position, direction);
    }
}