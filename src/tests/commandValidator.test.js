import validateCommand from '../Utils/commandValidator';

describe('Command Validator', () => {
  it('should validate a well formed PLACE command', () => {
    const command = "PLACE 0,0,NORTH";
    const [ isValid, errorMessage ] = validateCommand(command);
    expect(isValid).toEqual(true);
    expect(errorMessage).toEqual('');
  });

  it('should successfully validate a move command', () => {
    const command = "move";
    const [ isValid, errorMessage ] = validateCommand(command);
    expect(isValid).toEqual(true);
    expect(errorMessage).toEqual('');
  });

  it('should successfully validate a Left command', () => {
    const command = "left";
    const [ isValid, errorMessage ] = validateCommand(command);
    expect(isValid).toEqual(true);
    expect(errorMessage).toEqual('');
  });

  it('should successfully validate a right command', () => {
    const command = "right";
    const [ isValid, errorMessage ] = validateCommand(command);
    expect(isValid).toEqual(true);
    expect(errorMessage).toEqual('');
  });

  it('should successfully validate a report command', () => {
    const command = "report";
    const [ isValid, errorMessage ] = validateCommand(command);
    expect(isValid).toEqual(true);
    expect(errorMessage).toEqual('');
  });

  it('should successfully validate a reset command', () => {
    const command = "reset";
    const [ isValid, errorMessage ] = validateCommand(command);
    expect(isValid).toEqual(true);
    expect(errorMessage).toEqual('');
  });

  it('should send an error message and an invalid flag if the entered command is unrecognized', () => {
    const command = "abcd";
    const [ isValid, errorMessage ] = validateCommand(command);
    expect(isValid).toEqual(false);
    expect(errorMessage).toEqual('Unrecognized command');
  });

  it('should send a meaningful error message and an invalid flag if the entered PLACE command is not in a valid format', () => {
    const command = "PLACE 00 north";
    const [ isValid, errorMessage ] = validateCommand(command);
    expect(isValid).toEqual(false);
    expect(errorMessage).toEqual('Invalid PLACE command');
  });
});
