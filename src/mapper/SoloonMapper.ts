import { Position } from "../model/Position";
import { Soloon, SoloonColor } from "../model/Soloon";
import { SpaceMapper } from "./SpaceMapper";

export class SoloonMapper {
    static buildFromGoal(position: Position, key: string): Soloon {
        const color: SoloonColor = key.split(SpaceMapper.SEPARATOR)[0] as SoloonColor;
        
        return new Soloon(position, color);
    }
}