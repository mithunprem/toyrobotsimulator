import { BOARD_DIMENSION } from '../Constants';

const validateCommand = command => {
  let isValidCommand = false;

  // Convert the command to lowercase to ensure the validation will work
  // the same for any case input.
  command = command.toLowerCase();

  // For PLACE commands, validate the command with a regex to check if
  // the command has valid coordinates and direction. For other commands, just
  // check if the passed in command is part of the valid commands list.
  if (validCommandsList.indexOf(command) !== -1 || placeCommandValidationRegex.test(command)) {
    isValidCommand = true;
  }

  return isValidCommand;
}

// For a 5*5 board, the maximum x or y coordinate can be 4.
const maxCoordinate = Number(BOARD_DIMENSION) - 1;

// Validation regex for PLACE command. The place command should be in the
// format PLACE x,y,position. eg: PLACE 0,0,NORTH.
const placeCommandValidationRegex =
  RegExp(`place[ ][0-${maxCoordinate}][,][0-${maxCoordinate}][,](north|south|east|west)$`);

// List of valid commands excluding the place command.
const validCommandsList = ['move', 'left', 'right', 'report'];

export default validateCommand;
