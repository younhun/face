'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import StyleSheet from '../../styles/homeStyles'

class Home extends Component {
  render() {
    return (
      <View style={homeStyles.container}>
      	<Header
          centerComponent={{ text: 'Home', style: {color: 'black', fontSize: 20} }}
          backgroundColor='#66bb6a'
        />
      </View>
    );
  }
}

export default Home;