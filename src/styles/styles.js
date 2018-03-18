import { StyleSheet } from 'react-native';

export default timerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },

  upper: {
  	flex: 2,
  	alignItems: 'center',
    justifyContent: 'center',
  },

  lower: {
  	flex: 1,
  	alignItems: 'center',
    justifyContent: 'center',
  },

  time: {
  	color: 'white',
  	fontSize: 120,
  	fontWeight: "100"
  }
});