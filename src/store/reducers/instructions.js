import { INSTRUCTIONS } from '../actions/types';

const initialState = {
  showInstructions: false
}

export default function InstructionsReducer(state = initialState, action) {
  switch (action.type) {
    case INSTRUCTIONS.TOGGLE_DISPLAY:
    return {
      ...state,
      showInstructions: action.toggleFlag
    };
    default:
      return state;
  }
}
