import { AstralObject } from "../model/AstralObject";
import { Cometh } from "../model/Cometh";
import { Polyanet } from "../model/Polyanet";
import { Position } from "../model/Position";
import { Soloon } from "../model/Soloon";
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
                
                if (object.endsWith(Polyanet.NAME)) {
                    objects.push(PolyanetMapper.buildFromGoal(position));
                } else if (object.endsWith(Soloon.NAME)) {
                    objects.push(SoloonMapper.buildFromGoal(position, object));
                } else if (object.endsWith(Cometh.NAME)) {
                    objects.push(ComethMapper.buildFromGoal(position, object));
                }

            }
        }
        
        return new Space(objects);
    }
}