import dotenv from 'dotenv';
import { SpaceMapper } from './mapper/SpaceMapper';
import { MegaverseClientImpl } from './client/MegaverseClientImpl';
import { GoalResponse } from './dto/GoalResponse';

dotenv.config();

function main(): void {
    let client = new MegaverseClientImpl();
  
    client.fetchGoal().then(async (response: GoalResponse) => {
        console.log(response.goal);
        const space = SpaceMapper.buildFromGoal(response.goal);
        
        console.log(space);
    })
}

main()