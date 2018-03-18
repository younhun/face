import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Header, Button } from 'react-native-elements';

import StyleSheet from '../../styles/loginStyles'
import { login } from '../../actions';

class Login extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      usename: '',
      avatar: '',
      disabled: true
    };
  }

  onUserNameChanged(username){
    if(username && username.length > 3){
      this.setState({
        disabled: false,
        username: username
      });
    }else {
      this.setState({
        disabled: true
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.props.navigation.navigate('Home');
    }
  }

  onLoginPressed(){
    const { username, avatar } = this.state;
    this.props.login({ username, avatar });
  }

  showBtnSpinner(){
    if(this.props.loading) return <ActivityIndicator />;
    return (
        <Button
          title='Login'
          backgroundColor="#98ee99"
          color='black'
          disabled={ this.state.disabled }
          onPress={ this.onLoginPressed.bind(this) }
        />
      );
  }

  render() {
    return (
      <View style={ loginStyles.container }>
        <Header
          centerComponent={{ text: 'Login', style: {color: 'black', fontSize: 20} }}
          backgroundColor='#66bb6a'
        />
        <FormLabel> Name </FormLabel>
        <FormInput
          placeholder='Your Name'
          onChangeText={ (username) => this.onUserNameChanged(username) }
        />

        <FormLabel> Avatar </FormLabel>
        <FormInput
          placeholder='Your Avatar'
          onChangeText={ (avatar) => this.setState({avatar}) }
        />

        <View style={ loginStyles.btnContainer }>
          {this.showBtnSpinner()}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.error,
    loading: state.auth.loading,
    user: state.auth.user,
  }
}

export default connect(mapStateToProps, { login })(Login);