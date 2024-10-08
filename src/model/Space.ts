import { AstralObject } from "./AstralObject";

export class Space {
    static readonly SPACE_KEY: string = "SPACE";

    constructor(private objects: AstralObject[] = []) {}
}