import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Header from './Header';

describe('<Header>', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Header />);
    });

    it( 'renders Agile Brazil logo', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img')).have.length(1);
    });
})