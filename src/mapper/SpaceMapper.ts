import { AstralObject, AstralObjects } from "../model/AstralObject";
import { Position } from "../model/Position";
import { Space } from "../model/Space";
import { ComethMapper } from "./ComethMapper";
import { PolyanetMapper } from "./PolyanetMapper";
import { SoloonMapper } from "./SoloonMapper";

export class SpaceMapper {
    static readonly SEPARATOR: string = '_';

    static buildFromGoal(goal: Array<Array<string>>): Space {
        const objects: AstralObject[] = [];
        
        for (let i = 0; i < goal.length; i++) {
            for (let j = 0; j < goal[i].length; j++) {
                
                const object: string = goal[i][j];
                
                if (object == Space.SPACE_KEY) {
                    continue;
                }
                
                const position = new Position(i, j);
                
                if (object.endsWith(AstralObjects.POLYANET)) {
                    objects.push(PolyanetMapper.buildFromGoal(position));
                } else if (object.endsWith(AstralObjects.SOLOON)) {
                    objects.push(SoloonMapper.buildFromGoal(position, object));
                } else if (object.endsWith(AstralObjects.COMETH)) {
                    objects.push(ComethMapper.buildFromGoal(position, object));
                }

            }
        }
        
        return new Space(objects);
    }
}