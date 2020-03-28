import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CommandInput from '../Components/CommandInput';
import Input from '../Components/Input';
import Button from '../Components/Button';

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
