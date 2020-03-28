import { MAX_COORDINATE } from '../constants';

/*
  A MOVE command will move the robot by one step on x or y plane based on the
  direction it is facing when the command is executed.
  Following are the possible options for the robot to move.
  - If the robot is facing North or South, it will move up or down respectively in it's y plane.
  - If the robot is facing East or West, it will move forward or backward in it's x plane.

  Any MOVE commands that might push the robot of the table will be ignored.
  i.e a MOVE command can neither push the x and y to be greater than the maximum
  coordinate, nor can reduce it further than 0.
*/
const moveRobot = ({ x, y, direction }) => {
  let isValidMove = false;

  switch (direction) {
    case 'north': // Move the robot up.
      if ( y < MAX_COORDINATE ) {
        y+= 1;
        isValidMove = true;
      }
      break;
    case 'south': // Move the robot down.
      if ( y > 0 ) {
        y-= 1;
        isValidMove = true;
      }
      break;
    case 'east': // Move the robot forward.
      if ( x < MAX_COORDINATE ) {
        x+= 1;
        isValidMove = true;
      }
      break;
    case 'west': // Move the robot backward.
      if ( x > 0 ) {
        x-= 1;
        isValidMove = true;
      }
      break;
    default:
  }

  return [{ x, y, direction }, isValidMove];
}

export default moveRobot;
