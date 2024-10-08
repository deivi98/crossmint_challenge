import { AstralObject, AstralObjects } from "../model/AstralObject";
import { Megaverse } from "../model/Megaverse";
import { Position } from "../model/Position";
import { ComethMapper } from "./ComethMapper";
import { PolyanetMapper } from "./PolyanetMapper";
import { SoloonMapper } from "./SoloonMapper";
import { VoidMapper } from "./VoidMapper";

export class MegaverseMapper {
    static readonly SEPARATOR: string = '_';

    static buildFromGoal(goal: string[][]): Megaverse {
        const objects: AstralObject[][] = [];
        
        for (let i = 0; i < goal.length; i++) {
            const row: AstralObject[] = [];

            for (let j = 0; j < goal[i].length; j++) {
                const object: string = goal[i][j];
                const position = new Position(i, j);
                
                if (object.endsWith(AstralObjects.POLYANET)) {
                    row.push(PolyanetMapper.buildFromGoal(position));
                } else if (object.endsWith(AstralObjects.SOLOON)) {
                    row.push(SoloonMapper.buildFromGoal(position, object));
                } else if (object.endsWith(AstralObjects.COMETH)) {
                    row.push(ComethMapper.buildFromGoal(position, object));
                } else {
                    row.push(VoidMapper.buildFromGoal(position));
                }

            }
            
            objects.push(row);
        }
        
        return new Megaverse(objects);
    }
}