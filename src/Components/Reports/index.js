import React, { Fragment } from 'react';
import CommandList from '../../Components/CommandList';
import RobotPositionReport from '../../Components/RobotPositionReport';

const Reports = ({ reportRobotStatus, robotPosition, commandList }) => {

  return (
    <Fragment>
    {
      reportRobotStatus ? <RobotPositionReport robotPosition={robotPosition} /> : ''
    }
    {
      (commandList.length > 0) ? (
        <Fragment>
          <CommandList commandList={commandList} />
        </Fragment>
      ) : ''
    }
  </Fragment>
  );
}

export default Reports;
