import { COMMAND_MODULE } from './types';

export const setRobotInfo = (commandList, robotPosition, shouldReportRobotStatus) => {
  return {
    type: COMMAND_MODULE.SET,
    commandList,
    robotPosition,
    shouldReportRobotStatus
  };
};
