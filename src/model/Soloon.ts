import { MegaverseMapper } from "../mapper/MegaverseMapper";
import { AstralObject, AstralObjects } from "./AstralObject";
import { Megaverse } from "./Megaverse";
import { Polyanet } from "./Polyanet";
import { Position } from "./Position";

export enum SoloonColor {
    BLUE = 'BLUE',
    RED = 'RED',
    PURPLE = 'PURPLE',
    WHITE = 'WHITE'
}

export class Soloon extends AstralObject {
    constructor(readonly position: Position, readonly color: SoloonColor) {
        super();
    }

    buildKey(): string {
        return this.color + MegaverseMapper.SEPARATOR + AstralObjects.SOLOON;
    }
    
    isValid(megaverse: Megaverse): boolean {
        if (megaverse.getAstralObject(this.position.x - 1, this.position.y) instanceof Polyanet)
            return true;

        if (megaverse.getAstralObject(this.position.x + 1, this.position.y) instanceof Polyanet)
            return true;

        if (megaverse.getAstralObject(this.position.x, this.position.y - 1) instanceof Polyanet)
            return true;

        if (megaverse.getAstralObject(this.position.x, this.position.y + 1) instanceof Polyanet)
            return true;
        
        return false;
    }
}