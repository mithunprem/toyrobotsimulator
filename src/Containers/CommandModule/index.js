import React, { Component, Fragment } from 'react';
import CommandInput from '../../Components/CommandInput';
import Reports from '../../Components/Reports';
import processCommand from '../../Utils/commandProcessor';
import './commandModule.scss';

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
    let { commandList, robotPosition } = this.state;

    this.setState(
       processCommand(command, commandList, robotPosition)
    );
  }

  render() {
    const { commandList, robotPosition, shouldReportRobotStatus } = this.state;

    return (
      <Fragment>
        <CommandInput executeCommand={this.executeCommand} />
        <hr />
        <Reports
          reportRobotStatus={shouldReportRobotStatus}
          robotPosition={robotPosition}
          commandList={commandList}
        />
      </Fragment>
    );
  }
}
