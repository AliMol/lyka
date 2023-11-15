// main.ts

import WarehouseRobot from '../src/warehouse'

//Define size of the warehouse
const size: [number, number] = [10, 10]

// Example usage:
const robot = new WarehouseRobot()
const finalPosition1 = robot.processCommands(size, 'N E S W')
console.log(`Final position: ${finalPosition1}`) //Expected to see 0,0

// Another example:
const robot2 = new WarehouseRobot()
const finalPosition2 = robot2.processCommands(size, 'N E N E N E N E')
console.log(`Final position: ${finalPosition2}`) //Expected to see 4,4
