After initializing the project:
yarn add react react-dom react-test-renderer jest-cli@20.0.4 enzyme --save-dev
yarn add redux react-redux sfcookies --save

We do not need to add tests for actually setting up the redux store
because this does not involve logic of components but rather setting up the project