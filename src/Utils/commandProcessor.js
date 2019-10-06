import setRobotPosition from './placeCommandHandler';
import moveRobot from './moveCommandHandler';
import changeRobotDirection from './directionChangeHandler';

const processCommand = (command, commandList, robotPosition) => {
  let isCommandExecuted = false;
  let shouldReportRobotStatus = false;

  // Convert the command to lowercase to ensure the processing will work
  // the same for any case input.
  command = command.toLowerCase();

  if (command.startsWith('place')) {
    robotPosition = setRobotPosition(command);
    isCommandExecuted = true;
  } else {
    const { x } = robotPosition;

    /*
      Ensure that the robot is on the table before executing any MOVE
      or direction commands. If the robot is on the table, then the
      x coordinate should be greater than -1.
    */
    if (x > -1) {
      switch(command) {
        case 'move':
          [ robotPosition, isCommandExecuted ] = moveRobot(robotPosition);
          break;
        case 'left':
        case 'right':
          // Execute the direction change`.
          robotPosition = changeRobotDirection(command, robotPosition);
          isCommandExecuted = true;
          break;
        case 'report':
          shouldReportRobotStatus = true;
          isCommandExecuted = true;
          break;
        case 'reset':
          commandList = [];
          robotPosition = {
            x: -1,
            y: -1,
            direction: ''
          }
          break;
        default:
      }
    }
  }

  // Add successfully executed commands to the command list.
  if (isCommandExecuted) {
    commandList.push(command);
  }

  return { commandList, robotPosition, shouldReportRobotStatus };
}


export default processCommand;
