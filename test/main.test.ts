// warehouse.test.ts

import WarehouseRobot from '../src/warehouse'

describe('WarehouseRobot', () => {
  let robot = new WarehouseRobot()

  beforeEach(() => {
    robot = new WarehouseRobot()
  })

  test('should return the correct final position for command sequence "N E S W"', () => {
    const robot = new WarehouseRobot()
    const finalPosition = robot.processCommands([10, 10], 'N E S W')
    expect(finalPosition).toEqual([0, 0])
  })

  test('should return the correct final position for command sequence "N E N E N E N E"', () => {
    const robot = new WarehouseRobot()
    const finalPosition = robot.processCommands([10, 10], 'N E N E N E N E')
    expect(finalPosition).toEqual([4, 4])
  })

  test('should not for command sequence "NENE"', () => {
    const robot = new WarehouseRobot()
    const finalPosition = robot.processCommands([10, 10], 'NENE')
    expect(finalPosition).toEqual([0, 0])
  })

  test('should not for command sequence "LYKA"', () => {
    const robot = new WarehouseRobot()
    const finalPosition = robot.processCommands([10, 10], 'LYKA')
    expect(finalPosition).toEqual([0, 0])
  })

  // Add more test cases as needed
})
