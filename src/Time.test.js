import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Time from './Time';

describe('<Time>', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Time />);
    });

    it('renders the time passed', () => {
        const wrapper = shallow(<Time value="09:00"/>);

        expect(wrapper.text()).be.equal("09:00");
    });
})