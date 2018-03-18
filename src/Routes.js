import { StackNavigator } from 'react-navigation';

import Login from './components/Login';
import Splash from './components/Splash';
import Home from './components/Home';

const Routes = StackNavigator({
	Splash: {
		screen: Splash,
		navigationOptions: {
			header: false
		}
	},
	Login: {
		screen: Login,
		navigationOptions: {
			header: false,

		}
	},

	Home: {
		screen: Home,
		navigationOptions: {
			header: false
		}
	}

});

export default Routes;