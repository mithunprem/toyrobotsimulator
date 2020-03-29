import { INSTRUCTIONS } from './types';

export const toggleShowInstructionsFlag = toggleFlag => {
  return {
    type: INSTRUCTIONS.TOGGLE_DISPLAY,
    toggleFlag
  };
};
