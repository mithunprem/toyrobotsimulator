import { PLACE_DELIMITER, POSITION_DELIMITER, MAX_COORDINATE } from '../constants';

const setRobotPosition = (command, robotPosition) => {
  const [, position ] = command.split(PLACE_DELIMITER);
  const [ x, y, direction ] = position.split(POSITION_DELIMITER);
  let isCommandExecuted = false;

  // Set the robot's x and y only if it is within the board dimensions.
  // Any place command that will try to place the robot outside the board will
  // be ignored.
  if ( x <= MAX_COORDINATE && y <= MAX_COORDINATE) {
    robotPosition = {
      x: Number(x),
      y: Number(y),
      direction
    };
    isCommandExecuted = true;
  }

  return [ robotPosition, isCommandExecuted ];
}

export default setRobotPosition;
