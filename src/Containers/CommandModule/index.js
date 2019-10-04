import React, { Component, Fragment } from 'react';
import CommandInput from '../../Components/CommandInput';
import Report from '../../Components/Report';
import processCommand from '../../Utils/commandProcessor';

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
        <div className="command-module-wrapper">
          <CommandInput executeCommand={this.executeCommand} />
          {
            shouldReportRobotStatus ? <Report robotPosition={robotPosition} /> : ''
          }
        </div>
        <hr />
      </Fragment>
    );
  }
}
