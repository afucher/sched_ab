import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
});

it('should have header', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('header')).to.have.length(1);
});

it('should have section', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('section')).to.have.length(1);
});
