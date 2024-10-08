import { InvalidAstralObjectException } from "../error/InvalidAstralObjectException";
import { Position } from "../model/Position";
import { Soloon, SoloonColor } from "../model/Soloon";
import { MegaverseMapper } from "./MegaverseMapper";

export class SoloonMapper {
    static buildFromGoal(position: Position, key: string): Soloon {
        const color: SoloonColor = key.split(MegaverseMapper.SEPARATOR)[0].toLowerCase() as SoloonColor;
        
        if (!Object.values(SoloonColor).includes(color)) {
            throw new InvalidAstralObjectException(`Invalid soloon color at ${position.x}, ${position.y}`);
        }
        
        return new Soloon(position, color);
    }
}