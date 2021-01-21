After initializing the project:
yarn add react react-dom react-test-renderer jest-cli@20.0.4 enzyme --save-dev
yarn add redux react-redux sfcookies --save

We do not need to add tests for actually setting up the redux store
because this does not involve logic of components but rather setting up the project

For testing if the app was rendering the wallet component, it failed because the app was using the CONNECTED component and we could see that by adding the below debugger to the test

describe('App', () => {
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('contains a Wallet component', () => {
    console.log(app.debug());

    expect(app.find('Wallet').exists()).toBe(true);
  })
});

yarn add redux-thunk --save
yarn add redux-mock-store fetch-mock --save-dev
yarn add node-fetch #had to add this because got testing error 'cannot find module 'node-fetch' in js/server