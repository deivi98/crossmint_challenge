import { Position } from "../model/Position";
import { Soloon, SoloonColor } from "../model/Soloon";
import { MegaverseMapper } from "./MegaverseMapper";

export class SoloonMapper {
    static buildFromGoal(position: Position, key: string): Soloon {
        const color: SoloonColor = key.split(MegaverseMapper.SEPARATOR)[0] as SoloonColor;
        
        return new Soloon(position, color);
    }
}