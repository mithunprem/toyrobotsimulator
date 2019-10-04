import { PLACE_DELIMITER, POSITION_DELIMITER } from '../Constants';

const processCommand = (command, commandList, position) => {

  // Convert the command to lowercase to ensure the processing will work
  // the same for any case input.
  command = command.toLowerCase();

  if (command.startsWith('place')) {
    position = setRobotPosition(command);
    commandList.push(command);
  } else {
    let { x, direction } = position;

    // Ensure that the robot is on the table before executing any MOVE
    // or direction commands. If the robot is on the table, then the
    // x coordinate should be greater than -1.
    if (x > -1) {
      switch(command) {
        case 'move':
          position = executeMove(position);
          commandList.push(command); // Should push only for valid executed commands.
          break;
        case 'left':
        case 'right':
          direction = executePositionChange(command, direction);
          position.direction = direction;
          commandList.push(command);
          break;
        default:
      }
    }
  }
  return { commandList, position };
}

const setRobotPosition = command => {
  const [ , position ] = command.split(PLACE_DELIMITER);
  const [ x, y, direction ] = position.split(POSITION_DELIMITER);

  return {
    x: Number(x),
    y: Number(y),
    direction
  };
}

const executeMove = ({ x, y, direction }) => {
  switch (direction) {
    case 'north':
      if ( y < 4 ) y = y+1;
      break;
    case 'south':
      if ( y > 0 ) y = y-1;
      break;
    case 'east':
      if ( x < 4 ) x = x+1;
      break;
    case 'west':
      if ( x > 0 ) x = x-1;
      break;
    default:
      break;
  }

  return { x, y, direction };
}

const executePositionChange = (command, direction) => {
  switch(direction) {
    case 'north':
      direction = (command === 'left' ? 'west' : 'east');
      break;
    case 'south':
      direction = (command === 'left' ? 'east' : 'west');
      break;
    case 'east':
      direction = (command === 'left' ? 'north' : 'south');
      break;
    case 'west':
      direction = (command === 'left' ? 'south' : 'north');
      break;
    default:
  }

  return direction;
}


const PLACE_DELIMITER = ' ';
const POSITION_DELIMITER = ',';


export default processCommand;
