import { COMMAND_MODULE } from '../actions/types';

const initialState = {
  commandList: [],
  robotPosition: {
    x: -1,
    y: -1,
    direction: ''
  },
  shouldReportRobotStatus: false
}

export default function CommandModuleReducer(state = initialState, action) {
  switch (action.type) {
    case COMMAND_MODULE.SET:
      return {
        ...state,
        commandList: action.commandList,
        robotPosition: action.robotPosition,
        shouldReportRobotStatus: action.shouldReportRobotStatus
      };
    default:
      return state;
  }
}
