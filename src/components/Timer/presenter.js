import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from '../Button'
import StyleSheet from '../../styles/styles';


class Timer extends Component {

	render(){
		return(
			<View style={timerStyles.container}>

				<View style={timerStyles.upper}>
					<Text style={timerStyles.time}> 25:00 </Text>
				</View>
				<View style={timerStyles.upper}>
					<Button iconName="play-circle" onPress={()=>alert('it works')}  />
					<Button iconName="stop-circle" onPress={()=>alert('it works')}/>
				</View>
			</View>
			);
	}
}


export default Timer;

