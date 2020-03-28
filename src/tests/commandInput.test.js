import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CommandInput from '../components/commandInput';
import Input from '../components/input';
import Button from '../components/button';

describe("CommandInput", () => {
  it("should render one Input component", () => {
    const wrapper = shallow(<CommandInput />);
    expect(wrapper.find(Input)).to.have.length(1);
  });

  it("should render one Button component", () => {
    const wrapper = shallow(<CommandInput />);
    expect(wrapper.find(Button)).to.have.length(1);
  });
});
