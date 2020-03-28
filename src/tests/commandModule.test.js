import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CommandModule from '../Containers/CommandModule';
import CommandInput from '../Components/CommandInput';
import Reports from '../Components/Reports';

describe("CommandInput", () => {
  it("should render one Command Module component", () => {
    const wrapper = shallow(<CommandModule />);
    expect(wrapper.find(CommandInput)).to.have.length(1);
  });

  it("should render the Results component when the commandList is non empty", () => {
    const commandList = [ 'Place 0,0,north', 'move', 'report'];
    const wrapper = shallow(<CommandModule />);
    wrapper.setState({ commandList });
    expect(wrapper.find(Reports)).to.have.length(1);
  });

});
