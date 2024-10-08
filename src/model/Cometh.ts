import { MegaverseMapper } from "../mapper/MegaverseMapper";
import { AstralObject, AstralObjects } from "./AstralObject";
import { Megaverse } from "./Megaverse";
import { Position } from "./Position";

export enum ComethDirection {
    UP = 'UP',
    DOWN = 'DOWN',
    RIGHT = 'RIGHT',
    LEFT = 'LEFT'
}

export class Cometh extends AstralObject {
    constructor(readonly position: Position, readonly direction: ComethDirection) {
        super();
    }

    buildKey(): string {
        return this.direction + MegaverseMapper.SEPARATOR + AstralObjects.COMETH;
    }
    
    isValid(megaverse: Megaverse): boolean {
        return true;
    }
}