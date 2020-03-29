import { combineReducers } from 'redux';
import CommandInputReducer from './commandInput';
import InstructionsReducer from './instructions';

export default combineReducers({
  commandInput: CommandInputReducer,
  instructions: InstructionsReducer
});
