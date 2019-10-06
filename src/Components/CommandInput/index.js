import React, { Component, Fragment } from 'react';
import Input from '../Input';
import Button from '../Button';
import validateCommand from '../../Utils/commandValidator'
import './commandInput.scss';

export default class CommandModule extends Component {

  state = {
    command: '',
    commandError: false,
    errorMessage: ''
  }

  handleChange = (event) => {
    this.setState({
      command: event.target.value,
      commandError: false
    });
  }

  submitCommand = () => {
    const { command } = this.state;
    const [ isValidCommand, errorMessage ] = validateCommand(command);

    if (isValidCommand) {
      this.setState({ command: '' });
      this.props.executeCommand(command);
    } else {
      this.setState({
        commandError: !isValidCommand,
        errorMessage
      });
    }
  }

  render() {
    const { command, commandError, errorMessage } = this.state;

    return (
      <Fragment>
        <div className="m-3 command-wrapper">
          <div className="command-input-title">
            Command module for the toy robot simulator
          </div>
          <div className="p-3 command-input-body">
            <span className="pr-2">Enter your command here:</span>
            <div className="command-input">
              <Input
                name="commandInput"
                placeholder="Command"
                value={command}
                showError={commandError}
                errorMessage={errorMessage}
                onChange={this.handleChange} />
              <Button
                className="ml-3 btn btn-secondary btn-sm" label="Execute Command"
                onClick={this.submitCommand} disabled={commandError} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
