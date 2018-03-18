import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';


function Button({iconName, onPress}){
	return(
		<TouchableOpacity onPressOut={onPress}>
			<FontAwesome name={iconName} size={80} color="white" />
		</TouchableOpacity>

		);
}

Button.propTypes = {
	iconName: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired
}

export default Button;


//onPress하면 iphone에서는 release하는 순간 반응.
//onPressOut으로 해결한다.

