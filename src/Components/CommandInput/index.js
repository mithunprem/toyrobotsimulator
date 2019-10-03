import React, { Component, Fragment } from 'react';
import Input from '../Input';
import SubmitButton from '../SubmitButton';
import validateCommand from '../../Utils/commandValidator'
import './commandInput.scss';

export default class CommandModule extends Component {

  state = {
    command: '',
    commandError: false
  }

  handleChange = (event) => {
    this.setState({
      command: event.target.value,
      commandError: false
    });
  }

  submitCommand = () => {
    const { command } = this.state;
    const isValidCommand = validateCommand(command);

    this.setState({ commandError: !isValidCommand });

    if (isValidCommand) {
      this.props.executeCommand(command);
    }
  }

  render() {
    const { command, commandError } = this.state;
    const inputErrorClassName = commandError ? 'has-error' : '';

    return (
      <Fragment>
        <div className="m-3 command-input-wrapper">
          <div className="command-input-title">
            Command module for the toy robot simulator
          </div>
          <div className="p-3 command-input-body">
            <Input
              label="Please enter your command here:"
              placeholder="Command"
              className={`command-input ${inputErrorClassName}`}
              value={command}
              onChange={this.handleChange} />
            <SubmitButton
              size="sm"
              disabled={commandError}
              onClick={this.submitCommand}
              label="Execute" />
          </div>
        </div>
      </Fragment>
    );
  }
}
