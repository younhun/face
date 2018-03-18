//Redux를 설칲하고 react Reduct설치
//Redux는 react뿐만 아니라 다른 여러 곳 에서도 사용이 되기 때문이다.
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//Store생성, Middleware사용하겠다.
import { createStore, applyMiddleware } from 'redux';
//Store의 state를 복사해오기 위함
import { Provider } from 'react-redux';
//Middleware중 redux-thunk 사용
import ReduxThunk from 'redux-thunk';

import reducers from './src/reducers';
import Routes from './src/Routes';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <Routes />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


