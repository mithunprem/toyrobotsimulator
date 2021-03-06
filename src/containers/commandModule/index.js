import React, { Component } from 'react';
import CommandInput from '../../components/commandInput';
import Reports from '../../components/reports';
import Instructions from '../../components/instructions';
import processCommand from '../../utils/commandProcessor';

export default class CommandModule extends Component {

  state = {
    commandList: [],
    robotPosition: {
      x: -1,
      y: -1,
      direction: ''
    },
    shouldReportRobotStatus: false
  }

  executeCommand = command => {
    let { commandList, robotPosition, shouldReportRobotStatus } = this.state;

    ({ commandList, robotPosition, shouldReportRobotStatus }
      = processCommand(command, commandList, robotPosition));

    this.setState({
      commandList,
      robotPosition,
      shouldReportRobotStatus
    });
  }

  render() {
    const { commandList, robotPosition, shouldReportRobotStatus } = this.state;

    return (
      <>
        <CommandInput executeCommand={this.executeCommand} />
        <hr />
        <Reports
          reportRobotStatus={shouldReportRobotStatus}
          robotPosition={robotPosition}
          commandList={commandList}
        />
        <Instructions />
      </>
    );
  }
}
