import { InvalidAstralObjectException } from "../error/InvalidAstralObjectException";
import { AstralObject } from "./AstralObject";

/**
 * Megaverse domain model. In this layer is where
 * our app business logic lives.
 * 
 * Might not be necessary at the moment. For now only
 * validation is considered.
 */
export class Megaverse {
    constructor(private objects: AstralObject[][] = []) {}
    
    getAllAstralObjects(): AstralObject[][] {
        return this.objects;
    }
    
    getAstralObject(x: number, y: number): AstralObject | null {
        if (x < 0 || x >= this.objects.length) {
            return null;
        }
        
        if (y < 0 || y >= this.objects[x].length) {
            return null;
        }

        return this.objects[x][y];
    }
    
    validate(): void {
        this.objects.forEach((row: AstralObject[]) => {
            row.forEach((object: AstralObject) => {
                if (!object.isValid(this)) {
                    throw new InvalidAstralObjectException(`Invalid astral object at position ${object.position.x}, ${object.position.y}`);
                }
            });
        });
    }
}