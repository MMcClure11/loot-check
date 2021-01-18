import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { Wallet } from './Wallet';

Enzyme.configure({ adapter: new EnzymeAdapter() })

describe('Wallet', () => {
  const wallet = shallow(<Wallet />)

  it('renders properly', () => {
    expect(wallet).toMatchSnapshot();
  });
});