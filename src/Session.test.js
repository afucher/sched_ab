import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Session from './Session';

it('renders without crashing', () => {
  const wrapper = shallow(<Session />);
});

it('has title', () => {
    let title = "Title"
    const wrapper = shallow(<Session title={title}/>);
    expect(wrapper.find('div > h2').text()).to.be.equal(title)
});

it('has roomName', () => {
    let room = "Room 1"
    const wrapper = shallow(<Session room={room}/>);
    expect(wrapper.find('div > span').text()).to.be.equal(room)
});

it('has correct default CSS class', () => {
    const wrapper = shallow(<Session />);
    expect(wrapper.find('div').hasClass("Session")).to.be.true;
});

it('has correct CSS class according to level', () => {
    let wrapper = shallow(<Session level="acquaiting"/>);
    expect(wrapper.find('div').hasClass("Session acquaiting")).to.be.true;

    wrapper = shallow(<Session level="transcending"/>);
    expect(wrapper.find('div').hasClass("Session transcending")).to.be.true;

    wrapper = shallow(<Session level="living"/>);
    expect(wrapper.find('div').hasClass("Session living")).to.be.true;
});


