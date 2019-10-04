import setRobotPosition from './placeCommandHandler';
import moveRobot from './moveCommandHandler';
import changeRobotDirection from './directionChangeHandler';

const processCommand = (command, commandList, position) => {
  let isCommandExecuted = false;

  // Convert the command to lowercase to ensure the processing will work
  // the same for any case input.
  command = command.toLowerCase();

  if (command.startsWith('place')) {
    position = setRobotPosition(command);
    isCommandExecuted = true;
  } else {
    const { x } = position;

    /*
      Ensure that the robot is on the table before executing any MOVE
      or direction commands. If the robot is on the table, then the
      x coordinate should be greater than -1.
    */
    if (x > -1) {
      switch(command) {
        case 'move':
          [ position, isCommandExecuted ] = moveRobot(position);
          break;
        case 'left':
        case 'right':
          // Execute the direction change`.
          position = changeRobotDirection(command, position);
          isCommandExecuted = true;
          break;
        default:
      }
    }
  }

  // Add successfully executed commands to the command list.
  if (isCommandExecuted) {
    commandList.push(command);
  }

  return { commandList, position };
}


export default processCommand;
