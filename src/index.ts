import dotenv from 'dotenv';
import { GoalResponse, MegaverseClient } from './client/MegaverseClient';
import { SpaceMapper } from './mapper/SpaceMapper';

dotenv.config();

function main(): void {
    let client = new MegaverseClient();
  
    client.fetchGoal().then(async (response: GoalResponse) => {
        const space = SpaceMapper.buildFromGoal(response.goal);
        
        console.log(space);
    })
}

main()