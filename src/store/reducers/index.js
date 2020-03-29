import { combineReducers } from 'redux';
import InstructionsReducer from './instructions';

export default combineReducers({

  instructions: InstructionsReducer
});
