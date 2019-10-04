import { PLACE_DELIMITER, POSITION_DELIMITER } from '../Constants';

const setRobotPosition = command => {
  const [, position ] = command.split(PLACE_DELIMITER);
  const [ x, y, direction ] = position.split(POSITION_DELIMITER);

  return {
    x: Number(x),
    y: Number(y),
    direction
  };
}

export default setRobotPosition;
