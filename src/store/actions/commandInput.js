import { COMMAND_INPUT } from './types';

export const setCommand = command => {
  return {
    type: COMMAND_INPUT.SET,
    command
  };
};

export const setCommandError = (commandError, errorMessage) => {
  return {
    type: COMMAND_INPUT.SET_ERROR,
    commandError,
    errorMessage
  };
};
