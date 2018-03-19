'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { Header, Button } from 'react-native-elements';
import { ImagePicker } from 'expo';

import StyleSheet from '../../styles/homeStyles'


class Home extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    	image: null,
    };
  }

pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };


showBtnSpinner(){
	return(
		<Button 
			title="Pick an image from camera roll"
	      	onPress={ this.pickImage.bind(this) }
			backgroundColor="#98ee99"
	        color='black'
		/>
	)
}

  render() {
    return (
      <View style={ homeStyles.container }>
      	<Header
          centerComponent={{ text: 'Home', style: {color: 'black', fontSize: 20} }}
          backgroundColor='#66bb6a'
        />
     	
     	<View style={ homeStyles.btnContainer }>
     		{this.showBtnSpinner()}
     	</View>
        {this.state.image &&
          <Image source={{ uri: this.state.image }} style={{ width: 200, height: 200 }} />}
      </View>
    );
  }
}

export default Home;