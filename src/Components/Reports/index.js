import React, { Fragment } from 'react';
import CommandList from '../../Components/CommandList';
import RobotPositionReport from '../../Components/RobotPositionReport';
import './reports.scss';

const Reports = ({ reportRobotStatus, robotPosition, commandList }) => {

  return (
    <Fragment>
      <div className="reports m-3">
        { reportRobotStatus ?
          <RobotPositionReport robotPosition={robotPosition} /> : ''
        }
        { commandList.length > 0 ?
          <CommandList commandList={commandList} /> : ''
        }
      </div>
    </Fragment>
  );
}

export default Reports;
