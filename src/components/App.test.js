import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

describe('App', () => {
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('contains a connected Wallet component', () => {
    expect(app.find('Connect(Wallet)').exists()).toBe(true);
  })

  it('contains a connected a Loot component', () => {
    expect(app.find('Connect(Loot)').exists()).toBe(true);
  });
});