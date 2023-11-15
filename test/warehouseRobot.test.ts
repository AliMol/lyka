// WarehouseRobot.test.ts

import WarehouseRobot from '../src/warehouse'

describe('WarehouseRobot', () => {
  let robot = new WarehouseRobot()

  beforeEach(() => {
    robot = new WarehouseRobot()
  })
  describe('Test processCommands function', () => {
    test('should move north within boundary successfully', () => {
      expect(robot.processCommands([10, 10], 'N')).toEqual([0, 1])
    })

    test('should not move south when start is position 0', () => {
      expect(robot.processCommands([10, 10], 'S')).toEqual([0, 0])
    })

    test('should move east within boundary successfully', () => {
      expect(robot.processCommands([10, 10], 'E')).toEqual([1, 0])
    })

    test('should move est 10 times to north easily', () => {
      expect(robot.processCommands([10, 10], 'E E E E E E E E E E')).toEqual([
        10, 0,
      ])
    })

    test('should not move higher than 10 times to east if there is 11 N', () => {
      expect(robot.processCommands([10, 10], 'E E E E E E E E E E E')).toEqual([
        10, 0,
      ])
    })

    test('should not move west within start is position 0', () => {
      expect(robot.processCommands([10, 10], 'W')).toEqual([0, 0])
    })

    test('should move north 10 times to north easily', () => {
      expect(robot.processCommands([10, 10], 'N N N N N N N N N N')).toEqual([
        0, 10,
      ])
    })

    test('should not move higher than 10 times to north if there is 11 N', () => {
      expect(robot.processCommands([10, 10], 'N N N N N N N N N N N')).toEqual([
        0, 10,
      ])
    })

    test('should not move when there is no space between commands', () => {
      const initialPosition = robot.processCommands([10, 10], 'NEW')
      robot.move(10, 10, 'NEW')
      expect(robot.processCommands([10, 10], 'NEW')).toEqual(initialPosition)
    })

    test('should handle invalid direction', () => {
      const initialPosition = robot.processCommands([10, 10], 'N')
      robot.move(10, 10, 'InvalidDirection')
      expect(robot.processCommands([10, 10], 'InvalidDirection')).toEqual(
        initialPosition,
      )
    })
  })

  describe('Test move function', () => {
    test('should move north within boundary', () => {
      robot.move(10, 10, 'N')
      expect(robot.x).toEqual(0)
      expect(robot.y).toEqual(1)
    })

    test('should move south within boundary', () => {
      robot.move(10, 10, 'S')
      expect(robot.x).toEqual(0)
      expect(robot.y).toEqual(0)
    })

    test('should move east within boundary', () => {
      robot.move(10, 10, 'E')
      expect(robot.x).toEqual(1)
      expect(robot.y).toEqual(0)
    })

    test('should move west within boundary', () => {
      robot.move(10, 10, 'W')
      expect(robot.x).toEqual(0)
      expect(robot.y).toEqual(0)
    })

    test('should handle invalid direction', () => {
      robot.move(10, 10, 'InvalidDirection')
      expect(robot.x).toEqual(0)
      expect(robot.y).toEqual(0)
    })
  })
})
