import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Timer from './src/components/Timer';

import reducer from './src/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; //state를 복사해오기 위함

let store = createStore(reducer); //store 생성
console.log(store.getState());

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <Timer />
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


//Redux를 설칲하고 react Reduct설치
//Redux는 react뿐만 아니라 다른 여러 곳 에서도 사용이 되기 때문이다.