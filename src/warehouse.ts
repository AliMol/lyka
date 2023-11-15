// WarehouseRobot.ts

class WarehouseRobot {
  public x: number
  public y: number

  constructor() {
    // Initial position of the robot
    this.x = 0 // initial x-position
    this.y = 0 // initial y-position
  }

  move(length: number, height: number, direction: string): void {
    // Update the robot's position based on the given direction
    if (direction === 'N' && this.y < height--) {
      // move north if within boundary
      this.y += 1
    } else if (direction === 'S' && this.y > 0) {
      // move south if within boundary
      this.y -= 1
    } else if (direction === 'E' && this.x < length--) {
      // move east if within boundary
      this.x += 1
    } else if (direction === 'W' && this.x > 0) {
      // move west if within boundary
      this.x -= 1
    }
  }

  processCommands(
    size: [number, number],
    commandSequence: string,
  ): [number, number] {
    // Process a series of commands and update the robot's position
    const commands = commandSequence.split(' ')
    const [length, height] = size

    for (const command of commands) {
      this.move(length, height, command)
    }

    // Return the final position of the robot
    return [this.x, this.y]
  }
}

export default WarehouseRobot
