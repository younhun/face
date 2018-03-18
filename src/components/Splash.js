'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';
import { connect } from 'react-redux';
import { loggedIn } from '../actions';

class Splash extends Component {

  componentDidMount(){
    AsyncStorage.getItem('user_info')
      .then(user => {
        if(user) {
          //TODO
          const userObject = JSON.parse(user);
          this.props.loggedIn(userObject);
        }else {
          this.props.navigation.navigate('Login');
        }
      })
  	
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.user){
      this.props.navigation.navigate('Homne');
    }
  }

  render() {
    return (
      <View style={ styles.container }>
      	 <ActivityIndicator size="large" color="#5c6bc0" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#66bb6a'
	}
});


const mapStateToProps = state => {
  return {
    error: state.auth.error,
    loading: state.auth.loading,
    user: state.auth.user,
  }
}

export default connect(null, { loggedIn })(Splash);
