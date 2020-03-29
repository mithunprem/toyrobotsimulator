import { combineReducers } from 'redux';
import CommandInputReducer from './commandInput';
import CommandModuleReducer from './commandModule';
import InstructionsReducer from './instructions';

export default combineReducers({
  commandInput: CommandInputReducer,
  commandModule: CommandModuleReducer,
  instructions: InstructionsReducer
});
