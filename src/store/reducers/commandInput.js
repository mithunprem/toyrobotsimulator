import { COMMAND_INPUT } from '../actions/types';

const initialState = {
  command: '',
  commandError: false,
  errorMessage: ''
}

export default function CommandInputReducer(state = initialState, action) {
  switch (action.type) {
    case COMMAND_INPUT.SET:
      return {
        ...state,
        command: action.command
      };
    case COMMAND_INPUT.SET_ERROR:
      return {
        ...state,
        commandError: action.commandError,
        errorMessage: action.errorMessage
      };
    default:
      return state;
  }
}
