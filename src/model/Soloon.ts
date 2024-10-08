import { SpaceMapper } from "../mapper/SpaceMapper";
import { AstralObject } from "./AstralObject";
import { Position } from "./Position";

export enum SoloonColor {
    BLUE = 'BLUE',
    RED = 'RED',
    PURPLE = 'PURPLE',
    WHITE = 'WHITE'
}

export class Soloon extends AstralObject {
    static readonly NAME: string = "SOLOON";

    constructor(readonly position: Position, readonly color: SoloonColor) {
        super();
    }

    buildKey(): string {
        return this.color + SpaceMapper.SEPARATOR + Soloon.NAME;
    }
}