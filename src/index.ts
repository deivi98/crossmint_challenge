import dotenv from 'dotenv';
import { MegaverseClientImpl } from './client/MegaverseClientImpl';
import { GoalResponse } from './dto/GoalResponse';
import { MegaverseMapper } from './mapper/MegaverseMapper';

dotenv.config();

function main(): void {
    let client = new MegaverseClientImpl();
  
    client.fetchGoal().then(async (response: GoalResponse) => {
        console.log(response.goal);
        const megaverse = MegaverseMapper.buildFromGoal(response.goal);
        
        console.log(megaverse);
        
        console.log(megaverse.isValid());
    })
}

main()