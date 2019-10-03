import React, { Component, Fragment } from 'react';
import CommandInput from '../../Components/CommandInput';
import Result from '../../Components/Result';

export default class CommandModule extends Component {

  state = {
    commandList: [],
    robotPosition: {
      x: '',
      y: '',
      direction: ''
    }
  }


  render() {
    return (
      <Fragment>
        <CommandInput/>
        <Result />
      </Fragment>
    );
  }
}
