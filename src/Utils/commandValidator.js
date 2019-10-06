const validateCommand = command => {
  let isValidCommand = false;
  let errorMessage = '';

  // Convert the command to lowercase to ensure the validation will work
  // the same for any case input.
  command = command.toLowerCase();

  /*
    For PLACE commands, validate the command with a regex to check if
    the command has valid coordinates and direction. For other commands, just
    check if the passed in command is part of the valid commands list.
  */
  if (command.startsWith('place')) {
    if (placeCommandValidationRegex.test(command)) {
      isValidCommand = true;
    } else {
      errorMessage = 'Invalid PLACE command';
    }
  } else if (validCommandsList.indexOf(command) !== -1) {
    isValidCommand = true;
  } else {
    errorMessage = 'Unrecognized command';
  }

  return [ isValidCommand, errorMessage ];
}

// Validation regex for PLACE command. The place command should be in the
// format PLACE x,y,position. eg: PLACE 0,0,NORTH.
const placeCommandValidationRegex =
  RegExp(`place[ ][0-9]+[,][0-9]+[,](north|south|east|west)$`);

// List of valid commands excluding the place command.
const validCommandsList = ['move', 'left', 'right', 'report', 'reset'];

export default validateCommand;
