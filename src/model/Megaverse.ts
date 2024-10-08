import { AstralObject } from "./AstralObject";

export class Megaverse {
    constructor(private objects: AstralObject[][] = []) {}
    
    getAstralObject(x: number, y: number): AstralObject | null {
        if (x < 0 || x >= this.objects.length) {
            return null;
        }
        
        if (y < 0 || y >= this.objects[x].length) {
            return null;
        }

        return this.objects[x][y];
    }
    
    isValid(): boolean {
        this.objects.forEach((row: AstralObject[]) => {
            row.forEach((object: AstralObject) => {
                if (!object.isValid(this)) {
                    return false;
                }
            });
        });

        return true;
    }
}