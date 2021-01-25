import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { Loot } from './Loot';

Enzyme.configure({ adapter: new EnzymeAdapter() })

describe('Loot', () => {
  const loot = shallow(<Loot />);

  it('render properly', () => {
    expect(loot).toMatchSnapshot();
  });
});