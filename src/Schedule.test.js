import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import Schedule from './Schedule';
import Time from './Time';
import Session from './Session';

const data = [{"id": 14,"title": "Title 1","room": "Room 1","level": "acquainting","start_hour" : "09:00"}];

it('renders without crashing', () => {
  const wrapper = shallow(<Schedule />);
});

it('render one time with single data', () => {
    const wrapper = mount(<Schedule data={data}/>);
    expect(wrapper.find(Time)).to.have.length(1);
});

it('render one session with single data', () => {
    const wrapper = mount(<Schedule data={data}/>);
    expect(wrapper.find(Session)).to.have.length(1);
});