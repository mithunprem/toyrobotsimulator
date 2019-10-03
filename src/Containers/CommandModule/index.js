import React, { Component, Fragment } from 'react';
import CommandInput from '../../Components/CommandInput';
import Result from '../../Components/Result';
import processCommand from '../../Utils/commandProcessor';

export default class CommandModule extends Component {

  state = {
    commandList: [],
    robotPosition: {
      x: '',
      y: '',
      direction: ''
    }
  }

  executeCommand = command => {
    const { commandList, robotPosition } = this.state;
    const updatedResult = processCommand(command, commandList, robotPosition);
    this.setState({
      commandList: updatedResult.commandList,
      robotPosition: updatedResult.position
    })

  }

  render() {
    return (
      <Fragment>
        <CommandInput executeCommand={this.executeCommand}/>
        <Result />
      </Fragment>
    );
  }
}
