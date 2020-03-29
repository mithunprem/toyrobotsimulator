import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCommand, setCommandError } from '../../store/actions/commandInput';
import Input from '../input';
import Button from '../button';
import validateCommand from '../../utils/commandValidator';

const mapStateToProps = state => ({
  command: state.commandInput.command,
  commandError: state.commandInput.commandError,
  errorMessage: state.commandInput.errorMessage
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    setCommand,
    setCommandError
  }, dispatch);

class CommandModule extends Component {

  handleChange = event => {
    const { setCommand, setCommandError } = this.props;
    setCommand(event.target.value);
    setCommandError(false, '');
  }

  submitCommand = () => {
    const { command, setCommand, executeCommand, setCommandError } = this.props;
    const [ isValidCommand, errorMessage ] = validateCommand(command);

    if (isValidCommand) {
      setCommand('');
      executeCommand(command);
    } else {
      setCommandError(true, errorMessage);
    }
  }

  render() {
    const { command, commandError, errorMessage } = this.props;

    return (
      <div className="command-wrapper m-3">
        <div className="command-input-title p-3">
          Command module for the toy robot simulator
        </div>
        <div className="command-input-body p-3">
          <span className="pr-2">Enter your command here:</span>
          <div className="command-input">
            <Input
              name="commandInput" placeholder="Command"
              value={command} showError={commandError}
              errorMessage={errorMessage} onChange={this.handleChange} />
            <Button
              className="ml-3 btn btn-secondary btn-sm" label="Execute Command"
              onClick={this.submitCommand} disabled={commandError} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommandModule);
