import { MegaverseClient } from "../client/MegaverseClient";
import { MegaverseMapper } from "../mapper/MegaverseMapper";
import { AstralObject } from "../model/AstralObject";
import { Cometh } from "../model/Cometh";
import { Megaverse } from "../model/Megaverse";
import { Polyanet } from "../model/Polyanet";
import { Soloon } from "../model/Soloon";
import { Void } from "../model/Void";
import { MegaverseService } from "./MegaverseService";

export class MegaverseServiceImpl implements MegaverseService {
    constructor(private readonly client: MegaverseClient) {}
    
    async pullGoalMegaverse(): Promise<Megaverse> {
        const response = await this.client.fetchGoal();
        return MegaverseMapper.buildFromGoal(response.goal);
    }
    
    async pushMegaverse(megaverse: Megaverse): Promise<void> {
        megaverse.validate();
        
        const objects = megaverse.getAllAstralObjects();
        
        objects.forEach((row: AstralObject[]) => {
            row.filter((obj: AstralObject) => !(obj instanceof Void)).forEach(async (obj: AstralObject) => {
                
                if (obj instanceof Polyanet) {
                    await this.client.setPolyanet({ row: obj.position.x, column: obj.position.y });
                } else if (obj instanceof Soloon) {
                    await this.client.setSoloon({ row: obj.position.x, column: obj.position.y, color: obj.color });
                } else if (obj instanceof Cometh) {
                    await this.client.setCometh({ row: obj.position.x, column: obj.position.y, direction: obj.direction });
                }

            });
        });
    }
}