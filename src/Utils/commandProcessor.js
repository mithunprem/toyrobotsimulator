const processCommand = (command, commandList, position) => {

  command = command.toLowerCase();

  if (command.startsWith('place')) {
    const [x, y, direction] = positionCoordinates(command);

    if (x<5 && y<5) {
      position.x = Number(x);
      position.y = Number(y);
      position.direction = direction;
      commandList.push(command);
    }
  } else {
    let { x, direction } = position;

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

const positionCoordinates = command => {
  const position = command.split(PLACE_DELIMITER)[1];
  return position.split(POSITION_DELIMITER);
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
