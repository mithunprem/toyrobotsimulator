import { MAX_COORDINATE } from '../Constants';

const moveRobot = ({ x, y, direction }) => {
  let isValidMove = false;

  switch (direction) {
    case 'north':
      if ( y < MAX_COORDINATE ) {
        y +=1;
        isValidMove = true;
      }
      break;
    case 'south':
      if ( y > 0 ) {
        y -=1;
        isValidMove = true;
      }
      break;
    case 'east':
      if ( x < MAX_COORDINATE ) {
        x +=1;
        isValidMove = true;
      }
      break;
    case 'west':
      if ( x > 0 ) {
        x -= 1;
        isValidMove = true;
      }
      break;
    default:
  }

  return [{ x, y, direction }, isValidMove];
}

export default moveRobot;
