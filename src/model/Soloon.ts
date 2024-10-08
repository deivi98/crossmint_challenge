import { SpaceMapper } from "../mapper/SpaceMapper";
import { AstralObject, AstralObjects } from "./AstralObject";
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
        return this.color + SpaceMapper.SEPARATOR + AstralObjects.SOLOON;
    }
}