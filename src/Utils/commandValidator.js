const validateCommand = command => {
  let isValidCommand = false;

  // Convert the command to lowercase to ensure the validation will work
  // the same for any case input.
  command = command.toLowerCase();

  // For PLACE commands, validate the command with a regex to check if
  // the command has valid coordinates and direction.
  if (command.startsWith('place')) {
    isValidCommand = placeCommandValidationRegex.test(command);
  } else if (validCommandsList.indexOf(command) !== -1) {
    isValidCommand = true;
  }
  
  return isValidCommand;
}

const placeCommandValidationRegex = RegExp(/place[ ][0-4][,][0-4][,](north|south|east|west)$/);
const validCommandsList = ['move', 'left', 'right', 'report'];

export default validateCommand;
