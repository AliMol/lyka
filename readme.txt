# Assignment: Warehouse Robot Control

We have installed a robot in our warehouse to automate its movement. The robot moves along a grid in the roof of the warehouse, and we've ensured that all warehouses have dimensions of 10 by 10, aligned along north-south and east-west axes.

## Requirements

The primary control mechanism for the robot should allow us to send a series of commands, ensuring that the robot doesn't move outside the boundary of the warehouse.

### Commands

The robot accepts the following commands:

- `N`: move north
- `W`: move west
- `E`: move east
- `S`: move south

### Example command sequences

- The command sequence "N E S W" will move the robot in a full square, returning it to where it started.

- If the robot starts in the south-west corner of the warehouse, the following commands will move it to the middle of the warehouse: "N E N E N E N E"

## Getting Started

To implement and test the primary control mechanism for the robot, follow these steps:

1. Install Node.js and npm if not already installed.

2. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/warehouse-robot-control.git

3. Run --> npm install

4. Run --> npm run build

5. Make the code pretty by
    Run --> npm run format

6. Run the Robot Machine by --> npm run start    

## Testing

Run --> npm run test
